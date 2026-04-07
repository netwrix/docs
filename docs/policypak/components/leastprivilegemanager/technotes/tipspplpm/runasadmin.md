---
title: "How can I change the behavior of \"Run as Admin\" with Least Privilege Manager and how has it changed from previous versions?"
description: "How can I change the behavior of \"Run as Admin\" with Least Privilege Manager and how has it changed from previous versions?"
sidebar_position: 50
---

# How can I change the behavior of "Run as Admin" with Least Privilege Manager and how has it changed from previous versions?

In 2022, Netwrix PolicyPak introduced a new feature that enables
users to elevate the native printers’ dialog, known as elevating NTPRINT.EXE, and also the native
Windows Settings control (SystemSettingsAdminFlows.exe). You can review examples of these changes in
these two videos:

[Least Privilege Manager: Install Printers via Native NTPRINT Dialog](/docs/policypak/components/leastprivilegemanager/videolearningcenter/helperstoolsandtips/ntprintdialog.md)

[Least Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI](/docs/policypak/components/leastprivilegemanager/videolearningcenter/helperstoolsandtips/wingui.md)

When we added this functionality, we also had to also change the behavior for any explicit elevation
request normally handled by **Run As Administrator** requests.

Starting in PolicyPak CSE 3425, you can modify the Run As Administrator behavior
depending on the goal you would like to accomplish. You can use PolicyPak ADMX
settings to control it. Use this reference to get familiar with the PolicyPak ADMX
first: [Troubleshooting with ADMX files](/docs/policypak/gettingstarted/misc/videos/troubleshooting/admxfiles.md)

![862_1_image-20230228200619-1_950x319](/images/policypak/leastprivilege/862_1_image-20230228200619-1_950x319.webp)

:::note
These ADMX settings are also built into PolicyPak Cloud and you're welcome
to use those as well.  The policy screen shots below in this article were all taken from PolicyPak Cloud.
:::


![1243_2_232bf02612716c9cb1420ae8801dbfd2](/images/policypak/leastprivilege/1243_2_232bf02612716c9cb1420ae8801dbfd2.webp)

![1243_3_850e299116b6ef01db03df49923a61df](/images/policypak/leastprivilege/1243_3_850e299116b6ef01db03df49923a61df.webp)

The corresponding Registry location for this setting is:

HKLM\SOFTWARE\Policies\PolicyPak\Client-Side
Extensions\{58DE0268-6384-49E0-A333-20EC46654B82}\Explicit Elevate

## Scenario 1: I want to use the native tools to elevate printers (aka NTPRINT.EXE) and Windows Settings (aka SystemSettingsAdminFlows.exe) and I'm not concerned about Run as administrator issues in Start Menu/File Explorer.

In this case, keep the defaults as-is with **Not Configured**. You may also set it to **Disabled**.
Optionally, you can set it to **Enabled + Enable and use the default context menu Run as
administrator**. All three of these methods will perform default PolicyPak behavior.

Below are examples showing this (using PolicyPak Cloud).

![862_2_image-20230228200619-2](/images/policypak/leastprivilege/862_2_image-20230228200619-2.webp)

![862_3_image-20230228200619-3](/images/policypak/leastprivilege/862_3_image-20230228200619-3.webp)

OR

![862_4_image-20230228200619-4](/images/policypak/leastprivilege/862_4_image-20230228200619-4.webp)

![862_5_image-20230601152059-6](/images/policypak/leastprivilege/862_5_image-20230601152059-6.webp)

## Scenario 2: I don't need to use the native tools to elevate printers (aka NTPRINT.EXE) or Windows Settings (aka SystemSettingsAdminFlows.exe) and I'm having some issues with shortcuts and Run as administrator.

You might find that the default PolicyPak behavior is interfering with the way your
users normally interact with Run as administrator commands. Here’s an example you might encounter
(there are others, but this one is easy to see):

When right-clicking an executable and selecting Run as administrator, you receive the following
error: “There are no more endpoints available from the endpoint mapper”.

![862_6_image-20230228200619-5](/images/policypak/leastprivilege/862_6_image-20230228200619-5.webp)

If you want to work around this issue, you could specify Configure processing Explicit-Elevation
requests for processes: **Enabled + Disable intercept Explicit-Elevation**.

This will turn off the new Intercept Explicit-Elevation behavior in LPM and revert the Run as
administrator to Windows default behavior. As a result,Run as administrator requests will be handled
by Windows OS and not PolicyPak.

![862_7_image-20230601150106-3_723x496](/images/policypak/leastprivilege/862_7_image-20230601150106-3_723x496.webp)

![862_8_image-20230601145346-1](/images/policypak/leastprivilege/862_8_image-20230601145346-1.webp)

:::note
Because this method will ALSO turn off NTPRINT.EXE elevations, you can still use the
legacy Printer elevation method within “PolicyPak Helper Tools” to perform Printer
operations in this mode, because it doesn’t rely on the updated functionality to perform elevation
directly upon NTPRINT.EXE. To see the PolicyPak Helper Tools in action to add
printers, please refer to these videos: Least Privilege Manager >
[Video Learning Center](/docs/policypak/components/leastprivilegemanager/videolearningcenter/videolearningcenter.md).
:::


## Scenario 3: I want to use the native tools to elevate printers (aka NTPRINT.EXE) AND Windows Settings (aka SystemSettingsAdminFlows.exe) and I also sometimes need to perform Run as administrator operations.

In this case, use **Enabled + Enable and use alternative context menu "Run as administrator with
Netwrix PolicyPak"**.

![862_9_image-20230601150335-4_723x495](/images/policypak/leastprivilege/862_9_image-20230601150335-4_723x495.webp)

![862_10_image-20230601151700-5](/images/policypak/leastprivilege/862_10_image-20230601151700-5.webp)

This will allow you to elevate NTPRINT.EXE operations. However, when a user selects the original Run
as administrator menu option, it will be intercepted by PolicyPak
Least Privilege Manager.

As a workaround, users will see, and should use, **Run as administrator with Netwrix PolicyPak**
menu to ensure UAC works.

Here’s an example when this option is selected:

![862_11_image-20230228200619-6_950x146](/images/policypak/leastprivilege/862_11_image-20230228200619-6_950x146.webp)

Now users can perform the same Run as administrator type of operation, but they will need to use the
PolicyPak-supplied Run as administrator with Netwrix PolicyPak.


