"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[4005],{7585:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=s(5893),r=s(1151);const i={id:"BrowserStack",title:"BrowserStack Integration",sidebar_label:"BrowserStack Integration"},a=void 0,o={id:"Configuration/BrowserStack",title:"BrowserStack Integration",description:"Remote Execution (BrowserStack)",source:"@site/docs/Configuration/BrowserStack.md",sourceDirName:"Configuration",slug:"/Configuration/BrowserStack",permalink:"/docs/Configuration/BrowserStack",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Configuration/BrowserStack.md",tags:[],version:"current",frontMatter:{id:"BrowserStack",title:"BrowserStack Integration",sidebar_label:"BrowserStack Integration"},sidebar:"docs",previous:{title:"Jira/Xray Integration",permalink:"/docs/Configuration/XrayIntegration"},next:{title:"Mobile",permalink:"/docs/Configuration/MobileFeatures"}},c={},h=[{value:"Remote Execution (BrowserStack)",id:"remote-execution-browserstack",level:2},{value:"Through configuration manager:",id:"through-configuration-manager",level:3},{value:"Through properties files:",id:"through-properties-files",level:4},{value:"Set the username and access key:",id:"set-the-username-and-access-key",level:5},{value:"Browserstack properties:",id:"browserstack-properties",level:5},{value:"To execute in web platform:",id:"to-execute-in-web-platform",level:3},{value:"Through configuration manager:",id:"through-configuration-manager-1",level:4},{value:"Through properties files:",id:"through-properties-files-1",level:4},{value:"Set the capabilities on browser stack configuration manager:",id:"set-the-capabilities-on-browser-stack-configuration-manager",level:5},{value:"To execute in mobile platform:",id:"to-execute-in-mobile-platform",level:3},{value:"Through configuration manager:",id:"through-configuration-manager-2",level:4},{value:"Through properties files:",id:"through-properties-files-2",level:4},{value:"Set the capabilities on browser stack configuration manager:",id:"set-the-capabilities-on-browser-stack-configuration-manager-1",level:5},{value:"Execute the session live:",id:"execute-the-session-live",level:5}];function l(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"remote-execution-browserstack",children:"Remote Execution (BrowserStack)"}),"\n",(0,n.jsx)(t.p,{children:"We can run any script using Shaft Engine via Browser stack only by setting some configurations that we can make from different locations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"through-configuration-manager",children:"Through configuration manager:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By openeing the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Platform"})})," tab on ",(0,n.jsx)(t.a,{href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager",children:"Configuration Manager"}),", you can change the excution location as explained in the image below and then save the file and replace the corresponding configuration file in your project. Please note that once you select Remote Execution (BrowserStack) from Execution Location, the value of ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.em,{children:"Remote Server Details"})})," will be filled automatically."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configurationMnagerExexutionLocation",src:s(563).Z+"",width:"897",height:"505"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"through-properties-files",children:"Through properties files:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For Web scripts, by openning the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"ExecutionPlatform.properties"})})," file you can change the value of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"executionAddress"})})," to be ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"browserstack"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"propExecutionAddress",src:s(1800).Z+"",width:"903",height:"467"})}),"\n",(0,n.jsx)(t.h5,{id:"set-the-username-and-access-key",children:"Set the username and access key:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://www.browserstack.com/users/sign_in",children:"https://www.browserstack.com/users/sign_in"})})})," and put the business e-mail and password then click ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Sign Me In"})})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(6041).Z+"",width:"906",height:"770"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Summary"})})," section"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(4473).Z+"",width:"1920",height:"1080"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Copy the access key value:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(3313).Z+"",width:"1287",height:"565"})}),"\n",(0,n.jsx)(t.h5,{id:"browserstack-properties",children:"Browserstack properties:"}),"\n",(0,n.jsxs)(t.p,{children:["Browser stack itself provides its own configuration manager via the configuration file ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"browserStack.properties"})})," in which we can find the proper configuration and proper URLs to execute scripts on web or on mobile platfrom. As explained in the below image."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(7404).Z+"",width:"1571",height:"750"})}),"\n",(0,n.jsx)(t.h3,{id:"to-execute-in-web-platform",children:"To execute in web platform:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"through-configuration-manager-1",children:"Through configuration manager:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By openeing the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Platform"})})," tab on ",(0,n.jsx)(t.a,{href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager",children:"Configuration Manager"}),", after selecting the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Remote Execution (BrowserStack)"})}),", select the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Target Operating System"})})," then save the file and replace the corresponding configuration file in your project."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configurationMnagerTargertOperatingSystem",src:s(5290).Z+"",width:"1016",height:"702"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"through-properties-files-1",children:"Through properties files:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For Web scripts, by openning the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"ExecutionPlatform.properties"})})," file you can change the value of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"targetOperatingSystem"})})," to be ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"windows-64"})}),", ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"linux-64"})}),", etc."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configurationMnagerTargertOperatingSystem",src:s(1696).Z+"",width:"1012",height:"532"})}),"\n",(0,n.jsx)(t.h5,{id:"set-the-capabilities-on-browser-stack-configuration-manager",children:"Set the capabilities on browser stack configuration manager:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go the Web URL: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://www.browserstack.com/automate/capabilities?tag=selenium-4",children:"https://www.browserstack.com/automate/capabilities?tag=selenium-4"})})})," to set the username and access key that we got from the previous steps and set the main capabilities from the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Configure capabilities"})})," Section on the left select the target of the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Opertaing System"})}),", the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Browser"})}),", the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Resolution"})})," and the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Selenium Version"})}),". Once these fields are filled, the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Code"})})," section will be filled automatically as explained in the below image."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(9427).Z+"",width:"1547",height:"867"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go back to ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"browserStack.properties"})})," file to set the Operating system and its version, the browser version and the selenium version. Please pay attention to make the correct mapping as all these fields are case sensitive."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(6077).Z+"",width:"913",height:"526"})}),"\n",(0,n.jsx)(t.h3,{id:"to-execute-in-mobile-platform",children:"To execute in mobile platform:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"through-configuration-manager-2",children:"Through configuration manager:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["By openeing the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Platform"})})," tab on ",(0,n.jsx)(t.a,{href:"https://shafthq.github.io/SHAFT_ENGINE/",title:"Configuration Manager",children:"Configuration Manager"}),", after selecting the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Remote Execution (BrowserStack)"})}),", select the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Target Operating System"})})," then save the file and replace the corresponding configuration file in your project."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configurationMnagerTargertOperatingSystem",src:s(1674).Z+"",width:"1027",height:"706"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h4,{id:"through-properties-files-2",children:"Through properties files:"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For Web scripts, by openning the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"ExecutionPlatform.properties"})})," file you can change the value of ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"targetOperatingSystem"})})," to be ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Android"})})," or ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"iOS"})}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"configurationMnagerTargertOperatingSystem",src:s(5314).Z+"",width:"1017",height:"531"})}),"\n",(0,n.jsx)(t.h5,{id:"set-the-capabilities-on-browser-stack-configuration-manager-1",children:"Set the capabilities on browser stack configuration manager:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go the Web URL: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://www.browserstack.com/app-automate/capabilities?tag=w3c",children:"https://www.browserstack.com/app-automate/capabilities?tag=w3c"})})})," to set the username and access key that we got from the previous steps and set the main capabilities from the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Configure capabilities"})})," Section on the left select the target of the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Platform Name"})}),", the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Device Name"})})," and the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Application (.apk /.aab)"})}),". Once these fields are filled, the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Code"})})," section will be filled automatically as explained in the below image."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that for the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Application (.apk /.aab)"})}),", we have to pass our apk path to be make a post request to browserstack to upload the apk and recieve the response that will be on the console. We have to do that only for the first time in which we execute our suite or everytime we execute our suite on different versions."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(1e3).Z+"",width:"1722",height:"877"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(2487).Z+"",width:"1012",height:"257"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Go back to ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"browserStack.properties"})})," file to set the Operating system and its version, the android/ios version , the device name and the appium version. Please pay attention to make the correct mapping as all these fields are case sensitive."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(9051).Z+"",width:"1016",height:"365"})}),"\n",(0,n.jsx)(t.h5,{id:"execute-the-session-live",children:"Execute the session live:"}),"\n",(0,n.jsxs)(t.p,{children:["To see the live execution, whatever you are executing on web or mobile, just you need to go to ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://automate.browserstack.com/dashboard/v2",children:"https://automate.browserstack.com/dashboard/v2"})})})," and then click on ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.em,{children:"Automate"})})," and then we will find our execution results and all the related info."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BrowswerStack",src:s(8607).Z+"",width:"1243",height:"653"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8607:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStack-LiveAutomateExecution-70d11296d08845a0e955242fe2237523.jpg"},1e3:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStack-MOB-a5d870dec2c2b7965f04a839c59f8463.jpg"},9051:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStack-MobCapabilitites-8903fdf5fe58d498b194af3755e69792.jpg"},6041:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStackSignIN-47a9dc5cddc16ce3863f46bec18daeef.jpg"},4473:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStackSummary-83fcc93e8ed67ea9c4aacc3ee61bc875.png"},9427:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowserStackWebCapabilities-4e8c5caad82ab84c5b7cfa14b1cbedef.jpg"},3313:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/BrowsweStack-GetTheAccessKey-39a2b4f53170773a3bb67e7d182b34eb.jpg"},5290:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/CM-TargetOperatingSystem-34b12c25e2da52c8efe10da228fe8e46.jpg"},563:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/CM_ExecutionAddress-22c380b51f7f16ebf6be422ed8cd0d7c.jpg"},1674:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/CM_TargetOperatingSystemMob-4935f7ac314a88c9edd4132948c0a247.jpg"},2487:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop-APKPath-ee90d197018cf3d5e1ee821cfdef6378.jpg"},5314:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop-TaregetOperatingSystemMob-49fba3c624581229937bc44aa16b7a00.jpg"},1696:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop-TargetOperatingSystem-fb82f6a8863faa837542692a4006dd20.jpg"},7404:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop_BrowserStack-3986acc4e49239df685f8eb91216c64d.jpg"},6077:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop_BrowserStackMapped-507f61d8fffc991566cd39f8f6526dcc.jpg"},1800:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/Prop_ExecutionAddress-ffb4f74eb53bd68142c179c5d462a271.jpg"},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(7294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);