---
title: "What is meant by \"Default Browser\" within Endpoint Policy Manager Browser router?"
description: "What is meant by \"Default Browser\" within Endpoint Policy Manager Browser router?"
sidebar_position: 40
---

# What is meant by "Default Browser" within Endpoint Policy Manager Browser router?

Pretend for a second you didn't have Netwrix Endpoint Policy Manager (formerly PolicyPak) and
Endpoint Policy Manager Browser Router installed.

A user on Windows 10 can then set his **Default Browser** from either within a browser, like
Firefox, like this:

![218_1_ppbr-faq-3-pic-1](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_1_ppbr-faq-3-pic-1.webp)

Or, they can go directly into Windows **Default apps** and set the Web Browser like this…

![218_2_ppbr-faq-3-pic-2](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_2_ppbr-faq-3-pic-2.webp)

But as soon as you have Endpoint Policy Manager Browser Router licensed and with ANY Endpoint Policy
Manager Browser Router rules enabled,you will see Endpoint Policy Manager Browser Router Agent as
the **Web Browser** inside Windows 10.

![218_3_ppbr-faq-3-pic-3](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_3_ppbr-faq-3-pic-3.webp)

Then, using Endpoint Policy Manager Browser Router, you can set what the **Default Browser**
policies. Below are two examples on how to do find that.

![218_4_ppbr-faq-3-pic-4](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_4_ppbr-faq-3-pic-4.webp)

![218_5_ppbr-faq-3-pic-5](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_5_ppbr-faq-3-pic-5.webp)

When you set the **Default Browser** using Endpoint Policy Manager to IE, Edge, Chrome, or Firefox,
the operating system will still showEndpoint Policy Manager **Browser Router Agent** as the **Web
Browser**.

![218_6_ppbr-faq-3-pic-6](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_3_ppbr-faq-3-pic-3.webp)

But the user's perception of their Default Browser will be what you set here.

So, when a user clicks on any URL which does not have a route, the default browser, as defined from
Endpoint Policy Manager Browser Router, will open up.

:::note
there is a special Default Browser option available, called **User Selectable**
[Endpoint Policy Manager Browser Router: Set the Windows 10 Default Browser (once) then drift](/docs/endpointpolicymanager/components/browserrouter/videolearningcenter/tipsandtricks/defaultwindows10.md).
:::


You can get more information on theUser Selectable in the Endpoint Policy Manager Browser Router
manual. But in essence the steps are as follows:

**Step 1 –** After **User Selectable** is set, the user can choose their desired browser, for
example, from within Firefox or via the OS selector.

**Step 2 –** The new setting is enacted with a GPupdate

**Step 3 –** Endpoint Policy Manager **Browser Router Agent** is then replaced back in the OS again
as the default.

**Step 4 –** The user will believe that their default browser is actually what has been set here.


