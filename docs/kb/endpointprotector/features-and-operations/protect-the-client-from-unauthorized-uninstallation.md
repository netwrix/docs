---
description: >-
  This article explains how you can secure the Netwrix Endpoint Protector (EPP)
  client on endpoint machines against unauthorized uninstallation by using an
  uninstall password and Tamper Mode.
keywords:
  - endpoint protector
  - uninstall password
  - tamper mode
  - uninstall protection
  - policy refresh interval
  - endpoint security
  - EPP agent
products:
  - endpointprotector
sidebar_label: Protect the Client from Unauthorized Uninstallatio
tags:
  - features-and-operations
  - kb
title: "Protect the Client from Unauthorized Uninstallation"
knowledge_article_id: kA0Qk0000002B5yKAE
---

# Protect the Client from Unauthorized Uninstallation

## Overview

This article explains how you can secure the Netwrix Endpoint Protector (EPP) client on endpoint machines against unauthorized uninstallation. To address this matter, there are two security measures available:

- Set an Uninstall Password: Requires users to enter a password defined by the EPP system administrator before uninstalling the EPP client. This applies to Windows, Linux, and macOS endpoint machines.
- Enable Tamper Mode: This feature safeguards agent integrity and prevents unauthorized termination or alteration of the Netwrix Endpoint Protector Client. Tamper Mode is available for **Windows and macOS** endpoints and can be enabled from the **Device Control > Global Settings** page.

For the full reference, see [Security Password for Uninstall Protection](/docs/endpointprotector/admin/systemconfiguration/systemsecurity#security-password-for-uninstall-protection) and [Tamper mode](/docs/endpointprotector/admin/agent#tamper-mode).

:::note
Tamper Mode requires EPP Client version 2605 Hotfix 1 or later (2605.x.2.x) for the full feature set.
:::

## Instructions

### Set an Uninstall Password

1. Navigate to **System Configuration** > **System Security**.
2. Enter a password under **Security Password for Uninstall Protection** and click **Save**.

![Screenshot showing Security Password for Uninstall Protection settings in EPP client](./../0-images/ka0Qk000000E7fx_0EMQk00000C51pO.png)

3. After saving the changes, a notification will appear stating the uninstall password is set.
4. Update the policies on the endpoint manually or wait for the policies to be automatically updated based on the time set for **Policy Refresh Interval**.

### Enable Tamper Mode

1. Navigate to **Device Control** > **Global Settings** > **Tamper Mode** and toggle the switch to **On**.
2. Scroll down to the bottom of the subsection labeled **Endpoint Protector Client** and click **Save**.

![Screenshot showing Tamper Mode settings in EPP client](./../0-images/ka0Qk000000E7fx_0EMQk00000C51as.png)

3. Update the policies on the endpoint manually or wait for the policies to be automatically updated based on the time set for **Policy Refresh Interval**.
4. A machine or service reboot is recommended after enabling Tamper Mode for the setting to work correctly.

:::important
Tamper Mode restricts access to EPP resources. Don't enable it during pilot deployments or when troubleshooting use cases — enabling it can interfere with the diagnostic access those scenarios require.
:::
