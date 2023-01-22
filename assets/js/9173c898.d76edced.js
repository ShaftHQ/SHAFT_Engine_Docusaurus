"use strict";(self.webpackChunkshaft_user_guide=self.webpackChunkshaft_user_guide||[]).push([[2165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={id:"Element_Actions",title:"Element Actions",sidebar_label:"Element Actions"},o=void 0,i={unversionedId:"Keywords/GUI/Element_Actions",id:"Keywords/GUI/Element_Actions",title:"Element Actions",description:"Click on an Element",source:"@site/docs/Keywords/GUI/Element_Actions.md",sourceDirName:"Keywords/GUI",slug:"/Keywords/GUI/Element_Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Element_Actions",draft:!1,editUrl:"https://github.com/ShaftHQ/SHAFT_Engine_Docusaurus/blob/master/docs/Keywords/GUI/Element_Actions.md",tags:[],version:"current",frontMatter:{id:"Element_Actions",title:"Element Actions",sidebar_label:"Element Actions"},sidebar:"docs",previous:{title:"Browser Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Browser_Actions"},next:{title:"Touch Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Keywords/GUI/Touch_Actions"}},c={},s=[{value:"Click on an Element",id:"click-on-an-element",level:3},{value:"Click And Hold",id:"click-and-hold",level:3},{value:"Double Click\u200b",id:"double-click",level:3},{value:"Hover",id:"hover",level:3},{value:"Hover and click",id:"hover-and-click",level:3},{value:"Drag and drop",id:"drag-and-drop",level:3},{value:"Get Tag name",id:"get-tag-name",level:3},{value:"Get the value of an element attribute",id:"get-the-value-of-an-element-attribute",level:3},{value:"Get the value of a CSS property",id:"get-the-value-of-a-css-property",level:3},{value:"Get context handles",id:"get-context-handles",level:3},{value:"Switching focus to a different context",id:"switching-focus-to-a-different-context",level:3},{value:"Get window handles",id:"get-window-handles",level:3},{value:"Switching focus to a different window",id:"switching-focus-to-a-different-window",level:3},{value:"Handling IFrames",id:"handling-iframes",level:3},{value:"Insert text into a text field",id:"insert-text-into-a-text-field",level:3},{value:"Perform Clipboard action",id:"perform-clipboard-action",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet",level:2},{value:"Get elements count",id:"get-elements-count",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet-1",level:2},{value:"Get selected option from a drop down",id:"get-selected-option-from-a-drop-down",level:3},{value:"Select an option from a drop down list",id:"select-an-option-from-a-drop-down-list",level:3},{value:"Sample Code Snippet",id:"sample-code-snippet-2",level:2},{value:"Get size of an element",id:"get-size-of-an-element",level:3},{value:"Get elements text",id:"get-elements-text",level:3},{value:"Get state of an element",id:"get-state-of-an-element",level:3}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"click-on-an-element"},"Click on an Element"),(0,l.kt)("p",null,"In order to interact with elements appearing on web page you'll first need to locate the element using one of WebDriver's locating strategies(",(0,l.kt)("a",{parentName:"p",href:"https://www.selenium.dev/selenium/docs/api/java/org/openqa/selenium/By.html"},"By methods"),") like ID, Class Name,\nXPath, CSS Selectors, link Text, Partial link text, Name, or Tag name."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n//a By object is used to store the locator to your element\nprivate By elementLocator = By.id("sign_in_btn");\n//click on target element\ndriver.element().click(elementLocator);\n')),(0,l.kt)("p",null,"The method click will wait for your target element to be interactable and then attempts to click on it using Selenium WebDriver, if that didn't work it will\nattempt to click using JavaScript"),(0,l.kt)("h3",{id:"click-and-hold"},"Click And Hold"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().clickAndHold(elementLocator);\n")),(0,l.kt)("p",null,"Waits for the element to be clickable, and then clicks and holds it."),(0,l.kt)("h3",{id:"double-click"},"Double Click\u200b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n//store the locator to your element\nBy elementLocator = By.className("double_click_btn");\n//Double click target element\ndriver.element().doubleClick(elementLocator);\n')),(0,l.kt)("h3",{id:"hover"},"Hover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import org.openqa.selenium.By;\n//The locator to your element\nBy elementLocator = By.tagName("span");\n//Hover over target element\ndriver.element().hover(elementLocator);\n')),(0,l.kt)("h3",{id:"hover-and-click"},"Hover and click"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hover over an element to show hover menue then click on one of the displayed options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'By clickable = By.xpath("//a[contains(text(),\'Video Games \') ] ");\nBy hoverItem = By.linkText("Popular Toys");\n\ndriver.element().hoverAndClick(hoverItem, clickable);\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"for multi-level hover menus You need to hover on the category, then hover on a subcategory, and so on until you finally click on the clickable item.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class HoverAndClickDemo {\n    List<By> hoverLocators =new ArrayList<By>();\n    By clickable = By.linkText("Car");\n\n    @Test\n    public void demo() {\n        hoverLocators.add(By.linkText("Popular Toys"));\n        hoverLocators.add(By.xpath("//a[contains(text(),\'Video Games \') ] "));\n\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://phppot.com/demo/multilevel-dropdown-menu-with-pure-css/");\n        driver.element().hoverAndClick(hoverLocators, clickable);\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51627720576_1bd0cf9c6f_z.jpg",alt:"hoverAndClick"})," ",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"drag-and-drop"},"Drag and drop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Drag an element into a target element")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nBy targetElement = By.id("destination");  // Locator to the destination element\n\ndriver.element().dragAndDrop(sourceElement,targetElement);\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Drag an element to a specified position")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'By sourceElement = By.id("draggable");    // Locator to the element you want to drag\nint xPos= 500;\nint yPos= 500;\n\ndriver.element().dragAndDrop(sourceElement,xPos,yPos);\n')),(0,l.kt)("h3",{id:"get-tag-name"},"Get Tag name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String TagName = driver.element().getTagName(ElementLocator);\n")),(0,l.kt)("p",null,"Retrieves tag name from the target element and returns it as a string value."),(0,l.kt)("h3",{id:"get-the-value-of-an-element-attribute"},"Get the value of an element attribute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//The locator to your element\nBy googleSearchBox = By.cssSelector(".gLFyf.gsfi");\n//get the value of the \'name\' attribute\nString attributeValue = driver.element().getAttribute(googleSearchBox, "name");\n')),(0,l.kt)("p",null,"Returns the value of the given attribute as a String,you will allso be able to see something like this\n",(0,l.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51492494310_076bca3fdc.jpg",alt:"report"})," ",(0,l.kt)("br",null),"\nin the automatically generated Allure report, for more on that see ",(0,l.kt)("a",{parentName:"p",href:"#"},"Reporting"),"."),(0,l.kt)("h3",{id:"get-the-value-of-a-css-property"},"Get the value of a CSS property"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String propertyValue = driver.element().getCSSProperty\u200b(elementLocator, "width");\n')),(0,l.kt)("h3",{id:"get-context-handles"},"Get context handle\\s"),(0,l.kt)("p",null,"you need to get the context handle in order to be able to switch back to it"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Return the handle for currently active context.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String currentContext = driver.element().getContext();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Return a list of unique handles for all the currently open contexts.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().getContextHandles();\n")),(0,l.kt)("h3",{id:"switching-focus-to-a-different-context"},"Switching focus to a different context"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().setContext(currentContext);\n")),(0,l.kt)("h3",{id:"get-window-handles"},"Get window handle\\s"),(0,l.kt)("p",null,"you need to get the window handle in order to be able to switch back to it"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Return the handle for currently active window.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String currentWindow = driver.element().getWindowHandle();\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Return a list of unique handles for all the currently open windows.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().getWindowHandles();\n")),(0,l.kt)("h3",{id:"switching-focus-to-a-different-window"},"Switching focus to a different window"),(0,l.kt)("p",null,"switch driver's focus to a different window using its name or handle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().switchToWindow();\n")),(0,l.kt)("h3",{id:"handling-iframes"},"Handling IFrames"),(0,l.kt)("p",null,"In order to interact with elements within IFrames you neeed to first change driver's focus to the IFrame, once done you will need to switch back to the original content"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Switching focus to an IFrame")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'By iFrameLocator = By.id("ifr_id");\ndriver.element().switchToIframe(iFrameLocator );\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"switching back to default content")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"driver.element().switchToDefaultContent();\n")),(0,l.kt)("h3",{id:"insert-text-into-a-text-field"},"Insert text into a text field"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"clear text inside a text field (if any), and insert new text value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'driver.element().type(textFieldLocator, "any text you would like to type");\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Append to existing text")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'driver.element().typeAppend(textFieldLocator, "text added to the end");\n')),(0,l.kt)("h3",{id:"perform-clipboard-action"},"Perform Clipboard action"),(0,l.kt)("p",null,"copy,cut or paste text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'driver.element().clipboardActions(textFieldLocator, "copy");\n')),(0,l.kt)("p",null,'supports the following actions "copy", "paste", "cut", "select all", "unselect"'),(0,l.kt)("h2",{id:"sample-code-snippet"},"Sample Code Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class TypingDemo {\n    By textField = By.id("tinymce");\n    By textIFrame = By.id("mce_0_ifr");\n\n    @Test\n    void type() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://the-internet.herokuapp.com/tinymce");\n        // switch focus to IFrame containing the text field\n        driver.element().switchToIframe(textIFrame );\n        //append text to the end\n        driver.element().typeAppend(textField, "this is added text");\n        // copy the whole paragraph\n        driver.element().clipboardActions(textField,"select all");\n        driver.element().clipboardActions(textField, "copy");\n        //replace original text using type\n        driver.element().type(textField, "new text that overrides old content , ");\n        //paste previously copied paragraph\n        driver.element().clipboardActions(textField, "paste");\n\n    }\n}\n\n')),(0,l.kt)("h3",{id:"get-elements-count"},"Get elements count"),(0,l.kt)("p",null,"to find the number of elements matching a specific locator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int numOfElements = driver.element().getElementsCount(locatorToMultipleElements);\n")),(0,l.kt)("h2",{id:"sample-code-snippet-1"},"Sample Code Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class Demo {\n    private By searchBox = By.name("q");\n    private By results = By.cssSelector("h3.LC20lb");\n\n    @Test\n    public void method() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL("https://www.google.com");\n        driver.element().type(searchBox, "SHAFT_ENGINE");\n        driver.element().keyPress(searchBox, "ENTER");\n        int num = driver.element().getElementsCount(results);\n        System.out.println(num);\n\n    }\n}\n')),(0,l.kt)("h3",{id:"get-selected-option-from-a-drop-down"},"Get selected option from a drop down"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\nString SelectedItem = driver.element().getAttribute(googleSearchBox, "name");\n')),(0,l.kt)("p",null,"Retrieves the selected text from the target drop-down list element and returns it as a string value."),(0,l.kt)("h3",{id:"select-an-option-from-a-drop-down-list"},"Select an option from a drop down list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'//Locator to the Drop Down element\nBy dropDown = By.id("dropdown");\n//Retrieve selected text and store it in a string variable\ndriver.element().select(dropDown, "Option 1");\n')),(0,l.kt)("h2",{id:"sample-code-snippet-2"},"Sample Code Snippet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'\n\npublic class DropDownDemo {\n\n    private By dropDown = By.id("dropdown");\n\n    @Test\n    public void method() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dropdown");\n        driver.element().getSelectedText( dropDown);\n        driver.element().select(dropDown, "Option 1");\n        driver.element().getSelectedText(dropDown);\n\n    }\n\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To verify the results you can use traditional String variables, check SHAFT results in the Allure report (as shown in the image below), or\nyou can use other ",(0,l.kt)("a",{parentName:"li",href:"#"},"verification")," techniques.\n",(0,l.kt)("img",{parentName:"li",src:"https://live.staticflickr.com/65535/51492098708_dd5f557495_z.jpg",alt:"report_2"})," ",(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"get-size-of-an-element"},"Get size of an element"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String elementSize = driver.element().getSize(TargetElementLocator);\n")),(0,l.kt)("p",null,"Retrieves element size from the target element and returns it as a string value."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An alternative to using ",(0,l.kt)("a",{parentName:"li",href:"#get-the-value-of-a-css-property"},"getCSSProperty\u200b")," to get width and height values separately")),(0,l.kt)("h3",{id:"get-elements-text"},"Get elements text"),(0,l.kt)("p",null,"Retrieves text from the target text field and returns it as a string value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"String text = driver.element().getText(textBox);\n")),(0,l.kt)("h3",{id:"get-state-of-an-element"},"Get state of an element"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check if an element is clickable")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class DynamicControlsDemo {\n    By textField=By.xpath("//form[@id=\'input-example\']/input");\n    By changeState=By.xpath("//form[@id=\'input-example\']/button");\n\n    @Test\n    public void alternate() {\n        driver = new SHAFT.GUI.WebDriver();\n        driver.browser().navigateToURL(driver, "https://the-internet.herokuapp.com/dynamic_controls");\n        //--1-- check that initially the text box is not clickable\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        //--2-- press the button to enable the text box\n        driver.element().click(changeState);\n        //--3-- check again whether the text box is clickable\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        //--4-- attempt to click on the text box\n        driver.element().click(textField);\n        //--5-- finally verify the state of the check box\n        ReportManager.log(String.valueOf(ElementActions.isElementClickable(driver, textField)));\n        driver.element().type( textField, "SHAFT is awesome !");\n    }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://live.staticflickr.com/65535/51628756225_c75d0b22c3_z.jpg",alt:"clickable"})," ",(0,l.kt)("br",null)),(0,l.kt)("p",null,"The text field is disabled by default,directly after clicking the enable button the isElementClickable method still returns false because the switching takes some time, ",(0,l.kt)("b",null,"the click method waits for target element to be clickable")," and places the cursor inside the text field, by then the text field is naturally clicable as shown in the previous image captured from the Allure report."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check if an element is displayed")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(driver.element().isElementDisplayed(elementLocator));\n")),(0,l.kt)("p",null,"returns a boolean indicating whether the element is displayed"))}p.isMDXComponent=!0}}]);