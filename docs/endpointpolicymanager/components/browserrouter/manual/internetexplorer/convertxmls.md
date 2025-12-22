---
title: "Converting Existing IE Site List XMLs"
description: "Converting Existing IE Site List XMLs"
sidebar_position: 20
---

# Converting Existing IE Site List XMLs

:::note
To get an overview on how to convert existing IE site lists, please see:
[Internet Explorer to Endpoint Policy Manager Browser Router Site lists](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/iesitelists.md).
:::


Now let's see how you can take a Microsoft Enterprise Mode Internet Explorer site list and quickly
convert it to be used in Endpoint Policy Manager Browser Router. This saves you the time and trouble
of converting all of the list information by hand.

First, you need an Enterprise Mode site list. If you don't have an existing site list already,
Microsoft has a tool you can use to create these lists that you can download at:
[https://www.microsoft.com/en-us/download/details.aspx?id=49974](https://www.microsoft.com/en-us/download/details.aspx?id=49974).
Simply run the tool and add the sites along with their necessary parameters as is shown below.

![about_policypak_browser_router_31](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_31.webp)

When this is complete, save the list as an XML file. Once you have a list, create a **From
Enterprise Mode Site List** rule using Endpoint Policy Manager Browser Router.

![about_policypak_browser_router_32](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_32.webp)

You will then be prompted to point to the created list. Once selected, a pop-up will confirm the
number of rules being imported. You can choose to import the rules into the existing collection or a
new collection.

![about_policypak_browser_router_33](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_33.webp)

The imported rules now appear.

![about_policypak_browser_router_34](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_34.webp)

You can review any of the rules to confirm or change their settings.

![about_policypak_browser_router_35](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_35.webp)


