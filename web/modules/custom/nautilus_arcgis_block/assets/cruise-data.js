(function ($, Drupal) {
    const MAP_CONTAINER_ID = 'cruise-data-map-container';
    const MAP_LEGEND_ID = 'map-legend';
    const OET_CRUISES_MASTER_PORTAL_ITEM_ID = '29a7597cb7174df085edd33ac8613a43';
    const ESRI_MODULES = [
        'esri/Basemap',
        'esri/Graphic',
        'esri/WebMap',
        'esri/layers/FeatureLayer',
        'esri/views/MapView',
        'esri/widgets/Expand',
        'esri/widgets/Fullscreen',
        'esri/widgets/LayerList',
    ];

    async function startApp({cruiseName}, modules) {
        const {Basemap, WebMap, Expand, FeatureLayer, Fullscreen, Graphic, LayerList, MapView} = modules;
        // Current cruise from Nautilus Live website settings.
        console.log(`Cruise: ${cruiseName} from cruise page context`);

        async function asGraphicsLayer(layer, options = {}) {
            await layer.load();
            let query = layer.createQuery();
            query.where = layer.definitionExpression;
            const {features, fields, geometryType, spatialReference} = await layer.queryFeatures(query);
            const graphics = features.map(({attributes, geometry}) => new Graphic({attributes: attributes, geometry}));
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
            return graphicsLayer;
        }

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

        await webmap.load();
        view.zoom = view.zoom - 1; // zoom out a little to better view all features on load
    }

    Drupal.behaviors.cruiseData = {
        attach(context, settings) {
            try {
                require(ESRI_MODULES, function(...imports) {
                    // Create an object mapping the imports to their module name so that we don't have to keep track
                    // of load order
                    const importMapping = imports.reduce((memo, item, idx) => {
                        const moduleName = ESRI_MODULES[idx].split('/').pop();
                        memo[moduleName] = item
                        return memo;
                    }, {});
                    startApp(settings, importMapping);
                });
            } catch (err) {
                console.error('Failed to start app', err);
            }
        }
    };
})(jQuery, Drupal);