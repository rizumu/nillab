import{d as v,v as C,Z as g,$ as D,x as w,M as o}from"./BQ4YZd9T.js";import{u as d}from"./D7Ew7KgF.js";import _ from"./Bp8tD9lM.js";import S from"./xsSJSixC.js";import"./DWi6r2Ji.js";import"./Dnd51l0P.js";import"./v1y6z_s9.js";const $=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=C().public.content,e=g(),{tag:m,excerpt:r,path:s,query:i,head:a}=f,u=a===void 0?c:a,l={...i||{},path:s||(i==null?void 0:i.path)||D(w().path),find:"one"},h=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(S,l,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:y})=>{var p;return u&&d(t),(p=e.default)==null?void 0:p.call(e,{doc:t,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:t})=>(u&&d(t),o(_,{value:t,excerpt:r,tag:m,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):h("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),O=$;export{O as default};