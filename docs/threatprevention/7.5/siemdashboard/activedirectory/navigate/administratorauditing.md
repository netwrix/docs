---
title: "Administrator Auditing Dashboard"
description: "Administrator Auditing Dashboard"
sidebar_position: 40
---

# Administrator Auditing Dashboard

The Administrator Auditing dashboard is specifically fed by a Threat Prevention policy named Domain
Admin Activity. See the [SIEM Folder Templates](/docs/threatprevention/7.5/admin/templates/folder/siem.md) topic
for information on this policy template. If this policy template is not enabled and actively
monitoring, then this dashboard will be blank.

![Administrator Auditing Dashboard](/images/threatprevention/7.5/siemdashboard/splunk/activedirectory/dashboard/administratorauditing.webp)

- Top Client IPs – Displays up to the top five (5) client IP addresses related to events that have
  been recorded in the specified timeframe
- Events – Breakdown of changes that have been recorded in the specified timeframe by
  successful/failed/blocked status
- Most Active Administrators – Displays up to the top five (5) usernames related to change events
  that have been recorded in the specified timeframe
- All Administrator Activity – eTabular format of all events that have been recorded in the
  specified timeframe
- Administrator Group Changes – Tabular format of all group changes to the Domain, Schema, and
  Enterprise Admin groups that have been recorded in the specified timeframe

The specified timeframe is set by default to the last 24 hours, or past day.
