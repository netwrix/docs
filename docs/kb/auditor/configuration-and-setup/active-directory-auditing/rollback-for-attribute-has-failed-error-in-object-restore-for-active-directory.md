---
description: >-
  Explains causes and resolutions for the "The rollback for the attribute
  %attribute% of %user% from %state% to %state% has failed" error when restoring
  attributes or changes with Netwrix Auditor Object Restore for Active
  Directory.
keywords:
  - Active Directory
  - Object Restore
  - rollback
  - omitproplist_rw.txt
  - sidHistory
  - User Account Control
  - UAC
  - Deleted Objects
  - permissions
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Rollback for Attribute Has Failed Error in Object '
tags: []
title: "Rollback for Attribute Has Failed Error in Object Restore for Active Directory"
knowledge_article_id: kA04u00000110v4CAA
---

# Rollback for Attribute Has Failed Error in Object Restore for Active Directory

## Symptom

An attribute was collected in a snapshot and is visible in reports after it has been removed. When you try to restore an attribute or a change via Netwrix Auditor Object Restore, the following error is prompted:

```text
The rollback for the attribute %attribute% of %user% from %state% to %state% has failed
```

## Causes

- Insufficient permissions for the account used to run Netwrix Auditor Object Restore.
- The Object Restore for Active Directory tool is unable to restore specific object attributes.
- The Enabled User Account Control (UAC) option causes errors when restoring Active Directory objects with the tool.

## Resolutions

- Ensure the account you use to run the Netwrix Auditor Object Restore tool is a member of the Domain Administrators user group and has permissions to read the Deleted Objects container. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8

- Particular AD object attributes cannot be restored with the tool. You can review the `omitproplist_rw.txt` file to see the list of object types and attributes excluded from the list of changes available for rollback. Refer to the following default path to find the .txt file:

```text
C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing
```

  Alternatively, the file will be found in the Auditor installation folder specified during the installation process. Refer to the path `%Netwrix_Auditor_installation folder%\Netwrix Auditor\Active Directory Auditing`.

  > **NOTE:** If you would like specific objects and/or attributes to become restorable after deletion, either comment the line using the `#` symbol at the beginning of the line or just delete the required line.

- Disable User Account Control (UAC), and restart the Object Restore for Active Directory tool. Learn more about how to disable UAC in How to disable User Account Control (UAC) on Windows Server ⸱ Microsoft: https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/disable-user-account-control

### List of Attributes Unavailable for a Rollback for a User

- user.badPwdCount
- user.objectCategory
- user.lastLogoff
- user.sAMAccountType
- user.badPasswordTime
- user.logonCount
- user.cn
- user.lastLogon
- user.pwdLastSet
- sidHistory

> **NOTE:** The sidHistory attribute is a system control attribute. Changing the permissions on the attribute will not grant you rights to add new SIDs; you can only remove existing SIDs. You can only add new SIDs using the DsAddSidHistory function, which has a number of prerequisites that must be met for the function to be successful. For more information, please see: https://learn.microsoft.com/en-us/answers/questions/973114/how-can-i-add-permissions-to-sidhistory-attribute

## Related Links

- Permissions for AD Auditing: Grant Permissions for 'Deleted Objects' Container — https://docs.netwrix.com/docs/auditor/10_8
- How to disable User Account Control (UAC) on Windows Server ⸱ Microsoft — https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/disable-user-account-control
- How can I add permissions to sidHistory attribute? — https://learn.microsoft.com/en-us/answers/questions/973114/how-can-i-add-permissions-to-sidhistory-attribute
