"use strict";(self.webpackChunkorder_frontend=self.webpackChunkorder_frontend||[]).push([[426],{9426:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var l=a(5043),n=a(4434),o=a(2019),r=a(6953),s=a(3530),i=a(3072),d=a(2148),c=a(6825),u=a(7261),p=a(579);const m=e=>{const{title:t,onBack:a,rightContent:l}=e;return(0,p.jsxs)(u.st,{w:"100%",h:"56px",m:"0",p:"10px 20px",bg:"#6a8099",children:[(0,p.jsxs)(u.st,{m:"auto 0",gap:"10px",children:[(0,p.jsx)(c.Z,{size:24,color:"#fff",onClick:a}),(0,p.jsx)(u.D7,{fs:"18px",lh:"24px",fw:"600",ff:"Inter",c:"#fff",mb:"auto",children:t})]}),l]})},h={PENDING:"orange",PACKED:"purple",SENT:"blue",DONE:"green",CANCELLED:"red"};var x=a(9748),y=a(5672),g=a(6603),f=a(6051),v=a(5720),b=a(4015),j=a(4923),C=a(6177),A=a(446),w=a.n(A);const S=w()().valueOf(),I=e=>{const{open:t,onClose:a,allContacts:r,allItems:i,allAgents:c,fetchOrders:m}=e,[h,A]=(0,l.useState)(!1),[I,$]=(0,l.useState)(0),[k]=x.A.useForm(),E=()=>{const e=k.getFieldValue("lineItems");let t=0;for(const a of e){const{quantity:e,rate:l}=a;t+=l&&e?l*e:0}$(t)};return(0,p.jsxs)(y.A,{title:"Add Sales",footer:null,loading:h,open:t,onCancel:a,styles:{content:{padding:"10px"}},style:{top:"50px"},children:[(0,p.jsxs)(u.jx,{pos:"absolute",top:"10px",right:"50px",c:"#00000088",style:{fontWeight:"600",fontSize:"16px"},children:["Total : \u20b9 ",(0,d.ob)(I)]}),(0,p.jsxs)(x.A,{form:k,labelCol:{xs:{span:10},sm:{span:8}},wrapperCol:{xs:{span:14},sm:{span:16}},initialValues:{saleType:"local",date:S},layout:"horizontal",size:"middle",style:{maxWidth:600,margin:"20px 0 10px"},onFinish:async e=>{var t;A(!0);const l={saleOrder:{contactId:e.contactId,agentId:e.agentId,saleType:e.saleType},lineItems:null===(t=e.lineItems)||void 0===t?void 0:t.map((e=>({itemId:e.itemId,type:"SALE_ORDER",quantity:e.quantity,unit:e.unit,rate:e.rate,itemTotal:e.quantity*e.rate}))),containers:e.containers};try{await(e=>{const t=`${d.H$}/saleOrder/add-sale-order`;return(0,d.Em)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})})(l),o.Ay.success("sale order added successfully"),m(),a()}catch(n){(0,d.ok)(n)}finally{A(!1)}},children:[(0,p.jsx)(x.A.Item,{name:"date",wrapperCol:{span:24},style:{textAlign:"right"},rules:[{required:!0}],getValueProps:e=>({value:e&&w()(Number(e))}),normalize:e=>e&&`${w()(e).valueOf()}`,children:(0,p.jsx)(s.A,{})}),(0,p.jsx)(x.A.Item,{name:"contactId",wrapperCol:{span:24},rules:[{required:!0,message:"Please select a customer!"}],children:(0,p.jsx)(n.A,{showSearch:!0,placeholder:"Select Customer",optionFilterProp:"label",filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:r})}),(0,p.jsx)(x.A.Item,{name:"saleType",label:"sale type",rules:[{required:!0,message:"Please pick an item!"}],children:(0,p.jsxs)(g.Ay.Group,{children:[(0,p.jsx)(g.Ay.Button,{value:"local",children:"Local"}),(0,p.jsx)(g.Ay.Button,{value:"interState",children:"InterState"})]})}),(0,p.jsx)(x.A.Item,{noStyle:!0,shouldUpdate:(e,t)=>e.saleType!==t.saleType,children:e=>{let{getFieldValue:t}=e;return"interState"===t("saleType")?(0,p.jsx)(x.A.Item,{name:"agentId",label:"Agent",children:(0,p.jsx)(n.A,{showSearch:!0,placeholder:"Select Agent",optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:c})}):null}}),(0,p.jsx)(x.A.List,{name:"lineItems",rules:[{validator:async(e,t)=>{if(!t||t.length<1)return Promise.reject(new Error("At least 1 Item"))}}],children:(e,t,a)=>{let{add:l,remove:o}=t,{errors:r}=a;return(0,p.jsxs)(p.Fragment,{children:[e.map((e=>{let{key:t,name:a,...l}=e;return(0,p.jsxs)(f.A,{style:{display:"flex"},align:"baseline",children:[(0,p.jsx)(x.A.Item,{...l,name:[a,"itemId"],wrapperCol:{span:24},rules:[{required:!0,message:"Missing item"}],children:(0,p.jsx)(n.A,{showSearch:!0,placeholder:"items",optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:i,style:{width:"100%"}})}),(0,p.jsx)(x.A.Item,{...l,name:[a,"quantity"],wrapperCol:{span:24},rules:[{required:!0,message:"Missing quantity"}],children:(0,p.jsx)(v.A,{placeholder:"Qtn",type:"number",style:{marginBottom:0},onChange:E})}),(0,p.jsx)(x.A.Item,{...l,name:[a,"unit"],wrapperCol:{span:24},rules:[{required:!0,message:"Missing unit"}],initialValue:"kg",children:(0,p.jsx)(n.A,{placeholder:"units",style:{width:"100%"},children:d.J8.map((e=>(0,p.jsx)(n.A.Option,{value:e,children:e},e)))})}),(0,p.jsx)(x.A.Item,{...l,name:[a,"rate"],wrapperCol:{span:24},children:(0,p.jsx)(v.A,{placeholder:"Rate",prefix:"\u20b9",type:"number",style:{marginBottom:0},onChange:E})}),(0,p.jsx)(j.F,{size:24,color:"#000",style:{marginBottom:"-7px"},onClick:()=>{o(a),E()}})]},t)})),(0,p.jsxs)(x.A.Item,{wrapperCol:{span:24},children:[(0,p.jsx)(b.Ay,{type:"dashed",onClick:()=>l(),block:!0,icon:(0,p.jsx)(C.f,{size:24,color:"#000"}),children:"Add Item"}),(0,p.jsx)(x.A.ErrorList,{errors:r})]})]})}}),(0,p.jsx)(x.A.List,{name:"containers",children:(e,t,a)=>{let{add:l,remove:o}=t,{errors:r}=a;return(0,p.jsxs)(p.Fragment,{children:[e.map((e=>{let{key:t,name:a,...l}=e;return(0,p.jsxs)(f.A,{style:{display:"flex"},align:"baseline",children:[(0,p.jsx)(x.A.Item,{...l,name:[a,"type"],wrapperCol:{span:24},rules:[{required:!0,message:"Missing type"}],children:(0,p.jsx)(n.A,{placeholder:"type",style:{width:"100%"},popupMatchSelectWidth:!1,children:d.vr.map((e=>(0,p.jsx)(n.A.Option,{value:e,children:e},e)))})}),(0,p.jsx)(x.A.Item,{...l,name:[a,"quantity"],wrapperCol:{span:24},rules:[{required:!0,message:"Missing quantity"}],children:(0,p.jsx)(v.A,{placeholder:"Qtn",type:"number",style:{marginBottom:0}})}),(0,p.jsx)(j.F,{size:24,color:"#000",style:{marginBottom:"-7px"},onClick:()=>o(a)})]},t)})),(0,p.jsxs)(x.A.Item,{wrapperCol:{span:24},children:[(0,p.jsx)(b.Ay,{type:"dashed",onClick:()=>l(),block:!0,icon:(0,p.jsx)(C.f,{size:24,color:"#000"}),children:"Add Containers"}),(0,p.jsx)(x.A.ErrorList,{errors:r})]})]})}}),(0,p.jsx)("div",{style:{textAlign:"right"},children:(0,p.jsx)(b.Ay,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})};var $=a(5464);const k=(0,$.Ay)(b.Ay)`
  background: ${e=>e.isActive?e.activeBgc||"":e.bgc||""} !important;
  width: ${e=>e.isActive?e.activeW||"":e.w||""};
  display: ${e=>e.d||""};
  height: ${e=>e.h||""};
  font-size: ${e=>e.fs||"16px"};
  font-weight: ${e=>e.fw||"500"};
  font-family: ${e=>e.ff};
  margin: ${e=>e.m||""};
  margin-right: ${e=>e.mr||""};
  padding: ${e=>e.p||""};
  border: ${e=>e.b||"1px solid rgba(217, 217, 217, 1)"} !important;
  border-radius: ${e=>e.br||"45px"};
  color: ${e=>e.isActive?e.activeC||"rgba(255, 255, 255, 1)":e.c||"rgba(48, 48, 48, 1)"} !important;
  margin-bottom: ${e=>e.mb||""};
  margin-top: ${e=>e.mt||""};
  ${e=>e.bottom&&`bottom: ${e.bottom};`}
  &:focus {
    background: ${e=>e.focusbgc||""} !important;
    border: ${e=>e.b||""} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`,E=(0,$.Ay)(b.Ay)`
  background: ${e=>e.bgc||"#FFF"} !important;
  width: ${e=>e.w||""};
  display: ${e=>e.d||""};
  height: ${e=>e.h||"46px"};
  font-size: ${e=>e.fs||"16px"};
  font-weight: ${e=>e.fw||"500"};
  font-family: ${e=>e.ff};
  margin: ${e=>e.m||""};
  margin-right: ${e=>e.mr||""};
  padding: ${e=>e.p||""};
  border: ${e=>e.b||""} !important;
  border-radius: ${e=>e.br||"10px"};
  color: ${e=>e.c||"#3465FF"} !important;
  margin-bottom: ${e=>e.mb||""};
  margin-top: ${e=>e.mt||""};
  ${e=>e.bottom&&`bottom: ${e.bottom};`}

  &:hover {
    background: ${e=>e.hoverbgc?e.hoverbgc:e.bgc||""} !important;
    border: ${e=>e.b||"0px"} !important;
    color: ${e=>e.c||"#3465FF"} !important;
  }
  &:focus {
    background: ${e=>e.focusbgc||""} !important;
    border: ${e=>e.b||""} !important;
    color: ${e=>e.c||"#3465FF"} !important;
  }
  &:disabled {
    background: grey !important;
    color: #ccc !important;
    cursor: not-allowed !important;
    border: none !important;
  }
`;var D=a(7015),F=a(5986),T=a(2532),N=a(3543);const L=l.createContext(null),q=e=>{let{title:t,editable:a,children:o,dataIndex:r,record:s,allItems:i,itemNameToIdMap:c,handleSave:u,...m}=e;const[h,y]=(0,l.useState)(!1),g=(0,l.useRef)(null),f=(0,l.useContext)(L);(0,l.useEffect)((()=>{var e;h&&(null===(e=g.current)||void 0===e||e.focus())}),[h]);const b=()=>{y(!h),f.setFieldsValue({[r]:s[r]})},j=async()=>{try{const e=await f.validateFields();switch(b(),r){case"itemId":e.itemDetails={...e.itemDetails,name:c.get(e.itemId)};break;case"quantity":case"rate":const{rate:t,quantity:a}=e;e.itemTotal=(t||s.rate)*(a||s.quantity)||0}u({...s,...e})}catch(e){console.log("Save failed:",e)}},C=()=>{switch(r){case"itemId":return(0,p.jsx)(n.A,{showSearch:!0,ref:g,optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:i,onChange:j,onBlur:j});case"unit":return(0,p.jsx)(n.A,{placeholder:"units",style:{width:"100%"},onChange:j,onBlur:j,children:d.J8.map((e=>(0,p.jsx)(n.A.Option,{value:e,children:e},e)))});case"rate":case"quantity":return(0,p.jsx)(v.A,{ref:g,onPressEnter:j,onBlur:j,type:"number"});default:return(0,p.jsx)(v.A,{ref:g,onPressEnter:j,onBlur:j})}};let A=o;return a&&(A=h?(0,p.jsx)(x.A.Item,{style:{margin:0},name:r,rules:[{required:!0,message:`${t} is required.`}],children:C()}):(0,p.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingInlineEnd:24},onClick:b,children:o})),(0,p.jsx)("td",{...m,children:A})},M=e=>{let{title:t,editable:a,children:o,dataIndex:r,record:s,allAgents:i,itemNameToIdMap:c,handleSave:u,...m}=e;const[h,y]=(0,l.useState)(!1),g=(0,l.useRef)(null),f=(0,l.useContext)(L);(0,l.useEffect)((()=>{var e;h&&(null===(e=g.current)||void 0===e||e.focus())}),[h]);const b=()=>{y(!h),f.setFieldsValue({[r]:s[r]})},j=async()=>{try{const e=await f.validateFields();b(),u({...s,...e})}catch(e){console.log("Save failed:",e)}},C=()=>{switch(r){case"type":return(0,p.jsx)(n.A,{showSearch:!0,ref:g,optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:d.vr.map((e=>({label:e,value:e}))),onChange:j,onBlur:j});case"quantity":return(0,p.jsx)(v.A,{ref:g,onPressEnter:j,onBlur:j,type:"number"});default:return(0,p.jsx)(v.A,{ref:g,onPressEnter:j,onBlur:j})}};let A=o;return a&&(A=h?(0,p.jsx)(x.A.Item,{style:{margin:0},name:r,rules:[{required:!0,message:`${t} is required.`}],children:C()}):(0,p.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingInlineEnd:24},onClick:b,children:o})),(0,p.jsx)("td",{...m,children:A})},O=e=>{let{index:t,...a}=e;const[l]=x.A.useForm();return(0,p.jsx)(x.A,{form:l,component:!1,children:(0,p.jsx)(L.Provider,{value:l,children:(0,p.jsx)("tr",{...a})})})},z=e=>{let{index:t,...a}=e;const[l]=x.A.useForm();return(0,p.jsx)(x.A,{form:l,component:!1,children:(0,p.jsx)(L.Provider,{value:l,children:(0,p.jsx)("tr",{...a})})})},P=e=>{const{open:t,onClose:a,saleOrder:i,allContacts:c,allItems:m,allAgents:h,itemNameToIdMap:x}=e,[f,v]=(0,l.useState)(null),[A,S]=(0,l.useState)(null),[I,$]=(0,l.useState)([]),[E,D]=(0,l.useState)([]),[F,T]=(0,l.useState)(!1),[N,L]=(0,l.useState)(1),[P,B]=(0,l.useState)(null),[R,Y]=(0,l.useState)(),W=()=>{const e={id:I.length,itemId:1,itemTotal:0,quantity:0,rate:0,unit:"kg",itemDetails:{name:"broccoli"}},t=[...I,e];$(t),Math.ceil(t.length/10)>1&&L(Math.ceil(t.length/10))},_=e=>{const t=[...I],a=t.findIndex((t=>e.id===t.id)),l=t[a];t.splice(a,1,{...l,...e}),$(t)},V=()=>{const e={id:E.length,type:"whiteBox",quantity:1},t=[...E,e];D(t)},H=e=>{const t=[...E],a=t.findIndex((t=>e.id===t.id)),l=t[a];t.splice(a,1,{...l,...e}),D(t)},Q=[{title:"type",dataIndex:"type",editable:!0,onCell:e=>({record:e,editable:!0,dataIndex:"type",title:"type",handleSave:H})},{title:"Qtn",dataIndex:"quantity",editable:!0,onCell:e=>({record:e,editable:!0,dataIndex:"quantity",title:"Qtn",handleSave:H})},{width:1,render:(e,t,a)=>I.length>=1?(0,p.jsx)(j.F,{size:24,color:"rgb(140,140,140)",onClick:()=>(e=>{const t=E.filter((t=>t.id!==e));D(t)})(t.id)}):null}],G=[...[{title:"Item Name",dataIndex:"itemId",render:e=>(0,p.jsx)(p.Fragment,{children:x.get(e)})},{title:"rate",dataIndex:"rate"},{title:"Qtn",dataIndex:"quantity"},{title:"unit",dataIndex:"unit"}].map((e=>({...e,editable:!0,onCell:t=>({record:t,editable:!0,dataIndex:e.dataIndex,title:e.title,allItems:m,itemNameToIdMap:x,handleSave:_})}))),{width:1,render:(e,t)=>I.length>=1?(0,p.jsx)(j.F,{size:24,color:"rgb(140,140,140)",onClick:()=>(e=>{if(I.length<=1)return void o.Ay.error("At least one item should be present");const t=I.filter((t=>t.id!==e));$(t)})(t.id)}):null}];return(0,l.useEffect)((()=>{const{date:e,items:t,saleType:a,contactId:l,agentId:n,containers:o}=i||{};$(t||[]),D(o||[]),B(w()(e)),Y(a),v(l),S(n)}),[i]),(0,p.jsx)(y.A,{title:"Edit Sale",footer:null,loading:F,open:t,onCancel:a,styles:{content:{padding:"10px"}},style:{maxWidth:"fit-content",top:"50px"},width:"fit-content",children:(0,p.jsxs)(u.u1,{gap:"15px",children:[(0,p.jsx)(s.A,{value:P,style:{alignSelf:"end",marginTop:"10px"},onChange:(e,t)=>B(w()(t))}),(0,p.jsx)(n.A,{showSearch:!0,value:f,placeholder:"Select Customers",optionFilterProp:"label",filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:c,style:{width:"100%"},onChange:(e,t)=>v(t)}),(0,p.jsxs)(u.st,{m:"0",children:[(0,p.jsx)(u.D7,{m:"auto 20px auto 0",fs:"14px",ff:"Inter",children:"Sale Type : "}),(0,p.jsx)(g.Ay.Group,{options:[{label:"Local",value:"local"},{label:"InterState",value:"interState"}],value:R,optionType:"button",onChange:e=>Y(e.target.value)})]}),"interState"==R&&(0,p.jsxs)(u.st,{m:"0",children:[(0,p.jsx)(u.D7,{m:"auto 20px auto 0",fs:"14px",ff:"Inter",children:"Agent : "}),(0,p.jsx)(n.A,{showSearch:!0,value:A,placeholder:"Select Agent",optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:h,onChange:(e,t)=>S(t)})]}),(0,p.jsx)(r.A,{bordered:!0,size:"middle",columns:G,dataSource:I,rowClassName:()=>"editable-row",pagination:{position:["none","bottomCenter"],pageSize:10,onChange:e=>(0,d.jD)(e,L),current:N},components:{body:{row:O,cell:q}},footer:()=>(0,p.jsx)(b.Ay,{type:"dashed",onClick:W,block:!0,icon:(0,p.jsx)(C.f,{size:24,color:"rgb(140,140,140)"}),children:"Add Item"}),style:{width:"100%",marginLeft:0}}),(0,p.jsx)(r.A,{bordered:!0,size:"middle",columns:Q,dataSource:E,rowClassName:()=>"editable-row",pagination:!1,components:{body:{row:z,cell:M}},footer:()=>(0,p.jsx)(b.Ay,{type:"dashed",onClick:V,block:!0,icon:(0,p.jsx)(C.f,{size:24,color:"rgb(140,140,140)"}),children:"Add Container"}),style:{width:"100%",marginLeft:0}}),(0,p.jsx)(k,{c:"#fff",w:"80px",h:"42px",type:"primary",onClick:async()=>{if(!i)return void o.Ay.error("Sale order not found");T(!0);const e={};null!==f&&void 0!==f&&f.value&&f.value!=i.contactId&&(e.contactId=f.value),R!=i.saleType&&(e.saleType=R),"interState"==R&&null!==A&&void 0!==A&&A.value&&A.value!=i.agentId?e.agentId=A.value:"local"==R&&null!=i.agentId&&(e.agentId=null),w()(i.date).isSame(P,"day")||(e.date=P.valueOf());try{await((e,t)=>{const a=`${d.H$}/saleOrder/update-sale-order/${e}`;return(0,d.Em)({url:a,method:"post",data:t,headers:{"Content-Type":"application/json"}})})(i.id,{saleOrder:e,lineItems:I,containers:E}),o.Ay.success("sale order updated successfully")}catch(t){(0,d.ok)(t),a()}finally{T(!1)}},style:{alignSelf:"center"},children:"Save"})]})})};var B=a(5458),R=a(6399);const Y=a(1238);var W=a(5543),_=a(3216);const V=[{value:"PENDING",label:(0,p.jsx)(u.D7,{ta:"left",fs:"14px",fw:"600",c:h.PENDING,children:"Pending"})},{value:"PACKED",label:(0,p.jsx)(u.D7,{ta:"left",fs:"14px",fw:"600",c:h.PACKED,children:"Packed"})},{value:"SENT",label:(0,p.jsx)(u.D7,{ta:"left",fs:"14px",fw:"600",c:h.SENT,children:"Sent"})},{value:"DONE",label:(0,p.jsx)(u.D7,{ta:"left",fs:"14px",fw:"600",c:h.DONE,children:"Done"})},{value:"CANCELLED",label:(0,p.jsx)(u.D7,{ta:"left",fs:"14px",fw:"600",c:h.CANCELLED,children:"Cancelled"})}],H=()=>{const e=(0,_.Zp)(),[t,a]=(0,l.useState)([]),[c,x]=(0,l.useState)([]),[y,g]=(0,l.useState)(!1),[f,v]=(0,l.useState)(!1),[b,j]=(0,l.useState)(null),[C,A]=(0,l.useState)([]),[S,$]=(0,l.useState)(new Map),[k,L]=(0,l.useState)([]),[q,M]=(0,l.useState)([]),[O,z]=(0,l.useState)([w()(),w()()]),[H,Q]=(0,l.useState)(!0),[G,K]=(0,l.useState)(null),[J,U]=(0,l.useState)(null),Z=async(e,t,a)=>{try{const t=c.map((t=>t.id===e?{...t,status:a}:t));x(t);await((e,t)=>{const a=`${d.H$}/saleOrder/update-sale-order-status/${e}`;return(0,d.Em)({url:a,method:"post",data:t,headers:{"Content-Type":"application/json"}})})(e,{status:a})}catch(l){(0,d.ok)(l);const a=c.map((a=>a.id===e?{...a,status:t}:a));x(a)}},X=[{title:"Name",dataIndex:"contactName",filteredValue:G&&[G],onFilter:(e,t)=>t.contactId==e}];(0,d.x8)("EDIT_SALE_ORDER")?X.push({title:"Status",dataIndex:"status",filteredValue:J&&[J],onFilter:(e,t)=>t.status==e,render:(e,t)=>(0,p.jsx)(n.A,{value:e,options:V,style:{width:"fit-content"},popupMatchSelectWidth:!1,onClick:e=>e.stopPropagation(),onChange:a=>Z(t.id,e,a)})},{key:"action",render:(e,t)=>(0,p.jsx)(B.I,{size:18,color:"rgba(0, 0, 0, 0.58)",weight:"fill",onClick:e=>{e.stopPropagation(),j(t),v(!0)}}),width:1}):X.push({title:"Status",dataIndex:"status",render:e=>(0,p.jsx)(R.A,{color:h[e],children:e.toLowerCase()})});const ee=[{title:"Item Name",dataIndex:"itemId",render:e=>(0,p.jsx)(p.Fragment,{children:k.find((t=>t.value==e)).label})},{title:"rate",dataIndex:"rate"},{title:"Qtn",dataIndex:"quantity"},{title:"unit",dataIndex:"unit"}],te=()=>{null!==c&&void 0!==c&&c.length?((e,t,a)=>{const l=e=>w()(e).format("YYYY-MMM-DD"),n=e.reduce(((e,t)=>{const a=l(t.date);return e[a]||(e[a]=[]),e[a].push(t),e}),{}),o=Y.utils.book_new();Object.keys(n).forEach((e=>{const t=n[e].flatMap((e=>e.items.map(((t,a)=>({"Contact Name":0===a?e.contactName:"","Sales Order Number":0===a?e.salesOrderNumber:"","Sale Type":0===a?e.saleType:"",Status:0===a?e.status:"","Invoice Status":0===a?e.invoiceStatus:"",Date:0===a?l(e.date):"",Amount:0===a?e.amount:"","Item Name":t.itemDetails.name,Rate:t.rate,Quantity:t.quantity,Unit:t.unit,"Item Total":t.itemTotal}))))),a=Y.utils.json_to_sheet(t);Y.utils.book_append_sheet(o,a,e)})),Y.writeFile(o,`${t}-${a}_sales.xlsx`),console.log("Excel file has been created successfully.")})(c,O[0].format("YYYY/MM/DD"),O[1].format("YYYY/MM/DD")):o.Ay.error("No Sale Order Found!!")},ae=()=>(0,p.jsxs)(u.st,{m:"0",gap:"20px",children:[(0,p.jsx)(E,{h:"36px",onClick:()=>g(!0),icon:(0,p.jsx)(D.F,{size:18,color:"#000"}),children:"Add"}),(0,p.jsx)(F.z,{size:24,color:"#fff",style:{alignSelf:"end",margin:"auto"},onClick:te})]}),le=async()=>{try{const t=await(()=>{const e=`${d.H$}/contact/list-all`;return(0,d.Em)({url:e,method:"get",headers:{"Content-Type":"application/json"}})})();if(200==t.status){var e;const a=null===(e=t.data)||void 0===e?void 0:e.map((e=>({value:e.id,label:e.displayName||"-"})));A(a)}}catch(t){(0,d.ok)(t)}},ne=async()=>{try{const t=await(()=>{const e=`${d.H$}/item/list-all`;return(0,d.Em)({url:e,method:"get",headers:{"Content-Type":"application/json"}})})();if(200==t.status){var e;const a=new Map,l=null===(e=t.data)||void 0===e?void 0:e.map((e=>(a.has(e.id)||a.set(e.id,e.name),{value:e.id,label:e.name})));L(l),$(a)}}catch(t){(0,d.ok)(t)}},oe=async()=>{try{const e=await(e=>{const t=`${d.H$}/saleOrder/list-all`;return(0,d.Em)({url:t,method:"post",data:e,headers:{"Content-Type":"application/json"}})})({startDate:O[0].startOf("day").valueOf(),endDate:O[1].endOf("day").valueOf()});200==e.status&&(a(e.data),x(e.data))}catch(e){(0,d.ok)(e)}},re=e=>{const t=O[0].add(e,"day");z([t,t])},se=e=>(0,p.jsx)(r.A,{bordered:!0,style:{width:"100%",marginLeft:0},size:"middle",pagination:{position:["none","bottomCenter"],pageSize:5},columns:ee,dataSource:e.itemData||[]});return(0,l.useEffect)((()=>{Q(O[0].isSame(O[1],"day")),oe()}),[O]),(0,l.useEffect)((()=>{le(),ne(),(async()=>{try{const t=await(0,W.S)();if(200==t.status){var e;const a=null===(e=t.data)||void 0===e?void 0:e.map((e=>({value:e.id,label:e.displayName})));M(a)}}catch(t){(0,d.ok)(t)}})()}),[]),(0,p.jsxs)(u.u1,{ai:"center",minH:"100vh",maxW:"500px",w:"100%",bgc:"#fff",style:{position:"relative"},children:[(0,p.jsx)(m,{title:"Sales",onBack:()=>e(-1),rightContent:(0,d.x8)("EDIT_SALE_ORDER")?(0,p.jsx)(ae,{}):null}),(0,p.jsxs)(u.u1,{m:"0",w:"100%",p:"20px",gap:"20px",children:[(0,d.x8)("EDIT_SALE_ORDER")&&(0,p.jsxs)(u.st,{w:"100%",m:"0",gap:"20px",children:[(0,p.jsx)(T.d,{size:32,color:"#8c8c8c",display:H?"block":"none",onClick:()=>re(-1)}),(0,p.jsx)(s.A.RangePicker,{value:O,style:{alignSelf:"end",width:"100%"},onChange:(e,t)=>{const a=t.map((e=>w()(e)));z(a)},format:"YYYY/MM/DD",popupClassName:"yolup"}),(0,p.jsx)(N.g,{size:32,color:"#8c8c8c",display:H?"block":"none",onClick:()=>re(1)})]}),(0,p.jsxs)(u.st,{w:"100%",m:"0",gap:"10px",children:[(0,p.jsx)(n.A,{showSearch:!0,value:G,placeholder:"customers",optionFilterProp:"label",popupMatchSelectWidth:!1,filterSort:(e,t)=>{var a,l;return(null!==(a=null===e||void 0===e?void 0:e.label)&&void 0!==a?a:"").toLowerCase().localeCompare((null!==(l=null===t||void 0===t?void 0:t.label)&&void 0!==l?l:"").toLowerCase())},options:C,style:{minWidth:"40%",width:"100%"},onChange:e=>K(e)}),(0,p.jsx)(n.A,{value:J,options:V,placeholder:"status",style:{width:"fit-content"},popupMatchSelectWidth:!1,onChange:e=>U(e)}),(0,p.jsx)(E,{h:"32px",fs:"14px",onClick:()=>{K(null),U(null)},children:"Reset"})]}),(0,p.jsx)(r.A,{style:{width:"100%"},size:"middle",pagination:{position:["none","bottomCenter"],pageSize:15},columns:X,dataSource:c||[],expandable:{expandIcon:()=>null,expandIconColumnIndex:-1,expandRowByClick:!0,expandedRowRender:e=>{var t;return(0,p.jsxs)(u.jx,{id:"1234",w:"100%",children:[(0,p.jsx)(i.A,{title:"",size:"small",style:{marginBottom:"10px"},layout:"vertical",bordered:!0,column:{xs:2},items:[{key:"1",label:"Agent",children:e.agentName},{key:"2",label:"Containers",children:null===(t=e.containers)||void 0===t?void 0:t.map((e=>(0,p.jsxs)(p.Fragment,{children:[e.type," : ",e.quantity,(0,p.jsx)("br",{})]})))},{key:"3",label:"Total",children:`\u20b9 ${(0,d.ob)(e.items.reduce(((e,t)=>e+(t.itemTotal||0)),0))}`}]}),(0,p.jsx)(se,{itemData:e.items})]})}},rowKey:(e,t)=>t})]}),(0,p.jsx)(I,{open:y,onClose:()=>g(!1),allContacts:C,getAllContacts:le,allItems:k,getAllItems:ne,allAgents:q,fetchOrders:oe}),(0,p.jsx)(P,{open:f,onClose:()=>v(!1),saleOrder:b,allContacts:C,allItems:k,allAgents:q,itemNameToIdMap:S})]})}}}]);
//# sourceMappingURL=426.aa13be00.chunk.js.map