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
tags: []
title: "Video Recordings Do Not Open from the When Column in User Activity Reports"
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Video Recordings Do Not Open from the When Field

## Question

Why does the **When** field in User Activity reports not open the related video recording?

## Answer

According to the product documentation, reports with video should allow users to click the link in the **When** field to open the recorded video.

If this does not happen, SQL Server Reporting Services (SSRS) may be suppressing the hyperlink used by the report. In the investigated case, the `SupportedHyperlinkSchemes` setting did not include the `file` protocol. As a result, the `file://` hyperlink was not rendered, and the **When** field did not function as a clickable video link.

To resolve this issue, add `file` to the list of supported hyperlink schemes in SSRS so that the value changes from `http,https,mailto` to `http,https,mailto,file`.

This setting can be updated in SQL Server Management Studio by connecting to the Reporting Services instance, opening the report server properties, navigating to the **Advanced** tab, and editing the **SupportedHyperlinkSchemes** value.

It can also be updated directly in the `ReportServer` database with the following command:

```powershell
Invoke-Sqlcmd -ServerInstance "localhost\SQLEXPRESS" -Database "ReportServer" -Query "UPDATE ConfigurationInfo SET Value = 'http,https,mailto,file' WHERE Name = 'SupportedHyperlinkSchemes'"
```

If necessary, restart the SSRS service after making the change. Replace `localhost\SQLEXPRESS` with the actual SQL Server instance that hosts the `ReportServer` database.

After the change is applied, open the affected User Activity report again and verify that the **When** field is clickable.

Modern web browsers may still block `file://` links when reports are opened through the SSRS web portal over HTTP or HTTPS. In such cases, the link may still not work in the browser because of browser security restrictions, but it should work when the report is opened through the Netwrix Auditor console.
