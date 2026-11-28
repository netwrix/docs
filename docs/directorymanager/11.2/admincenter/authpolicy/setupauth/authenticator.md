---
title: "Set Up Authenticator Authentication in Directory Manager"
description: "Enable and enforce the Authenticator authentication type so users can enroll in and authenticate with an authenticator app such as Google Authenticator."
keywords:
  - authenticator app
  - Google Authenticator
  - Microsoft Authenticator
  - Authenticator authentication type
  - enforce Authenticator for a security role
sidebar_position: 30
---

# Set Up Authenticator Authentication in Directory Manager

Users must install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on their phones. They use it to enroll and authenticate their identity store accounts in Directory Manager.

## Enable the Authenticator authentication type

Before you can use second factor authentication and multifactor authentication with the Authenticator type, enable it for the identity store. See [Enable Authentication Types for an Identity Store](/docs/directorymanager/11.2/admincenter/identitystore/configure/authtypes.md).

## Enforce Authenticator authentication for a role

To enforce an authentication type, see [Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.2/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication).

Role members must use an enforced authentication type for multifactor authentication. When an authentication type is enabled but not enforced, role members can choose to use it for enrollment and authentication.
