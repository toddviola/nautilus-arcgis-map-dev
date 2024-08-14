"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[730],{84017:(t,e,n)=>{
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
function i(t){return"l"===t?"m":"s"}async function s(t){await(function(t){return"function"==typeof t.componentOnReady}(t)?t.componentOnReady():new Promise((t=>requestAnimationFrame((()=>t())))))}n.d(e,{c:()=>s,g:()=>i})},62173:(t,e,n)=>{n.d(e,{I:()=>h,d:()=>m});var i=n(30602),s=n(37514),r=n(80901);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const a="flip-rtl",o={},c={},l={s:16,m:24,l:32};async function u({icon:t,scale:e}){const n=l[e],s=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const e=/[a-z]/i;t=n.map(((t,n)=>t.replace(e,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(t),r="F"===s.charAt(s.length-1),a=`${r?s.substring(0,s.length-1):s}${n}${r?"F":""}`;if(o[a])return o[a];c[a]||(c[a]=fetch((0,i.OX)(`./assets/icon/${a}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${a}" is not a valid calcite-ui-icon name`),""))));const u=await c[a];return o[a]=u,u}const h=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:n,scale:r,textLabel:o}=this,c=(0,s.a)(t),u=l[r],h=!!o,m=[].concat(n||"");return(0,i.h)(i.xr,{"aria-hidden":(0,s.t)(!h),"aria-label":h?o:null,role:h?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[a]:"rtl"===c&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${u} ${u}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((t=>"string"==typeof t?(0,i.h)("path",{d:t}):(0,i.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!i.L2.isBrowser||!t||!n)return;const s=await u({icon:t,scale:e});t===this.icon&&(this.pathData=s)}waitUntilVisible(t){this.intersectionObserver=(0,r.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function m(){if("undefined"==typeof customElements)return;["calcite-icon"].forEach((t=>{if("calcite-icon"===t)customElements.get(t)||customElements.define(t,h)}))}m()},49717:(t,e,n)=>{
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
function i(t){return"Enter"===t||" "===t}n.d(e,{i:()=>i,n:()=>s});const s=["0","1","2","3","4","5","6","7","8","9"]},75564:(t,e,n)=>{n.d(e,{a:()=>o,c:()=>c,s:()=>a});var i=n(30602);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const s=new WeakMap,r=new WeakMap;function a(t){r.set(t,new Promise((e=>s.set(t,e))))}function o(t){s.get(t)()}async function c(t){if(await function(t){return r.get(t)}(t),i.L2.isBrowser)return(0,i.$x)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},99934:(t,e,n)=>{n.d(e,{B:()=>c,a:()=>v,c:()=>D,d:()=>F,g:()=>S,i:()=>l,n:()=>z,p:()=>u,s:()=>f});var i=n(37514),s=n(49717),r=n(80901);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const a=new RegExp("\\.(0+)?$"),o=new RegExp("0+$");class c{constructor(t){if(t instanceof c)return t;const[e,n]=function(t){const e=t.split(/[eE]/);if(1===e.length)return t;const n=+t;if(Number.isSafeInteger(n))return`${n}`;const i="-"===t.charAt(0),s=+e[1],r=e[0].split("."),o=(i?r[0].substring(1):r[0])||"",c=r[1]||"",l=(t,e)=>{const n=Math.abs(e)-t.length,i=n>0?`${"0".repeat(n)}${t}`:t;return`${i.slice(0,e)}.${i.slice(e)}`},u=(t,e)=>{const n=e>t.length?`${t}${"0".repeat(e-t.length)}`:t;return`${n.slice(0,e)}.${n.slice(e)}`},m=s>0?`${o}${u(c,s)}`:`${l(o,s)}${c}`;return`${i?"-":""}${"."===m.charAt(0)?"0":""}${m.replace(a,"").replace(h,"")}`}(t).split(".").concat("");this.value=BigInt(e+n.padEnd(c.DECIMALS,"0").slice(0,c.DECIMALS))+BigInt(c.ROUNDED&&n[c.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(c.DECIMALS+1,"0");return{integers:t.slice(0,-c.DECIMALS),decimals:t.slice(-c.DECIMALS).replace(o,"")}}toString(){const{integers:t,decimals:e}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${e.length?"."+e:""}`}formatToParts(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals(),i=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),n.length&&(i.push({type:"decimal",value:t.decimal}),n.split("").forEach((t=>i.push({type:"fraction",value:t})))),i}format(t){const{integers:e,decimals:n}=this.getIntegersAndDecimals();return`${`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(e))}`}${n.length?`${t.decimal}${n.split("").map((e=>t.numberFormatter.format(Number(e)))).join("")}`:""}`}add(t){return c.fromBigInt(this.value+new c(t).value)}subtract(t){return c.fromBigInt(this.value-new c(t).value)}multiply(t){return c._divRound(this.value*new c(t).value,c.SHIFT)}divide(t){return c._divRound(this.value*c.SHIFT,new c(t).value)}}function l(t){return!(!t||isNaN(Number(t)))}function u(t){return t&&(e=t,s.n.some((t=>e.includes(t))))?b(t,(t=>{let e=!1;const n=t.split("").filter(((t,n)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/\-/g)||0!==n)||s.n.includes(t))).join("");return l(n)?new c(n).toString():""})):"";var e}c.DECIMALS=100,c.ROUNDED=!0,c.SHIFT=BigInt("1"+"0".repeat(c.DECIMALS)),c._divRound=(t,e)=>c.fromBigInt(t/e+(c.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0))),c.fromBigInt=t=>Object.assign(Object.create(c.prototype),{value:t,isNegative:t<BigInt(0)});const h=/^([-0])0+(?=\d)/,m=/(?!^\.)\.$/,g=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,d=/0*$/,f=t=>b(t,(t=>{const e=t.replace(g,"").replace(m,"").replace(h,"$1");return l(e)?p.test(e)?e:function(t){const e=t.split(".")[1],n=new c(t).toString(),[i,s]=n.split(".");return e&&s!==e?`${i}.${e}`:n}(e):t}));function b(t,e){if(!t)return t;const n=t.toLowerCase().indexOf("e")+1;return n?t.replace(/[eE]*$/g,"").substring(0,n).concat(t.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((t,n)=>e(1===n?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function v(t,e,n){const i=e.split(".")[1];if(i){const s=i.match(d)[0];if(s&&n.delocalize(t).length!==e.length&&-1===i.indexOf("e")){const e=n.decimal;return(t=t.includes(e)?t:`${t}${e}`).padEnd(t.length+s.length,n.localize("0"))}}return t}const w="en",$=["ar","bg","bs","ca","cs","da","de","el",w,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",w,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],y=["arab","arabext","latn"],I=t=>y.includes(t),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,O="arab"!==E&&I(E)?E:"latn";function S(t,e="cldr"){const n="cldr"===e?_:$;return t?n.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===e&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,n)=>`${e}-${n.toUpperCase()}`)),n.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":n.includes(t)?t:(console.warn(`Translations for the "${t}" locale are not available and will fall back to the default, English (en).`),w)):w}const x=new Set;function D(t){!function(t){t.effectiveLocale=function(t){return t.el.lang||(0,i.c)(t.el,"[lang]")?.lang||document.documentElement.lang||w}(t)}(t),0===x.size&&k?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),x.add(t)}function F(t){x.delete(t),0===x.size&&k.disconnect()}const k=(0,r.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;x.forEach((t=>{if(!(0,i.b)(e,t.el))return;const n=(0,i.c)(t.el,"[lang]");if(!n)return void(t.effectiveLocale=w);const s=n.lang;t.effectiveLocale=n.hasAttribute("lang")&&""===s?w:s}))}))}));const z=new class{constructor(){this.delocalize=t=>this._numberFormatOptions?b(t,(t=>t.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?b(t,(t=>l(t.trim())?new c(t.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){var e;if(t.locale=S(t?.locale),t.numberingSystem=(e=t?.numberingSystem,I(e)?e:O),!this._numberFormatOptions&&t.locale===w&&t.numberingSystem===O&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((t,e)=>[t,e]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=i.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?" ":this._actualGroup,this._decimal=i.find((t=>"decimal"===t.type)).value,this._minusSign=i.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>n.get(t)}}},80901:(t,e,n)=>{n.d(e,{c:()=>s});var i=n(30602);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */function s(t,e,n){if(!i.L2.isBrowser)return;const s=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new s(e,n)}},77673:(t,e,n)=>{n.d(e,{c:()=>h,d:()=>m,s:()=>c,u:()=>u});var i=n(30602),s=n(99934);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const r={};function a(){throw new Error("could not fetch component message bundle")}function o(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function c(t){t.defaultMessages=await l(t,t.effectiveLocale),o(t)}async function l(t,e){if(!i.L2.isBrowser)return{};const{el:n}=t,o=n.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const n=`${e}_${t}`;return r[n]||(r[n]=fetch((0,i.OX)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||a(),t.json()))).catch((()=>a()))),r[n]}((0,s.g)(e,"t9n"),o)}async function u(t,e){t.defaultMessages=await l(t,e),o(t)}function h(t){t.onMessagesChange=g}function m(t){t.onMessagesChange=void 0}function g(){o(this)}}}]);