---
title: "GroupID Authentication Policies"
description: "Compare second factor, multifactor, and second way authentication in GroupID, including when each applies and which authentication types it supports."
keywords:
  - second factor authentication
  - multifactor authentication
  - second way authentication
  - authentication types
  - identity store authentication
sidebar_position: 20
---

# GroupID Authentication Policies

The GroupID authentication policy is based on:

- Second Factor Authentication
- Multifactor Authentication
- Second Way Authentication

## Authentication Policies - A Comparison

The following table shows a comparison between second factor authentication, multifactor
authentication, and second way authentication.

|   | Second Factor Authentication | Multifactor Authentication | Second Way Authentication |
| --- | --- | --- | --- |
| Configuration | It is enabled and configured for an identity store, and then for a security role in the identity store. | It is enabled and configured for an identity store. Settings at the security role level are optional. | It is configured for an identity store. |
| Applies when | Users sign in to Admin Center, the GroupID portal, or the GroupID Mobile app. | Users reset their password or unlock their account in the GroupID portal or the GroupID Mobile app. <br />Helpdesk users need to verify the identity of users before resetting their password and unlocking their account in Admin Center. | Unenrolled users attempt to reset their identity store account password or unlock their account using the GroupID portal or the GroupID Mobile app. |
| Supported authentication types | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>Linked Account</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li></ul> |
| Number of authentication types required to authenticate | Only one | Can be more than one, as set by the administrator | Can be one or more, as set by the administrator |

:::note
Account unlock isn’t supported in a Microsoft Entra ID identity store.
:::

**See Also**

- [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
- [Set Up Authentication Types in GroupID](/docs/directorymanager/11.0/signin/authpolicy/setupauth/overview.md)
- [Authentication Policy for Security Roles in GroupID](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md)
- [Configure Second Factor Authentication in GroupID](/docs/directorymanager/11.0/signin/authpolicy/sfa.md)
- [Configure Multifactor Authentication in GroupID](/docs/directorymanager/11.0/signin/authpolicy/mfa.md)
- [Configure Second Way Authentication in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/secondwayauthentication.md)
- [Enroll Your Account in GroupID](/docs/directorymanager/11.0/signin/authpolicy/enroll.md)
- [Authenticate Your Account in GroupID](/docs/directorymanager/11.0/signin/authpolicy/authenticate.md)
