---
title: "How-to gain access of a remote computer using built-in Windows Remote Assistance application?"
description: "How-to gain access of a remote computer using built-in Windows Remote Assistance application?"
sidebar_position: 260
---

# How-to gain access of a remote computer using built-in Windows Remote Assistance application?

Enable remote computers to accept the incoming remote connection with Netwrix Endpoint Policy
Manager (formerly PolicyPak)'s pre-configured PAK for Microsoft Remote Settings.

## Setting up a GPO to allow remote assistance using Endpoint Policy Application Manager.

In these steps, we will show steps for IT Administrators so they can Enable Remote Assistance for
end-users computers.

**Step 1 –** Launch Group Policy Management Console.

**Step 2 –** Right-click on a required OU and Create a new GPO.

![686_1_image-20200330200931-1](/images/endpointpolicymanager/applicationsettings/686_1_image-20200330200931-1.webp)

**Step 3 –** Give the GPO a descriptive Name then click the OK button.

![686_3_image-20200330200932-2](/images/endpointpolicymanager/applicationsettings/686_3_image-20200330200932-2.webp)

**Step 4 –** Right-click on the new GPO you just created, and select Edit option.

![686_5_image-20200330200932-3](/images/endpointpolicymanager/applicationsettings/686_5_image-20200330200932-3.webp)

**Step 5 –** Expand the Endpoint Policy Manager node under Computer Configuration and select the
pre-configured PAK named "Endpoint Policy Manager for Microsoft Windows 7 and Later for System
Properties"

![686_7_image-20200330200932-4](/images/endpointpolicymanager/applicationsettings/686_7_image-20200330200932-4.webp)

**Step 6 –** Right-click on the PAK entry and select the Properties option.

![686_9_image-20200330200932-5](/images/endpointpolicymanager/applicationsettings/686_9_image-20200330200932-5.webp)

**Step 7 –** Select the Remote tab, and select the checkbox "Allow Remote Assistance connections to
this computer" and then click the OK button.

:::note
Make sure that the selection is underlined as shown in the screenshot.
:::


![686_11_image-20200330200932-6](/images/endpointpolicymanager/applicationsettings/686_11_image-20200330200932-6.webp)

**Step 8 –** Lastly, run `GPUPDATE` on end-users computers to apply the policy immediately, or wait
for the policy to apply during the normal group policy refresh interval.

Additional Recommendations: Use Endpoint Policy Manager Scripts Manager and create two additional
computer side policy items.

**Step 1 –** Set Firewall to Allow Remote Assistance:

Using Endpoint Policy Manager Scripts Manager you can execute the following script to open a
Firewall for incoming remote assistance connections.

- netsh advfirewall firewall set rule group="remote assistance" new enable=Yes

**Step 2 –** Proactively address possible issue with `MSRA.EXE` and `PPAppLockdr64.dll`:

![686_13_image-20201016161058-2](/images/endpointpolicymanager/applicationsettings/686_13_image-20201016161058-2.webp)

Using Endpoint Policy Manager Scripts Manager you can execute the following script to configure
custom Exploit Protection settings for Microsoft Remote Assistance (`MSRA.EXE`).

```
Set-ProcessMitigation -Name msra.exe -Enable DisableExtensionPoints
```

You can create two separate policy items:

![686_14_image-20201016162349-4](/images/endpointpolicymanager/applicationsettings/686_14_image-20201016162349-4.webp)

Or you can combine both policies in one if you prefer:

![686_15_image-20201016162040-3](/images/endpointpolicymanager/applicationsettings/686_15_image-20201016162040-3.webp)

For more information on Endpoint Policy Manager Scripts Manager please consult the below reference
articles.

Reference Article

- [How to use Scripts Manager to workaround the "PPAppLockdr64.dll is either not designed to run on Windows or it contains an error" message when running Microsoft Remote Assistance (MSRA.exe) and the Endpoint Policy Manager CSE is installed on Windows 10 1903](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/troubleshooting/microsoftremoteassistance.md)
- [Deploy any script via the Cloud to domain joined and non-domain joined machines](/docs/endpointpolicymanager/components/scriptstriggers/videolearningcenter/gettingstarted/cloud.md)


