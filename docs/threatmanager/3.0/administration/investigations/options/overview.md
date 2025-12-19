---
title: "Investigation Options"
description: "Investigation Options"
sidebar_position: 10
---

# Investigation Options

Every investigation has the following options at the top of the page:

![Investigation interface showing the options at the top of an investigation](/images/threatmanager/3.0/administration/investigations/options/options.webp)

- Edit – The Edit option opens the Save Investigation window in edit mode. You can modify the name,
  description, and folder of the saved investigation. If you save the investigation to a different
  folder, it will be moved from the original location to the new folder. You can also update the
  user roles granted ownership and access to the investigation report. A My Investigation can also
  be saved as a new Threat in the Investigation Settings page. See the
  [Edit or Duplicate an Investigation](/docs/threatmanager/3.0/administration/investigations/options/edit.md) topic for additional information.
- Create threat – In addition to preconfigured threats, a user can create a custom threat when
  certain events are considered to be dangerous in the environment, for example, when one of the
  privileged users makes file changes. See the [Custom Threats](/docs/threatmanager/3.0/threats/custom.md)topic for
  additional information.
- Subscriptions – Click the Subscriptions link to open the Subscription to window. You can specify
  recipients to receive this report as an email attachment in a specified format. See the
  [Add Subscription](/docs/threatmanager/3.0/administration/investigations/options/subscription.md) topic for additional information.
- Export – The Export option provides choices for how you can export the report results for an
  investigation. The report can be exported in a specified format and can be downloaded, emailed, or
  scheduled as desired. See the [Export Report](/docs/threatmanager/3.0/administration/investigations/options/export.md) topic for additional information.
- Three vertical dot icon has the following options:

    - Copy link – The Copy link option copies the URL of the investigation to your clipboard, so
      that you can share it with users who have access to the report
    - Open as new – The Open as New option opens the investigation in Duplicate mode. The filter is
      the same as that of the base investigation. You can save it as a new investigation. See the
      [Edit or Duplicate an Investigation](/docs/threatmanager/3.0/administration/investigations/options/edit.md) topic for additional information.

- Run Query – The Run Query button pulls available activity data that match the set filters and
  timeframe. The data is displayed on the Event Details, Events Over Time, and Top Resources tabs.
  See the [Investigation Reports](/docs/threatmanager/3.0/administration/investigations/reports.md) topic for additional information.
- Filters – The Filters section provides options to build a filter statement by selecting the
  Attribute, Operator, and Filter value. A time period for the report data is also configured here.
  If multiple data sources have been configured, there is also a Source drop-down menu. See the
  [Filters Section](/docs/threatmanager/3.0/administration/investigations/options/filters.md) topic for additional information.

:::note
For an investigations to return information on user display names, groups, or email
addresses, the Active Directory Service must be running to collect Active Directory data prior to
running an investigation. See the
[Active Directory Sync Page](/docs/threatmanager/3.0/administration/configuration/integrations/activedirectorysync.md) topic for
additional information.
:::


:::note
For an investigation to return information on Entra ID users, groups, roles and
applications, the Entra ID Service must be running to collect Entra ID data before running an
investigation. See the [Entra ID Sync Page](/docs/threatmanager/3.0/administration/configuration/integrations/entraidsync.md) topic
for additional information.

:::
