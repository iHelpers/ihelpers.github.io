(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),o=n("d039"),i=n("ad6d"),l="toString",s=RegExp.prototype,c=s[l],u=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=l;(u||f)&&r(RegExp.prototype,l,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"267e":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));n("99af");var r={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},a={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},o=[{value:a.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:a.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:a.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:a.HASH_ELEMENT,label:"Add anchor for elements"},{value:a.TIME_UPDATE,label:"Add time tag for video"},{value:a.DOWNLOAD,label:"Download element"},{value:a.FULL_SCREEN,label:"FullScreen element"},{value:a.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:a.CLICK,label:"Click"},{value:a.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],i=[{value:"",label:"All"}].concat(o)},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,a=n("69f3"),o=n("7dd0"),i="String Iterator",l=a.set,s=a.getterFor(i);o(String,"String",(function(t){l(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,a=e.index;return a>=n.length?{value:void 0,done:!0}:(t=r(n,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),o=n("9bdd"),i=n("e95a"),l=n("50c4"),s=n("8418"),c=n("35a1");t.exports=function(t){var e,n,u,f,d,m,p=a(t),v="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,b=void 0!==h,y=c(p),A=0;if(b&&(h=r(h,g>2?arguments[2]:void 0,2)),void 0==y||v==Array&&i(y))for(e=l(p.length),n=new v(e);e>A;A++)m=b?h(p[A],A):p[A],s(n,A,m);else for(f=y.call(p),d=f.next,n=new v;!(u=d.call(f)).done;A++)m=b?o(f,h,[u.value,A],!0):u.value,s(n,A,m);return n.length=A,n}},6547:function(t,e,n){var r=n("a691"),a=n("1d80"),o=function(t){return function(e,n){var o,i,l=String(a(e)),s=r(n),c=l.length;return s<0||s>=c?t?"":void 0:(o=l.charCodeAt(s),o<55296||o>56319||s+1===c||(i=l.charCodeAt(s+1))<56320||i>57343?t?l.charAt(s):o:t?l.slice(s,s+2):i-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").find,o=n("44d2"),i=n("ae40"),l="find",s=!0,c=i(l);l in[]&&Array(1)[l]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),l=n("7b0b"),s=n("50c4"),c=n("8418"),u=n("65f0"),f=n("1dde"),d=n("b622"),m=n("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=m>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},A=!h||!b;r({target:"Array",proto:!0,forced:A},{concat:function(t){var e,n,r,a,o,i=l(this),f=u(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],y(o)){if(a=s(o.length),d+a>v)throw TypeError(g);for(n=0;n<a;n++,d++)n in o&&c(f,d,o[n])}else{if(d>=v)throw TypeError(g);c(f,d++,o)}return f.length=d,f}})},a15b:function(t,e,n){"use strict";var r=n("23e7"),a=n("44ad"),o=n("fc6a"),i=n("a640"),l=[].join,s=a!=Object,c=i("join",",");r({target:"Array",proto:!0,forced:s||!c},{join:function(t){return l.call(o(this),void 0===t?",":t)}})},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),o=n("1c7e"),i=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,o=Function.prototype,i=o.toString,l=/^\s*function ([^ (]*)/,s="name";r&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},b1c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return f}));n("7db0"),n("b0c0"),n("d3b7");var r=n("c72e"),a=n.n(r),o=a.a.Object.extend("Automation"),i={list:l};function l(t,e){var n=new a.a.Query("Automation");return t&&n.equalTo("type",t),e&&n.contains("name",e),n.include("author"),n.find()}function s(t){var e=a.a.Object.createWithoutData("Automation",t);return e.increment("installations",1),e.save(null,{fetchWhenSave:!0})}function c(t,e){var n=new a.a.Query("Automation");return n.equalTo("instructions",t),n.equalTo("pattern",e),n.first().then((function(t){return Boolean(t)}))}function u(t){var e=t.instructions,n=t.pattern,r=t.name,i=t.intro,l=t.type,s=new o;return s.set("instructions",e),s.set("pattern",n),s.set("name",r),s.set("intro",i),s.set("type",l),s.set("author",a.a.User.current()),s.save()}function f(t){var e=t.instructions,n=t.pattern;return c(e,n).then((function(e){return e?Promise.reject("Automation has existed"):u(t)}))}},bc0c:function(t,e,n){"use strict";var r=n("e74b"),a=n.n(r);a.a},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,o=n("1dde"),i=n("ae40"),l=o("map"),s=i("map");r({target:"Array",proto:!0,forced:!l||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},d879:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-create"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form-panel"},[n("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:5},"wrapper-col":{span:10},rules:t.rules},on:{submit:t.handleSubmit}},[n("a-form-model-item",{attrs:{label:"Name",prop:"name"}},[n("a-input",{attrs:{placeholder:"Please enter the name of automation"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("a-form-model-item",{attrs:{label:"Action",prop:"type"}},[n("a-select",{attrs:{dropdownMatchSelectWidth:!1,placeholder:"Please choose an action!"},on:{change:t.onActionChange},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.options.actions,(function(e){return n("a-select-option",{key:e.value,attrs:{value:e.value}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),t.args.length?t._l(t.args,(function(e){return n("a-form-model-item",{key:e.name,attrs:{label:e.name}},[n("a-tooltip",[n("template",{slot:"title"},[t._v(" "+t._s(e.tips)+" ")]),"string"===e.type?n("a-input",{attrs:{placeholder:e.placeholder},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"arg.value"}}):t._e(),"boolean"===e.type?n("a-switch",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"arg.value"}}):t._e()],2)],1)})):t._e(),n("a-form-model-item",{attrs:{label:"Target",prop:"target"}},[n("a-input",{attrs:{placeholder:"Please enter the selector of target elements"},model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[n("div",{attrs:{slot:"addonBefore"},slot:"addonBefore"},[t._v("@")])])],1),n("a-form-model-item",{attrs:{label:"Instructions","wrapper-col":{span:18}}},[n("code",{staticClass:"code"},[t._v(t._s(t.instructions))])]),n("a-form-model-item",{attrs:{label:"Pattern",prop:"pattern"}},[n("a-input",{attrs:{placeholder:"Please enter the URL pattern"},model:{value:t.form.pattern,callback:function(e){t.$set(t.form,"pattern",e)},expression:"form.pattern"}})],1),n("a-form-model-item",{attrs:{label:"Intro",prop:"intro"}},[n("a-textarea",{attrs:{placeholder:"Please enter the intro of automation",autoSize:{minRows:2}},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1),n("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:5}}},[n("a-button",{attrs:{type:"primary","html-type":"submit",disabled:t.submitting}},[t._v("Create")])],1)],2)],1)])])},a=[],o=(n("99af"),n("4de4"),n("7db0"),n("a15b"),n("d81d"),n("b0c0"),n("5530"));function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return l(t)||s(t)||c(t)||u()}var d=n("267e");function m(){return JSON.parse(JSON.stringify(d["a"]))}function p(){return{name:"",intro:"",pattern:"",target:"body",type:""}}var v=n("b1c8"),g={name:"AutomationCreate",data:function(){return{options:{actions:d["a"]},actionConfigs:m(),form:p(),rules:{name:[{required:!0,message:"Please enter the name of automation"}],type:[{required:!0,message:"Please choose an action!"}],target:[{required:!0,message:"Please enter the selector of target elements"}],pattern:[{required:!0,message:"Please enter the URL pattern"}]},args:[],submitting:!1}},computed:{instructions:function(){var t=this.getFullAction(),e=this.form.target;return[t,"@",e].join("")}},methods:{getFullAction:function(){var t=this.form.type,e=this.args;if(this.args.length){var n=e.filter((function(t){return t.value!==t.defaultValue})).map((function(t){return[t.name,t.value].join("!")}));return[t].concat(f(n)).join("^")}return t},reset:function(){this.form=p(),this.actionConfigs=m(),this.args=[]},submit:function(){var t=this,e=Object.assign({},this.form);delete e.target;var n=Object(o["a"])(Object(o["a"])({},e),{},{instructions:this.instructions});this.submitting=!0,Object(v["a"])(n).then((function(){t.submitting=!1,t.$message.success("Create successfully!"),t.reset()})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something error";t.$message.error(e)}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.$refs.form.validate((function(t){t&&e.submit()}))},updateArgs:function(t){var e=this.actionConfigs.find((function(e){return e.value===t}));this.args=e&&e.args||[]},onActionChange:function(t){this.updateArgs(t)}}},h=g,b=(n("bc0c"),n("2877")),y=Object(b["a"])(h,r,a,!1,null,"48852994",null);e["default"]=y.exports},ddb0:function(t,e,n){var r=n("da84"),a=n("fdbc"),o=n("e260"),i=n("9112"),l=n("b622"),s=l("iterator"),c=l("toStringTag"),u=o.values;for(var f in a){var d=r[f],m=d&&d.prototype;if(m){if(m[s]!==u)try{i(m,s,u)}catch(v){m[s]=u}if(m[c]||i(m,c,f),a[f])for(var p in o)if(m[p]!==o[p])try{i(m,p,o[p])}catch(v){m[p]=o[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),a=n("83ab"),o=n("da84"),i=n("5135"),l=n("861d"),s=n("9bf2").f,c=n("e893"),u=o.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};c(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,v="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(m,"description",{configurable:!0,get:function(){var t=l(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e74b:function(t,e,n){},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),o=n("e8b5"),i=n("23cb"),l=n("50c4"),s=n("fc6a"),c=n("8418"),u=n("b622"),f=n("1dde"),d=n("ae40"),m=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!m||!p},{slice:function(t,e){var n,r,u,f=s(this),d=l(f.length),m=i(t,d),p=i(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,m,p);for(r=new(void 0===n?Array:n)(h(p-m,0)),u=0;m<p;m++,u++)m in f&&c(r,u,f[m]);return r.length=u,r}})}}]);
//# sourceMappingURL=create.0ecdb5be.js.map