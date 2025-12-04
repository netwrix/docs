---
description: >-
  Error 500 occurs when viewing or accessing reports in Netwrix Auditor due to
  SSRS service account misconfiguration. This article explains how to configure
  SQL Server Reporting Services to use the Network Service account to resolve
  the error.
keywords:
  - Error 500
  - SSRS
  - Report Server Configuration Manager
  - Network Service
  - SQL Server Reporting Services
  - Netwrix Auditor
  - Report Manager
  - reporting
products:
  - auditor
sidebar_label: Error 500 when Viewing and Accessing Reports
tags: []
title: "Error 500 when Viewing and Accessing Reports"
knowledge_article_id: kA00g000000H9arCAC
---

# Error 500 when Viewing and Accessing Reports

## Symptoms

- The Error 500 is prompted when you attempt to view or access Netwrix Auditor reports.
- No error is present when accessing the Report Manager URL from the SSRS host.

## Cause

The Local Service account is used in SQL Server Reporting Services (SSRS) instead of the Network Service account.

## Resolution

Configure SSRS to use the Network Service account:

1. On the SSRS host, run **Report Server Configuration Manager** and connect to your Report Server instance.
2. In the left pane, select **Service Account** and switch the built-in account used to **Network Service**.
3. Click **Apply** to save changes, and exit **Report Server Configuration Manager**.
4. For changes to take effect, proceed to **Services**, locate the **SQL Server Reporting Services** service and restart it.
