---
title: "gMSA for Active Directory"
description: "gMSA for Active Directory"
sidebar_position: 20
---

# gMSA for Active Directory

GroupID enables you to use a Group Managed Service Account (gMSA) to connect an Active Directory
identity store to the identity provider. To ensure that the gMSA can be configured and used
effectively, verify the following:

- General Checks
- Required Permissions
- Allowed Principals

## General Checks

- Run the following cmdlet in Windows PowerShell on the GroupID server to verify the gMSA status as
  either _true_ or _false_.

    ```
    Test-ADServiceAccount -Identity <gMSA>
    ```

- In case a gMSA is configured for GroupIDAppPool11 or as a service account for identity store make
  sure the account name follows the format:  
  FQDN\<gMSA>$)

## Required Permissions

- The gMSA must have full permissions on the GroupID installation folder.
- It must be a member of the local administrator group (Administrators) on the GroupID server.
- It must be a member of the local IIS group (IIS_IUSRS) on the GroupID server.

## Allowed Principals

- The following principals must be allowed to retrieve the managed password for the gMSA that you
  use to connect an identity store to an identity provider:

    - GroupID server (type: Computer)
    - The account configured for the GroupID app pool (type: Service Account)

- If any of these principals are not allowed to retrieve the managed password for the gMSA, do the
  following depending on the scenario:

    - If a group is mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of
      the New-ADServiceAccount cmdlet, add the missing principal (GroupID server and/or app pool
      account) to the group.  
      Both these principals must be enlisted directly or indirectly in the
      'PrincipalsAllowedToRetrieveManagedPassword' parameter.
    - If an individual principals are mentioned in the 'PrincipalsAllowedToRetrieveManagedPassword'
      parameter of the New-ADServiceAccount cmdlet, use the
      'PrincipalsAllowedToRetrieveManagedPassword' parameter of the Set-ADServiceAccount cmdlet to
      add the missing principals (GroupID server and/or app pool account).

NOTE: Restart the GroupID server if you apply any of the above.

**See Also**

- [Manage an Identity Store](/docs/directorymanager/11.0/signin/identitystore/manage.md)
