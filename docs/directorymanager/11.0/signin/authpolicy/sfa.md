---
title: "Configure Second Factor Authentication in Directory Manager"
description: "Require role members to enroll in authentication types and use them when signing in to Admin Center, the portal, or the mobile app."
keywords:
  - second factor authentication
  - SFA
  - authentication types
  - security role
  - enrollment
sidebar_position: 20
---

# Configure Second Factor Authentication in Directory Manager

You can enable second factor authentication (SFA) for a user role in an identity store. This policy
requires role members to enroll their identity store accounts in Directory Manager using one or more
authentication types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
topic.

Once enrolled, role members must authenticate their accounts using an authentication type they
enrolled with, while signing in to Admin Center, the Directory Manager portal, or the Directory
Manager mobile app. Users enrolled with multiple authentication types can use any one type to
authenticate.

:::note
Directory Manager SFA doesn't apply to Microsoft Entra ID MFA-enabled users.
:::

What do you want to do?

- Configure Second Factor Authentication

## Configure Second Factor Authentication

To configure second factor authentication for a security role in an identity store, do the
following:

Step 1 – Enable one or more authentication types for the identity store.

See the
[Enable Authentication Types for an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
topic for details.

Step 2 – Enable second factor authentication for a security role in an identity store.

See the
[Enable Second Factor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enable-second-factor-authentication)
topic for details.

See Also

- [Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Configure Multifactor Authentication in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/mfa.md)
- [Enroll Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
- [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
