import{aY as ye,aX as hr}from"./index-DacOZnWA.js";import{r as Nr,g as Dr,c as qr,t as Ur}from"./browser-BwFqrqKh.js";var xe={exports:{}};/*! https://mths.be/punycode v1.4.1 by @mathias */xe.exports;(function(r,e){(function(t){var n=e&&!e.nodeType&&e,o=r&&!r.nodeType&&r,a=typeof ye=="object"&&ye;(a.global===a||a.window===a||a.self===a)&&(t=a);var f,i=2147483647,l=36,u=1,h=26,w=38,p=700,y=72,v=128,F="-",O=/^xn--/,d=/[^\x20-\x7E]/,c=/[\x2E\u3002\uFF0E\uFF61]/g,S={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},$=l-u,b=Math.floor,x=String.fromCharCode,M;function C(s){throw new RangeError(S[s])}function R(s,m){for(var g=s.length,T=[];g--;)T[g]=m(s[g]);return T}function _(s,m){var g=s.split("@"),T="";g.length>1&&(T=g[0]+"@",s=g[1]),s=s.replace(c,".");var A=s.split("."),W=R(A,m).join(".");return T+W}function B(s){for(var m=[],g=0,T=s.length,A,W;g<T;)A=s.charCodeAt(g++),A>=55296&&A<=56319&&g<T?(W=s.charCodeAt(g++),(W&64512)==56320?m.push(((A&1023)<<10)+(W&1023)+65536):(m.push(A),g--)):m.push(A);return m}function V(s){return R(s,function(m){var g="";return m>65535&&(m-=65536,g+=x(m>>>10&1023|55296),m=56320|m&1023),g+=x(m),g}).join("")}function E(s){return s-48<10?s-22:s-65<26?s-65:s-97<26?s-97:l}function U(s,m){return s+22+75*(s<26)-((m!=0)<<5)}function N(s,m,g){var T=0;for(s=g?b(s/p):s>>1,s+=b(s/m);s>$*h>>1;T+=l)s=b(s/$);return b(T+($+1)*s/(s+w))}function z(s){var m=[],g=s.length,T,A=0,W=v,L=y,H,G,Z,Y,D,Q,K,ee,ie;for(H=s.lastIndexOf(F),H<0&&(H=0),G=0;G<H;++G)s.charCodeAt(G)>=128&&C("not-basic"),m.push(s.charCodeAt(G));for(Z=H>0?H+1:0;Z<g;){for(Y=A,D=1,Q=l;Z>=g&&C("invalid-input"),K=E(s.charCodeAt(Z++)),(K>=l||K>b((i-A)/D))&&C("overflow"),A+=K*D,ee=Q<=L?u:Q>=L+h?h:Q-L,!(K<ee);Q+=l)ie=l-ee,D>b(i/ie)&&C("overflow"),D*=ie;T=m.length+1,L=N(A-Y,T,Y==0),b(A/T)>i-W&&C("overflow"),W+=b(A/T),A%=T,m.splice(A++,0,W)}return V(m)}function fe(s){var m,g,T,A,W,L,H,G,Z,Y,D,Q=[],K,ee,ie,Re;for(s=B(s),K=s.length,m=v,g=0,W=y,L=0;L<K;++L)D=s[L],D<128&&Q.push(x(D));for(T=A=Q.length,A&&Q.push(F);T<K;){for(H=i,L=0;L<K;++L)D=s[L],D>=m&&D<H&&(H=D);for(ee=T+1,H-m>b((i-g)/ee)&&C("overflow"),g+=(H-m)*ee,m=H,L=0;L<K;++L)if(D=s[L],D<m&&++g>i&&C("overflow"),D==m){for(G=g,Z=l;Y=Z<=W?u:Z>=W+h?h:Z-W,!(G<Y);Z+=l)Re=G-Y,ie=l-Y,Q.push(x(U(Y+Re%ie,0))),G=b(Re/ie);Q.push(x(U(G,0))),W=N(g,ee,T==A),g=0,++T}++g,++m}return Q.join("")}function Se(s){return _(s,function(m){return O.test(m)?z(m.slice(4).toLowerCase()):m})}function he(s){return _(s,function(m){return d.test(m)?"xn--"+fe(m):m})}if(f={version:"1.4.1",ucs2:{decode:B,encode:V},decode:z,encode:fe,toASCII:he,toUnicode:Se},n&&o)if(r.exports==n)o.exports=f;else for(M in f)f.hasOwnProperty(M)&&(n[M]=f[M]);else t.punycode=f})(ye)})(xe,xe.exports);var Wr=xe.exports;const Br=hr(Wr);var Qe=typeof Map=="function"&&Map.prototype,$e=Object.getOwnPropertyDescriptor&&Qe?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Te=Qe&&$e&&typeof $e.get=="function"?$e.get:null,Ze=Qe&&Map.prototype.forEach,ke=typeof Set=="function"&&Set.prototype,Ae=Object.getOwnPropertyDescriptor&&ke?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Ce=ke&&Ae&&typeof Ae.get=="function"?Ae.get:null,Je=ke&&Set.prototype.forEach,zr=typeof WeakMap=="function"&&WeakMap.prototype,me=zr?WeakMap.prototype.has:null,Hr=typeof WeakSet=="function"&&WeakSet.prototype,de=Hr?WeakSet.prototype.has:null,Qr=typeof WeakRef=="function"&&WeakRef.prototype,Xe=Qr?WeakRef.prototype.deref:null,kr=Boolean.prototype.valueOf,Vr=Object.prototype.toString,Gr=Function.prototype.toString,Kr=String.prototype.match,Ve=String.prototype.slice,te=String.prototype.replace,Zr=String.prototype.toUpperCase,Ye=String.prototype.toLowerCase,pr=RegExp.prototype.test,je=Array.prototype.concat,X=Array.prototype.join,Jr=Array.prototype.slice,er=Math.floor,Me=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Fe=Object.getOwnPropertySymbols,_e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,ue=typeof Symbol=="function"&&typeof Symbol.iterator=="object",q=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===ue||!0)?Symbol.toStringTag:null,yr=Object.prototype.propertyIsEnumerable,rr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function tr(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||pr.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-er(-r):er(r);if(n!==r){var o=String(n),a=Ve.call(e,o.length+1);return te.call(o,t,"$&_")+"."+te.call(te.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return te.call(e,t,"$&_")}var Ne=Nr,nr=Ne.custom,ar=dr(nr)?nr:null,Xr=function r(e,t,n,o){var a=t||{};if(re(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(re(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=re(a,"customInspect")?a.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(re(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(re(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var i=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return gr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return i?tr(e,l):l}if(typeof e=="bigint"){var u=String(e)+"n";return i?tr(e,u):u}var h=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=h&&h>0&&typeof e=="object")return De(e)?"[Array]":"[Object]";var w=mt(a,n);if(typeof o>"u")o=[];else if(vr(o,e)>=0)return"[Circular]";function p(E,U,N){if(U&&(o=Jr.call(o),o.push(U)),N){var z={depth:a.depth};return re(a,"quoteStyle")&&(z.quoteStyle=a.quoteStyle),r(E,z,n+1,o)}return r(E,a,n+1,o)}if(typeof e=="function"&&!ir(e)){var y=ot(e),v=we(e,p);return"[Function"+(y?": "+y:" (anonymous)")+"]"+(v.length>0?" { "+X.call(v,", ")+" }":"")}if(dr(e)){var F=ue?te.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):_e.call(e);return typeof e=="object"&&!ue?pe(F):F}if(ht(e)){for(var O="<"+Ye.call(String(e.nodeName)),d=e.attributes||[],c=0;c<d.length;c++)O+=" "+d[c].name+"="+mr(Yr(d[c].value),"double",a);return O+=">",e.childNodes&&e.childNodes.length&&(O+="..."),O+="</"+Ye.call(String(e.nodeName))+">",O}if(De(e)){if(e.length===0)return"[]";var S=we(e,p);return w&&!yt(S)?"["+qe(S,w)+"]":"[ "+X.call(S,", ")+" ]"}if(et(e)){var $=we(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!yr.call(e,"cause")?"{ ["+String(e)+"] "+X.call(je.call("[cause]: "+p(e.cause),$),", ")+" }":$.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+X.call($,", ")+" }"}if(typeof e=="object"&&f){if(ar&&typeof e[ar]=="function"&&Ne)return Ne(e,{depth:h-n});if(f!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(ft(e)){var b=[];return Ze&&Ze.call(e,function(E,U){b.push(p(U,e,!0)+" => "+p(E,e))}),or("Map",Te.call(e),b,w)}if(st(e)){var x=[];return Je&&Je.call(e,function(E){x.push(p(E,e))}),or("Set",Ce.call(e),x,w)}if(lt(e))return Ee("WeakMap");if(ct(e))return Ee("WeakSet");if(ut(e))return Ee("WeakRef");if(tt(e))return pe(p(Number(e)));if(at(e))return pe(p(Me.call(e)));if(nt(e))return pe(kr.call(e));if(rt(e))return pe(p(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof ye<"u"&&e===ye)return"{ [object globalThis] }";if(!jr(e)&&!ir(e)){var M=we(e,p),C=rr?rr(e)===Object.prototype:e instanceof Object||e.constructor===Object,R=e instanceof Object?"":"null prototype",_=!C&&q&&Object(e)===e&&q in e?Ve.call(ae(e),8,-1):R?"Object":"",B=C||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",V=B+(_||R?"["+X.call(je.call([],_||[],R||[]),": ")+"] ":"");return M.length===0?V+"{}":w?V+"{"+qe(M,w)+"}":V+"{ "+X.call(M,", ")+" }"}return String(e)};function mr(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Yr(r){return te.call(String(r),/"/g,"&quot;")}function De(r){return ae(r)==="[object Array]"&&(!q||!(typeof r=="object"&&q in r))}function jr(r){return ae(r)==="[object Date]"&&(!q||!(typeof r=="object"&&q in r))}function ir(r){return ae(r)==="[object RegExp]"&&(!q||!(typeof r=="object"&&q in r))}function et(r){return ae(r)==="[object Error]"&&(!q||!(typeof r=="object"&&q in r))}function rt(r){return ae(r)==="[object String]"&&(!q||!(typeof r=="object"&&q in r))}function tt(r){return ae(r)==="[object Number]"&&(!q||!(typeof r=="object"&&q in r))}function nt(r){return ae(r)==="[object Boolean]"&&(!q||!(typeof r=="object"&&q in r))}function dr(r){if(ue)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!_e)return!1;try{return _e.call(r),!0}catch{}return!1}function at(r){if(!r||typeof r!="object"||!Me)return!1;try{return Me.call(r),!0}catch{}return!1}var it=Object.prototype.hasOwnProperty||function(r){return r in this};function re(r,e){return it.call(r,e)}function ae(r){return Vr.call(r)}function ot(r){if(r.name)return r.name;var e=Kr.call(Gr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function vr(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function ft(r){if(!Te||!r||typeof r!="object")return!1;try{Te.call(r);try{Ce.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function lt(r){if(!me||!r||typeof r!="object")return!1;try{me.call(r,me);try{de.call(r,de)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function ut(r){if(!Xe||!r||typeof r!="object")return!1;try{return Xe.call(r),!0}catch{}return!1}function st(r){if(!Ce||!r||typeof r!="object")return!1;try{Ce.call(r);try{Te.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function ct(r){if(!de||!r||typeof r!="object")return!1;try{de.call(r,de);try{me.call(r,me)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function ht(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function gr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return gr(Ve.call(r,0,e.maxStringLength),e)+n}var o=te.call(te.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,pt);return mr(o,"single",e)}function pt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+Zr.call(e.toString(16))}function pe(r){return"Object("+r+")"}function Ee(r){return r+" { ? }"}function or(r,e,t,n){var o=n?qe(t,n):X.call(t,", ");return r+" ("+e+") {"+o+"}"}function yt(r){for(var e=0;e<r.length;e++)if(vr(r[e],`
`)>=0)return!1;return!0}function mt(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=X.call(Array(r.indent+1)," ");else return null;return{base:t,prev:X.call(Array(e+1),t)}}function qe(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+X.call(r,","+t)+`
`+e.prev}function we(r,e){var t=De(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=re(r,o)?e(r[o],r):""}var a=typeof Fe=="function"?Fe(r):[],f;if(ue){f={};for(var i=0;i<a.length;i++)f["$"+a[i]]=a[i]}for(var l in r)re(r,l)&&(t&&String(Number(l))===l&&l<r.length||ue&&f["$"+l]instanceof Symbol||(pr.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r))));if(typeof Fe=="function")for(var u=0;u<a.length;u++)yr.call(r,a[u])&&n.push("["+e(a[u])+"]: "+e(r[a[u]],r));return n}var Sr=Dr,ce=qr,dt=Xr,vt=Ur,be=Sr("%WeakMap%",!0),Oe=Sr("%Map%",!0),gt=ce("WeakMap.prototype.get",!0),St=ce("WeakMap.prototype.set",!0),wt=ce("WeakMap.prototype.has",!0),bt=ce("Map.prototype.get",!0),Ot=ce("Map.prototype.set",!0),xt=ce("Map.prototype.has",!0),Ge=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Tt=function(r,e){var t=Ge(r,e);return t&&t.value},Ct=function(r,e,t){var n=Ge(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Rt=function(r,e){return!!Ge(r,e)},$t=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new vt("Side channel does not contain "+dt(a))},get:function(a){if(be&&a&&(typeof a=="object"||typeof a=="function")){if(e)return gt(e,a)}else if(Oe){if(t)return bt(t,a)}else if(n)return Tt(n,a)},has:function(a){if(be&&a&&(typeof a=="object"||typeof a=="function")){if(e)return wt(e,a)}else if(Oe){if(t)return xt(t,a)}else if(n)return Rt(n,a);return!1},set:function(a,f){be&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new be),St(e,a,f)):Oe?(t||(t=new Oe),Ot(t,a,f)):(n||(n={key:{},next:null}),Ct(n,a,f))}};return o},At=String.prototype.replace,Ft=/%20/g,Ie={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ke={default:Ie.RFC3986,formatters:{RFC1738:function(r){return At.call(r,Ft,"+")},RFC3986:function(r){return String(r)}},RFC1738:Ie.RFC1738,RFC3986:Ie.RFC3986},Et=Ke,Le=Object.prototype.hasOwnProperty,oe=Array.isArray,J=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),It=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(oe(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]<"u"&&o.push(n[a]);t.obj[t.prop]=o}}},wr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},Lt=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(oe(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Le.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return oe(e)&&!oe(t)&&(o=wr(e,n)),oe(e)&&oe(t)?(t.forEach(function(a,f){if(Le.call(e,f)){var i=e[f];i&&typeof i=="object"&&a&&typeof a=="object"?e[f]=r(i,a,n):e.push(a)}else e[f]=a}),e):Object.keys(t).reduce(function(a,f){var i=t[f];return Le.call(a,f)?a[f]=r(a[f],i,n):a[f]=i,a},o)},Pt=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},Mt=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},_t=function(e,t,n,o,a){if(e.length===0)return e;var f=e;if(typeof e=="symbol"?f=Symbol.prototype.toString.call(e):typeof e!="string"&&(f=String(e)),n==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(h){return"%26%23"+parseInt(h.slice(2),16)+"%3B"});for(var i="",l=0;l<f.length;++l){var u=f.charCodeAt(l);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===Et.RFC1738&&(u===40||u===41)){i+=f.charAt(l);continue}if(u<128){i=i+J[u];continue}if(u<2048){i=i+(J[192|u>>6]+J[128|u&63]);continue}if(u<55296||u>=57344){i=i+(J[224|u>>12]+J[128|u>>6&63]+J[128|u&63]);continue}l+=1,u=65536+((u&1023)<<10|f.charCodeAt(l)&1023),i+=J[240|u>>18]+J[128|u>>12&63]+J[128|u>>6&63]+J[128|u&63]}return i},Nt=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],f=a.obj[a.prop],i=Object.keys(f),l=0;l<i.length;++l){var u=i[l],h=f[u];typeof h=="object"&&h!==null&&n.indexOf(h)===-1&&(t.push({obj:f,prop:u}),n.push(h))}return It(t),e},Dt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},qt=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Ut=function(e,t){return[].concat(e,t)},Wt=function(e,t){if(oe(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},br={arrayToObject:wr,assign:Pt,combine:Ut,compact:Nt,decode:Mt,encode:_t,isBuffer:qt,isRegExp:Dt,maybeMap:Wt,merge:Lt},Or=$t,Ue=br,ve=Ke,Bt=Object.prototype.hasOwnProperty,fr={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},j=Array.isArray,zt=String.prototype.split,Ht=Array.prototype.push,xr=function(r,e){Ht.apply(r,j(e)?e:[e])},Qt=Date.prototype.toISOString,lr=ve.default,P={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:Ue.encode,encodeValuesOnly:!1,format:lr,formatter:ve.formatters[lr],indices:!1,serializeDate:function(e){return Qt.call(e)},skipNulls:!1,strictNullHandling:!1},kt=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Pe={},Vt=function r(e,t,n,o,a,f,i,l,u,h,w,p,y,v,F,O){for(var d=e,c=O,S=0,$=!1;(c=c.get(Pe))!==void 0&&!$;){var b=c.get(e);if(S+=1,typeof b<"u"){if(b===S)throw new RangeError("Cyclic object value");$=!0}typeof c.get(Pe)>"u"&&(S=0)}if(typeof l=="function"?d=l(t,d):d instanceof Date?d=w(d):n==="comma"&&j(d)&&(d=Ue.maybeMap(d,function(he){return he instanceof Date?w(he):he})),d===null){if(a)return i&&!v?i(t,P.encoder,F,"key",p):t;d=""}if(kt(d)||Ue.isBuffer(d)){if(i){var x=v?t:i(t,P.encoder,F,"key",p);if(n==="comma"&&v){for(var M=zt.call(String(d),","),C="",R=0;R<M.length;++R)C+=(R===0?"":",")+y(i(M[R],P.encoder,F,"value",p));return[y(x)+(o&&j(d)&&M.length===1?"[]":"")+"="+C]}return[y(x)+"="+y(i(d,P.encoder,F,"value",p))]}return[y(t)+"="+y(String(d))]}var _=[];if(typeof d>"u")return _;var B;if(n==="comma"&&j(d))B=[{value:d.length>0?d.join(",")||null:void 0}];else if(j(l))B=l;else{var V=Object.keys(d);B=u?V.sort(u):V}for(var E=o&&j(d)&&d.length===1?t+"[]":t,U=0;U<B.length;++U){var N=B[U],z=typeof N=="object"&&typeof N.value<"u"?N.value:d[N];if(!(f&&z===null)){var fe=j(d)?typeof n=="function"?n(E,N):E:E+(h?"."+N:"["+N+"]");O.set(e,S);var Se=Or();Se.set(Pe,O),xr(_,r(z,fe,n,o,a,f,i,l,u,h,w,p,y,v,F,Se))}}return _},Gt=function(e){if(!e)return P;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||P.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=ve.default;if(typeof e.format<"u"){if(!Bt.call(ve.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=ve.formatters[n],a=P.filter;return(typeof e.filter=="function"||j(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:P.addQueryPrefix,allowDots:typeof e.allowDots>"u"?P.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:P.charsetSentinel,delimiter:typeof e.delimiter>"u"?P.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:P.encode,encoder:typeof e.encoder=="function"?e.encoder:P.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:P.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:P.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:P.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:P.strictNullHandling}},Kt=function(r,e){var t=r,n=Gt(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):j(n.filter)&&(a=n.filter,o=a);var f=[];if(typeof t!="object"||t===null)return"";var i;e&&e.arrayFormat in fr?i=e.arrayFormat:e&&"indices"in e?i=e.indices?"indices":"repeat":i="indices";var l=fr[i];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var u=l==="comma"&&e&&e.commaRoundTrip;o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var h=Or(),w=0;w<o.length;++w){var p=o[w];n.skipNulls&&t[p]===null||xr(f,Vt(t[p],p,l,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,h))}var y=f.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),y.length>0?v+y:""},se=br,We=Object.prototype.hasOwnProperty,Zt=Array.isArray,I={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:se.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Jt=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},Tr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},Xt="utf8=%26%2310003%3B",Yt="utf8=%E2%9C%93",jt=function(e,t){var n={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,f=o.split(t.delimiter,a),i=-1,l,u=t.charset;if(t.charsetSentinel)for(l=0;l<f.length;++l)f[l].indexOf("utf8=")===0&&(f[l]===Yt?u="utf-8":f[l]===Xt&&(u="iso-8859-1"),i=l,l=f.length);for(l=0;l<f.length;++l)if(l!==i){var h=f[l],w=h.indexOf("]="),p=w===-1?h.indexOf("="):w+1,y,v;p===-1?(y=t.decoder(h,I.decoder,u,"key"),v=t.strictNullHandling?null:""):(y=t.decoder(h.slice(0,p),I.decoder,u,"key"),v=se.maybeMap(Tr(h.slice(p+1),t),function(F){return t.decoder(F,I.decoder,u,"value")})),v&&t.interpretNumericEntities&&u==="iso-8859-1"&&(v=Jt(v)),h.indexOf("[]=")>-1&&(v=Zt(v)?[v]:v),We.call(n,y)?n[y]=se.combine(n[y],v):n[y]=v}return n},en=function(r,e,t,n){for(var o=n?e:Tr(e,t),a=r.length-1;a>=0;--a){var f,i=r[a];if(i==="[]"&&t.parseArrays)f=[].concat(o);else{f=t.plainObjects?Object.create(null):{};var l=i.charAt(0)==="["&&i.charAt(i.length-1)==="]"?i.slice(1,-1):i,u=parseInt(l,10);!t.parseArrays&&l===""?f={0:o}:!isNaN(u)&&i!==l&&String(u)===l&&u>=0&&t.parseArrays&&u<=t.arrayLimit?(f=[],f[u]=o):l!=="__proto__"&&(f[l]=o)}o=f}return o},rn=function(e,t,n,o){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,f=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=n.depth>0&&f.exec(a),u=l?a.slice(0,l.index):a,h=[];if(u){if(!n.plainObjects&&We.call(Object.prototype,u)&&!n.allowPrototypes)return;h.push(u)}for(var w=0;n.depth>0&&(l=i.exec(a))!==null&&w<n.depth;){if(w+=1,!n.plainObjects&&We.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;h.push(l[1])}return l&&h.push("["+a.slice(l.index)+"]"),en(h,t,n,o)}},tn=function(e){if(!e)return I;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?I.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?I.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:I.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:I.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:I.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:I.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:I.comma,decoder:typeof e.decoder=="function"?e.decoder:I.decoder,delimiter:typeof e.delimiter=="string"||se.isRegExp(e.delimiter)?e.delimiter:I.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:I.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:I.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:I.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:I.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:I.strictNullHandling}},nn=function(r,e){var t=tn(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?jt(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),f=0;f<a.length;++f){var i=a[f],l=rn(i,n[i],t,typeof r=="string");o=se.merge(o,l,t)}return t.allowSparse===!0?o:se.compact(o)},an=Kt,on=nn,fn=Ke,ln={formats:fn,parse:on,stringify:an};const un=hr(ln);var sn=Br;function k(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var cn=/^([a-z0-9.+-]+:)/i,hn=/:[0-9]*$/,pn=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,yn=["<",">",'"',"`"," ","\r",`
`,"	"],mn=["{","}","|","\\","^","`"].concat(yn),Be=["'"].concat(mn),ur=["%","/","?",";","#"].concat(Be),sr=["/","?","#"],dn=255,cr=/^[+a-z0-9A-Z_-]{0,63}$/,vn=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,gn={javascript:!0,"javascript:":!0},ze={javascript:!0,"javascript:":!0},le={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},He=un;function ge(r,e,t){if(r&&typeof r=="object"&&r instanceof k)return r;var n=new k;return n.parse(r,e,t),n}k.prototype.parse=function(r,e,t){if(typeof r!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var n=r.indexOf("?"),o=n!==-1&&n<r.indexOf("#")?"?":"#",a=r.split(o),f=/\\/g;a[0]=a[0].replace(f,"/"),r=a.join(o);var i=r;if(i=i.trim(),!t&&r.split("#").length===1){var l=pn.exec(i);if(l)return this.path=i,this.href=i,this.pathname=l[1],l[2]?(this.search=l[2],e?this.query=He.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var u=cn.exec(i);if(u){u=u[0];var h=u.toLowerCase();this.protocol=h,i=i.substr(u.length)}if(t||u||i.match(/^\/\/[^@/]+@[^@/]+/)){var w=i.substr(0,2)==="//";w&&!(u&&ze[u])&&(i=i.substr(2),this.slashes=!0)}if(!ze[u]&&(w||u&&!le[u])){for(var p=-1,y=0;y<sr.length;y++){var v=i.indexOf(sr[y]);v!==-1&&(p===-1||v<p)&&(p=v)}var F,O;p===-1?O=i.lastIndexOf("@"):O=i.lastIndexOf("@",p),O!==-1&&(F=i.slice(0,O),i=i.slice(O+1),this.auth=decodeURIComponent(F)),p=-1;for(var y=0;y<ur.length;y++){var v=i.indexOf(ur[y]);v!==-1&&(p===-1||v<p)&&(p=v)}p===-1&&(p=i.length),this.host=i.slice(0,p),i=i.slice(p),this.parseHost(),this.hostname=this.hostname||"";var d=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!d)for(var c=this.hostname.split(/\./),y=0,S=c.length;y<S;y++){var $=c[y];if($&&!$.match(cr)){for(var b="",x=0,M=$.length;x<M;x++)$.charCodeAt(x)>127?b+="x":b+=$[x];if(!b.match(cr)){var C=c.slice(0,y),R=c.slice(y+1),_=$.match(vn);_&&(C.push(_[1]),R.unshift(_[2])),R.length&&(i="/"+R.join(".")+i),this.hostname=C.join(".");break}}}this.hostname.length>dn?this.hostname="":this.hostname=this.hostname.toLowerCase(),d||(this.hostname=sn.toASCII(this.hostname));var B=this.port?":"+this.port:"",V=this.hostname||"";this.host=V+B,this.href+=this.host,d&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),i[0]!=="/"&&(i="/"+i))}if(!gn[h])for(var y=0,S=Be.length;y<S;y++){var E=Be[y];if(i.indexOf(E)!==-1){var U=encodeURIComponent(E);U===E&&(U=escape(E)),i=i.split(E).join(U)}}var N=i.indexOf("#");N!==-1&&(this.hash=i.substr(N),i=i.slice(0,N));var z=i.indexOf("?");if(z!==-1?(this.search=i.substr(z),this.query=i.substr(z+1),e&&(this.query=He.parse(this.query)),i=i.slice(0,z)):e&&(this.search="",this.query={}),i&&(this.pathname=i),le[h]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var B=this.pathname||"",fe=this.search||"";this.path=B+fe}return this.href=this.format(),this};function Sn(r){return typeof r=="string"&&(r=ge(r)),r instanceof k?r.format():k.prototype.format.call(r)}k.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",n=this.hash||"",o=!1,a="";this.host?o=r+this.host:this.hostname&&(o=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(a=He.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var f=this.search||a&&"?"+a||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||le[e])&&o!==!1?(o="//"+(o||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):o||(o=""),n&&n.charAt(0)!=="#"&&(n="#"+n),f&&f.charAt(0)!=="?"&&(f="?"+f),t=t.replace(/[?#]/g,function(i){return encodeURIComponent(i)}),f=f.replace("#","%23"),e+o+t+f+n};function wn(r,e){return ge(r,!1,!0).resolve(e)}k.prototype.resolve=function(r){return this.resolveObject(ge(r,!1,!0)).format()};function bn(r,e){return r?ge(r,!1,!0).resolveObject(e):e}k.prototype.resolveObject=function(r){if(typeof r=="string"){var e=new k;e.parse(r,!1,!0),r=e}for(var t=new k,n=Object.keys(this),o=0;o<n.length;o++){var a=n[o];t[a]=this[a]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var f=Object.keys(r),i=0;i<f.length;i++){var l=f[i];l!=="protocol"&&(t[l]=r[l])}return le[t.protocol]&&t.hostname&&!t.pathname&&(t.pathname="/",t.path=t.pathname),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!le[r.protocol]){for(var u=Object.keys(r),h=0;h<u.length;h++){var w=u[h];t[w]=r[w]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!ze[r.protocol]){for(var S=(r.pathname||"").split("/");S.length&&!(r.host=S.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),S[0]!==""&&S.unshift(""),S.length<2&&S.unshift(""),t.pathname=S.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var p=t.pathname||"",y=t.search||"";t.path=p+y}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var v=t.pathname&&t.pathname.charAt(0)==="/",F=r.host||r.pathname&&r.pathname.charAt(0)==="/",O=F||v||t.host&&r.pathname,d=O,c=t.pathname&&t.pathname.split("/")||[],S=r.pathname&&r.pathname.split("/")||[],$=t.protocol&&!le[t.protocol];if($&&(t.hostname="",t.port=null,t.host&&(c[0]===""?c[0]=t.host:c.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(S[0]===""?S[0]=r.host:S.unshift(r.host)),r.host=null),O=O&&(S[0]===""||c[0]==="")),F)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,c=S;else if(S.length)c||(c=[]),c.pop(),c=c.concat(S),t.search=r.search,t.query=r.query;else if(r.search!=null){if($){t.host=c.shift(),t.hostname=t.host;var b=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;b&&(t.auth=b.shift(),t.hostname=b.shift(),t.host=t.hostname)}return t.search=r.search,t.query=r.query,(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!c.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var x=c.slice(-1)[0],M=(t.host||r.host||c.length>1)&&(x==="."||x==="..")||x==="",C=0,R=c.length;R>=0;R--)x=c[R],x==="."?c.splice(R,1):x===".."?(c.splice(R,1),C++):C&&(c.splice(R,1),C--);if(!O&&!d)for(;C--;C)c.unshift("..");O&&c[0]!==""&&(!c[0]||c[0].charAt(0)!=="/")&&c.unshift(""),M&&c.join("/").substr(-1)!=="/"&&c.push("");var _=c[0]===""||c[0]&&c[0].charAt(0)==="/";if($){t.hostname=_?"":c.length?c.shift():"",t.host=t.hostname;var b=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;b&&(t.auth=b.shift(),t.hostname=b.shift(),t.host=t.hostname)}return O=O||t.host&&c.length,O&&!_&&c.unshift(""),c.length>0?t.pathname=c.join("/"):(t.pathname=null,t.path=null),(t.pathname!==null||t.search!==null)&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};k.prototype.parseHost=function(){var r=this.host,e=hn.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};var On=ge,xn=wn,Cr=bn,Tn=Sn,Cn=k;function Rn(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];o==="."?r.splice(n,1):o===".."?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}function $n(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if(typeof n!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!n)continue;r=n+"/"+r,e=n.charAt(0)==="/"}return r=Rn(An(r.split("/"),function(o){return!!o}),!e).join("/"),(e?"/":"")+r||"."}function An(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Rr=function(r){function e(){var n=this||self;return delete r.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();r.defineProperty(r.prototype,"__magic__",{configurable:!0,get:e});var t=__magic__;return t}(Object),Fn=Tn,$r=On,Ar=xn,Fr=Cn,ne=Rr.URL,Er=Rr.URLSearchParams,En=/%/g,In=/\\/g,Ln=/\n/g,Pn=/\r/g,Mn=/\t/g,_n=47;function Nn(r){var e=r??null;return!!(e!==null&&(e!=null&&e.href)&&(e!=null&&e.origin))}function Dn(r){if(r.hostname!=="")throw new TypeError('File URL host must be "localhost" or empty on browser');for(var e=r.pathname,t=0;t<e.length;t++)if(e[t]==="%"){var n=e.codePointAt(t+2)|32;if(e[t+1]==="2"&&n===102)throw new TypeError("File URL path must not include encoded / characters")}return decodeURIComponent(e)}function qn(r){return r.includes("%")&&(r=r.replace(En,"%25")),r.includes("\\")&&(r=r.replace(In,"%5C")),r.includes(`
`)&&(r=r.replace(Ln,"%0A")),r.includes("\r")&&(r=r.replace(Pn,"%0D")),r.includes("	")&&(r=r.replace(Mn,"%09")),r}var Ir=function(e){if(typeof e>"u")throw new TypeError('The "domain" argument must be specified');return new ne("http://"+e).hostname},Lr=function(e){if(typeof e>"u")throw new TypeError('The "domain" argument must be specified');return new ne("http://"+e).hostname},Pr=function(e){var t=new ne("file://"),n=$n(e),o=e.charCodeAt(e.length-1);return o===_n&&n[n.length-1]!=="/"&&(n+="/"),t.pathname=qn(n),t},Mr=function(e){if(!Nn(e)&&typeof e!="string")throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type '+typeof e+" ("+e+")");var t=new ne(e);if(t.protocol!=="file:")throw new TypeError("The URL must be of scheme file");return Dn(t)},_r=function(e,t){var n,o,a,f;if(t===void 0&&(t={}),!(e instanceof ne))return Fn(e);if(typeof t!="object"||t===null)throw new TypeError('The "options" argument must be of type object.');var i=(n=t.auth)!=null?n:!0,l=(o=t.fragment)!=null?o:!0,u=(a=t.search)!=null?a:!0;(f=t.unicode)!=null;var h=new ne(e.toString());return i||(h.username="",h.password=""),l||(h.hash=""),u||(h.search=""),h.toString()},Un={format:_r,parse:$r,resolve:Ar,resolveObject:Cr,Url:Fr,URL:ne,URLSearchParams:Er,domainToASCII:Ir,domainToUnicode:Lr,pathToFileURL:Pr,fileURLToPath:Mr};const zn=Object.freeze(Object.defineProperty({__proto__:null,URL:ne,URLSearchParams:Er,Url:Fr,default:Un,domainToASCII:Ir,domainToUnicode:Lr,fileURLToPath:Mr,format:_r,parse:$r,pathToFileURL:Pr,resolve:Ar,resolveObject:Cr},Symbol.toStringTag,{value:"Module"}));export{_r as f,zn as u};