(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{37:function(e,t,n){},57:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(29),i=n.n(a),r=n(4),l=n(12),o=n(2),u=(n(37),n(9)),j=n.n(u),b=n(11),p=n(30),f=n(18),O=n.n(f),d=(n(57),n(1)),h=function(e){var t=e.setPeopleList,n=e.peopleList,s=e.active,a=Object(c.useState)([]),i=Object(r.a)(a,2),l=i[0],u=i[1],f=Object(c.useState)(!1),h=Object(r.a)(f,2),m=h[0],x=h[1],v=Object(c.useRef)(null),g=new p.a("PersonsDB");function N(){return(N=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.persons.toArray();case 2:t=e.sent,n.length&&JSON.stringify(n)!==JSON.stringify(t)&&S();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g.version(1).stores({persons:"++id"}),Object(c.useEffect)((function(){l.length&&S(),t(l)}),[l,t]),Object(c.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[n]);var _=Object(o.f)();function y(){return(y=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.persons.toArray();case 2:if(!((t=e.sent).length>0)){e.next=8;break}return u(t),e.abrupt("return");case 8:L();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.persons.clear();case 2:for(t=[],n=0;n<l.length;++n)t.push({name:{title:l[n].name.title,first:l[n].name.first,last:l[n].name.last},email:l[n].email,phone:l[n].phone,picture:{large:l[n].picture.large}});g.persons.bulkAdd(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){O()("https://randomuser.me/api/?results=10").then((function(e){u(e.data.results)})).catch((function(){x(!0)}))},k=function(){v.current.scrollTop=v.current.scrollHeight};return Object(d.jsxs)("section",{className:"persons-list-container",children:[Object(d.jsx)("h1",{className:"persons-list__header",children:"List of people"}),Object(d.jsxs)("div",{className:"actions",children:[Object(d.jsx)("button",{className:"actions__modify-list",onClick:function(){O()("https://randomuser.me/api/?results=2").then((function(e){var t=l.concat(e.data.results);u(t),k()})).catch((function(){x(!0)}))},children:"add"}),Object(d.jsx)("button",{className:"actions__modify-list",onClick:function(){L()},children:"reset"})]}),m?Object(d.jsx)("div",{className:"error",children:"Error occured"}):null,Object(d.jsx)("ul",{ref:v,className:"persons-list",children:l.map((function(e,t){return Object(d.jsxs)("li",{className:"persons-list__person ".concat(t===s?"active":""),onClick:function(){var e;e=t,_.push("/details/".concat(e))},children:[e.name.title," ",e.name.first," ",e.name.last]},t)}))})]})},m=n(32),x=(n(67),function(e){var t=e.peopleList,n=e.setPeopleList,s=Object(c.useState)([]),a=Object(r.a)(s,2),i=a[0],l=a[1],u=Object(c.useState)(""),p=Object(r.a)(u,2),f=p[0],O=p[1],h=Object(c.useState)(""),x=Object(r.a)(h,2),v=x[0],g=x[1],N=Object(c.useState)(""),_=Object(r.a)(N,2),y=_[0],S=_[1],L=Object(c.useState)(""),k=Object(r.a)(L,2),C=k[0],w=k[1],E=Object(c.useState)(""),P=Object(r.a)(E,2),A=P[0],D=P[1],I=Object(c.useState)(!1),F=Object(r.a)(I,2),J=F[0],B=F[1],T=Object(c.useState)(!1),z=Object(r.a)(T,2),Z=z[0],$=z[1],H=Object(o.g)().personID,M=Object(o.f)();Object(c.useEffect)((function(){l(t)}),[t]),Object(c.useEffect)((function(){t[H]&&(O(t[H].name.first),g(t[H].name.last),S(t[H].phone),w(t[H].email),D(t[H].picture.large))}),[t,H]),Object(c.useEffect)((function(){}),[i]);var R=function(){var e=Object(b.a)(j.a.mark((function e(c){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),s=Object(m.a)(t),W(),s[H].name.first=f,s[H].name.last=v,s[H].email=C,s[H].phone=y,!W()||!q()){e.next=11;break}n(s),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:G();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function W(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(C).toLowerCase())?(B(!1),!0):(B(!0),!1)}function q(){return/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(String(y).toLowerCase())?($(!1),!0):($(!0),!1)}var G=function(){M.push("/details/".concat(H))};return Object(d.jsx)("section",{children:Object(d.jsxs)("form",{onSubmit:R,children:[Object(d.jsx)("img",{src:A,alt:"".concat(f)}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:" first name"}),Object(d.jsx)("input",{type:"text",value:f,onChange:function(e){O(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:" last name"}),Object(d.jsx)("input",{type:"text",value:v,onChange:function(e){g(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Phone"}),Object(d.jsx)("input",{type:"text",value:y,onChange:function(e){S(e.target.value)},className:"".concat(Z?"invalid":"")})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Email"}),Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){w(e.target.value)},className:"".concat(J?"invalid":"")})]}),Object(d.jsx)("input",{type:"submit",value:"Wy\u015blij"})]})})}),v=(n(68),function(e){var t=e.peopleList,n=e.setActive,s=Object(c.useState)([]),a=Object(r.a)(s,2),i=a[0],l=a[1],u=Object(o.g)().personID,j=Object(o.f)();Object(c.useEffect)((function(){l(t)}),[t]),Object(c.useEffect)((function(){n(parseInt(u))}),[u,n]);return Object(d.jsxs)("section",{className:"details-container",children:[i[u]?Object(d.jsxs)("article",{className:"details",children:[Object(d.jsx)("img",{className:"details__img",src:i[u].picture.large,alt:"".concat(i[u].name.first)}),Object(d.jsxs)("div",{className:"details__names",children:[Object(d.jsx)("h2",{className:"details__names__header",children:"Name"}),Object(d.jsx)("div",{children:i[u].name.title}),Object(d.jsx)("div",{children:i[u].name.first}),Object(d.jsx)("div",{children:i[u].name.last})]}),Object(d.jsxs)("div",{className:"details__contact",children:[Object(d.jsx)("h2",{className:"details__contact__header",children:"Contact"}),Object(d.jsx)("div",{children:i[u].phone}),Object(d.jsx)("div",{children:i[u].email})]})]}):null,Object(d.jsx)("button",{className:"edit",onClick:function(){var e;e=u,j.push("/edit/".concat(e))},children:"edit"})]})});var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(),i=Object(r.a)(a,2),u=i[0],j=i[1];return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"body-layout",children:[Object(d.jsx)(h,{setPeopleList:s,peopleList:n,active:u}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/edit/:personID",children:Object(d.jsx)(x,{peopleList:n,setPeopleList:s})}),Object(d.jsx)(o.a,{exact:!0,path:"/details/:personID",children:Object(d.jsx)(v,{peopleList:n,setActive:j})})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),N()}},[[69,1,2]]]);
//# sourceMappingURL=main.3338f8e5.chunk.js.map