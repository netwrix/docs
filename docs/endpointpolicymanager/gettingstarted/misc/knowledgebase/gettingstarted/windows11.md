---
title: "How does Endpoint Policy Manager support (and not support) Windows 11?"
description: "How does Endpoint Policy Manager support (and not support) Windows 11?"
sidebar_position: 40
---

# How does Endpoint Policy Manager support (and not support) Windows 11?

For the best compatibility, you should use Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE
version 3068 and later when you use Windows 11.

Here's the breakdown of some specific Endpoint Policy Manager components which you might want to
learn about with regard to Windows 11.

## Endpoint Policy Manager Browser Router (with Windows 11)

Internet Explorer is absent in Windows 11, but there is IE Mode within Windows 11 and Edge.

IE mode still generally supports the following constructs and ideas (which you may be using with
Endpoint Policy Manager ):

- Document Modes (which you can implement via Endpoint Policy Manager Browser Router)
- ActiveX Controls (which you can permit installation via Endpoint Policy Manager Least Privilege
  Manager)
- Java support (which you can implement using Endpoint Policy Manager Java Rules Manager)
- Browser Helper Objects (which you can implement using Endpoint Policy Manager Application Settings
  Manager)
- Most IE Group Policy Settings which affect zone settings and protected mode settings (which you
  can dictate via GPO, Endpoint Policy Manager, and MDM or Endpoint Policy Manager Cloud.)

Before CSE version 3068, Endpoint Policy Manager Browser Router isn't aware when Internet Explorer
(the full application) is absent. After CSE version 3068, Endpoint Policy Manager Browser Router is
aware when Internet Explorer (the full application) is absent, and only IE Mode within Edge remains.

The updated behavior with Windows 11 and CSE version 3068 and later is that routes requested to go
to IE should go to IE in Edge mode when possible.

The general rules are as follows:

## Example 1: Explicit URL specifying Internet Explorer.

If you have an explicit route to a URL and specify Internet Explorer, Endpoint Policy Manager
Browser Router will attempt to invoke IE in Edge mode. An explicit route could be something like
https://www.policypak.com/webinar.

An example can be seen below. Note it doesn't matter if the pulldown is set for **Open in standalone
IE** or **Open as IE in Edge tab** is set. Those settings only matter for Windows 10 and are ignored
in Windows 11.

![736_1_image-20220128125242-1](/images/endpointpolicymanager/requirements/support/736_1_image-20220128125242-1.webp)

## Example 2: Using Wildcards (or RegEx or Internet Security Zone) and attempting to set the browser to Internet Explorer

Since there is no IE 11 in Windows 11, existing routes set like what's seen here cannot work as
expected.

Starting with Endpoint Policy Manager CSE 3068 on Windows 11, Endpoint Policy Manager Browser Router
will route these to the Default Browser.

![736_2_image-20220128125242-2](/images/endpointpolicymanager/requirements/support/736_2_image-20220128125242-2.webp)

## How are Default Browser Policies handled (With Windows 11)?

Note there is a Endpoint Policy Manager Browser Router policy to set Default Browser which you might
have already set. Windows 11 and Endpoint Policy Manager CSE version 3068 and later will see this
and make a decision accordingly if you've set this to Internet Explorer.

:::note
Windows 10 will honor the Internet explorer setting, but Windows 11 needs to have a plan.
:::


![736_3_image-20220128125242-3](/images/endpointpolicymanager/requirements/support/736_3_image-20220128125242-3.webp)

- If you use Endpoint Policy Manager Browser Router to specify a Default Browser (Edge, Chrome,
  Firefox, Custom, or User Selectable), you will get what you expect.
- If you have selected nothing (that is, you have no Endpoint Policy Manager Browser Router Default
  Browser policy) then the default will be the User's selected browser.
- If you select Internet Explorer as your Default Browser, then CSE version 3068 and later on
  Windows 11 will choose Edge automatically.
- If you select a Default Browser (like Firefox or Chrome) but the browser is absent on the machine,
  Endpoint Policy Manager CSE version 3068 and later on Windows 11 will choose Edge automatically.

## Endpoint Policy Manager Start Screen & Taskbar Manager (with Windows 11)

Managing the Taskbar with Endpoint Policy Manager for Windows 10 and 11 is exactly the same. You can
use Endpoint Policy Manager Start Screen & Taskbar manager today to manage the Windows 11 Taskbar.

However, managing the Windows 11 Start Screen is another story.

For Windows 11, there is not currently a good way to manage the Start Screen with Endpoint Policy
Manager.  While we could build something here, Windows 11 itself only supports the following very
specific scenario:

- We could enable you to craft the Windows 11 Start Menu.
- That Start Menu could be delivered to the machine.
- All users on the machine would pick up the exact same Start Menu.
- Only users who have no profile would pick up this new Start Menu. Users who have already logged on
  before would not be able to get any changes dictated by Endpoint Policy Manager.

This is obviously in sharp contrast to the way Windows 10 Start Menu works and what Endpoint Policy
Manager can deliver with Windows 10. In Windows 10 Endpoint Policy Manager can:

- Enable you to craft the Windows 10 Start Menu.
- Start Menu can be delivered Per Machine or Per user.
- Any user could have a different Start Menu.
- Users who have logged on before could get the Start Menu to be adjusted.

These differences are hardcoded into Windows 11 vs. Windows 10. As such we don't see a lot of value
in creating a Endpoint Policy Manager for Windows 11 Start Screen Manager because of the
limitations. In short, if existing users' Start Screens cannot be manipulated (again, hardcoded by
Windows 11) it obviates the need for a Start Screen Manager. Again, and equally important, if all
users on Windows 11 must get the same Start Screen (programmatic, built into Windows 11) then this
would not be useful for customers.

So we would love to build this, if and when the internals of the Windows 11 Start Screen are changed
to be programmatically manipulatable.

## Endpoint Policy Feature Manager (for Windows 11)

Windows 11 features are available to manage in Endpoint Policy Manager CSE and MMC version 3068 and
later.

## Endpoint Privilege Manager, Endpoint Policy Manager Application Settings Manager, Endpoint Policy Manager Device Manger and all others not listed (For Windows 11)

No particular Windows 11 changes or incompatibilities.

If you were to use an older CSE you shouldn't see any incompatibilities or any differences.

That being said, we always recommend you use the latest CSE, as fixes and updates occur regularly.

