---
title: "Reporting"
description: "Reporting"
sidebar_position: 110
---

# Reporting

Access Analyzer provides the ability to report on collected data in multiple ways such as tables,
views, graphs, and emails. Depending on the type of data collected, different reporting methods can
simplify how to present and understand the information.

![Reports node](/images/accessanalyzer/12.0/admin/report/reports.webp)

The Reports node, contained within a job’s Configure node, lists any reports that are configured for
the job. The page contains options to create a report, configure existing reports, and a link to
view generated reports. The configuration of reports vary by use case, but they contain the same
elements. The layout and elements of a report are configured using the
[Report Configuration Wizard](/docs/accessanalyzer/12.0/admin/report/wizard/overview.md).

In addition, there are various ways to view and interact with generated reports. Generated reports
can be viewed in the Access Analyzer Console or in the Web Console. Reports can also be configured
to be downloaded as a CSV file, or sent as an email in various forms. See the
[Viewing Generated Reports](/docs/accessanalyzer/12.0/admin/report/view.md) topic for additional information.

The global settings configured under the Settings node are inherited down through the Jobs tree to
the job unless inheritance is broken in a job group’s Settings node, a job’s Properties window, or
in the Report Configuration Wizard. See the [Reporting](/docs/accessanalyzer/12.0/admin/settings/reporting.md) topic for
additional information.
