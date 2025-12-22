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
  - endpoint-protector
sidebar_label: How to Configure User Remediation for Device Contr
tags:
  - device-control-and-access-management
title: "How to Configure User Remediation for Device Contr"
knowledge_article_id: kA0Qk0000002B2pKAE
---

# How to Configure User Remediation for Device Control

## Overview

This article explains how to configure user remediation for Device Control in Netwrix Endpoint Protector (EPP). Remediation can be set globally, at the group level, or at the computer/user level. You can also select specific devices for which remediation should be active.

## Instructions

### Enable User Remediation Globally

1. In the Netwrix Endpoint Protector console, navigate to **System Parameters** > **User Remediation**, and set **Enable User Remediation** for **Device Control** to **On**.  
   

### Configure User Remediation Settings (Optional)

1. On the **User Remediation** page, you can:
   - Add a custom logo and URL.
   - Require end users to use their credentials for remediation.
   - Modify the default and maximum time interval for remediation requests.
2. Under **Justification List**, review, add, edit, delete, disable, or enable justifications for remediation.

### Set Device-Specific Rights and Notifications

1. Go to **Device Control** > **Rights**.
   - To set global rights, select **Global Rights**.
   - To set rights for a specific group, computer, or user, select the appropriate target.  
   Set **User Remediation** to **On** for the desired devices.  
   
2. Go to **Device Control** > **Settings**.
   - To configure global settings, select **Global Settings**.
   - To configure settings for a specific group, computer, or user, select the appropriate target.  
   Enable the **User Remediation Pop-up**.
3. Optional: Enable the **Enforce User Remediation Pop-up** setting. When this is enabled, end users cannot disable **User Remediation Pop-up** notifications.

> **NOTE:** If the **User Remediation Pop-up** is set to **OFF**, end users can still self-remediate from the client UI using the dedicated button.


