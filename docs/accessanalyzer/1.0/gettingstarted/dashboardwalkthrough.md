---
title: "Overview Dashboard Walkthrough"
description: "Navigating the main dashboard and key metrics"
sidebar_position: 30
---

# Overview Dashboard Walkthrough

After signing in, Access Analyzer displays the main interface with a sidebar navigation menu and a central content area. This page introduces the key areas of the application.

## Sidebar Navigation

The sidebar provides access to all major sections:

| Section | Description |
| --- | --- |
| **Dashboards** | Pre-built Metabase dashboards for data security posture and identity analysis |
| **Reports** | Access, content, activity, and sensitive data reports |
| **Configuration** | Sources, scans, scan executions, and sensitive data settings |
| **Service Accounts** | Manage credentials used to connect to data sources |
| **Administration** | User management and system logs (administrator only) |
| **Settings** | Application-wide settings |

## Dashboards

The **Dashboards** section contains embedded Metabase dashboards that provide a visual summary of your environment:

- **Data Security Dashboard** — Overview of sensitive data findings, file statistics, and framework coverage
- Additional dashboards become available as you add data sources and run scans

Dashboards update automatically after each scan execution.

## Configuration Section

The **Configuration** section is where most of the day-to-day work happens:

- **Sources** — Add and manage the data sources and identity providers Access Analyzer connects to
- **Scans** — Create, schedule, and manage access scans and sensitive data scans
- **Scan Executions** — View the history of scan runs, including status, duration, and progress
- **Sensitive Data** — Configure the detection frameworks and patterns used during sensitive data scans

## Next Steps

- [Your First Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/overview) — Follow the step-by-step guide to add a source, configure a scan, and review results
