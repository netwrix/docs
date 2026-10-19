---
title: "Getting Started"
description: "Getting Started"
sidebar_position: 2
---

# Getting Started

Once Access Analyzer is installed, use the following workflow to quickly begin
auditing the organization’s IT infrastructure. See the
[Navigating the Console](/docs/accessanalyzer/12.0/admin/navigate/overview.md) topic for additional information and data grid
functionality.

## Initial Configuration During First Launch

The initial Access Analyzer Configuration Wizard walks you through configuring
several key global settings:

- Storage

    - Mandatory configuration during the first launch
    - Requires credential on the SQL® Server database which is used to create and modify the Access
      Analyzer database
    - Option to either create a new database or point to an existing database
    - If using Windows Authentication, you must also configure the Schedule node
    - See the [Storage](/docs/accessanalyzer/12.0/admin/settings/storage/overview.md) topic for additional information

- Schedule

    - Only appears if you configure the Storage Profile to use Windows Authentication
    - If you configure the Storage Profile to use SQL Authentication, you configure the setting
      later
    - See the [Schedule](/docs/accessanalyzer/12.0/admin/settings/schedule.md) topic for additional information

- Instant Job

    - Install the pre-configured solutions the organization has a license for
    - See the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for additional
      information

## Global Settings Configured

The global Settings have an overall impact on the running of Access Analyzer jobs. You manage them
through the Settings node at the top of the Navigation pane. The following global Settings require
configuration from the start:

- [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) – Configure the Default Connection Profile and
  additional Connection Profiles as needed for intended data collection
- [Schedule](/docs/accessanalyzer/12.0/admin/settings/schedule.md) – Configure the Default Scheduled Service Account for
  scheduling Access Analyzer job execution, if not configured via the initial configuration wizard
- [Notification](/docs/accessanalyzer/12.0/admin/settings/notification.md) – Configure an SMTP server for Access Analyzer to
  use for sending email notifications

The other global Settings provide additional options for impacting how Access Analyzer functions:

- [Access](/docs/accessanalyzer/12.0/admin/settings/access/overview.md) – Enable and configure Role Based Access for a least
  privileged application of Access Analyzer and report viewing or the enable the REST API

    :::note
    If you enable Role Based Access by accident, contact
    [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling it.
    :::


- [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) – Configure additional settings not included
  in the other nodes
- [Exchange](/docs/accessanalyzer/12.0/admin/settings/exchange.md) – Configure Microsoft® Exchange Server connections

:::warning
Don't configure data retention at the global level without ensuring History is
supported by ALL solutions to be run.
:::


- [History](/docs/accessanalyzer/12.0/admin/settings/history.md) – Configure data retention and log retention settings
- [Host Discovery](/docs/accessanalyzer/12.0/admin/settings/hostdiscovery.md) – Configure Host Discovery task settings
- [Host Inventory](/docs/accessanalyzer/12.0/admin/settings/hostinventory.md) – Configure Host Inventory settings
- [Reporting](/docs/accessanalyzer/12.0/admin/settings/reporting.md) – Configure reporting options, if necessary
- [Sensitive Data](/docs/accessanalyzer/12.0/admin/settings/sensitivedata/overview.md) – Flag false positive within discovered
  potential sensitive data files
- [ServiceNow](/docs/accessanalyzer/12.0/admin/settings/servicenow.md) – Configure the ServiceNow Action Module authentication
  credentials
- [Storage](/docs/accessanalyzer/12.0/admin/settings/storage/overview.md) – Configure additional SQL Server database Storage
  Profiles

See the [Global Settings](/docs/accessanalyzer/12.0/admin/settings/overview.md) topic for additional information.

## Discover Hosts

Within the terminology of Access Analyzer, hosts are the machines being targeted during data
collection. You can discover hosts or manually introduce them to Access Analyzer. Access Analyzer
then inventories known hosts to populate dynamic host lists. Perform host discovery at the Host
Discovery node. Manually introduce hosts at the Host Management node.

Host management consists of maintaining up-to-date host inventories and host lists that you can
assign to job groups or jobs as targeted hosts. See the
[Host Management](/docs/accessanalyzer/12.0/admin/hostmanagement/overview.md) topic for additional information.

## Job Workflow

After you configure the global Settings and introduce hosts to Access Analyzer, it's
time to begin auditing. This requires an understanding of the relationship between solutions, job
groups, jobs, queries, analysis, actions, and reports.

The Access Analyzer job is the fundamental unit. Jobs are responsible for all data collection
queries, analysis tasks, notification tasks, action tasks, and report generation. When jobs are
designed to work together, job groups house them to control the order of job execution.
Solutions are pre-configured job groups which have been designed to target specific types of
environments to audit for specific data sets, typically the most common types of information
desired.

See the [Jobs Tree](/docs/accessanalyzer/12.0/admin/jobs/overview.md) topic for additional information.
