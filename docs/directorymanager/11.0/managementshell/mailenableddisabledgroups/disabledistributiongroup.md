---
title: "Disable-DistributionGroup Cmdlet in GroupID"
description: "Disable the mailing capabilities of a distribution group with the Disable-DistributionGroup cmdlet."
keywords:
  - Disable-DistributionGroup
  - mail-disable group
  - distribution group
  - PowerShell cmdlet
sidebar_position: 10
---

# Disable-DistributionGroup Cmdlet in GroupID

Use this cmdlet to disable the mailing capabilities of a distribution group in the directory.

GroupID maintains a history for this cmdlet, which you can view in the GroupID
Management Console using the History tab of the object's properties dialog box.

## Syntax

```
Disable-DistributionGroup
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command mail-disables a distribution group specified by the **Identity** parameter,
using the credentials of the current user signed in to the identity store.

```
Disable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

**See Also**

- [GroupID Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [GroupID Mail-Enable and Mail-Disable Group Cmdlets](/docs/directorymanager/11.0/managementshell/mailenableddisabledgroups/overview.md)
- [GroupID Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
