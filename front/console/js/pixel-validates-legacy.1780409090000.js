/*! 
 Build based on melong-console 
 Time : 1780409090000 */
System.register(["../assets/pixel-entry-index-legacy.1780409090000.js"],function(r,a){"use strict";var e;return{setters:[function(r){e=r.h}],execute:function(){r("v",function(r,a,t){var n=e();a?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)?t():t(new Error(n.t("lang.validation.email_invalid"))):t(new Error(n.t("lang.validation.email_required")))}),r("a",function(r,a,t){var n=e();a?a.length<8?t(new Error(n.t("lang.validation.password_length"))):/(?=.*[a-z])/.test(a)?/(?=.*[A-Z])/.test(a)?t():t(new Error(n.t("lang.validation.password_uppercase"))):t(new Error(n.t("lang.validation.password_lowercase"))):t(new Error(n.t("lang.validation.password_required")))})}}});
