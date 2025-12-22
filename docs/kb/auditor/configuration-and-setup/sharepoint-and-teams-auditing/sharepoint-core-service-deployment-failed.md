---
description: >-
  Automatic or manual deployment of Netwrix Auditor for SharePoint Core Service
  on Web Front-end (WFE) servers can fail due to insufficient service account
  permissions. This article explains the cause and provides steps for manual
  installation of the Core Service.
keywords:
  - SharePoint
  - Core Service
  - deployment
  - Netwrix Auditor
  - WFE
  - permissions
  - Add-SPSolution
  - Install-SPSolution
  - .wsp
products:
  - auditor
sidebar_label: SharePoint Core Service Deployment Failed
tags: []
title: "SharePoint Core Service Deployment Failed"
knowledge_article_id: kA00g000000PcSXCA0
---

# SharePoint Core Service Deployment Failed

## Symptom

Automatic or manual deployment of Netwrix Auditor for SharePoint Core Service in Web Front-end (WFE) servers fails.

## Cause

The service account used to upgrade or install Core Service has insufficient permissions.

## Resolution

Review the permissions granted to the service account. Refer to the following article for additional information on required permissions: https://docs.netwrix.com/docs/auditor/10_8 (SharePoint — Permissions for SharePoint Auditing · v10.6).

### Manual Installation

Refer to the following steps to manually install Core Service in all WFE servers:

1. Extract the SharePoint solution package—locate the `.msi` file placed by default in `C:\Program Files (x86)\Netwrix Auditor\SharePoint Auditing\SharePointPackage` and extract the contents via 7-Zip.

2. Once extracted, copy the `.wsp` file to each WFE server. Run the following lines in each WFE in elevated PowerShell to install the solution package:

```powershell
Add-SPSolution -LiteralPath c:\Netwrix.SharePoint.Audit.wsp
Install-SPSolution -identity Netwrix.SharePoint.Audit.wsp -GACDeployment -Local -Force
```

**IMPORTANT:** Replace the placeholder `-LiteralPath` path with the actual path for the `.wsp` package.

3. Confirm the deployment in each server by running the following line in PowerShell:

```powershell
Get-SPSolution -Identity 'Netwrix.SharePoint.Audit.wsp' | FT
```

Verify that Core Service is installed globally.

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8 (SharePoint — Permissions for SharePoint Auditing · v10.6)
