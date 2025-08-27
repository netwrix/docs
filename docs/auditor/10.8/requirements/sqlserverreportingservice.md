---
title: "SQL Server Reporting Services"
description: "SQL Server Reporting Services"
sidebar_position: 50
---

# SQL Server Reporting Services

Netwrix Auditor utilizes SQL Server Reporting Services (SSRS) engine for report generation.

If you want to generate reports and run search queries against data collected by Netwrix Auditor,
you should configure SQL Server Reporting Services (2012 R2 and above required).

Consider the following:

- SQL Server and SQL Server Reporting Services can be deployed on the separate machines only in
  commercial edition. SQL Server Express Edition with Advanced Services does not support such
  deployment scenario.

**NOTE:** It is recommended to use HTTPS instead of HTTP. HTTPS connection should also be configured
for Reporting Service.

If you plan, however, not to use Netwrix Auditor built-in intelligence (search, alerts or reports)
but only to receive e-mail notifications on audit data collection results, you may not need to
configure SSRS or audit database settings.

## Configure SSRS Account

An account used to upload data to the SQL Server Reporting Services (SSRS) Server must be granted
the Content Manager role on the SSRS **Home** folder.

**NOTE:** gMSA cannot be used to access SSRS. Use a standard account for that purpose.

Follow the steps to assign the Content Manager role.

**Step 1 –** Navigate to your **Report Manager** URL.

**Step 2 –** On the Home page, navigate to **Folder Settings** and click **New Role Assignment**
(the path can slightly vary depending on your SQL Server version).

**Step 3 –** Specify an account in the following format: _domain\user_. The account must belong to
the same domain where Netwrix Auditor is installed, or to a trusted domain.

**Step 4 –** Select **Content Manager**.

## Grant Additional Permissions on Report Server

To be able to generate a report, any user assigned the Global administrator, Global reviewer, or
Reviewer role must be granted the Browser role on the Report Server. Netwrix Auditor grants this
role automatically when adding a user. If for some reason the product was unable to grant the role,
do it manually.

Follow the steps to assign the Browser role to a user.

**Step 1 –** Open the **Report Manager** URL in your web browser.

**Step 2 –** Depending on the user's delegated scope, select the entire Home folder or drill-down to
specific data sources or event reports.

**Step 3 –** Navigate to **Manage Folder** (the path can slightly vary depending on your SQL Server
version) and select Add group or user.

**Step 4 –** Specify an account in the following format: _domain\user_. The account must belong to
the same domain where Netwrix Auditor Server is installed, or to a trusted domain.

**Step 5 –** Select **Browser**.

As a rule, Auditor can use Reporting Services with the default settings. However, to ensure that
Reporting Services is properly configured, perform the following procedure:

You must be logged in as a member of the local Administrators group on the computer where SQL Server
2016 Express is installed.

Follow the steps to verify Reporting Services installation.

**Step 6 –** Navigate to **Start >\_\_**All Apps > SQL Server\_**\_Reporting Services Configuration
Manager**.

**Step 7 –** In the Reporting Services Configuration Connection dialog, make sure that your local
report server instance (for example, _SQLExpress_) is selected, and click **Connect**.

**Step 8 –** In the **Reporting Services Configuration Manager** left pane, select **Web Service
URL**. Make sure that:

- **Virtual Directory** is set to _ReportServer_`<YourSqlServerInstanceName>`_ (e.g.,
  \_ReportServer_SQLEXPRESS_ for _SQLEXPRESS_ instance)
- **TCP Port** is set to _80_

**Step 9 –** In the Reporting Services Configuration Manager left pane, select **Database**. Make
sure that the SQL Server Name and Database Name fields contain correct values. If necessary, click
**Change Database** and complete the Report Server Database Configuration wizard.

**Step 10 –** In the Reporting Services Configuration Manager left pane, select **Report Manager
URL**. Make sure **Virtual Directory** is set correctly, and that the URL is valid.
