---
title: "SharePoint Agent Ports"
description: "SharePoint Agent Ports"
sidebar_position: 20
---

# SharePoint Agent Ports

The following firewall settings are required for communication between Access Analyzer and the
target host when running Access Auditing (FSAA) and/or Sensitive Data Discovery Auditing scans in
Agent-based mode:

| Port    | Protocol | Source                                  | Direction | Target                                  | Purpose                                                                |
| ------- | -------- | --------------------------------------- | --------- | --------------------------------------- | ---------------------------------------------------------------------- |
| 1433    | TCP      | Access Analyzer Console server          | ↔        | SharePoint SQL Server                   | SharePoint SQL Database Connection                                     |
| 445     | TCP      | Access Analyzer Console server          | ↔        | SharePoint Application Server           | Remote Registry Connection (Only required for Web Application scoping) |
| 389/636 | TCP      | Access Analyzer SharePoint Agent server | ↔        | LDAP server                             | Agent Authentication                                                   |
| 9876\*  | TCP      | Access Analyzer Console server          | ↔        | Access Analyzer SharePoint Agent server | Access Analyzer Agent Communication Channel                            |

\*Configurable value in the SharePoint Access Auditor Data Collector Wizard.
