---
title: "Using Special Policy Types for Internet Explorer"
description: "Using Special Policy Types for Internet Explorer"
sidebar_position: 30
---

# Using Special Policy Types for Internet Explorer

There are two special policies that may be used only once per collection (see Figure 37 for
reference). These policies manage how the Windows 10 Edge browser functions alongside Internet
Explorer 11.

:::note
To get an overview of Endpoint Policy Manager Browser Router's special policies for
Microsoft Edge, please see
[Endpoint Policy Manager and Edge ‘Special' policies](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/gettingstarted/edgespecial.md).
:::


The policies are **All intranet to IE** policy and **All Enterprise from Edge to IE** policy.

![about_policypak_browser_router_36](/images/endpointpolicymanager/browserrouter/internetexplorer/about_endpointpolicymanager_browser_router_36.webp)

The **All intranet to IE** policy takes all websites that are already defined in the Intranet zone
and ensure that those sites open in Internet Explorer 11 if the user tries to use Microsoft Edge. In
other words, once this policy is applied, if a user opens an Intranet site using Edge, it will
automatically be routed to Internet Explorer 11.

**All Enterprise from Edge to IE** policy takes all websites that are already defined in the IE
Enterprise site list and routes those to Internet Explorer. In other words, once this policy is
applied, if a user opens any website within Edge that you've set to Enterprise Mode, it will
automatically be routed to Internet Explorer 11.


