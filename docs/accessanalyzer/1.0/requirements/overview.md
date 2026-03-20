---
title: "Requirements"
description: "System, database, and connector requirements for Access Analyzer"
sidebar_position: 1
---

# Requirements

This section covers all prerequisites for deploying and operating Netwrix Access Analyzer.

## System Requirements

The Access Analyzer VM must meet minimum hardware, operating system, and kernel requirements. The installer validates these automatically during [preflight checks](/docs/accessanalyzer/1_0/install/preflight).

- [Kubernetes and Operating System](/docs/accessanalyzer/1_0/requirements/system/kubernetes) — OS version, kernel, and K3s details
- [Hardware and Resource Allocation](/docs/accessanalyzer/1_0/requirements/system/hardware) — CPU, memory, disk, and virtualization
- [Network and Port Requirements](/docs/accessanalyzer/1_0/requirements/system/network) — Outbound endpoints, internal ports, and firewall rules

## Database Requirements

All databases are automatically provisioned by the installer. No manual database setup is required.

- [PostgreSQL](/docs/accessanalyzer/1_0/requirements/database/postgresql) — Primary relational database
- [ClickHouse](/docs/accessanalyzer/1_0/requirements/database/clickhouse) — Analytics and observability database
- [Redis](/docs/accessanalyzer/1_0/requirements/database/redis) — Session cache and job queues

## Connector Requirements

Each connector type has specific requirements for authentication, network access, and permissions on the target system.

- [CIFS / SMB File Share](/docs/accessanalyzer/1_0/requirements/connectors/cifs) — SMB file share scanning
- [SharePoint Online](/docs/accessanalyzer/1_0/requirements/connectors/sharepointonline) — SharePoint site scanning
- [Active Directory](/docs/accessanalyzer/1_0/requirements/connectors/activedirectory) — AD identity synchronization
- [Entra ID](/docs/accessanalyzer/1_0/requirements/connectors/entraid) — Entra ID connection testing
- [Local Groups](/docs/accessanalyzer/1_0/requirements/connectors/localgroups) — Local group enumeration
