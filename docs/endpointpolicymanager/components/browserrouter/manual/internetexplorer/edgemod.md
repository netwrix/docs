---
title: "Internet Explorer in Edge Mode"
description: "Internet Explorer in Edge Mode"
sidebar_position: 10
---

## Internet Explorer in Edge Mode

:::note
To get an overview of Endpoint Policy Manager Browser Router and Internet Explorer in Edge
Mode, please see:
[Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/ieedgemode.md).
:::


If you want to stay with a Microsoft browser, you want your user to use Edge rather than IE. But
some intranet sites don't support Edge, so you are forced to use IE. However, instead of forcing
users to open a dedicated IE session for these sites, you can use Endpoint Policy Manager Browser
Router to enforce IE in Edge for any site of your choosing. In other words, it tucks IE tabs into
the Edge browser.

:::warning
Be aware that this is only guaranteed to work in the 2004 version of Windows 10,
however, it might work in versions 1909, 1903, and 1809.
:::


Create a rule for
[www.policypak.com](https://www.policypak.com/video/endpointpolicymanager-browser-router-and-ports.html) and
assign it to IE. This time select **Open as IE in Edge tab** .

![about_policypak_browser_router_29](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_29.webp)

When the user logs on and tries to access [www.policypak.com](https://www.policypak.com/) they should
see it open as an IE tab in Edge. We say should because the rule will not work right away. There is
a detail called the 65 second rule, which you can read more about here
[https://docs.microsoft.com/en-us/microsoft-edge/deploy/emie-to-improve-compatibility](https://www.policypak.com/video/endpointpolicymanager-troubleshooting-with-admx-files.html).
From the first time a user accesses
[www.policypak.com](https://www.policypak.com/knowledge-base/browser-router-troubleshooting/how-to-quickly-troubleshoot-endpointpolicymanager-browser-router.html),
a period of 65 seconds or so has to transpire until the rule comes fully into effect. Here you can
see that the Endpoint Policy Manager website now appears in IE mode within the Edge browser itself:

![about_policypak_browser_router_30](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_30.webp)

### Converting Existing IE Site List XMLs

:::note
To get an overview on how to convert existing IE site lists, please see
[Internet Explorer to Endpoint Policy Manager Browser Router Site lists](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/iesitelists.md).
:::


See how you can take a Microsoft Enterprise Mode Internet Explorer site list and quickly convert it
to be used in Endpoint Policy Manager Browser Router. This saves you the time and trouble of
converting all of the list information by hand.

First, you need an Enterprise Mode site list. If you don't have an existing site list already,
Microsoft has a tool you can use to create these lists that you can download at
[https://www.microsoft.com/en-us/download/details.aspx?id=49974](https://www.microsoft.com/en-us/download/details.aspx?id=49974).
Simply run the tool and add the sites along with their necessary parameters.

![about_policypak_browser_router_31](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_31.webp)

When this is complete, save the list as an XML file. Once you have a list, create a **From
Enterprise Mode Site List** rule using Endpoint Policy Manager Browser Router.

![about_policypak_browser_router_32](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_32.webp)

You are then prompted to point to the created list. Once selected, a pop-up confirms the number of
rules being imported. You can choose to import the rules into the existing collection or a new
collection.

![about_policypak_browser_router_33](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_33.webp)

The imported rules now appear.

![about_policypak_browser_router_34](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_34.webp)

You can review any of the rules to confirm or change their settings.

![about_policypak_browser_router_35](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_35.webp)

### Using Special Policy Types for Internet Explorer

There are two special policies that may be used only once per collection . These policies manage how
the Windows 10 Edge browser functions alongside Internet Explorer 11.

:::note
To get an overview of Endpoint Policy Manager Browser Router's special policies for
Microsoft Edge, please see
[Endpoint Policy Manager and Edge ‘Special' policies](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/gettingstarted/edgespecial.md).
:::


The policies are **All intranet to IE** policy and **All Enterprise from Edge to I**E policy.

![about_policypak_browser_router_36](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_36.webp)

The **All intranet to IE** policy will take all websites that are already defined in the Intranet
zone and ensure that those sites open in Internet Explorer 11 whenever the user tries to use
Microsoft Edge. In other words, once this policy is applied, if a user opens an Intranet site using
Edge, it is automatically routed to Internet Explorer 11.

All Enterprise from Edge to IE policy will take all websites that are already defined in the IE
Enterprise site list and route them to Internet Explorer. In other words, once this policy is
applied, if a user opens any website within Edge that you've set to Enterprise Mode, it is
automatically routed to Internet Explorer 11.


