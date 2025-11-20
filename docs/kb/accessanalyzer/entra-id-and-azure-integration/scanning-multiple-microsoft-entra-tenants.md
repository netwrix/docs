---
description: >-
  How to set up Netwrix Access Analyzer to target multiple Microsoft Entra
  tenants for the AADInventory job, by creating separate connection profiles and
  duplicated scan jobs.
keywords:
  - Microsoft Entra
  - Azure AD
  - AADInventory
  - Netwrix Access Analyzer
  - multi-tenant
  - connection profile
  - AAD Scan
  - Azure AD Inventory
products:
  - access-analyzer
sidebar_label: Scanning Multiple Microsoft Entra Tenants
tags:
  - entra-id-and-azure-integration
title: "Scanning Multiple Microsoft Entra Tenants"
knowledge_article_id: kA04u0000000IhiCAE
---

# Scanning Multiple Microsoft Entra Tenants

## Summary
How to set up Netwrix Access Analyzer to target multiple Microsoft Entra tenants for the AADInventory job.

## Issue
In order for Netwrix Access Analyzer to be able to inventory Azure AD you require an APP ID and Key pair for the Connection Profile. This key pair is generated when adding a webapp in the Microsoft Entra ID portal (please see the Netwrix Access Analyzer user guide for more information). The limitation here is that Netwrix Access Analyzer has no way of knowing which Tenant to apply the key to; as a result you cannot add multiple accounts to a single Connection Profile. The instructions below describe how to split the collection to enable multi-tenant scanning.

## Instructions
Azure AD Inventory job consists of the following:

- 2 Jobs
  - 1-AAD Scan
    - Single query which uses the AADI data collector
    - 6 SQL analysis which import SQL functions and create the underlining views/tables
    - 1 Report which is a summary report.
  - 2-AAD Exceptions
    - 9 SQL analysis which create exception views for toxic conditions in AAD.

The only part of the solution that we are interested in is job `1-AAD Scan`. To allow you to collect data on multiple tenants you need to create a connection profile for each Tenant. Once this has been completed, take a copy of the `1-AAD Scan` job and append the tenant name at the end. Uncheck all the analysis from the copied jobs, leaving the analysis enabled for the last job in the tree.

Example:
- `1-AAD Scan_a` (has analysis unchecked)
- `1-AAD Scan_z` (has analysis checked)

1. Create a connection profile for each Microsoft Entra tenant you want to scan.
2. Copy the `1-AAD Scan` job for each tenant and rename each copy to append the tenant name (for example, `1-AAD Scan_a`, `1-AAD Scan_z`).
3. In each copied job except the final one, uncheck all analysis so they do not run. Leave the analysis checked only on the final job in the sequence.
4. Assign the correct connection profile to the matching `1-AAD Scan` job:
   - Right-click the job -> **Job Properties** -> **Connection**, and select the appropriate connection profile.
5. Schedule the solution to run as normal.

Because the AAD Scan appends the data to the core tables you are able to separate the jobs in this fashion. The subsequent analysis reviews the tables and combines all info. The summary reports will show all domains scanned as normal.

## Product
- Product: Netwrix Access Analyzer  
- Module: Access Analyzer - DC - AzureADInventory  
- Versions: 7.0+  
- Legacy Article ID: 2164
