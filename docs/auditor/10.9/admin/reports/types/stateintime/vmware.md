---
title: "VMware State-In-Time Reports"
description: "VMware State-In-Time Reports"
sidebar_position: 50
---

# VMware State-In-Time Reports

These are reports on the VMware vCenter state-in-time data, including account permissions and object
permissions:

- Account Permissions in vCenter
- Detailed Account Permissions in vCenter
- Object Permissions in vCenter

To instruct Netwrix Auditor to collect data needed for these reports, make sure that **Collect data
for state-in-time reports** option is selected in the corresponding monitoring plan properties. See
the [Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for more information.

## Account Permissions in vCenter

Shows vCenter objects that user or group has explicit or inherited permissions on (either granted
directly or through group membership). Use this report to see who has permissions to what and
prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.9/configuration/vmware/overview.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.9/admin/monitoringplans/vmware/overview.md)
- Item — name of the item within your monitoring plan.
- Inherited — select whether to show inherited permissions or not.
- Role – select the name of the VMware role you want to see in the report.
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a Object path link opens the Object Permissions in vCenter report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.

## Detailed Account Permissions in vCenter

Shows detailed list of privileges that the specified account has on the VMware objects. Use this
report to prevent unnecessary privileges assigned to custom roles.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.9/configuration/vmware/overview.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.9/admin/monitoringplans/vmware/overview.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- Object path — path to the monitored object, as formatted by Netwrix Auditor in the activity
  records.
- User (domain\account) – select a specific user to be displayed in the report.
- Inherited — select whether to show inherited permissions or not.

## Object Permissions in vCenter

Shows accounts with explicit or inherited permissions on a specific object in your vCenter (either
granted directly or through group membership). Use this report to see who has permissions to what
and prevent rights elevation.

Supported object types and attributes are listed in the
[VMware](/docs/auditor/10.9/configuration/vmware/overview.md) topic.

For this report to function properly, you must enable the **Collect data for state-in-time reports**
option for the data source in the monitoring plan settings. See the
[Settings for Data Collection](/docs/auditor/10.9/admin/monitoringplans/create.md#settings-for-data-collection)
topic for more information.

### Filters

You can narrow your reporting scope using multiple filters. Review the full list of available
filters and values:

- **Monitoring plan** — name of the monitoring plan set to collect data from the AD domain you need.
- Time zone — is set automatically.
- **Snapshot date** —select the date of state-in-time snapshot you want to report on. By default,
  the report includes data obtained during the latest data collection session (_Current Session_).
  To report on other snapshots, make sure they are available through import. For details, see
  **Manage historical snapshots** option description in
  [VMware](/docs/auditor/10.9/admin/monitoringplans/vmware/overview.md)
- Item — name of the item within your monitoring plan.
- Role – select the name of the VMware role you want to see in the report.
- **Object path** —path to the monitored object, as formatted by Netwrix Auditor in the activity
  records .
- User (domain\account) – select a specific user to be displayed in the report.

### Related Reports

- Clicking a User account link opens the Account Permissions in vCenter report.
- Clicking a Role link opens the detailed report on privileges for the account report.
- Clicking the Defined in link opens the object permissions on vCenter level report.
