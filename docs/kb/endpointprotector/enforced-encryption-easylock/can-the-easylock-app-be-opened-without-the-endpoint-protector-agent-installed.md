---
description: >-
  Explains how to configure whether the EasyLock app requires the Netwrix
  Endpoint Protector agent to be installed before it can be opened and where to
  change the setting.
keywords:
  - EasyLock
  - Netwrix Endpoint Protector
  - Endpoint Protector
  - Device Control
  - EasyLock Settings
  - Endpoint Protector Client presence required
  - agent presence
products:
  - endpointprotector
sidebar_label: Can the EasyLock App Be Opened Without the Endpoin
tags:
  - enforced-encryption-easylock
  - kb
title: "Can the EasyLock App Be Opened Without the Endpoint Protector Agent Installed?"
knowledge_article_id: kA0Qk0000002B2bKAE
---

# Can the EasyLock App Be Opened Without the Endpoint Protector Agent Installed?

## Question
Can the EasyLock app be opened on a computer without the Netwrix Endpoint Protector agent installed?

## Answer
Yes, you can configure whether EasyLock can be opened only when the Netwrix Endpoint Protector agent is present or if it can be opened freely on any computer.

For the full reference, see [Enforced Encryption](/docs/endpointprotector/admin/ee_module/eemodule).

To configure this option, navigate to **Device Control** > **Global Settings** > **EasyLock Settings** and toggle the switch next to **Endpoint Protector Client presence required**.

![Endpoint Protector Client presence required setting in EasyLock Settings](./../0-images/ka0Qk000000EaBh_0EMQk00000CD9g6.png)

- **Enabled (dependency required):** EasyLock only opens on computers where the Endpoint Protector Client is installed and running.
- **Disabled:** EasyLock can be opened freely on any computer, including ones without the Endpoint Protector Client.

:::tip
For a middle-ground option, consider **Enforced Encryption Read-Only Mode** instead of fully disabling the Client presence requirement. This optional, configurable mode lets you grant **read-only** access to Enforced Encryption-encrypted drives on unmanaged computers — personal devices, conference room setups, or exhibition areas — without requiring the Endpoint Protector Client, while still preventing writes to the drive. Enable it under **Device Control** > **Global Settings**, in the same Enforced Encryption / EasyLock Settings area as **Endpoint Protector Client presence required**, by switching on the **EE Read-Only mode** toggle. See [Enforced Encryption in Read-Only mode](/docs/endpointprotector/admin/ee_module/eemodule#enforced-encryption-in-read-only-mode) for details.
:::

:::important
After deploying the Enforced Encryption Client with Read-Only mode enabled, launch the EE Client for the first time on an EPP Client-managed computer to complete the configuration process.
:::
