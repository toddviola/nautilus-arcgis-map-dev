"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[769],{90769:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});t(14309);var s=t(89044),o=t(19085),i=t(54208),l=t(95808),n=t(61236),a=t(48125),c=t(78935),m=t(36779),f=t(97853),u=t(11969),p=t(96010),S=t(57116),d=t(38431);class h{convertVectorFieldData(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,m.FI)(r,e.type);return Promise.resolve(null!=t?t.toJSON():null)}computeStatisticsHistograms(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,c.eH)(r);return Promise.resolve(t)}async decode(e){const r=await(0,i.D)(e.data,e.options);return r&&r.toJSON()}symbolize(e){e.pixelBlock=o.A.fromJSON(e.pixelBlock),e.extent=e.extent?S.A.fromJSON(e.extent):null;const r=this.symbolizer.symbolize(e);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(e){this.symbolizer=u.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,n.vt)(e.rasterFunctionJSON)}async process(e){const r=this.rasterFunction.process({extent:S.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?o.A.fromJSON(e):null)),primaryPixelSizes:e.primaryPixelSizes?.map((e=>null!=e?d.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=r?r.toJSON():null}stretch(e){const r=this.symbolizer.simpleStretch(o.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r?.toJSON())}estimateStatisticsHistograms(e){const r=(0,c.f4)(o.A.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=(0,l.lD)(o.A.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,!1===e.useBilinear);return r&&r.forEach(((e,t)=>{r.set(t,e?.toJSON())})),Promise.resolve(r)}clipTile(e){const r=o.A.fromJSON(e.pixelBlock),t=(0,l.J$)({...e,pixelBlock:r});return Promise.resolve(t?.toJSON())}async mosaicAndTransform(e){const r=e.srcPixelBlocks.map((e=>e?new o.A(e):null)),t=(0,l.z7)(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let s,i=t;return e.coefs&&(i=(0,l.$i)(t,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=(0,l.QF)(e.destDimension,e.gcsGrid),i=(0,m.Y2)(i,e.isUV?"vector-uv":"vector-magdir",s)),{pixelBlock:i?.toJSON(),localNorthDirections:s}}async createFlowMesh(e,r){const t={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,p.CW)(e.meshType,e.simulationSettings,t,r.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const r=S.A.fromJSON(e.projectedExtent),t=S.A.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,a.xh)(r.spatialReference,t.spatialReference,o))&&await(0,a.Hh)();const i=e.rasterTransform?(0,f.l)(e.rasterTransform):null;return(0,a.l0)({...e,projectedExtent:r,srcBufferExtent:t,datumTransformation:o,rasterTransform:i})}}}}]);