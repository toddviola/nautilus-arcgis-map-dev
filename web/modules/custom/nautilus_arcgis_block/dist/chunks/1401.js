"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[1401],{66282:(e,t,s)=>{function i(){return new Float32Array(3)}function r(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function n(e,t,s){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=s,i}function o(){return i()}function a(){return n(1,1,1)}function h(){return n(1,0,0)}function c(){return n(0,1,0)}function u(){return n(0,0,1)}s.d(t,{fA:()=>n,o8:()=>r,vt:()=>i});const l=o(),d=a(),p=h(),m=c(),_=u();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:p,UNIT_Y:m,UNIT_Z:_,ZEROS:l,clone:r,create:i,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:n,ones:a,unitX:h,unitY:c,unitZ:u,zeros:o},Symbol.toStringTag,{value:"Module"}))},79631:(e,t,s)=>{s.d(t,{b3:()=>l,jZ:()=>u});var i=s(62274),r=s(11960),n=s(9756),o=s(96777),a=s(67593),h=s(78025),c=s(85204);function u(e){return d(e,!0)}function l(e){return d(e,!1)}function d(e,t){if(null==e)return null;const s=e.spatialReference,r=(0,c.Vp)(s),o=(0,i.Wj)(e)?e.toJSON():e;if(!r)return o;const u=(0,c.K8)(s)?102100:4326,l=h.j7[u].maxX,d=h.j7[u].minX;if((0,a.fT)(o))return m(o,l,d);if((0,a.U9)(o))return o.points=o.points.map((e=>m(e,l,d))),o;if((0,a.ZC)(o))return p(o,r);if((0,a.Bi)(o)||(0,a.Rg)(o)){const e=(0,n.Rg)(x,o),s={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,h.kd)(s.xmin,d)*(2*l),r=0===i?o:(0,h.kS)(o,i);return s.xmin+=i,s.xmax+=i,s.xmax>l?g(r,l,t):s.xmin<d?g(r,d,t):r}return o}function p(e,t){if(!t)return e;const s=function(e,t){const s=[],{ymin:i,ymax:r,xmin:n,xmax:o}=e,a=e.xmax-e.xmin,[h,c]=t.valid,{x:u,frameId:l}=_(e.xmin,t),{x:d,frameId:p}=_(e.xmax,t),m=u===d&&a>0;if(a>2*c){const e={xmin:n<o?u:d,ymin:i,xmax:c,ymax:r},t={xmin:h,ymin:i,xmax:n<o?d:u,ymax:r},a={xmin:0,ymin:i,xmax:c,ymax:r},m={xmin:h,ymin:i,xmax:0,ymax:r},_=[],f=[];y(e,a)&&_.push(l),y(e,m)&&f.push(l),y(t,a)&&_.push(p),y(t,m)&&f.push(p);for(let e=l+1;e<p;e++)_.push(e),f.push(e);s.push(new b(e,[l]),new b(t,[p]),new b(a,_),new b(m,f))}else u>d||m?s.push(new b({xmin:u,ymin:i,xmax:c,ymax:r},[l]),new b({xmin:h,ymin:i,xmax:d,ymax:r},[p])):s.push(new b({xmin:u,ymin:i,xmax:d,ymax:r},[l]));return s}(e,t).map((e=>e.extent));return s.length<2?s[0]||e:s.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:s.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function m(e,t,s){if(Array.isArray(e)){const i=e[0];if(i>t){const s=(0,h.kd)(i,t);e[0]=i+s*(-2*t)}else if(i<s){const t=(0,h.kd)(i,s);e[0]=i+t*(-2*s)}}else{const i=e.x;if(i>t){const s=(0,h.kd)(i,t);e.x+=s*(-2*t)}else if(i<s){const t=(0,h.kd)(i,s);e.x+=t*(-2*s)}}return e}function _(e,t){const[s,i]=t.valid,r=2*i;let n,o=0;return e>i?(n=Math.ceil(Math.abs(e-i)/r),e-=n*r,o=n):e<s&&(n=Math.ceil(Math.abs(e-s)/r),e+=n*r,o=-n),{x:e,frameId:o}}function y(e,t){const{xmin:s,ymin:i,xmax:r,ymax:n}=t;return f(e,s,i)&&f(e,s,n)&&f(e,r,n)&&f(e,r,i)}function f(e,t,s){return t>=e.xmin&&t<=e.xmax&&s>=e.ymin&&s<=e.ymax}function g(e,t,s=!0){const i=!(0,a.Rg)(e);if(i&&(0,o.m3)(e),s)return(new w).cut(e,t);const r=i?e.rings:e.paths,n=i?4:2,h=r.length,c=-2*t;for(let e=0;e<h;e++){const t=r[e];if(t&&t.length>=n){const e=[];for(const s of t)e.push([s[0]+c,s[1]]);r.push(e)}}return i?e.rings=r:e.paths=r,e}class b{constructor(e,t){this.extent=e,this.frameIds=t}}const x=(0,r.vt)();class w{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let s;if(this._xCut=t,e.rings)this._closed=!0,s=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,s=e.paths,this._minPts=2}for(const e of s){if(!e||e.length<this._minPts)continue;let t=!0;for(const s of e)t?(this.moveTo(s),t=!1):this.lineTo(s);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&s.push(e);const i=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=i;s.push(e)}return this._closed?e.rings=s:e.paths=s,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const s=this._intersect(this._prevPt,e);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,s){this._closed?(this._lineIn.push([s<=0?e:this._xCut,t]),this._lineOut.push([s>=0?e:this._xCut,t])):(s<=0&&this._lineIn.push([e,t]),s>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,s){this._closed?(this._addPolyVertex(this._lineIn,s<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,s>=0?e:this._xCut,t)):s<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):s>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_addPolyVertex(e,t,s){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=s:e.push([t,s])}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const s=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+s*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},43554:(e,t,s)=>{s.d(t,{A:()=>se});var i=s(90252),r=s(76881),n=s(16291),o=s(22333),a=s(77901),h=s(7929),c=s(66011),u=s(25237),l=s(17134),d=(s(60249),s(59585)),p=s(11960),m=s(67593),_=s(99999),y=s(79800),f=s(82714),g=s(58789),b=s(15238),x=s(40863),w=s(84920),I=s(38990),v=s(19911),S=s(17384);var T=s(34355),R=s(84377),M=s(76523),C=s(61350),A=s(9142),G=s(30247),O=s(53124),P=s(85633),k=s(68517),z=s(27267);class U extends z.Y{static from(e,t,s){return new U(e,t,s)}constructor(e,t,s){super(s),this._items=e,this._tile=t,this._index=-1,this._cachedGeometry=null;const i=t.lod;i.wrap&&(this._wrappingInfo={worldSizeX:i.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(e){return null!=this._current.attributes[e]}field(e){return this.readAttribute(e)}get geometryType(){const e=(0,m.$B)(this._current.geometry);return"esriGeometryPoint"===e?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){const e=new U(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(const t in this._current.attributes)e+=this._current.attributes[t];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=(0,P.Ux)(this._current.projectedGeometry,this.hasZ,this.hasM);if("esriGeometryPolyline"===this.geometryType&&(e=(0,P.kz)(new k.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=(0,P.Nl)(new k.A,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;const{worldSizeX:t}=this._wrappingInfo;if(e.isPoint)return 1===t?(e.coords.push(b.CQ,0),e.coords.push(2*-b.CQ,0),void e.lengths.push(3)):2===t?(e.coords.push(2*b.CQ,0),e.coords.push(4*-b.CQ,0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,t);if("esriGeometryMultipoint"!==this.geometryType);else{if(1===t){const t=e.coords.slice();t[0]-=512;const s=e.coords.slice();s[0]+=512,e.coords.push(...t,...s);const i=e.lengths[0];return void e.lengths.push(i,i)}this._wrapVertex(e.coords,0,2,t)}}_wrapVertex(e,t,s,i){const r=t*s,n=e[r];n<-b.CQ*(i-2)?e[r]=n+b.CQ*i:n>b.CQ*(i-1)&&(e[r]=n-b.CQ*i)}_readX(){const e=this._readGeometry();return null!=e?e.coords[0]:0}_readY(){const e=this._readGeometry();return null!=e?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const e=(0,O.l8)(this._current.projectedGeometry),t=new k.A([],e);return(0,P.Nl)(new k.A,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e=this._current.projectedGeometry,t=(0,O.S8)(e.paths,this.hasZ),s=new k.A([],t);return(0,P.Nl)(new k.A,s,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,t){const s=this._current.attributes[e];if(void 0!==s)return s;const i=e.toLowerCase();for(const e in this._current.attributes)if(e.toLowerCase()===i)return this._current.attributes[e]}_readAttributes(){return this._current.attributes}}var Z=s(49968),V=s(75368),j=s(9756),E=s(16717),F=s(85204),L=s(34972),q=s(96777),D=s(79631),$=s(86041),N=s(97540);s(81597);function Q(e){if(!e)return null;const{xmin:t,ymin:s,xmax:i,ymax:r,spatialReference:n}=e;return new N.A({rings:[[[t,s],[t,r],[i,r],[i,s],[t,s]]],spatialReference:n})}class H{static fromGraphic(e,t,s,i){return new H(e.geometry,t,e.attributes,e.visible,e.uid,s,i)}constructor(e,t,s,i,r,n,o){this.geometry=e,this.symbol=t,this.attributes=s,this.visible=i,this.objectId=r,this.zOrder=n,this.displayId=o,this.bounds=(0,p.vt)(),this.prevBounds=(0,p.vt)(),this.size=[0,0,0,0]}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}update(e,t,s){return(this.geometry!==e.geometry||this.attributes!==e.attributes||this.symbol!==t||this.zOrder!==s||this.visible!==e.visible)&&(this.prevBounds=this.bounds,this.bounds=(0,p.vt)(),this.zOrder=s,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=t,this.visible=e.visible,this.symbolResource=null,this.projectedGeometry=null,!0)}async projectAndNormalize(e){let t=this.geometry;if(!t||!t.spatialReference||"mesh"===t.type)return;"extent"===t.type&&(t=Q(t)),await(0,$.Nk)(t.spatialReference,e);const s=(0,D.b3)(t);if(!s)return;const i=(0,$.Cv)(s,t.spatialReference,e);i&&(0,q.uC)(i),this.projectedGeometry=(0,m.ZC)(i)?Q(i):i}}class B{constructor(e,t,s){this.added=e,this.updated=t,this.removed=s}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}const W=1e-5;function X(e,t){return t.zOrder-e.zOrder}class Y{constructor(e,t,s,i,r){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new L.CK(t),this._tileInfoView=s,this._store=r;const n=s.getClosestInfoForScale(i);this._resolution=this._tileInfoView.getTileResolution(n.level)}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t,s){const i=[],r=[],n=[],o=new Set,a=[];let h=0;for(const n of e.items){h++;const e=n.uid,c=this._items.get(e),u=t(n);if(o.add(e),c){c.update(n,u,h)&&(r.push(c),a.push(this._updateItem(c,s)));continue}const l=this._store.createDisplayIdForObjectId(e),d=H.fromGraphic(n,u,h,l);a.push(this._updateItem(d,s)),this._items.set(d.objectId,d),i.push(d)}for(const[e,t]of this._items.entries())o.has(e)||(this._store.releaseDisplayIdForObjectId(e),this._items.delete(e),n.push(t));return await Promise.all(a),this._index=null,new B(i,r,n)}updateLevel(e){this._resolution!==e&&(this._index=null,this._boundsDirty=!0,this._resolution=e)}hitTest(e,t,s,i,r){const n=(0,o.A)("esri-mobile"),a=(0,o.A)(n?"hittest-2d-mobile-tolerance":"hittest-2d-desktop-tolerance"),h=a+(n?0:(0,o.A)("hittest-2d-small-symbol-tolerance"));e=(0,E.mT)(e,this._tileInfoView.spatialReference);const c=i*window.devicePixelRatio*h,u=(0,p.vt)();u[0]=e-c,u[1]=t-c,u[2]=e+c,u[3]=t+c;const l=i*window.devicePixelRatio*a,d=(0,p.vt)();d[0]=e-l,d[1]=t-l,d[2]=e+l,d[3]=t+l;const m=.5*i*(h+50),_=this._searchIndex(e-m,t-m,e+m,t+m);if(!_||0===_.length)return[];const y=[],f=(0,p.vt)(),g=(0,p.vt)();for(const e of _){if(!e.visible)continue;const{projectedGeometry:t,symbolResource:s}=e;this._getSymbolBounds(f,s,t,g,r),g[3]=g[2]=g[1]=g[0]=0,(0,p.HY)(f,u)&&y.push(e)}if(0===y.length)return[];const b=this._hittestDrawHelper,x=[];for(const e of y){const{projectedGeometry:t,symbolResource:s}=e;if(!s)continue;const{textInfo:n,symbolInfo:o}=s,a=o.cimSymbol;b.hitTest(d,a.symbol,t,n,r,i)&&x.push(e)}return x.sort(X),x.map((e=>e.objectId))}queryItems(e){return 0===this._items.size?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);const{size:s}=e;s[0]=s[1]=s[2]=s[3]=0,this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0)}_searchIndex(e,t,s,i){return this._boundsDirty&&(this._items.forEach((e=>this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0))),this._boundsDirty=!1),this._index||(this._index=(0,V.r)(9,(e=>({minX:e.bounds[0],minY:e.bounds[1],maxX:e.bounds[2],maxY:e.bounds[3]}))),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:t,maxX:s,maxY:i})}_searchForItems(e){const t=this._tileInfoView.spatialReference,s=e.bounds,i=(0,F.Vp)(t);if(i&&t.isWrappable){const[t,r]=i.valid,n=Math.abs(s[2]-r)<W,o=Math.abs(s[0]-t)<W;if((!n||!o)&&(n||o)){const i=e.resolution;let o;o=(0,p.vt)(n?[t,s[1],t+50*i,s[3]]:[r-50*i,s[1],r,s[3]]);const a=this._searchIndex(s[0],s[1],s[2],s[3]),h=this._searchIndex(o[0],o[1],o[2],o[3]);return[...new Set([...a,...h])]}}return this._searchIndex(s[0],s[1],s[2],s[3])}_getSymbolBounds(e,t,s,i,r){if(!t||!t.symbolInfo.linearCIM||!s)return null;if(e||(e=(0,p.vt)()),(0,j.Rg)(e,s),!i||0===i[0]&&0===i[1]&&0===i[2]&&0===i[3]){const{textInfo:e,symbolInfo:s}=t,n=s.cimSymbol;i||(i=[0,0,0,0]);const o=y.Sc.getSymbolInflateSize(i,n.symbol,this._cimResourceManager,r,e);i[0]=(0,Z.Lz)(o[0]),i[1]=(0,Z.Lz)(o[1]),i[2]=(0,Z.Lz)(o[2]),i[3]=(0,Z.Lz)(o[3])}const n=this._resolution,o=y.Sc.safeSize(i);return e[0]-=o*n,e[1]-=o*n,e[2]+=o*n,e[3]+=o*n,e}}var J=s(44604),K=s(54110);class ee{static getOrCreate(e,t,s){let i=t.get(e.id);return i||(i=new ee(e,s),t.set(e.id,i)),i}static fromItems(e,t,s){const i=new ee(e,s);return i.addedOrModified.push(...t),i}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[]}get reader(){return this._reader||(this._reader=U.from(this.addedOrModified,this.tile,this.metadata)),this._reader}}let te=class extends((0,a.sA)(r.A)){constructor(e){super(e),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new K.F({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new J.A({process:e=>{switch(e.type){case"processed-edit":throw new Error("InternalError: Unsupported command");case"update":return this._update()}}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new A.l({spatialReference:this.view.spatialReference,fields:new _.A}),this._attributeStore=new C.K({isLocal:!0,update:async e=>{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e});const t=this.container.attributeView.requestUpdate(e);this.container.requestRender(),await t,(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});const e=(0,M.T9)(null,[]);this._attributeStore.update(e,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=G.h.create(this.view.spatialReference),this._resourceProxy=new I.J({fetch:e=>Promise.all(e.map((e=>this.view.stage.textureManager.rasterizeItem(e)))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([(0,u.wB)((()=>this._effectiveRenderer),(()=>this._pushUpdate())),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",(()=>{this.addHandles([this.graphics.on("change",(()=>this._pushUpdate()))]),this._graphicStore=new Y(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()}))]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const e=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:e,removed:[]})}get _effectiveRenderer(){return"function"==typeof this.renderer?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const e=!this._attached||this._updateTracking.updating;return(0,o.A)("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${e}\n  -> attaching ${!this._attached}\n  -> updateTracking ${this._updateTracking.updating}`),e}hitTest(e){if(!this.view||this.view.suspended)return[];const{resolution:t,rotation:s}=this.view.state,i=this._graphicStore.hitTest(e.x,e.y,2,t,s),r=new Set(i),o=this.graphics.items.reduce(((e,t)=>(r.has(t.uid)&&e.set(t.uid,t),e)),new Map);return i.map((e=>o.get(e))).filter(n.Ru)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(e){this.updateRequested&&(this.updateRequested=!1,this.update(e))}viewChange(){this.requestUpdate()}setHighlight(e){const t=[];for(const{objectId:s,highlightFlags:i}of e){const e=this._graphicStore.getItem(s)?.displayId;t.push({objectId:s,highlightFlags:i,displayId:e})}this._attributeStore.setHighlight(t,e),this._pushUpdate()}graphicUpdateHandler(e){this._pushUpdate()}update(e){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(e.state.resolution)}_pushUpdate(){(0,c.QZ)(this._commandQueue.push({type:"update"}))}async _update(){try{(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const e=await this._graphicStore.update(this.graphics,(e=>this._getSymbolForGraphic(e)),(e=>this._ensureSymbolResource(e)));if(!e.hasAnyUpdate())return void await this._attributeStore.sendUpdates();e.removed.length&&(this._cleanupRequired=!0),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,e);const t=this._createTileMessages(e);await this._fetchResources(t),this._write(t);for(const t of e.added)this._setFilterState(t);for(const t of e.updated)this._setFilterState(t);(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,e),await this._attributeStore.sendUpdates(),(0,o.A)("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,e)}catch(e){}this._cleanupSharedResources()}_createTileMessages(e){const t=new Map;for(const s of e.added){const e=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const i of e)ee.getOrCreate(i,t,this._metadata).addedOrModified.push(s)}for(const s of e.updated){const e=this.view.graphicsTileStore.getIntersectingTiles(s.prevBounds),i=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const i of e)ee.getOrCreate(i,t,this._metadata).removed.push(s.displayId);for(const e of i)ee.getOrCreate(e,t,this._metadata).addedOrModified.push(s)}for(const s of e.removed){const e=this.view.graphicsTileStore.getIntersectingTiles(s.bounds);for(const i of e)ee.getOrCreate(i,t,this._metadata).removed.push(s.displayId)}return Array.from(t.values())}async _fetchResources(e){for(const{tile:t,reader:s}of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.id}] GraphicsView fetchResources`,e);const i=s.getCursor();for(;i.next();)for(const e of i.getMeshWriters())e.enqueueRequest(this._resourceProxy,i,t.createArcadeEvaluationOptions(this.view.timeZone))}await this._resourceProxy.fetchEnqueuedResources()}_write(e){for(const t of e){(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView write`,t);const e=this._writeMeshes(t);let s=this._tiles.get(t.tile.key);s||(s=this._createFeatureTile(t.tile.key)),(0,o.A)("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${t.tile.id}] GraphicsView onTileData`,t),this.container.onTileData(s,{type:"update",modify:e,remove:t.removed,end:!1,attributeEpoch:this._attributeStore.epoch}),this.container.requestRender()}}_writeMeshes(e){const t=new w.U(e.tile.id),s=e.reader.getCursor();for(;s.next();){t.entityStart(s.getDisplayId(),s.getZOrder());for(const i of s.getMeshWriters())i.write(t,this._resourceProxy,s,e.tile.createArcadeEvaluationOptions(this.view.timeZone),e.tile.level);t.entityEnd()}return{...t.serialize().message,tileId:e.tile.id}}_setFilterState(e){const t=e.displayId,s=this._attributeStore.getHighlightFlags(e.objectId);this._attributeStore.setData(t,0,0,s|(e.visible?b.LY:0))}_getSymbolForGraphic(e){return null!=e.symbol?e.symbol:null!=this._effectiveRenderer?this._effectiveRenderer.getSymbol(e):this._getNullSymbol(e)}async _ensureSymbolResource(e){if(!e.symbol)return;const t=await this._getSymbolInfo(e.symbol);if(!t)return;const s=t.linearCIM.filter((e=>"text"===e.type));if(s.length>0){const i=await this._getTextResources(e,s);e.symbolResource={symbolInfo:t,textInfo:i}}else e.symbolResource={symbolInfo:t}}_getSymbolInfo(e){const t=e.hash();return this._hashToSymbolInfo.has(t)||this._hashToSymbolInfo.set(t,this._createSymbolInfo(t,e).catch((e=>null))),this._hashToSymbolInfo.get(t)}async _createSymbolInfo(e,t){const s=await this._convertToCIMSymbol(t),i=await this._createLinearCIM(s);if("text"===t.type)for(const e of i)"text"===e.type&&(e.lineWidth=t.lineWidth);return{hash:e,cimSymbol:s,linearCIM:i,meshWriters:await this._createMeshWriters(s,i)}}async _convertToCIMSymbol(e){const t=(0,y.Vb)(e);return"web-style"===t.type?(await t.fetchCIMSymbol()).data:t}async _createLinearCIM(e){return await Promise.all(y.wp.fetchResources(e.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(e,!1)}async _createMeshWriters(e,t){(0,c.Te)(this._controller.signal);const s=this.container.instanceStore,i=await async function(e,t,s){const i=[],r={scaleInfo:(0,S.TY)(e),scaleExpression:null};for(const e of t)switch(e.type){case"marker":i.push(...(0,S.Zi)(s.instances.marker,e,v.Dk,r));break;case"fill":null==e.spriteRasterizationParam?i.push(...(0,S.Gn)(s.instances.fill,e,r)):i.push(...(0,S.oF)(s.instances.complexFill,e,!1,r));break;case"line":e.spriteRasterizationParam?i.push(...(0,S.EM)(s.instances.texturedLine,e,!1,r)):i.push(...(0,S.NZ)(s.instances.line,e,!1,r));break;case"text":i.push(...(0,S.IQ)(s.instances.text,e,v.Dk,r))}return i}(e,t,s);return Promise.all(i.map((e=>(0,T.hZ)(this._storage,this._resourceProxy,e.meshWriterName,(0,R.P)(e.id),e.options,{tileInfo:this.view.featuresTilingScheme.tileInfo},e.optionalAttributes))))}_onTileUpdate(e){if(e.added&&e.added.length>0)for(const t of e.added)this._updateTracking.addPromise(this._addTile(t));if(e.removed&&e.removed.length>0)for(const t of e.removed)this._removeTile(t.key)}_createFeatureTile(e){const t=this.view.featuresTilingScheme.getTileBounds((0,p.vt)(),e),s=this.view.featuresTilingScheme.getTileResolution(e.level),i=new x.R(e,s,t[0],t[3]);return this._tiles.set(e,i),this.container.addChild(i),i}async _addTile(e){if(!this._attached)return;const t=this._graphicStore.queryItems(e);if(!t.length)return;const s=this._createFeatureTile(e.key),i=ee.fromItems(e,t,this._metadata);await this._fetchResources([i]);const r=this._writeMeshes(i);s.onMessage({type:"append",append:r,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch})}_removeTile(e){if(!this._tiles.has(e))return;const t=this._tiles.get(e);this.container.removeChild(t),t.destroy(),this._tiles.delete(e)}_getNullSymbol(e){const t=e.geometry;return(0,m.Rg)(t)?g.x3:(0,m.Bi)(t)||(0,m.ZC)(t)?g.JJ:this.defaultPointSymbolEnabled?g.jM:null}async _getTextResources(e,t){const s=new Array,i=new Array;for(let r=0;r<t.length;r++){const n=t[r],{resource:o,overrides:a}=n.textRasterizationParam;if(a?.length>0){const t=f.$.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:a,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:o.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:o.symbol,textString:o.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},e,this.view.spatialReference,null,(0,m.$B)(e.projectedGeometry),null,null);t.then((e=>{const t=e.symbolLayers[0],{textString:s}=t.markerGraphics[0];i.push({type:"cim-rasterization-info",resource:{type:"text",textString:s||"",font:o.font}}),n.text=o.textString=s||""})),s.push(t)}else i.push({type:"cim-rasterization-info",resource:o})}s.length>0&&await Promise.all(s);const r=i.map((e=>this.view.stage.textureManager.rasterizeItem(e))),n=await Promise.all(r);(0,h.Lw)(n);const o=new Map;for(let e=0;e<t.length;e++){const s=t[e];o.set(s.textRasterizationParam.resource.symbol,{text:s.text,glyphMosaicItems:n[e]})}return o}_cleanupSharedResources(){if(!this._cleanupRequired)return;const e=performance.now();if(e-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=e;const t=new Set;for(const e of this._graphicStore.items()){const s=e.symbolResource?.symbolInfo.hash;t.add(s)}const s=new Set(this._hashToSymbolInfo.keys());for(const e of s.values())t.has(e)||this._hashToSymbolInfo.delete(e)}};(0,i._)([(0,l.MZ)()],te.prototype,"_effectiveRenderer",null),(0,i._)([(0,l.MZ)({constructOnly:!0})],te.prototype,"layerId",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],te.prototype,"requestUpdateCallback",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"container",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],te.prototype,"graphics",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"renderer",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"_updateTracking",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"updating",null),(0,i._)([(0,l.MZ)()],te.prototype,"view",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"updateRequested",void 0),(0,i._)([(0,l.MZ)()],te.prototype,"defaultPointSymbolEnabled",void 0),te=(0,i._)([(0,d.$)("esri.views.2d.layers.support.GraphicsView2D")],te);const se=te}}]);