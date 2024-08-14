"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[8770],{85104:(e,t,r)=>{r.d(t,{D:()=>G,b:()=>V});var i=r(98055),n=r(18725),o=r(78816),a=r(96132),s=r(97314),l=r(84380),c=r(37649),d=r(45877),u=r(15229),h=r(56121),m=r(53805),f=r(46275),p=r(58994),v=r(65257),g=r(11066),_=r(96491),x=r(71453),T=r(54522),b=r(33058),A=r(20913),y=r(21337),S=r(83648),E=r(39496),M=r(12479),w=r(42623),C=r(60270),O=r(65530),I=r(190),R=r(21605),N=r(85190),P=r(41509),L=r(46127),H=r(38322),D=r(13868),F=r(9886),B=r(71378),z=r(2031);function V(e){const t=new D.N5,{vertex:r,fragment:V,varyings:G}=t;if((0,R.NB)(r,e),t.include(d.I),G.add("vpos","vec3"),t.include(w.A,e),t.include(l.BK,e),t.include(p.G,e),t.include(M.q2,e),e.output===o.V.Color||e.output===o.V.Alpha){t.include(M.Sx,e),t.include(M.MU,e),t.include(M.O1,e),t.include(M.QM,e),(0,R.yu)(r,e),t.include(c.Y,e),t.include(s.d,e);const o=e.normalType===c.W.Attribute||e.normalType===c.W.Compressed;o&&e.offsetBackfaces&&t.include(n.M),t.include(g.W,e),t.include(f.Mh,e),e.instancedColor&&t.attributes.add(z.r.INSTANCECOLOR,"vec4"),G.add("vPositionLocal","vec3"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new P.E("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),e.multipassEnabled&&G.add("depth","float"),r.code.add(H.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${H.H.float(C.y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?H.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case o.V.Alpha:t.include(a.HQ,e),t.include(O.S,e),t.include(b.Q,e),V.uniforms.add(new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&V.uniforms.add(new F.N("tex",(e=>e.texture))),V.include(I.N),V.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?H.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case o.V.Color:t.include(a.HQ,e),t.include(x.kA,e),t.include(_.n,e),t.include(O.S,e),t.include(e.instancedDoublePrecision?E.G:E.Bz,e),t.include(b.Q,e),(0,R.yu)(V,e),V.uniforms.add(r.uniforms.get("localOrigin"),new N.t("ambient",(e=>e.ambient)),new N.t("diffuse",(e=>e.diffuse)),new L.m("opacity",(e=>e.opacity)),new L.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&V.uniforms.add(new F.N("tex",(e=>e.texture))),t.include(S._Z,e),t.include(y.c,e),V.include(I.N),t.include(A.r,e),(0,x.a8)(V),(0,x.eU)(V),(0,T.O4)(V),V.code.add(H.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?H.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?H.H`colorUV`:H.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:H.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.W.ScreenDerivative?H.H`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:H.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?H.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:H.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?H.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?H.H`normalUV`:"vuv0"});`:H.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?H.H`normalize(posWorld);`:H.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?H.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.A9.Normal||e.pbrMode===S.A9.Schematic?H.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?H.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:H.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===B.y.Color?H.H`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(v.E,e),t}const G=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:"Module"}))},74672:(e,t,r)=>{r.d(t,{R:()=>F,b:()=>D});var i=r(98055),n=r(18725),o=r(78816),a=r(96132),s=r(97314),l=r(84380),c=r(37649),d=r(45877),u=r(15229),h=r(56121),m=r(53805),f=r(58994),p=r(65257),v=r(96491),g=r(71453),_=r(54522),x=r(33058),T=r(21337),b=r(83648),A=r(39496),y=r(42623),S=r(60270),E=r(65530),M=r(190),w=r(21605),C=r(85190),O=r(41509),I=r(46127),R=r(38322),N=r(13868),P=r(9886),L=r(71378),H=r(2031);function D(e){const t=new N.N5,{vertex:r,fragment:D,varyings:F}=t;return(0,w.NB)(r,e),t.include(d.I),F.add("vpos","vec3"),t.include(y.A,e),t.include(l.BK,e),t.include(f.G,e),e.output!==o.V.Color&&e.output!==o.V.Alpha||((0,w.yu)(t.vertex,e),t.include(c.Y,e),t.include(s.d,e),e.offsetBackfaces&&t.include(n.M),e.instancedColor&&t.attributes.add(H.r.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.multipassEnabled&&F.add("depth","float"),t.include(h.U,e),t.include(i.oD,e),t.include(u.K,e),t.include(m.c,e),r.uniforms.add(new O.E("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(S.y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.V.Alpha&&(t.include(a.HQ,e),t.include(E.S,e),t.include(x.Q,e),D.uniforms.add(new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.N("tex",(e=>e.texture))),D.include(M.N),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===o.V.Color&&(t.include(a.HQ,e),t.include(g.kA,e),t.include(v.n,e),t.include(E.S,e),t.include(e.instancedDoublePrecision?A.G:A.Bz,e),t.include(x.Q,e),(0,w.yu)(t.fragment,e),(0,_.Gc)(D),(0,g.a8)(D),(0,g.eU)(D),D.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new C.t("ambient",(e=>e.ambient)),new C.t("diffuse",(e=>e.diffuse)),new I.m("opacity",(e=>e.opacity)),new I.m("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&D.uniforms.add(new P.N("tex",(e=>e.texture))),t.include(b._Z,e),t.include(T.c,e),D.include(M.N),(0,_.O4)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?R.H`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.A9.Normal||e.pbrMode===b.A9.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.y.Color?R.H`fragColor = premultiplyAlpha(fragColor);`:R.H``}
      }
    `)),t.include(p.E,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},52984:(e,t,r)=>{r.d(t,{S:()=>g,b:()=>f,g:()=>p});var i=r(38330),n=r(24940),o=r(47471),a=r(31973),s=r(90892),l=r(14279),c=r(46127),d=r(38322),u=r(13868),h=r(9886);const m=16;function f(){const e=new u.N5,t=e.fragment;return e.include(o.c),e.include(s.Ir),t.include(a.E),t.uniforms.add(new c.m("radius",((e,t)=>p(t.camera)))),t.code.add(d.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new l.G("nearFar",((e,t)=>t.camera.nearFar)),new h.N("normalMap",(e=>e.normalTexture)),new h.N("depthMap",(e=>e.depthTexture)),new c.m("projScale",(e=>e.projScale)),new h.N("rnm",(e=>e.noiseTexture)),new l.G("rnmScale",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new c.m("intensity",(e=>e.intensity)),new l.G("screenSize",((e,t)=>(0,i.hZ)(v,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(d.H`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function p(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v=(0,n.vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:p},Symbol.toStringTag,{value:"Module"}))},74539:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>f});var i=r(16967),n=r(47471),o=r(31973),a=r(32854),s=r(14279),l=r(46127),c=r(38322),d=r(13868),u=r(10123),h=r(9886);const m=4;function f(){const e=new d.N5,t=e.fragment;e.include(n.c);const r=(m+1)/2,f=1/(2*r*r);return t.include(o.E),t.uniforms.add(new h.N("depthMap",(e=>e.depthTexture)),new u.o("tex",(e=>e.colorTexture)),new a.t("blurSize",(e=>e.blurSize)),new l.m("projScale",((e,t)=>{const r=(0,i.q)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.G("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(c.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${c.H.float(f)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(c.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${c.H.int(m)}; r <= ${c.H.int(m)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}))},75815:(e,t,r)=>{r.d(t,{a:()=>x,b:()=>T,c:()=>v,f:()=>A,g:()=>b,j:()=>w,n:()=>L});r(22333);var i=r(60249),n=r(10590),o=r(97908),a=r(16967),s=r(55509),l=r(29816),c=r(64554),d=r(84079),u=r(15461),h=r(16378),m=r(62811),f=r(40237);const p=v();function v(){return(0,c.vt)()}const g=l.e,_=l.e;function x(e,t){return(0,l.c)(t,e)}function T(e){return e[3]}function b(e){return e}function A(e,t,r,i){return(0,c.fA)(e,t,r,i)}function y(e,t,r){if(null==t)return!1;if(!E(e,t,S))return!1;let{t0:i,t1:n}=S;if((i<0||n<i&&n>0)&&(i=n),i<0)return!1;if(r){const{origin:e,direction:n}=t;r[0]=e[0]+n[0]*i,r[1]=e[1]+n[1]*i,r[2]=e[2]+n[2]*i}return!0}const S={t0:0,t1:0};function E(e,t,r){const{origin:i,direction:n}=t,o=M;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===a)return!1;const s=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),l=s*s-4*a*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const c=Math.sqrt(l);return r.t0=(-s-c)/(2*a),r.t1=(-s+c)/(2*a),!0}const M=(0,s.vt)();function w(e,t){return y(e,t,null)}function C(e,t,r){const i=f.rq.get(),n=f.Rc.get();(0,a.b)(i,t.origin,t.direction);const s=T(e);(0,a.b)(r,i,t.origin),(0,a.h)(r,r,1/(0,a.l)(r)*s);const l=I(e,t.origin),c=(0,m.g7)(t.origin,r);return(0,o.$0)(n,c+l,i),(0,a.e)(r,r,n),r}function O(e,t,r){const i=(0,a.f)(f.rq.get(),t,e),n=(0,a.h)(f.rq.get(),i,e[3]/(0,a.l)(i));return(0,a.g)(r,n,e)}function I(e,t){const r=(0,a.f)(f.rq.get(),t,e),i=(0,a.l)(r),o=T(e),s=o+Math.abs(o-i);return(0,n.XM)(o/s)}const R=(0,s.vt)();function N(e,t,r,i){const o=(0,a.f)(R,t,e);switch(r){case u._.X:{const e=(0,n.jU)(o,R)[2];return(0,a.s)(i,-Math.sin(e),Math.cos(e),0)}case u._.Y:{const e=(0,n.jU)(o,R),t=e[1],r=e[2],s=Math.sin(t);return(0,a.s)(i,-s*Math.cos(r),-s*Math.sin(r),Math.cos(t))}case u._.Z:return(0,a.n)(i,o);default:return}}function P(e,t){const r=(0,a.f)(H,t,e);return(0,a.l)(r)-e[3]}function L(e,t){const r=(0,a.a)(e,t),i=T(e);return r<=i*i}const H=(0,s.vt)(),D=v();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:p,altitudeAt:P,angleToSilhouette:I,axisAt:N,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return y(e,t,r)?r:((0,h.oC)(t,e,r),O(e,r,r))},closestPointOnSilhouette:C,containsPoint:L,copy:x,create:v,distanceToSilhouette:function(e,t){const r=(0,a.f)(f.rq.get(),t,e),i=(0,a.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))},elevate:function(e,t,r){return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),r[3]=e[3]+t,r},equals:_,exactEquals:g,fromCenterAndRadius:function(e,t){return(0,c.fA)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:A,getCenter:b,getRadius:T,intersectLine:function(e,t,r){const i=(0,h.Cr)(t,r);if(!E(e,i,S))return[];const{origin:n,direction:o}=i,{t0:l,t1:c}=S,u=t=>{const r=(0,s.vt)();return(0,a.r)(r,n,o,t),O(e,r,r)};return Math.abs(l-c)<(0,d.FD)()?[u(l)]:[u(l),u(c)]},intersectRay:y,intersectRayClosestSilhouette:function(e,t,r){if(y(e,t,r))return r;const i=C(e,t,f.rq.get());return(0,a.g)(r,t.origin,(0,a.h)(f.rq.get(),t.direction,(0,a.q)(t.origin,i)/(0,a.l)(t.direction))),r},intersectsRay:w,projectPoint:O,setAltitudeAt:function(e,t,r,i){const n=P(e,t),o=N(e,t,u._.Z,H),s=(0,a.h)(H,o,r-n);return(0,a.g)(i,t,s)},setExtent:function(e,t,r){return i.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e!==r&&x(e,r),r},tmpSphere:D,union:function(e,t,r=(0,c.vt)()){const i=(0,a.q)(e,t),n=e[3],o=t[3];return i+o<n?((0,l.c)(r,e),r):i+n<o?((0,l.c)(r,t),r):((0,a.m)(r,e,t,(i+o-n)/(2*i)),r[3]=(i+n+o)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},82309:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>s,c:()=>a,d:()=>n,e:()=>u,f:()=>l,n:()=>h,s:()=>c,t:()=>d});r(22333);var i=r(73175);function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,i=3,n=i){if(e.length/i!==Math.ceil(t.length/n))return e;const o=e.length/i,a=r[0],s=r[1],l=r[2],c=r[4],d=r[5],u=r[6],h=r[8],m=r[9],f=r[10],p=r[12],v=r[13],g=r[14];let _=0,x=0;for(let r=0;r<o;r++){const r=t[_],o=t[_+1],T=t[_+2];e[x]=a*r+c*o+h*T+p,e[x+1]=s*r+d*o+m*T+v,e[x+2]=l*r+u*o+f*T+g,_+=n,x+=i}return e}function a(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r,n=3,o=n){if(e.length/n!==Math.ceil(t.length/o))return void(0,i.j)().error("source and destination buffers need to have the same number of elements");const a=e.length/n,s=r[0],l=r[1],c=r[2],d=r[3],u=r[4],h=r[5],m=r[6],f=r[7],p=r[8];let v=0,g=0;for(let r=0;r<a;r++){const r=t[v],i=t[v+1],a=t[v+2];e[g]=s*r+d*i+m*a,e[g+1]=l*r+u*i+f*a,e[g+2]=c*r+h*i+p*a,v+=o,g+=n}}function l(e,t,r){c(e.typedBuffer,t,r,e.typedBufferStride)}function c(e,t,r,i=3){const n=Math.min(e.length/i,t.count),o=t.typedBuffer,a=t.typedBufferStride;let s=0,l=0;for(let t=0;t<n;t++)e[l]=r*o[s],e[l+1]=r*o[s+1],e[l+2]=r*o[s+2],s+=a,l+=i}function d(e,t,r,i=3,n=i){const o=e.length/i;if(o!==Math.ceil(t.length/n))return e;let a=0,s=0;for(let l=0;l<o;l++)e[s]=t[a]+r[0],e[s+1]=t[a+1]+r[1],e[s+2]=t[a+2]+r[2],a+=n,s+=i;return e}function u(e,t){h(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function h(e,t,r=3,i=r){const n=Math.min(e.length/r,t.length/i);let o=0,a=0;for(let s=0;s<n;s++){const n=t[o],s=t[o+1],l=t[o+2],c=n*n+s*s+l*l;if(c>0){const t=1/Math.sqrt(c);e[a]=t*n,e[a+1]=t*s,e[a+2]=t*l}o+=i,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:h,normalizeView:u,scale:c,scaleView:l,shiftRight:function(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;let l=0,c=0;for(let e=0;e<i;e++)n[c]=a[l]>>r,n[c+1]=a[l+1]>>r,n[c+2]=a[l+2]>>r,l+=s,c+=o},transformMat3:s,transformMat3View:a,transformMat4:o,transformMat4View:n,translate:d},Symbol.toStringTag,{value:"Module"}))},86434:(e,t,r)=>{r.d(t,{O:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},26184:(e,t,r)=>{r.d(t,{I:()=>n});var i=r(31169);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},15e3:(e,t,r)=>{function i(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{EM:()=>n,b5:()=>i});const o=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,a,/^jsapps.esri.com$/,s,l]},27671:(e,t,r)=>{r.d(t,{oe:()=>n});var i=r(97820);function n(e,t=!1){return e<=i.y9?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}},73175:(e,t,r)=>{r.d(t,{j:()=>n});var i=r(60249);const n=()=>i.A.getLogger("esri.views.3d.support.buffer.math")},48001:(e,t,r)=>{r.d(t,{Cr:()=>c,_I:()=>d,vt:()=>l});var i=r(10590),n=r(26184),o=r(16967),a=r(55509),s=r(40237);function l(e){return e?{origin:(0,a.o8)(e.origin),vector:(0,a.o8)(e.vector)}:{origin:(0,a.vt)(),vector:(0,a.vt)()}}function c(e,t,r=l()){return(0,o.c)(r.origin,e),(0,o.f)(r.vector,t,e),r}function d(e,t,r){return function(e,t,r,n,a){const{vector:l,origin:c}=e,d=(0,o.f)(s.rq.get(),t,c),u=(0,o.k)(l,d)/(0,o.p)(l);return(0,o.h)(a,l,(0,i.qE)(u,r,n)),(0,o.g)(a,a,e.origin)}(e,t,0,1,r)}(0,a.vt)(),(0,a.vt)(),new n.I((()=>l()))},16378:(e,t,r)=>{r.d(t,{Cr:()=>c,LV:()=>l,oC:()=>d,vt:()=>a});r(16291);var i=r(26184),n=r(16967),o=r(55509);r(40237);function a(e){return e?s((0,o.o8)(e.origin),(0,o.o8)(e.direction)):s((0,o.vt)(),(0,o.vt)())}function s(e,t){return{origin:e,direction:t}}function l(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function c(e,t,r=a()){return(0,n.c)(r.origin,e),(0,n.f)(r.direction,t,e),r}function d(e,t,r){const i=(0,n.k)(e.direction,(0,n.f)(r,t,e.origin));return(0,n.g)(r,e.origin,(0,n.h)(r,e.direction,i)),r}const u=new i.I((()=>a()))},89926:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(1968);async function n(e,t){const{data:r}=await(0,i.A)(e,{responseType:"image",...t});return r}},18770:(e,t,r)=>{r.d(t,{fetch:()=>Kt});var i=r(15e3),n=r(69249),o=r(10733),a=r(97908),s=r(62722),l=r(24940),c=r(16967),d=r(55509),u=r(84313),h=r(27671),m=r(69664),f=r(82309),p=r(93744),v=r(14566),g=r(76464),_=r(64175),x=r(43856),T=r(22719),b=r(25817),A=r(89963),y=r(37591);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:y.uY,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:y.Un,a=(0,o.fA)(1,0,0,0,1,0,t[0],t[1],1),s=(0,o.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),l=(0,o.fA)(i[0],0,0,0,i[1],0,0,0,1),c=(0,o.vt)();return(0,n.lw)(c,s,l),(0,n.lw)(c,a,c),c}class E{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class M{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new E,this.numberOfVertices=0}}var w=r(1968),C=r(43104),O=r(48080),I=r(51819),R=r(60249),N=r(86434),P=r(66011),L=r(54425),H=r(21947),D=r(89926),F=r(14329),B=r(90599),z=r(53682),V=r(22333),G=r(45412),W=r(7929),U=r(97820),j=r(75899),q=r(23219),k=r(58048);let $;var X;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(X||(X={}));var Y=r(90928),Z=r(67405),J=r(29828);let K=null,Q=null;async function ee(){return null==Q&&(Q=function(){if(null==$){const e=e=>(0,k.s)(`esri/libs/basisu/${e}`);$=r.e(462).then(r.bind(r,40462)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return $}(),K=await Q),Q}function te(e,t,r,i,n){const o=(0,J.IB)(t?Y.CQ.COMPRESSED_RGBA8_ETC2_EAC:Y.CQ.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function re(e){return e.getNumImages()>=1&&!e.isUASTC()}function ie(e){return e.getFaces()>=1&&e.isETC1S()}function ne(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?i?[X.ETC2_RGBA,Y.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[X.ETC1_RGB,Y.CQ.COMPRESSED_RGB8_ETC2]:c?i?[X.BC3_RGBA,Y.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[X.BC1_RGB,Y.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[X.RGBA32,Y.Ab.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(a(e,d))),s(e,d,m[e]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.width=n,t.height=o,new Z.g(e,t,{type:"compressed",levels:m})}var oe=r(71023),ae=r(46727);const se=()=>R.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),le=542327876,ce=131072,de=4;function ue(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const he=ue("DXT1"),me=ue("DXT3"),fe=ue("DXT5"),pe=31,ve=0,ge=1,_e=2,xe=3,Te=4,be=7,Ae=20,ye=21;function Se(e,t,r){const i=function(e,t){const r=new Int32Array(e,0,pe);if(r[ve]!==le)return se().error("Invalid magic number in DDS header"),null;if(!(r[Ae]&de))return se().error("Unsupported format, must contain a FourCC code"),null;const i=r[ye];let n,o;switch(i){case he:n=8,o=Y.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case me:n=16,o=Y.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case fe:n=16,o=Y.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return se().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(i)),null}let a=1,s=r[Te],l=r[xe];!(3&s)&&!(3&l)||(se().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[_e]&ce&&!1!==t&&(a=Math.max(1,r[be]));let m=r[ge]+4;const f=[];for(let t=0;t<a;++t)h=(s+3>>2)*(l+3>>2)*n,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:o,width:c,height:d}}(r,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:o,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new Z.g(e,t,n)}function Ee(e,t,r){if(e instanceof ImageData)return Ee(Me(e),t,r);const i=document.createElement("canvas");return i.width=t,i.height=r,i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Me(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new I.A("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}var we,Ce=r(66457),Oe=r(25964);class Ie extends oe.J{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=ae.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new G.A,this._parameters={...Ne,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,j.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,j.DB)(e.src)||(0,j.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Oe.R;return t.wrapMode=this._parameters.wrap??Y.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?Y.Cj.LINEAR_MIPMAP_LINEAR:Y.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if((0,U.mw)(e)||(0,U.mg)(e))return t.encoding===B.JS.KTX2_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.KTX2File(new Uint8Array(e)),i=ie(r)?te(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):t.encoding===B.JS.BASIS_ENCODING?function(e,t){if(null==K)return e.byteLength;const r=new K.BasisFile(new Uint8Array(e)),i=re(r)?te(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}(e,!!t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Re(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Z.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===B.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===B.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,U.mw)(t)||(0,U.mg)(t))&&this._parameters.encoding===B.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,U.mg)(t)?this._loadFromPixelData(e,t):(0,U.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<we.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=Se(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const i=new K.KTX2File(new Uint8Array(r));if(!ie(i))return null;i.startTranscoding();const n=ne(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==K&&(K=await ee());const i=new K.BasisFile(new Uint8Array(r));if(!re(i))return null;i.startTranscoding();const n=ne(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),n}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,Ce.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?Y.Ab.LUMINANCE:3===this._parameters.components?Y.Ab.RGB:Y.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Z.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const i=await(0,D.D)(t,{signal:r});return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const i=await(0,q.Sx)(t,t.src,!1,r);return(0,P.Te)(r),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=we.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((i,n)=>{const o=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),(0,W.xt)(l)},a=()=>{t.readyState>=we.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,t)))},s=e=>{o(),n(e||new I.A("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=(0,P.u7)(r,(()=>s((0,P.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Me(e):e;let i=e.width,n=e.height;do{i=Math.ceil(i/2),n=Math.ceil(n/2),r=i*n}while(r>1048576||null!=t&&(i>t||n>t));return Ee(e,i,n)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const i=t/r;return Ee(e,Math.round(e.width*i),Math.round(e.height*i))}(r,t)}const i=Re(r);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?Y.Ab.RGB:Y.Ab.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new Z.g(e,n,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}unload(){if(this._glTexture=(0,W.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Re(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(we||(we={}));const Ne={wrap:{s:Y.pF.REPEAT,t:Y.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var Pe=r(2031),Le=r(70892),He=r(2048),De=r(78816),Fe=r(37649),Be=r(20913),ze=r(83648),Ve=r(19710),Ge=r(70708),We=r(97801),Ue=r(41466),je=r(75815),qe=r(78096);const ke=new class{constructor(e=0){this.offset=e,this.sphere=(0,je.c)(),this.tmpVertex=(0,d.vt)()}applyToVertex(e,t,r){const i=this.objectTransform.transform,n=(0,c.s)($e,e,t,r),o=(0,c.e)(n,n,i),a=this.offset/(0,c.l)(o);(0,c.r)(o,o,o,a);const s=this.objectTransform.inverse;return(0,c.e)(this.tmpVertex,o,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/(0,c.l)(e);(0,c.r)(e,e,e,r);const i=this.offset/(0,c.l)(t);(0,c.r)(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=(0,c.l)((0,je.g)(e)),r=this.offset/t;return(0,c.r)((0,je.g)(this.sphere),(0,je.g)(e),(0,je.g)(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,d.vt)(),this._tmpMbs=(0,je.c)(),this._tmpObb=new qe.ab,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=(0,c.l)(e)}applyToVertex(e,t,r){const i=(0,c.s)($e,e,t,r),n=(0,c.s)(Xe,e,t,r+this.componentLocalOriginLength),o=this._totalOffset/(0,c.l)(n);return(0,c.r)(this._tmpVertex,i,n,o),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],i=e[1],n=e[2]+t,o=e[3],a=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(i),d=Math.abs(n),u=Math.abs(o),h=Math.abs(a),m=Math.abs(s),f=.5*(1+Math.sign(r*o))*Math.min(l,u),p=.5*(1+Math.sign(i*a))*Math.min(c,h),v=.5*(1+Math.sign(n*s))*Math.min(d,m),g=Math.max(l,u),_=Math.max(c,h),x=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),A=Math.sign(c+i),y=Math.sign(d+n),S=Math.sign(u+o),E=Math.sign(h+a),M=Math.sign(m+s),w=this._totalOffset;if(T<w)return e[0]-=(1-b)*w,e[1]-=(1-A)*w,e[2]-=(1-y)*w,e[3]+=S*w,e[4]+=E*w,e[5]+=M*w,e;const C=w/Math.sqrt(g*g+_*_+x*x),O=w/T,I=O-C,R=-I;return e[0]+=r*(b*R+O),e[1]+=i*(A*R+O),e[2]+=n*(y*R+O),e[3]+=o*(S*I+C),e[4]+=a*(E*I+C),e[5]+=s*(M*I+C),e}applyToMbs(e){const t=(0,c.l)((0,je.g)(e)),r=this._totalOffset/t;return(0,c.r)((0,je.g)(this._tmpMbs),(0,je.g)(e),(0,je.g)(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return(0,qe.gm)(e,this._totalOffset,this._totalOffset,Le.RT.Global,this._tmpObb),this._tmpObb}};new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,d.vt)()}applyToVertex(e,t,r){const i=(0,c.s)($e,e,t,r),n=(0,c.g)(Xe,i,this.localOrigin),o=this.offset/(0,c.l)(n);return(0,c.r)(this.tmpVertex,i,n,o),this.tmpVertex}applyToAabb(e){const t=Ye,r=Ze,i=Je;for(let n=0;n<3;++n)t[n]=e[0+n]+this.localOrigin[n],r[n]=e[3+n]+this.localOrigin[n],i[n]=t[n];const n=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=n[t],e[t+3]=n[t];const o=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let t=0;t<3;++t)e[t]=Math.min(e[t],r[t]),e[t+3]=Math.max(e[t+3],r[t])};for(let e=1;e<8;++e){for(let n=0;n<3;++n)i[n]=e&1<<n?r[n]:t[n];o(i)}let a=0;for(let e=0;e<3;++e)t[e]*r[e]<0&&(a|=1<<e);if(0!==a&&7!==a)for(let e=0;e<8;++e)if(!(a&e)){for(let n=0;n<3;++n)i[n]=a&1<<n?0:e&1<<n?t[n]:r[n];o(i)}for(let t=0;t<3;++t)e[t]-=this.localOrigin[t],e[t+3]-=this.localOrigin[t];return e}};const $e=(0,d.vt)(),Xe=(0,d.vt)(),Ye=(0,d.vt)(),Ze=(0,d.vt)(),Je=(0,d.vt)();function Ke(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length;r*=a;for(let e=0;e<s;++e){const t=2*n[e];o[r]=i[t],o[r+1]=i[t+1],r+=a}}function Qe(e,t,r,i){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}else for(let e=0;e<l;++e){const t=3*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],r+=s}}function et(e,t,r,i=1){const{data:n,indices:o}=e,a=t.typedBuffer,s=t.typedBufferStride,l=o.length;if(r*=s,1===i)for(let e=0;e<l;++e){const t=4*o[e];a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}else for(let e=0;e<l;++e){const t=4*o[e];for(let e=0;e<i;++e)a[r]=n[t],a[r+1]=n[t+1],a[r+2]=n[t+2],a[r+3]=n[t+3],r+=s}}function tt(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<r;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let t=0;t<r;++t)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function rt(e,t,r,i,n,o){switch(e){case Pe.r.POSITION:{(0,Ce.vA)(3===t.size);const i=n.getField(e,m.xs);(0,Ce.vA)(!!i,`No buffer view for ${e}`),i&&function(e,t,r,i,n=1){if(!t)return void Qe(e,r,i,n);const{data:o,indices:s}=e,l=r.typedBuffer,c=r.typedBufferStride,d=s.length,u=t[0],h=t[1],m=t[2],f=t[4],p=t[5],v=t[6],g=t[8],_=t[9],x=t[10],T=t[12],b=t[13],A=t[14];i*=c;let y=0,S=0,E=0;const M=(0,a.tZ)(t)?e=>{y=o[e]+T,S=o[e+1]+b,E=o[e+2]+A}:e=>{const t=o[e],r=o[e+1],i=o[e+2];y=u*t+f*r+g*i+T,S=h*t+p*r+_*i+b,E=m*t+v*r+x*i+A};if(1===n)for(let e=0;e<d;++e)M(3*s[e]),l[i]=y,l[i+1]=S,l[i+2]=E,i+=c;else for(let e=0;e<d;++e){M(3*s[e]);for(let e=0;e<n;++e)l[i]=y,l[i+1]=S,l[i+2]=E,i+=c}}(t,r,i,o);break}case Pe.r.NORMAL:{(0,Ce.vA)(3===t.size);const r=n.getField(e,m.xs);(0,Ce.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,n=1){if(!t)return void Qe(e,r,i,n);const{data:o,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.ut)(l),A=1e-6,y=1-A;i*=d;let S=0,E=0,M=0;const w=(0,a.tZ)(l)?e=>{S=o[e],E=o[e+1],M=o[e+2]}:e=>{const t=o[e],r=o[e+1],i=o[e+2];S=h*t+p*r+_*i,E=m*t+v*r+x*i,M=f*t+g*r+T*i};if(1===n)if(b)for(let e=0;e<u;++e){w(3*s[e]);const t=S*S+E*E+M*M;if(t<y&&t>A){const e=1/Math.sqrt(t);c[i]=S*e,c[i+1]=E*e,c[i+2]=M*e}else c[i]=S,c[i+1]=E,c[i+2]=M;i+=d}else for(let e=0;e<u;++e)w(3*s[e]),c[i]=S,c[i+1]=E,c[i+2]=M,i+=d;else for(let e=0;e<u;++e){if(w(3*s[e]),b){const e=S*S+E*E+M*M;if(e<y&&e>A){const t=1/Math.sqrt(e);S*=t,E*=t,M*=t}}for(let e=0;e<n;++e)c[i]=S,c[i+1]=E,c[i+2]=M,i+=d}}(t,i,r,o);break}case Pe.r.NORMALCOMPRESSED:{(0,Ce.vA)(2===t.size);const r=n.getField(e,m.mJ);(0,Ce.vA)(!!r,`No buffer view for ${e}`),r&&Ke(t,r,o);break}case Pe.r.UV0:{(0,Ce.vA)(2===t.size);const r=n.getField(e,m.gH);(0,Ce.vA)(!!r,`No buffer view for ${e}`),r&&Ke(t,r,o);break}case Pe.r.COLOR:case Pe.r.SYMBOLCOLOR:{const r=n.getField(e,m.XP);(0,Ce.vA)(!!r,`No buffer view for ${e}`),(0,Ce.vA)(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,i,n=1){const{data:o,indices:a}=e,s=r.typedBuffer,l=r.typedBufferStride,c=a.length;if(i*=l,t!==o.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=o[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=o[t],s[i+1]=o[t+1],s[i+2]=o[t+2],s[i+3]=255,i+=l}}else{s[i]=o[0],s[i+1]=o[1],s[i+2]=o[2],s[i+3]=o[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,a=e[i/=4];i+=t;const d=c*n;for(let r=1;r<d;++r)e[i]=a,i+=t}}(t,t.size,r,o);break}case Pe.r.COLORFEATUREATTRIBUTE:{const r=n.getField(e,m.Y$);(0,Ce.vA)(!!r,`No buffer view for ${e}`),(0,Ce.vA)(1===t.size),r&&1===t.size&&function(e,t,r){const{data:i,indices:n}=e,o=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];r*=a;for(let e=0;e<s;++e)o[r]=l,r+=a}(t,r,o);break}case Pe.r.TANGENT:{(0,Ce.vA)(4===t.size);const r=n.getField(e,m.Eq);(0,Ce.vA)(!!r,`No buffer view for ${e}`),r&&function(e,t,r,i,n=1){if(!t)return void et(e,r,i,n);const{data:o,indices:s}=e,l=t,c=r.typedBuffer,d=r.typedBufferStride,u=s.length,h=l[0],m=l[1],f=l[2],p=l[4],v=l[5],g=l[6],_=l[8],x=l[9],T=l[10],b=!(0,a.ut)(l),A=1e-6,y=1-A;if(i*=d,1===n)for(let e=0;e<u;++e){const t=4*s[e],r=o[t],n=o[t+1],a=o[t+2],l=o[t+3];let u=h*r+p*n+_*a,S=m*r+v*n+x*a,E=f*r+g*n+T*a;if(b){const e=u*u+S*S+E*E;if(e<y&&e>A){const t=1/Math.sqrt(e);u*=t,S*=t,E*=t}}c[i]=u,c[i+1]=S,c[i+2]=E,c[i+3]=l,i+=d}else for(let e=0;e<u;++e){const t=4*s[e],r=o[t],a=o[t+1],l=o[t+2],u=o[t+3];let S=h*r+p*a+_*l,E=m*r+v*a+x*l,M=f*r+g*a+T*l;if(b){const e=S*S+E*E+M*M;if(e<y&&e>A){const t=1/Math.sqrt(e);S*=t,E*=t,M*=t}}for(let e=0;e<n;++e)c[i]=S,c[i+1]=E,c[i+2]=M,c[i+3]=u,i+=d}}(t,i,r,o);break}case Pe.r.PROFILERIGHT:case Pe.r.PROFILEUP:case Pe.r.PROFILEVERTEXANDNORMAL:case Pe.r.FEATUREVALUE:{(0,Ce.vA)(4===t.size);const r=n.getField(e,m.Eq);(0,Ce.vA)(!!r,`No buffer view for ${e}`),r&&et(t,r,o)}}}class it{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(Pe.r.POSITION).indices.length}write(e,t,r,i,n){!function(e,t,r,i,n,o){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)rt(a,t,r,i,n,o);else if(a===Pe.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(Pe.r.POSITION)?.indices;if(t){const r=t.length,i=n.getField(a,m.XP);tt(e.objectAndLayerIdColor,i,r,o)}}}}(r,this.vertexBufferLayout,e,t,i,n)}}var nt=r(64446),ot=r(64554),at=r(56121),st=r(46275),lt=r(60270),ct=r(32663),dt=r(41486),ut=r(55734),ht=r(46005);Y.MT.LESS,Y.MT.ALWAYS;const mt={mask:255},ft={function:{func:Y.MT.ALWAYS,ref:B.dd.OutlineVisualElementMask,mask:B.dd.OutlineVisualElementMask},operation:{fail:Y.eA.KEEP,zFail:Y.eA.KEEP,zPass:Y.eA.ZERO}},pt={function:{func:Y.MT.ALWAYS,ref:B.dd.OutlineVisualElementMask,mask:B.dd.OutlineVisualElementMask},operation:{fail:Y.eA.KEEP,zFail:Y.eA.KEEP,zPass:Y.eA.REPLACE}};Y.MT.EQUAL,B.dd.OutlineVisualElementMask,B.dd.OutlineVisualElementMask,Y.eA.KEEP,Y.eA.KEEP,Y.eA.KEEP,Y.MT.NOTEQUAL,B.dd.OutlineVisualElementMask,B.dd.OutlineVisualElementMask,Y.eA.KEEP,Y.eA.KEEP,Y.eA.KEEP;var vt=r(71378);const gt=[1,1,.5],_t=[0,.6,.2],xt=[0,1,.2];var Tt=r(85104),bt=r(6719);class At extends st.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,d.ci)(gt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=B.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,d.fA)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Fe.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,d.fA)(.2,.2,.2),this.diffuse=(0,d.fA)(.8,.8,.8),this.externalColor=(0,ot.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,d.vt)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=B.it.Less,this.textureAlphaMode=B.sf.Blend,this.textureAlphaCutoff=lt.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Ge.m$.Occlude,this.isDecoration=!1}}st.gy;class yt extends dt.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===Le.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?at.q.Default:at.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,yt.shader)}_initializeProgram(e,t){return new ht.B(e.rctx,t.get().build(this.configuration),ut.D)}_convertDepthTestFunction(e){return e===B.it.Lequal?Y.MT.LEQUAL:Y.MT.LESS}_makePipeline(e,t){const r=this.configuration,i=e===vt.y.NONE,n=e===vt.y.FrontFace;return(0,bt.Ey)({blending:r.output!==De.V.Color&&r.output!==De.V.Alpha||!r.transparent?null:i?We.V0:(0,We.ez)(e),culling:St(r)?(0,bt.Xt)(r.cullFace):null,depthTest:{func:(0,We.K_)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(i||n)&&r.writeDepth?bt.kn:null,colorWrite:bt.wE,stencilWrite:r.hasOccludees?mt:null,stencilTest:r.hasOccludees?t?pt:ft:null,polygonOffset:i||n?null:(0,We.aB)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function St(e){return e.cullFace!==B.s2.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}yt.shader=new ct.$(Tt.D,(()=>r.e(2224).then(r.bind(r,32224))));var Et=r(90252),Mt=r(96354),wt=r(84380),Ct=r(36980);class Ot extends wt.nW{}(0,Et._)([(0,Mt.W)({constValue:!0})],Ot.prototype,"hasSliceHighlight",void 0),(0,Et._)([(0,Mt.W)({constValue:!1})],Ot.prototype,"hasSliceInVertexProgram",void 0),(0,Et._)([(0,Mt.W)({constValue:Ct.c.Pass})],Ot.prototype,"pbrTextureBindType",void 0);class It extends Ot{constructor(){super(...arguments),this.output=De.V.Color,this.alphaDiscardMode=B.sf.Opaque,this.doubleSidedMode=Be.W.None,this.pbrMode=ze.A9.Disabled,this.cullFace=B.s2.None,this.transparencyPassType=vt.y.NONE,this.normalType=Fe.W.Attribute,this.textureCoordinateType=at.q.None,this.customDepthTest=B.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,Et._)([(0,Mt.W)({count:De.V.COUNT})],It.prototype,"output",void 0),(0,Et._)([(0,Mt.W)({count:B.sf.COUNT})],It.prototype,"alphaDiscardMode",void 0),(0,Et._)([(0,Mt.W)({count:Be.W.COUNT})],It.prototype,"doubleSidedMode",void 0),(0,Et._)([(0,Mt.W)({count:ze.A9.COUNT})],It.prototype,"pbrMode",void 0),(0,Et._)([(0,Mt.W)({count:B.s2.COUNT})],It.prototype,"cullFace",void 0),(0,Et._)([(0,Mt.W)({count:vt.y.COUNT})],It.prototype,"transparencyPassType",void 0),(0,Et._)([(0,Mt.W)({count:Fe.W.COUNT})],It.prototype,"normalType",void 0),(0,Et._)([(0,Mt.W)({count:at.q.COUNT})],It.prototype,"textureCoordinateType",void 0),(0,Et._)([(0,Mt.W)({count:B.it.COUNT})],It.prototype,"customDepthTest",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"spherical",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasVertexColors",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasSymbolColors",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasVerticalOffset",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasSlicePlane",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasSliceHighlight",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasColorTexture",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasMetallicRoughnessTexture",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasEmissionTexture",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasOcclusionTexture",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasNormalTexture",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasScreenSizePerspective",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasVertexTangents",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasOccludees",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"multipassEnabled",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasModelTransformation",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"offsetBackfaces",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"vvSize",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"vvColor",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"receiveShadows",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"receiveAmbientOcclusion",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"textureAlphaPremultiplied",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"instanced",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"instancedColor",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"instancedDoublePrecision",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"writeDepth",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"transparent",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"enableOffset",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"cullAboveGround",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"snowCover",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasColorTextureTransform",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasEmissionTextureTransform",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasNormalTextureTransform",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasOcclusionTextureTransform",void 0),(0,Et._)([(0,Mt.W)()],It.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,Et._)([(0,Mt.W)({constValue:!1})],It.prototype,"occlusionPass",void 0),(0,Et._)([(0,Mt.W)({constValue:!0})],It.prototype,"hasVvInstancing",void 0),(0,Et._)([(0,Mt.W)({constValue:!1})],It.prototype,"useCustomDTRExponentForWater",void 0),(0,Et._)([(0,Mt.W)({constValue:!1})],It.prototype,"supportsTextureAtlas",void 0),(0,Et._)([(0,Mt.W)({constValue:!0})],It.prototype,"useFillLights",void 0);var Rt=r(74672);class Nt extends yt{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Fe.W.Attribute,t.doubleSidedMode=Be.W.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Nt.shader)}}Nt.shader=new ct.$(Rt.R,(()=>r.e(576).then(r.bind(r,80576))));class Pt extends Ge.im{constructor(e){super(e,Ht),this.supportsEdges=!0,this.produces=new Map([[Ue.N.OPAQUE_MATERIAL,e=>((0,De.XY)(e)||(0,De.PJ)(e))&&!this.parameters.transparent],[Ue.N.TRANSPARENT_MATERIAL,e=>((0,De.XY)(e)||(0,De.PJ)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Ue.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>((0,De.XY)(e)||(0,De.PJ)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new It,this._vertexBufferLayout=function(e){const t=(0,He.BP)().vec3f(Pe.r.POSITION);return e.normalType===Fe.W.Compressed?t.vec2i16(Pe.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Pe.r.NORMAL),e.hasVertexTangents&&t.vec4f(Pe.r.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Pe.r.UV0),e.hasVertexColors&&t.vec4u8(Pe.r.COLOR),e.hasSymbolColors&&t.vec4u8(Pe.r.SYMBOLCOLOR),(0,V.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(Pe.r.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==De.V.Shadow&&e!==De.V.ShadowExcludeHighlight&&e!==De.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:i,vvColor:n}=e,o="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return r&&l?o||a:r?o?s:a:l?o||a:o?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?B.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==De.V.Color&&e!==De.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Be.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Be.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Be.W.WindingOrder:Be.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?ze.A9.Schematic:ze.A9.Normal:ze.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<We.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,n,o){if(null!=this.parameters.verticalOffset){const e=r.camera;(0,c.s)(Gt,t[12],t[13],t[14]);let o=null;switch(r.viewingMode){case Le.RT.Global:o=(0,c.n)(zt,Gt);break;case Le.RT.Local:o=(0,c.c)(zt,Bt)}let a=0;const s=(0,c.f)(Wt,Gt,e.eye),l=(0,c.l)(s),d=(0,c.h)(s,s,1/l);let u=null;this.parameters.screenSizePerspective&&(u=(0,c.k)(o,d)),a+=(0,nt.kE)(e,l,this.parameters.verticalOffset,u??0,this.parameters.screenSizePerspective),(0,c.h)(o,o,a),(0,c.t)(Vt,o,r.transform.inverseRotation),i=(0,c.f)(Dt,i,Vt),n=(0,c.f)(Ft,n,Vt)}(0,nt.Uy)(e,r,i,n,function(e){return null!=e?(ke.offset=e,ke):null}(r.verticalOffset),o)}createGLMaterial(e){return new Lt(e)}createBufferWriter(){return new it(this._vertexBufferLayout)}}class Lt extends Ve.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==De.V.Color&&this._output!==De.V.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,c.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Nt:yt,e)}}const Ht=new class extends At{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Dt=(0,d.vt)(),Ft=(0,d.vt)(),Bt=(0,d.fA)(0,0,1),zt=(0,d.vt)(),Vt=(0,d.vt)(),Gt=(0,d.vt)(),Wt=(0,d.vt)(),Ut=()=>R.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function jt(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const i=await(0,C.Ke)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,P.QP)(i.error),qt(i.error.details.url)}(e,r,t);const i=await(0,C.Ke)((0,w.A)(e,t));if(!0===i.ok)return i.value.data;(0,P.QP)(i.error),qt(i.error)}(e,t),i=await async function(e,t){const r=new Array;for(const i in e){const n=e[i],o=n.images[0].data;if(!o){Ut().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+o,s="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Y.pF.REPEAT,t:Y.pF.REPEAT},preMultiplyAlpha:Xt(l)!==B.sf.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):(0,D.D)(a,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(r),n={};for(const e of i)n[e.refId]=e;return n}(r.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:i,size:n+(0,O.iL)(r)}}function qt(e){throw new I.A("",`Request for object resource failed: ${e}`)}function kt(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ut().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ut().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ut().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ut().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ut().warn("Indexed geometries must specify faces"),i=!1;break}default:Ut().warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ut().warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n)n[e].values||(Ut().warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function $t(e){const t=(0,u.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,u.iT)(t,r.bbMin),(0,u.iT)(t,r.bbMax))})),t}function Xt(e){switch(e){case"mask":return B.sf.Mask;case"maskAndTransparency":return B.sf.MaskBlend;case"none":return B.sf.Opaque;default:return B.sf.Blend}}function Yt(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Zt=new L.R(1,2,"wosr");var Jt=r(17402);async function Kt(e,t){const r=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,i.EM)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):jt(r.url,t)),{engineResources:i,referenceBoundingBox:n}=function(e,t){const r=new Array,i=new Array,n=new Array,o=new N.O,a=e.resource,s=L.R.parse(a.version||"1.0","wosr");Zt.validate(s);const l=a.model.name,c=a.model.geometries,u=a.materialDefinitions??{},h=e.textures;let m=0;const f=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!kt(a))continue;const s=Yt(a),l=a.params.vertexAttributes,p=[],v=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},g=l[Pe.r.POSITION],_=g.values.length/g.valuesPerElement;for(const e in l){const t=l[e],r=t.values,i=v(e)??(0,H.tM)(_);p.push([e,new F.n(r,i,t.valuesPerElement,!0)])}const x=s.texture,T=h&&h[x];if(T&&!f.has(x)){const{image:e,parameters:t}=T,r=new Ie(e,t);i.push(r),f.set(x,r)}const b=f.get(x),A=b?b.id:void 0,y=s.material;let S=o.get(y,x);if(null==S){const e=u[y.substring(y.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?Xt(T.alphaChannelUsage):void 0,a={ambient:(0,d.ci)(e.diffuse),diffuse:(0,d.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:A,initTextureTransparent:!0,doubleSided:!0,cullFace:B.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:T?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),S=new Pt(a),o.set(y,x,S)}n.push(S);const E=new z.V(S,p);m+=p.find((e=>e[0]===Pe.r.POSITION))?.[1]?.indices.length??0,r.push(E)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:$t(r)}}(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,T.y)(new x.R(t.streamDataRequester),r.url,t,t.usePBR)),y=o.model.meta?.ESRI_proxyEllipsoid,E=o.meta.isEsriSymbolResource&&null!=y&&"EsriRealisticTreesStyle"===o.meta.ESRI_webstyle;E&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const o=n.attributes.position,l=o.count,u=(0,d.vt)(),h=(0,d.vt)(),f=(0,d.vt)(),p=new Uint8Array(4*l),v=new Float64Array(3*l),g=(0,a.B8)((0,s.vt)(),n.transform);let _=0,x=0;for(let a=0;a<l;a++){o.getVec(a,h),i.getVec(a,u),(0,c.e)(h,h,n.transform),(0,c.f)(f,h,t.center),(0,c.D)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.D)(f,f,t.radius),null!==g&&(0,c.e)(f,f,g),(0,c.n)(f,f),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.m)(f,f,u,s>-1?.2:Math.min(-4*s-3.8,1)),v[_]=f[0],v[_+1]=f[1],v[_+2]=f[2],_+=3,p[x]=255*d,p[x+1]=255*d,p[x+2]=255*d,p[x+3]=255,x+=4}n.attributes.normal=new m.xs(v),n.attributes.color=new m.XP(p)}}}(o,y));const w=!!t.usePBR,C=o.meta.isEsriSymbolResource?{usePBR:w,isSchematic:!1,treeRendering:E,mrrFactors:[...xt]}:{usePBR:w,isSchematic:!1,treeRendering:!1,mrrFactors:[...gt]},O={...t.materialParameters,treeRendering:E},{engineResources:I,referenceBoundingBox:R}=function(e,t,r,i){const o=e.model,a=new Array,s=new Map,x=new Map,T=o.lods.length,y=(0,u.Ie)();return o.lods.forEach(((e,E)=>{const w=!0===i.skipHighLods&&(T>1&&0===E||T>3&&1===E)||!1===i.skipHighLods&&null!=i.singleLodIndex&&E!==i.singleLodIndex;if(w&&0!==E)return;const C=new M(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=w?new Pt({}):function(e,t,r,i,n,o,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),h=null!=t.attributes.texCoord0,m=null!=t.attributes.normal;if(null==u)return null;const f=function(e){switch(e){case"BLEND":return B.sf.Blend;case"MASK":return B.sf.Mask;case"OPAQUE":case null:case void 0:return B.sf.Opaque}}(u.alphaMode);if(!o.has(s)){if(h){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new Ie((0,A.x3)(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!(0,A.x3)(e)&&r,encoding:(0,A.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(u.textureColor,f!==B.sf.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness)}const r=u.color[0]**(1/Jt.T),p=u.color[1]**(1/Jt.T),v=u.color[2]**(1/Jt.T),g=u.emissiveFactor[0]**(1/Jt.T),_=u.emissiveFactor[1]**(1/Jt.T),x=u.emissiveFactor[2]**(1/Jt.T),T=null!=u.textureColor&&h?a.get(u.textureColor):null,b=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:i,emissiveTexture:n,emissiveFactor:o,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==o||(0,c.j)(o,d.uY))&&null==a&&(null==i||1===i)&&(null==r||1===r)}({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion}),y=null!=u.normalTextureTransform?.scale?u.normalTextureTransform?.scale:l.Un;o.set(s,new Pt({...i,transparent:f===B.sf.Blend,customDepthTest:B.it.Lequal,textureAlphaMode:f,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,p,v],ambient:[r,p,v],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?B.s2.None:B.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?Fe.W.Attribute:Fe.W.ScreenDerivative,castShadows:!0,receiveShadows:u.receiveShadows,receiveAmbientOcclusion:u.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&h?a.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&h?a.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&h?a.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&h?a.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[g,_,x],mrrFactors:b?[..._t]:[u.metallicFactor,u.roughnessFactor,i.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:S(u.colorTextureTransform),normalTextureTransformMatrix:S(u.normalTextureTransform),scale:[y[0],y[1]],occlusionTextureTransformMatrix:S(u.occlusionTextureTransform),emissiveTextureTransformMatrix:S(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(u.metallicRoughnessTextureTransform),...n}))}const p=o.get(s);if(r.stageResources.materials.push(p),h){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness)}return p}(o,e,C,t,r,s,x),{geometry:a,vertexCount:T}=function(e,t){const r=e.attributes.position.count,i=(0,b.x)(e.indices||r,e.primitiveType),o=(0,h.oe)(3*r),{typedBuffer:a,typedBufferStride:s}=e.attributes.position;(0,f.a)(o,a,e.transform,3,s);const l=[[Pe.r.POSITION,new F.n(o,i,3,!0)]];if(null!=e.attributes.normal){const t=(0,h.oe)(3*r),{typedBuffer:o,typedBufferStride:a}=e.attributes.normal;(0,n.Ge)(Qt,e.transform),(0,f.b)(t,o,Qt,3,a),l.push([Pe.r.NORMAL,new F.n(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=(0,h.oe)(4*r),{typedBuffer:o,typedBufferStride:a}=e.attributes.tangent;(0,n.Ge)(Qt,e.transform),(0,p.t)(t,o,Qt,4,a),l.push([Pe.r.TANGENT,new F.n(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,h.oe)(2*r),{typedBuffer:n,typedBufferStride:o}=e.attributes.texCoord0;(0,v.n)(t,n,2,o),l.push([Pe.r.UV0,new F.n(t,i,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof m.Eq?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.XP?(0,_.c)(t,e.attributes.color):e.attributes.color instanceof m.Uz&&(0,p.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof m.xs?(0,f.s)(t,e.attributes.color,255,4):e.attributes.color instanceof m.eI?(0,g.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,f.s)(t,e.attributes.color,1/256,4)),l.push([Pe.r.COLOR,new F.n(t,i,4,!0)])}return{geometry:new z.V(t,l),vertexCount:r}}(e,null!=i?i:new Pt({})),M=a.boundingInfo;null!=M&&0===E&&((0,u.iT)(y,M.bbMin),(0,u.iT)(y,M.bbMax)),null!=i&&(C.stageResources.geometries.push(a),C.numberOfVertices+=T)})),w||a.push(C)})),{engineResources:a,referenceBoundingBox:y}}(o,C,O,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:I,referenceBoundingBox:R,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}const Qt=(0,o.vt)()},3565:(e,t,r)=>{r.d(t,{k5:()=>i});var i;r(10590);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},2048:(e,t,r)=>{r.d(t,{BP:()=>l,l5:()=>c});var i=r(69664),n=r(43412),o=r(66457);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fields.keys()){const r=e.fields.get(t);this[t]=new r.constructor(this.buffer,r.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,r=0,i=e.count){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}return this}get usedMemory(){return this.byteLength}dispose(){}}class s{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:h(e[1].constructor)}))))}vec2f(e,t){return this._appendField(e,i.gH,t),this}vec2f64(e,t){return this._appendField(e,i.si,t),this}vec3f(e,t){return this._appendField(e,i.xs,t),this}vec3f64(e,t){return this._appendField(e,i.Xm,t),this}vec4f(e,t){return this._appendField(e,i.Eq,t),this}vec4f64(e,t){return this._appendField(e,i.Aj,t),this}mat3f(e,t){return this._appendField(e,i.jZ,t),this}mat3f64(e,t){return this._appendField(e,i.j0,t),this}mat4f(e,t){return this._appendField(e,i.Sx,t),this}mat4f64(e,t){return this._appendField(e,i.E$,t),this}vec4u8(e,t){return this._appendField(e,i.XP,t),this}f32(e,t){return this._appendField(e,i.Y$,t),this}f64(e,t){return this._appendField(e,i.qB,t),this}u8(e,t){return this._appendField(e,i.SL,t),this}u16(e,t){return this._appendField(e,i.h,t),this}i8(e,t){return this._appendField(e,i.bf,t),this}vec2i8(e,t){return this._appendField(e,i.D6,t),this}vec2i16(e,t){return this._appendField(e,i.mJ,t),this}vec2u8(e,t){return this._appendField(e,i.LC,t),this}vec4u16(e,t){return this._appendField(e,i.Uz,t),this}u32(e,t){return this._appendField(e,i.P,t),this}_appendField(e,t,r){if(this._fields.has(e))return void(0,o.vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,n.GJ)(t.ElementType),a=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:a,optional:r})}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new s;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,r)=>e._fields.set(r,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,n.GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function l(){return new s}class c{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const r={...e,constructor:u(e.constructor)};this.fields.push([t,r])})),this.stride=e.stride}}const d=[i.Y$,i.gH,i.xs,i.Eq,i.jZ,i.Sx,i.qB,i.si,i.Xm,i.Aj,i.j0,i.E$,i.SL,i.LC,i.eI,i.XP,i.h,i.Yi,i.nS,i.Uz,i.P,i.An,i.H$,i.ml,i.bf,i.D6,i.m8,i.TX,i.Qt,i.mJ,i.Vp,i.E7,i.My,i.UL,i.zD,i.Y4];function u(e){return`${e.ElementType}_${e.ElementCount}`}function h(e){return m.get(e)}const m=new Map;d.forEach((e=>m.set(u(e),e)))},78096:(e,t,r)=>{r.d(t,{ab:()=>Te,gm:()=>Ie});var i=r(69249),n=r(10733),o=r(62722),a=r(56781),s=r(84777),l=r(16967),c=r(55509),d=r(29816),u=r(64554),h=r(11346),m=r(19619),f=r(84046),p=r(33169),v=r(69981),g=r(17368),_=r(85204),x=r(40237),T=r(70892),b=r(24940),A=r(14329);const y=1e-6,S=(0,c.vt)(),E=(0,c.vt)();function M(e,t,r,i,n,o,a,s,l,c){return function(e,t,r){let i=_e(e.maxVert[0],e.minVert[0]),n=0;for(let t=1;t<7;++t){const r=_e(e.maxVert[t],e.minVert[t]);r>i&&(i=r,n=t)}fe(t,e.minVert[n]),fe(r,e.maxVert[n])}(e,i,n),_e(i,n)<y?1:(he(a,i,n),ve(a,a),function(e,t,r,i){const{data:n,size:o}=e;let a=Number.NEGATIVE_INFINITY,s=0;for(let e=0;e<n.length;e+=o){D[0]=n[e]-t[0],D[1]=n[e+1]-t[1],D[2]=n[e+2]-t[2];const i=r[0]*D[0]+r[1]*D[1]+r[2]*D[2],o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],l=D[0]*D[0]+D[1]*D[1]+D[2]*D[2]-i*i/o;l>a&&(a=l,s=e)}return fe(i,n,s),a}(t,i,a,o)<y?2:(he(s,n,o),ve(s,s),he(l,o,i),ve(l,l),pe(r,s,a),ve(r,r),j(t,r,a,s,l,c),0))}const w=(0,c.vt)(),C=(0,c.vt)(),O=(0,c.vt)(),I=(0,c.vt)(),R=(0,c.vt)(),N=(0,c.vt)(),P=(0,c.vt)(),L=(0,c.vt)();function H(e,t,r,i,n,o,a,s,l){(function(e,t,r,i,n){!function(e,t,r,i,n){const{data:o,size:a}=e;fe(i,o),fe(n,i),r[0]=xe(q,t),r[1]=r[0];for(let e=a;e<o.length;e+=a){const a=o[e]*t[0]+o[e+1]*t[1]+o[e+2]*t[2];a<r[0]&&(r[0]=a,fe(i,o,e)),a>r[1]&&(r[1]=a,fe(n,o,e))}}(e,t,F,n,i);const o=xe(r,t);F[1]-y<=o&&(i[0]=void 0),F[0]+y>=o&&(n[0]=void 0)})(e,t,r,w,C),void 0!==w[0]&&(he(O,w,r),ve(O,O),he(I,w,i),ve(I,I),he(R,w,n),ve(R,R),pe(N,I,o),ve(N,N),pe(P,R,a),ve(P,P),pe(L,O,s),ve(L,L),j(e,N,o,I,O,l),j(e,P,a,R,I,l),j(e,L,s,O,R,l)),void 0!==C[0]&&(he(O,C,r),ve(O,O),he(I,C,i),ve(I,I),he(R,C,n),ve(R,R),pe(N,I,o),ve(N,N),pe(P,R,a),ve(P,P),pe(L,O,s),ve(L,L),j(e,N,o,I,O,l),j(e,P,a,R,I,l),j(e,L,s,O,R,l))}const D=[0,0,0];const F=(0,b.vt)();const B=(0,c.vt)(),z=(0,c.vt)(),V=(0,c.vt)(),G=(0,c.vt)(),W=(0,c.vt)(),U=(0,c.vt)();function j(e,t,r,i,n,o){if(ge(t)<y)return;pe(B,r,t),pe(z,i,t),pe(V,n,t),k(e,t,F),W[1]=F[0],G[1]=F[1],U[1]=G[1]-W[1];const a=[r,i,n],s=[B,z,V];for(let r=0;r<3;++r){k(e,a[r],F),W[0]=F[0],G[0]=F[1],k(e,s[r],F),W[2]=F[0],G[2]=F[1],U[0]=G[0]-W[0],U[2]=G[2]-W[2];const i=de(U);i<o.quality&&(fe(o.b0,a[r]),fe(o.b1,t),fe(o.b2,s[r]),o.quality=i)}}const q=(0,c.vt)();function k(e,t,r){const{data:i,size:n}=e;r[0]=Number.POSITIVE_INFINITY,r[1]=Number.NEGATIVE_INFINITY;for(let e=0;e<i.length;e+=n){const n=i[e]*t[0]+i[e+1]*t[1]+i[e+2]*t[2];r[0]=Math.min(r[0],n),r[1]=Math.max(r[1],n)}}function $(e,t,r){r.center=e,r.halfSize=(0,l.h)(t,t,.5),r.quaternion=s.zK}const X=(0,c.vt)(),Y=(0,c.vt)(),Z=(0,c.vt)(),J=(0,c.vt)(),K=(0,c.vt)(),Q=(0,c.vt)();function ee(e,t,r){fe(X,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?X[0]=0:Math.abs(t[1])>Math.abs(t[2])?X[1]=0:X[2]=0,ge(X)<y&&(X[0]=X[1]=X[2]=1),pe(Y,t,X),ve(Y,Y),pe(Z,t,Y),ve(Z,Z),te(e,t,Y,Z,J,K),he(Q,K,J),se(t,Y,Z,J,K,Q,r)}function te(e,t,r,i,n,o){k(e,t,F),n[0]=F[0],o[0]=F[1],k(e,r,F),n[1]=F[0],o[1]=F[1],k(e,i,F),n[2]=F[0],o[2]=F[1]}const re=(0,c.vt)(),ie=(0,c.vt)(),ne=(0,c.vt)(),oe=(0,n.fA)(1,0,0,0,1,0,0,0,1),ae=(0,s.vt)();function se(e,t,r,i,n,o,a){oe[0]=e[0],oe[1]=e[1],oe[2]=e[2],oe[3]=t[0],oe[4]=t[1],oe[5]=t[2],oe[6]=r[0],oe[7]=r[1],oe[8]=r[2],a.quaternion=function(e,t){const r=t[0]+t[4]+t[8];if(r>0){let i=Math.sqrt(r+1);e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i}else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const i=(r+1)%3,n=(r+2)%3;let o=Math.sqrt(t[3*r+r]-t[3*i+i]-t[3*n+n]+1);e[r]=.5*o,o=.5/o,e[3]=(t[3*i+n]-t[3*n+i])*o,e[i]=(t[3*i+r]+t[3*r+i])*o,e[n]=(t[3*n+r]+t[3*r+n])*o}return e}(ae,oe),ue(re,i,n),me(re,re,.5),me(ie,e,re[0]),me(ne,t,re[1]),ue(ie,ie,ne),me(ne,r,re[2]),a.center=(0,l.g)(ie,ie,ne),a.halfSize=(0,l.h)(re,o,.5)}class le{constructor(e){this.minVert=new Array(7),this.maxVert=new Array(7);this.buffer=new ArrayBuffer(448);let t=0;this.minProj=new Float64Array(this.buffer,t,7),t+=56,this.maxProj=new Float64Array(this.buffer,t,7),t+=56;for(let e=0;e<7;++e)this.minVert[e]=new Float64Array(this.buffer,t,3),t+=24;for(let e=0;e<7;++e)this.maxVert[e]=new Float64Array(this.buffer,t,3),t+=24;for(let e=0;e<7;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const r=new Array(7),i=new Array(7),{data:n,size:o}=e;for(let e=0;e<n.length;e+=o){let t=n[e];t<this.minProj[0]&&(this.minProj[0]=t,r[0]=e),t>this.maxProj[0]&&(this.maxProj[0]=t,i[0]=e),t=n[e+1],t<this.minProj[1]&&(this.minProj[1]=t,r[1]=e),t>this.maxProj[1]&&(this.maxProj[1]=t,i[1]=e),t=n[e+2],t<this.minProj[2]&&(this.minProj[2]=t,r[2]=e),t>this.maxProj[2]&&(this.maxProj[2]=t,i[2]=e),t=n[e]+n[e+1]+n[e+2],t<this.minProj[3]&&(this.minProj[3]=t,r[3]=e),t>this.maxProj[3]&&(this.maxProj[3]=t,i[3]=e),t=n[e]+n[e+1]-n[e+2],t<this.minProj[4]&&(this.minProj[4]=t,r[4]=e),t>this.maxProj[4]&&(this.maxProj[4]=t,i[4]=e),t=n[e]-n[e+1]+n[e+2],t<this.minProj[5]&&(this.minProj[5]=t,r[5]=e),t>this.maxProj[5]&&(this.maxProj[5]=t,i[5]=e),t=n[e]-n[e+1]-n[e+2],t<this.minProj[6]&&(this.minProj[6]=t,r[6]=e),t>this.maxProj[6]&&(this.maxProj[6]=t,i[6]=e)}for(let e=0;e<7;++e){let t=r[e];fe(this.minVert[e],n,t),t=i[e],fe(this.maxVert[e],n,t)}}}class ce{constructor(){this.b0=(0,c.fA)(1,0,0),this.b1=(0,c.fA)(0,1,0),this.b2=(0,c.fA)(0,0,1),this.quality=0}}function de(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function ue(e,t,r){e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2]}function he(e,t,r){e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2]}function me(e,t,r){e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r}function fe(e,t,r=0){e[0]=t[r],e[1]=t[r+1],e[2]=t[r+2]}function pe(e,t,r){const i=t[0],n=t[1],o=t[2],a=r[0],s=r[1],l=r[2];e[0]=n*l-o*s,e[1]=o*a-i*l,e[2]=i*s-n*a}function ve(e,t){const r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(r>0){const i=1/Math.sqrt(r);e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i}}function ge(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function _e(e,t){const r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n}function xe(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}class Te{constructor(e=c.uY,t=je,r=s.zK){this._data=[e[0],e[1],e[2],t[0],t[1],t[2],r[0],r[1],r[2],r[3]]}clone(){const e=new Te;return e._data=this._data.slice(),e}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(e){const t=new Te;return t._data=e.slice(),t}static fromJSON(e){return new Te(e.center,e.halfSize,e.quaternion)}copy(e){this._data=e.data.slice()}get center(){return(0,l.s)(x.rq.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(e){return e[0]=this._data[0],e[1]=this._data[1],e[2]=this._data[2],e}set center(e){this._data[0]=e[0],this._data[1]=e[1],this._data[2]=e[2]}setCenter(e,t,r){this._data[0]=e,this._data[1]=t,this._data[2]=r}get halfSize(){return(0,l.s)(x.rq.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(e){return e[0]=this._data[3],e[1]=this._data[4],e[2]=this._data[5],e}set halfSize(e){this._data[3]=e[0],this._data[4]=e[1],this._data[5]=e[2]}get quaternion(){return(0,a.hZ)(x.J8.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(e){return e[0]=this._data[6],e[1]=this._data[7],e[2]=this._data[8],e[3]=this._data[9],e}set quaternion(e){this._data[6]=e[0],this._data[7]=e[1],this._data[8]=e[2],this._data[9]=e[3]}get data(){return this._data}getCorners(e){const t=be,r=this._data;t[0]=r[6],t[1]=r[7],t[2]=r[8],t[3]=r[9];for(let i=0;i<8;++i){const n=e[i];n[0]=(1&i?-1:1)*r[3],n[1]=(2&i?-1:1)*r[4],n[2]=(4&i?-1:1)*r[5],(0,l.u)(n,n,t),n[0]+=r[0],n[1]+=r[1],n[2]+=r[2]}}isVisible(e){return this.intersectPlane(e[0])<=0&&this.intersectPlane(e[1])<=0&&this.intersectPlane(e[2])<=0&&this.intersectPlane(e[3])<=0&&this.intersectPlane(e[4])<=0&&this.intersectPlane(e[5])<=0}get radius(){const e=this._data[3],t=this._data[4],r=this._data[5];return Math.sqrt(e*e+t*t+r*r)}intersectSphere(e){Se[0]=this._data[0]-e[0],Se[1]=this._data[1]-e[1],Se[2]=this._data[2]-e[2];const t=this.getQuaternion(Ae);return(0,a.Xr)(be,t),(0,l.u)(Se,Se,be),(0,l.v)(Se,Se),Ee[0]=Math.min(Se[0],this._data[3]),Ee[1]=Math.min(Se[1],this._data[4]),Ee[2]=Math.min(Se[2],this._data[5]),(0,l.w)(Ee,Se)<e[3]*e[3]}intersectSphereWithMBS(e,t=this.radius){const r=this._data;Se[0]=r[0]-e[0],Se[1]=r[1]-e[1],Se[2]=r[2]-e[2];const i=e[3],n=i+t;return!((0,l.x)(Se)>n*n)&&(be[0]=-r[6],be[1]=-r[7],be[2]=-r[8],be[3]=r[9],(0,l.u)(Se,Se,be),(0,l.v)(Se,Se),Ee[0]=Math.min(Se[0],r[3]),Ee[1]=Math.min(Se[1],r[4]),Ee[2]=Math.min(Se[2],r[5]),(0,l.w)(Ee,Se)<i*i)}intersectPlane(e){const t=e[0]*this._data[0]+e[1]*this._data[1]+e[2]*this._data[2]+e[3],r=this.projectedRadius((0,g.Qj)(e));return t>r?1:t<-r?-1:0}intersectRay(e,t,r=0){const i=this._data,n=be;n[0]=-i[6],n[1]=-i[7],n[2]=-i[8],n[3]=i[9],Se[0]=e[0]-i[0],Se[1]=e[1]-i[1],Se[2]=e[2]-i[2];const o=(0,l.u)(Se,Se,be),a=(0,l.u)(Ee,t,be);let s=-1/0,c=1/0;const d=this.getHalfSize(Fe);for(let e=0;e<3;e++){const t=o[e],i=a[e],n=d[e]+r;if(Math.abs(i)>1e-6){const e=(n-t)/i,r=(-n-t)/i;s=Math.max(s,Math.min(e,r)),c=Math.min(c,Math.max(e,r))}else if(t>n||t<-n)return!1}return s<=c}projectedArea(e,t,r,n){const o=this.getQuaternion(Ae);(0,a.Xr)(be,o),Se[0]=e[0]-this._data[0],Se[1]=e[1]-this._data[1],Se[2]=e[2]-this._data[2],(0,l.u)(Se,Se,be);const s=this.getHalfSize(Fe),c=Se[0]<-s[0]?-1:Se[0]>s[0]?1:0,u=Se[1]<-s[1]?-1:Se[1]>s[1]?1:0,h=Se[2]<-s[2]?-1:Se[2]>s[2]?1:0,m=Math.abs(c)+Math.abs(u)+Math.abs(h);if(0===m)return 1/0;const f=1===m?4:6,p=6*(c+3*u+9*h+13);(0,i.I0)(Be,o),(0,i.hs)(Be,Be,s);const v=this.getCenter(He);for(let e=0;e<f;e++){const r=Oe[p+e];(0,l.s)(Se,((1&r)<<1)-1,(2&r)-1,((4&r)>>1)-1),(0,l.t)(Se,Se,Be),(0,l.g)(Me,v,Se),Me[3]=1,(0,d.t)(Me,Me,t);const i=1/Math.max(1e-6,Me[3]);Ce[2*e]=Me[0]*i,Ce[2*e+1]=Me[1]*i}const g=2*f-2;let _=Ce[0]*(Ce[3]-Ce[g+1])+Ce[g]*(Ce[1]-Ce[g-1]);for(let e=2;e<g;e+=2)_+=Ce[e]*(Ce[e+3]-Ce[e-1]);return Math.abs(_)*r*n*.125}projectedRadius(e){const t=this.getQuaternion(Ae);return(0,a.Xr)(be,t),(0,l.u)(Se,e,be),Math.abs(Se[0]*this._data[3])+Math.abs(Se[1]*this._data[4])+Math.abs(Se[2]*this._data[5])}minimumDistancePlane(e){return e[0]*this._data[0]+e[1]*this._data[1]+e[2]*this._data[2]+e[3]-this.projectedRadius((0,g.Qj)(e))}maximumDistancePlane(e){return e[0]*this._data[0]+e[1]*this._data[1]+e[2]*this._data[2]+e[3]+this.projectedRadius((0,g.Qj)(e))}toAaBoundingBox(e){const t=this.getQuaternion(Ae),r=(0,i.I0)(Be,t),n=this._data[3]*Math.abs(r[0])+this._data[4]*Math.abs(r[3])+this._data[5]*Math.abs(r[6]),o=this._data[3]*Math.abs(r[1])+this._data[4]*Math.abs(r[4])+this._data[5]*Math.abs(r[7]),a=this._data[3]*Math.abs(r[2])+this._data[4]*Math.abs(r[5])+this._data[5]*Math.abs(r[8]);e[0]=this._data[0]-n,e[1]=this._data[1]-o,e[2]=this._data[2]-a,e[3]=this._data[0]+n,e[4]=this._data[1]+o,e[5]=this._data[2]+a}transform(e,t,r,i=0,n=(0,m.lO)(r),o=(0,m.lO)(t),s=(0,v.jd)(t,o)){if(r===n)t.isGeographic?function(e,t,r,i,n=(0,m.lO)(r)){const o=(0,h.tO)(r),s=1+Math.max(0,i)/(o.radius+e.centerZ);e.getCenter(Le),Le[2]+=i,(0,p.projectBuffer)(Le,r,0,Le,n,0,1),t.center=Le;const c=e.getQuaternion(Ae);t.quaternion=c,(0,a.Xr)(be,c),(0,l.s)(Ge,0,0,1),(0,l.u)(Ge,Ge,be);const d=e.getHalfSize(Fe);(0,l.s)(Ge,d[0]*Math.abs(Ge[0]),d[1]*Math.abs(Ge[1]),d[2]*Math.abs(Ge[2])),(0,l.h)(Ge,Ge,o.inverseFlattening),(0,l.g)(Ge,d,Ge),t.halfSize=(0,l.h)(Ge,Ge,s)}(this,e,t,i,o):function(e,t,r,i,n=(0,m.lO)(r),o=(0,v.jd)(r,n)){e.getCorners(Ve),e.getCenter(Le),Le[2]+=i,(0,f.l)(r,Le,ze,n),t.setCenter(ze[12],ze[13],ze[14]);const s=2*Math.sqrt(1+ze[0]+ze[5]+ze[10]);be[0]=(ze[6]-ze[9])/s,be[1]=(ze[8]-ze[2])/s,be[2]=(ze[1]-ze[4])/s,be[3]=.25*s;const c=e.getQuaternion(Ae);t.quaternion=(0,a.lw)(be,be,c),(0,a.Xr)(be,be),(0,l.s)(We,0,0,0);const d=t.getCenter(De);for(const e of Ve)e[2]+=i,o(e,0,e,0),(0,l.z)(Ge,e,d),(0,l.u)(Ge,Ge,be),(0,l.v)(Ge,Ge),(0,l.C)(We,We,Ge);t.halfSize=We}(this,e,t,i,o,s);else if(t.isWGS84&&(r.isWebMercator||(0,_.r1)(r)))!function(e,t,r,i,n){t.getCenter(He),He[2]+=n;const o=(0,m.lO)(r);(0,p.projectBuffer)(He,e,0,He,o,0,1),Re(o,t,He,r,i)}(t,this,r,e,i);else if(t.isWebMercator&&(0,_.r1)(r))!function(e,t,r,i,n){t.getCenter(He),He[2]+=n,Re(e,t,He,r,i)}(t,this,r,e,i);else{const n=this.getCenter(He);n[2]+=i,(0,p.projectBuffer)(n,t,0,n,r,0,1),e.center=n,this!==e&&(e.quaternion=this.getQuaternion(Ae),e.halfSize=this.getHalfSize(Fe))}}}const be=(0,s.vt)(),Ae=(0,s.vt)(),ye=(0,s.vt)(),Se=(0,c.vt)(),Ee=(0,c.vt)(),Me=(0,u.vt)();function we(e,t=new Te){return function(e,t){const{data:r,size:i}=e,n=r.length/i;if(n<=0)return;const o=new le(e);ue(S,o.minProj,o.maxProj),me(S,S,.5),he(E,o.maxProj,o.minProj);const a=de(E),s=new ce;s.quality=a,n<14&&(e=new A.K(new Float64Array(o.buffer,112,42),3));const l=(0,c.vt)(),d=(0,c.vt)(),u=(0,c.vt)(),h=(0,c.vt)(),m=(0,c.vt)(),f=(0,c.vt)(),p=(0,c.vt)();switch(M(o,e,p,l,d,u,h,m,f,s)){case 1:return void $(S,E,t);case 2:return void ee(e,h,t)}H(e,p,l,d,u,h,m,f,s),te(e,s.b0,s.b1,s.b2,J,K);const v=(0,c.vt)();he(v,K,J),s.quality=de(v),s.quality<a?se(s.b0,s.b1,s.b2,J,K,v,t):$(S,E,t)}(e,t),t}const Ce=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Oe=(()=>{const e=new Int8Array(162);let t=0;const r=r=>{for(let i=0;i<r.length;i++)e[t+i]=r[i];t+=6};return r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4]),e})();function Ie(e,t,r,i,n){const o=e.getQuaternion(Ae);n.quaternion=o,(0,a.Xr)(be,o);const s=e.getCenter(He),d=e.getHalfSize(Fe);if(i===T.RT.Global){(0,l.u)(Ge,s,be),(0,l.v)(We,Ge),(0,l.y)(Ue,We,d),(0,l.z)(Ue,We,Ue);const i=(0,l.l)(Ue);(0,l.g)(Ue,We,d);const o=(0,l.l)(Ue);if(i<r)n.center=s,(0,l.s)(Ge,r,r,r),n.halfSize=(0,l.g)(Ge,d,Ge);else{const a=o>0?1+t/o:1,s=i>0?1+r/i:1,c=(s+a)/2,u=(s-a)/2;(0,l.h)(Ue,We,u),n.halfSize=(0,l.r)(Ue,Ue,d,c),(0,l.h)(Ue,We,c),(0,l.r)(Ue,Ue,d,u),(0,l.A)(Ge,Ge),(0,l.B)(Ge,Ue,Ge);const h=e.getQuaternion(ye);n.center=(0,l.u)(Ge,Ge,h)}}else{n.center=(0,l.r)(Ge,s,c.Cb,(r+t)/2);const e=(0,l.u)(Ge,c.Cb,be);(0,l.v)(e,e),n.halfSize=(0,l.r)(We,d,e,(r-t)/2)}return n}function Re(e,t,r,n,o){const a=t.getQuaternion(Ae),s=(0,i.I0)(Be,a),l=t.getHalfSize(Fe);for(let e=0;e<8;++e){for(let t=0;t<3;++t)Le[t]=l[t]*(e&1<<t?-1:1);for(let t=0;t<3;++t){let i=r[t];for(let e=0;e<3;++e)i+=Le[e]*s[3*e+t];Ne[3*e+t]=i}}(0,p.projectBuffer)(Ne,e,0,Ne,n,0,8),we(Pe,o)}const Ne=new Array(24),Pe=new A.K(Ne,3),Le=(0,c.vt)(),He=(0,c.vt)(),De=(0,c.vt)(),Fe=(0,c.vt)(),Be=(0,n.vt)(),ze=(0,o.vt)(),Ve=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Ge=(0,c.vt)(),We=(0,c.vt)(),Ue=(0,c.vt)(),je=(0,c.fA)(-1,-1,-1)},98055:(e,t,r)=>{r.d(t,{i$:()=>c,oD:()=>d,xJ:()=>l});var i=r(78816),n=r(54043),o=r(14279),a=r(38322);function s(e){e.varyings.add("linearDepth","float")}function l(e){e.vertex.uniforms.add(new o.G("nearFar",((e,t)=>t.camera.nearFar)))}function c(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(e,t){const{vertex:r}=e;switch(t.output){case i.V.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.V.LinearDepth:case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:return e.include(n.em,t),s(e),l(e),c(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},18725:(e,t,r)=>{r.d(t,{M:()=>n});var i=r(38322);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},47471:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(38322),n=r(2031);function o(e,t=!0){e.attributes.add(n.r.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},78816:(e,t,r)=>{var i;function n(e){return e===i.Shadow||e===i.ShadowHighlight||e===i.ShadowExcludeHighlight}function o(e){return function(e){return function(e){return s(e)||a(e)}(e)||e===i.LinearDepth}(e)||e===i.Normal}function a(e){return e===i.Highlight||e===i.ObjectAndLayerIdColor}function s(e){return e===i.Color||e===i.Alpha}r.d(t,{PJ:()=>n,V:()=>i,XY:()=>o}),function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"}(i||(i={}))},96132:(e,t,r)=>{r.d(t,{HQ:()=>c});var i=r(97908),n=r(62722),o=r(16967),a=r(55509),s=r(7027),l=(r(85190),r(38322));l.Y;function c(e,t){d(e,t,new s.W("slicePlaneOrigin",((e,r)=>f(t,e,r))),new s.W("slicePlaneBasis1",((e,r)=>p(t,e,r,r.slicePlane?.basis1))),new s.W("slicePlaneBasis2",((e,r)=>p(t,e,r,r.slicePlane?.basis2))))}function d(e,t,...r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?l.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}function u(e,t,r){return e.instancedDoublePrecision?(0,o.s)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function h(e,t){return null!=e?(0,o.f)(g,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?null!=t?(0,i.Tl)(x,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function f(e,t,r){if(null==r.slicePlane)return a.uY;const i=u(e,t,r),n=h(i,r.slicePlane),s=m(e,i,r);return null!=s?(0,o.e)(g,n,s):n}function p(e,t,r,i){if(null==i||null==r.slicePlane)return a.uY;const n=u(e,t,r),s=h(n,r.slicePlane),l=m(e,n,r);return null!=l?((0,o.g)(_,i,s),(0,o.e)(g,s,l),(0,o.e)(_,_,l),(0,o.f)(_,_,g)):i}const v=(0,a.vt)(),g=(0,a.vt)(),_=(0,a.vt)(),x=(0,n.vt)()},97314:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(98055),n=r(38322);function o(e){(0,i.i$)(e),e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},84380:(e,t,r)=>{r.d(t,{BK:()=>b,nW:()=>x});var i=r(90252),n=r(69249),o=r(10733),a=r(62722),s=r(16967),l=r(55509),c=r(78816),d=r(86320),u=r(21605),h=r(7027),m=r(38322),f=r(99847),p=r(75268),v=r(96354),g=r(2031),_=r(8028);class x extends v.K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,i._)([(0,v.W)()],x.prototype,"instancedDoublePrecision",void 0),(0,i._)([(0,v.W)()],x.prototype,"hasModelTransformation",void 0);m.Y;const T=(0,o.vt)();function b(e,t){const r=t.hasModelTransformation,i=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new p.X("model",(e=>e.modelTransformation??a.zK))),e.vertex.uniforms.add(new f.k("normalLocalOriginFromModel",(e=>((0,n.Ge)(T,e.modelTransformation??a.zK),T))))),t.instanced&&i&&(e.attributes.add(g.r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(g.r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(g.r.INSTANCEMODEL,"mat3"),e.attributes.add(g.r.INSTANCEMODELNORMAL,"mat3"));const o=e.vertex;i&&(o.include(d.u,t),o.uniforms.add(new h.W("viewOriginHi",((e,t)=>(0,_.Zo)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))),new h.W("viewOriginLo",((e,t)=>(0,_.jA)((0,s.s)(A,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),A))))),o.code.add(m.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?m.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(m.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===c.V.Normal&&((0,u.S7)(o),o.code.add(m.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&o.code.add(m.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const A=(0,l.vt)()},37649:(e,t,r)=>{r.d(t,{W:()=>i,Y:()=>s});var i,n=r(95955),o=r(38322),a=r(2031);function s(e,t){switch(t.normalType){case i.Compressed:e.attributes.add(a.r.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(o.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case i.Attribute:e.attributes.add(a.r.NORMAL,"vec3"),e.vertex.code.add(o.H`vec3 normalModel() {
return normal;
}`);break;case i.ScreenDerivative:e.fragment.code.add(o.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Xb)(t.normalType);case i.COUNT:case i.Ground:}}!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(i||(i={}))},45877:(e,t,r)=>{r.d(t,{I:()=>o});var i=r(38322),n=r(2031);function o(e){e.attributes.add(n.r.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},15229:(e,t,r)=>{r.d(t,{K:()=>c});var i=r(3565),n=r(38322);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(55223),s=r(2031),l=r(64446);function c(e,t){t.hasSymbolColors?(e.include(o),e.attributes.add(s.r.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a.c("colorMixMode",(e=>l.Um[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},56121:(e,t,r)=>{r.d(t,{U:()=>s,q:()=>i});var i,n=r(95955),o=r(38322),a=r(2031);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(a.r.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.r.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Xb)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(i||(i={}))},53805:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(38322),n=r(2031);function o(e,t){t.hasVertexColors?(e.attributes.add(n.r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},46275:(e,t,r)=>{r.d(t,{Mh:()=>u,Zo:()=>h,gy:()=>m});var i=r(95955),n=r(10733),o=r(64554),a=r(37649),s=r(54043),l=r(38322),c=r(52470),d=r(99847);function u(e,t){switch(t.normalType){case a.W.Attribute:case a.W.Compressed:e.include(a.Y,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new c.h("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new d.k("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(l.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a.W.Ground:e.include(s.em,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(l.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?l.H`normalize(vPositionWorldCameraRelative);`:l.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a.W.ScreenDerivative:e.vertex.code.add(l.H`void forwardNormal() {}`);break;default:(0,i.Xb)(t.normalType);case a.W.COUNT:}}class h extends s.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,n.vt)()}}class m extends s.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,n.vt)(),this.toMapSpace=(0,o.vt)()}}},54043:(e,t,r)=>{r.d(t,{EM:()=>v,dO:()=>p,em:()=>f});var i=r(10733),n=r(62722),o=r(55509),a=r(45877),s=r(86320),l=r(7027),c=r(85190),d=r(38322),u=r(52470),h=r(99847),m=r(75268);function f(e,t){e.include(a.I);const r=e.vertex;r.include(s.u,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new c.t("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.k("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new m.X("transformProjFromView",(e=>e.transformProjFromView)),new u.h("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new l.W("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new l.W("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(d.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(d.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?d.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:d.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new c.t("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(d.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends d.Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.vt)(),this.transformWorldFromViewTL=(0,o.vt)(),this.transformViewFromCameraRelativeRS=(0,i.vt)(),this.transformProjFromView=(0,n.vt)()}}class v extends d.Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,i.vt)(),this.transformWorldFromModelTH=(0,o.vt)(),this.transformWorldFromModelTL=(0,o.vt)()}}},17532:(e,t,r)=>{r.d(t,{r:()=>s});var i=r(95955),n=r(56121),o=r(38322);function a(e){e.fragment.code.add(o.H`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function s(e,t){switch(e.include(n.U,t),t.textureCoordinateType){case n.q.Default:case n.q.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case n.q.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,i.Xb)(t.textureCoordinateType);case n.q.None:case n.q.COUNT:return}}},58994:(e,t,r)=>{r.d(t,{G:()=>f});var i=r(29816),n=r(64554),o=r(16967),a=r(55509),s=r(85190),l=r(38322);function c(e){e.vertex.code.add(l.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(l.H`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(l.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(l.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(l.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function d(e){return(0,o.s)(u,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const u=(0,a.vt)();var h=r(21605),m=r(41509);function f(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new m.E("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(p,o*s,a,r,n)})))}(r),t.hasScreenSizePerspective&&(e.include(c),function(e){e.uniforms.add(new s.t("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}(r),(0,h.yu)(e.vertex,t)),r.code.add(l.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?l.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:l.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?l.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const p=(0,n.vt)()},65257:(e,t,r)=>{r.d(t,{E:()=>E});var i=r(98055),n=r(78816),o=r(96132),a=r(97314),s=r(37649),l=r(38322),c=r(2031);function d(e,t){const r=t.output===n.V.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(c.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(c.r.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(l.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?l.H`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l.H``} }`),e.fragment.code.add(l.H`
      void outputObjectAndLayerIdColor() {
        ${r?l.H`fragColor = objectAndLayerIdColorVarying;`:l.H``} }`)}var u=r(56121),h=r(46275),m=r(89051),f=r(37214);function p(e,t){switch(t.output){case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:e.fragment.include(m.U),e.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case n.V.LinearDepth:e.fragment.include(f.W),e.fragment.code.add(l.H`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}var v=r(64554),g=r(9886);const _=(0,v.fA)(1,1,0,1),x=(0,v.fA)(1,0,1,1);function T(e){e.fragment.uniforms.add(new g.N("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",_).add("unoccludedHighlightFlag","vec4",x),e.fragment.code.add(l.H`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}var b=r(42623),A=r(65530),y=r(21605),S=r(90599);function E(e,t){const{vertex:r,fragment:c}=e,m=t.hasColorTexture&&t.alphaDiscardMode!==S.sf.Opaque;switch(t.output){case n.V.LinearDepth:case n.V.Shadow:case n.V.ShadowHighlight:case n.V.ShadowExcludeHighlight:case n.V.ObjectAndLayerIdColor:(0,y.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(b.A,t),e.include(p,t),e.include(o.HQ,t),e.include(d,t),(0,i.xJ)(e),e.varyings.add("depth","float"),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(A.S,t),c.code.add(l.H`
          void main(void) {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.V.ObjectAndLayerIdColor?l.H`outputObjectAndLayerIdColor();`:l.H`outputDepth(depth);`}
          }
        `);break;case n.V.Normal:{(0,y.NB)(r,t),e.include(a.d,t),e.include(s.Y,t),e.include(h.Mh,t),e.include(u.U,t),e.include(b.A,t),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),t.normalType===s.W.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===s.W.Attribute||t.normalType===s.W.Compressed;r.code.add(l.H`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?l.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:l.H`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(o.HQ,t),e.include(A.S,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===s.W.ScreenDerivative?l.H`vec3 normal = screenDerivativeNormal(vPositionView);`:l.H`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case n.V.Highlight:(0,y.NB)(r,t),e.include(a.d,t),e.include(u.U,t),e.include(b.A,t),m&&c.uniforms.add(new g.N("tex",(e=>e.texture))),r.code.add(l.H`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o.HQ,t),e.include(A.S,t),e.include(T,t),c.code.add(l.H`
          void main() {
            discardBySlice(vpos);
            ${m?l.H`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?l.H`colorUV`:l.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},31973:(e,t,r)=>{r.d(t,{D:()=>o,E:()=>a});var i=r(37214),n=r(38322);function o(e){e.include(i.W),e.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function a(e){e.code.add(n.H`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}},11066:(e,t,r)=>{r.d(t,{W:()=>p});var i=r(10733),n=r(24940),o=r(56121),a=r(17532),s=r(20913),l=r(14279),c=r(38322),d=r(99847),u=r(10123),h=r(9886),m=r(36980),f=r(2031);function p(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.r.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===s.W.WindingOrder?r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(c.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==o.q.None&&(e.include(a.r,t),r.uniforms.add(t.pbrTextureBindType===m.c.Pass?new h.N("normalTexture",(e=>e.textureNormal)):new u.o("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new l.G("scale",(e=>e.scale??n.Un))),r.uniforms.add(new d.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK)))),r.code.add(c.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(c.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(c.H`return tangentSpace * rawNormal;
}`))}},96491:(e,t,r)=>{r.d(t,{n:()=>j});var i,n,o=r(38322),a=r(9886),s=r(90252),l=r(10590),c=r(7929),d=r(25237),u=r(28296),h=r(17134),m=(r(22333),r(60249),r(92262),r(59585)),f=r(38330);!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(i||(i={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(n||(n={}));const p=5e5;var v=r(76881),g=r(78816);const _={required:[]},x=(g.V.LinearDepth,g.V.CompositeColor,g.V.Highlight,{required:[g.V.Depth,g.V.Normal]});class T extends v.A{consumes(){return _}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class b extends T{}var A=r(32663),y=r(41486),S=r(55734),E=r(46005),M=r(74539),w=r(6719);class C extends y.w{initializeProgram(e){return new E.B(e.rctx,C.shader.get().build(),S.D)}initializePipeline(){return(0,w.Ey)({colorWrite:w.wE})}}C.shader=new A.$(M.S,(()=>r.e(9259).then(r.bind(r,99259))));var O=r(24940);class I extends o.Y{constructor(){super(...arguments),this.projScale=1}}class R extends I{constructor(){super(...arguments),this.intensity=1}}class N extends o.Y{}class P extends N{constructor(){super(...arguments),this.blurSize=(0,O.vt)()}}var L=r(52984);class H extends y.w{initializeProgram(e){return new E.B(e.rctx,H.shader.get().build(),S.D)}initializePipeline(){return(0,w.Ey)({colorWrite:w.wE})}}H.shader=new A.$(L.S,(()=>r.e(8360).then(r.bind(r,68360))));var D;r(78445);!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(D||(D={}));var F=r(41466),B=r(90928),z=r(67405),V=r(25964);const G=2;let W=class extends b{constructor(e){super(e),this._context=null,this._passParameters=new R,this._drawParameters=new P,this.produces=new Map([[F.N.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<p}consumes(){return this._produces()?x:_}initializeRenderContext(e){this._context=e,this.addHandles([(0,d.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(D.SSAO)),(e=>e?this._enable():this._disable()),d.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,c.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new V.R;t.wrapMode=B.pF.CLAMP_TO_EDGE,t.pixelFormat=B.Ab.RGB,t.wrapMode=B.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new z.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(H)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(C)),this._enableTime=(0,u.l5)(0),this._context?.requestRender()}renderNode(e,t,r){const n=e.bindParameters,o=r?.get("normals"),a=o?.getTexture(),s=o?.getTexture(B.nI);if(null==this._enableTime||null==this._context||!a||!s)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const c=e.rctx,d=n.camera,u=this.view.qualitySettings.fadeDuration,h=d.relativeElevation,m=(0,l.qE)((p-h)/2e5,0,1),v=u>0?Math.min(u,e.time-this._enableTime)/u:1,g=v*m;this._passParameters.normalTexture=a,this._passParameters.depthTexture=s,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*U/(0,L.g)(d)**6*g;const _=d.fullViewport[2],x=d.fullViewport[3],T=Math.round(_/G),b=Math.round(x/G),A=this._context.fbos,y=A.acquire(_,x,"ssao input",i.RG);c.unbindTexture(y.fbo.colorTexture),c.bindFramebuffer(y.fbo),c.setViewport(0,0,_,x),c.bindTechnique(this._ssaoTechnique,n,this._passParameters,this._drawParameters),c.screen.draw();const S=A.acquire(T,b,"ssao blur",i.RED);c.unbindTexture(S.fbo.colorTexture),c.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=y.getTexture(),(0,f.hZ)(this._drawParameters.blurSize,0,G/x),c.bindTechnique(this._blurTechnique,n,this._passParameters,this._drawParameters),c.setViewport(0,0,T,b),c.screen.draw(),y.release();const E=A.acquire(T,b,"ssao",i.RED);return c.unbindTexture(E.fbo.colorTexture),c.bindFramebuffer(E.fbo),c.setViewport(0,0,_,x),c.setClearColor(1,1,1,0),c.clear(B.hn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=S.getTexture(),(0,f.hZ)(this._drawParameters.blurSize,G/_,0),c.bindTechnique(this._blurTechnique,n,this._passParameters,this._drawParameters),c.setViewport(0,0,T,b),c.screen.draw(),c.setViewport4fv(d.fullViewport),S.release(),v<1&&this._context.requestRender(),E}};(0,s._)([(0,h.MZ)({constructOnly:!0})],W.prototype,"view",void 0),(0,s._)([(0,h.MZ)()],W.prototype,"_context",void 0),W=(0,s._)([(0,m.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],W);const U=.5;function j(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new a.N("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/G),r.code.add(o.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(o.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},71453:(e,t,r)=>{r.d(t,{kA:()=>M,a8:()=>S,eU:()=>E});var i=r(95955),n=r(16967),o=r(55509),a=r(29816),s=r(64554),l=r(83648),c=r(85190),d=r(41509),u=r(38322);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add(new d.E("lightingAmbientSH_R",((e,t)=>(0,a.s)(f,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new d.E("lightingAmbientSH_G",((e,t)=>(0,a.s)(f,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new d.E("lightingAmbientSH_B",((e,t)=>(0,a.s)(f,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add(new c.t("lightingAmbientSH0",((e,t)=>(0,n.s)(m,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new d.E("lightingAmbientSH_R1",((e,t)=>(0,a.s)(f,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new d.E("lightingAmbientSH_G1",((e,t)=>(0,a.s)(f,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new d.E("lightingAmbientSH_B1",((e,t)=>(0,a.s)(f,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new d.E("lightingAmbientSH_R2",((e,t)=>(0,a.s)(f,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new d.E("lightingAmbientSH_G2",((e,t)=>(0,a.s)(f,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new d.E("lightingAmbientSH_B2",((e,t)=>(0,a.s)(f,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(u.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==l.A9.Normal&&t.pbrMode!==l.A9.Schematic||r.code.add(u.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const m=(0,o.vt)(),f=(0,s.vt)();var p=r(96491),v=r(54522),g=r(21337),_=r(31677),x=r(54976),T=r(36980);class b extends x.n{constructor(e,t){super(e,"bool",T.c.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}var A=r(46127);r(10590);(0,o.vt)();const y=.4;(0,o.vt)();function S(e){e.constants.add("ambientBoostFactor","float",y)}function E(e){e.uniforms.add(new A.m("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function M(e,t){const r=e.fragment;switch(e.include(p.n,t),t.pbrMode!==l.A9.Disabled&&e.include(g.c,t),e.include(h,t),e.include(_.p),r.code.add(u.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),S(r),E(r),(0,v.Gc)(r),r.code.add(u.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?u.H`normalize(vPosWorld)`:u.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.O4)(r),r.code.add(u.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.A9.Disabled:case l.A9.WaterOnIntegratedMesh:case l.A9.Water:e.include(v.qU),r.code.add(u.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.A9.Normal:case l.A9.Schematic:r.code.add(u.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(u.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(u.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new A.m("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new A.m("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(u.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(u.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==l.A9.Schematic||t.hasColorTexture?u.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:u.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case l.A9.Simplified:case l.A9.TerrainWithWater:e.include(v.qU),r.code.add(u.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Xb)(t.pbrMode);case l.A9.COUNT:}}},54522:(e,t,r)=>{r.d(t,{Gc:()=>o,O4:()=>a,qU:()=>s});var i=r(85190),n=r(38322);function o(e){e.uniforms.add(new i.t("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function a(e){e.uniforms.add(new i.t("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function s(e){o(e.fragment),a(e.fragment),e.fragment.code.add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},33058:(e,t,r)=>{r.d(t,{Q:()=>s});var i=r(31973),n=r(14279),o=r(38322),a=r(9886);function s(e,t){if(!t.multipassEnabled)return;e.fragment.include(i.D),e.fragment.uniforms.add(new a.N("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.getTexture())),new n.G("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(o.H`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?o.H`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:o.H`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}},20913:(e,t,r)=>{r.d(t,{W:()=>i,r:()=>a});var i,n=r(95955),o=r(38322);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Xb)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},21337:(e,t,r)=>{r.d(t,{c:()=>s});var i=r(38322);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(83648),a=r(31677);function s(e,t){const r=e.fragment.code;e.include(a.p),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic&&t.pbrMode!==o.A9.Simplified&&t.pbrMode!==o.A9.TerrainWithWater||(r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.A9.Normal&&t.pbrMode!==o.A9.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},83648:(e,t,r)=>{r.d(t,{A9:()=>i,_Z:()=>u});var i,n=r(17532),o=r(7027),a=r(85190),s=r(38322),l=r(10123),c=r(9886),d=r(36980);r(19710);!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(i||(i={}));function u(e,t){const r=e.fragment,u=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===i.Normal&&u&&e.include(n.r,t),t.pbrMode!==i.Schematic)if(t.pbrMode!==i.Disabled){if(t.pbrMode===i.Normal){r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===d.c.Pass?new c.N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new l.o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(s.H`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===d.c.Pass?new c.N("texEmission",(e=>e.textureEmissive)):new l.o("texEmission",(e=>e.textureEmissive))),r.code.add(s.H`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===d.c.Pass?new c.N("texOcclusion",(e=>e.textureOcclusion)):new l.o("texOcclusion",(e=>e.textureOcclusion))),r.code.add(s.H`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),e===d.c.Pass?r.uniforms.add(new a.t("emissionFactor",(e=>e.emissiveFactor)),new a.t("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new o.W("emissionFactor",(e=>e.emissiveFactor)),new o.W("mrrFactors",(e=>e.mrrFactors))),r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s.H`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s.H`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s.H`applyEmission(${t.hasEmissiveTextureTransform?s.H`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s.H`applyOcclusion(${t.hasOcclusionTextureTransform?s.H`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},31677:(e,t,r)=>{r.d(t,{p:()=>n});var i=r(38322);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},39496:(e,t,r)=>{r.d(t,{Bz:()=>m,G:()=>h});r(62722),r(55509);var i=r(89051),n=r(41509),o=r(55223),a=r(38322),s=r(54976),l=r(36980);class c extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Draw,((r,i,n,o)=>r.setUniformMatrix4fv(e,t(i,n,o))),r)}}class d extends s.n{constructor(e,t,r){super(e,"mat4",l.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var u=r(9886);a.Y;a.Y;function h(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new c("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const t=e.fragment;t.include(i.U),t.uniforms.add(new u.N("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new o.c("numCascades",((e,t)=>t.shadowMap.numCascades)),new n.E("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(a.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}},12479:(e,t,r)=>{r.d(t,{MU:()=>c,O1:()=>d,QM:()=>u,Sx:()=>l,q2:()=>s});var i=r(10733),n=r(56121),o=r(38322),a=r(99847);function s(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new a.k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??i.zK))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardColorUV(){}`)}function l(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??i.zK))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardNormalUV(){}`)}function c(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??i.zK))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardEmissiveUV(){}`)}function d(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??i.zK))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardOcclusionUV(){}`)}function u(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==n.q.None?(e.vertex.uniforms.add(new a.k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??i.zK))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){}`)}},42623:(e,t,r)=>{r.d(t,{A:()=>b});var i=r(85190),n=r(54976),o=r(36980);class a extends n.n{constructor(e,t,r){super(e,"vec4",o.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.n{constructor(e,t,r){super(e,"float",o.c.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var l=r(38322),c=r(99847),d=r(2031),u=(r(22333),r(10590),r(69249),r(10733),r(97908),r(62722)),h=(r(16967),r(55509)),m=(r(39),r(90252)),f=r(76881),p=r(17134),v=(r(60249),r(92262),r(59585));let g=class extends f.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,m._)([(0,p.MZ)()],g.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LABELS_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BASELINE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TEXT_SHOW_BORDER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"SHOW_POI",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,m._)([(0,p.MZ)()],g.prototype,"LINE_WIREFRAMES",void 0),g=(0,m._)([(0,v.$)("esri.views.3d.support.DebugFlags")],g);new g;var _,x;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(_||(_={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(x||(x={}));l.Y;(0,u.vt)(),(0,h.vt)(),(0,u.vt)();r(70708);const T=8;function b(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(d.r.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new i.t("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new i.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new i.t("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new i.t("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new c.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(l.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?l.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",T),r.uniforms.add(new s("vvColorValues",(e=>e.vvColor.values),T),new a("vvColorColors",(e=>e.vvColor.colors),T)),r.code.add(l.H`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?l.H`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l.H`vec4 vvColor() { return vec4(1.0); }`)}},60270:(e,t,r)=>{r.d(t,{H:()=>i,y:()=>n});const i=.1,n=.001},65530:(e,t,r)=>{r.d(t,{S:()=>c});var i=r(60270),n=r(38322);function o(e){e.fragment.code.add(n.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(i.y)}) { discard; } }
  `)}var a=r(54976);r(36980);a.n;var s=r(46127),l=r(90599);function c(e,t){d(e,t,new s.m("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function d(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==l.sf.Mask&&t.alphaDiscardMode!==l.sf.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case l.sf.Blend:return e.include(o);case l.sf.Opaque:i.code.add(n.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case l.sf.Mask:i.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case l.sf.MaskBlend:e.fragment.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},90892:(e,t,r)=>{r.d(t,{Ir:()=>d});var i=r(38330),n=r(24940),o=r(29816),a=r(64554),s=r(14279),l=r(41509),c=r(38322);function d(e){e.fragment.uniforms.add(new l.E("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?(0,o.s)(u,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(u,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new s.G("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?(0,i.hZ)(h,0,1):(0,i.hZ)(h,1,0)}(t.camera)))),e.fragment.code.add(c.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const u=(0,a.vt)();const h=(0,n.vt)()},86320:(e,t,r)=>{r.d(t,{u:()=>n});var i=r(38322);function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(i.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(i.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},190:(e,t,r)=>{r.d(t,{N:()=>a});var i=r(3565),n=r(38322);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},89051:(e,t,r)=>{r.d(t,{U:()=>n});var i=r(38322);function n(e){e.code.add(i.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},37214:(e,t,r)=>{r.d(t,{W:()=>n});var i=r(38322);function n(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},21605:(e,t,r)=>{r.d(t,{yu:()=>m,NB:()=>f,S7:()=>g});var i=r(97908),n=r(62722),o=r(16967),a=r(55509),s=r(7027),l=r(85190),c=(r(46127),r(54976)),d=r(36980);class u extends c.n{constructor(e,t){super(e,"mat4",d.c.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var h=r(75268);function m(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.uY):e.uniforms.add(new s.W("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function f(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new u("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,e.origin))),new s.W("localOrigin",(e=>e.origin)));const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new h.X("proj",((e,t)=>t.camera.projectionMatrix)),new h.X("view",((e,t)=>(0,i.Tl)(p,t.camera.viewMatrix,r(t)))),new l.t("localOrigin",((e,t)=>r(t))))}const p=(0,n.vt)(),v=(0,a.vt)();function g(e){e.uniforms.add(new h.X("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},32854:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},14279:(e,t,r)=>{r.d(t,{G:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"vec2",n.c.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},7027:(e,t,r)=>{r.d(t,{W:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}}},85190:(e,t,r)=>{r.d(t,{t:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"vec3",n.c.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}}},41509:(e,t,r)=>{r.d(t,{E:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"vec4",n.c.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},46127:(e,t,r)=>{r.d(t,{m:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"float",n.c.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},55223:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"int",n.c.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},52470:(e,t,r)=>{r.d(t,{h:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},99847:(e,t,r)=>{r.d(t,{k:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"mat3",n.c.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},75268:(e,t,r)=>{r.d(t,{X:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"mat4",n.c.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}},13868:(e,t,r)=>{r.d(t,{N5:()=>c});var i=r(51819),n=r(60249),o=r(36980),a=r(66457);const s=()=>n.A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s().error("Shader module included multiple times with different configuration.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends l{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new f,this.extensions=new p,this.constants=new g,this.outputs=new v}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?x:_,l=this.constants.generateSource().concat(n.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n)=>{for(let o=0;o<i;++o)r[o](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[o.c.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),i=r.length;return(t,n,o)=>{for(let a=0;a<i;++a)r[a](e,t,n,o)}}}class d{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.A(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else s().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class h extends l{constructor(){super(...arguments),this.uniforms=new d,this.code=new u,this.constants=new g}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,a.vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,i)=>t.push("vertex"===e?`out ${r} ${i};`:`in ${r} ${i};`))),t}}class p{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?p.ALLOWLIST_VERTEX:p.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}p.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],p.ALLOWLIST_VERTEX=[];class v{constructor(){this._entries=new Map}add(e,t,r=0){const i=this._entries.get(r);i?(0,a.vA)(i.name===e&&i.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:v.DEFAULT_NAME,type:v.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}v.DEFAULT_TYPE="vec4",v.DEFAULT_NAME="fragColor";class g{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=g._numberToFloatStr(r);break;case"int":i=g._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",x="precision highp float;\nprecision highp sampler2D;"},10123:(e,t,r)=>{r.d(t,{o:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},9886:(e,t,r)=>{r.d(t,{N:()=>o});var i=r(54976),n=r(36980);class o extends i.n{constructor(e,t){super(e,"sampler2D",n.c.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}},54976:(e,t,r)=>{r.d(t,{n:()=>n});var i=r(36980);class n{constructor(e,t,r,n,o=null){if(this.name=e,this.type=t,this.arraySize=o,this.bind={[i.c.Pass]:null,[i.c.Draw]:null},n)switch(r){case i.c.Pass:this.bind[i.c.Pass]=n;break;case i.c.Draw:this.bind[i.c.Draw]=n}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},38322:(e,t,r)=>{r.d(t,{H:()=>n,Y:()=>i});const i=class{};function n(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(n||(n={}))},36980:(e,t,r)=>{var i;r.d(t,{c:()=>i}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},32663:(e,t,r)=>{r.d(t,{$:()=>i});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},41486:(e,t,r)=>{r.d(t,{w:()=>o});var i=r(7929),n=r(90928);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,i.WD)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.WD)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.WR.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}}},96354:(e,t,r)=>{r.d(t,{K:()=>n,W:()=>o});var i=r(38322);class n extends i.Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function o(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<o)-1<<l;a[s]+=o,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},71023:(e,t,r)=>{r.d(t,{J:()=>n});var i=r(58271);class n{constructor(){this.id=(0,i.c)()}}},46727:(e,t,r)=>{var i;r.d(t,{X:()=>i}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(i||(i={}))},55734:(e,t,r)=>{r.d(t,{D:()=>n});var i=r(2031);const n=new Map([[i.r.POSITION,0],[i.r.NORMAL,1],[i.r.NORMALCOMPRESSED,1],[i.r.UV0,2],[i.r.COLOR,3],[i.r.COLORFEATUREATTRIBUTE,3],[i.r.SIZE,4],[i.r.TANGENT,4],[i.r.CENTEROFFSETANDDISTANCE,5],[i.r.SYMBOLCOLOR,5],[i.r.FEATUREATTRIBUTE,6],[i.r.INSTANCEFEATUREATTRIBUTE,6],[i.r.INSTANCECOLOR,7],[i.r.OBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[i.r.INSTANCEMODEL,8],[i.r.INSTANCEMODELNORMAL,12],[i.r.INSTANCEMODELORIGINHI,11],[i.r.INSTANCEMODELORIGINLO,15]])},19710:(e,t,r)=>{r.d(t,{m:()=>l});var i=r(7929),n=r(66011),o=r(38322),a=r(90599);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Am.LOADED}}class l extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.Gz)(this._texture),this._textureNormal=(0,i.Gz)(this._textureNormal),this._textureEmissive=(0,i.Gz)(this._textureEmissive),this._textureOcclusion=(0,i.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Am.LOADED:a.Am.LOADING}get textureBindParameters(){return new c(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,i.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if((0,n.$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.Gz)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class c extends o.Y{constructor(e=null,t=null,r=null,i=null,n=null,o,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=o,this.normalTextureTransformMatrix=a}}},53682:(e,t,r)=>{r.d(t,{V:()=>O});var i=r(62722),n=r(16967),o=r(21947),a=r(97820);function s(e){if(e.length<a.y9)return Array.from(e);if((0,a.cy)(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return(0,a.jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var l=r(90599),c=r(40802),d=r(55509),u=r(66457);class h{constructor(e,t,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=r,this._children=void 0,(0,u.vA)(e.length>=1),(0,u.vA)(3===r.size||4===r.size);const{data:i,size:o,indices:a}=r;(0,u.vA)(a.length%this._numIndexPerPrimitive==0),(0,u.vA)(a.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let l=o*a[this._numIndexPerPrimitive*e[0]];m.clear(),m.push(l);const c=(0,d.fA)(i[l],i[l+1],i[l+2]),h=(0,d.o8)(c);for(let t=0;t<s;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){l=o*a[r+e],m.push(l);let t=i[l];c[0]=Math.min(t,c[0]),h[0]=Math.max(t,h[0]),t=i[l+1],c[1]=Math.min(t,c[1]),h[1]=Math.max(t,h[1]),t=i[l+2],c[2]=Math.min(t,c[2]),h[2]=Math.max(t,h[2])}}this.bbMin=c,this.bbMax=h;const f=(0,n.m)((0,d.vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-c[0],h[1]-c[1]),h[2]-c[2]);let p=this.radius*this.radius;for(let e=0;e<m.length;++e){l=m.at(e);const t=i[l]-f[0],r=i[l+1]-f[1],n=i[l+2]-f[2],o=t*t+r*r+n*n;if(o<=p)continue;const a=Math.sqrt(o),s=.5*(a-this.radius);this.radius=this.radius+s,p=this.radius*this.radius;const c=s/a;f[0]+=t*c,f[1]+=r*c,f[2]+=n*c}this.center=f,m.clear()}getChildren(){if(this._children||(0,n.a)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,n.m)((0,d.vt)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:o,size:a,indices:s}=this.position;for(let n=0;n<t;++n){let t=0;const l=this._numIndexPerPrimitive*this.primitiveIndices[n];let c=a*s[l],d=o[c],u=o[c+1],h=o[c+2];for(let e=1;e<this._numIndexPerPrimitive;++e){c=a*s[l+e];const t=o[c],r=o[c+1],i=o[c+2];t<d&&(d=t),r<u&&(u=r),i<h&&(h=i)}d<e[0]&&(t|=1),u<e[1]&&(t|=2),h<e[2]&&(t|=4),r[n]=t,++i[t]}let l=0;for(let e=0;e<8;++e)i[e]>0&&++l;if(l<2)return;const c=new Array(8);for(let e=0;e<8;++e)c[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=r[e];c[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==c[e]&&this._children.push(new h(c[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){m.prune()}}const m=new c.A({deallocator:null});var f=r(71023),p=r(46727),v=r(26184),g=r(48001);r(40237);function _(e){return e?{p0:(0,d.o8)(e.p0),p1:(0,d.o8)(e.p1),p2:(0,d.o8)(e.p2)}:{p0:(0,d.vt)(),p1:(0,d.vt)(),p2:(0,d.vt)()}}function x(e,t,r){return(0,n.f)(T,t,e),(0,n.f)(b,r,e),.5*(0,n.l)((0,n.b)(T,T,b))}new v.I(g.vt),new v.I((()=>_()));const T=(0,d.vt)(),b=(0,d.vt)();const A=(0,d.vt)(),y=(0,d.vt)(),S=(0,d.vt)(),E=(0,d.vt)();var M=r(58271);class w{constructor(e){this.channel=e,this.id=(0,M.c)()}}var C=r(2031);r(8028);(0,d.vt)(),new Float32Array(6);class O extends f.J{constructor(e,t,r=null,i=p.X.Mesh,n=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=a,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,r]of t)this._attributes.set(e,{...r,indices:(0,o.Dg)(r.indices)}),e===C.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new O(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,r)=>{e.exclusive=!1,t._attributes.set(r,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:s(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===p.X.Mesh?this._computeAttachmentOriginTriangles(e):this.type===p.X.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&(0,n.e)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.s)(t,0,0,0),(0,n.s)(E,0,0,0);let a=0,s=0;for(let e=0;e<o.length-2;e+=3){const l=o[e]*r,c=o[e+1]*r,d=o[e+2]*r;(0,n.s)(A,i[l],i[l+1],i[l+2]),(0,n.s)(y,i[c],i[c+1],i[c+2]),(0,n.s)(S,i[d],i[d+1],i[d+2]);const u=x(A,y,S);u?((0,n.g)(A,A,y),(0,n.g)(A,A,S),(0,n.h)(A,A,1/3*u),(0,n.g)(t,t,A),a+=u):((0,n.g)(E,E,A),(0,n.g)(E,E,y),(0,n.g)(E,E,S),s+=3)}return!(0===s&&0===a||(0!==a?((0,n.h)(t,t,1/a),0):0===s||((0,n.h)(t,E,1/s),0)))}(this.attributes.get(C.r.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(C.r.POSITION);return function(e,t,r){if(!e)return!1;(0,n.s)(r,0,0,0),(0,n.s)(E,0,0,0);let i=0,o=0;const{size:a,data:s,indices:l}=e,c=l.length-1,d=c+(t?2:0);for(let e=0;e<d;e+=2){const t=e<c?e+1:0,d=l[e<c?e:c]*a,u=l[t]*a;A[0]=s[d],A[1]=s[d+1],A[2]=s[d+2],y[0]=s[u],y[1]=s[u+1],y[2]=s[u+2],(0,n.h)(A,(0,n.g)(A,A,y),.5);const h=(0,n.o)(A,y);h>0?((0,n.g)(r,r,(0,n.h)(A,A,h)),i+=h):0===i&&((0,n.g)(E,E,A),o++)}return 0!==i?((0,n.h)(r,r,1/i),!0):0!==o&&((0,n.h)(r,E,1/o),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:i,indices:o}=e;(0,n.s)(t,0,0,0);let a=-1,s=0;for(let e=0;e<o.length;e++){const n=o[e]*r;a!==n&&(t[0]+=i[n],t[1]+=i[n+1],t[2]+=i[n+2],s++),a=n}return s>1&&(0,n.h)(t,t,1/s),s>0}(this.attributes.get(C.r.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(C.r.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===p.X.Mesh?3:1;(0,u.vA)(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=(0,o.tM)(e.indices.length/t);return new h(r,t,e)}get transformation(){return this._transformation??i.zK}set transformation(e){this._transformation=e&&e!==i.zK?(0,i.o8)(e):null}addHighlight(){const e=new w(l.Mg.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}}},70708:(e,t,r)=>{r.d(t,{im:()=>u,m$:()=>o});var i=r(55509),n=r(38322);var o,a=r(90599),s=r(71023),l=r(46727),c=r(55734),d=r(64446);class u extends s.J{constructor(e,t){super(),this.type=l.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=c.D,this._pp0=(0,i.fA)(0,0,1),this._pp1=(0,i.fA)(0,0,0),this._parameters=(0,d.qu)(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,d.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===a.ID.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,i,n,o){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,r,this._pp0,this._pp1,n)}}!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(o||(o={}));n.Y},97801:(e,t,r)=>{r.d(t,{AJ:()=>l,K_:()=>m,V0:()=>a,aB:()=>h,ez:()=>c,xt:()=>d});var i=r(71378),n=r(90928),o=r(6719);const a=(0,o.p3)(n.dn.SRC_ALPHA,n.dn.ONE,n.dn.ONE_MINUS_SRC_ALPHA,n.dn.ONE_MINUS_SRC_ALPHA),s=(0,o.ox)(n.dn.ONE,n.dn.ONE),l=(0,o.ox)(n.dn.ZERO,n.dn.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.y.FrontFace?null:e===i.y.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function m(e,t=n.MT.LESS){return e===i.y.NONE||e===i.y.FrontFace?t:n.MT.LEQUAL}},46005:(e,t,r)=>{r.d(t,{B:()=>o});var i=r(40802),n=r(80811);class o{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.A({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=(0,n.en)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},41466:(e,t,r)=>{var i;r.d(t,{N:()=>i}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(i||(i={}))},71378:(e,t,r)=>{var i;r.d(t,{y:()=>i}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},90599:(e,t,r)=>{var i,n,o,a,s,l,c,d,u;r.d(t,{Am:()=>a,ID:()=>d,JS:()=>u,Mg:()=>l,dd:()=>s,it:()=>n,s2:()=>i,sf:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(c||(c={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(d||(d={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}))},64446:(e,t,r)=>{r.d(t,{Um:()=>C,qu:()=>E,Uy:()=>v,MB:()=>M,kE:()=>S});var i=r(16291),n=r(10590),o=r(16967),a=r(55509),s=r(84313),l=r(46727);r(70892);function c(e,t,r){const i=r.parameters;return h.scale=Math.min(i.divisor/(t-i.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h}function d(e,t){return(0,n.Cc)(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function u(e,t,r,i){return d(e,c(t,r,i))}(0,n.kU)(10),(0,n.kU)(12),(0,n.kU)(70),(0,n.kU)(40);const h={scale:0,factor:0,minScaleFactor:0};var m=r(66457),f=r(2031);const p=(0,s.vt)();function v(e,t,r,i,n,o){if(e.visible)if(e.boundingInfo){(0,m.vA)(e.type===l.X.Mesh);const a=t.tolerance;_(e.boundingInfo,r,i,a,n,o)}else{const t=e.attributes.get(f.r.POSITION),a=t.indices;T(r,i,0,a.length/3,a,t,void 0,n,o)}}const g=(0,a.vt)();function _(e,t,r,i,n,a){if(null==e)return;const l=function(e,t,r){return(0,o.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,g);if((0,s.Ne)(p,e.bbMin),(0,s.vI)(p,e.bbMax),null!=n&&n.applyToAabb(p),function(e,t,r,i){return function(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-i-t[1])*r[1],d=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<n)}(e,t,r,i,1/0)}(p,t,l,i)){const{primitiveIndices:o,position:s}=e,l=o?o.length:s.indices.length/3;if(l>O){const o=e.getChildren();if(void 0!==o){for(const e of o)_(e,t,r,i,n,a);return}}T(t,r,0,l,s.indices,s,o,n,a)}}const x=(0,a.vt)();function T(e,t,r,i,n,o,a,s,l){if(a)return function(e,t,r,i,n,o,a,s,l){const{data:c,stride:d}=o,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let e=r;e<i;++e){const t=a[e];let r=3*t,i=d*n[r++],o=c[i++],g=c[i++],_=c[i];i=d*n[r++];let T=c[i++],b=c[i++],A=c[i];i=d*n[r];let S=c[i++],E=c[i++],M=c[i];null!=s&&([o,g,_]=s.applyToVertex(o,g,_,e),[T,b,A]=s.applyToVertex(T,b,A,e),[S,E,M]=s.applyToVertex(S,E,M,e));const w=T-o,C=b-g,O=A-_,I=S-o,R=E-g,N=M-_,P=p*N-R*v,L=v*I-N*f,H=f*R-I*p,D=w*P+C*L+O*H;if(Math.abs(D)<=Number.EPSILON)continue;const F=u-o,B=h-g,z=m-_,V=F*P+B*L+z*H;if(D>0){if(V<0||V>D)continue}else if(V>0||V<D)continue;const G=B*O-C*z,W=z*w-O*F,U=F*C-w*B,j=f*G+p*W+v*U;if(D>0){if(j<0||V+j>D)continue}else if(j>0||V+j<D)continue;const q=(I*G+R*W+N*U)/D;q>=0&&l(q,y(w,C,O,I,R,N,x),t,!1)}}(e,t,r,i,n,o,a,s,l);const{data:c,stride:d}=o,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let e=r,t=3*r;e<i;++e){let r=d*n[t++],i=c[r++],o=c[r++],a=c[r];r=d*n[t++];let g=c[r++],_=c[r++],T=c[r];r=d*n[t++];let b=c[r++],A=c[r++],S=c[r];null!=s&&([i,o,a]=s.applyToVertex(i,o,a,e),[g,_,T]=s.applyToVertex(g,_,T,e),[b,A,S]=s.applyToVertex(b,A,S,e));const E=g-i,M=_-o,w=T-a,C=b-i,O=A-o,I=S-a,R=p*I-O*v,N=v*C-I*f,P=f*O-C*p,L=E*R+M*N+w*P;if(Math.abs(L)<=Number.EPSILON)continue;const H=u-i,D=h-o,F=m-a,B=H*R+D*N+F*P;if(L>0){if(B<0||B>L)continue}else if(B>0||B<L)continue;const z=D*w-M*F,V=F*E-w*H,G=H*M-E*D,W=f*z+p*V+v*G;if(L>0){if(W<0||B+W>L)continue}else if(W>0||B+W<L)continue;const U=(C*z+O*V+I*G)/L;U>=0&&l(U,y(E,M,w,C,O,I,x),e,!1)}}const b=(0,a.vt)(),A=(0,a.vt)();function y(e,t,r,i,n,a,s){return(0,o.s)(b,e,t,r),(0,o.s)(A,i,n,a),(0,o.b)(s,b,A),(0,o.n)(s,s),s}function S(e,t,r,i,o){let a=(r.screenLength||0)*e.pixelRatio;null!=o&&(a=u(a,i,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.qE)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function E(e,t){const r=t?E(t):{};for(const t in e){let i=e[t];i?.forEach&&(i=w(i)),null==i&&t in r||(r[t]=i)}return r}function M(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),r=!0):(0,i.yo)(e[n],o)&&(r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}function w(e){const t=[];return e.forEach((e=>t.push(e))),t}const C={multiply:1,ignore:2,replace:3,tint:4},O=1e3},78445:(e,t,r)=>{var i;r.d(t,{M:()=>i}),function(e){e[e.ANIMATING=0]="ANIMATING",e[e.INTERACTING=1]="INTERACTING",e[e.IDLE=2]="IDLE"}(i||(i={}))},8028:(e,t,r)=>{function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{Zo:()=>n,jA:()=>o,jS:()=>i});const a=new Float32Array(2)},6719:(e,t,r)=>{r.d(t,{Ey:()=>b,Ms:()=>U,Xt:()=>c,kn:()=>d,ox:()=>o,p3:()=>a,wE:()=>u});var i=r(90599),n=r(90928);function o(e,t,r=n.Tb.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.Tb.ADD,a=n.Tb.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.Y7.BACK,mode:n.Ac.CCW},l={face:n.Y7.FRONT,mode:n.Ac.CCW},c=e=>e===i.s2.Back?s:e===i.s2.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function m(e){return M.intern(e)}function f(e){return C.intern(e)}function p(e){return I.intern(e)}function v(e){return N.intern(e)}function g(e){return L.intern(e)}function _(e){return D.intern(e)}function x(e){return B.intern(e)}function T(e){return V.intern(e)}function b(e){return W.intern(e)}class A{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function y(e){return"["+e.join(",")+"]"}const S=new A(E,(e=>({__tag:"Blending",...e})));function E(e){return e?y([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new A(w,(e=>({__tag:"Culling",...e})));function w(e){return e?y([e.face,e.mode]):null}const C=new A(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?y([e.factor,e.units]):null}const I=new A(R,(e=>({__tag:"DepthTest",...e})));function R(e){return e?y([e.func]):null}const N=new A(P,(e=>({__tag:"StencilTest",...e})));function P(e){return e?y([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new A(H,(e=>({__tag:"DepthWrite",...e})));function H(e){return e?y([e.zNear,e.zFar]):null}const D=new A(F,(e=>({__tag:"ColorWrite",...e})));function F(e){return e?y([e.r,e.g,e.b,e.a]):null}const B=new A(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?y([e.mask]):null}const V=new A(G,(e=>({__tag:"DrawBuffers",...e})));function G(e){return e?y(e.buffers):null}const W=new A((function(e){return e?y([E(e.blending),w(e.culling),O(e.polygonOffset),R(e.depthTest),P(e.stencilTest),H(e.depthWrite),F(e.colorWrite),z(e.stencilWrite),G(e.drawBuffers)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:f(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite),drawBuffers:T(e.drawBuffers)})));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._setDrawBuffers(e.drawBuffers),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(e){this._drawBuffers=this._setSubState(e,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);