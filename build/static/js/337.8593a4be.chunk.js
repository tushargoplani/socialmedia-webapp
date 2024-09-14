(self.webpackChunkmern_media_web_app=self.webpackChunkmern_media_web_app||[]).push([[337],{220:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(1523),a=n(7510),o=n(2037),s=n(4900),c=n(9628),u=n(963),i=n(6274),l=n(4861),f=n(2279),p=n(9799),d=n(9547),m=n(5449),x=n(184),h=[{name:"Create Post",to:"/write",Icon:a.Z},{name:"Home",to:"/",Icon:o.Z},{name:"Chats",to:"/chat",Icon:s.Z},{name:"Questions",to:"/contact",Icon:c.Z},{name:"Sign In/Up",to:"/login",Icon:u.Z},{name:"About",to:"/about",Icon:i.Z},{name:"Contact",to:"/contact",Icon:l.Z}],v=[{to:"https://twitter.com/SRK_R_?t=58WfgjgrqabaZrXWBHTZkg&s=08",Icon:f.Z},{to:"https://github.com/SRK-prog/",Icon:p.Z},{to:"https://www.linkedin.com/in/sivaramakrishnan-r262/",Icon:d.Z},{to:"https://www.instagram.com/siva.r12/",Icon:m.Z}];function g(){return(0,x.jsx)("div",{className:"h-screen-cal-55 top-[55px] flex-[3] sticky overflow-y-auto bg-gray-70 sidebar-scrollbar md:block hidden",children:(0,x.jsxs)("div",{className:"p-4",children:[(0,x.jsx)("ul",{className:"flex flex-col gap-2 font-medium text-gray-80",children:h.map((function(e,t){var n=e.name,a=e.Icon,o=e.to;return(0,x.jsxs)(r.rU,{to:o,className:"flex items-center duration-200 px-3 py-2.5 rounded gap-4 hover:bg-lightBlue-10 hover:text-blue-20",children:[(0,x.jsx)(a,{}),(0,x.jsx)("span",{children:n})]},t)}))}),(0,x.jsx)("div",{className:"flex mt-5 gap-1 mb-2 items-center justify-center",children:v.map((function(e,t){var n=e.Icon,r=e.to;return(0,x.jsx)("a",{target:"_blank",rel:"noreferrer",href:r,children:(0,x.jsx)(n,{className:"text-3xl text-gray-90 hover:text-[#353434]"})},t)}))}),(0,x.jsx)("hr",{className:"py-5"})]})})}},5337:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),a=n(4165),o=n(5861),s=n(885),c=n(2791),u=n(9271),i=n(1523),l=n(364),f=n(4569),p=n.n(f),d=n(1927),m=n(1078),x=n(3594),h=n(220),v=n(6953),g=n(184);function b(){var e=(0,l.v9)((function(e){return e.user})),t=(0,c.useState)(""),n=(0,s.Z)(t,2),f=n[0],b=n[1],Z=(0,c.useState)(""),j=(0,s.Z)(Z,2),y=j[0],w=j[1],_=(0,c.useState)(""),I=(0,s.Z)(_,2),N=I[0],k=I[1],M=(0,c.useState)({success:!1,load:!1,fail:!1}),P=(0,s.Z)(M,2),S=P[0],F=P[1],C=(0,u.k6)(),O=function(){var t=(0,o.Z)((0,a.Z)().mark((function t(n){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={photo:N,title:f,description:y},t.prev=2,t.next=5,v.F.post("/posts",r,{headers:{Authorization:"Bearer ".concat(e.accessToken)}});case 5:C.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),W=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F((function(e){return(0,r.Z)((0,r.Z)({},e),{},{load:!0})})),n=t.target.files[0],(o=new FormData).append("file",n),o.append("upload_preset","socialmedia-website"),o.append("cloud_name","srksiva"),e.prev=6,e.next=9,p().post("https://api.cloudinary.com/v1_1/srksiva/image/upload",o);case 9:s=e.sent,k(s.data.secure_url),F((function(e){return(0,r.Z)((0,r.Z)({},e),{},{success:!0})})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),F((function(e){return(0,r.Z)((0,r.Z)({},e),{},{success:!1})}));case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"flex bg-gray-70 max-w-360 mx-auto",children:[(0,g.jsx)(h.Z,{}),(0,g.jsx)("div",{className:"bg-white mt-5 rounded flex-[5]",children:(0,g.jsxs)("form",{className:"single-post p-4",onSubmit:O,children:[(0,g.jsx)("input",{type:"file",className:"hidden",id:"INPUTFILE",accept:"image/png, image/jpeg, image/jpg",onChange:W}),!!N&&(0,g.jsx)("label",{className:"cursor-pointer",htmlFor:"INPUTFILE",children:(0,g.jsx)("img",{className:"md:h-96 h-60 w-full rounded",src:N,alt:""})}),!N&&(0,g.jsxs)("label",{htmlFor:"INPUTFILE",className:"flex items-center justify-center border border-dotted rounded border-gray-40 h-32 font-extrabold text-gray-40 gap-2",children:[(0,g.jsx)(m.Z,{}),"Upload Image",S.success&&(0,g.jsx)("span",{className:"ml-2 pt-2 text-[#06af06]",children:(0,g.jsx)(x.Z,{})}),S.load&&(0,g.jsx)("span",{className:"w-10",children:(0,g.jsx)("img",{src:"/images/loader.svg",alt:""})}),S.fail&&(0,g.jsx)("span",{className:"ml-2 pt-2 text-[#ff0000]",children:"Failed!"})]}),(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsx)(d.Z,{type:"text",label:"Post Title",fullWidth:!0,variant:"outlined",onChange:function(e){return b(e.target.value)}})}),(0,g.jsx)("div",{className:"mt-5",children:(0,g.jsx)(d.Z,{type:"text",fullWidth:!0,label:"Write your post content...",multiline:!0,minRows:4,variant:"outlined",onChange:function(e){return w(e.target.value)}})}),(0,g.jsxs)("div",{className:"mt-5 flex justify-end gap-3",children:[(0,g.jsx)(i.rU,{className:"w-28 h-10 text-white text-base bg-[#3791f8ea] rounded grid place-content-center",to:"/",children:"Back"}),(0,g.jsx)("button",{className:"w-28 h-10 text-white text-base bg-[#3791f8ea] rounded grid place-content-center",type:"submit",children:"Publish"})]})]})}),(0,g.jsx)("div",{className:"lg:flex-[2]"})]})}},2446:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return a.Z},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return i.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return f},setRef:function(){return p.Z},unstable_useId:function(){return g},unsupportedProp:function(){return d},useControlled:function(){return m.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return b.Z}});var r=n(1122),a=n(7545),o=n(8499),s=n(503);function c(e,t){return function(){return null}}var u=n(3375),i=n(4667),l=n(7636);function f(e){return function(){return null}}var p=n(1565);function d(e,t,n,r,a){return null}var m=n(2497),x=n(2216),h=n(9806),v=n(2791);function g(e){var t=v.useState(e),n=t[0],r=t[1],a=e||n;return v.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var b=n(1175)},3594:function(e,t,n){"use strict";var r=n(4836),a=n(5263);t.Z=void 0;var o=a(n(2791)),s=(0,r(n(4894)).default)(o.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.Z=s},1078:function(e,t,n){"use strict";var r=n(4836),a=n(5263);t.Z=void 0;var o=a(n(2791)),s=(0,r(n(4894)).default)(o.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.Z=s},4894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(2446)},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:function(e,t,n){var r=n(8698).default;function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=s?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(o,c,u):o[c]=e[c]}return o.default=e,n&&n.set(e,o),o},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=337.8593a4be.chunk.js.map