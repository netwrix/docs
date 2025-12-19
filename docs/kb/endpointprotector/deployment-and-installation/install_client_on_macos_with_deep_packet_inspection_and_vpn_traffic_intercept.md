---
description: >-
  This article explains how to ensure all prerequisites are in place and how to install the Endpoint Protector (EPP) Client on macOS endpoints with Deep Packet Inspection (DPI) and VPN Traffic Intercept active.
keywords:
  - Endpoint Protector
  - macOS installation
  - Deep Packet Inspection
  - VPN Traffic Intercept
  - client software
sidebar_label: Install EPP Client on macOS
tags:
  - deployment-and-installation
title: "Install Client on macOS with Deep Packet Inspection and VPN Traffic Intercept"
knowledge_article_id: kA0Qk0000002B64KAE
products:
  - endpoint-protector
---

# Install Client on macOS with Deep Packet Inspection and VPN Traffic Intercept

## Overview

This article explains how to ensure all prerequisites are in place and how to install the Endpoint Protector (EPP) Client on macOS endpoints with Deep Packet Inspection (DPI) and VPN Traffic Intercept active.

## Instructions

1. In the Endpoint Protector console, navigate to **System Configuration** > **Client Software** and download the macOS **Endpoint Protector Agent**.  
   ![Installation on macOS with Deep Packet Inspection and VPN Traffic Intercept Active](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Admin/SystemConfiguration/ClientInstallationiOS.png?_LANG=enus)

2. Unzip the downloaded file.

3. Open the **.pkg** file.

4. Follow the installation steps and grant the requested permissions.

5. After installation, go to **System Preferences** > **Security & Privacy** > **Privacy** tab > **Full Disk Access**. Search for **Endpoint Protector Client**. Select the checkbox and then save the changes.  
   ![Grant permission to the Endpoint Protector Client](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/EPPAgentPermisions.png?_LANG=enus)

6. In the Endpoint Protector console, navigate to **Device Control** > **Users/Computer/Group/Global Settings** > **Manage Settings** > **Endpoint Protector Client** > **Deep Packet Inspection** to enable DPI.  
   ![Activating Deep Packet Inspection](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Admin/DeviceControl/DPIon.png?_LANG=enus)

7. Once enabled, go to **System Configuration** > **System Settings** > **Deep Packet Inspection Certificate** and download the **CA Certificate**.  
   ![Download the Client CA Certificates](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Admin/SystemConfiguration/DPIcertificate.png?_LANG=enus)

8. Open the **Keychain Access** application on your macOS and select **System**.  
   ![Open the Keychain Access application from your macOS and select System](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/KeychainAccess.png?_LANG=enus)

9. Unzip the downloaded **ClientCerts** file.

10. Select the `cacert.pem` file and drag then drop it into **Keychain Access > System**.  
    ![Select cacert.pem file and drag and drop it on Keychain Access, System](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/ClientCerts.png?_LANG=enus)

11. Double-click the newly added certificate and select **Always Trust**.  
    ![On the newly added certificate and on the Trust section, select Always Trust.](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/KeychainAccessTwo.png?_LANG=enus)

12. **Save** the changes.

13. In **Device Control > Global Settings**, enable **Intercept VPN Traffic**.  
    ![Activate Intercept VPN Traffic](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Admin/DeviceControl/InterceptVPNTraffic.png?_LANG=enus)

14. Select one option for **EPP behavior when network extension is disabled**:
    - **Temporarily Disable Deep Packet Inspection** – This option will temporarily disable Deep Packet Inspection.
    - **Block Internet Access** – This option will end the Internet connection until the end user approves the **Endpoint Protector Proxy Configuration** once the computer is rebooted.

15. **Save** the changes.

16. A pop-up will be displayed informing the end user that a System Extension is blocked and needs to be allowed.  
    ![System Extension is blocked and needs to be allowed](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/SystemExtensionBlocked.png?_LANG=enus)

17. Go to **System Preferences** > **Security and Privacy** > **General** tab and **allow** the **Endpoint Protector Client Extension**.  
    ![Select the General tab and allow the Endpoint Protector Client Extension](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/GeneralTabIOS.png?_LANG=enus)

18. **Allow** the **Endpoint Protector Proxy Configuration** from the pop-up window.  
    ![Allow the Endpoint Protector Proxy Configuration from the pop-up window](https://helpcenter-be.netwrix.com/bundle/EndpointProtector_5.9.4/page/Content/Resources/Images/EndpointProtector/Requirements/ProxyPop-up.png?_LANG=enus)

> **NOTE:** If EPPNotifier is not visible or notifications do not display after the installation or upgrade of the Endpoint Protector Client on macOS, restart your machine. If the Endpoint Protector Client is installed and then uninstalled on macOS, you may still see EPPNotifier in the Notification settings. To remove it from the list, right-click and select "Reset notifications.""