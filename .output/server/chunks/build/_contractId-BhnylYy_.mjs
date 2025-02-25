import { jsx, jsxs } from 'react/jsx-runtime';
import { useParams, Link } from '@tanstack/react-router';
import { y, H as Ht, A as At, O as Ot, F as Ft, L as Lt, B as Bt } from '../nitro/nitro.mjs';
import { u } from './badge-qBaby7B3.mjs';
import { ArrowLeft, Copy, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'tiny-invariant';
import 'node:async_hooks';
import '@radix-ui/react-icons';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-dropdown-menu';
import '@tanstack/router-devtools';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const X = function() {
  const { contractId: i } = useParams({ from: "/marketplace/$contractId" }), [a, f] = useState(null), [u$1, d] = useState(true), [x, m] = useState(false);
  useEffect(() => {
    (async () => {
      d(true);
      const g = { id: parseInt(i), name: `Contract ${i}`, description: `This is a detailed description for smart contract ${i}. This contract provides functionality for secure and automated transactions without intermediaries.`, price: Math.floor(Math.random() * 100) + 10, owner: `Owner ${Math.floor(Math.random() * 10) + 1}`, address: `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`, creationDate: new Date(Date.now() - Math.random() * 1e10).toISOString().split("T")[0], category: ["DeFi", "NFT", "DAO", "Gaming"][Math.floor(Math.random() * 4)], downloadCount: Math.floor(Math.random() * 1e3) };
      setTimeout(() => {
        f(g), d(false);
      }, 500);
    })();
  }, [i]);
  const N = () => {
    (a == null ? void 0 : a.address) && (navigator.clipboard.writeText(a.address), m(true), setTimeout(() => m(false), 2e3));
  };
  return u$1 ? jsx("div", { className: "container mx-auto px-4 py-12 mt-24 flex justify-center", children: jsx("div", { className: "w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" }) }) : a ? jsxs("div", { className: "container mx-auto px-4 py-12 mt-16", children: [jsx("div", { className: "mb-6", children: jsx(y, { variant: "outline", asChild: true, className: "flex items-center gap-2", children: jsxs(Link, { to: "/marketplace", children: [jsx(ArrowLeft, { size: 16 }), "Back to Marketplace"] }) }) }), jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [jsx("div", { className: "md:col-span-2", children: jsxs(Ht, { className: "h-full", children: [jsx(At, { children: jsxs("div", { className: "flex justify-between items-start", children: [jsxs("div", { children: [jsx(Ot, { className: "text-3xl mb-2", children: a.name }), jsxs(Ft, { className: "flex items-center gap-2", children: [jsx(u, { variant: "outline", children: a.category }), jsxs("span", { className: "text-sm text-gray-500", children: ["Created: ", a.creationDate] })] })] }), jsxs(u, { className: "text-lg py-1 px-3", children: [a.price, " ALGO"] })] }) }), jsxs(Lt, { className: "space-y-6", children: [jsxs("div", { children: [jsx("h3", { className: "text-lg font-medium mb-2", children: "Description" }), jsx("p", { className: "text-gray-700", children: a.description })] }), jsxs("div", { children: [jsx("h3", { className: "text-lg font-medium mb-2", children: "Contract Address" }), jsxs("div", { className: "flex items-center gap-2 bg-gray-100 p-3 rounded", children: [jsx("code", { className: "text-sm font-mono flex-1 overflow-x-auto text-black", children: a.address }), jsx(y, { size: "sm", variant: "outline", onClick: N, title: "Copy to clipboard", children: x ? "Copied!" : jsx(Copy, { size: 16 }) })] })] }), jsxs("div", { children: [jsx("h3", { className: "text-lg font-medium mb-2", children: "Features" }), jsxs("ul", { className: "list-disc pl-5", children: [jsx("li", { className: "mb-1", children: "Secure automated transactions" }), jsx("li", { className: "mb-1", children: "Transparent execution on the blockchain" }), jsx("li", { className: "mb-1", children: "Low gas fees and fast processing" }), jsx("li", { className: "mb-1", children: "Customizable parameters" })] })] })] })] }) }), jsxs("div", { children: [jsxs(Ht, { children: [jsx(At, { children: jsx(Ot, { children: "Purchase Information" }) }), jsxs(Lt, { className: "space-y-4", children: [jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "text-gray-600", children: "Price:" }), jsxs("span", { className: "font-bold", children: [a.price, " ALGO"] })] }), jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "text-gray-600", children: "Creator:" }), jsx("span", { children: a.owner })] }), jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "text-gray-600", children: "Downloads:" }), jsx("span", { children: a.downloadCount })] }), jsxs("div", { className: "flex justify-between items-center", children: [jsx("span", { className: "text-gray-600", children: "License:" }), jsx("span", { children: "Open Source" })] })] }), jsxs(Bt, { className: "flex flex-col gap-3", children: [jsx(y, { className: "w-full", children: "Purchase Contract" }), jsxs(y, { variant: "outline", className: "w-full flex items-center justify-center gap-2", children: ["View on Explorer ", jsx(ExternalLink, { size: 16 })] })] })] }), jsxs(Ht, { className: "mt-6", children: [jsx(At, { children: jsx(Ot, { children: "Support" }) }), jsxs(Lt, { children: [jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Need help with this contract? Contact the creator or check the documentation." }), jsx(y, { variant: "outline", className: "w-full", children: "Contact Creator" })] })] })] })] })] }) : jsxs("div", { className: "container mx-auto px-4 py-12 mt-24 text-center", children: [jsx("h1", { className: "text-2xl font-bold mb-4", children: "Contract Not Found" }), jsx("p", { className: "mb-6", children: "The contract you're looking for doesn't exist or has been removed." }), jsx(y, { asChild: true, children: jsx(Link, { to: "/marketplace", children: "Back to Marketplace" }) })] });
};

export { X as component };
//# sourceMappingURL=_contractId-BhnylYy_.mjs.map
