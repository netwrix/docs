---
title: "Mandatory Attributes for Field Mapping"
description: "See the mandatory attributes for each object type and destination provider, and the transformations to apply, when mapping fields in a Synchronize job."
keywords:
  - synchronize job
  - mandatory attributes
  - field mapping
  - destination providers
  - microsoft entra id
sidebar_position: 40
---

# Mandatory Attributes for Field Mapping

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

After you select a provider, you can see a specific set of objects that you can create in the destination
providers. After you select the object type, a set of mandatory attributes is
required for creating the respective objects.

The following tables show the mandatory attributes for different object types for each provider and
the transformations to apply to them while mapping.

Mandatory attributes for User:

| Provider           | Mandatory Attributes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Explanation                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory   | cn                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                 |
| givenname          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sAMAccountName     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| sn                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| password           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                 |
| Microsoft Entra ID | accountenabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | To create disabled users, select False in static transformation. To create enabled users, select True in static transformation. |
| directoryrole      | Every user is assigned a role in Microsoft Entra ID. In static transformation, GroupID auto-generates all roles in the tenant. Select the role you want.                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                 |
| displayname        | The name that appears in Microsoft Entra ID. You can map it with the first name.                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                 |
| givenname          | First name of the user in Microsoft Entra ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                 |
| userprincipalname  | You need to append the domain name to the userprincipalname. It is the mandatory key value and is unique for every user. In static transformation, select join to modify the name. Then go to the script transformation to see the updated script. `DTM.Source("First") & "." & DTM.Source("Last") & "@001wrc.onmicrosoft.com"` In the script, add the domain name and generate new userprincipalname values for each user based on the join and script transform. |                                                                                                                                 |
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

Mandatory attributes for Mailbox-enabled User:

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
| mailnickname       | Same as userprincipalname. You don't need to update the script. It adds the domain name itself.                                                                                                                                       |             |
| surname            |                                                                                                                                                                                                                                    |             |
| userprincipalname  |                                                                                                                                                                                                                                    |             |
| password           |                                                                                                                                                                                                                                    |             |
| UsageLocation      | Mailbox-specific. You can apply the static transformation.                                                                                                                                                                         |             |
| LicenseAssignment  | All mailboxes are assigned a license. The license is assigned during creation. Select static transformation to display all available licenses. Select a license, and GroupID assigns it to the user when it creates the user. |             |

Mandatory attributes for Mailbox-enabled Contact:

| Provider         | Mandatory Attributes | Explanation |
| ---------------- | -------------------- | ----------- |
| Active Directory | cn                   |             |
|                  | displayname          |             |
|                  | givenname             |             |
|                  | mailNickname         |             |
|                  | sn                   |             |
|                  | targetAddress        |             |

Mandatory attributes for Group:

| Provider                                                                                                                                   | Mandatory Attributes                                                                                                            | Explanation                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Active Directory                                                                                                                           | cn                                                                                                                              |                                            |
| displayname                                                                                                                                |                                                                                                                                 |                                            |
| grouptype                                                                                                                                  |                                                                                                                                 |                                            |
| member (sAMAccountName)                                                                                                                    |                                                                                                                                 |                                            |
| sAMAccountName                                                                                                                             |                                                                                                                                 |                                            |
| Microsoft Entra ID                                                                                                                         | description                                                                                                                     | Text fields that you can map to anything. |
| displayname                                                                                                                                | The name that appears in the directory. It uniquely identifies the group. You can also apply transformations.                |                                            |
| grouptype                                                                                                                                  | Go to static transformation to get a group-type list. Select one of the following: - Security - Distribution - Office365 |                                            |
| If you add a messaging provider, the group becomes mail-enabled and the following additional mandatory attribute appears while mapping. |                                                                                                                                 |                                            |
| mailNickname                                                                                                                               | Same as userprincipalname. You don't need to update the script. It adds the domain name itself.                                |                                            |

**See Also**

- [Create a Synchronize Job in GroupID](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection in GroupID Synchronize ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform Data in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
