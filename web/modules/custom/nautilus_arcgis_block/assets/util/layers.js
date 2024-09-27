const [Graphic, FeatureLayer] = await new Promise(resolve => {
    require(['esri/Graphic', 'esri/layers/FeatureLayer'], (...imports) => resolve(imports));
});

export async function asGraphicsLayer(layer, options = {}) {
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
