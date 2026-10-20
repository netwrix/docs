---
title: Coming From Access Analyzer Classic
description: How the concepts you know from Access Analyzer Classic, such as hosts, host lists, Connection Profiles, jobs, and proxy servers, map to sources, labels, service accounts, scans, and agents in Access Analyzer 26.1.
sidebar_position: 3.5
---

If you've administered Access Analyzer Classic, the Windows console product, most of what you did there has a counterpart in Access Analyzer 26.1 under a different name. This page maps each Access Analyzer Classic concept to its Access Analyzer equivalent, notes what works differently, and links to the page that covers it. [Key concepts](key-concepts.md) defines each Access Analyzer term on its own.

Access Analyzer doesn't convert an Access Analyzer Classic installation. Data that Access Analyzer Classic collected stays in its own database, and Access Analyzer starts collecting from its first scan.

## Concept Mapping

| Access Analyzer Classic (Windows) | Access Analyzer (Linux) | What's different |
|---|---|---|
| Host | [Source](sources/index.md) | A source is one system that Access Analyzer scans, and its source type is **File Server**, **Active Directory**, **Entra ID**, or **SharePoint Online**. A File Server source covers a Windows, NetApp, Dell PowerScale, or Nutanix Files server. |
| Host List | [Labels](sources/labels.md) on sources, or a scan's list of **Specific sources** | There are no host lists. A scan targets either a fixed list of sources (**Specific sources**) or every source that carries a set of `key=value` labels (**Sources matching labels**). A label rule picks up sources labeled later, much like a dynamic host list. |
| Host Discovery and Host Inventory | [Add sources](sources/index.md) or [import them from a CSV file](sources/import-sources.md) | Access Analyzer doesn't discover hosts. You add each source yourself, or add many at once from a CSV file. |
| Connection Profile | [Service account](service-accounts/index.md) | A service account holds one credential, and its type must match the source type. Passwords don't carry over from Access Analyzer Classic, so you enter each one again when you create the service account. After you save it, Access Analyzer never shows or exports the password, secret, or key. |
| Job, Job Group, and Data Collector | [Scan](scans/index.md) | A scan names one scan type, its target sources, its settings, an agent, and a schedule. There are no job groups or per-job queries; the scan type decides what the scan collects. |
| FSAA, SPAA, ADInventory, and AzureADInventory Data Collectors | [Scan types](scans/scan-types.md) | An **Access scan** collects shares, folders, files, sites, and their permissions from File Server and SharePoint Online sources. A **Sensitive data scan** reads file content on the same source types. An **Identity sync** collects users, groups, and memberships from Active Directory and Entra ID sources. |
| Sensitive Data Discovery (SDD) criteria | [Sensitive data patterns](sensitive-data-patterns/index.md) and pattern groups | A pattern is a regular expression, and a pattern group collects related patterns. A Sensitive data scan runs every pattern in the groups you select. |
| Schedule | [Schedule](scans/schedules.md) on the scan | A scan is manual or runs **Hourly**, **Daily**, **Weekly**, or **Monthly** at a start time. There's no Windows Task Scheduler and no Schedule Service Account, so pick the frequency closest to the old trigger. |
| Proxy Server and Applet | [Agent](agents/index.md) | An agent is a Linux machine that runs scans. Every installation has the System agent on the Access Analyzer server, and every scan of any source type runs there unless you route it elsewhere. To add an agent, you generate an install command on the Agents page and run it on the host. Scans pick an agent by [agent label](agents/agent-labels.md). |
| Storage Profile | No equivalent | Access Analyzer stores what it collects on its own server, so there's no database to set up or point it at. |
| ADActivity Data Collector and file system activity tables | [Netwrix Activity Monitor integration](integrations/netwrix-activity-monitor.md) | An Activity Monitor agent sends events to Access Analyzer as they happen, instead of Access Analyzer reading activity log files. Dashboards and reports show file server, SharePoint Online, and Microsoft 365 Copilot activity; none of them shows Active Directory activity. |
| Analysis Tasks, Action Modules, and reports | [Dashboards and reports](dashboards-reports/index.md) | Access Analyzer ships built-in dashboards and reports that read scan results directly. There are no analysis or action steps to configure. |
| Published Reports and the Web Console | [Dashboards and reports](dashboards-reports/index.md) in the Access Analyzer web interface | Every user signs in to the same web application in a browser. There's no separate console to install. |
| Role Based Access | [Role](settings/users.md) | Each user holds one of three roles: **Admin**, **User admin**, or **Viewer**. |

## Related Pages

- [Key concepts](key-concepts.md)
- [Import sources from a CSV file](sources/import-sources.md)
- [Service accounts](service-accounts/index.md)
- [Scans](scans/index.md)
- [Agents](agents/index.md)
