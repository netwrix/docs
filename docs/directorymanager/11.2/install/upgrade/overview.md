---
title: "Prerequisites for Upgrading to Directory Manager 11"
description: "Confirm which Directory Manager versions you can upgrade from, complete the prerequisites, and find the upgrade log files."
keywords:
  - directory manager upgrade prerequisites
  - supported upgrade source versions
  - upgrade on a different server
  - upgrade log files
  - gMSA service account upgrade
sidebar_position: 30
---

# Prerequisites for Upgrading to Directory Manager 11

Directory Manager 11 supports upgrading from the following versions:

- Directory Manager 10.0
- Directory Manager 9.0

## Prerequisites for Upgrade

Complete the following before you run the Upgrade wizard.

:::note
In the following text, the term ‘source version’ refers to the Directory Manager version you are
upgrading from.
:::

Step 1 – To upgrade on a different server, the source version file system must be present on the
Directory Manager 11 server. To do this:

1. On the source version server, for example, a Directory Manager 10 server, go
   to `[installation drive]:\Program Files\Imanami\` and copy the `GroupID 10` folder.
2. On the Directory Manager 11 server, create the following path and paste the `GroupID 10` folder
   there:

    `C:\Program Files\Imanami\`

    After you paste the `GroupID 10` folder, the path is:  
     `C:\Program Files\Imanami\GroupID 10\`

Step 2 – The following applies when you upgrade on a different server.  
If a gMSA is the service account for an identity store in the source version, you must
configure that gMSA on the Directory Manager 11 server before you upgrade.  
To configure a gMSA, see the
[gMSA for Active Directory](/docs/directorymanager/11.2/requirements/permissions/gmsarequirements.md) topic.

Step 3 – A disabled identity store in the source version isn't upgraded to Directory
Manager 11.  
To upgrade a disabled identity store, you must enable it in the source version before upgrade. Then
disable it in Directory Manager 11 immediately after the upgrade.

Step 4 – To upgrade schedules and Synchronize jobs on a different server, you must run a utility on the
Directory Manager 11 server before you run the Upgrade wizard. Contact Netwrix Customer Support for
more information.

If you forget the passphrase you used to encrypt Directory Manager data, upgrade isn't possible.

## Upgrade Logs

The upgrade creates two log files:

- File name: `UpgradeLog`  
  Path: `X:\Imanami\GroupID 11.0\GroupIDUpgradeTool\`  
  (X represents the Directory Manager installation drive)
- File name: `directorymanager11_Upgrade.log`  
  Path: `C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\`  
  (This file contains debug logs.)
