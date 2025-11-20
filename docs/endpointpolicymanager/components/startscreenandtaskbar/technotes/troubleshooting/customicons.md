---
title: "Custom icons for Endpoint Policy Manager Start Screen & Taskbar Manager aren't working as expected. What can I do?"
description: "Custom icons for Endpoint Policy Manager Start Screen & Taskbar Manager aren't working as expected. What can I do?"
sidebar_position: 110
---

# Custom icons for Endpoint Policy Manager Start Screen & Taskbar Manager aren't working as expected. What can I do?

There are a few reasons that custom icons might not work in Netwrix Endpoint Policy Manager
(formerly PolicyPak) Start Screen & Taskbar Manager. Please work through this list to determine why
you are not seeing custom icons as expected.

## Problem 1: Underlying application has a manifest file

The most common reason is that the underlying application (Chrome, Firefox, and Microsoft Edge) have
a manifest file which overrides the ability for Endpoint Policy Manager Start Screen & Taskbar
Manager to deliver the icon as expected.

Watch this video first:
[Endpoint Policy Manager Start Screen Manager and Special Custom Icons](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/troubleshooting/customicons.md).

## Problem 2: You are attempting to use UNC paths for icons

Do not attempt to use UNC paths (`\\server\share\app.exe` ) when pointing to an item containing your
alternate icons.

![735_1_image-20200723210823-1](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_1_image-20200723210823-1.webp)

The application must reside locally on the machine (`c:\temp\app1.exe`) for the icons to appear as
expected.

## Problem 3: The application's installation placed a shortcut file in Program Files or AppData

Endpoint Policy Manager Start Screen & Taskbar MUST and can ONLY use the shortcuts placed by the
application itself when it does so to

```
%programdata%\Microsoft\Windows\Start Menu and sub folders.
        %AppData%\Microsoft\Windows\Start Menu\Programs and sub folders.
```

For instance, you cannot use alternate icon for anything listed here….
(`%programdata%\Microsoft\Windows\Start Menu`)

![735_3_image-20200723210823-2](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_3_image-20200723210823-2.webp)

Or here…

![735_5_image-20200723210823-3](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_5_image-20200723210823-3.webp)

Or here… (`%AppData%\Microsoft\Windows\Start Menu\Programs`)

![735_7_image-20200723210823-4](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_7_image-20200723210823-4.webp)

or

![735_9_image-20200723210823-5](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_9_image-20200723210823-5.webp)

If you attempt to make a Endpoint Policy Manager Start Screen & Taskbar item and attempt to use an
alternate shortcut… it will not work.

![735_11_image-20200723210823-6](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_11_image-20200723210823-6.webp)

You will only get the Chrome's default icon, because it already exists as a shortcut in
`Start menu | Programs`.

To overcome this, you must delete (manually or using Group Policy Prefs, etc.) the file which is
being used by the application. Here's an example using Chrome.

![735_13_image-20200723210823-7](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_13_image-20200723210823-7.webp)

The final result AFTER you delete the shortcut within `%programdata%\Microsoft\Windows\Start` Menu
or `%AppData%\Microsoft\Windows\Start Menu\Programs` will get you the results you are seeking like
this.

![735_15_image-20200723210823-8_950x998](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/735_15_image-20200723210823-8_950x998.webp)


