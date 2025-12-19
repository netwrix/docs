---
title: "Queued and Custom Reports"
description: "Queued and Custom Reports"
sidebar_position: 70
---

# Queued and Custom Reports

## Queued Reports

When large search exports are run the report may take some time to compile, in this instance the
background processes create the report and make it available for download via the Queued Reports
dashboard. Reports can be deleted prior to, or after, processing as well as downloaded as many times
as necessary.

![queuedreportresult_thumb_0_0](/images/dataclassification/5.7/admin/reporting/queuedreportresult_thumb_0_0.webp)

## Plugins for Custom Reports

While there are a number of reports included in the product by default, it is also expected that
specific business needs may arise that require reporting not covered by the default reports. With
this in mind, you can create custom report using Plugins. Once the custom report plugin is deployed,
the report will appear in the main reports list (with the built-in reports). A sample plugin
incorporates:

- Custom Parameters
- Custom Filters
- Report Sorting
- Paging

Usually, the application communicates with a server running the administration Web console. To
assemble and combine the search results required for reporting, the NDC server will automatically
communicate with the other servers in the cluster.
