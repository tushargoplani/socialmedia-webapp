"use strict";(self.webpackChunkmern_media_web_app=self.webpackChunkmern_media_web_app||[]).push([[988],{1939:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(184);function r(){return(0,s.jsxs)("div",{className:"mt-2 mx-1 rounded-lg bg-white border border-gray-100 py-2.5 animate-pulse",children:[(0,s.jsx)("div",{className:"h-12 w-12 bg-gray-150 rounded-full ml-4 mb-2"}),(0,s.jsx)("div",{className:"bg-gray-150 min-h-62.5 max-h-100"}),(0,s.jsxs)("div",{className:"px-5",children:[(0,s.jsx)("div",{className:"bg-gray-150 w-24 h-5 mt-5"}),(0,s.jsx)("div",{className:"bg-gray-150 w-[90%] h-5 mt-3 mb-3"})]})]})}},9310:function(e,t,n){n.d(t,{Z:function(){return N}});var s=n(2791),r=n(364),c=n(885),a=n(9271),i=n(1523),o=n(2426),l=n.n(o),d=n(6094),u=n(850),x=n(8787),m=(0,n(8499).Z)(s.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z"}),"FileCopyOutlined"),f=n(193),h=n(6953),v=n(7361);var p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,r=(0,s.useState)(0),a=(0,c.Z)(r,2),i=a[0],o=a[1];return(0,s.useEffect)((function(){var s=setTimeout((function(){1===i&&e(),o(0)}),n);return 2===i&&t(),function(){return clearTimeout(s)}}),[i]),function(){return o((function(e){return e+1}))}},j=n(184),b=function(e){var t,n,r,o=e.post,b=e.user,g=(0,s.useState)(o.likes.length),N=(0,c.Z)(g,2),Z=N[0],k=N[1],w=(0,s.useState)(!1),y=(0,c.Z)(w,2),C=y[0],_=y[1],z=(0,a.k6)();(0,s.useEffect)((function(){_(o.likes.includes(b.userId))}),[b.userId,o.likes]);var I=function(){try{h.F.put("/posts/like",{postId:o._id},{headers:{Authorization:"Bearer ".concat(b.accessToken)}})}catch(e){}k((function(e){return C?e-1:e+1})),_((function(e){return!e}))},E=p((function(){return z.push("/postdetails/".concat(o._id))}),I);return(0,j.jsxs)("div",{className:"mt-2 rounded-lg bg-white border border-gray-100 py-2.5",children:[(0,j.jsx)("div",{className:"px-3",children:(0,j.jsxs)(i.rU,{to:"/profile/".concat(null===o||void 0===o||null===(t=o.user)||void 0===t?void 0:t._id),className:"flex gap-2.5 pb-2",children:[(0,j.jsx)("div",{children:(0,j.jsx)("img",{className:"h-10 w-10 object-cover rounded-full",src:(null===o||void 0===o||null===(n=o.user)||void 0===n?void 0:n.profilepicture)||v.tU,alt:""})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:null===o||void 0===o||null===(r=o.user)||void 0===r?void 0:r.username}),(0,j.jsx)("div",{className:"text-darkGray-10 text-xs",children:l()(o.createdAt).fromNow()})]})]})}),(0,j.jsxs)("div",{onClick:E,children:[(0,j.jsx)("div",{children:o.photo&&(0,j.jsx)("img",{className:"md:max-h-92.5 max-h-77.5 w-full",src:o.photo,alt:""})}),(0,j.jsxs)("div",{className:"md:px-6 px-4",children:[(0,j.jsx)("div",{className:"mt-2 md:text-3xl text-xl font-medium",children:null===o||void 0===o?void 0:o.title}),(0,j.jsx)("div",{className:"text-black mt-2 mb-2 trucate-word",children:null===o||void 0===o?void 0:o.description})]})]}),(0,j.jsxs)("div",{className:"flex items-center justify-between md:px-6 px-4",children:[(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsxs)("button",{onClick:I,className:"flex cursor-pointer items-center",children:[C?(0,j.jsx)(d.Z,{style:{color:"red"}}):(0,j.jsx)(u.Z,{}),(0,j.jsx)("span",{children:Z})]}),(0,j.jsx)(i.rU,{to:"/postdetails/".concat(o._id),children:(0,j.jsx)(x.Z,{})})]}),(0,j.jsx)("button",{onClick:function(){navigator.clipboard.writeText("".concat(window.origin,"/postdetails/").concat(o._id)),f.ZP.success("Copied!",{position:"top-right"})},className:"",children:(0,j.jsx)(m,{})})]})]})},g=n(5489);var N=function(e){var t=e.posts,n=e.NoLink,s=(0,r.v9)((function(e){return e.user}));return(0,j.jsxs)("div",{className:"mt-1 flex-[6.5] md:px-0 mb-7 px-2 min-h-screen",children:[!n&&(0,j.jsx)(g.Z,{}),t.map((function(e,t){return!!e&&(0,j.jsx)(b,{user:s,post:e},t)}))]})}},5489:function(e,t,n){n.d(t,{Z:function(){return c}});n(2791);var s=n(1523),r=n(184);function c(){return(0,r.jsxs)("div",{className:"mt-3 mb-2 flex gap-2",children:[(0,r.jsx)(s.OL,{className:"ml-2 text-black-0 py-1 px2",exact:!0,to:"/",activeClassName:"font-black",children:"Posts"}),(0,r.jsx)(s.OL,{className:"ml-2 text-black-0 py-1 px2",to:"/feeds",activeClassName:"font-black",children:"Feeds"})]})}},2886:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(184);function r(){return(0,s.jsx)("div",{className:"flex-[3] lg:block hidden"})}},220:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(1523),r=n(7510),c=n(2037),a=n(4900),i=n(6274),o=n(4861),l=n(184),d=[{name:"Create Post",to:"/write",Icon:r.Z},{name:"Home",to:"/",Icon:c.Z},{name:"Chats",to:"/chat",Icon:a.Z},{name:"About",to:"/about",Icon:i.Z},{name:"Contact",to:"/contact",Icon:o.Z}];function u(){return(0,l.jsx)("div",{className:"h-screen-cal-55 top-[55px] flex-[3] sticky overflow-y-auto bg-gray-70 sidebar-scrollbar md:block hidden",children:(0,l.jsx)("div",{className:"p-4",children:(0,l.jsx)("ul",{className:"flex flex-col gap-2 font-medium text-gray-80",children:d.map((function(e,t){var n=e.name,r=e.Icon,c=e.to;return(0,l.jsxs)(s.rU,{to:c,className:"flex items-center duration-200 px-3 py-2.5 rounded gap-4 hover:bg-lightBlue-10 hover:text-blue-20",children:[(0,l.jsx)(r,{}),(0,l.jsx)("span",{children:n})]},t)}))})})})}},8988:function(e,t,n){n.r(t);var s=n(4165),r=n(5861),c=n(885),a=n(2791),i=n(364),o=n(1523),l=n(9310),d=n(220),u=n(2886),x=n(1939),m=n(5489),f=n(7361),h=n(6953),v=n(184);t.default=(0,i.$j)((function(e){return{user:e.user}}))((function(e){var t=e.user,n=(0,a.useState)([]),i=(0,c.Z)(n,2),p=i[0],j=i[1],b=(0,a.useState)(!0),g=(0,c.Z)(b,2),N=g[0],Z=g[1];return(0,a.useEffect)((function(){document.title="".concat(f.iC," | Feeds"),(0,r.Z)((0,s.Z)().mark((function e(){var n,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,h.F.get("/posts/timeline/",{headers:{Authorization:"Bearer ".concat(t.accessToken)}});case 4:n=e.sent,r=n.data.response,j(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("friends post error: ",e.t0);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()}),[t.userId]),(0,v.jsxs)("div",{className:"flex bg-gray-70 max-w-360 mx-auto",children:[(0,v.jsx)(d.Z,{}),N?(0,v.jsxs)("div",{className:"flex flex-col flex-[6.5] md:px-0 px-2 mt-1.25 min-h-screen",children:[(0,v.jsx)(m.Z,{}),[1,2,3,4,5].map((function(e){return(0,v.jsx)(x.Z,{},e)}))]}):p.length?(0,v.jsx)(l.Z,{posts:p}):(0,v.jsxs)("div",{className:"h-screen-cal-55 grid place-content-center w-full text-2xl font-semibold text-center",children:["No posts found!",(0,v.jsx)(o.rU,{to:"/",className:"text-[#3a8fde] text-lg block underline underline-offset-2",children:"Go Back"})]}),(0,v.jsx)(u.Z,{})]})}))},6094:function(e,t,n){var s=n(2791),r=n(8499);t.Z=(0,r.Z)(s.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite")},850:function(e,t,n){var s=n(2791),r=n(8499);t.Z=(0,r.Z)(s.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorderOutlined")},8787:function(e,t,n){var s=n(2791),r=n(8499);t.Z=(0,r.Z)(s.createElement("path",{d:"M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"}),"ModeCommentOutlined")}}]);
//# sourceMappingURL=988.050967a5.chunk.js.map