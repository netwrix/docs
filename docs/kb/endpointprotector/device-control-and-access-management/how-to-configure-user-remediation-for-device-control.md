---
description: >-
  This article explains how to configure user remediation for Device Control in
  Netwrix Endpoint Protector, including global, group, and device-level
  settings. It also shows how to configure remediation pop-ups, justifications,
  and device-specific rights.
keywords:
  - Netwrix Endpoint Protector
  - user remediation
  - device control
  - remediation pop-up
  - justification list
  - device rights
  - client UI
products:
  - endpointprotector
sidebar_label: How to Configure User Remediation for Device Control
tags:
  - device-control-and-access-management
  - kb
title: "How to Configure User Remediation for Device Control"
knowledge_article_id: kA0Qk0000002B2pKAE
---

# How to Configure User Remediation for Device Control

## Overview

This article explains how to configure user remediation for Device Control in Netwrix Endpoint Protector (EPP). Remediation can be set globally, at the group level, or at the computer/user level. You can also select specific devices for which remediation should be active.

For the full reference, see [User Remediation](/docs/endpointprotector/admin/systempar#user-remediation) in the System Parameters documentation.

## Instructions

### Enable User Remediation Globally

1. In the Netwrix Endpoint Protector console, navigate to **System Parameters** > **User Remediation**, and set **Enable User Remediation** for **Device Control** to **On**.

### Configure User Remediation Settings (Optional)

1. On the **User Remediation** page, you can:
   - Add a custom logo and URL.
   - Require end users to use their credentials for remediation.
   - Modify the default and maximum time interval for remediation requests.
2. Under **Justification List**, review, add, edit, delete, disable, or enable justifications for remediation.

### Create a Custom Notification

1. Go to **System Parameters** > **Device Types and Notifications** > **Custom Device Control User Remediation Notifications**.
2. Click **Create**, fill in the mandatory fields, and click **Save**. You'll select this notification in the next section when you enable the User Remediation Pop-up.

### Set Device-Specific Rights and Notifications

1. Go to **Device Control** > **Rights**.
   - To set global rights, select **Global Rights**.
   - To set rights for a specific group, computer, or user, select the appropriate target.  
   Set **User Remediation** to **On** for the desired devices.

   :::note
   User Remediation only applies to devices with limited-access rights. Devices with full access permission can't use User Remediation. Built-in devices such as Webcam and Network Share don't support User Remediation at all.
   :::

2. Go to **Device Control** > **Settings**.
   - To configure global settings, select **Global Settings**.
   - To configure settings for a specific group, computer, or user, select the appropriate target.  
   Enable the **User Remediation Pop-up** and select the custom notification you created earlier from the **User Remediation Notification Template** dropdown list.
3. Optional: Enable the **Enforce User Remediation Pop-up** setting. When this is enabled, end users cannot disable **User Remediation Pop-up** notifications.

:::note
If the **User Remediation Pop-up** is set to **OFF**, end users can still self-remediate from the client UI using the dedicated button.
:::


