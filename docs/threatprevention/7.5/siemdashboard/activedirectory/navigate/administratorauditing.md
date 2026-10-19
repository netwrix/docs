---
title: "Administrator Auditing Dashboard"
description: "Administrator Auditing Dashboard"
sidebar_position: 40
---

# Administrator Auditing Dashboard

The Administrator Auditing dashboard is specifically fed by a Threat Prevention policy named Domain
Admin Activity. See the [SIEM Folder Templates](/docs/threatprevention/7.5/admin/templates/folder/siem.md) topic
for information on this policy template. The dashboard is blank if this policy template isn't enabled and monitoring.

![Administrator Auditing Dashboard](/images/threatprevention/7.5/siemdashboard/splunk/activedirectory/dashboard/administratorauditing.webp)

- Top Client IPs – Shows the top five client IP addresses associated with events in the specified timeframe
- Events – Breakdown of changes by successful, failed, or blocked status in the specified timeframe
- Most Active Administrators – Shows the top five usernames associated with change events in the specified timeframe
- All Administrator Activity – Tabular format of all events in the specified timeframe
- Administrator Group Changes – Tabular format of all group changes to the Domain, Schema, and Enterprise Admin groups in the specified timeframe

The timeframe defaults to the last 24 hours (past day).
