"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[7535],{10733:(t,e,n)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function o(t,e,n,r,o,s,i,a,c){return[t,e,n,r,o,s,i,a,c]}n.d(e,{fA:()=>o,vt:()=>r,zK:()=>s});const s=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,e){return new Float64Array(t,e,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},62722:(t,e,n)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}n.d(e,{o8:()=>o,vt:()=>r,zK:()=>s});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:o,create:r,createView:function(t,e){return new Float64Array(t,e,16)},fromValues:function(t,e,n,r,o,s,i,a,c,u,l,E,f,A,I,T){return[t,e,n,r,o,s,i,a,c,u,l,E,f,A,I,T]}},Symbol.toStringTag,{value:"Module"}))},84777:(t,e,n)=>{function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}n.d(e,{o8:()=>o,vt:()=>r,zK:()=>s});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:o,create:r,createView:function(t,e){return new Float64Array(t,e,4)},fromValues:function(t,e,n,r){return[t,e,n,r]}},Symbol.toStringTag,{value:"Module"}))},56781:(t,e,n)=>{n.d(e,{A6:()=>T,Xd:()=>l,Xr:()=>A,hZ:()=>O,lw:()=>E,t2:()=>p,x8:()=>u});var r=n(10733),o=n(84777),s=n(55509),i=n(84079),a=n(16967),c=n(29816);function u(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function l(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>(0,i.FD)()?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function E(t,e,n){const r=e[0],o=e[1],s=e[2],i=e[3],a=n[0],c=n[1],u=n[2],l=n[3];return t[0]=r*l+i*a+o*u-s*c,t[1]=o*l+i*c+s*a-r*u,t[2]=s*l+i*u+r*c-o*a,t[3]=i*l-r*a-o*c-s*u,t}function f(t,e,n,r){const o=e[0],s=e[1],a=e[2],c=e[3];let u,l,E,f,A,I=n[0],T=n[1],M=n[2],O=n[3];return l=o*I+s*T+a*M+c*O,l<0&&(l=-l,I=-I,T=-T,M=-M,O=-O),1-l>(0,i.FD)()?(u=Math.acos(l),E=Math.sin(u),f=Math.sin((1-r)*u)/E,A=Math.sin(r*u)/E):(f=1-r,A=r),t[0]=f*o+A*I,t[1]=f*s+A*T,t[2]=f*a+A*M,t[3]=f*c+A*O,t}function A(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function I(t,e){const n=e[0]+e[4]+e[8];let r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const o=(n+1)%3,s=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*o+o]-e[3*s+s]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*o+s]-e[3*s+o])*r,t[o]=(e[3*o+n]+e[3*n+o])*r,t[s]=(e[3*s+n]+e[3*n+s])*r}return t}function T(t,e,n,r){const o=.5*Math.PI/180;e*=o,n*=o,r*=o;const s=Math.sin(e),i=Math.cos(e),a=Math.sin(n),c=Math.cos(n),u=Math.sin(r),l=Math.cos(r);return t[0]=s*c*l-i*a*u,t[1]=i*a*l+s*c*u,t[2]=i*c*u-s*a*l,t[3]=i*c*l+s*a*u,t}const M=c.c,O=c.s,N=c.f,h=E,R=c.b,S=c.g,L=c.l,_=c.i,C=_,d=c.j,v=d,P=c.n,p=c.a,m=c.e;const F=(0,s.vt)(),g=(0,s.fA)(1,0,0),D=(0,s.fA)(0,1,0);const b=(0,o.vt)(),w=(0,o.vt)();const z=(0,r.vt)();Object.freeze(Object.defineProperty({__proto__:null,add:N,calculateW:function(t,e){const n=e[0],r=e[1],o=e[2];return t[0]=n,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),t},conjugate:A,copy:M,dot:S,equals:m,exactEquals:p,fromEuler:T,fromMat3:I,getAxisAngle:l,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,e){const n=e[0],r=e[1],o=e[2],s=e[3],i=n*n+r*r+o*o+s*s,a=i?1/i:0;return t[0]=-n*a,t[1]=-r*a,t[2]=-o*a,t[3]=s*a,t},len:C,length:_,lerp:L,mul:h,multiply:E,normalize:P,random:function(t){const e=i.Ov,n=e(),r=e(),o=e(),s=Math.sqrt(1-n),a=Math.sqrt(n);return t[0]=s*Math.sin(2*Math.PI*r),t[1]=s*Math.cos(2*Math.PI*r),t[2]=a*Math.sin(2*Math.PI*o),t[3]=a*Math.cos(2*Math.PI*o),t},rotateX:function(t,e,n){n*=.5;const r=e[0],o=e[1],s=e[2],i=e[3],a=Math.sin(n),c=Math.cos(n);return t[0]=r*c+i*a,t[1]=o*c+s*a,t[2]=s*c-o*a,t[3]=i*c-r*a,t},rotateY:function(t,e,n){n*=.5;const r=e[0],o=e[1],s=e[2],i=e[3],a=Math.sin(n),c=Math.cos(n);return t[0]=r*c-s*a,t[1]=o*c+i*a,t[2]=s*c+r*a,t[3]=i*c-o*a,t},rotateZ:function(t,e,n){n*=.5;const r=e[0],o=e[1],s=e[2],i=e[3],a=Math.sin(n),c=Math.cos(n);return t[0]=r*c+o*a,t[1]=o*c-r*a,t[2]=s*c+i*a,t[3]=i*c-s*a,t},rotationTo:function(t,e,n){const r=(0,a.k)(e,n);return r<-.999999?((0,a.b)(F,g,e),(0,a.H)(F)<1e-6&&(0,a.b)(F,D,e),(0,a.n)(F,F),u(t,F,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,a.b)(F,e,n),t[0]=F[0],t[1]=F[1],t[2]=F[2],t[3]=1+r,P(t,t))},scale:R,set:O,setAxes:function(t,e,n,r){const o=z;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-e[0],o[5]=-e[1],o[8]=-e[2],P(t,I(t,o))},setAxisAngle:u,slerp:f,sqlerp:function(t,e,n,r,o,s){return f(b,e,o,s),f(w,n,r,s),f(t,b,w,2*s*(1-s)),t},sqrLen:v,squaredLength:d,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},84046:(t,e,n)=>{n.d(e,{l:()=>u});var r=n(10590),o=n(97908),s=n(55509);function i(t,e,n){const r=Math.sin(t),o=Math.cos(t),s=Math.sin(e),i=Math.cos(e),a=n;return a[0]=-r,a[4]=-s*o,a[8]=i*o,a[12]=0,a[1]=o,a[5]=-s*r,a[9]=i*r,a[13]=0,a[2]=0,a[6]=i,a[10]=s,a[14]=0,a[3]=0,a[7]=0,a[11]=0,a[15]=1,a}var a=n(69981),c=n(85204);function u(t,e,n,r){if(null==t||null==r)return!1;const s=(0,a.Qk)(t,a.Wv),u=(0,a.Qk)(r,a.zp);if(s===u&&!l(u)&&(s!==a.rz.UNKNOWN||(0,c.aI)(t,r)))return(0,o.kN)(n,e),!0;if(l(u)){const t=a.w5[s][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][u];return null!=t&&null!=r&&(t(e,0,f,0),r(f,0,A,0),i(E*f[0],E*f[1],n),n[12]=A[0],n[13]=A[1],n[14]=A[2],!0)}if((u===a.rz.WEB_MERCATOR||u===a.rz.PLATE_CARREE||u===a.rz.WGS84)&&(s===a.rz.WGS84||s===a.rz.CGCS2000&&u===a.rz.PLATE_CARREE||s===a.rz.SPHERICAL_ECEF||s===a.rz.WEB_MERCATOR)){const t=a.w5[s][a.rz.LON_LAT],r=a.w5[a.rz.LON_LAT][u];return null!=t&&null!=r&&(t(e,0,f,0),r(f,0,A,0),s===a.rz.SPHERICAL_ECEF?function(t,e,n){i(t,e,n),(0,o.mg)(n,n)}(E*f[0],E*f[1],n):(0,o.D_)(n),n[12]=A[0],n[13]=A[1],n[14]=A[2],!0)}return!1}function l(t){return t===a.rz.SPHERICAL_ECEF||t===a.rz.SPHERICAL_MARS_PCPF||t===a.rz.SPHERICAL_MOON_PCPF}const E=(0,r.kU)(1),f=(0,s.vt)(),A=(0,s.vt)()},19619:(t,e,n)=>{n.d(e,{lO:()=>u});var r=n(11346),o=n(54413),s=n(85204);const i=new o.A(r.fv),a=new o.A(r.FY),c=new o.A(r.LJ);new o.A(r.Ro);function u(t){const e=l.get(t);if(e)return e;let n=i;if(t)if(t===a)n=a;else if(t===c)n=c;else{const e=t.wkid,r=t.latestWkid;if(null!=e||null!=r)(0,s.tl)(e)||(0,s.tl)(r)?n=a:((0,s.ZL)(e)||(0,s.ZL)(r))&&(n=c);else{const e=t.wkt2??t.wkt;if(e){const t=e.toUpperCase();t===E?n=a:t===f&&(n=c)}}}return l.set(t,n),n}const l=new Map,E=a.wkt.toUpperCase(),f=c.wkt.toUpperCase()},17368:(t,e,n)=>{n.d(e,{vt:()=>s,lU:()=>a,Qj:()=>i});n(10590);var r=n(16967),o=n(55509);n(29816),n(62811),n(40237);(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)(),(0,o.vt)();function s(t=I){return[t[0],t[1],t[2],t[3]]}function i(t){return t}function a(t,e,n,o=0,i=Math.floor(n*(1/3)),I=Math.floor(n*(2/3))){if(n<3)return!1;e(u,o);let T=i,M=!1;for(;T<n-1&&!M;)e(l,T),T++,M=!(0,r.j)(u,l);if(!M)return!1;for(T=Math.max(T,I),M=!1;T<n&&!M;)e(E,T),T++,(0,r.f)(f,u,l),(0,r.n)(f,f),(0,r.f)(A,l,E),(0,r.n)(A,A),M=!(0,r.j)(u,E)&&!(0,r.j)(l,E)&&Math.abs((0,r.k)(f,A))<c;return M?(function(t,e,n,r=s()){const o=n[0]-e[0],i=n[1]-e[1],a=n[2]-e[2],c=t[0]-e[0],u=t[1]-e[1],l=t[2]-e[2],E=i*l-a*u,f=a*c-o*l,A=o*u-i*c,I=E*E+f*f+A*A,T=Math.abs(I-1)>1e-5&&I>1e-12?1/Math.sqrt(I):1;r[0]=E*T,r[1]=f*T,r[2]=A*T,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2])}(u,l,E,t),!0):(0!==o||1!==i||2!==I)&&a(t,e,n,0,1,2)}const c=.99619469809,u=(0,o.vt)(),l=(0,o.vt)(),E=(0,o.vt)(),f=(0,o.vt)(),A=(0,o.vt)();const I=[0,0,1,0];var T;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(T||(T={}));T.INFINITE_MIN,T.INFINITE_MAX,T.INFINITE_MAX},62811:(t,e,n)=>{n.d(e,{g7:()=>i});var r=n(10590),o=n(16967),s=n(55509);function i(t,e){const n=(0,o.k)(t,e)/((0,o.l)(t)*(0,o.l)(e));return-(0,r.XM)(n)}(0,s.vt)(),(0,s.vt)()},40237:(t,e,n)=>{n.d(e,{Rc:()=>f,J8:()=>A,rq:()=>E});var r=n(31169),o=n(10733),s=n(62722),i=n(84777),a=n(24940),c=n(55509),u=n(64554);class l{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new l(a.vt)}static createVec3f64(){return new l(c.vt)}static createVec4f64(){return new l(u.vt)}static createMat3f64(){return new l(o.vt)}static createMat4f64(){return new l(s.vt)}static createQuatf64(){return new l(i.vt)}get test(){return{length:this._items.length}}}l.createVec2f64();const E=l.createVec3f64(),f=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64()),A=l.createQuatf64()},14329:(t,e,n)=>{n.d(e,{K:()=>r,n:()=>o});class r{constructor(t,e,n=e){this.data=t,this.size=e,this.stride=n}}class o extends r{constructor(t,e,n,r=!1,o=n){super(t,n,o),this.indices=e,this.exclusive=r}}},2031:(t,e,n)=>{var r;n.d(e,{r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))}}]);