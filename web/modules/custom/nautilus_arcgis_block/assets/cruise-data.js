import {asGraphicsLayer} from './util/layers.js';

(function ($, Drupal) {
    const MAP_CONTAINER_ID = 'cruise-data-map-container';
    const MAP_LEGEND_ID = 'map-legend';
    const OET_CRUISES_MASTER_PORTAL_ITEM_ID = '29a7597cb7174df085edd33ac8613a43';
    const ESRI_MODULES = [
        'esri/Basemap',
        'esri/WebMap',
        'esri/layers/FeatureLayer',
        'esri/views/MapView',
        'esri/widgets/Expand',
        'esri/widgets/Fullscreen',
        'esri/widgets/LayerList',
        'esri/widgets/Legend',
    ];

    async function startApp({cruiseName}, modules) {
        const {Basemap, WebMap, Expand, FeatureLayer, Fullscreen, LayerList, Legend, MapView} = modules;
        // Current cruise from Nautilus Live website settings.
        console.log(`Cruise: ${cruiseName} from cruise page context`);

        const shipTrack = await asGraphicsLayer(new FeatureLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `cruise = '${cruiseName}'`,
            layerId: 11,
            opacity: 1,
        }), {
            renderer: {
                symbol: {
                    color: '#990000', // dark red
                    style: 'solid',
                    type: 'simple-line',
                },
                type: 'simple',
            },
        });
        const vehicleTracks = await asGraphicsLayer(new FeatureLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `cruise = '${cruiseName}'`,
            layerId: 10,
            opacity: 1,
        }));

        const mappingFootprints = await asGraphicsLayer(new FeatureLayer({
            portalItem: {
                id: OET_CRUISES_MASTER_PORTAL_ITEM_ID,
            },
            definitionExpression: `SurveyID = '${cruiseName}'`,
            layerId: 12,
            opacity: 1,
        }));

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
            view: view,
        });
        view.ui.add(layerListExpand, 'top-right');
        new Legend({container: document.getElementById(MAP_LEGEND_ID), view});

        await webmap.load();
        view.zoom = view.zoom - 1; // zoom out a little to better view all features on load
        return true;
    }

    Drupal.behaviors.cruiseData = {
        async attach(context, settings) {
            const imports = await requireModules(ESRI_MODULES);
            try {
                const mapRendered = await startApp(settings, imports);
                        if (!mapRendered) {
                            $(MAP_CONTAINER_ID).attr('data-drupal-messages', true)
                            const messenger = new Drupal.Message();
                            messenger.add(`No map data available for ${settings.cruiseName}`, {type: 'error'});
                        }
            } catch (err) {
                console.error('Failed to start app', err);
            }
        }
    };
})(jQuery, Drupal);