# Output Types

Once a domain or a host is being monitored the event stream can be sent to multiple outputs. There
are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server For Monitored Hosts, this options is
  also used to send activity events to Netwrix Threat Manager, where supported
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Access Analyzer (formerly Enterprise Auditor)

  **NOTE:** This output is only available for Monitored Domains

See the [Output for Monitored Domains](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md) topic and the
[Output for Monitored Hosts](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md) topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only
- [Threat Manager Tab](/docs/activitymonitor/8.0/data-collection/outputs/threat-manager.md), Netwrix Threat Manageroutput only

## For Dell Device Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- Application Exclusions Tab
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- Mailbox Exclusions Tab
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Hitachi Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Linux Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [GID Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Nasuni Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For NetApp Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Nutanix Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Panzura Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Qumulo Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For SharePoint Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Objects Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/account-exclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md)
- [Protocols Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md)
- [Process Exclusions Tab](/docs/activitymonitor/8.0/data-collection/filtering/process-exclusions.md)
- [Syslog Tab](/docs/activitymonitor/8.0/data-collection/outputs/syslog.md), Syslog output only
