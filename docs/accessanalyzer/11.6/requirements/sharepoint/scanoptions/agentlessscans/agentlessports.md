---
title: "SharePoint Agent-Less Ports"
description: "SharePoint Agent-Less Ports"
sidebar_position: 20
---

# SharePoint Agent-Less Ports

One of the following ports must be open for communication between Enterprise Auditor and the
SharePoint Online environment:

| Port | Protocol | Source                            | Direction | Target                        | Purpose             |
| ---- | -------- | --------------------------------- | --------- | ----------------------------- | ------------------- |
| 80   | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTP Communication  |
| 443  | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Online Environment | HTTPS Communication |

The following ports must be open for communication between Enterprise Auditor and the SharePoint
on-premise environment:

| Port    | Protocol | Source                            | Direction | Target                        | Purpose                            |
| ------- | -------- | --------------------------------- | --------- | ----------------------------- | ---------------------------------- |
| 1433    | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint SQL Server         | SharePoint SQL Database Connection |
| 445     | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Application Server | Remote Registry Connection         |
| 389/636 | TCP      | Enterprise Auditor Console server | `<-->`    | LDAP server                   | Authentication                     |
| 80      | TCP      | Enterprise Auditor Console server | `<-->`    | SharePoint Application Server | StealthAUDIT Communication Channel |
