(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ViewProjects"],{"0699":function(e,t,i){"use strict";i("e4ee")},1186:function(e,t,i){"use strict";i("954c")},"1b8b":function(e,t,i){"use strict";i("1c54")},"1c54":function(e,t,i){},"20c7":function(e,t,i){"use strict";i("9546")},"2fb0":function(e,t,i){"use strict";i("33f9")},"33f9":function(e,t,i){},"39b7":function(e,t,i){"use strict";var n=i("7a23");const o=Object(n["F"])("data-v-08490cd6");Object(n["t"])("data-v-08490cd6");const r={key:2,class:"v-gallery__vimeo-container"};Object(n["r"])();const c=o((e,t,i,o,c,s)=>(Object(n["q"])(),Object(n["e"])(n["a"],null,[e.vimeoPlayerIsOpen?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("img",{key:0,class:["v-gallery",{"has-vimeo":e.data.vimeo}],alt:e.data.image.caption,src:e.largeImgUrl,onClick:t[1]||(t[1]=(...t)=>e.openVimeoPlayer&&e.openVimeoPlayer(...t))},null,10,["alt","src"])),e.data.image.caption&&e.withDesc?(Object(n["q"])(),Object(n["e"])("div",{key:1,class:"v-gallery__desc",style:{textAlign:e.descAlign}},Object(n["B"])(e.data.image.caption),5)):Object(n["f"])("",!0),e.data.vimeo&&e.vimeoPlayerIsOpen?(Object(n["q"])(),Object(n["e"])("div",r,[Object(n["h"])("iframe",{src:`https://player.vimeo.com/video/${e.data.vimeo.vimeo_id}?color=00EF2E&portrait=0`,width:"250",height:"150",frameborder:"0",class:"v-gallery__vimeo-container__vimeo",onLoad:t[2]||(t[2]=(...t)=>e.vimeoLoad&&e.vimeoLoad(...t))},null,40,["src"])])):Object(n["f"])("",!0)],64)));var s=i("79f6"),a=Object(n["i"])({name:"Gallery",props:{data:{required:!0,type:Object},withDesc:{required:!1,type:Boolean,default:function(){return!0}},descAlign:{required:!1,type:String,default:function(){return"right"}}},data:function(){return{vimeoPlayerIsOpen:!1}},computed:{largeImgUrl:function(){var e,t,i,n,o=this.data.image;this.data.vimeo&&(o=this.data.vimeo.cover);var r=(null===(t=null===(e=o.formats)||void 0===e?void 0:e.xlarge)||void 0===t?void 0:t.url)||(null===(n=null===(i=o.formats)||void 0===i?void 0:i.large)||void 0===n?void 0:n.url)||o.url||"";return""+s["c"]+r}},methods:{openVimeoPlayer:function(){void 0!==this.$props.data.vimeo&&(this.vimeoPlayerIsOpen=!0)},vimeoLoad:function(e){if(e.target instanceof HTMLIFrameElement&&e.target.getBoundingClientRect().width<650){var t=e.target;t.style.opacity="0",t.style.width="1000px",t.style.height="1000px",window.setTimeout((function(){t.style.opacity="",t.style.width="",t.style.height=""}),250)}}}});i("59a1");a.render=c,a.__scopeId="data-v-08490cd6";t["a"]=a},"59a1":function(e,t,i){"use strict";i("c738")},"59a1d":function(e,t,i){e.exports=i.p+"img/nav_right.74812ff8.svg"},"5bd5":function(e,t,i){},6389:function(e,t,i){},"73bf":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),o=i("d919"),r=i.n(o),c=i("59a1d"),s=i.n(c),a=i("9a4e"),d=i.n(a),l=i("a306"),b=i.n(l);const u=Object(n["F"])("data-v-ae7aae8c");Object(n["t"])("data-v-ae7aae8c");const j={class:"v-view-projects"},h={class:"v-view-projects__item"},p={class:"v-view-projects__year"},O={key:0,class:"v-view-projects__scroll-space"},f={class:"v-view-projects__viewer__content__main"},v={key:0,class:"v-view-projects__viewer__content__cover"},g={class:"v-view-projects__viewer__content__links"},m={class:"v-view-projects__viewer__content__links__type t-text-subtitle link-style"},_={class:"v-view-projects__viewer__content__links__date t-text-small"},x={class:"v-view-projects__viewer__content__links__content t-text-small"},y={class:"v-view-projects__viewer__content__links__content t-text-small"},I={key:2,class:"v-view-projects__viewer__content"},w={key:2,class:"v-view-projects__nav-icon-container"},T=Object(n["h"])("img",{class:"t-icon_nav v-view-projects__nav-icon--top",src:r.a,alt:"icon nav top"},null,-1),P=Object(n["h"])("img",{class:"t-icon_nav v-view-projects__nav-icon--right",src:s.a,alt:"icon nav right"},null,-1),k=Object(n["h"])("img",{class:"t-icon_nav v-view-projects__nav-icon--bottom",src:d.a,alt:"icon nav bottom"},null,-1),q=Object(n["h"])("img",{class:"t-icon_nav v-view-projects__nav-icon--left",src:b.a,alt:"icon nav left"},null,-1);Object(n["r"])();const S=u((e,t,i,o,r,c)=>{const s=Object(n["y"])("Project"),a=Object(n["y"])("project-viewer-desktop"),d=Object(n["y"])("gallery");return Object(n["q"])(),Object(n["e"])("section",j,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.sortedProjects,(t,i)=>(Object(n["q"])(),Object(n["e"])("div",h,[Object(n["h"])("div",p,[Object(n["h"])("h5",null,Object(n["B"])(t.projectYear),1)]),e.isMobileWidth?(Object(n["q"])(!0),Object(n["e"])(n["a"],{key:0},Object(n["w"])(t.projects,(e,o)=>(Object(n["q"])(),Object(n["e"])(s,{data:e,stringProjectId:`${t.projectYear}${o}`,key:o+i,index:{dateIndex:i,projectIndex:o}},null,8,["data","stringProjectId","index"]))),128)):e.isDeskWidth?(Object(n["q"])(!0),Object(n["e"])(n["a"],{key:1},Object(n["w"])(t.projects,(e,o)=>(Object(n["q"])(),Object(n["e"])(a,{data:e,stringProjectId:`${t.projectYear}${o}`,key:o+i,index:{dateIndex:i,projectIndex:o}},null,8,["data","stringProjectId","index"]))),128)):Object(n["f"])("",!0)]))),256)),e.isDeskWidth?(Object(n["q"])(),Object(n["e"])("div",O)):Object(n["f"])("",!0),e.isDeskWidth&&null!==e.currentProjectItem?(Object(n["q"])(),Object(n["e"])("div",{key:1,class:"v-view-projects__viewer",ref:"projectViewer",style:e.projectContentViewerStyle},["intro"===e.currentProjectItem.type?(Object(n["q"])(),Object(n["e"])("div",{key:0,class:"v-view-projects__viewer__content",style:e.styleIntroContent},[Object(n["h"])("div",f,[null!==e.currentProjectItem.cover?(Object(n["q"])(),Object(n["e"])("div",v,[Object(n["h"])(d,{data:{image:e.currentProjectItem.cover},"desc-align":"left"},null,8,["data"])])):Object(n["f"])("",!0),Object(n["h"])("div",{class:"v-view-projects__viewer__content__intro",innerHTML:e.currentProjectItem.text},null,8,["innerHTML"])]),Object(n["h"])("div",g,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.currentProjectItem.exhibition_links,e=>(Object(n["q"])(),Object(n["e"])("a",{href:e.exhibition_link,class:"no-style"},[Object(n["h"])("div",m,Object(n["B"])(e.type),1),Object(n["h"])("div",_,Object(n["B"])(e.date),1),Object(n["h"])("div",x,Object(n["B"])(e.exhibition_title),1),Object(n["h"])("div",y,Object(n["B"])(e.partenariat_description),1)],8,["href"]))),256))])],4)):"image"===e.currentProjectItem.type?(Object(n["q"])(),Object(n["e"])("div",{key:1,class:"v-view-projects__viewer__content",style:e.projects__viewer__contentImageStyle.forContainer},[Object(n["h"])("div",{class:"v-view-projects__viewer__content--image",style:e.projects__viewer__contentImageStyle.forChildren},[Object(n["h"])(d,{data:{image:e.currentProjectItem.images}},null,8,["data"])],4)],4)):"vimeo"===e.currentProjectItem.type?(Object(n["q"])(),Object(n["e"])("div",I,[Object(n["h"])(d,{data:{image:e.currentProjectItem.images,vimeo:e.currentProjectItem.Vimeo}},null,8,["data"])])):Object(n["f"])("",!0)],4)):Object(n["f"])("",!0),e.isDeskWidth?(Object(n["q"])(),Object(n["e"])("div",w,[T,P,k,q])):Object(n["f"])("",!0)])}),C=Object(n["F"])("data-v-1856d967");Object(n["t"])("data-v-1856d967");const B={ref:"container",class:"v-project__container"},W={class:"t-title"},A={key:0,class:"v-project__description"},$={class:"v-project__description-viewer"};Object(n["r"])();const D=C((e,t,i,o,r,c)=>{const s=Object(n["y"])("exhibition"),a=Object(n["y"])("toggle-table"),d=Object(n["y"])("ProjectGalleryMobile");return Object(n["q"])(),Object(n["e"])("section",{class:[{"is-closed":!e.thisIsOpen,"is-hidden":!e.isActive},"v-project"],style:e.style},[Object(n["h"])("div",B,[Object(n["h"])("div",{ref:"containerTitle",class:"v-project__title",onClick:t[1]||(t[1]=t=>e.projectClicked())},[Object(n["h"])("h1",W,Object(n["B"])(e.data.title),1)],512),Object(n["h"])(a,{"has-close-ui":!1,ref:"firstTable",class:"v-project__toggle-table",onToggled:t[2]||(t[2]=t=>e.tableToggled(-1,t)),"is-open":e.getThisTableIsOpen(-1)},{default:C(()=>[e.data.description?(Object(n["q"])(),Object(n["e"])("div",A,[Object(n["h"])("div",$,[Object(n["h"])("div",{ref:"descriptionContainer",class:"v-project__description-container",innerHTML:e.data.description},null,8,["innerHTML"])])])):Object(n["f"])("",!0),(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.exhibitions,e=>(Object(n["q"])(),Object(n["e"])(s,{class:"v-project__exhibitions",data:e},null,8,["data"]))),256))]),_:1},8,["is-open"]),Object(n["h"])(d,{class:"v-project__no-toggle-table",images:e.images},null,8,["images"])],512)],6)}),E=Object(n["F"])("data-v-4e66dc46");Object(n["t"])("data-v-4e66dc46");const L={class:"v-exhibition"},M={class:"t-text-subtitle"},V={key:0},H={key:1},F={class:"t-text-subtitle"},R={key:0},U={key:1};Object(n["r"])();const G=E((e,t,i,o,r,c)=>(Object(n["q"])(),Object(n["e"])("section",L,[e.data.exhibition_link?(Object(n["q"])(),Object(n["e"])("a",{key:0,class:"v-exhibition__link no-style",href:e.data.exhibition_link,target:"_blank"},[Object(n["h"])("div",M,Object(n["B"])(e.type),1),e.data.exhibition_title?(Object(n["q"])(),Object(n["e"])("p",V,[Object(n["g"])(Object(n["B"])(e.data.exhibition_title),1),e.date?(Object(n["q"])(),Object(n["e"])(n["a"],{key:0},[Object(n["g"])(", "+Object(n["B"])(e.date),1)],64)):Object(n["f"])("",!0)])):Object(n["f"])("",!0),e.data.partenariat_description?(Object(n["q"])(),Object(n["e"])("p",H,Object(n["B"])(e.data.partenariat_description),1)):Object(n["f"])("",!0)],8,["href"])):(Object(n["q"])(),Object(n["e"])(n["a"],{key:1},[Object(n["h"])("div",F,Object(n["B"])(e.type),1),e.data.exhibition_title?(Object(n["q"])(),Object(n["e"])("p",R,[Object(n["g"])(Object(n["B"])(e.data.exhibition_title),1),e.date?(Object(n["q"])(),Object(n["e"])(n["a"],{key:0},[Object(n["g"])(", "+Object(n["B"])(e.date),1)],64)):Object(n["f"])("",!0)])):Object(n["f"])("",!0),e.data.partenariat_description?(Object(n["q"])(),Object(n["e"])("p",U,Object(n["B"])(e.data.partenariat_description),1)):Object(n["f"])("",!0)],64))])));var N=Object(n["i"])({name:"Exhibition",props:{data:{type:Object,required:!0}},data:function(){return{type:this.data.type||"Exhibition",date:this.data.date?new Date(this.data.date).getFullYear():null}}});i("2fb0");N.render=G,N.__scopeId="data-v-4e66dc46";var z=N,Y=i("5502"),J=i("0613"),K=i("39b7");const Q=Object(n["F"])("data-v-d922f2c2");Object(n["t"])("data-v-d922f2c2");const X={key:0,class:"v-toggle-table__title"},Z={class:"v-toggle-table__toggle"},ee=Object(n["g"])("✗"),te=Object(n["g"])("↗"),ie={class:"v-toggle-table__body"},ne={class:"v-toggle-table__body__container",ref:"container"};Object(n["r"])();const oe=Q((e,t,i,o,r,c)=>(Object(n["q"])(),Object(n["e"])("div",{class:["v-toggle-table",{"is-open":e.isOpen,"is-dark":e.isDark,"is-green":e.isGreen,"has-title":e.hasTitle,"has-body-container-padding-bottom":e.hasBodyContainerPaddingBottom}],ref:"toggleTableElement"},[Object(n["h"])("div",{onClick:t[1]||(t[1]=(...t)=>e.toggled&&e.toggled(...t)),class:"v-toggle-table__header",ref:"headerContainer"},[e.hasTitle?(Object(n["q"])(),Object(n["e"])("div",X,Object(n["B"])(e.title),1)):Object(n["f"])("",!0),Object(n["h"])("div",Z,[e.isOpen&&e.hasCloseUi&&!e.hasTitle?(Object(n["q"])(),Object(n["e"])(n["a"],{key:0},[ee],64)):e.isOpen||e.hasTitle?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])(n["a"],{key:1},[te],64))])],512),Object(n["h"])("div",ie,[Object(n["h"])("div",ne,[Object(n["x"])(e.$slots,"default")],512)])],2)));var re=Object(n["i"])({emits:["toggled","mounted"],name:"ToggleTable",mounted:function(){var e=this;this.$nextTick((function(){e.$emit("mounted")}))},props:{hasCloseUi:{type:Boolean,required:!1,default:function(){return!0}},isOpen:{type:Boolean,required:!0},isDark:{type:Boolean,required:!1,default:function(){return!1}},isGreen:{type:Boolean,required:!1,default:function(){return!1}},title:{type:String,required:!1,default:function(){return""}},hasBodyContainerPaddingBottom:{type:Boolean,required:!1,default:function(){return!0}}},computed:{hasTitle:function(){return this.title.length>0}},data:function(){return{}},methods:{toggled:function(){var e=this.$refs.headerContainer.getBoundingClientRect().height,t=this.$refs.container.getBoundingClientRect().height;this.$emit("toggled",e+t)}}});i("92f9");re.render=oe,re.__scopeId="data-v-d922f2c2";var ce=re;const se={class:"v-project-gallery-mobile",ref:"projectViewer"};function ae(e,t,i,o,r,c){const s=Object(n["y"])("Gallery");return Object(n["q"])(),Object(n["e"])("section",se,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.images,t=>(Object(n["q"])(),Object(n["e"])("div",{class:"v-project-gallery-mobile__container",style:e.projects__mobile_viewer__contentImageStyle.forContainer},[Object(n["h"])("div",{class:"v-project-gallery-mobile__container--image",style:e.projects__mobile_viewer__contentImageStyle.forChildren},[Object(n["h"])(s,{"with-desc":!0,data:t},null,8,["data"])],4)],4))),256))],512)}var de=Object(n["i"])({name:"ProjectGalleryMobile",components:{Gallery:K["a"]},data:function(){return{store:Object(Y["b"])(J["b"])}},props:{images:{type:Object,required:!0}},computed:{projects__mobile_viewer__contentImageStyle:function(){if(console.log(this.store.getters.sizeOfFirstProjectImage),this.store.getters.sizeOfFirstProjectImage&&this.$refs.projectViewer instanceof HTMLElement){var e=this.store.getters.sizeOfFirstProjectImage.height/this.store.getters.sizeOfFirstProjectImage.width*100,t=this.store.getters.transformDataOfDesktopItemProjectViewer.width,i=t*e/100,n=this.$refs.projectViewer.getBoundingClientRect().height;return i>n&&(t=n/e*100),{forContainer:{width:t+"px"},forChildren:{paddingTop:e+"%"}}}return{}}}});i("1186");de.render=ae;var le=de,be=i("bd37"),ue=Object(n["i"])({name:"Project",components:{ProjectGalleryMobile:le,ToggleTable:ce,Gallery:K["a"],Exhibition:z},props:{data:{type:Object,required:!0},stringProjectId:{type:String,required:!0},key:{type:String},index:{required:!0,type:Object}},mounted:function(){var e=this;this.$nextTick((function(){e.$refs.descriptionContainer;e.updateHeaderFixedPositionOnScroll(),window.addEventListener("scroll",e.updateHeaderFixedPositionOnScroll),"0"==e.key&&(e.store.commit("updateIdOfOpenedProject",e.stringProjectId),e.store.commit("updateIndexOfOpenProject",{dateIndex:e.$props.index.dateIndex,projectIndex:e.$props.index.projectIndex,itemIndex:0})),e.thisIsOpen&&(e.updateStoredWidthProjectOpen(),e.arrayOfToggleTableOpen=[-1])}))},beforeUnmount:function(){window.removeEventListener("scroll",this.updateHeaderFixedPositionOnScroll)},methods:{closeProject:function(e){this.thisIsOpen&&(e.stopImmediatePropagation(),this.store.commit("updateIdOfOpenedProject",null),this.store.commit("updateIndexOfOpenProject",null))},projectClicked:function(){var e=this;this.store.commit("updateIdOfOpenedProject",this.stringProjectId),this.store.commit("updateIndexOfOpenProject",{dateIndex:this.$props.index.dateIndex,projectIndex:this.$props.index.projectIndex,itemIndex:0}),window.setTimeout((function(){var t=60,i=.25,n=t*i,o=document.getElementsByClassName("v-view-projects")[0].scrollLeft,r=e.$refs.container.getBoundingClientRect().left,c=0;function s(){var e=Object(be["a"])({time:c,duration:n,startValue:o,addedValue:r});document.getElementsByClassName("v-view-projects")[0].scroll({top:0,left:e}),c++,c<n&&requestAnimationFrame((function(){s()}))}s()}),25)},updateHeaderFixedPositionOnScroll:function(){this.thisIsOpen&&this.$refs.containerTitle instanceof HTMLElement&&console.log("fixed header position on scroll")},updateHeight:function(e){var t=this;window.setTimeout((function(){if(t.isMobileWidth){var i=t.$refs.container.querySelectorAll(".v-project__toggle-table"),n=t.$refs.container.querySelectorAll(".v-project__no-toggle-table");console.log("toggleTableChildElement",i),console.log("noToggleTableChildElements",n);var o=20*i.length,r=0;n.forEach((function(e){r+=e.getBoundingClientRect().height})),t.style.maxHeight=t.$refs.containerTitle.getBoundingClientRect().height+e+o+r+"px"}else t.style.maxHeight=""}),250)},updateStoredWidthProjectOpen:function(){if(this.isDeskWidth){var e=63;this.style.maxWidth=window.innerWidth-2.5*e+"px"}else this.style.maxWidth=""},getThisTableIsOpen:function(e){return this.arrayOfToggleTableOpen.includes(e)},tableToggled:function(e,t){this.updateHeight(t),this.updateStoredWidthProjectOpen(),-1===e||this.getThisTableIsOpen(e)?this.arrayOfToggleTableOpen=[-1]:this.arrayOfToggleTableOpen=[e]}},data:function(){return{store:Object(Y["b"])(J["b"]),style:{maxHeight:"",maxWidth:""},arrayOfToggleTableOpen:[]}},computed:{isDeskWidth:function(){return this.store.state.isDeskWidth},isMobileWidth:function(){return this.store.state.isMobileWidth},exhibitions:function(){return this.data.exhibition_links||[]},images:function(){var e=[];if(this.data.images)for(var t=0,i=this.data.images;t<i.length;t++){var n=i[t];e.push({image:n})}if(this.data.Vimeo)for(var o=0,r=this.data.Vimeo;o<r.length;o++){var c=r[o];e.push({image:{},vimeo:c})}return e},thisIsOpen:function(){return this.stringProjectId===this.store.state.idOfOpenedProject},isActive:function(){var e,t=this;if(this.data.tags){var i=this.store.state.activatedTags.every((function(e,i,n){for(var o=0,r=t.data.tags;o<r.length;o++){var c=r[o];if(c.tags===e)return!0}return!1})),n=!this.store.state.activatedSecondaryTag||this.store.state.activatedSecondaryTag===(null===(e=this.data.second_tag)||void 0===e?void 0:e.value);return i&&n}return!0}},watch:{thisIsOpen:function(){this.thisIsOpen&&this.$refs["container"]instanceof HTMLElement?(this.arrayOfToggleTableOpen=[-1],this.$refs.firstTable.toggled()):(this.style.maxHeight="",this.style.maxWidth="")}}});i("98da"),i("913f");ue.render=D,ue.__scopeId="data-v-1856d967";var je=ue;const he=Object(n["F"])("data-v-4d41b92c");Object(n["t"])("data-v-4d41b92c");const pe={ref:"container",class:"v-project-viewer-desktop__container"},Oe={class:"v-project-viewer-desktop__content"},fe={key:0,class:"v-project-viewer-desktop__tab__icon"},ve={key:1,class:"v-project-viewer-desktop__tab__icon"};Object(n["r"])();const ge=he((e,t,i,o,r,c)=>(Object(n["q"])(),Object(n["e"])("section",{class:[{"is-open":e.thisIsOpen,"is-close":!e.thisIsOpen,"is-hidden":!e.isActive},"v-project-viewer-desktop"],style:e.style},[Object(n["h"])("div",pe,[Object(n["h"])("div",{ref:"containerTitle",class:"v-project-viewer-desktop__title",onClick:t[1]||(t[1]=t=>e.projectClicked(t)),style:e.titleStyle},[Object(n["h"])("h1",{class:"t-title",ref:"title"},Object(n["B"])(e.data.title),513)],4),Object(n["h"])("div",Oe,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.lengthOfItemProject,t=>(Object(n["q"])(),Object(n["e"])("div",{class:["v-project-viewer-desktop__tab",{"is-active":e.isActiveTab(t-1)}],onClick:i=>e.projectTabClicked(t-1)},[Object(n["h"])(n["b"],{name:"tab-icon"},{default:he(()=>[e.isActiveTab(t-1)&&t>1?(Object(n["q"])(),Object(n["e"])("div",fe,"✗")):e.isActiveTab(t-1)?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("div",ve,"↗"))]),_:2},1024)],10,["onClick"]))),256))])],512)],6)));var me=i("8093"),_e=Object(n["i"])({name:"ProjectViewerDesktop",components:{ProjectGalleryMobile:le,ToggleTable:ce,Gallery:K["a"],Exhibition:z},props:{data:{type:Object,required:!0},stringProjectId:{type:String,required:!0},key:{type:String},index:{required:!0,type:Object}},mounted:function(){var e=this;this.$nextTick((function(){e.updateTitleWidth(),e.upadteLeftSpaceData(),e.upadateRightSpaceData(),e.updateStoredWidthProjectOpen(),e.updateStoredProjectOpenTitleWidth(),window.addEventListener("resize",e.updateTitleWidth)}))},beforeUnmount:function(){window.removeEventListener("resize",this.updateTitleWidth)},methods:{closeProject:function(e){e.stopImmediatePropagation(),this.store.commit("updateIdOfOpenedProject",null),this.store.commit("updateIndexOfOpenProject",null)},projectClicked:function(e){this.thisIsOpen?this.closeProject(e):(console.log("click"),this.store.commit("updateIdOfOpenedProject",this.stringProjectId),this.store.commit("updateIndexOfOpenProject",{dateIndex:this.$props.index.dateIndex,projectIndex:this.$props.index.projectIndex,itemIndex:0}))},projectTabClicked:function(e){var t=this.isActiveTab(e)?0:e;this.store.commit("updateIndexOfOpenProject",{dateIndex:this.$props.index.dateIndex,projectIndex:this.$props.index.projectIndex,itemIndex:t})},updateTitleWidth:function(){this.titleWidth=this.$refs.title.getBoundingClientRect().width,this.titleStyle.width=this.titleWidth+"px"},upadteLeftSpaceData:function(){var e=this.$el,t=e.previousElementSibling;if(t instanceof HTMLElement&&t.classList.contains("v-view-projects__year")){var i=function(){var e,i,n;return(null===(e=t.parentNode)||void 0===e?void 0:e.previousSibling)instanceof HTMLElement&&null!==(n=null===(i=t.parentNode.previousSibling.lastElementChild)||void 0===i?void 0:i.getBoundingClientRect().width)&&void 0!==n?n:0}();this.space.left=t.getBoundingClientRect().width+i}else t instanceof HTMLElement?this.space.left=t.getBoundingClientRect().width:this.space.left=0},upadateRightSpaceData:function(){var e=this.$el,t=e.nextElementSibling;if(null===t){var i=function(){var t,i,n;return(null===(t=e.parentNode)||void 0===t?void 0:t.nextSibling)instanceof HTMLElement&&null!==(n=null===(i=e.parentNode.nextSibling.firstElementChild)||void 0===i?void 0:i.getBoundingClientRect().width)&&void 0!==n?n:0}(),n=function(){var t,i,n,o;return(null===(t=e.parentNode)||void 0===t?void 0:t.nextSibling)instanceof HTMLElement&&null!==(o=null===(n=null===(i=e.parentNode.nextSibling.firstElementChild)||void 0===i?void 0:i.nextElementSibling)||void 0===n?void 0:n.getBoundingClientRect().width)&&void 0!==o?o:0}();this.space.right=i+n}else t instanceof HTMLElement?this.space.right=t.getBoundingClientRect().width:this.space.right=0},updateStoredWidthProjectOpen:function(){this.thisIsOpen&&this.store.commit("updateWidthOfProjectOpen",window.innerWidth-this.space.left-this.space.right)},updateStoredProjectOpenTitleWidth:function(){this.thisIsOpen&&this.store.commit("updateTitleWidthOfProjectOpen",this.titleWidth)},isActiveTab:function(e){var t;return(null===(t=this.store.state.indexOfOpenProject)||void 0===t?void 0:t.itemIndex)===e}},data:function(){return{store:Object(Y["b"])(J["b"]),titleWidth:0,titleStyle:{width:"0px"},space:{left:0,right:0}}},computed:{style:function(){return{width:0!==this.store.state.widthOfProjectOpen&&this.thisIsOpen?this.store.state.widthOfProjectOpen+"px":""}},exhibitions:function(){return this.data.exhibition_links||[]},images:function(){var e=[];if(this.data.images)for(var t=0,i=this.data.images;t<i.length;t++){var n=i[t];e.push({image:n})}if(this.data.Vimeo)for(var o=0,r=this.data.Vimeo;o<r.length;o++){var c=r[o];e.push({image:{},vimeo:c})}return e},thisIsOpen:function(){return this.stringProjectId===this.store.state.idOfOpenedProject},isActive:function(){var e,t=this;if(this.data.tags){var i=this.store.state.activatedTags.every((function(e,i,n){for(var o=0,r=t.data.tags;o<r.length;o++){var c=r[o];if(c.tags===e)return!0}return!1})),n=!this.store.state.activatedSecondaryTag||this.store.state.activatedSecondaryTag===(null===(e=this.data.second_tag)||void 0===e?void 0:e.value);return i&&n}return!0},projectsSortedInArray:function(){return this.store.getters.projectsSortedInArray},lengthOfItemProject:function(){return this.store.getters.projectsSortedInArray[this.$props.index.dateIndex][this.$props.index.projectIndex].length}},watch:{thisIsOpen:function(){var e=this;this.thisIsOpen?window.setTimeout((function(){e.upadteLeftSpaceData(),e.upadateRightSpaceData(),e.updateStoredWidthProjectOpen(),e.updateStoredProjectOpenTitleWidth(),Object(me["a"])({durationTime:.25,startingScrollPosition:document.getElementsByClassName("v-view-projects")[0].scrollLeft,valueToAddedOnScroll:e.$refs.container.getBoundingClientRect().left-e.space.left,elementToScroll:document.getElementsByClassName("v-view-projects")[0]}),e.store.commit("updateLeftPositionOfProjectItem",e.$el.offsetLeft)}),50):(this.updateStoredWidthProjectOpen(),this.updateStoredProjectOpenTitleWidth())}}});i("20c7");_e.render=ge,_e.__scopeId="data-v-4d41b92c";var xe=_e,ye=Object(n["i"])({name:"ViewProjects",components:{Gallery:K["a"],ProjectViewerDesktop:xe,ProjectGalleryMobile:le,Project:je},data:function(){return{store:Object(Y["b"])(J["b"])}},mounted:function(){window.addEventListener("keydown",this.keydownAction)},beforeUnmount:function(){window.removeEventListener("keydown",this.keydownAction)},methods:{keydownAction:function(e){"ArrowRight"===e.code?(e.preventDefault(),this.nextProjectItem()):"ArrowLeft"===e.code?(e.preventDefault(),this.beforeProjectItem()):"ArrowUp"===e.code?(e.preventDefault(),this.nextProject()):"ArrowDown"===e.code&&(e.preventDefault(),this.beforeProject())},nextProjectItem:function(){if(null!==this.store.state.indexOfOpenProject){var e=this.store.state.indexOfOpenProject.dateIndex,t=this.store.state.indexOfOpenProject.projectIndex,i=this.store.state.indexOfOpenProject.itemIndex,n=this.store.getters.projectsSortedInArray[e],o=n[t],r=(o[i],e+1>=this.store.getters.projectsSortedInArray.length),c=t+1>=n.length,s=i+1>=o.length,a=function(){return s&&c&&!r?e+1:e}(),d=function(){return s&&c&&!r?0:s&&!c?t+1:t}(),l=function(){return s&&c&&!r||s&&!c?0:s?i:i+1}();this.store.commit("updateIndexOfOpenProject",{dateIndex:a,projectIndex:d,itemIndex:l})}else this.store.commit("updateIndexOfOpenProject",{dateIndex:0,projectIndex:0,itemIndex:0})},nextProject:function(){if(null!==this.store.state.indexOfOpenProject){var e=this.store.state.indexOfOpenProject.dateIndex,t=this.store.state.indexOfOpenProject.projectIndex,i=this.store.state.indexOfOpenProject.itemIndex,n=this.store.getters.projectsSortedInArray[e],o=n[t],r=(o[i],e+1>=this.store.getters.projectsSortedInArray.length),c=t+1>=n.length,s=(o.length,function(){return c&&!r?e+1:e}()),a=function(){return c&&!r?0:c?t:t+1}();this.store.commit("updateIndexOfOpenProject",{dateIndex:s,projectIndex:a,itemIndex:0})}else this.store.commit("updateIndexOfOpenProject",{dateIndex:0,projectIndex:0,itemIndex:0})},beforeProjectItem:function(){var e=this;if(null!==this.store.state.indexOfOpenProject){var t=this.store.state.indexOfOpenProject.dateIndex,i=this.store.state.indexOfOpenProject.projectIndex,n=this.store.state.indexOfOpenProject.itemIndex,o=this.store.getters.projectsSortedInArray[t],r=o[i],c=(r[n],0===t),s=0===i,a=0===n,d=function(){return a&&s&&!c?t-1:t}(),l=function(){return a&&s&&!c?e.store.getters.projectsSortedInArray[d].length-1:a&&!s?i-1:i}(),b=function(){return a&&s&&!c||a&&!s?e.store.getters.projectsSortedInArray[d][l].length-1:a?n:n-1}();this.store.commit("updateIndexOfOpenProject",{dateIndex:d,projectIndex:l,itemIndex:b})}else this.store.commit("updateIndexOfOpenProject",{dateIndex:0,projectIndex:0,itemIndex:0})},beforeProject:function(){var e=this;if(null!==this.store.state.indexOfOpenProject){var t=this.store.state.indexOfOpenProject.dateIndex,i=this.store.state.indexOfOpenProject.projectIndex,n=this.store.state.indexOfOpenProject.itemIndex,o=this.store.getters.projectsSortedInArray[t],r=o[i],c=(r[n],0===t),s=0===i,a=function(){return s&&!c?t-1:t}(),d=function(){return s&&!c?e.store.getters.projectsSortedInArray[a].length-1:s?i:i-1}();this.store.commit("updateIndexOfOpenProject",{dateIndex:a,projectIndex:d,itemIndex:0})}else this.store.commit("updateIndexOfOpenProject",{dateIndex:0,projectIndex:0,itemIndex:0})}},computed:{isMobileWidth:function(){return this.store.state.isMobileWidth},isDeskWidth:function(){return this.store.state.isDeskWidth},projectContentViewerStyle:function(){return{left:this.store.getters.transformDataOfDesktopItemProjectViewer.left+"px",width:this.store.getters.transformDataOfDesktopItemProjectViewer.width+"px"}},styleIntroContent:function(){return{width:this.store.getters.transformDataOfDesktopItemProjectViewer.width+"px"}},sortedProjects:function(){return this.store.state.sortedProject},currentProjectItem:function(){if(null===this.store.state.indexOfOpenProject)return null;var e=this.store.state.indexOfOpenProject.dateIndex,t=this.store.state.indexOfOpenProject.projectIndex,i=this.store.state.indexOfOpenProject.itemIndex;return this.store.getters.projectsSortedInArray[e][t][i]},projects__viewer__contentImageStyle:function(){if(this.store.getters.sizeOfFirstProjectImage&&this.$refs.projectViewer instanceof HTMLElement){var e=this.store.getters.sizeOfFirstProjectImage.height/this.store.getters.sizeOfFirstProjectImage.width*100,t=this.store.getters.transformDataOfDesktopItemProjectViewer.width,i=t*e/100,n=this.$refs.projectViewer.getBoundingClientRect().height;return i>n&&(t=n/e*100),{forContainer:{width:t+"px"},forChildren:{paddingTop:e+"%"}}}return{}}}});i("0699"),i("c086");ye.render=S,ye.__scopeId="data-v-ae7aae8c";t["default"]=ye},"7bb9":function(e,t,i){"use strict";i.r(t);var n=i("7a23");const o=Object(n["F"])("data-v-3f9f5b66");Object(n["t"])("data-v-3f9f5b66");const r={class:"v-view-about"},c={class:"v-view-about__table-content"},s={class:"v-view-about__table-content__img"},a={class:"v-view-about__table-content"},d={class:"v-view-about__table-content__text"},l={class:"v-view-about__table-content__item"},b={class:"v-view-about__table-content"},u={class:"v-view-about__table-content__text"},j={class:"v-view-about__table-content__item"},h=Object(n["h"])("br",null,null,-1),p=Object(n["h"])("br",null,null,-1),O={class:"v-view-about__table-content"},f={class:"v-view-about__table-content__img"};Object(n["r"])();const v=o((e,t,i,v,g,m)=>{const _=Object(n["y"])("toggle-table-fixed");return Object(n["q"])(),Object(n["e"])("section",r,[e.about?(Object(n["q"])(),Object(n["e"])(_,{key:0,"is-open":e.getThisTableIsOpen(0),index:0,"index-of-open-tab":e.indexOfToggleTableOpen,ref:"firstTable",onMounted:e.firstTableMounted,onToggled:t[1]||(t[1]=t=>e.tableToggled(0,t)),title:"About","has-body-container-padding-bottom":!1},{default:o(()=>[Object(n["h"])("div",c,[Object(n["h"])("div",{class:"v-view-about__table-content__text",innerHTML:e.about.description},null,8,["innerHTML"]),Object(n["h"])("div",s,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.about.images,t=>(Object(n["q"])(),Object(n["e"])("img",{src:e.formatUrl(t.url),alt:""},null,8,["src"]))),256))])])]),_:1},8,["is-open","index-of-open-tab","onMounted"])):Object(n["f"])("",!0),e.theyWorkWithUs?(Object(n["q"])(),Object(n["e"])(_,{key:1,"is-open":e.getThisTableIsOpen(1),index:1,"index-of-open-tab":e.indexOfToggleTableOpen,onToggled:t[2]||(t[2]=t=>e.tableToggled(1,t)),title:"They Work With Us","has-body-container-padding-bottom":!1},{default:o(()=>[Object(n["h"])("div",a,[Object(n["h"])("div",d,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.theyWorkWithUs.partner,e=>(Object(n["q"])(),Object(n["e"])("div",l,[Object(n["h"])("a",{href:e.url,target:"_blank"},Object(n["B"])(e.name),9,["href"])]))),256))])])]),_:1},8,["is-open","index-of-open-tab"])):Object(n["f"])("",!0),e.exhibitionsAndAwards?(Object(n["q"])(),Object(n["e"])(_,{key:2,"is-open":e.getThisTableIsOpen(2),index:2,"index-of-open-tab":e.indexOfToggleTableOpen,onToggled:t[3]||(t[3]=t=>e.tableToggled(2,t)),title:"Exhibitions and Awards","has-body-container-padding-bottom":!1},{default:o(()=>[Object(n["h"])("div",b,[Object(n["h"])("div",u,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.exhibitionsAndAwards.events,e=>(Object(n["q"])(),Object(n["e"])("div",j,[e.link?(Object(n["q"])(),Object(n["e"])("a",{key:0,href:e.link,target:"_blank"},[Object(n["g"])(" — "+Object(n["B"])(e.name)+" "+Object(n["B"])(e.date)+" ",1),h,Object(n["g"])(Object(n["B"])(e.location),1)],8,["href"])):(Object(n["q"])(),Object(n["e"])(n["a"],{key:1},[Object(n["g"])(" — "+Object(n["B"])(e.name)+" "+Object(n["B"])(e.date)+" ",1),p,Object(n["g"])(Object(n["B"])(e.location),1)],64))]))),256))])])]),_:1},8,["is-open","index-of-open-tab"])):Object(n["f"])("",!0),e.manifesto?(Object(n["q"])(),Object(n["e"])(_,{key:3,"is-open":e.getThisTableIsOpen(3),index:3,"index-of-open-tab":e.indexOfToggleTableOpen,onToggled:t[4]||(t[4]=t=>e.tableToggled(3,t)),isGreen:!0,title:"Manifesto","has-body-container-padding-bottom":!1},{default:o(()=>[Object(n["h"])("div",O,[Object(n["h"])("div",{class:"v-view-about__table-content__text",innerHTML:e.manifesto.description},null,8,["innerHTML"]),Object(n["h"])("div",f,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.manifesto.images,t=>(Object(n["q"])(),Object(n["e"])("img",{src:e.formatUrl(t.url),alt:""},null,8,["src"]))),256))])])]),_:1},8,["is-open","index-of-open-tab"])):Object(n["f"])("",!0)])});var g=i("5502"),m=i("0613"),_=i("79f6");const x=Object(n["F"])("data-v-250fe439");Object(n["t"])("data-v-250fe439");const y={key:0,class:"v-toggle-table-fixed__title"},I={class:"v-toggle-table-fixed__toggle"},w=Object(n["g"])("✗"),T=Object(n["g"])("↗"),P={class:"v-toggle-table-fixed__body"},k={class:"v-toggle-table-fixed__body__container",ref:"container"};Object(n["r"])();const q=x((e,t,i,o,r,c)=>(Object(n["q"])(),Object(n["e"])("div",{class:["v-toggle-table-fixed",{"is-open":e.isOpen,"is-dark":e.isDark,"is-green":e.isGreen,"has-title":e.hasTitle,"has-body-container-padding-bottom":e.hasBodyContainerPaddingBottom}],style:{transform:e.fixedComputedPosition}},[Object(n["h"])("div",{onClick:t[1]||(t[1]=(...t)=>e.toggled&&e.toggled(...t)),class:"v-toggle-table-fixed__header",ref:"headerContainer"},[e.hasTitle?(Object(n["q"])(),Object(n["e"])("div",y,Object(n["B"])(e.title),1)):Object(n["f"])("",!0),Object(n["h"])("div",I,[e.isOpen&&e.hasCloseUi&&!e.hasTitle?(Object(n["q"])(),Object(n["e"])(n["a"],{key:0},[w],64)):e.isOpen||e.hasTitle?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])(n["a"],{key:1},[T],64))])],512),Object(n["h"])("div",P,[Object(n["h"])("div",k,[Object(n["x"])(e.$slots,"default")],512)])],6)));var S=Object(n["i"])({emits:["toggled","mounted"],name:"ToggleTableFixed",mounted:function(){var e=this;this.$nextTick((function(){e.$emit("mounted")}))},props:{index:{type:Number,required:!0},indexOfOpenTab:{type:Number,required:!0},hasCloseUi:{type:Boolean,required:!1,default:function(){return!0}},isOpen:{type:Boolean,required:!0},isDark:{type:Boolean,required:!1,default:function(){return!1}},isGreen:{type:Boolean,required:!1,default:function(){return!1}},title:{type:String,required:!1,default:function(){return""}},hasBodyContainerPaddingBottom:{type:Boolean,required:!1,default:function(){return!0}}},computed:{hasTitle:function(){return this.title.length>0},fixedComputedPosition:function(){var e=65,t=70,i=t*(4-this.index)+e,n=70,o=n*(4-this.index);return this.store.state.isDeskWidth?this.index>this.indexOfOpenTab?"translate( calc( 100% - "+o+"px), 0 )":"translate( "+this.index*n+"px, 0 )":this.index>this.indexOfOpenTab?"translate(0, calc( 100% - "+i+"px) )":"translate(0, "+this.index*t+"px)"}},data:function(){return{store:Object(g["b"])(m["b"])}},methods:{toggled:function(){var e=this.$refs.headerContainer.getBoundingClientRect().height,t=this.$refs.container.getBoundingClientRect().height;this.$emit("toggled",e+t)}}});i("1b8b");S.render=q,S.__scopeId="data-v-250fe439";var C=S,B=Object(n["i"])({name:"ViewAbout",components:{ToggleTableFixed:C},data:function(){return{store:Object(g["b"])(m["b"])}},methods:{firstTableMounted:function(){},getThisTableIsOpen:function(e){return this.store.state.indexOfOpenAboutTab===e},tableToggled:function(e,t){this.store.commit("updateIndexOfOpenAboutTab",e)},formatUrl:function(e){return""+_["c"]+e}},computed:{about:function(){return this.store.state.about},theyWorkWithUs:function(){return this.store.state.theyWorkWithUs},exhibitionsAndAwards:function(){return this.store.state.award},manifesto:function(){return this.store.state.manifesto},indexOfToggleTableOpen:function(){return this.store.state.indexOfOpenAboutTab}}});i("e10b");B.render=v,B.__scopeId="data-v-3f9f5b66";t["default"]=B},8093:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("bd37");function o(e){var t=e.durationTime,i=e.startingScrollPosition,o=e.valueToAddedOnScroll,r=e.elementToScroll,c=60,s=c*t,a=0;function d(){var e=Object(n["a"])({time:a,duration:s,startValue:i,addedValue:o});r.scroll({top:0,left:e}),a++,a<=s&&requestAnimationFrame((function(){d()}))}d()}},"8da8":function(e,t,i){},"913f":function(e,t,i){"use strict";i("8da8")},"92f9":function(e,t,i){"use strict";i("99e9")},9546:function(e,t,i){},"954c":function(e,t,i){},"98da":function(e,t,i){"use strict";i("d0e7")},"99e9":function(e,t,i){},"9a4e":function(e,t,i){e.exports=i.p+"img/nav_bottom.9e5b696b.svg"},a306:function(e,t,i){e.exports=i.p+"img/nav_left.f24f8793.svg"},bd37:function(e,t,i){"use strict";function n(e){var t=e.time,i=e.startValue,n=e.addedValue,o=e.duration;return n*t/o+i}i.d(t,"a",(function(){return n}))},c086:function(e,t,i){"use strict";i("5bd5")},c738:function(e,t,i){},d0e7:function(e,t,i){},d919:function(e,t,i){e.exports=i.p+"img/nav_top.186c8696.svg"},e10b:function(e,t,i){"use strict";i("6389")},e4ee:function(e,t,i){}}]);
//# sourceMappingURL=ViewProjects.8b1b817e.js.map