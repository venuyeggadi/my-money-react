(this["webpackJsonpmy-money-react"]=this["webpackJsonpmy-money-react"]||[]).push([[0],{25:function(e,t,n){e.exports={navbar:"Navbar_navbar__31-FB",title:"Navbar_title__2CGsW"}},28:function(e,t,n){e.exports={"login-form":"Login_login-form__1NBYb"}},29:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__3B7tC"}},36:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(27),s=n.n(a),i=(n(36),n(19)),u=n(14),o=n(2),j=function(){return Object(o.jsx)("div",{children:"Home"})},l=n(5),b=n(18),O=n(13),d=n.n(O),p=n(22);n(51),n(41);p.a.initializeApp({apiKey:"AIzaSyAvjJfN3nWHkHkvw9uKRdt22tIEf78TA8s",authDomain:"mymoney-38e57.firebaseapp.com",projectId:"mymoney-38e57",storageBucket:"mymoney-38e57.appspot.com",messagingSenderId:"156711833939",appId:"1:156711833939:web:3cd61b6b8c5b12c4da91a6"});p.a.firestore();var h=p.a.auth(),x=n(17),f=Object(r.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(x.a)(Object(x.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(x.a)(Object(x.a)({},e),{},{user:null});default:return e}},g=function(e){var t=e.children,n=Object(r.useReducer)(m,{user:null}),c=Object(l.a)(n,2),a=c[0],s=c[1];return console.log(a),Object(o.jsx)(f.Provider,{value:Object(x.a)(Object(x.a)({},a),{},{dispatch:s}),children:t})},v=function(){var e=Object(r.useContext)(f);if(!e)throw new Error("useAuthContext must used inside an AuthContextProvider");return e},y=n(28),S=n.n(y),w=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],j=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],o=v().dispatch,j=Object(r.useState)(!1),O=Object(l.a)(j,2),p=O[0],x=O[1],f=function(){var e=Object(b.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),u(!0),e.prev=2,e.next=5,h.signInWithEmailAndPassword(t,n);case 5:r=e.sent,o({type:"LOGIN",payload:r.user}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),p||c(e.t0.message);case 12:p||u(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return function(){return x(!0)}}),[]),{login:f,error:n,isPending:i}}(),O=j.login,p=j.error,x=j.isPending;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O(n,i)},className:S.a["login-form"],children:[Object(o.jsx)("h2",{children:"Login"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",onChange:function(e){return c(e.target.value)},value:n})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Password:"}),Object(o.jsx)("input",{type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),!x&&Object(o.jsx)("button",{className:"btn",children:"Login"}),x&&Object(o.jsx)("button",{className:"btn",disabled:!0,children:"Loading"}),p&&Object(o.jsx)("p",{className:"error",children:p})]})},N=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],o=v().dispatch,j=Object(r.useState)(!1),O=Object(l.a)(j,2),p=O[0],x=O[1],f=function(){var e=Object(b.a)(d.a.mark((function e(t,n,r){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),u(!0),e.prev=2,e.next=5,h.createUserWithEmailAndPassword(t,n);case 5:if(a=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return e.next=10,a.user.updateProfile({displayName:r});case 10:o({type:"LOGIN",payload:a.user}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),p||c(e.t0.message);case 16:p||u(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return function(){return x(!0)}}),[]),{signup:f,error:n,isPending:i}},k=n(29),C=n.n(k),L=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),O=b[0],d=b[1],p=N(),h=p.signup,x=p.error,f=p.isPending;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(n,i,O)},className:C.a["signup-form"],children:[Object(o.jsx)("h2",{children:"Signup"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Email:"}),Object(o.jsx)("input",{type:"email",onChange:function(e){return c(e.target.value)},value:n,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Password:"}),Object(o.jsx)("input",{type:"password",onChange:function(e){return u(e.target.value)},value:i,required:!0})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Display Name:"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},value:O,required:!0})]}),!f&&Object(o.jsx)("button",{className:"btn",children:"Signup"}),f&&Object(o.jsx)("button",{className:"btn",disabled:!0,children:"Loading"}),x&&Object(o.jsx)("p",{className:"error",children:x})]})},P=n(25),_=n.n(P),E=function(){var e=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(l.a)(a,2),i=s[0],u=s[1],o=v().dispatch,j=Object(r.useState)(!1),O=Object(l.a)(j,2),p=O[0],x=O[1],f=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(null),u(!0),e.prev=2,e.next=5,h.signOut();case 5:o({type:"LOGOUT"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p||c(e.t0.message);case 11:p||u(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return function(){return x(!0)}}),[]),{logout:f,error:n,isPending:i}}(),t=e.logout;return Object(o.jsx)("nav",{className:_.a.navbar,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:_.a.title,children:Object(o.jsx)(i.b,{to:"/",children:"myMoney"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/login",children:"Login"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/signup",children:"Signup"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"btn",onClick:t,children:"Logout"})})]})})};var I=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(i.a,{basename:"/my-money-react",children:[Object(o.jsx)(E,{}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{})}),Object(o.jsx)(u.a,{path:"/login",children:Object(o.jsx)(w,{})}),Object(o.jsx)(u.a,{path:"/signup",children:Object(o.jsx)(L,{})})]})]})})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{children:Object(o.jsx)(I,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.563a8f96.chunk.js.map