---
title: "Interactive Reports for Change Management Workflow"
description: "Interactive Reports for Change Management Workflow"
sidebar_position: 20
---

# Interactive Reports for Change Management Workflow

Change management is one of the critical processes for many companies referring to such areas as
requesting, planning, implementing, and evaluating changes to various systems. For your change
management workflow, Netwrix Auditor offers several reports with interactive capabilities – not only
they list changes in your infrastructure but also allow you to track, analyze, assign appropriate
status and comment on these changes.

This capability can supplement your organization's workflow of monitoring and resolving potential
issues through the following automated course of action:

1. The reported changes to the monitored environment are assigned the New status by default.
2. If a change seems unauthorized, or requires further analysis, you can click the Click to update
   status link next to the change detailed data:
   ![reviewstatus_thumb_0_0](/images/auditor/10.8/admin/reports/reviewstatus_thumb_0_0.webp).
   In the **Review status** dialog for the selected change, set its status to In Review and provide a
   reason.
3. Once the change has been approved or rolled back, you can set its status to Resolved.

This capability is supported for the following reports:

| Data source              | Report location                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| Entire IT infrastructure | Organization Level Reports                                                                    |
| Active Directory         | Active Directory → Active Directory Changes → All Active Directory Changes with Review Status |
| Exchange                 | Exchange → All Exchange Server Changes with Review Status                                     |
| SharePoint               | SharePoint → All SharePoint Changes with Review Status                                        |
| Windows Server           | Windows Server → Windows Server Changes → All Windows Server Changes with Review Status       |
| Group Policy             | Active Directory → Group Policy Changes → All Group Policy Changes with Review Status         |

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

They list

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.8/admin/reports/view.md) topic for additional information. You can also create a subscription to any
report you want to receive on a regular basis. See the [Subscriptions](/docs/auditor/10.8/admin/subscriptions/overview.md)
topic for additional information.
