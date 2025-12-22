---
title: "Set up Authentication via Authenticator"
description: "Set up Authentication via Authenticator"
sidebar_position: 30
---

# Set up Authentication via Authenticator

Users must install an authenticator app, such as Google Authenticator or Microsoft Authenticator, on
their phones and use it to enroll and authenticate their identity store accounts in Directory
Manager.

## Enable the Authenticator Authentication Type for an Identity Store

The Authenticator authentication type must be enabled for an identity store before it can be used
for second factor authentication and multifactor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md) topic.

## Enforce Authentication by Authenticator for a Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.