(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{297:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3oe35",avaSize:"Dialogs_avaSize__3WURS",dialogsItem:"Dialogs_dialogsItem__35ghw",active:"Dialogs_active__2ajup",message:"Dialogs_message__2ou6Q"}},298:function(e,a,t){e.exports={item:"DialogsItem_item__Zqdvs",active:"DialogsItem_active__folAf"}},299:function(e,a,t){},302:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(103),l=t(297),m=t.n(l),c=t(298),o=t.n(c),r=t(13);var g=function(e){return s.a.createElement("div",{className:o.a.item+" "+o.a.active},s.a.createElement(r.b,{to:"/dialogs/"+e.id,activeClassName:o.a.active},s.a.createElement("img",{src:e.avatar}),e.name))},u=t(299),d=t.n(u);var v=function(e){return s.a.createElement("div",{className:d.a.dialogs},e.message)},_=t(10),f=t(128),E=t(129),b=t(40),p=t(39),h=Object(p.a)(50),D=Object(E.a)({form:"dialogsAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(f.a,{name:"message",component:b.b,placeholder:"Enter your message",validate:[p.b,h]})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),S=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(g,{avatar:e.url,key:e.id,name:e.name,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(v,{message:e.message,key:e.id})}));return e.isAuth?s.a.createElement("div",{className:m.a.dialogs},s.a.createElement("div",{className:m.a.dialogsItem},t),s.a.createElement("div",{className:m.a.message},s.a.createElement("div",null,n),s.a.createElement("div",null,s.a.createElement(D,{onSubmit:function(a){e.sendMessage(a.message)}})))):s.a.createElement(_.a,{to:"/Login"})},j=t(11),N=t(127),y=t(8);a.default=Object(y.d)(Object(j.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),N.a)(S)}}]);
//# sourceMappingURL=3.0bb93c96.chunk.js.map