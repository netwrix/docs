---
description: >-
  This article explains how to configure a Microsoft Entra ID integration with Netwrix Threat Manager, including app registration and setting up the integration.
keywords:
  - Microsoft Entra ID
  - Netwrix Threat Manager
  - app registration
  - integration setup
  - API permissions
sidebar_label: Configuring Entra ID Sync
tags: []
title: "Configuring the Entra ID Sync Integration"
knowledge_article_id: kA0Qk0000001kVRKAY
products:
  - threat-manager
---

# Configuring the Entra ID Sync Integration

## Overview

This article explains how to configure a Microsoft Entra ID integration with Netwrix Threat Manager. The process involves registering an application in the Microsoft Entra admin center, configuring permissions, and setting up the Entra ID Sync Integration within Threat Manager.

## Instructions

### Create the App Registration in Microsoft Entra Admin Center

1. Open the **Microsoft Entra admin center** and navigate to **Identity > Applications > App registrations**.
2. Select **+ New registration**.
   - ![Entra admin center showing New Registration button](../0-images/servlet_image_a9d4a36aab05.png)
3. Give the application a name such as "Entra for Netwrix Threat Manager" and select **Register**.
   - For the Supported account types option, select **Accounts in this organizational directory only**, then click **Register**.
   - ![App registration options in Entra admin center](../0-images/servlet_image_0e5a156b562c.png)
4. Navigate to **API permissions** within your new app registration and select **+ Add a permission**.
5. Select **Microsoft Graph**.
   - ![Selecting Microsoft Graph API permissions](../0-images/servlet_image_2c936cc3af52.png)
6. Select **Application** and add the permissions outlined in [Threat Manager Server Requirements](https://docs.netwrix.com/docs/threatmanager/3_0/requirements/server).
7. After adding all the permissions, select **Grant admin consent for [tenant]**.
   - > **NOTE:** The status will change to a green checkmark when complete.
   - ![Granting admin consent in Entra admin center](../0-images/servlet_image_590daa2ead13.png)
8. Navigate to the **Certificates & secrets** page and select **+ New client secret**.
9. Give the client secret a description, set the desired expiration time (according to your organization's internal policies; 24 months is recommended), and select **Add**.
   - ![Creating a new client secret in Entra admin center](../0-images/servlet_image_761d2f787fb4.png)
10. Copy the **Secret Value** to a notepad.
    - > **NOTE:** The value will be obscured after leaving the page.
    - ![Copying client secret value in Entra admin center](../0-images/servlet_image_5516dc91a692.png)
11. In the same notepad, also add the Application ID (Client ID) from the Overview page and the tenant name.
    - ![Copying Application ID from Entra admin center](../0-images/servlet_image_a04e32646a9b.png)
    - ![Copying tenant name from Entra admin center](../0-images/servlet_image_a55f51b6c382.png)

### Set Up Entra ID Sync Integration in Netwrix Threat Manager

1. Log in to the Threat Manager Dashboard as an administrator and navigate to the **Integrations** menu.
   - ![Threat Manager dashboard Integrations menu](../0-images/servlet_image_6a3341c6a97a.png)
2. Select the **Add new integration** button, and set the **Credential Profile Integration** as shown below and click **Add** once enabled.
   - ![Credential Profile Integration settings in Threat Manager](../0-images/servlet_image_68f21544913c.png)
3. Select **Add New Integration** again.
4. Set the Entra ID Sync Integration as shown below, then select **Test Connection** and **Add** (once enabled).
   - ![Entra ID Sync Integration settings in Threat Manager](../0-images/servlet_image_b184f052a03b.png)
5. Allow a few minutes for the initial sync to begin. You can then navigate to the new Entra ID Sync Integration.
   - ![Viewing Entra ID Sync Integration in Threat Manager](../0-images/servlet_image_ca88af5d8db8.png)

## Related Link

- [Threat Manager Server Requirements](https://docs.netwrix.com/docs/threatmanager/3_0/requirements/server)