import{f as s,L as m,M as o,r as h,O as P,P as c}from"./vendor-V18HZmOm.js";var r=(e=>(e.APP_THEME="APP_THEME",e.APP_THEME_LIGHT="app-theme-light",e.APP_THEME_DARK="app-theme-dark",e))(r||{});s();const i=m("appStore",()=>{const e=o(),t=h(P(r.APP_THEME,e.value?"dark":"light"));return{systemDark:e,theme:t,setTheme:a=>{t.value=a},watchTheme:()=>{c(()=>t.value,a=>{document.documentElement.setAttribute("theme",a)},{immediate:!0})}}});export{i as u};