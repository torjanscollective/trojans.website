(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ViewHome"],{"39b7":function(e,t,a){"use strict";var i=a("7a23");const o=Object(i["F"])("data-v-08490cd6");Object(i["t"])("data-v-08490cd6");const c={key:2,class:"v-gallery__vimeo-container"};Object(i["r"])();const n=o((e,t,a,o,n,r)=>(Object(i["q"])(),Object(i["e"])(i["a"],null,[e.vimeoPlayerIsOpen?Object(i["f"])("",!0):(Object(i["q"])(),Object(i["e"])("img",{key:0,class:["v-gallery",{"has-vimeo":e.data.vimeo}],alt:e.data.image.caption,src:e.largeImgUrl,onClick:t[1]||(t[1]=(...t)=>e.openVimeoPlayer&&e.openVimeoPlayer(...t))},null,10,["alt","src"])),e.data.image.caption&&e.withDesc?(Object(i["q"])(),Object(i["e"])("div",{key:1,class:"v-gallery__desc",style:{textAlign:e.descAlign}},Object(i["B"])(e.data.image.caption),5)):Object(i["f"])("",!0),e.data.vimeo&&e.vimeoPlayerIsOpen?(Object(i["q"])(),Object(i["e"])("div",c,[Object(i["h"])("iframe",{src:`https://player.vimeo.com/video/${e.data.vimeo.vimeo_id}?color=00EF2E&portrait=0`,width:"250",height:"150",frameborder:"0",class:"v-gallery__vimeo-container__vimeo",onLoad:t[2]||(t[2]=(...t)=>e.vimeoLoad&&e.vimeoLoad(...t))},null,40,["src"])])):Object(i["f"])("",!0)],64)));var r=a("79f6"),s=Object(i["i"])({name:"Gallery",props:{data:{required:!0,type:Object},withDesc:{required:!1,type:Boolean,default:function(){return!0}},descAlign:{required:!1,type:String,default:function(){return"right"}}},data:function(){return{vimeoPlayerIsOpen:!1}},computed:{largeImgUrl:function(){var e,t,a,i,o=this.data.image;this.data.vimeo&&(o=this.data.vimeo.cover);var c=(null===(t=null===(e=o.formats)||void 0===e?void 0:e.xlarge)||void 0===t?void 0:t.url)||(null===(i=null===(a=o.formats)||void 0===a?void 0:a.large)||void 0===i?void 0:i.url)||o.url||"";return""+r["c"]+c}},methods:{openVimeoPlayer:function(){void 0!==this.$props.data.vimeo&&(this.vimeoPlayerIsOpen=!0)},vimeoLoad:function(e){if(e.target instanceof HTMLIFrameElement&&e.target.getBoundingClientRect().width<650){var t=e.target;t.style.opacity="0",t.style.width="1000px",t.style.height="1000px",window.setTimeout((function(){t.style.opacity="",t.style.width="",t.style.height=""}),250)}}}});a("59a1");s.render=n,s.__scopeId="data-v-08490cd6";t["a"]=s},4309:function(e,t,a){e.exports=a.p+"img/TrojansLogo--white.595d7305.svg"},4886:function(e,t,a){"use strict";a.r(t);var i=a("7a23"),o=a("4309"),c=a.n(o);const n=Object(i["F"])("data-v-6382f100");Object(i["t"])("data-v-6382f100");const r={class:"v-view-home"},s=Object(i["h"])("div",{class:"v-view-home__img-intro"},[Object(i["h"])("img",{class:"v-view-home__logo",src:c.a,alt:"Trojan logo"})],-1),l={class:"v-view-home__img-item"},d=Object(i["h"])("span",null,"->",-1);Object(i["r"])();const m=n((e,t,a,o,c,n)=>{const m=Object(i["y"])("gallery");return Object(i["q"])(),Object(i["e"])("section",r,[s,(Object(i["q"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(e.homeImages,e=>(Object(i["q"])(),Object(i["e"])("div",l,[e.Link?(Object(i["q"])(),Object(i["e"])("a",{key:0,href:e.Link,target:"_blank"},[d],8,["href"])):Object(i["f"])("",!0),Object(i["h"])(m,{data:{image:e.Image},"with-desc":!1},null,8,["data"])]))),256))])});var v=a("5502"),u=a("0613"),b=a("39b7"),g=Object(i["i"])({name:"ViewHome",components:{Gallery:b["a"]},data:function(){return{store:Object(v["b"])(u["b"])}},computed:{homeImages:function(){return this.store.state.homeImages}}});a("c757"),a("ecd3");g.render=m,g.__scopeId="data-v-6382f100";t["default"]=g},5027:function(e,t,a){},"59a1":function(e,t,a){"use strict";a("c738")},"6b57":function(e,t,a){},c738:function(e,t,a){},c757:function(e,t,a){"use strict";a("6b57")},ecd3:function(e,t,a){"use strict";a("5027")}}]);
//# sourceMappingURL=ViewHome.da8914b8.js.map