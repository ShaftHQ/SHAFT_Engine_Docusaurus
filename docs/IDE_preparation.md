---
id: IDE_preparation
title: IDE preparation
sidebar_label: IDE preparation
---
## IntelliJ

### Project Creation
Watch the following video

[![Project Creation](https://img.youtube.com/vi/IhC2vW8YpHY/0.jpg "Click to view on Youtube")](https://youtu.be/IhC2vW8YpHY)

### Upgrading to SHAFT
Watch the following video

[![Upgrading to SHAFT](https://img.youtube.com/vi/2LKCmBndWNo/0.jpg "Click to view on Youtube")](https://youtu.be/2LKCmBndWNo)

### Adding SHAFT listeners
##### Follow these steps:
1. Click on **Run** dorpdown menu and then select **Edit Configuration**

![run](https://live.staticflickr.com/65535/51405765833_62bec5179c_c.jpg)

2. Click on **Edit Configuration** button

![edit](https://live.staticflickr.com/65535/51404743097_5c1f1e559d_c.jpg)

3. Click on **TestNG** button

![template](https://live.staticflickr.com/65535/51406472770_2ca0728272_c.jpg)

4. Click on the **+** icon

![add](screenshots/2.png)

5. In the search box we have to type __com.shaft.tools.\*__ then click on search icon. We have to add each of the following listeners by selecting each one of then and then click on **Ok** button

![listeners](screenshots/3.png)

6. Click on **Apply** button and then on **Ok** button

![applyingConfiguration](screenshots/4.jpg)

## Eclipse
- SHAFT uses [TestNG] for test management, thus you will need to install TestNG plugin.
- TestNG plugin comes pre-installed with IntelliJ but needs to be installed if you are using Eclipse.

### TestNG Plugin Installation
- Step #1: Once Eclipse is launched, click on Help and then Eclipse Marketplace.<br/>
![marketplace](https://cdn.lambdatest.com/blog/wp-content/uploads/2020/07/Eclipse-Marketplace.png)

- Step #2: A new window would open up, type “TestNG” in the Find text box and click on the Go button.<br/>
![search](https://www.lambdatest.com/blog/wp-content/uploads/2020/07/testng.png)

- Step #3: You will now see the search results with TestNG for Eclipse at the top. All you need to do now is click on the Install button next to it.<br/>
![TestNG_plugin](https://www.lambdatest.com/blog/wp-content/uploads/2020/07/TestNG-for-Eclipse.png)

- Step #4: Resolving of features might take up a few minutes after which you need to verify that the checkbox for TestNG is checked and click on the Confirm button.<br/>
![install](https://www.lambdatest.com/blog/wp-content/uploads/2020/07/testng-with-eclipes.png)

- Step #5: Accept the license and click on the Finish button.<br/>
![accept](https://www.lambdatest.com/blog/wp-content/uploads/2020/07/TestNG-installation.png)

- Notes:
  - Eclipse might show a warning regarding the installation of unsigned software, choose install anyway.<br/>
  - For the change to be effective, Eclipse will prompt for a re-start, choose re-start now.

### Project Creation
[![Project Creation](https://img.youtube.com/vi/3TYGteD843M/0.jpg "Click to view on Youtube")](https://www.youtube.com/watch?v=3TYGteD843M)

[TestNG]:<https://testng.org/doc/>