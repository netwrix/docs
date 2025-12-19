---
title: "Output Types"
description: "Output Types"
sidebar_position: 40
---

# Output Types

Once a domain or a host is being monitored the event stream can be sent to multiple outputs. There
are three types of outputs:

- File – Creates an activity log as a TSV or JSON file for every day of activity
- Syslog – Sends activity events to the configured SIEM server For Monitored Hosts, this options is
  also used to send activity events to Netwrix Threat Manager, where supported
- Netwrix Threat Manager (StealthDEFEND) – Sends activity events to Netwrix Threat Manager or
  receives Active Directory monitoring events from Netwrix Threat Prevention for integration with
  Netwrix Access Analyzer (formerly Enterprise Auditor)

    :::note
    This output is only available for Monitored Domains
    :::


See the [Output for Monitored Domains](/docs/activitymonitor/8.0/admin/monitoreddomains/output/output.md) topic and the
[Output for Monitored Hosts](/docs/activitymonitor/8.0/admin/monitoredhosts/output/output.md) topic for information on adding an output.

Output configurations vary based on the type of domain/host selected.

## For Active Directory Domains

Output Properties window has the following tabs:

- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only
- [Threat Manager Tab](/docs/activitymonitor/8.0/admin/outputs/threatmanager.md), Netwrix Threat Manageroutput only

## For Dell Device Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Exchange Online Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- Application Exclusions Tab
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- Mailbox Exclusions Tab
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Hitachi Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Linux Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [GID Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/gidexclusions/gidexclusions.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Microsoft Entra ID Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Nasuni Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For NetApp Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Nutanix Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Panzura Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Qumulo Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For SharePoint Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For SharePoint Online Hosts

Output Properties window has the following tabs:

- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For SQL Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Objects Tab](/docs/activitymonitor/8.0/admin/outputs/objects.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only

## For Windows File Server Hosts

Output Properties window has the following tabs:

- [Account Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/accountexclusions/accountexclusions.md)
- [Additional Properties Tab](/docs/activitymonitor/8.0/admin/outputs/additionalproperties.md)
- [Log Files Tab](/docs/activitymonitor/8.0/admin/outputs/logfiles.md), File output only
- [Operations Tab](/docs/activitymonitor/8.0/admin/outputs/operations/operations.md)
- [Path Filtering Tab](/docs/activitymonitor/8.0/admin/outputs/pathfiltering/pathfiltering.md)
- [Protocols Tab](/docs/activitymonitor/8.0/admin/outputs/protocols.md)
- [Process Exclusions Tab](/docs/activitymonitor/8.0/admin/outputs/processexclusions/processexclusions.md)
- [Syslog Tab](/docs/activitymonitor/8.0/admin/outputs/syslog/syslog.md), Syslog output only
