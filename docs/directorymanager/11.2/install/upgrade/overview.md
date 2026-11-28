---
title: "Prerequisites for Upgrading to Directory Manager 11"
description: "Confirm that you can upgrade from GroupID 10 SR2 to Directory Manager 11, complete the prerequisites, and find the upgrade log files."
keywords:
  - directory manager upgrade prerequisites
  - supported upgrade source versions
  - upgrade on a different server
  - upgrade log files
  - gMSA service account upgrade
sidebar_position: 30
---

# Prerequisites for Upgrading to Directory Manager 11

Directory Manager 11 supports upgrade only from GroupID 10 SR2.

:::note
If you use GroupID 9 or a GroupID 10 release earlier than SR2, first upgrade to GroupID 10 SR2. Then upgrade from GroupID 10 SR2 to Directory Manager 11.
:::

## Prerequisites for Upgrade

Complete the following before you run the Upgrade wizard.

:::note
In the following text, the term 'source version' refers to GroupID 10 SR2, the version you are upgrading from.
:::

1. To upgrade on a different server, make the source version file system present on the Directory Manager 11 server:

   1. On the source version server, go to `[installation drive]:\Program Files\Imanami\` and copy the `GroupID 10` folder.
   2. On the Directory Manager 11 server, create the following path and paste the `GroupID 10` folder there:

      `C:\Program Files\Imanami\`

      After you paste the `GroupID 10` folder, the path is:  
      `C:\Program Files\Imanami\GroupID 10\`

2. If you upgrade on a different server and a gMSA is the service account for an identity store in the source version, configure that gMSA on the Directory Manager 11 server before you upgrade. See the [Configure a gMSA for Directory Manager](/docs/directorymanager/11.2/requirements/permissions/gmsarequirements.md) topic.

3. To upgrade a disabled identity store, enable it in the source version before the upgrade. Then disable it in Directory Manager 11 immediately after the upgrade. Directory Manager 11 doesn't upgrade a disabled identity store from the source version.

4. To upgrade schedules and Synchronize jobs on a different server, run a utility on the Directory Manager 11 server before you run the Upgrade wizard. Contact Netwrix Customer Support for more information.

If you forget the passphrase you used to encrypt GroupID data, upgrade isn't possible.

## Upgrade logs

The upgrade creates two log files:

- File name: `UpgradeLog`  
  Path: `X:\Imanami\GroupID 11.0\GroupIDUpgradeTool\`  
  (X represents the Directory Manager installation drive)
- File name: `directorymanager11_Upgrade.log`  
  Path: `C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\`  
  (This file contains debug logs.)
