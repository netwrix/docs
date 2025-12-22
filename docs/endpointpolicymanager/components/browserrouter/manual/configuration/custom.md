---
title: "Using Custom Policies"
description: "Using Custom Policies"
sidebar_position: 50
---

# Using Custom Policies

Custom policies are useful in a variety of situations. The most common situation concerns a user who
wants to route a website to a browser that isn't Internet Explorer, Edge, Chrome, or Firefox. For
instance, Opera and Vivaldi are two browsers you may have installed on endpoints that you want to
route to.

:::note
For an overview of using custom policies, see the following video:
[Browser Router with Custom Browsers](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/citrixvirtualapps/custombrowsers.md).
:::


You might also want to route websites to virtualized browsers. In this example you can see a
virtualized Firefox. To route to virtualized browsers, simply take the icon's launch target and copy
it.

![about_policypak_browser_router_19](/images/endpointpolicymanager/browserrouter/policy/about_endpointpolicymanager_browser_router_19.webp)

Then, using Endpoint Policy Manager Browser Router, make a custom route and paste the target path
into the **Custom Browser Path** field.

![about_policypak_browser_router_20](/images/endpointpolicymanager/browserrouter/policy/about_endpointpolicymanager_browser_router_20.webp)

This technique works for most virtualized browsers such as Microsoft App-V, VMware ThinApp, etc.
Note that once a virtualized browser is opened, Endpoint Policy Manager Browser Router cannot route
away from those browsers and then back to real browsers. This is because Endpoint Policy Manager
Browser Router's helper extensions are not installed in the virtualized browser.


