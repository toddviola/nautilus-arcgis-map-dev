"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[8565],{28565:(e,t,i)=>{i.r(t),i.d(t,{CalciteModal:()=>K,defineCustomElement:()=>N});var a=i(30602),o=i(76510),n=i(37514),s=i(53994),l=i(75564),r=i(80901),c=i(17279),d=i(99934),h=i(77673),m=i(84017),p=i(62173),v=i(48967),g=i(98420);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const u="modal",f="title",b="header",k="footer",x="scrim",z="back",y="close",w="secondary",C="primary",_="container",E="container--open",O="content",M="content--no-footer",S="content-bottom",L="content-top",D="slotted-in-shell",B="modal--opening-idle",T="modal--opening-active",$="modal--closing-idle",F="modal--closing-active",H="x",W="content",I="content-bottom",V="content-top",P="header",j="back",R="secondary",q="primary";let A=0,U="";const G=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteModalBeforeClose=(0,a.lh)(this,"calciteModalBeforeClose",6),this.calciteModalClose=(0,a.lh)(this,"calciteModalClose",6),this.calciteModalBeforeOpen=(0,a.lh)(this,"calciteModalBeforeOpen",6),this.calciteModalOpen=(0,a.lh)(this,"calciteModalOpen",6),this.ignoreOpenChange=!1,this.mutationObserver=(0,r.c)("mutation",(()=>this.handleMutationObserver())),this.cssVarObserver=(0,r.c)("mutation",(()=>{this.updateSizeCssVars()})),this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteModalOpen",this.openEnd)},this.handleCloseClick=()=>{this.open=!1},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeModal=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}A--,this.opened=!1,this.removeOverflowHiddenClass()},this.handleMutationObserver=()=>{this.updateFooterVisibility(),this.updateFocusTrapElements()},this.updateFooterVisibility=()=>{this.hasFooter=!!(0,n.g)(this.el,[j,q,R])},this.updateSizeCssVars=()=>{this.cssWidth=getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"),this.cssHeight=getComputedStyle(this.el).getPropertyValue("--calcite-modal-height")},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=(0,n.d)(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=(0,n.d)(e)},this.open=!1,this.opened=!1,this.beforeClose=void 0,this.closeButtonDisabled=!1,this.focusTrapDisabled=!1,this.outsideCloseDisabled=!1,this.docked=void 0,this.escapeDisabled=!1,this.scale="m",this.widthScale="m",this.fullscreen=void 0,this.kind=void 0,this.messages=void 0,this.messageOverrides=void 0,this.slottedInShell=void 0,this.cssWidth=void 0,this.cssHeight=void 0,this.hasFooter=!0,this.hasContentTop=!1,this.hasContentBottom=!1,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}onMessagesChange(){}async componentWillLoad(){await(0,h.s)(this),(0,l.s)(this),this.open&&this.openModal()}componentDidLoad(){(0,l.a)(this)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.cssVarObserver?.observe(this.el,{attributeFilter:["style"]}),this.updateSizeCssVars(),this.updateFooterVisibility(),(0,o.c)(this),(0,d.c)(this),(0,h.c)(this),(0,s.c)(this)}disconnectedCallback(){this.removeOverflowHiddenClass(),this.mutationObserver?.disconnect(),this.cssVarObserver?.disconnect(),(0,o.d)(this),(0,s.d)(this),(0,d.d)(this),(0,h.d)(this),this.slottedInShell=!1}render(){return(0,a.h)(a.xr,{"aria-describedby":this.contentId,"aria-labelledby":this.titleId,"aria-modal":"true",role:"dialog"},(0,a.h)("div",{class:{[_]:!0,[E]:this.opened,[D]:this.slottedInShell}},(0,a.h)("calcite-scrim",{class:x,onClick:this.handleOutsideClose}),this.renderStyle(),(0,a.h)("div",{class:{[u]:!0},ref:this.setTransitionEl},(0,a.h)("div",{class:b},this.renderCloseButton(),(0,a.h)("header",{class:f},(0,a.h)("slot",{name:b}))),this.renderContentTop(),(0,a.h)("div",{class:{[O]:!0,[M]:!this.hasFooter},ref:e=>this.modalContent=e},(0,a.h)("slot",{name:W})),this.renderContentBottom(),this.renderFooter())))}renderFooter(){return this.hasFooter?(0,a.h)("div",{class:k,key:"footer"},(0,a.h)("span",{class:z},(0,a.h)("slot",{name:j})),(0,a.h)("span",{class:w},(0,a.h)("slot",{name:R})),(0,a.h)("span",{class:C},(0,a.h)("slot",{name:q}))):null}renderContentTop(){return(0,a.h)("div",{class:L,hidden:!this.hasContentTop},(0,a.h)("slot",{name:V,onSlotchange:this.contentTopSlotChangeHandler}))}renderContentBottom(){return(0,a.h)("div",{class:S,hidden:!this.hasContentBottom},(0,a.h)("slot",{name:I,onSlotchange:this.contentBottomSlotChangeHandler}))}renderCloseButton(){return this.closeButtonDisabled?null:(0,a.h)("button",{"aria-label":this.messages.close,class:y,key:"button",onClick:this.handleCloseClick,title:this.messages.close,ref:e=>this.closeButtonEl=e},(0,a.h)("calcite-icon",{icon:H,scale:(0,m.g)(this.scale)}))}renderStyle(){if(!this.fullscreen&&(this.cssWidth||this.cssHeight))return(0,a.h)("style",null,`.${_} {\n              ${this.docked&&this.cssWidth?"align-items: center !important;":""}\n            }\n            .${u} {\n              block-size: ${this.cssHeight?this.cssHeight:"auto"} !important;\n              ${this.cssWidth?`inline-size: ${this.cssWidth} !important;`:""}\n              ${this.cssWidth?`max-inline-size: ${this.cssWidth} !important;`:""}\n              ${this.docked?"border-radius: var(--calcite-border-radius) !important;":""}\n            }\n            @media screen and (max-width: ${this.cssWidth}) {\n              .${_} {\n                ${this.docked?"align-items: flex-end !important;":""}\n              }\n              .${u} {\n                max-block-size: 100% !important;\n                inline-size: 100% !important;\n                max-inline-size: 100% !important;\n                min-inline-size: 100% !important;\n                margin: 0 !important;\n                ${this.docked?"":"block-size: 100% !important;"}\n                ${this.docked?"":"border-radius: 0 !important;"}\n                ${this.docked?"border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;":""}\n              }\n            }\n          `)}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,l.c)(this),(0,n.f)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}async scrollContent(e=0,t=0){this.modalContent&&(this.modalContent.scrollTo?this.modalContent.scrollTo({top:e,left:t,behavior:"smooth"}):(this.modalContent.scrollTop=e,this.modalContent.scrollLeft=t))}onBeforeOpen(){this.transitionEl.classList.add(T),this.calciteModalBeforeOpen.emit()}onOpen(){this.transitionEl.classList.remove(B,T),this.calciteModalOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.transitionEl.classList.add(F),this.calciteModalBeforeClose.emit()}onClose(){this.transitionEl.classList.remove($,F),this.calciteModalClose.emit(),(0,s.d)(this)}toggleModal(e){this.ignoreOpenChange||(e?this.openModal():this.closeModal())}handleOpenedChange(e){const t=e?B:$;this.transitionEl.classList.add(t),(0,c.o)(this)}async openModal(){await(0,m.c)(this.el),this.el.addEventListener("calciteModalOpen",this.openEnd),this.opened=!0;const e=(0,n.g)(this.el,P),t=(0,n.g)(this.el,W);this.titleId=(0,n.D)(e),this.contentId=(0,n.D)(t),this.slottedInShell||(0===A&&(U=document.documentElement.style.overflow),A++,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",U)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}}static get style(){return":host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-modal",{open:[1540],opened:[1540],beforeClose:[16],closeButtonDisabled:[516,"close-button-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],outsideCloseDisabled:[516,"outside-close-disabled"],docked:[516],escapeDisabled:[516,"escape-disabled"],scale:[513],widthScale:[513,"width-scale"],fullscreen:[516],kind:[513],messages:[1040],messageOverrides:[1040],slottedInShell:[1028,"slotted-in-shell"],cssWidth:[32],cssHeight:[32],hasFooter:[32],hasContentTop:[32],hasContentBottom:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64],updateFocusTrapElements:[64],scrollContent:[64]},[[8,"keydown","handleEscape"]],{focusTrapDisabled:["handleFocusTrapDisabled"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"],open:["toggleModal"],opened:["handleOpenedChange"]}]);function J(){if("undefined"==typeof customElements)return;["calcite-modal","calcite-icon","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-modal":customElements.get(e)||customElements.define(e,G);break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,v.d)();break;case"calcite-scrim":customElements.get(e)||(0,g.d)()}}))}J();const K=G,N=J},76510:(e,t,i)=>{i.d(t,{c:()=>r,d:()=>c});var a=i(30602),o=i(80901);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const n=new Set;let s;const l={childList:!0};function r(e){s||(s=(0,o.c)("mutation",d)),s.observe(e.el,l)}function c(e){n.delete(e.el),d(s.takeRecords()),s.disconnect();for(const[e]of n.entries())s.observe(e,l)}function d(e){e.forEach((({target:e})=>{(0,a.$x)(e)}))}},48967:(e,t,i)=>{i.d(t,{L:()=>n,d:()=>s});var a=i(30602),o=i(83921);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const n=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.inline=!1,this.label=void 0,this.scale="m",this.type=void 0,this.value=0,this.text=""}render(){const{el:e,inline:t,label:i,scale:n,text:s,type:l,value:r}=this,c=e.id||(0,o.g)(),d=t?this.getInlineSize(n):this.getSize(n),h=.45*d,m=`0 0 ${d} ${d}`,p="determinate"===l,v=2*h*Math.PI,g=r/100*v,u=v-g,f=Math.floor(r),b={"aria-valuenow":f,"aria-valuemin":0,"aria-valuemax":100,complete:100===f},k={r:h,cx:d/2,cy:d/2},x={"stroke-dasharray":`${g} ${u}`};return(0,a.h)(a.xr,{"aria-label":i,id:c,role:"progressbar",...p?b:{}},(0,a.h)("div",{class:"loader__svgs"},(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--1",viewBox:m},(0,a.h)("circle",{...k})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--2",viewBox:m},(0,a.h)("circle",{...k})),(0,a.h)("svg",{"aria-hidden":"true",class:"loader__svg loader__svg--3",viewBox:m,...p?{style:x}:{}},(0,a.h)("circle",{...k}))),s&&(0,a.h)("div",{class:"loader__text"},s),p&&(0,a.h)("div",{class:"loader__percentage"},r))}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}get el(){return this}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--2);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{position:absolute;display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);line-height:0.25;transform:scale(1, 1)}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1]}]);function s(){if("undefined"==typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,n)}))}s()},98420:(e,t,i)=>{i.d(t,{d:()=>v});var a=i(30602),o=i(99934),n=i(77673),s=i(80901),l=i(37514),r=i(48967);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
const c="scrim",d="content",h=72,m=480,p=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,s.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,l.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,n.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,n.s)(this)}disconnectedCallback(){(0,o.d)(this),(0,n.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{class:c},t?(0,a.h)("calcite-loader",{label:i.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,a.h)("div",{class:d,hidden:!e},(0,a.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=m?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function v(){if("undefined"==typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,p);break;case"calcite-loader":customElements.get(e)||(0,r.d)()}}))}v()}}]);