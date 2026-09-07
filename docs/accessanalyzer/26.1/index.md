---
title: Access Analyzer
description: What Netwrix Access Analyzer does, how its parts fit together, and where to begin.
sidebar_position: 1
---

## What Access Analyzer Is

Netwrix Access Analyzer is a self-hosted web application that you install on a Linux server you own. It scans your file servers, directories, and Microsoft 365 tenant and builds a picture of where sensitive data lives and who can reach it. It belongs to the data security posture management (DSPM) category of products. [Key concepts](key-concepts.md) defines the terms used throughout.

![Access Analyzer Home page with the navigation sidebar and getting-started content](/images/accessanalyzer/26.1/overview/home.webp)

## What It Does

### Sources

Access Analyzer collects permissions and inventory from SMB file servers (the **File Server** source type), Active Directory, Entra ID, and Microsoft 365 (the **SharePoint Online** source type). Each connected system is a source, and most sign in with a [service account](service-accounts/index.md). [Sources](sources/index.md) covers each type.

### Scans and Agents

A scan defines what to collect, from which sources, and when. Access scans inventory shares, folders, files, and sites with their permissions; Sensitive data scans read file content; Identity sync pulls users, groups, and memberships from a directory. Scans run on demand or on a schedule. Every scan runs on an agent: the System agent built into the server, or agents you deploy on other Linux hosts and pick with labels. See [Scans](scans/index.md) and [Agents](agents/index.md).

### Sensitive data

Sensitive data patterns are regular expressions grouped by compliance program or data category, each rated Low, Medium, or High confidence. Access Analyzer ships 139 built-in patterns in 11 groups, and you can add your own. A scan records which patterns matched in a file and how many times, never the matched text. See [Sensitive data patterns](sensitive-data-patterns/index.md).

### Dashboards and reports

Two dashboards, Data security and Active Directory, summarize what your scans have found. Reports under **Data**, **Identity**, and **Compliance** each answer one question, such as which folders have broken permission inheritance or which files contain sensitive data. Both have filters and drill-down. See [Dashboards and reports](dashboards-reports/index.md).

### Activity data

Scans show who can reach data. To see who used that access, connect [Netwrix Activity Monitor](integrations/netwrix-activity-monitor.md), which streams to Access Analyzer the events it records on file servers, SharePoint Online, and Microsoft 365 Copilot. They fill the **Activity** tab of the Data security dashboard and the Activity Investigation report. See [Integrations](integrations/index.md).

### Users and sign-in

Every user holds one of three roles: Admin, User admin, or Viewer. Admins can change anything, User admins manage accounts only, and Viewers have read-only access. People sign in with a local account or, after you connect a directory, with Active Directory or Entra ID credentials. See [Users and roles](settings/users.md) and [Single sign-on](settings/single-sign-on.md) under [Settings](settings/index.md).

## Where to start

Start with [Installation](install/index.md): pick a size, prepare the server, and run the installer. Then [sign in for the first time](install/first-sign-in.md), change the one-time password, and connect a directory or put that off. After that, follow the [Guides](guides/index.md), one per platform, to your first populated dashboard. Before a rollout, read [What's new in 26.1](whats-new.md) and [Known limitations](known-limitations.md).

## Supported browsers

Access Analyzer works in any current browser. It doesn't support Internet Explorer.
