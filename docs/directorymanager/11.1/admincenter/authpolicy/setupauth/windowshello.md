---
title: "Set Up Windows Hello Authentication in Directory Manager"
description: "Enable Windows Hello on a device, then enable and enforce Windows Hello authentication for an identity store and security role."
keywords:
  - Windows Hello
  - biometric authentication
  - second factor authentication
  - multifactor authentication
  - Microsoft Edge
sidebar_position: 50
---

# Set Up Windows Hello Authentication in Directory Manager

The Windows Hello authentication type works on Windows 10 devices only. It also needs specialized hardware, such as a fingerprint reader or 3D camera.

:::note
Windows Hello supports the Microsoft Edge browser only.
:::

## Enable Windows Hello on Windows 10

1. On the Windows Start menu, select **Settings**.
2. Go to **Accounts > Sign-in options**.
3. When prompted to enter a PIN, select **Add** under **PIN** to set up a PIN code. After you set a PIN, you can add biometric data.
4. In the **Windows Hello** section, select **Set up** under **Face** or **Fingerprint** to add recognition data.

## Enable Windows Hello authentication for an identity store

Enable the Windows Hello authentication type for an identity store before users can use it for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Windows Hello authentication for a role in an identity store

To enforce an authentication type, see the [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication) topic.

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.
