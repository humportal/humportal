(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{546:function(t,e,n){var content=n(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("967421f2",content,!0,{sourceMap:!1})},555:function(t,e,n){"use strict";n(546)},556:function(t,e,n){var r=n(65)(!1);r.push([t.i,".navbar-text{padding-right:.5rem}.navbar-expand-md .sidebar-nav{flex-direction:column!important}a.nuxt-link-active{font-weight:700}.sidenav{font-size:1.2em}.sidenav,.toc{padding-right:20px}",""]),t.exports=r},581:function(t,e,n){"use strict";n.r(e);var r=n(19),c=(n(67),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("guidance/".concat(r.slug)).fetch();case 3:return c=e.sent,e.next=6,n("guidance").fetch();case 6:return o=e.sent,e.abrupt("return",{doc:c,docs:o});case 8:case"end":return e.stop()}}),e)})))()}}),o=(n(555),n(74)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",[e("b-col",{staticClass:"text-md-right",attrs:{md:"3"}},[e("b-navbar",{attrs:{toggleable:"md"}},[e("b-navbar-toggle",{attrs:{target:"reference-nav-collapse"}},[t._v("Guidance notes menu")]),t._v(" "),e("b-collapse",{attrs:{id:"reference-nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"sidebar-nav",attrs:{vertical:""}},[e("div",{staticClass:"sidenav"},[e("b-nav-text",{staticClass:"font-italic text-dark"},[t._v("Guidance Notes")]),t._v(" "),t._l(t.docs,(function(n){return e("b-nav-item",{key:n.slug,attrs:{to:{name:"guidance-slug",params:{slug:n.slug}}}},[t._v("\n                "+t._s(n.title)+"\n              ")])}))],2),t._v(" "),e("div",{staticClass:"toc"},[e("b-nav-text",{staticClass:"font-italic text-dark"},[t._v("In this Note")]),t._v(" "),t._l(t.doc.toc,(function(link){return 2===link.depth?e("b-nav-item",{key:link.id,attrs:{to:"#".concat(link.id)}},[t._v("\n                "+t._s(link.text)+"\n              ")]):t._e()}))],2)])],1)],1)],1),t._v(" "),e("b-col",{staticClass:"content-col",attrs:{md:"9"}},[e("NuxtContent",{attrs:{document:t.doc}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);