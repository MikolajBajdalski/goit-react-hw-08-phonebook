"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[923],{923:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(791),a=t(420),s=t(87),i=t(689),u=t(5),l=t(439),c={form:"ContactForm_form__dhl+T"},o=t(184);var d=function(){var e=(0,a.I0)(),n=(0,r.useState)(""),t=(0,l.Z)(n,2),s=t[0],i=t[1],d=(0,r.useState)(""),m=(0,l.Z)(d,2),h=m[0],f=m[1],p=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?i(r):"number"===t&&f(r)};return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e((0,u.uK)({name:s,number:h})),i(""),f("")},className:c.form,children:[(0,o.jsxs)("label",{className:c.label,children:["Name",(0,o.jsx)("input",{type:"text",name:"name",value:s,onChange:p,className:c.input,required:!0})]}),(0,o.jsxs)("label",{className:c.label,children:["Number",(0,o.jsx)("input",{type:"tel",name:"number",value:h,onChange:p,className:c.input,required:!0})]}),(0,o.jsx)("button",{type:"submit",className:c.button,children:"Add contact"})]})},m="ContactListItem_listItem__upGA2",h=function(e){var n=e.contact,t=(0,a.I0)();return(0,o.jsxs)("li",{className:m,children:[n.name,": ",n.number,(0,o.jsx)("button",{onClick:function(){t((0,u.GK)(n.id))},children:"Delete"})]})},f=function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.contacts.contacts})),t=(0,a.v9)((function(e){return e.contacts.filter})),r=t?n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n;return(0,o.jsx)("ul",{children:r.map((function(n){return(0,o.jsx)(h,{contact:n,onDeleteContact:function(){return t=n.id,void e((0,u.GK)(t));var t}},n.id)}))})},p={filter:"Filter_filter__vxThR"},x=(0,t(661).oM)({name:"filter",initialState:"",reducers:{setFilter:function(e,n){return n.payload}}}),j=x.actions.setFilter,v=(x.reducer,function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.filter}));return(0,o.jsxs)("div",{className:p.filter,children:[(0,o.jsx)("p",{className:p.test,children:"Find contacts by name"}),(0,o.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(n){e(j(n.target.value))},className:p.input})]})}),b=t(861),g=t(942),w=t(413),C=t(757),y=t.n(C),N=t(850),k=function(){var e=(0,r.useState)({name:"",email:"",password:""}),n=(0,l.Z)(e,2),t=n[0],s=n[1],u=(0,a.I0)(),c=(0,i.s0)(),d=(0,a.v9)((function(e){return e.auth})),m=d.status,h=d.error,f=function(e){var n=e.target,r=n.name,a=n.value;s((0,w.Z)((0,w.Z)({},t),{},(0,g.Z)({},r,a)))},p=function(){var e=(0,b.Z)(y().mark((function e(n){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),u((0,N.z2)(t)).unwrap().then((function(){c("/contacts")})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Register"}),"failed"===m&&(0,o.jsx)("p",{className:"error",children:h}),(0,o.jsxs)("form",{onSubmit:p,children:[(0,o.jsxs)("label",{children:["Name",(0,o.jsx)("input",{type:"text",name:"name",value:t.name,onChange:f,required:!0})]}),(0,o.jsxs)("label",{children:["Email",(0,o.jsx)("input",{type:"email",name:"email",value:t.email,onChange:f,required:!0})]}),(0,o.jsxs)("label",{children:["Password",(0,o.jsx)("input",{type:"password",name:"password",value:t.password,onChange:f,required:!0})]}),(0,o.jsx)("button",{type:"submit",disabled:"loading"===m,children:"loading"===m?"Registering...":"Register"})]})]})},Z=function(){var e=(0,r.useState)({email:"",password:""}),n=(0,l.Z)(e,2),t=n[0],u=n[1],c=(0,a.I0)(),d=(0,i.s0)(),m=(0,a.v9)((function(e){return e.auth})),h=m.status,f=m.error,p=function(e){var n=e.target,r=n.name,a=n.value;u((0,w.Z)((0,w.Z)({},t),{},(0,g.Z)({},r,a)))},x=function(){var e=(0,b.Z)(y().mark((function e(n){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),c((0,N.x4)(t)).unwrap().then((function(){d("/contacts")})).catch((function(e){}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Login"}),"failed"===h&&(0,o.jsx)("p",{className:"error",children:f}),(0,o.jsxs)("form",{onSubmit:x,children:[(0,o.jsxs)("label",{children:["Email",(0,o.jsx)("input",{type:"email",name:"email",value:t.email,onChange:p,required:!0})]}),(0,o.jsxs)("label",{children:["Password",(0,o.jsx)("input",{type:"password",name:"password",value:t.password,onChange:p,required:!0})]}),(0,o.jsx)("button",{type:"submit",disabled:"loading"===h,children:"loading"===h?"Logging in...":"Login"})]}),(0,o.jsxs)("p",{children:["Nie masz konta?",(0,o.jsx)(s.rU,{to:"/register",children:" Zarejestruj si\u0119!"})]})]})},_=function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){var n;return null===(n=e.auth.user)||void 0===n?void 0:n.email})),t=(0,i.s0)();return(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)("button",{onClick:function(){e((0,N.kS)()),localStorage.removeItem("token"),t("/login")},children:"Logout"})]})};var I=function(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,o.jsx)(s.VK,{children:(0,o.jsxs)(i.Z5,{children:[(0,o.jsx)(i.AW,{path:"/",element:(0,o.jsx)(Z,{})}),(0,o.jsx)(i.AW,{path:"/login",element:(0,o.jsx)(Z,{})}),(0,o.jsx)(i.AW,{path:"/register",element:(0,o.jsx)(k,{})}),(0,o.jsx)(i.AW,{path:"/contacts",element:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(_,{}),(0,o.jsx)("h1",{children:"Phonebook"}),(0,o.jsx)(d,{}),(0,o.jsx)(f,{}),(0,o.jsx)(v,{})]})})]})})}}}]);
//# sourceMappingURL=923.57ff465c.chunk.js.map