(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0689":function(t,s,n){"use strict";var a=n("0d42"),i=n.n(a);i.a},"0d42":function(t,s,n){},1511:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"page-user"},[n("div",{staticClass:"container"},[t.user?n("div",{staticClass:"user-wrap"},[n("div",{staticClass:"user-panel"},[n("a-icon",{attrs:{type:"user"}}),n("span",{staticClass:"user-name"},[t._v(t._s(t.user.username))])],1),n("div",{staticClass:"user-data"},[t.list.length?n("div",{staticClass:"automations"},t._l(t.list,(function(t){return n("automation",{key:t.objectId,attrs:{automation:t}})})),1):t._e(),t.loading||t.list.length?t._e():n("a-empty")],1)]):t._e()])])},i=[],e=(n("7db0"),n("d81d"),n("bf19"),n("b1c8")),u=n("2b60"),o=n("9a70"),r={name:"User",components:{Automation:u["a"]},mixins:[o["a"]],data:function(){return{uid:this.$route.params.id,list:[]}},computed:{user:function(){return this.list.length?this.list[0].author:null}},methods:{getAutomation:function(t){return this.list.find((function(s){return s.objectId===t}))},loadData:function(){var t=this;e["b"].listOfAuthor(this.uid).then((function(s){t.list=s.map((function(t){return t.toJSON()}))}))}},mounted:function(){this.loadData()}},c=r,l=(n("0689"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,"5c270199",null);s["default"]=d.exports}}]);
//# sourceMappingURL=user.9fc81fd3.js.map