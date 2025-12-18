---
description: >-
  This article explains the symptoms, causes, and resolutions for issues related to running Active Directory collection jobs with group Managed Service Accounts (gMSA) in Netwrix Access Analyzer.
keywords:
  - Active Directory
  - gMSA
  - Netwrix Access Analyzer
  - collection jobs
  - authentication
sidebar_label: AD Collection Jobs Don't Support gMSA
tags: []
title: "Active Directory Collection Jobs Do Not Run with gMSA"
knowledge_article_id: kA0Qk0000002vi9KAA
products:
  - accessanalyzer
---

# Active Directory Collection Jobs Do Not Run with gMSA

## Symptom

When you attempt to run the **Active Directory\4. Group Policy** or **Active Directory\5. Domains** collection jobs in Netwrix Access Analyzer (formerly Enterprise Auditor) using a group Managed Service Account (gMSA), the jobs fail to start and report one of the following error messages:

- `Access Denied`
- `Cannot Connect`
- `Unspecified Error`

## Cause

gMSAs do not expose a usable password for network logon or LDAP binds, nor do they support credential delegation for impersonation. As a result, some data collectors cannot authenticate or establish the required sessions when configured with a gMSA.

## Resolution

gMSAs are not supported for the **Active Directory\4. Group Policy** or **Active Directory\5. Domains** collection jobs. The following data collectors will fail when configured with direct gMSA credentials:

- **Group Policy DC**
- **LDAP DC**
- **Registry DC**
- **ActiveDirectory DC**
- **SmartLog DC**

To run these collections successfully, configure and use a standard domain user account that has the necessary permissions for each target system. For details on the least-privilege permissions model, see: [Active Directory Auditing Least Privilege Model Permissions](https://docs.netwrix.com/docs/accessanalyzer/12_0).

## Related Link

- [Active Directory Auditing Least Privilege Model Permissions](https://docs.netwrix.com/docs/accessanalyzer/12_0)