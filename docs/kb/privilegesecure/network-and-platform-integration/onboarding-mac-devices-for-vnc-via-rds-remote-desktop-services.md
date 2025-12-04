---
description: >-
  Shows how to onboard macOS devices into Netwrix Privilege Secure so users can
  establish VNC connections via an RDS-hosted RemoteApp (RealVNC), including
  RemoteApp registration and activity configuration.
keywords:
  - macOS
  - VNC
  - RDS
  - RemoteApp
  - Netwrix Privilege Secure
  - nps_realvnc
  - RealVNC
  - onboarding
  - proxy
  - '%token%'
products:
  - privilege-secure-access-management
sidebar_label: Onboarding Mac devices for VNC via RDS (Remote Des
tags: []
title: "Onboarding Mac devices for VNC via RDS (Remote Desktop Services)"
knowledge_article_id: kA0Qk0000000PcjKAE
---

# Onboarding Mac devices for VNC via RDS (Remote Desktop Services)

## Overview

This article provides instructions for onboarding macOS devices into Netwrix Privilege Secure (NPS) so that VNC connections can be established by way of an RDS server. The VNC session will leverage RealVNC, run as a RemoteApp. The target resource will automatically be selected, and the user will enter credential information as part of the login process.

**Note:** This article applies only for Netwrix Privilege Secure 4.2 or higher, as it requires the `%token%` variable for the **Application to Launch** activity setting.

**Note:** The `nps_realvnc` file used in these instructions must be obtained from Netwrix Support.

## Before You Begin

Ensure that VNC access to the target host works. [This documentation](https://support.apple.com/en-au/guide/remote-desktop/apdbed09830/mac) offers some general instructions.

## Instructions

### Creating the macOS Platform

1. In Netwrix Privilege Secure, navigate to **Policy > Platforms**.
2. Select the **Windows** platform, and click the **Copy** icon.  
   ![001.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d1vx.png)
3. Change the name of the new platform to **macOS**. Ensure that the schedules are all set to `<none>`. Then click **Save**.  
   ![002.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002czm7.png)

### Creating Service Accounts

1. On the **Configuration > Service Accounts** page, click the **+** icon and create a **macOS** service account. Note that the username and password do not matter - the macOS devices cannot be scanned, but a service account must be supplied to onboard the macOS resources.  
   ![003.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d2NN.png)

### Onboarding macOS Resources

1. Navigate to **Resources**. Click the **Add** button, and click **New Server**. On the **Add Resources** page, click the **Import from CSV** radio button, and click the **Download CSV Template** button. This will download a CSV template, which you can then populate with macOS resources, as in this example -  
   ![004.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d2iL.png)
2. Note that it is crucial that the **Platform** exactly matches the Platform configured earlier, and that the **Credential** exactly matches the Service Account name configured earlier. The **Operating System** value is for informational purposes only, and will not be matched to any other values.
3. Return to the **Add Resources** page in step 1 of this section. Click the **Import CSV** button and upload the CSV file that was just configured. The resources will be displayed on the Add Resources page.  
   ![005.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d3BN.png)
4. Select the desired resources (the **Select All** checkbox may be used) and click **Add**.
5. The dialogue will show that a scan is **Pending** on all of the resources - this scan will end in an **Error**. This is expected as macOS cannot be scanned by NPS, and this error will only occur during initial onboarding.  
   ![006.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002clZS.png)
6. Navigate to the **Resources** page and observe that the onboarded macOS resources are present.  
   ![007.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d3mT.png)

### Registering the nps_realvnc RemoteApp

1. Copy the `nps_realvnc.zip` file to the desktop of the RDS host where the RemoteApp will be published. Copy the contents to a folder where they can be accessed, for example `C:\npslaunchers`.  
   ![Picture8.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d4aT.png)
2. Edit the `appsettings.json` file and specify the address(es) of your NPS App Server(s).  
   ![Picture9.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d4yf.png)
3. Open **Server Manager** on the RDS host where the RemoteApp will be published and select the **Publish RemoteApp Programs** option as indicated.  
   ![Picture10.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d494.png)
4. Select the indicated option to **Add a RemoteApp program**.  
   ![Picture11.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d53V.png)
5. Navigate to the location where the `nps_realvnc` launcher was installed, and publish the RemoteApp.  
   ![Picture12.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d5BZ.png)
6. In Server Manager, right-click the published RemoteApp and select **Edit Properties**.  
   ![Picture13.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d5GP.png)
7. Select **Parameters** and choose **Allow any command-line parameters**. The RemoteApp will be published.  
   ![Picture14.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d39m.png)

### Creating an Activity for VNC Access

1. Navigate to the **Activities** page and click the **+** icon to create a new Activity. The **Activity Type** of this activity must be set to **Interactive App Launch**, as this will allow VNC sessions to be launched through the `realvnc.exe` launcher configured in RDS.
2. Ensure that the following values are configured:
   - **Activity Type** - Interactive App Launch
   - **Login Account Template** – the account that will be used to connect to the RDS host, not the target macOS resource. Be sure to specify a domain, as `%targetdomain%` will not always work. (For example, `mydomain\managedaccountname`)
   - **Application to Launch** – Specify the same path and filename you used to publish the RemoteApp, and append the `%token%` and `%sessionid%` parameters. For example:

```
C:\npslaunchers\nps_realvnc.exe %token% %sessionid%
```

3. If the above steps have been followed, your activity configuration should resemble the following:  
   ![Picture15.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6M9.png)

### Running the Activity

1. Once your Activity is created and added to an access policy containing your onboarded macOS resources, you can provision a session as normal.  
   ![Picture16.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6UD.png)  
   ![Picture17.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6Vp.png)
2. Depending on whether you have installed VNC Connect on the MAC device, you may get a warning similar to the following:
   ![Picture18.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d0NF.png)
3. Enter your credentials when prompted.  
   ![Picture20.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6As.png)
4. A VNC connection will now be established to the resource, and the session will be recorded by the NPS proxy service.  
   ![Picture21.png](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6ij.png)
