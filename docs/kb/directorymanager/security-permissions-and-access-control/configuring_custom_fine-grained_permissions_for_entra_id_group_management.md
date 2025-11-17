---
description: >-
  This article explains how to configure fine-grained permissions for managing groups and distribution lists in Entra ID when integrating with Netwrix Directory Manager.
keywords:
  - Entra ID
  - RBAC roles
  - PowerShell
sidebar_label: Configuring Custom Fine-Grained Permissions
tags:
  - security-permissions-and-access-control
title: "Configuring Custom Fine-Grained Permissions for Entra ID Group Management"
knowledge_article_id: kA0Qk0000002y6XKAQ
products:
  - directory-manager
---

# Configuring Custom Fine-Grained Permissions for Entra ID Group Management

## Overview

This article explains how to configure fine-grained permissions for managing groups and distribution lists in Entra ID (formerly Azure AD) when integrating with Netwrix Directory Manager. By creating custom RBAC roles and assigning only the necessary permissions, you can minimize security exposure and avoid granting broad administrative rights. The article provides an overview and PowerShell steps for implementation.

## Instructions

1. Assign the required Microsoft Graph and Exchange Online permissions:
   - `Directory.Read.All`: Allows reading users, groups, and directory information.
   - `Group.ReadWrite.All`: Allows creating, modifying, and managing groups and memberships.
   - `Exchange.ManageAsApp`: Enables app-only access to Exchange Online for managing distribution lists and mail settings.

   > **NOTE:** The **Exchange Administrator** role is not required for basic group management. Instead, assign custom RBAC roles for granular control. `Exchange.ManageAsApp` is required for app-only authentication to Exchange Online, but it does not grant rights until a role is attached. Actual permissions are determined by the RBAC roles you assign.

2. Create custom Exchange Online RBAC roles using PowerShell:

   **Example: Custom role for distribution group management (`NDM_DL_Role`)**
   - Base role: Distribution Groups
   - Recommended cmdlets:
     - `New-DistributionGroup`
     - `Set-DistributionGroup`
     - `Remove-DistributionGroup`
     - `Add-DistributionGroupMember`
     - `Remove-DistributionGroupMember`
     - `Update-DistributionGroupMember`
     - `Get-Group`
     - `Get-DistributionGroup`
     - `Get-DistributionGroupMember`

   **Example: Custom read-only role (`NDM_Mail_Read`)**
   - Base role: Mail Recipients
   - Recommended cmdlets:
     - `Get-Mailbox`
     - `Get-User`
     - `Get-Recipient`

   **PowerShell example:**
   ```powershell
   $AppID = "0cd36e8d-697d-402c-87e3-de02b8bfafae"
   $SpObject = "ebcd05c6-6543-4f2d-bbfc-6d8bc663bdf2"
   $DLRole    = "NDM_DL_Role"
   $ReadRole  = "NDM_Mail_Read"

   # DL management cmdlets
   $DLKeep = @(
     "New-DistributionGroup","Set-DistributionGroup","Remove-DistributionGroup",
     "Add-DistributionGroupMember","Remove-DistributionGroupMember",
     "Update-DistributionGroupMember","Get-Group","Get-DistributionGroup","Get-DistributionGroupMember"
   )

   # Mail-read cmdlets
   $ReadKeep = @("Get-Mailbox","Get-Recipient","Get-User")

   # Create and prune the Distribution List Management Role
   New-ManagementRole -Name $DLRole -Parent "Distribution Groups"
   $allDLNames = (Get-ManagementRoleEntry -Identity "$DLRole*").Name
   $toPruneDL = $allDLNames | Where-Object { $DLKeep -notcontains $_ }
   foreach ($cmd in $toPruneDL) {
       $entryId = "$DLRole\$cmd"
       Write-Host "Pruning entry $entryId"
       Remove-ManagementRoleEntry -Identity $entryId -Confirm:$false
   }
   Get-ManagementRoleEntry -Identity "$DLRole*" | Select-Object Name

   # Create and prune the Read-Only Mail Role
   New-ManagementRole -Name $ReadRole -Parent "Mail Recipients"
   $allRead = (Get-ManagementRoleEntry -Identity "$ReadRole*").Name
   $toPruneRead = $allRead | Where-Object { $ReadKeep -notcontains $_ }
   foreach ($cmd in $toPruneRead) {
       $entryId = "$ReadRole\$cmd"
       Write-Host "Pruning entry $entryId"
       Remove-ManagementRoleEntry -Identity $entryId -Confirm:$false
   }
   Get-ManagementRoleEntry -Identity "$ReadRole*" | Select-Object Name

   # Assign custom roles to the service principal
   New-ManagementRoleAssignment -Name "${DLRole}-SP" -Role $DLRole -App $AppId
   New-ManagementRoleAssignment -Name "${ReadRole}-SP" -Role $ReadRole -App $AppId

   # Verify assignments
   Get-ManagementRoleAssignment | Where-Object { $_.RoleAssigneeName -eq $SpObject } | Format-Table Name,Role,RoleAssigneeName
   ```

3. Assign the custom RBAC roles directly to the Directory Manager application service principal in Exchange Online using the `New-ManagementRoleAssignment` cmdlet.

4. Scope each role to specific groups as needed to further restrict access.

5. Review and adjust as needed. If your use cases expand (for example, Teams channel management or mailbox permissions), update the custom roles to include additional cmdlets.

   > **IMPORTANT:** Always review the permissions included in each custom role to ensure you are granting only what is necessary. The `AppId` and `ObjectId` values must match your registered service principal. Use `Get-AzureADServicePrincipal -Filter "AppId eq '$AppId'"` to confirm.