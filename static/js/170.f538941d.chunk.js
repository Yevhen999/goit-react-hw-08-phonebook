"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{1170:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var a=t(2791),r=t(9434),s=t(4270),c=t(4558),i="Contacts_labelWrapper__5tPoq",l="Contacts_formIcon__SJJLu",o="Contacts_formLabel__an3Hi",m="Contacts_formInput__lNcrb",u="Contacts_formInputName__gjf5l",d="Contacts_btnSubmit__N3Qnq",x="Contacts_btnDelete__j5p-J",h="Contacts_contactItem__qm4r1",f="Contacts_contactName__xJ+2p",j=t(184),p=function(e){var n=e.id,t=e.name,a=e.number,s=(0,r.I0)();return(0,j.jsx)("li",{className:h,children:(0,j.jsxs)("p",{className:f,children:["\ud83d\udcde",t,": ",a,(0,j.jsx)("button",{className:x,onClick:function(){s((0,c.GK)(n))},children:"Delete"})]})})},_=function(e){var n=e.items;return(0,j.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,j.jsx)(p,{id:n,name:t,number:a},n)}))})},b=t(5984),v=t(8268),C=(0,b.x0)(5),N=function(e){var n=e.filter,t=(0,r.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("label",{style:{marginRight:"10px"},htmlFor:C,children:"Find contacts by name"}),(0,j.jsx)("input",{type:"text",placeholder:"\ud83d\udd0d",id:C,value:n,onChange:function(e){return t((0,v.M)(e.target.value))}})]})},g=t(6916),y=function(e){return e.contacts.contacts},F=function(e){return e.filter.filter},q=function(e){return e.contacts.isLoading},w=(0,g.P1)([y,F],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),I=t(7762),k=t(5705),J=t(8014),L=t(8617),A=t(2797),Z=A.Ry().shape({name:A.Z_().min(2,"Too short").required("\u274c"),number:A.Z_().length(9,"Format: xxx-xx-xx").required("\u274c")}),z=function(){var e=(0,r.I0)(),n=(0,r.v9)(y),t=(0,b.x0)(5),a=(0,b.x0)(5);return(0,j.jsx)(k.J9,{initialValues:{name:"",number:""},onSubmit:function(t,a){var r,s=a.resetForm,i=(0,I.Z)(n);try{for(i.s();!(r=i.n()).done;){if(r.value.name.toLowerCase()===t.name.toLowerCase())return void alert("".concat(t.name," is already in contacts"))}}catch(l){i.e(l)}finally{i.f()}e((0,c.uK)(t)),s()},validationSchema:Z,children:(0,j.jsxs)(k.l0,{children:[(0,j.jsxs)("div",{className:i,children:[(0,j.jsx)(L.mhe,{className:l}),(0,j.jsx)("label",{className:o,htmlFor:t,children:"Name"})]}),(0,j.jsx)(k.gN,{className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:t,placeholder:"John Doe"}),(0,j.jsx)(k.Bc,{name:"name"}),(0,j.jsxs)("div",{className:i,children:[(0,j.jsx)(J.Cvl,{className:l}),(0,j.jsx)("label",{className:o,htmlFor:a,children:"Number"})]}),(0,j.jsx)(k.gN,{className:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:a,placeholder:"xxx-xx-xx"}),(0,j.jsx)(k.Bc,{name:"number"}),(0,j.jsxs)("button",{className:d,type:"submit",children:[(0,j.jsx)(L.VcF,{size:11}),"Add contact"]})]})})},B=function(){var e=(0,r.I0)(),n=(0,r.v9)(q);(0,a.useEffect)((function(){e((0,c.yF)())}),[e]);var t=(0,r.v9)(y),i=(0,r.v9)(F),l=(0,r.v9)(w);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.q,{children:(0,j.jsx)("title",{children:"Your contacts"})}),(0,j.jsx)("div",{children:n&&"Request in progress..."}),(0,j.jsx)(z,{}),(0,j.jsx)("h1",{style:{marginBottom:"10px"},children:"\ud83d\udcc3Contacts"}),t.length>0?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{filter:i}),(0,j.jsx)(_,{items:l})]}):(0,j.jsx)("p",{children:"There are no contacts"})]})}}}]);
//# sourceMappingURL=170.f538941d.chunk.js.map