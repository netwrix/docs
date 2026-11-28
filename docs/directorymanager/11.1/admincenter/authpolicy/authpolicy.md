---
title: "Directory Manager Authentication Policies"
description: "Compare second factor, multifactor, and second way authentication in Directory Manager, including when each applies and which authentication types it supports."
keywords:
  - second factor authentication
  - multifactor authentication
  - second way authentication
  - authentication types
  - identity store authentication
sidebar_position: 20
---

# Directory Manager Authentication Policies

The Directory Manager authentication policy is based on:

- Second factor authentication
- Multifactor authentication
- Second way authentication

## Comparing authentication policies

The following table compares second factor authentication, multifactor authentication, and second
way authentication.

|   | Second factor authentication | Multifactor authentication | Second way authentication |
| ---| --- | --- | --- |
| Configuration | You enable and configure it for an identity store, and then for a security role in the identity store. | You enable and configure it for an identity store. Settings for a security role are optional. | You configure it for an identity store. |
| Applies when | Users sign in to Admin Center or the Directory Manager portal. | Users reset a password or unlock an account in the Directory Manager portal. <br />Helpdesk users need to verify the identity of users before they reset a password or unlock an account in Admin Center. | Unenrolled users attempt to reset their identity store account password or unlock their account using the Directory Manager portal. |
| Supported authentication types | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>Linked Account</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li></ul> |
| Number of authentication types required to authenticate | Only one | Can be more than one, as set by the administrator | Can be one or more, as set by the administrator |
