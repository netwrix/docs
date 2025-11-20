---
title: "When I unlicense or remove Endpoint Policy ManagerBrowser Router from scope,Endpoint Policy Manager Browser Router Agent still shows as OS \"default browser\". Why is that and is there a workaround?"
description: "When I unlicense or remove Endpoint Policy ManagerBrowser Router from scope,Endpoint Policy Manager Browser Router Agent still shows as OS \"default browser\". Why is that and is there a workaround?"
sidebar_position: 40
---

# When I unlicense or remove Endpoint Policy ManagerBrowser Router from scope,Endpoint Policy Manager Browser Router Agent still shows as OS "default browser". Why is that and is there a workaround?

On Windows 8.1 or later, once Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router is
licensed, it becomes the "default browser" in the operating system, like what is seen here.

![141_1_img-01](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_3_ppbr-faq-3-pic-3.webp)

However, if you are using the Legacy Browser Router mode and unlicense Endpoint Policy Manager
Browser Router or remove the computer from the scope of any Endpoint Policy Manager Browser Router
rules, you will find thatEndpoint Policy Manager Browser Router Agent is apparently maintained as
the OS's default browser.

This is a "Display Only" and "Cosmetic" issue and not reflective upon reality, this is by design.
Usually, IE will now actually be the default browser as far as the user EXPERIENCES it.

That being said, once you have unlicensedEndpoint Policy Manager Browser Router it is not active any
longer.
Therefore, (when Endpoint Policy Manager Browser Router is not present.) … an end-user could open up
Firefox, Chrome, IE or Edge … like what is seen here…

![141_2_img-02](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_1_ppbr-faq-3-pic-1.webp)

And manually set the default browser, or use the operating system itself to specify the desired
default browser .. like what is seen here…

![141_3_img-03](/images/endpointpolicymanager/browserrouter/defaultbrowser/218_2_ppbr-faq-3-pic-2.webp)

Afterward, they should see the OS default web browser change accordingly and be maintained correctly
at the next login.

:::note
When not using Legacy Browser Router mode and you remove the computer from the scope of
any Endpoint Policy Manager Browser Router rules or unlicenseEndpoint Policy Manager Browser Router
after having a Endpoint Policy Manager Browser Router policy in place the default behavior is to
revert the default browser to the value present beforeEndpoint Policy Manager Browser Router was
enabled/licensed.
:::


What if:

- You really, really don't like Endpoint Policy Manager Browser Router displaying as the default
  browser, even though the problem is only "cosmetic."
- You want to FORCE SET a default browser and ensure it for the user (but this time, not using
  Endpoint Policy Manager Browser Router).
- You want to set a specific browser as the default, THEN let the user change it after you set the
  default, say, to IE.

For either or all of these options…

**Step 1 –** Step 1. ONLY if using the following PolicyPak Client-Side Extensions ADMX setting set
to Enabled, (aka Legacy Browser Router mode), OR if Client-Side Extensions version 2535 or older was
ever installed on the machine.

![141_4_image-20210104150503-1](/images/endpointpolicymanager/browserrouter/install/483_7_image-20210105155954-1.webp)

You have to delete this file first…as a one time action using GPPPrefs if

![141_5_img-04](/images/endpointpolicymanager/troubleshooting/browserrouter/install/141_5_img-04.webp)

**Step 2 –** Step 2. Then if you want to FORCE A PARTICULAR BROWSER VIA POLICY … (pick ONE)

- Use Endpoint Policy Manager File Associations Manager to set HTTP and HTTPS to Internet Explorer.
  This is supported as long as you are NOT using Endpoint Policy Manager Browser Router any
  longer. [Can I use Endpoint Policy ManagerBrowser Router and/or Endpoint Policy Manager File Associations Manager to set the default browser?](/docs/endpointpolicymanager/components/fileassociationsmanager/knowledgebase/troubleshooting/defaultbrowser.md)
- Use the in-box Group Policy method for File / Protocol Associations (not recommended, since you
  have Endpoint Policy Manager File Associations Manager, and this method is not dynamic NOR can you
  use it ALONGSIDEEndpoint Policy Manager File Associations Manager, so it is NOT
  recommended): [https://docs.microsoft.com/en-us/internet-explorer/ie11-deploy-guide/set-the-default-browser-using-group-policy](https://docs.microsoft.com/en-us/internet-explorer/ie11-deploy-guide/set-the-default-browser-using-group-policy)

:::tip
Remember, The two methods above PERMANENTLY AFFIX it to IE, and don't make it changeable.
(Technically, the user CAN change it, but then it's ‘snapped back' every time the user logs off and
on.)
:::


-ANOTHER OPTION- … INSTEAD of forcing a particular browser, you can SET ONE BROWSER as the DEFAULT,
then let the user CHANGE

"How can I set it to IE, then make it changeable by the end-user?"

To do this.. we found a utility, which you can likely DEPLOY ONCE via Endpoint Policy Manager
SCRIPTS on the USER side .. (we didn't test that, and only tested it manually on the user side)…

[http://kolbi.cz/blog/2017/11/10/setdefaultbrowser-set-the-default-browser-per-user-on-windows-10-and-server-2016-build-1607/](http://kolbi.cz/blog/2017/11/10/setdefaultbrowser-set-the-default-browser-per-user-on-windows-10-and-server-2016-build-1607/)

(Endpoint Policy Manager makes no warranties about this tool.)

When it runs.. it works instantly.. and sets the default browser. In this example, we set it to IE.

And then it was later changeable by the user.

![141_6_img-05](/images/endpointpolicymanager/troubleshooting/browserrouter/install/141_6_img-05.webp)

:::note
If you uninstall the Endpoint Policy Manager Client Side Extensions on a machine where
Endpoint Policy Manager Browser Router was set as the default browser then Microsoft Edge will
become the default browser immediately after the Endpoint Policy Manager Client Side Extensions are
uninstalled. You will see the notification below on your screen and if you check the default apps
you will see that Edge has become the default browser.
:::


![141_7_image](/images/endpointpolicymanager/troubleshooting/browserrouter/install/141_7_image.webp)

![141_8_image](/images/endpointpolicymanager/troubleshooting/browserrouter/install/141_8_image.webp)


