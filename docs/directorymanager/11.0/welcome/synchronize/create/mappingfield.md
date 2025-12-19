---
title: "Map Fields"
description: "Map Fields"
sidebar_position: 40
---

# Map Fields

When creating a job, you select any of the following destination providers.

- Microsoft Active Directory
- Microsoft Entra ID
- Generic LDAP version 3.0
- Google Workspace
- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text

Once selected, you can see a specific set of objects that can be created in the destination
providers. Once the object type is selected, there are a set of mandatory attributes that are
required for creating the respective objects.

The tables below show the mandatory attribute for different object types for each provider and what
transformations that need to apply to them while mapping.

Mandatory attributes for User:

| Provider           | Mandatory Attributes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Explanation                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory   | cn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                 |
| givenname          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sAMAccountName     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sn                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| password           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| Microsoft Entra ID | accountenabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | To create disabled users, select False in static transformation. To create enabled users, select True in static transformation. |
| directoryrole      | Every user is assigned a role in Microsoft Entra ID. In static transformation, it will auto-generate all roles in the tenant. Select the one you want to choose.                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                 |
| displayname        | Given the name that appears on Microsoft Entra ID. You can map it with the first name.                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                 |
| givenname          | First name of the user in Microsoft Entra ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 |
| userprincipalname  | You need to amend the domain name to give the userprincipalname. It is the mandatory key value and is unique for every user. In static transformation, select join to modify the name. Then go to the script transformation and you will see the updated script. `DTM.Source("First") & "." & DTM.Source("Last") & "@001wrc.onmicrosoft.com"` In the script, add the domain name and generate new userprincipal names for each user based on the join and script transform. |                                                                                                                                 |
| password           | Generate passwords for the users.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                 |

Mandatory attributes for Mail-enabled User:

| Provider         | Mandatory Attributes | Explanation |
| ---------------- | -------------------- | ----------- |
| Active Directory | cn                   |             |
| displayname      |                      |             |
| givenname        |                      |             |
| mailNickname     |                      |             |
| sAMAccountName   |                      |             |
| sn               |                      |             |
| targetAddress    |                      |             |
| password         |                      |             |

Mandatory Attributes for Mailbox-enabled User:

| Provider           | Mandatory Attributes                                                                                                                                                                                                               | Explanation |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Active Directory   | cn                                                                                                                                                                                                                                 |             |
| displayname        |                                                                                                                                                                                                                                    |             |
| givenname          |                                                                                                                                                                                                                                    |             |
| homeMDB            |                                                                                                                                                                                                                                    |             |
| mailNickname       |                                                                                                                                                                                                                                    |             |
| sAMAccountName     |                                                                                                                                                                                                                                    |             |
| sn                 |                                                                                                                                                                                                                                    |             |
| password           |                                                                                                                                                                                                                                    |             |
| Microsoft Entra ID | accountenabled                                                                                                                                                                                                                     |             |
| directoryrole      |                                                                                                                                                                                                                                    |             |
| displayname        |                                                                                                                                                                                                                                    |             |
| givenname          |                                                                                                                                                                                                                                    |             |
| mailnickname       | Same as user principalname. We do not need to update script. It will add domain name itself.                                                                                                                                       |             |
| surname            |                                                                                                                                                                                                                                    |             |
| userprincipalname  |                                                                                                                                                                                                                                    |             |
| password           |                                                                                                                                                                                                                                    |             |
| UsageLocation      | Mailbox-specific. You can apply the static transformation.                                                                                                                                                                         |             |
| LicenseAssignment  | All mailboxes are assigned a license. We assign that license while creation. Select static transformation, it will display all available licenses. You can select any and once user is created they will be assigned this license. |             |

Mandatory Attributes for Mailbox-enabled Contact:

| Provider         | Mandatory Attributes | Explanation |
| ---------------- | -------------------- | ----------- |
| Active Directory | cn                   |             |
|                  | displayname          |             |
|                  | givename             |             |
|                  | mailNickname         |             |
|                  | sn                   |             |
|                  | targetAddress        |             |

Mandatory Attributes for Group:

| Provider                                                                                                                                   | Mandatory Attributes                                                                                                            | Explanation                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Active Directory                                                                                                                           | cn                                                                                                                              |                                            |
| displayname                                                                                                                                |                                                                                                                                 |                                            |
| grouptype                                                                                                                                  |                                                                                                                                 |                                            |
| member (sAMAccountName)                                                                                                                    |                                                                                                                                 |                                            |
| sAMAccountName                                                                                                                             |                                                                                                                                 |                                            |
| Microsoft Entra ID                                                                                                                         | description                                                                                                                     | Text fields that you can map with anything |
| displayname                                                                                                                                | The name that appears in the directory. It will uniquely identify the group. You can also apply transformations.                |                                            |
| grouptype                                                                                                                                  | Go to static transformation, you will get a group-type list. Select any of the following: - Security - Distribution - Office365 |                                            |
| If you add Messaging provider, the group becomes mail-enabled and you will see the following additional mandatory attribute while mapping. |                                                                                                                                 |                                            |
| mailNickname                                                                                                                               | Same as user principalname. We do not need to update the script. It will add domain name itself.                                |                                            |

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
