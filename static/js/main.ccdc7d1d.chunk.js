(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{102:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(26),i=c.n(s),r=c(4),o=c(30),l=c(5),u=(c(68),c(9)),j=c.n(u),b=c(20),p=c(59),d=c(37),O=c.n(d),h=(c(87),c(2)),f=function(e){var t=e.setPeopleList,c=e.peopleList,a=e.active,s=Object(n.useState)([]),i=Object(r.a)(s,2),o=i[0],u=i[1],d=Object(n.useState)(!1),f=Object(r.a)(d,2),m=f[0],x=f[1],v=Object(n.useRef)(null),_=new p.a("PersonsDB");function g(){return(g=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.persons.toArray();case 3:t=e.sent,c.length&&JSON.stringify(c)!==JSON.stringify(t)&&S(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}_.version(1).stores({persons:"++id"}),Object(n.useEffect)((function(){o.length&&S(),t(o)}),[o,t]),Object(n.useEffect)((function(){c&&function(){g.apply(this,arguments)}()}),[c]);var N=Object(l.f)();function y(){return(y=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.persons.toArray();case 3:if(!((t=e.sent).length>0)){e.next=9;break}return u(t),e.abrupt("return");case 9:C().then((function(e){u(e.data.results)})).catch((function(){x(!0)}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]);var S=function(){var e=Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.persons.clear();case 2:for(t=[],c=0;c<o.length;++c)t.push({name:{title:o[c].name.title,first:o[c].name.first,last:o[c].name.last},email:o[c].email,phone:o[c].phone,picture:{large:o[c].picture.large}});_.persons.bulkAdd(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://randomuser.me/api/?results=10");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){v.current.scrollTop=v.current.scrollHeight};return Object(h.jsxs)("section",{className:"persons-list-container",children:[Object(h.jsxs)("div",{className:"actions",children:[Object(h.jsx)("button",{className:"actions__modify-list",id:"add",onClick:function(){O()("https://randomuser.me/api/?results=2").then((function(e){var t=o.concat(e.data.results);u(t),w()})).catch((function(){x(!0)}))},children:"add"}),Object(h.jsx)("button",{className:"actions__modify-list",onClick:function(){u([]),C().then((function(e){u(e.data.results)})).catch((function(){x(!0)}))},id:"reset",children:"reset"})]}),m?Object(h.jsx)("div",{className:"error",children:"Error occured"}):null,m,Object(h.jsx)("ul",{ref:v,className:"persons-list",children:o.map((function(e,t){return Object(h.jsx)("li",{className:"persons-list__person ".concat(t===a?"active":""),onClick:function(){var e;e=t,N.push("/details/".concat(e))},children:Object(h.jsxs)("div",{className:"persons-list__person__content",children:[e.name.title," ",e.name.first," ",e.name.last]})},t)}))})]})},m=c(11),x=(c(96),function(e){var t=e.peopleList,c=e.setPeopleList,a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)(""),j=Object(r.a)(u,2),b=j[0],p=j[1],d=Object(n.useState)(""),O=Object(r.a)(d,2),f=O[0],x=O[1],v=Object(n.useState)(""),_=Object(r.a)(v,2),g=_[0],N=_[1],y=Object(n.useState)(""),S=Object(r.a)(y,2),C=S[0],w=S[1],k=Object(n.useState)(!1),L=Object(r.a)(k,2),E=L[0],A=L[1],z=Object(n.useState)(!1),D=Object(r.a)(z,2),I=D[0],M=D[1],P=Object(n.useState)(!1),F=Object(r.a)(P,2),B=F[0],H=F[1],J=Object(n.useState)(!1),T=Object(r.a)(J,2),Z=T[0],$=T[1],U=Object(l.g)().personID,V=Object(l.f)();Object(n.useEffect)((function(){t[U]&&(o(t[U].name.first),p(t[U].name.last),x(t[U].phone),N(t[U].email),w(t[U].picture.large))}),[t,U]);var R=function(){V.push("/details/".concat(U))};return Object(h.jsx)("section",{className:"edit-container",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Object(m.a)(t);if((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(g).toLowerCase())?(A(!1),1):(A(!0),0))&&(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(String(f).toLowerCase())?(M(!1),1):(M(!0),0))&&(/^([ \u00c0-\u01ffa-zA-Z'])+$/.test(String(i).toLowerCase())?(H(!1),1):(H(!0),0))&&(/^([ \u00c0-\u01ffa-zA-Z'])+$/.test(String(b).toLowerCase())?($(!1),1):($(!0),0))){var a=i,s=b;n[U].name.first=a.toLowerCase().charAt(0).toUpperCase()+a.toLowerCase().substring(1),n[U].name.last=s.toLowerCase().charAt(0).toUpperCase()+s.toLowerCase().substring(1),n[U].email=g,n[U].phone=f,c(n),R()}},children:[Object(h.jsx)("picture",{children:Object(h.jsx)("img",{className:"edit__img",src:C,alt:"".concat(i),width:"128px",height:"128px"})}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__key",children:"First name"}),Object(h.jsx)("input",{type:"text",className:"input__value ".concat(B?"invalid":""),value:i,onChange:function(e){o(e.target.value)}})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__key",children:"Last name"}),Object(h.jsx)("input",{type:"text",className:"input__value ".concat(Z?"invalid":""),value:b,onChange:function(e){p(e.target.value)}})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__key",children:"Phone"}),Object(h.jsx)("input",{type:"text",value:f,onChange:function(e){x(e.target.value)},className:"input__value ".concat(I?"invalid":"")})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("label",{className:"input__key",children:"Email"}),Object(h.jsx)("input",{type:"text",value:g,onChange:function(e){N(e.target.value)},className:"input__value ".concat(E?"invalid":"")})]}),Object(h.jsx)("input",{className:"send",type:"submit",value:"SAVE"})]})})}),v=c(60),_=c.n(v),g=c(61),N=c.n(g),y=(c(97),function(e){var t=e.peopleList,c=e.setActive,a=Object(n.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)(!1),j=Object(r.a)(u,2),b=j[0],p=j[1],d=Object(l.g)().personID,O=Object(l.f)();Object(n.useEffect)((function(){o(t)}),[t]),Object(n.useEffect)((function(){c(parseInt(d)),p((function(e){return!e}))}),[d,c]);return Object(h.jsxs)("section",{className:"details-container",children:[i[d]?Object(h.jsxs)("article",{className:"details",children:[Object(h.jsx)("picture",{children:Object(h.jsx)("img",{className:"".concat(b?"details__img":"details__img--active"),src:i[d].picture.large,alt:"".concat(i[d].name.first),width:"128px",height:"128px"})}),Object(h.jsxs)("div",{className:"details__names",children:[Object(h.jsx)("h2",{className:"details__names__header",children:"Name"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"details__name__content",children:i[d].name.title})," ",Object(h.jsx)("span",{className:"details__name__content",children:i[d].name.first})," ",Object(h.jsx)("span",{className:"details__name__content",children:i[d].name.last})]})]}),Object(h.jsxs)("div",{className:"details__contact",children:[Object(h.jsx)("h2",{className:"details__contact__header",children:"Contact"}),Object(h.jsxs)("div",{className:"details__contact__phone",children:[Object(h.jsx)(_.a,{className:"".concat(b?"details__contact__phone__icon":"details__contact__phone__icon--active")}),Object(h.jsx)("a",{href:"tel:"+i[d].phone,children:i[d].phone})]}),Object(h.jsxs)("div",{className:"details__contact__mail",children:[Object(h.jsx)(N.a,{className:"".concat(b?"details__contact__mail__icon":"details__contact__mail__icon--active")}),Object(h.jsx)("a",{href:"mailto:"+i[d].email,children:i[d].email})]})]})]}):null,Object(h.jsx)("button",{className:"edit",onClick:function(){var e;e=d,O.push("/edit/".concat(e))},children:"edit"})]})}),S=(c(99),c(117));var C=function(){var e=function(){var e=Object(n.useState)({x:null,y:null}),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(S.a)(c,1),i=Object(r.a)(s,1)[0];return Object(n.useEffect)((function(){var e=function(e){var t=e.clientX,c=e.clientY;a({x:t,y:c})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]),i}(),t=e.x,c=e.y;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{style:{left:"".concat(t,"px"),top:"".concat(c,"px")},className:"outline"}),Object(h.jsx)("div",{className:"cursor",style:{left:"".concat(t,"px"),top:"".concat(c,"px")}})]})},w=c(62);var k=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(r.a)(s,2),u=i[0],j=i[1];return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(C,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(w.a,{}),Object(h.jsx)(f,{setPeopleList:a,peopleList:c,active:u}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/edit/:personID",children:Object(h.jsx)(x,{peopleList:c,setPeopleList:a})}),Object(h.jsx)(l.a,{exact:!0,path:"/details/:personID",children:Object(h.jsx)(y,{peopleList:c,setActive:j})})]})]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,118)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),L()},62:function(e,t,c){"use strict";(function(e){var n=c(40),a=c(4),s=c(41),i=c(1),r=(c(102),c(2)),o=function(e){var t=e.color,c=e.d,o=function(e){var t=e.toggle,c=Object(i.useState)(null),n=Object(a.a)(c,2),r=n[0],o=n[1];return{style:Object(s.useSpring)({strokeDashoffset:t?0:r,strokeDasharray:r,delay:300,config:{friction:800}}),ref:function(e){e&&o(e.getTotalLength())}}}({toggle:e.toggle});return Object(r.jsx)(s.animated.path,Object(n.a)(Object(n.a)({},o),{},{stroke:t,strokeWidth:"4",d:c}))};t.a=function(){var t=Object(i.useState)(!1),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(i.useEffect)((function(){e((function(){s(!0)}))}),[]),Object(r.jsxs)("section",{className:"header",children:[Object(r.jsx)("h1",{className:"header__title",children:"List of people"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"54",height:"54",fill:"none",viewBox:"0 0 505 505",children:Object(r.jsx)(o,{toggle:n,d:"M437.1,233.45c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7c-31.9,0-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2c-12.7,4.4-24.3,11.2-34.1,20c-13.5-11.5-29.4-20.3-46.8-25.5c21.1-12.8,35.3-36.1,35.3-62.6 c0-40.4-32.7-73.1-73.1-73.1c-40.4,0-73.1,32.8-73.1,73.1c0,26.5,14.1,49.8,35.3,62.6c-17.2,5.2-32.9,13.9-46.3,25.2 c-9.8-8.6-21.2-15.3-33.7-19.6c14.8-10.4,24.6-27.7,24.6-47.2c0-31.9-25.8-57.7-57.7-57.7s-57.7,25.8-57.7,57.7 c0,19.5,9.7,36.8,24.6,47.2C28.5,247.25,0,284.95,0,329.25v6.6c0,0.2,0.2,0.4,0.4,0.4h122.3c-0.7,5.5-1.1,11.2-1.1,16.9v6.8 c0,29.4,23.8,53.2,53.2,53.2h155c29.4,0,53.2-23.8,53.2-53.2v-6.8c0-5.7-0.4-11.4-1.1-16.9H505c0.2,0,0.4-0.2,0.4-0.4v-6.6 C505.2,284.85,476.8,247.15,437.1,233.45z M362.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7 c0,22.7-18.3,41.2-40.9,41.7c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C380.5,227.45,362.3,208.95,362.3,186.15z M194.9,165.35 c0-31.5,25.6-57.1,57.1-57.1s57.1,25.6,57.1,57.1c0,30.4-23.9,55.3-53.8,57c-1.1,0-2.2,0-3.3,0c-1.1,0-2.2,0-3.3,0 C218.8,220.65,194.9,195.75,194.9,165.35z M59.3,186.15c0-23,18.7-41.7,41.7-41.7s41.7,18.7,41.7,41.7c0,22.7-18.3,41.2-40.9,41.7 c-0.3,0-0.5,0-0.8,0s-0.5,0-0.8,0C77.6,227.45,59.3,208.95,59.3,186.15z M125.5,320.15H16.2c4.5-42.6,40.5-76,84.2-76.3 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c20.8,0.1,39.8,7.8,54.5,20.3C141.7,279.75,131,298.95,125.5,320.15z M366.8,359.95 c0,20.5-16.7,37.2-37.2,37.2h-155c-20.5,0-37.2-16.7-37.2-37.2v-6.8c0-62.1,49.6-112.9,111.3-114.7c1.1,0.1,2.3,0.1,3.4,0.1 s2.3,0,3.4-0.1c61.7,1.8,111.3,52.6,111.3,114.7V359.95z M378.7,320.15c-5.5-21.1-16-40-30.3-55.6c14.8-12.8,34-20.5,55-20.7 c0.2,0,0.4,0,0.6,0s0.4,0,0.6,0c43.7,0.3,79.7,33.7,84.2,76.3H378.7z",color:"black",stroke:"black"})})]})}}).call(this,c(100).setImmediate)},68:function(e,t,c){},87:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.ccdc7d1d.chunk.js.map