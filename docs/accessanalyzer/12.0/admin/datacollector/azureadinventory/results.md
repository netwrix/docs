---
title: "AzureADInventory: Results"
description: "AzureADInventory: Results"
sidebar_position: 60
---

# AzureADInventory: Results

The Results page is where the properties from Microsoft Entra ID to be gathered are selected. It is
a wizard page for the category of Scan Entra ID.

![Entra ID Inventory DC Wizard Results page](/images/accessanalyzer/12.0/admin/datacollector/azureadinventory/results.webp)

Properties can be checked individually or the **Select All** and **Clear All** buttons can be used.
All checked properties are collected. This information is not available within the standard
reference tables and views. Instead, this information can be viewed in the
**SA_AzureADInventory_DEFAULT** table, which is created when any of these properties are selected.
