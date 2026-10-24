---
title: "Configuration overview"
description: "See what to set up after you install Privilege Secure, in setup order, with a link to the page for each task."
sidebar_position: 10
---

# Configuration overview

After you install Netwrix Privilege Secure for Access Management, configure sign-in, the accounts and resources that sessions use, and the access policies that connect them. This page lists the configuration tasks in the order to complete them and links to the page for each one.

For the full path from installation to the first session, see [Quick start](/docs/privilegesecure/26_07/getting-started/quick-start). For the concepts behind the tasks, see [Key concepts](/docs/privilegesecure/26_07/getting-started/key-concepts).

## Where settings are in the console

Configuration settings are in two places in the left navigation.

| Menu item | What it holds |
|---|---|
| **Configuration** | **Service Accounts**, **Service Nodes**, **Scheduled Tasks**, **Authentication**, **Integration Connectors**, **SIEM Servers**, and **SIEM Templates**. |
| **System Settings** | The system-wide settings panels, **Action Service Settings**, and **Database**. |

**System Settings** is its own item in the left navigation. It isn't under **Configuration**. Menu paths in this documentation start with **System Settings**.

Some settings are on other pages of the console. Email server settings are under **Configuration** > **Service Nodes**. See [Configure email notifications](/docs/privilegesecure/26_07/configuration/system-settings/email).

## Set up Privilege Secure

Complete these tasks in order. The later tasks depend on the earlier ones.

1. **Replace the console certificate and register the services.** Bind a trusted certificate to the console, then set the NPS REST URL to the name on the certificate. Sign-in connectors and the services use this name. See [Replace the web console certificate](/docs/privilegesecure/26_07/configuration/certificates) and [Set the NPS REST URL and register services](/docs/privilegesecure/26_07/configuration/system-settings/services-url).
1. **Add service accounts.** Add the accounts that Privilege Secure uses to read and manage your domains and resources. See [Service accounts](/docs/privilegesecure/26_07/configuration/service-accounts). To manage Microsoft Entra ID, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26_07/configuration/service-accounts/entra-id-app-registration).
1. **Add an Active Directory domain.** Add the domain that holds your users, groups, and computers, and synchronize it. See [Active Directory domains](/docs/privilegesecure/26_07/resources/domains).
1. **Add users and groups.** Add the people who sign in to the console. See [Add users and groups](/docs/privilegesecure/26_07/admin/users-groups/add-users-groups).
1. **Set up sign-in.** Choose how users prove their identity. Add a multi-factor authentication (MFA) connector, an OpenID Connect connector, or a SAML connector, and assign it to the users and groups from the previous step. See [Authentication methods](/docs/privilegesecure/26_07/configuration/authentication/overview).
1. **Add resources.** Add the servers, databases, and other systems that users connect to. See [Add servers](/docs/privilegesecure/26_07/resources/add-resources).
1. **Create activities.** An activity sets the actions that run before, during, and after a session. See [Activities](/docs/privilegesecure/26_07/configuration/activities).
1. **Create access policies.** A policy combines users, activities, a connection profile, and either resources or credentials. See [Access policies](/docs/privilegesecure/26_07/configuration/access-policies/overview).
1. **Configure email and data retention.** Set the email server and website URL, and set how long to keep data. See [System settings reference](/docs/privilegesecure/26_07/configuration/system-settings), [Configure email notifications](/docs/privilegesecure/26_07/configuration/system-settings/email), and [Configure data retention](/docs/privilegesecure/26_07/configuration/system-settings/data-retention).
1. **Protect the encryption key.** See [Encryption key management](/docs/privilegesecure/26_07/configuration/encryption-keys).
1. **Harden the installation.** See [Security hardening checklist](/docs/privilegesecure/26_07/configuration/security-hardening).

## Configure optional features

These tasks aren't part of the core setup.

| Task | Where to find it |
|---|---|
| Set RDP file options and sign RDP files | [Configure and sign RDP files](/docs/privilegesecure/26_07/configuration/system-settings/rdp-files) |
| Allow or restrict SSH algorithms | [Configure SSH algorithms](/docs/privilegesecure/26_07/configuration/ssh-algorithms) |
| Send events to a SIEM | [SIEM servers](/docs/privilegesecure/26_07/integrations/siem/siem-servers) |
| Monitor service nodes and scheduled tasks | [Monitor service nodes](/docs/privilegesecure/26_07/admin/service-nodes) and [Scheduled tasks](/docs/privilegesecure/26_07/admin/service-nodes/scheduled-tasks) |
