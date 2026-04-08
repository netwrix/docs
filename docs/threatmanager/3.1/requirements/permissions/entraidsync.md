---
title: "Application Permissions for Entra ID Sync"
description: "Application Permissions for Entra ID Sync"
sidebar_position: 20
---

# Application Permissions for Entra ID Sync

The following permissions are required for the credential used by Threat Manager for Microsoft Entra
ID Sync. See the
[Active Directory Sync Page](/docs/threatmanager/3.1/administration/configuration/integrations/activedirectorysync.md)
topic for additional information about syncing the configured Microsoft Entra ID tenant(s) in Threat
Manager.

| Object Type                      | Function                                                   | Access Requirements                         |
| -------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Administrative Unit              | Retrieve all administrative units                          | AdministrativeUnit.Read.All                 |
| Application                      | Retrieve all applications                                  | Application.Read.All                        |
| Device                           | Retrieve all devices                                       | Device.Read.All                             |
| Group                            | Retrieve all groups                                        | Group.Read.All                              |
| Group Member                     | Retrieve all group members                                 | GroupMember.Read.All                        |
| Identity Risky Service Principal | Retrieve all risky service principals                      | IdentityRiskyServicePrincipal.Read.All      |
| Identity Risky User              | Retrieve all risky users                                   | IdentityRiskyUser.Read.All                  |
| Organization                     | Retrieve organization information                          | Organization.Read.All                       |
| Role Assignment Schedule         | Read and write role assignment schedules in the directory  | RoleAssignmentSchedule.ReadWrite.Directory  |
| Role Eligibility Schedule        | Read and write role eligibility schedules in the directory | RoleEligibilitySchedule.ReadWrite.Directory |
| Role Management                  | Retrieve all role management data                          | RoleManagement.Read.All                     |
| User                             | Retrieve all users                                         | User.Read.All                               |
