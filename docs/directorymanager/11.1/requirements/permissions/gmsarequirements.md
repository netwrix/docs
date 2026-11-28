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

Use a Group Managed Service Account (gMSA) with Directory Manager to connect an Active Directory identity store to the identity provider. Before you configure the gMSA, verify the general checks, the required permissions, and the allowed principals described in this topic.

## General checks

Verify the following:

- The gMSA status is _true_. Run this cmdlet in Windows PowerShell on the Directory Manager server to see the status as _true_ or _false_.

    ```
    Test-ADServiceAccount -Identity <gMSA>
    ```

- The account name follows the format `FQDN\<gMSA>$`. This applies when you configure a gMSA for GroupIDAppPool11 or as a service account for an identity store.

## Required permissions

The gMSA needs the following permissions:

- Full permissions on the Directory Manager installation folder.
- Membership in the local administrator group (Administrators) on the Directory Manager server.
- Membership in the local IIS group (IIS_IUSRS) on the Directory Manager server.

## Allowed principals

The following principals must be allowed to retrieve the managed password for the gMSA that you use to connect an identity store to an identity provider:

- Directory Manager server (type: Computer)
- The account configured for the Directory Manager app pool (type: Service Account)

If any of these principals can't retrieve the managed password for the gMSA, take the action that matches your scenario:

- If a group is in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the New-ADServiceAccount cmdlet, add the missing principal (Directory Manager server or app pool account) to the group. Both principals must be listed directly or indirectly in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter.
- If individual principals are in the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the New-ADServiceAccount cmdlet, use the 'PrincipalsAllowedToRetrieveManagedPassword' parameter of the Set-ADServiceAccount cmdlet to add the missing principals (Directory Manager server or app pool account).

:::note
Restart the Directory Manager server if you apply any of these changes.
:::

**See Also**

- [Manage an Identity Store in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/manage.md)
