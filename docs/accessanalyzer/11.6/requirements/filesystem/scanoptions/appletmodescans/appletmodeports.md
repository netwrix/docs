---
title: "Applet Mode Port Requirements"
description: "Applet Mode Port Requirements"
sidebar_position: 20
---

# Applet Mode Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in applet mode for communication between Enterprise
Auditor and the host:

| Communication Direction                               | Protocol | Ports | Description                              |
| ----------------------------------------------------- | -------- | ----- | ---------------------------------------- |
| Enterprise Auditor Console to Windows Server          | TCP      | 445   | SMB                                      |
| Between Enterprise Auditor Console and Windows Server | TCP      | 8767  | FSAA Applet Certificate Exchange         |
| Between Enterprise Auditor Console and Windows Server | TCP      | 8766  | FSAA Applet HTTPS communication security |

:::note
The FSAA applet https requests configuration port 8766 and the FSAA Applet Certificate
Exchange port 8767 can be customized on the Applet Settings page of the File System Access Auditor
Data Collector Wizard.
:::


:::info
Configure target hosts to respond to ping requests.

:::
