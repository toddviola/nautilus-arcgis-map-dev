"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[6858],{62546:(t,e,r)=>{r.d(e,{b:()=>f,l:()=>s,o:()=>c});var i,n=r(65430),o={exports:{}};void 0!==(i=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(o.exports=i);const s=(0,n.g)(o.exports);var a,h={exports:{}};a=h,function(t){var e=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"];void 0!==e&&(a.exports=e)}();const c=(0,n.g)(h.exports);var l,u={exports:{}};l=u,function(t){var e=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];void 0!==e&&(l.exports=e)}();const f=(0,n.g)(u.exports)},86785:(t,e,r)=>{r.d(e,{g:()=>c});var i=r(16291),n=r(60249),o=r(97820),s=r(80811),a=r(90928);const h=()=>n.A.getLogger("esri.views.webgl.BufferObject");class c{static createIndex(t,e,r){return new c(t,a.NZ.ELEMENT_ARRAY_BUFFER,e,r)}static createVertex(t,e,r){return new c(t,a.NZ.ARRAY_BUFFER,e,r)}static createUniform(t,e,r){return new c(t,a.NZ.UNIFORM_BUFFER,e,r)}static createPixelPack(t,e=a._U.STREAM_READ,r){const i=new c(t,a.NZ.PIXEL_PACK_BUFFER,e);return r&&i.setSize(r),i}static createPixelUnpack(t,e=a._U.STREAM_DRAW,r){return new c(t,a.NZ.PIXEL_UNPACK_BUFFER,e,r)}static createTransformFeedback(t,e=a._U.STATIC_DRAW,r){const i=new c(t,a.NZ.TRANSFORM_FEEDBACK_BUFFER,e);return i.setSize(r),i}constructor(t,e,r,i){this._context=t,this.bufferType=e,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(a.vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,s.Y2)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){return this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER?this._indexType===a.pe.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===a.NZ.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(a.vt.BufferObject,this),this._context=null):this._glName&&h().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(t<=0&&h().error("Buffer size needs to be positive!"),this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case a.pe.UNSIGNED_SHORT:t*=2;break;case a.pe.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===a.NZ.ELEMENT_ARRAY_BUFFER&&((0,o.jq)(t)&&(e/=2,this._indexType=a.pe.UNSIGNED_SHORT),(0,o.XJ)(t)&&(e/=4,this._indexType=a.pe.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=e?i.bufferData(this.bufferType,e,this.usage):i.bufferData(this.bufferType,t,this.usage),(0,s.Y2)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(t,e,r,i){if(!t)return;(e<0||e*t.BYTES_PER_ELEMENT>=this.usedMemory)&&h().error("offset is out of range!"),r>=i&&h().error("end must be bigger than start!"),(e+(i-r))*t.BYTES_PER_ELEMENT>this.usedMemory&&h().error("An attempt to write beyond the end of the buffer!");const n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:o}=this._context;o.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,r,i-r),(0,s.Y2)(o),this._isVAOAware&&this._context.bindVAO(n)}getSubData(t,e=0,r,n){if(r<0||n<0)return void h().error("Problem getting subdata: offset and length were less than zero!");const o=function(t){return(0,i.Xj)(t)}(t)?t.BYTES_PER_ELEMENT:1;if(o*((r??0)+(n??0))>t.byteLength)return void h().error("Problem getting subdata: offset and length exceeded destination size!");e+o*(n??0)>this.usedMemory&&h().warn("Potential problem getting subdata: requested data exceeds buffer size!");const s=this._context.gl;this.bufferType===a.NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,a.NZ.TRANSFORM_FEEDBACK_BUFFER),s.getBufferSubData(a.NZ.TRANSFORM_FEEDBACK_BUFFER,e,t,r,n),this._context.unbindBuffer(a.NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,a.NZ.COPY_READ_BUFFER),s.getBufferSubData(a.NZ.COPY_READ_BUFFER,e,t,r,n),this._context.unbindBuffer(a.NZ.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,r,i){await this._context.clientWaitAsync(),this.getSubData(t,e,r,i)}}},11410:(t,e,r)=>{r.d(e,{H:()=>u});r(22333);var i=r(60249),n=r(7929),o=r(86785),s=r(80811),a=r(90928),h=r(69932),c=r(49894),l=r(67405);class u{constructor(t,e,r=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(a.vt.FramebufferObject,this);const i=f(e)?e:new l.g(this._context,e);if(this._colorAttachments.set(a.Nm.COLOR_ATTACHMENT0,i),this._validateTextureDescriptor(i.descriptor),this._validateColorAttachmentPoint(a.Nm.COLOR_ATTACHMENT0),null!=r)if(function(t){return f(t)||null!=t&&"pixelFormat"in t}(r))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=f(r)?r:new l.g(this._context,r),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=function(t){return null!=t&&"type"in t&&t.type===h.p.RenderBuffer}(r)?r:new c.l(this._context,r);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(a.vt.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(a.Nm.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce(((t,[e,r])=>t+r.usedMemory),this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&f(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=a.Nm.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const r=t.descriptor;this._validateTextureDescriptor(r),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=a.Nm.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=a.Nm.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(e);r&&this._framebufferTexture2D(r.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case h.p.Texture:return this._attachDepthStencilTexture(t);case h.p.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==a.Ab.DEPTH_STENCIL&&e.pixelFormat!==a.Ab.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==a.ld.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,a.nI)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,a.nI)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const r=this._context.gl,i=this._getGLAttachmentPoint(e);r.framebufferRenderbuffer(a.R.FRAMEBUFFER,i,r.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,r=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(a.R.FRAMEBUFFER,r,e.RENDERBUFFER,null)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,r,i,n,o,s){(t<0||e<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");const h=s.descriptor;s.descriptor.target!==a.Ap.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==h?.width||null==h?.height||t+r>this.width||e+i>this.height||n+r>h.width||o+i>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,u=c.bindTexture(s,l.g.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(l.g.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(a.Ap.TEXTURE_2D,0,n,o,t,e,r,i),c.bindTexture(u,l.g.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,r,i,n,o,s){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,r,i,n,o,s)}async readPixelsAsync(t,e,r,i,n,s,h){const{gl:c}=this._context,l=o.g.createPixelPack(this._context,a._U.STREAM_READ,h.byteLength);this._context.bindBuffer(l),this._context.bindFramebuffer(this),c.readPixels(t,e,r,i,n,s,0),this._context.unbindBuffer(a.NZ.PIXEL_PACK_BUFFER),await l.getSubDataAsync(h),l.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const r={width:t,height:e};_(r,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(r.width,r.height))),this._depthStencilTexture?.resize(r.width,r.height),this._initialized&&(_(r,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(r.width,r.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=a.R.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const r=e.createFramebuffer();if(e.bindFramebuffer(t,r),this._colorAttachments.forEach(((e,r)=>this._framebufferTexture2D(e.glName,r,d(e),t))),this._depthStencilBuffer){const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,r,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,d(this._depthStencilTexture),t);(0,s.en)()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=r,this._initialized=!0}_framebufferTexture2D(t,e=a.Nm.COLOR_ATTACHMENT0,r=a.Ap.TEXTURE_2D,i=a.R.FRAMEBUFFER,n=0){this._context.gl.framebufferTexture2D(i,e,r,t,n)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(a.R.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,n.WD)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,n.WD)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==a.Ap.TEXTURE_2D&&t.target!==a.Ap.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),_(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){_(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case a.yQ.DEPTH_COMPONENT16:case a.yQ.DEPTH_COMPONENT24:case a.yQ.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case a.yQ.DEPTH24_STENCIL8:case a.yQ.DEPTH32F_STENCIL8:case a.yQ.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case a.yQ.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(-1===u._MAX_COLOR_ATTACHMENTS){const{gl:t}=this._context;u._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const e=t-a.Nm.COLOR_ATTACHMENT0;e+1>u._MAX_COLOR_ATTACHMENTS&&i.A.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${u._MAX_COLOR_ATTACHMENTS} color attachments`)}}function f(t){return null!=t&&"type"in t&&t.type===h.p.Texture}function _(t,e){const r=Math.max(t.width,t.height);if(r>e){i.A.getLogger("esri.views.webgl.FramebufferObject").warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const n=e/r;return t.width=Math.round(t.width*n),t.height=Math.round(t.height*n),!1}return!0}function d(t){return t.descriptor.target===a.Ap.TEXTURE_CUBE_MAP?a.Ap.TEXTURE_CUBE_MAP_POSITIVE_X:a.Ap.TEXTURE_2D}u._MAX_COLOR_ATTACHMENTS=-1},28645:(t,e,r)=>{r.d(e,{B:()=>B});r(22333);var i=r(80811),n=r(90928);const o=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],s={enableCache:!1};var a=r(62546),h=999,c=9999,l=0,u=1,f=2,_=3,d=4,m=5,g=6,p=7,T=8,x=9,E=10,b=11,A=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function S(){var t,e,r,i=0,n=0,o=h,s=[],S=[],R=1,D=0,F=0,C=!1,M=!1,N="";return function(t){return S=[],null!==t?v(t.replace?t.replace(/\r\n/g,"\n"):t):(s.length&&y(s.join("")),o=E,y("(eof)"),S)};function y(t){t.length&&S.push({type:A[o],data:t,position:F,line:R,column:D})}function v(e){var s;for(i=0,r=(N+=e).length;t=N[i],i<r;){switch(s=i,o){case l:i=P();break;case u:case f:i=B();break;case _:i=L();break;case d:i=I();break;case b:i=k();break;case m:i=z();break;case c:i=H();break;case x:i=w();break;case h:i=U()}s!==i&&("\n"===N[s]?(D=0,++R):++D)}return n+=i,N=N.slice(i),S}function U(){return s=s.length?[]:s,"/"===e&&"*"===t?(F=n+i-1,o=l,e=t,i+1):"/"===e&&"/"===t?(F=n+i-1,o=u,e=t,i+1):"#"===t?(o=f,F=n+i,i):/\s/.test(t)?(o=x,F=n+i,i):(C=/\d/.test(t),M=/[^\w_]/.test(t),F=n+i,o=C?d:M?_:c,i)}function w(){return/[^\s]/g.test(t)?(y(s.join("")),o=h,i):(s.push(t),e=t,i+1)}function B(){return"\r"!==t&&"\n"!==t||"\\"===e?(s.push(t),e=t,i+1):(y(s.join("")),o=h,i)}function P(){return"/"===t&&"*"===e?(s.push(t),y(s.join("")),o=h,i+1):(s.push(t),e=t,i+1)}function L(){if("."===e&&/\d/.test(t))return o=m,i;if("/"===e&&"*"===t)return o=l,i;if("/"===e&&"/"===t)return o=u,i;if("."===t&&s.length){for(;O(s););return o=m,i}if(";"===t||")"===t||"("===t){if(s.length)for(;O(s););return y(t),o=h,i+1}var r=2===s.length&&"="!==t;if(/[\w_\d\s]/.test(t)||r){for(;O(s););return o=h,i}return s.push(t),e=t,i+1}function O(t){for(var e,r,i=0;;){if(e=a.o.indexOf(t.slice(0,t.length+i).join("")),r=a.o[e],-1===e){if(i--+t.length>0)continue;r=t.slice(0,1).join("")}return y(r),F+=r.length,(s=s.slice(r.length)).length}}function k(){return/[^a-fA-F0-9]/.test(t)?(y(s.join("")),o=h,i):(s.push(t),e=t,i+1)}function I(){return"."===t||/[eE]/.test(t)?(s.push(t),o=m,e=t,i+1):"x"===t&&1===s.length&&"0"===s[0]?(o=b,s.push(t),e=t,i+1):/[^\d]/.test(t)?(y(s.join("")),o=h,i):(s.push(t),e=t,i+1)}function z(){return"f"===t&&(s.push(t),e=t,i+=1),/[eE]/.test(t)||"-"===t&&/[eE]/.test(e)?(s.push(t),e=t,i+1):/[^\d]/.test(t)?(y(s.join("")),o=h,i):(s.push(t),e=t,i+1)}function H(){if(/[^\d\w_]/.test(t)){var r=s.join("");return o=a.l.indexOf(r)>-1?T:a.b.indexOf(r)>-1?p:g,y(s.join("")),o=h,i}return s.push(t),e=t,i+1}}function R(t){return function(t){var e=S(),r=[];return(r=r.concat(e(t))).concat(e(null))}(t)}const D=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function F(t,e){for(let r=e-1;r>=0;r--){const e=t[r];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function C(t,e,r,i){i=i||r;for(const n of t)if("ident"===n.type&&n.data===r)return i in e?e[i]++:e[i]=0,C(t,e,i+"_"+e[i],i);return r}function M(t,e,r="afterVersion"){function i(t,e){for(let r=e;r<t.length;r++){const e=t[r];if("operator"===e.type&&";"===e.data)return r}return null}const n={data:"\n",type:"whitespace"},o=e=>e<t.length&&/[^\r\n]$/.test(t[e].data);let s=function(t){let e=-1,n=0,o=-1;for(let s=0;s<t.length;s++){const a=t[s];if("preprocessor"===a.type&&(/\#(if|ifdef|ifndef)\s+.+/.test(a.data)?++n:/\#endif\s*.*/.test(a.data)&&--n),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===a.type&&a.data.startsWith("#version")&&(o=Math.max(o,s)),"afterPrecision"===r&&"keyword"===a.type&&"precision"===a.data){const e=i(t,s);if(null===e)throw new Error("precision statement not followed by any semicolons!");o=Math.max(o,e)}e<o&&0===n&&(e=s)}return e+1}(t);o(s-1)&&t.splice(s++,0,n);for(const r of e)t.splice(s++,0,r);o(s-1)&&o(s)&&t.splice(s,0,n)}function N(t,e,r,i="lowp"){M(t,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:i},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function y(t,e,r,i,n="lowp"){M(t,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:i.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:e},{type:"operator",data:";"}],"afterPrecision")}function v(t,e){let r,i,n=-1;for(let o=e;o<t.length;o++){const e=t[o];if("operator"===e.type&&("["===e.data&&(r=o),"]"===e.data)){i=o;break}"integer"===e.type&&(n=parseInt(e.data,10))}return r&&i&&t.splice(r,i-r+1),n}function U(t,e){if(t.startsWith("#version 300"))return t;const r=(i=t,s.enableCache?w.get(i):null);var i;if(null!=r)return r;const a=R(t);if("300 es"===function(t,e="100",r="300 es"){const i=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of t)if("preprocessor"===n.type){const t=i.exec(n.data);if(t){const i=t[1].replaceAll(/\s\s+/g," ");if(i===r)return i;if(i===e)return n.data="#version "+r,e;throw new Error("unknown glsl version: "+i)}}return t.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(a,"100","300 es"))return t;let h=null,c=null;const l={},u={};for(let t=0;t<a.length;++t){const r=a[t];switch(r.type){case"keyword":e===n.Co.VERTEX_SHADER&&"attribute"===r.data?r.data="in":"varying"===r.data&&(r.data=e===n.Co.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r.data.trim())&&(r.data=r.data.replaceAll(/(2D|Cube|EXT)/g,"")),e===n.Co.FRAGMENT_SHADER&&"gl_FragColor"===r.data&&(h||(h=C(a,l,"fragColor"),N(a,h,"vec4")),r.data=h),e===n.Co.FRAGMENT_SHADER&&"gl_FragData"===r.data){const e=v(a,t+1),i=C(a,l,"fragData");y(a,i,"vec4",e,"mediump"),r.data=i}else e===n.Co.FRAGMENT_SHADER&&"gl_FragDepthEXT"===r.data&&(c||(c=C(a,l,"gl_FragDepth")),r.data=c);break;case"ident":if(o.includes(r.data)){if(e===n.Co.VERTEX_SHADER&&F(a,t))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");r.data in u||(u[r.data]=C(a,l,r.data)),r.data=u[r.data]}}}for(let t=a.length-1;t>=0;--t){const e=a[t];if("preprocessor"===e.type){const r=e.data.match(/\#extension\s+(.*)\:/);if(r&&r[1]&&D.has(r[1].trim())){const e=a[t+1];a.splice(t,e&&"whitespace"===e.type?2:1)}const i=e.data.match(/\#ifdef\s+(.*)/);i&&i[1]&&D.has(i[1].trim())&&(e.data="#if 1");const n=e.data.match(/\#ifndef\s+(.*)/);n&&n[1]&&D.has(n[1].trim())&&(e.data="#if 0")}}return function(t,e){return s.enableCache&&w.set(t,e),e}(t,function(t){return t.map((t=>"eof"!==t.type?t.data:"")).join("")}(a))}const w=new Map;class B{constructor(t,e,r,o,s=new Map,a=[]){this._context=t,this._locations=o,this._uniformBlockBindings=s,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),e=U(e,n.Co.VERTEX_SHADER),r=U(r,n.Co.FRAGMENT_SHADER),this._vShader=P(this._context,n.Co.VERTEX_SHADER,e),this._fShader=P(this._context,n.Co.FRAGMENT_SHADER,r),O.enabled&&(this._linesOfCode=e.match(/\n/g).length+r.match(/\n/g).length+2,this._context.instanceCounter.increment(n.vt.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(n.vt.Shader,this),(0,i.Xc)()&&(this.vertexShader=e,this.fragmentShader=r),this.usedMemory=e.length+r.length;const h=this._context.gl,c=h.createProgram();h.attachShader(c,this._vShader),h.attachShader(c,this._fShader),this._locations.forEach(((t,e)=>h.bindAttribLocation(c,t,e))),this._transformFeedbackVaryings?.length&&h.transformFeedbackVaryings(c,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(c),(0,i.Xc)()&&!h.getProgramParameter(c,h.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${h.getProgramParameter(c,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(c)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[t,e]of this._uniformBlockBindings){const r=h.getUniformBlockIndex(c,t);r<4294967295&&h.uniformBlockBinding(c,r,e)}this._glName=c,this._context.instanceCounter.increment(n.vt.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,e=this._context.instanceCounter;this._nameToUniformLocation.forEach((t=>t&&e.decrement(n.vt.Uniform,t))),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(e.decrement(n.vt.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,e.decrement(n.vt.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,e.decrement(n.vt.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const e=this._nameToUniformLocation.get(t);if(void 0!==e)return e;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(n.vt.Uniform,e),e}return null}hasUniform(t){return null!=this._getUniformLocation(t)}setUniform1i(t,e){const r=this._nameToUniform1.get(t);void 0!==r&&e===r||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1iv(t,e){L(this._nameToUniform1v,t,e)&&this._context.gl.uniform1iv(this._getUniformLocation(t),e)}setUniform2iv(t,e){L(this._nameToUniform2,t,e)&&this._context.gl.uniform2iv(this._getUniformLocation(t),e)}setUniform3iv(t,e){L(this._nameToUniform3,t,e)&&this._context.gl.uniform3iv(this._getUniformLocation(t),e)}setUniform4iv(t,e){L(this._nameToUniform4,t,e)&&this._context.gl.uniform4iv(this._getUniformLocation(t),e)}setUniform1f(t,e){const r=this._nameToUniform1.get(t);void 0!==r&&e===r||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1fv(t,e){L(this._nameToUniform1v,t,e)&&this._context.gl.uniform1fv(this._getUniformLocation(t),e)}setUniform2f(t,e,r){const i=this._nameToUniform2.get(t);void 0===i?(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),this._nameToUniform2.set(t,[e,r])):e===i[0]&&r===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,r),i[0]=e,i[1]=r)}setUniform2fv(t,e){L(this._nameToUniform2,t,e)&&this._context.gl.uniform2fv(this._getUniformLocation(t),e)}setUniform3f(t,e,r,i){const n=this._nameToUniform3.get(t);void 0===n?(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,i),this._nameToUniform3.set(t,[e,r,i])):e===n[0]&&r===n[1]&&i===n[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,r,i),n[0]=e,n[1]=r,n[2]=i)}setUniform3fv(t,e){const r=this._getUniformLocation(t);null!=r&&L(this._nameToUniform3,t,e)&&this._context.gl.uniform3fv(r,e)}setUniform4f(t,e,r,i,n){const o=this._nameToUniform4.get(t);void 0===o?(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,i,n),this._nameToUniform4.set(t,[e,r,i,n])):void 0!==o&&e===o[0]&&r===o[1]&&i===o[2]&&n===o[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,r,i,n),o[0]=e,o[1]=r,o[2]=i,o[3]=n)}setUniform4fv(t,e){const r=this._getUniformLocation(t);null!=r&&L(this._nameToUniform4,t,e)&&this._context.gl.uniform4fv(r,e)}setUniformMatrix3fv(t,e,r=!1){const i=this._getUniformLocation(t);null!=i&&L(this._nameToUniformMatrix3,t,e)&&this._context.gl.uniformMatrix3fv(i,r,e)}setUniformMatrix4fv(t,e,r=!1){const i=this._getUniformLocation(t);null!=i&&L(this._nameToUniformMatrix4,t,e)&&this._context.gl.uniformMatrix4fv(i,r,e)}stop(){}}function P(t,e,r){const o=t.gl,s=o.createShader(e);return o.shaderSource(s,r),o.compileShader(s),(0,i.Xc)()&&!o.getShaderParameter(s,o.COMPILE_STATUS)&&(console.error("Compile error in ".concat(e===n.Co.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(o.getShaderInfoLog(s)),console.error(function(t){let e=2;return t.replaceAll("\n",(()=>"\n"+function(t){return t>=1e3?t.toString():("  "+t).slice(-3)}(e++)+":"))}(r))),s}function L(t,e,r){const i=t.get(e);if(!i)return t.set(e,Array.from(r)),!0;const n=r.length;if(i.length!==n)return t.set(e,Array.from(r)),!0;for(let t=0;t<n;++t){const e=r[t];if(i[t]!==e){for(i[t]=e;t<n;++t)i[t]=r[t];return!0}}return!1}const O={enabled:!1}},49894:(t,e,r)=>{r.d(e,{l:()=>s});var i=r(90928),n=r(69932),o=r(12255);class s{constructor(t,e){this._context=t,this._descriptor=e,this.type=n.p.RenderBuffer,this._context.instanceCounter.increment(i.vt.Renderbuffer,this);const r=this._context.gl;this.glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:s,internalFormat:a,multisampled:h}=e;h?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,a,o,s):r.renderbufferStorage(r.RENDERBUFFER,a,o,s)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get usedMemory(){return(0,o.e)(this._descriptor)}resize(t,e){const r=this._descriptor;if(r.width===t&&r.height===e)return;r.width=t,r.height=e;const i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(i.vt.Renderbuffer,this),this._context=null)}}},12255:(t,e,r)=>{r.d(e,{e:()=>o,q:()=>n});var i=r(29828);class n{constructor(t,e,r=e){this.internalFormat=t,this.width=e,this.height=r,this.multisampled=!1,this.samples=1}}function o(t){return t.width<=0||t.height<=0||null==t.internalFormat?0:t.width*t.height*(0,i.IB)(t.internalFormat)}}}]);