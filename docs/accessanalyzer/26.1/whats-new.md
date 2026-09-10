---
title: What's New in 26.1
description: A tour of what you can do in Access Analyzer 26.1, from installation to dashboards, reports, and the Netwrix Activity Monitor integration.
sidebar_position: 2
---

Access Analyzer 26.1 is a web application that runs on a Linux server you own, instead of a desktop console. You install it once, open it in a browser, and every administrator works in the same place.

Here is what you can do, area by area.

## Installation

One installer binary sets up the whole product on a single Linux server. You pick a size (small, medium, large, or enterprise) and supply a TLS certificate for the server's hostname. The installer prints a temporary password for the first administrator, who changes it at first sign-in and can optionally connect Active Directory or Entra ID then or later. See [Installation](install/index.md).

## Sources

A source is a system Access Analyzer scans: File Server, Active Directory, Entra ID, or SharePoint Online. You can tag sources with `key=value` labels such as `env=production` to filter the list and to point scans at every source that matches, and import many at once from a CSV file. See [Sources](sources/index.md).

## Service Accounts

A Service Account is a saved credential for reading a source or deploying an agent: Username/password, Client ID/secret, Client ID/certificate, or SSH username/key. For a certificate account, Access Analyzer can generate a self-signed certificate valid for one year, or you can upload your own. Access Analyzer never displays a secret again after you save it. See [Service Accounts](service-accounts/index.md).

## Agents

An Agent is a Linux machine that _runs_ your Access Scans. The System agent on the Access Analyzer server is there from the start. To reach a segmented network or keep scan traffic local, deploy more agents over SSH and route scans to them with labels. See [Agents](agents/index.md).

## Scans

A Scan says:
1. what to collect
2. from which source
3. on which agent
4. and when

An Access Scan inventories shares, folders, files (and their metadata), sites, and their permissions. A Sensitive Data Scan classifies file content against sensitive data patterns. An Identity Sync pulls users, groups, and memberships from a directory service. A Scan targets specific sources or every source matching a set of labels, and runs on demand or on an hourly, daily, weekly, or monthly schedule. Each run creates one execution per source, which you can pause, resume, or stop; completed executions stay in the history for 90 days. See [Scans](scans/index.md).

## Sensitive Data Patterns

Sensitive Data Patterns are regular expressions that you can group by compliance program, data category, or any other system you choose. Add your own patterns and groups, place custom patterns in built-in groups, and test any pattern against sample text before saving. See [Sensitive data patterns](sensitive-data-patterns/index.md).

## Dashboards and Reports

Two dashboards give the wide view: Data security for File Server and SharePoint Online sources, and Active Directory for your domain. Reports answer one question at a time on three pages: Data, Identity, and Compliance. Both open in a single view with filters. See [Dashboards and reports](dashboards-reports/index.md).

## Settings

Settings holds what applies to the whole application: classification and Netwrix Activity Monitor defaults, feature flags, and user accounts with the Admin, User admin, and Viewer roles. People sign in with local accounts, and you can connect Active Directory or Entra ID alongside them. Daily backups of the configuration database go to local disk or S3-compatible storage, and System logs gathers logs from every component. See [Settings](settings/index.md).

## Netwrix Activity Monitor Integration

Netwrix Activity Monitor records who did what on file servers, in SharePoint Online, in Microsoft 365 Copilot, and more. Connect it and that activity feed streams into Access Analyzer so you can see which users touched sensitive files on an open share. Enrollment is one step: generate an enrollment token in Settings and enter it in the Activity Monitor agent with the server address and port 4504. See [Netwrix Activity Monitor](integrations/netwrix-activity-monitor.md).
