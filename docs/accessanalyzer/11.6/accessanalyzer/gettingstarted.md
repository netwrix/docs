# Getting Started

Once Enterprise Auditor is installed, the following workflow will quickly enable users to begin
auditing the organization’s IT infrastructure. See the
[Navigating the Console](/docs/accessanalyzer/11.6/accessanalyzer/admin/navigate/overview.md)
topic for additional information and data grid functionality.

## Initial Configuration During First Launch

During the initial Enterprise Auditor Configuration Wizard, users are walked through configuring
several key global settings:

- Storage

    - Mandatory configuration during the first launch
    - Requires credential on the SQL® Server database which is used to create and modify the
      Enterprise Auditor database
    - Option to either create a new database or point to an existing database
    - If using Windows Authentication, the Schedule node must be configured also
    - See the
      [Storage](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/storage/overview.md)
      topic for additional information

- Schedule

    - Only appears if the Storage Profile is configured to use Windows Authentication
    - If the Storage Profile is configured to use SQL Authentication, the setting is configured
      later
    - See the
      [Schedule](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/schedule.md)
      topic for additional information

- Instant Job

    - Install the pre-configured solutions for which the organization is licensed
    - See the
      [Instant Job Wizard](/docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/instantjobs/overview.md)
      topic for additional information

## Global Settings Configured

The global Settings have an overall impact on the running of Enterprise Auditor jobs. They are
managed through the Settings node at the top of the Navigation pane. The following global Settings
require configuration from the start:

- [Connection](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/connection/overview.md)
  – Configure the Default Connection Profile and additional Connection Profiles as needed for
  intended data collection
- [Schedule](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/schedule.md) –
  Configure the Default Scheduled Service Account for scheduling Enterprise Auditor job execution,
  if not configured via the initial configuration wizard
- [Notification](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/notification.md)
  – Configure an SMTP server for Enterprise Auditor to use for sending email notifications

The other global Settings provide additional options for impacting how Enterprise Auditor functions:

- [Access](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/access/overview.md)
  – Enable and configure Role Based Access for a least privileged application of Enterprise Auditor
  and report viewing or the enable the REST API

    **NOTE:** If Role Based Access is enabled by accident, contact
    [Netwrix Support](https://www.netwrix.com/support.html) for assistance in disabling it.

- [Application](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/application/overview.md)
  – Configure additional settings not included in the other nodes
- [Exchange](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/exchange.md) –
  Configure Microsoft® Exchange Server connections

**CAUTION:** Do not configure data retention at the global level without ensuring History is
supported by ALL solutions to be run.

- [History](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/history.md) –
  Configure data retention and log retention settings
- [Host Discovery](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/hostdiscovery.md)
  – Configure Host Discovery task settings
- [Host Inventory](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/hostinventory.md)
  – Configure Host Inventory settings
- [Reporting](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/reporting.md)
  – Configure reporting options, if necessary
- [Sensitive Data](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/sensitivedata/overview.md)
  – Flag false positive within discovered potential sensitive data files
- [ServiceNow](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/servicenow.md)
  – Configure the ServiceNow Action Module authentication credentials
- [Storage](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/storage/overview.md)
  – Configure additional SQL Server database Storage Profiles

See the
[Global Settings](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/overview.md)
topic for additional information.

## Discover Hosts for Enterprise Auditor

Within the terminology of Enterprise Auditor, hosts are the machines being targeted during data
collection. Hosts can be discovered or manually introduced to Enterprise Auditor. Known hosts are
then inventoried to populate dynamic host lists. Host discovery is done at the Host Discovery  node.
Hosts are manually introduced at the Host Management node.

Host management consists of maintaining up-to-date host inventories and host lists which can be
assigned to job groups or jobs as targeted hosts. See the
[Host Management](/docs/accessanalyzer/11.6/accessanalyzer/admin/hostmanagement/overview.md)
topic for additional information.

## Enterprise Auditor Job Workflow

Once the global Settings are configured and hosts have been introduced to Enterprise Auditor, it is
time to begin auditing. This requires an understanding of the relationship between solutions, job
groups, jobs, queries, analysis, actions, and reports.

The Enterprise Auditor job is the fundamental unit. Jobs are responsible for all data collection
queries, analysis tasks, notification tasks, action tasks, and report generation. When Jobs are
designed to work together, they are housed within job groups to control the order of job execution.
Solutions are pre-configured job groups which have been designed to target specific types of
environments to audit for specific data sets, typically the most common types of information
desired.

See the [Jobs Tree](/docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/overview.md)
topic for additional information.
