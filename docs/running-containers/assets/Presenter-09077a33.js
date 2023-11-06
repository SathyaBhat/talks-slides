import{o as u,e as m,f as e,p as g,q as F,b as w,d as L,s as k,v as x,w as C,_ as A,x as I,y as R,c as M,a as U,z as N,A as E,B as j,C as q,D as O,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as i,t as oe,n as f,i as T,P as V,S as H,m as b,Q as ne,R as B,T as P,U as le,j as ae,V as $,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as ve,a2 as pe,a3 as he}from"./index-2cca318f.js";import{N as fe}from"./NoteDisplay-fbc331f0.js";import ge from"./DrawingControls-9d91e31d.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},we=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ye=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Se=[we,ye];function be(s,n){return u(),m("svg",xe,[...Se])}const $e={name:"carbon-zoom-out",render:be},ke={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ce=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Me=[Ce,ze];function Ne(s,n){return u(),m("svg",ke,[...Me])}const Te={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},He=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Be=[He];function Pe(s,n){return u(),m("svg",Ve,[...Be])}const Le={name:"carbon-renew",render:Pe},Ae={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},De=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),Fe=[De,Ze];function Ie(s,n){return u(),m("svg",Ae,[...Fe])}const Re={name:"carbon-time",render:Ie},Ue="/running-containers/assets/logo-title-horizontal-96c3c915.png";function Ee(){const s=g(Date.now()),n=F({interval:1e3}),v=w(()=>{const l=(n.value-s.value)/1e3,r=Math.floor(l%60).toString().padStart(2,"0");return`${Math.floor(l/60).toString().padStart(2,"0")}:${r}`});function p(){s.value=n.value}return{timer:v,resetTimer:p}}const je=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(s){const n=s,v=w(()=>{var l,r,a;return(a=(r=(l=k.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.note}),p=w(()=>{var l,r,a;return(a=(r=(l=k.value)==null?void 0:l.meta)==null?void 0:r.slide)==null?void 0:a.noteHTML});return(l,r)=>(u(),x(fe,{class:C(n.class),note:v.value,"note-html":p.value},null,8,["class","note","note-html"]))}}),qe=A(je,[["__file","/Users/sathyajith.bhat/code/talks-slides/running-containers/slides/node_modules/@slidev/client/internals/NoteStatic.vue"]]),y=s=>(me("data-v-574fd206"),s=s(),ve(),s),Oe={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ge=y(()=>e("img",{src:Ue,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Je=y(()=>e("div",{class:"flex-auto"},null,-1)),Ke={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Qe=y(()=>e("div",{class:"context"}," current ",-1)),Xe=y(()=>e("div",{class:"context"}," next ",-1)),Ye={key:1,class:"grid-section note grid grid-rows-[1fr_min-content]"},et={class:"border-t border-main py-1 px-2 text-sm"},tt={class:"grid-section bottom"},st={class:"progress-bar"},ot=L({__name:"Presenter",setup(s){const n=g();I(),R(n);const v=M.titleTemplate.replace("%s",M.title||"Slidev");U({title:`Presenter - ${v}`}),g(!1);const{timer:p,resetTimer:l}=Ee(),r=g([]),a=w(()=>N.value<E.value?{route:k.value,clicks:N.value+1}:j.value?{route:q.value,clicks:0}:null);return O(),W(()=>{const z=n.value.querySelector("#slide-content"),o=G(J()),S=K();Q(()=>{if(!S.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),_=(o.x-d.left)/d.width*100,h=(o.y-d.top)/d.height*100;if(!(_<0||_>100||h<0||h>100))return{x:_,y:h}},d=>{X.cursor=d})}),(z,o)=>{const S=Re,d=Le,_=te("HiddenText"),h=Te,D=$e;return u(),m(ce,null,[e("div",Oe,[e("div",{class:C(["grid-container",`layout${t(se)}`])},[e("div",We,[Ge,Je,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:o[0]||(o[0]=(...c)=>t(l)&&t(l)(...c))},[i(S,{class:"absolute"}),i(d,{class:"absolute opacity-0"})]),e("div",Ke,oe(t(p)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:f(t(T))},[i(H,{key:"main",class:"h-full w-full"},{default:V(()=>[i(ue,{"render-context":"presenter"})]),_:1}),Qe],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:f(t(T))},[a.value?(u(),x(H,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[i(t(_e),{is:(c=a.value.route)==null?void 0:c.component,"clicks-elements":r.value,"onUpdate:clicksElements":o[1]||(o[1]=Z=>r.value=Z),clicks:a.value.clicks,"clicks-disabled":!1,class:C(t(de)(a.value.route)),route:a.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):b("v-if",!0),Xe],4),b(" Notes "),(u(),m("div",Ye,[(u(),x(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:f({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",et,[e("button",{class:"slidev-icon-btn",onClick:o[2]||(o[2]=(...c)=>t(B)&&t(B)(...c))},[i(_,{text:"Increase font size"}),i(h)]),e("button",{class:"slidev-icon-btn",onClick:o[3]||(o[3]=(...c)=>t(P)&&t(P)(...c))},[i(_,{text:"Decrease font size"}),i(D)]),b("v-if",!0)])])),e("div",tt,[i(pe,{persist:!0})]),(u(),x(ge,{key:2}))],2),e("div",st,[e("div",{class:"progress h-2px bg-primary transition-all",style:f({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),i(he),i(re,{modelValue:t($),"onUpdate:modelValue":o[5]||(o[5]=c=>ie($)?$.value=c:null)},null,8,["modelValue"])],64)}}});const it=A(ot,[["__scopeId","data-v-574fd206"],["__file","/Users/sathyajith.bhat/code/talks-slides/running-containers/slides/node_modules/@slidev/client/internals/Presenter.vue"]]);export{it as default};