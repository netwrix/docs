---
title: "Configuration overview"
description: "See what to set up after you install Privilege Secure, in setup order, with a link to the page for each task."
sidebar_position: 10
---

# Configuration overview

After you install Netwrix Privilege Secure for Access Management, configure sign-in, the accounts and resources that sessions use, and the access policies that connect them. This page lists the configuration tasks in the order to complete them and links to the page for each one.

For the full path from installation to the first session, see [Quick start](/docs/privilegesecure/26.07/getting-started/quick-start.md). For the concepts behind the tasks, see [Key concepts](/docs/privilegesecure/26.07/getting-started/key-concepts.md).

## Where settings are in the console

Configuration settings are in two places in the left navigation.

| Menu item | What it holds |
|---|---|
| **Configuration** | **Service Accounts**, **Service Nodes**, **Scheduled Tasks**, **Authentication**, **Integration Connectors**, **SIEM Servers**, and **SIEM Templates**. |
| **System Settings** | The system-wide settings panels, **Action Service Settings**, and **Database**. |

**System Settings** is its own item in the left navigation. It isn't under **Configuration**. Menu paths in this documentation start with **System Settings**.

Some settings are on other pages of the console. Email server settings are under **Configuration** > **Service Nodes**. See [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md).

## Set up Privilege Secure

Complete these tasks in order. The later tasks depend on the earlier ones.

1. **Replace the console certificate and register the services.** Bind a trusted certificate to the console, then set the NPS REST URL to the name on the certificate. Sign-in connectors and the services use this name. See [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md) and [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).
1. **Add service accounts.** Add the accounts that Privilege Secure uses to read and manage your domains and resources. See [Service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md). To manage Microsoft Entra ID, see [Register an app in Microsoft Entra ID](/docs/privilegesecure/26.07/configuration/service-accounts/entra-id-app-registration.md).
1. **Add an Active Directory domain.** Add the domain that holds your users, groups, and computers, and synchronize it. See [Active Directory domains](/docs/privilegesecure/26.07/resources/domains.md).
1. **Add users and groups.** Add the people who sign in to the console. See [Add users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md).
1. **Set up sign-in.** Choose how users prove their identity. Add a multi-factor authentication (MFA) connector, an OpenID Connect connector, or a SAML connector, and assign it to the users and groups from the previous step. See [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md).
1. **Add resources.** Add the servers, databases, and other systems that users connect to. See [Add servers](/docs/privilegesecure/26.07/resources/add-resources.md).
1. **Create activities.** An activity sets the actions that run before, during, and after a session. See [Activities](/docs/privilegesecure/26.07/configuration/activities/activities.md).
1. **Create access policies.** A policy combines users, activities, a connection profile, and either resources or credentials. See [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).
1. **Configure email and data retention.** Set the email server and website URL, and set how long to keep data. See [System settings reference](/docs/privilegesecure/26.07/configuration/system-settings/system-settings.md), [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md), and [Configure data retention](/docs/privilegesecure/26.07/configuration/system-settings/data-retention.md).
1. **Protect the encryption key.** See [Encryption key management](/docs/privilegesecure/26.07/configuration/encryption-keys/encryption-keys.md).
1. **Harden the installation.** See [Security hardening checklist](/docs/privilegesecure/26.07/configuration/security-hardening.md).

## Configure optional features

These tasks aren't part of the core setup.

| Task | Where to find it |
|---|---|
| Set RDP file options and sign RDP files | [Configure and sign RDP files](/docs/privilegesecure/26.07/configuration/system-settings/rdp-files.md) |
| Allow or restrict SSH algorithms | [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md) |
| Send events to a SIEM | [SIEM servers](/docs/privilegesecure/26.07/integrations/siem/siem-servers.md) |
| Monitor service nodes and scheduled tasks | [Monitor service nodes](/docs/privilegesecure/26.07/admin/service-nodes/service-nodes.md) and [Scheduled tasks](/docs/privilegesecure/26.07/admin/service-nodes/scheduled-tasks.md) |
