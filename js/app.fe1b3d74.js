(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"781b8cca"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("d3b7"),n("bc3a")),a=n.n(o),i={},c=a.a.create(i);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},r["a"].use(Plugin);Plugin;var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{staticClass:"main-header",attrs:{app:"",color:"dark",type:"header"}},[n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-toolbar-title",[n("router-link",{staticClass:"main-header__link",staticStyle:{color:"currentColor"},attrs:{to:"/home"}},[e._v("Where in the world?")])],1),n("v-spacer"),n("v-btn",{attrs:{target:"_blank",text:""},on:{click:function(t){e.$vuetify.theme.dark?e.$vuetify.theme.dark=!1:e.$vuetify.theme.dark=!0}}},[n("v-icon",{staticClass:"main-header__icon"},[e._v("mdi-weather-night")]),n("span",[e._v("Dark Mode")])],1)],1)])],1),n("v-content",[n("router-view",{attrs:{loading:e.loading}})],1)],1)},u=[],l=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),d=n("2f62");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"App",data:function(){return{loading:!0}},created:function(){var e=this;setTimeout((function(){e.$data.isOnline?(e.getData(),e.loading=!1):e.loading=!1}),2e3)},methods:f({},Object(d["b"])(["getData"])),computed:{}},g=v,b=n("2877"),m=n("6544"),h=n.n(m),y=n("7496"),w=n("40dc"),_=n("8336"),O=n("a523"),j=n("a75b"),k=n("132d"),C=n("2fa4"),P=n("2a7f"),x=Object(b["a"])(g,s,u,!1,null,null,null),S=x.exports;h()(x,{VApp:y["a"],VAppBar:w["a"],VBtn:_["a"],VContainer:O["a"],VContent:j["a"],VIcon:k["a"],VSpacer:C["a"],VToolbarTitle:P["a"]});var V=n("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var D=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("countries")],1)},A=[],T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"countries-section"},[n("v-row",{attrs:{"no-gutters":""}},[n("div",{staticClass:"countries-section__input-group"},[n("v-icon",{staticClass:"countries-section__icon"},[e._v("mdi-magnify")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keywords,expression:"keywords"}],staticClass:"countries-section__input",attrs:{height:"56",placeholder:"Search for a country…"},domProps:{value:e.keywords},on:{input:function(t){t.target.composing||(e.keywords=t.target.value)}}})],1),n("div",{staticClass:"countries-section__dropdown"},[n("v-select",{attrs:{items:e.items,color:"black",label:"Filter by Region","hide-selected":"true",dense:"",solo:""},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}})],1)]),n("v-layout",{staticClass:"countries-section__card-container",attrs:{wrap:""}},[e._l(20,(function(t,r){return n("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],key:r,staticClass:"countries-section__card",attrs:{type:"card","max-width":"264",width:"100%","min-height":"336"}})})),e._l(e.filteredCountries,(function(t,r){return n("v-card",{key:r,staticClass:"countries-section__card",attrs:{"max-width":"264","min-height":"336",to:"/about/"+t.name}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"160",src:t.flag}}),n("v-card-text",{staticClass:"countries-section__card--text"},[n("ul",{staticClass:"countries-section__card--list"},[n("li",{staticClass:"countries-section__card--list-header"},[e._v(" "+e._s(t.name)+" ")]),n("li",{staticClass:"countries-section__card--list-item"},[n("strong",[e._v("Population:")]),e._v(" "+e._s(t.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))+" ")]),n("li",{staticClass:"countries-section__card--list-item"},[n("strong",[e._v("Region:")]),e._v(" "+e._s(t.region)+" ")]),n("li",{staticClass:"countries-section__card--list-item"},[n("strong",[e._v("Capital:")]),e._v(" "+e._s(t.capital)+" ")])])])],1)}))],2)],1)},$=[];n("b0c0"),n("ac1f"),n("466d");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={data:function(){return{items:["Africa","America","Asia","Europe","Oceania"],keywords:"",region:"",results:[],loading:!0}},methods:{},computed:N({},Object(d["c"])(["countries"]),{filteredCountries:function(){var e=this;return this.countries.filter((function(t){return t.name.toLowerCase().match(e.keywords.toLowerCase())&&t.region.match(e.region)}))}}),created:function(){var e=this;setTimeout((function(){e.loading=!1}),2e3)}},R=M,B=n("b0af"),q=n("99d9"),F=n("adda"),I=n("a722"),J=n("0fd9"),H=n("b974"),W=n("3129"),z=Object(b["a"])(R,T,$,!1,null,null,null),G=z.exports;h()(z,{VCard:B["a"],VCardText:q["a"],VIcon:k["a"],VImg:F["a"],VLayout:I["a"],VRow:J["a"],VSelect:H["a"],VSkeletonLoader:W["a"]});var K={name:"Home",components:{Countries:G}},Q=K,U=Object(b["a"])(Q,E,A,!1,null,null,null),X=U.exports;h()(U,{VContainer:O["a"]}),r["a"].use(D["a"]);var Y=[{path:"*",name:"default",component:X},{path:"/",name:"home",component:X},{path:"/about/:countryName",name:"about",props:!0,component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Z=new D["a"]({routes:Y}),ee=Z,te=(n("96cf"),n("bfa9"));r["a"].use(d["a"]);var ne=new te["a"]({key:"store"}),re=new d["a"].Store({strict:!0,plugins:[ne.plugin],state:{countries:[]},mutations:{gotData:function(e,t){e.countries=t}},actions:{getData:function(e){var t,n,r;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t=e.commit,o.prev=1,o.next=4,regeneratorRuntime.awrap(a.a.get("https://restcountries.eu/rest/v2/all"));case 4:n=o.sent,r=n.data,t("gotData",r),o.next=12;break;case 9:o.prev=9,o.t0=o["catch"](1),t("gotData",o.t0);case 12:case"end":return o.stop()}}),null,null,[[1,9]])}},getters:{countries:function(e){return e.countries}}}),oe=n("f309");r["a"].use(oe["a"]);var ae=new oe["a"]({}),ie=(n("dc44"),n("bf4e")),ce=n.n(ie);r["a"].use(ce.a),r["a"].config.productionTip=!1,new r["a"]({router:ee,store:re,vuetify:ae,render:function(e){return e(S)}}).$mount("#app")},dc44:function(e,t,n){}});
//# sourceMappingURL=app.fe1b3d74.js.map