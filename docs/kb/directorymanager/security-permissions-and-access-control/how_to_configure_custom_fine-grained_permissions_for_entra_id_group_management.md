---
description: >-
  This article explains how to configure custom, fine-grained permissions for group and distribution list management in Entra ID when integrating with Netwrix Directory Manager.
keywords:
  - Entra ID
  - fine-grained permissions
  - Netwrix Directory Manager
  - RBAC roles
  - Exchange Online
sidebar_label: Configure Custom Permissions
tags:
  - security-permissions-and-access-control
title: "How to Configure Custom Fine-Grained Permissions for Entra ID Group Management"
knowledge_article_id: kA0Qk0000002y4vKAA
products:
  - directorymanager
---

# How to Configure Custom Fine-Grained Permissions for Entra ID Group Management

## Overview

This article explains how to configure custom, fine-grained permissions for group and distribution list management in Entra ID (formerly Azure AD) when integrating with Netwrix Directory Manager. By creating custom RBAC roles and assigning only the necessary permissions, you can minimize security exposure and avoid granting broad administrative rights.

## Instructions

1. **Identify Required Permissions**
   - For basic group and distribution list management, the following Microsoft Graph and Exchange Online permissions are required:
     - **Directory.Read.All**: Allows reading users, groups, and directory information.
     - **Group.ReadWrite.All**: Allows creating, modifying, and managing groups and group memberships.
     - **Exchange.ManageAsApp**: Enables secure app-only access to Exchange Online for managing distribution lists and mail settings.
   - > **NOTE:** The **Exchange Administrator** role is not required for basic group management and can be replaced with custom RBAC roles for more granular control.

2. **Create Custom Exchange Online RBAC Roles**
   - Use Exchange Online PowerShell to create custom roles with only the required cmdlets for your use case.
   - **Example: Custom Role for Distribution Group Management (NDM_DL_Role)**
     - Base role: Distribution Groups
     - Recommended cmdlets to include:
       - `Get-Group`
       - `Add-DistributionGroupMember`
       - `Get-DistributionGroupMember`
       - `New-DistributionGroup`
       - `Remove-DistributionGroup`
       - `Remove-DistributionGroupMember`
       - `Update-DistributionGroupMember`
       - `Set-DistributionGroup`
       - `Get-DistributionGroup`
   - **Example: Custom Read-Only Role (NDM_Read_Role)**
     - Base role: Mail Recipients
     - Recommended cmdlets to include:
       - `Get-Mailbox`
       - `Get-User`
       - `Get-Recipient`

3. **Assign Custom Roles to the Application Service Principal**
   - Assign the custom RBAC roles directly to your Netwrix Directory Manager application service principal in Exchange Online.
   - Scope each role to specific groups as needed to further restrict access.

4. **Review and Adjust as Needed**
   - If your use cases expand (e.g., Teams channel management, mailbox permission changes), update the custom roles to include additional cmdlets as required.

> **NOTE:** **Exchange.ManageAsApp** is required for app-only authentication to Exchange Online, but does not grant any rights until a role is attached. The actual permissions are determined by the RBAC roles you assign.

> **IMPORTANT:** Always review the permissions included in each custom role to ensure you are granting only what is necessary for your operational needs.