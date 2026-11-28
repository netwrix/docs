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

This cmdlet mail-enables a distribution group in the directory.

Directory Manager keeps a history for this cmdlet. To view it, go to the History node in the left panel of the Directory Manager portal.

## Syntax

```
Enable-DistributionGroup
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

**Identity** accepts the distinguished name, GUID, SID, name, or sAMAccountName of the group. You can also pipe the value to the cmdlet.

The cmdlet returns one of the following messages:

- `<name> Enabled Successfully`
- `<name> Group Cannot Be Enabled`, followed by a line that gives the reason
- `Not a Valid Group`, if the cmdlet can't find the group

## Required parameter

- Identity

## Example

This command mail-enables the distribution group that the Identity parameter specifies. It uses the credentials of the current user signed in to the identity store.

```
Enable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
