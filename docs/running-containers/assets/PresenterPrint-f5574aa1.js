import{d,u as _,a as h,c as m,b as u,r as p,e as o,f as t,t as a,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as k,m as N,_ as P}from"./index-194c1344.js";import{N as w}from"./NoteDisplay-741367ff.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=u(()=>p.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(n(),o("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",L,[t("h1",S,a(r(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(n(!0),o(f,null,g(i.value,(e,c)=>(n(),o("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),o("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/Users/sathyajith.bhat/code/talks-slides/running-containers/slides/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
