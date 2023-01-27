import{_ as m,r as g,c as v,o as s,a as o,w as k,v as P,b as l,F as b,d as S,e as $,t as p,f as y,g as C,m as B,h as T}from"./entry-c16d328d.mjs";const j={__name:"SearchBar",props:{trainingsList:{required:!0,type:Array}},emits:["search"],setup(i,{expose:n,emit:e}){n();const r=i,_=g([]),c=g(!1),t=g(""),a=v(()=>[...new Set(r.trainingsList.map(u=>u.tags).flat().sort())]),d=v(()=>t?a.value.filter(u=>u.match(new RegExp(t.value,"gi"))):[]),h={emit:e,props:r,filterTags:_,showSuggestions:c,text:t,trainingsTags:a,trainingsTagsMatching:d,updateSearchTerm:(u,x)=>{e("search",u),c.value=u?x:!1,t.value=u}};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}},F={class:"flex flex-col gap-2 relative"},L=l("label",{class:"text-slate-50",for:"search"},"Filter by any term",-1),z=["textContent"];function E(i,n,e,r,_,c){return s(),o("div",F,[L,k(l("input",{class:"block p-2 rounded-md w-full",id:"search",name:"search",placeholder:"Type here...",type:"text",onInput:n[0]||(n[0]=t=>r.updateSearchTerm(t.target.value,!0)),"onUpdate:modelValue":n[1]||(n[1]=t=>r.text=t)},null,544),[[P,r.text]]),r.showSuggestions?(s(),o("ul",{key:0,class:"absolute bg-slate-50 flex flex-col gap-1 p-0 top-full w-full z-10",onClick:n[2]||(n[2]=t=>r.updateSearchTerm(t.target.textContent,!1))},[(s(!0),o(b,null,S(r.trainingsTagsMatching,t=>(s(),o("li",{key:t,class:"cursor-pointer hover:bg-slate-200 p-2",textContent:p(t)},null,8,z))),128))])):$("",!0)])}var N=m(j,[["render",E]]);const O=y({__name:"TagFlag",props:{label:{required:!0,type:String}},setup(i,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),R=["textContent"];function U(i,n,e,r,_,c){return s(),o("span",{class:"bg-zinc-400 p-2 rounded text-zinc-900",textContent:p(e.label)},null,8,R)}var D=m(O,[["render",U]]);const J=y({__name:"Card",props:{author:null,date:null,description:null,image:null,recordingUrl:null,tags:null,title:null},setup(i,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),V={class:"bg-zinc-800 flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:outline hover:outline-2 hover:outline-blue-500 overflow-hidden relative rounded-lg text-slate-50"},M=["src"],q={class:"flex flex-col h-full justify-between p-6"},A={class:"text-2xl"},I=["href","textContent"],H={key:0,class:"text-lg"},W=["textContent"],G=["textContent"],K={role:"list",class:"flex gap-2 mt-8"};function Q(i,n,e,r,_,c){var a;const t=D;return s(),o("div",V,[l("img",{alt:"",class:"block w-full",src:e.image},null,8,M),l("div",q,[l("div",null,[l("h2",A,[l("a",{class:"after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0",href:e.recordingUrl,target:"_blank",textContent:p(e.title)},null,8,I)]),e.author?(s(),o("p",H,"by "+p(e.author),1)):$("",!0),l("small",{class:"text-sm",textContent:p(e.date)},null,8,W),l("p",{class:"mt-4 text-base whitespace-pre-line",textContent:p((a=e.description)==null?void 0:a.trim())},null,8,G)]),l("div",K,[(s(!0),o(b,null,S(e.tags,d=>(s(),C(t,{key:d,label:d,role:"listitem"},null,8,["label"]))),128))])])])}var X=m(J,[["render",Q]]);const Y=y({__name:"CardList",props:{cards:null},setup(i,{expose:n}){n();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),Z={class:"flex flex-wrap justify-center gap-8",role:"list"};function ee(i,n,e,r,_,c){const t=X;return s(),o("div",Z,[(s(!0),o(b,null,S(e.cards,a=>(s(),C(t,B({class:"w-96",key:a.title,role:"listitem"},a),null,16))),128))])}var te=m(Y,[["render",ee]]),f=[{author:"Renato DelPupo",date:"19/10/2021",description:`Topics:
 - Present JavaScript and general web development terms
 - Short explanation about each term
 - Examples of use`,image:"https://via.placeholder.com/320x180.png",recordingUrl:"#",tags:["JavaScript","Web"],title:"JavaScript Recall"},{author:"Renato DelPupo",date:"08/12/2021",description:`Topics:
 - How simple is create a Telegram bot
 - Bot Father, Telegram API
 - Telegraf package`,image:"https://via.placeholder.com/320x180.png",recordingUrl:"#",tags:["Bot","JavaScript","Node"],title:"Telegram Bot with Node.js"}];const ne={__name:"index",setup(i,{expose:n}){n();const e=g(""),r=v(()=>e.value?f==null?void 0:f.filter(t=>{const{author:a,description:d,tags:w,title:h}=t,u=new RegExp(e.value,"gi");return[a,d,...w,h].some(x=>x.match(u))}):f),c={filterTerm:e,trainingsListFiltered:r,updateSearch:t=>{e.value=t},trainingsList:f};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},re={class:"bg-zinc-900 min-h-screen"},se=l("h1",{class:"bg-zinc-800 font-semibold px-8 py-4 text-3xl text-center text-slate-100"}," Team Sessions ",-1),ae={class:"p-8 md:py-16"};function le(i,n,e,r,_,c){const t=N,a=te;return s(),o("div",re,[se,l("div",ae,[T(t,{class:"mb-8","trainings-list":r.trainingsList,onSearch:r.updateSearch},null,8,["trainings-list"]),T(a,{cards:r.trainingsListFiltered},null,8,["cards"])])])}var ie=m(ne,[["render",le]]);export{ie as default};
