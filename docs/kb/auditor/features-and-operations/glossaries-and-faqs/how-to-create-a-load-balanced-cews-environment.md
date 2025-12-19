---
description: >-
  Describes how to configure a basic load balanced environment for the Netwrix
  Data Classification CEWS so each server hosts both the Administration
  Interface (QS) and the Web Service Endpoint. Includes step-by-step actions and
  an example SharePoint configuration script.
keywords:
  - CEWS
  - load balancing
  - Netwrix Data Classification
  - conceptQS
  - conceptCEWS
  - IIS
  - SharePoint
  - Content Enrichment Web Service
products:
  - auditor
  - data-classification
sidebar_label: How to create a load balanced CEWS environment
tags: []
title: "How to create a load balanced CEWS environment"
knowledge_article_id: kA00g000000H9e6CAC
---

# How to create a load balanced CEWS environment

## Overview
This article describes how to configure a basic load balanced environment for the **Netwrix Data Classification CEWS** product. In this configuration each server will run both the:

- **Netwrix Data Classification QS Administration Interface**
- **Netwrix Data Classification CEWS Web Service Endpoint**

The CEWS endpoint leverages the local `conceptQS.asmx` web service endpoint on each server.

## Assumptions
*This article assumes that the environment is currently a single server instance - not a **DQS** configuration.*

## Procedure

1. Access the current **conceptCEWS** server via RDP (`mstsc`) and perform the following actions:
   1. Locate your `conceptDB` directory (default location of `C:\Program Files\ConceptSearching`)
   2. **Share** the `conceptDB` folder with an appropriate service account (you will map this to each of the other servers)
   3. Locate your `conceptQS/conceptCEWS` directory (default location of `C:\inetpub\wwwroot`)
   4. **Copy** both directories

2. Access the new server via RDP and perform the following actions:
   1. Map a shared drive to the share created in step 1(a)
   2. Navigate to the default **IIS** location (`C:\inetpub\wwwroot`)
   3. **Paste** the copied applications
   4. Navigate into the `conceptQS` folder
   5. **Open** `conceptConfig.exe`
   6. Amend the CSE files location to the mapped network drive
   7. **Open IIS Manager (Run + inetmgr)**
   8. Right-click each of the two new folders and select "**Convert to Application**"
   9. Validate that the configured **Application Pool** is configured for both the correct account and the correct `.NET` version (4.0)

3. Configure your load balancer to point to the two servers, typically:
   - http://servername/conceptQS/ContentEnrichmentWebService.svc

4. Amend the SharePoint CEWS configuration to point to the load balancer rather than the new server. An example script is shown below for reference:

```powershell
$ssa = Get-SPEnterpriseSearchServiceApplication
$config = New-SPEnterpriseSearchContentEnrichmentConfiguration
$config.Endpoint = "http://loadbalancer/conceptCEWS/ContentProcessingEnrichmentService.svc"
$config.InputProperties = "Body", "Title", "OriginalPath", "<CustomField1>", "<CustomField2>", ....
$config.OutputProperties = "<OutputFieldName1>", "<OutputFieldName2>", ....
$config.SendRawData = $True
$config.MaxRawDataSize = 8192
$config.Timeout = 30000
Set-SPEnterpriseSearchContentEnrichmentConfiguration -SearchApplication $ssa -ContentEnrichmentConfiguration $config
```

## Notes
- Ensure that the service account used for the shared `conceptDB` has the necessary permissions on all servers.
- Confirm that the application pools and identities are consistent across servers to avoid permission or configuration mismatches.
- Verify connectivity from SharePoint (or other consumers) to the load balancer endpoint after configuration.
