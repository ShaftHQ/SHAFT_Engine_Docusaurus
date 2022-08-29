(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(6),i=(n(0),n(97)),c={id:"Touch_Actions",title:"Touch Actions",sidebar_label:"Touch Actions"},r={unversionedId:"Touch_Actions",id:"Touch_Actions",isDocsHomePage:!1,title:"Touch Actions",description:"We can interact with Touch Actions via the following methods:",source:"@site/docs/Touch_Actions.md",permalink:"/SHAFT_Engine_Docusaurus/docs/Touch_Actions",editUrl:"https://shafthq.github.io/SHAFT_Engine_Docusaurus/edit/master/website/docs/Touch_Actions.md",sidebar_label:"Touch Actions",sidebar:"someSidebar",previous:{title:"Element Actions",permalink:"/SHAFT_Engine_Docusaurus/docs/Element_Actions"},next:{title:"Request Builder",permalink:"/SHAFT_Engine_Docusaurus/docs/Request_Builder"}},l=[{value:"performElementAction():",id:"performelementaction",children:[]},{value:"nativeKeyboardKeyPress():",id:"nativekeyboardkeypress",children:[]},{value:"hideNativeKeyboard():",id:"hidenativekeyboard",children:[]},{value:"waitUntilElementIsVisible():",id:"waituntilelementisvisible",children:[]},{value:"pinchToZoom():",id:"pinchtozoom",children:[]},{value:"activateAppFromBackground():",id:"activateappfrombackground",children:[]},{value:"tap methods:",id:"tap-methods",children:[{value:"tap():",id:"tap",children:[]},{value:"tap():",id:"tap-1",children:[]},{value:"doubleTap():",id:"doubletap",children:[]},{value:"longTap():",id:"longtap",children:[]}]},{value:"swipe methods:",id:"swipe-methods",children:[{value:"1. swipeToElement():",id:"1-swipetoelement",children:[]},{value:"2. swipeByOffset():",id:"2-swipebyoffset",children:[]},{value:"3. swipeElementIntoView():",id:"3-swipeelementintoview",children:[]},{value:"4. swipeElementIntoView():",id:"4-swipeelementintoview",children:[]},{value:"5. swipeElementIntoView():",id:"5-swipeelementintoview",children:[]},{value:"6. swipeElementIntoView():",id:"6-swipeelementintoview",children:[]}]},{value:"sendAppToBackground methods:",id:"sendapptobackground-methods",children:[{value:"1. sendAppToBackground():",id:"1-sendapptobackground",children:[]},{value:"2. sendAppToBackground():",id:"2-sendapptobackground",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"we-can-interact-with-touch-actions-via-the-following-methods"},"We can interact with Touch Actions via the following methods:"),Object(i.b)("h3",{id:"performelementaction"},"performElementAction():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to call the Element Actions within the current Touch Actions instance. For example, in case of trying to tap a text box to type something. In that case we have to perform type(), an element action, within the tap(), the touch action. "),Object(i.b)("li",{parentName:"ul"},"This method returns a WebDriverElementActions object.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).touchMethod(element locator).performElementAction().touchMethod(element, String "");\n    }\n\n    @Test2\n    public void touchActions(){\n        driver.element().performTouchAction()\n                .tap(locator)\n                .performElementAction()\n                .type(locator, String "")\n    }\n}\n')),Object(i.b)("h3",{id:"nativekeyboardkeypress"},"nativeKeyboardKeyPress():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to send a keypress via the device soft keyboard. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: key - the key that should be pressed."),Object(i.b)("li",{parentName:"ul"},"This method returns a self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).touchMethod(element locator).nativeKeyboardKeyPress(KeyboardKeys key);\n    }\n}\n")),Object(i.b)("h3",{id:"hidenativekeyboard"},"hideNativeKeyboard():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to hide the device native soft keyboard. "),Object(i.b)("li",{parentName:"ul"},"This method returns a self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).hideNativeKeyboard();\n    }\n}\n")),Object(i.b)("h3",{id:"waituntilelementisvisible"},"waitUntilElementIsVisible():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to wait until a specific element is now visible on the current screen."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementReferenceScreenshot - relative path to the reference image from the local object repository."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).waitUntilElementIsVisible(String elementReferenceScreenshot);\n    }\n}\n")),Object(i.b)("h3",{id:"pinchtozoom"},"pinchToZoom():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to  to zoom the current screen IN/ OUT in case of zoom enabled screen."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: zoomDirection - ZoomDirection.IN or OUT."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).pinchToZoom(ZoomDirection zoomDirection);\n    }\n}\n")),Object(i.b)("h3",{id:"activateappfrombackground"},"activateAppFromBackground():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to activate an app that has been previously deactivated or sent to the background."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: appPackageName - the full name for the app package that you want to activate. for example ","[com.apple.Preferences]"," or ","[io.appium.android.apis]"),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).activateAppFromBackground(String appPackageName);\n    }\n}\n")),Object(i.b)("h2",{id:"tap-methods"},"tap methods:"),Object(i.b)("h3",{id:"tap"},"tap():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to tap an element once on a touch-enabled screen. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).tap(element locator);\n    }\n}\n")),Object(i.b)("h3",{id:"tap-1"},"tap():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to tap an element once on a touch-enabled screen. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementReferenceScreenshot - relative path to the reference image from the local object repository."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).tap(String elementReferenceScreenshot);\n    }\n}\n")),Object(i.b)("h3",{id:"doubletap"},"doubleTap():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to double-taps an element on a touch-enabled screen. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).doubleTap(element locator);\n    }\n}\n")),Object(i.b)("h3",{id:"longtap"},"longTap():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to perform a long-tap on an element to trigger the context menu on a touch-enabled screen. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc)."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).longTap(element locator);\n    }\n}\n")),Object(i.b)("h2",{id:"swipe-methods"},"swipe methods:"),Object(i.b)("h3",{id:"1-swipetoelement"},"1. swipeToElement():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to swipe the sourceElement onto the destinationElement on a touch-enabled screen."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"sourceElementLocator - the locator of the webElement that needs to be swiped (By xpath, id, selector, name ...etc)."),Object(i.b)("li",{parentName:"ol"},"destinationElementLocator - the locator of the webElement that you'll drop the sourceElement on (By xpath, id, selector, name ...etc)."))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeToElement(element sourceElementLocator, element destinationElementLocator);\n    }\n}\n")),Object(i.b)("h3",{id:"2-swipebyoffset"},"2. swipeByOffset():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to swipe an element with the desired x and y offset. Swiping direction is determined by the positive/negative nature of the offset. Swiping destination is determined by the value of the offset."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: elementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc).",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},'xOffset - the horizontal offset by which the element should be swiped. positive value is "right" and negative value is "left".'),Object(i.b)("li",{parentName:"ol"},'yOffset - the vertical offset by which the element should be swiped. positive value is "down" and negative value is "up".'))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeByOffset(element locator, int xoffset, element destinationElementLocatorint yoffset);\n    }\n}\n")),Object(i.b)("h3",{id:"3-swipeelementintoview"},"3. swipeElementIntoView():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to scroll the element into the view in case of native mobile elements."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"targetElementLocator - the locator of the webElement under test (By xpath, id, selector, name ...etc) ."),Object(i.b)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element locator targetElementLocator, SwipeDirection swipeDirection);\n    }\n}\n")),Object(i.b)("h3",{id:"4-swipeelementintoview"},"4. swipeElementIntoView():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to scroll element into the view using the new W3C compliant actions for android and ios and AI for image identification."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"elementReferenceScreenshot - relative path to the reference image from the local object repository. "),Object(i.b)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(String elementReferenceScreenshot, SwipeDirection swipeDirection);\n    }\n}\n")),Object(i.b)("h3",{id:"5-swipeelementintoview"},"5. swipeElementIntoView():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to scroll element into the view using the new W3C compliant actions for android and ios and AI for image identification."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"scrollableElementLocator - the locator of the container/view/scrollable webElement that the scroll action will be performed inside."),Object(i.b)("li",{parentName:"ol"},"elementReferenceScreenshot - relative path to the reference image from the local object repository. "),Object(i.b)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element scrollableElementLocator, String elementReferenceScreenshot, SwipeDirection swipeDirection);\n    }\n}\n")),Object(i.b)("h3",{id:"6-swipeelementintoview"},"6. swipeElementIntoView():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to scroll element into view using the new W3C compliant actions for android and ios."),Object(i.b)("li",{parentName:"ul"},"Needed parameters: ",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"scrollableElementLocator - the locator of the container/view/scrollable webElement that the scroll action will be performed inside."),Object(i.b)("li",{parentName:"ol"},"targetElementLocator - the locator of the webElement that you want to scroll to under test (By xpath, id, selector, name ...etc). "),Object(i.b)("li",{parentName:"ol"},"swipeDirection - SwipeDirection.DOWN, UP, RIGHT, or LEFT."))),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n         new TouchActions(driver).swipeElementIntoView(element scrollableElementLocator, element targetElementLocator, SwipeDirection swipeDirection);\n    }\n}\n")),Object(i.b)("h2",{id:"sendapptobackground-methods"},"sendAppToBackground methods:"),Object(i.b)("h3",{id:"1-sendapptobackground"},"1. sendAppToBackground():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to send the currently active app to the background, and return after a certain number of seconds. "),Object(i.b)("li",{parentName:"ul"},"Needed parameters: secondsToSpendInTheBackground - number of seconds before returning to the app."),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).sendAppToBackground(int secondsToSpendInTheBackground);\n    }\n}\n")),Object(i.b)("h3",{id:"2-sendapptobackground"},"2. sendAppToBackground():"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We use this method to send the currently active app to the background and leave the app deactivated. "),Object(i.b)("li",{parentName:"ul"},"This method returns a  self-reference to be used to chain actions.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import com.shaft.gui.element.TouchActions;\npublic class Testing {\n    @Test\n    public void touchActions(){\n        new TouchActions(driver).sendAppToBackground();\n    }\n}\n")))}b.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.a.createElement(d,r(r({ref:t},s),{},{components:n})):a.a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);