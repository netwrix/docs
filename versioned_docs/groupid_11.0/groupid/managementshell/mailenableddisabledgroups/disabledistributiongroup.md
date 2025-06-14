# Disable-DistributionGroup

Use this commandlet to disable the mailing capabilities for a distribution group in Directory.

GroupID maintains a history for this commandlet, which you can view in GroupID Management Console
using the History tab of the object's properties dialog box.

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
using the credentials of current user logged-on to the identity store.

```
Disable-DistributionGroup -Identity "CN=Smart_Training,OU=Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/versioned_docs/groupid_11.0/groupid/managementshell/commands.md)
- [Mail-Enable/Disable Groups Commands](/versioned_docs/groupid_11.0/groupid/managementshell/mailenableddisabledgroups/overview.md)
- [Parameters](/versioned_docs/groupid_11.0/groupid/managementshell/parameters/parameters.md)
