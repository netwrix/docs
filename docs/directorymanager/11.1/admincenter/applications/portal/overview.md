---
title: "Directory Manager Portal Overview"
description: "Learn what users and administrators can do with a Directory Manager portal, including the SSPR portal, linked identity stores, and notifications."
keywords:
  - Directory Manager
  - Directory Manager portal features
  - Self-Service Password Reset
  - SSPR portal
  - linked identity stores
  - portal notifications
sidebar_position: 20
---

# Directory Manager Portal Overview

A Directory Manager portal is a virtual link with the directory. In an identity store, users can use it to do the following:

- Search the directory.
- Perform group management tasks, such as create and update groups, join groups, leave groups, and attest, expire, and renew groups.
- Perform user management tasks, such as create, update, and delete users in the directory. Users can also maintain their profiles, change their passwords, manage their accounts, and manage their direct reports.
- Synchronize data between a source and a destination, such as directories, files, and databases.
- Manage user and group entitlements to shared resources on file servers and SharePoint sites.
- Approve and deny workflow requests.
- Generate hundreds of reports on Active Directory, Microsoft Entra ID, Exchange, and Office 365 objects (groups, users, mailboxes, contacts, computers, and servers).
- View history data for directory objects that are created, updated, or deleted in the directory using Directory Manager.

Delegating group and user management tasks to end users reduces the workload on IT administrators and the help desk. Users manage their groups and direct reports without help from an administrator. When users maintain their own profile information, the data is also more accurate and reliable.

Administrators keep complete control over data integrity. They can set fine-grained controls and policies that determine what users can view and change in the portal. They can also define workflows for an identity store. Workflows act as a built-in auditing system that verifies users enter correct data before changes are committed to the directory.

You can link a Directory Manager portal with multiple identity stores, so you don't need a separate portal for each one. Users select an identity store when they sign in.

## Self-Service Password Reset portal

A Self-Service Password Reset (SSPR) portal is a type of Directory Manager portal that handles only password-related functions. Users manage the password for the directory account they use to access their workstations and other Microsoft services. They can change and reset their passwords and unlock their accounts. They can also enroll their accounts in Directory Manager and link accounts in different identity stores.

:::note
Directory Manager doesn't support upgrading a Password Center portal from a previous version to an SSPR portal. Create the SSPR portal as a new portal.
:::

## Linked identity stores and the portal

An administrator can link two or more identity stores in Directory Manager. The purpose is to link identical objects in different domains. To link identity stores, they must be built on Active Directory or Microsoft Entra ID domains.

To learn how linked identity stores work in a Directory Manager portal, see [Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/admincenter/identitystore/link/overview.md#linked-identity-stores-and-the-directory-manager-portal).

## Notifications in the portal

A Directory Manager portal can send email notifications to designated recipients when a user changes objects in an identity store. To specify notification recipients, see [Specify Notification Recipients](/docs/directorymanager/11.1/admincenter/identitystore/configure/smtpserver.md#specify-notification-recipients).

By default, notifications are sent to users in English. A user can receive notifications in a supported language by changing the language settings in the **Settings** panel in the portal.
