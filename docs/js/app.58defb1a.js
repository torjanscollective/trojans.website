(function(t){function e(e){for(var c,o,a=e[0],s=e[1],u=e[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(c=!1)}c&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},o={app:0},i={app:0},r=[];function a(t){return s.p+"js/"+({ViewHome:"ViewHome",ViewProjects:"ViewProjects"}[t]||t)+"."+{ViewHome:"e867a4df",ViewProjects:"8b1b817e"}[t]+".js"}function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={ViewHome:1,ViewProjects:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var c="css/"+({ViewHome:"ViewHome",ViewProjects:"ViewProjects"}[t]||t)+"."+{ViewHome:"110fe2f5",ViewProjects:"fe74c085"}[t]+".css",i=s.p+c,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var u=r[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===i))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===c||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var c=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[t],f.parentNode.removeChild(f),n(r)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var c=i[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,n){c=i[t]=[e,n]}));e.push(c[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://trojanscollective.com/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0613":function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var c=n("5502");function o(t){for(var e=t.projects,n=[],c=0,o=e;c<o.length;c++){var i=o[c];if(i.date){for(var r=new Date(i.date).getFullYear(),a=!1,s=0,u=n;s<u.length;s++){var l=u[s];if(l.projectYear===r){l.projects.push(i),a=!0;break}}a||n.push({projects:[i],projectYear:r})}}function d(t,e){return t.projectYear<e.projectYear?-1:t.projectYear>e.projectYear?1:0}return n.sort(d),n}var i=Symbol();e["a"]=Object(c["a"])({state:{projects:[],sortedProject:[],tags:[],activatedTags:[],secondaryTag:[],activatedSecondaryTag:null,widthOfProjectOpen:0,titleWidthOfProjectOpen:0,leftPositionOfProjectItem:null,contact:null,menuIsOpen:!1,idOfOpenedProject:null,indexOfOpenProject:null,indexOfOpenAboutTab:0,about:null,award:null,info:null,manifesto:null,theyWorkWithUs:null,homeImages:null,isDeskWidth:!1,isMobileWidth:!1},mutations:{updateProjects:function(t,e){t.sortedProject=o({projects:e}).reverse(),t.projects=e},updateIdOfOpenedProject:function(t,e){t.idOfOpenedProject=e},updateIndexOfOpenProject:function(t,e){t.idOfOpenedProject=null===e?null:""+t.sortedProject[e.dateIndex].projectYear+e.projectIndex,t.indexOfOpenProject=e},updateIndexOfOpenAboutTab:function(t,e){t.indexOfOpenAboutTab=e},updateTags:function(t,e){t.tags=e},tagsListAddTag:function(t,e){t.activatedTags.push(e)},tagsListRemoveTag:function(t,e){var n=t.activatedTags.indexOf(e);n>-1?t.activatedTags.splice(n,1):console.error("can't remove "+e+", because isn't in activatedTags array stored")},updateSecondaryTags:function(t,e){t.secondaryTag=e},ToggleSecondaryTagActivated:function(t,e){t.activatedSecondaryTag===e?t.activatedSecondaryTag=null:t.activatedSecondaryTag=e},updateWidthOfProjectOpen:function(t,e){t.widthOfProjectOpen=e},updateTitleWidthOfProjectOpen:function(t,e){t.titleWidthOfProjectOpen=e},updateLeftPositionOfProjectItem:function(t,e){t.leftPositionOfProjectItem=e},updateContact:function(t,e){t.contact=e},updateAbout:function(t,e){t.about=e},updateAward:function(t,e){t.award=e},updateInfo:function(t,e){t.info=e},updateManifesto:function(t,e){t.manifesto=e},updateTheyWorkWithUs:function(t,e){t.theyWorkWithUs=e},updateHomeImages:function(t,e){t.homeImages=e},updateScreenWidth:function(t,e){var n=900,c=e<n;t.isMobileWidth=c,t.isDeskWidth=!c}},actions:{},modules:{},getters:{transformDataOfDesktopItemProjectViewer:function(t,e){if(null===t.indexOfOpenProject)return{left:window.innerWidth/2,width:0};var n=20,c=e.projectsSortedInArray[t.indexOfOpenProject.dateIndex][t.indexOfOpenProject.projectIndex],o=n*c.length;return{left:(t.leftPositionOfProjectItem||0)+t.titleWidthOfProjectOpen+n*t.indexOfOpenProject.itemIndex,width:t.widthOfProjectOpen-t.titleWidthOfProjectOpen-o}},projectsSortedInArray:function(t){return t.sortedProject.map((function(t,e){return t.projects.map((function(t,e){var n,c,o=(null===(n=t.images)||void 0===n?void 0:n.map((function(t){return{type:"image",images:t}})))||[],i=(null===(c=t.Vimeo)||void 0===c?void 0:c.map((function(t){return{type:"vimeo",Vimeo:t}})))||[],r=[{text:t.description,type:"intro",exhibition_links:t.exhibition_links,cover:t.cover}];return r.concat(o,i)}))}))},sizeOfFirstProjectImage:function(t,e){if(t.indexOfOpenProject){var n=e.projectsSortedInArray[t.indexOfOpenProject.dateIndex][t.indexOfOpenProject.projectIndex],c=n[1];if("image"===(null===c||void 0===c?void 0:c.type))return{width:c.images.width,height:c.images.height}}return null}}})},"07b5":function(t,e,n){"use strict";n("89fd")},"0f38":function(t,e,n){},"25da":function(t,e,n){"use strict";n("61bf")},"34b7":function(t,e,n){},"61bf":function(t,e,n){},"6f93":function(t,e,n){"use strict";n("0f38")},"79f6":function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"h",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"k",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return h}));var c="https://api.trojanscollective.com",o=c+"/Projects?_limit=-1",i=c+"/Contact",r=c+"/about",a=c+"/exhibitions-and-awards",s=c+"/manifesto",u=c+"/info",l=c+"/they-work-with-us",d=c+"/home-images",f=c+"/Tags",h=c+"/second-tags"},"877c":function(t,e,n){},"89fd":function(t,e,n){},bafb:function(t,e,n){"use strict";n("c100")},c100:function(t,e,n){},cd24:function(t,e,n){"use strict";n("f0df")},cd49:function(t,e,n){"use strict";n.r(e);var c=n("9ab4"),o=n("7a23");const i=Object(o["h"])("div",{class:"overlay-left"},null,-1);function r(t,e,n,c,r,a){const s=Object(o["y"])("navigation"),u=Object(o["y"])("router-view");return Object(o["q"])(),Object(o["e"])("div",{class:[{"is-home":t.isHome,"is-fixed-layout":t.isFixedLayout,"is-desk-width":t.isDeskWidth},"v-app"]},[Object(o["h"])(s),Object(o["h"])(u,null,{default:Object(o["E"])(({Component:t,route:e})=>[Object(o["h"])(o["b"],{name:"fade",mode:"out-in"},{default:Object(o["E"])(()=>[(Object(o["q"])(),Object(o["e"])(Object(o["z"])(t)))]),_:2},1024),i]),_:1})],2)}var a=n("5502"),s=n("0613");const u=Object(o["F"])("data-v-e176561a");Object(o["t"])("data-v-e176561a");const l={key:0,class:"v-navigation__content"},d={class:"v-navigation__content__box"},f={class:"v-navigation__links"},h=Object(o["g"])("Home"),b=Object(o["g"])("Works"),p=Object(o["g"])("About"),j=Object(o["g"])("Manifesto"),O={key:0,class:"v-navigation__contact"},v=Object(o["g"])("Address: "),m=Object(o["h"])("br",null,null,-1),g=Object(o["h"])("br",null,null,-1),w=Object(o["h"])("br",null,null,-1),y=Object(o["g"])(" | "),k={class:"v-navigation__menu"},_={key:0,class:"v-navigation__mail-chimp"},x={class:"v-navigation__logo"},P={key:0,class:"v-navigation__news t-text-subtitle"},T=Object(o["h"])("div",null,"news",-1),C={key:0,class:"v-navigation__news__content",ref:"newsElementContainer"},M={key:1,href:"/",class:"no-style"},I=Object(o["h"])("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 595.3 220.7",style:{"enable-background":"new 0 0 595.3 220.7"},"xml:space":"preserve"},[Object(o["h"])("g",null,[Object(o["h"])("path",{d:"M62.7,44h19.7v30.8h26v16.7h-26v39.2c0,3.8,0.1,6.8,0.3,9c0.2,2.2,0.9,4.1,2.1,5.8c1.2,1.6,3,2.3,5.6,2.1l18-1.8v16.7\n                l-4.3,0.5c-1.4,0.2-4.6,0.6-9.6,1.2c-4.9,0.6-8.5,0.8-10.8,0.8c-5.8,0-10.7-2.1-14.8-6.2c-4.1-4.1-6.2-11.1-6.2-21V91.5H42.3V74.8\n                h12c2.7,0,4.6-0.5,5.8-1.4c1.2-0.9,1.9-2.2,2.2-3.7c0.3-1.5,0.4-3.7,0.4-6.6V44z"}),Object(o["h"])("path",{d:"M139,94c2.4-5.6,6.4-10.1,11.8-13.8c5.4-3.6,11.3-5.4,17.6-5.4v21.7h-16.7c-3.7,0-6.5,1.3-8.6,3.9\n                c-2.1,2.6-3.1,7.1-3.1,13.4v48.5h-20V74.8h21.7L135,94H139z"}),Object(o["h"])("path",{d:"M191.5,159.3c-6.4-3.7-11.4-9-15.1-15.9c-3.7-6.9-5.5-15.3-5.5-24.9c0-9.6,1.8-17.8,5.5-24.8c3.7-7,8.7-12.3,15.1-15.9\n                c6.4-3.6,13.7-5.4,21.9-5.4c8.1,0,15.4,1.8,21.8,5.5c6.4,3.7,11.5,9,15.2,15.9c3.7,6.9,5.5,15.2,5.5,24.8c0,9.7-1.8,18-5.5,24.9\n                c-3.7,6.9-8.7,12.3-15.2,15.9c-6.4,3.7-13.7,5.5-21.8,5.5C205.2,164.8,197.9,163,191.5,159.3z M197.3,95.6\n                c-3.7,5.3-5.6,12.9-5.6,22.9s1.9,17.6,5.6,22.9c3.7,5.3,9.1,7.9,16.1,7.9c7,0,12.4-2.6,16.1-7.9c3.7-5.3,5.6-12.9,5.6-22.9\n                s-1.9-17.6-5.6-22.9c-3.7-5.3-9.1-7.9-16.1-7.9C206.4,87.6,201,90.3,197.3,95.6z"}),Object(o["h"])("path",{d:"M264.6,74.8h19.7V171c0,9.9-2.1,16.9-6.2,21c-4.1,4.1-9.1,6.2-14.8,6.2c-2.3,0-5.9-0.4-10.7-1.3c-1-0.1-2.2-0.3-3.5-0.5\n                c-1.3-0.2-2.9-0.4-4.8-0.7v-18.3l12.3,2c3.7,0.6,5.9-0.6,6.8-3.6c0.8-2.9,1.3-7.1,1.3-12.4V74.8z M274.6,60.6\n                c3.7,0,6.8-1.3,9.4-3.9c2.6-2.6,3.9-5.8,3.9-9.4c0-3.7-1.3-6.8-3.9-9.4c-2.6-2.6-5.8-3.9-9.4-3.9s-6.8,1.3-9.4,3.9\n                c-2.6,2.6-3.9,5.8-3.9,9.4c0,3.7,1.3,6.8,3.9,9.4C267.8,59.3,270.9,60.6,274.6,60.6z"}),Object(o["h"])("path",{d:"M360,80.7c6.7,5.6,10,13.5,10,23.6v58h-20.8l8.7-21.5h-5.7c-1.2,7.1-4.3,12.9-9.3,17.3c-5,4.4-11.2,6.7-18.5,6.7\n                c-6.6,0-12.2-1.3-16.9-3.8c-4.7-2.6-8.3-5.9-10.8-10.2c-2.4-4.2-3.7-8.7-3.7-13.5c0-7.8,3-13.8,8.9-17.9c5.9-4.2,14-6.7,24.1-7.6\n                l24-2.2v-6.8c0-4.4-1.4-8.1-4.2-11.1c-2.8-2.9-6.8-4.4-12.2-4.4c-3.9,0-7,0.2-9.3,0.7c-2.3,0.4-4.3,1.7-5.9,3.7\n                c-1.6,2-2.4,5.2-2.4,9.5h-20c0-10.4,3.6-17.9,10.8-22.3c7.2-4.4,15.6-6.6,25-6.6C343.9,72.3,353.3,75.1,360,80.7z M344.4,144.2\n                c3.7-3.8,5.6-8.7,5.6-14.8v-6.7l-21.5,2.2c-9.8,0.9-14.7,5.1-14.7,12.7c0,3.3,1.2,6.2,3.6,8.7c2.4,2.4,5.7,3.7,9.9,3.7\n                C335,149.8,340.7,147.9,344.4,144.2z"}),Object(o["h"])("path",{d:"M453.2,81.7c5.1,6.3,7.7,14.1,7.7,23.6v57h-20v-57c0-4.6-1.5-8.3-4.6-11.3c-3.1-2.9-7.8-4.4-14.3-4.4\n                c-13.6,0-20.3,4.7-20.3,14v58.7h-20V74.8h20.8L395.8,94h3.8c2-6.1,5.9-11.3,11.6-15.4c5.7-4.2,12-6.3,18.8-6.3\n                C440.3,72.3,448.1,75.4,453.2,81.7z"}),Object(o["h"])("path",{d:"M524.5,138.3c0-3.1-1.1-5.6-3.3-7.3c-2.2-1.8-4.7-2.8-7.6-3.2l-15.3-1.8c-8.4-1-15.3-3.6-20.4-7.9\n                c-5.2-4.3-7.8-10.1-7.8-17.6c0-8.7,3.1-15.5,9.2-20.6c6.1-5.1,14.4-7.6,24.8-7.6c6.6,0,12.6,1.1,18.3,3.3\n                c5.6,2.2,10.1,5.6,13.6,10.3c3.4,4.6,5.2,10.3,5.2,17.1h-18.8c0-6.1-1.6-10.4-4.8-12.9s-7.9-3.8-14.1-3.8c-4.2,0-7.7,1.1-10.5,3.2\n                c-2.8,2.1-4.2,4.9-4.2,8.5c0,3.2,1.1,5.9,3.2,8c2.1,2.1,5.3,3.4,9.5,3.8l18,2c7.3,0.9,13.1,3.4,17.3,7.6c4.2,4.2,6.3,9.6,6.3,16.4\n                c0,5.8-1.6,10.9-4.7,15.3c-3.1,4.4-7.5,7.8-13.2,10.2c-5.7,2.4-12.2,3.6-19.5,3.6c-10.6,0-19.4-2.5-26.5-7.4\n                c-7.1-4.9-10.7-12.8-10.7-23.6h18.8c0,6.3,1.7,10.8,5,13.3c3.3,2.5,8.6,3.8,15.8,3.8c5,0,8.9-1.2,11.8-3.5\n                C523.1,145,524.5,142,524.5,138.3z"})])],-1),A=Object(o["h"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 65 65",class:"v-navigation__toggle-icon","xml:space":"preserve"},[Object(o["h"])("path",{d:"M 18 43 48 43 z"}),Object(o["h"])("path",{d:"M 18 32 48 32 z"}),Object(o["h"])("path",{d:"M 18 21 48 21 z"})],-1),W={key:1,class:"v-navigation__toggle v-navigation__toggle__fix"},S=Object(o["g"])("Home"),V=Object(o["g"])("Works"),H=Object(o["g"])("About"),q=Object(o["g"])("Manifesto");Object(o["r"])();const L=u((t,e,n,c,i,r)=>{const a=Object(o["y"])("router-link"),s=Object(o["y"])("mail-chimp"),L=Object(o["y"])("tags-list");return Object(o["q"])(),Object(o["e"])("nav",{class:["v-navigation",{"is-open":t.isOpen,"show-news":t.showNews}]},[Object(o["h"])(o["b"],{name:"slide"},{default:u(()=>[t.isOpen?(Object(o["q"])(),Object(o["e"])("div",l,[Object(o["h"])("div",d,[Object(o["h"])("div",f,[Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/"},{default:u(()=>[h]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/projects"},{default:u(()=>[b]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/About"},{default:u(()=>[p]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/Manifesto"},{default:u(()=>[j]),_:1},8,["onClick"])]),null!==t.contactData?(Object(o["q"])(),Object(o["e"])("div",O,[Object(o["h"])("p",null,[v,m,Object(o["g"])(Object(o["B"])(t.contactData.Address)+" ",1),g,Object(o["g"])(Object(o["B"])(t.contactData.Postal_Code)+" "+Object(o["B"])(t.contactData.City)+" ",1),w,Object(o["g"])(Object(o["B"])(t.contactData.Country),1)]),Object(o["h"])("p",null,[Object(o["h"])("a",{href:"mailto:"+t.contactData.mail},Object(o["B"])(t.contactData.mail),9,["href"])]),Object(o["h"])("p",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.contactData.links,(t,e)=>(Object(o["q"])(),Object(o["e"])("a",{href:t.url},[e>0?(Object(o["q"])(),Object(o["e"])(o["a"],{key:0},[y],64)):Object(o["f"])("",!0),Object(o["g"])(" "+Object(o["B"])(t.name),1)],8,["href"]))),256))])])):Object(o["f"])("",!0)])])):Object(o["f"])("",!0)]),_:1}),Object(o["h"])("div",k,[Object(o["h"])(o["b"],{name:"fade-mailchimp"},{default:u(()=>[t.showMailchimpSubscription?(Object(o["q"])(),Object(o["e"])("div",_,[Object(o["h"])(s)])):Object(o["f"])("",!0)]),_:1}),Object(o["h"])("div",x,[t.showNews?(Object(o["q"])(),Object(o["e"])("div",P,[T,null!==t.news?(Object(o["q"])(),Object(o["e"])("div",C,[Object(o["h"])("div",{class:"v-navigation__news__content__html",innerHTML:t.news,ref:"newsElement"},null,8,["innerHTML"])],512)):Object(o["f"])("",!0)])):(Object(o["q"])(),Object(o["e"])("a",M,[I]))]),t.isDeskWidth&&t.isProjectView?(Object(o["q"])(),Object(o["e"])(L,{key:0})):Object(o["f"])("",!0)]),t.isMobileWidth?(Object(o["q"])(),Object(o["e"])("div",{key:0,onClick:e[1]||(e[1]=(...e)=>t.toggleMenu&&t.toggleMenu(...e)),class:[{"is-open":t.isOpen},"v-navigation__toggle"]},[A],2)):Object(o["f"])("",!0),t.isDeskWidth?(Object(o["q"])(),Object(o["e"])("div",W,[Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/"},{default:u(()=>[S]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/projects"},{default:u(()=>[V]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/About"},{default:u(()=>[H]),_:1},8,["onClick"]),Object(o["h"])(a,{class:"t-nav-link",onClick:t.closeMenu,to:"/Manifesto"},{default:u(()=>[q]),_:1},8,["onClick"])])):Object(o["f"])("",!0)],2)}),D={class:"v-tag-list"};function E(t,e,n,c,i,r){const a=Object(o["y"])("tag");return Object(o["q"])(),Object(o["e"])("section",D,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.tags,t=>(Object(o["q"])(),Object(o["e"])(a,{tag:t.tags,"is-seconde-filter":!1},null,8,["tag"]))),256)),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(t.secondaryTags,t=>(Object(o["q"])(),Object(o["e"])(a,{tag:t.value,"is-seconde-filter":!0},null,8,["tag"]))),256))])}const N=Object(o["h"])("div",{class:"v-tag__ui"},null,-1),z={class:"v-tag__name"};function B(t,e,n,c,i,r){return Object(o["q"])(),Object(o["e"])("div",{onClick:e[1]||(e[1]=(...e)=>t.toggleStatus&&t.toggleStatus(...e)),class:[{"is-variante":t.isSecondeFilter,"is-active":t.isActive},"v-tag"]},[N,Object(o["h"])("div",z,Object(o["B"])(t.tag),1)],2)}var F=Object(o["i"])({name:"Tag",props:{tag:{type:String,required:!0},isSecondeFilter:{type:Boolean,required:!0,default:!1}},data:function(){return{store:Object(a["b"])(s["b"])}},methods:{toggleStatus:function(){this.store.commit("updateIdOfOpenedProject",null),this.store.commit("updateIndexOfOpenProject",null),this.isSecondeFilter?this.store.commit("ToggleSecondaryTagActivated",this.tag):this.isActive?this.store.commit("tagsListRemoveTag",this.tag):this.store.commit("tagsListAddTag",this.tag)}},computed:{isActive:function(){return this.isSecondeFilter?this.store.state.activatedSecondaryTag===this.tag:this.store.state.activatedTags.includes(this.tag)}}});n("cd24");F.render=B;var Y=F,R=Object(o["i"])({name:"TagsList",components:{Tag:Y},data:function(){return{store:Object(a["b"])(s["b"])}},computed:{tags:function(){return this.store.state.tags},secondaryTags:function(){return this.store.state.secondaryTag}}});n("25da");R.render=E;var $=R;const J=Object(o["F"])("data-v-3c41e32a");Object(o["t"])("data-v-3c41e32a");const U={class:"v-mail-chimp"},G=Object(o["h"])("form",{action:"https://trojanscollective.us7.list-manage.com/subscribe/post?u=9347e7db75c68142d55f52ba1&id=acbe94976e",method:"post",name:"mc-embedded-subscribe-form",novalidate:""},[Object(o["h"])("input",{type:"email",value:"",name:"EMAIL",placeholder:"Subscribe to our newsletter",size:"25"}),Object(o["h"])("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},[Object(o["h"])("input",{type:"text",name:"b_9347e7db75c68142d55f52ba1_acbe94976e",tabindex:"-1",value:""})]),Object(o["h"])("input",{type:"submit",value:"--\x3e",name:"subscribe"})],-1);Object(o["r"])();const K=J((t,e,n,c,i,r)=>(Object(o["q"])(),Object(o["e"])("div",U,[G])));var Q=Object(o["i"])({name:"MailChimp",components:{},data:function(){return{store:Object(a["b"])(s["b"])}}});n("6f93");Q.render=K,Q.__scopeId="data-v-3c41e32a";var X=Q,Z=Object(o["i"])({name:"Navigation",components:{MailChimp:X,TagsList:$},data:function(){return{store:Object(a["b"])(s["b"]),scrollTop:0}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("scroll",(function(e){t.scrollTop=window.scrollY})),t.initNewsAnimation()}))},computed:{actualRout:function(){return this.$route.path},showMailchimpSubscription:function(){return this.isDeskWidth?this.isHome:this.isHome&&!this.store.state.menuIsOpen},navigationOverHomeIntroLogo:function(){return this.scrollTop<250&&"/"===this.actualRout},showNews:function(){return"/"===this.actualRout&&!this.isOpen},isOpen:function(){return this.store.state.menuIsOpen},isClose:function(){return!this.store.state.menuIsOpen},currentRouteName:function(){return this.$router.currentRoute.value.name},contactData:function(){return this.store.state.contact},news:function(){var t,e;return!1===(null===(t=this.store.state.info)||void 0===t?void 0:t.activated)?null:(null===(e=this.store.state.info)||void 0===e?void 0:e.infos)||null},isProjectView:function(){return"/projects"===this.$route.path},isMobileWidth:function(){return this.store.state.isMobileWidth},isDeskWidth:function(){return this.store.state.isDeskWidth},isHome:function(){return"/"===this.$route.path}},methods:{toggleMenu:function(){this.store.state.menuIsOpen=!this.store.state.menuIsOpen},closeMenu:function(){this.store.state.menuIsOpen=!1},initNewsAnimation:function(){var t=this;window.setInterval((function(){if("/"===t.$route.path){var e=t.$refs.newsElementContainer,n=t.$refs.newsElement;if(n instanceof HTMLElement&&e instanceof HTMLElement){var c=e.getBoundingClientRect(),o=n.getBoundingClientRect(),i=o.height>c.height,r=o.bottom>c.bottom,a=i&&r,s=i&&!r,u=Number.parseFloat(getComputedStyle(n).lineHeight);a?(n.style.transition="transform ease-in-out 500ms",n.style.transform="translateY( "+(o.top-c.top-u)+"px )"):s&&(n.style.transition="transform ease-in-out 0ms",n.style.transform="translateY( 0 )")}}}),2500)}}});n("fff1"),n("bafb");Z.render=L,Z.__scopeId="data-v-e176561a";var tt=Z,et=Object(o["i"])({name:"App",components:{Navigation:tt},data:function(){return{transitionName:"slide-left",store:Object(a["b"])(s["b"])}},computed:{isHome:function(){return"/"===this.$route.path},isDeskWidth:function(){return this.store.state.isDeskWidth},isFixedLayout:function(){return"/About"===this.$route.path&&!this.isDeskWidth}},beforeRouteUpdate:function(t,e,n){var c=t.path.split("/").length,o=e.path.split("/").length;this.transitionName=c<o?"slide-right":"slide-left",n()}});n("07b5");et.render=r;var nt=et,ct=n("9483");Object(ct["a"])("https://trojanscollective.com/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ot=n("6c02"),it=[{path:"/",name:"Home",component:function(){return n.e("ViewHome").then(n.bind(null,"4886"))},meta:{title:"Welcome on the Trojans Collective website!",description:"We are the Trojans Collective, an international design group. We navigate three main axes of work: Spatial Installation, Graphic Communication, and Film."}},{path:"/about",name:"About",component:function(){return n.e("ViewProjects").then(n.bind(null,"7bb9"))},meta:{title:"About the Trojans Collective",description:"Trojans Collective is a design group by Helena, Jeanne, Jessica and Netillo. Our goal is to expand the field of design through experimentation and research."},beforeEnter:function(t,e,n){s["a"].commit("updateIndexOfOpenAboutTab",0),n()}},{path:"/projects",name:"Projects",component:function(){return n.e("ViewProjects").then(n.bind(null,"73bf"))},meta:{title:"List of curated projects by the Trojans Collective.",description:"Curated list of Trojans Collective works."}},{path:"/manifesto",name:"Manifesto",component:function(){return n.e("ViewProjects").then(n.bind(null,"7bb9"))},meta:{title:"About the Trojans Collective",description:"Trojans Collective is a design group by Helena, Jeanne, Jessica and Netillo. Our goal is to expand the field of design through experimentation and research."},beforeEnter:function(t,e,n){s["a"].commit("updateIndexOfOpenAboutTab",3),n()}}],rt=Object(ot["a"])({history:Object(ot["b"])("https://trojanscollective.com/"),routes:it});rt.afterEach((function(t){document.title=t.meta.title,document.querySelector("meta[name=description]").setAttribute("content",t.meta.description)}));var at=rt,st=n("79f6"),ut=n("d4cd"),lt=n.n(ut);n("34b7");ht(),Object(o["d"])(nt).use(s["a"],s["b"]).use(at).mount("#app");var dt=new lt.a,ft=dt.renderer.rules.link_open||function(t,e,n,c,o){return o.renderToken(t,e,n)};function ht(){return Object(c["a"])(this,void 0,void 0,(function(){return Object(c["b"])(this,(function(t){return bt(),pt(),jt(),Ot(),vt(),mt(),gt(),wt(),yt(),kt(),_t(),[2]}))}))}function bt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e,n,o,i;return Object(c["b"])(this,(function(c){switch(c.label){case 0:return[4,fetch(st["h"])];case 1:return t=c.sent(),[4,t.json()];case 2:for(e=c.sent(),n=0,o=e;n<o.length;n++)i=o[n],i.description&&(i.description=dt.render(i.description));return s["a"].commit("updateProjects",e),[2]}}))}))}function pt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["j"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateTags",e),[2]}}))}))}function jt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["i"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateSecondaryTags",e),[2]}}))}))}function Ot(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["d"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateContact",e),[2]}}))}))}function vt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["a"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),e.description=dt.render(e.description),s["a"].commit("updateAbout",e),[2]}}))}))}function mt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["b"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateAward",e),[2]}}))}))}function gt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["g"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),e.description=dt.render(e.description),s["a"].commit("updateManifesto",e),[2]}}))}))}function wt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["f"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),e.infos=dt.render(e.infos),s["a"].commit("updateInfo",e),[2]}}))}))}function yt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["k"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateTheyWorkWithUs",e),[2]}}))}))}function kt(){return Object(c["a"])(this,void 0,void 0,(function(){var t,e;return Object(c["b"])(this,(function(n){switch(n.label){case 0:return[4,fetch(st["e"])];case 1:return t=n.sent(),[4,t.json()];case 2:return e=n.sent(),s["a"].commit("updateHomeImages",e),[2]}}))}))}function _t(){return Object(c["a"])(this,void 0,void 0,(function(){return Object(c["b"])(this,(function(t){return s["a"].commit("updateScreenWidth",window.innerWidth),window.addEventListener("resize",(function(){s["a"].commit("updateScreenWidth",window.innerWidth)})),[2]}))}))}dt.renderer.rules.link_open=function(t,e,n,c,o){var i=t[e].attrIndex("target");if(i<0)t[e].attrPush(["target","_blank"]);else{var r=t[e].attrs;r&&(r[i][1]="_blank")}return ft(t,e,n,c,o)}},f0df:function(t,e,n){},fff1:function(t,e,n){"use strict";n("877c")}});
//# sourceMappingURL=app.58defb1a.js.map