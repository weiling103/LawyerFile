(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"790f":function(e,n,t){"use strict";t.r(n);var o=t("96b3");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("9509");var r,a,f=t("2877"),c=Object(f["a"])(o["default"],r,a,!1,null,null,null);n["default"]=c.exports},9509:function(e,n,t){"use strict";var o=t("e293"),u=t.n(o);u.a},"96b3":function(e,n,t){"use strict";t.r(n);var o=t("c1e6"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=u.a},af3d:function(e,n,t){"use strict";t("1cd2");var o=a(t("f3d3")),u=a(t("790f")),r=a(t("b4f1"));function a(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}o.default.config.productionTip=!1,o.default.prototype.$store=r.default,o.default.prototype.GLOBAL="https://zhyongfeng.mynatapp.cc/lawyerfile",u.default.mpType="app";var l=new o.default(f({store:r.default},u.default));l.$mount()},b4f1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("f3d3")),u=r(t("2f62"));function r(e){return e&&e.__esModule?e:{default:e}}o.default.use(u.default);var a=new u.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",accessToken:""},mutations:{login:function(e,n){e.userName=n||"新用户",e.hasLogin=!0},logout:function(e){e.userName="",e.hasLogin=!1},setToken:function(e,n){e.accessToken=n}}}),f=a;n.default=f},c1e6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=o},e293:function(e,n,t){}},[["af3d","common/runtime","common/vendor"]]]);