---
title: "What's New in Netwrix Auditor v10.9"
description: "New features and enhancements in Netwrix Auditor v10.9"
sidebar_position: 2
---

# What's New in Netwrix Auditor v10.9

## User Activity Monitoring Enhancements

### Computer Exclusions in User Activity Monitoring Plans

Netwrix Auditor now allows administrators to exclude specific computers within a monitored OU from User Activity Monitoring data collection. This eliminates recurring errors and warnings caused by inaccessible or irrelevant machines – such as cluster nodes or virtual machine accounts – without requiring AD restructuring or disabling the monitoring plan.

See [Excluding Computers from User Activity Monitoring](/docs/auditor/10.9/admin/monitoringplans/useractivity/excluding-computers-uam.md) for additional information.

## Per-Host Visibility in Windows Server Monitoring Plans

Netwrix Auditor now provides per-host monitoring status for Windows Server monitoring plans. When computers are added via IP ranges or AD containers, the new Monitored Computers tab lists each resolved host individually with its health status, component-level details, and direct access to the Health Log for troubleshooting. See [Monitored Computers](/docs/auditor/10.9/admin/monitoringplans/windows/monitoredcomputers.md) for additional information.
