# How can I change the behavior of "Run as Admin" with Endpoint Privilege Manager and how has it changed from previous versions?

In 2022, Netwrix Endpoint Policy Manager (formerly PolicyPak) introduced a new feature that enables users to elevate the native printers’ dialog, known as elevating NTPRINT.EXE, and also the native Windows Settings control (SystemSettingsAdminFlows.exe). You can review examples of these changes in these two videos:

[Endpoint Privilege Manager: Install Printers via Native NTPRINT Dialog](/docs/product_docs/policypak/policypak/video/leastprivilege/ntprintdialog.md)

[Endpoint Privilege Manager: Edit IP SETTINGS EDIT VIA WIN GUI](/docs/product_docs/policypak/policypak/video/leastprivilege/wingui.md)

When we added this functionality, we also had to also change the behavior for any explicit elevation request normally handled by __Run As Administrator__ requests.

Starting in Endpoint Policy Manager CSE 3425, you can modify the Run As Administrator behavior depending on the goal you would like to accomplish. You can use Endpoint Policy Manager ADMX settings to control it. Use this reference to get familiar with the Endpoint Policy Manager ADMX first: [Troubleshooting with ADMX files](/docs/product_docs/policypak/policypak/video/troubleshooting/admxfiles.md)

![862_1_image-20230228200619-1_950x319](/static/img/product_docs/policypak/policypak/leastprivilege/862_1_image-20230228200619-1_950x319.png)

__NOTE:__ These ADMX settings are also built into Endpoint Policy Manager Cloud and you're welcome to use those as well.  The policy screen shots below in this article were all taken from Endpoint Policy Manager Cloud.

![1243_2_232bf02612716c9cb1420ae8801dbfd2](/static/img/product_docs/policypak/policypak/leastprivilege/1243_2_232bf02612716c9cb1420ae8801dbfd2.png)

![1243_3_850e299116b6ef01db03df49923a61df](/static/img/product_docs/policypak/policypak/leastprivilege/1243_3_850e299116b6ef01db03df49923a61df.png)

The corresponding Registry location for this setting is:

HKLM\SOFTWARE\Policies\PolicyPak\Client-Side Extensions\{58DE0268-6384-49E0-A333-20EC46654B82}\Explicit Elevate

## Scenario 1: I want to use the native tools to elevate printers (aka NTPRINT.EXE) and Windows Settings (aka SystemSettingsAdminFlows.exe) and I'm not concerned about Run as administrator issues in Start Menu/File Explorer.

In this case, keep the defaults as-is with __Not Configured__. You may also set it to __Disabled__. Optionally, you can set it to __Enabled + Enable and use the default context menu Run as administrator__. All three of these methods will perform default Endpoint Policy Manager behavior.

Below are examples showing this (using Endpoint Policy Manager Cloud).

![862_2_image-20230228200619-2](/static/img/product_docs/policypak/policypak/leastprivilege/862_2_image-20230228200619-2.png)

![862_3_image-20230228200619-3](/static/img/product_docs/policypak/policypak/leastprivilege/862_3_image-20230228200619-3.png)

OR

![862_4_image-20230228200619-4](/static/img/product_docs/policypak/policypak/leastprivilege/862_4_image-20230228200619-4.png)

![862_5_image-20230601152059-6](/static/img/product_docs/policypak/policypak/leastprivilege/862_5_image-20230601152059-6.png)

## Scenario 2: I don't need to use the native tools to elevate printers (aka NTPRINT.EXE) or Windows Settings (aka SystemSettingsAdminFlows.exe) and I'm having some issues with shortcuts and Run as administrator.

You might find that the default Endpoint Policy Manager behavior is interfering with the way your users normally interact with Run as administrator commands. Here’s an example you might encounter (there are others, but this one is easy to see):

When right-clicking an executable and selecting Run as administrator, you receive the following error: “There are no more endpoints available from the endpoint mapper”.

![862_6_image-20230228200619-5](/static/img/product_docs/policypak/policypak/leastprivilege/862_6_image-20230228200619-5.png)

If you want to work around this issue, you could specify Configure processing Explicit-Elevation requests for processes: __Enabled + Disable intercept Explicit-Elevation__.

This will turn off the new Intercept Explicit-Elevation behavior in LPM and revert the Run as administrator to Windows default behavior. As a result,Run as administrator requests will be handled by Windows OS and not Endpoint Policy Manager.

![862_7_image-20230601150106-3_723x496](/static/img/product_docs/policypak/policypak/leastprivilege/862_7_image-20230601150106-3_723x496.png)

![862_8_image-20230601145346-1](/static/img/product_docs/policypak/policypak/leastprivilege/862_8_image-20230601145346-1.png)

__NOTE:__ Because this method will ALSO turn off NTPRINT.EXE elevations, you can still use the legacy Printer elevation method within “Endpoint Policy Manager Helper Tools” to perform Printer operations in this mode, because it doesn’t rely on the updated functionality to perform elevation directly upon NTPRINT.EXE. To see the Endpoint Policy Manager Helper Tools in action to add printers, please refer to these videos: Least Privilege Manager > [Video Learning Center](/docs/product_docs/policypak/policypak/leastprivilege/overview/videolearningcenter.md).

## Scenario 3: I want to use the native tools to elevate printers (aka NTPRINT.EXE) AND Windows Settings (aka SystemSettingsAdminFlows.exe) and I also sometimes need to perform Run as administrator operations.

In this case, use __Enabled + Enable and use alternative context menu "Run as administrator with Netwrix PolicyPak"__.

![862_9_image-20230601150335-4_723x495](/static/img/product_docs/policypak/policypak/leastprivilege/862_9_image-20230601150335-4_723x495.png)

![862_10_image-20230601151700-5](/static/img/product_docs/policypak/policypak/leastprivilege/862_10_image-20230601151700-5.png)

This will allow you to elevate NTPRINT.EXE operations. However, when a user selects the original Run as administrator menu option, it will be intercepted by Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager.

As a workaround, users will see, and should use, __Run as administrator with Netwrix PolicyPak__ menu to ensure UAC works.

Here’s an example when this option is selected:

![862_11_image-20230228200619-6_950x146](/static/img/product_docs/policypak/policypak/leastprivilege/862_11_image-20230228200619-6_950x146.png)

Now users can perform the same Run as administrator type of operation, but they will need to use the Endpoint Policy Manager-supplied Run as administrator with Netwrix PolicyPak.
