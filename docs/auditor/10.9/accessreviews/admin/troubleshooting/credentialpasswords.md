---
title: "Update Credential Passwords"
description: "Update Credential Passwords"
sidebar_position: 30
---

# Update Credential Passwords

Credential passwords occasionally need to be updated due to various reasons, such as security
policies that require passwords to be reset on a regular basis. The following types of credentials
may be impacted by password changes or security policies:

- Database service account
- Active Directory service account
- SMTP authentication service account
- Application Service Account
- Bultin Administrator account

## Database Service Account

The Database service account grants access to the SQL Server database. It can be updated on the
Database page of the Configuration interface. See the
[Update the Database Service Account Password](/docs/auditor/10.9/accessreviews/admin/configuration/database.md#update-the-database-service-account-password)
topic for instructions.

## Active Directory Service Account

The Active Directory service account handles user authentication to the Access Reviews Console. It
can be updated on the Active Directory page of the Configuration interface. See the
[Update the Active Directory Service Account Password](/docs/auditor/10.9/accessreviews/admin/configuration/activedirectory.md#update-the-active-directory-service-account-password)
topic for instructions.

## SMTP Authentication Service Account

An SMTP server is required for the application to send notifications. If the SMTP server requires
authentication, the service account can be updated on the Notifications page of the Configuration
interface. See the
[Configure SMTP Server Settings](/docs/auditor/10.9/accessreviews/admin/configuration/notifications.md#configure-smtp-server-settings)
topic for instructions.

## Application Service Account

The account used to run the Netwrix Auditor Access Reviews service can be updated using Services
Control Manager console. See the
[Modify the Service Account via Service Control Manager](serviceaccount.md#modify-the-service-account-via-service-control-manager)
topic for instructions.

## Builtin Administrator Account

The Builtin Administrator account is an application account that is created during the first launch.
It is used to complete the initial configuration steps and to grant console access to domain users.
This account can be disabled after Administrator users are added. However, if it is enabled and a
security policy requires the password to be reset, it can be updated on the Console Access page of
the Configuration interface. See the
[Modify the Builtin Administrator Account](/docs/auditor/10.9/accessreviews/admin/configuration/consoleaccess.md#modify-the-builtin-administrator-account)
topic for modification instructions.
