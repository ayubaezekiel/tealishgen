import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import { PassThrough, Readable as Readable$1 } from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises, existsSync } from 'node:fs';
import * as node_path$1 from 'node:path';
import { resolve as resolve$1, dirname as dirname$1, join as join$1 } from 'node:path';
import invariant from 'vinxi/lib/invariant';
import { virtualId, handlerModule, join } from 'vinxi/lib/path';
import { isRedirect as isRedirect$1, isNotFound, isPlainObject as isPlainObject$1, createMemoryHistory, warning, RouterProvider, pick, TSR_DEFERRED_PROMISE, createControlledPromise, isPlainArray, defer as defer$1, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, Link, createRouter as createRouter$2 } from '@tanstack/react-router';
import L from 'tiny-invariant';
import { AsyncLocalStorage } from 'node:async_hooks';
import { jsx, jsxs } from 'react/jsx-runtime';
import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { ChevronRight, Check, Circle, Twitter, MessageCircle, Menu, Sun, Moon } from 'lucide-react';
import * as u$2 from 'react';
import { createContext as createContext$1, useState, useEffect, useContext } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as m$2 from '@radix-ui/react-dropdown-menu';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import R$1 from 'jsesc';
import { isbot } from 'isbot';
import P from 'react-dom/server';
import { ReadableStream as ReadableStream$1 } from 'node:stream/web';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_DhEqb06g = {};

