"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[5850],{8815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(5893),s=n(1151);const a={id:"Response",title:"API",sidebar_labe:"API"},o=void 0,l={id:"Keywords/Validations/Response",title:"API",description:"We can make many assertions and verifications on API response by using the Class RestValidationsBuilder through using the following methods:",source:"@site/docs/Keywords/Validations/Response.md",sourceDirName:"Keywords/Validations",slug:"/Keywords/Validations/Response",permalink:"/docs/Keywords/Validations/Response",draft:!1,unlisted:!1,editUrl:"https://github.com/ShaftHQ/shafthq.github.io/blob/master/docs/Keywords/Validations/Response.md",tags:[],version:"current",frontMatter:{id:"Response",title:"API",sidebar_labe:"API"},sidebar:"docs",previous:{title:"Element",permalink:"/docs/Keywords/Validations/Elements"},next:{title:"File",permalink:"/docs/Keywords/Validations/Files"}},r={},d=[{value:"We can make many assertions and verifications on API response by using the <em>Class RestValidationsBuilder</em> through using the following methods:",id:"we-can-make-many-assertions-and-verifications-on-api-response-by-using-the-class-restvalidationsbuilder-through-using-the-following-methods",level:4},{value:"isEqualToFileContent():",id:"isequaltofilecontent",level:3},{value:"doesNotEqualFileContent():",id:"doesnotequalfilecontent",level:3},{value:"containsFileContent():",id:"containsfilecontent",level:3},{value:"doesNotContainFileContent():",id:"doesnotcontainfilecontent",level:3},{value:"extractedJsonValue():",id:"extractedjsonvalue",level:3},{value:"matchesSchema():",id:"matchesschema",level:3},{value:"doesNotMatchSchema():",id:"doesnotmatchschema",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h4,{id:"we-can-make-many-assertions-and-verifications-on-api-response-by-using-the-class-restvalidationsbuilder-through-using-the-following-methods",children:["We can make many assertions and verifications on API response by using the ",(0,i.jsx)(t.em,{children:"Class RestValidationsBuilder"})," through using the following methods:"]}),"\n",(0,i.jsx)(t.h3,{id:"isequaltofilecontent",children:"isEqualToFileContent():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object is equal to the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).isEqualToFileContent(String fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).isEqualToFileContent(String fileRelativePath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doesnotequalfilecontent",children:"doesNotEqualFileContent():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object is not equal to the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).doesNotEqualFileContent(String fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).doesNotEqualFileContent(String fileRelativePath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"containsfilecontent",children:"containsFileContent():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object contains the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).containsFileContent(String fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).containsFileContent(String fileRelativePath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doesnotcontainfilecontent",children:"doesNotContainFileContent():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object does not contain the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).doesNotContainFileContent(String fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).doesNotContainFileContent(String fileRelativePath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"extractedjsonvalue",children:"extractedJsonValue():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to to extract a certain value from the provided actual response object and check against it."}),"\n",(0,i.jsxs)(t.li,{children:["Needed parameters: jsonPath - JSONPath of the target value; the JSONPath expression that will be evaluated in order to extract the desired value [without the trailing $.] , please refer to these urls for examples: ",(0,i.jsx)(t.a,{href:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html",children:"https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html"})," ",(0,i.jsx)(t.a,{href:"http://jsonpath.com/",children:"http://jsonpath.com/"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"This method returns a NativeValidationsBuilder object to continue building your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).extractedJsonValue(String jsonPath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).extractedJsonValue(String jsonPath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"matchesschema",children:"matchesSchema():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object matches the schema for the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat(.response(Object response).matchesSchema(String  fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).matchesSchema(String fileRelativePath).perform();\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"doesnotmatchschema",children:"doesNotMatchSchema():"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We use this method to check if the content of the provided actual response object matches the schema for the expected file content."}),"\n",(0,i.jsx)(t.li,{children:"Needed parameters: fileRelativePath - relative path to the target expected response file."}),"\n",(0,i.jsx)(t.li,{children:"This method returns a ValidationsExecutor object to set your custom validation message (if needed) and then perform() your validation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import com.shaft.validation.Validations;\npublic class Testing {\n    @Test\n    public void testValidations(){\n        //make assertion\n        Validations.assertThat().response(Object response).doesNotMatchSchema(String fileRelativePath).perform();\n        //make verification\n        Validations.verifyThat().response(Object response).doesNotMatchSchema(String fileRelativePath).perform();\n    }\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(7294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);