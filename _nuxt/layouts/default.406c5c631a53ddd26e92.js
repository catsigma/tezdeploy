webpackJsonp([0],{"1X/d":function(t,o,n){var a=n("wUqV");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4eda56f2",a,!1,{sourceMap:!1})},"7QL1":function(t,o,n){"use strict";var a=function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"logo"},[this._v("\n    tez deployer "+this._s(this.g.admin?": "+this.g.admin:"")+"\n  ")]),o("nuxt")],1)};a._withStripped=!0;var e={render:a,staticRenderFns:[]};o.a=e},ESDm:function(t,o,n){var a=n("Xg+O");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1998d1f0",a,!1,{sourceMap:!1})},"H1+3":function(t,o,n){(t.exports=n("FZ+f")(!1)).push([t.i,".wrapper[data-v-39336072]{width:1200px;margin:0 auto}.logo[data-v-39336072]{font-size:16px;font-weight:900;margin:8px 0}",""])},N6x7:function(t,o,n){t.exports=n.p+"fonts/Lato-Black.cdf8b89.woff2"},QbH5:function(t,o,n){"use strict";var a=n("osXY");o.a={data:function(){return{g:a.a}},mounted:function(){var t=this;tezbridge({method:"public_key_hash",noalert:!0}).then(function(o){return t.g.admin=o}).catch(function(){})}}},"Xg+O":function(t,o,n){(t.exports=n("FZ+f")(!1)).push([t.i,"*{margin:0;padding:0;vertical-align:middle;font-family:Lato;font-size:14px;outline:none;-webkit-transition:all .25s ease;transition:all .25s ease}button{border:1px solid #000;background:transparent;padding:4px 8px;-webkit-box-shadow:1px 1px 0 0 #000;box-shadow:1px 1px 0 0 #000}button:hover{-webkit-box-shadow:3px 3px 0 0 #000;box-shadow:3px 3px 0 0 #000}button:active{-webkit-box-shadow:0 0 0 0 #000;box-shadow:0 0 0 0 #000}",""])},aj4G:function(t,o,n){t.exports=n.p+"fonts/Lato-Regular.c864a89.woff2"},hVnI:function(t,o,n){var a=n("H1+3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("793e7e3c",a,!1,{sourceMap:!1})},kxFB:function(t,o){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},lfHO:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=n("QbH5"),e=n("7QL1"),i=!1;var r=function(t){i||(n("ESDm"),n("hVnI"),n("1X/d"))},s=n("VU/8")(a.a,e.a,!1,r,"data-v-39336072",null);s.options.__file="src/layouts/default.vue",o.default=s.exports},osXY:function(t,o,n){"use strict";n.d(o,"a",function(){return a});var a={admin:""}},wUqV:function(t,o,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"@font-face{font-family:Lato;src:url("+a(n("aj4G"))+') format("woff2");font-weight:400;font-style:normal}@font-face{font-family:Lato;src:url('+a(n("N6x7"))+') format("woff2");font-weight:900;font-style:normal}',""])}});