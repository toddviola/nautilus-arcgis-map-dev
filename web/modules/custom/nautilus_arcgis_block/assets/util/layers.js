import {requireModules} from './imports.js';

const {FeatureLayer, Graphic, Polyline} = await requireModules([
    'esri/layers/FeatureLayer',
    'esri/Graphic',
]);

export async function asGraphicsLayer(layer, options = {}) {
    if (!(layer instanceof FeatureLayer)) {
        layer = new FeatureLayer(layer);
    }
    await layer.load();
    let query = layer.createQuery();
    query.where = layer.definitionExpression;
    const {features, fields, geometryType, spatialReference} = await layer.queryFeatures(query);
    const graphics = features.map(({attributes, geometry}) => new Graphic({attributes, geometry}));
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
