(window.webpackJsonp=window.webpackJsonp||[]).push([[13,116],{1e3:function(t,e,i){"use strict";i.r(e);i(387),i(85),i(29),i(252),i(51),i(673),i(674),i(675),i(664),i(696);var r={name:"FlipClock",data:function(){return{timer:null,flipObjs:[]}},components:{Flipper:i(722).default},methods:{init:function(){for(var t=new Date,e=this.formatDate(new Date(t.getTime()),"hhiiss"),i=0;i<this.flipObjs.length;i++)this.flipObjs[i].setFront(e[i])},run:function(){var t=this;this.timer=setInterval((function(){for(var e=new Date,i=t.formatDate(new Date(e.getTime()-1e3),"hhiiss"),r=t.formatDate(e,"hhiiss"),n=0;n<t.flipObjs.length;n++)i[n]!==r[n]&&t.flipObjs[n].flipDown(i[n],r[n])}),1e3)},formatDate:function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"m+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"i+":t.getMinutes(),"s+":t.getSeconds()};for(var r in i)if(new RegExp("(".concat(r,")")).test(e)){var n=i[r]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:this.padLeftZero(n))}return e},padLeftZero:function(t){return("00"+t).substr(t.length)}},mounted:function(){this.flipObjs=[this.$refs.flipperHour1,this.$refs.flipperHour2,this.$refs.flipperMinute1,this.$refs.flipperMinute2,this.$refs.flipperSecond1,this.$refs.flipperSecond2],this.init(),this.run()}},n=(i(763),i(12)),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"FlipClock"},[i("Flipper",{ref:"flipperHour1"}),t._v(" "),i("Flipper",{ref:"flipperHour2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperMinute1"}),t._v(" "),i("Flipper",{ref:"flipperMinute2"}),t._v(" "),i("em",[t._v(":")]),t._v(" "),i("Flipper",{ref:"flipperSecond1"}),t._v(" "),i("Flipper",{ref:"flipperSecond2"})],1)}),[],!1,null,null,null);e.default=s.exports},664:function(t,e,i){"use strict";var r=i(11),n=i(133).PROPER,s=i(49),o=i(25),a=i(109),f=i(35),p=i(13),u=i(389),c=RegExp.prototype,l=c.toString,h=r(u),g=p((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=n&&"toString"!=l.name;(g||d)&&s(RegExp.prototype,"toString",(function(){var t=o(this),e=f(t.source),i=t.flags;return"/"+e+"/"+f(void 0===i&&a(c,t)&&!("flags"in c)?h(t):i)}),{unsafe:!0})},666:function(t,e,i){"use strict";var r=i(52),n=i(28),s=i(18),o=i(22),a=s("species");t.exports=function(t){var e=r(t),i=n.f;o&&e&&!e[a]&&i(e,a,{configurable:!0,get:function(){return this}})}},673:function(t,e,i){var r=i(22),n=i(8),s=i(11),o=i(255),a=i(256),f=i(53),p=i(28).f,u=i(110).f,c=i(109),l=i(259),h=i(35),g=i(389),d=i(254),v=i(49),m=i(13),x=i(26),b=i(107).enforce,F=i(666),E=i(18),T=i(390),D=i(392),y=E("match"),_=n.RegExp,w=_.prototype,R=n.SyntaxError,S=s(g),k=s(w.exec),C=s("".charAt),$=s("".replace),M=s("".indexOf),O=s("".slice),j=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,I=/a/g,A=/a/g,H=new _(I)!==I,N=d.MISSED_STICKY,P=d.UNSUPPORTED_Y,Y=r&&(!H||N||T||D||m((function(){return A[y]=!1,_(I)!=I||_(A)==A||"/a/i"!=_(I,"i")})));if(o("RegExp",Y)){for(var U=function(t,e){var i,r,n,s,o,p,u=c(w,this),g=l(t),d=void 0===e,v=[],m=t;if(!u&&g&&d&&t.constructor===U)return t;if((g||c(w,t))&&(t=t.source,d&&(e="flags"in m?m.flags:S(m))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),m=t,T&&"dotAll"in I&&(r=!!e&&M(e,"s")>-1)&&(e=$(e,/s/g,"")),i=e,N&&"sticky"in I&&(n=!!e&&M(e,"y")>-1)&&P&&(e=$(e,/y/g,"")),D&&(t=(s=function(t){for(var e,i=t.length,r=0,n="",s=[],o={},a=!1,f=!1,p=0,u="";r<=i;r++){if("\\"===(e=C(t,r)))e+=C(t,++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:k(j,O(t,r+1))&&(r+=2,f=!0),n+=e,p++;continue;case">"===e&&f:if(""===u||x(o,u))throw new R("Invalid capture group name");o[u]=!0,s[s.length]=[u,p],f=!1,u="";continue}f?u+=e:n+=e}return[n,s]}(t))[0],v=s[1]),o=a(_(t,e),u?this:w,U),(r||n||v.length)&&(p=b(o),r&&(p.dotAll=!0,p.raw=U(function(t){for(var e,i=t.length,r=0,n="",s=!1;r<=i;r++)"\\"!==(e=C(t,r))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),n+=e):n+="[\\s\\S]":n+=e+C(t,++r);return n}(t),i)),n&&(p.sticky=!0),v.length&&(p.groups=v)),t!==m)try{f(o,"source",""===m?"(?:)":m)}catch(t){}return o},q=function(t){t in U||p(U,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},J=u(_),K=0;J.length>K;)q(J[K++]);w.constructor=U,U.prototype=w,v(n,"RegExp",U)}F("RegExp")},674:function(t,e,i){var r=i(8),n=i(22),s=i(390),o=i(63),a=i(28).f,f=i(107).get,p=RegExp.prototype,u=r.TypeError;n&&s&&a(p,"dotAll",{configurable:!0,get:function(){if(this!==p){if("RegExp"===o(this))return!!f(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},675:function(t,e,i){var r=i(8),n=i(22),s=i(254).MISSED_STICKY,o=i(63),a=i(28).f,f=i(107).get,p=RegExp.prototype,u=r.TypeError;n&&s&&a(p,"sticky",{configurable:!0,get:function(){if(this!==p){if("RegExp"===o(this))return!!f(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},677:function(t,e,i){},696:function(t,e,i){"use strict";var r=i(10),n=i(11),s=i(50),o=i(108),a=i(35),f=n("".slice),p=Math.max,u=Math.min;r({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var i,r,n=a(s(this)),c=n.length,l=o(t);return l===1/0&&(l=0),l<0&&(l=p(c+l,0)),(i=void 0===e?c:o(e))<=0||i===1/0||l>=(r=u(l+i,c))?"":f(n,l,r)}})},709:function(t,e,i){"use strict";i(677)},710:function(t,e,i){},722:function(t,e,i){"use strict";i.r(e);i(174),i(85);var r={name:"FlipClock",data:function(){return{isFlipping:!1,flipType:"down",frontTextFromData:0,backTextFromData:1}},props:{frontText:{type:[Number,String],default:0},backText:{type:[Number,String],default:1},duration:{type:Number,default:600}},methods:{_textClass:function(t){return"number"+t},_flip:function(t,e,i){var r=this;if(this.isFlipping)return!1;this.frontTextFromData=e,this.backTextFromData=i,this.flipType=t,this.isFlipping=!0,setTimeout((function(){r.isFlipping=!1,r.frontTextFromData=i}),this.duration)},flipDown:function(t,e){this._flip("down",t,e)},flipUp:function(t,e){this._flip("up",t,e)},setFront:function(t){this.frontTextFromData=t},setBack:function(t){this.backTextFromData=t}},created:function(){this.frontTextFromData=this.frontText,this.backTextFromData=this.backText}},n=(i(709),i(12)),s=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"M-Flipper",class:[this.flipType,{go:this.isFlipping}]},[e("div",{staticClass:"digital front",class:this._textClass(this.frontTextFromData)}),this._v(" "),e("div",{staticClass:"digital back",class:this._textClass(this.backTextFromData)})])}),[],!1,null,null,null);e.default=s.exports},763:function(t,e,i){"use strict";i(710)}}]);