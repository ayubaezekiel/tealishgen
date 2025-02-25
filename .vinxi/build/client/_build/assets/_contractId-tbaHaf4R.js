import{c as h,u as g,r,j as e,B as a,L as m,C as n,a as c,b as i,e as y,d as l,f as C}from"./client-mg7czlZ9.js";import{B as x}from"./badge-BSfkW4bP.js";import{C as b}from"./copy-D0idqAMd.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],w=h("ArrowLeft",v);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],M=h("ExternalLink",k),z=function(){const{contractId:t}=g({from:"/marketplace/$contractId"}),[s,p]=r.useState(null),[j,o]=r.useState(!0),[u,d]=r.useState(!1);r.useEffect(()=>{(async()=>{o(!0);const N={id:parseInt(t),name:`Contract ${t}`,description:`This is a detailed description for smart contract ${t}. This contract provides functionality for secure and automated transactions without intermediaries.`,price:Math.floor(Math.random()*100)+10,owner:`Owner ${Math.floor(Math.random()*10)+1}`,address:`0x${Array.from({length:40},()=>Math.floor(Math.random()*16).toString(16)).join("")}`,creationDate:new Date(Date.now()-Math.random()*1e10).toISOString().split("T")[0],category:["DeFi","NFT","DAO","Gaming"][Math.floor(Math.random()*4)],downloadCount:Math.floor(Math.random()*1e3)};setTimeout(()=>{p(N),o(!1)},500)})()},[t]);const f=()=>{s?.address&&(navigator.clipboard.writeText(s.address),d(!0),setTimeout(()=>d(!1),2e3))};return j?e.jsx("div",{className:"container mx-auto px-4 py-12 mt-24 flex justify-center",children:e.jsx("div",{className:"w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"})}):s?e.jsxs("div",{className:"container mx-auto px-4 py-12 mt-16",children:[e.jsx("div",{className:"mb-6",children:e.jsx(a,{variant:"outline",asChild:!0,className:"flex items-center gap-2",children:e.jsxs(m,{to:"/marketplace",children:[e.jsx(w,{size:16}),"Back to Marketplace"]})})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[e.jsx("div",{className:"md:col-span-2",children:e.jsxs(n,{className:"h-full",children:[e.jsx(c,{children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx(i,{className:"text-3xl mb-2",children:s.name}),e.jsxs(y,{className:"flex items-center gap-2",children:[e.jsx(x,{variant:"outline",children:s.category}),e.jsxs("span",{className:"text-sm text-gray-500",children:["Created: ",s.creationDate]})]})]}),e.jsxs(x,{className:"text-lg py-1 px-3",children:[s.price," ALGO"]})]})}),e.jsxs(l,{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Description"}),e.jsx("p",{className:"text-gray-700",children:s.description})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Contract Address"}),e.jsxs("div",{className:"flex items-center gap-2 bg-gray-100 p-3 rounded",children:[e.jsx("code",{className:"text-sm font-mono flex-1 overflow-x-auto text-black",children:s.address}),e.jsx(a,{size:"sm",variant:"outline",onClick:f,title:"Copy to clipboard",children:u?"Copied!":e.jsx(b,{size:16})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Features"}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:"Secure automated transactions"}),e.jsx("li",{className:"mb-1",children:"Transparent execution on the blockchain"}),e.jsx("li",{className:"mb-1",children:"Low gas fees and fast processing"}),e.jsx("li",{className:"mb-1",children:"Customizable parameters"})]})]})]})]})}),e.jsxs("div",{children:[e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(i,{children:"Purchase Information"})}),e.jsxs(l,{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"Price:"}),e.jsxs("span",{className:"font-bold",children:[s.price," ALGO"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"Creator:"}),e.jsx("span",{children:s.owner})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"Downloads:"}),e.jsx("span",{children:s.downloadCount})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-gray-600",children:"License:"}),e.jsx("span",{children:"Open Source"})]})]}),e.jsxs(C,{className:"flex flex-col gap-3",children:[e.jsx(a,{className:"w-full",children:"Purchase Contract"}),e.jsxs(a,{variant:"outline",className:"w-full flex items-center justify-center gap-2",children:["View on Explorer ",e.jsx(M,{size:16})]})]})]}),e.jsxs(n,{className:"mt-6",children:[e.jsx(c,{children:e.jsx(i,{children:"Support"})}),e.jsxs(l,{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Need help with this contract? Contact the creator or check the documentation."}),e.jsx(a,{variant:"outline",className:"w-full",children:"Contact Creator"})]})]})]})]})]}):e.jsxs("div",{className:"container mx-auto px-4 py-12 mt-24 text-center",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Contract Not Found"}),e.jsx("p",{className:"mb-6",children:"The contract you're looking for doesn't exist or has been removed."}),e.jsx(a,{asChild:!0,children:e.jsx(m,{to:"/marketplace",children:"Back to Marketplace"})})]})};export{z as component};
