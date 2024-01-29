"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[717],{6055:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var o=t(5893),s=t(1151);const n={id:"PropertyTypes",title:"Property Types",sidebar_label:"Types"},i=void 0,a={id:"Properties/PropertyTypes",title:"Property Types",description:"Please note that the Configuration Manager will be deprecated, and you can now refer to this page to configure your execution properties.",source:"@site/docs/Properties/PropertyTypes.md",sourceDirName:"Properties",slug:"/Properties/PropertyTypes",permalink:"/docs/Properties/PropertyTypes",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Properties/PropertyTypes.md",tags:[],version:"current",frontMatter:{id:"PropertyTypes",title:"Property Types",sidebar_label:"Types"},sidebar:"docs",previous:{title:"First Steps",permalink:"/docs/Getting_Started/Prerequisites"},next:{title:"List",permalink:"/docs/Properties/PropertiesList"}},c={},d=[{value:"File-based",id:"file-based",level:3},{value:"Code-based",id:"code-based",level:3},{value:"CLI-based (for unattended execution)",id:"cli-based-for-unattended-execution",level:3},{value:"Priorities",id:"priorities",level:3}];function p(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Please note that the Configuration Manager will be deprecated, and you can now refer to this page to configure your execution properties."}),"\n",(0,o.jsx)(r.h3,{id:"file-based",children:"File-based"}),"\n",(0,o.jsxs)(r.p,{children:["This is the traditional way of configuring SHAFT properties, using this approach you can simply create your own properties file under ",(0,o.jsx)(r.code,{children:"src/main/resources/properties/custom.properties"}),".\nHere's a sample of what a properties file can look like:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-properties",children:"baseURL=http://www.mytestdomain.com\nexecutionAddress=local\ntargetOperatingSystem=WINDOWS\ntargetBrowserName=firefox\nheadlessExecution=true\ncreateAnimatedGif=true\nvideoParams_recordVideo=true\n"})}),"\n",(0,o.jsx)(r.p,{children:"You can add all your custom properties in one or more files as you see fit. And you can refer to the below table for a full list of supported properties."}),"\n",(0,o.jsx)(r.h3,{id:"code-based",children:"Code-based"}),"\n",(0,o.jsx)(r.p,{children:"If you're on the latest SHAFT version you can now set any property programmatically as well to easily read/write properties during runtime."}),"\n",(0,o.jsx)(r.p,{children:"To write values:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"SHAFT.Properties.browserStack.set().username(username);\nSHAFT.Properties.browserStack.set().accessKey(accessKey);\nSHAFT.Properties.browserStack.set().platformVersion(platformVersion);\nSHAFT.Properties.browserStack.set().deviceName(deviceName);\nSHAFT.Properties.browserStack.set().appUrl(appUrl);\nSHAFT.Properties.browserStack.set().customID(customID);\nSHAFT.Properties.browserStack.set().appName(appName);\n"})}),"\n",(0,o.jsx)(r.p,{children:"To read values:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"username = SHAFT.Properties.browserStack.username();\naccessKey = SHAFT.Properties.browserStack.accessKey();\nplatformVersion = SHAFT.Properties.browserStack.platformVersion();\ndeviceName = SHAFT.Properties.browserStack.deviceName();\nappUrl = SHAFT.Properties.browserStack.appUrl();\ncustomID = SHAFT.Properties.browserStack.customID();\nappName = SHAFT.Properties.browserStack.appName();\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Example"})," :"]}),"\n",(0,o.jsx)(r.p,{children:"you want to set targetBrowserName to MicrosoftEdge insted of default value chrome\nin your before method or before you initiate your driver you should do like below"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:'\t  \n\t@BeforeMethod\n\tpublic void beforeMethod() {\n    \tSHAFT.Properties.web.set().targetBrowserName("MicrosoftEdge");\n        driver = new SHAFT.GUI.WebDriver();\n\t}\n'})}),"\n",(0,o.jsx)(r.p,{children:'you can replace "MicrosoftEdge" with any property from table below .'}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"OR"}),"\nyou can use Browser library from selenium as following"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-java",children:"\timport com.shaft.driver.SHAFT;\n\timport org.openqa.selenium.remote.Browser;\n\timport org.testng.annotations.BeforeMethod;\n\t\n\t@BeforeMethod\n\tpublic void beforeMethod() {\n        SHAFT.Properties.web.set().targetBrowserName(Browser.EDGE.browserName()); ;\n        driver = new SHAFT.GUI.WebDriver();\n\t}\n"})}),"\n",(0,o.jsx)(r.p,{children:"Note that it's recommended to set any static values that won't change during execution, or values that you wish to later override from your CLI execution (CI/CD server) in external property files using the first approach."}),"\n",(0,o.jsx)(r.h3,{id:"cli-based-for-unattended-execution",children:"CLI-based (for unattended execution)"}),"\n",(0,o.jsx)(r.p,{children:"This is the third and final way to set/override SHAFT's existing default configuration. You will usually use this to execute your tests from a CI/CD pipeline.\nCLI properties override the engine's defaults, and any properties that you've already defined in your files."}),"\n",(0,o.jsx)(r.p,{children:"Here's a sample to set values from your test command:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-commandline",children:'mvn -e test "-DretryMaximumNumberOfAttempts=2" "-DexecutionAddress=localhost:4444" "-DtargetOperatingSystem=LINUX" "-DtargetBrowserName=firefox" "-DheadlessExecution=true" "-DgenerateAllureReportArchive=true" "-Dtest=${GLOBAL_TESTING_SCOPE}"\n'})}),"\n",(0,o.jsx)(r.h3,{id:"priorities",children:"Priorities"}),"\n",(0,o.jsxs)(r.p,{children:["Since there are many ways to set SHAFT properties you need to know how the priorities work. The value on the left overrides the value on the right.\n",(0,o.jsx)(r.code,{children:"Hard-coded > CLI > Files > Defaults"})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>i});var o=t(7294);const s={},n=o.createContext(s);function i(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);