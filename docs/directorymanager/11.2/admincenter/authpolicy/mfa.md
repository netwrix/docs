---
title: "Configure Multifactor Authentication in Directory Manager"
description: "Define a multifactor authentication policy for an identity store and enforce authentication types for security role members."
keywords:
  - multifactor authentication
  - MFA policy
  - identity store enrollment
  - security role authentication
  - helpdesk restricted mode
sidebar_position: 10
---

# Configure Multifactor Authentication in Directory Manager

A multifactor authentication (MFA) policy for an identity store requires users to enroll their identity store accounts in Directory Manager with one or more authentication types. For the supported authentication types, see [Authentication Policies - A Comparison](/docs/directorymanager/11.2/admincenter/authpolicy/authpolicy.md).

After enrollment, users must authenticate their identity store accounts with the authentication types they enrolled with. This applies when they do either of the following in the Directory Manager portal:

- Reset identity store account passwords
- Unlock their accounts

Helpdesk users with restricted access also use authentication types to authenticate end users before they reset a password or unlock an identity store account. See [Set Restricted Mode](/docs/directorymanager/11.2/admincenter/securityrole/policy/helpdesk.md#set-restricted-mode).

:::note
Multifactor authentication defined in Microsoft Entra Admin Center doesn't integrate with MFA in Directory Manager. See [Multifactor Authentication Policy](/docs/directorymanager/11.2/admincenter/identitystore/advsentraid.md#multifactor-authentication-policy).
:::

## Configure multifactor authentication

To configure multifactor authentication for a security role in an identity store:

1. Enable one or more authentication types for the identity store. See [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.2/admincenter/identitystore/configure/authtypes.md).
2. Require role members to use specific authentication types for multifactor authentication. See [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.2/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication).
