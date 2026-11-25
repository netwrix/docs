---
title: "Configure a gMSA for Directory Manager"
description: "Verify the status, permissions, and allowed principals a Group Managed Service Account needs to connect an Active Directory identity store."
keywords:
  - gMSA
  - Group Managed Service Account
  - PrincipalsAllowedToRetrieveManagedPassword
  - Test-ADServiceAccount
  - IIS_IUSRS
sidebar_position: 20
---

# Configure a gMSA for Directory Manager

Use a Group Managed Service Account (gMSA) with Directory Manager to connect an Active Directory
identity store to the identity provider. To ensure that you can configure and use the gMSA
effectively, verify the following:

- General Checks
- Required Permissions
- Allowed Principals

## General Checks

- Run the following cmdlet in Windows PowerShell on the Directory Manager server to verify the gMSA
  status as either _true_ or _false_.

    ```
    Test-ADServiceAccount -Identity <gMSA>
    ```

- If you configure a gMSA for GroupIDAppPool11 or as a service account for an identity store, make
  sure the account name follows the format:  
  `FQDN\<gMSA>$`

## Required Permissions

- The gMSA must have full permissions on the Directory Manager installation folder.
- It must be a member of the local administrator group (Administrators) on the Directory Manager
  server.
- It must be a member of the local IIS group (IIS_IUSRS) on the Directory Manager server.

## Allowed Principals

- The following principals must be allowed to retrieve the managed password for the gMSA that you
  use to connect an identity store to an identity provider:

    - Directory Manager server (type: Computer)
    - The account configured for the Directory Manager app pool (type: Service Account)

- If any of these principals aren't allowed to retrieve the managed password for the gMSA, do the
  following, depending on the scenario:

    - If a group is mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of
      the New-ADServiceAccount cmdlet, add the missing principal (Directory Manager server and/or
      app pool account) to the group.  
      Both principals must be listed directly or indirectly in the
      'PrincipalsAllowedToRetrieveManagedPassword' parameter.
    - If individual principals are mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword'
      parameter of the New-ADServiceAccount cmdlet, use the
      'PrincipalsAllowedToRetrieveManagedPassword' parameter of the Set-ADServiceAccount cmdlet to
      add the missing principals (Directory Manager server and/or app pool account).

:::note
Restart the Directory Manager server if you apply any of these changes.
:::

**See Also**

- [Manage an Identity Store in Directory Manager](/docs/directorymanager/11.0/signin/identitystore/manage.md)
