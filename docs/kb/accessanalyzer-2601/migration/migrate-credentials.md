---
title: "Migrating Connection Profiles to Service Accounts"
description: "How to inventory legacy Netwrix Access Analyzer connection profiles and recreate them as service accounts in Access Analyzer 26"
keywords:
  - connection profile migration
  - service account migration
  - stealthaudit credentials
  - access analyzer credentials
  - username password service account
  - client id secret
  - client certificate
products:
  - access-analyzer
sidebar_label: "Migrating Connection Profiles"
tags:
  - migration
  - service-accounts
---

# Migrating Connection Profiles to Service Accounts

## Overview

Legacy Netwrix Access Analyzer (StealthAUDIT) stores authentication credentials in **Connection Profiles**. Access Analyzer 26 uses **Service Accounts** for the same purpose. This article explains how to inventory your existing connection profiles and recreate them as service accounts in AA26.

:::warning
Passwords and client secrets cannot be exported from the legacy system. You must re-enter all credentials when creating service accounts in AA26. Prepare the necessary credentials before starting this procedure.
:::

---

## Credential type mapping

Each legacy connection profile credential type maps to an AA26 service account type as follows:

| Legacy Credential Type | AA26 Service Account Type | Used For |
| --- | --- | --- |
| Local machine account (Windows) | Username/Password | File Server sources |
| Active Directory domain account | Username/Password | Active Directory and File Server sources |
| Microsoft Entra ID key | Client ID/Secret | Entra ID sources |
| Web service (certificate) | Client ID/Certificate | SharePoint Online sources |
| Unix account | *(not applicable)* | Not supported in AA26 connectors |
| SQL account | *(not applicable)* | Not supported in AA26 connectors |

Only the four credential types listed as applicable are needed for the connectors supported in AA26. If your legacy environment uses connection profiles for other purposes (SQL Server inventory, Unix auditing), those do not require migration.

---

## Before you begin

- Identify all connection profiles used by Active Directory, file server, SharePoint, and Entra ID jobs in the legacy system.
- Obtain the credentials for each profile: username and password for domain accounts, client ID and secret for Entra ID registrations, and client ID and certificate for SharePoint.
- Confirm that each account has the required permissions for its connector type in AA26. See the connector-specific prerequisites in the Access Analyzer documentation.

---

## Step 1 — Inventory legacy connection profiles

Before creating service accounts in AA26, document every connection profile that needs to be migrated.

### Export using PowerShell

The following script queries the legacy NAA SQL Server database to list all connection profiles. Run it on a machine with access to the legacy NAA SQL Server.

```powershell
<#
.SYNOPSIS
    Exports connection profile names and types from the legacy NAA SQL Server database.
    Use this output to plan service account creation in AA26.

.PARAMETER SqlServer
    Hostname or IP address of the legacy NAA SQL Server instance.

.PARAMETER Database
    Name of the legacy NAA database (default: StealthAUDIT).

.EXAMPLE
    .\Export-LegacyConnectionProfiles.ps1 -SqlServer "sql01.corp.local" -Database "StealthAUDIT"
#>

param(
    [Parameter(Mandatory)]
    [string]$SqlServer,

    [string]$Database = 'StealthAUDIT'
)

$ErrorActionPreference = 'Stop'

Write-Host "Connecting to $SqlServer\$Database ..." -ForegroundColor Cyan

try {
    $conn = New-Object System.Data.SqlClient.SqlConnection
    $conn.ConnectionString = "Server=$SqlServer;Database=$Database;Integrated Security=True;"
    $conn.Open()

    # Query connection profiles table.
    # Verify the table name against your database using:
    # SELECT name FROM sys.tables WHERE name LIKE '%Profile%' OR name LIKE '%Connection%'
    $query = @"
SELECT
    cp.ProfileName,
    cp.ProfileType,
    cp.Username,
    cp.Domain,
    cp.Notes,
    cp.CreatedDate,
    cp.ModifiedDate
FROM
    SA_ConnectionProfiles cp
ORDER BY
    cp.ProfileName
"@

    $cmd = New-Object System.Data.SqlClient.SqlCommand($query, $conn)
    $reader = $cmd.ExecuteReader()

    $profiles = @()
    while ($reader.Read()) {
        $profiles += [PSCustomObject]@{
            ProfileName  = $reader['ProfileName']
            ProfileType  = $reader['ProfileType']
            Username     = $reader['Username']
            Domain       = $reader['Domain']
            Notes        = $reader['Notes']
            CreatedDate  = $reader['CreatedDate']
            ModifiedDate = $reader['ModifiedDate']
        }
    }
    $reader.Close()
    $conn.Close()

    if ($profiles.Count -eq 0) {
        Write-Host "No connection profiles found. Verify the table name in your environment." -ForegroundColor Yellow
    } else {
        Write-Host "`nFound $($profiles.Count) connection profile(s):" -ForegroundColor Green
        $profiles | Format-Table -AutoSize

        $outputPath = ".\LegacyConnectionProfiles_$(Get-Date -Format 'yyyyMMdd_HHmmss').csv"
        $profiles | Export-Csv -Path $outputPath -NoTypeInformation
        Write-Host "`nExported to: $outputPath" -ForegroundColor Green
        Write-Host "`nNEXT STEP: Review the exported file and note which profiles need to be recreated in AA26." -ForegroundColor Cyan
    }
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host @"

