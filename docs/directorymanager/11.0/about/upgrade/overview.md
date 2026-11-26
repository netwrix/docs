---
title: "Prerequisites for Upgrading to Directory Manager 11"
description: "Confirm which GroupID versions you can upgrade from, complete the prerequisites, and find the upgrade log files."
keywords:
  - directory manager upgrade prerequisites
  - supported upgrade source versions
  - upgrade on a different server
  - upgrade log files
  - gMSA service account upgrade
sidebar_position: 30
---

# Prerequisites for Upgrading to Directory Manager 11

:::note
Directory Manager 11.0 supported upgrade from GroupID 9 and GroupID 10. As of Directory Manager
11.2, you can upgrade only from GroupID 10 SR2. This page is kept for archive purposes. When you plan
an upgrade, use the
[Directory Manager 11.2 upgrade documentation](https://docs.netwrix.com/docs/directorymanager/11_2/install/upgrade/).
:::

Directory Manager 11 supports upgrading from the following versions:

- GroupID 10.0
- GroupID 9.0

## Prerequisites for Upgrade

Complete the following before you run the Upgrade wizard.

:::note
In the following text, the term ‘source version’ refers to the GroupID version you are
upgrading from.
:::

1. To upgrade on a different server, the source version file system must be present on the
   Directory Manager 11 server. To do this:

    1. On the source version server, for example, a GroupID 10 server, go to
       `[installation drive]:\Program Files\Imanami\` and copy the `GroupID 10` folder.
    2. On the Directory Manager 11 server, create the following path and paste the `GroupID 10`
       folder there:  
       `C:\Program Files\Imanami\`  
       After you paste the `GroupID 10` folder, the path is:  
       `C:\Program Files\Imanami\GroupID 10\`

2. The following applies when you upgrade on a different server.  
   If a gMSA is the service account for an identity store in the source version, you must
   configure that gMSA on the Directory Manager 11 server before you upgrade.  
   To configure a gMSA, see the
   [Configure a gMSA for Directory Manager](/docs/directorymanager/11.0/requirements/moreinfo/gmsarequirements.md)
   topic.
3. A disabled identity store in the source version isn't upgraded to Directory Manager 11.  
   To upgrade a disabled identity store, you must enable it in the source version before upgrade.
   Then disable it in Directory Manager 11 immediately after the upgrade.
4. To upgrade schedules and Synchronize jobs on a different server, you must run a utility on the
   Directory Manager 11 server before you run the Upgrade wizard. Contact Netwrix Customer Support
   for more information.
5. If you forget the passphrase you used to encrypt GroupID data, upgrade isn't possible.

## Upgrade Logs

The upgrade creates two log files:

- File name: `UpgradeLog`  
  Path: `X:\[GroupID Installation folder]\Imanami\GroupID 11.0\GroupIDUpgradeTool\`  
  (X represents the Directory Manager installation drive.)
- File name: `directorymanager11_Upgrade.log`  
  Path: `C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\`  
  (This file contains debug logs.)

See Also

- [Upgrade to Directory Manager 11 with the Wizard](/docs/directorymanager/11.0/about/upgrade/upgrade.md)
- [Upgrade Notes and Limitations for Directory Manager 11](/docs/directorymanager/11.0/about/upgrade/notes.md)
