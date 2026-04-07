---
title: "How do I revert to \"Legacy Browser Router Method & Features\" if directed?"
description: "How do I revert to \"Legacy Browser Router Method & Features\" if directed?"
sidebar_position: 140
---

# How do I revert to "Legacy Browser Router Method & Features" if directed?

If you are having a problem with Netwrix PolicyPak Browser Router
(PPBR) not working as expected, you may be asked by tech support to "Revert to Legacy Browser Router
Method & Features".

First, be sure you are eligible to use this function by copying the latest PolicyPak
`ADMX` files to your Central Store or using PolicyPak Cloud.

Directions for Central Store:
[Troubleshooting with ADMX files](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Directions for PolicyPak Cloud (if they are not already pre-placed
there):[PolicyPakCloud: Upload and use your own ADMX files to PolicyPak Cloud](/docs/policypak/deliverymethods/cloud/videos/gettingstarted/admxfiles.md)

Then, the setting you should use if directed by support is entitled:

Computer Configuration | Policies | Admin Templates | PolicyPak ADMX Settings |
Client-side Extensions | Browser Router | Revert to Legacy Browser Router Method & Features and set
to enabled to return back to the legacy behavior.

![764_1_image-20201027210325-1_950x612](/images/policypak/troubleshooting/browserrouter/764_1_image-20201027210325-1_950x612.webp)

## What does "Revert to Legacy Browser Router Method & Features" mean?

As the product evolved, Browser Router changed what it did to make it better, faster. When
interacting with some third-party software, Browser Router is prevented from performing some of its
tasks that relied on the new method.

By establishing to use Legacy Browser Router Method & Features, Browser Router is returned to its
original methods. What this essentially means is:

- Instead of immediate application of Browser Router settings, a re-login will be required.
- Browser Router will not route from external third-party applications (Skype, Slack, etc.) on
  non-domain joined devices without interaction. In Legacy mode, the user must set the PolicyPak Browser Router agent as the default browser manually – e.g. If a browser such as
  Chrome and Firefox are set as default, the default cannot be updated VIA policy)

An example of the user required to manually specify PolicyPak Browser Router can be
seen here.

![764_3_image-20201027210423-2](/images/policypak/troubleshooting/browserrouter/764_3_image-20201027210423-2.webp)


