---
title: "Investigation Options"
description: "Investigation Options"
sidebar_position: 10
---

# Investigation Options

You can view a saved investigation.

Click **Investigate** in the application header bar to open the Investigations interface. Then click
a folder in the navigation pane to access a saved investigation. An investigation is located in the
folder where it was saved.

![Options available for an Investigation](/images/threatprevention/7.4/reportingmodule/investigations/options/investigationoptions.webp)

Every investigation has the following options at the top of the page:

- Edit – The Edit option opens the Save Investigation window in edit mode. You can modify the name,
  description, and folder of the saved investigation. If you save the investigation to a different
  folder, it will be moved from the original location to the new folder. You can also update the
  user roles granted ownership and access to the investigation report. See the
  [Edit or Duplicate an Investigation](/docs/threatprevention/7.4/reportingmodule/investigations/options/edit.md)
  topic for additional information.
- Subscriptions – Click the Subscriptions link to open the Subscription to window. You can specify
  recipients to receive this report as an email attachment in a specified format. See the
  [Add Subscription](/docs/threatprevention/7.4/reportingmodule/investigations/options/subscription.md)
  topic for additional information.
- Export – The Export option provides choices for how you can export the report results for an
  investigation. The report can be exported in a specified format and can be downloaded, emailed, or
  scheduled as desired. See the Export Report topic for additional information.
- Click the three dots to open a menu with the following options:

  - Copy link – The Copy link option copies the URL of the investigation to your clipboard, so
    that you can share it with users who have access to the report
  - Open as new – The Open as New option opens the investigation in Duplicate mode. The filter is
    the same as that of the base investigation. You can save it as a new investigation. See the
    [Edit or Duplicate an Investigation](/docs/threatprevention/7.4/reportingmodule/investigations/options/edit.md)
    topic for additional information.
  - Delete – This option is available for a custom investigation. It is not possible to delete an
    out-of-the-box investigation.

- Run Query – The Run Query button pulls available activity data that match the set filters and
  timeframe. The data is displayed on the Event Details, Events Over Time, and Top Resources tabs.
  See the
  [Investigation Reports](/docs/threatprevention/7.4/reportingmodule/investigations/reports/reports.md)
  topic for additional information.
- Filters – The Filters section provides options to build a filter statement by selecting the
  Attribute, Operator, and Filter value. A time period for the report data is also configured here.
  If multiple data sources have been configured, there is also a Source drop-down menu. See the
  [Filters Section](/docs/threatprevention/7.4/reportingmodule/investigations/options/filters.md)
  topic for additional information.

:::note
For an investigations to return information on user display names, groups, or email
addresses, the StealthDEFEND Active Directory Service must be running to collect Active Directory
data prior to running an investigation. See the
[Active Directory Sync Page](/docs/threatprevention/7.4/reportingmodule/configuration/integrations/activedirectorysync.md)
topic for additional information.

:::
