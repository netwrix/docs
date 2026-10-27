---
title: "Register in Microsoft Entra ID"
description: "Register in Microsoft Entra ID"
sidebar_position: 10
---

# Register in Microsoft Entra ID

To use Microsoft Entra ID, formerly Azure Active Directory, identity provider, Directory Manager
must first be registered in Microsoft Entra Admin Center portal. The registration grants Directory
Manager access to a particular Microsoft Entra ID Directory and its data, such as Microsoft Entra ID
groups and users.

Directory Manager requires:

- An application registered for Directory Manager in Microsoft Entra ID (with the Microsoft Graph
  API and Exchange API permissions).
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
