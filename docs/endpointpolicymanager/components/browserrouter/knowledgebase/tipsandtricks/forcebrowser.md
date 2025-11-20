---
title: "How can I use Endpoint Policy Manager Browser router to force people to always use the SAME browser?"
description: "How can I use Endpoint Policy Manager Browser router to force people to always use the SAME browser?"
sidebar_position: 20
---

# How can I use Endpoint Policy Manager Browser router to force people to always use the SAME browser?

First, choose a common page to start each browser on, for example google.com, or a corporate home
page.

Then configure each browser to open this page every time it is started. You simply use Netwrix
Endpoint Policy Manager (formerly PolicyPak) **Application Settings Manager** (not Endpoint Policy
Manager Browser Router) to set the following values.

Firefox

![48_1_image001](/images/endpointpolicymanager/browserrouter/48_1_image001.webp)

Chrome

![48_2_image002](/images/endpointpolicymanager/browserrouter/48_2_image002.webp)

![48_3_image003](/images/endpointpolicymanager/browserrouter/48_3_image003.webp)

Internet Explorer

![48_4_image004](/images/endpointpolicymanager/browserrouter/48_4_image004.webp)

Create a Policy that always opens a specific browser when a specific page is requested, for example,
the home page configured above.

![48_5_image005](/images/endpointpolicymanager/browserrouter/48_5_image005.webp)

In this example,when Firefox or Internet Explorer is started, Browser Router will immediately close
that browser and open Chrome.


