import{r as l,j as t,a as i,aG as m}from"./index-29885c42.js";import{s as f}from"./styles-bea25d13.js";import{n as a}from"./index-438eba7e.js";const p="/assets/profilePicture-94dead56.png",x="/assets/menu-b5599218.svg",u="/assets/close-54702a70.svg",b=()=>{const[c,r]=l.useState(""),[s,o]=l.useState(!1),[d,n]=l.useState(!1);return l.useEffect(()=>{const e=()=>{window.scrollY>100?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),t("nav",{className:`${f.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${d?"bg-primary opacity-90":"bg-transparent"}`,children:i("div",{className:"w-full flex justify-between items-center max-w-7xl mx-auto",children:[i(m,{to:"/",className:"flex items-center gap-2",onClick:()=>{r(""),window.scrollTo(0,0)},children:[t("img",{src:p,alt:"profilePicture",className:"w-9 h-9 object-cover rounded-full scale-110"}),i("p",{className:"text-white text-[18px] font-bold cursor-pointer flex ",children:["Beod  ",t("span",{className:"sm:block hidden",children:" | Full Stack Engineer"})]})]}),t("ul",{className:"list-none hidden sm:flex flex-row gap-10",children:a.map(e=>t("li",{className:`${c===e.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`,onClick:()=>r(e.title),children:t("a",{href:`#${e.id}`,children:e.title})},e.id))}),i("div",{className:"sm:hidden flex flex-1 justify-end items-center",children:[t("img",{src:s?u:x,alt:"menu",className:"w-[28px] h-[28px] object-contain",onClick:()=>o(!s)}),t("div",{className:`${s?"flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`,children:t("ul",{className:"list-none flex justify-end items-start flex-1 flex-col gap-4",children:a.map(e=>t("li",{className:`font-poppins font-medium cursor-pointer text-[16px] ${c===e.title?"text-white":"text-secondary"}`,onClick:()=>{o(!s),r(e.title)},children:t("a",{href:`#${e.id}`,children:e.title})},e.id))})})]})]})})};export{b as default};
