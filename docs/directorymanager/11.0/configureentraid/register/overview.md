---
title: "GroupID Registration Requirements in Entra ID"
description: "Understand why GroupID must be registered in the Microsoft Entra Admin Center and what the registration requires."
keywords:
  - GroupID registration requirements
  - registered application
  - Microsoft Graph API
  - Exchange API
  - directory role
sidebar_position: 10
---

# GroupID Registration Requirements in Entra ID

To use Microsoft Entra ID, formerly Azure Active Directory, as an identity provider, you must first
register GroupID in the Microsoft Entra Admin Center. The registration grants GroupID
access to a particular Microsoft Entra ID Directory and its data, such as Microsoft Entra ID
groups and users.

GroupID requires:

- An application registered for GroupID in Microsoft Entra ID (with the Microsoft Graph API and
  Exchange API permissions).
- A Microsoft Entra ID Directory Role for the service account for the Microsoft Entra ID identity
  store.

    :::note
    See the
    [All Role](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#all-role)
    section for
    [User Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#user-administrator)
    and
    [Exchange Administrator](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#exchange-administrator)
    role permissions in
    [Microsoft Entra built-in roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/permissions-reference#microsoft-entra-built-in-roles).
    :::

See Also

- [Register GroupID in Microsoft Entra ID](/docs/directorymanager/11.0/configureentraid/register/appregister.md)
