---
description: >-
  This article provides step-by-step instructions for migrating Netwrix Recovery for Active Directory (NRAD) v2.6 to a new server.
keywords:
  - migration
  - Netwrix Recovery for Active Directory
  - NRAD v2.6
sidebar_label: Migrating NRAD v2.6
tags: []
title: "Migrating Netwrix Recovery for Active Directory (NRAD) v2.6 to a New Server"
knowledge_article_id: kA0Qk0000001h4XKAQ
products:
  - recovery-active-directory
---

# Migrating Netwrix Recovery for Active Directory (NRAD) v2.6 to a New Server

## Overview

This article provides step-by-step instructions for migrating Netwrix Recovery for Active Directory (NRAD) v2.6 to a new server.

## Instructions

1. Identify the location of the NRAD database by noting the **SQL Server** and **Database Name**.
   > **NOTE:** It is recommended to take screenshots of each configuration tab in the Web Console for reference. This step is optional but can help ensure accuracy during the migration process.

2. Download and install **NRAD v2.6** on the new server:
   - Ensure the installation file is unblocked before proceeding with the installation.

3. During the installation process, connect to the existing NRAD database:
   - Provide the previously noted SQL Server and Database Name details when prompted.

4. After completing the installation, open the Web Console:
   - If you took screenshots of the configuration tabs earlier, compare them to the new configuration tabs to ensure all settings are correctly migrated. This step is optional but recommended.