"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[7453],{2251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const r={id:"first_steps_5",title:"Setting up a new project",sidebar_label:"New Projects"},o=void 0,a={id:"Getting_Started/first_steps_5",title:"Setting up a new project",description:"Now that you're hooked, the fastest way to set up a new sandbox and start experiencing SHAFT is using our TestNG Maven Archetype.",source:"@site/docs/Getting_Started/first_steps_5.md",sourceDirName:"Getting_Started",slug:"/Getting_Started/first_steps_5",permalink:"/docs/Getting_Started/first_steps_5",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Getting_Started/first_steps_5.md",tags:[],version:"current",frontMatter:{id:"first_steps_5",title:"Setting up a new project",sidebar_label:"New Projects"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/docs/Getting_Started/first_steps_4"},next:{title:"Existing projects",permalink:"/docs/Getting_Started/first_steps_6"}},c={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Now that you're hooked, the fastest way to set up a new sandbox and start experiencing SHAFT is using our TestNG Maven Archetype."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You can do that by following this lovely ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://www.jetbrains.com/help/idea/maven-support.html#maven_archetype",children:"IntelliJ IDEA guide"})}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Before you press ",(0,s.jsx)(t.code,{children:"Create"})," you'll need to add the archetype first by using this data"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"GroupId: io.github.shafthq\nArtifactId: testng-archetype\nVersion: ${archetype.version}\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{children:(0,s.jsx)(t.strong,{children:"Replace"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"${archetype.version}"})," with ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/ShaftHQ/testng-archetype/releases/latest",children:"the latest SHAFT_Engine: TestNG Archetype version"})}),"."]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["It should look something like this\n",(0,s.jsx)(t.img,{alt:"IntelliJ IDEA Archetype",src:n(1350).A+"",width:"666",height:"589"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Or you can do it manually by following these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://maven.apache.org/download.cgi",children:"Download the latest version of mvn"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://maven.apache.org/install.html",children:"Add it to your PATH variable"})}),"\n",(0,s.jsx)(t.li,{children:"Create a new directory for the project, and navigate to it."}),"\n",(0,s.jsx)(t.li,{children:"Open a Terminal window in the target directory and execute the below command."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",metastring:'title="Generate a new SHAFT project"',children:'mvn archetype:generate "-DarchetypeGroupId=io.github.shafthq" "-DarchetypeArtifactId=testng-archetype" "-DarchetypeVersion=${archetype.version}" "-DinteractiveMode=false" "-DgroupId=io.github.shafthq" "-DartifactId=using_SHAFT_Engine"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{children:(0,s.jsx)(t.strong,{children:"Replace"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"${archetype.version}"})," with ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://github.com/ShaftHQ/testng-archetype/releases/latest",children:"the latest SHAFT_Engine: TestNG Archetype version"})}),"."]})]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{children:(0,s.jsx)(t.strong,{children:"Customize"})}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:'"-DgroupId=io.github.shafthq"'})," and ",(0,s.jsx)(t.code,{children:'"-DartifactId=using_SHAFT_Engine"'})," with the groupId and artifactId that you want to use for the new project."]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1350:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/archetype-66b80f0cb59769f8641a33552beb1daf.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);