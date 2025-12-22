---
description: >-
  Troubleshoot Error 503 when reports and subscriptions in Netwrix Auditor fail.
  This article lists symptoms, causes, and step-by-step resolutions, including
  how to check and resolve an expired SSRS evaluation license.
keywords:
  - SSRS
  - Error 503
  - Service Unavailable
  - Netwrix Auditor
  - reports
  - subscriptions
  - evaluation license
  - Report Server Configuration Manager
products:
  - auditor
sidebar_label: Error 503 − Reports and Subscriptions Not Working
tags: []
title: "Error 503 − Reports and Subscriptions Not Working"
knowledge_article_id: kA04u000000PoK9CAK
---

# Error 503 − Reports and Subscriptions Not Working

## Symptoms

- Regular reports are missing.
- Attempts to run reports via **Netwrix Auditor** UI return the following error:

```
Can't reach this page
```

- Attempts to connect to SSRS return the following error:

```
Invalid Report Server URL
Update your settings if necessary or proceed with current settings.
```

- The **Subscriptions** menu in **Netwrix Auditor** shows at least a single **Report** type subscription with the **Failed** status.
- The **History** tab of the failed report contains entries on failed reports.
- Check the SSRS availability via **Netwrix Auditor**, SSRS or SQL Server to try create a report. In case of a related issue the following error should be present:

```
Service Unavailable
HTTP Error 503. The service is unavailable.
```

## Causes

- Incorrectly set Web Service and Web Portal URLs.
- SQL Server Reporting Services has been stopped and is not running.
- The SSRS account is included in the Protected Users security group.
- Expired SSRS Evaluation license.

## Resolutions

- Review Web Service and Web Portal URLs — refer to the following article for additional information: [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)
- Verify the `SQL Server Reporting Services` service on your SSRS server is running. You can also run **Report Server Configuration Manager** > the **Report Server Status** tab to verify the report server status.

  IMPORTANT: Refer to the following article if you're unable to start the `SQL Server Reporting Services` service: [Error: Service Did Not Respond to Start or Control Request in SSRS](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/error-service-did-not-respond-to-start-or-control-request-in-ssrs)

- Remove the SSRS account from the Protected Users security group. Learn more about Protected Users in Protected Users Security Group ⸱ Microsoft.
  - https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/protected-users-security-group

- Review the SSRS Evaluation license used in your environment. If it has expired, follow these steps:

  1. Follow **Control Panel** > **Uninstall a program** > `Microsoft SQL Server Reporting Services` > **Uninstall/Change**.
  2. Once the SSRS window opens, select **Upgrade Edition** > enter the product key to license your SSRS instance.

### Troubleshooting the expired evaluation license

To establish whether your SSRS instance has an evaluation license, open **Start** > **Microsoft SQL Server Reporting Services** folder > **Report Server Configuration Manager**. Once you've connected to the server, check the **Edition** line in the server window.

If your SSRS instance edition is **Evaluation**, check the install date for the SSRS via **Start** > **Settings** > **Apps & features** or **Control Panel** > **Uninstall a program**. If the period since the installation date exceeds 6 months, your SSRS Evaluation license has expired.

Review the SSRS logs in `C:\Program Files\Microsoft SQL Server Reporting Services\SSRS\LogFiles:`:

```
The report server has encountered a configuration error.
Microsoft.ReportingServices.Diagnostics.EvaluationCopyExpiredException:
The evaluation period for this instance of Microsoft SQL Server Reporting Services has expired.
A license is now required.
```

## Related articles

- [Deploying the Report Server Database](/docs/kb/auditor/system-administration/database-management/deploying-the-report-server-database)

- [Error: Service Did Not Respond to Start or Control Request in SSRS](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/error-service-did-not-respond-to-start-or-control-request-in-ssrs)
