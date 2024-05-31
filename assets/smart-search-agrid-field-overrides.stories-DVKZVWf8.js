import{r as t,j as s}from"./index-CeimIIv9.js";import{b as v,c as b,r as y}from"./styles-uMNwac_5.js";import{A as f}from"./ag-theme-alpine-XzBe9OrI.js";function A(){const a=t.useRef(null),[n,l]=t.useState([]),[i]=t.useState(v),[c]=t.useState(b),[o,d]=t.useState(null),[u,m]=t.useState(null),h=(e,r)=>{l(e),a.current=r,o==null||o.onFilterChanged()},x=t.useCallback(e=>{d(e.api),m(e.columnApi)},[]),p=t.useCallback(()=>a.current!==null,[]),g=t.useCallback(e=>a.current!==null&&a.current(e),[]);return s.jsxs("div",{className:"storyStyle",children:[s.jsx("h1",{children:"Smart Search For Ag-Grid with Overrides"}),s.jsx("div",{className:"text",children:"Although you don''t have to supply fields for the Ag-Grid Smart Search, you can override the default behaviour. In this example the active field has been changed to yes/no, and the title for the side field has been changed to hidden"}),s.jsxs("div",{className:"agGridFrame",children:[s.jsx(y.ReactSmartSearchAgGrid,{matchers:n,onChanged:(e,r)=>h(e,r),maxMatcherWidth:250,fields:[{name:"active",fieldMatches:[{ignoreCase:!0,source:[{text:"Yes",value:!0},{text:"No",value:!1}],textGetter:e=>e.text,valueGetter:e=>e.value}]},{name:"side",hideCategory:!0}],hints:[{column:"currency"},{column:"side"},{column:"categories.sector"},{column:"active",options:[{text:"Yes",value:!0},{text:"No",value:!1}]},{column:"maturityDate",options:[{displayText:"1Y to 5Y",text:"2024-01-01",value:"2024-01-01",textTo:"2029-12-31",valueTo:"2029-12-31"},{displayText:"6Y to 10Y",text:"2030-01-01",value:"2030-01-01",textTo:"2034-12-31",valueTo:"2034-12-31"},{displayText:"10Y to 15Y",text:"2035-01-01",value:"2035-01-01",textTo:"2039-12-31",valueTo:"2039-12-31"},{displayText:"15Y to 20Y",text:"2040-01-01",value:"2040-01-01",textTo:"2044-12-31",valueTo:"2044-12-31"}]}],comparisonDescriptons:[{symbol:"!",description:"not",bgcolor:"rgb(143 61 61)"},{symbol:"*",description:"contains"},{symbol:"!*",description:"not contains",bgcolor:"rgb(143 61 61)"},{symbol:"<*",description:"starts with"},{symbol:">*",description:"ends with"},{symbol:"list",bgcolor:"rgb(78 74 121)"},{symbol:"range",bgcolor:"rgb(82 103 66)"}],gridApi:o,columnApi:u}),s.jsx("div",{className:"ag-theme-alpine agGrid",children:s.jsx(f,{onGridReady:x,rowData:i,columnDefs:c,isExternalFilterPresent:p,doesExternalFilterPass:g})})]})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{A as SmartSeachAgGridOverrides};
