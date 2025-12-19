---
title: "Set up Authentication via Windows Hello"
description: "Set up Authentication via Windows Hello"
sidebar_position: 50
---

# Set up Authentication via Windows Hello

The Windows Hello authentication type can be used on Windows 10 devices only with specialized
hardware installed, such as fingerprint reader and 3D camera.

NOTE: Windows Hello supports the Microsoft Edge browser only.

What do you want to do?

- [Enable Windows Hello on Windows 10](#enable-windows-hello-on-windows-10)
- [Enable Windows Hello Authentication for an Identity Store](#enable-windows-hello-authentication-for-an-identity-store)
- [Enforce Windows Hello Authentication for a Role in an Identity Store](#enforce-windows-hello-authentication-for-a-role-in-an-identity-store)

## Enable Windows Hello on Windows 10

1. On the Windows Start menu, select **Settings**.
2. Go to **Accounts > Sign-in options**.
3. You are prompted to enter a PIN. Click/tap **Add** under **PIN** to set up a PIN code.  
   Having set a PIN, you can proceed to add biometric data.
4. In the **Windows Hello** section, click **Set up** under **Face** or **Fingerprint** to add
   recognition data.

## Enable Windows Hello Authentication for an Identity Store

The Windows Hello authentication type must be enabled for an identity store before it can be used
for second factor authentication and multifactor authentication.

To enable it, see the
[Enable Authentication Types](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
topic.

## Enforce Windows Hello Authentication for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

See Also

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
