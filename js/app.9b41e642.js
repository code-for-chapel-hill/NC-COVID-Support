(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],c=0,d=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Home",{attrs:{msg:"Hello world!"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[t._v("\n            Chapel Hill-Carrboro COVID Community Support Resources\n        ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("em",[t._v("User")])]},proxy:!0}])},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1),r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("div",{staticClass:"bg-light border-right",attrs:{id:"sidebar-wrapper"}},[r("div",{staticClass:"list-group list-group-flush"},[r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[t._v("\n                    What do you need?\n                    "),r("b-form-select",{attrs:{options:t.needOptions},model:{value:t.userneed,callback:function(e){t.userneed=e},expression:"userneed"}})],1),r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[t._v("\n\n                    When do you need it?\n                    "),r("b-form-select",{attrs:{options:t.dayOptions},model:{value:t.userday,callback:function(e){t.userday=e},expression:"userday"}})],1),r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[t._v("\n                    Resource type\n                    Free resources\n                    Paid resources\n                ")]),r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[t._v("\n                    Access\n                    Pick-up\n                    Drive-up\n                    Delivery\n                ")]),r("div",{staticClass:"list-group-item list-group-item-action bg-light"},[t._v("\n                    Times available\n                    Morning\n                    Afternoon\n                    Evening\n                    24 hour\n                ")])])]),r("div",{attrs:{id:"page-content-wrapper"}},[r("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{cols:"6",md:"3"}},[t._v("1 of 4")]),r("b-col",{attrs:{cols:"6",md:"3"}},[t._v("2 of 4")]),r("b-col",{attrs:{cols:"6",md:"3"}},[t._v("3 of 4")]),r("b-col",{attrs:{cols:"6",md:"3"}},[t._v("4 of 4")])],1),r("b-row",{staticClass:"mapRow"},[r("b-col",{attrs:{cols:"12"}},[r("div",{staticClass:"map"},[t.showMap?r("l-map",{staticStyle:{height:"100%",width:"100%"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[r("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),r("l-marker",{attrs:{"lat-lng":t.withPopup}},[r("l-popup",[r("div",{on:{click:t.innerClick}},[t._v("\n                                            I am a popup\n                                            "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.showParagraph,expression:"showParagraph"}]},[t._v("\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\n                                                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.\n                                                Donec finibus semper metus id malesuada.\n                                            ")])])])],1),r("l-marker",{attrs:{"lat-lng":t.withTooltip}},[r("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[r("div",{on:{click:t.innerClick}},[t._v("\n                                            I am a tooltip\n                                            "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.showParagraph,expression:"showParagraph"}]},[t._v("\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque\n                                                sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.\n                                                Donec finibus semper metus id malesuada.\n                                            ")])])])],1)],1):t._e()],1)])],1)],1)],1)])],1)},s=[],l=r("e11e"),u=r("2699"),p=r("a40a"),c=r("4e2b"),d=r("f60f"),m=r("31dc"),v={name:"Home",props:{msg:String},components:{LMap:u["a"],LTileLayer:p["a"],LMarker:c["a"],LPopup:d["a"],LTooltip:m["a"]},data:function(){return{userneed:String,userday:String,name:"BootstrapVue",show:!0,needOptions:[{value:"Meals",text:"Meals"},{value:"Groceries",text:"Groceries"},{value:"Pharmacy",text:"Pharmacy"},{value:"Childcare",text:"Child Care"}],dayOptions:[{value:"Monday",text:"Monday"},{value:"Tuesday",text:"Tuesday"},{value:"Wednesday",text:"Wednesday"},{value:"Thursday",text:"Thursday"},{value:"Friday",text:"Friday"},{value:"Saturday",text:"Saturday"},{value:"Sunday",text:"Sunday"}],zoom:13,center:Object(l["latLng"])(47.41322,-1.219482),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:Object(l["latLng"])(47.41322,-1.219482),withTooltip:Object(l["latLng"])(47.41422,-1.250482),currentZoom:11.5,currentCenter:Object(l["latLng"])(47.41322,-1.219482),showParagraph:!1,mapOptions:{zoomSnap:.5},showMap:!0}},mounted:function(){},watch:{},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){alert("Click!")}}},f=v,h=(r("75f8"),r("2877")),b=Object(h["a"])(f,i,s,!1,null,"6cb7aca9",null),g=b.exports,y={name:"app",components:{Home:g}},w=y,_=Object(h["a"])(w,n,o,!1,null,null,null),x=_.exports,C=r("5f5b"),O=r("b1e0");r("f9e3"),r("2dd8"),r("6cc5");a["default"].use(C["a"]),a["default"].use(O["a"]),a["default"].config.productionTip=!0,new a["default"]({render:function(t){return t(x)}}).$mount("#app")},"75f8":function(t,e,r){"use strict";var a=r("fec9"),n=r.n(a);n.a},fec9:function(t,e,r){}});
//# sourceMappingURL=app.9b41e642.js.map