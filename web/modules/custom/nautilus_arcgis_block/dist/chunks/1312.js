"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[1312],{66305:(e,t,o)=>{o.d(t,{A:()=>w});var r=o(90252),n=(o(14309),o(62274)),s=o(17134),l=(o(22333),o(60249),o(92262),o(74884)),i=o(59585),a=o(92592),p=o(1816),d=o(26182),m=o(96980);let u=class extends n.oY{constructor(e){super(e),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(e,t){const o=new d.A;return o.globalId=t.fromGlobalId,o.networkSourceId=t.fromNetworkSourceId,o.terminalId=t.fromTerminalId,o}writeFromNetworkElement(e,t){e&&(t.fromGlobalId=e.globalId,t.fromNetworkSourceId=e.networkSourceId,t.fromTerminalId=e.terminalId)}readToNetworkElement(e,t){const o=new d.A;return o.globalId=t.toGlobalId,o.networkSourceId=t.toNetworkSourceId,o.terminalId=t.toTerminalId,o}writeToNetworkElement(e,t){e&&(t.toGlobalId=e.globalId,t.toNetworkSourceId=e.networkSourceId,t.toTerminalId=e.terminalId)}};(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"globalId",void 0),(0,r._)([(0,s.MZ)({type:p.XZ.apiValues,json:{type:p.XZ.jsonValues,read:p.XZ.read,write:p.XZ.write}})],u.prototype,"associationType",void 0),(0,r._)([(0,s.MZ)({type:d.A,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],u.prototype,"fromNetworkElement",void 0),(0,r._)([(0,l.w)("fromNetworkElement")],u.prototype,"readFromNetworkElement",null),(0,r._)([(0,a.K)("fromNetworkElement")],u.prototype,"writeFromNetworkElement",null),(0,r._)([(0,s.MZ)({type:d.A,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],u.prototype,"toNetworkElement",void 0),(0,r._)([(0,l.w)("toNetworkElement")],u.prototype,"readToNetworkElement",null),(0,r._)([(0,a.K)("toNetworkElement")],u.prototype,"writeToNetworkElement",null),(0,r._)([(0,s.MZ)({type:m.A,json:{write:!0}})],u.prototype,"geometry",void 0),(0,r._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"errorMessage",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],u.prototype,"percentAlong",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],u.prototype,"errorCode",void 0),(0,r._)([(0,s.MZ)({type:Boolean,json:{write:!0}})],u.prototype,"isContentVisible",void 0),(0,r._)([(0,s.MZ)({type:Number,json:{write:!0}})],u.prototype,"status",void 0),u=(0,r._)([(0,i.$)("esri.rest.networks.support.Association")],u);const w=u},81312:(e,t,o)=>{o.r(t),o.d(t,{synthesizeAssociationGeometries:()=>u});var r=o(1968),n=o(51397),s=o(90252),l=o(62274),i=o(17134),a=(o(22333),o(60249),o(92262),o(59585)),p=o(66305);let d=class extends l.oY{constructor(e){super(e),this.maxGeometryCountExceeded=!1,this.associations=[]}};(0,s._)([(0,i.MZ)({type:Boolean,json:{write:!0}})],d.prototype,"maxGeometryCountExceeded",void 0),(0,s._)([(0,i.MZ)({type:[p.A],json:{write:!0}})],d.prototype,"associations",void 0),d=(0,s._)([(0,a.$)("esri.rest.networks.support.AssociationGeometriesResult")],d);const m=d;async function u(e,t,o){const s=(0,n.Dl)(e),l={...t.toJSON(),f:"json"},i=(0,n.lF)({...s.query,...l});o?o.method="post":o={method:"post"};const a=(0,n.jV)(i,o),p=`${s.path}/synthesizeAssociationGeometries`;return(0,r.A)(p,a).then((e=>function(e,t){const{data:o}=e,r=m.fromJSON(o);if(t)for(const e of r.associations)e.geometry.spatialReference=t.clone();return r}(e,t.outSpatialReference)))}}}]);