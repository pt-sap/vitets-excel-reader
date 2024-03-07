import{r,$ as fe}from"./react-1F1He6-G.js";import{_ as m}from"./@babel-BnI1kD_8.js";import{r as ne,R as $e}from"./react-dom-C2gNUClh.js";import{$ as ve}from"./react-remove-scroll-CLqBl6YT.js";import{h as pe}from"./aria-hidden-TUpxsc0i.js";function me(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function oe(...e){return n=>e.forEach(t=>me(t,n))}function _(...e){return r.useCallback(oe(...e),e)}const Z=r.forwardRef((e,n)=>{const{children:t,...o}=e,c=r.Children.toArray(t),s=c.find(Ee);if(s){const i=s.props.children,a=c.map(l=>l===s?r.Children.count(i)>1?r.Children.only(null):r.isValidElement(i)?i.props.children:null:l);return r.createElement(V,m({},o,{ref:n}),r.isValidElement(i)?r.cloneElement(i,void 0,a):null)}return r.createElement(V,m({},o,{ref:n}),t)});Z.displayName="Slot";const V=r.forwardRef((e,n)=>{const{children:t,...o}=e;return r.isValidElement(t)?r.cloneElement(t,{...ge(o,t.props),ref:n?oe(n,t.ref):t.ref}):r.Children.count(t)>1?r.Children.only(null):null});V.displayName="SlotClone";const be=({children:e})=>r.createElement(r.Fragment,null,e);function Ee(e){return r.isValidElement(e)&&e.type===be}function ge(e,n){const t={...n};for(const o in n){const c=e[o],s=n[o];/^on[A-Z]/.test(o)?c&&s?t[o]=(...a)=>{s(...a),c(...a)}:c&&(t[o]=c):o==="style"?t[o]={...c,...s}:o==="className"&&(t[o]=[c,s].filter(Boolean).join(" "))}return{...e,...t}}function T(e,n){if(e==null)return{};var t={},o=Object.keys(e),c,s;for(s=0;s<o.length;s++)c=o[s],!(n.indexOf(c)>=0)&&(t[c]=e[c]);return t}var he=["color"],ht=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,he);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),Ce=["color"],Ct=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,Ce);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),Oe=["color"],Ot=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,Oe);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M4.5 1C4.22386 1 4 1.22386 4 1.5C4 1.77614 4.22386 2 4.5 2H12V13H4.5C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14H12C12.5523 14 13 13.5523 13 13V2C13 1.44772 12.5523 1 12 1H4.5ZM6.60355 4.89645C6.40829 4.70118 6.09171 4.70118 5.89645 4.89645C5.70118 5.09171 5.70118 5.40829 5.89645 5.60355L7.29289 7H0.5C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H7.29289L5.89645 9.39645C5.70118 9.59171 5.70118 9.90829 5.89645 10.1036C6.09171 10.2988 6.40829 10.2988 6.60355 10.1036L8.85355 7.85355C9.04882 7.65829 9.04882 7.34171 8.85355 7.14645L6.60355 4.89645Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),ye=["color"],yt=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,ye);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),xe=["color"],xt=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,xe);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))}),we=["color"],wt=r.forwardRef(function(e,n){var t=e.color,o=t===void 0?"currentColor":t,c=T(e,we);return r.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c,{ref:n}),r.createElement("path",{d:"M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V4.70711L9.29289 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H9.5C9.63261 1 9.75979 1.05268 9.85355 1.14645L12.7803 4.07322C12.921 4.21388 13 4.40464 13 4.60355V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5ZM4.75 7.5C4.75 7.22386 4.97386 7 5.25 7H7V5.25C7 4.97386 7.22386 4.75 7.5 4.75C7.77614 4.75 8 4.97386 8 5.25V7H9.75C10.0261 7 10.25 7.22386 10.25 7.5C10.25 7.77614 10.0261 8 9.75 8H8V9.75C8 10.0261 7.77614 10.25 7.5 10.25C7.22386 10.25 7 10.0261 7 9.75V8H5.25C4.97386 8 4.75 7.77614 4.75 7.5Z",fill:o,fillRule:"evenodd",clipRule:"evenodd"}))});function w(e,n,{checkForDefaultPrevented:t=!0}={}){return function(c){if(e==null||e(c),t===!1||!c.defaultPrevented)return n==null?void 0:n(c)}}function Pe(e,n=[]){let t=[];function o(s,i){const a=r.createContext(i),l=t.length;t=[...t,i];function u(d){const{scope:b,children:$,...O}=d,v=(b==null?void 0:b[e][l])||a,y=r.useMemo(()=>O,Object.values(O));return r.createElement(v.Provider,{value:y},$)}function f(d,b){const $=(b==null?void 0:b[e][l])||a,O=r.useContext($);if(O)return O;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${s}\``)}return u.displayName=s+"Provider",[u,f]}const c=()=>{const s=t.map(i=>r.createContext(i));return function(a){const l=(a==null?void 0:a[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return c.scopeName=e,[o,Re(c,...n)]}function Re(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(s){const i=o.reduce((a,{useScope:l,scopeName:u})=>{const d=l(s)[`__scope${u}`];return{...a,...d}},{});return r.useMemo(()=>({[`__scope${n.scopeName}`]:i}),[i])}};return t.scopeName=n.scopeName,t}const B=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{},De=fe.useId||(()=>{});let _e=0;function M(e){const[n,t]=r.useState(De());return B(()=>{e||t(o=>o??String(_e++))},[e]),e||(n?`radix-${n}`:"")}function D(e){const n=r.useRef(e);return r.useEffect(()=>{n.current=e}),r.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function Te({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,c]=Ne({defaultProp:n,onChange:t}),s=e!==void 0,i=s?e:o,a=D(t),l=r.useCallback(u=>{if(s){const d=typeof u=="function"?u(e):u;d!==e&&a(d)}else c(u)},[s,e,c,a]);return[i,l]}function Ne({defaultProp:e,onChange:n}){const t=r.useState(e),[o]=t,c=r.useRef(o),s=D(n);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),t}const Le=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],P=Le.reduce((e,n)=>{const t=r.forwardRef((o,c)=>{const{asChild:s,...i}=o,a=s?Z:n;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(a,m({},i,{ref:c}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function Ae(e,n){e&&ne.flushSync(()=>e.dispatchEvent(n))}function Fe(e,n=globalThis==null?void 0:globalThis.document){const t=D(e);r.useEffect(()=>{const o=c=>{c.key==="Escape"&&t(c)};return n.addEventListener("keydown",o),()=>n.removeEventListener("keydown",o)},[t,n])}const j="dismissableLayer.update",Ie="dismissableLayer.pointerDownOutside",Se="dismissableLayer.focusOutside";let q;const Me=r.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),He=r.forwardRef((e,n)=>{var t;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:c,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:a,onDismiss:l,...u}=e,f=r.useContext(Me),[d,b]=r.useState(null),$=(t=d==null?void 0:d.ownerDocument)!==null&&t!==void 0?t:globalThis==null?void 0:globalThis.document,[,O]=r.useState({}),v=_(n,p=>b(p)),y=Array.from(f.layers),[E]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),R=y.indexOf(E),g=d?y.indexOf(d):-1,h=f.layersWithOutsidePointerEventsDisabled.size>0,N=g>=R,de=ke(p=>{const A=p.target,z=[...f.branches].some(S=>S.contains(A));!N||z||(s==null||s(p),a==null||a(p),p.defaultPrevented||l==null||l())},$),G=Ue(p=>{const A=p.target;[...f.branches].some(S=>S.contains(A))||(i==null||i(p),a==null||a(p),p.defaultPrevented||l==null||l())},$);return Fe(p=>{g===f.layers.size-1&&(c==null||c(p),!p.defaultPrevented&&l&&(p.preventDefault(),l()))},$),r.useEffect(()=>{if(d)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(q=$.body.style.pointerEvents,$.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(d)),f.layers.add(d),X(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&($.body.style.pointerEvents=q)}},[d,$,o,f]),r.useEffect(()=>()=>{d&&(f.layers.delete(d),f.layersWithOutsidePointerEventsDisabled.delete(d),X())},[d,f]),r.useEffect(()=>{const p=()=>O({});return document.addEventListener(j,p),()=>document.removeEventListener(j,p)},[]),r.createElement(P.div,m({},u,{ref:v,style:{pointerEvents:h?N?"auto":"none":void 0,...e.style},onFocusCapture:w(e.onFocusCapture,G.onFocusCapture),onBlurCapture:w(e.onBlurCapture,G.onBlurCapture),onPointerDownCapture:w(e.onPointerDownCapture,de.onPointerDownCapture)}))});function ke(e,n=globalThis==null?void 0:globalThis.document){const t=D(e),o=r.useRef(!1),c=r.useRef(()=>{});return r.useEffect(()=>{const s=a=>{if(a.target&&!o.current){let u=function(){re(Ie,t,l,{discrete:!0})};const l={originalEvent:a};a.pointerType==="touch"?(n.removeEventListener("click",c.current),c.current=u,n.addEventListener("click",c.current,{once:!0})):u()}else n.removeEventListener("click",c.current);o.current=!1},i=window.setTimeout(()=>{n.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),n.removeEventListener("pointerdown",s),n.removeEventListener("click",c.current)}},[n,t]),{onPointerDownCapture:()=>o.current=!0}}function Ue(e,n=globalThis==null?void 0:globalThis.document){const t=D(e),o=r.useRef(!1);return r.useEffect(()=>{const c=s=>{s.target&&!o.current&&re(Se,t,{originalEvent:s},{discrete:!1})};return n.addEventListener("focusin",c),()=>n.removeEventListener("focusin",c)},[n,t]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function X(){const e=new CustomEvent(j);document.dispatchEvent(e)}function re(e,n,t,{discrete:o}){const c=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&c.addEventListener(e,n,{once:!0}),o?Ae(c,s):c.dispatchEvent(s)}const H="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",Y={bubbles:!1,cancelable:!0},Ve=r.forwardRef((e,n)=>{const{loop:t=!1,trapped:o=!1,onMountAutoFocus:c,onUnmountAutoFocus:s,...i}=e,[a,l]=r.useState(null),u=D(c),f=D(s),d=r.useRef(null),b=_(n,v=>l(v)),$=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(o){let v=function(g){if($.paused||!a)return;const h=g.target;a.contains(h)?d.current=h:x(d.current,{select:!0})},y=function(g){if($.paused||!a)return;const h=g.relatedTarget;h!==null&&(a.contains(h)||x(d.current,{select:!0}))},E=function(g){if(document.activeElement===document.body)for(const N of g)N.removedNodes.length>0&&x(a)};document.addEventListener("focusin",v),document.addEventListener("focusout",y);const R=new MutationObserver(E);return a&&R.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",y),R.disconnect()}}},[o,a,$.paused]),r.useEffect(()=>{if(a){Q.add($);const v=document.activeElement;if(!a.contains(v)){const E=new CustomEvent(H,Y);a.addEventListener(H,u),a.dispatchEvent(E),E.defaultPrevented||(Be(Ge(ce(a)),{select:!0}),document.activeElement===v&&x(a))}return()=>{a.removeEventListener(H,u),setTimeout(()=>{const E=new CustomEvent(k,Y);a.addEventListener(k,f),a.dispatchEvent(E),E.defaultPrevented||x(v??document.body,{select:!0}),a.removeEventListener(k,f),Q.remove($)},0)}}},[a,u,f,$]);const O=r.useCallback(v=>{if(!t&&!o||$.paused)return;const y=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,E=document.activeElement;if(y&&E){const R=v.currentTarget,[g,h]=je(R);g&&h?!v.shiftKey&&E===h?(v.preventDefault(),t&&x(g,{select:!0})):v.shiftKey&&E===g&&(v.preventDefault(),t&&x(h,{select:!0})):E===R&&v.preventDefault()}},[t,o,$.paused]);return r.createElement(P.div,m({tabIndex:-1},i,{ref:b,onKeyDown:O}))});function Be(e,{select:n=!1}={}){const t=document.activeElement;for(const o of e)if(x(o,{select:n}),document.activeElement!==t)return}function je(e){const n=ce(e),t=J(n,e),o=J(n.reverse(),e);return[t,o]}function ce(e){const n=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)n.push(t.currentNode);return n}function J(e,n){for(const t of e)if(!Ke(t,{upTo:n}))return t}function Ke(e,{upTo:n}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(n!==void 0&&e===n)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ze(e){return e instanceof HTMLInputElement&&"select"in e}function x(e,{select:n=!1}={}){if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),e!==t&&Ze(e)&&n&&e.select()}}const Q=We();function We(){let e=[];return{add(n){const t=e[0];n!==t&&(t==null||t.pause()),e=ee(e,n),e.unshift(n)},remove(n){var t;e=ee(e,n),(t=e[0])===null||t===void 0||t.resume()}}}function ee(e,n){const t=[...e],o=t.indexOf(n);return o!==-1&&t.splice(o,1),t}function Ge(e){return e.filter(n=>n.tagName!=="A")}const ze=r.forwardRef((e,n)=>{var t;const{container:o=globalThis==null||(t=globalThis.document)===null||t===void 0?void 0:t.body,...c}=e;return o?$e.createPortal(r.createElement(P.div,m({},c,{ref:n})),o):null});function qe(e,n){return r.useReducer((t,o)=>{const c=n[t][o];return c??t},e)}const I=e=>{const{present:n,children:t}=e,o=Xe(n),c=typeof t=="function"?t({present:o.isPresent}):r.Children.only(t),s=_(o.ref,c.ref);return typeof t=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null};I.displayName="Presence";function Xe(e){const[n,t]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),i=e?"mounted":"unmounted",[a,l]=qe(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const u=F(o.current);s.current=a==="mounted"?u:"none"},[a]),B(()=>{const u=o.current,f=c.current;if(f!==e){const b=s.current,$=F(u);e?l("MOUNT"):$==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(f&&b!==$?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,l]),B(()=>{if(n){const u=d=>{const $=F(o.current).includes(d.animationName);d.target===n&&$&&ne.flushSync(()=>l("ANIMATION_END"))},f=d=>{d.target===n&&(s.current=F(o.current))};return n.addEventListener("animationstart",f),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{n.removeEventListener("animationstart",f),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[n,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:r.useCallback(u=>{u&&(o.current=getComputedStyle(u)),t(u)},[])}}function F(e){return(e==null?void 0:e.animationName)||"none"}let U=0;function Ye(){r.useEffect(()=>{var e,n;const t=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=t[0])!==null&&e!==void 0?e:te()),document.body.insertAdjacentElement("beforeend",(n=t[1])!==null&&n!==void 0?n:te()),U++,()=>{U===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(o=>o.remove()),U--}},[])}function te(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const se="Dialog",[ae,Pt]=Pe(se),[Je,C]=ae(se),Qe=e=>{const{__scopeDialog:n,children:t,open:o,defaultOpen:c,onOpenChange:s,modal:i=!0}=e,a=r.useRef(null),l=r.useRef(null),[u=!1,f]=Te({prop:o,defaultProp:c,onChange:s});return r.createElement(Je,{scope:n,triggerRef:a,contentRef:l,contentId:M(),titleId:M(),descriptionId:M(),open:u,onOpenChange:f,onOpenToggle:r.useCallback(()=>f(d=>!d),[f]),modal:i},t)},et="DialogTrigger",tt=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,c=C(et,t),s=_(n,c.triggerRef);return r.createElement(P.button,m({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":W(c.open)},o,{ref:s,onClick:w(e.onClick,c.onOpenToggle)}))}),ie="DialogPortal",[nt,le]=ae(ie,{forceMount:void 0}),ot=e=>{const{__scopeDialog:n,forceMount:t,children:o,container:c}=e,s=C(ie,n);return r.createElement(nt,{scope:n,forceMount:t},r.Children.map(o,i=>r.createElement(I,{present:t||s.open},r.createElement(ze,{asChild:!0,container:c},i))))},K="DialogOverlay",rt=r.forwardRef((e,n)=>{const t=le(K,e.__scopeDialog),{forceMount:o=t.forceMount,...c}=e,s=C(K,e.__scopeDialog);return s.modal?r.createElement(I,{present:o||s.open},r.createElement(ct,m({},c,{ref:n}))):null}),ct=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,c=C(K,t);return r.createElement(ve,{as:Z,allowPinchZoom:!0,shards:[c.contentRef]},r.createElement(P.div,m({"data-state":W(c.open)},o,{ref:n,style:{pointerEvents:"auto",...o.style}})))}),L="DialogContent",st=r.forwardRef((e,n)=>{const t=le(L,e.__scopeDialog),{forceMount:o=t.forceMount,...c}=e,s=C(L,e.__scopeDialog);return r.createElement(I,{present:o||s.open},s.modal?r.createElement(at,m({},c,{ref:n})):r.createElement(it,m({},c,{ref:n})))}),at=r.forwardRef((e,n)=>{const t=C(L,e.__scopeDialog),o=r.useRef(null),c=_(n,t.contentRef,o);return r.useEffect(()=>{const s=o.current;if(s)return pe(s)},[]),r.createElement(ue,m({},e,{ref:c,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:w(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),(i=t.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:w(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,a=i.button===0&&i.ctrlKey===!0;(i.button===2||a)&&s.preventDefault()}),onFocusOutside:w(e.onFocusOutside,s=>s.preventDefault())}))}),it=r.forwardRef((e,n)=>{const t=C(L,e.__scopeDialog),o=r.useRef(!1),c=r.useRef(!1);return r.createElement(ue,m({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:s=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,s),!s.defaultPrevented){var a;o.current||(a=t.triggerRef.current)===null||a===void 0||a.focus(),s.preventDefault()}o.current=!1,c.current=!1},onInteractOutside:s=>{var i,a;(i=e.onInteractOutside)===null||i===void 0||i.call(e,s),s.defaultPrevented||(o.current=!0,s.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const l=s.target;((a=t.triggerRef.current)===null||a===void 0?void 0:a.contains(l))&&s.preventDefault(),s.detail.originalEvent.type==="focusin"&&c.current&&s.preventDefault()}}))}),ue=r.forwardRef((e,n)=>{const{__scopeDialog:t,trapFocus:o,onOpenAutoFocus:c,onCloseAutoFocus:s,...i}=e,a=C(L,t),l=r.useRef(null),u=_(n,l);return Ye(),r.createElement(r.Fragment,null,r.createElement(Ve,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:c,onUnmountAutoFocus:s},r.createElement(He,m({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":W(a.open)},i,{ref:u,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),lt="DialogTitle",ut=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,c=C(lt,t);return r.createElement(P.h2,m({id:c.titleId},o,{ref:n}))}),dt="DialogDescription",ft=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,c=C(dt,t);return r.createElement(P.p,m({id:c.descriptionId},o,{ref:n}))}),$t="DialogClose",vt=r.forwardRef((e,n)=>{const{__scopeDialog:t,...o}=e,c=C($t,t);return r.createElement(P.button,m({type:"button"},o,{ref:n,onClick:w(e.onClick,()=>c.onOpenChange(!1))}))});function W(e){return e?"open":"closed"}const Rt=Qe,Dt=tt,_t=ot,Tt=rt,Nt=st,Lt=ut,At=ft,Ft=vt;export{Z as $,ht as A,Ot as E,wt as F,Tt as a,Nt as b,Ft as c,Lt as d,At as e,_t as f,Rt as g,Dt as h,yt as i,Ct as j,xt as k};