(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);v&&v(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var v=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0276":function(t,e,n){},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"37cf":function(t,e,n){},"475f":function(t,e,n){"use strict";var o=n("0276"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("b-row",[n("Calendar")],1)],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendarWrap"},[n("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"mr-2 my-2"},[t._v("Add event")]),n("b-button",{staticClass:"mr-2 my-2",on:{click:function(e){t.toggleEventList()}}},[t._v(t._s(t.showEventList?"Close event list":"Event list"))]),t.showEventList?n("event-filter",{on:{filterSearch:function(e){t.startFilter(e)}}}):t._e(),n("event-modal",{ref:"eventModal",attrs:{eventToEdit:t.eventToEdit},on:{hide:function(e){t.eventToEdit=null},editEvent:function(e){t.updateEvent(e)},addNewEvent:function(e){t.addNewEvent(e)}}}),t.showEventList?n("event-list",{attrs:{filter:t.filter,events:t.events},on:{editEvent:function(e){t.editEvent(e)},removeEvent:function(e){t.removeEvent(e)}}}):t._e(),n("full-calendar",{directives:[{name:"show",rawName:"v-show",value:!t.showEventList,expression:"!showEventList"}],attrs:{events:t.events,config:t.config},on:{"event-drop":function(e){t.updateEvent(e)},"event-selected":function(e){t.editEvent(e)},"event-resize":function(e){t.updateEvent(e)}}})],1)},s=[],l=(n("ac6a"),n("6b54"),n("25cc")),c=(n("fa91"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"modalCenter",attrs:{id:"modal-center",centered:"",title:t.eventToEdit?"Edit event":"Add event"},on:{shown:function(e){t.editModal()},hide:function(e){t.$emit("hide"),t.eventToEdit&&t.clearModal()},ok:t.handleOk}},[n("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.addEvent(e)}}},[n("label",{attrs:{for:"eventTitle"}},[t._v("Enter event title:")]),n("b-form-input",{attrs:{id:"eventTitle",state:t.nameState(t.event.title),type:"text"},model:{value:t.event.title,callback:function(e){t.$set(t.event,"title",e)},expression:"event.title"}}),n("label",{attrs:{for:"eventStart"}},[t._v("Enter event start date:")]),n("date-picker",{attrs:{config:t.datePickerOptions,id:"eventStart"},model:{value:t.event.start,callback:function(e){t.$set(t.event,"start",e)},expression:"event.start"}}),n("label",{attrs:{for:"eventEnd"}},[t._v("Enter event end date:")]),n("date-picker",{attrs:{config:t.datePickerOptions,id:"eventStart"},model:{value:t.event.end,callback:function(e){t.$set(t.event,"end",e)},expression:"event.end"}}),n("label",{attrs:{for:"eventType"}},[t._v("Enter event type:")]),n("b-form-input",{attrs:{id:"eventType",state:t.nameState(t.event.type),type:"text"},model:{value:t.event.type,callback:function(e){t.$set(t.event,"type",e)},expression:"event.type"}}),n("label",{attrs:{for:"textColor"}},[t._v("Enter text color:")]),n("b-form-input",{attrs:{id:"textColor",state:t.nameState(t.event.textColor),type:"color"},model:{value:t.event.textColor,callback:function(e){t.$set(t.event,"textColor",e)},expression:"event.textColor"}}),n("label",{attrs:{for:"bgColor"}},[t._v("Enter background color:")]),n("b-form-input",{attrs:{id:"bgColor",state:t.nameState(t.event.backgroundColor),type:"color"},model:{value:t.event.backgroundColor,callback:function(e){t.$set(t.event,"backgroundColor",e)},expression:"event.backgroundColor"}})],1)])}),v=[],u=(n("456d"),n("ca56"),{name:"addEventModal",data:function(){return{date:"",event:{title:null,start:null,end:null,type:null,textColor:"#ffffff",backgroundColor:"#007bff"},datePickerOptions:{showClear:!0,showClose:!0}}},props:["eventToEdit"],methods:{handleOk:function(t){t.preventDefault(),this.checkEvent()&&this.addEvent()},addEvent:function(){this.eventToEdit?this.$emit("editEvent",this.event):this.$emit("addNewEvent",this.event),this.clearModal(),this.$refs.modalCenter.hide()},nameState:function(t){return!!(t&&t.length>0)},checkEvent:function(){for(var t=Object.keys(this.event),e=!0,n=0;n<t.length;n++)!this.event[t[n]]&&(e=!1);return e},clearModal:function(){for(var t=Object.keys(this.event),e=0;e<t.length;e++)this.event[t[e]]===this.event.textColor?this.event[t[e]]="#ffffff":this.event[t[e]]===this.event.backgroundColor?this.event[t[e]]="#007bff":this.event[t[e]]=null},editModal:function(){this.eventToEdit&&(this.$set(this.event,"title",this.eventToEdit.title||null),this.$set(this.event,"start",this.eventToEdit.start._d||this.eventToEdit.start||null),this.$set(this.event,"end",this.eventToEdit.end._d||this.eventToEdit.end||null),this.$set(this.event,"type",this.eventToEdit.type||null),this.$set(this.event,"textColor",this.eventToEdit.textColor||null),this.$set(this.event,"backgroundColor",this.eventToEdit.backgroundColor||null))}},mounted:function(){}}),d=u,f=(n("475f"),n("2877")),p=Object(f["a"])(d,c,v,!1,null,"6d5efb80",null);p.options.__file="eventModal.vue";var h=p.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-table",{attrs:{striped:"",hover:"",outlined:"","show-empty":"","empty-text":"There is no events yet","empty-filtered-text":"There are no records matching your request","sort-by":t.sortBy,"sort-desc":t.sortDesc,items:t.parsedEvents,filter:t.filter,fields:t.fields},on:{"update:sortBy":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"type",fn:function(e){return[n("b-badge",{style:{color:e.item.textColor,backgroundColor:e.item.backgroundColor}},[t._v(t._s(e.item.type))])]}},{key:"edit_event",fn:function(e){return[n("b-button",{staticClass:"align-items-center",attrs:{size:"sm"},on:{click:function(n){t.$emit("editEvent",e.item)}}},[t._v("\n                Edit\n            ")])]}},{key:"delete_event",fn:function(e){return[n("b-button",{staticClass:"align-items-center",attrs:{size:"sm"},on:{click:function(n){t.$emit("removeEvent",e.item)}}},[t._v("\n                X\n            ")])]}}])})],1)},m=[],E={name:"eventList",data:function(){return{sortBy:"event_start",sortDesc:!1,fields:[{key:"event_start",sortable:!0},{key:"title",sortable:!0},{key:"type",sortable:!0},{key:"edit_event",sortable:!1},{key:"delete_event",sortable:!1}]}},props:["events","filter"],computed:{parsedEvents:function(){var t=this,e=this.events;return e.forEach(function(e){var n=new Date(e.start);t.$set(e,"event_start","".concat(n.getFullYear(),".").concat(n.getMonth()+1,".").concat(n.getDate()," at ").concat(n.getHours(),":").concat(n.getMinutes()))}),e}}},g=E,y=(n("c42e"),Object(f["a"])(g,b,m,!1,null,"9e2ba278",null));y.options.__file="eventList.vue";var k=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-col",{staticClass:"d-inline-block my-1",attrs:{md:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Filter"}},[n("b-input-group",[n("b-form-input",{attrs:{placeholder:"Type to Search"},on:{input:function(e){t.$emit("filterSearch",t.filter)}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-btn",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1)},C=[],x={name:"eventFilter",data:function(){return{filter:null}}},w=x,T=(n("9968"),Object(f["a"])(w,_,C,!1,null,"3580ff60",null));T.options.__file="eventFilter.vue";var $=T.exports,S="event-storage",O={name:"calendar",data:function(){return{showEventList:!1,events:[],config:{header:{right:"month, agendaWeek, agendaDay, today",center:"title",left:"prev, next"},height:"auto",defaultView:"month",themeSystem:"bootstrap4"},filter:null,eventToEdit:null}},methods:{addNewEvent:function(t){this.events.push({title:t.title,start:new Date(t.start),end:new Date(t.end),textColor:t.textColor,backgroundColor:t.backgroundColor,type:t.type,id:"_".concat(Math.random().toString(36).substr(2,9))}),localStorage.setItem(S,JSON.stringify(this.events))},removeEvent:function(t){var e=this;this.events.forEach(function(n,o){n===t&&e.events.splice(o,1)}),localStorage.setItem(S,JSON.stringify(this.events))},toggleEventList:function(){this.showEventList=!this.showEventList},startFilter:function(t){this.filter=t},editEvent:function(t){this.eventToEdit=t,this.$refs.eventModal.$refs.modalCenter.show()},updateEvent:function(t){var e=this;this.events.forEach(function(n){(n.id===t.id||e.eventToEdit&&n.id===e.eventToEdit.id)&&(n.title=t.title,n.start=t.start,n.end=t.end,n.textColor=t.textColor,n.backgroundColor=t.backgroundColor,n.type=t.type,localStorage.setItem(S,JSON.stringify(e.events)))})}},components:{FullCalendar:l["a"],eventModal:h,eventList:k,eventFilter:$},created:function(){this.events=JSON.parse(localStorage.getItem(S)),!this.events&&(this.events=[])}},M=O,j=(n("8172"),Object(f["a"])(M,a,s,!1,null,null,null));j.options.__file="calendar.vue";var L=j.exports,D=(n("f9e3"),n("2dd8"),{name:"app",components:{Calendar:L}}),N=D,P=(n("034f"),Object(f["a"])(N,r,i,!1,null,null,null));P.options.__file="App.vue";var F=P.exports,J=n("9f7b"),z=n("133f"),B=n.n(z),I=n("1157"),A=n.n(I);o["a"].use(J["a"]),o["a"].use(B.a),o["a"].config.productionTip=!1;var W=A.a;W.extend(!0,W.fn.datetimepicker.defaults,{icons:{time:"far fa-clock",date:"far fa-calendar",up:"fas fa-arrow-up",down:"fas fa-arrow-down",previous:"fas fa-chevron-left",next:"fas fa-chevron-right",today:"fas fa-calendar-check",clear:"far fa-trash-alt",close:"far fa-times-circle"}}),new o["a"]({render:function(t){return t(F)}}).$mount("#app")},"58ac":function(t,e,n){},"64a9":function(t,e,n){},8172:function(t,e,n){"use strict";var o=n("58ac"),r=n.n(o);r.a},9353:function(t,e,n){},9968:function(t,e,n){"use strict";var o=n("9353"),r=n.n(o);r.a},c42e:function(t,e,n){"use strict";var o=n("37cf"),r=n.n(o);r.a}});
//# sourceMappingURL=app.94d0f36f.js.map