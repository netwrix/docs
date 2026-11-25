---
title: "Set Up Linked Account Authentication in Directory Manager"
description: "Let users enroll and authenticate across linked identity store accounts, and enable and enforce Linked Account authentication for multifactor use."
keywords:
  - Linked Account authentication
  - multifactor authentication
  - identity store
  - account unlock
  - password reset
sidebar_position: 40
---

# Set Up Linked Account Authentication in Directory Manager

In the Directory Manager portal, users can link accounts that they might have in different identity
stores. When a user enrolls any one of those linked accounts in Directory Manager, it counts for the
enrollment of all linked accounts.

Users can then reset their account passwords and unlock accounts through a linked account. Suppose
a user links their accounts in Identity Store A and Identity Store B. Using the Linked
Account authentication type, the user can unlock the Identity Store A account by providing the
credentials of the Identity Store B account and vice versa.

:::note
The Linked Account authentication type is available for multifactor authentication only.
:::

What do you want to do?

- [Enable Linked Account Authentication for an Identity Store](#enable-linked-account-authentication-for-an-identity-store)
- [Enforce Linked Account Authentication for a Security Role](#enforce-linked-account-authentication-for-a-security-role)

## Enable Linked Account Authentication for an Identity Store

The Linked Account authentication type must be enabled for an identity store before it can be used
for multifactor authentication.

To enable it, see the
[Enable Authentication Types for an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
topic.

## Enforce Linked Account Authentication for a Security Role

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

See Also

- [Directory Manager Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
