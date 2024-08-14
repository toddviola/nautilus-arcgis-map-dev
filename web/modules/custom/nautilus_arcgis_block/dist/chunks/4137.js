"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[4137],{74137:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(51819),n=r(75899),s=r(8397),l=r(63948),i=r(11545),o=r(92328),c=r(50616),u=r(79942);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,c=await async function(e,a){let r=(0,s.qg)(e);if(null==r&&(r=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a});let t=null,l=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",l=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":w(r)?(t="SceneServer",l=r.id):r.hasOwnProperty("layers")&&w(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=l?(0,s.iz)(e):null;return{title:null!=o&&r.name||(0,n.e7)(e),serverType:t,sublayer:l,url:{path:null!=o?o.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let f;const m={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},p="FeatureServer"===c,b="SceneServer"===c,v={parsedUrl:r,Constructor:null,layerId:p||b?d??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":f=null!=d?"FeatureLayer":await async function(e,a){return(await(0,u.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.V)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.XX[e]&&(f=o.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,u.V)(e,{customParameters:a});v.sourceJSON=r,"Oriented Imagery Layer"===r.type&&(f="OrientedImageryLayer")}break;default:f=m[c]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,s=!1;switch(a){case"FeatureServer":{const a=await(0,i.Q)(e,{customParameters:r});s=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,l.L)(e),n=await(0,u.V)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,u.V)(e,{customParameters:r})}const o=t?.layers,c=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:s?o:[],tableInfos:s?c:[]}}(e,c,a);if(p&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,p&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){const a=[],r=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(a.push(t),r.push(h("OrientedImageryLayer"))):(a.push(t),r.push(h("FeatureLayer")))})),!r.length)return;const t=await Promise.all(r),n=new Map;return a.forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(p||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,p&&"Oriented Imagery Layer"===e?.type&&(f="OrientedImageryLayer")}}return v.Constructor=await h(f),v}(e.url,a),d={...e.properties,url:e.url};if(c.layers.length+c.tables.length===0)return null!=c.layerId&&(d.layerId=c.layerId),null!=c.sourceJSON&&(d.sourceJSON=c.sourceJSON),new c.Constructor(d);const m=new(0,(await r.e(9524).then(r.bind(r,79524))).default)({title:c.parsedUrl.title});return await async function(e,a,r){function t(e,a,t,n){const s={...r,layerId:a,sublayerTitleMode:"service-name"};return null!=e&&(s.url=e),null!=t&&(s.sourceJSON=t),n(s)}const n=a.sublayerConstructorProvider;for(const{id:r,serverUrl:s}of a.layers){const l=f(a.sublayerInfos,r),i=(l&&n?.(l))??a.Constructor,o=t(s,r,l,(e=>new i(e)));e.add(o)}if(a.tables.length){const r=await h("FeatureLayer");a.tables.forEach((({id:n,serverUrl:s})=>{const l=t(s,n,f(a.tableInfos,n),(e=>new r(e)));e.tables.add(l)}))}}(m,c,d),m}function f(e,a){return e?e.find((e=>e.id===a)):null}function w(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function h(e){return(0,c.S[e])()}},63948:(e,a,r)=>{r.d(a,{L:()=>u});var t=r(11988),n=r(1968),s=r(51819),l=r(66011),i=r(8397),o=r(23641),c=r(95357);async function u(e,a){const r=(0,i.qg)(e);if(!r)throw new s.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,l.QP)(e)}return null}(e);null!=s&&(r.portal=new o.A({url:s}));try{return r.load({signal:e.signal})}catch(e){return(0,l.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new c.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,l.QP)(e),null}}(u);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const w=await d(f.url,u);return w.portalItem=f,w}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.qg)(e);if(!r)throw new s.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,l=a.layerId;if(null==l)return{serverUrl:t};const o=y(a),c=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},f=d("anonymous").catch((()=>d("no-prompt"))),[w,h]=await Promise.all([f,o]),m=h?.layers,p=w.data&&w.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(m)){for(let e=0;e<Math.min(m.length,p.length);e++)if(m[e].id===l)return{serverUrl:t,layerId:p[e].id}}else if(null!=l&&l<p.length)return{serverUrl:t,layerId:p[l].id};throw new Error("could not find matching associated sublayer")}},11545:(e,a,r)=>{r.d(a,{Q:()=>n});var t=r(79942);async function n(e,a){const{loadContext:r,...n}=a||{},s=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);u(s),i(s);const l={serviceJSON:s};if((s.currentVersion??0)<10.5)return l;const o=`${e}/layers`,c=r?await r.fetchServiceMetadata(o,n):await(0,t.V)(o,n);return u(c),i(c),l.layersJSON={layers:c.layers,tables:c.tables},l}function s(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function l(e){return"Table"===e.type}function i(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(l)}function o(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function u(e){e.layers?.forEach(o),e.tables?.forEach(c)}},50616:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await r.e(317).then(r.bind(r,90317))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(7535),r.e(2511),r.e(59),r.e(8913),r.e(5792)]).then(r.bind(r,15792))).default,CatalogLayer:async()=>(await Promise.all([r.e(4238),r.e(7344)]).then(r.bind(r,37344))).default,CSVLayer:async()=>(await r.e(8728).then(r.bind(r,78728))).default,DimensionLayer:async()=>(await r.e(8411).then(r.bind(r,88411))).default,ElevationLayer:async()=>(await r.e(3730).then(r.bind(r,33730))).default,FeatureLayer:async()=>(await Promise.resolve().then(r.bind(r,1046))).default,GeoJSONLayer:async()=>(await r.e(5137).then(r.bind(r,75137))).default,GeoRSSLayer:async()=>(await r.e(4800).then(r.bind(r,4800))).default,GroupLayer:async()=>(await r.e(9524).then(r.bind(r,79524))).default,ImageryLayer:async()=>(await Promise.all([r.e(1864),r.e(3420),r.e(2734),r.e(6475)]).then(r.bind(r,16475))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1864),r.e(3420),r.e(7686),r.e(2734),r.e(1668)]).then(r.bind(r,41668))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(59),r.e(2982)]).then(r.bind(r,42982))).default,KMLLayer:async()=>(await r.e(6977).then(r.bind(r,6977))).default,LineOfSightLayer:async()=>(await r.e(6154).then(r.bind(r,26154))).default,LinkChartLayer:async()=>(await Promise.all([r.e(5963),r.e(2549),r.e(1546),r.e(7152),r.e(9989),r.e(9421)]).then(r.bind(r,34777))).default,MapImageLayer:async()=>(await Promise.resolve().then(r.bind(r,94016))).default,MapNotesLayer:async()=>(await r.e(816).then(r.bind(r,20816))).default,MediaLayer:async()=>(await r.e(129).then(r.bind(r,60129))).default,OGCFeatureLayer:async()=>(await r.e(9422).then(r.bind(r,27041))).default,OpenStreetMapLayer:async()=>(await r.e(4474).then(r.bind(r,14474))).default,OrientedImageryLayer:async()=>(await r.e(2320).then(r.bind(r,92320))).default,PointCloudLayer:async()=>(await r.e(3066).then(r.bind(r,23066))).default,RouteLayer:async()=>(await Promise.all([r.e(1156),r.e(3722)]).then(r.bind(r,33722))).default,SceneLayer:async()=>(await Promise.all([r.e(7535),r.e(5910),r.e(2511),r.e(59),r.e(8913),r.e(5720),r.e(4896)]).then(r.bind(r,84896))).default,StreamLayer:async()=>(await r.e(5717).then(r.bind(r,45717))).default,SubtypeGroupLayer:async()=>(await r.e(5885).then(r.bind(r,45885))).default,TileLayer:async()=>(await r.e(9485).then(r.bind(r,79485))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(8019).then(r.bind(r,78019))).default,UnknownLayer:async()=>(await r.e(7197).then(r.bind(r,57197))).default,UnsupportedLayer:async()=>(await r.e(8070).then(r.bind(r,78070))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6918),r.e(3229)]).then(r.bind(r,85494))).default,VoxelLayer:async()=>(await r.e(8642).then(r.bind(r,78642))).default,WFSLayer:async()=>(await r.e(6835).then(r.bind(r,66835))).default,WMSLayer:async()=>(await r.e(1284).then(r.bind(r,51284))).default,WMTSLayer:async()=>(await r.e(9221).then(r.bind(r,49221))).default,WebTileLayer:async()=>(await r.e(5193).then(r.bind(r,45193))).default}},79942:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(1968);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);