/*! 
 Build based on melong-console 
 Time : 1785159096000 */
import{h as a}from"../assets/pixel-entry-index.1785159096000.js";const r=(r,t,e)=>{const n=a();t?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)?e():e(new Error(n.t("lang.validation.email_invalid"))):e(new Error(n.t("lang.validation.email_required")))},t=(r,t,e)=>{const n=a();t?t.length<8?e(new Error(n.t("lang.validation.password_length"))):/(?=.*[a-z])/.test(t)?/(?=.*[A-Z])/.test(t)?e():e(new Error(n.t("lang.validation.password_uppercase"))):e(new Error(n.t("lang.validation.password_lowercase"))):e(new Error(n.t("lang.validation.password_required")))};export{t as a,r as v};
