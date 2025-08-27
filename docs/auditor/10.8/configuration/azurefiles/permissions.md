---
title: "Azure Files Permissions"
description: "Required permissions for Azure Files monitoring"
sidebar_position: 2
---

# Azure Files Permissions

Required permissions for Azure Files monitoring with Netwrix Auditor.

## Microsoft Graph API Permissions

| Permission | Purpose |
|------------|---------|
| `User.Read` | Basic user information |
| `User.Read.All` | Read all users' profiles |

### Assign Graph API Permissions

1. Navigate to **Azure Active Directory > App registrations**
2. Select your Netwrix Auditor application
3. Go to **API permissions** > **Add a permission**
4. Select **Microsoft Graph > Application permissions**
5. Select required permissions: `User.Read` and `User.Read.All`
6. Click **Grant admin consent for [Your Organization]**

## Storage Account Permissions

| Role | Scope | Purpose |
|------|--------|---------|
| `Reader` | Resource Group | List storage accounts |
| `Storage File Data Privileged Reader` | Storage Account | Read file share data |
| `Storage Blob Data Reader` | Storage Account | Access audit logs |

### Assign Storage Permissions

1. **Resource Group**: Navigate to **Resource Group > Access control (IAM)** > **Add role assignment** > Assign **Reader** role to your application
2. **Storage Account**: Navigate to **Storage Account > Access control (IAM)** > **Add role assignment** > Assign required roles:
   - **Storage File Data Privileged Reader**
   - **Storage Blob Data Reader**