If the query fails with 'Invalid object name', the table name may differ in your environment.
Run this query to find the correct table:
  SELECT name FROM sys.tables WHERE name LIKE '%Profile%' OR name LIKE '%Connection%'
"@ -ForegroundColor Yellow
}
```

:::note
The exact SQL table name for connection profiles might differ between NAA versions. If `SA_ConnectionProfiles` does not exist in your database, run `SELECT name FROM sys.tables WHERE name LIKE '%Profile%' OR name LIKE '%Connection%'` to locate the correct table.
:::

### Export manually from the NAA console

If direct SQL access is unavailable, document connection profiles from the NAA console:

1. Open the Netwrix Access Analyzer console.
2. Navigate to **Settings** > **Connection**.
3. Review each connection profile listed. Record the profile name, credential type, username, and domain.
4. Note which jobs reference each profile (visible in the Job Properties panel for each job).

---

## Step 2 — Create service accounts in Access Analyzer

Create one service account in AA26 for each legacy connection profile that needs to be migrated.

Navigate to **Configuration** > **Service Accounts**.

![Service Accounts list showing existing accounts by name, type, and creation date](/images/accessanalyzer/2601/migration/service-accounts-list.png)

### Create a Username/Password service account

Use this type for Active Directory and File Server sources.

1. Click **Add Service Account**.
2. In the **Name** field, enter a descriptive name that matches or maps to the legacy profile name.
3. From the **Account Type** drop-down, select **Username/Password**.

   ![Add Service Account form showing Username/Password fields: name, account type selector, username, and password](/images/accessanalyzer/2601/migration/add-service-account-username-password.png)

4. In the **Username** field, enter the domain account in the format `DOMAIN\username` or `username@domain`.
5. In the **Password** field, enter the account password.
6. Click **Add account**.

### Create a Client ID/Secret service account

Use this type for Entra ID sources.

1. Click **Add Service Account**.
2. Enter a **Name**.
3. From the **Account Type** drop-down, select **Client ID/Secret**.

   ![Add Service Account form showing Client ID/Secret fields: name, account type, client ID, and client secret](/images/accessanalyzer/2601/migration/add-service-account-client-secret.png)

4. Enter the **Client ID** (Application ID) from your Entra ID app registration.
5. Enter the **Client Secret** value.
6. Click **Add account**.

### Create a Client ID/Certificate service account

Use this type for SharePoint Online sources.

1. Click **Add Service Account**.
2. Enter a **Name**.
3. From the **Account Type** drop-down, select **Client ID/Certificate**.

   ![Add Service Account form showing Client ID/Certificate fields: name, account type, client ID, and certificate upload](/images/accessanalyzer/2601/migration/add-service-account-certificate.png)

4. Enter the **Client ID** (Application ID) from your SharePoint app registration.
5. Upload the certificate file (`.pfx` or `.pem` format).
6. Click **Add account**.

---

## Step 3 — Verify

After creating all service accounts, verify each one before using it in a source group:

1. In the service accounts list, locate a newly created account.
2. Click the actions menu and select **Edit**.
3. Confirm the credential type and username display correctly.
4. You'll verify connectivity through the source group's **Test Connection** function in the [next migration step](./migrate-target-servers.md).

---

## Related links

- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
- [Migration Checklist](./migration-checklist.md)
