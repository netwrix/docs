---
description: >-
  This article explains how to migrate the Endpoint Protector Server to a new virtual machine (VM) while preserving your configuration and data.
keywords:
  - Endpoint Protector
  - migration
  - virtual machine
sidebar_label: Migrate Endpoint Protector Server
tags:
  - deployment-and-installation
title: "Migrate the Endpoint Protector Server to a New Virtual Machine"
knowledge_article_id: kA0Qk0000002B6DKAU
products:
  - endpoint-protector
---

# Migrate the Endpoint Protector Server to a New Virtual Machine

## Overview

This article explains how to migrate the Endpoint Protector Server to a new virtual machine (VM). Follow these steps to ensure a smooth migration and preserve your configuration and data.

## Instructions

> **IMPORTANT:** Before updating, create a snapshot of the current VM. Additionally, if you require offline patches, provide your current version to Netwrix Technical Support to receive the necessary files.

1. Download the new VM image from the following link:  
   [https://nwxcorp.sharepoint.com/sites/Netwrix-EPP-Product/SitePages/EPP-Server-Classic---image-downloand.aspx](https://nwxcorp.sharepoint.com/sites/Netwrix-EPP-Product/SitePages/EPP-Server-Classic---image-downloand.aspx)
2. Import the VM image into your environment.
3. In the Endpoint Protector web console, verify the current version in the lower right corner.
4. Activate the trial license on the new server.
5. Update both Endpoint Protector servers to match the version of the new server. You can use **Live Update** or offline patches.
6. On the old server, go to **System Maintenance** > **System backup V2**.
7. Click **Create**.
8. Name the backup and add a description.
9. Click **Save**.
10. Copy the **System Backup Key** to a notepad.
11. Click **Yes, I saved the System Backup Key**.
12. Allow the backup to finish.
13. Download the backup file.
14. On the new server, go to **System Maintenance** > **System backup V2**.
15. Click **Import and Restore (Migrate)**.
16. Click **Choose File** and select the backup created on the old server.
17. Add the **System Backup Key**.
18. Click **Import**.
19. Allow the import to finish.
20. Once the backup is imported, refresh the page and log in using your previous credentials.
21. Navigate to the **License** page to ensure your licenses are present.
22. After the import is complete, you can turn off the old VM and change the IP address of the new VM to match the old one. Perform this step from the VM console.

If you need assistance during the migration process, raise a ticket with [Netwrix Technical Support](https://www.netwrix.com/support.html) for further guidance.