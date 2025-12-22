---
description: >-
  How to remove Netwrix Auditor components from a server before performing a
  clean installation to avoid conflicts with the previous installation.
keywords:
  - Netwrix Auditor
  - clear install
  - uninstall
  - compression services
  - monitoring plans
  - server preparation
  - migration
  - reinstall
products:
  - auditor
sidebar_label: How to Properly Remove Auditor Components Prior to
tags: []
title: "How to Properly Remove Auditor Components Prior to Further Clear Installation?"
knowledge_article_id: kA0Qk0000000Lm1KAE
---

# How to Properly Remove Auditor Components Prior to Further Clear Installation?

## Overview

In cases when you already have Netwrix Auditor installed on a server and, for some reasons, do not want to upgrade the product and migrate the configuration to another server, you might want to perform clear install of Netwrix Auditor to this machine. How to make sure the new server installation/configuration doesn't encounter problems related to the old Netwrix server?

## Instructions

Review the explanations and instructions below to safely prepare your server for clear install.

### Question 1

Do I need to uninstall Netwrix compression services from all the nodes that the previous installation/server was monitoring before I build new server?

### Answer

No, because Netwrix Auditor is supposed to automatically uninstall compression services upon removing the targeted machine/location or items from monitoring plans.

### Question 2

Does Netwrix Auditor uninstallation from my server removes all Netwrix compression services or do I have to manually uninstall them from all nodes?

### Answer

In most cases, yes it does. However, for the proper uninstallation of all compression services, Netwrix recommends following the procedure below:

1. In Netwrix Auditor, navigate to **Monitoring plans** and remove the **items** first.
2. Wait for the host server some time to synchronize with nodes that have the compression services installed. Depending on your Auditor configuration, the uninstallation process might take a while. Wait for a couple of hours for the uninstallation to take effect.
3. Double check that the compression services were uninstalled successfully.
4. Delete all **monitoring plans**.
5. Uninstall Netwrix Auditor itself.

### Related Article

- [Migrating Auditor to New Server](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/migrating-auditor-to-new-server)