var l$1=Object.defineProperty;var o=(e,t)=>l$1(e,"name",{value:t,configurable:true});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_DhEqb06g.commonjsGlobal=commonjsGlobal,nodeFetchNative_DhEqb06g.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var qi=Object.defineProperty;var u$1=(c,l)=>qi(c,"name",{value:l,configurable:true});Object.defineProperty(node$1,"__esModule",{value:true});const http=require$$3,https=require$$4,zlib=require$$5,Stream=require$$6,require$$0=require$$7,require$$0$1=require$$8,_commonjsHelpers=nodeFetchNative_DhEqb06g,require$$1=require$$10,require$$0$2=require$$11,node_fs=require$$0$3,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u$1(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=false;const R=d[0]||"text/plain";let w=R;for(let z=1;z<d.length;z++)d[z]==="base64"?b=true:d[z]&&(w+=`;${d[z]}`,d[z].indexOf("charset=")===0&&(y=d[z].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const A=b?"base64":"ascii",F=unescape(c.substring(l+1)),B=Buffer.from(F,A);return B.type=R,B.typeFull=w,B.charset=y,B}u$1(dataUriToBuffer,"dataUriToBuffer");var streams={},ponyfill_es2018$1={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var ponyfill_es2018=ponyfill_es2018$1.exports,hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(ponyfill_es2018,function(d){function y(){}u$1(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$1(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u$1(w,"setFunctionName");const A=Promise,F=Promise.prototype.then,B=Promise.reject.bind(A);function z(n){return new A(n)}u$1(z,"newPromise");function W(n){return z(o=>o(n))}u$1(W,"promiseResolvedWith");function T(n){return B(n)}u$1(T,"promiseRejectedWith");function D(n,o,a){return F.call(n,o,a)}u$1(D,"PerformPromiseThen");function E(n,o,a){D(D(n,o,a),void 0,R);}u$1(E,"uponPromise");function Z(n,o){E(n,o);}u$1(Z,"uponFulfillment");function M(n,o){E(n,void 0,o);}u$1(M,"uponRejection");function U(n,o,a){return D(n,o,a)}u$1(U,"transformPromiseWith");function K(n){D(n,void 0,R);}u$1(K,"setPromiseIsHandledToTrue");let se=u$1(n=>{if(typeof queueMicrotask=="function")se=queueMicrotask;else {const o=W(void 0);se=u$1(a=>D(o,a),"_queueMicrotask");}return se(n)},"_queueMicrotask");function $(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u$1($,"reflectCall");function N(n,o,a){try{return W($(n,o,a))}catch(p){return T(p)}}u$1(N,"promiseCall");const V=16384;class Q{static{u$1(this,"SimpleQueue");}constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===V-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===V&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}}const rt=Symbol("[[AbortSteps]]"),wr=Symbol("[[ErrorSteps]]"),Ot=Symbol("[[CancelSteps]]"),Ft=Symbol("[[PullSteps]]"),It=Symbol("[[ReleaseSteps]]");function Rr(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?jt(n):o._state==="closed"?Dn(n):Tr(n,o._storedError);}u$1(Rr,"ReadableStreamReaderGenericInitialize");function zt(n,o){const a=n._ownerReadableStream;return ne(a,o)}u$1(zt,"ReadableStreamReaderGenericCancel");function ue(n){const o=n._ownerReadableStream;o._state==="readable"?Lt(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):$n(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[It](),o._reader=void 0,n._ownerReadableStream=void 0;}u$1(ue,"ReadableStreamReaderGenericRelease");function nt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u$1(nt,"readerLockException");function jt(n){n._closedPromise=z((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u$1(jt,"defaultReaderClosedPromiseInitialize");function Tr(n,o){jt(n),Lt(n,o);}u$1(Tr,"defaultReaderClosedPromiseInitializeAsRejected");function Dn(n){jt(n),Cr(n);}u$1(Dn,"defaultReaderClosedPromiseInitializeAsResolved");function Lt(n,o){n._closedPromise_reject!==void 0&&(K(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$1(Lt,"defaultReaderClosedPromiseReject");function $n(n,o){Tr(n,o);}u$1($n,"defaultReaderClosedPromiseResetToRejected");function Cr(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$1(Cr,"defaultReaderClosedPromiseResolve");const Pr=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Mn=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function xn(n){return typeof n=="object"||typeof n=="function"}u$1(xn,"isDictionary");function ie(n,o){if(n!==void 0&&!xn(n))throw new TypeError(`${o} is not an object.`)}u$1(ie,"assertDictionary");function X(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u$1(X,"assertFunction");function Un(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$1(Un,"isObject");function Er(n,o){if(!Un(n))throw new TypeError(`${o} is not an object.`)}u$1(Er,"assertObject");function le(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u$1(le,"assertRequiredArgument");function Dt(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u$1(Dt,"assertRequiredField");function $t(n){return Number(n)}u$1($t,"convertUnrestrictedDouble");function vr(n){return n===0?0:n}u$1(vr,"censorNegativeZero");function Nn(n){return vr(Mn(n))}u$1(Nn,"integerPart");function Mt(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=vr(g),!Pr(g))throw new TypeError(`${o} is not a finite number`);if(g=Nn(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !Pr(g)||g===0?0:g}u$1(Mt,"convertUnsignedLongLongWithEnforceRange");function xt(n,o){if(!Re(n))throw new TypeError(`${o} is not a ReadableStream.`)}u$1(xt,"assertReadableStream");function Fe(n){return new me(n)}u$1(Fe,"AcquireReadableStreamDefaultReader");function Ar(n,o){n._reader._readRequests.push(o);}u$1(Ar,"ReadableStreamAddReadRequest");function Ut(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u$1(Ut,"ReadableStreamFulfillReadRequest");function ot(n){return n._reader._readRequests.length}u$1(ot,"ReadableStreamGetNumReadRequests");function Br(n){const o=n._reader;return !(o===void 0||!ye(o))}u$1(Br,"ReadableStreamHasDefaultReader");class me{static{u$1(this,"ReadableStreamDefaultReader");}constructor(o){if(le(o,1,"ReadableStreamDefaultReader"),xt(o,"First parameter"),Te(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Rr(this,o),this._readRequests=new Q;}get closed(){return ye(this)?this._closedPromise:T(it("closed"))}cancel(o=void 0){return ye(this)?this._ownerReadableStream===void 0?T(nt("cancel")):zt(this,o):T(it("cancel"))}read(){if(!ye(this))return T(it("read"));if(this._ownerReadableStream===void 0)return T(nt("read from"));let o,a;const p=z((_,S)=>{o=_,a=S;});return Ve(this,{_chunkSteps:u$1(_=>o({value:_,done:false}),"_chunkSteps"),_closeSteps:u$1(()=>o({value:void 0,done:true}),"_closeSteps"),_errorSteps:u$1(_=>a(_),"_errorSteps")}),p}releaseLock(){if(!ye(this))throw it("releaseLock");this._ownerReadableStream!==void 0&&Hn(this);}}Object.defineProperties(me.prototype,{cancel:{enumerable:true},read:{enumerable:true},releaseLock:{enumerable:true},closed:{enumerable:true}}),w(me.prototype.cancel,"cancel"),w(me.prototype.read,"read"),w(me.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:true});function ye(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?false:n instanceof me}u$1(ye,"IsReadableStreamDefaultReader");function Ve(n,o){const a=n._ownerReadableStream;a._disturbed=true,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[Ft](o);}u$1(Ve,"ReadableStreamDefaultReaderRead");function Hn(n){ue(n);const o=new TypeError("Reader was released");qr(n,o);}u$1(Hn,"ReadableStreamDefaultReaderRelease");function qr(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$1(qr,"ReadableStreamDefaultReaderErrorReadRequests");function it(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u$1(it,"defaultReaderBrandCheckException");const Vn=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype);class Wr{static{u$1(this,"ReadableStreamAsyncIteratorImpl");}constructor(o,a){this._ongoingPromise=void 0,this._isFinished=false,this._reader=o,this._preventCancel=a;}next(){const o=u$1(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?U(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u$1(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?U(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:true});const o=this._reader;let a,p;const g=z((S,C)=>{a=S,p=C;});return Ve(o,{_chunkSteps:u$1(S=>{this._ongoingPromise=void 0,se(()=>a({value:S,done:false}));},"_chunkSteps"),_closeSteps:u$1(()=>{this._ongoingPromise=void 0,this._isFinished=true,ue(o),a({value:void 0,done:true});},"_closeSteps"),_errorSteps:u$1(S=>{this._ongoingPromise=void 0,this._isFinished=true,ue(o),p(S);},"_errorSteps")}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:true});this._isFinished=true;const a=this._reader;if(!this._preventCancel){const p=zt(a,o);return ue(a),U(p,()=>({value:o,done:true}))}return ue(a),W({value:o,done:true})}}const kr={next(){return Or(this)?this._asyncIteratorImpl.next():T(Fr("next"))},return(n){return Or(this)?this._asyncIteratorImpl.return(n):T(Fr("return"))}};Object.setPrototypeOf(kr,Vn);function Qn(n,o){const a=Fe(n),p=new Wr(a,o),g=Object.create(kr);return g._asyncIteratorImpl=p,g}u$1(Qn,"AcquireReadableStreamAsyncIterator");function Or(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return  false;try{return n._asyncIteratorImpl instanceof Wr}catch{return  false}}u$1(Or,"IsReadableStreamAsyncIterator");function Fr(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u$1(Fr,"streamAsyncIteratorBrandCheckException");const Ir=Number.isNaN||function(n){return n!==n};var Nt,Ht,Vt;function Qe(n){return n.slice()}u$1(Qe,"CreateArrayFromList");function zr(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u$1(zr,"CopyDataBlockBytes");let fe=u$1(n=>(typeof n.transfer=="function"?fe=u$1(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?fe=u$1(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):fe=u$1(o=>o,"TransferArrayBuffer"),fe(n)),"TransferArrayBuffer"),ge=u$1(n=>(typeof n.detached=="boolean"?ge=u$1(o=>o.detached,"IsDetachedBuffer"):ge=u$1(o=>o.byteLength===0,"IsDetachedBuffer"),ge(n)),"IsDetachedBuffer");function jr(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return zr(g,0,n,o,p),g}u$1(jr,"ArrayBufferSlice");function at(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u$1(at,"GetMethod");function Yn(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:false}}u$1(Yn,"CreateAsyncFromSyncIterator");const Qt=(Vt=(Nt=Symbol.asyncIterator)!==null&&Nt!==void 0?Nt:(Ht=Symbol.for)===null||Ht===void 0?void 0:Ht.call(Symbol,"Symbol.asyncIterator"))!==null&&Vt!==void 0?Vt:"@@asyncIterator";function Lr(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=at(n,Qt),a===void 0){const _=at(n,Symbol.iterator),S=Lr(n,"sync",_);return Yn(S)}}else a=at(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=$(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:false}}u$1(Lr,"GetIterator");function Gn(n){const o=$(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u$1(Gn,"IteratorNext");function Zn(n){return !!n.done}u$1(Zn,"IteratorComplete");function Kn(n){return n.value}u$1(Kn,"IteratorValue");function Jn(n){return !(typeof n!="number"||Ir(n)||n<0)}u$1(Jn,"IsNonNegativeNumber");function Dr(n){const o=jr(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u$1(Dr,"CloneAsUint8Array");function Yt(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u$1(Yt,"DequeueValue");function Gt(n,o,a){if(!Jn(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u$1(Gt,"EnqueueValueWithSize");function Xn(n){return n._queue.peek().value}u$1(Xn,"PeekQueueValue");function _e(n){n._queue=new Q,n._queueTotalSize=0;}u$1(_e,"ResetQueue");function $r(n){return n===DataView}u$1($r,"isDataViewConstructor");function eo(n){return $r(n.constructor)}u$1(eo,"isDataView");function to(n){return $r(n)?1:n.BYTES_PER_ELEMENT}u$1(to,"arrayBufferViewElementSize");class Ee{static{u$1(this,"ReadableStreamBYOBRequest");}constructor(){throw new TypeError("Illegal constructor")}get view(){if(!Zt(this))throw tr("view");return this._view}respond(o){if(!Zt(this))throw tr("respond");if(le(o,1,"respond"),o=Mt(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(ge(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");ft(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!Zt(this))throw tr("respondWithNewView");if(le(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(ge(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");ct(this._associatedReadableByteStreamController,o);}}Object.defineProperties(Ee.prototype,{respond:{enumerable:true},respondWithNewView:{enumerable:true},view:{enumerable:true}}),w(Ee.prototype.respond,"respond"),w(Ee.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ee.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:true});class ce{static{u$1(this,"ReadableByteStreamController");}constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!ve(this))throw Ge("byobRequest");return er(this)}get desiredSize(){if(!ve(this))throw Ge("desiredSize");return Zr(this)}close(){if(!ve(this))throw Ge("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);Ye(this);}enqueue(o){if(!ve(this))throw Ge("enqueue");if(le(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);lt(this,o);}error(o=void 0){if(!ve(this))throw Ge("error");ee(this,o);}[Ot](o){Mr(this),_e(this);const a=this._cancelAlgorithm(o);return ut(this),a}[Ft](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Gr(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}Ar(a,o),Ae(this);}[It](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}}Object.defineProperties(ce.prototype,{close:{enumerable:true},enqueue:{enumerable:true},error:{enumerable:true},byobRequest:{enumerable:true},desiredSize:{enumerable:true}}),w(ce.prototype.close,"close"),w(ce.prototype.enqueue,"enqueue"),w(ce.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ce.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:true});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?false:n instanceof ce}u$1(ve,"IsReadableByteStreamController");function Zt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?false:n instanceof Ee}u$1(Zt,"IsReadableStreamBYOBRequest");function Ae(n){if(!ao(n))return;if(n._pulling){n._pullAgain=true;return}n._pulling=true;const a=n._pullAlgorithm();E(a,()=>(n._pulling=false,n._pullAgain&&(n._pullAgain=false,Ae(n)),null),p=>(ee(n,p),null));}u$1(Ae,"ReadableByteStreamControllerCallPullIfNeeded");function Mr(n){Jt(n),n._pendingPullIntos=new Q;}u$1(Mr,"ReadableByteStreamControllerClearPendingPullIntos");function Kt(n,o){let a=false;n._state==="closed"&&(a=true);const p=xr(o);o.readerType==="default"?Ut(n,p,a):ho(n,p,a);}u$1(Kt,"ReadableByteStreamControllerCommitPullIntoDescriptor");function xr(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u$1(xr,"ReadableByteStreamControllerConvertPullIntoDescriptor");function st(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u$1(st,"ReadableByteStreamControllerEnqueueChunkToQueue");function Ur(n,o,a,p){let g;try{g=jr(o,a,a+p);}catch(_){throw ee(n,_),_}st(n,g,0,p);}u$1(Ur,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function Nr(n,o){o.bytesFilled>0&&Ur(n,o.buffer,o.byteOffset,o.bytesFilled),Ie(n);}u$1(Nr,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function Hr(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=false;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=true);const q=n._queue;for(;g>0;){const P=q.peek(),k=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;zr(o.buffer,O,P.buffer,P.byteOffset,k),P.byteLength===k?q.shift():(P.byteOffset+=k,P.byteLength-=k),n._queueTotalSize-=k,Vr(n,k,o),g-=k;}return _}u$1(Hr,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Vr(n,o,a){a.bytesFilled+=o;}u$1(Vr,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function Qr(n){n._queueTotalSize===0&&n._closeRequested?(ut(n),tt(n._controlledReadableByteStream)):Ae(n);}u$1(Qr,"ReadableByteStreamControllerHandleQueueDrain");function Jt(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u$1(Jt,"ReadableByteStreamControllerInvalidateBYOBRequest");function Xt(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();Hr(n,o)&&(Ie(n),Kt(n._controlledReadableByteStream,o));}}u$1(Xt,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function ro(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Gr(n,a);}}u$1(ro,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function no(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=to(_),{byteOffset:C,byteLength:q}=o,P=a*S;let k;try{k=fe(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:k,bufferByteLength:k.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),Xr(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(Hr(n,O)){const j=xr(O);Qr(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");ee(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),Xr(g,p),Ae(n);}u$1(no,"ReadableByteStreamControllerPullInto");function oo(n,o){o.readerType==="none"&&Ie(n);const a=n._controlledReadableByteStream;if(rr(a))for(;en(a)>0;){const p=Ie(n);Kt(a,p);}}u$1(oo,"ReadableByteStreamControllerRespondInClosedState");function io(n,o,a){if(Vr(n,o,a),a.readerType==="none"){Nr(n,a),Xt(n);return}if(a.bytesFilled<a.minimumFill)return;Ie(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Ur(n,a.buffer,g-p,p);}a.bytesFilled-=p,Kt(n._controlledReadableByteStream,a),Xt(n);}u$1(io,"ReadableByteStreamControllerRespondInReadableState");function Yr(n,o){const a=n._pendingPullIntos.peek();Jt(n),n._controlledReadableByteStream._state==="closed"?oo(n,a):io(n,o,a),Ae(n);}u$1(Yr,"ReadableByteStreamControllerRespondInternal");function Ie(n){return n._pendingPullIntos.shift()}u$1(Ie,"ReadableByteStreamControllerShiftPendingPullInto");function ao(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?false:!!(Br(o)&&ot(o)>0||rr(o)&&en(o)>0||Zr(n)>0)}u$1(ao,"ReadableByteStreamControllerShouldCallPull");function ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$1(ut,"ReadableByteStreamControllerClearAlgorithms");function Ye(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=true;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw ee(n,p),p}}ut(n),tt(o);}}u$1(Ye,"ReadableByteStreamControllerClose");function lt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(ge(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=fe(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(ge(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");Jt(n),C.buffer=fe(C.buffer),C.readerType==="none"&&Nr(n,C);}if(Br(a))if(ro(n),ot(a)===0)st(n,S,g,_);else {n._pendingPullIntos.length>0&&Ie(n);const C=new Uint8Array(S,g,_);Ut(a,C,false);}else rr(a)?(st(n,S,g,_),Xt(n)):st(n,S,g,_);Ae(n);}u$1(lt,"ReadableByteStreamControllerEnqueue");function ee(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(Mr(n),_e(n),ut(n),Pn(a,o));}u$1(ee,"ReadableByteStreamControllerError");function Gr(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,Qr(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u$1(Gr,"ReadableByteStreamControllerFillReadRequestFromQueue");function er(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Ee.prototype);uo(p,n,a),n._byobRequest=p;}return n._byobRequest}u$1(er,"ReadableByteStreamControllerGetBYOBRequest");function Zr(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$1(Zr,"ReadableByteStreamControllerGetDesiredSize");function ft(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=fe(a.buffer),Yr(n,o);}u$1(ft,"ReadableByteStreamControllerRespond");function ct(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=fe(o.buffer),Yr(n,g);}u$1(ct,"ReadableByteStreamControllerRespondWithNewView");function Kr(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=false,o._pulling=false,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,_e(o),o._closeRequested=false,o._started=false,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(W(C),()=>(o._started=true,Ae(o),null),q=>(ee(o,q),null));}u$1(Kr,"SetUpReadableByteStreamController");function so(n,o,a){const p=Object.create(ce.prototype);let g,_,S;o.start!==void 0?g=u$1(()=>o.start(p),"startAlgorithm"):g=u$1(()=>{},"startAlgorithm"),o.pull!==void 0?_=u$1(()=>o.pull(p),"pullAlgorithm"):_=u$1(()=>W(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u$1(q=>o.cancel(q),"cancelAlgorithm"):S=u$1(()=>W(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");Kr(n,p,g,_,S,a,C);}u$1(so,"SetUpReadableByteStreamControllerFromUnderlyingSource");function uo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u$1(uo,"SetUpReadableStreamBYOBRequest");function tr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u$1(tr,"byobRequestBrandCheckException");function Ge(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u$1(Ge,"byteStreamControllerBrandCheckException");function lo(n,o){ie(n,o);const a=n?.mode;return {mode:a===void 0?void 0:fo(a,`${o} has member 'mode' that`)}}u$1(lo,"convertReaderOptions");function fo(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u$1(fo,"convertReadableStreamReaderMode");function co(n,o){var a;ie(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:Mt(p,`${o} has member 'min' that`)}}u$1(co,"convertByobReadOptions");function Jr(n){return new Se(n)}u$1(Jr,"AcquireReadableStreamBYOBReader");function Xr(n,o){n._reader._readIntoRequests.push(o);}u$1(Xr,"ReadableStreamAddReadIntoRequest");function ho(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u$1(ho,"ReadableStreamFulfillReadIntoRequest");function en(n){return n._reader._readIntoRequests.length}u$1(en,"ReadableStreamGetNumReadIntoRequests");function rr(n){const o=n._reader;return !(o===void 0||!Be(o))}u$1(rr,"ReadableStreamHasBYOBReader");class Se{static{u$1(this,"ReadableStreamBYOBReader");}constructor(o){if(le(o,1,"ReadableStreamBYOBReader"),xt(o,"First parameter"),Te(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!ve(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");Rr(this,o),this._readIntoRequests=new Q;}get closed(){return Be(this)?this._closedPromise:T(dt("closed"))}cancel(o=void 0){return Be(this)?this._ownerReadableStream===void 0?T(nt("cancel")):zt(this,o):T(dt("cancel"))}read(o,a={}){if(!Be(this))return T(dt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(ge(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=co(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(eo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(nt("read from"));let _,S;const C=z((P,k)=>{_=P,S=k;});return tn(this,o,g,{_chunkSteps:u$1(P=>_({value:P,done:false}),"_chunkSteps"),_closeSteps:u$1(P=>_({value:P,done:true}),"_closeSteps"),_errorSteps:u$1(P=>S(P),"_errorSteps")}),C}releaseLock(){if(!Be(this))throw dt("releaseLock");this._ownerReadableStream!==void 0&&po(this);}}Object.defineProperties(Se.prototype,{cancel:{enumerable:true},read:{enumerable:true},releaseLock:{enumerable:true},closed:{enumerable:true}}),w(Se.prototype.cancel,"cancel"),w(Se.prototype.read,"read"),w(Se.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Se.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:true});function Be(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?false:n instanceof Se}u$1(Be,"IsReadableStreamBYOBReader");function tn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=true,g._state==="errored"?p._errorSteps(g._storedError):no(g._readableStreamController,o,a,p);}u$1(tn,"ReadableStreamBYOBReaderRead");function po(n){ue(n);const o=new TypeError("Reader was released");rn(n,o);}u$1(po,"ReadableStreamBYOBReaderRelease");function rn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$1(rn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function dt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u$1(dt,"byobReaderBrandCheckException");function Ze(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(Ir(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u$1(Ze,"ExtractHighWaterMark");function ht(n){const{size:o}=n;return o||(()=>1)}u$1(ht,"ExtractSizeAlgorithm");function pt(n,o){ie(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:$t(a),size:p===void 0?void 0:bo(p,`${o} has member 'size' that`)}}u$1(pt,"convertQueuingStrategy");function bo(n,o){return X(n,o),a=>$t(n(a))}u$1(bo,"convertQueuingStrategySize");function mo(n,o){ie(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:yo(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:go(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:_o(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:So(S,n,`${o} has member 'write' that`),type:_}}u$1(mo,"convertUnderlyingSink");function yo(n,o,a){return X(n,a),p=>N(n,o,[p])}u$1(yo,"convertUnderlyingSinkAbortCallback");function go(n,o,a){return X(n,a),()=>N(n,o,[])}u$1(go,"convertUnderlyingSinkCloseCallback");function _o(n,o,a){return X(n,a),p=>$(n,o,[p])}u$1(_o,"convertUnderlyingSinkStartCallback");function So(n,o,a){return X(n,a),(p,g)=>N(n,o,[p,g])}u$1(So,"convertUnderlyingSinkWriteCallback");function nn(n,o){if(!ze(n))throw new TypeError(`${o} is not a WritableStream.`)}u$1(nn,"assertWritableStream");function wo(n){if(typeof n!="object"||n===null)return  false;try{return typeof n.aborted=="boolean"}catch{return  false}}u$1(wo,"isAbortSignal");const Ro=typeof AbortController=="function";function To(){if(Ro)return new AbortController}u$1(To,"createAbortController");class we{static{u$1(this,"WritableStream");}constructor(o={},a={}){o===void 0?o=null:Er(o,"First parameter");const p=pt(a,"Second parameter"),g=mo(o,"First parameter");if(an(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=ht(p),C=Ze(p,1);jo(this,g,C,S);}get locked(){if(!ze(this))throw _t("locked");return je(this)}abort(o=void 0){return ze(this)?je(this)?T(new TypeError("Cannot abort a stream that already has a writer")):bt(this,o):T(_t("abort"))}close(){return ze(this)?je(this)?T(new TypeError("Cannot close a stream that already has a writer")):ae(this)?T(new TypeError("Cannot close an already-closing stream")):sn(this):T(_t("close"))}getWriter(){if(!ze(this))throw _t("getWriter");return on(this)}}Object.defineProperties(we.prototype,{abort:{enumerable:true},close:{enumerable:true},getWriter:{enumerable:true},locked:{enumerable:true}}),w(we.prototype.abort,"abort"),w(we.prototype.close,"close"),w(we.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:true});function on(n){return new de(n)}u$1(on,"AcquireWritableStreamDefaultWriter");function Co(n,o,a,p,g=1,_=()=>1){const S=Object.create(we.prototype);an(S);const C=Object.create(Le.prototype);return hn(S,C,n,o,a,p,g,_),S}u$1(Co,"CreateWritableStream");function an(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=false;}u$1(an,"InitializeWritableStream");function ze(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?false:n instanceof we}u$1(ze,"IsWritableStream");function je(n){return n._writer!==void 0}u$1(je,"IsWritableStreamLocked");function bt(n,o){var a;if(n._state==="closed"||n._state==="errored")return W(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return W(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=false;p==="erroring"&&(g=true,o=void 0);const _=z((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||or(n,o),_}u$1(bt,"WritableStreamAbort");function sn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=z((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&dr(p),Lo(n._writableStreamController),a}u$1(sn,"WritableStreamClose");function Po(n){return z((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u$1(Po,"WritableStreamAddWriteRequest");function nr(n,o){if(n._state==="writable"){or(n,o);return}ir(n);}u$1(nr,"WritableStreamDealWithRejection");function or(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&ln(p,o),!qo(n)&&a._started&&ir(n);}u$1(or,"WritableStreamStartErroring");function ir(n){n._state="errored",n._writableStreamController[wr]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){mt(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),mt(n);return}const p=n._writableStreamController[rt](a._reason);E(p,()=>(a._resolve(),mt(n),null),g=>(a._reject(g),mt(n),null));}u$1(ir,"WritableStreamFinishErroring");function Eo(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u$1(Eo,"WritableStreamFinishInFlightWrite");function vo(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,nr(n,o);}u$1(vo,"WritableStreamFinishInFlightWriteWithError");function Ao(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&yn(a);}u$1(Ao,"WritableStreamFinishInFlightClose");function Bo(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),nr(n,o);}u$1(Bo,"WritableStreamFinishInFlightCloseWithError");function ae(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u$1(ae,"WritableStreamCloseQueuedOrInFlight");function qo(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u$1(qo,"WritableStreamHasOperationMarkedInFlight");function Wo(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u$1(Wo,"WritableStreamMarkCloseRequestInFlight");function ko(n){n._inFlightWriteRequest=n._writeRequests.shift();}u$1(ko,"WritableStreamMarkFirstWriteRequestInFlight");function mt(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&fr(o,n._storedError);}u$1(mt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function ar(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?Ho(a):dr(a)),n._backpressure=o;}u$1(ar,"WritableStreamUpdateBackpressure");class de{static{u$1(this,"WritableStreamDefaultWriter");}constructor(o){if(le(o,1,"WritableStreamDefaultWriter"),nn(o,"First parameter"),je(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!ae(o)&&o._backpressure?wt(this):gn(this),St(this);else if(a==="erroring")cr(this,o._storedError),St(this);else if(a==="closed")gn(this),Uo(this);else {const p=o._storedError;cr(this,p),mn(this,p);}}get closed(){return qe(this)?this._closedPromise:T(We("closed"))}get desiredSize(){if(!qe(this))throw We("desiredSize");if(this._ownerWritableStream===void 0)throw Je("desiredSize");return zo(this)}get ready(){return qe(this)?this._readyPromise:T(We("ready"))}abort(o=void 0){return qe(this)?this._ownerWritableStream===void 0?T(Je("abort")):Oo(this,o):T(We("abort"))}close(){if(!qe(this))return T(We("close"));const o=this._ownerWritableStream;return o===void 0?T(Je("close")):ae(o)?T(new TypeError("Cannot close an already-closing stream")):un(this)}releaseLock(){if(!qe(this))throw We("releaseLock");this._ownerWritableStream!==void 0&&fn(this);}write(o=void 0){return qe(this)?this._ownerWritableStream===void 0?T(Je("write to")):cn(this,o):T(We("write"))}}Object.defineProperties(de.prototype,{abort:{enumerable:true},close:{enumerable:true},releaseLock:{enumerable:true},write:{enumerable:true},closed:{enumerable:true},desiredSize:{enumerable:true},ready:{enumerable:true}}),w(de.prototype.abort,"abort"),w(de.prototype.close,"close"),w(de.prototype.releaseLock,"releaseLock"),w(de.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:true});function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?false:n instanceof de}u$1(qe,"IsWritableStreamDefaultWriter");function Oo(n,o){const a=n._ownerWritableStream;return bt(a,o)}u$1(Oo,"WritableStreamDefaultWriterAbort");function un(n){const o=n._ownerWritableStream;return sn(o)}u$1(un,"WritableStreamDefaultWriterClose");function Fo(n){const o=n._ownerWritableStream,a=o._state;return ae(o)||a==="closed"?W(void 0):a==="errored"?T(o._storedError):un(n)}u$1(Fo,"WritableStreamDefaultWriterCloseWithErrorPropagation");function Io(n,o){n._closedPromiseState==="pending"?fr(n,o):No(n,o);}u$1(Io,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function ln(n,o){n._readyPromiseState==="pending"?_n(n,o):Vo(n,o);}u$1(ln,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function zo(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:pn(o._writableStreamController)}u$1(zo,"WritableStreamDefaultWriterGetDesiredSize");function fn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");ln(n,a),Io(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u$1(fn,"WritableStreamDefaultWriterRelease");function cn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Do(p,o);if(a!==n._ownerWritableStream)return T(Je("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(ae(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=Po(a);return $o(p,o,g),S}u$1(cn,"WritableStreamDefaultWriterWrite");const dn={};class Le{static{u$1(this,"WritableStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!sr(this))throw lr("abortReason");return this._abortReason}get signal(){if(!sr(this))throw lr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!sr(this))throw lr("error");this._controlledWritableStream._state==="writable"&&bn(this,o);}[rt](o){const a=this._abortAlgorithm(o);return yt(this),a}[wr](){_e(this);}}Object.defineProperties(Le.prototype,{abortReason:{enumerable:true},signal:{enumerable:true},error:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Le.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:true});function sr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?false:n instanceof Le}u$1(sr,"IsWritableStreamDefaultController");function hn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,_e(o),o._abortReason=void 0,o._abortController=To(),o._started=false,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=ur(o);ar(n,q);const P=a(),k=W(P);E(k,()=>(o._started=true,gt(o),null),O=>(o._started=true,nr(n,O),null));}u$1(hn,"SetUpWritableStreamDefaultController");function jo(n,o,a,p){const g=Object.create(Le.prototype);let _,S,C,q;o.start!==void 0?_=u$1(()=>o.start(g),"startAlgorithm"):_=u$1(()=>{},"startAlgorithm"),o.write!==void 0?S=u$1(P=>o.write(P,g),"writeAlgorithm"):S=u$1(()=>W(void 0),"writeAlgorithm"),o.close!==void 0?C=u$1(()=>o.close(),"closeAlgorithm"):C=u$1(()=>W(void 0),"closeAlgorithm"),o.abort!==void 0?q=u$1(P=>o.abort(P),"abortAlgorithm"):q=u$1(()=>W(void 0),"abortAlgorithm"),hn(n,g,_,S,C,q,a,p);}u$1(jo,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function yt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$1(yt,"WritableStreamDefaultControllerClearAlgorithms");function Lo(n){Gt(n,dn,0),gt(n);}u$1(Lo,"WritableStreamDefaultControllerClose");function Do(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return Ke(n,a),1}}u$1(Do,"WritableStreamDefaultControllerGetChunkSize");function pn(n){return n._strategyHWM-n._queueTotalSize}u$1(pn,"WritableStreamDefaultControllerGetDesiredSize");function $o(n,o,a){try{Gt(n,o,a);}catch(g){Ke(n,g);return}const p=n._controlledWritableStream;if(!ae(p)&&p._state==="writable"){const g=ur(n);ar(p,g);}gt(n);}u$1($o,"WritableStreamDefaultControllerWrite");function gt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){ir(o);return}if(n._queue.length===0)return;const p=Xn(n);p===dn?Mo(n):xo(n,p);}u$1(gt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function Ke(n,o){n._controlledWritableStream._state==="writable"&&bn(n,o);}u$1(Ke,"WritableStreamDefaultControllerErrorIfNeeded");function Mo(n){const o=n._controlledWritableStream;Wo(o),Yt(n);const a=n._closeAlgorithm();yt(n),E(a,()=>(Ao(o),null),p=>(Bo(o,p),null));}u$1(Mo,"WritableStreamDefaultControllerProcessClose");function xo(n,o){const a=n._controlledWritableStream;ko(a);const p=n._writeAlgorithm(o);E(p,()=>{Eo(a);const g=a._state;if(Yt(n),!ae(a)&&g==="writable"){const _=ur(n);ar(a,_);}return gt(n),null},g=>(a._state==="writable"&&yt(n),vo(a,g),null));}u$1(xo,"WritableStreamDefaultControllerProcessWrite");function ur(n){return pn(n)<=0}u$1(ur,"WritableStreamDefaultControllerGetBackpressure");function bn(n,o){const a=n._controlledWritableStream;yt(n),or(a,o);}u$1(bn,"WritableStreamDefaultControllerError");function _t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u$1(_t,"streamBrandCheckException$2");function lr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u$1(lr,"defaultControllerBrandCheckException$2");function We(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u$1(We,"defaultWriterBrandCheckException");function Je(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u$1(Je,"defaultWriterLockException");function St(n){n._closedPromise=z((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u$1(St,"defaultWriterClosedPromiseInitialize");function mn(n,o){St(n),fr(n,o);}u$1(mn,"defaultWriterClosedPromiseInitializeAsRejected");function Uo(n){St(n),yn(n);}u$1(Uo,"defaultWriterClosedPromiseInitializeAsResolved");function fr(n,o){n._closedPromise_reject!==void 0&&(K(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u$1(fr,"defaultWriterClosedPromiseReject");function No(n,o){mn(n,o);}u$1(No,"defaultWriterClosedPromiseResetToRejected");function yn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u$1(yn,"defaultWriterClosedPromiseResolve");function wt(n){n._readyPromise=z((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u$1(wt,"defaultWriterReadyPromiseInitialize");function cr(n,o){wt(n),_n(n,o);}u$1(cr,"defaultWriterReadyPromiseInitializeAsRejected");function gn(n){wt(n),dr(n);}u$1(gn,"defaultWriterReadyPromiseInitializeAsResolved");function _n(n,o){n._readyPromise_reject!==void 0&&(K(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u$1(_n,"defaultWriterReadyPromiseReject");function Ho(n){wt(n);}u$1(Ho,"defaultWriterReadyPromiseReset");function Vo(n,o){cr(n,o);}u$1(Vo,"defaultWriterReadyPromiseResetToRejected");function dr(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u$1(dr,"defaultWriterReadyPromiseResolve");function Qo(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u$1(Qo,"getGlobals");const hr=Qo();function Yo(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return  false;try{return new n,!0}catch{return  false}}u$1(Yo,"isDOMExceptionConstructor");function Go(){const n=hr?.DOMException;return Yo(n)?n:void 0}u$1(Go,"getFromGlobal");function Zo(){const n=u$1(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:true,configurable:true}),n}u$1(Zo,"createPolyfill");const Ko=Go()||Zo();function Sn(n,o,a,p,g,_){const S=Fe(n),C=on(o);n._disturbed=true;let q=false,P=W(void 0);return z((k,O)=>{let j;if(_!==void 0){if(j=u$1(()=>{const v=_.reason!==void 0?_.reason:new Ko("Aborted","AbortError"),I=[];p||I.push(()=>o._state==="writable"?bt(o,v):W(void 0)),g||I.push(()=>n._state==="readable"?ne(n,v):W(void 0)),G(()=>Promise.all(I.map(L=>L())),true,v);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function oe(){return z((v,I)=>{function L(J){J?v():D(xe(),L,I);}u$1(L,"next"),L(false);})}u$1(oe,"pipeLoop");function xe(){return q?W(true):D(C._readyPromise,()=>z((v,I)=>{Ve(S,{_chunkSteps:u$1(L=>{P=D(cn(C,L),void 0,y),v(false);},"_chunkSteps"),_closeSteps:u$1(()=>v(true),"_closeSteps"),_errorSteps:I});}))}if(u$1(xe,"pipeStep"),pe(n,S._closedPromise,v=>(p?te(true,v):G(()=>bt(o,v),true,v),null)),pe(o,C._closedPromise,v=>(g?te(true,v):G(()=>ne(n,v),true,v),null)),Y(n,S._closedPromise,()=>(a?te():G(()=>Fo(C)),null)),ae(o)||o._state==="closed"){const v=new TypeError("the destination writable stream closed before all data could be piped to it");g?te(true,v):G(()=>ne(n,v),true,v);}K(oe());function Pe(){const v=P;return D(P,()=>v!==P?Pe():void 0)}u$1(Pe,"waitForWritesToFinish");function pe(v,I,L){v._state==="errored"?L(v._storedError):M(I,L);}u$1(pe,"isOrBecomesErrored");function Y(v,I,L){v._state==="closed"?L():Z(I,L);}u$1(Y,"isOrBecomesClosed");function G(v,I,L){if(q)return;q=true,o._state==="writable"&&!ae(o)?Z(Pe(),J):J();function J(){return E(v(),()=>be(I,L),Ue=>be(true,Ue)),null}u$1(J,"doTheRest");}u$1(G,"shutdownWithAction");function te(v,I){q||(q=true,o._state==="writable"&&!ae(o)?Z(Pe(),()=>be(v,I)):be(v,I));}u$1(te,"shutdown");function be(v,I){return fn(C),ue(S),_!==void 0&&_.removeEventListener("abort",j),v?O(I):k(void 0),null}u$1(be,"finalize");})}u$1(Sn,"ReadableStreamPipeTo");class he{static{u$1(this,"ReadableStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Rt(this))throw Ct("desiredSize");return pr(this)}close(){if(!Rt(this))throw Ct("close");if(!$e(this))throw new TypeError("The stream is not in a state that permits close");ke(this);}enqueue(o=void 0){if(!Rt(this))throw Ct("enqueue");if(!$e(this))throw new TypeError("The stream is not in a state that permits enqueue");return De(this,o)}error(o=void 0){if(!Rt(this))throw Ct("error");re(this,o);}[Ot](o){_e(this);const a=this._cancelAlgorithm(o);return Tt(this),a}[Ft](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=Yt(this);this._closeRequested&&this._queue.length===0?(Tt(this),tt(a)):Xe(this),o._chunkSteps(p);}else Ar(a,o),Xe(this);}[It](){}}Object.defineProperties(he.prototype,{close:{enumerable:true},enqueue:{enumerable:true},error:{enumerable:true},desiredSize:{enumerable:true}}),w(he.prototype.close,"close"),w(he.prototype.enqueue,"enqueue"),w(he.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:true});function Rt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?false:n instanceof he}u$1(Rt,"IsReadableStreamDefaultController");function Xe(n){if(!wn(n))return;if(n._pulling){n._pullAgain=true;return}n._pulling=true;const a=n._pullAlgorithm();E(a,()=>(n._pulling=false,n._pullAgain&&(n._pullAgain=false,Xe(n)),null),p=>(re(n,p),null));}u$1(Xe,"ReadableStreamDefaultControllerCallPullIfNeeded");function wn(n){const o=n._controlledReadableStream;return !$e(n)||!n._started?false:!!(Te(o)&&ot(o)>0||pr(n)>0)}u$1(wn,"ReadableStreamDefaultControllerShouldCallPull");function Tt(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$1(Tt,"ReadableStreamDefaultControllerClearAlgorithms");function ke(n){if(!$e(n))return;const o=n._controlledReadableStream;n._closeRequested=true,n._queue.length===0&&(Tt(n),tt(o));}u$1(ke,"ReadableStreamDefaultControllerClose");function De(n,o){if(!$e(n))return;const a=n._controlledReadableStream;if(Te(a)&&ot(a)>0)Ut(a,o,false);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw re(n,g),g}try{Gt(n,o,p);}catch(g){throw re(n,g),g}}Xe(n);}u$1(De,"ReadableStreamDefaultControllerEnqueue");function re(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(_e(n),Tt(n),Pn(a,o));}u$1(re,"ReadableStreamDefaultControllerError");function pr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$1(pr,"ReadableStreamDefaultControllerGetDesiredSize");function Jo(n){return !wn(n)}u$1(Jo,"ReadableStreamDefaultControllerHasBackpressure");function $e(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u$1($e,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function Rn(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,_e(o),o._started=false,o._closeRequested=false,o._pullAgain=false,o._pulling=false,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(W(C),()=>(o._started=true,Xe(o),null),q=>(re(o,q),null));}u$1(Rn,"SetUpReadableStreamDefaultController");function Xo(n,o,a,p){const g=Object.create(he.prototype);let _,S,C;o.start!==void 0?_=u$1(()=>o.start(g),"startAlgorithm"):_=u$1(()=>{},"startAlgorithm"),o.pull!==void 0?S=u$1(()=>o.pull(g),"pullAlgorithm"):S=u$1(()=>W(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u$1(q=>o.cancel(q),"cancelAlgorithm"):C=u$1(()=>W(void 0),"cancelAlgorithm"),Rn(n,g,_,S,C,a,p);}u$1(Xo,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Ct(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u$1(Ct,"defaultControllerBrandCheckException$1");function ei(n,o){return ve(n._readableStreamController)?ri(n):ti(n)}u$1(ei,"ReadableStreamTee");function ti(n,o){const a=Fe(n);let p=false,g=false,_=false,S=false,C,q,P,k,O;const j=z(Y=>{O=Y;});function oe(){return p?(g=true,W(void 0)):(p=true,Ve(a,{_chunkSteps:u$1(G=>{se(()=>{g=false;const te=G,be=G;_||De(P._readableStreamController,te),S||De(k._readableStreamController,be),p=false,g&&oe();});},"_chunkSteps"),_closeSteps:u$1(()=>{p=false,_||ke(P._readableStreamController),S||ke(k._readableStreamController),(!_||!S)&&O(void 0);},"_closeSteps"),_errorSteps:u$1(()=>{p=false;},"_errorSteps")}),W(void 0))}u$1(oe,"pullAlgorithm");function xe(Y){if(_=true,C=Y,S){const G=Qe([C,q]),te=ne(n,G);O(te);}return j}u$1(xe,"cancel1Algorithm");function Pe(Y){if(S=true,q=Y,_){const G=Qe([C,q]),te=ne(n,G);O(te);}return j}u$1(Pe,"cancel2Algorithm");function pe(){}return u$1(pe,"startAlgorithm"),P=et(pe,oe,xe),k=et(pe,oe,Pe),M(a._closedPromise,Y=>(re(P._readableStreamController,Y),re(k._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,k]}u$1(ti,"ReadableStreamDefaultTee");function ri(n){let o=Fe(n),a=false,p=false,g=false,_=false,S=false,C,q,P,k,O;const j=z(v=>{O=v;});function oe(v){M(v._closedPromise,I=>(v!==o||(ee(P._readableStreamController,I),ee(k._readableStreamController,I),(!_||!S)&&O(void 0)),null));}u$1(oe,"forwardReaderError");function xe(){Be(o)&&(ue(o),o=Fe(n),oe(o)),Ve(o,{_chunkSteps:u$1(I=>{se(()=>{p=false,g=false;const L=I;let J=I;if(!_&&!S)try{J=Dr(I);}catch(Ue){ee(P._readableStreamController,Ue),ee(k._readableStreamController,Ue),O(ne(n,Ue));return}_||lt(P._readableStreamController,L),S||lt(k._readableStreamController,J),a=false,p?pe():g&&Y();});},"_chunkSteps"),_closeSteps:u$1(()=>{a=false,_||Ye(P._readableStreamController),S||Ye(k._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&ft(P._readableStreamController,0),k._readableStreamController._pendingPullIntos.length>0&&ft(k._readableStreamController,0),(!_||!S)&&O(void 0);},"_closeSteps"),_errorSteps:u$1(()=>{a=false;},"_errorSteps")});}u$1(xe,"pullWithDefaultReader");function Pe(v,I){ye(o)&&(ue(o),o=Jr(n),oe(o));const L=I?k:P,J=I?P:k;tn(o,v,1,{_chunkSteps:u$1(Ne=>{se(()=>{p=false,g=false;const He=I?S:_;if(I?_:S)He||ct(L._readableStreamController,Ne);else {let Ln;try{Ln=Dr(Ne);}catch(_r){ee(L._readableStreamController,_r),ee(J._readableStreamController,_r),O(ne(n,_r));return}He||ct(L._readableStreamController,Ne),lt(J._readableStreamController,Ln);}a=false,p?pe():g&&Y();});},"_chunkSteps"),_closeSteps:u$1(Ne=>{a=false;const He=I?S:_,kt=I?_:S;He||Ye(L._readableStreamController),kt||Ye(J._readableStreamController),Ne!==void 0&&(He||ct(L._readableStreamController,Ne),!kt&&J._readableStreamController._pendingPullIntos.length>0&&ft(J._readableStreamController,0)),(!He||!kt)&&O(void 0);},"_closeSteps"),_errorSteps:u$1(()=>{a=false;},"_errorSteps")});}u$1(Pe,"pullWithBYOBReader");function pe(){if(a)return p=true,W(void 0);a=true;const v=er(P._readableStreamController);return v===null?xe():Pe(v._view,false),W(void 0)}u$1(pe,"pull1Algorithm");function Y(){if(a)return g=true,W(void 0);a=true;const v=er(k._readableStreamController);return v===null?xe():Pe(v._view,true),W(void 0)}u$1(Y,"pull2Algorithm");function G(v){if(_=true,C=v,S){const I=Qe([C,q]),L=ne(n,I);O(L);}return j}u$1(G,"cancel1Algorithm");function te(v){if(S=true,q=v,_){const I=Qe([C,q]),L=ne(n,I);O(L);}return j}u$1(te,"cancel2Algorithm");function be(){}return u$1(be,"startAlgorithm"),P=Cn(be,pe,G),k=Cn(be,Y,te),oe(o),[P,k]}u$1(ri,"ReadableByteStreamTee");function ni(n){return b(n)&&typeof n.getReader<"u"}u$1(ni,"isReadableStreamLike");function oi(n){return ni(n)?ai(n.getReader()):ii(n)}u$1(oi,"ReadableStreamFrom");function ii(n){let o;const a=Lr(n,"async"),p=y;function g(){let S;try{S=Gn(a);}catch(q){return T(q)}const C=W(S);return U(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(Zn(q))ke(o._readableStreamController);else {const k=Kn(q);De(o._readableStreamController,k);}})}u$1(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=at(C,"return");}catch(O){return T(O)}if(q===void 0)return W(void 0);let P;try{P=$(q,C,[S]);}catch(O){return T(O)}const k=W(P);return U(k,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u$1(_,"cancelAlgorithm"),o=et(p,g,_,0),o}u$1(ii,"ReadableStreamFromIterable");function ai(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return U(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)ke(o._readableStreamController);else {const C=S.value;De(o._readableStreamController,C);}})}u$1(p,"pullAlgorithm");function g(_){try{return W(n.cancel(_))}catch(S){return T(S)}}return u$1(g,"cancelAlgorithm"),o=et(a,p,g,0),o}u$1(ai,"ReadableStreamFromDefaultReader");function si(n,o){ie(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:Mt(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:ui(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:li(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:fi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:ci(C,`${o} has member 'type' that`)}}u$1(si,"convertUnderlyingDefaultOrByteSource");function ui(n,o,a){return X(n,a),p=>N(n,o,[p])}u$1(ui,"convertUnderlyingSourceCancelCallback");function li(n,o,a){return X(n,a),p=>N(n,o,[p])}u$1(li,"convertUnderlyingSourcePullCallback");function fi(n,o,a){return X(n,a),p=>$(n,o,[p])}u$1(fi,"convertUnderlyingSourceStartCallback");function ci(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u$1(ci,"convertReadableStreamType");function di(n,o){return ie(n,o),{preventCancel:!!n?.preventCancel}}u$1(di,"convertIteratorOptions");function Tn(n,o){ie(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&hi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u$1(Tn,"convertPipeOptions");function hi(n,o){if(!wo(n))throw new TypeError(`${o} is not an AbortSignal.`)}u$1(hi,"assertAbortSignal");function pi(n,o){ie(n,o);const a=n?.readable;Dt(a,"readable","ReadableWritablePair"),xt(a,`${o} has member 'readable' that`);const p=n?.writable;return Dt(p,"writable","ReadableWritablePair"),nn(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u$1(pi,"convertReadableWritablePair");class H{static{u$1(this,"ReadableStream");}constructor(o={},a={}){o===void 0?o=null:Er(o,"First parameter");const p=pt(a,"Second parameter"),g=si(o,"First parameter");if(br(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=Ze(p,0);so(this,g,_);}else {const _=ht(p),S=Ze(p,1);Xo(this,g,S,_);}}get locked(){if(!Re(this))throw Oe("locked");return Te(this)}cancel(o=void 0){return Re(this)?Te(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):ne(this,o):T(Oe("cancel"))}getReader(o=void 0){if(!Re(this))throw Oe("getReader");return lo(o,"First parameter").mode===void 0?Fe(this):Jr(this)}pipeThrough(o,a={}){if(!Re(this))throw Oe("pipeThrough");le(o,1,"pipeThrough");const p=pi(o,"First parameter"),g=Tn(a,"Second parameter");if(Te(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(je(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=Sn(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return K(_),p.readable}pipeTo(o,a={}){if(!Re(this))return T(Oe("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!ze(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=Tn(a,"Second parameter");}catch(g){return T(g)}return Te(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):je(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Sn(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!Re(this))throw Oe("tee");const o=ei(this);return Qe(o)}values(o=void 0){if(!Re(this))throw Oe("values");const a=di(o,"First parameter");return Qn(this,a.preventCancel)}[Qt](o){return this.values(o)}static from(o){return oi(o)}}Object.defineProperties(H,{from:{enumerable:true}}),Object.defineProperties(H.prototype,{cancel:{enumerable:true},getReader:{enumerable:true},pipeThrough:{enumerable:true},pipeTo:{enumerable:true},tee:{enumerable:true},values:{enumerable:true},locked:{enumerable:true}}),w(H.from,"from"),w(H.prototype.cancel,"cancel"),w(H.prototype.getReader,"getReader"),w(H.prototype.pipeThrough,"pipeThrough"),w(H.prototype.pipeTo,"pipeTo"),w(H.prototype.tee,"tee"),w(H.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(H.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:true}),Object.defineProperty(H.prototype,Qt,{value:H.prototype.values,writable:true,configurable:true});function et(n,o,a,p=1,g=()=>1){const _=Object.create(H.prototype);br(_);const S=Object.create(he.prototype);return Rn(_,S,n,o,a,p,g),_}u$1(et,"CreateReadableStream");function Cn(n,o,a){const p=Object.create(H.prototype);br(p);const g=Object.create(ce.prototype);return Kr(p,g,n,o,a,0,void 0),p}u$1(Cn,"CreateReadableByteStream");function br(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=false;}u$1(br,"InitializeReadableStream");function Re(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?false:n instanceof H}u$1(Re,"IsReadableStream");function Te(n){return n._reader!==void 0}u$1(Te,"IsReadableStreamLocked");function ne(n,o){if(n._disturbed=true,n._state==="closed")return W(void 0);if(n._state==="errored")return T(n._storedError);tt(n);const a=n._reader;if(a!==void 0&&Be(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[Ot](o);return U(p,y)}u$1(ne,"ReadableStreamCancel");function tt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(Cr(o),ye(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u$1(tt,"ReadableStreamClose");function Pn(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(Lt(a,o),ye(a)?qr(a,o):rn(a,o));}u$1(Pn,"ReadableStreamError");function Oe(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u$1(Oe,"streamBrandCheckException$1");function En(n,o){ie(n,o);const a=n?.highWaterMark;return Dt(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:$t(a)}}u$1(En,"convertQueuingStrategyInit");const vn=u$1(n=>n.byteLength,"byteLengthSizeFunction");w(vn,"size");class Pt{static{u$1(this,"ByteLengthQueuingStrategy");}constructor(o){le(o,1,"ByteLengthQueuingStrategy"),o=En(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!Bn(this))throw An("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!Bn(this))throw An("size");return vn}}Object.defineProperties(Pt.prototype,{highWaterMark:{enumerable:true},size:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Pt.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:true});function An(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u$1(An,"byteLengthBrandCheckException");function Bn(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?false:n instanceof Pt}u$1(Bn,"IsByteLengthQueuingStrategy");const qn=u$1(()=>1,"countSizeFunction");w(qn,"size");class Et{static{u$1(this,"CountQueuingStrategy");}constructor(o){le(o,1,"CountQueuingStrategy"),o=En(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!kn(this))throw Wn("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!kn(this))throw Wn("size");return qn}}Object.defineProperties(Et.prototype,{highWaterMark:{enumerable:true},size:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Et.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:true});function Wn(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u$1(Wn,"countBrandCheckException");function kn(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?false:n instanceof Et}u$1(kn,"IsCountQueuingStrategy");function bi(n,o){ie(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:_i(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:mi(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:yi(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:gi(S,n,`${o} has member 'transform' that`),writableType:C}}u$1(bi,"convertTransformer");function mi(n,o,a){return X(n,a),p=>N(n,o,[p])}u$1(mi,"convertTransformerFlushCallback");function yi(n,o,a){return X(n,a),p=>$(n,o,[p])}u$1(yi,"convertTransformerStartCallback");function gi(n,o,a){return X(n,a),(p,g)=>N(n,o,[p,g])}u$1(gi,"convertTransformerTransformCallback");function _i(n,o,a){return X(n,a),p=>N(n,o,[p])}u$1(_i,"convertTransformerCancelCallback");class vt{static{u$1(this,"TransformStream");}constructor(o={},a={},p={}){o===void 0&&(o=null);const g=pt(a,"Second parameter"),_=pt(p,"Third parameter"),S=bi(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=Ze(_,0),q=ht(_),P=Ze(g,1),k=ht(g);let O;const j=z(oe=>{O=oe;});Si(this,j,P,k,C,q),Ri(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!On(this))throw jn("readable");return this._readable}get writable(){if(!On(this))throw jn("writable");return this._writable}}Object.defineProperties(vt.prototype,{readable:{enumerable:true},writable:{enumerable:true}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(vt.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:true});function Si(n,o,a,p,g,_){function S(){return o}u$1(S,"startAlgorithm");function C(j){return Pi(n,j)}u$1(C,"writeAlgorithm");function q(j){return Ei(n,j)}u$1(q,"abortAlgorithm");function P(){return vi(n)}u$1(P,"closeAlgorithm"),n._writable=Co(S,C,P,q,a,p);function k(){return Ai(n)}u$1(k,"pullAlgorithm");function O(j){return Bi(n,j)}u$1(O,"cancelAlgorithm"),n._readable=et(S,k,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,At(n,true),n._transformStreamController=void 0;}u$1(Si,"InitializeTransformStream");function On(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?false:n instanceof vt}u$1(On,"IsTransformStream");function Fn(n,o){re(n._readable._readableStreamController,o),mr(n,o);}u$1(Fn,"TransformStreamError");function mr(n,o){qt(n._transformStreamController),Ke(n._writable._writableStreamController,o),yr(n);}u$1(mr,"TransformStreamErrorWritableAndUnblockWrite");function yr(n){n._backpressure&&At(n,false);}u$1(yr,"TransformStreamUnblockWrite");function At(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=z(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u$1(At,"TransformStreamSetBackpressure");class Ce{static{u$1(this,"TransformStreamDefaultController");}constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Bt(this))throw Wt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return pr(o)}enqueue(o=void 0){if(!Bt(this))throw Wt("enqueue");In(this,o);}error(o=void 0){if(!Bt(this))throw Wt("error");Ti(this,o);}terminate(){if(!Bt(this))throw Wt("terminate");Ci(this);}}Object.defineProperties(Ce.prototype,{enqueue:{enumerable:true},error:{enumerable:true},terminate:{enumerable:true},desiredSize:{enumerable:true}}),w(Ce.prototype.enqueue,"enqueue"),w(Ce.prototype.error,"error"),w(Ce.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ce.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:true});function Bt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?false:n instanceof Ce}u$1(Bt,"IsTransformStreamDefaultController");function wi(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u$1(wi,"SetUpTransformStreamDefaultController");function Ri(n,o){const a=Object.create(Ce.prototype);let p,g,_;o.transform!==void 0?p=u$1(S=>o.transform(S,a),"transformAlgorithm"):p=u$1(S=>{try{return In(a,S),W(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u$1(()=>o.flush(a),"flushAlgorithm"):g=u$1(()=>W(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u$1(S=>o.cancel(S),"cancelAlgorithm"):_=u$1(()=>W(void 0),"cancelAlgorithm"),wi(n,a,p,g,_);}u$1(Ri,"SetUpTransformStreamDefaultControllerFromTransformer");function qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$1(qt,"TransformStreamDefaultControllerClearAlgorithms");function In(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!$e(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{De(p,o);}catch(_){throw mr(a,_),a._readable._storedError}Jo(p)!==a._backpressure&&At(a,true);}u$1(In,"TransformStreamDefaultControllerEnqueue");function Ti(n,o){Fn(n._controlledTransformStream,o);}u$1(Ti,"TransformStreamDefaultControllerError");function zn(n,o){const a=n._transformAlgorithm(o);return U(a,void 0,p=>{throw Fn(n._controlledTransformStream,p),p})}u$1(zn,"TransformStreamDefaultControllerPerformTransform");function Ci(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;ke(a);const p=new TypeError("TransformStream terminated");mr(o,p);}u$1(Ci,"TransformStreamDefaultControllerTerminate");function Pi(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return U(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return zn(a,o)})}return zn(a,o)}u$1(Pi,"TransformStreamDefaultSinkWriteAlgorithm");function Ei(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=z((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return qt(a),E(g,()=>(p._state==="errored"?Me(a,p._storedError):(re(p._readableStreamController,o),gr(a)),null),_=>(re(p._readableStreamController,_),Me(a,_),null)),a._finishPromise}u$1(Ei,"TransformStreamDefaultSinkAbortAlgorithm");function vi(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=z((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return qt(o),E(p,()=>(a._state==="errored"?Me(o,a._storedError):(ke(a._readableStreamController),gr(o)),null),g=>(re(a._readableStreamController,g),Me(o,g),null)),o._finishPromise}u$1(vi,"TransformStreamDefaultSinkCloseAlgorithm");function Ai(n){return At(n,false),n._backpressureChangePromise}u$1(Ai,"TransformStreamDefaultSourcePullAlgorithm");function Bi(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=z((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return qt(a),E(g,()=>(p._state==="errored"?Me(a,p._storedError):(Ke(p._writableStreamController,o),yr(n),gr(a)),null),_=>(Ke(p._writableStreamController,_),yr(n),Me(a,_),null)),a._finishPromise}u$1(Bi,"TransformStreamDefaultSourceCancelAlgorithm");function Wt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u$1(Wt,"defaultControllerBrandCheckException");function gr(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$1(gr,"defaultControllerFinishPromiseResolve");function Me(n,o){n._finishPromise_reject!==void 0&&(K(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$1(Me,"defaultControllerFinishPromiseReject");function jn(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u$1(jn,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Pt,d.CountQueuingStrategy=Et,d.ReadableByteStreamController=ce,d.ReadableStream=H,d.ReadableStreamBYOBReader=Se,d.ReadableStreamBYOBRequest=Ee,d.ReadableStreamDefaultController=he,d.ReadableStreamDefaultReader=me,d.TransformStream=vt,d.TransformStreamDefaultController=Ce,d.WritableStream=we,d.WritableStreamDefaultController=Le,d.WritableStreamDefaultWriter=de;});}(ponyfill_es2018$1,ponyfill_es2018$1.exports)),ponyfill_es2018$1.exports}u$1(requirePonyfill_es2018,"requirePonyfill_es2018");var hasRequiredStreams;function requireStreams(){if(hasRequiredStreams)return streams;hasRequiredStreams=1;const c=65536;if(!globalThis.ReadableStream)try{const l=require("node:process"),{emitWarning:d}=l;try{l.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),l.emitWarning=d;}catch(y){throw l.emitWarning=d,y}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:l}=require("buffer");l&&!l.prototype.stream&&(l.prototype.stream=u$1(function(y){let b=0;const R=this;return new ReadableStream({type:"bytes",async pull(w){const F=await R.slice(b,Math.min(R.size,b+c)).arrayBuffer();b+=F.byteLength,w.enqueue(new Uint8Array(F)),b===R.size&&w.close();}})},"name"));}catch{}return streams}u$1(requireStreams,"requireStreams"),requireStreams();/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=true){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u$1(toIterator,"toIterator");const _Blob=class Sr{static{u$1(this,"Blob");}#e=[];#t="";#r=0;#n="transparent";constructor(l=[],d={}){if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Sr?w=R:w=y.encode(`${R}`),this.#r+=ArrayBuffer.isView(w)?w.byteLength:w.size,this.#e.push(w);}this.#n=`${d.endings===void 0?"transparent":d.endings}`;const b=d.type===void 0?"":String(d.type);this.#t=/^[\x20-\x7E]*$/.test(b)?b:"";}get size(){return this.#r}get type(){return this.#t}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(this.#e,false))d+=l.decode(y,{stream:true});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(this.#e,false))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(this.#e,true);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const A=Math.max(w-R,0),F=this.#e,B=[];let z=0;for(const T of F){if(z>=A)break;const D=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&D<=R)R-=D,w-=D;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min(D,w)),z+=E.byteLength):(E=T.slice(R,Math.min(D,w)),z+=E.size),w-=D,B.push(E),R=0;}}const W=new Sr([],{type:String(y).toLowerCase()});return W.#r=A,W.#e=B,W}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}};Object.defineProperties(_Blob.prototype,{size:{enumerable:true},type:{enumerable:true},slice:{enumerable:true}});const Blob=_Blob,_File=class extends Blob{static{u$1(this,"File");}#e=0;#t="";constructor(l,d,y={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(l,y),y===null&&(y={});const b=y.lastModified===void 0?Date.now():Number(y.lastModified);Number.isNaN(b)||(this.#e=b),this.#t=String(d);}get name(){return this.#t}get lastModified(){return this.#e}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](l){return !!l&&l instanceof Blob&&/^(File)$/.test(l[Symbol.toStringTag])}},File=_File;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$2,hasInstance:h$1}=Symbol,r=Math.random,m$1="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$1=u$1((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File([l],d,l):l]:[c,l+""]),"f"),e$1=u$1((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$1=u$1((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=class FormData{static{u$1(this,"FormData");}#e=[];constructor(...l){if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$2](){return this.entries()}static[h$1](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m$1.some(d=>typeof l[d]!="function")}append(...l){x$1("append",arguments,2),this.#e.push(f$1(...l));}delete(l){x$1("delete",arguments,1),l+="",this.#e=this.#e.filter(([d])=>d!==l);}get(l){x$1("get",arguments,1),l+="";for(var d=this.#e,y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$1("getAll",arguments,1),d=[],l+="",this.#e.forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$1("has",arguments,1),l+="",this.#e.some(d=>d[0]===l)}forEach(l,d){x$1("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$1("set",arguments,2);var d=[],y=true;l=f$1(...l),this.#e.forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),this.#e=d;}*entries(){yield*this.#e;}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}};function formDataToBlob(c,l=Blob){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1(w)+`"; filename="${e$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u$1(formDataToBlob,"formDataToBlob");class FetchBaseError extends Error{static{u$1(this,"FetchBaseError");}constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}}let FetchError$1 = class FetchError extends FetchBaseError{static{u$1(this,"FetchError");}constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};const NAME=Symbol.toStringTag,isURLSearchParameters=u$1(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u$1(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u$1(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u$1((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u$1((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0$1.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals");class Body{static{u$1(this,"Body");}constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$0.Buffer.from(l.toString()):isBlob(l)||require$$0.Buffer.isBuffer(l)||(require$$0$1.types.isAnyArrayBuffer(l)?l=require$$0.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$0.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$0.Buffer.from(String(l))));let b=l;require$$0.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:false,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('../_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new Blob([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}}Body.prototype.buffer=require$$0$1.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:true},bodyUsed:{enumerable:true},arrayBuffer:{enumerable:true},blob:{enumerable:true},json:{enumerable:true},text:{enumerable:true},data:{get:require$$0$1.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=true,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$0.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===true||l._readableState.ended===true)try{return d.every(b=>typeof b=="string")?require$$0.Buffer.from(d.join("")):require$$0.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u$1(consumeBody,"consumeBody");const clone=u$1((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0$1.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u$1((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$0.Buffer.isBuffer(c)||require$$0$1.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u$1(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$0.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u$1(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}};let Headers$2 = class Headers extends URLSearchParams{static{u$1(this,"Headers");}constructor(l){let d=[];if(l instanceof Headers){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0$1.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0$1.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case "append":case "set":return (w,A)=>(validateHeaderName(w),validateHeaderValue(w,String(A)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(A)));case "delete":case "has":case "getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case "keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:true},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return  false}}))}u$1(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u$1(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals");let Response$1 = class Response extends Body{static{u$1(this,"Response");}constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new Response(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new Response(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new Response(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new Response(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};Object.defineProperties(Response$1.prototype,{type:{enumerable:true},url:{enumerable:true},status:{enumerable:true},ok:{enumerable:true},redirected:{enumerable:true},statusText:{enumerable:true},headers:{enumerable:true},clone:{enumerable:true}});const getSearch=u$1(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=false){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u$1(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u$1(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return  true;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$0$2.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?true:c.host==="localhost"||c.host.endsWith(".localhost")?false:c.protocol==="file:"}u$1(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?true:isOriginPotentiallyTrustworthy(c)}u$1(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,true);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const A=new URL(c.url);switch(y){case "no-referrer":return "no-referrer";case "origin":return w;case "unsafe-url":return R;case "strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":w.toString();case "strict-origin-when-cross-origin":return R.origin===A.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":w;case "same-origin":return R.origin===A.origin?R:"no-referrer";case "origin-when-cross-origin":return R.origin===A.origin?R:w;case "no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(A)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u$1(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u$1(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u$1(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0$1.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)");let Request$1 = class Request extends Body{static{u$1(this,"Request");}constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let A=isRequest(l)?l.signal:null;if("signal"in d&&(A=d.signal),A!=null&&!isAbortSignal(A))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let F=d.referrer==null?l.referrer:d.referrer;if(F==="")F="no-referrer";else if(F){const B=new URL(F);F=/^about:(\/\/)?client$/.test(B)?"client":B;}else F=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:A,referrer:F},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?true:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||false,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Request(this)}get[Symbol.toStringTag](){return "Request"}};Object.defineProperties(Request$1.prototype,{method:{enumerable:true},url:{enumerable:true},headers:{enumerable:true},redirect:{enumerable:true},clone:{enumerable:true},signal:{enumerable:true},referrer:{enumerable:true},referrerPolicy:{enumerable:true}});const getNodeRequestOptions=u$1(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const A=getTotalBytes(c);typeof A=="number"&&!Number.isNaN(A)&&(y=String(A));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions");class AbortError extends FetchBaseError{static{u$1(this,"AbortError");}constructor(l,d="aborted"){super(l,d);}}/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var nodeDomexception,hasRequiredNodeDomexception;function requireNodeDomexception(){if(hasRequiredNodeDomexception)return nodeDomexception;if(hasRequiredNodeDomexception=1,!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}return nodeDomexception=globalThis.DOMException,nodeDomexception}u$1(requireNodeDomexception,"requireNodeDomexception");var nodeDomexceptionExports=requireNodeDomexception();const DOMException=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexceptionExports),{stat}=node_fs.promises,blobFromSync=u$1((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u$1((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u$1((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u$1((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u$1((c,l,d="")=>new Blob([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u$1((c,l,d="")=>new File([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile");class BlobDataItem{static{u$1(this,"BlobDataItem");}#e;#t;constructor(l){this.#e=l.path,this.#t=l.start,this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new BlobDataItem({path:this.#e,lastModified:this.lastModified,size:d-l,start:this.#t+l})}async*stream(){const{mtimeMs:l}=await stat(this.#e);if(l>this.lastModified)throw new DOMException("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(this.#e,{start:this.#t,end:this.#t+this.size-1});}get[Symbol.toStringTag](){return "Blob"}}const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),Z=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(Z);return}const A=(R.protocol==="https:"?https__default:http__default).request,{signal:F}=b;let B=null;const z=u$1(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(F&&F.aborted){z();return}const W=u$1(()=>{z(),D();},"abortAndFinalize"),T=A(R.toString(),w);F&&F.addEventListener("abort",W);const D=u$1(()=>{T.abort(),F&&F.removeEventListener("abort",W);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),D();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let Z;E.prependListener("end",()=>{Z=E._eventsCount;}),E.prependListener("close",M=>{if(B&&Z<E._eventsCount&&!M){const U=new Error("Premature close");U.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",U);}});}),T.on("response",E=>{T.setTimeout(0);const Z=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const $=Z.get("Location");let N=null;try{N=$===null?null:new URL($,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${$}`,"invalid-redirect")),D();return}}switch(b.redirect){case "error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),D();return;case "manual":break;case "follow":{if(N===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),D();return}const V={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,N)||!isSameProtocol(b.url,N))for(const rt of ["authorization","www-authenticate","cookie","cookie2"])V.headers.delete(rt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),D();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(V.method="GET",V.body=void 0,V.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(Z);Q&&(V.referrerPolicy=Q),d(fetch$1(new Request$1(N,V))),D();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}F&&E.once("end",()=>{F.removeEventListener("abort",W);});let M=Stream.pipeline(E,new Stream.PassThrough,$=>{$&&y($);});process.version<"v12.10"&&E.on("aborted",W);const U={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:Z,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},K=Z.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||K===null||E.statusCode===204||E.statusCode===304){B=new Response$1(M,U),d(B);return}const se={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(K==="gzip"||K==="x-gzip"){M=Stream.pipeline(M,zlib__default.createGunzip(se),$=>{$&&y($);}),B=new Response$1(M,U),d(B);return}if(K==="deflate"||K==="x-deflate"){const $=Stream.pipeline(E,new Stream.PassThrough,N=>{N&&y(N);});$.once("data",N=>{(N[0]&15)===8?M=Stream.pipeline(M,zlib__default.createInflate(),V=>{V&&y(V);}):M=Stream.pipeline(M,zlib__default.createInflateRaw(),V=>{V&&y(V);}),B=new Response$1(M,U),d(B);}),$.once("end",()=>{B||(B=new Response$1(M,U),d(B));});return}if(K==="br"){M=Stream.pipeline(M,zlib__default.createBrotliDecompress(),$=>{$&&y($);}),B=new Response$1(M,U),d(B);return}B=new Response$1(M,U),d(B);}),writeToStream(T,b).catch(y);})}u$1(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$0.Buffer.from(`0\r
\r
`);let y=false,b=false,R;c.on("response",w=>{const{headers:A}=w;y=A["transfer-encoding"]==="chunked"&&!A["content-length"];}),c.on("socket",w=>{const A=u$1(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),F=u$1(B=>{b=require$$0.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$0.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$0.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",A),w.on("data",F),c.on("close",()=>{w.removeListener("close",A),w.removeListener("data",F);});});}u$1(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u$1(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=true,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u$1(setCancelFlag,"setCancelFlag");function Event(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:false,stopped:false,immediateStopped:false,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:false,enumerable:true});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u$1(Event,"Event"),Event.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=true,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=true,c.immediateStopped=true,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=true,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=true);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event.prototype,"constructor",{value:Event,configurable:true,writable:true});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:true,enumerable:true}}u$1(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:true,enumerable:true}}u$1(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u$1(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:true,writable:true}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const A=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,A?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u$1(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u$1(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u$1(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u$1(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u$1(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u$1(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u$1(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u$1(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u$1(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:false,once:false,next:null};y===null?d.set(c,R):y.next=R;}},configurable:true,enumerable:true}}u$1(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u$1(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u$1(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:true,writable:true}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u$1(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u$1(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,A={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let F=y.get(c);if(F===void 0){y.set(c,A);return}let B=null;for(;F!=null;){if(F.listener===l&&F.listenerType===w)return;B=F,F=F.next;}B.next=A;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,A=y.get(c);for(;A!=null;){if(A.listener===l&&A.listenerType===R){w!==null?w.next=A.next:A.next!==null?y.set(c,A.next):y.delete(c);return}w=A,A=A.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return  true;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:true,writable:true});class AbortSignal extends EventTarget{static{u$1(this,"AbortSignal");}constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}}defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,false),c}u$1(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===false&&(abortedFlags.set(c,true),c.dispatchEvent({type:"abort"}));}u$1(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:true}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:true,value:"AbortSignal"});let AbortController$1$1=class AbortController$1{static{u$1(this,"AbortController");}constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}};const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u$1(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:true},abort:{enumerable:true}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:true,value:"AbortController"});var t$2=Object.defineProperty,e$2=u$1((c,l)=>t$2(c,"name",{value:l,configurable:true}),"e");const fetch$2=fetch$1;s$1();function s$1(){!globalThis.process?.versions?.node&&!globalThis.process?.env?.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u$1(s$1,"s"),e$2(s$1,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=Blob,node$1.FetchError=FetchError$1,node$1.File=File,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$1=(r,o)=>n(r,"name",{value:o,configurable:true});const node=node$1;var t=Object.defineProperty,a=i$1((r,o)=>t(r,"name",{value:o,configurable:true}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$1(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function splitSetCookieString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitSetCookieString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function hasProp$1(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

let H3Error$1 = class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode$1(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage$1(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
};
function createError$2(input) {
  if (typeof input === "string") {
    return new H3Error$1(input);
  }
  if (isError$1(input)) {
    return input;
  }
  const err = new H3Error$1(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp$1(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode$1(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode$1(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage$1(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError$1(error) ? error : createError$2(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError$1(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod$1(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod$1(event, expected, allowHead) {
  if (!isMethod$1(event, expected)) {
    throw createError$2({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol$1 = Symbol.for("h3RawBody");
const PayloadMethods$1$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody$1(event, encoding = "utf8") {
  assertMethod$1(event, PayloadMethods$1$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol$1] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol$1] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream$1(event) {
  if (!PayloadMethods$1$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol$1 in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody$1(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS$1 = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage$1(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS$1, "");
}
function sanitizeStatusCode$1(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString$1(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString$1(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode$1(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode$1(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage$1(text);
  }
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode$1(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream$1(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp$1(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp$1(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse$1(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString$1(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode$1(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage$1(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream$1(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream$1(event);
      duplex = "half";
    } else {
      body = await readRawBody$1(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$2({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode$1(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage$1(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString$1(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

let H3Event$1 = class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders$1(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse$1(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
};
function isEvent(input) {
  return hasProp$1(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event$1(req, res);
}
function _normalizeNodeHeaders$1(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray$1(handler.onRequest),
    onBeforeResponse: _normalizeArray$1(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler$1(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray$1(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler$1(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler$1 = defineEventHandler$1;
function isEventHandler(input) {
  return hasProp$1(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler$1((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler$1(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$2({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse$1(event, val);
    }
    if (isStream(val)) {
      return sendStream$1(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$2(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$2({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$2({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$2({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler$1((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$2(_error);
      if (!isError$1(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController$1 = globalThis.AbortController || i;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString$1(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(
      error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    if (statusCode === 404) {
      setResponseHeader(event, "Cache-Control", "no-cache");
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    }
    setResponseHeader(event, "Content-Type", "text/html");
    return send(event, renderHTMLError(errorObject));
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","dir":"./public","base":"/","root":"/home/ayuba/tealishgen","order":0,"outDir":"/home/ayuba/tealishgen/.vinxi/build/public"},{"name":"client","type":"client","target":"browser","handler":"app/client.tsx","base":"/_build","build":{"sourcemap":true},"root":"/home/ayuba/tealishgen","outDir":"/home/ayuba/tealishgen/.vinxi/build/client","order":1},{"name":"ssr","type":"http","target":"server","handler":"app/ssr.tsx","link":{"client":"client"},"root":"/home/ayuba/tealishgen","base":"/","outDir":"/home/ayuba/tealishgen/.vinxi/build/ssr","order":2},{"name":"server","type":"http","target":"server","base":"/_server","handler":"node_modules/@tanstack/start-server-functions-handler/dist/esm/index.js","root":"/home/ayuba/tealishgen","outDir":"/home/ayuba/tealishgen/.vinxi/build/server","order":3},{"name":"api","base":"/api","type":"http","handler":"app/api.ts","target":"server","root":"/home/ayuba/tealishgen","outDir":"/home/ayuba/tealishgen/.vinxi/build/api","order":4}],"server":{"preset":"node-server","experimental":{"asyncContext":true}},"root":"/home/ayuba/tealishgen"};
				const buildManifest = {"client":{"/home/ayuba/tealishgen/app/index.css":{"file":"assets/index-JX_w_AoP.css","src":"/home/ayuba/tealishgen/app/index.css"},"_badge-BSfkW4bP.js":{"file":"assets/badge-BSfkW4bP.js","name":"badge","imports":["_client-mg7czlZ9.js"]},"_circle-check-big-BakVDfOZ.js":{"file":"assets/circle-check-big-BakVDfOZ.js","name":"circle-check-big","imports":["_client-mg7czlZ9.js"]},"_client-mg7czlZ9.js":{"file":"assets/client-mg7czlZ9.js","name":"client","dynamicImports":["app/routes/roadmap.tsx?tsr-split=component","app/routes/features.tsx?tsr-split=component","app/routes/about.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/marketplace/index.tsx?tsr-split=component","app/routes/marketplace/$contractId.tsx?tsr-split=component"],"assets":["assets/index-JX_w_AoP.css"]},"_code-CmYcbBmZ.js":{"file":"assets/code-CmYcbBmZ.js","name":"code","imports":["_client-mg7czlZ9.js"]},"_copy-D0idqAMd.js":{"file":"assets/copy-D0idqAMd.js","name":"copy","imports":["_client-mg7czlZ9.js"]},"_cpu-oJDq9q8k.js":{"file":"assets/cpu-oJDq9q8k.js","name":"cpu","imports":["_client-mg7czlZ9.js"]},"_proxy-BxMATYQg.js":{"file":"assets/proxy-BxMATYQg.js","name":"proxy","imports":["_client-mg7czlZ9.js"]},"_zap-C_jiDIDt.js":{"file":"assets/zap-C_jiDIDt.js","name":"zap","imports":["_client-mg7czlZ9.js"]},"app/routes/about.tsx?tsr-split=component":{"file":"assets/about-DtQrkBfs.js","name":"about","src":"app/routes/about.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js","_circle-check-big-BakVDfOZ.js"]},"app/routes/features.tsx?tsr-split=component":{"file":"assets/features-DbNVi32T.js","name":"features","src":"app/routes/features.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js","_zap-C_jiDIDt.js","_code-CmYcbBmZ.js","_cpu-oJDq9q8k.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-C_hul-0S.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js","_cpu-oJDq9q8k.js","_proxy-BxMATYQg.js","_copy-D0idqAMd.js","_circle-check-big-BakVDfOZ.js","_code-CmYcbBmZ.js"]},"app/routes/marketplace/$contractId.tsx?tsr-split=component":{"file":"assets/_contractId-tbaHaf4R.js","name":"_contractId","src":"app/routes/marketplace/$contractId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js","_badge-BSfkW4bP.js","_copy-D0idqAMd.js"]},"app/routes/marketplace/index.tsx?tsr-split=component":{"file":"assets/index-B93BF5k9.js","name":"index","src":"app/routes/marketplace/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js"]},"app/routes/roadmap.tsx?tsr-split=component":{"file":"assets/roadmap-BQL9kC3M.js","name":"roadmap","src":"app/routes/roadmap.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_client-mg7czlZ9.js","_badge-BSfkW4bP.js","_proxy-BxMATYQg.js","_zap-C_jiDIDt.js","_code-CmYcbBmZ.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-B0pxL6xE.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-mg7czlZ9.js"]}},"ssr":{"/home/ayuba/tealishgen/app/index.css":{"file":"assets/index-JX_w_AoP.css","src":"/home/ayuba/tealishgen/app/index.css"},"_badge-qBaby7B3.js":{"file":"assets/badge-qBaby7B3.js","name":"badge","imports":["_ssr-xgXjpNED.js"]},"_ssr-xgXjpNED.js":{"file":"assets/ssr-xgXjpNED.js","name":"ssr","dynamicImports":["app/routes/roadmap.tsx?tsr-split=component","app/routes/features.tsx?tsr-split=component","app/routes/about.tsx?tsr-split=component","app/routes/index.tsx?tsr-split=component","app/routes/marketplace/index.tsx?tsr-split=component","app/routes/marketplace/$contractId.tsx?tsr-split=component"],"assets":["assets/index-JX_w_AoP.css"]},"app/routes/about.tsx?tsr-split=component":{"file":"assets/about-SkRe5evk.js","name":"about","src":"app/routes/about.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js"]},"app/routes/features.tsx?tsr-split=component":{"file":"assets/features-C2MBISac.js","name":"features","src":"app/routes/features.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js"]},"app/routes/index.tsx?tsr-split=component":{"file":"assets/index-D_LWJaVm.js","name":"index","src":"app/routes/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js"]},"app/routes/marketplace/$contractId.tsx?tsr-split=component":{"file":"assets/_contractId-BhnylYy_.js","name":"_contractId","src":"app/routes/marketplace/$contractId.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js","_badge-qBaby7B3.js"]},"app/routes/marketplace/index.tsx?tsr-split=component":{"file":"assets/index-bmePBRU2.js","name":"index","src":"app/routes/marketplace/index.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js"]},"app/routes/roadmap.tsx?tsr-split=component":{"file":"assets/roadmap-CEQ9KBTG.js","name":"roadmap","src":"app/routes/roadmap.tsx?tsr-split=component","isDynamicEntry":true,"imports":["_ssr-xgXjpNED.js","_badge-qBaby7B3.js"]},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_ssr-xgXjpNED.js"]}},"server":{"virtual:$vinxi/handler/server":{"file":"server.js","name":"server","src":"virtual:$vinxi/handler/server","isEntry":true}},"api":{"virtual:$vinxi/handler/api":{"file":"api.js","name":"api","src":"virtual:$vinxi/handler/api","isEntry":true}}};

				const routeManifest = {"api":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 




			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets$1 = {
  "/vite.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d9-9/Odcje3kalF1Spc16j7Nl8xM2Y\"",
    "mtime": "2025-02-25T16:03:37.098Z",
    "size": 1497,
    "path": "../public/vite.svg"
  },
  "/assets/index-JX_w_AoP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1004f-Tb12JwN8pp3CTM9nb+RFop1gWiA\"",
    "mtime": "2025-02-25T16:03:37.142Z",
    "size": 65615,
    "path": "../public/assets/index-JX_w_AoP.css"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"f40-vIpPjjuvcyPhaQrQPgskG5WHmNY\"",
    "mtime": "2025-02-25T16:03:37.126Z",
    "size": 3904,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/assets/_contractId-tbaHaf4R.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1674-zcAloi8xJjz99K/jg0/42zNFoSM\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 5748,
    "path": "../public/_build/assets/_contractId-tbaHaf4R.js"
  },
  "/_build/assets/about-DtQrkBfs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"28e6-bTbRdhxFmV2rZ2gTEXZ8Urz1bU4\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 10470,
    "path": "../public/_build/assets/about-DtQrkBfs.js"
  },
  "/_build/assets/badge-BSfkW4bP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d2-iictctsuHp35LlT/7WR8Dz+7D2o\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 722,
    "path": "../public/_build/assets/badge-BSfkW4bP.js"
  },
  "/_build/assets/circle-check-big-BakVDfOZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"169-fx1/990S2JYDYcHZKVkiVTvIP/A\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 361,
    "path": "../public/_build/assets/circle-check-big-BakVDfOZ.js"
  },
  "/_build/assets/client-B0pxL6xE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f-vEwFKJNBddKJ54eta/rmQ+22uWo\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 63,
    "path": "../public/_build/assets/client-B0pxL6xE.js"
  },
  "/_build/assets/client-mg7czlZ9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"69514-s0jDdNgTBbHa7vp+nC1EbpZIHsM\"",
    "mtime": "2025-02-25T16:03:37.130Z",
    "size": 431380,
    "path": "../public/_build/assets/client-mg7czlZ9.js"
  },
  "/_build/assets/code-CmYcbBmZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"166-wZ9FRaJ0wz8mLjD28NiD+PFg8j8\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 358,
    "path": "../public/_build/assets/code-CmYcbBmZ.js"
  },
  "/_build/assets/copy-D0idqAMd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"195-/fJuB04ZNCBZm8fbjvQ2xHSsPb4\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 405,
    "path": "../public/_build/assets/copy-D0idqAMd.js"
  },
  "/_build/assets/cpu-oJDq9q8k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"29e-b9aQBWjjOv45hf9G5dpGJZ5p9wg\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 670,
    "path": "../public/_build/assets/cpu-oJDq9q8k.js"
  },
  "/_build/assets/features-DbNVi32T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38bc-qmA8H7ZGDzrAXjkd7ulehLXX9nU\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 14524,
    "path": "../public/_build/assets/features-DbNVi32T.js"
  },
  "/_build/assets/index-B93BF5k9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8d2-oRGkBGb3D8ILHlp+DepvU+G/4C4\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 2258,
    "path": "../public/_build/assets/index-B93BF5k9.js"
  },
  "/_build/assets/index-C_hul-0S.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"411f-bA4WY1Q4s7XV+dvqJTQHTMXrGkE\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 16671,
    "path": "../public/_build/assets/index-C_hul-0S.js"
  },
  "/_build/assets/index-JX_w_AoP.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1004f-Tb12JwN8pp3CTM9nb+RFop1gWiA\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 65615,
    "path": "../public/_build/assets/index-JX_w_AoP.css"
  },
  "/_build/assets/proxy-BxMATYQg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b72b-aEVsFed4qSyIgvqfR1yLUewHNzo\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 112427,
    "path": "../public/_build/assets/proxy-BxMATYQg.js"
  },
  "/_build/assets/roadmap-BQL9kC3M.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2408-4k8Qb4BBk7UUuo8BDAMOr7UPulg\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 9224,
    "path": "../public/_build/assets/roadmap-BQL9kC3M.js"
  },
  "/_build/assets/zap-C_jiDIDt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36f-X79H+P4/0SKoXJ569/x89vJwMX0\"",
    "mtime": "2025-02-25T16:03:37.134Z",
    "size": 879,
    "path": "../public/_build/assets/zap-C_jiDIDt.js"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _TrNwxh = eventHandler$1((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$2({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, key + "" , value);
  return value;
};
const H$1 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$1 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$1 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField$3(this, "_hash", new WordArray([...H$1]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H$1]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$1[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$1[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$1[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$1[i] = gamma0 + W$1[i - 7] + gamma1 + W$1[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$1[i] + W$1[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const J = [];
function U(e) {
  J.push(...e.middleware);
}
const c = { stringify: (e) => JSON.stringify(e, function(n, r) {
  const o = this[n], i = y$1.find((f) => f.stringifyCondition(o));
  return i ? i.stringify(o) : r;
}), parse: (e) => JSON.parse(e, function(n, r) {
  const o = this[n];
  if (isPlainObject$1(o)) {
    const i = y$1.find((f) => f.parseCondition(o));
    if (i) return i.parse(o);
  }
  return r;
}), encode: (e) => {
  if (Array.isArray(e)) return e.map((n) => c.encode(n));
  if (isPlainObject$1(e)) return Object.fromEntries(Object.entries(e).map(([n, r]) => [n, c.encode(r)]));
  const t = y$1.find((n) => n.stringifyCondition(e));
  return t ? t.stringify(e) : e;
}, decode: (e) => {
  if (isPlainObject$1(e)) {
    const t = y$1.find((n) => n.parseCondition(e));
    if (t) return t.parse(e);
  }
  return Array.isArray(e) ? e.map((t) => c.decode(t)) : isPlainObject$1(e) ? Object.fromEntries(Object.entries(e).map(([t, n]) => [t, c.decode(n)])) : e;
} }, p$1 = (e, t, n, r) => ({ key: e, stringifyCondition: t, stringify: (o) => ({ [`$${e}`]: n(o) }), parseCondition: (o) => Object.hasOwn(o, `$${e}`), parse: (o) => r(o[`$${e}`]) }), y$1 = [p$1("undefined", (e) => e === void 0, () => 0, () => {
}), p$1("date", (e) => e instanceof Date, (e) => e.toISOString(), (e) => new Date(e)), p$1("error", (e) => e instanceof Error, (e) => ({ ...e, message: e.message, stack: void 0, cause: e.cause }), (e) => Object.assign(new Error(e.message), e)), p$1("formData", (e) => e instanceof FormData, (e) => {
  const t = {};
  return e.forEach((n, r) => {
    const o = t[r];
    o !== void 0 ? Array.isArray(o) ? o.push(n) : t[r] = [o, n] : t[r] = n;
  }), t;
}, (e) => {
  const t = new FormData();
  return Object.entries(e).forEach(([n, r]) => {
    Array.isArray(r) ? r.forEach((o) => t.append(n, o)) : t.append(n, r);
  }), t;
}), p$1("bigint", (e) => typeof e == "bigint", (e) => e.toString(), (e) => BigInt(e))];
function u(e, t) {
  const n = t || e || {};
  return { options: n, middleware: (r) => u(void 0, Object.assign(n, { middleware: r })), validator: (r) => u(void 0, Object.assign(n, { validator: r })), client: (r) => u(void 0, Object.assign(n, { client: r })), server: (r) => u(void 0, Object.assign(n, { server: r })) };
}
function B$1(e) {
  let t;
  const n = j(e), r = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...r, body: e.node.req.body }) : new Request(n, { ...r, get body() {
    return t || (t = X$1(e), t);
  } });
}
function G(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: B$1(e), url: j(e) }, e.web.request;
}
function V() {
  return D$1();
}
const _$2 = Symbol("$HTTPEvent");
function K(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[_$2]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function R(e) {
  return function(...t) {
    var n;
    const r = t[0];
    if (K(r)) t[0] = r instanceof H3Event || r.__is_event__ ? r : r[_$2];
    else {
      if (!((n = globalThis.app.config.server.experimental) != null && n.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      t.unshift(V());
    }
    return e(...t);
  };
}
const j = R(getRequestURL), Q$1 = R(getResponseStatus), X$1 = R(getRequestWebStream);
function Y() {
  var e;
  return getContext("nitro-app", { asyncContext: !!((e = globalThis.app.config.server.experimental) != null && e.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function D$1() {
  const e = Y().use().event;
  if (!e) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
  return e;
}
const Z$1 = {}, k$1 = u().client(async (e) => {
  const t = /* @__PURE__ */ new Date();
  return e.next({ context: { clientTime: t }, sendContext: { clientTime: t } });
}).server(async (e) => {
  const t = /* @__PURE__ */ new Date();
  return e.next({ sendContext: { serverTime: t, durationToServer: t.getTime() - e.context.clientTime.getTime() } });
}), ee$1 = u().middleware([k$1]).client(async (e) => {
  const t = await e.next(), n = /* @__PURE__ */ new Date();
  return console.log("Client Req/Res:", { duration: t.context.clientTime.getTime() - n.getTime(), durationToServer: t.context.durationToServer, durationFromServer: n.getTime() - t.context.serverTime.getTime() }), t;
});
U({ middleware: [ee$1] });
const fe = eventHandler(te$1), h = Z$1;
async function te$1(e) {
  const t = G(e);
  return await re$1({ request: t, event: e });
}
function ne$1(e) {
  return e.replace(/^\/|\/$/g, "");
}
async function re$1({ request: e, event: t }) {
  const n = new AbortController(), r = n.signal, o = () => n.abort();
  t.node.req.on("close", o);
  const i = e.method, f = new URL(e.url, "http://localhost:3000"), M = new RegExp(`${ne$1("/_server")}/([^/?#]+)`), C = f.pathname.match(M), d = C ? C[1] : null, v = Object.fromEntries(f.searchParams.entries()), b = "createServerFn" in v;
  if (typeof d != "string") throw new Error("Invalid server action param for serverFnId: " + d);
  const S = h[d];
  if (!S) throw console.log("serverFnManifest", h), new Error("Server function info not found for " + d);
  let g;
  if (g = await S.importer(), !g) throw console.log("serverFnManifest", h), new Error("Server function module not resolved for " + d);
  const l = g[S.functionName];
  if (!l) throw console.log("serverFnManifest", h), console.log("fnModule", g), new Error(`Server function module export not resolved for serverFn ID: ${d}`);
  const $ = ["multipart/form-data", "application/x-www-form-urlencoded"], T = await (async () => {
    try {
      let s = await (async () => {
        if (e.headers.get("Content-Type") && $.some((a) => {
          var O;
          return (O = e.headers.get("Content-Type")) == null ? void 0 : O.includes(a);
        })) return L(i.toLowerCase() !== "get", "GET requests with FormData payloads are not supported"), await l(await e.formData(), r);
        if (i.toLowerCase() === "get") {
          let a = v;
          return b && (a = v.payload), a = a && c.parse(a), await l(a, r);
        }
        const m = await e.text(), E = c.parse(m);
        return b ? await l(E, r) : await l(...E, r);
      })();
      return s instanceof Response || !b && (s = s.result, s instanceof Response) ? s : isRedirect$1(s) || isNotFound(s) ? q$2(s) : new Response(s !== void 0 ? c.stringify(s) : void 0, { status: Q$1(D$1()), headers: { "Content-Type": "application/json" } });
    } catch (s) {
      return s instanceof Response ? s : isRedirect$1(s) || isNotFound(s) ? q$2(s) : (console.info(), console.info("Server Fn Error!"), console.info(), console.error(s), console.info(), new Response(c.stringify(s), { status: 500, headers: { "Content-Type": "application/json" } }));
    }
  })();
  if (t.node.req.removeListener("close", o), T.headers.get("Content-Type") === "application/json") {
    const m = await T.clone().text();
    m && JSON.stringify(JSON.parse(m));
  }
  return T;
}
function q$2(e) {
  const { headers: t, ...n } = e;
  return new Response(JSON.stringify(n), { status: 200, headers: { "Content-Type": "application/json", ...t || {} } });
}

function x(t) {
  let e;
  const n = g(t), o = { duplex: "half", method: t.method, headers: t.headers };
  return t.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: t.node.req.body }) : new Request(n, { ...o, get body() {
    return e || (e = _$1(t), e);
  } });
}
function v(t) {
  var _a;
  return (_a = t.web) != null ? _a : t.web = { request: x(t), url: g(t) }, t.web.request;
}
function T$1() {
  return A();
}
const d = Symbol("$HTTPEvent");
function S$1(t) {
  return typeof t == "object" && (t instanceof H3Event || (t == null ? void 0 : t[d]) instanceof H3Event || (t == null ? void 0 : t.__is_event__) === true);
}
function m(t) {
  return function(...e) {
    var n;
    const o = e[0];
    if (S$1(o)) e[0] = o instanceof H3Event || o.__is_event__ ? o : o[d];
    else {
      if (!((n = globalThis.app.config.server.experimental) != null && n.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      e.unshift(T$1());
    }
    return t(...e);
  };
}
const g = m(getRequestURL), _$1 = m(getRequestWebStream);
function E() {
  var t;
  return getContext("nitro-app", { asyncContext: !!((t = globalThis.app.config.server.experimental) != null && t.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function A() {
  const t = E().use().event;
  if (!t) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
  return t;
}
const H = [{ path: "/__root", filePath: "/home/ayuba/tealishgen/app/routes/__root.tsx" }, { path: "/about", filePath: "/home/ayuba/tealishgen/app/routes/about.tsx" }, { path: "/features", filePath: "/home/ayuba/tealishgen/app/routes/features.tsx" }, { path: "/", filePath: "/home/ayuba/tealishgen/app/routes/index.tsx" }, { path: "/roadmap", filePath: "/home/ayuba/tealishgen/app/routes/roadmap.tsx" }, { path: "/marketplace/:$contractId?", filePath: "/home/ayuba/tealishgen/app/routes/marketplace/$contractId.tsx" }, { path: "/marketplace", filePath: "/home/ayuba/tealishgen/app/routes/marketplace/index.tsx" }], q$1 = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
function $(t) {
  return eventHandler(async (e) => {
    const n = v(e);
    return await t({ request: n });
  });
}
function I(t, e) {
  const n = t.pathname.split("/").filter(Boolean), o = e.sort((a, r) => {
    const s = a.routePath.split("/").filter(Boolean);
    return r.routePath.split("/").filter(Boolean).length - s.length;
  }).filter((a) => {
    const r = a.routePath.split("/").filter(Boolean);
    return n.length >= r.length;
  });
  for (const a of o) {
    const r = a.routePath.split("/").filter(Boolean), s = {};
    let u = true;
    for (let i = 0; i < r.length; i++) {
      const c = r[i], f = n[i];
      if (c.startsWith("$")) if (c === "$") {
        const l = n.slice(i).join("/");
        if (l !== "") s["*"] = l, s._splat = l;
        else {
          u = false;
          break;
        }
      } else {
        const l = c.slice(1);
        s[l] = f;
      }
      else if (c !== f) {
        u = false;
        break;
      }
    }
    if (u) return { routePath: a.routePath, params: s, payload: a.payload };
  }
}
const p = H.filter((t) => t.$APIRoute);
function C(t) {
  const e = [];
  return t.forEach((n) => {
    const a = n.path.split("/").filter(Boolean).map((r) => r === "*splat" ? "$" : r.startsWith(":$") && r.endsWith("?") ? r.slice(1, -1) : r).join("/");
    e.push({ routePath: `/${a}`, payload: n });
  }), e;
}
const W = async ({ request: t }) => {
  if (!p.length) return new Response("No routes found", { status: 404 });
  if (!q$1.includes(t.method)) return new Response("Method not allowed", { status: 405 });
  const e = C(p), n = new URL(t.url, "http://localhost:3000"), o = I(n, e);
  if (!o) return new Response("Not found", { status: 404 });
  let a;
  try {
    a = await o.payload.$APIRoute.import().then((u) => u.APIRoute);
  } catch (u) {
    return console.error("Error importing route file:", u), new Response("Internal server error", { status: 500 });
  }
  if (!a) return new Response("Internal server error", { status: 500 });
  const r = t.method, s = a.methods[r];
  return s ? await s({ request: t, params: o.params }) : new Response("Method not allowed", { status: 405 });
}, N = $(W);

function Z(e) {
  return jsx(RouterProvider, { router: e.router });
}
function Ve(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function X(...e) {
  return e.reduce((t, r) => {
    const n = Ve(r);
    for (const [a, s] of n.entries()) a === "set-cookie" ? splitSetCookieString(s).forEach((p) => t.append("set-cookie", p)) : t.set(a, s);
    return t;
  }, new Headers());
}
const We = [];
function Ge(e) {
  We.push(...e.middleware);
}
const k = { stringify: (e) => JSON.stringify(e, function(r, n) {
  const a = this[r], s = D.find((d) => d.stringifyCondition(a));
  return s ? s.stringify(a) : n;
}), parse: (e) => JSON.parse(e, function(r, n) {
  const a = this[r];
  if (isPlainObject$1(a)) {
    const s = D.find((d) => d.parseCondition(a));
    if (s) return s.parse(a);
  }
  return n;
}), encode: (e) => {
  if (Array.isArray(e)) return e.map((r) => k.encode(r));
  if (isPlainObject$1(e)) return Object.fromEntries(Object.entries(e).map(([r, n]) => [r, k.encode(n)]));
  const t = D.find((r) => r.stringifyCondition(e));
  return t ? t.stringify(e) : e;
}, decode: (e) => {
  if (isPlainObject$1(e)) {
    const t = D.find((r) => r.parseCondition(e));
    if (t) return t.parse(e);
  }
  return Array.isArray(e) ? e.map((t) => k.decode(t)) : isPlainObject$1(e) ? Object.fromEntries(Object.entries(e).map(([t, r]) => [t, k.decode(r)])) : e;
} }, T = (e, t, r, n) => ({ key: e, stringifyCondition: t, stringify: (a) => ({ [`$${e}`]: r(a) }), parseCondition: (a) => Object.hasOwn(a, `$${e}`), parse: (a) => n(a[`$${e}`]) }), D = [T("undefined", (e) => e === void 0, () => 0, () => {
}), T("date", (e) => e instanceof Date, (e) => e.toISOString(), (e) => new Date(e)), T("error", (e) => e instanceof Error, (e) => ({ ...e, message: e.message, stack: void 0, cause: e.cause }), (e) => Object.assign(new Error(e.message), e)), T("formData", (e) => e instanceof FormData, (e) => {
  const t = {};
  return e.forEach((r, n) => {
    const a = t[n];
    a !== void 0 ? Array.isArray(a) ? a.push(r) : t[n] = [a, r] : t[n] = r;
  }), t;
}, (e) => {
  const t = new FormData();
  return Object.entries(e).forEach(([r, n]) => {
    Array.isArray(n) ? n.forEach((a) => t.append(r, a)) : t.append(r, n);
  }), t;
}), T("bigint", (e) => typeof e == "bigint", (e) => e.toString(), (e) => BigInt(e))];
function _(e, t) {
  const r = t || e || {};
  return { options: r, middleware: (n) => _(void 0, Object.assign(r, { middleware: n })), validator: (n) => _(void 0, Object.assign(r, { validator: n })), client: (n) => _(void 0, Object.assign(r, { client: n })), server: (n) => _(void 0, Object.assign(r, { server: n })) };
}
const Ue = `const __TSR_SSR__={matches:[],streamedValues:{},initMatch:o=>(__TSR_SSR__.matches.push(o),o.extracted?.forEach(l=>{if(l.type==="stream"){let r;l.value=new ReadableStream({start(e){r={enqueue:t=>{try{e.enqueue(t)}catch{}},close:()=>{try{e.close()}catch{}}}}}),l.value.controller=r}else{let r,e;l.value=new Promise((t,a)=>{e=a,r=t}),l.value.reject=e,l.value.resolve=r}}),!0),resolvePromise:({matchId:o,id:l,promiseState:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="promise"&&t.value&&r.status==="success")return t.value.resolve(r.data),!0}return!1},injectChunk:({matchId:o,id:l,chunk:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="stream"&&t.value?.controller)return t.value.controller.enqueue(new TextEncoder().encode(r.toString())),!0}return!1},closeStream:({matchId:o,id:l})=>{const r=__TSR_SSR__.matches.find(e=>e.id===o);if(r){const e=r.extracted?.[l];if(e&&e.type==="stream"&&e.value?.controller)return e.value.controller.close(),!0}return!1},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach(o=>{o.remove()})}};window.__TSR_SSR__=__TSR_SSR__;
`;
function Ke(e, t) {
  e.ssr = { manifest: t, serializer: k }, e.serverSsr = { injectedHtml: [], streamedKeys: /* @__PURE__ */ new Set(), injectHtml: (r) => {
    const n = Promise.resolve().then(r);
    return e.serverSsr.injectedHtml.push(n), e.emit({ type: "onInjectedHtml", promise: n }), n.then(() => {
    });
  }, injectScript: (r, n) => e.serverSsr.injectHtml(async () => `<script class='tsr-once'>${await r()}; if (typeof __TSR_SSR__ !== 'undefined') __TSR_SSR__.cleanScripts()<\/script>`), streamValue: (r, n) => {
    warning(!e.serverSsr.streamedKeys.has(r), "Key has already been streamed: " + r), e.serverSsr.streamedKeys.add(r), e.serverSsr.injectScript(() => `__TSR_SSR__.streamedValues['${r}'] = { value: ${R$1(e.ssr.serializer.stringify(n), { isScriptContext: true, wrap: true, json: true })}}`);
  }, onMatchSettled: Xe }, e.serverSsr.injectScript(() => Ue, { logScript: false });
}
function Je(e) {
  var t, r;
  const n = { manifest: e.ssr.manifest, dehydratedData: (r = (t = e.options).dehydrate) == null ? void 0 : r.call(t) };
  e.serverSsr.injectScript(() => `__TSR_SSR__.dehydrated = ${R$1(e.ssr.serializer.stringify(n), { isScriptContext: true, wrap: true, json: true })}`);
}
function Ze(e, t) {
  const r = [];
  return { replaced: q(e, (a, s) => {
    if (a instanceof ReadableStream) {
      const [d, p] = a.tee(), i = { type: "stream", path: s, id: r.length, matchIndex: t.match.index, stream: p };
      return r.push(i), d;
    } else if (a instanceof Promise) {
      const d = defer$1(a), p = { type: "promise", path: s, id: r.length, matchIndex: t.match.index, promise: d };
      r.push(p);
    }
    return a;
  }), extracted: r };
}
function Xe(e) {
  const { router: t, match: r } = e;
  let n, a;
  if (r.loaderData !== void 0) {
    const i = Ze(r.loaderData, { match: r });
    r.loaderData = i.replaced, n = i.extracted, a = n.reduce((b, g) => B(b, ["temp", ...g.path], void 0), { temp: i.replaced }).temp;
  }
  const s = `__TSR_SSR__.initMatch(${R$1({ id: r.id, __beforeLoadContext: t.ssr.serializer.stringify(r.__beforeLoadContext), loaderData: t.ssr.serializer.stringify(a), error: t.ssr.serializer.stringify(r.error), extracted: n == null ? void 0 : n.map((i) => pick(i, ["type", "path"])), updatedAt: r.updatedAt, status: r.status }, { isScriptContext: true, wrap: true, json: true })})`;
  t.serverSsr.injectScript(() => s), n && n.forEach((i) => i.type === "promise" ? d(i) : p(i));
  function d(i) {
    t.serverSsr.injectScript(async () => (await i.promise, `__TSR_SSR__.resolvePromise(${R$1({ matchId: r.id, id: i.id, promiseState: i.promise[TSR_DEFERRED_PROMISE] }, { isScriptContext: true, wrap: true, json: true })})`));
  }
  function p(i) {
    t.serverSsr.injectHtml(async () => {
      try {
        const b = i.stream.getReader();
        let g = null;
        for (; !(g = await b.read()).done; ) if (g.value) {
          const E = `__TSR_SSR__.injectChunk(${R$1({ matchId: r.id, id: i.id, chunk: g.value }, { isScriptContext: true, wrap: true, json: true })})`;
          t.serverSsr.injectScript(() => E);
        }
        t.serverSsr.injectScript(() => `__TSR_SSR__.closeStream(${R$1({ matchId: r.id, id: i.id }, { isScriptContext: true, wrap: true, json: true })})`);
      } catch (b) {
        console.error("stream read error", b);
      }
      return "";
    });
  }
}
function B(e, t, r) {
  if (t.length === 0) return r;
  const [n, ...a] = t;
  return Array.isArray(e) ? e.map((s, d) => d === Number(n) ? B(s, a, r) : s) : isPlainObject$1(e) ? { ...e, [n]: B(e[n], a, r) } : e;
}
function q(e, t, r = []) {
  if (isPlainArray(e)) return e.map((a, s) => q(a, t, [...r, `${s}`]));
  if (isPlainObject$1(e)) {
    const a = {};
    for (const s in e) a[s] = q(e[s], t, [...r, s]);
    return a;
  }
  const n = t(e, r);
  return n !== e ? n : e;
}
function Ye({ createRouter: e, getRouterManifest: t }) {
  return (r) => eventHandler(async (n) => {
    const a = toWebRequest(n), s = new URL(a.url), d = s.href.replace(s.origin, ""), p = createMemoryHistory({ initialEntries: [d] }), i = e();
    Ke(i, await (t == null ? void 0 : t())), i.update({ history: p }), await i.load(), Je(i);
    const b = Qe({ event: n, router: i });
    return await r({ request: a, router: i, responseHeaders: b });
  });
}
function Qe(e) {
  let t = X(getResponseHeaders(e.event), e.event.___ssrRpcResponseHeaders, { "Content-Type": "text/html; charset=UTF-8" }, ...e.router.state.matches.map((n) => n.headers));
  const { redirect: r } = e.router.state;
  return r && (t = X(t, r.headers, { Location: r.href })), t;
}
function et(e, t) {
  return Q(e, t);
}
function tt(e, t) {
  return Readable$1.fromWeb(Q(e, Readable$1.toWeb(t)));
}
const rt = /(<body)/, nt = /(<\/body>)/, ot = /(<\/html>)/, at = /(<head.*?>)/, st = /(<\/[a-zA-Z][\w:.-]*?>)/g, it = new TextDecoder();
function ct() {
  let e;
  const t = new TextEncoder(), n = { stream: new ReadableStream$1({ start(a) {
    e = a;
  } }), write: (a) => {
    e.enqueue(t.encode(a));
  }, end: (a) => {
    a && e.enqueue(t.encode(a)), e.close(), n.destroyed = true;
  }, destroy: (a) => {
    e.error(a);
  }, destroyed: false };
  return n;
}
async function dt(e, t) {
  var r, n, a;
  try {
    const s = e.getReader();
    let d;
    for (; !(d = await s.read()).done; ) (r = t.onData) == null || r.call(t, d);
    (n = t.onEnd) == null || n.call(t);
  } catch (s) {
    (a = t.onError) == null || a.call(t, s);
  }
}
function Q(e, t) {
  const r = ct();
  let n = true, a = "", s = "", d = false, p = false, i = "", b = "";
  function g() {
    const l = a;
    return a = "", l;
  }
  function E(l) {
    return l instanceof Uint8Array ? it.decode(l) : String(l);
  }
  const I = createControlledPromise();
  let $ = 0;
  e.serverSsr.injectedHtml.forEach((l) => {
    V(l);
  });
  const ce = e.subscribe("onInjectedHtml", (l) => {
    V(l.promise);
  });
  function V(l) {
    $++, l.then((j) => {
      d ? r.write(j) : a += j;
    }).catch(I.reject).finally(() => {
      $--, !n && $ === 0 && (ce(), I.resolve());
    });
  }
  return I.then(() => {
    const l = b + g() + s;
    r.end(l);
  }).catch((l) => {
    console.error("Error reading routerStream:", l), r.destroy(l);
  }), dt(t, { onData: (l) => {
    const j = E(l.value);
    let h = i + j;
    const H = h.match(nt), W = h.match(ot);
    if (d || h.match(rt) && (d = true), !p) {
      const x = h.match(at);
      if (x) {
        p = true;
        const G = x.index, U = x[0], de = h.slice(G + U.length);
        r.write(h.slice(0, G) + U + g()), h = de;
      }
    }
    if (!d) {
      r.write(h), i = "";
      return;
    }
    if (H && W && H.index < W.index) {
      const x = H.index;
      s = h.slice(x), r.write(h.slice(0, x) + g()), i = "";
      return;
    }
    let A, M = 0;
    for (; (A = st.exec(h)) !== null; ) M = A.index + A[0].length;
    if (M > 0) {
      const x = h.slice(0, M) + g() + b;
      r.write(x), i = h.slice(M);
    } else i = h, b += g();
  }, onEnd: () => {
    n = false, $ === 0 && I.resolve();
  }, onError: (l) => {
    console.error("Error reading appStream:", l), r.destroy(l);
  } }), r.stream;
}
const lt = async ({ request: e, router: t, responseHeaders: r }) => {
  if (typeof P.renderToReadableStream == "function") {
    const n = await P.renderToReadableStream(jsx(Z, { router: t }), { signal: e.signal });
    isbot(e.headers.get("User-Agent")) && await n.allReady;
    const a = et(t, n);
    return new Response(a, { status: t.state.statusCode, headers: r });
  }
  if (typeof P.renderToPipeableStream == "function") {
    const n = new PassThrough();
    try {
      const s = P.renderToPipeableStream(jsx(Z, { router: t }), { ...isbot(e.headers.get("User-Agent")) ? { onAllReady() {
        s.pipe(n);
      } } : { onShellReady() {
        s.pipe(n);
      } }, onError: (d, p) => {
        console.error("Error in renderToPipeableStream:", d, p);
      } });
    } catch (s) {
      console.error("Error in renderToPipeableStream:", s);
    }
    const a = tt(t, n);
    return new Response(a, { status: t.state.statusCode, headers: r });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
}, mt = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/about", "/features", "/roadmap", "/marketplace/$contractId", "/marketplace/"], preloads: ["/_build/assets/client-B0pxL6xE.js", "/_build/assets/client-mg7czlZ9.js"] }, "/": { filePath: "index.tsx" }, "/about": { filePath: "about.tsx" }, "/features": { filePath: "features.tsx" }, "/roadmap": { filePath: "roadmap.tsx" }, "/marketplace/$contractId": { filePath: "marketplace/$contractId.tsx" }, "/marketplace/": { filePath: "marketplace/index.tsx" } } });
function ut(e) {
  return globalThis.MANIFEST[e];
}
function ft() {
  var _a;
  const e = mt(), t = e.routes.__root__ = e.routes.__root__ || {};
  t.assets = t.assets || [];
  let r = "";
  const n = ut("client"), a = (_a = n.inputs[n.handler]) == null ? void 0 : _a.output.path;
  return a || L(a, "Could not find client entry in vinxi manifest"), t.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: `${r}import("${a}")` }), e;
}
function pt() {
  const e = ft();
  return { ...e, routes: Object.fromEntries(Object.entries(e.routes).map(([t, r]) => {
    const { preloads: n, assets: a } = r;
    return [t, { preloads: n, assets: a }];
  })) };
}
const ht = () => jsx("footer", { className: "w-full py-12 bg-background border-t", children: jsxs("div", { className: "container mx-auto px-4", children: [jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left", children: [jsxs("div", { className: "space-y-4", children: [jsx("h3", { className: "text-xl font-bold text-foreground", children: "TealGen" }), jsx("p", { className: "text-sm text-muted-foreground", children: "Building the future of smart contracts on Algorand" })] }), jsxs("div", { children: [jsx("h4", { className: "font-semibold mb-4", children: "Links" }), jsxs("ul", { className: "space-y-2", children: [jsx("li", { children: jsx(Link, { to: "/roadmap", className: "text-sm text-muted-foreground hover:text-foreground", children: "Roadmap" }) }), jsx("li", { children: jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground", children: "Buy Token" }) })] })] }), jsxs("div", { children: [jsx("h4", { className: "font-semibold mb-4", children: "Community" }), jsxs("div", { className: "flex gap-4 justify-center md:justify-start", children: [jsx("a", { href: "https://discord.gg", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-foreground", children: jsx(DiscordLogoIcon, { className: "w-5 h-5" }) }), jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-foreground", children: jsx(Twitter, { className: "w-5 h-5" }) }), jsx("a", { href: "https://t.me", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-foreground", children: jsx(MessageCircle, { className: "w-5 h-5" }) })] })] })] }), jsxs("div", { className: "mt-12 pt-8 border-t text-center text-sm text-muted-foreground", children: ["\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " TealGen. All rights reserved."] })] }) });
function f(...e) {
  return twMerge(clsx(e));
}
const gt = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), y = u$2.forwardRef(({ className: e, variant: t, size: r, asChild: n = false, ...a }, s) => jsx(n ? Slot : "button", { className: f(gt({ variant: t, size: r, className: e })), ref: s, ...a }));
y.displayName = "Button";
const bt = m$2.Root, yt = m$2.Trigger, xt = u$2.forwardRef(({ className: e, inset: t, children: r, ...n }, a) => jsxs(m$2.SubTrigger, { ref: a, className: f("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", t && "pl-8", e), ...n, children: [r, jsx(ChevronRight, { className: "ml-auto" })] }));
xt.displayName = m$2.SubTrigger.displayName;
const vt = u$2.forwardRef(({ className: e, ...t }, r) => jsx(m$2.SubContent, { ref: r, className: f("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...t }));
vt.displayName = m$2.SubContent.displayName;
const ee = u$2.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => jsx(m$2.Portal, { children: jsx(m$2.Content, { ref: n, sideOffset: t, className: f("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e), ...r }) }));
ee.displayName = m$2.Content.displayName;
const z = u$2.forwardRef(({ className: e, inset: t, ...r }, n) => jsx(m$2.Item, { ref: n, className: f("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", t && "pl-8", e), ...r }));
z.displayName = m$2.Item.displayName;
const St = u$2.forwardRef(({ className: e, children: t, checked: r, ...n }, a) => jsxs(m$2.CheckboxItem, { ref: a, className: f("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), checked: r, ...n, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(m$2.ItemIndicator, { children: jsx(Check, { className: "h-4 w-4" }) }) }), t] }));
St.displayName = m$2.CheckboxItem.displayName;
const wt = u$2.forwardRef(({ className: e, children: t, ...r }, n) => jsxs(m$2.RadioItem, { ref: n, className: f("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e), ...r, children: [jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsx(m$2.ItemIndicator, { children: jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }), t] }));
wt.displayName = m$2.RadioItem.displayName;
const Rt = u$2.forwardRef(({ className: e, inset: t, ...r }, n) => jsx(m$2.Label, { ref: n, className: f("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e), ...r }));
Rt.displayName = m$2.Label.displayName;
const _t = u$2.forwardRef(({ className: e, ...t }, r) => jsx(m$2.Separator, { ref: r, className: f("-mx-1 my-1 h-px bg-muted", e), ...t }));
_t.displayName = m$2.Separator.displayName;
const Nt = { theme: "system", setTheme: () => null }, te = createContext$1(Nt);
function Ct({ children: e, defaultTheme: t = "system" }) {
  const [r, n] = useState(t);
  return useEffect(() => {
    const a = window.document.documentElement;
    if (a.classList.remove("light", "dark"), r === "system") {
      const s = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      a.classList.add(s);
      return;
    }
    a.classList.add(r);
  }, [r]), jsx(te.Provider, { value: { theme: r, setTheme: n }, children: e });
}
const Tt = () => {
  const e = useContext(te);
  if (e === void 0) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
function kt() {
  const { setTheme: e } = Tt();
  return jsxs(bt, { children: [jsx(yt, { asChild: true, children: jsxs(y, { variant: "ghost", size: "icon", children: [jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), jsx("span", { className: "sr-only", children: "Toggle theme" })] }) }), jsxs(ee, { align: "end", children: [jsx(z, { onClick: () => e("light"), children: "Light" }), jsx(z, { onClick: () => e("dark"), children: "Dark" }), jsx(z, { onClick: () => e("system"), children: "System" })] })] });
}
const It = () => {
  const [e, t] = useState(false);
  return jsxs("header", { className: "w-full py-4 px-4 md:px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 z-50", children: [jsxs("div", { className: "container mx-auto flex items-center justify-between", children: [jsxs("div", { className: "flex items-center gap-4 md:gap-8", children: [jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center justify-center", children: jsx("span", { className: "text-white font-bold text-sm", children: "TG" }) }), jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent", children: "TealGen" })] }), jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [jsx(Link, { to: "/roadmap", className: "text-muted-foreground hover:text-foreground transition-colors font-medium", children: "Roadmap" }), jsx(Link, { to: "/features", className: "text-muted-foreground hover:text-foreground transition-colors font-medium", children: "Features" }), jsx(Link, { to: "/about", className: "text-muted-foreground hover:text-foreground transition-colors font-medium", children: "About" })] })] }), jsxs("div", { className: "flex items-center gap-4", children: [jsx("div", { className: "hidden md:block", children: jsx(y, { className: "bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white font-medium", children: "Buy Token" }) }), jsx(kt, {}), jsxs("div", { className: "hidden md:flex gap-2", children: [jsx("a", { href: "https://discord.gg", target: "_blank", rel: "noopener noreferrer", className: "transition-transform hover:scale-110", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full hover:bg-slate-100 dark:hover:bg-slate-800", children: jsx(DiscordLogoIcon, { className: "w-5 h-5" }) }) }), jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "transition-transform hover:scale-110", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full hover:bg-slate-100 dark:hover:bg-slate-800", children: jsx(Twitter, { className: "w-5 h-5" }) }) }), jsx("a", { href: "https://t.me", target: "_blank", rel: "noopener noreferrer", className: "transition-transform hover:scale-110", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full hover:bg-slate-100 dark:hover:bg-slate-800", children: jsx(MessageCircle, { className: "w-5 h-5" }) }) })] }), jsx(y, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => t(!e), children: jsx(Menu, { className: "w-6 h-6" }) })] })] }), e && jsx("div", { className: "md:hidden absolute top-16 left-0 right-0 bg-background border-b p-4 z-50", children: jsxs("nav", { className: "flex flex-col gap-4", children: [jsx(Link, { to: "/roadmap", className: "text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors", onClick: () => t(false), children: "Roadmap" }), jsx(Link, { to: "/features", className: "text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors", onClick: () => t(false), children: "Features" }), jsx(Link, { to: "/about", className: "text-foreground py-2 px-4 hover:bg-muted rounded-md transition-colors", onClick: () => t(false), children: "About" }), jsx(y, { className: "bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white font-medium mt-2", children: "Buy Token" }), jsxs("div", { className: "flex gap-2 mt-2 justify-center", children: [jsx("a", { href: "https://discord.gg", target: "_blank", rel: "noopener noreferrer", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full", children: jsx(DiscordLogoIcon, { className: "w-5 h-5" }) }) }), jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full", children: jsx(Twitter, { className: "w-5 h-5" }) }) }), jsx("a", { href: "https://t.me", target: "_blank", rel: "noopener noreferrer", children: jsx(y, { variant: "ghost", size: "icon", className: "rounded-full", children: jsx(MessageCircle, { className: "w-5 h-5" }) }) })] })] }) })] });
}, $t = ({ title: e, description: t, keywords: r, image: n }) => [{ title: e }, { name: "description", content: t }, { name: "keywords", content: r }, { name: "twitter:title", content: e }, { name: "twitter:description", content: t }, { name: "twitter:creator", content: "@tannerlinsley" }, { name: "twitter:site", content: "@tannerlinsley" }, { name: "og:type", content: "website" }, { name: "og:title", content: e }, { name: "og:description", content: t }, ...n ? [{ name: "twitter:image", content: n }, { name: "twitter:card", content: "summary_large_image" }, { name: "og:image", content: n }] : []], jt = "/_build/assets/index-JX_w_AoP.css", S = createRootRoute({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...$t({ title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework", description: "TanStack Start is a type-safe, client-first, full-stack React framework. " })], links: [{ rel: "stylesheet", href: jt }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, { rel: "manifest", href: "/site.webmanifest", color: "#fffff" }, { rel: "icon", href: "/favicon.ico" }] }), component: Mt });
function Mt() {
  return jsx(Pt, { children: jsx(Outlet, {}) });
}
function Pt({ children: e }) {
  return jsxs("html", { children: [jsx("head", { children: jsx(HeadContent, {}) }), jsxs("body", { children: [jsxs(Ct, { defaultTheme: "system", children: [jsx(It, {}), e, jsx(ht, {})] }), jsx(TanStackRouterDevtools, { position: "bottom-right" }), jsx(Scripts, {})] })] });
}
const Dt = () => import('../build/roadmap-CEQ9KBTG.mjs'), re = createFileRoute("/roadmap")({ component: lazyRouteComponent(Dt, "component", () => re.ssr) }), zt = () => import('../build/features-C2MBISac.mjs'), ne = createFileRoute("/features")({ component: lazyRouteComponent(zt, "component", () => ne.ssr) }), Et = () => import('../build/about-SkRe5evk.mjs'), oe = createFileRoute("/about")({ component: lazyRouteComponent(Et, "component", () => oe.ssr) }), Ht = u$2.forwardRef(({ className: e, ...t }, r) => jsx("div", { ref: r, className: f("rounded-xl border bg-card text-card-foreground shadow", e), ...t }));
Ht.displayName = "Card";
const At = u$2.forwardRef(({ className: e, ...t }, r) => jsx("div", { ref: r, className: f("flex flex-col space-y-1.5 p-6", e), ...t }));
At.displayName = "CardHeader";
const Ot = u$2.forwardRef(({ className: e, ...t }, r) => jsx("h3", { ref: r, className: f("font-semibold leading-none tracking-tight", e), ...t }));
Ot.displayName = "CardTitle";
const Ft = u$2.forwardRef(({ className: e, ...t }, r) => jsx("p", { ref: r, className: f("text-sm text-muted-foreground", e), ...t }));
Ft.displayName = "CardDescription";
const Lt = u$2.forwardRef(({ className: e, ...t }, r) => jsx("div", { ref: r, className: f("p-6 pt-0", e), ...t }));
Lt.displayName = "CardContent";
const Bt = u$2.forwardRef(({ className: e, ...t }, r) => jsx("div", { ref: r, className: f("flex items-center p-6 pt-0", e), ...t }));
Bt.displayName = "CardFooter";
const qt = () => import('../build/index-D_LWJaVm.mjs'), ae = createFileRoute("/")({ component: lazyRouteComponent(qt, "component", () => ae.ssr) }), Vt = u$2.forwardRef(({ className: e, type: t, ...r }, n) => jsx("input", { type: t, className: f("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e), ref: n, ...r }));
Vt.displayName = "Input";
const Wt = () => import('../build/index-bmePBRU2.mjs'), se = createFileRoute("/marketplace/")({ component: lazyRouteComponent(Wt, "component", () => se.ssr) });
Array.from({ length: 200 }, (e, t) => ({ id: t + 1, name: `Contract ${t + 1}`, description: `Description for contract ${t + 1}`, price: Math.floor(Math.random() * 100) + 1, owner: `Owner ${t + 1}` }));
const Gt = () => import('../build/_contractId-BhnylYy_.mjs'), ie = createFileRoute("/marketplace/$contractId")({ component: lazyRouteComponent(Gt, "component", () => ie.ssr) }), Ut = re.update({ id: "/roadmap", path: "/roadmap", getParentRoute: () => S }), Kt = ne.update({ id: "/features", path: "/features", getParentRoute: () => S }), Jt = oe.update({ id: "/about", path: "/about", getParentRoute: () => S }), Zt = ae.update({ id: "/", path: "/", getParentRoute: () => S }), Xt = se.update({ id: "/marketplace/", path: "/marketplace/", getParentRoute: () => S }), Yt = ie.update({ id: "/marketplace/$contractId", path: "/marketplace/$contractId", getParentRoute: () => S }), Qt = { IndexRoute: Zt, AboutRoute: Jt, FeaturesRoute: Kt, RoadmapRoute: Ut, MarketplaceContractIdRoute: Yt, MarketplaceIndexRoute: Xt }, er = S._addFileChildren(Qt)._addFileTypes();
function tr() {
  return createRouter$2({ routeTree: er, defaultPreload: "intent", scrollRestoration: true });
}
const rr = _().client(async (e) => {
  const t = /* @__PURE__ */ new Date();
  return e.next({ context: { clientTime: t }, sendContext: { clientTime: t } });
}), nr = _().middleware([rr]).client(async (e) => {
  const t = await e.next(), r = /* @__PURE__ */ new Date();
  return console.log("Client Req/Res:", { duration: t.context.clientTime.getTime() - r.getTime(), durationToServer: t.context.durationToServer, durationFromServer: r.getTime() - t.context.serverTime.getTime() }), t;
});
Ge({ middleware: [nr] });
const Rr = Ye({ createRouter: tr, getRouterManifest: pt })(lt);

const handlers = [
  { route: '', handler: _TrNwxh, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: fe, lazy: false, middleware: true, method: undefined },
  { route: '/api', handler: N, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Rr, lazy: false, middleware: true, method: undefined }
];

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join$1(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/ayuba/tealishgen/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler$1(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString$1(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler$1((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler$1((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { At as A, Bt as B, Ft as F, Ht as H, Lt as L, Ot as O, Vt as V, nodeServer as a, f, node$1 as n, y };
//# sourceMappingURL=nitro.mjs.map
