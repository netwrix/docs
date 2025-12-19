---
title: "How to Configure Browser Router to use IE Document Modes in Edge IE TAB"
description: "How to Configure Browser Router to use IE Document Modes in Edge IE TAB"
sidebar_position: 80
---

# How to Configure Browser Router to use IE Document Modes in Edge IE TAB

:::note
The IE Tab function is only supported in Edge Chromium Edition. You must have Edge
Chromium Edition installed for these rules to function properly. Follow these steps to configure
Browser Router:
:::


![767_1_image-20210121211003-1](/images/endpointpolicymanager/browserrouter/editpolicytemplate/767_1_image-20210121211003-1.webp)

**Step 1 –** Create a new Browser Router collection, and add a new policy item to redirect the web
site to IE in whichever mode you wish.

![767_2_image-20210121211003-2](/images/endpointpolicymanager/browserrouter/editpolicytemplate/767_2_image-20210121211003-2.webp)

**Step 2 –** Run `GPUPDATE` on the target machine to verify that the policy is working. You should
see your site displayed in the required IE Mode.

:::note
You can press F12 for Developer Tools while in IE, then look under the Emulation tab to
see which mode the page is loaded in.
:::


![767_3_image-20210121211003-3](/images/endpointpolicymanager/browserrouter/editpolicytemplate/767_3_image-20210121211003-3.webp)

**Step 3 –** Now that you have confirmed that the site works in the required IE mode, you can enable
the "Open as IE in Edge tab" mode in the BR Policy.

![767_4_image-20210121211003-4](/images/endpointpolicymanager/browserrouter/editpolicytemplate/767_4_image-20210121211003-4.webp)

**Step 4 –** Run `GPUPDATE` on the target machine, open Internet Explorer, go to the site that
should be redirected to IE in Edge tab mode, then wait 65 seconds or more, refresh page in IE to see
if the policy is working. You should see your site open in a new tab in Edge Chromium and displayed
in the required IE Document Mode.

:::note
IE Mode in Edge takes 65 seconds to take effect after Internet Explorer is running Please
see this kb article for more
information: [Endpoint Policy Manager Browser Router: Internet Explorer in Edge mode](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/ieedgemode.md)

:::


