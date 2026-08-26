---
title: "Queued and Custom Reports"
description: "Queued and Custom Reports"
sidebar_position: 40
---

# Queued and Custom Reports

## Queued Reports

When large search exports are run the report may take some time to compile, in this instance the
background processes create the report and make it available for download via the Queued Reports
dashboard. Reports can be deleted before, or after, processing as well as downloaded as many times
as necessary.

![queuedreportresult_thumb_0_0](/images/dataclassification/5.6.2/reporting/queuedreportresult_thumb_0_0.webp)

## Plugins for Custom Reports

While the product includes a number of reports by default, you may have specific business needs that require reporting not covered by the default reports. You can create custom reports using Plugins. After you deploy the custom report plugin, it appears in the main reports list alongside the built-in reports. A sample plugin
incorporates:

- Custom Parameters
- Custom Filters
- Report Sorting
- Paging

Usually, the application communicates with a server running the administration Web console. To
assemble and combine the search results that reporting requires, the NDC server automatically communicates with the other servers in the cluster.
