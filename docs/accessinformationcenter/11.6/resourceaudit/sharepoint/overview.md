---
title: "SharePoint Reports"
description: "SharePoint Reports"
sidebar_position: 30
---

# SharePoint Reports

SharePoint reports are accessed through the Resource Audit interface. Explore the SharePoint
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Enterprise Auditor SharePoint solution. See the
SharePoint Solution topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

SharePoint resource reports identify the following information in the targeted SharePoint on-premise
farms and SharePoint Online instances:

- What web applications, sites, lists, and libraries exist across the organization
- What permissions users and groups have on sites, lists, and libraries
- How it all translates into effective access
- What users are doing on SharePoint sites, lists, and libraries
- What potentially sensitive data exists across the targeted environment

SharePoint reports fall into the following categories:

- Access Reports

    - Report on permissions, effective access, and exceptions
    - Data collected by the Enterprise Auditor SharePoint Access Auditing collection jobs

- Activity Reports

    - Report on monitored activity
    - Data collected by the Enterprise Auditor SharePoint Activity Auditing collection jobs
    - Display information for a selected date range with local time stamps
    - Some of the reports also include trend graphs. Trend graphs provide a visual representation of
      the activity that occurred over the selected date range. See the
      [Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resourceaudit/navigate/overview.md#activity-report-results-pane-features)
      topic for instructions on selecting a date range and filtering the trend graphs.
    - Activity information is represented in two ways:

        - Activity Statistics – Statistics reports show the count of operation events performed for
          the selected resource within the selected date range. These events are normalized into the
          operations of Reads, Writes, Deletes, and Manages.
        - Activity Details – Details reports show the specific operation events that occurred for
          the selected resource within the selected date range

- Sensitive Data Content Reports

    - Report on files with potentially sensitive data
    - Data collected by the Enterprise Auditor SharePoint Sensitive Data Discovery Auditing
      collection jobs

The following reports are available at the **SharePoint** node and provide information for both
SharePoint on-premise farms and SharePoint Online instances:

- [Exceptions Report](/docs/accessinformationcenter/11.6/resourceaudit/sharepoint/exceptions.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/sharepoint/sensitivecontentsummary.md)
- [Server Summary Report](/docs/accessinformationcenter/11.6/resourceaudit/sharepoint/serversummary.md)
