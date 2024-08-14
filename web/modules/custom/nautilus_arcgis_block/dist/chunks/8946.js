"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[8946],{45534:(e,t,s)=>{s.d(t,{j:()=>f});var i=s(51819),r=s(22333),n=s(60249),a=s(66011),o=s(15238),h=s(32003),l=s(11037),d=s(90928),u=s(11410),p=s(67405),c=s(25964);class y{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:r,textureOnly:n}=e,a=(0,l.Qz)(r);this.blockIndex=s,this.pixelType=r,this.size=t,this.textureOnly=n,n||(this.data=new a(i)),this._resetRange()}destroy(){this._texture?.dispose();for(const e in this._fbos){const t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const e=new c.R;return e.wrapMode=d.pF.CLAMP_TO_EDGE,e.samplingMode=d.Cj.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,s){const i=(0,h.Q4)(e),r=this.data,n=i*this.texelSize+t;!r||n>=r.length||(r[n]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(e,t){if(null==this.data)return null;const s=(0,h.Q4)(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const s=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new u.H(e,s)}return this._fbos[t]}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){try{const s=this.dirtyStart,a=this.dirtyEnd;if(!this.hasDirty)return;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${t}] AttributeStoreView.updateTexture`,{start:s,end:a,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const o=this.data.buffer,h=this.getTexture(e),d=4,u=(s-s%this.size)/this.size,p=(a-a%this.size)/this.size,c=u,y=this.size,g=p,_=u*this.size*d,f=(y+g*this.size)*d-_,v=(0,l.Qz)(this.pixelType),b=new v(o,_*v.BYTES_PER_ELEMENT,f),w=this.size,m=g-c+1;if(m>this.size)return void n.A.getLogger("esri.views.2d.engine.webgl.AttributeStoreView").error(new i.A("mapview-webgl","Out-of-bounds index when updating AttributeData"));h.updateData(0,0,c,w,m,b)}catch(e){}}update(e){const{data:t,start:s,end:i}=e;if(null!=t&&null!=this.data){const i=this.data,r=s*this.texelSize;for(let s=0;s<t.length;s++){const n=1<<s%this.texelSize;e.layout&n&&(i[r+s]=t[s])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=(0,l.Qz)(this.pixelType);this.destroy(),this.data=new i(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new p.g(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(e),o=(0,l.AV)(r),h=new((0,l.Qz)(r))(new ArrayBuffer(s*i*o*this.texelSize)),d=e.getBoundFramebufferObject(),{x:u,y:p,width:c,height:y}=e.getViewport();e.bindFramebuffer(a),a.readPixels(0,0,s,i,n,r,h),t.updateData(0,0,0,2*s,i/2,h),e.setViewport(u,p,c,y),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class g{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(e){if(!e)throw new Error("InternalError: initArgs must be defined");const t=e.blockDescriptors;if(this.size=e.blockSize,(0,r.A)("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:e}),null==this._data)this._data=t.map(((e,t)=>null!=e?new y(e,this.size,t):null));else for(let e=0;e<this._data.length;e++){const s=this._data[e],i=t[e];null!=i&&(null==s?this._data[e]=new y(i,this.size,e):s.resize(i,this.size))}}destroy(){for(const e of this._data??[])e?.destroy();this._defaultTexture?.dispose();for(const{resolver:e}of this._pendingAttributeUpdates)e.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,o.dV.VV,0,0)}getData(e,t,s,i){if(!this._data)return 0;const r=this._data[t];if(null==r)return 0;const n=r.getData(e,s);return null!=n?n:i}setData(e,t,s,i){this._data[t].setData(e,s,i)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}async requestUpdate(e){const t=(0,a.Tw)();t.promise=t.promise.catch((e=>{(0,r.A)("esri-2d-update-debug")&&console.error("AttributeStoreView.requestUpdate rejected",e)})),this._version=e.version,this._pendingAttributeUpdates.push({inner:e,resolver:t}),(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:e})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const e=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const{inner:t,resolver:s}of e){const{blockData:e,initArgs:i,sendUpdateEpoch:n,version:a}=t;(0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${n}] AttributeStoreView.applyUpdate`),this._version=a,this._epoch=n,null!=i&&this._initialize(i);const o=this._data;for(let t=0;t<e.length;t++){const s=e[t],i=o[t];null!=i&&null!=s&&((0,r.A)("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${t}] AttributeStoreView.update`,{block:s}),i.update(s))}s.resolve()}}getUniforms(e){return{filterFlags:{texture:this._getTexture(e,o.dV.FilterFlags),unit:o.uM},animation:{texture:this._getTexture(e,o.dV.Animation),unit:o.z2},gpgpu:{texture:this._getTexture(e,o.dV.GPGPU),unit:o.Sr},visualVariableData:{texture:this._getTexture(e,o.dV.VV),unit:o.nM},dataDriven0:{texture:this._getTexture(e,o.dV.DD0),unit:o.lL},dataDriven1:{texture:this._getTexture(e,o.dV.DD1),unit:o.sn},dataDriven2:{texture:this._getTexture(e,o.dV.DD2),unit:o.n9},size:this.size}}_getTexture(e,t){const s=this._data?.[t];return s?(s.updateTexture(e,this._version),s.getTexture(e)):this._getDefaultTexture(e)}_getDefaultTexture(e){if(null==this._defaultTexture){const t=new c.R;t.wrapMode=d.pF.CLAMP_TO_EDGE,t.samplingMode=d.Cj.NEAREST,t.width=1,t.height=1,this._defaultTexture=new p.g(e,t,new Uint8Array(4))}return this._defaultTexture}}var _=s(81511);class f extends _.A{constructor(e){super(e),this._statisticsByLevel=new Map,this.attributeView=new g}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy()}doRender(e){e.context.capabilities.enable("textureFloat"),super.doRender(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}},81511:(e,t,s)=>{s.d(t,{A:()=>l});var i=s(22333),r=s(50854),n=s(95911),a=s(18813),o=s(54198);const h=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.A{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(h),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),s}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[a.A],drawPhase:r.S5.DEBUG|r.S5.MAP|r.S5.HIGHLIGHT|r.S5.LABEL,target:()=>this.getStencilTarget()})),(0,i.A)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[o.A],drawPhase:r.S5.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const e of this.children)e.stencilRef=t++}}},1119:(e,t,s)=>{s.d(t,{O:()=>r});var i=s(84377);class r{constructor(e,t,s,i,r){this._instanceId=e,this.techniqueRef=t,this._meshWriterName=s,this._input=i,this.optionalAttributes=r}get instanceId(){return(0,i.P)(this._instanceId)}createMeshInfo(e){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:e,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(e){this._input=e}}},35472:(e,t,s)=>{s.d(t,{e:()=>m});var i,r=s(90252),n=s(76182),a=s(98300),o=s(51819),h=s(25237),l=s(17134),d=(s(22333),s(60249),s(92262),s(59585)),u=s(30039),p=s(88861),c=s(87361),y=s(9556);let g=i=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,r._)([(0,l.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=i=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],g);const _=g;var f=s(44635);let v=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,l.MZ)({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],v);const b=v,w=n.A.ofType({key:"type",base:null,typeMap:{rect:_,path:b,geometry:f.A}}),m=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),h.pc),(0,h.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),h.pc),(0,h.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),h.pc),(0,h.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),h.pc),(0,h.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),h.pc),(0,h.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),h.pc),(0,h.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),h.pc),(0,h.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),h.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0,u.zx)(e,s,i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,l.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,l.MZ)({type:w,set(e){const t=(0,a.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,l.MZ)()],t.prototype,"updating",null),(0,r._)([(0,l.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,l.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},83504:(e,t,s)=>{s.d(t,{t:()=>r});var i=s(47433);class r{constructor(){this._idToCounters=new Map}get empty(){return 0===this._idToCounters.size}addReason(e,t){for(const s of e){let e=this._idToCounters.get(s);e||(e=new Map,this._idToCounters.set(s,e)),e.set(t,(e.get(t)||0)+1)}}deleteReason(e,t){for(const s of e){const e=this._idToCounters.get(s);if(!e)continue;let i=e.get(t);if(null==i)return;i--,i>0?e.set(t,i):e.delete(t),0===e.size&&this._idToCounters.delete(s)}}getHighestReason(e){const t=this._idToCounters.get(e);if(!t)return null;let s=null;for(const e of i.M$)t.get(e)&&(s=e);return s||null}ids(){return this._idToCounters.keys()}}},2123:(e,t,s)=>{s.d(t,{A:()=>y});var i=s(90252),r=s(76881),n=s(45412),a=s(77901),o=s(60249),h=s(7929),l=s(58976),d=s(17134),u=(s(22333),s(92262),s(59585)),p=s(78584);let c=class extends((0,a.sA)((0,l.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer?.title||"no title";o.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,h.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,d.MZ)()],c.prototype,"fullOpacity",null),(0,i._)([(0,d.MZ)()],c.prototype,"layer",void 0),(0,i._)([(0,d.MZ)()],c.prototype,"parent",void 0),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,i._)([(0,d.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,i._)([(0,d.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,i._)([(0,d.MZ)()],c.prototype,"visible",null),(0,i._)([(0,d.MZ)()],c.prototype,"view",void 0),c=(0,i._)([(0,u.$)("esri.views.layers.LayerView")],c);const y=c},9556:(e,t,s)=>{s.d(t,{A:()=>h});var i=s(90252),r=s(62274),n=s(17134),a=(s(22333),s(60249),s(92262),s(59585));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,i._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,i._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const h=o},44635:(e,t,s)=>{s.d(t,{A:()=>y});var i,r=s(90252),n=(s(14309),s(17134)),a=(s(22333),s(60249),s(92262),s(59585)),o=s(35676),h=s(67593),l=s(9556),d=s(57116),u=s(97540);const p={base:o.A,key:"type",typeMap:{extent:d.A,polygon:u.A}};let c=i=class extends l.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new i({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:p,json:{read:h.rS,write:!0}})],c.prototype,"geometry",void 0),c=i=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);