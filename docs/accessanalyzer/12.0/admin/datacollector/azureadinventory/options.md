---
title: "AzureADInventory: Options"
description: "AzureADInventory: Options"
sidebar_position: 40
---

# AzureADInventory: Options

The Options page provides scan options to use when gathering Microsoft Entra ID information. It is a
wizard page for the Scan Entra ID category.

![Entra ID Inventory DC Wizard Options page](/images/accessanalyzer/12.0/admin/datacollector/azureadinventory/options.webp)

Scan options for collecting Microsoft Entra ID information include:

- Collect only updates since the last scan
- Collect sign-in activity with scan
    - This option is required to collect the LastLogonTimestamp attribute of user objects
- Collect directory audit events
