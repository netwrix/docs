---
title: "Windows Deployment"
description: "Windows Deployment"
sidebar_position: 10
---

# Windows Deployment

To deploy the Endpoint Protector MSI package for Windows using Intune, follow these steps:

**Step 1 –** Open and log in to Endpoint Protector;

**Step 2 –** Go to the System Configuration, Client Software and download the Windows Endpoint
Protector MSI package;

![Downloading the Windows Endpoint Protector MSI Package](msipackagedownload.webp)

:::warning
When deploying the .msi package, delete the information contained in the brackets as
well as the underscore that precedes it - EPPClientSetup.5.6.3.1_x86_64.msi
:::


![A black text on a white background

Description automatically
generated](msipackage.webp)

**Step 3 –** Go to the Microsoft Endpoint Manager admin center and sign in;

**Step 4 –** Go to Apps from the left-hand side menu, and on the Apps Overview page, select the
Windows platform;

![Apps Overview Page](appsoverview.webp)

**Step 5 –** On the Windows App page, click Add, select the Line of business app type, and then
click Select;

![Selecting the Line of business app type](apptype.webp)

**Step 6 –** Click Select app package file and from the right-hand side, select the Endpoint
Protector MSI file and click OK;

![Selecting Endpoint Protector Package file ](apppackagefile.webp)

**Step 7 –** On the App information page, fill in the mandatory fields and then click Next:

- Name – add Endpoint Protector and optional, the package version (Endpoint Protector 5.7.3.6)
- Description – click Edit Description and add installation details
- Publisher – add NetwrixLtd.
- Command-line argument – add the following command line in the text box

    - WSIP="EPP_server_IP" WSPORT="443" /q REBOOT=ReallySuppress

![App information page to add information. ](addapp.webp)

**Step 8 –** On the Assignments page, in the Requirement section, select the group for which you
want to deploy the Endpoint Protector client and then click Next;

![Selecting the group for which you want to deploy the Endpoint Protector Client](assignmentspage.webp)

**Step 9 –** On the Review + create page, click Create - this will start the Endpoint Protector MSI
package upload.

![Initiating the Endpoint Protector Package MSI upload](reviewpage.webp)
