(this["webpackJsonp211-adv-react-intro"]=this["webpackJsonp211-adv-react-intro"]||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(14),o=n.n(i),l=n(6),s=n(5),a=n(2),d="/images/file_extensions/",j=(n(20),n(0)),u=function(e){var t=e.id,n=e.remoteUrl,c=(e.localUrl,e.name),r=e.deleted,i=e.onDelete,o=e.onSoftDelete,l=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(".");switch(e[e.length-1]){case"png":case"jpg":case"jpeg":return"".concat(d,"image.png");case"pdf":case"txt":case"html":return"".concat(d,"pdf.png");default:return"".concat(d,"default.png")}}(c);return Object(j.jsxs)("div",{className:"DownloadItem ".concat(r?"DownloadItem--deleted":""),children:[Object(j.jsx)("img",{src:l,alt:""}),Object(j.jsx)(s.b,{to:"/home/".concat(t),children:Object(j.jsxs)("h1",{children:[c||"Untitled"," ",r&&"Deleted"]})}),Object(j.jsx)("p",{children:n}),!r&&Object(j.jsx)("button",{onClick:o,children:"Show in folder"}),Object(j.jsx)("button",{onClick:i,children:"Delete "})]})},h=function(e){var t=e.onNewItem,n=Object(a.f)(),c=r.a.useState(""),i=Object(l.a)(c,2),o=i[0],s=i[1],d=r.a.useState(""),u=Object(l.a)(d,2),h=u[0],b=u[1],f=r.a.useState(!1),x=Object(l.a)(f,2),m=x[0],O=x[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:o,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("input",{value:h,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("input",{checked:m,onChange:function(e){O(e.target.checked)},type:"checkbox"}),Object(j.jsx)("button",{onClick:function(){t(o,h,m),s(""),b(""),O(!1),n.push("/list")},children:"new element"})]})},b=function(e){var t=e.list,n=Object(a.g)().id,c=t.find((function(e){return e.id===parseInt(n)}));return c?Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Name: ",null===c||void 0===c?void 0:c.filename]}),Object(j.jsxs)("p",{children:["LocalUrl: ",null===c||void 0===c?void 0:c.localUrl]}),Object(j.jsxs)("p",{children:["Date: ",null===c||void 0===c?void 0:c.date]})]}):Object(j.jsx)(a.a,{to:"/404",push:!1})},f=function(e){var t=e.list;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Home"}),Object(j.jsx)(a.b,{path:"/home",exact:!0,render:function(){return Object(j.jsx)("p",{children:"Select a sub page"})}}),Object(j.jsx)(s.b,{to:"/home/one",children:"one"}),Object(j.jsx)(s.b,{to:"/home/two",children:"two"}),Object(j.jsx)(s.b,{to:"/home/three",children:"three"}),Object(j.jsx)(a.b,{path:"/home/one",render:function(){return Object(j.jsx)("h2",{children:"one"})}}),Object(j.jsx)(a.b,{path:"/home/two",render:function(){return Object(j.jsx)("h2",{children:"two"})}}),Object(j.jsx)(a.b,{path:"/home/three",render:function(){return Object(j.jsx)("h2",{children:"three"})}}),Object(j.jsx)(a.b,{path:"/home/:id",render:function(){return Object(j.jsx)(b,{list:t})}})]})},x=[{id:0,remoteUrl:"https://files.readme.io/f37829f-widget-mfa-numeric.gif",localUrl:"C:/algo",date:3456789097},{id:1,filename:"lorem ipsum.txt",remoteUrl:"https://files.readme.io/f37829f-widget-mfa-numeric.gif",localUrl:"C:/Users/user/Downloads/FigmaSetup.exe",deleted:!0,date:3456789097},{id:2,filename:"lorem ipsum.jpg",remoteUrl:"https://files.readme.io/f37829f-widget-mfa-numeric.gif",localUrl:"C:/Users/user/Downloads/FigmaSetup.exe",date:3456789097}],m=function(){var e=r.a.useState(x),t=Object(l.a)(e,2),n=t[0],c=t[1],i=function(e,t,r){var i=n.slice(),o={id:i.length,filename:e,remoteUrl:t,localUrl:"C;skfaksdas",deleted:r,date:Date.now()};i.push(o),c(i)};return Object(j.jsx)("main",{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.b,{to:"/home",children:"ir al home"}),Object(j.jsx)(s.b,{to:"/form",children:"ir al form"}),Object(j.jsx)(s.b,{to:"/list",children:"ir al list"}),Object(j.jsx)(a.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)("h1",{children:"Root"})}}),Object(j.jsx)(a.b,{path:"/one",render:function(){return Object(j.jsx)("h1",{children:"One"})}}),Object(j.jsx)(a.b,{path:"/404",render:function(){return Object(j.jsx)("h1",{children:"Est\xe1s re perdido"})}}),Object(j.jsx)(a.b,{path:"/home",render:function(){return Object(j.jsx)(f,{list:n})}}),Object(j.jsx)(a.b,{path:"/form",render:function(){return Object(j.jsx)(h,{onNewItem:i})}}),Object(j.jsx)(a.b,{path:"/list",render:function(){return Object(j.jsx)("div",{children:n.map((function(e){var t=e.filename,r=e.remoteUrl,i=e.localUrl,o=e.deleted,l=e.id;return Object(j.jsx)(u,{id:l,name:t,remoteUrl:r,localUrl:i,deleted:o,onDelete:function(){!function(e){var t=n.slice(),r=t.findIndex((function(t){return t.id===e}));t.splice(r,1),c(t),console.log("delete",e)}(l)},onSoftDelete:function(){!function(e){var t=n.slice(),r=t.findIndex((function(t){return t.id===e}));t[r].deleted=!0,c(t),console.log("soft delete",e)}(l)}},l)}))})}}),Object(j.jsx)("p",{children:n.map((function(e){return e.filename})).join(" - ")})]})})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.690ba8cd.chunk.js.map