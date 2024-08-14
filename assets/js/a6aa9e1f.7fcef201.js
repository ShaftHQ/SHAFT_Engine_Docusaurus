"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[3089],{8801:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(7294);var s=a(512),n=a(9962),r=a(468),i=a(3702),l=a(7949),o=a(2568),c=a(3647),d=a(8389),m=a(1514),u=a(6103),g=a(5893);function h(e){const t=(0,u.CS)(e);return(0,g.jsx)(m.Z,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:o,description:s}),(0,g.jsx)(c.Z,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:a,sidebar:s}=e;return(0,g.jsxs)(l.Z,{sidebar:s,children:[(0,g.jsx)(d.Z,{items:a}),(0,g.jsx)(o.Z,{metadata:t})]})}function j(e){return(0,g.jsxs)(r.FG,{className:(0,s.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},2568:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(7325),n=a(3672),r=a(5893);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.Z,{permalink:a,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(n.Z,{permalink:i,title:(0,r.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},7357:(e,t,a)=>{a.d(t,{Z:()=>R});a(7294);var s=a(512),n=a(6103),r=a(5893);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(4791);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.nO)(),{permalink:c,title:d}=a,m=i?"h1":"h2";return(0,r.jsx)(m,{className:(0,s.Z)(o.title,t),children:i?d:(0,r.jsx)(l.Z,{to:c,children:d})})}var d=a(7325),m=a(3777),u=a(3991);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.c)();return t=>{const a=Math.ceil(t);return e(a,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.nO)(),{date:i,readingTime:l}=a,o=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.Z)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var f=a(8764);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.nO)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.Z)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(f.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(Z,{})]})}var N=a(3905),w=a(2381);function k(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.nO)();return(0,r.jsx)("div",{id:i?N.uR:void 0,className:(0,s.Z)("markdown",a),children:(0,r.jsx)(w.Z,{children:t})})}var T=a(3702),y=a(3669),O=a(4597);function P(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function A(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(P,{})})}function _(){const{metadata:e,isBlogPostPage:t}=(0,n.nO)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("row","margin-top--sm",T.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(O.Z,{tags:a})})}),e&&(0,r.jsx)(y.Z,{className:(0,s.Z)("margin-top--sm",T.k.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,r.jsx)("div",{className:(0,s.Z)("col",{"col--9":m}),children:(0,r.jsx)(O.Z,{tags:a})}),m&&(0,r.jsx)("div",{className:(0,s.Z)("col text--right",{"col--3":u}),children:(0,r.jsx)(A,{blogPostTitle:i,to:e.permalink})})]})}function R(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.Z)(l,a),children:[(0,r.jsx)(v,{}),(0,r.jsx)(k,{children:t}),(0,r.jsx)(_,{})]})}},8389:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(6103),n=a(7357),r=a(5893);function i(e){let{items:t,component:a=n.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.n4,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},4308:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var s=a(2219),n=a(7814),r=a(3636),i=a(3024),l=a(9417);r.vI.add(i.vnX,l.mRB);const o={...s.Z,FAIcon:n.G}}}]);