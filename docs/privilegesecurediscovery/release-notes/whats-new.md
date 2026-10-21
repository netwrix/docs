---
title: "What's New"
description: "Find the release notes for Netwrix Privilege Secure for Discovery versions 26.03, 26.06, 26.09, and the 26.09.1 patch, with a summary of 26.09 and 26.09.1."
sidebar_position: 10
---

Netwrix publishes release notes for Netwrix Privilege Secure for Discovery on the Netwrix Community.

See the [Netwrix Privilege Secure for Discovery release notes](https://community.netwrix.com/c/privilege-secure/news/134) for the following releases:

- 26.03
- 26.06
- 26.09
- 26.09.1

Before you upgrade, read the notes for every version between your current version and the target version.

## Version 26.09.1

Version 26.09.1 is a bridge and security release. The full list is in the [26.09.1 release notes](https://community.netwrix.com/t/patch-version-26-09-1-released-privilege-secure-for-discovery/159929).

New features and changes:

- A new command retires the legacy MongoDB service after you upgrade, for single-node and multi-node deployments.
- The MongoDB upgrade cutover accepts a `--yes` (or `--non-interactive`) option, so you can run it without prompts.
- The database status command shows the active MongoDB service and its running version.
- Remote execution supports Python 3.13 on managed Linux systems.
- The release removes the **Default EDR for Entra ID Exclusive Systems** setting.

Improvements and fixes:

- Search on **Configure** > **Users and Groups** is faster in large environments.
- The product creates and maintains database indexes explicitly, which improves query performance and startup consistency.
- The MongoDB upgrade run, status, and cutover states are clearer, and the database selection persists through the next deployment.
- Deployments block a database version the installed MongoDB can't serve, and block upgrades to releases that require MongoDB 8.0 until you complete the migration.
- The product blocks deleting an EDR provider that you assigned to a Microsoft Entra ID domain.
- Hybrid identity records keep a separate value for each field, and the update repairs corrupted records.
- The release updates third-party components in the web interface, API, and platform services to address known security issues.

:::important
Netwrix deprecated the ISO-based installation. Use the container-based deployment for new installations. If you run an ISO deployment, contact Netwrix Support to plan your migration.
:::

## Version 26.09.0

Version 26.09.0 makes MongoDB 8.0 the default database for new installations and adds tools to migrate existing deployments. The full list is in the [26.09.0 release notes](https://community.netwrix.com/t/patch-version-26-09-0-released-privilege-secure-for-discovery/141069).

New features:

- Migration tooling moves single-node and three-node deployments from MongoDB 4.0 to MongoDB 8.0. It runs readiness checks, copies and validates data, and cuts over to the new database. A data copy can resume after an interruption.
- The `s1 db`, `s1 set-password`, and `s1 database-status` commands follow the active database before, during, and after migration.
- The product reads the version from the running MongoDB engine instead of the container image label.
- You can enable automatic redirection to Security Assertion Markup Language (SAML) sign-in with the **Auto-Redirect to IdP** setting. It's disabled by default.

Improvements and fixes:

- After an upgrade, the browser loads the updated web assets, so cached files no longer hide interface changes.
- Domain selectors in Access Risk list domains alphabetically.
- On **Configure** > **Services**, the API service **Stop** control is disabled and shows the reason.
- Dashboard, sign-in, and error screens use current product naming.

To migrate an existing MongoDB 4.0 deployment, see [Upgrade MongoDB 4.0 to 8.0 for Privilege Secure for Discovery](https://community.netwrix.com/t/upgrade-mongodb-4-0-to-8-0-for-privilege-secure-for-discovery/149078). MongoDB 4.0 support will end and the backend will move to Python 3.13 in a future release, so complete the migration on 26.09.0 or 26.09.1 first.
