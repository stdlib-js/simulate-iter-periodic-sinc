// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterPeriodicSinc=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,u=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var a,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=a):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&u&&u.call(r,t,n.set),r};var a=t;function l(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function b(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(r){var t,n,e;if(null==r)return v.call(r);n=r[m],t=b(r,m);try{r[m]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[m]=n:delete r[m],e}:function(r){return v.call(r)},j=Number,h=j.prototype.toString;var A=s();function g(r){return"object"==typeof r&&(r instanceof j||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Number]"===w(r)))}function _(r){return y(r)||g(r)}l(_,"isPrimitive",y),l(_,"isObject",g);var O=Number.POSITIVE_INFINITY,U=j.NEGATIVE_INFINITY,E=Math.floor;function N(r){return E(r)===r}function S(r){return r<O&&r>U&&N(r)}function P(r){return y(r)&&S(r)}function T(r){return g(r)&&S(r.valueOf())}function I(r){return P(r)||T(r)}function F(r){return P(r)&&r>0}function G(r){return T(r)&&r.valueOf()>0}function H(r){return F(r)||G(r)}function R(r){return N(r/2)}l(I,"isPrimitive",P),l(I,"isObject",T),l(H,"isPrimitive",F),l(H,"isObject",G);var x="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&b(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function B(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function L(r){return r!=r}function V(r){return r===O||r===U}var M="function"==typeof Uint32Array;var k="function"==typeof Uint32Array?Uint32Array:null;var C,W="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(M&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y=C,X="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null;var z,D="function"==typeof Float64Array?Float64Array:void 0;z=function(){var r,t,n;if("function"!=typeof q)return!1;try{t=new q([1,3.14,-3.14,NaN]),n=t,r=(X&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J=z,K="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null;var Z,$="function"==typeof Uint8Array?Uint8Array:void 0;Z=function(){var r,t,n;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,256,257]),n=t,r=(K&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?$:function(){throw new Error("not implemented")};var rr=Z,tr="function"==typeof Uint16Array;var nr="function"==typeof Uint16Array?Uint16Array:null;var er,or="function"==typeof Uint16Array?Uint16Array:void 0;er=function(){var r,t,n;if("function"!=typeof nr)return!1;try{t=new nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(tr&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir,ur={uint16:er,uint8:rr};(ir=new ur.uint16(1))[0]=4660;var fr=52===new ur.uint8(ir.buffer)[0],cr=!0===fr?1:0,ar=new J(1),lr=new Y(ar.buffer);function yr(r){return ar[0]=r,lr[cr]}function pr(r,t){var n,e,o,i;return o=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(n=.5*i))+(1-o-n+(i*e-r*t))}var sr=-.16666666666666632;function vr(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(sr+o*n):r-(o*(.5*t-e*n)-t-e*sr)}var dr,br,mr=!0===fr?0:1,wr=new J(1),jr=new Y(wr.buffer);!0===fr?(dr=1,br=0):(dr=0,br=1);var hr={HIGH:dr,LOW:br},Ar=new J(1),gr=new Y(Ar.buffer),_r=hr.HIGH,Or=hr.LOW;function Ur(r,t){return gr[_r]=r,gr[Or]=t,Ar[0]}var Er,Nr;!0===fr?(Er=1,Nr=0):(Er=0,Nr=1);var Sr={HIGH:Er,LOW:Nr},Pr=new J(1),Tr=new Y(Pr.buffer),Ir=Sr.HIGH,Fr=Sr.LOW;function Gr(r,t,n,e){return Pr[0]=r,t[e]=Tr[Ir],t[e+n]=Tr[Fr],t}function Hr(r){return Gr(r,[0,0],1,0)}l(Hr,"assign",Gr);var Rr=[0,0];function xr(r,t){var n,e;return Hr.assign(r,Rr,1,0),n=Rr[0],n&=2147483647,e=yr(t),Ur(n|=e&=2147483648,Rr[1])}function Br(r){return Math.abs(r)}function Lr(r,t,n,e){return L(r)||V(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Br(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return Lr(r,[0,0],1,0)}),"assign",Lr);var Vr=[0,0],Mr=[0,0];function kr(r,t){var n,e;return 0===t||0===r||L(r)||V(r)?r:(Lr(r,Vr,1,0),t+=Vr[1],t+=function(r){var t=yr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=Vr[0]),t<-1074?xr(0,r):t>1023?r<0?U:O:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Hr.assign(r,Mr,1,0),n=Mr[0],n&=2148532223,e*Ur(n|=t+1023<<20,Mr[1])))}function Cr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Wr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Xr=16777216,qr=5.960464477539063e-8,zr=Cr(20),Dr=Cr(20),Jr=Cr(20),Kr=Cr(20);function Qr(r,t,n,e,o,i,u,f,c){var a,l,y,p,s,v,d,b,m;for(p=i,m=e[n],b=n,s=0;b>0;s++)l=qr*m|0,Kr[s]=m-Xr*l|0,m=e[b-1]+l,b-=1;if(m=kr(m,o),m-=8*E(.125*m),m-=d=0|m,y=0,o>0?(d+=s=Kr[n-1]>>24-o,Kr[n-1]-=s<<24-o,y=Kr[n-1]>>23-o):0===o?y=Kr[n-1]>>23:m>=.5&&(y=2),y>0){for(d+=1,a=0,s=0;s<n;s++)b=Kr[s],0===a?0!==b&&(a=1,Kr[s]=16777216-b):Kr[s]=16777215-b;if(o>0)switch(o){case 1:Kr[n-1]&=8388607;break;case 2:Kr[n-1]&=4194303}2===y&&(m=1-m,0!==a&&(m-=kr(1,o)))}if(0===m){for(b=0,s=n-1;s>=i;s--)b|=Kr[s];if(0===b){for(v=1;0===Kr[i-v];v++);for(s=n+1;s<=n+v;s++){for(c[f+s]=Wr[u+s],l=0,b=0;b<=f;b++)l+=r[b]*c[f+(s-b)];e[s]=l}return Qr(r,t,n+=v,e,o,i,u,f,c)}}if(0===m)for(n-=1,o-=24;0===Kr[n];)n-=1,o-=24;else(m=kr(m,-o))>=Xr?(l=qr*m|0,Kr[n]=m-Xr*l|0,o+=24,Kr[n+=1]=l):Kr[n]=0|m;for(l=kr(1,o),s=n;s>=0;s--)e[s]=l*Kr[s],l*=qr;for(s=n;s>=0;s--){for(l=0,v=0;v<=p&&v<=n-s;v++)l+=Yr[v]*e[s+v];Jr[n-s]=l}for(l=0,s=n;s>=0;s--)l+=Jr[s];for(t[0]=0===y?l:-l,l=Jr[0]-l,s=1;s<=n;s++)l+=Jr[s];return t[1]=0===y?l:-l,7&d}function Zr(r,t,n,e){var o,i,u,f,c,a,l;for(4,(i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),a=i-(u=e-1),l=u+4,c=0;c<=l;c++)zr[c]=a<0?0:Wr[a],a+=1;for(c=0;c<=4;c++){for(o=0,a=0;a<=u;a++)o+=r[a]*zr[u+(c-a)];Dr[c]=o}return 4,Qr(r,t,4,Dr,f,4,i,u,zr)}var $r=Math.round;function rt(r,t,n){var e,o,i,u,f;return i=r-1.5707963267341256*(e=$r(.6366197723675814*r)),u=6077100506506192e-26*e,f=t>>20|0,n[0]=i-u,f-(yr(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),n[0]=i-u,f-(yr(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),n[0]=i-u)),n[1]=i-n[0]-u,e}var tt=1.5707963267341256,nt=6077100506506192e-26,et=2*nt,ot=3*nt,it=4*nt,ut=[0,0,0],ft=[0,0];function ct(r,t){var n,e,o,i,u,f,c;if((o=2147483647&yr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?rt(r,o,t):o<=1073928572?r>0?(c=r-tt,t[0]=c-nt,t[1]=c-t[0]-nt,1):(c=r+tt,t[0]=c+nt,t[1]=c-t[0]+nt,-1):r>0?(c=r-2*tt,t[0]=c-et,t[1]=c-t[0]-et,2):(c=r+2*tt,t[0]=c+et,t[1]=c-t[0]+et,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?rt(r,o,t):r>0?(c=r-3*tt,t[0]=c-ot,t[1]=c-t[0]-ot,3):(c=r+3*tt,t[0]=c+ot,t[1]=c-t[0]+ot,-3):1075388923===o?rt(r,o,t):r>0?(c=r-4*tt,t[0]=c-it,t[1]=c-t[0]-it,4):(c=r+4*tt,t[0]=c+it,t[1]=c-t[0]+it,-4);if(o<1094263291)return rt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return wr[0]=r,jr[mr]}(r),c=Ur(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)ut[u]=0|c,c=16777216*(c-ut[u]);for(ut[2]=c,i=3;0===ut[i-1];)i-=1;return f=Zr(ut,ft,e,i),r<0?(t[0]=-ft[0],t[1]=-ft[1],-f):(t[0]=ft[0],t[1]=ft[1],f)}var at=[0,0];function lt(r){var t;if(t=yr(r),(t&=2147483647)<=1072243195)return t<1044381696?1:pr(r,0);if(t>=2146435072)return NaN;switch(3&ct(r,at)){case 0:return pr(at[0],at[1]);case 1:return-vr(at[0],at[1]);case 2:return-pr(at[0],at[1]);default:return vr(at[0],at[1])}}var yt=[0,0];function pt(r){var t;if(t=yr(r),(t&=2147483647)<=1072243195)return t<1045430272?r:vr(r,0);if(t>=2146435072)return NaN;switch(3&ct(r,yt)){case 0:return vr(yt[0],yt[1]);case 1:return pr(yt[0],yt[1]);case 2:return-vr(yt[0],yt[1]);default:return-pr(yt[0],yt[1])}}var st=3.141592653589793;function vt(r){var t,n;return L(r)||V(r)?NaN:0===(t=Br(n=r%2))||1===t?xr(0,n):t<.25?pt(st*n):t<.75?xr(lt(st*(t=.5-t)),n):t<1.25?(n=xr(1,n)-n,pt(st*n)):t<1.75?-xr(lt(st*(t-=1.5)),n):(n-=xr(2,n),pt(st*n))}var dt=Array.isArray?Array.isArray:function(r){return"[object Array]"===w(r)};var bt=/./;function mt(r){return"boolean"==typeof r}var wt=Boolean.prototype.toString;var jt=s();function ht(r){return"object"==typeof r&&(r instanceof Boolean||(jt?function(r){try{return wt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===w(r)))}function At(r){return mt(r)||ht(r)}function gt(){return new Function("return this;")()}l(At,"isPrimitive",mt),l(At,"isObject",ht);var _t="object"==typeof self?self:null,Ot="object"==typeof window?window:null,Ut="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Et="object"==typeof Ut?Ut:null;var Nt=function(r){if(arguments.length){if(!mt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return gt()}if(_t)return _t;if(Ot)return Ot;if(Et)return Et;throw new Error("unexpected error. Unable to resolve global object.")}(),St=Nt.document&&Nt.document.childNodes,Pt=Int8Array;function Tt(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;function Ft(r){return null!==r&&"object"==typeof r}function Gt(r){var t,n,e,o;if(("Object"===(n=w(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=It.exec(e.toString()))return t[1]}return Ft(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(Tt,"REGEXP",It),l(Ft,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!dt(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(Ft));var Ht="function"==typeof bt||"object"==typeof Pt||"function"==typeof St?function(r){return Gt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Gt(r).toLowerCase():t};function Rt(r){return"function"===Ht(r)}var xt,Bt=Object.getPrototypeOf;xt=Rt(Object.getPrototypeOf)?Bt:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===w(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lt=xt;var Vt=Object.prototype;function Mt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!dt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Lt(r))}(r),!t||!b(r,"constructor")&&b(t,"constructor")&&Rt(t.constructor)&&"[object Function]"===w(t.constructor)&&b(t,"isPrototypeOf")&&Rt(t.isPrototypeOf)&&(t===Vt||function(r){var t;for(t in r)if(!b(r,t))return!1;return!0}(r)))}function kt(r){return P(r)&&r>=0}function Ct(r){return T(r)&&r.valueOf()>=0}function Wt(r){return kt(r)||Ct(r)}function Yt(r){return y(r)&&r>=0}function Xt(r){return g(r)&&r.valueOf()>=0}function qt(r){return Yt(r)||Xt(r)}function zt(r,t){return Mt(t)?b(t,"period")&&(r.period=t.period,!F(t.period))?new TypeError(B("0Rc8f","period",t.period)):b(t,"amplitude")&&(r.amplitude=t.amplitude,!Yt(t.amplitude))?new TypeError(B("0Rc4x","amplitude",t.amplitude)):b(t,"offset")&&(r.offset=t.offset,!P(t.offset))?new TypeError(B("0Rc8e","offset",t.offset)):b(t,"iter")&&(r.iter=t.iter,!kt(t.iter))?new TypeError(B("0Rc35","iter",t.iter)):null:new TypeError(B("0Rc2h",t))}return l(Wt,"isPrimitive",kt),l(Wt,"isObject",Ct),l(qt,"isPrimitive",Yt),l(qt,"isObject",Xt),function r(t,n){var e,o,i,u,f,c,a,y,p,s;if(!F(t))throw new TypeError(B("0Rc4o",t));if(e={period:100,amplitude:1,offset:0,iter:1e308},arguments.length>1&&(u=zt(e,n)))throw u;return(y=(e.period-e.offset)%e.period)<0&&(y+=e.period),R(t)?(f=e.offset>=0?-1:1,a=e.period/2,c=E(a),p=t/a):p=t/e.period,y-=1,s=0,l(o={},"next",void 0===f?d:v),l(o,"return",b),x&&l(o,x,m),o;function v(){var r;return s+=1,i||s>e.iter?{done:!0}:(y+=1,0===(y%=e.period)||y===a?r=(f*=-1)*e.amplitude:(y===c&&(f*=-1),r=e.amplitude*vt(p*y)/(t*vt(y/a))),{value:r,done:!1})}function d(){return s+=1,i||s>e.iter?{done:!0}:(y+=1,{value:0===(y%=e.period)?e.amplitude:e.amplitude*vt(p*y)/(t*vt(y/e.period)),done:!1})}function b(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function m(){return r(t,e)}}}));
//# sourceMappingURL=browser.js.map