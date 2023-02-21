(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{588:function(t,e,r){"use strict";r.r(e);r(139),r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(19),o=r(0),c=(r(67),r(13),r(49)),l=r.n(c),m=r(75);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{},data:function(){return{publisherID:"gac-amc",implementingOrgStats:{},receiverOrgStats:{}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({lastUpdated:function(){var t=new Date(this.metadata.finished);return"".concat(t.toLocaleDateString(void 0,{})," ").concat(t.toLocaleTimeString(void 0,{}))}},Object(m.b)(["publisherData","analyticsURL","metadata"])),methods:{loadSignatoryImplementingOrgStats:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(t.analyticsURL,"/current/aggregated-publisher/").concat(t.publisherID,"/implementing_org_transaction_stats.json"));case 2:r=e.sent,data=r.data,t.implementingOrgStats=data;case 5:case"end":return e.stop()}}),e)})))()},loadSignatoryReceiverOrgStats:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(t.analyticsURL,"/current/aggregated-publisher/").concat(t.publisherID,"/receiver_org_transaction_stats.json"));case 2:r=e.sent,data=r.data,t.receiverOrgStats=data;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("loadSignatoryData");case 2:return e.next=4,t.$store.dispatch("loadMetadata");case 4:return e.next=6,t.loadSignatoryImplementingOrgStats();case 6:return e.next=8,t.loadSignatoryReceiverOrgStats();case 8:case"end":return e.stop()}}),e)})))()},watch:{publisherID:function(){this.loadSignatoryImplementingOrgStats(),this.loadSignatoryReceiverOrgStats()}}},f=v,h=r(74),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"mb-5"},[e("h5",[t._v("Publishers’ progress in correctly formatting organisation identifiers")]),t._v(" "),e("b-form-group",{attrs:{label:"Select a publisher"}},[e("b-select",{attrs:{options:t.publisherData,"text-field":"name","value-field":"publisherID"},model:{value:t.publisherID,callback:function(e){t.publisherID=e},expression:"publisherID"}})],1),t._v(" "),t.implementingOrgStats.total_orgs>0?[e("b-progress",{staticClass:"mb-2 text-muted",attrs:{max:100,"show-progress":""}},[e("b-progress-bar",{attrs:{value:t.implementingOrgStats.total_valid_refs/t.implementingOrgStats.total_orgs*100,label:"".concat((t.implementingOrgStats.total_valid_refs/t.implementingOrgStats.total_orgs*100).toFixed(0),"%")}})],1),t._v(" "),e("p",[t._v(t._s((t.implementingOrgStats.total_valid_refs/t.implementingOrgStats.total_orgs*100).toFixed(0))+"% of this publisher’s implementing organisation identifiers are correctly formatted.")])]:[e("b-alert",{attrs:{variant:"info",show:""}},[t._v("\n      This publisher does not publish any implementing organisations.\n    ")])],t._v(" "),t.receiverOrgStats.total_orgs>0?[e("b-progress",{staticClass:"mb-2 text-muted",attrs:{max:100,"show-progress":""}},[e("b-progress-bar",{attrs:{value:t.receiverOrgStats.total_valid_refs/t.receiverOrgStats.total_orgs*100,label:"".concat((t.receiverOrgStats.total_valid_refs/t.receiverOrgStats.total_orgs*100).toFixed(0),"%")}})],1),t._v(" "),e("p",[t._v(t._s((t.receiverOrgStats.total_valid_refs/t.receiverOrgStats.total_orgs*100).toFixed(0))+"% of this publisher’s receiver organisation identifiers are correctly formatted.")])]:[e("b-alert",{attrs:{variant:"info",show:""}},[t._v("\n      This publisher does not publish any receiver organisations.\n    ")])],t._v(" "),e("p",{staticClass:"text-muted font-italic text-md-right"},[t._v("Last calculated: "+t._s(t.lastUpdated))])],2)}),[],!1,null,null,null);e.default=component.exports}}]);