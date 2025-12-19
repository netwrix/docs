---
description: >-
  This article lists the event IDs that Netwrix Access Analyzer logs, and shows
  which actions generate each event and their task categories.
keywords:
  - Access Analyzer
  - event ID
  - event log
  - Netwrix Access Analyzer
  - audit
  - job
  - group
  - global settings
  - task category
products:
  - access-analyzer
sidebar_label: Access Analyzer Event Log IDs
tags:
  - reference-and-technical-specifications
title: "Access Analyzer Event Log IDs"
knowledge_article_id: kA04u0000000ItqCAE
---

# Access Analyzer Event Log IDs

## Summary
**Summary:** This is a listing of events within Netwrix Access Analyzer.

## Instructions

| Category | Case | Logged? | Comments | EventID | Task Category |
|---|---|---:|---|---:|---|
| Launching Console | Opening Access Analyzer | Yes |  | 1000 | Role Based Access |
|  | failure of scheduled task to launch | Yes |  | 1001 | Role Based Access |
| Role Modifications | Add Role | Yes |  | 1002 | Role Based Access |
|  | Delete Role | Yes |  | 1002 | Role Based Access |
|  | Modify Role | Yes |  | 1002 | Role Based Access |
|  | Closing Access Analyzer | Yes |  | 1003 | Role Based Access |
|  | Job Locked | Yes |  | 1100 | Job |
| Job Scheduling Modifications | Job Scheduled | Yes |  | 1102 | Job |
|  | schedule deleted | Yes |  | 1103 | Job |
|  | Job Schedule Modification | Yes |  | 1104 | Job |
| Job/Group Executions | Job Execution | Yes |  | 1105 | Job |
| Job Deletes | Job Delete | Yes |  | 1106 | Job |
| Job and Group Properties/settings Modifications | Job Renamed | Yes |  | 1107 | Job |
|  | Move | Yes |  | 1108 | Job |
| Job Adds | Create Job | Yes |  | 1110 | Job |
|  | Add Table | Yes |  | 1111 | Job |
| Job Query Modifications | Create Query | Yes |  | 1111 | Job |
|  | Modify Job Query | Yes |  | 1111 | Job |
|  | Delete Query | Yes |  | 1111 | Job |
|  | Add Host | Yes |  | 1112 | Job |
|  | Modify Job>Properties (all tabs) | Yes |  | 1112 | Job |
|  | Add Report | Yes |  | 1112 | Job |
|  | Delete Report | Yes |  | 1112 | Job |
|  | Paste | Yes |  | 1112 | Job |
|  | Add Analysis | Yes |  | 1113 | Job |
|  | Modify Analysis | Yes |  | 1113 | Job |
|  | Delete Analysis | Yes |  | 1113 | Job |
|  | Job Completion | Yes |  | 1114 | Job |
| Jobs Cut/Copy/Paste | Cut | Yes |  | 1116 | Job |
|  | Copy | Yes |  | 1117 | Job |
| Global Settings Modifications | Modify History Settings | Yes |  | 1200 | Global Settings |
|  | Modify Notification Settings | Yes |  | 1200 | Global Settings |
|  | Modify Reporting Settings | Yes |  | 1200 | Global Settings |
|  | Modify Exchange Settings | Yes |  | 1200 | Global Settings |
|  | Modify Host Discovery Settings | Yes |  | 1200 | Global Settings |
|  | Modify Host Inventory Settings | Yes |  | 1200 | Global Settings |
|  | Modify Other Settings | Yes |  | 1200 | Global Settings |
|  | Set as Default (SP) | Yes |  | 1200 | Global Settings |
|  | Add SP | Yes |  | 1201 | Global Settings |
|  | Delete SP | Yes |  | 1201 | Global Settings |
|  | Modify SP | Yes |  | 1201 | Global Settings |
| Connection/Storage Profile Modifications | Add CP | Yes |  | 1202 | Global Settings |
|  | Delete CP | Yes |  | 1202 | Global Settings |
|  | Set as Default (CP) | Yes |  | 1202 | Global Settings |
|  | Add Credential | Yes |  | 1202 | Global Settings |
|  | Delete Credential | Yes |  | 1202 | Global Settings |
|  | Use 'Trusted' credentials checkbox | Yes |  | 1202 | Global Settings |
| Host List Operations | Add Hosts | Yes |  | 1203 | Global Settings |
|  | Save Selected to List | Yes |  | 1203 | Global Settings |
|  | Schedule | Yes |  | 1205 | Global Settings |
| Host Discovery/Inventory Queries | Create Query | Yes |  | 1206 | Global Settings |
|  | Edit Query | Yes |  | 1207 | Global Settings |
|  | Delete Query | Yes |  | 1208 | Global Settings |
|  | Run Query | Yes |  | 1209 | Global Settings |
|  | Modify Report | Yes |  | 1215 | Job |
|  | Modify Group Settings | Yes |  | 1300 | Group |
|  | Group Execution | Yes |  | 1301 | Group |
|  | Group Delete | Yes |  | 1302 | Group |
|  | Group Creation | Yes |  | 1303 | Group |
|  | Group Renamed | Yes |  | 1304 |  |
|  | Group Locked | Yes |  | 1305 | Group |
|  | group scheduled | Yes |  | 1307 | Group |

## Module and Version
**Module:** Netwrix Access Analyzer - Core  
**Versions:** `6.3+`  
**Legacy Article ID:** `1111`
