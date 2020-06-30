(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["automations~user"],{"10be":function(t,e,n){"use strict";var a=n("271d"),r=n.n(a);r.a},"1e6a":function(t,e,n){"use strict";var a=n("5530");e["a"]={methods:{installAutomation:function(t){var e=Object(a["a"])(Object(a["a"])({},t),{},{id:t.objectId}),n=new CustomEvent("ihelpers",{detail:{action:"installAutomation",data:e}});document.dispatchEvent(n)}}}},"267e":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));n("99af");var a={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},r={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",ZEN_MODE:"zenMode",PICTURE_IN_PICTURE:"pictureInPicture",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},i=[{value:r.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.ZEN_MODE,label:"Zen Mode",args:[{tips:"Text to be displayed",name:"word",type:"string",value:"Zen",defaultValue:"Zen"},{tips:"How long to delay displaying the page",name:"delay",type:"string",value:0,defaultValue:0,placeholder:"0 means never display"},{tips:"Background Color",name:"bgcolor",type:"string",value:"#35363a",defaultValue:"#35363a"},{tips:"Font Color",name:"color",type:"string",value:"#ffffff",defaultValue:"#ffffff"}]},{value:r.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.PICTURE_IN_PICTURE,label:"PIP Mode",args:[]},{value:r.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:r.HASH_ELEMENT,label:"Add anchor for elements"},{value:r.TIME_UPDATE,label:"Add time tag for video"},{value:r.DOWNLOAD,label:"Download element",args:[{tips:"auto close the new tab opened by automation",name:"autoclose",type:"boolean",value:!1,defaultValue:!1}]},{value:r.FULL_SCREEN,label:"FullScreen element"},{value:r.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:r.CLICK,label:"Click"},{value:r.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],o=[{value:"",label:"All"}].concat(i),u=[{value:0,label:"Immediately"},{value:1,label:"DomReady"}]},"271d":function(t,e,n){},"2b60":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"automation-row"},[n("div",{staticClass:"am-main"},[n("div",{staticClass:"am-name"},[n("router-link",{attrs:{to:"/automation/"+t.automation.objectId}},[t._v(" "+t._s(t.automation.name)+" ")])],1),n("div",{staticClass:"am-intro"},[t._v(t._s(t.automation.pattern))])]),n("div",{staticClass:"am-right"},[n("div",{staticClass:"am-btns"},[n("div",{staticClass:"am-ins"},[n("a-popconfirm",{attrs:{title:t.$t("confirm.install",{name:t.automation.name})},on:{confirm:function(e){return t.installAutomation(t.automation)}}},[n("my-icon",{attrs:{type:"icon-anzhuang"}})],1),t.automation.installations?n("span",{staticClass:"count"},[t._v(" "+t._s(t.automation.installations.count)+" ")]):t._e()],1),t.editable?n("div",{staticClass:"am-edit"},[n("router-link",{staticClass:"am-edit",attrs:{to:"/automation/update/"+t.id}},[t.editable?n("a-icon",{staticStyle:{"margin-left":"10px"},attrs:{type:"edit",theme:"filled"}}):t._e(),t._v(" Edit ")],1)],1):t._e()]),n("div",{staticClass:"am-created"},[n("div",{staticClass:"author"},[t._v("by "),n("router-link",{attrs:{to:"/user/"+t.automation.author.objectId}},[t._v(" "+t._s(t.automation.author.username)+" ")])],1),n("div",{staticClass:"time"},[t._v(t._s(t._f("timeago")(t.automation.createdAt)))])])])])},r=[],i=n("5530"),o=n("d610"),u=["second","minute","hour","day","week","month","year"],s=function(t,e){if(0===e)return["just now","right now"];var n=u[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]},c=["秒","分钟","小时","天","周","个月","年"],l=function(t,e){if(0===e)return["刚刚","片刻后"];var n=c[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]},d={},f=function(t,e){d[t]=e},h=function(t){return d[t]||d["en_US"]},m=[60,60,24,7,365/7/12,12];function v(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function p(t,e){var n=t<0?1:0;t=Math.abs(t);for(var a=t,r=0;t>=m[r]&&r<m.length;r++)t/=m[r];return t=Math.floor(t),r*=2,t>(0===r?9:1)&&(r+=1),e(t,r,a)[n].replace("%s",t.toString())}function g(t,e){var n=e?v(e):new Date;return(+n-+v(t))/1e3}var y=function(t,e,n){var a=g(t,n&&n.relativeDate);return p(a,h(e))};f("en_US",s),f("zh_CN",l);n("5a0c");function b(t){return y(t,localStorage.getItem("language")||"en")}var $=n("1e6a"),_=n("2f62"),M={props:["automation","id"],name:"AutomationRow",filters:{timeago:b},mixins:[$["a"]],components:{MyIcon:o["a"]},computed:Object(i["a"])(Object(i["a"])({},Object(_["c"])("account",["loggedIn","user","uid"])),{},{editable:function(){return this.uid===this.automation.author.objectId}}),methods:{}},D=M,O=(n("10be"),n("2877")),E=Object(O["a"])(D,a,r,!1,null,"64557108",null);e["a"]=E.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",a="hour",r="day",i="week",o="month",u="quarter",s="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},f={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+d(a,2,"0")+":"+d(r,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),a=t.clone().add(n,o),r=e-a<0,i=t.clone().add(n+(r?-1:1),o);return Number(-(n+(e-a)/(r?a-i:i-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:o,y:s,w:i,d:r,D:"date",h:a,m:n,s:e,ms:t,Q:u}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",v={};v[m]=h;var p=function(t){return t instanceof $},g=function(t,e,n){var a;if(!t)return m;if("string"==typeof t)v[t]&&(a=t),e&&(v[t]=e,a=t);else{var r=t.name;v[r]=t,a=r}return!n&&a&&(m=a),a||!n&&m},y=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},b=f;b.l=g,b.i=p,b.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var $=function(){function d(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(c);if(a)return n?new Date(Date.UTC(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)):new Date(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return b},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",s)},f.month=function(t){return this.$g(t,"$M",o)},f.day=function(t){return this.$g(t,"$W",r)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",a)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var c=this,l=!!b.u(u)||u,d=b.p(t),f=function(t,e){var n=b.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(r)},h=function(t,e){return b.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,v=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case s:return l?f(1,0):f(31,11);case o:return l?f(1,v):f(0,v+1);case i:var y=this.$locale().weekStart||0,$=(m<y?m+7:m)-y;return f(l?p-$:p+(6-$),v);case r:case"date":return h(g+"Hours",0);case a:return h(g+"Minutes",1);case n:return h(g+"Seconds",2);case e:return h(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(i,u){var c,l=b.p(i),d="set"+(this.$u?"UTC":""),f=(c={},c[r]=d+"Date",c.date=d+"Date",c[o]=d+"Month",c[s]=d+"FullYear",c[a]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[l],h=l===r?this.$D+(u-this.$W):u;if(l===o||l===s){var m=this.clone().set("date",1);m.$d[f](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[b.p(t)]()},f.add=function(t,u){var c,l=this;t=Number(t);var d=b.p(u),f=function(e){var n=y(l);return b.w(n.date(n.date()+Math.round(e*t)),l)};if(d===o)return this.set(o,this.$M+t);if(d===s)return this.set(s,this.$y+t);if(d===r)return f(1);if(d===i)return f(7);var h=(c={},c[n]=6e4,c[a]=36e5,c[e]=1e3,c)[d]||1,m=this.$d.getTime()+t*h;return b.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",a=b.z(this),r=this.$locale(),i=this.$H,o=this.$m,u=this.$M,s=r.weekdays,c=r.months,d=function(t,a,r,i){return t&&(t[a]||t(e,n))||r[a].substr(0,i)},f=function(t){return b.s(i%12||12,t,"0")},h=r.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:b.s(u+1,2,"0"),MMM:d(r.monthsShort,u,c,3),MMMM:d(c,u),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,s,2),ddd:d(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:b.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:b.s(o,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:a};return n.replace(l,(function(t,e){return e||m[t]||a.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var d,f=b.p(c),h=y(t),m=6e4*(h.utcOffset()-this.utcOffset()),v=this-h,p=b.m(this,h);return p=(d={},d[s]=p/12,d[o]=p,d[u]=p/3,d[i]=(v-m)/6048e5,d[r]=(v-m)/864e5,d[a]=v/36e5,d[n]=v/6e4,d[e]=v/1e3,d)[f]||v,l?p:b.a(p)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=g(t,e,!0);return a&&(n.$L=a),n},f.clone=function(){return b.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}();return y.prototype=$.prototype,y.extend=function(t,e){return t(e,$,y),y},y.locale=g,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=v[m],y.Ls=v,y}))},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),o=n("ae40"),u="find",s=!0,c=o(u);u in[]&&Array(1)[u]((function(){s=!1})),a({target:"Array",proto:!0,forced:s||!c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(u)},"99af":function(t,e,n){"use strict";var a=n("23e7"),r=n("d039"),i=n("e8b5"),o=n("861d"),u=n("7b0b"),s=n("50c4"),c=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=d("concat"),b=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},$=!g||!y;a({target:"Array",proto:!0,forced:$},{concat:function(t){var e,n,a,r,i,o=u(this),d=l(o,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?o:arguments[e],b(i)){if(r=s(i.length),f+r>v)throw TypeError(p);for(n=0;n<r;n++,f++)n in i&&c(d,f,i[n])}else{if(f>=v)throw TypeError(p);c(d,f++,i)}return d.length=f,d}})},"9a70":function(t,e,n){"use strict";var a=n("267e"),r=n("b1c8");e["a"]={created:function(){this.bindInstallEvents()},methods:{bindInstallEvents:function(){var t=this;document.addEventListener("stewardHelper",(function(e){var n=e.detail,r=n.action,i=n.data;switch(r){case a["d"].INSTALL_DONE:t.onInstallOk(i);break;default:break}}))},getAutomation:function(){return null},onInstallOk:function(t){var e=t.id,n=this.getAutomation(e);n&&Object(r["c"])(n.installations.objectId).then((function(t){n.installations.count=t.attributes.count}))}}}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&r(i,s,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(t){return""}}})},b1c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return y}));n("7db0"),n("b0c0"),n("d3b7");var a=n("c72e"),r=n.n(a),i=r.a.Object.extend("Installations"),o={item:u,create:s};function u(){}function s(t){var e=new i;return e.save().then((function(){return t.set("installations",e),t.save()}))}function c(t){var e=new r.a.ACL;e.setPublicReadAccess(!0),e.setWriteAccess(r.a.User.current(),!0),t.setACL(e)}var l=r.a.Object.extend("Automation"),d={list:f,listOfAuthor:h,updateOne:b,item:m};function f(t,e){var n=new r.a.Query("Automation");return t&&n.equalTo("type",t),e&&n.contains("name",e),n.descending("updatedAt"),n.include("author"),n.include("installations"),n.find()}function h(t){var e=new r.a.Query("Automation");return e.equalTo("author",r.a.Object.createWithoutData("User",t)),e.include("author"),e.include("installations"),e.find()}function m(t){var e=new r.a.Query("Automation");return e.include("author"),e.include("installations"),e.get(t)}function v(t){var e=r.a.Object.createWithoutData("Installations",t);return e.increment("count",1),e.save(null,{fetchWhenSave:!0})}function p(t,e){var n=new r.a.Query("Automation");return n.equalTo("instructions",t),n.equalTo("pattern",e),n.first().then((function(t){return Boolean(t)}))}function g(t){var e=t.instructions,n=t.pattern,a=t.name,i=t.intro,u=t.type,s=t.video,d=t.runAt,f=new l;return f.set("instructions",e),f.set("pattern",n),f.set("name",a),f.set("intro",i),f.set("video",s),f.set("type",u),f.set("runAt",d),f.set("author",r.a.User.current()),c(f),f.save().then((function(t){return o.create(t)}))}function y(t){var e=t.instructions,n=t.pattern;return p(e,n).then((function(e){return e?Promise.reject("Automation has existed"):g(t)}))}function b(t,e){var n=r.a.Object.createWithoutData("Automation",t),a=e.instructions,i=e.pattern,o=e.name,u=e.intro,s=e.type,c=e.video,l=e.runAt;return n.set("instructions",a),n.set("pattern",i),n.set("name",o),n.set("intro",u),n.set("video",c),n.set("type",s),n.set("runAt",l),n.increment("version",1),n.save()}},bf19:function(t,e,n){"use strict";var a=n("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},d610:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("0c63"),r=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1867097_5ewbsgfi50q.js"})},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),o=n("ae40"),u=i("map"),s=o("map");a({target:"Array",proto:!0,forced:!u||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=automations~user.5985fd39.js.map