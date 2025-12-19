---
title: "Permissions for Active Directory Sync"
description: "Permissions for Active Directory Sync"
sidebar_position: 10
---

# Permissions for Active Directory Sync

The following permissions are required for the credential used by Threat Manager for Active
Directory Sync. See the
[Entra ID Sync Page](/docs/threatmanager/3.0/administration/configuration/integrations/entraidsync.md) topic for
additional information about syncing the configured Active Directory domain(s) in Threat Manager.

| Object Type | Function                                                                                                | Access Requirements                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Group       | Retrieve all deleted groups                                                                             | Read Access to group objects under the Deleted Objects Container         |
| Group       | Retrieve all groups                                                                                     | Read Access to all group objects in the domain                           |
| User        | Retrieve all deleted users                                                                              | Read Access to user objects under the Deleted Objects Container          |
| User        | Retrieve all users                                                                                      | Read all user objects from the domain                                    |
| Computer    | Retrieve all deleted computer objects                                                                   | Read all computer objects under the Deleted Objects Container            |
| Computer    | Retrieve all computer objects                                                                           | Read all computer objects in the domain                                  |
| Group       | Used specifically for groups that have large memberships which get automatically truncated by the query | Read Access to memberof for all group objects in the domain              |
| GMSA        | Retrieve all Group Managed Service Accounts                                                             | Read access to all msDS-groupmanagedserviceaccount objects in the domain |
| Secret      | Retrieve all DPAPI master backup keys (Secret objects)                                                  | Read access to all secret objects in Active Directory                    |
