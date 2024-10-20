import {requireModules} from './util/imports.js';
import {asGraphicsLayer} from './util/layers.js';

(function ($, Drupal) {
    const MAP_CONTAINER_ID = 'cruise-data-map-container';
    const OET_CRUISES_MASTER_PORTAL_ITEM_ID = '29a7597cb7174df085edd33ac8613a43';
    const ESRI_MODULES = [
        'esri/Basemap',
        'esri/WebMap',
        'esri/views/MapView',
        'esri/widgets/Expand',
        'esri/widgets/Fullscreen',
        'esri/widgets/LayerList',
        'esri/widgets/Legend',
    ];

    async function renderMap(cruiseName, {
        Basemap,
        Expand,
        Fullscreen,
        LayerList,
        Legend,
        MapView,
        WebMap,
    }) {
        const shipTrack = await asGraphicsLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `cruise = '${cruiseName}'`,
            layerId: 11,
            opacity: 1,
        }, {
            renderer: {
                symbol: {
                    color: '#990000', // dark red
                    style: 'solid',
                    type: 'simple-line',
                },
                type: 'simple',
            },
        });
        const vehicleTracks = await asGraphicsLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `cruise = '${cruiseName}'`,
            layerId: 10,
            opacity: 1,
        });

        const mappingFootprints = await asGraphicsLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `SurveyID = '${cruiseName}'`,
            layerId: 12,
            opacity: 1,
        });

        // Only include layers that have some features in them
        const layers = [];
        for (const layer of [mappingFootprints, shipTrack, vehicleTracks]) {
            if (await layer.queryFeatureCount()) {
                layers.push(layer);
            }
        }

        if (layers.length == 0) {
            // There's nothing to display on a map.
            return false;
        }

        async function fullExtent() {
            const {extent} = await shipTrack.queryExtent();
            return extent;
        }

        const webmap = new WebMap({
            basemap: Basemap.fromId('oceans'),
            layers,
        });
        const view = new MapView({
            container: MAP_CONTAINER_ID,
            extent: await fullExtent(),
            map: webmap,
        });

        view.ui.add(new Fullscreen({view}), 'top-right');
        const layerList = new LayerList({
            container: document.createElement('div'),
            view: view
        });
        const layerListExpand = new Expand({
            content: layerList,
            expandIcon: 'layers',  // see https://developers.arcgis.com/calcite-design-system/icons/
            expandTooltip: 'Show Layer List',
            view,
        });
        view.ui.add(layerListExpand, 'top-right');

        const legend = new Legend({
            container: document.createElement('div'),
            view,
        });
        const legendExpand = new Expand({
            content: legend,
            expandIcon: 'legend',
            expandTooltip: 'Show Legend',
            view,
        });
        view.ui.add(legendExpand, 'top-right');

        await webmap.load();
        view.zoom = view.zoom - 1; // zoom out a little to better view all features on load
        return true;
    }

    async function startApp({cruiseName}, modules) {
        // Current cruise from Nautilus Live website settings.
        console.log(`Cruise: ${cruiseName} from cruise page context`);

        const mapRendered = await renderMap(cruiseName, modules);
        if (!mapRendered) {
            const messenger = new Drupal.Message();
            messenger.add(`No map data available for ${cruiseName}`, {type: 'error'});
        }
    }

    Drupal.behaviors.cruiseData = {
        async attach(context, settings) {
            const imports = await requireModules(ESRI_MODULES);
            try {
                await startApp(settings, imports);
            } catch (err) {
                console.error('Failed to start app', err);
            }
        }
    };
})(jQuery, Drupal);