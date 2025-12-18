---
description: >-
  Describes errors you may see when viewing subscription reports in Netwrix
  Auditor and provides steps to resolve them, including restoring the Reports
  folder and verifying SSRS authentication.
keywords:
  - subscription reports
  - SSRS authentication
  - Reports folder
  - Netwrix Auditor
  - ReportID missing
  - rsItemNotFound
  - Reports.zip
  - Netwrix Auditor Management Service
products:
  - auditor
sidebar_label: Subscription Reports Errors
tags: []
title: "Subscription Reports Errors"
knowledge_article_id: kA04u00000110sZCAQ
---

# Subscription Reports Errors

## Symptoms

Netwrix Auditor prompts one of the following errors when you're viewing a subscription report:

```
The report with ReportID %REPORT_UID% is missing on your server.
```

```
Could not find a part of the path C:\ProgramData\Netwrix Auditor\Reports.
```

```
The item '/Netwrix Auditor/%Report_name%' cannot be found.(rsItemNotFound)
```

## Causes

1. Your SSRS instance limits the available authentication methods.
2. The content of your **Reports** folder has been corrupted.

## Resolutions

1. Verify that your SSRS instance allows all authentication methods (NTLM, Kerberos, Negotiate) in your environment—learn more in Configure Windows Authentication on the Report Server — Configure a Report Server to Use Windows Integrated Security · Microsoft:  
   https://learn.microsoft.com/en-us/sql/reporting-services/security/configure-windows-authentication-on-the-report-server?view=sql-server-ver16#configure-a-report-server-to-use-windows-integrated-security

2. Recreate the **Reports** folder:

   > **NOTE:** If you have previously added a custom report, you must set it up again manually.

   1. On the Auditor Server host, proceed to the following folder:
      ```
      C:\ProgramData\Netwrix Auditor\Reports
      ```
   2. If none exists, locate the `Reports.zip` archive in the following folder:
      ```
      C:\ProgramData\Netwrix Auditor\
      ```
      If the **Reports** folder exists, create a backup of the folder, delete the original folder and recreate it by following the provided steps.
   3. Create a **Reports** folder in `C:\ProgramData\Netwrix Auditor\`. Extract the contents of the `Reports.zip` archive to the **Reports** folder. Wait 10 minutes for the reports to rebuild.

      > **NOTE:** Alternatively, you can restart the `Netwrix Auditor Management Service`.
   4. Manually rerun the subscription—open the failed subscription and click **Try Again**.

## Related Articles

- Configure Windows Authentication on the Report Server — Configure a Report Server to Use Windows Integrated Security · Microsoft:  
  https://learn.microsoft.com/en-us/sql/reporting-services/security/configure-windows-authentication-on-the-report-server?view=sql-server-ver16#configure-a-report-server-to-use-windows-integrated-security
