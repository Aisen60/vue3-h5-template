import{d as u,s as v,p as g,r as f,g as k,y as o,w as V,u as n,k as e,G as l,E as x,o as N,i as T,N as b,S as C}from"./vendor-V18HZmOm.js";import{u as w}from"./app-Dum8nq2J.js";const y={class:"theme"},B=e("p",{class:"p-5 leading-7"},[l(" Vant 4 开始支持动态主题切换和深色模式，具体使用请查看 Vant 4 "),e("a",{href:"https://youzan.github.io/vant/v4/#/zh-CN/config-provider",target:"_blank",class:"text-[--van-primary-color]"}," 官网文档 ")],-1),S=e("p",{class:"p-5 pt-0 leading-7"},[l(" 如果想实时预览配置后的主题，可以使用 "),e("a",{href:"https://github.com/Aisen60/vant-theme",target:"_blank",class:"text-[--van-primary-color]"}," Vant Theme 主题工具 ")],-1),R=u({name:"ThemeIndex",__name:"theme",setup(z){const s=w(),{theme:t}=v(s),i=g(()=>t.value==="dark"?"切换亮色模式":"切换深色模式"),a=f(t.value==="dark"),p=()=>{const r=n(t)==="light"?"dark":"light";s.setTheme(r)};return(r,c)=>{const m=b,h=C,_=x;return N(),k("div",y,[o(m,{title:"主题切换"}),o(_,{center:"",title:n(i)},{"right-icon":V(()=>[o(h,{modelValue:n(a),"onUpdate:modelValue":c[0]||(c[0]=d=>T(a)?a.value=d:null),onChange:p},null,8,["modelValue"])]),_:1},8,["title"]),B,S])}}});export{R as default};