// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var a,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=a):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var a=t;function l(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function d(r,t){return null!=r&&b.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=v()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=d(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},j=Number,h=j.prototype.toString;var A=v();function _(r){return"object"==typeof r&&(r instanceof j||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function g(r){return y(r)||_(r)}l(g,"isPrimitive",y),l(g,"isObject",_);var O=Number.POSITIVE_INFINITY,U=j.NEGATIVE_INFINITY,E=Math.floor;function N(r){return E(r)===r}function S(r){return r<O&&r>U&&N(r)}function P(r){return y(r)&&S(r)}function T(r){return _(r)&&S(r.valueOf())}function I(r){return P(r)||T(r)}function F(r){return P(r)&&r>0}function G(r){return T(r)&&r.valueOf()>0}function H(r){return F(r)||G(r)}function R(r){return N(r/2)}l(I,"isPrimitive",P),l(I,"isObject",T),l(H,"isPrimitive",F),l(H,"isObject",G);var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function L(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function x(r){return r!=r}function V(r){return r===O||r===U}var M="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null;var C,W="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(M&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y=C,X="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null;var z,D="function"==typeof Float64Array?Float64Array:void 0;z=function(){var r,t,n;if("function"!=typeof q)return!1;try{t=new q([1,3.14,-3.14,NaN]),n=t,r=(X&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J=z,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null;var Z,$="function"==typeof Uint8Array?Uint8Array:void 0;Z=function(){var r,t,n;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,256,257]),n=t,r=(K&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$:function(){throw new Error("not implemented")};var rr=Z,tr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null;var er,or="function"==typeof Uint16Array?Uint16Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(tr&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,ir={uint16:er,uint8:rr};(ur=new ir.uint16(1))[0]=4660;var fr=52===new ir.uint8(ur.buffer)[0],cr=!0===fr?1:0,ar=new J(1),lr=new Y(ar.buffer);function yr(r){return ar[0]=r,lr[cr]}function pr(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))}var vr=-.16666666666666632;function sr(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(vr+o*n):r-(o*(.5*t-e*n)-t-e*vr)}var br,dr,mr=!0===fr?0:1,wr=new J(1),jr=new Y(wr.buffer);!0===fr?(br=1,dr=0):(br=0,dr=1);var hr={HIGH:br,LOW:dr},Ar=new J(1),_r=new Y(Ar.buffer),gr=hr.HIGH,Or=hr.LOW;function Ur(r,t){return _r[gr]=r,_r[Or]=t,Ar[0]}var Er,Nr;!0===fr?(Er=1,Nr=0):(Er=0,Nr=1);var Sr={HIGH:Er,LOW:Nr},Pr=new J(1),Tr=new Y(Pr.buffer),Ir=Sr.HIGH,Fr=Sr.LOW;function Gr(r,t,n,e){return Pr[0]=r,t[e]=Tr[Ir],t[e+n]=Tr[Fr],t}function Hr(r){return Gr(r,[0,0],1,0)}l(Hr,"assign",Gr);var Rr=[0,0];function Br(r,t){var n,e;return Hr.assign(r,Rr,1,0),n=Rr[0],n&=2147483647,e=yr(t),Ur(n|=e&=2147483648,Rr[1])}function Lr(r){return Math.abs(r)}function xr(r,t,n,e){return x(r)||V(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Lr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return xr(r,[0,0],1,0)}),"assign",xr);var Vr=[0,0],Mr=[0,0];function kr(r,t){var n,e;return 0===t||0===r||x(r)||V(r)?r:(xr(r,Vr,1,0),t+=Vr[1],t+=function(r){var t=yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Vr[0]),t<-1074?Br(0,r):t>1023?r<0?U:O:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Hr.assign(r,Mr,1,0),n=Mr[0],n&=2148532223,e*Ur(n|=t+1023<<20,Mr[1])))}function Cr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Wr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xr=5.960464477539063e-8,qr=Cr(20),zr=Cr(20),Dr=Cr(20),Jr=Cr(20);function Kr(r,t,n,e,o,u,i,f,c){var a,l,y,p,v,s,b,d,m;for(p=u,m=e[n],d=n,v=0;d>0;v++)l=Xr*m|0,Jr[v]=m-16777216*l|0,m=e[d-1]+l,d-=1;if(m=kr(m,o),m-=8*E(.125*m),m-=b=0|m,y=0,o>0?(b+=v=Jr[n-1]>>24-o,Jr[n-1]-=v<<24-o,y=Jr[n-1]>>23-o):0===o?y=Jr[n-1]>>23:m>=.5&&(y=2),y>0){for(b+=1,a=0,v=0;v<n;v++)d=Jr[v],0===a?0!==d&&(a=1,Jr[v]=16777216-d):Jr[v]=16777215-d;if(o>0)switch(o){case 1:Jr[n-1]&=8388607;break;case 2:Jr[n-1]&=4194303}2===y&&(m=1-m,0!==a&&(m-=kr(1,o)))}if(0===m){for(d=0,v=n-1;v>=u;v--)d|=Jr[v];if(0===d){for(s=1;0===Jr[u-s];s++);for(v=n+1;v<=n+s;v++){for(c[f+v]=Wr[i+v],l=0,d=0;d<=f;d++)l+=r[d]*c[f+(v-d)];e[v]=l}return Kr(r,t,n+=s,e,o,u,i,f,c)}}if(0===m)for(n-=1,o-=24;0===Jr[n];)n-=1,o-=24;else(m=kr(m,-o))>=16777216?(l=Xr*m|0,Jr[n]=m-16777216*l|0,o+=24,Jr[n+=1]=l):Jr[n]=0|m;for(l=kr(1,o),v=n;v>=0;v--)e[v]=l*Jr[v],l*=Xr;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=Yr[s]*e[v+s];Dr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Dr[v];for(t[0]=0===y?l:-l,l=Dr[0]-l,v=1;v<=n;v++)l+=Dr[v];return t[1]=0===y?l:-l,7&b}function Qr(r,t,n,e){var o,u,i,f,c,a,l;for(4,(u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),a=u-(i=e-1),l=i+4,c=0;c<=l;c++)qr[c]=a<0?0:Wr[a],a+=1;for(c=0;c<=4;c++){for(o=0,a=0;a<=i;a++)o+=r[a]*qr[i+(c-a)];zr[c]=o}return 4,Kr(r,t,4,zr,f,4,u,i,qr)}var Zr=Math.round;function $r(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Zr(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(yr(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(yr(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var rt=1.5707963267341256,tt=6077100506506192e-26,nt=2*tt,et=4*tt,ot=[0,0,0],ut=[0,0];function it(r,t){var n,e,o,u,i,f,c;if((o=2147483647&yr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?$r(r,o,t):o<=1073928572?r>0?(c=r-rt,t[0]=c-tt,t[1]=c-t[0]-tt,1):(c=r+rt,t[0]=c+tt,t[1]=c-t[0]+tt,-1):r>0?(c=r-2*rt,t[0]=c-nt,t[1]=c-t[0]-nt,2):(c=r+2*rt,t[0]=c+nt,t[1]=c-t[0]+nt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?$r(r,o,t):r>0?(c=r-3*rt,t[0]=c-1.8231301519518578e-10,t[1]=c-t[0]-1.8231301519518578e-10,3):(c=r+3*rt,t[0]=c+1.8231301519518578e-10,t[1]=c-t[0]+1.8231301519518578e-10,-3):1075388923===o?$r(r,o,t):r>0?(c=r-4*rt,t[0]=c-et,t[1]=c-t[0]-et,4):(c=r+4*rt,t[0]=c+et,t[1]=c-t[0]+et,-4);if(o<1094263291)return $r(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return wr[0]=r,jr[mr]}(r),c=Ur(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)ot[i]=0|c,c=16777216*(c-ot[i]);for(ot[2]=c,u=3;0===ot[u-1];)u-=1;return f=Qr(ot,ut,e,u),r<0?(t[0]=-ut[0],t[1]=-ut[1],-f):(t[0]=ut[0],t[1]=ut[1],f)}var ft=[0,0];function ct(r){var t;if(t=yr(r),(t&=2147483647)<=1072243195)return t<1044381696?1:pr(r,0);if(t>=2146435072)return NaN;switch(3&it(r,ft)){case 0:return pr(ft[0],ft[1]);case 1:return-sr(ft[0],ft[1]);case 2:return-pr(ft[0],ft[1]);default:return sr(ft[0],ft[1])}}var at=[0,0];function lt(r){var t;if(t=yr(r),(t&=2147483647)<=1072243195)return t<1045430272?r:sr(r,0);if(t>=2146435072)return NaN;switch(3&it(r,at)){case 0:return sr(at[0],at[1]);case 1:return pr(at[0],at[1]);case 2:return-sr(at[0],at[1]);default:return-pr(at[0],at[1])}}var yt=3.141592653589793;function pt(r){var t,n;return x(r)||V(r)?NaN:0===(t=Lr(n=r%2))||1===t?Br(0,n):t<.25?lt(yt*n):t<.75?Br(ct(yt*(t=.5-t)),n):t<1.25?(n=Br(1,n)-n,lt(yt*n)):t<1.75?-Br(ct(yt*(t-=1.5)),n):(n-=Br(2,n),lt(yt*n))}var vt=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var st=/./;function bt(r){return"boolean"==typeof r}var dt=Boolean.prototype.toString;var mt=v();function wt(r){return"object"==typeof r&&(r instanceof Boolean||(mt?function(r){try{return dt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function jt(r){return bt(r)||wt(r)}function ht(){return new Function("return this;")()}l(jt,"isPrimitive",bt),l(jt,"isObject",wt);var At="object"==typeof self?self:null,_t="object"==typeof window?window:null,gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ot="object"==typeof gt?gt:null;var Ut=function(r){if(arguments.length){if(!bt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return ht()}if(At)return At;if(_t)return _t;if(Ot)return Ot;throw new Error("unexpected error. Unable to resolve global object.")}(),Et=Ut.document&&Ut.document.childNodes,Nt=Int8Array;function St(){return/^\s*function\s*([^(]*)/i}var Pt=/^\s*function\s*([^(]*)/i;function Tt(r){return null!==r&&"object"==typeof r}function It(r){var t,n,e,o;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Pt.exec(e.toString()))return t[1]}return Tt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(St,"REGEXP",Pt),l(Tt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Tt));var Ft="function"==typeof st||"object"==typeof Nt||"function"==typeof Et?function(r){return It(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?It(r).toLowerCase():t};function Gt(r){return"function"===Ft(r)}var Ht,Rt=Object.getPrototypeOf;Ht=Gt(Object.getPrototypeOf)?Rt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Bt=Ht;var Lt=Object.prototype;function xt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!vt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Bt(r))}(r),!t||!d(r,"constructor")&&d(t,"constructor")&&Gt(t.constructor)&&"[object Function]"===w(t.constructor)&&d(t,"isPrototypeOf")&&Gt(t.isPrototypeOf)&&(t===Lt||function(r){var t;for(t in r)if(!d(r,t))return!1;return!0}(r)))}function Vt(r){return P(r)&&r>=0}function Mt(r){return T(r)&&r.valueOf()>=0}function kt(r){return Vt(r)||Mt(r)}function Ct(r){return y(r)&&r>=0}function Wt(r){return _(r)&&r.valueOf()>=0}function Yt(r){return Ct(r)||Wt(r)}function Xt(r,t){return xt(t)?d(t,"period")&&(r.period=t.period,!F(t.period))?new TypeError(L("0Rc8f","period",t.period)):d(t,"amplitude")&&(r.amplitude=t.amplitude,!Ct(t.amplitude))?new TypeError(L("0Rc4x","amplitude",t.amplitude)):d(t,"offset")&&(r.offset=t.offset,!P(t.offset))?new TypeError(L("0Rc8e","offset",t.offset)):d(t,"iter")&&(r.iter=t.iter,!Vt(t.iter))?new TypeError(L("0Rc35","iter",t.iter)):null:new TypeError(L("0Rc2h",t))}function qt(r,t){var n,e,o,u,i,f,c,a,y,p;if(!F(r))throw new TypeError(L("0Rc4o",r));if(n={period:100,amplitude:1,offset:0,iter:1e308},arguments.length>1&&(u=Xt(n,t)))throw u;return(a=(n.period-n.offset)%n.period)<0&&(a+=n.period),R(r)?(i=n.offset>=0?-1:1,c=n.period/2,f=E(c),y=r/c):y=r/n.period,a-=1,p=0,l(e={},"next",void 0===i?s:v),l(e,"return",b),B&&l(e,B,d),e;function v(){var t;return p+=1,o||p>n.iter?{done:!0}:(a+=1,0===(a%=n.period)||a===c?t=(i*=-1)*n.amplitude:(a===f&&(i*=-1),t=n.amplitude*pt(y*a)/(r*pt(a/c))),{value:t,done:!1})}function s(){return p+=1,o||p>n.iter?{done:!0}:(a+=1,{value:0===(a%=n.period)?n.amplitude:n.amplitude*pt(y*a)/(r*pt(a/n.period)),done:!1})}function b(r){return o=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return qt(r,n)}}l(kt,"isPrimitive",Vt),l(kt,"isObject",Mt),l(Yt,"isPrimitive",Ct),l(Yt,"isObject",Wt);export{qt as default};
//# sourceMappingURL=mod.js.map
