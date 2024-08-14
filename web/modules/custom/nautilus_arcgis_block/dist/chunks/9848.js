"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[9848],{49848:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>z,changeDefaultSpatialReferenceTolerance:()=>Y,clearDefaultSpatialReferenceTolerance:()=>Z,clip:()=>w,contains:()=>m,convexHull:()=>k,crosses:()=>g,cut:()=>d,densify:()=>W,difference:()=>v,disjoint:()=>O,distance:()=>h,equals:()=>S,extendedSpatialReferenceInfo:()=>y,flipHorizontal:()=>q,flipVertical:()=>B,generalize:()=>G,geodesicArea:()=>Q,geodesicBuffer:()=>C,geodesicDensify:()=>F,geodesicLength:()=>U,intersect:()=>T,intersectLinesToPoints:()=>X,intersects:()=>A,isSimple:()=>N,nearestCoordinate:()=>H,nearestVertex:()=>_,nearestVertices:()=>I,offset:()=>E,overlaps:()=>D,planarArea:()=>K,planarLength:()=>M,relate:()=>J,rotate:()=>j,simplify:()=>b,symmetricDifference:()=>L,touches:()=>R,union:()=>V,within:()=>x});t(14309);var r=t(44334),a=t(38431),i=t(67593);function c(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function o(n){return n?Array.isArray(n)?n.map(o):n.toJSON?n.toJSON():n:n}function s(n){return Array.isArray(n)?n.map((n=>(0,i.rS)(n))):(0,i.rS)(n)}let u;async function f(){return u||(u=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),u}async function l(n,e){return(await f()).invoke("executeGEOperation",{operation:n,parameters:o(e)})}async function p(n,e){const t=await f();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:o(e)}))}function y(n){return l("extendedSpatialReferenceInfo",[n])}async function w(n,e){return s(await l("clip",[c(n),n,e]))}async function d(n,e){return s(await l("cut",[c(n),n,e]))}function m(n,e){return l("contains",[c(n),n,e])}function g(n,e){return l("crosses",[c(n),n,e])}function h(n,e,t){return l("distance",[c(n),n,e,t])}function S(n,e){return l("equals",[c(n),n,e])}function A(n,e){return l("intersects",[c(n),n,e])}function R(n,e){return l("touches",[c(n),n,e])}function x(n,e){return l("within",[c(n),n,e])}function O(n,e){return l("disjoint",[c(n),n,e])}function D(n,e){return l("overlaps",[c(n),n,e])}function J(n,e,t){return l("relate",[c(n),n,e,t])}function N(n){return l("isSimple",[c(n),n])}async function b(n){return s(await l("simplify",[c(n),n]))}async function k(n,e=!1){return s(await l("convexHull",[c(n),n,e]))}async function v(n,e){return s(await l("difference",[c(n),n,e]))}async function L(n,e){return s(await l("symmetricDifference",[c(n),n,e]))}async function T(n,e){return s(await l("intersect",[c(n),n,e]))}async function V(n,e=null){const t=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,e);return s(await l("union",[c(t),t]))}async function E(n,e,t,r,a,i){return s(await l("offset",[c(n),n,e,t,r,a,i]))}async function z(n,e,t,r=!1){const a=[c(n),n,e,t,r];return s(await l("buffer",a))}async function C(n,e,t,r,a,i){const o=[c(n),n,e,t,r,a,i];return s(await l("geodesicBuffer",o))}async function H(n,e,t=!0){const r=await l("nearestCoordinate",[c(n),n,e,t]);return{...r,coordinate:a.A.fromJSON(r.coordinate)}}async function _(n,e){const t=await l("nearestVertex",[c(n),n,e]);return{...t,coordinate:a.A.fromJSON(t.coordinate)}}async function I(n,e,t,r){return(await l("nearestVertices",[c(n),n,e,t,r])).map((n=>({...n,coordinate:a.A.fromJSON(n.coordinate)})))}function P(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function j(n,e,t){if(null==n)throw new $;const r=n.spatialReference;if(null==(t=t??P(n)))throw new $;const a=n.constructor.fromJSON(await l("rotate",[r,n,e,t]));return a.spatialReference=r,a}async function q(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??P(n)))throw new $;const r=n.constructor.fromJSON(await l("flipHorizontal",[t,n,e]));return r.spatialReference=t,r}async function B(n,e){if(null==n)throw new $;const t=n.spatialReference;if(null==(e=e??P(n)))throw new $;const r=n.constructor.fromJSON(await l("flipVertical",[t,n,e]));return r.spatialReference=t,r}async function G(n,e,t,r){return s(await l("generalize",[c(n),n,e,t,r]))}async function W(n,e,t){return s(await l("densify",[c(n),n,e,t]))}async function F(n,e,t,r=0){return s(await l("geodesicDensify",[c(n),n,e,t,r]))}function K(n,e){return l("planarArea",[c(n),n,e])}function M(n,e){return l("planarLength",[c(n),n,e])}function Q(n,e,t){return l("geodesicArea",[c(n),n,e,t])}function U(n,e,t){return l("geodesicLength",[c(n),n,e,t])}async function X(n,e){return s(await l("intersectLinesToPoints",[c(n),n,e]))}async function Y(n,e){await p("changeDefaultSpatialReferenceTolerance",[n,e])}async function Z(n){await p("clearDefaultSpatialReferenceTolerance",[n])}class $ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);