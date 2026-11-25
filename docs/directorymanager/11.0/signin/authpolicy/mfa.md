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

You can define a multifactor authentication (MFA) policy for an identity store. This policy requires
users to enroll their identity store accounts in Directory Manager using one or more authentication types.
Supported authentication types are discussed in the
[Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
topic.

After enrolling, users must authenticate their identity store accounts using the authentication types
they enrolled with when they perform any of the following actions in the Directory Manager portal or the
GroupID mobile app:

- Reset identity store account passwords
- Unlock their accounts

Helpdesk users with restricted access also use authentication types to authenticate end users
before resetting their password or unlocking their identity store account. See the
[Set Restricted Mode](/docs/directorymanager/11.0/signin/securityrole/policy/helpdesk.md#set-restricted-mode)
topic.

:::note
Multifactor authentication defined in Microsoft Entra Admin Center doesn't integrate with MFA in
Directory Manager. See the
[Multifactor Authentication Policy](/docs/directorymanager/11.0/signin/identitystore/advsentraid.md#multifactor-authentication-policy)
topic.
:::

What do you want to do?

- [Configure Multifactor Authentication](#configure-multifactor-authentication)

## Configure Multifactor Authentication

To configure multifactor authentication for a security role in an identity store, do the following.

1. Enable one or more authentication types for the identity store.  
   See the
   [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
   topic for details.
2. Require role members to use specific authentication types for multifactor authentication.  
   See the
   [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
   topic for details.

See Also

- [Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Configure Second Factor Authentication in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/sfa.md)
- [Enroll Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
- [Authenticate Your Account in Directory Manager](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
