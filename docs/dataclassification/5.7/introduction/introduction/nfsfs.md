---
title: "Configure NFS File Share for Crawling"
description: "Configure NFS File Share for Crawling"
sidebar_position: 40
---

# Configure NFS File Share for Crawling

To enable processing Network File System (NFS) file shares it is necessary to enable specific
Windows features. The steps to enable these features differ depending on operating system of the
computer where Netwrix Data Classification is installed.

:::note
Prior to configuration, consider the following:
:::


- NFS File shares are only supported from servers running Windows Server 2012 or later (or
  Windows 10)
- Writing classifications to NFS file shares is only supported from Netwrix Data Classification
  5.4.8 onwards
- Changes made to files (including adding new files) will not be automatically detected until the
  source is re-indexed—Netwrix recommends setting the re-index period for NFS file shares to 1 day.

Add the Folder source as described in the [File System](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/overview.md)
topic.

:::note
Do not specify username and password while adding data source.
:::


## To configure Windows Server 2012 Onward:

1. On the Windows desktop, start Server Manager.
2. On the Manage menu, click Add Roles and Features.
3. Progress to the Features step.
4. Ensure that Client for NFS option enabled.
5. Complete the wizard.

## To configure Windows 10:

1. Navigate to Control Panel and select Programs.
2. Select Turn Windows features on or off.
3. Expand Services for NFS and enable the Client for NFS option.
4. Click OK.
