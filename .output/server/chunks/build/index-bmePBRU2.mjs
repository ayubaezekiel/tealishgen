import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { V as Vt, y } from '../nitro/nitro.mjs';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from '@tanstack/react-router';
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
import 'lucide-react';
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

const k = Array.from({ length: 200 }, (n, a) => ({ id: a + 1, name: `Contract ${a + 1}`, description: `Description for contract ${a + 1}`, price: Math.floor(Math.random() * 100) + 1, owner: `Owner ${a + 1}` })), M = () => {
  const [n, a] = useState([]), [r, i] = useState(1), [s] = useState(6), [l, f] = useState("");
  useEffect(() => {
    a(k);
  }, []);
  const c = useMemo(() => n.filter((t) => t.name.toLowerCase().includes(l.toLowerCase())), [n, l]);
  useEffect(() => {
    i(1);
  }, [l]);
  const { currentContracts: x, totalPages: m } = useMemo(() => {
    const t = r * s, v = t - s;
    return { currentContracts: c.slice(v, t), totalPages: Math.ceil(c.length / s) };
  }, [c, r, s]);
  useCallback((t) => i(t), []);
  const C = useCallback(() => {
    r < m && i((t) => t + 1);
  }, [r, m]), b = useCallback(() => {
    r > 1 && i((t) => t - 1);
  }, [r]), N = useCallback((t) => {
    f(t.target.value);
  }, []);
  return jsxs("div", { className: "container mx-auto px-4 py-8 mt-16", children: [jsx("h1", { className: "text-3xl font-bold text-center mb-6", children: "Smart Contract Marketplace" }), jsx(Vt, { type: "text", placeholder: "Filter by name", className: "mb-6 w-full max-w-md mx-auto", value: l, onChange: N }), c.length === 0 ? jsx("p", { className: "text-center text-lg text-gray-500 my-8", children: "No contracts found matching your filter." }) : jsxs(Fragment, { children: [jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: x.map((t) => jsxs("div", { className: "border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [jsx("h2", { className: "text-xl font-bold mb-2", children: t.name }), jsx("p", { className: "text-gray-600 mb-3 h-12 overflow-hidden", children: t.description }), jsxs("p", { className: "text-lg font-bold mb-3", children: [t.price, " ALGO"] }), jsx(y, { asChild: true, className: "w-full", children: jsx(Link, { to: "/marketplace/$contractId", params: { contractId: `${t.id}` }, children: "View Details" }) })] }, t.id)) }), jsxs("div", { className: "flex justify-center items-center gap-2 mt-6", children: [jsx(y, { onClick: b, variant: "outline", disabled: r === 1, "aria-label": "Previous page", children: "Previous" }), jsxs("span", { className: "mx-2 text-sm", children: ["Page ", r, " of ", m] }), jsx(y, { onClick: C, variant: "outline", disabled: r === m, "aria-label": "Next page", children: "Next" })] })] })] });
}, T = function() {
  return jsx(M, {});
};

export { T as component, M as default };
//# sourceMappingURL=index-bmePBRU2.mjs.map
