(function(e){function t(t){for(var o,r,s=t[0],a=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c={app:0},i=[];function s(e){return a.p+"js/"+({ViewHome:"ViewHome",ViewProjects:"ViewProjects"}[e]||e)+"."+{ViewHome:"27042a75",ViewProjects:"fa528419"}[e]+".js"}function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={ViewProjects:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({ViewHome:"ViewHome",ViewProjects:"ViewProjects"}[e]||e)+"."+{ViewHome:"31d6cfe0",ViewProjects:"187aef2c"}[e]+".css",c=a.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0613":function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var o=n("5502"),r=Symbol();t["a"]=Object(o["a"])({state:{projects:[],menuIsOpen:!1,idOfOpenedProject:null},mutations:{updateProjects:function(e,t){e.projects=t}},actions:{},modules:{}})},3373:function(e,t,n){"use strict";n("c011")},"34b7":function(e,t,n){},"83ae":function(e,t,n){},c011:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var o=n("9ab4"),r=n("7a23");const c=Object(r["h"])("div",{class:"overlay-left"},null,-1);function i(e,t,n,o,i,s){const a=Object(r["y"])("navigation"),u=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(a),Object(r["h"])(u,null,{default:Object(r["E"])(({Component:e,route:t})=>[Object(r["h"])(r["b"],{name:"fade",mode:"out-in"},{default:Object(r["E"])(()=>[(Object(r["q"])(),Object(r["e"])(Object(r["z"])(e)))]),_:2},1024),c]),_:1})],64)}const s=Object(r["F"])("data-v-2bf5b9d6");Object(r["t"])("data-v-2bf5b9d6");const a={class:"v-navigation"},u={key:0,class:"v-navigation__menu"},l=Object(r["h"])("div",{class:"v-navigation__logo"},"trojans",-1),f={key:1,class:"v-navigation__content"},d={class:"v-navigation__links"},p=Object(r["g"])("Home"),b=Object(r["g"])("About"),h=Object(r["g"])("Projects");Object(r["r"])();const v=s((e,t,n,o,c,i)=>{const v=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",a,[e.isClose?(Object(r["q"])(),Object(r["e"])("div",u,[l])):Object(r["f"])("",!0),e.isOpen?(Object(r["q"])(),Object(r["e"])("div",f,[Object(r["h"])("div",d,[Object(r["h"])(v,{class:"t-nav-link",onClick:e.closeMenu,to:"/"},{default:s(()=>[p]),_:1},8,["onClick"]),Object(r["h"])(v,{class:"t-nav-link",onClick:e.closeMenu,to:"/About"},{default:s(()=>[b]),_:1},8,["onClick"]),Object(r["h"])(v,{class:"t-nav-link",onClick:e.closeMenu,to:"/projects"},{default:s(()=>[h]),_:1},8,["onClick"])])])):Object(r["f"])("",!0),Object(r["h"])("div",{onClick:t[1]||(t[1]=(...t)=>e.toggleMenu&&e.toggleMenu(...t)),class:[{"is-open":e.isOpen},"v-navigation__toggle"]},"toggle icon",2)])});var j=n("5502"),g=n("0613"),m=Object(r["i"])({name:"Navigation",data:function(){return{store:Object(j["b"])(g["b"])}},computed:{isOpen:function(){return this.store.state.menuIsOpen},isClose:function(){return!this.store.state.menuIsOpen},currentRouteName:function(){return this.$router.currentRoute.value.name}},methods:{toggleMenu:function(){this.store.state.menuIsOpen=!this.store.state.menuIsOpen},closeMenu:function(){this.store.state.menuIsOpen=!1}}});n("3373");m.render=v,m.__scopeId="data-v-2bf5b9d6";var O=m,w=Object(r["i"])({name:"App",components:{Navigation:O},data:function(){return{transitionName:"slide-left"}},beforeRouteUpdate:function(e,t,n){var o=e.path.split("/").length,r=t.path.split("/").length;this.transitionName=o<r?"slide-right":"slide-left",n()}});n("ef7d");w.render=i;var y=w,k=n("9483");Object(k["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var _=n("6c02"),P=[{path:"/",name:"Home",component:function(){return n.e("ViewHome").then(n.bind(null,"4886"))}},{path:"/about",name:"About",component:function(){return n.e("ViewProjects").then(n.bind(null,"7bb9"))}},{path:"/projects",name:"Projects",component:function(){return n.e("ViewProjects").then(n.bind(null,"73bf"))}}],C=Object(_["a"])({history:Object(_["b"])(),routes:P}),V=C,A=n("d4cd"),N=n.n(A);n("34b7");M(),console.log("run app"),Object(r["d"])(y).use(g["a"],g["b"]).use(V).mount("#app");var E=new N.a;function M(){return Object(o["a"])(this,void 0,void 0,(function(){return Object(o["b"])(this,(function(e){return console.log("get content"),S(),[2]}))}))}function S(){return Object(o["a"])(this,void 0,void 0,(function(){var e,t,n,r,c;return Object(o["b"])(this,(function(o){switch(o.label){case 0:return[4,fetch("http://104.248.20.170/Projects?_limit=-1")];case 1:return e=o.sent(),[4,e.json()];case 2:for(t=o.sent(),n=0,r=t;n<r.length;n++)c=r[n],c.description&&(c.description=E.render(c.description));return g["a"].commit("updateProjects",t),[2]}}))}))}},ef7d:function(e,t,n){"use strict";n("83ae")}});
//# sourceMappingURL=app.165d34dd.js.map