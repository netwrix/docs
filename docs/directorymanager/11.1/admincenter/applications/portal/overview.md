---
title: "Portal"
description: "Directory Manager Portal"
sidebar_position: 20
---

# Directory Manager Portal

A Directory Manager portal represents a virtual link with the directory. Using it, users can do the
following in an identity store:

- Search the directory.
- Perform group management tasks, such as create and update their groups; join and leave groups;
  attest, expire and renew groups, and more.
- Carry out user management tasks, such as create, update, and delete users in the directory. Users
  can maintain and update their profiles, change their passwords, manage their accounts, manage
  their direct reports, and more.
- Synchronize data between a source and a destination, such as directories, files, and databases.
- Manage user and group entitlements to shared resources on file servers and SharePoint sites.
- Approve and deny workflow requests.
- Generate hundreds of insightful reports on Active Directory, Microsoft Entra ID, Exchange, and
  Office 365 objects (groups, users, mailboxes, contacts, computers, and servers).
- View history data for directory objects that are created, updated, or deleted in the directory
  using Directory Manager.

Delegating group and user management tasks to end-users reduces the workload on IT administrators
and helpdesk, as users are empowered to manage their groups and direct reports without assistance
from an administrator. Moreover, when users maintain and update their profile information, data is
more accurate and reliable.

Administrators can maintain complete control over data integrity, as they can implement fine-grained
controls and policies that determine what users can view and change using the Directory Manager
portal. They can also define workflows for an identity store, that serve as a built-in auditing
system to ensure that users enter correct data before changes are committed to the directory.

A Directory Manager portal can be linked with multiple identity stores, thus eliminating the need to
create a separate portal for each identity store. Users can select an identity store while signing
in.

## Self-Service Password Reset Portal (SSPR)

A Self-Service Password Reset portal is a type of Directory Manager portal that only facilitates
password-related functions. This portal enables users to manage their directory account passwords,
i.e., the password for the account they use to access their workstations and other Microsoft
services. Users can change and reset their passwords, as well as unlock their accounts. They can
also enroll their accounts in Directory Manager and link accounts in different identity stores.

:::note
Directory Manager does not support the upgrade of a Password Center portal (from a previous
version) to an SSPR portal. You have to create the SSPR portal as a new portal.
:::


## Linked Identity Stores and the Portal

The administrator can link two or more identity stores in Directory Manager. As a prerequisite for
linking, the identity stores must be built on Active Directory or Microsoft Entra ID domains. The
purpose is to link identical objects in different domains.

To learn about linked identity stores and how they work in a Directory Manager portal, see the
[Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal)
topic.

## Notifications in the Portal

A Directory Manager portal can send email notifications to designated recipients when a user makes a
change to objects in an identity store. To specify notification recipients, see the
[Specify Notification Recipients](/docs/directorymanager/11.1/admincenter/identitystore/configure/smtpserver.md#specify-notification-recipients)
topic.

By default, notifications are sent to users in the English language. However, a user can opt to
receive notifications in a supported language by personalizing the language settings from the
**Settings** panel in the portal.