const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B_rgsAy3.js","./CklR0kxn.js","./entry.DEmliC5w.css"])))=>i.map(i=>d[i]);
var C=Object.defineProperty;var N=(t,e,o)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var i=(t,e,o)=>N(t,typeof e!="symbol"?e+"":e,o);import{o as l,c as s,t as m,z as O,Y as $,n as k,Z as E,p as x,b as u,w as n,F as h,E as b,y as _,a as c,C as F}from"./CklR0kxn.js";const z={__name:"number",props:{text:{type:[Number,String],default:null},color:{type:[String],default:"#00FF00"},selected:{type:[Boolean],default:!1}},setup(t){const e=t;return(o,d)=>(l(),s("a",{href:"javascript:void(0);",class:"flex items-center justify-center text-sm font-mono rounded-full",style:O(["width:40px; height:40px;",`border: solid 1px ${e.color};`,e.selected?"color: #fff;":`color: ${e.color};`,e.selected?`background: ${e.color};`:null])},m(e.text),5))}};class D{constructor(e){i(this,"name","");i(this,"goods",[]);i(this,"bads",[]);i(this,"data",[]);this.data=e}static async all(e){return[await $(()=>import("./B_rgsAy3.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(o=>new o.default(e))]}}const P={class:"mb-4"},V={class:"text-h6 text-left pa-2"},A={class:"pa-1"},J=["onClick"],L={style:{width:"100px"}},T={class:"flex gap-2"},I={__name:"[id]",props:{modalidade:{type:Object,deault:()=>({})}},async setup(t){let e,o;const d=t,r=k({value:null,set(v){r.value=JSON.parse(JSON.stringify(v)),r.value.contests=r.value.contests.reverse()}});r.set(d.modalidade);const p=k({value:null,set(v){p.value=v}});p.set(d.modalidade.contests[0]);const S=([e,o]=E(()=>D.all([])),e=await e,o(),e);return(v,M)=>{const y=z,g=x("v-col"),B=x("v-data-table-virtual"),j=x("v-row");return l(),s("div",null,[u(j,null,{default:n(()=>[u(g,{cols:"12",md:"5"},{default:n(()=>[(l(!0),s(h,null,b(_(r).value.tables,a=>(l(),s("table",P,[c("caption",V,m(a.name),1),c("tbody",null,[(l(!0),s(h,null,b(a.data,f=>(l(),s("tr",null,[(l(!0),s(h,null,b(f,w=>(l(),s("td",A,[u(y,{text:w,color:d.modalidade.color,selected:_(p).value.numbers.includes(w),class:"mx-auto"},null,8,["text","color","selected"])]))),256))]))),256))])]))),256)),c("pre",null,"algorithms: "+m(_(S)),1)]),_:1}),u(g,{cols:"12",md:"7"},{default:n(()=>[u(B,{class:"border elevation-10","fixed-header":!0,"disable-sort":!0,"select-strategy":"single",height:"calc(100vh - 78px)",items:_(r).value.contests,headers:[{title:"Sorteio",key:"contest",width:0},{title:"Data",key:"date",width:100},{title:"Números",key:"numbers"}]},{"item.contest":n(a=>[c("a",{href:"javascript:void(0);",onClick:f=>_(p).set(a.item)},m(a.item.contest),9,J)]),"item.date":n(a=>[c("div",L,m(a.item.date),1)]),"item.numbers":n(a=>[c("div",T,[(l(!0),s(h,null,b(a.item.numbers,f=>(l(),F(y,{text:f,selected:!0,color:d.modalidade.color},null,8,["text","color"]))),256))])]),_:1},8,["items"])]),_:1})]),_:1})])}}},Z=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{D as B,Z as _};
