---
title: "Sensitive Documents Dashboard"
description: "Sensitive Documents Dashboard"
sidebar_position: 10
---

# Sensitive Documents Dashboard

The dashboard provides a top-level overview of the security classifications tagged against the
content and allows users to drill down into the data to gain visibility of where/what their
sensitive content is. By default, the dashboard shows all classified data. However, users can
customize it for their needs. [See Customize Dashboard for more information.](#customize-dashboard)

**NOTE:** To review the dashboard a user requires the Access Reports permission and must have at
least one Netwrix built-in taxonomy downloaded. See the following sections for more information:

- [Permission Management](/docs/dataclassification/5.6.2/systemconfigurationoverview/users/user_management.md#permission-management)
- [Built-in Taxonomies Overview ](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/standalone_taxonomies.md)

The dashboard is the home page for the administrative web console.

![sensitive_dashboard_thumb_0_0](/images/dataclassification/5.6.2/reporting/sensitive_dashboard_thumb_0_0.webp)

If you want to switch to the dashboard page after doing any other tasks in the administrative web
console, do the following:

- Click the Netwrix Data Classification logo in the upper left corner.

    _OR_

- Locate the Data Analysis top level menu and select Reports:

    ![switch_dashboard](/images/dataclassification/5.6.2/reporting/switch_dashboard.webp)

- Select the Dashboard tab on the left.

**IMPORTANT!** The data for the dashboard automatically updates every 15 minutes. Please note that
refreshing the page will not update the data.

## Review Sensitive Documents Dashboard

The dashboard includes the following sections:

- Total processed files – shows the actual number of the classified files.

    **NOTE:** Folders are not counted.

- Sensitive Files – helps you identify how many files have been tagged at least once in any of
  Netwrix built-in sensitive taxonomies except for the following: File Type, File Size, Language.
  Review the
  [Built-in Taxonomies Overview ](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/standalone_taxonomies.md)
  section for the full list of predefined taxonomies.

    **NOTE:** Custom taxonomies are not counted.

- Sensitive Files by Source (Top 5) – shows the top 5 sources that contain most of your sensitive
  data.
- Sensitive Files by Source Type – shows sensitive content grouped by a source type. This pie chart
  contains all sources in the environment, instead of the previous one.
- Sensitive Files by Taxonomy (Top 5) – shows the top 5 taxonomies that contain most of your
  sensitive data. Use this graph to discover why your data is sensitive. When you hover a taxonomy,
  the number of sensitive files is shown.
- Sensitive Files by Term (Top 10) – shows the top 10 terms that have been tagged. Use this graph to
  see what sensitive data you have in more detail. When you hover a term, the number of sensitive
  files is shown.
- Sensitive Files by Age – this graph is based on the last modified date of a file and can be used
  to see how old your sensitive documents are and how recently files are being changed.

**TIP:** Clicking any dashboard element opens a new tab with the Sensitive Documents report with the
required filters. For example, clicking the Sensitive Files by Age graph opens the report with your
sensitive files ordered with the oldest at the top. Use this report to discover where are your
legacy documents reside. Besides, you can apply filters to narrow the reporting scope.

## Customize Dashboard

By default, the dashboard shows all classified data in your environment. However, users can do one
of the following to look after the desired metrics:

- Apply filters to view live data instantly and narrow classifications scope at a glance
- Save configurations to quickly access required data

To apply filters

1. Select Custom view in the upper left corner of the dashboard.

    ![dashboard_filters_thumb_0_0](/images/dataclassification/5.6.2/reporting/dashboard_filters_thumb_0_0.webp)

2. Select a taxonomy(-ies) and/or a source group(s) you want to see real-time data for.
3. Click Apply Filters to immediately review classified data matching your filtering criteria.

To save configuration

You can build up a few different dashboards for combinations of particular sources you are
interested in or particular taxonomies and save this configuration to quickly access required data
later.

1. Apply custom filters as described above.

    ![dashboard_filters_thumb_0_0](/images/dataclassification/5.6.2/reporting/dashboard_filters_thumb_0_0.webp)

2. Click Save Configuration.

To review saved configurations

1. Switch to Saved view in the upper left corner of the dashboard.
2. In the Load Saved Configurations list, select the required configuration.

This will then load you the latest version of that dashboard.
