---
title: "Update-Group"
description: "Update-Group"
sidebar_position: 50
---

# Update-Group

The **Update-Group** commandlet modifies the membership of a Smart Group or Dynasty according to the
results returned by the LDAP query. This query is associated with the group or Dynasty creation and
can be updated anytime using the **Set-SmartGroup** commandlet. When the **Update-Group** commandlet
is executed, it searches the directory to find recipients matching the criteria defined in the query
and modifies the group membership list with the returned recipients, if any.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
Update-Group
-Identity <string>
[-SearchContainer <string>]
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example 1:

The following command updates all the GroupID group(s), by using the credentials of a locally logged
on user, in a container specified by the "SearchContainer" parameter.

```
Update-Group -SearchContainer “OU=Sales,DC=Contoso,DC=com”
```

Example 2:

The following command updates all Smart Groups and Dynasties present in the container Training,
using the credentials set in the $Credentials environment variable. See the
[Set the $Credentials Environment Variable](/docs/directorymanager/11.0/managementshell/setthecredential.md)
topic for setting credentials in an environment variable.

```
Update-Group -SearchContainer "OU=Training,DC=HR,DC=Imanami,DC=US" -Credential $Cred
```

See Also

- [All Commands](/docs/directorymanager/11.0/managementshell/commands.md)
- [Smart Group Commands](/docs/directorymanager/11.0/managementshell/smartgroup/overview.md)
- [Parameters](/docs/directorymanager/11.0/managementshell/parameters.md)
