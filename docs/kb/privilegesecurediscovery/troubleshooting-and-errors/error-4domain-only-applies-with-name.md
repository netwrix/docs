---
title: "Error: 4Domain Only Applies with Name"
description: "Resolve the 4Domain only applies with name error on the Grant Access page by finding and removing the incomplete member of the local Administrators group."
sidebar_label: "Error: 4Domain Only Applies with Name"
keywords:
- 4Domain only applies with name
- Grant Access
- Local Administrators
- Get-LocalGroupMember
- Remove-LocalGroupMember
- AccountDomainSid
- PowerShell
- orphaned SID
- NPS-D
- SecureONE
- Remediant SecureONE
- rescan
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
knowledge_article_id: kA04u00000110qOCAQ
---

## Symptom

The following error message is displayed in the upper-right corner of the **Grant Access** page:

```text
4Domain only applies with name
```

## Cause

A member of the local Administrators group on the target system has incomplete data. To check, run the following PowerShell command on the system:

```powershell
Get-LocalGroupMember -SID S-1-5-32-544 | ConvertTo-JSON
```

In the output, the `AccountDomainSid` and `Name` values of the member are incomplete. In the example, the `Name` value is `CONTOSO\`, but the complete value must include an account, such as `CONTOSO\svc-account`. The incomplete member causes the product to receive incomplete data for a member of the local Administrators group.

## Resolution

1. Confirm that the offending member is not needed in the local Administrators group.
2. Remove the member from the group. Replace `<member-name>` with the `Name` value from the output:

   ```powershell
   Remove-LocalGroupMember -Group Administrators -Member "<member-name>"
   ```

3. Rescan the system. The scan must complete successfully.
