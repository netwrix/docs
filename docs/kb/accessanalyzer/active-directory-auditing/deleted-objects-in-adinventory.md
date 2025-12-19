---
description: >-
  ADInventory may not flag deleted objects unless it can access the Deleted
  Objects container or you run a full scan. This article explains why the
  IsDeleted column is not populated and how to grant or verify access to the
  Deleted Objects container.
keywords:
  - ADInventory
  - Deleted Objects
  - IsDeleted
  - Deleted Objects container
  - dsacls
  - ADAC
  - Active Directory
  - tombstone
  - USNChanged
products:
  - access-analyzer
sidebar_label: Deleted Objects in ADInventory
tags:
  - active-directory-auditing
title: "Deleted Objects in ADInventory"
knowledge_article_id: kA04u0000000IpGCAU
---

# Deleted Objects in ADInventory

## Summary
IsDeleted column is not being populated in AD Inventory Users view

## Issue
Objects are not being flagged as deleted by ADInventory.

## Instructions
ADInventory uses LDAP queries to enumerate objects from Active Directory.
A full scan will query all objects, updating the full data set each time.

The option to **Collect only updates since the last scan** only returns user, group and computer objects that have changed since the last scan.
This works by scoping the scan to objects having a `USNChanged` value greater than the highest value recorded for that domain controller at the start of the previous scan.

In order for the IsDeleted column to be updated properly, you must either have:

- Access to all Containers with `Users/Computers/Groups/tombstone objects`

OR

- You must deselect the option to **Collect only updates since the last scan**.

If you go the route of granting the service account increased access, the Domain Admins group is not necessarily sufficient to gain proper access in all environments.
The ACL on the all containers including the "delete objects" container should be checked to ensure that the service account has been granted the proper access.

To verify your account has access to the **Deleted Objects** Container, you are required to log on to a computer with **Active Directory Administrative Center (ADAC)**:

1. Log on with the account used in the connection profile.
2. Open **ADAC**.
3. Select your domain for the environment you are running Active Directory Inventory.
4. On the right hand pane double click to open **Deleted Objects**.

This will list the deleted objects. If you are unable to view this with the connection profile account, you will need to ensure that the correct permissions have been assigned.
By default the Builtin Administrators group has access to this container (`BUILTIN\Administrators`).

One method to grant a credential the necessary rights on the **Deleted Objects** container is using the `dsacls` command with an account that does have access to the container.

Schema admins may be required to execute this. See Dsacls Technet Article here: https://technet.microsoft.com/en-us/library/cc771151%28v=ws.11%29.aspx?f=255&MSPPError=-2147217396

```
dsacls "CN=Deleted Objects,DC=Contoso,DC=com" /G \:LCRP
```

This article shows how to modify the permissions on the deleted items container:
https://technet.microsoft.com/en-us/library/cc816824(v=ws.10).aspx

So, if it helps at all, here's an article with some other information: https://technet.microsoft.com/en-us/library/dd379509(v=WS.10).aspx#BKMK_1

By default, builtin\administrator has access to this container. So, by default, domain admins should have access to it.

## Displaying the Deleted Objects container
When Active Directory objects are deleted, they are placed in the Deleted Objects container. By default, the `CN=Deleted Objects` container is not displayed. You can use the `Ldp.exe` administration tool in Active Directory Domain Services (AD DS) to display the Deleted Objects container.

**Product:** Netwrix Auditor
**Module:** SA - DC - ADInventory
**Versions:** all
**Legacy Article ID:** 1193
