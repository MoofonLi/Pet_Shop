import{V as L,a as P}from"./VRow-74285eca.js";import{V as b,u as ae,m as He,a as ke,b as Me,c as Se}from"./VBtn-92a30428.js";import{p as M,a as X,g as S,b as ne,t as D,s as $,d as f,c as a,f as k,J as Ie,C as V,D as C,E as l,F as _,K as T,L as H,M as Y,G as I,N as se,u as Ae,O as ie,r as N,w as W,x as Pe,P as le,Q as Te,R as Ge,j as Ye,o as We,m as R,v as $e,S as Re,y as je,_ as Ee,H as G,U as Ue,V as Le,W as Ne,e as Xe}from"./index-b47d2a03.js";import{b as ue,m as E,c as re,d as ce,a as F,e as de,f as fe,g as me,h as ve,j as Fe,u as A,V as qe,k as ze,M as pe,l as Oe,n as Je,i as U}from"./index-59a79b5b.js";import{m as he,u as ge}from"./layout-fd9c9184.js";import{m as Ke,V as j,b as J,d as K,c as Q}from"./VCard-0df7e1f4.js";import{m as Qe,u as Ze}from"./lazy-2074a816.js";import{u as xe,V as et}from"./VMain-0f4f8a3d.js";import{V as Z}from"./VContainer-5214e4d2.js";import{V as ee}from"./VCardActions-0d7e2a22.js";/* empty css              */const tt=M({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ue(),...E(),...re(),...he(),...ce(),...F({tag:"footer"}),...X()},"VFooter"),ot=S()({name:"VFooter",props:tt(),setup(e,n){let{slots:t}=n;const{themeClasses:o}=ne(e),{backgroundColorClasses:i,backgroundColorStyles:u}=de(D(e,"color")),{borderClasses:s}=fe(e),{elevationClasses:r}=me(e),{roundedClasses:c}=ve(e),d=$(32),{resizeRef:w}=Fe(y=>{y.length&&(d.value=y[0].target.clientHeight)}),m=f(()=>e.height==="auto"?d.value:parseInt(e.height,10)),{layoutItemStyles:v}=ge({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:m,elementSize:f(()=>e.height==="auto"?void 0:m.value),active:f(()=>e.app),absolute:D(e,"absolute")});return A(()=>a(e.tag,{ref:w,class:["v-footer",o.value,i.value,s.value,r.value,c.value,e.class],style:[u.value,e.app?v.value:{height:k(e.height)},e.style]},t)),{}}}),at=I("strong",null,"版權屬於小明寵物店",-1),nt={__name:"Footer",setup(e){const n=Ie([{icon:"mdi-facebook",link:"https://www.facebook.com/"},{icon:"mdi-twitter",link:"https://twitter.com/"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/"},{icon:"mdi-instagram",link:"https://www.instagram.com/"}]);return(t,o)=>(V(),C(ot,{rounded:"",class:"bg-grey-lighten-1"},{default:l(()=>[a(L,{justify:"center","no-gutters":""},{default:l(()=>[a(b,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/index"},{default:l(()=>[_("Home")]),_:1}),a(b,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/resume"},{default:l(()=>[_("Resume")]),_:1}),a(b,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/about"},{default:l(()=>[_("About Me")]),_:1}),a(b,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/contact"},{default:l(()=>[_("Contact Me")]),_:1}),a(P,{class:"text-center mt-4",cols:"12"},{default:l(()=>[(V(!0),T(H,null,Y(n,i=>(V(),C(b,{key:i,class:"mx-4",icon:i.icon,href:i.link,variant:"text"},null,8,["icon","href"]))),128))]),_:1}),a(P,{class:"text-center mt-4",cols:"12"},{default:l(()=>[at]),_:1})]),_:1})]),_:1}))}};const st=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:i}=e,u=.5,s=16;e.offsetX=t-n,e.offsetY=i-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<o-s&&e.up(e),e.down&&i>o+s&&e.down(e))};function it(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function lt(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),st(n)}function ut(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>it(t,n),touchend:t=>lt(t,n),touchmove:t=>ut(t,n)}}function ct(e,n){var r;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(r=n.instance)==null?void 0:r.$.uid;if(!o||!u)return;const s=rt(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=s,se(s).forEach(c=>{o.addEventListener(c,s[c],i)})}function dt(e,n){var u,s;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const i=t._touchHandlers[o];se(i).forEach(r=>{t.removeEventListener(r,i[r])}),delete t._touchHandlers[o]}const _e={mounted:ct,unmounted:dt},ft=_e,be=Symbol.for("vuetify:v-window"),we=Symbol.for("vuetify:v-window-group"),ye=M({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...E(),...F(),...X()},"VWindow"),te=S()({name:"VWindow",directives:{Touch:_e},props:ye(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=ne(e),{isRtl:i}=Ae(),{t:u}=ie(),s=ae(e,we),r=N(),c=f(()=>i.value?!e.reverse:e.reverse),d=$(!1),w=f(()=>{const g=e.direction==="vertical"?"y":"x",B=(c.value?!d.value:d.value)?"-reverse":"";return`v-window-${g}${B}-transition`}),m=$(0),v=N(void 0),y=f(()=>s.items.value.findIndex(g=>s.selected.value.includes(g.id)));W(y,(g,x)=>{const B=s.items.value.length,O=B-1;B<=2?d.value=g<x:g===O&&x===0?d.value=!0:g===0&&x===O?d.value=!1:d.value=g<x}),Pe(be,{transition:w,isReversed:d,transitionCount:m,transitionHeight:v,rootRef:r});const h=f(()=>e.continuous||y.value!==0),q=f(()=>e.continuous||y.value!==s.items.value.length-1);function z(){h.value&&s.prev()}function p(){q.value&&s.next()}const De=f(()=>{const g=[],x={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};g.push(h.value?t.prev?t.prev({props:x}):a(b,x,null):a("div",null,null));const B={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return g.push(q.value?t.next?t.next({props:B}):a(b,B,null):a("div",null,null)),g}),Ce=f(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?z():p()},right:()=>{c.value?p():z()},start:x=>{let{originalEvent:B}=x;B.stopPropagation()}},...e.touch===!0?{}:e.touch});return A(()=>le(a(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var g,x;return[a("div",{class:"v-window__container",style:{height:v.value}},[(g=t.default)==null?void 0:g.call(t,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[De.value])]),(x=t.additional)==null?void 0:x.call(t,{group:s})]}}),[[Te("touch"),Ce.value]])),{group:s}}}),mt=M({color:String,cycle:Boolean,delimiterIcon:{type:Ge,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ye({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),vt=S()({name:"VCarousel",props:mt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=Ye(e,"modelValue"),{t:i}=ie(),u=N();let s=-1;W(o,c),W(()=>e.interval,c),W(()=>e.cycle,d=>{d?c():window.clearTimeout(s)}),We(r);function r(){!e.cycle||!u.value||(s=window.setTimeout(u.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(s),window.requestAnimationFrame(r)}return A(()=>{const d=te.filterProps(e);return a(te,R({ref:u},d,{modelValue:o.value,"onUpdate:modelValue":w=>o.value=w,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:k(e.height)},e.style]}),{default:t.default,additional:w=>{let{group:m}=w;return a(H,null,[!e.hideDelimiters&&a("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&a(qe,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((v,y)=>{const h={id:`carousel-item-${v.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",y+1,m.items.value.length),class:["v-carousel__controls__item",m.isSelected(v.id)&&"v-btn--active"],onClick:()=>m.select(v.id,!0)};return t.item?t.item({props:h,item:v}):a(b,R(v,h),null)})]})]),e.progress&&a(ze,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(o.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Ve=M({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...E(),...He(),...Qe()},"VWindowItem"),oe=S()({name:"VWindowItem",directives:{Touch:ft},props:Ve(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=$e(be),i=ke(e,we),{isBooted:u}=xe();if(!o||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=$(!1),r=f(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function d(){var h;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=k((h=o.rootRef.value)==null?void 0:h.clientHeight)),o.transitionCount.value+=1)}function w(){c()}function m(h){s.value&&je(()=>{!r.value||!s.value||!o||(o.transitionHeight.value=k(h.clientHeight))})}const v=f(()=>{const h=o.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof h!="string"?o.transition.value:h,onBeforeEnter:d,onAfterEnter:c,onEnterCancelled:w,onBeforeLeave:d,onAfterLeave:c,onLeaveCancelled:w,onEnter:m}:!1}),{hasContent:y}=Ze(e,i.isSelected);return A(()=>a(pe,{transition:v.value,disabled:!u.value},{default:()=>{var h;return[le(a("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[y.value&&((h=t.default)==null?void 0:h.call(t))]),[[Re,i.isSelected.value]])]}})),{groupItem:i}}}),ht=M({...Ke(),...Ve()},"VCarouselItem"),gt=S()({name:"VCarouselItem",inheritAttrs:!1,props:ht(),setup(e,n){let{slots:t,attrs:o}=n;A(()=>{const i=j.filterProps(e),u=oe.filterProps(e);return a(oe,R({class:"v-carousel-item"},u),{default:()=>[a(j,R(o,i),t)]})})}}),xt={data(){return{petServices:[{name:"寵物美容",description:"專業的寵物美容服務，讓您的寵物看起來更加美麗和健康。",imageUrl:"https://d3nb97lilvchvx.cloudfront.net/category_page/pet_grooming.jpg"},{name:"寵物健康檢查",description:"定期的健康檢查，確保您的寵物身體狀況良好。",imageUrl:"https://pet-care.event2.tw/Content/upload/News/294a344a-540d-4802-b2f6-cc0f1953866e.jpg"},{name:"寵物培訓",description:"訓練您的寵物成為良好的伴侶，學習基本指令和行為。",imageUrl:"https://images.unsplash.com/photo-1658314756284-7a83b8729efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}],carouselItems:[{imageUrl:"https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"},{imageUrl:"https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"},{imageUrl:"https://images.unsplash.com/photo-1531884070720-875c7622d4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"},{imageUrl:"https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80"},{imageUrl:"https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},{imageUrl:"https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},{imageUrl:"https://images.unsplash.com/photo-1625794084867-8ddd239946b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}],products:[{name:"寵物食品",description:"新鮮美味的寵物食品，讓您的寵物健康快樂。",imageUrl:"https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"},{name:"寵物玩具",description:"各種有趣的寵物玩具，提供娛樂和活力。",imageUrl:"https://images.unsplash.com/photo-1585837575652-267c041d77d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80"},{name:"寵物用品",description:"多種寵物用品，滿足您寵物的所有需求。",imageUrl:"https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80"}]}}},Be=e=>(Ue("data-v-710365d4"),e=e(),Le(),e),_t=Be(()=>I("h2",null,"寵物服務",-1)),bt=Be(()=>I("h2",null,"精選商品",-1));function wt(e,n,t,o,i,u){return V(),C(et,{class:"pt-0"},{default:l(()=>[a(vt,{height:"700"},{default:l(()=>[(V(!0),T(H,null,Y(i.carouselItems,(s,r)=>(V(),C(gt,{cover:"",src:s.imageUrl,key:r},null,8,["src"]))),128))]),_:1}),a(Z,null,{default:l(()=>[_t,a(L,null,{default:l(()=>[(V(!0),T(H,null,Y(i.petServices,(s,r)=>(V(),C(P,{key:r,cols:"12",md:"4"},{default:l(()=>[a(J,{height:"380"},{default:l(()=>[a(j,{cover:"",src:s.imageUrl,height:"200"},null,8,["src"]),a(K,null,{default:l(()=>[_(G(s.name),1)]),_:2},1024),a(Q,null,{default:l(()=>[_(G(s.description),1)]),_:2},1024),a(ee,null,{default:l(()=>[a(b,{color:"primary"},{default:l(()=>[_("了解更多")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),a(Z,null,{default:l(()=>[a(L,null,{default:l(()=>[a(P,{cols:"12"},{default:l(()=>[bt]),_:1}),(V(!0),T(H,null,Y(i.products,(s,r)=>(V(),C(P,{key:r,cols:"12",md:"4"},{default:l(()=>[a(J,{height:"350"},{default:l(()=>[a(j,{cover:"",src:s.imageUrl,height:"200"},null,8,["src"]),a(K,null,{default:l(()=>[_(G(s.name),1)]),_:2},1024),a(Q,null,{default:l(()=>[_(G(s.description),1)]),_:2},1024),a(ee,null,{default:l(()=>[a(b,{color:"primary"},{default:l(()=>[_("購買")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}const yt=Ee(xt,[["render",wt],["__scopeId","data-v-710365d4"]]);const Vt=M({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...ue(),...E(),...Oe(),...re(),...ce(),...he({name:"bottom-navigation"}),...F({tag:"header"}),...Me({modelValue:!0,selectedClass:"v-btn--selected"}),...X()},"VBottomNavigation"),Bt=S()({name:"VBottomNavigation",props:Vt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=Ne(),{borderClasses:i}=fe(e),{backgroundColorClasses:u,backgroundColorStyles:s}=de(D(e,"bgColor")),{densityClasses:r}=Je(e),{elevationClasses:c}=me(e),{roundedClasses:d}=ve(e),{ssrBootStyles:w}=xe(),m=f(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),v=D(e,"active"),{layoutItemStyles:y}=ge({id:e.name,order:f(()=>parseInt(e.order,10)),position:f(()=>"bottom"),layoutSize:f(()=>v.value?m.value:0),elementSize:m,active:v,absolute:D(e,"absolute")});return ae(e,Se),Xe({VBtn:{color:D(e,"color"),density:D(e,"density"),stacked:f(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),A(()=>a(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":v.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},o.value,u.value,i.value,r.value,c.value,d.value,e.class],style:[s.value,y.value,{height:k(m.value),transform:`translateY(${k(v.value?0:100,"%")})`},w.value,e.style]},{default:()=>[t.default&&a("div",{class:"v-bottom-navigation__content"},[t.default()])]})),{}}}),Dt=I("span",null,"Recent",-1),Ct=I("span",null,"Favorites",-1),Ht=I("span",null,"Nearby",-1),Rt={__name:"Home",setup(e){return(n,t)=>(V(),T(H,null,[a(yt),a(Bt,{grow:""},{default:l(()=>[a(b,{value:"recent"},{default:l(()=>[a(U,null,{default:l(()=>[_("mdi-history")]),_:1}),Dt]),_:1}),a(b,{value:"favorites"},{default:l(()=>[a(U,null,{default:l(()=>[_("mdi-heart")]),_:1}),Ct]),_:1}),a(b,{value:"nearby"},{default:l(()=>[a(U,null,{default:l(()=>[_("mdi-map-marker")]),_:1}),Ht]),_:1})]),_:1}),a(nt)],64))}};export{Rt as default};
