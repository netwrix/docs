---
title: "FS_AzureTenantScan Job"
description: "FS_AzureTenantScan Job"
sidebar_position: 120
---

# FS_AzureTenantScan Job

The FS_AzureTenantScan job is designed to collect Storage Account information from the targeted
Azure tenant. This job produces a host list containing the storage accounts to target for Azure
Files scans.

You can add this job from the Access Analyzer Instant Job Library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional information.

Before running the FS_AzureTenantScan job, you must ensure all the below prerequisites have been
met, and that the required host list and connection profile have been assigned to the job.

## Prerequisites

The FS_AzureTenantScan job has the following prerequisites:

- Azure app registration and a client secret created for the app registration
- Custom role created in a resource group with the **Microsoft.Storage/storageAccounts/read**
  permission
- Role assignment created on the resource group with the custom role and the app registration. The
  role can be assigned at various resource levels:

    - Management Group
    - Subscription
    - Resource Group
    - Storage Account

        :::note
        The custom role cannot be created at the storage account level via the web UI, but
        it can be assigned here.
        :::


Follow the steps to create the role assignment.

**Step 1 –** Go to [Azure Portal](https://portal.azure.com/), and select **Resource Groups** from
the navigation menu.

**Step 2 –** Select the resource level you want to apply the custom role to, and then navigate to
the Access control (IAM) tab.

**Step 3 –** Create a custom role with the **Microsoft.Storage/storageAccounts/read** permission.

**Step 4 –** Add the role assignment for your app registration with the custom role.

The job will pick up any storage accounts at the resource group level you assigned the custom role
at.

## Target Host

The host list must target the Azure tenant name. For example, `YourTenantName.onmicrosoft.com`.

## Connection Profile

The FS_AzureTenantScan job requires a connection profile with the following user credentials:

![User Credentials for FS_AzureTenantScan job](/images/accessanalyzer/12.0/solutions/filesystem/collection/azuretenantscanusercredentials.webp)

- Select Account Type – Azure Active Directory
- Client ID – Application ID for the app registration created in Azure that is assigned to your
  desired resource group
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic for additional information.)
- Key – Client secret value for the app registration

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional
information.

## Query for the FS_AzureTenantScan Job

The Azure Tenant Scan query uses the FSAA Data Collector and has been preconfigured to use the Azure
Scan and import category.

:::warning
Do not modify the query. The query is preconfigured for this job.
:::


![Query for the FS_AzureTenantScan Job](/images/accessanalyzer/12.0/solutions/filesystem/collection/azuretenantscanquery.webp)

The job has the following query:

- Azure Tenant Scan – Scans the targeted Azure tenant and produces a host list containing the
  storage accounts to target for Azure Files scans
