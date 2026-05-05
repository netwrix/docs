---
description: >-
  Explains why video recordings may not open from the When field in User
  Activity reports and how SQL Server Reporting Services (SSRS) settings can
  affect hyperlink rendering for video links.
keywords:
  - video recordings
  - When field
  - User Activity reports
  - SSRS
  - SQL Server Reporting Services
  - SupportedHyperlinkSchemes
  - file protocol
  - Netwrix Auditor
  - reports with video
products:
  - auditor
sidebar_label: Video Recordings Do Not Open from the When Field
tags:
  - kb
title: "Video Recordings Do Not Open from the When Field in User Activity Reports"
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Video Recordings Do Not Open from the When Field

## Symptom

In User Activity reports, clicking the link in the **When** field does not open the related video recording. Reports with video should allow users to click the link in the **When** field to open the recorded video.

## Cause

SQL Server Reporting Services (SSRS) may suppress the hyperlink used by the report. In the investigated case, the `SupportedHyperlinkSchemes` setting did not include the `file` protocol. As a result, SSRS did not render the `file://` hyperlink, and the **When** field did not function as a clickable video link.

## Resolution

1. Add `file` to the list of supported hyperlink schemes in SSRS so that the value changes from `http,https,mailto` to `http,https,mailto,file`.

   - **Using SQL Server Management Studio:**
     - Connect to the Reporting Services instance.
     - Open the report server properties.
     - Navigate to the **Advanced** tab.
     - Edit the **SupportedHyperlinkSchemes** value to `http,https,mailto,file`.

   - **Using a direct database command:** Replace `localhost\SQLEXPRESS` with the actual SQL Server instance that hosts the `ReportServer` database, then run:

     ```powershell
     Invoke-Sqlcmd -ServerInstance "localhost\SQLEXPRESS" -Database "ReportServer" -Query "UPDATE ConfigurationInfo SET Value = 'http,https,mailto,file' WHERE Name = 'SupportedHyperlinkSchemes'"
     ```

2. If necessary, restart the SSRS service after making the change.

3. Open the affected User Activity report again and verify that the **When** field is clickable.

> **NOTE:** Modern web browsers may still block `file://` links when you open reports through the SSRS web portal over HTTP or HTTPS. In such cases, the link may still not work in the browser because of browser security restrictions, but it should work when you open the report through the Netwrix Auditor console.
