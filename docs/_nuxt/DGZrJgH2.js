var c=Object.defineProperty;var d=(s,e,o)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o;var i=(s,e,o)=>d(s,typeof e!="symbol"?e+"":e,o);import{B as p}from"./Cgz9krnN.js";import"./ChcvI5aH.js";class u extends p{constructor(){super(...arguments);i(this,"name","Números repetidos nos últimos 3 sorteios")}getBads(o){const r=o.contests.sort((n,a)=>n.contest<a.contest?1:-1).slice(0,3);let t={};r.map(n=>{n.numbers.map(a=>{typeof t[a]>"u"&&(t[a]=0),t[a]++})});for(let n in t)t[n]<=1&&delete t[n];return Object.keys(t)}}export{u as default};
