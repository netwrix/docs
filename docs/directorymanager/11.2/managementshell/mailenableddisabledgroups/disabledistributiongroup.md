---
title: "Disable-DistributionGroup Cmdlet in Directory Manager"
description: "Disable the mailing capabilities of a distribution group with the Disable-DistributionGroup cmdlet."
keywords:
  - Disable-DistributionGroup
  - mail-disable group
  - distribution group
  - PowerShell cmdlet
sidebar_position: 10
---

# Disable-DistributionGroup Cmdlet in Directory Manager

Use this cmdlet to disable the mailing capabilities of a distribution group in the directory.

Directory Manager keeps a history for this cmdlet. To view it, go to the History node in the left panel of the Directory Manager portal.

## Syntax

```
Disable-DistributionGroup
-Identity <string>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required parameter

- Identity

## Example

This command mail-disables the distribution group specified by the Identity parameter. It uses the credentials of the current user signed in to the identity store.

```
Disable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
