---
title: "Upgrade"
description: "Upgrade"
sidebar_position: 30
---

# Upgrade

GroupID 11 supports upgrade from the following:

- GroupID 10.0
- GroupID 9.0

## Prerequisites for Upgrade

The following must be in place before you run the Upgrade wizard.

NOTE: In the following text, the term ‘source version’ refers to the GroupID version you are
upgrading from.

1. For upgrade on a different box, the GroupID source version file system must be present on the
   GroupID 11 server. For that, do the following:

    1. On the GroupID source version server, for example, GroupID 10 server, go to [GroupID
       Installation Drive]:\Program Files\Imanami\ and copy the GroupID 10 folder.
    2. Go to the GroupID 11 server, create a path as follows, and paste the GroupID 10 folder
       there:  
       C:\Program Files\Imanami\  
       On pasting the GroupID 10 folder, it will be as:  
       C:\Program Files\Imanami\GroupID 10\

2. The following applies to upgrade on a different box.  
   If a gMSA is used as the service account for an identity store in the source version, you must
   configure that gMSA on the GroupID 11 server before you upgrade.  
   To configure a gMSA, see the
   [gMSA for Active Directory](/docs/directorymanager/11.0/requirements/moreinfo/gmsarequirements.md)
   topic.
3. A disabled identity store in the source version will not be upgraded to GroupID 11.  
   To upgrade a disabled identity store, you must enable it in the source version before upgrade.
   Then disable it in GroupID 11 immediately after upgrade.
4. To upgrade schedules and Synchronize jobs on a different box, you must run a utility on the
   GroupID 11 server before running the Upgrade wizard. Contact Netwrix Customer Support for more
   info.
5. If you forget the passphrase you used to encrypt GroupID data, upgrade is not possible.

## Upgrade Logs

Two log files are created on upgrade:

- File name: UpgradeLog  
  Path: X:\[GroupID Installation folder]\Imanami\GroupID 11.0\GroupIDUpgradeTool\  
  (X represents the GroupID installation drive.)
- File name: directorymanager11_Upgrade.log  
  Path: C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\  
  (This file contains debug logs.)

See Also

- [Upgrade to GroupID 11](/docs/directorymanager/11.0/about/upgrade/upgrade.md)
- [Notes on Upgrade](/docs/directorymanager/11.0/about/upgrade/notes.md)
