---
title: "How can I present a custom dialog (or no dialog) if Browser Router (or the CSE) stops working or crashes?"
description: "How can I present a custom dialog (or no dialog) if Browser Router (or the CSE) stops working or crashes?"
sidebar_position: 150
---

# How can I present a custom dialog (or no dialog) if Browser Router (or the CSE) stops working or crashes?

Using the Netwrix Endpoint Policy Manager (formerly PolicyPak) ADMX files, you can use the "Show
error message dialog when URL routing is not possible" setting.

Note that when the setting is:

1. Default: It will use the default text.
2. Enabled: You can specify your own dialog title and text. NOTE that HTML is NOT supported. Must be
   straight text.
3. Disabled: No dialog will appear if Endpoint Policy Manager Endpoint Policy Manager Browser Router
   or the CSE has a problem. This could be desirable, but also means that functions will just stop
   with no notification.

![780_1_img-01_950x653](/images/endpointpolicymanager/troubleshooting/780_1_img-01_950x653.webp)

