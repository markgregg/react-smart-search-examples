import{r as u,j as s}from"./index-DiXLJm1P.js";import{W as o,f as r,a as i,I as t,i as l,g as d,j as n,e as c,R as h}from"./styles-DZlNUAAe.js";function f(){const m=u.useMemo(()=>[{name:"ISIN",title:"ISIN Code",comparisons:o,precedence:3,allowLists:!0,fieldMatches:[{minimumSearchLength:2,ignoreCase:!0,source:async e=>new Promise(a=>{setTimeout(()=>a(r(e,"isin")),5)}),matchOnPaste:async e=>new Promise(a=>{setTimeout(()=>{a(i(e,"isin"))},5)})}]},{name:"Currency",title:"Currency Code",comparisons:o,precedence:2,allowLists:!0,fieldMatches:[{ignoreCase:!0,source:async e=>new Promise(a=>{setTimeout(()=>a(r(e,"currency")),5)}),matchOnPaste:async e=>new Promise(a=>{setTimeout(()=>{a(i(e,"currency"))},5)})}]},{name:"Coupon",title:"Coupon",comparisons:t,precedence:1,allowRanges:!0,fieldMatches:[{match:e=>!Number.isNaN(Number(e)),value:e=>Number.parseFloat(e),matchOnPaste:!0}]},{name:"HairCut",title:"Hair Cut",comparisons:t,precedence:1,allowRanges:!0,fieldMatches:[{match:e=>!Number.isNaN(Number(e)),value:e=>Number.parseFloat(e),matchOnPaste:!0}]},{name:"Size",title:"Size",comparisons:t,precedence:4,allowRanges:!0,fieldMatches:[{match:e=>l(e),value:e=>d(e),matchOnPaste:!0}]},{name:"Side",title:"Side",comparisons:n,precedence:9,fieldMatches:[{ignoreCase:!0,hideCategory:!0,source:["BUY","SELL"],matchOnPaste:!0}]},{name:"Issuer",title:"Issuer",comparisons:n,precedence:1,fieldMatches:[{ignoreCase:!0,match:/^[a-zA-Z ]{2,}$/,value:e=>e,matchOnPaste:!1},{ignoreCase:!1,searchStartLength:3,source:async e=>new Promise(a=>{setTimeout(()=>a(r(e,"issuer")),5)}),matchOnPaste:async e=>new Promise(a=>{setTimeout(()=>{a(i(e,"issuer"))},5)})}]},{name:"MaturityDate",title:"Maturity Date",comparisons:t,precedence:4,allowRanges:!0,fieldMatches:[{match:/^[0-9]{0,2}[yYmM]$/,value:e=>c(e),matchOnPaste:!0}]},{name:"IssueDate",title:"Issue Date",comparisons:t,precedence:3,allowRanges:!0,fieldMatches:[{match:/^[0-9]{0,2}[yYmM]$/,value:e=>c(e),matchOnPaste:!0}]},{name:"Sector",title:"Sector",comparisons:n,precedence:8,allowLists:!0,fieldMatches:[{searchStartLength:2,ignoreCase:!0,source:["Energy","Materials","Industrials","Consumer","Health","Financials","Technology","Communications","Utilities"],matchOnPaste:!0}]}],[]);return s.jsxs("div",{className:"storyStyle",children:[s.jsx("h1",{children:"Basic Smart Search"}),s.jsxs("div",{className:"text",children:["Below is a simple example of the React Smart Search component. It is hooked up to a client side data source. ",s.jsx("br",{}),"Smart Search supports server-side and client datasources, or it can work with a combination of the two. ",s.jsx("br",{}),"Smart Search is highly customisable, and can use any number of comparison methods. It also supports and/or, brackets, lists and ranges."," ",s.jsx("br",{}),"Seraching is simple and intuitive. Users can search by field (side = buy), by comparion and value ($",">"," 5), or by just a value (sell)."," ",s.jsx("br",{}),"If a comparison operator is not provided then it is assumed to be the field's default (usually equals). Likewsie, conditions are joined by an and, unless or is supplied.",s.jsx("br",{})]}),s.jsx("div",{className:"smartSearch",children:s.jsx(h,{fields:m})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as SmartSeachBasic};