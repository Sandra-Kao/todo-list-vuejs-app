(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2fef":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"new-todo"},[o("TodoOptions")],1)},n=[],s=o("4360"),d=o("37f0"),i={name:"NewTodo",components:{TodoOptions:d["a"]},props:{},data:function(){return{todo:{item:"",isDone:!1,dueToDate:null,details:""}}},mounted:function(){},computed:{todos:function(){return s["a"].state.todos}}},u=i,l=o("2877"),c=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=c.exports},"37f0":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todo-options todo-wrapper"},[o("label",[t._v("Todo *")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.item,expression:"todo.item"}],attrs:{type:"text",placeholder:""},domProps:{value:t.todo.item},on:{input:function(e){e.target.composing||t.$set(t.todo,"item",e.target.value)}}}),o("label",[t._v("Due To Date")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.dueToDate,expression:"todo.dueToDate"}],attrs:{type:"date",placeholder:""},domProps:{value:t.todo.dueToDate},on:{input:function(e){e.target.composing||t.$set(t.todo,"dueToDate",e.target.value)}}}),o("label",[t._v("Details")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.details,expression:"todo.details"}],attrs:{type:"text",maxlength:"500"},domProps:{value:t.todo.details},on:{input:function(e){e.target.composing||t.$set(t.todo,"details",e.target.value)}}}),o("div",{staticClass:"todo-options__action"},[o("button",{staticClass:"circle-btn padding-helf margin-helf",on:{click:t.goPageHome}},[o("i",{staticClass:"fas fa-arrow-left"})]),o("button",{staticClass:"circle-btn padding-helf margin-helf",on:{click:t.submitOptions}},[o("i",{staticClass:"far fa-thumbs-up"})])])])},n=[],s=o("5530"),d=o("4360"),i=o("2f62"),u=o("a18c"),l={name:"TodoOptions",props:{},data:function(){return{todo:{item:"",isDone:!1,dueToDate:null,details:""}}},mounted:function(){this.selectedTodo.id&&(this.todo=this.selectedTodo)},computed:{todos:function(){return d["a"].state.todos},selectedTodo:function(){return d["a"].state.selectedTodo}},methods:Object(s["a"])(Object(s["a"])({},i["a"].mapActions(["setSelectedTodo","setUpdateTodo","setNewAddTodo"])),{},{$_setRouter:function(t){u["a"].push(t)},goPageHome:function(){var t={item:"",isDone:!0,dueToDate:"",details:""};this.setSelectedTodo(t),this.$_setRouter("/")},submitOptions:function(){var t=this.todo;t&&void 0!==t.id?this.setUpdateTodo(t):this.setNewAddTodo(t)}})},c=l,r=(o("764e"),o("2877")),p=Object(r["a"])(c,a,n,!1,null,"6f482dfb",null);e["a"]=p.exports},6652:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"update-todo"},[o("TodoOptions")],1)},n=[],s=o("4360"),d=o("37f0"),i={name:"UpdateTodo",components:{TodoOptions:d["a"]},props:{},data:function(){return{}},mounted:function(){},computed:{todos:function(){return s["a"].state.todos}}},u=i,l=o("2877"),c=Object(l["a"])(u,a,n,!1,null,null,null);e["default"]=c.exports},"764e":function(t,e,o){"use strict";o("d2c7")},d2c7:function(t,e,o){}}]);
//# sourceMappingURL=about.js.map