(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),r=n(8),o=n(3),i=n(1),s=n(4),u=n.n(s),l="/api/persons",d=function(){return u.a.get(l).then((function(e){return e.data}))},j=function(e){return u.a.post(l,e).then((function(e){return e.data}))},b=function(e,t){return u.a.put("".concat(l,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return u.a.delete("".concat(l,"/").concat(e))},f=n(0),m=function(e){var t=e.newName,n=e.newNumber,c=e.handleNameChange,a=e.handleNumberChange,r=e.handleAdd;return Object(f.jsx)("form",{onSubmit:r,children:Object(f.jsx)("table",{style:{textAlign:"left"},children:Object(f.jsxs)("tbody",{children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"name:"}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"text",onChange:c,value:t})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"number:"}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"tel",onChange:a,value:n})})]}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})})]})})})},O=function(e){var t=e.persons,n=e.handleDelete;return Object(f.jsx)("table",{children:Object(f.jsx)("tbody",{children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.name}),Object(f.jsx)("td",{children:e.number}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{onClick:function(){var t,c;t=e.id,c=e.name,window.confirm("Delete ".concat(c,"?"))&&n(t)},children:"delete"})})]},e.id)}))})})},x=function(e){var t=e.searchParam,n=e.handleSearch;return Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"filter shown with"}),Object(f.jsx)("input",{type:"text",onChange:n,value:t})]})},p=function(e){var t=e.message,n=e.messageClass;return null===t?null:Object(f.jsx)("div",{className:n,children:t})},g=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),s=Object(o.a)(a,2),u=s[0],l=s[1],g=Object(i.useState)(""),v=Object(o.a)(g,2),w=v[0],C=v[1],y=Object(i.useState)(""),N=Object(o.a)(y,2),S=N[0],k=N[1],L=Object(i.useState)(null),A=Object(o.a)(L,2),D=A[0],P=A[1],T=Object(i.useState)(null),E=Object(o.a)(T,2),I=E[0],J=E[1],B=n.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}));Object(i.useEffect)((function(){d().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]);var U=function(e){if(window.confirm("".concat(e," is already added to phonebook, replace old number with a new one?"))){var t=n.find((function(t){return t.name.toLowerCase()===e.trim().toLowerCase()})),a=Object(r.a)(Object(r.a)({},t),{},{number:w});b(t.id,a).then((function(e){c(n.map((function(n){return n.id!==t.id?n:e}))),P("Updated ".concat(t.name," phone number to ").concat(w)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){console.log(e),J("Information of ".concat(t.name," has already been removed from server")),setTimeout((function(){J(null)}),5e3)}))}};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{message:D,messageClass:"notification"}),Object(f.jsx)(p,{message:I,messageClass:"error"}),Object(f.jsx)(x,{searchParam:S,handleSearch:function(e){k(e.target.value)}}),Object(f.jsx)("h3",{children:"Add a new"}),Object(f.jsx)(m,{newName:u,newNumber:w,handleNameChange:function(e){l(e.target.value)},handleNumberChange:function(e){C(e.target.value)},handleAdd:function(e){e.preventDefault();var t={name:u,number:w};n.some((function(e){return e.name.toLowerCase()===u.trim().toLowerCase()}))?U(u):j(t).then((function(e){c(n.concat(e)),P("Added ".concat(u)),setTimeout((function(){P(null)}),5e3)})).catch((function(e){console.log(e)})),l(""),C("")}}),Object(f.jsx)("h3",{children:"Numbers"}),Object(f.jsx)(O,{persons:S.length>0?B:n,handleDelete:function(e){h(e).then(c(n.filter((function(t){return t.id!==e})))).catch((function(e){console.error(e)}))}})]})};n(41);a.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e1111640.chunk.js.map