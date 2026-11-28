---
title: "SMS Gateway Support in GroupID"
description: "Learn when GroupID needs an SMS gateway account, which providers it supports, and how to use a custom gateway."
keywords:
  - SMS gateway
  - SMS verification
  - Second Way Authentication
  - Bulletin.net
  - Nexmo
  - RedOxygen
sidebar_position: 140
---

# SMS Gateway Support in GroupID

In GroupID, an SMS gateway account is required for:

- SMS verification for multifactor authentication, second factor authentication, and Second Way
  Authentication. GroupID uses an SMS gateway account to send verification codes to the
  users' mobile numbers.
- Sending new passwords and password reset links to the users' mobile numbers by the helpdesk users,
  when they reset end users' passwords using the Helpdesk node in Admin Center.

The SMS gateway can be any third-party service provider capable of sending text messages to mobile
phone numbers.

GroupID supports these SMS gateways:

- Bulletin.net
- Nexmo
- RedOxygen

To use a gateway not in this list, write your own custom gateway using the GroupID Custom Gateway API.

For a gateway, you can set up as many gateway accounts as you need and then link a gateway account
to an identity store.

**See Also**

- [Manage SMS Gateway Accounts in GroupID](/docs/directorymanager/11.0/signin/smsgateway/manage.md)
- [Implement and Deploy a Custom SMS Gateway in GroupID](/docs/directorymanager/11.0/signin/smsgateway/implementcustom.md)
- [GroupID Authentication Policies](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
