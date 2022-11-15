import{o as _,c as k,a as e,r as w,u as N,b as h,d as M,i as B,e as z,f as y,g as v,n as H,h as s,_ as P,j as A,k as I,l as $,m as R,p as D,q as L,s as j,t as E,w as F,v as u,x as U,y as b,z as C,A as V,B as W,C as q,D as x,E as O,F as Z,G,H as J,I as T,J as K,K as Q,L as X,M as Y,N as ee,O as se,P as te,Q as oe,R as ne,S as ae,T as le,U as ce,V as ie,W as re,X as ue}from"./index.9440019b.js";import{_ as _e}from"./DrawingControls.vue_vue_type_script_setup_true_lang.af8dc618.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(n,l){return _(),k("svg",de,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(n,l){return _(),k("svg",fe,we)}const ke={name:"carbon-time",render:ye},Se="/automated-failover-route53/assets/logo-title-horizontal.96c3c915.png";function $e(){const n=w(Date.now()),l=N({interval:1e3}),d=h(()=>{const t=(l.value-n.value)/1e3,a=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${a}`});function m(){n.value=l.value}return{timer:d,resetTimer:m}}const be=M({__name:"NoteStatic",props:{class:null},setup(n){const l=n;B(z);const d=h(()=>{var t,a,o;return(o=(a=(t=y.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.note}),m=h(()=>{var t,a,o;return(o=(a=(t=y.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.notesHTML});return(t,a)=>(_(),v(P,{class:H(l.class),note:s(d),"note-html":s(m)},null,8,["class","note","note-html"]))}}),f=n=>(G("data-v-63376833"),n=n(),J(),n),Ce={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:Se,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ne={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Pe=f(()=>e("div",{class:"context"}," next ",-1)),Ae={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},De=M({__name:"Presenter",setup(n){B(z);const l=w();A(),I(l);const d=$.titleTemplate.replace("%s",$.title||"Slidev");R({title:`Presenter - ${d}`});const{timer:m,resetTimer:t}=$e(),a=w([]),o=h(()=>T.value<K.value?{route:y.value,clicks:T.value+1}:Q.value?{route:X.value,clicks:0}:null);return D(()=>{const S=l.value.querySelector("#slide-content"),i=L(j()),g=E();F(()=>{if(!g.value||ee.value||!se.value)return;const r=S.getBoundingClientRect(),c=(i.x-r.left)/r.width*100,p=(i.y-r.top)/r.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},r=>{Y.cursor=r})}),(S,i)=>{const g=ke,r=he;return _(),k(Z,null,[e("div",Ce,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...c)=>s(t)&&s(t)(...c))},[u(g,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",ze,U(s(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:b(s(te))},[u(V,{key:"main",class:"h-full w-full"},{default:C(()=>[u(oe,{context:"presenter"})]),_:1}),He],4),e("div",Ne,[s(o)?(_(),v(V,{key:"next",class:"h-full w-full"},{default:C(()=>{var c;return[u(s(ae),{is:(c=s(o).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":i[1]||(i[1]=p=>a.value=p),clicks:s(o).clicks,"clicks-disabled":!1,class:H(s(ne)(s(o).route)),route:s(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):W("v-if",!0),Pe]),e("div",Ae,[(_(),v(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(le,{persist:!0})]),(_(),v(_e,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:b({width:`${(s(ce)-1)/(s(ie)-1)*100}%`})},null,4)])]),u(re),u(O,{modelValue:s(x),"onUpdate:modelValue":i[2]||(i[2]=c=>q(x)?x.value=c:null)},null,8,["modelValue"])],64)}}});const Ee=ue(De,[["__scopeId","data-v-63376833"]]);export{Ee as default};
