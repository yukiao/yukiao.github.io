!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=20)}([function(n,t){function e(t){return n.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},e(t)}n.exports=e},function(n,t){n.exports=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t){function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}n.exports=function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}},function(n,t,e){var r=e(6);n.exports=function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}},function(n,t,e){var r=e(13),o=e(14);n.exports=function(n,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(n):t}},function(n,t,e){var r=e(0),o=e(6),i=e(15),a=e(16);function c(t){var e="function"==typeof Map?new Map:void 0;return n.exports=c=function(n){if(null===n||!i(n))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,t)}function t(){return a(n,arguments,r(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,n)},c(t)}n.exports=c},function(n,t){function e(t,r){return n.exports=e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},e(t,r)}n.exports=e},function(n,t,e){n.exports=e(19)},function(n,t){function e(n,t,e,r,o,i,a){try{var c=n[i](a),s=c.value}catch(n){return void e(n)}c.done?t(s):Promise.resolve(s).then(r,o)}n.exports=function(n){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=n.apply(t,r);function c(n){e(a,o,i,c,s,"next",n)}function s(n){e(a,o,i,c,s,"throw",n)}c(void 0)}))}}},function(n,t,e){var r=e(10),o=e(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],s=t.base?i[0]+t.base:i[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function u(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function h(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var d=null,y=0;function v(n,t){var e,r,o;if(t.singleton){var i=y++;e=d||(d=u(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=u(t),r=h.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=s(n,t),u=0;u<e.length;u++){var l=c(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=i}}}},function(n,t,e){(t=e(12)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Merienda+One&family=Montserrat&display=swap);"]),t.push([n.i,"*{\n    margin: 0;\n    padding: 0;\n    font-family: Montserrat, sans-serif;\n}\nhtml{\n    min-height: 100%;\n}\nbody{\n    background-color:#232323;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh ;\n    position: relative;\n    width: 100vw;\n    overflow-x: hidden;\n}\nmain{\n    width:90%;\n    margin: auto;\n    flex: 1;\n    position: relative;\n    z-index:-2;\n    padding-top: 20vh;\n    padding-bottom: 5vh;\n    color:rgb(230, 230, 230);\n}\n\nwebsite-footer{\n    position: relative;\n    z-index: 2;\n}\nimg{\n    width: 400px;\n}\n.underline{\n    height: 3px;\n    margin-top: 10px;\n    background-color: grey;\n}\n.card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.result{\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    gap: 2px;\n}\n.recent-posts{\n    width: 100%;\n    height: 300px;\n    background-color: white;\n    margin-top: 30px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));\n    column-gap: 10px;\n}\n@media only screen and (max-width: 768px){\n    main{\n        width: 95%;\n    }\n}",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,s;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t){function e(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?n.exports=e=function(n){return typeof n}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(t)}n.exports=e},function(n,t){n.exports=function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},function(n,t){n.exports=function(n){return-1!==Function.toString.call(n).indexOf("[native code]")}},function(n,t,e){var r=e(6),o=e(17);function i(t,e,a){return o()?n.exports=i=Reflect.construct:n.exports=i=function(n,t,e){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(n,o));return e&&r(i,e.prototype),i},i.apply(null,arguments)}n.exports=i},function(n,t){n.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}},function(n,t){var e=document.querySelector("website-header").shadowRoot;e.querySelector(".hamburger").addEventListener("click",(function(){e.querySelector(".sidebar-navigation").classList.toggle("sidebar-navigation-show")}))},function(n,t,e){var r=function(n){"use strict";var t=Object.prototype,e=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(n,t,e,r){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(n,t,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=b(a,e);if(c){if(c===u)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=s(n,t,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(n,e,a),i}function s(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}n.wrap=c;var u={};function l(){}function f(){}function p(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==t&&e.call(y,o)&&(h=y);var v=p.prototype=l.prototype=Object.create(h);function g(n){["next","throw","return"].forEach((function(t){n[t]=function(n){return this._invoke(t,n)}}))}function m(n,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,c){var u=s(n[o],n,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&e.call(f,"__await")?t.resolve(f.__await).then((function(n){r("next",n,a,c)}),(function(n){r("throw",n,a,c)})):t.resolve(f).then((function(n){l.value=n,a(l)}),(function(n){return r("throw",n,a,c)}))}c(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function b(n,t){var e=n.iterator[t.method];if(void 0===e){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=void 0,b(n,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(e,n.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[n.resultName]=o.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function w(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function L(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function j(n){if(n){var t=n[o];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,i=function t(){for(;++r<n.length;)if(e.call(n,r))return t.value=n[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v.constructor=p,p.constructor=f,p[a]=f.displayName="GeneratorFunction",n.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,p):(n.__proto__=p,a in n||(n[a]="GeneratorFunction")),n.prototype=Object.create(v),n},n.awrap=function(n){return{__await:n}},g(m.prototype),m.prototype[i]=function(){return this},n.AsyncIterator=m,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new m(c(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},g(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},n.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=j,L.prototype={constructor:L,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!n)for(var t in this)"t"===t.charAt(0)&&e.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var t=this;function r(e,r){return a.type="throw",a.arg=n,t.next=e,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),u},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),w(e),u}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;w(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:j(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=void 0),u}},n}(n.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},function(n,t,e){"use strict";e.r(t);e(9);var r=e(1),o=e.n(r),i=e(2),a=e.n(i),c=e(3),s=e.n(c),u=e(4),l=e.n(u),f=e(0),p=e.n(f),h=e(5),d=e.n(h);function y(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=p()(n);if(t){var o=p()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)}}var v=function(n){s()(e,n);var t=y(e);function e(){var n;return o()(this,e),(n=t.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return a()(e,[{key:"connectedCallback",value:function(){this.shadowDOM.innerHTML='\n        <link rel="stylesheet" href="/src/style/style.css">\n        <link rel="stylesheet" href="/node_modules/@fortawesome/fontawesome-free/css/all.css">\n        <style>\n            header{\n                display: flex;\n                align-items: center;\n                background-color: #202020;\n                padding: 20px;\n                border-bottom-left-radius:5px;\n                border-bottom-right-radius:5px;\n                position: fixed;\n                left:0;\n                right:0;\n                z-index:2\n                height:10vh;\n                box-sizing: border-box;\n            }\n            a{\n                text-decoration: none;\n                color: rgb(0, 89, 255);\n                font-weight: bolder;\n            }\n            a:hover{\n                color:white;\n            }\n            .title{\n                flex: 3;\n            }\n\n            .title h1{\n                font-family: \'Merienda One\', sans-serif;\n                color: rgb(0,89,255);\n            }\n            .navigation{\n                display: flex;\n                flex:2;\n                margin-left: auto;\n                justify-content: space-evenly;\n            }\n            li{\n                list-style: none;\n                margin-right: 10px;\n            }\n            .separator{\n                height:3px;\n                width:100%;\n                background-color: rgb(0,89,255);\n            }\n            .search-box{\n                flex:1.2;\n                display: flex;\n                justify-content: flex-end;\n                align-items: center;\n                align-self: center;\n\n            }\n            .search-text{\n                margin-right: 15px;\n                background: transparent;\n                border: 2px solid rgb(0,89,255);\n                border-radius: 40px;\n                height:25px;\n                outline: 0;\n                padding: 0 10px;\n                width:150px;\n                color: white;\n            }\n            .search-btn{\n                font-size: 1.3em\n            }\n\n            .hamburger{\n                display: none;\n            }\n            .sidebar-navigation{\n                display: none;\n            }\n\n            @media only screen and (max-width: 768px){\n                header{\n                    display: flex;\n                    justify-content: center;\n                    z-index:2;\n                }\n                .navigation{\n                    display: none;\n                }\n                .search-box{\n                    display: none;\n                }\n                .title h1{\n                    text-align: center;\n                }\n                .hamburger{\n                    display: flex;\n                    flex-direction: column;\n                    align-self: center;\n                    justify-self: end;\n                    cursor: pointer;\n                }\n                .line{\n                    width:30px;\n                    height:5px;\n                    border-radius:10px ;\n                    color: rgb(0, 89, 255);\n                    display: inline-block;\n                    margin-bottom: 3px;\n                    background-color: rgb(0, 89, 255);\n                }\n                .sidebar-navigation{\n                    display: flex;\n                    flex-direction: column;\n                    position: fixed;\n                    background-color: #222222;\n                    right: 0;\n                    left:0;\n                    top: 10vh;\n                    bottom: 10vh;\n                    z-index: 0;\n                    justify-content: space-evenly;\n                    align-items: center;\n                    width: 100vw;\n                    transform: translateX(100%);\n                    opacity: 0;\n                    transition: .5s;\n                    height:80vh;\n                    border-bottom-left-radius: 10px;\n                }\n                .search-text-side{\n                    margin-right: 15px;\n                    background: transparent;\n                    border: 2px solid rgb(0,89,255);\n                    border-radius: 40px;\n                    height:25px;\n                    outline: 0;\n                    padding: 0 10px;\n                    width:150px;\n                    color: white;\n                }\n                .search-btn-side{\n                    font-size: 1.3em\n                }\n\n                .sidebar-navigation-show{\n                    transition: .5s;\n                    opacity: 1;\n                    transform: translateX(0);\n                }\n                .sidebar-navigation :first-child{\n                    display:flex;\n                    width: 80%;\n                    align-items:center;\n                    justify-content:center\n                }\n                li{\n                    margin:0\n                }\n            }\n\n        </style>\n        <header>\n            <div class="title">\n                <h1>Yukiao</h1>\n            </div>\n            <ul class="navigation">\n                <li><a href="#">Home</a></li>\n                <li><a href="#">Gallery</a></li>\n                <li><a href="#">Contact</a></li>\n                <li><a href="#">About</a></li>\n            </ul>\n            <div class="search-box">\n                <input type="text" class="search-text" placeholder="Search image ...">\n                <a class="search-btn" href="#">\n                <i class="fas fa-search original"></i>\n                </a>\n            </div>\n            <div class="hamburger">\n                <div class="line"></div>\n                <div class="line"></div>\n                <div class="line"></div>\n            </div>\n        </header>\n        <ul class="sidebar-navigation">\n            <li>\n                <input type="text" class="search-text-side" placeholder="Search image ...">\n                <a class="search-btn-side" href="#">\n                    <i class="fas fa-search side"></i>\n                </a>\n            </li>\n            <div class="separator"></div>\n            <li><a href="#">Home</a></li>\n            <div class="separator"></div>\n            <li><a href="#">Gallery</a></li>\n            <div class="separator"></div>\n            <li><a href="#">Contact</a></li>\n            <div class="separator"></div>\n            <li><a href="#">About</a></li>\n        </ul>\n        '}}]),e}(d()(HTMLElement));function g(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=p()(n);if(t){var o=p()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)}}customElements.define("website-header",v);var m=function(n){s()(e,n);var t=g(e);function e(){var n;return o()(this,e),(n=t.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return a()(e,[{key:"connectedCallback",value:function(){this.shadowDOM.innerHTML='\n            <link rel="stylesheet" href="src/style/style.css">\n            <style>\n                footer{\n                    background-color: #202020;\n                    display:flex;\n                    justify-content: center;\n                    height:80px;\n                    align-items: center;\n                    border-top-left-radius:5px;\n                    border-top-right-radius:5px;\n                    height: 10vh;\n                }\n                footer p{\n                    color: rgb(0,89,255);\n                    font-weight:bolder;\n                }\n            </style>\n            <footer>\n                <p>Copyright &copy; 2020 Yukiao. All Rights Reserved</p>\n            </footer>\n        '}}]),e}(d()(HTMLElement));customElements.define("website-footer",m);e(18);var b=e(7),x=e.n(b),w=e(8),L=e.n(w),j=document.querySelector("website-header").shadowRoot;function S(){return fetch("/src/data/Player.json").then((function(n){return n.json()})).then((function(n){return n}))}function E(n){return O.apply(this,arguments)}function O(){return(O=L()(x.a.mark((function n(t){var e,r;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S();case 2:e=n.sent,r="",e.forEach((function(n){n.name.toLowerCase().includes(t)&&(r+='\n            <div class="card">\n                <img src="'.concat(n.avatar,'" alt="avatar">\n                <h3>').concat(n.name,'</h3>\n                <button type="button" name="').concat(n.name,'" class="btn btn-primary btn-sm show-detail" name style="width:40%;margin-bottom:1rem">Detail</button>\n            </div>\n            '))})),localStorage.setItem("output",r),window.open("/search.html","_self");case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}j.addEventListener("click",(function(n){if(n.target.parentElement.classList.contains("search-btn-side"))E(j.querySelector(".search-text-side").value.toLowerCase());else if(n.target.parentElement.classList.contains("search-btn")){E(j.querySelector(".search-text").value.toLowerCase())}}))}]);