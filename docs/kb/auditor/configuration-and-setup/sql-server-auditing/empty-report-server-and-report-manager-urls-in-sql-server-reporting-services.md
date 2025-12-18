---
description: >-
  Explains why report folders may be empty when accessing Report Server or
  Report Manager and how to resolve it by assigning the Content Manager role.
keywords:
  - SQL Server Reporting Services
  - Report Server
  - Report Manager
  - Content Manager
  - permissions
  - Netwrix Auditor
  - reports
  - access
  - reporting services
products:
  - auditor
sidebar_label: Empty Report Server and Report Manager URLs in SQL
tags: []
title: "Empty Report Server and Report Manager URLs in SQL Server Reporting Services"
knowledge_article_id: kA00g000000H9Z8CAK
---

# Empty Report Server and Report Manager URLs in SQL Server Reporting Services

## Symptom

No report folders are available when accessing Report Server or Report Manager URL via your browser.

## Cause

The account used does not have the permissions required to access reports.

## Resolution

Assign the **Content Manager** role to the user to be able to view report folders − refer to the following article for additional information: SQL Server Reporting Services − Grant Additional Permissions on Report Server ⸱ v10.6.

## Related articles

SQL Server Reporting Services − Grant Additional Permissions on Report Server ⸱ v10.6
