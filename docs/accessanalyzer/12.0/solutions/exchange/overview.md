---
title: "Exchange Solution"
description: "Exchange Solution"
sidebar_position: 120
---

# Exchange Solution

The Exchange Solution provides auditing and reporting on multiple aspects of the Exchange
environment to assist with identifying risk, understanding usage, and decreasing bloat. Areas of
focus include Audit and Compliance, Maintenance and Cleanup, Metrics and Capacity, Operations and
Health, Public Folders and Configuration Baseline. Sensitive Data Discovery searches mailboxes and
public folders to discover where sensitive information of any type exists.

**Supported Platforms**

- Exchange Online (Limited)

- Exchange 2019 (Limited)
- Exchange 2016 (Limited)
- Exchange 2013
- Exchange 2010 (Limited)

See the
[Exchange Support and Permissions Explained](/docs/accessanalyzer/12.0/requirements/exchange/support/support.md) topic
for additional information.

**Requirements, Permissions, and Ports**

See the
[Target Exchange Servers Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/exchange/target.md)
and
[Target Exchange Online Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/exchange/exchangeonline/exchangeonline.md)
topics for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For example, if the job is
configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The Exchange Solution requires a special Access Analyzer license. It can be installed from the
Access Analyzer Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the
solution: **Jobs** > **Exchange**.

Each job group within the solution collects data, analyzes the data, and reports on the target
Exchange environment, with the exception of the 6. Distribution Lists job group that only analyzes
data and generates reports. The EX_UserOverview job runs analysis on the collected data and
generates reports.

## Job Groups

The Exchange Solution is divided into categories based upon what is being audited.

![Exchange Job Group Overview page](/images/accessanalyzer/12.0/solutions/exchange/overviewpage.webp)

The following job groups comprise the Exchange Solution:

- [1.HUB Metrics Job Group](/docs/accessanalyzer/12.0/solutions/exchange/hubmetrics/overview.md) – Comprised of data collection, analysis and
  reports that focus on mail-flow activity occurring within your organization. This job group goes
  out to each server that contains the Message Tracking Logs and parses the log to return the data
  to the Access Analyzer database.
- [2.CAS Metrics Job Group](/docs/accessanalyzer/12.0/solutions/exchange/casmetrics/overview.md) – Comprised of data collection, analysis and
  reports that focus on remote connections (Outlook Web Access, ActiveSync, and Outlook Anywhere
  Access) occurring within your organization. This job group goes out to each server that contains
  the IIS Logs and parses the log to return the data to the Access Analyzer database.
- [3.Databases Job Group](/docs/accessanalyzer/12.0/solutions/exchange/databases/overview.md) – Comprised of data collection, analysis and
  reports that focus on database sizing, growth, and trends
- [4.Mailboxes Job Group](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/overview.md) – Comprised of data collection, analyses, and
  reports around mailbox features, logons, permissions, and sizing

    :::warning
    It is not recommended to run this job group at this job group level.
    :::


    - See the [Recommended Configurations for the 4. Mailboxes Job Group](/docs/accessanalyzer/12.0/solutions/exchange/mailboxes/recommended.md)
      topic for this job group. All jobs within this group are compatible with the Office 365
      environment.

- [5. Public Folders Job Group](/docs/accessanalyzer/12.0/solutions/exchange/publicfolders/overview.md) – Comprised of data collection, analysis
  and reports that focus on public folder sizing, content aging, entitlement, ownership, and the
  identification of each public folder’s Most Probable Owner. The Most Probable Owner is a unique
  algorithm built into the public folder data collector that is determined based on folder
  ownership, content posted, and size of content posted.
- [6. Distribution Lists Job Group](/docs/accessanalyzer/12.0/solutions/exchange/distributionlists/overview.md) – Lists the direct and effective
  membership to distribution lists in addition to providing context around potentially stale
  distribution lists
- [7.Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/exchange/sensitivedata/overview.md) – Comprised of jobs which locate sensitive
  data found in mailboxes and public folders in the Exchange environment
- [8.Exchange Online Job Group](/docs/accessanalyzer/12.0/solutions/exchange/online/overview.md) – Comprised of jobs that locate sensitive data
  found in mailboxes and public folders in the Exchange environment
- [EX_UserOverview Job](/docs/accessanalyzer/12.0/solutions/exchange/ex_useroverview.md) – provides correlation from multiple data collection
  points to show information for each user about their mailbox size, mailbox access rights,
  mail-flow metrics and remote connectivity to the Exchange environment. These reports provide user
  impact analysis on the environment. This job depends upon multiple job groups.

The MAPI-based data collectors require both Access Analyzer MAPI CDO and Microsoft Exchange MAPI CDO
to be installed on the Access Analyzer Console server. Once these have been installed, configure the
**Settings** > **Exchange** node for proper connection to the Exchange server. See the
[Exchange](/docs/accessanalyzer/12.0/admin/settings/exchange.md) topic for additional information.
