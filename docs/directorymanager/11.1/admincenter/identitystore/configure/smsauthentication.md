---
title: "SMS Authentication"
description: "SMS Authentication"
sidebar_position: 140
---

# SMS Authentication

To enable users to enroll and authenticate their identity store accounts using SMS, you must make
sure that an SMS gateway account is linked with the identity store. Using this gateway account,
Directory Manager sends confirmation codes to the users' mobile phone numbers for verification.

See the [Manage SMS Gateway Accounts](/docs/directorymanager/11.1/admincenter/smsgateway/manage.md) topic for creating and managing
SMS gateway accounts.

## Enable SMS Authentication for an Identity Store

The SMS authentication type must be enabled for an identity store before users can use it for second
factor authentication and multi-factor authentication.

To enable it, see the [Enable Authentication Types](/docs/directorymanager/11.1/admincenter/identitystore/configure/authtypes.md) topic.

## Link an SMS Gateway Account to an Identity Store

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Configurations** under **Settings** in the left pane. Then click **SMS Authentication**.
4. In the **SMS gateway account** drop-down list on the **SMS Authentication** page, select an SMS
   gateway account to link it with the identity store. If a default SMS gateway account is defined
   before the identity store was created, it is auto selected in this list.
5. In the **Text message** box, modify the displayed message, except the [Code] placeholder.  
   This box displays the text that is sent to the users’ mobile phone numbers along with the
   confirmation code. Directory Manager randomly generates a confirmation code and inserts it into
   the [Code] placeholder. Users have to enter this code in Directory Manager for enrollment and
   authentication.
6. Click **Save**.

## Enforce SMS Authentication for a Security Role

To enforce an authentication type, see the
[Authentication Policy for Security Roles](/docs/directorymanager/11.1/admincenter/securityrole/policy/authentication.md) topic.

Role members must use an enforced authentication type for multifactor authentication. When an
authentication type is enabled but not enforced, role members can choose to use it for enrollment
and authentication.