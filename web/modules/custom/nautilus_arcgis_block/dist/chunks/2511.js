"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[2511],{32612:(t,e,n)=>{n.d(e,{MA:()=>d,m0:()=>w,wH:()=>b});var r=n(51819),i=n(95049),o=n(60249),a=n(43408),s=n(2031);const c=()=>o.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(t,e,n){let i="",o=0;for(;o<n;){const a=t[e+o];if(a<128)i+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&a)<<6|63&t[e+o+1];i+=String.fromCharCode(s),o+=2}else if(a>=224&&a<240){if(o+2>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&a)<<12|(63&t[e+o+1])<<6|63&t[e+o+2];i+=String.fromCharCode(s),o+=3}else{if(!(a>=240&&a<248))throw new r.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&a)<<18|(63&t[e+o+1])<<12|(63&t[e+o+2])<<6|63&t[e+o+3];if(s>=65536){const t=55296+(s-65536>>10),e=56320+(1023&s);i+=String.fromCharCode(t,e)}else i+=String.fromCharCode(s);o+=4}}}return i}function h(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let i=0;i<e.length;i++){const o=e[i],a=o.valueType||o.type,s=v[a];n.fields[o.property]=s(t,r),r+=y[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function f(t,e,n){const i=[];let o,a,s=0;for(a=0;a<t;a+=1){if(o=e[a],o>0){if(i.push(u(n,s,o-1)),0!==n[s+o-1])throw new r.A("string-array-error","Invalid string array: missing null termination.")}else i.push(null);s+=o}return i}function d(t,e){return new(0,y[e.valueType])(t,e.byteOffset,e.count*e.valuesPerElement)}function l(t,e,n){const o=null!=e.header?h(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},a={header:o,byteOffset:o.byteCount,byteCount:0,entries:Object.create(null)};let s=o.byteCount;for(let t=0;t<e.ordering.length;t++){const n=e.ordering[t],c=(0,i.o8)(e[n]);if(c.count=o.fields.count??0,"String"===c.valueType){if(c.byteOffset=s,c.byteCount=o.fields[n+"ByteCount"],"UTF-8"!==c.encoding)throw new r.A("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding});if(c.timeEncoding&&"ECMA_ISO8601"!==c.timeEncoding)throw new r.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:c.timeEncoding})}else{if(!p(c.valueType))throw new r.A("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const t=_(c.valueType);s+=s%t!=0?t-s%t:0,c.byteOffset=s,c.byteCount=t*c.valuesPerElement*c.count}}s+=c.byteCount??0,a.entries[n]=c}return a.byteCount=s-a.byteOffset,a}function g(t,e,n){if(e!==t&&c().error(`Invalid ${n} buffer size\n expected: ${t}, actual: ${e})`),e<t)throw new r.A("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function b(t,e){const n=h(t,e&&e.header);let r=n.byteCount;const i={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},o=n.fields,a=null!=o.vertexCount?o.vertexCount:o.count;for(const t of e.ordering){if(!e.vertexAttributes[t])continue;const n={...e.vertexAttributes[t],byteOffset:r,count:a},o=m[t]||"_"+t;i.vertexAttributes[o]=n,r+=_(n.valueType)*n.valuesPerElement*a}const s=o.faceCount;if(e.faces&&s){i.faces={};for(const t of e.ordering){if(!e.faces[t])continue;const n={...e.faces[t],byteOffset:r,count:s};i.faces[t]=n,r+=_(n.valueType)*n.valuesPerElement*s}}const c=o.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&c){i.featureAttributes={};for(const t of e.featureAttributeOrder){if(!e.featureAttributes[t])continue;const n={...e.featureAttributes[t],byteOffset:r,count:c};i.featureAttributes[t]=n,r+=("UInt64"===n.valueType?8:_(n.valueType))*n.valuesPerElement*c}}return g(r,t.byteLength,"geometry"),i.byteCount=r-i.byteOffset,i}const m={position:s.r.POSITION,normal:s.r.NORMAL,color:s.r.COLOR,uv0:s.r.UV0,region:s.r.UVREGION};function w(t,e,n){if("lepcc-rgb"===t.encoding)return(0,a.mb)(e);if("lepcc-intensity"===t.encoding)return(0,a.Ax)(e);if(null!=t.encoding&&""!==t.encoding)throw new r.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(c().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(c().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=l(e,t,n);g(i.byteOffset+i.byteCount,e.byteLength,"attribute");const o=i.entries.attributeValues||i.entries.objectIds;if(o){if("String"===o.valueType){const t=i.entries.attributeByteCounts,n=d(e,t),r=function(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}(e,o);return o.timeEncoding?function(t,e,n){return f(t,e,n).map((t=>{const e=t?Date.parse(t):null;return e&&!Number.isNaN(e)?e:null}))}(t.count,n,r):f(t.count,n,r)}return d(e,o)}throw new r.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const y={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},v={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function p(t){return y.hasOwnProperty(t)}function _(t){return p(t)?y[t].BYTES_PER_ELEMENT:0}},43408:(t,e,n)=>{n.d(e,{Ax:()=>w,Me:()=>u,mb:()=>g});var r=n(51819);const i=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+o.identifierOffset,o.identifierLength)),version:e.getUint16(n+o.versionOffset,i),checksum:e.getUint32(n+o.checksumOffset,i)}}const s={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(t,e){return{sizeLo:t.getUint32(e+s.sizeLo,i),sizeHi:t.getUint32(e+s.sizeHi,i),minX:t.getFloat64(e+s.minX,i),minY:t.getFloat64(e+s.minY,i),minZ:t.getFloat64(e+s.minZ,i),maxX:t.getFloat64(e+s.maxX,i),maxY:t.getFloat64(e+s.maxY,i),maxZ:t.getFloat64(e+s.maxZ,i),errorX:t.getFloat64(e+s.errorX,i),errorY:t.getFloat64(e+s.errorY,i),errorZ:t.getFloat64(e+s.errorZ,i),count:t.getUint32(e+s.count,i),reserved:t.getUint32(e+s.reserved,i)}}function u(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:u}=a(t,e,n);if(n+=o.byteCount,"LEPCC     "!==i)throw new r.A("lepcc-decode-error","Bad identifier");if(u>1)throw new r.A("lepcc-decode-error","Unknown version");const f=c(e,n);if(n+=s.byteCount,f.sizeHi*2**32+f.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),l=[],g=[],b=[],m=[];if(n=h(t,n,l),n=h(t,n,g),n=h(t,n,b),n=h(t,n,m),n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad length");let w=0,y=0;for(let t=0;t<l.length;t++){y+=l[t];let e=0;for(let n=0;n<g[t];n++){e+=b[w];const t=m[w];d[3*w]=Math.min(f.maxX,f.minX+2*f.errorX*e),d[3*w+1]=Math.min(f.maxY,f.minY+2*f.errorY*y),d[3*w+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*t),w++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function h(t,e,n){const r=[];e=f(t,e,r);const i=[];for(let o=0;o<r.length;o++){i.length=0,e=f(t,e,i);for(let t=0;t<i.length;t++)n.push(i[t]+r[o])}return e}function f(t,e,n){const o=new DataView(t,e),a=o.getUint8(0),s=31&a,c=!!(32&a),u=(192&a)>>6;let h=0;if(0===u)h=o.getUint32(1,i),e+=5;else if(1===u)h=o.getUint16(1,i),e+=3;else{if(2!==u)throw new r.A("lepcc-decode-error","Bad count type");h=o.getUint8(1),e+=2}if(c)throw new r.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(h*s/8),d=new Uint8Array(t,e,f);let l=0,g=0,b=0;const m=-1>>>32-s;for(let t=0;t<h;t++){for(;g<s;)l|=d[b]<<g,g+=8,b+=1;n[t]=l&m,l>>>=s,g-=s,g+s>32&&(l|=d[b-1]>>8-g)}return e+b}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function l(t,e){return{sizeLo:t.getUint32(e+d.sizeLo,i),sizeHi:t.getUint32(e+d.sizeHi,i),count:t.getUint32(e+d.count,i),colorMapCount:t.getUint16(e+d.colorMapCount,i),lookupMethod:t.getUint8(e+d.lookupMethod),compressionMethod:t.getUint8(e+d.compressionMethod)}}function g(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:s}=a(t,e,n);if(n+=o.byteCount,"ClusterRGB"!==i)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const c=l(e,n);if(n+=d.byteCount,c.sizeHi*2**32+c.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+n!==t.byteLength||c.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const e=new Uint8Array(t,n,3*c.colorMapCount),i=new Uint8Array(t,n+3*c.colorMapCount,c.count),o=new Uint8Array(3*c.count);for(let t=0;t<c.count;t++){const n=i[t];o[3*t]=e[3*n],o[3*t+1]=e[3*n+1],o[3*t+2]=e[3*n+2]}return o}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+n!==t.byteLength||0!==c.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(n+3!==t.byteLength||1!==c.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const i=e.getUint8(n),o=e.getUint8(n+1),a=e.getUint8(n+2),s=new Uint8Array(3*c.count);for(let t=0;t<c.count;t++)s[3*t]=i,s[3*t+1]=o,s[3*t+2]=a;return s}throw new r.A("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}const b={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function m(t,e){return{sizeLo:t.getUint32(e+b.sizeLo,i),sizeHi:t.getUint32(e+b.sizeHi,i),count:t.getUint32(e+b.count,i),scaleFactor:t.getUint16(e+b.scaleFactor,i),bitsPerPoint:t.getUint8(e+b.bitsPerPoint),reserved:t.getUint8(e+b.reserved)}}function w(t){const e=new DataView(t,0);let n=0;const{identifier:i,version:s}=a(t,e,n);if(n+=o.byteCount,"Intensity "!==i)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const c=m(e,n);if(n+=b.byteCount,c.sizeHi*2**32+c.sizeLo!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const u=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const e=new Uint8Array(t,n,c.count);for(let t=0;t<c.count;t++)u[t]=e[t]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+n!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");const e=new Uint16Array(t,n,c.count);for(let t=0;t<c.count;t++)u[t]=e[t]*c.scaleFactor}else{const e=[];if(f(t,n,e)!==t.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let t=0;t<c.count;t++)u[t]=e[t]*c.scaleFactor}return u}},78096:(t,e,n)=>{n.d(e,{ab:()=>pt,gm:()=>xt});var r=n(69249),i=n(10733),o=n(62722),a=n(56781),s=n(84777),c=n(16967),u=n(55509),h=n(29816),f=n(64554),d=n(11346),l=n(19619),g=n(84046),b=n(33169),m=n(69981),w=n(17368),y=n(85204),v=n(40237),p=n(70892),_=n(24940),A=n(14329);const M=1e-6,C=(0,u.vt)(),P=(0,u.vt)();function U(t,e,n,r,i,o,a,s,c,u){return function(t,e,n){let r=yt(t.maxVert[0],t.minVert[0]),i=0;for(let e=1;e<7;++e){const n=yt(t.maxVert[e],t.minVert[e]);n>r&&(r=n,i=e)}gt(e,t.minVert[i]),gt(n,t.maxVert[i])}(t,r,i),yt(r,i)<M?1:(dt(a,r,i),mt(a,a),function(t,e,n,r){const{data:i,size:o}=t;let a=Number.NEGATIVE_INFINITY,s=0;for(let t=0;t<i.length;t+=o){V[0]=i[t]-e[0],V[1]=i[t+1]-e[1],V[2]=i[t+2]-e[2];const r=n[0]*V[0]+n[1]*V[1]+n[2]*V[2],o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=V[0]*V[0]+V[1]*V[1]+V[2]*V[2]-r*r/o;c>a&&(a=c,s=t)}return gt(r,i,s),a}(e,r,a,o)<M?2:(dt(s,i,o),mt(s,s),dt(c,o,r),mt(c,c),bt(n,s,a),mt(n,n),k(e,n,a,s,c,u),0))}const z=(0,u.vt)(),I=(0,u.vt)(),j=(0,u.vt)(),x=(0,u.vt)(),S=(0,u.vt)(),O=(0,u.vt)(),F=(0,u.vt)(),B=(0,u.vt)();function T(t,e,n,r,i,o,a,s,c){(function(t,e,n,r,i){!function(t,e,n,r,i){const{data:o,size:a}=t;gt(r,o),gt(i,r),n[0]=vt(H,e),n[1]=n[0];for(let t=a;t<o.length;t+=a){const a=o[t]*e[0]+o[t+1]*e[1]+o[t+2]*e[2];a<n[0]&&(n[0]=a,gt(r,o,t)),a>n[1]&&(n[1]=a,gt(i,o,t))}}(t,e,L,i,r);const o=vt(n,e);L[1]-M<=o&&(r[0]=void 0),L[0]+M>=o&&(i[0]=void 0)})(t,e,n,z,I),void 0!==z[0]&&(dt(j,z,n),mt(j,j),dt(x,z,r),mt(x,x),dt(S,z,i),mt(S,S),bt(O,x,o),mt(O,O),bt(F,S,a),mt(F,F),bt(B,j,s),mt(B,B),k(t,O,o,x,j,c),k(t,F,a,S,x,c),k(t,B,s,j,S,c)),void 0!==I[0]&&(dt(j,I,n),mt(j,j),dt(x,I,r),mt(x,x),dt(S,I,i),mt(S,S),bt(O,x,o),mt(O,O),bt(F,S,a),mt(F,F),bt(B,j,s),mt(B,B),k(t,O,o,x,j,c),k(t,F,a,S,x,c),k(t,B,s,j,S,c))}const V=[0,0,0];const L=(0,_.vt)();const E=(0,u.vt)(),N=(0,u.vt)(),Y=(0,u.vt)(),q=(0,u.vt)(),X=(0,u.vt)(),D=(0,u.vt)();function k(t,e,n,r,i,o){if(wt(e)<M)return;bt(E,n,e),bt(N,r,e),bt(Y,i,e),Z(t,e,L),X[1]=L[0],q[1]=L[1],D[1]=q[1]-X[1];const a=[n,r,i],s=[E,N,Y];for(let n=0;n<3;++n){Z(t,a[n],L),X[0]=L[0],q[0]=L[1],Z(t,s[n],L),X[2]=L[0],q[2]=L[1],D[0]=q[0]-X[0],D[2]=q[2]-X[2];const r=ht(D);r<o.quality&&(gt(o.b0,a[n]),gt(o.b1,e),gt(o.b2,s[n]),o.quality=r)}}const H=(0,u.vt)();function Z(t,e,n){const{data:r,size:i}=t;n[0]=Number.POSITIVE_INFINITY,n[1]=Number.NEGATIVE_INFINITY;for(let t=0;t<r.length;t+=i){const i=r[t]*e[0]+r[t+1]*e[1]+r[t+2]*e[2];n[0]=Math.min(n[0],i),n[1]=Math.max(n[1],i)}}function Q(t,e,n){n.center=t,n.halfSize=(0,c.h)(e,e,.5),n.quaternion=s.zK}const R=(0,u.vt)(),G=(0,u.vt)(),W=(0,u.vt)(),K=(0,u.vt)(),$=(0,u.vt)(),J=(0,u.vt)();function tt(t,e,n){gt(R,e),Math.abs(e[0])>Math.abs(e[1])&&Math.abs(e[0])>Math.abs(e[2])?R[0]=0:Math.abs(e[1])>Math.abs(e[2])?R[1]=0:R[2]=0,wt(R)<M&&(R[0]=R[1]=R[2]=1),bt(G,e,R),mt(G,G),bt(W,e,G),mt(W,W),et(t,e,G,W,K,$),dt(J,$,K),st(e,G,W,K,$,J,n)}function et(t,e,n,r,i,o){Z(t,e,L),i[0]=L[0],o[0]=L[1],Z(t,n,L),i[1]=L[0],o[1]=L[1],Z(t,r,L),i[2]=L[0],o[2]=L[1]}const nt=(0,u.vt)(),rt=(0,u.vt)(),it=(0,u.vt)(),ot=(0,i.fA)(1,0,0,0,1,0,0,0,1),at=(0,s.vt)();function st(t,e,n,r,i,o,a){ot[0]=t[0],ot[1]=t[1],ot[2]=t[2],ot[3]=e[0],ot[4]=e[1],ot[5]=e[2],ot[6]=n[0],ot[7]=n[1],ot[8]=n[2],a.quaternion=function(t,e){const n=e[0]+e[4]+e[8];if(n>0){let r=Math.sqrt(n+1);t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r}else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const r=(n+1)%3,i=(n+2)%3;let o=Math.sqrt(e[3*n+n]-e[3*r+r]-e[3*i+i]+1);t[n]=.5*o,o=.5/o,t[3]=(e[3*r+i]-e[3*i+r])*o,t[r]=(e[3*r+n]+e[3*n+r])*o,t[i]=(e[3*i+n]+e[3*n+i])*o}return t}(at,ot),ft(nt,r,i),lt(nt,nt,.5),lt(rt,t,nt[0]),lt(it,e,nt[1]),ft(rt,rt,it),lt(it,n,nt[2]),a.center=(0,c.g)(rt,rt,it),a.halfSize=(0,c.h)(nt,o,.5)}class ct{constructor(t){this.minVert=new Array(7),this.maxVert=new Array(7);this.buffer=new ArrayBuffer(448);let e=0;this.minProj=new Float64Array(this.buffer,e,7),e+=56,this.maxProj=new Float64Array(this.buffer,e,7),e+=56;for(let t=0;t<7;++t)this.minVert[t]=new Float64Array(this.buffer,e,3),e+=24;for(let t=0;t<7;++t)this.maxVert[t]=new Float64Array(this.buffer,e,3),e+=24;for(let t=0;t<7;++t)this.minProj[t]=Number.POSITIVE_INFINITY,this.maxProj[t]=Number.NEGATIVE_INFINITY;const n=new Array(7),r=new Array(7),{data:i,size:o}=t;for(let t=0;t<i.length;t+=o){let e=i[t];e<this.minProj[0]&&(this.minProj[0]=e,n[0]=t),e>this.maxProj[0]&&(this.maxProj[0]=e,r[0]=t),e=i[t+1],e<this.minProj[1]&&(this.minProj[1]=e,n[1]=t),e>this.maxProj[1]&&(this.maxProj[1]=e,r[1]=t),e=i[t+2],e<this.minProj[2]&&(this.minProj[2]=e,n[2]=t),e>this.maxProj[2]&&(this.maxProj[2]=e,r[2]=t),e=i[t]+i[t+1]+i[t+2],e<this.minProj[3]&&(this.minProj[3]=e,n[3]=t),e>this.maxProj[3]&&(this.maxProj[3]=e,r[3]=t),e=i[t]+i[t+1]-i[t+2],e<this.minProj[4]&&(this.minProj[4]=e,n[4]=t),e>this.maxProj[4]&&(this.maxProj[4]=e,r[4]=t),e=i[t]-i[t+1]+i[t+2],e<this.minProj[5]&&(this.minProj[5]=e,n[5]=t),e>this.maxProj[5]&&(this.maxProj[5]=e,r[5]=t),e=i[t]-i[t+1]-i[t+2],e<this.minProj[6]&&(this.minProj[6]=e,n[6]=t),e>this.maxProj[6]&&(this.maxProj[6]=e,r[6]=t)}for(let t=0;t<7;++t){let e=n[t];gt(this.minVert[t],i,e),e=r[t],gt(this.maxVert[t],i,e)}}}class ut{constructor(){this.b0=(0,u.fA)(1,0,0),this.b1=(0,u.fA)(0,1,0),this.b2=(0,u.fA)(0,0,1),this.quality=0}}function ht(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function ft(t,e,n){t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2]}function dt(t,e,n){t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2]}function lt(t,e,n){t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n}function gt(t,e,n=0){t[0]=e[n],t[1]=e[n+1],t[2]=e[n+2]}function bt(t,e,n){const r=e[0],i=e[1],o=e[2],a=n[0],s=n[1],c=n[2];t[0]=i*c-o*s,t[1]=o*a-r*c,t[2]=r*s-i*a}function mt(t,e){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(n>0){const r=1/Math.sqrt(n);t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r}}function wt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function yt(t,e){const n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i}function vt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}class pt{constructor(t=u.uY,e=kt,n=s.zK){this._data=[t[0],t[1],t[2],e[0],e[1],e[2],n[0],n[1],n[2],n[3]]}clone(){const t=new pt;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const e=new pt;return e._data=t.slice(),e}static fromJSON(t){return new pt(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return(0,c.s)(v.rq.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,e,n){this._data[0]=t,this._data[1]=e,this._data[2]=n}get halfSize(){return(0,c.s)(v.rq.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return(0,a.hZ)(v.J8.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const e=_t,n=this._data;e[0]=n[6],e[1]=n[7],e[2]=n[8],e[3]=n[9];for(let r=0;r<8;++r){const i=t[r];i[0]=(1&r?-1:1)*n[3],i[1]=(2&r?-1:1)*n[4],i[2]=(4&r?-1:1)*n[5],(0,c.u)(i,i,e),i[0]+=n[0],i[1]+=n[1],i[2]+=n[2]}}isVisible(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],e=this._data[4],n=this._data[5];return Math.sqrt(t*t+e*e+n*n)}intersectSphere(t){Ct[0]=this._data[0]-t[0],Ct[1]=this._data[1]-t[1],Ct[2]=this._data[2]-t[2];const e=this.getQuaternion(At);return(0,a.Xr)(_t,e),(0,c.u)(Ct,Ct,_t),(0,c.v)(Ct,Ct),Pt[0]=Math.min(Ct[0],this._data[3]),Pt[1]=Math.min(Ct[1],this._data[4]),Pt[2]=Math.min(Ct[2],this._data[5]),(0,c.w)(Pt,Ct)<t[3]*t[3]}intersectSphereWithMBS(t,e=this.radius){const n=this._data;Ct[0]=n[0]-t[0],Ct[1]=n[1]-t[1],Ct[2]=n[2]-t[2];const r=t[3],i=r+e;return!((0,c.x)(Ct)>i*i)&&(_t[0]=-n[6],_t[1]=-n[7],_t[2]=-n[8],_t[3]=n[9],(0,c.u)(Ct,Ct,_t),(0,c.v)(Ct,Ct),Pt[0]=Math.min(Ct[0],n[3]),Pt[1]=Math.min(Ct[1],n[4]),Pt[2]=Math.min(Ct[2],n[5]),(0,c.w)(Pt,Ct)<r*r)}intersectPlane(t){const e=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],n=this.projectedRadius((0,w.Qj)(t));return e>n?1:e<-n?-1:0}intersectRay(t,e,n=0){const r=this._data,i=_t;i[0]=-r[6],i[1]=-r[7],i[2]=-r[8],i[3]=r[9],Ct[0]=t[0]-r[0],Ct[1]=t[1]-r[1],Ct[2]=t[2]-r[2];const o=(0,c.u)(Ct,Ct,_t),a=(0,c.u)(Pt,e,_t);let s=-1/0,u=1/0;const h=this.getHalfSize(Lt);for(let t=0;t<3;t++){const e=o[t],r=a[t],i=h[t]+n;if(Math.abs(r)>1e-6){const t=(i-e)/r,n=(-i-e)/r;s=Math.max(s,Math.min(t,n)),u=Math.min(u,Math.max(t,n))}else if(e>i||e<-i)return!1}return s<=u}projectedArea(t,e,n,i){const o=this.getQuaternion(At);(0,a.Xr)(_t,o),Ct[0]=t[0]-this._data[0],Ct[1]=t[1]-this._data[1],Ct[2]=t[2]-this._data[2],(0,c.u)(Ct,Ct,_t);const s=this.getHalfSize(Lt),u=Ct[0]<-s[0]?-1:Ct[0]>s[0]?1:0,f=Ct[1]<-s[1]?-1:Ct[1]>s[1]?1:0,d=Ct[2]<-s[2]?-1:Ct[2]>s[2]?1:0,l=Math.abs(u)+Math.abs(f)+Math.abs(d);if(0===l)return 1/0;const g=1===l?4:6,b=6*(u+3*f+9*d+13);(0,r.I0)(Et,o),(0,r.hs)(Et,Et,s);const m=this.getCenter(Tt);for(let t=0;t<g;t++){const n=jt[b+t];(0,c.s)(Ct,((1&n)<<1)-1,(2&n)-1,((4&n)>>1)-1),(0,c.t)(Ct,Ct,Et),(0,c.g)(Ut,m,Ct),Ut[3]=1,(0,h.t)(Ut,Ut,e);const r=1/Math.max(1e-6,Ut[3]);It[2*t]=Ut[0]*r,It[2*t+1]=Ut[1]*r}const w=2*g-2;let y=It[0]*(It[3]-It[w+1])+It[w]*(It[1]-It[w-1]);for(let t=2;t<w;t+=2)y+=It[t]*(It[t+3]-It[t-1]);return Math.abs(y)*n*i*.125}projectedRadius(t){const e=this.getQuaternion(At);return(0,a.Xr)(_t,e),(0,c.u)(Ct,t,_t),Math.abs(Ct[0]*this._data[3])+Math.abs(Ct[1]*this._data[4])+Math.abs(Ct[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius((0,w.Qj)(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius((0,w.Qj)(t))}toAaBoundingBox(t){const e=this.getQuaternion(At),n=(0,r.I0)(Et,e),i=this._data[3]*Math.abs(n[0])+this._data[4]*Math.abs(n[3])+this._data[5]*Math.abs(n[6]),o=this._data[3]*Math.abs(n[1])+this._data[4]*Math.abs(n[4])+this._data[5]*Math.abs(n[7]),a=this._data[3]*Math.abs(n[2])+this._data[4]*Math.abs(n[5])+this._data[5]*Math.abs(n[8]);t[0]=this._data[0]-i,t[1]=this._data[1]-o,t[2]=this._data[2]-a,t[3]=this._data[0]+i,t[4]=this._data[1]+o,t[5]=this._data[2]+a}transform(t,e,n,r=0,i=(0,l.lO)(n),o=(0,l.lO)(e),s=(0,m.jd)(e,o)){if(n===i)e.isGeographic?function(t,e,n,r,i=(0,l.lO)(n)){const o=(0,d.tO)(n),s=1+Math.max(0,r)/(o.radius+t.centerZ);t.getCenter(Bt),Bt[2]+=r,(0,b.projectBuffer)(Bt,n,0,Bt,i,0,1),e.center=Bt;const u=t.getQuaternion(At);e.quaternion=u,(0,a.Xr)(_t,u),(0,c.s)(qt,0,0,1),(0,c.u)(qt,qt,_t);const h=t.getHalfSize(Lt);(0,c.s)(qt,h[0]*Math.abs(qt[0]),h[1]*Math.abs(qt[1]),h[2]*Math.abs(qt[2])),(0,c.h)(qt,qt,o.inverseFlattening),(0,c.g)(qt,h,qt),e.halfSize=(0,c.h)(qt,qt,s)}(this,t,e,r,o):function(t,e,n,r,i=(0,l.lO)(n),o=(0,m.jd)(n,i)){t.getCorners(Yt),t.getCenter(Bt),Bt[2]+=r,(0,g.l)(n,Bt,Nt,i),e.setCenter(Nt[12],Nt[13],Nt[14]);const s=2*Math.sqrt(1+Nt[0]+Nt[5]+Nt[10]);_t[0]=(Nt[6]-Nt[9])/s,_t[1]=(Nt[8]-Nt[2])/s,_t[2]=(Nt[1]-Nt[4])/s,_t[3]=.25*s;const u=t.getQuaternion(At);e.quaternion=(0,a.lw)(_t,_t,u),(0,a.Xr)(_t,_t),(0,c.s)(Xt,0,0,0);const h=e.getCenter(Vt);for(const t of Yt)t[2]+=r,o(t,0,t,0),(0,c.z)(qt,t,h),(0,c.u)(qt,qt,_t),(0,c.v)(qt,qt),(0,c.C)(Xt,Xt,qt);e.halfSize=Xt}(this,t,e,r,o,s);else if(e.isWGS84&&(n.isWebMercator||(0,y.r1)(n)))!function(t,e,n,r,i){e.getCenter(Tt),Tt[2]+=i;const o=(0,l.lO)(n);(0,b.projectBuffer)(Tt,t,0,Tt,o,0,1),St(o,e,Tt,n,r)}(e,this,n,t,r);else if(e.isWebMercator&&(0,y.r1)(n))!function(t,e,n,r,i){e.getCenter(Tt),Tt[2]+=i,St(t,e,Tt,n,r)}(e,this,n,t,r);else{const i=this.getCenter(Tt);i[2]+=r,(0,b.projectBuffer)(i,e,0,i,n,0,1),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(At),t.halfSize=this.getHalfSize(Lt))}}}const _t=(0,s.vt)(),At=(0,s.vt)(),Mt=(0,s.vt)(),Ct=(0,u.vt)(),Pt=(0,u.vt)(),Ut=(0,f.vt)();function zt(t,e=new pt){return function(t,e){const{data:n,size:r}=t,i=n.length/r;if(i<=0)return;const o=new ct(t);ft(C,o.minProj,o.maxProj),lt(C,C,.5),dt(P,o.maxProj,o.minProj);const a=ht(P),s=new ut;s.quality=a,i<14&&(t=new A.K(new Float64Array(o.buffer,112,42),3));const c=(0,u.vt)(),h=(0,u.vt)(),f=(0,u.vt)(),d=(0,u.vt)(),l=(0,u.vt)(),g=(0,u.vt)(),b=(0,u.vt)();switch(U(o,t,b,c,h,f,d,l,g,s)){case 1:return void Q(C,P,e);case 2:return void tt(t,d,e)}T(t,b,c,h,f,d,l,g,s),et(t,s.b0,s.b1,s.b2,K,$);const m=(0,u.vt)();dt(m,$,K),s.quality=ht(m),s.quality<a?st(s.b0,s.b1,s.b2,K,$,m,e):Q(C,P,e)}(t,e),e}const It=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],jt=(()=>{const t=new Int8Array(162);let e=0;const n=n=>{for(let r=0;r<n.length;r++)t[e+r]=n[r];e+=6};return n([6,2,3,1,5,4]),n([0,2,3,1,5,4]),n([0,2,3,7,5,4]),n([0,1,3,2,6,4]),n([0,1,3,2,0,0]),n([0,1,5,7,3,2]),n([0,1,3,7,6,4]),n([0,1,3,7,6,2]),n([0,1,5,7,6,2]),n([0,1,5,4,6,2]),n([0,1,5,4,0,0]),n([0,1,3,7,5,4]),n([0,2,6,4,0,0]),n([0,0,0,0,0,0]),n([1,3,7,5,0,0]),n([2,3,7,6,4,0]),n([2,3,7,6,0,0]),n([2,3,1,5,7,6]),n([0,1,5,7,6,2]),n([0,1,5,7,6,4]),n([0,1,3,7,6,4]),n([4,5,7,6,2,0]),n([4,5,7,6,0,0]),n([4,5,1,3,7,6]),n([0,2,3,7,5,4]),n([6,2,3,7,5,4]),n([6,2,3,1,5,4]),t})();function xt(t,e,n,r,i){const o=t.getQuaternion(At);i.quaternion=o,(0,a.Xr)(_t,o);const s=t.getCenter(Tt),h=t.getHalfSize(Lt);if(r===p.RT.Global){(0,c.u)(qt,s,_t),(0,c.v)(Xt,qt),(0,c.y)(Dt,Xt,h),(0,c.z)(Dt,Xt,Dt);const r=(0,c.l)(Dt);(0,c.g)(Dt,Xt,h);const o=(0,c.l)(Dt);if(r<n)i.center=s,(0,c.s)(qt,n,n,n),i.halfSize=(0,c.g)(qt,h,qt);else{const a=o>0?1+e/o:1,s=r>0?1+n/r:1,u=(s+a)/2,f=(s-a)/2;(0,c.h)(Dt,Xt,f),i.halfSize=(0,c.r)(Dt,Dt,h,u),(0,c.h)(Dt,Xt,u),(0,c.r)(Dt,Dt,h,f),(0,c.A)(qt,qt),(0,c.B)(qt,Dt,qt);const d=t.getQuaternion(Mt);i.center=(0,c.u)(qt,qt,d)}}else{i.center=(0,c.r)(qt,s,u.Cb,(n+e)/2);const t=(0,c.u)(qt,u.Cb,_t);(0,c.v)(t,t),i.halfSize=(0,c.r)(Xt,h,t,(n-e)/2)}return i}function St(t,e,n,i,o){const a=e.getQuaternion(At),s=(0,r.I0)(Et,a),c=e.getHalfSize(Lt);for(let t=0;t<8;++t){for(let e=0;e<3;++e)Bt[e]=c[e]*(t&1<<e?-1:1);for(let e=0;e<3;++e){let r=n[e];for(let t=0;t<3;++t)r+=Bt[t]*s[3*t+e];Ot[3*t+e]=r}}(0,b.projectBuffer)(Ot,t,0,Ot,i,0,8),zt(Ft,o)}const Ot=new Array(24),Ft=new A.K(Ot,3),Bt=(0,u.vt)(),Tt=(0,u.vt)(),Vt=(0,u.vt)(),Lt=(0,u.vt)(),Et=(0,i.vt)(),Nt=(0,o.vt)(),Yt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],qt=(0,u.vt)(),Xt=(0,u.vt)(),Dt=(0,u.vt)(),kt=(0,u.fA)(-1,-1,-1)}}]);