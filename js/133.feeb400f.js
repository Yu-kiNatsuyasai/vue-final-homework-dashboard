(self["webpackChunkvue_final_homework"]=self["webpackChunkvue_final_homework"]||[]).push([[133],{8803:function(e,t,s){s(1703),
/*!
  * Bootstrap toast.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,a){e.exports=a(s(1437),s(4130),s(1884),s(9069))}(0,(function(e,t,s,a){"use strict";const n=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},i=n(t),o=n(s),r="toast",l="bs.toast",c=`.${l}`,u=`mouseover${c}`,h=`mouseout${c}`,d=`focusin${c}`,m=`focusout${c}`,g=`hide${c}`,_=`hidden${c}`,f=`show${c}`,v=`shown${c}`,p="fade",b="hide",w="show",y="showing",k={animation:"boolean",autohide:"boolean",delay:"number"},$={animation:!0,autohide:!0,delay:5e3};class T extends o.default{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return $}static get DefaultType(){return k}static get NAME(){return r}show(){const t=i.default.trigger(this._element,f);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(p);const s=()=>{this._element.classList.remove(y),i.default.trigger(this._element,v),this._maybeScheduleHide()};this._element.classList.remove(b),e.reflow(this._element),this._element.classList.add(w,y),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=i.default.trigger(this._element,g);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(b),this._element.classList.remove(y,w),i.default.trigger(this._element,_)};this._element.classList.add(y),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(w),super.dispose()}isShown(){return this._element.classList.contains(w)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){i.default.on(this._element,u,(e=>this._onInteraction(e,!0))),i.default.on(this._element,h,(e=>this._onInteraction(e,!1))),i.default.on(this._element,d,(e=>this._onInteraction(e,!0))),i.default.on(this._element,m,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=T.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return a.enableDismissTrigger(T),e.defineJQueryPlugin(T),T}))},2133:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Q}});var a=s(3396);function n(e,t,s,n,i,o){const r=(0,a.up)("Navbar"),l=(0,a.up)("ToastMessages"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r),(0,a.Wm)(l),(0,a.Wm)(c)],64)}s(7658);var i=s(9242);const o={class:"navbar navbar-expand-lg navbar-light bg-light"},r={class:"container-fluid"},l=(0,a._)("a",{class:"navbar-brand",href:"#"},"後台管理系統",-1),c=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},d={class:"nav-item"},m={class:"nav-item"},g={class:"nav-item"},_=(0,a._)("li",{class:"nav-item"},[(0,a._)("a",{class:"nav-link disabled",href:"#"},"優惠券")],-1),f={class:"nav-item"};function v(e,t,s,n,v,p){const b=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",o,[(0,a._)("div",r,[l,c,(0,a._)("div",u,[(0,a._)("ul",h,[(0,a._)("li",d,[(0,a.Wm)(b,{class:"nav-link",to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("回首頁")])),_:1})]),(0,a._)("li",m,[(0,a.Wm)(b,{class:"nav-link",to:"/dashboard/products"},{default:(0,a.w5)((()=>[(0,a.Uk)("商品列表")])),_:1})]),(0,a._)("li",g,[(0,a.Wm)(b,{class:"nav-link",to:"/dashboard/orders"},{default:(0,a.w5)((()=>[(0,a.Uk)("訂單列表")])),_:1})]),_,(0,a._)("li",f,[(0,a._)("a",{class:"nav-link",href:"#",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>p.logout&&p.logout(...e)),["prevent"]))},"登出")])])])])])}var p={inject:["ajaxStateMessage"],methods:{logout(){const e="https://vue3-course-api.hexschool.io/logout";this.$http.post(e).then((e=>{e.data.success&&this.$router.push("/login"),this.ajaxStateMessage(e,"登出")})).catch((e=>{console.log(e),alert("登出時發生錯誤")}))}}},b=s(89);const w=(0,b.Z)(p,[["render",v]]);var y=w;function k(e){return{all:e=e||new Map,on:function(t,s){var a=e.get(t);a?a.push(s):e.set(t,[s])},off:function(t,s){var a=e.get(t);a&&(s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var a=e.get(t);a&&a.slice().map((function(e){e(s)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,s)}))}}}const $=k();var T=$;const I={class:"toast-container position-absolute pe-3 top-0 end-0"};function x(e,t,s,n,i,o){const r=(0,a.up)("Toast");return(0,a.wg)(),(0,a.iD)("div",I,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.messages,((e,t)=>((0,a.wg)(),(0,a.j4)(r,{key:t,msg:e},null,8,["msg"])))),128))])}var L=s(7139);const M={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},j={class:"toast-header"},C={class:"me-auto"},D=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),S={key:0,class:"toast-body"};function N(e,t,s,n,i,o){return(0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",j,[(0,a._)("span",{class:(0,L.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",C,(0,L.zw)(s.msg.title),1),D]),s.msg.content?((0,a.wg)(),(0,a.iD)("div",S,(0,L.zw)(s.msg.content),1)):(0,a.kq)("",!0)],512)}var W=s(8803),H=s.n(W),A={name:"ToastComponent",props:["msg"],mounted(){const e=this.$refs.toast,t=new(H())(e,{delay:6e3});t.show()}};const K=(0,b.Z)(A,[["render",N]]);var Z=K,q={components:{Toast:Z},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:s,content:a}=e;this.messages.push({style:t,title:s,content:a})}))}};const z=(0,b.Z)(q,[["render",x]]);var P=z;function U(e,t="更新"){e.data.success?T.emit("push-message",{style:"success",title:t+"成功"}):T.emit("push-message",{style:"danger",title:t+"失敗",content:Array.isArray(e.data.message)?e.data.message.join("、"):e.data.message})}var E={components:{Navbar:y,ToastMessages:P},provide(){return{emitter:T,ajaxStateMessage:U}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((e=>{e.data.success?T.emit("push-message",{style:"success",title:"登入成功"}):this.$router.push("/login")})).catch((e=>{console.log(e),alert("驗證登入狀態時發生錯誤")}))}};const O=(0,b.Z)(E,[["render",n]]);var Q=O}}]);
//# sourceMappingURL=133.feeb400f.js.map