---
title: "How-to manually install and enable Endpoint Policy Manager Browser Router (PPBR) extension for Google Chrome?"
description: "How-to manually install and enable Endpoint Policy Manager Browser Router (PPBR) extension for Google Chrome?"
sidebar_position: 60
---

# How-to manually install and enable Endpoint Policy Manager Browser Router (PPBR) extension for Google Chrome?

If you want to install the Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser extension
for Google chrome manually from a local/network path, follow the below steps.

**Step 1 –** Download the PPBR Chrome Extension's .CRX file

**Step 2 –** Copythe PPBR Chrome Extension on Target Computer

**Step 3 –** Google Chrome Registry Settings for Extensions

**Step 4 –** (for end users) How-To Enable PPBR Chrome Extension

## 1. Downloading the PPBR Chrome Extension's .CRX File

Follow these steps to convert the Chrome Web Store link of any Extension to an `.CRX` File.

**Step 1 –** Check the information here:
[What is the Chrome Extension ID for all the published versions of Endpoint Policy Manager Browser Router Client Side Extension?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/troubleshooting/chromeextensionid.md)
Note down the Extension ID. You'll need this step every time we release updates for Software.

**Step 2 –** Append the PPBR Chrome Extension ID with the following URL:
[https://chrome.google.com/webstore/detail/policypak-browser-router/[PPBR-Extension-ID](https://chrome.google.com/webstore/detail/endpointpolicymanager-browser-router/[PPBR-Extension-ID)]

![535_1_image-20191222210303-1](/images/endpointpolicymanager/browserrouter/install/535_1_image-20191222210303-1.webp)

**Step 3 –** Note the PPBR Chrome Extension's Version Number.

**Step 4 –** Find a CRX Extractor tool. There are a variety of them online.  Steps follow are generic and may be different based upon the CRX tool you have chosen.

**Step 5 –** Insert the updated PPBR Chrome Extension URL that you appended in step 2.

![535_3_image-20191222210303-2_457x162](/images/endpointpolicymanager/browserrouter/install/535_3_image-20191222210303-2_457x162.webp)

**Step 6 –** Click **OK**

![535_5_image-20191222210303-3](/images/endpointpolicymanager/browserrouter/install/535_5_image-20191222210303-3.webp)

**Step 7 –** Click on Get .CRX

**Step 8 –** Save the file on network location so end-users can `read/access`.

## 2. Copy the PPBR Chrome Extension on the Target Computer

Copy the` .CRX` extension file using Group Policy Preference item.

**Step 1 –** Go to `Computer Configuration\\Preferences\\Windows Settings\\Files`.

**Step 2 –** Right-click on the **Files** node and select **New** and then **File**.

![535_7_image-20191222210303-4](/images/endpointpolicymanager/browserrouter/install/535_7_image-20191222210303-4.webp)

**Step 3 –** Configure this policy as shown below. Change **Source** and **Destination** paths as
needed.

**Step 4 –** Run `GPUPDATE` on theTarget Computer and verify that the ` .CRX` file is on theexpected
location.

## 3. Google Chrome Registry Settings for Extensions

Follow these steps to only install PPBR Chrome Extension.

**Step 1 –** Launch GPO Item and browse the following location:
`Computer Configuration\\Preferences\\Windows Settings\\Registry`

**Step 2 –** Right-click on **Registry node**, then click on **New** > **Registry Item**

![535_9_image-20191222210303-5](/images/endpointpolicymanager/browserrouter/install/535_9_image-20191222210303-5.webp)

**Step 3 –** Configure the setting as shown below. The value's references are under Chrome REG
section.

Chrome REG:

Create the registry key:

```
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]
```

Create the following registry key values:

```
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]\\path
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]\\path
TYPE: REG_SZVALUE: "C:\\path\\to\\your\\extension.crx"
32-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Google\\Chrome\\Extensions\\[id of your extension crx]\\version
64-bit Windows: HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome\\Extensions\\[id of your extension crx]\\version
TYPE: REG_SZ
VALUE: [version of your .crx as specified in the manifest
```

**Step 4 –** Run `GPUPDATE `on the target computer and verify the results.

## 4. (for end users) How-to Enable PPBR Chrome Extension

This section has to be executed by the end-user.

![535_11_image-20191222210303-6](/images/endpointpolicymanager/browserrouter/install/535_11_image-20191222210303-6.webp)

**Step 1 –** Relaunch Google Chrome and wait for the notification banner, thenclick the **Enable
extension** button.

![535_13_image-20191222210303-7](/images/endpointpolicymanager/browserrouter/install/535_13_image-20191222210303-7.webp)

If you aren't prompted forthe **Enable extension** window, look for this icon -in the Chrome Browser
and follow the instructions in the next step to enable it.

![535_15_image-20191222210303-8](/images/endpointpolicymanager/browserrouter/install/535_15_image-20191222210303-8.webp)

**Step 2 –** Select an option for Endpoint Policy Manager Browser Router Chrome Extension:

![535_17_image-20191222210303-9](/images/endpointpolicymanager/browserrouter/install/535_17_image-20191222210303-9.webp)

**Step 3 –** Click on **Enable extension** button:
