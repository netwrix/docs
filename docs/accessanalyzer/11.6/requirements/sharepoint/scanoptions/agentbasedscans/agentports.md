---
title: "SharePoint Agent Ports"
description: "SharePoint Agent Ports"
sidebar_position: 20
---

# SharePoint Agent Ports

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in Agent-based mode for communication between
Enterprise Auditor and the target host:

| Port    | Protocol | Source                                     | Direction | Target                                     | Purpose                                                                |
| ------- | -------- | ------------------------------------------ | --------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| 1433    | TCP      | Enterprise Auditor Console server          | `<-->`    | SharePoint SQL Server                      | SharePoint SQL Database Connection                                     |
| 445     | TCP      | Enterprise Auditor Console server          | `<-->`    | SharePoint Application Server              | Remote Registry Connection (Only required for Web Application scoping) |
| 389/636 | TCP      | Enterprise Auditor SharePoint Agent server | `<-->`    | LDAP server                                | Agent Authentication                                                   |
| 9876\*  | TCP      | Enterprise Auditor Console server          | `<-->`    | Enterprise Auditor SharePoint Agent server | Enterprise Auditor Agent Communication Channel                         |

\*Configurable value in the SharePoint Access Auditor Data Collector Wizard.
