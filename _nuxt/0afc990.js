(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{548:function(t,e,r){var content=r(562);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("db1e1d38",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r(548)},562:function(t,e,r){var n=r(65)(!1);n.push([t.i,".blog-container[data-v-1aeae560]{max-width:800px}.blog-img[data-v-1aeae560]{width:300px;margin-right:20px;box-shadow:0 0 6px #aaa}",""]),t.exports=n},583:function(t,e,r){"use strict";r.r(e);var n=r(19),o=(r(67),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("blogs/".concat(n.slug)).fetch();case 3:return o=e.sent,e.abrupt("return",{blog:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=(r(561),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"blog-container"},[e("b-row",{attrs:{"no-gutters":"","align-v":"center"}},[e("b-col",[e("b-row",{attrs:{"align-v":"center",margin:"20"}},[t.blog.image?e("b-img",{staticClass:"blog-img",attrs:{src:t.blog.image,rounded:"",fluid:"",alt:""}}):t._e(),t._v(" "),e("b-col",[e("h1",{staticClass:"text-monospace"},[t._v(t._s(t.blog.title))]),t._v(" "),e("b-badge",{attrs:{variant:"blog"===t.blog.category?"info":"warning"}},[t._v(t._s(t.blog.category))]),t._v(" "),e("b-badge",{attrs:{variant:"dark"}},[t._v(t._s(new Date(t.blog.date).toDateString()))])],1)],1)],1)],1),t._v(" "),e("article",{staticClass:"my-5"},[e("nuxt-content",{attrs:{document:t.blog}}),t._v(" "),t.blog.url?e("b-button",{staticClass:"mt-4",attrs:{href:t.blog.url,variant:"primary"}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fas","external-link-alt"]}}),t._v("\n      "+t._s("blog"===t.blog.category?"Read More":"Visit Site")+"\n    ")],1):t._e()],1)],1)}),[],!1,null,"1aeae560",null);e.default=component.exports}}]);