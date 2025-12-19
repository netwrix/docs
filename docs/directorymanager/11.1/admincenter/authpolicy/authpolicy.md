---
title: "Authentication Policy"
description: "Authentication Policy"
sidebar_position: 20
---

# Authentication Policy

The Directory Manager authentication policy is based on:

- Second Factor Authentication
- Multifactor Authentication
- Second Way Authentication

## Authentication Policies - A Comparison

The following table shows a comparison between second factor authentication, multifactor
authentication, and second way authentication.

|   | Second Factor Authentication | Multifactor Authentication | Second Way Authentication |
| ---| --- | --- | --- |
| Configuration | It is enabled and configured for an identity store, and then for a security role in the identity store. | It is enabled and configured for an identity store. Settings for a security role are optional. | It is configured for an identity store |
| Applies when | Users sign into Admin Center or the Directory Manager portal | Users reset password or unlock account in the Directory Manager portal. <br />Helpdesk users need to verify the identity of users before resetting their password and unlocking their account in Admin Center. | Unenrolled users attempt to reset their identity store account password or unlock account using the Directory Manager portal |
| Supported authentication types | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li><li>Authenticator</li><li>Linked Account</li><li>YubiKey</li><li>Windows Hello</li></ul> | <ul><li>Security Questions</li><li>SMS</li><li>Email</li></ul> |
| Number of authentication types required to authenticate | Only one | Can be more than one, as set by the administrator | Can be one or more, as set by the administrator |
