(function(t){function e(e){for(var r,a,d=e[0],s=e[1],l=e[2],c=0,p=[];c<d.length;c++)a=d[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],r=!0,d=1;d<i.length;d++){var s=i[d];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var r={},n={app:0},o=[];function a(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=r,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/work-report-hh/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var u=s;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},1828:function(t,e,i){},"18d6":function(t,e,i){},2430:function(t,e,i){},"2dd3":function(t,e,i){"use strict";var r=i("2430"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},o=[],a=(i("034f"),i("2877")),d={},s=Object(a["a"])(d,n,o,!1,null,null,null),l=s.exports,u=i("8c4f"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"ctrl"},[i("button",{on:{click:function(e){t.isEditMode=!t.isEditMode}}},[t._v("編集モード切り替え")])]),i("div",{staticClass:"a4"},[i("div",{staticStyle:{display:"grid","grid-template-columns":"4fr 6fr"}},[i("EditAndShow",{attrs:{"is-edit-mode":t.isEditMode,placeholder:"日付"}}),i("div",{staticClass:"grayDiv"},[t._v("報告")]),i("div",{staticClass:"grayDiv"}),i("EditAndShow",{attrs:{"is-edit-mode":t.isEditMode,placeholder:"名前"}})],1),i("hr"),i("ScheduleEditor",{attrs:{"is-edit-mode":t.isEditMode}},[t._v("予定")]),i("ScheduleEditor",{attrs:{"is-edit-mode":t.isEditMode}},[t._v("実績")]),i("EditAndShow",{attrs:{placeholder:"目標","is-big-mode":"","is-edit-mode":t.isEditMode}}),i("EditAndShow",{attrs:{placeholder:"成果","is-big-mode":"","is-edit-mode":t.isEditMode}}),i("hr"),i("EditAndShow",{attrs:{placeholder:"問題点","is-big-mode":"","is-edit-mode":t.isEditMode}}),i("EditAndShow",{attrs:{placeholder:"原因","is-big-mode":"","is-edit-mode":t.isEditMode}}),i("EditAndShow",{attrs:{placeholder:"対策","is-big-mode":"","is-edit-mode":t.isEditMode}})],1)])},p=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{"min-height":"6em",display:"grid","grid-template-columns":"1.5em repeat(44, 1fr)",border:"1px solid"}},[i("div",{staticClass:"centerAlign grayDiv",staticStyle:{"grid-row":"span 5"}},[t._t("default")],2),t._l(t.gridArrHeader,(function(e){return i("div",{key:"header"+e[0],staticStyle:{"text-align":"left","border-left":"1px solid","background-color":"#aaaaaa",color:"#fff"},style:{"grid-column":"span "+e[1]}},[t._v(" "+t._s(e[0])+" ")])})),t._l(t.gridArrSorted,(function(e,r){return i("div",{key:"w"+r,staticClass:"ScheduleItem centerAlign",style:{"grid-column-start":e[0]+1,"grid-column-end":"span "+e[1]}},[t._v(t._s(e[2])+" ")])}))],2),i("div",[t.isEditMode?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputPlan,expression:"inputPlan"}],staticStyle:{height:"4em",width:"99%"},domProps:{value:t.inputPlan},on:{input:function(e){e.target.composing||(t.inputPlan=e.target.value)}}}):t._e()])])},h=[],f=(i("4de4"),i("a15b"),i("fb6a"),i("ac1f"),i("5319"),i("1276"),i("498a"),"0845"),v="1945",g={name:"ScheduleEditor",props:{isEditMode:Boolean},data:function(){return{inputPlan:"0845 1000 MT・報告・連絡"}},computed:{gridArr:function(){for(var t=[],e=0;e<this.dayArrPlan.length;e++)t.push(this.workArrayToParams(this.dayArrPlan[e]));return t},gridArrSorted:function(){var t=this.gridArr.slice(),e=[];while(t.length){e.push(t[0]),t[0]=null;for(var i=0;i<t.length;i++)t[i]&&t[i][0]>=e[e.length-1][1]-1&&(e.push(t[i]),t[i]=null);t=t.filter((function(t){return t}))}return e},minuteStampStart:function(){return console.log("minuteStampStart"+f),this.timeToMinuteStamp(f)},minuteStampEnd:function(){return console.log("minuteStampEnd"+v),this.timeToMinuteStamp(v)},gridArrHeader:function(){for(var t=[],e=this.minuteStampStart;e<this.minuteStampEnd;e+=15){var i=Math.floor(e/60),r=t.length?Math.floor(t[t.length-1][0]):-1;i!==r&&t.push([i,0]),t[t.length-1][1]++}return t},dayArrPlan:function(){var t=this.inputPlan.trim().replace(/[\u3000 ]+/g," ");t=t.replace("\r","").split("\n");for(var e=0;e<t.length;e++){var i=t[e].split(" ");t[e]=i.slice(0,2);var r=i.slice(2);t[e][2]=r.join(" ")}return t}},methods:{timeToMinuteStamp:function(t){return t?60*parseInt(t.substr(0,2))+parseInt(t.substr(2,2)):0},timeToGridNo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=this.timeToMinuteStamp(v)-this.timeToMinuteStamp(f),r=this.timeToMinuteStamp(t)+e-this.timeToMinuteStamp(f),n=i/15,o=r/i;return Math.floor(n*o)+1},workArrayToParams:function(t){var e=t[0],i=t[1],r=t[2],n=this.timeToGridNo(e),o=this.timeToGridNo(i)-n;return[n,o,r]}}},S=g,b=(i("9b01"),Object(a["a"])(S,m,h,!1,null,null,null)),y=b.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editAndShow"},[t.isBigMode?t._e():i("div",{staticStyle:{display:"inline-block"}},[t.isEditMode?i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}):t._e(),t.isEditMode?t._e():i("div",[t._v(t._s(t.inputText||t.placeholder+"未入力"))])]),t.isBigMode?i("div",[i("div",{staticClass:"grayDiv",staticStyle:{padding:"0.3em 1em",width:"fit-content"}},[t._v(t._s(t.placeholder))]),t.isEditMode?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticStyle:{height:"3em",width:"100%"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}):t._e(),t.isEditMode?t._e():i("div",{staticClass:"centerAlign",staticStyle:{"white-space":"pre",border:"1px solid","min-height":"3em"}},[t._v(t._s(t.inputText||t.placeholder+"未入力"))])]):t._e()])},w=[],_={props:{isEditMode:Boolean,isBigMode:Boolean,placeholder:String},name:"EditAndShow",data:function(){return{inputText:""}},created:function(){}},M=_,x=Object(a["a"])(M,E,w,!1,null,"a8b90894",null),T=x.exports,A={name:"WorkReport",components:{EditAndShow:T,ScheduleEditor:y},data:function(){return{isEditMode:!0}},created:function(){},computed:{},methods:{}},P=A,O=(i("b3f7"),i("2dd3"),Object(a["a"])(P,c,p,!1,null,"2acd4c44",null)),j=O.exports;r["a"].use(u["a"]);var k=[{path:"/",name:"WorkReport",component:j}],C=new u["a"]({mode:"history",base:"/work-report-hh/",routes:k}),B=C,N=i("2f62");r["a"].use(N["a"]);var $=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:B,store:$,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,i){},"9b01":function(t,e,i){"use strict";var r=i("1828"),n=i.n(r);n.a},b3f7:function(t,e,i){"use strict";var r=i("18d6"),n=i.n(r);n.a}});