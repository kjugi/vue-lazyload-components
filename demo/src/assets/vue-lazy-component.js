!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VueLazyComponent=n():t.VueLazyComponent=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=37)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(39))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2),o=e(6),i=e(22);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(2),o=e(17),i=e(7),u=e(19),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(0),o=e(20).f,i=e(4),u=e(41),c=e(12),f=e(46),a=e(52);t.exports=function(t,n){var e,s,l,p,v,d=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[d]||c(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(y?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,n,e){var r=e(42),o=e(43);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(11),o=e(24);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(1),o=e(23),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(4);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(24);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(29),o=e(14);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(1),i=e(18);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(5),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),o=e(21),i=e(22),u=e(10),c=e(19),f=e(3),a=e(17),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(9);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(9),o=e(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(48),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(3),o=e(10),i=e(50).indexOf,u=e(13);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(31),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(53),o=e(11),i=e(15),u=e(30),c=e(55),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,y,h){for(var g,m,b=i(v),x=o(b),S=r(d,y,3),O=u(x.length),j=0,w=h||c,_=n?w(v,O):e?w(v,0):void 0;O>j;j++)if((p||j in x)&&(m=S(g=x[j],j,b),t))if(n)_[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:f.call(_,g)}else if(s)return!1;return l?-1:a||s?s:_}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(0),o=e(9),i=e(3),u=e(27),c=e(35),f=e(57),a=o("wks"),s=r.Symbol,l=f?s:u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r=e(33).forEach,o=e(63);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){t.exports=e(69)},function(t,n,e){var r=e(2),o=e(6).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r=e(8),o=e(33).find,i=e(58),u=!0;"find"in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,n,e){var r=e(0),o=e(9),i=e(4),u=e(3),c=e(12),f=e(25),a=e(44),s=a.get,l=a.enforce,p=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,e,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||u(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:i(t,n,e)):a?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},function(t,n){t.exports=!1},function(t,n,e){var r=e(0),o=e(12),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r,o,i,u=e(45),c=e(0),f=e(5),a=e(4),s=e(3),l=e(26),p=e(13),v=c.WeakMap;if(u){var d=new v,y=d.get,h=d.has,g=d.set;r=function(t,n){return g.call(d,t,n),n},o=function(t){return y.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return a(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(25),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(3),o=e(47),i=e(20),u=e(6);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(28),o=e(49),i=e(32),u=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(29),o=e(14).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(10),o=e(30),i=e(51),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(31),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(54);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(5),o=e(56),i=e(34)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(35);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,n,e){var r=e(34),o=e(59),i=e(4),u=r("unscopables"),c=Array.prototype;null==c[u]&&i(c,u,o(null)),t.exports=function(t){c[u][t]=!0}},function(t,n,e){var r=e(7),o=e(60),i=e(14),u=e(13),c=e(61),f=e(18),a=e(26)("IE_PROTO"),s=function(){},l=function(){var t,n=f("iframe"),e=i.length;for(n.style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[a]=t):e=l(),void 0===n?e:o(e,n)},u[a]=!0},function(t,n,e){var r=e(2),o=e(6),i=e(7),u=e(16);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=u(n),c=r.length,f=0;c>f;)o.f(t,e=r[f++],n[e]);return t}},function(t,n,e){var r=e(28);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(8),o=e(36);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(1);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(8),o=e(65);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},function(t,n,e){"use strict";var r=e(2),o=e(1),i=e(16),u=e(32),c=e(21),f=e(15),a=e(11),s=Object.assign;t.exports=!s||o((function(){var t={},n={},e=Symbol();return t[e]=7,"abcdefghijklmnopqrst".split("").forEach((function(t){n[t]=t})),7!=s({},t)[e]||"abcdefghijklmnopqrst"!=i(s({},n)).join("")}))?function(t,n){for(var e=f(t),o=arguments.length,s=1,l=u.f,p=c.f;o>s;)for(var v,d=a(arguments[s++]),y=l?i(d).concat(l(d)):i(d),h=y.length,g=0;h>g;)v=y[g++],r&&!p.call(d,v)||(e[v]=d[v]);return e}:s},function(t,n,e){var r=e(8),o=e(15),i=e(16);r({target:"Object",stat:!0,forced:e(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,e){var r=e(0),o=e(68),i=e(36),u=e(4);for(var c in o){var f=r[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){"use strict";e.r(n);e(38);var r=function(){var t=this.$createElement,n=this._self._c||t;return n(this.mainTag,{tag:"component"},[this.isLoadedData?[this._t("default")]:[this._t("loader",[n("span",[this._v("\n        Loading...\n      ")])])]],2)};r._withStripped=!0;e(40),e(62),e(64),e(66),e(67);function o(t,n,e,r,o){n.forEach((function(n){n.isIntersecting&&(t.$emit(r),t.isLoadedData||(t.isLoadedData=!0),e&&o.unobserve(t.$el))}))}var i=function(t,n,e,r,o,i,u,c){var f,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),r&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,n){return f.call(n),s(t,n)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:a}}({name:"VueLazyComponent",props:{mainTag:{type:String,default:"section"},isLoaded:{type:Boolean,default:!1},options:{type:Object,default:function(){}}},data:function(){return{isLoadedData:this.isLoaded}},mounted:function(){!function(t,n){var e=Object.keys(n),r={root:null,rootMargin:"0px",threshold:1},i=!e.find((function(t){return"disableIntersection"===t}))||n.disableIntersection,u=e.find((function(t){return"eventName"===t}))?n.eventName:"custom-lazy-component";r=Object.assign(r,e.find((function(t){return"intersectionOptions"===t}))?n.intersectionOptions:{});var c=new IntersectionObserver((function(n){window&&window.requestIdleCallback?window.requestIdleCallback((function(){o(t,n,i,u,c)})):o(t,n,i,u,c)}),r);c.observe(t.$el)}(this,this.options||{})}},r,[],!1,null,null,null);i.options.__file="src/MainComponent.vue";var u=i.exports;function c(t){t.prototype.$VueLazyComponent={name:u.name},t.component(u.name,u)}e.d(n,"default",(function(){return c}))}]).default}));