!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["armigate-client-side"]=t():e["armigate-client-side"]=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getFingerprint:()=>Ie,init:()=>Ge});var n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function i(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var a="4.2.1";function c(e,t){return new Promise((function(n){return setTimeout(n,e,t)}))}function u(){return c(0)}function l(e){return!!e&&"function"==typeof e.then}function s(e,t){try{var n=e();l(n)?n.then((function(e){return t(!0,e)}),(function(e){return t(!1,e)})):t(!0,n)}catch(e){t(!1,e)}}function d(e,t,n){return void 0===n&&(n=16),r(this,void 0,void 0,(function(){var r,i,a,u;return o(this,(function(o){switch(o.label){case 0:r=Array(e.length),i=Date.now(),a=0,o.label=1;case 1:return a<e.length?(r[a]=t(e[a],a),(u=Date.now())>=i+n?(i=u,[4,c(0)]):[3,3]):[3,4];case 2:o.sent(),o.label=3;case 3:return++a,[3,1];case 4:return[2,r]}}))}))}function f(e){e.then(void 0,(function(){}))}function m(e){return parseInt(e)}function v(e){return parseFloat(e)}function h(e,t){return"number"==typeof e&&isNaN(e)?t:e}function p(e){return e.reduce((function(e,t){return e+(t?1:0)}),0)}function b(e,t){if(void 0===t&&(t=1),Math.abs(t)>=1)return Math.round(e/t)*t;var n=1/t;return Math.round(e*n)/n}function y(e,t){var n=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=t[0]>>>16,c=65535&t[0],u=t[1]>>>16,l=0,s=0,d=0,f=0;d+=(f+=i+(65535&t[1]))>>>16,f&=65535,s+=(d+=o+u)>>>16,d&=65535,l+=(s+=r+c)>>>16,s&=65535,l+=n+a,l&=65535,e[0]=l<<16|s,e[1]=d<<16|f}function g(e,t){var n=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=t[0]>>>16,c=65535&t[0],u=t[1]>>>16,l=65535&t[1],s=0,d=0,f=0,m=0;f+=(m+=i*l)>>>16,m&=65535,d+=(f+=o*l)>>>16,f&=65535,d+=(f+=i*u)>>>16,f&=65535,s+=(d+=r*l)>>>16,d&=65535,s+=(d+=o*u)>>>16,d&=65535,s+=(d+=i*c)>>>16,d&=65535,s+=n*l+r*u+o*c+i*a,s&=65535,e[0]=s<<16|d,e[1]=f<<16|m}function w(e,t){var n=e[0];32==(t%=64)?(e[0]=e[1],e[1]=n):t<32?(e[0]=n<<t|e[1]>>>32-t,e[1]=e[1]<<t|n>>>32-t):(t-=32,e[0]=e[1]<<t|n>>>32-t,e[1]=n<<t|e[1]>>>32-t)}function L(e,t){0!=(t%=64)&&(t<32?(e[0]=e[1]>>>32-t,e[1]=e[1]<<t):(e[0]=e[1]<<t-32,e[1]=0))}function k(e,t){e[0]^=t[0],e[1]^=t[1]}var V=[4283543511,3981806797],S=[3301882366,444984403];function W(e){var t=[0,e[0]>>>1];k(e,t),g(e,V),t[1]=e[0]>>>1,k(e,t),g(e,S),t[1]=e[0]>>>1,k(e,t)}var Z=[2277735313,289559509],x=[1291169091,658871167],M=[0,5],R=[0,1390208809],F=[0,944331445];function j(){var e=window,t=navigator;return p(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in t,"msPointerEnabled"in t])>=4}function G(){var e=window,t=navigator;return p(["webkitPersistentStorage"in t,"webkitTemporaryStorage"in t,0===t.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function I(){var e=window,t=navigator;return p(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===t.vendor.indexOf("Apple"),"getStorageUpdates"in t,"WebKitMediaKeys"in e])>=4}function Y(){var e=window,t=e.HTMLElement,n=e.Document;return p(["safari"in e,!("ongestureend"in e),!("TouchEvent"in e),!("orientation"in e),t&&!("autocapitalize"in t.prototype),n&&"pointerLockElement"in n.prototype])>=4}function P(){var e,t=window;return e=t.print,!!/^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))&&p(["[object WebPageNamespace]"===String(t.browser),"MicrodataExtractor"in t])>=1}function X(){var e,t,n=window;return p(["buildID"in navigator,"MozAppearance"in(null!==(t=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==t?t:{}),"onmozfullscreenchange"in n,"mozInnerScreenX"in n,"CSSMozDocumentRule"in n,"CanvasCaptureMediaStream"in n])>=4}function E(){var e=window,t=navigator,n=e.CSS,r=e.HTMLButtonElement;return p([!("getStorageUpdates"in t),r&&"popover"in r.prototype,"CSSCounterStyleRule"in e,n.supports("font-size-adjust: ex-height 0.5"),n.supports("text-transform: full-width")])>=4}function C(){var e=document;return(e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen).call(e)}function H(){var e=G(),t=X(),n=window,r=navigator,o="connection";return e?p([!("SharedWorker"in n),r[o]&&"ontypechange"in r[o],!("sinkId"in new window.Audio)])>=2:!!t&&p(["onorientationchange"in n,"orientation"in n,/android/i.test(navigator.appVersion)])>=2}function A(e,t,n){var i,a,u;return void 0===n&&(n=50),r(this,void 0,void 0,(function(){var r,l;return o(this,(function(o){switch(o.label){case 0:r=document,o.label=1;case 1:return r.body?[3,3]:[4,c(n)];case 2:return o.sent(),[3,1];case 3:l=r.createElement("iframe"),o.label=4;case 4:return o.trys.push([4,,10,11]),[4,new Promise((function(e,n){var o=!1,i=function(){o=!0,e()};l.onload=i,l.onerror=function(e){o=!0,n(e)};var a=l.style;a.setProperty("display","block","important"),a.position="absolute",a.top="0",a.left="0",a.visibility="hidden",t&&"srcdoc"in l?l.srcdoc=t:l.src="about:blank",r.body.appendChild(l);var c=function(){var e,t;o||("complete"===(null===(t=null===(e=l.contentWindow)||void 0===e?void 0:e.document)||void 0===t?void 0:t.readyState)?i():setTimeout(c,10))};c()}))];case 5:o.sent(),o.label=6;case 6:return(null===(a=null===(i=l.contentWindow)||void 0===i?void 0:i.document)||void 0===a?void 0:a.body)?[3,8]:[4,c(n)];case 7:return o.sent(),[3,6];case 8:return[4,e(l,l.contentWindow)];case 9:return[2,o.sent()];case 10:return null===(u=l.parentNode)||void 0===u||u.removeChild(l),[7];case 11:return[2]}}))}))}function N(e){for(var t=function(e){for(var t,n,r="Unexpected syntax '".concat(e,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(e),i=o[1]||void 0,a={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,t){a[e]=a[e]||[],a[e].push(t)};;){var l=c.exec(o[2]);if(!l)break;var s=l[0];switch(s[0]){case".":u("class",s.slice(1));break;case"#":u("id",s.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);if(!d)throw new Error(r);u(d[1],null!==(n=null!==(t=d[4])&&void 0!==t?t:d[5])&&void 0!==n?n:"");break;default:throw new Error(r)}}return[i,a]}(e),n=t[0],r=t[1],o=document.createElement(null!=n?n:"div"),i=0,a=Object.keys(r);i<a.length;i++){var c=a[i],u=r[c].join(" ");"style"===c?J(o.style,u):o.setAttribute(c,u)}return o}function J(e,t){for(var n=0,r=t.split(";");n<r.length;n++){var o=r[n],i=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(i){var a=i[1],c=i[2],u=i[4];e.setProperty(a,c,u||"")}}}var T=44100;function _(){return r(this,void 0,void 0,(function(){var e,t,n;return o(this,(function(i){switch(i.label){case 0:return t=new Promise((function(e){var t=document,n="visibilitychange",r=function(){t.hidden||(t.removeEventListener(n,r),e())};t.addEventListener(n,r),r()})).then((function(){return c(500)})),n=function(){return r(this,void 0,void 0,(function(){var e,t,n,r,i,a,c;return o(this,(function(o){switch(o.label){case 0:return e=window,(t=e.OfflineAudioContext||e.webkitOfflineAudioContext)?!I()||Y()||function(){var e=window;return p(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}()?[4,D(t)]:[2,-1]:[2,-2];case 1:return(n=o.sent())?(r=new t(1,n.length-1+4e4,T),(i=r.createBufferSource()).buffer=n,i.loop=!0,i.loopStart=(n.length-1)/T,i.loopEnd=n.length/T,i.connect(r.destination),i.start(),[4,z(r)]):[2,-3];case 2:return(a=o.sent())?(c=function(e,t){for(var n=void 0,r=!1,o=0;o<t.length;o+=Math.floor(t.length/10))if(0===t[o]);else if(void 0===n)n=t[o];else if(n!==t[o]){r=!0;break}return void 0===n?n=e.getChannelData(0)[e.length-1]:r&&(n=function(e){for(var t=1/0,n=-1/0,r=0;r<e.length;r++){var o=e[r];0!==o&&(o<t&&(t=o),o>n&&(n=o))}return(t+n)/2}(t)),n}(n,a.getChannelData(0).subarray(n.length-1)),[2,Math.abs(c)]):[2,-3]}}))}))}().then((function(t){return e=[!0,t]}),(function(t){return e=[!1,t]})),[4,Promise.race([t,n])];case 1:return i.sent(),[2,function(){if(!e)return-3;if(!e[0])throw e[1];return e[1]}]}}))}))}function D(e){return r(this,void 0,void 0,(function(){var t,n,r,i;return o(this,(function(o){switch(o.label){case 0:return t=new e(1,3396,T),(n=t.createOscillator()).type="square",n.frequency.value=1e3,(r=t.createDynamicsCompressor()).threshold.value=-70,r.knee.value=40,r.ratio.value=12,r.attack.value=0,r.release.value=.25,(i=t.createBiquadFilter()).type="allpass",i.frequency.value=5.239622852977861,i.Q.value=.1,n.connect(r),r.connect(i),i.connect(t.destination),n.start(0),[4,z(t)];case 1:return[2,o.sent()]}}))}))}function z(e){return new Promise((function(t,n){var r=25;e.oncomplete=function(e){return t(e.renderedBuffer)};var o=function(){try{var i=e.startRendering();l(i)&&f(i),"suspended"===e.state&&(document.hidden||r--,r>0?setTimeout(o,200):t(null))}catch(e){n(e)}};o()}))}var O=["monospace","sans-serif","serif"],B=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function U(e,t){return r(this,void 0,void 0,(function(){var n,r,i;return o(this,(function(o){switch(o.label){case 0:return function(e,t){e.width=240,e.height=60,t.textBaseline="alphabetic",t.fillStyle="#f60",t.fillRect(100,1,62,20),t.fillStyle="#069",t.font='11pt "Times New Roman"';var n="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));t.fillText(n,2,15),t.fillStyle="rgba(102, 204, 0, 0.2)",t.font="18pt Arial",t.fillText(n,4,45)}(e,t),[4,u()];case 1:return o.sent(),n=Q(e),r=Q(e),n!==r?[2,["unstable","unstable"]]:(function(e,t){e.width=122,e.height=110,t.globalCompositeOperation="multiply";for(var n=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];n<r.length;n++){var o=r[n],i=o[0],a=o[1],c=o[2];t.fillStyle=i,t.beginPath(),t.arc(a,c,40,0,2*Math.PI,!0),t.closePath(),t.fill()}t.fillStyle="#f9c",t.arc(60,60,60,0,2*Math.PI,!0),t.arc(60,60,20,0,2*Math.PI,!0),t.fill("evenodd")}(e,t),[4,u()]);case 2:return o.sent(),i=Q(e),[2,[n,i]]}}))}))}function Q(e){return e.toDataURL()}var K,q;function $(){var e=screen;return[h(v(e.availTop),null),h(v(e.width)-v(e.availWidth)-h(v(e.availLeft),0),null),h(v(e.height)-v(e.availHeight)-h(v(e.availTop),0),null),h(v(e.availLeft),null)]}function ee(e){for(var t=0;t<4;++t)if(e[t])return!1;return!0}function te(e){var t;return r(this,void 0,void 0,(function(){var n,r,i,a,l,s,d;return o(this,(function(o){switch(o.label){case 0:for(n=document,r=n.createElement("div"),i=new Array(e.length),a={},ne(r),d=0;d<e.length;++d)"DIALOG"===(l=N(e[d])).tagName&&l.show(),ne(s=n.createElement("div")),s.appendChild(l),r.appendChild(s),i[d]=l;o.label=1;case 1:return n.body?[3,3]:[4,c(50)];case 2:return o.sent(),[3,1];case 3:return n.body.appendChild(r),[4,u()];case 4:o.sent();try{for(d=0;d<e.length;++d)i[d].offsetParent||(a[e[d]]=!0)}finally{null===(t=r.parentNode)||void 0===t||t.removeChild(r)}return[2,a]}}))}))}function ne(e){e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","block","important")}function re(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function oe(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}function ie(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function ae(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function ce(e){return matchMedia("(prefers-reduced-transparency: ".concat(e,")")).matches}function ue(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var le=Math,se=function(){return 0},de={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]},fe=new Set([10752,2849,2884,2885,2886,2928,2929,2930,2931,2932,2960,2961,2962,2963,2964,2965,2966,2967,2968,2978,3024,3042,3088,3089,3106,3107,32773,32777,32777,32823,32824,32936,32937,32938,32939,32968,32969,32970,32971,3317,33170,3333,3379,3386,33901,33902,34016,34024,34076,3408,3410,3411,3412,3413,3414,3415,34467,34816,34817,34818,34819,34877,34921,34930,35660,35661,35724,35738,35739,36003,36004,36005,36347,36348,36349,37440,37441,37443,7936,7937,7938]),me=new Set([34047,35723,36063,34852,34853,34854,34229,36392,36795,38449]),ve=["FRAGMENT_SHADER","VERTEX_SHADER"],he=["LOW_FLOAT","MEDIUM_FLOAT","HIGH_FLOAT","LOW_INT","MEDIUM_INT","HIGH_INT"],pe="WEBGL_debug_renderer_info";function be(e){if(e.webgl)return e.webgl.context;var t,n=document.createElement("canvas");n.addEventListener("webglCreateContextError",(function(){return t=void 0}));for(var r=0,o=["webgl","experimental-webgl"];r<o.length;r++){var i=o[r];try{t=n.getContext(i)}catch(e){}if(t)break}return e.webgl={context:t},t}function ye(e,t,n){var r=e.getShaderPrecisionFormat(e[t],e[n]);return r?[r.rangeMin,r.rangeMax,r.precision]:[]}function ge(e){return Object.keys(e.__proto__).filter(we)}function we(e){return"string"==typeof e&&!e.match(/[^A-Z0-9_x]/)}function Le(){return X()}function ke(e){return"function"==typeof e.getParameter}var Ve={fonts:function(){var e=this;return A((function(t,n){var i=n.document;return r(e,void 0,void 0,(function(){var e,t,n,r,a,c,l,s,d,f,m;return o(this,(function(o){switch(o.label){case 0:return(e=i.body).style.fontSize="48px",(t=i.createElement("div")).style.setProperty("visibility","hidden","important"),n={},r={},a=function(e){var n=i.createElement("span"),r=n.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,n.textContent="mmMwWLliI0O&1",t.appendChild(n),n},c=function(e,t){return a("'".concat(e,"',").concat(t))},l=function(){for(var e={},t=function(t){e[t]=O.map((function(e){return c(t,e)}))},n=0,r=B;n<r.length;n++)t(r[n]);return e},s=function(e){return O.some((function(t,o){return e[o].offsetWidth!==n[t]||e[o].offsetHeight!==r[t]}))},d=O.map(a),f=l(),e.appendChild(t),[4,u()];case 1:for(o.sent(),m=0;m<O.length;m++)n[O[m]]=d[m].offsetWidth,r[O[m]]=d[m].offsetHeight;return[2,B.filter((function(e){return s(f[e])}))]}}))}))}))},domBlockers:function(e){var t=(void 0===e?{}:e).debug;return r(this,void 0,void 0,(function(){var e,n,r,i,a;return o(this,(function(o){switch(o.label){case 0:return I()||H()?(c=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},n=Object.keys(e),[4,te((a=[]).concat.apply(a,n.map((function(t){return e[t]}))))]):[2,void 0];case 1:return r=o.sent(),t&&function(e,t){for(var n="DOM blockers debug:\n```",r=0,o=Object.keys(e);r<o.length;r++){var i=o[r];n+="\n".concat(i,":");for(var a=0,c=e[i];a<c.length;a++){var u=c[a];n+="\n  ".concat(t[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(n,"\n```"))}(e,r),(i=n.filter((function(t){var n=e[t];return p(n.map((function(e){return r[e]})))>.6*n.length}))).sort(),[2,i]}var c}))}))},fontPreferences:function(){return void 0===e&&(e=4e3),A((function(t,n){var r=n.document,o=r.body,a=o.style;a.width="".concat(e,"px"),a.webkitTextSizeAdjust=a.textSizeAdjust="none",G()?o.style.zoom="".concat(1/n.devicePixelRatio):I()&&(o.style.zoom="reset");var c=r.createElement("div");return c.textContent=i([],Array(e/20<<0),!0).map((function(){return"word"})).join(" "),o.appendChild(c),function(e,t){for(var n={},r={},o=0,i=Object.keys(de);o<i.length;o++){var a=i[o],c=de[a],u=c[0],l=void 0===u?{}:u,s=c[1],d=void 0===s?"mmMwWLliI0fiflO&1":s,f=e.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var m=0,v=Object.keys(l);m<v.length;m++){var h=v[m],p=l[h];void 0!==p&&(f.style[h]=p)}n[a]=f,t.append(e.createElement("br"),f)}for(var b=0,y=Object.keys(de);b<y.length;b++)r[a=y[b]]=n[a].getBoundingClientRect().width;return r}(r,o)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');var e},audio:function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,_()];case 1:return e=t.sent(),[2,function(){return function(e,t){if(0===e)return e;var n=Math.floor(Math.log10(Math.abs(e)))-Math.floor(6.2)+1,r=2*Math.pow(10,-n);return Math.round(e*r)/r}(e())}]}}))}))},screenFrame:function(){var e=this;if(I()&&E()&&P())return function(){return Promise.resolve(void 0)};var t=function(){var e=this;return function(){if(void 0===q){var e=function(){var t=$();ee(t)?q=setTimeout(e,2500):(K=t,q=void 0)};e()}}(),function(){return r(e,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return ee(e=$())?K?[2,i([],K,!0)]:(n=document).fullscreenElement||n.msFullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement?[4,C()]:[3,2]:[3,2];case 1:t.sent(),e=$(),t.label=2;case 2:return ee(e)||(K=e),[2,e]}var n}))}))}}();return function(){return r(e,void 0,void 0,(function(){var e,n;return o(this,(function(r){switch(r.label){case 0:return[4,t()];case 1:return e=r.sent(),[2,[(n=function(e){return null===e?null:b(e,10)})(e[0]),n(e[1]),n(e[2]),n(e[3])]]}}))}))}},canvas:function(){return function(e){return r(this,void 0,void 0,(function(){var t,n,r,i,a,c,u;return o(this,(function(o){switch(o.label){case 0:return t=!1,i=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),a=i[0],c=i[1],function(e,t){return!(!t||!e.toDataURL)}(a,c)?[3,1]:(n=r="unsupported",[3,4]);case 1:return t=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(c),e?(n=r="skipped",[3,4]):[3,2];case 2:return[4,U(a,c)];case 3:u=o.sent(),n=u[0],r=u[1],o.label=4;case 4:return[2,{winding:t,geometry:n,text:r}]}}))}))}(I()&&E()&&P())},osCpu:function(){return navigator.oscpu},languages:function(){var e,t=navigator,n=[],r=t.language||t.userLanguage||t.browserLanguage||t.systemLanguage;if(void 0!==r&&n.push([r]),Array.isArray(t.languages))G()&&p([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||n.push(t.languages);else if("string"==typeof t.languages){var o=t.languages;o&&n.push(o.split(","))}return n},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return h(v(navigator.deviceMemory),void 0)},screenResolution:function(){var e,t,n;if(!(I()&&E()&&P()))return(n=[(t=function(e){return h(m(e),null)})((e=screen).width),t(e.height)]).sort().reverse(),n},hardwareConcurrency:function(){return h(m(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,t=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(t){var n=(new t).resolvedOptions().timeZone;if(n)return n}var r,o=(r=(new Date).getFullYear(),-Math.max(v(new Date(r,0,1).getTimezoneOffset()),v(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(Math.abs(o))},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){var e,t;if(!(j()||(e=window,t=navigator,p(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in t,"msSaveBlob"in t])>=3&&!j())))try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&I()&&!Y()?function(){if("iPad"===navigator.platform)return!0;var e=screen,t=e.width/e.height;return p(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,t>.65&&t<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var t=[],n=0;n<e.length;++n){var r=e[n];if(r){for(var o=[],i=0;i<r.length;++i){var a=r[i];o.push({type:a.type,suffixes:a.suffixes})}t.push({name:r.name,description:r.description,mimeTypes:o})}}return t}},touchSupport:function(){var e,t=navigator,n=0;void 0!==t.maxTouchPoints?n=m(t.maxTouchPoints):void 0!==t.msMaxTouchPoints&&(n=t.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return{maxTouchPoints:n,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],t=0,n=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];t<n.length;t++){var r=n[t],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var t=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",t}catch(e){return!1}},colorGamut:function(){for(var e=0,t=["rec2020","p3","srgb"];e<t.length;e++){var n=t[e];if(matchMedia("(color-gamut: ".concat(n,")")).matches)return n}},invertedColors:function(){return!!re("inverted")||!re("none")&&void 0},forcedColors:function(){return!!oe("active")||!oe("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}},contrast:function(){return ie("no-preference")?0:ie("high")||ie("more")?1:ie("low")||ie("less")?-1:ie("forced")?10:void 0},reducedMotion:function(){return!!ae("reduce")||!ae("no-preference")&&void 0},reducedTransparency:function(){return!!ce("reduce")||!ce("no-preference")&&void 0},hdr:function(){return!!ue("high")||!ue("standard")&&void 0},math:function(){var e,t=le.acos||se,n=le.acosh||se,r=le.asin||se,o=le.asinh||se,i=le.atanh||se,a=le.atan||se,c=le.sin||se,u=le.sinh||se,l=le.cos||se,s=le.cosh||se,d=le.tan||se,f=le.tanh||se,m=le.exp||se,v=le.expm1||se,h=le.log1p||se;return{acos:t(.12312423423423424),acosh:n(1e308),acoshPf:(e=1e154,le.log(e+le.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:le.log(1+le.sqrt(2)),atanh:i(.5),atanhPf:le.log(3)/2,atan:a(.5),sin:c(-1e300),sinh:u(1),sinhPf:le.exp(1)-1/le.exp(1)/2,cos:l(10.000000000123),cosh:s(1),coshPf:(le.exp(1)+1/le.exp(1))/2,tan:d(-1e300),tanh:f(1),tanhPf:(le.exp(2)-1)/(le.exp(2)+1),exp:m(1),expm1:v(1),expm1Pf:le.exp(1)-1,log1p:h(10),log1pPf:le.log(11),powPI:le.pow(le.PI,-100)}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var e=new Float32Array(1),t=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],t[3]},applePay:function(){var e=window.ApplePaySession;if("function"!=typeof(null==e?void 0:e.canMakePayments))return-1;try{return e.canMakePayments()?1:0}catch(e){return function(e){if(e instanceof Error){if("InvalidAccessError"===e.name){if(/\bfrom\b.*\binsecure\b/i.test(e.message))return-2;if(/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))return-3}if("SecurityError"===e.name&&/\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message))return-3}throw e}(e)}},privateClickMeasurement:function(){var e,t=document.createElement("a"),n=null!==(e=t.attributionSourceId)&&void 0!==e?e:t.attributionsourceid;return void 0===n?void 0:String(n)},webGlBasics:function(e){var t,n,r,o,i,a,c=be(e.cache);if(!c)return-1;if(!ke(c))return-2;var u=Le()?null:c.getExtension(pe);return{version:(null===(t=c.getParameter(c.VERSION))||void 0===t?void 0:t.toString())||"",vendor:(null===(n=c.getParameter(c.VENDOR))||void 0===n?void 0:n.toString())||"",vendorUnmasked:u?null===(r=c.getParameter(u.UNMASKED_VENDOR_WEBGL))||void 0===r?void 0:r.toString():"",renderer:(null===(o=c.getParameter(c.RENDERER))||void 0===o?void 0:o.toString())||"",rendererUnmasked:u?null===(i=c.getParameter(u.UNMASKED_RENDERER_WEBGL))||void 0===i?void 0:i.toString():"",shadingLanguageVersion:(null===(a=c.getParameter(c.SHADING_LANGUAGE_VERSION))||void 0===a?void 0:a.toString())||""}},webGlExtensions:function(e){var t=be(e.cache);if(!t)return-1;if(!ke(t))return-2;var n=t.getSupportedExtensions(),r=t.getContextAttributes(),o=[],i=[],a=[],c=[];if(r)for(var u=0,l=Object.keys(r);u<l.length;u++){var s=l[u];o.push("".concat(s,"=").concat(r[s]))}for(var d=0,f=ge(t);d<f.length;d++){var m=t[w=f[d]];i.push("".concat(w,"=").concat(m).concat(fe.has(m)?"=".concat(t.getParameter(m)):""))}if(n)for(var v=0,h=n;v<h.length;v++){var p=h[v];if(p!==pe||!Le()){var b=t.getExtension(p);if(b)for(var y=0,g=ge(b);y<g.length;y++){var w;m=b[w=g[y]],a.push("".concat(w,"=").concat(m).concat(me.has(m)?"=".concat(t.getParameter(m)):""))}}}for(var L=0,k=ve;L<k.length;L++)for(var V=k[L],S=0,W=he;S<W.length;S++){var Z=W[S],x=ye(t,V,Z);c.push("".concat(V,".").concat(Z,"=").concat(x.join(",")))}return a.sort(),i.sort(),{contextAttributes:o,parameters:i,shaderPrecisions:c,extensions:n,extensionParameters:a}}},Se="$ if upgrade to Pro: https://fpjs.dev/pro";function We(e){var t=function(e){if(H())return.4;if(I())return!Y()||E()&&P()?.3:.5;var t="value"in e.platform?e.platform.value:"";return/^Win/.test(t)?.6:/^Mac/.test(t)?.5:.7}(e),n=function(e){return b(.99+.01*e,1e-4)}(t);return{score:t,comment:Se.replace(/\$/g,"".concat(n))}}function Ze(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?n({name:(r=t).name,message:r.message,stack:null===(o=r.stack)||void 0===o?void 0:o.split("\n")},r):t;var r,o}),2)}function xe(e){return function(e,t){var n=function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r>127)return(new TextEncoder).encode(e);t[n]=r}return t}(e);t=t||0;var r,o=[0,n.length],i=o[1]%16,a=o[1]-i,c=[0,t],u=[0,t],l=[0,0],s=[0,0];for(r=0;r<a;r+=16)l[0]=n[r+4]|n[r+5]<<8|n[r+6]<<16|n[r+7]<<24,l[1]=n[r]|n[r+1]<<8|n[r+2]<<16|n[r+3]<<24,s[0]=n[r+12]|n[r+13]<<8|n[r+14]<<16|n[r+15]<<24,s[1]=n[r+8]|n[r+9]<<8|n[r+10]<<16|n[r+11]<<24,g(l,Z),w(l,31),g(l,x),k(c,l),w(c,27),y(c,u),g(c,M),y(c,R),g(s,x),w(s,33),g(s,Z),k(u,s),w(u,31),y(u,c),g(u,M),y(u,F);l[0]=0,l[1]=0,s[0]=0,s[1]=0;var d=[0,0];switch(i){case 15:d[1]=n[r+14],L(d,48),k(s,d);case 14:d[1]=n[r+13],L(d,40),k(s,d);case 13:d[1]=n[r+12],L(d,32),k(s,d);case 12:d[1]=n[r+11],L(d,24),k(s,d);case 11:d[1]=n[r+10],L(d,16),k(s,d);case 10:d[1]=n[r+9],L(d,8),k(s,d);case 9:d[1]=n[r+8],k(s,d),g(s,x),w(s,33),g(s,Z),k(u,s);case 8:d[1]=n[r+7],L(d,56),k(l,d);case 7:d[1]=n[r+6],L(d,48),k(l,d);case 6:d[1]=n[r+5],L(d,40),k(l,d);case 5:d[1]=n[r+4],L(d,32),k(l,d);case 4:d[1]=n[r+3],L(d,24),k(l,d);case 3:d[1]=n[r+2],L(d,16),k(l,d);case 2:d[1]=n[r+1],L(d,8),k(l,d);case 1:d[1]=n[r],k(l,d),g(l,Z),w(l,31),g(l,x),k(c,l)}return k(c,o),k(u,o),y(c,u),y(u,c),W(c),W(u),y(c,u),y(u,c),("00000000"+(c[0]>>>0).toString(16)).slice(-8)+("00000000"+(c[1]>>>0).toString(16)).slice(-8)+("00000000"+(u[0]>>>0).toString(16)).slice(-8)+("00000000"+(u[1]>>>0).toString(16)).slice(-8)}(function(e){for(var t="",n=0,r=Object.keys(e).sort();n<r.length;n++){var o=r[n],i=e[o],a="error"in i?"error":JSON.stringify(i.value);t+="".concat(t?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(a)}return t}(e))}function Me(e){return void 0===e&&(e=50),function(e,t){void 0===t&&(t=1/0);var n=window.requestIdleCallback;return n?new Promise((function(e){return n.call(window,(function(){return e()}),{timeout:t})})):c(Math.min(e,t))}(e,2*e)}function Re(e,t){var n=Date.now();return{get:function(i){return r(this,void 0,void 0,(function(){var r,c,u;return o(this,(function(o){switch(o.label){case 0:return r=Date.now(),[4,e()];case 1:return c=o.sent(),u=function(e){var t;return{get visitorId(){return void 0===t&&(t=xe(this.components)),t},set visitorId(e){t=e},confidence:We(e),components:e,version:a}}(c),(t||(null==i?void 0:i.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(u.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(r-n,"\nvisitorId: ").concat(u.visitorId,"\ncomponents: ").concat(Ze(c),"\n```")),[2,u]}}))}))}}}var Fe={load:function(e){var t;return void 0===e&&(e={}),r(this,void 0,void 0,(function(){var n,i,c;return o(this,(function(u){switch(u.label){case 0:return(null===(t=e.monitoring)||void 0===t||t)&&function(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{var e=new XMLHttpRequest;e.open("get","https://m1.openfpcdn.io/fingerprintjs/v".concat(a,"/npm-monitoring"),!0),e.send()}catch(e){console.error(e)}}(),n=e.delayFallback,i=e.debug,[4,Me(n)];case 1:return u.sent(),c=function(e){return function(e,t,n){var i=Object.keys(e).filter((function(e){return!function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return!0;return!1}(n,e)})),a=d(i,(function(n){return function(e,t){var n=new Promise((function(n){var r=Date.now();s(e.bind(null,t),(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var o=Date.now()-r;if(!e[0])return n((function(){return{error:e[1],duration:o}}));var i=e[1];if(function(e){return"function"!=typeof e}(i))return n((function(){return{value:i,duration:o}}));n((function(){return new Promise((function(e){var t=Date.now();s(i,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=o+Date.now()-t;if(!n[0])return e({error:n[1],duration:i});e({value:n[1],duration:i})}))}))}))}))}));return f(n),function(){return n.then((function(e){return e()}))}}(e[n],t)}));return f(a),function(){return r(this,void 0,void 0,(function(){var e,t,n,r;return o(this,(function(o){switch(o.label){case 0:return[4,a];case 1:return[4,d(o.sent(),(function(e){var t=e();return f(t),t}))];case 2:return e=o.sent(),[4,Promise.all(e)];case 3:for(t=o.sent(),n={},r=0;r<i.length;++r)n[i[r]]=t[r];return[2,n]}}))}))}}(Ve,e,[])}({cache:{},debug:i}),[2,Re(c,i)]}}))}))},hashComponents:xe,componentsToDebugString:Ze};let je;async function Ge(){const e=Fe.load(),t=await e,n=await t.get();return je=n.visitorId,je}function Ie(){return je}return Ge(),t})()));