---
title: "Configure Second Factor Authentication"
description: "Configure Second Factor Authentication"
sidebar_position: 20
---

# Configure Second Factor Authentication

You can enable second factor authentication (SFA) for a user role in an identity store. This policy
enforces role members to enroll their identity store accounts in GroupID using one or more
authentication types. Supported authentication types are discussed in the
[Authentication Policies - A Comparison](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
topic.

Once enrolled, role members must authenticate their accounts using an authentication type they
enrolled with, while signing into Admin Center, GroupID portal or the GroupID mobile app. Users
enrolled with multiple authentication types can use any one type to authenticate.

NOTE: GroupID SFA does not apply to Microsoft Entra ID MFA enabled users.

What do you want to do?

- Configure Second Factor Authentication

## Configure Second Factor Authentication

To configure second factor authentication for a security role in an identity store, do the
following:

Step 1 – Enable one or more authentication types for the identity store.

See the
[Enable Authentication Types](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
topic for details.

Step 2 – Enable second factor authentication for a security role in an identity store.

See the
[Enable Second Factor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enable-second-factor-authentication)
topic for details.

See Also

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
- [Configure Multifactor Authentication](/docs/directorymanager/11.0/signin/authpolicy/mfa.md)
- [Enroll with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
- [Authenticate with Authentication Types](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
