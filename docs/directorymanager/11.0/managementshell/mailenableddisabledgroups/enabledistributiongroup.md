---
title: "Enable-DistributionGroup Cmdlet in Directory Manager"
description: "Mail-enable a distribution group with the Enable-DistributionGroup cmdlet."
keywords:
  - Enable-DistributionGroup
  - mail-enable group
  - distribution group
  - PowerShell cmdlet
sidebar_position: 20
---

# Enable-DistributionGroup Cmdlet in Directory Manager

This cmdlet makes a distribution group in the directory mail-enabled.

Directory Manager maintains a history for this cmdlet, which you can view in the Directory Manager
portal, under the **History** node in the left panel.

## Syntax

```
Enable-DistributionGroup
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command mail-enables a distribution group specified by the **Identity** parameter,
using the credentials of the current user signed in to the identity store.

```
Enable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [Directory Manager Management Shell Cmdlets](/docs/directorymanager/11.0/managementshell/commands.md)
- [Directory Manager Mail-Enable and Mail-Disable Group Cmdlets](/docs/directorymanager/11.0/managementshell/mailenableddisabledgroups/overview.md)
- [Directory Manager Management Shell Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
