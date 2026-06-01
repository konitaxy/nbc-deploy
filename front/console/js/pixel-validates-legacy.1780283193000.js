/*! 
 Build based on melong-console 
 Time : 1780283193000 */
System.register(["../assets/pixel-entry-index-legacy.1780283193000.js"],function(a,r){"use strict";var e;return{setters:[function(a){e=a.a}],execute:function(){a("v",function(a,r,t){var n=e();r?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(r)?t():t(new Error(n.t("lang.validation.email_invalid"))):t(new Error(n.t("lang.validation.email_required")))}),a("a",function(a,r,t){var n=e();r?r.length<8?t(new Error(n.t("lang.validation.password_length"))):/(?=.*[a-z])/.test(r)?/(?=.*[A-Z])/.test(r)?t():t(new Error(n.t("lang.validation.password_uppercase"))):t(new Error(n.t("lang.validation.password_lowercase"))):t(new Error(n.t("lang.validation.password_required")))})}}});
