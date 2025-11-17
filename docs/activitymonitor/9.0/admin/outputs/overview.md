---
title: "Output Types"
description: "Output Types"
sidebar_position: 40
---

# Output Types

Once a domain or a host/service is being monitored the event stream can be sent to multiple outputs. There
are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity

- Syslog – Sends activity events to the configured SIEM server.
  For file servers, this option is also used to send activity events to Netwrix Threat Manager.
  
- Netwrix Threat Manager – Sends Active Directory activity events to Netwrix Threat Manager

    :::note
    This output type is only available for Monitored Domains
    :::


See the [Output for Monitored Domains](/docs/activitymonitor/9.0/admin/monitoreddomains/output/output.md) topic and the
[Output for Monitored Hosts](/docs/activitymonitor/9.0/admin/monitoredhosts/output/output.md) topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Threat Manager Tab](/docs/activitymonitor/9.0/admin/outputs/threatmanager.md), Netwrix Threat Manager output only

## For File System Hosts

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/9.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/9.0/admin/outputs/protocols.md)
- [Account Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Process Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/processexclusions/processexclusions.md), Windows only
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)

## For Linux Hosts

In addition to common File System tabs, Linux outputs have the following tabs:

- [GID Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/gidexclusions/gidexclusions.md)


## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Account Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/accountexclusions.md)
- Application Exclusions Tab
- Mailbox Exclusions Tab
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)


## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)


## For SharePoint Hosts

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/9.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Account Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Objects Tab](/docs/activitymonitor/9.0/admin/outputs/objects.md)
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/9.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/9.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/9.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/9.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/9.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/9.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/9.0/admin/outputs/syslog/syslog.md), Syslog output only
