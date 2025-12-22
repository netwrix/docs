---
title: "Configure Second Factor Authentication"
description: "Configure Second Factor Authentication"
sidebar_position: 20
---

# Configure Second Factor Authentication

You can enable second factor authentication (SFA) for a user role in an identity store. This policy
enforces role members to enroll their identity store accounts in Directory Manager using one or more
authentication types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](/docs/directorymanager/11.1/admincenter/authpolicy/authpolicy.md) topic.

Once enrolled, role members must authenticate their accounts using an authentication type they
enrolled with, while signing into Admin Center or the Directory Manager portal. Users enrolled with
multiple authentication types can use any one type to authenticate.

:::note
Directory Manager SFA does not apply to Microsoft Entra ID MFA enabled users.
:::


## Configure Second Factor Authentication

To configure second factor authentication for a security role in an identity store, do the
following:

Step 1 – Enable one or more authentication types for the identity store.

See the [Enable Authentication Types](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md) topic for details.

Step 2 – Enable second factor authentication for a security role in an identity store.