"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[9841],{690:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(5893),a=i(1151);const o={id:"ForceFail",title:"Force Fail",sidebar_labe:"Force Fail"},n=void 0,r={id:"Keywords/Validations/ForceFail",title:"Force Fail",description:"We can make a customized messages on reports and execute the perform() method via using the forceFails by using the Class ValidationsExecutor through using the following methods:",source:"@site/docs/Keywords/Validations/ForceFail.md",sourceDirName:"Keywords/Validations",slug:"/Keywords/Validations/ForceFail",permalink:"/docs/Keywords/Validations/ForceFail",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/Validations/ForceFail.md",tags:[],version:"current",frontMatter:{id:"ForceFail",title:"Force Fail",sidebar_labe:"Force Fail"},sidebar:"docs",previous:{title:"Number",permalink:"/docs/Keywords/Validations/Nums"},next:{title:"Browser",permalink:"/docs/Configuration/BrowserRelatedFeatures"}},l={},c=[{value:"We can make a customized messages on reports and execute the perform() method via using the forceFails by using the <em>Class ValidationsExecutor</em> through using the following methods:",id:"we-can-make-a-customized-messages-on-reports-and-execute-the-perform-method-via-using-the-forcefails-by-using-the-class-validationsexecutor-through-using-the-following-methods",level:4},{value:"withCustomReportMessage():",id:"withcustomreportmessage",level:3},{value:"perform():",id:"perform",level:4}];function d(e){const t={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h4,{id:"we-can-make-a-customized-messages-on-reports-and-execute-the-perform-method-via-using-the-forcefails-by-using-the-class-validationsexecutor-through-using-the-following-methods",children:["We can make a customized messages on reports and execute the perform() method via using the forceFails by using the ",(0,s.jsx)(t.em,{children:"Class ValidationsExecutor"})," through using the following methods:"]}),"\n",(0,s.jsx)(t.h3,{id:"withcustomreportmessage",children:"withCustomReportMessage():"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We use this method to set a customized business-readable message that will appear in the execution report instead of the technical log message which will be nested under it."}),"\n",(0,s.jsx)(t.li,{children:"Needed parameters: customReportMessage - the message that you would like to describe this validation in the execution report."}),"\n",(0,s.jsx)(t.li,{children:'This method returns the current ValidationsExecutor object so that you can call the "perform()" method and execute this validation.'}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().forceFail().withCustomReportMessage(String customReportMessage).perform();\n        //make verification\n        Validations.verifyThat().forceFail().withCustomReportMessage(String customReportMessage).perform();\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"perform",children:"perform():"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We use this method to Execute this validation as without using perform() method the validation method will note be executed regardless on which level we are trying to execute the validation; browser, element, object, number, etc. like previously noticed in the all last examples."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //file\n        //make assertion\n        Validations.assertThat().file(folderRelativePath, file name).doesNotExist().perform();\n        //make verification\n        Validations.verifyThat().file(folderRelativePath, file name).doesNotExist().perform();\n\n        //number\n        //make assertion\n        Validations.assertThat().number((Number) actualNumber).isEqualTo((Number) expectedValue).perform();\n        //make verification\n        Validations.verifyThat().number((Number) actualNumber).isEqualTo((Number) expectedValue).perform();\n\n        //object\n        //make assertion\n        Validations.assertThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).perform();\n        //make verification\n        Validations.verifyThat().object((Object) actualObject).isEqualTo((Object) expectedValue)).per\n        \n        //element\n        //make assertion\n        Validations.assertThat().element(driver, locator).exists().perform();\n        //make verification\n        Validations.verifyThat().element(driver, locator).exists().perform();\n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>n});var s=i(7294);const a={},o=s.createContext(a);function n(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);