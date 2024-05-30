import{r as c,j as a}from"./index-BsZ4yH_P.js";import{r as t,f as r,a as i,i as m,g as u,e as n,R as l}from"./styles-BHfIUxzC.js";function p(){const o=c.useMemo(()=>[{name:"ISIN",title:"ISIN Code",comparisons:t.defaultComparison,precedence:3,allowLists:!0,fieldMatches:[{minimumSearchLength:2,ignoreCase:!0,source:async e=>new Promise(s=>{setTimeout(()=>s(r(e,"isin")),5)}),matchOnPaste:async e=>new Promise(s=>{setTimeout(()=>{s(i(e,"isin"))},5)})}]},{name:"Currency",title:"Currency Code",comparisons:t.defaultComparison,precedence:2,allowLists:!0,fieldMatches:[{ignoreCase:!0,source:async e=>new Promise(s=>{setTimeout(()=>s(r(e,"currency")),5)}),matchOnPaste:async e=>new Promise(s=>{setTimeout(()=>{s(i(e,"currency"))},5)})}]},{name:"Coupon",title:"Coupon",comparisons:t.numberComparisons,precedence:1,allowRanges:!0,fieldMatches:[{match:e=>!Number.isNaN(Number(e)),value:e=>Number.parseFloat(e),matchOnPaste:!0}]},{name:"HairCut",title:"Hair Cut",comparisons:t.numberComparisons,precedence:1,allowRanges:!0,fieldMatches:[{match:e=>!Number.isNaN(Number(e)),value:e=>Number.parseFloat(e),matchOnPaste:!0}]},{name:"Size",title:"Size",comparisons:t.numberComparisons,precedence:4,allowRanges:!0,fieldMatches:[{match:e=>m(e),value:e=>u(e),matchOnPaste:!0}]},{name:"Side",title:"Side",comparisons:t.stringComparisons,precedence:9,fieldMatches:[{ignoreCase:!0,hideCategory:!0,source:["BUY","SELL"],matchOnPaste:!0}]},{name:"Issuer",title:"Issuer",comparisons:t.stringComparisons,precedence:1,fieldMatches:[{ignoreCase:!0,match:/^[a-zA-Z ]{2,}$/,value:e=>e,matchOnPaste:!1},{ignoreCase:!1,searchStartLength:3,source:async e=>new Promise(s=>{setTimeout(()=>s(r(e,"issuer")),5)}),matchOnPaste:async e=>new Promise(s=>{setTimeout(()=>{s(i(e,"issuer"))},5)})}]},{name:"MaturityDate",title:"Maturity Date",comparisons:t.numberComparisons,precedence:4,allowRanges:!0,fieldMatches:[{match:/^[0-9]{0,2}[yYmM]$/,value:e=>n(e),matchOnPaste:!0}]},{name:"IssueDate",title:"Issue Date",comparisons:t.numberComparisons,precedence:3,allowRanges:!0,fieldMatches:[{match:/^[0-9]{0,2}[yYmM]$/,value:e=>n(e),matchOnPaste:!0}]},{name:"Sector",title:"Sector",comparisons:t.stringComparisons,precedence:8,allowLists:!0,fieldMatches:[{searchStartLength:2,ignoreCase:!0,source:["Energy","Materials","Industrials","Consumer","Health","Financials","Technology","Communications","Utilities"],matchOnPaste:!0}]}],[]);return a.jsxs("div",{className:"storyStyle",children:[a.jsx("h1",{children:"Basic Smart Search"}),a.jsxs("div",{className:"text",children:["Below is a simple example of the React Smart Search component. It is hooked up to a client side data source. ",a.jsx("br",{}),"Smart Search supports server-side and client datasources, or it can work with a combination of the two. ",a.jsx("br",{}),"Smart Search is highly customisable, and can use any number of comparison methods. It also supports and/or, brackets, lists and ranges."," ",a.jsx("br",{}),"Seraching is simple and intuitive. Users can search by field (side = buy), by comparion and value ($",">"," 5), or by just a value (sell)."," ",a.jsx("br",{}),"If a comparison operator is not provided then it is assumed to be the field's default (usually equals). Likewsie, conditions are joined by an and, unless or is supplied.",a.jsx("br",{})]}),a.jsx("div",{className:"smartSearch",children:a.jsx(l,{fields:o})})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as SmartSeachBasic};
