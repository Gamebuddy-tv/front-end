import{z as e,r as a,e as s,f as t,o as n,k as l,h as o,a as r,c as i,C as c,D as d,g as u,n as v,t as p,i as m}from"./vendor.4d010bdc.js";import{f as h,_ as f,b as w,I as x,h as b,i as k,j as _,k as I,l as g,u as y,s as M,c as S}from"./index.1b09881d.js";const T=(a,s,t)=>{const{data:n,isLoading:l,isError:o}=e(a,s,t);return[n,l,o]};var D=()=>{const e=a(window.innerWidth);return s((()=>{const a=Object.keys(h).sort(((e,a)=>a-e)).find((a=>e.value>=a));return h[a]}))};const C={components:{Skeleton:f}},E=r("div",{class:"relative pt-[56.25%]"},[r("div",{class:"w-full h-full absolute left-0 top-0 rounded-md"})],-1);C.render=function(e,a,s,r,i,c){const d=t("Skeleton");return n(),l(d,null,{default:o((()=>[E])),_:1})};const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},j=[r("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z",fill:"currentColor"},null,-1)];const P={props:["data"],components:{Image:w,IconPlayFill:x,IconThumbUp:b,IconThumbDown:k,CircleButton:_,IconKeyboardArrowDown:{name:"ic-outline-keyboard-arrow-down",render:function(e,a){return n(),i("svg",L,j)}},IconPlus:I,IconStar:g},setup({data:e}){const s=a(!1),t=a(null),n=a(null),l=a(!1),o=a(null),{isDesktop:r}=y();return{isDesktop:r,isScaled:s,isMouseEnter:l,container:n,handleMouseEnter:()=>{t.value&&clearTimeout(t.value),o.value&&clearTimeout(o.value),l.value=!0,t.value=setTimeout((()=>{s.value=!0}),500)},handleMouseLeave:()=>{t.value&&clearTimeout(t.value),s.value=!1,o.value=setTimeout((()=>{l.value=!1}),500)},handleClick:()=>{const a=!!e.first_air_date;M(!0),S({id:e.id,type:a?"tv":"movies"})}}}};c("data-v-6a5f5389");const z={class:"flex items-center justify-between"},A={class:"flex items-center space-x-2"},B={class:"line-clamp-1"},F={class:"flex items-center space-x-2 text-xs"},K={class:"flex items-center text-yellow-500"};d(),P.render=function(e,a,s,l,c,d){const h=t("Image"),f=t("IconPlayFill"),w=t("circle-button"),x=t("IconPlus"),b=t("IconThumbUp"),k=t("IconThumbDown"),_=t("IconKeyboardArrowDown"),I=t("IconStar");return n(),i("div",{ref:"container",class:v(["\n      cursor-pointer\n      video-card\n      relative\n      transition-all\n      duration-300\n      pt-[56.25%]\n    ",{"animate-card-hover":l.isScaled,"animate-card-unhover":!l.isScaled}]),onMouseenter:a[0]||(a[0]=(...e)=>l.handleMouseEnter&&l.handleMouseEnter(...e)),onMouseleave:a[1]||(a[1]=(...e)=>l.handleMouseLeave&&l.handleMouseLeave(...e)),onClick:a[2]||(a[2]=(...e)=>l.handleClick&&l.handleClick(...e))},[u(h,{src:s.data.backdrop_path,size:185,class:v({"rounded-b-none shadow":l.isScaled}),alt:s.data.title},null,8,["src","class","alt"]),l.isMouseEnter&&l.isDesktop?(n(),i("div",{key:0,class:v(["\n        absolute\n        top-full\n        w-full\n        h-26\n        bg-background\n        rounded-b-md\n        transition-all\n        duration-300\n        shadow\n        p-3\n        space-y-2\n      ",[l.isScaled?"visible opacity-100":"invisible opacity-0"]])},[r("div",z,[r("div",A,[u(w,{class:"p-1 bg-white text-black border-white hover:bg-gray-300"},{default:o((()=>[u(f,{class:"text-xs"})])),_:1}),u(w,{class:"p-1"},{default:o((()=>[u(x,{class:"text-xs"})])),_:1}),u(w,{class:"p-1"},{default:o((()=>[u(b,{class:"text-xs"})])),_:1}),u(w,{class:"p-1"},{default:o((()=>[u(k,{class:"text-xs"})])),_:1})]),u(w,{class:"p-1"},{default:o((()=>[u(_,{class:"text-xs"})])),_:1})]),r("p",B,p(s.data.title||s.data.name),1),r("div",F,[r("div",K,[u(I),r("p",null,p(s.data.vote_average),1)]),r("p",null,p(s.data.release_date||s.data.first_air_date),1)])],2)):m("",!0)],34)},P.__scopeId="data-v-6a5f5389";export{C as _,P as a,T as b,D as u};
