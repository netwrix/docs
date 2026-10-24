---
title: "Quick start"
description: "Follow the setup tasks for Privilege Secure in order, from installation to the first user session, with a link to each task."
sidebar_position: 40
---

# Quick start

Set up Privilege Secure from the bottom up. First install the product and prepare sign-in. Then add the accounts, domains, users, and resources that sessions need. Finally, define the activities, connection profile, and access policy that tie them together. A user must belong to an access policy to create a session.

For the concepts behind these tasks, see [Key concepts](/docs/privilegesecure/26.07/getting-started/key-concepts.md).

## Install and sign in

1. Confirm that your servers meet the [requirements](/docs/privilegesecure/26.07/requirements/overview.md) and that the [ports](/docs/privilegesecure/26.07/requirements/ports.md) are open.
2. [Install the application server](/docs/privilegesecure/26.07/install/install-application-server.md).
3. [Run the setup wizard](/docs/privilegesecure/26.07/install/first-launch.md) the first time you open the console at `https://<nps-server>:6500`.
4. [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md).
5. [Sign in to the console](/docs/privilegesecure/26.07/user-guide/sign-in.md). To set up multi-factor authentication or an identity provider, see [Authentication methods](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

## Connect to your environment

The setup wizard adds your first service account, synchronizes your first domain, and adds one resource. Use these tasks to add more.

6. [Add service accounts](/docs/privilegesecure/26.07/configuration/service-accounts/service-accounts.md) that give Privilege Secure access to your domains and resources.
7. [Add an Active Directory domain](/docs/privilegesecure/26.07/resources/domains.md) and [synchronize it](/docs/privilegesecure/26.07/resources/ad-sync.md).
8. [Add users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md) that use the console.
9. [Add resources](/docs/privilegesecure/26.07/resources/add-resources.md), such as Windows and Linux servers, databases, and websites.

## Define the access

10. [Create an activity](/docs/privilegesecure/26.07/configuration/activities/create-activity.md) that sets the actions to run before, during, and after a session.
11. [Create a connection profile](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md) that sets how users connect.
12. [Create a resource-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/resource-based-policy.md). To give users credentials or files from a vault, [create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md) instead.

## Start a session

13. [Request a session](/docs/privilegesecure/26.07/user-guide/request-session.md) and [connect to it](/docs/privilegesecure/26.07/user-guide/connect-session.md).

## Add optional capabilities

- [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).
- [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md).
- [Add a SIEM server](/docs/privilegesecure/26.07/integrations/siem/siem-servers.md).
- [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).
- [Manage and rotate credentials](/docs/privilegesecure/26.07/admin/credentials/manage-credentials.md).
- [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).
- [Set up the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/overview.md).
