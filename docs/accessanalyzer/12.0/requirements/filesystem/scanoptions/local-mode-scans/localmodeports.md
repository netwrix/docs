---
title: "Local Mode Port Requirements"
description: "Local Mode Port Requirements"
sidebar_position: 20
---

# Local Mode Port Requirements

The following are the firewall settings are required when executing the Access Auditing (FSAA)
and/or Sensitive Data Discovery Auditing scans in local mode for communication between Access
Analyzer and the target host:

| Communication Direction                       | Protocol | Ports | Description |
| --------------------------------------------- | -------- | ----- | ----------- |
| Access Analyzer Console to File Server/Device | TCP      | 445   | SMB         |

## Additional Firewall Rules for NetApp Data ONTAP Devices

The NetApp communication security is configured on the Scan Settings page of the File System Access
Auditor Data Collector Wizard. One additional firewall setting is required when targeting either a
NetApp Data ONTAP 7-Mode device or a NetApp Data ONTAP Cluster-mode device. The required setting is
dependent upon how the NetApp communication security option is configured:

| Communication Direction                  | Protocol | Ports | Description                         |
| ---------------------------------------- | -------- | ----- | ----------------------------------- |
| Access Analyzer Console to NetApp Device | TCP      | 80    | HTTP NetApp communication security  |
| Access Analyzer Console to NetApp Device | TCP      | 443   | HTTPS NetApp communication security |
