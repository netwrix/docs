---
description: >-
  Onboard macOS devices into Privilege Secure so users can connect over VNC
  through a RealVNC RemoteApp on an RDS host.
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
  - privilegesecure
sidebar_label: "Onboarding Mac Devices for VNC via RDS (Remote Desktop Services)"
tags:
  - kb
  - network-and-platform-integration
title: "Onboarding Mac Devices for VNC via RDS (Remote Desktop Services)"
knowledge_article_id: kA0Qk0000000PcjKAE
---

# Onboarding Mac Devices for VNC via RDS (Remote Desktop Services)

## Overview

This article describes how to onboard macOS devices into Netwrix Privilege Secure for Access Management so that Virtual Network Computing (VNC) connections can be established by way of a Remote Desktop Services (RDS) server. The VNC session uses RealVNC and runs as a RemoteApp. The target resource is selected automatically, and the user enters credential information as part of the login process.

> **NOTE:** This article applies only to Privilege Secure 4.2 or higher, as it requires the `%token%` variable for the **Application to Launch** activity setting.

> **NOTE:** The `nps_realvnc` file used in these instructions must be obtained from [Netwrix Support](https://www.netwrix.com/support.html).

## Instructions

### Before You Begin

Ensure that VNC access to the target host works. [Apple's Remote Desktop documentation](https://support.apple.com/en-au/guide/remote-desktop/apdbed09830/mac) offers some general instructions.

### Step 1 — Creating the macOS Platform

1. In Privilege Secure, go to **Policy > Platforms**.
2. Select the **Windows** platform, and click the **Copy** icon.

   ![Policy Platforms page with the Windows platform selected and the Copy icon highlighted](./../0-images/ka0Qk0000006Ukz_0EMQk000002d1vx.png)

3. Change the name of the new platform to **macOS**. Ensure that the schedules are all set to `<none>`. Then click **Save**.

   ![New platform renamed to macOS with all schedules set to none](./../0-images/ka0Qk0000006Ukz_0EMQk000002czm7.png)

### Step 2 — Creating Service Accounts

1. On the **Configuration > Service Accounts** page, click the **+** icon and create a **macOS** service account.

   ![Service Accounts page with the macOS service account being created](./../0-images/ka0Qk0000006Ukz_0EMQk000002d2NN.png)

   > **NOTE:** The username and password do not matter. The macOS devices cannot be scanned, but a service account must be supplied to onboard the macOS resources.

### Step 3 — Onboarding macOS Resources

1. Go to **Resources**. Click the **Add** button, and click **New Server**. On the **Add Resources** page, click the **Import from CSV** radio button, and click the **Download CSV Template** button. This downloads a CSV template, which you can then populate with macOS resources, as in this example:

   ![CSV template populated with macOS resources](./../0-images/ka0Qk0000006Ukz_0EMQk000002d2iL.png)

   > **NOTE:** It is crucial that the **Platform** exactly matches the Platform configured earlier, and that the **Credential** exactly matches the Service Account name configured earlier. The **Operating System** value is for informational purposes only, and is not matched to any other values.

2. Return to the **Add Resources** page in step 1 of this section. Click the **Import CSV** button and upload the CSV file that was just configured. The resources are displayed on the Add Resources page.

   ![Add Resources page listing the imported macOS resources](./../0-images/ka0Qk0000006Ukz_0EMQk000002d3BN.png)

3. Select the resources you want to onboard (the **Select All** checkbox may be used) and click **Add**.
4. The dialog shows that a scan is **Pending** on all of the resources. This scan ends in an **Error**. This is expected, as Privilege Secure cannot scan macOS, and this error occurs during initial onboarding.

   ![Add Resources dialog showing a Pending scan on the macOS resources](./../0-images/ka0Qk0000006Ukz_0EMQk000002clZS.png)

5. Go to the **Resources** page and confirm that the onboarded macOS resources are present.

   ![Resources page listing the onboarded macOS resources](./../0-images/ka0Qk0000006Ukz_0EMQk000002d3mT.png)

### Step 4 — Registering the nps_realvnc RemoteApp

1. Copy the `nps_realvnc.zip` file to the desktop of the RDS host where the RemoteApp is published. Copy the contents to a folder where they can be accessed, for example `C:\npslaunchers`.

   ![Folder containing the extracted nps_realvnc files](./../0-images/ka0Qk0000006Ukz_0EMQk000002d4aT.png)

2. Edit the `appsettings.json` file and specify the address of each of your Privilege Secure App Servers.

   ![appsettings.json file with the App Server address specified](./../0-images/ka0Qk0000006Ukz_0EMQk000002d4yf.png)

3. Open **Server Manager** on the RDS host where the RemoteApp is published and select the **Publish RemoteApp Programs** option as indicated.

   ![Server Manager with the Publish RemoteApp Programs option indicated](./../0-images/ka0Qk0000006Ukz_0EMQk000002d494.png)

4. Select the indicated option to **Add a RemoteApp program**.

   ![Server Manager with the Add a RemoteApp program option indicated](./../0-images/ka0Qk0000006Ukz_0EMQk000002d53V.png)

5. Go to the location where the `nps_realvnc` launcher was installed, and publish the RemoteApp.

   ![Add RemoteApp Programs wizard with the nps_realvnc launcher selected for publishing](./../0-images/ka0Qk0000006Ukz_0EMQk000002d5BZ.png)

6. In Server Manager, right-click the published RemoteApp and select **Edit Properties**.

   ![Server Manager context menu on the published RemoteApp with Edit Properties](./../0-images/ka0Qk0000006Ukz_0EMQk000002d5GP.png)

7. Select **Parameters** and choose **Allow any command-line parameters**. The RemoteApp is published.

   ![RemoteApp properties Parameters page with Allow any command-line parameters selected](./../0-images/ka0Qk0000006Ukz_0EMQk000002d39m.png)

### Step 5 — Creating an Activity for VNC Access

1. Go to the **Activities** page and click the **+** icon to create a new Activity. The **Activity Type** of this activity must be set to **Interactive App Launch**, as this allows VNC sessions to be launched through the `realvnc.exe` launcher configured in RDS.
2. Ensure that the following values are configured:
   - **Activity Type** - Interactive App Launch
   - **Login Account Template** – the account used to connect to the RDS host, not the target macOS resource. Be sure to specify a domain, as `%targetdomain%` will not always work. (For example, `mydomain\managedaccountname`)
   - **Application to Launch** – Specify the same path and filename you used to publish the RemoteApp, and append the `%token%` and `%sessionid%` parameters. For example:

     ```
     C:\npslaunchers\nps_realvnc.exe %token% %sessionid%
     ```

3. If the preceding steps have been followed, your activity configuration should resemble the following:

   ![Activity configuration with Interactive App Launch and the application to launch set](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6M9.png)

### Step 6 — Running the Activity

1. After your Activity is created and added to an access policy containing your onboarded macOS resources, you can provision a session as normal.

   ![Session provisioning request for the macOS resource](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6UD.png)

   ![Provisioned session ready to launch](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6Vp.png)

2. Depending on whether you have installed VNC Connect on the MAC device, you may get a warning similar to the following:

   ![Warning shown when VNC Connect is not installed on the Mac device](./../0-images/ka0Qk0000006Ukz_0EMQk000002d0NF.png)

3. Enter your credentials when prompted.

   ![Credentials prompt for the VNC session](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6As.png)

4. A VNC connection is established to the resource, and the session is recorded by the Privilege Secure proxy service.

   ![VNC session connected to the macOS resource](./../0-images/ka0Qk0000006Ukz_0EMQk000002d6ij.png)
