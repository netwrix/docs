---
title: "Enable-DistributionGroup"
description: "Enable-DistributionGroup"
sidebar_position: 20
---

# Enable-DistributionGroup

This commandlet makes a distribution group in directory mail-enabled.

Directory Manager maintains a history for this commandlet, which you can view in Directory Manager
portal, against the History node in the left panel.

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

The following command mail-enables a distribution group specified by the Identity parameter, using
the credentials of current user logged-on to the identity store.

```
Enable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
