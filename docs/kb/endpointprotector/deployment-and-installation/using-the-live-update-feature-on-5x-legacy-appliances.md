---
description: >-
  Explains how to configure, check for, and apply updates using the Live
  Update feature on Endpoint Protector Server versions 5.7.0.0 through
  5.9.4.2. Live Update was removed starting with EPP Server version 2509,
  and this article is retained for administrators still operating a 5.x
  legacy appliance.
keywords:
  - Live Update
  - LiveUpdate Server
  - Endpoint Protector
  - EPP Server
  - 5.x legacy appliance
  - Offline Patch Uploader
  - Configure Live Update
  - Automatic Reporting
  - schedule update
  - database partitions
products:
  - endpointprotector
sidebar_label: Using Live Update on 5.x Appliances
tags:
  - deployment-and-installation
  - kb
title: "Using the Live Update Feature on 5.x Legacy Appliances"
knowledge_article_id: kA0Qk0000000000AAA
---

# Using the Live Update Feature on 5.x Legacy Appliances

## Overview

Netwrix Endpoint Protector (EPP) Server versions 5.4.0.0 through 5.9.4.2 included a Live Update feature that let administrators check for and apply incremental server patches directly from the System Configuration section of the console. Starting with EPP Server version 2509, Netwrix removed Live Update entirely. Administrators apply all patches on the 2509 and later image-based platform exclusively through the Offline Patch Uploader, which delivers cumulative updates that bring the server directly to the latest version regardless of the current patch level.

This article preserves the Live Update procedure for administrators still operating a 5.x legacy appliance.

:::note
Netwrix discontinued support for EPP Server version 5.9.4.2 and all older versions as of 14 February 2026. If your environment still runs a 5.x server, schedule a migration to the current platform as soon as possible. See the [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide) and [Migrating from a Legacy 5.x Server to 2608](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x).
:::

## Instructions

### Configuring Live Update

1. Navigate to **System Configuration** > **Server Update** > **Software Update**.
2. Click **Configure Live Update**.
3. Select manual or automatic update checks, set the number of retries, and manage Automatic Reporting to the Live Update server.

![Configure Live Update dialog for setting manual or automatic update checks, retry count, and Automatic Reporting](./../0-images/legacy-live-update-configure.webp)

### Checking for and Applying Updates

1. Click **Check Now** to search for available EPP Server updates. Available updates appear in the Available Updates section.
2. Select an update and click **Apply Updates**, or click **Apply all updates** to install every available update.
3. Click **View Applied Updates** to see the most recently installed updates.

To schedule an update instead of applying it immediately:

1. Select an entry from the available updates.
2. Click **Schedule update**.
3. Use the calendar to select a date and confirm the selection.

![Available EPP Server updates screen with options to apply, apply all, or schedule an update](./../0-images/legacy-live-update-available-updates.webp)

### Applying Offline Patches via Live Update

Use the Offline Patch upload option to select offline patches from the local computer and install them one at a time to bring the server up to the latest available 5.x version.

:::note
To request an Offline Patch, submit a support ticket through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).
:::

![Offline Patch upload option for selecting and installing offline patches from a local computer](./../0-images/legacy-live-update-offline-patch.webp)

:::warning
Before upgrading an EPP Server to version 5.7.0.0 from a pre-5.2.0.6 (5206) version and its associated OS image, enable database partitions. For assistance, submit a support ticket through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).
:::

## Related Links

- [EPP Server Migration & Upgrade Guide](/docs/endpointprotector/install/migrationprocedure/migrationguide)
- [Migrating from a Legacy 5.x Server to 2608](/docs/endpointprotector/install/migrationprocedure/migration-legacy-5x)
- [How to Apply an Offline Patch or Upgrade](/docs/kb/endpointprotector/deployment-and-installation/how_to_apply_an_offline_patch_or_upgrade)
- [Netwrix Endpoint Protector Server Supportability](/docs/endpointprotector/supportability/server-supportability)
