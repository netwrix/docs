---
title: "Policy Reporting Dashboard"
description: "Policy Reporting Dashboard"
sidebar_position: 60
---

# Policy Reporting Dashboard

The Policy Reporting dashboard displays Threat Prevention events from any enabled policy that sends events to Splunk. The Policy dropdown menu in the upper-left corner shows all enabled Threat Prevention policies sending event data to Splunk in alphanumeric order. When you select a policy, the dashboard cards load the event data from that policy.

The Policy Reporting dashboard contains the following cards:

![Policy Reporting Dashboard](/images/threatprevention/7.5/siemdashboard/splunk/activedirectory/dashboard/policyreporting.webp)

- Activity (Successful/Blocked) – Timeline of successful, failed, or blocked events related to the selected policy in the specified timeframe
- Successful/Blocked Events – Breakdown of events related to the selected policy by successful, failed, or blocked status in the specified timeframe
- Top Perpetrators – Shows the top five usernames related to the selected policy in the specified timeframe
- Events by Domain – Breakdown of events related to the selected policy by domain in the specified timeframe
- Events by Perpetrator – Tabular format of all usernames related to the selected policy for events in the specified timeframe
- Events by Domain – Tabular format of all domains related to the selected policy for events in the specified timeframe
- Events – Tabular format of all events related to the selected policy in the specified timeframe

The timeframe defaults to the last 24 hours (past day).
