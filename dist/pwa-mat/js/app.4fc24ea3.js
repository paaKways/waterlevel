(function(e){function n(n){for(var r,o,i=n[0],c=n[1],s=n[2],f=0,l=[];f<i.length;f++)o=i[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"32a5c660":"a2a14eaf","36b3ff45":"cf3e99c7","4b47640d":"cb798a0e","7945d368":"6f4d0795"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"32a5c660":1,"36b3ff45":1,"7945d368":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"32a5c660":"94a7bc6d","36b3ff45":"4466b6eb","4b47640d":"31d6cfe0","7945d368":"7fd43ba3"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],s=i.getAttribute("data-href");if(s===r||s===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,t(a)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=u);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,t[1](u)}a[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;u.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var r=t("fb1c"),o=t.n(r);o.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("4a91"),t("a114"),t("d14b"),t("1e5d"),t("7e6d");var r=t("2b0e"),o=t("e84f"),a=t("7051"),u=t("2040"),i=t("cf12"),c=t("46a9"),s=t("32a1"),f=t("f30c"),l=t("ce67"),d=t("482e"),p=t("52b5"),h=t("1180"),v=t("1e55"),b=t("506f"),m=t("b8d9"),g=t("7d43"),y=t("1526"),w=t("133b");r["a"].use(o["a"],{config:{},components:{QLayout:a["a"],QLayoutHeader:u["a"],QLayoutDrawer:i["a"],QPageContainer:c["a"],QPage:s["a"],QToolbar:f["a"],QToolbarTitle:l["a"],QBtn:d["a"],QIcon:p["a"],QList:h["a"],QListHeader:v["a"],QItem:b["a"],QItemMain:m["a"],QItemSide:g["a"]},directives:{Ripple:y["a"]},plugins:{Notify:w["a"]}});var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},Q=[];P._withStripped=!0;var j=t("daa7"),S=t.n(j),T={port:35587,username:"uzyenhei",password:"otG6lNz-TTnx"};r["a"].use(S.a,"wss://m10.cloudmqtt.com",T);var x={name:"App"},E=x,O=(t("034f"),t("2877")),k=Object(O["a"])(E,P,Q,!1,null,null,null);k.options.__file="App.vue";var A=k.exports,_=t("2f62"),L={},N=t("a709"),C=t("8d6f"),M=t("5781"),B={namespaced:!0,state:L,getters:N,mutations:C,actions:M};r["a"].use(_["a"]);var q=function(){var e=new _["a"].Store({modules:{example:B}});return e},I=t("8c4f"),V=[{path:"/",component:function(){return t.e("32a5c660").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("7945d368").then(t.bind(null,"8b24"))}}]},{path:"/level",component:function(){return t.e("32a5c660").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("36b3ff45").then(t.bind(null,"8533"))}}]}];V.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var $=V;r["a"].use(I["a"]);var z=function(){var e=new I["a"]({scrollBehavior:function(){return{y:0}},routes:$,mode:"hash",base:""});return e},D=function(){var e="function"===typeof q?q():q,n="function"===typeof z?z({store:e}):z;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(A)}};return{app:t,store:e,router:n}},H=t("9483");Object(H["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var J=t("a925"),G={failed:"Action failed",success:"Action was successful"},R={"en-us":G},F=function(e){var n=e.app,t=e.Vue;t.use(J["a"]),n.i18n=new J["a"]({locale:"en-us",fallbackLocale:"en-us",messages:R})},K=t("bc3a"),U=t.n(K),W=function(e){var n=e.Vue;n.prototype.$axios=U.a},X=t("fe3c"),Y=t.n(X),Z=D(),ee=Z.app,ne=Z.store,te=Z.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){Y.a.attach(document.body)},!1),[F,W].forEach(function(e){e({app:ee,router:te,store:ne,Vue:r["a"],ssrContext:null})}),new r["a"](ee)},5781:function(e,n){},"7e6d":function(e,n,t){},"8d6f":function(e,n){},a709:function(e,n){},fb1c:function(e,n,t){}});