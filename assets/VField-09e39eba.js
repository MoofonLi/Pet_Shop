import{p as P,a as q,g as B,c as a,O as ee,ai as le,j as ae,d as o,al as V,R as x,b as ne,u as te,q as ie,r as $,t as se,w as oe,P as re,S as de,L as ce,m as ue,f as fe,a6 as ve,ao as be}from"./index-b47d2a03.js";import{m as S,u as R,i as ge,I as me,d as ye,J as pe,h as Ce,e as Ie,H as he,L as ke}from"./index-59a79b5b.js";import{b as _e}from"./index-bc0a3d9e.js";import{n as Ve,a as Pe,s as Le}from"./forwardRefs-e658ad70.js";const Fe=P({text:String,clickable:Boolean,...S(),...q()},"VLabel"),xe=B()({name:"VLabel",props:Fe(),setup(e,t){let{slots:n}=t;return R(()=>{var r;return a("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(r=n.default)==null?void 0:r.call(n)])}),{}}}),$e=P({floating:Boolean,...S()},"VFieldLabel"),_=B()({name:"VFieldLabel",props:$e(),setup(e,t){let{slots:n}=t;return R(()=>a(xe,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}});function Be(e){const{t}=ee();function n(r){let{name:l}=r;const f={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[l],g=e[`onClick:${l}`],L=g&&f?t(`$vuetify.input.${f}`,e.label??""):void 0;return a(ge,{icon:e[`${l}Icon`],"aria-label":L,onClick:g},null)}return{InputIcon:n}}const Se=P({focused:Boolean,"onUpdate:focused":V()},"focus");function Re(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:le();const n=ae(e,"focused"),r=o(()=>({[`${t}--focused`]:n.value}));function l(){n.value=!0}function f(){n.value=!1}return{focusClasses:r,isFocused:n,focus:l,blur:f}}const Ae=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],we=P({appendInnerIcon:x,bgColor:String,clearable:Boolean,clearIcon:{type:x,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:x,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ae.includes(e)},"onClick:clear":V(),"onClick:appendInner":V(),"onClick:prependInner":V(),...S(),...me(),...ye(),...q()},"VField"),Te=B()({name:"VField",inheritAttrs:!1,props:{id:String,...Se(),...we()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:l}=t;const{themeClasses:f}=ne(e),{loaderClasses:g}=pe(e),{focusClasses:L,isFocused:A,focus:w,blur:T}=Re(e),{InputIcon:F}=Be(e),{roundedClasses:N}=Ce(e),{rtlClasses:W}=te(),m=o(()=>e.dirty||e.active),y=o(()=>!e.singleLine&&!!(e.label||l.label)),H=ie(),d=o(()=>e.id||`input-${H}`),J=o(()=>`${d.value}-messages`),E=$(),p=$(),O=$(),D=o(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:K,backgroundColorStyles:X}=Ie(se(e,"bgColor")),{textColorClasses:U,textColorStyles:M}=he(o(()=>e.error||e.disabled?void 0:m.value&&A.value?e.color:e.baseColor));oe(m,v=>{if(y.value){const s=E.value.$el,c=p.value.$el;requestAnimationFrame(()=>{const u=Ve(s),i=c.getBoundingClientRect(),I=i.x-u.x,h=i.y-u.y-(u.height/2-i.height/2),b=i.width/.75,k=Math.abs(b-u.width)>1?{maxWidth:fe(b)}:void 0,G=getComputedStyle(s),j=getComputedStyle(c),Q=parseFloat(G.transitionDuration)*1e3||150,Y=parseFloat(j.getPropertyValue("--v-field-label-scale")),Z=j.getPropertyValue("color");s.style.visibility="visible",c.style.visibility="hidden",Pe(s,{transform:`translate(${I}px, ${h}px) scale(${Y})`,color:Z,...k},{duration:Q,easing:Le,direction:v?"normal":"reverse"}).finished.then(()=>{s.style.removeProperty("visibility"),c.style.removeProperty("visibility")})})}},{flush:"post"});const C=o(()=>({isActive:m,isFocused:A,controlRef:O,blur:T,focus:w}));function z(v){v.target!==document.activeElement&&v.preventDefault()}return R(()=>{var I,h,b;const v=e.variant==="outlined",s=l["prepend-inner"]||e.prependInnerIcon,c=!!(e.clearable||l.clear),u=!!(l["append-inner"]||e.appendInnerIcon||c),i=()=>l.label?l.label({...C.value,label:e.label,props:{for:d.value}}):e.label;return a("div",ue({class:["v-field",{"v-field--active":m.value,"v-field--appended":u,"v-field--center-affix":e.centerAffix??!D.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":s,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!i(),[`v-field--variant-${e.variant}`]:!0},f.value,K.value,L.value,g.value,N.value,W.value,e.class],style:[X.value,e.style],onClick:z},n),[a("div",{class:"v-field__overlay"},null),a(ke,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:l.loader}),s&&a("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&a(F,{key:"prepend-icon",name:"prependInner"},null),(I=l["prepend-inner"])==null?void 0:I.call(l,C.value)]),a("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&a(_,{key:"floating-label",ref:p,class:[U.value],floating:!0,for:d.value,style:M.value},{default:()=>[i()]}),a(_,{ref:E,for:d.value},{default:()=>[i()]}),(h=l.default)==null?void 0:h.call(l,{...C.value,props:{id:d.value,class:"v-field__input","aria-describedby":J.value},focus:w,blur:T})]),c&&a(_e,{key:"clear"},{default:()=>[re(a("div",{class:"v-field__clearable",onMousedown:k=>{k.preventDefault(),k.stopPropagation()}},[l.clear?l.clear():a(F,{name:"clear"},null)]),[[de,e.dirty]])]}),u&&a("div",{key:"append",class:"v-field__append-inner"},[(b=l["append-inner"])==null?void 0:b.call(l,C.value),e.appendInnerIcon&&a(F,{key:"append-icon",name:"appendInner"},null)]),a("div",{class:["v-field__outline",U.value],style:M.value},[v&&a(ce,null,[a("div",{class:"v-field__outline__start"},null),y.value&&a("div",{class:"v-field__outline__notch"},[a(_,{ref:p,floating:!0,for:d.value},{default:()=>[i()]})]),a("div",{class:"v-field__outline__end"},null)]),D.value&&y.value&&a(_,{ref:p,floating:!0,for:d.value},{default:()=>[i()]})])])}),{controlRef:O}}});function Me(e){const t=Object.keys(Te.props).filter(n=>!ve(n)&&n!=="class"&&n!=="style");return be(e,t)}export{Te as V,we as a,xe as b,Be as c,Me as f,Se as m,Re as u};
