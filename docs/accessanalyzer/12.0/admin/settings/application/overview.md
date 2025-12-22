---
title: "Application"
description: "Application"
sidebar_position: 20
---

# Application

The **Application** node is for configuring general settings which affect the way the Access
Analyzer Console functions.

![Application](/images/accessanalyzer/12.0/admin/settings/application/application.webp)

**Application Log**

The Access Analyzer Application Log section determines what information is stored in the Access
Analyzer application log.

![Application Log](/images/accessanalyzer/12.0/admin/settings/application/applicationlog.webp)

The Application log level controls the types of messages generated for each job and the application.
It can be modified at the job level in the **Job Properties** window. See the
[General Tab](/docs/accessanalyzer/12.0/admin/jobs/job/properties/general.md) topic for additional information. Options
available in the Application log level drop-down menu include:

- Debug – Records everything that happens during job execution, most verbose level of logging

    - Records all Info level information
    - Records everything else that happens
    - Creates the largest file

- Info – Records information about what stage of the job is being performed when errors or warnings
  occurred

    - Records all Warning level information
    - Records job progress information

- Warning – Records all warnings which occur during job execution

    - Records all Error level information
    - Records all warnings and the time of occurrence

- Error – Records all errors which occur during job execution

    - Records job start time
    - Records errors and the time of occurrence
    - Records job completion time

:::info
Set the log level to **Warning**.
:::


The other log levels are designed to assist with troubleshooting job execution issues. The Debug
level is only recommended when experiencing problems. After the problem is fixed or the Application
log has been sent to [Netwrix Support](https://www.netwrix.com/support.html), reduce the logging
level to **Warning** or **Info**.

**Profile Security**

The Profile Security section provides the option to enable an enhanced method of encryption to
various credentials stored by the Access Analyzer application.

![Profile Security](/images/accessanalyzer/12.0/admin/settings/application/profilesecurity.webp).

There are two options available in the Profiles stored with drop-down menu:

- Application – Default setting, does not employ the enhanced encryption
- Vault – Enables the enhanced encryption of stored credentials. See the [Vault](/docs/accessanalyzer/12.0/admin/settings/application/vault.md) topic for
  requirements and additional information.

**Usage Statistics**

The Usage Statistics section allows you to select whether to send usage statistics data to Netwrix
to help us improve our product.

![Usage Statistics](/images/accessanalyzer/12.0/admin/settings/application/usagestatistics.webp)

- If selected, usage statistics are collected and sent to Netwrix

    - Upon startup of the Access Analyzer console, the system checks if usage statistics have been
      sent in the last 7 days. If they have not been, stored procedures run against the Access
      Analyzer database and gather data about job runs, access times, and environmental details like
      resource counts, users counts, number of exceptions, and so on. This data is then sent back to
      Netwrix to help us identify usage trends and common pain points, so that we can use this
      information to improve the product.
    - Only anonymous statistic-level data is included. No private company or personal data is
      collected or sent to Netwrix.

- If cleared, no usage statistics are collected or sent to Netwrix

**Host Target Options**

The Host Target Options section provides radio buttons to select the source that Access Analyzer
should use to connect to hosts.

![Host Target Options](/images/accessanalyzer/12.0/admin/settings/application/hosttargetoptions.webp)

Select from the following two options:

- Use host name
- Prefer DNS name if available

**Grid View Parameters**

The Grid View Parameters section controls how the data grids display within the Access Analyzer
Console.

![Grid View Parameters](/images/accessanalyzer/12.0/admin/settings/application/gridviewparameters.webp)

- Automatically rename duplicate columns within a table – Checks for and renames columns with
  duplicate names
- Automatically correct invalid column names – Checks for and corrects column names which contain
  characters SQL cannot handle

    :::info
    Leave both options selected.
    :::


- Save filters and grouping on data grids – Maintains filters configured for a data grid for the
  next viewing. If not selected, filtered data grids reset between viewings.
- Maximum row count for interactive grid view – Indicates the number of rows displayed in tables
  accessible in under a job’s Status and Results nodes

    - Maximum row count is set to 1000 by default and has a cap of 99,999 rows. This number does not
      impact the number of rows within the SQL database. To view the full row count for a table
      exceeding this size, use the SQL Server Management Studio or another SQL Server interface tool
      which displays the full table.

Filtered data grids are not lost if persistent filters are not saved. The Filtration Dialog
available for every data grid maintains a list of recent filters. See the
[Data Grid Functionality](/docs/accessanalyzer/12.0/admin/navigate/datagrid.md) topic for additional information.

**Cleanup**

The Cleanup section is designed to conserve space in the SQL Database Transaction Log. It only works
when the database is configured to use Simple Recovery Model.

![Cleanup Options](/images/accessanalyzer/12.0/admin/settings/application/cleanup.webp)

- Compact Database Transaction Log – If selected, every time the Access Analyzer application is
  closed, the Database Transaction Log is compacted

    :::info
    In most environments, it is recommended to leave this option selected. If a
    scheduled task ends while multiple tasks are still running, the process of compacting the
    database freezes it and causes the running tasks to fail.
    :::


- Run Post Processing SQL Script to Set Host Status – If selected, this option ascribes the values
  of SUCCESS, WARNING, or ERROR to indicate what happened on that host during job execution

    :::info
    It is recommended that this option be left selected.
    :::


**Application Exit Options**

The Application Exit Options section controls whether or not a confirmation is displayed when the
Access Analyzer application is closed.

![Application Exit Options](/images/accessanalyzer/12.0/admin/settings/application/applicationexitoptions.webp)

If selected, the **Show Confirmation Dialog** option causes a Confirm Exit window to open when the
Access Analyzer user attempts to exit the application. If deselected, the Access Analyzer
application closes without confirmation.

![Confirm Exit](/images/accessanalyzer/12.0/admin/settings/application/confirmexitwindow.webp)

The Confirm Exit window requires the **Yes** button to be clicked before the Access Analyzer
application closes.

The **Cancel** and **Save** buttons are in the lower-right corner of the Application view. These
buttons become enabled when modifications are made to the Application global settings. Whenever
changes are made at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if no changes were intended.
