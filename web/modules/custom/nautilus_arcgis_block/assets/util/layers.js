import {requireModules} from './imports.js';

const {FeatureLayer, Graphic, Polyline} = await requireModules([
    'esri/layers/FeatureLayer',
    'esri/Graphic',
    'esri/geometry/Polyline'
]);

const POLYLINE_GEOMETRY_TYPE_NAME = new Polyline().type;

export async function asGraphicsLayer(layer, options = {}) {
    if (!(layer instanceof FeatureLayer)) {
        layer = new FeatureLayer(layer);
    }
    await layer.load();
    let query = layer.createQuery();
    query.where = layer.definitionExpression;
    const {features, fields, geometryType, spatialReference} = await layer.queryFeatures(query);
    const graphics = await Promise.all(features.map(createGraphic));
    const graphicsLayer = new FeatureLayer({
        fields,
        geometryType,
        popupTemplate: layer.popupTemplate,
        renderer: layer.renderer,
        source: graphics,
        spatialReference,
        title: layer.title.replace('OET Cruises master CCOM configured - ', ''),
        ...options,
    });
    graphicsLayer.sourceLayer = layer; // store the source layer so the graphicsLayer can be updated as needed
    return graphicsLayer;
}

async function createGraphic({attributes, geometry}) {
    if (geometry.type == POLYLINE_GEOMETRY_TYPE_NAME) {
        geometry = fixPolylineIfCrossingIntlDateline(geometry);
    }
    return new Graphic({attributes, geometry});
}

function fixPolylineIfCrossingIntlDateline(polyline) {
    const paths = [];
    for (let path of polyline.paths) {
        let currentPath = [];
        paths.push(currentPath);
        for (const coord of path) {
            const lastCoord = currentPath.at(-1);
            const [lastX, lastY] = lastCoord ?? [];
            const [nextX, nextY] = coord;
            if ((lastX > 0 && nextX < 0) || (lastX < 0 && nextX > 0)) {
                const midY = lastY + ((nextY - lastY) / 2);
                // The new vertex is on the other side of the intl dateline from the previous vertices.
                // Do these things:
                // 1. Add a dynamically computed vertex at the dateline and halfway between the Y-coordinate
                //  of the last vertex and the Y-coordinate of the new vertex
                currentPath.push([lastX > 0 ? 180 : -180, midY])

                // 2. Add a new path to contain the vertices on the other side of the dateline
                //  to get around rendering issues of lines that cross the dateline
                // 3. Populate the new path with a dynamically computed vertex at the dateline and halfway between
                //  the Y-coordinate of the last vertex and the Y-coordinate of the new vertex,
                //  and also the new/current vertex.
                currentPath = [[nextX > 0 ? 180 : -180, midY], coord]
                paths.push(currentPath);
            } else {
                currentPath.push(coord);
            }
        }
    }
    polyline.paths = paths;
    return polyline;
}