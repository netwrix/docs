---
description: >-
  Explains why you cannot export reports from Netwrix Auditor when Internet
  Explorer is not installed and lists workarounds to save reports via a browser,
  Report Manager (SSRS), or the Print feature.
keywords:
  - export
  - report
  - Netwrix Auditor
  - SSRS
  - Report Manager
  - PDF
  - Internet Explorer
  - Print
products:
  - auditor
sidebar_label: Impossible to Export a Report
tags: []
title: "Impossible to Export a Report"
knowledge_article_id: kA04u000000HDfkCAG
---

# Impossible to Export a Report

## Symptoms

- In Netwrix Auditor v10.5, the **Export** icon is active, but Netwrix Auditor does not export the report when you click and select the report format (Word, Excel, PDF, PowerPoint, TIFF file, MHTML).
- In Netwrix Auditor v10.6 and v10.7, the **Export** icon is missing.

## Cause

Internet Explorer is not installed on the affected server.

## Resolutions

> **NOTE:** In Netwrix Auditor v10.8, you are able to export reports without Internet Explorer installed.

Refer to the following options to save the report:

- Verify that another browser is installed on your server.

- Export the report via Report Manager.
  > **IMPORTANT:** A non-gMSA account with the **Content Manager** role is required to access SSRS. Refer to the following article for additional information: https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

  1. In Netwrix Auditor, navigate to **Settings** > **Audit Database**.
  2. Click the **Report Manager URL**, locate the required report, and export it.

- Export the PDF version using the **Print** feature.

  1. In Netwrix Auditor, navigate to the **Reports** menu and run a report.
  2. Click the **Print** icon, select the appropriate format, and click **Print**.  
     ![Print dialog or options]./../0-images/ka0Qk000000CoU5_0EM4u0000084Tco.png)
  3. Proceed with the further steps to save the report.

## Related Articles

- https://docs.netwrix.com/docs/auditor/10_8/requirements/overview

