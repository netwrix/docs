---
title: "Disable-DistributionGroup"
description: "Disable-DistributionGroup"
sidebar_position: 10
---

# Disable-DistributionGroup

Use this commandlet to disable the mailing capabilities for a distribution group in Directory.

Directory Manager maintains a history for this commandlet, which you can view in Directory Manager
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

The following command mail-disables a distribution group specified by the Identity parameter, using
the credentials of current user logged-on to the identity store.

```
Disable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```
