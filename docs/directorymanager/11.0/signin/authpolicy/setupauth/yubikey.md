---
title: "Set up Authentication via YubiKey"
description: "Set up Authentication via YubiKey"
sidebar_position: 60
---

# Set up Authentication via YubiKey

YubiKey is a key-sized device that users can plug into the computer’s USB slot to verify their
identity. They can use it to enroll and authenticate their identity store accounts in GroupID.

YubiKey can only be used on a physical machine. Virtual machines are not supported.

YubiKey supports the following browsers:

- Google Chrome version 38 or later
- Opera version 40 or later
- Firefox (requires the U2F Support Add-on extension)

What do you want to do?

- [Enable YubiKey Authentication for an Identity Store](#enable-yubikey-authentication-for-an-identity-store)
- [Enforce YubiKey Authentication for a Security Role in an Identity Store](#enforce-yubikey-authentication-for-a-security-role-in-an-identity-store)

## Enable YubiKey Authentication for an Identity Store

You must enable the YubiKey authentication type for an identity store for users to use it for second
factor authentication and multifactor authentication.

To enable it, see the
[Enable Authentication Types](/docs/directorymanager/11.0/signin/identitystore/configure/authtypes.md)
topic.

## Enforce YubiKey Authentication for a Security Role in an Identity Store

To enforce an authentication type, see the
[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.

See Also

- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
