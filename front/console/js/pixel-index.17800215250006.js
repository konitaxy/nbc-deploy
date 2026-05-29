/*! 
 Build based on melong-console 
 Time : 1780021525000 */
import{s as e}from"./pixel-screenfull.1780021525000.js";import{_ as s,i as a,P as l,g as n,c as t,o as c}from"../assets/pixel-entry-index.1780021525000.js";const i={key:0,class:"gvaIcon gvaIcon-fullscreen-expand"},o={key:1,class:"gvaIcon gvaIcon-fullscreen-shrink"},r={name:"Screenfull"},d=s(Object.assign(r,{props:{width:{type:Number,default:22},height:{type:Number,default:22},fill:{type:String,default:"#48576a"}},setup(s){a(()=>{e.isEnabled&&e.on("change",u)}),l(()=>{e.off("change")});const r=()=>{e.isEnabled&&e.toggle()},d=n(!0),u=()=>{d.value=!e.isFullscreen};return(e,s)=>(c(),t("div",{onClick:r},[d.value?(c(),t("div",i)):(c(),t("div",o))]))}}),[["__scopeId","data-v-cdd0729b"]]);export{d as default};
