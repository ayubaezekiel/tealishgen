import{jsx as e,jsxs as t}from"react/jsx-runtime";import{B as d,C as s,a as i,b as r,c as n,d as c}from"./ssr-xgXjpNED.js";import{Brain as h,ArrowRightLeft as p,Blocks as g,ShieldCheck as a,Code as x,Cpu as u,Zap as N,Wand2 as b}from"lucide-react";import"@tanstack/react-router";import"@radix-ui/react-icons";import"react";import"@radix-ui/react-slot";import"class-variance-authority";import"clsx";import"tailwind-merge";import"@radix-ui/react-dropdown-menu";import"@tanstack/router-devtools";import"cookie-es";import"h3";import"jsesc";import"node:async_hooks";import"node:stream";import"isbot";import"react-dom/server";import"node:stream/web";import"tiny-invariant";const f=l=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[e("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}),e("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),e("path",{d:"M12 11v6"}),e("path",{d:"M9 17h6"})]}),v=l=>t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[e("path",{d:"M19 9h-4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4h4"}),e("path",{d:"M5 19v-4H1v-4a2 2 0 0 1 2-2h4"}),e("path",{d:"M19 5h-4"}),e("path",{d:"M15 19h4a2 2 0 0 0 2-2v-4h-4"})]}),w=()=>t("div",{className:"pt-24 pb-16 container mx-auto px-4 md:px-6",children:[t("div",{className:"text-center mb-16",children:[e("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent",children:"Build on Algorand Without Code"}),e("p",{className:"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto",children:"TealGen simplifies Algorand smart contract development with an intuitive drag-and-drop interface and AI-powered Tealish generation."})]}),t("div",{className:"mb-16 relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800",children:[e("div",{className:"aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center",children:e("div",{className:"text-center p-4",children:e("img",{src:"/api/placeholder/800/450",alt:"TealGen Interface Demo",className:"mx-auto rounded-lg shadow-lg"})})}),e("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 pt-16",children:e(d,{className:"bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white",children:"Watch Demo"})})]}),e("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16",children:[{title:"Drag-and-Drop Builder",description:"Create complex Algorand smart contracts visually by dragging and connecting components, no coding required.",icon:e(f,{className:"w-10 h-10 text-teal-500"})},{title:"Tealish Simplification",description:"Our platform translates visual elements into optimized Tealish code automatically, making development faster and easier.",icon:e(x,{className:"w-10 h-10 text-teal-500"})},{title:"AI-Powered Generation",description:"Generate smart contract templates and custom logic using our advanced AI that understands natural language requirements.",icon:e(u,{className:"w-10 h-10 text-teal-500"})},{title:"Reusable Components",description:"Access a library of pre-built, audited components for common DeFi use cases and easily integrate them into your contracts.",icon:e(v,{className:"w-10 h-10 text-teal-500"})},{title:"One-Click Deployment",description:"Deploy your contracts to Algorand TestNet or MainNet with a single click after automatic security verification.",icon:e(N,{className:"w-10 h-10 text-teal-500"})},{title:"Smart Suggestions",description:"Receive real-time code suggestions and optimizations as you build, based on Algorand best practices.",icon:e(b,{className:"w-10 h-10 text-teal-500"})}].map((o,m)=>t(s,{className:"border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow duration-300",children:[t(i,{className:"flex flex-row items-center gap-4 pb-2",children:[e("div",{className:"text-teal-500",children:o.icon}),e(r,{className:"text-xl",children:o.title})]}),e(n,{children:e(c,{className:"text-base",children:o.description})})]},m))}),t("div",{className:"mb-16",children:[e("h2",{className:"text-3xl font-bold mb-8 text-center",children:"How TealGen Works"}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t("div",{className:"flex flex-col items-center text-center",children:[e("div",{className:"w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4",children:e(h,{className:"w-8 h-8 text-teal-500"})}),e("h3",{className:"text-xl font-semibold mb-2",children:"1. Describe or Design"}),e("p",{className:"text-muted-foreground",children:"Start by describing what you want in plain English or directly design using our visual interface."})]}),t("div",{className:"flex flex-col items-center text-center",children:[e("div",{className:"w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4",children:e(p,{className:"w-8 h-8 text-teal-500"})}),e("h3",{className:"text-xl font-semibold mb-2",children:"2. AI Generates Tealish"}),e("p",{className:"text-muted-foreground",children:"Our AI translates your design into optimized Tealish code, which you can review and customize."})]}),t("div",{className:"flex flex-col items-center text-center",children:[e("div",{className:"w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4",children:e(g,{className:"w-8 h-8 text-teal-500"})}),e("h3",{className:"text-xl font-semibold mb-2",children:"3. Deploy to Algorand"}),e("p",{className:"text-muted-foreground",children:"Test, verify, and deploy your smart contract to the Algorand blockchain with one click."})]})]})]}),t("div",{className:"bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-16",children:[e("h2",{className:"text-3xl font-bold mb-8 text-center",children:"AI-Powered Development"}),t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t("div",{children:[e("h3",{className:"text-xl font-semibold mb-4 text-teal-500",children:"Natural Language to Tealish"}),e("p",{className:"mb-4",children:"Describe your contract logic in plain English:"}),e("div",{className:"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-4 text-muted-foreground italic",children:'"Create a token vesting contract that releases 10% of tokens each month for 10 months after a 6-month cliff period."'}),e("p",{className:"text-sm text-muted-foreground",children:"Our AI instantly converts this request into functional Tealish code."})]}),t("div",{children:[e("h3",{className:"text-xl font-semibold mb-4 text-teal-500",children:"Smart Contract Analysis"}),e("p",{className:"mb-4",children:"Our AI identifies potential issues and suggests improvements:"}),t("ul",{className:"space-y-3",children:[t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Security vulnerability detection"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Gas optimization suggestions"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Logic flow verification"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Best practices enforcement"})]})]})]})]})]}),t("div",{className:"mb-16",children:[e("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Build Any Algorand Application"}),t("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[t(s,{className:"border border-slate-200 dark:border-slate-800",children:[e(i,{className:"pb-2",children:e(r,{className:"text-lg",children:"DeFi Protocols"})}),e(n,{children:e(c,{children:"Lending, borrowing, and liquidity pools with built-in security features."})})]}),t(s,{className:"border border-slate-200 dark:border-slate-800",children:[e(i,{className:"pb-2",children:e(r,{className:"text-lg",children:"NFT Marketplaces"})}),e(n,{children:e(c,{children:"Create custom NFT minting, trading, and royalty distribution contracts."})})]}),t(s,{className:"border border-slate-200 dark:border-slate-800",children:[e(i,{className:"pb-2",children:e(r,{className:"text-lg",children:"DAO Governance"})}),e(n,{children:e(c,{children:"Voting systems, treasury management, and proposal execution mechanisms."})})]}),t(s,{className:"border border-slate-200 dark:border-slate-800",children:[e(i,{className:"pb-2",children:e(r,{className:"text-lg",children:"Token Vesting"})}),e(n,{children:e(c,{children:"Time-locked distribution contracts with custom vesting schedules."})})]})]})]}),t("div",{className:"bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-16",children:[e("h2",{className:"text-3xl font-bold mb-8 text-center",children:"Technical Specifications"}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[t("div",{children:[e("h3",{className:"text-xl font-semibold mb-4 text-teal-500",children:"Algorand Integration"}),t("ul",{className:"space-y-3",children:[t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Supports ARC standards (ARC-3, ARC-19, ARC-69)"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Algorand Standard Assets (ASA) creation"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Smart signatures support"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Atomic transfers"})]})]})]}),t("div",{children:[e("h3",{className:"text-xl font-semibold mb-4 text-teal-500",children:"Tealish Compiler"}),t("ul",{className:"space-y-3",children:[t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Latest Tealish syntax support"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Custom libraries and imports"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"TEAL v6 compatibility"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Optimized bytecode generation"})]})]})]}),t("div",{children:[e("h3",{className:"text-xl font-semibold mb-4 text-teal-500",children:"Developer Tools"}),t("ul",{className:"space-y-3",children:[t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Interactive debugger"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Automated testing framework"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Contract monitoring dashboard"})]}),t("li",{className:"flex items-center gap-2",children:[e(a,{className:"w-5 h-5 text-teal-500"}),e("span",{children:"Version control integration"})]})]})]})]})]}),t("div",{className:"text-center bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl p-8 text-white",children:[e("h2",{className:"text-3xl font-bold mb-4",children:"Ready to Build on Algorand?"}),e("p",{className:"text-lg mb-6 max-w-2xl mx-auto",children:"Join developers who are creating powerful Algorand applications without writing a single line of code."}),t("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e(d,{className:"bg-white text-teal-600 hover:bg-slate-100",children:"Start Building Free"}),e(d,{variant:"outline",className:"border-white text-white hover:bg-white/10",children:"Schedule Demo"})]})]})]}),q=function(){return e(w,{})};export{q as component};
