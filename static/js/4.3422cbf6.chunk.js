(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{443:function(e,n,t){e.exports={selectedPage:"Pagination_selectedPage__gGvOY"}},444:function(e,n,t){e.exports={user:"User_user__3Yk1o"}},446:function(e,n,t){"use strict";t.r(n);var r=t(71),a=t(72),o=t(74),l=t(73),s=t(0),u=t.n(s),i=t(19),c=t(195),g=t(137),p=t(443),f=t.n(p),m=function(e){for(var n=e.totalUsersCount,t=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=Math.ceil(n/t),l=[],s=1;s<=o;s++)l.push(s);var i=r;return u.a.createElement("div",null,l.map((function(e){if(e<i+3&&e>i-3||1===e||e===l.length)return u.a.createElement("button",{className:r===e&&f.a.selectedPage,onClick:function(n){a(e)}},e)})))},d=t(444),P=t.n(d),h=t(190),w=t.n(h),v=t(45),E=function(e){var n=e.user,t=e.followingInProgress,r=e.follow,a=e.unfollow;return u.a.createElement("div",{className:P.a.user},u.a.createElement("span",null,u.a.createElement("div",null,u.a.createElement(v.c,{to:"/profile/"+n.id},u.a.createElement("img",{src:null!=n.photos.small?n.photos.small:w.a}))),u.a.createElement("div",null,n.followed?u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){a(n.id)}},"Unfollow"):u.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)}},"Follow"))),u.a.createElement("span",null,u.a.createElement("div",null,n.name),u.a.createElement("div",null,n.status)),u.a.createElement("span",null,u.a.createElement("div",null,"user.location.country"),u.a.createElement("div",null,"user.location.city")))},C=function(e){var n=e.pageSize,t=e.totalUsersCount,r=e.users,a=e.currentPage,o=e.onPageChanged,l=Object(g.a)(e,["pageSize","totalUsersCount","users","currentPage","onPageChanged"]);return u.a.createElement("div",null,u.a.createElement(m,{totalUsersCount:t,pageSize:n,currentPage:a,onPageChanged:o}),u.a.createElement("div",null,r.map((function(e){return u.a.createElement(E,{key:e.id,unfollow:l.unfollow,follow:l.follow,user:e,followingInProgress:l.followingInProgress})}))))},b=t(107),U=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},k=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.isFetching},O=function(e){return e.usersPage.followingInProgress},j=t(13),I=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var t=e.props.pageSize;e.props.requestUsers(n,t)},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;this.props.requestUsers(n,t)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement("div",null,u.a.createElement(b.a,null),"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"):null,u.a.createElement(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),t}(u.a.Component);n.default=Object(j.d)(Object(i.b)((function(e){return{users:U(e),pageSize:z(e),totalUsersCount:S(e),currentPage:k(e),isFetching:y(e),followingInProgress:O(e)}}),{follow:c.b,unfollow:c.d,requestUsers:c.c})(I))}}]);
//# sourceMappingURL=4.3422cbf6.chunk.js.map