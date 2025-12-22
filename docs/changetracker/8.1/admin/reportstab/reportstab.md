---
title: "Reports Tab"
description: "Reports Tab"
sidebar_position: 50
---

# Reports Tab

To view all the reports from compliance to the executive summary click on the **Reports** tab.

By default, the CIS compliance reports have been added, but additional report types are available as
detailed later. The **Run** button will run the report which will then be available below the report
for preview. These reports can be scheduled to run at specific times and be delivered via email in a
variety of formats.

To add a new report type, select the report from the dropdown menu and then click the **Add**
button. These reports will be added to a new page on the reports page and may not show until the
browser is refreshed. If you have added a new report and do not see it, make sure to refresh the
page and use the bottom navigation to move to the second page of reports.

## Reports and Queries Tab

All new for Gen7 R2, the **Reports** Tab provides complete control over all report functions.

New reports can be added using the dropdown selector and **+Add** button in the top right hand
corner of the page, or by using the Query/Report button found on the **Events** and **Planned
Change** tabs.

![QueryReportButton](/images/changetracker/8.1/admin/tabs/queryreportbutton.webp)

![ReportsAndQuesriesTab](/images/changetracker/8.1/admin/tabs/reportsandquesriestab.webp)

:::note
Report formatting is controlled by the built-in Compliance reports templates. See the
topic for additional information. You will see that any report has a ‘Results available until xx yy
zz – this retention period is in place to ensure that reports are not stored forever and using
storage resource unnecessarily. Most reports will be emailed at the time of production and either
consumed or stored externally, removing the need to store reports long term at the Change Tracker
Hub. Don’t worry, the events are retained as long as needed, governed by the separate
DaysToKeepEventsFor system setting. See the [System Settings](/docs/changetracker/8.1/admin/settingstab/systemsettings/systemsettings.md) topic
for additional information. Reports can be regenerated at any time if needed at a subsequent future
date.
:::


![ReportsReportViewerDialog](/images/changetracker/8.1/admin/tabs/reportsreportviewerdialog.webp)

## Executive Summary Report

This report shows at a high level the changes in planned vs. unplanned change and compliance. Edit
the report to define the group of interest - this can be all devices or a subset of devices.

## Events Report

The events report will show the same data as is available on the **Events** tab, but in an easy to
consume report format. The options allow for filtering by group or device, date range, event and
change type with a text search option. This reflects the same filtering options that are available
on the side panel filter from the events page.

## Configuration Template Report

This report shows all the monitored items for a given configuration template. This can be used to
prove to an auditor what is currently being monitored for change in the environment.

## Planned Change Report

This report shows all the changes associated with a Planned Change. This could be from manually
added planned changes, FAST approved changes or from an integration with a ticketing system like
ServiceNow.

## Compliance Reports

Compliance reports show the level of compliance to a given standard including CIS, PCI, NIST, etc.
There are two options for previewing or downloading the data, either a full report showing all the
passing/failing tests with remediation guidance, or as a change over time in summary.

To see the full results of the report, click on the **View Report** button for the desired report.
The compliance reports can also be opened from the compliance tab at the top.

The **Report** view shows all rules and results. Report results can also export in either PDF,
Excel, or CSV format. The **Template** selector alongside the **Export** button provides options for
either summarized pass/fail format or full results details format.

See the [Overview Tab](/docs/changetracker/8.1/compliance/complianceoverviewtab.md) topic for additional information.
