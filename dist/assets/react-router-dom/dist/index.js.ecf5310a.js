import{a as f}from"../../react/index.js.1d37a627.js";import{R as T}from"../../react-dom/index.js.01543d8c.js";import{R as U}from"../../react-router/dist/index.js.6056ec0a.js";import{c as F}from"../../@remix-run/router/dist/router.js.27e90fd1.js";import{r}from"../../react/index.js_commonjs-module.36a72f64.js";/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _="6";try{window.__reactRouterVersion=_}catch{}const b="startTransition",l=f[b],w="flushSync";T[w];const y="useId";f[y];function C(t){let{basename:p,children:R,future:n,window:h}=t,s=r.exports.useRef();s.current==null&&(s.current=F({window:h,v5Compat:!0}));let e=s.current,[i,o]=r.exports.useState({action:e.action,location:e.location}),{v7_startTransition:c}=n||{},a=r.exports.useCallback(u=>{c&&l?l(()=>o(u)):o(u)},[o,c]);return r.exports.useLayoutEffect(()=>e.listen(a),[e,a]),r.exports.createElement(U,{basename:p,children:R,location:i.location,navigationType:i.action,navigator:e,future:n})}var m;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m||(m={}));var S;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(S||(S={}));export{C as B};
