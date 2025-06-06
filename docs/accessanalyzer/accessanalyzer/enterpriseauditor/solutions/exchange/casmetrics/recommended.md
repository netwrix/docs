# Recommended Configurations for the 2. CAS Metrics Job Group

Dependencies

The following job groups need to be successfully run:

- .Active Directory Inventory Job Group
- .Entra ID Inventory Job Group

Targeted Hosts

The 0. Collection Job Group has been set to run against the following default dynamic host list:

- Exchange CAS Servers

The EX\_ASPolicies Job has been set to run against the following default dynamic host list:

- Exchange MB Servers

__NOTE:__ Default dynamic host lists are populated from hosts in the Host Master Table which meet the host inventory criteria for the list. Ensure the appropriate host lists have been populated through host inventory results.

___RECOMMENDED:___ Modify hosts lists only in the 0. Collection Job Group or EX\_ASPolicies Job.

Connection Profile

A Connection Profile must be set directly on the EX\_IISLogs Job and the EX\_ASPolicies Job.

See the [Exchange Remote Connections Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/remoteconnections.md) topic for the EX\_IISLogs Job required permissions. See the [Exchange PowerShell Permissions](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/solutions/exchange/powershell.md) topic for the EX\_ASPolicies Job requirements.

See the [Connection](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/connection/overview.md) topic for additional information.

Schedule Frequency

This job group has been designed to run daily one hour after the 1.HUB Metrics Job Group to process and collect the previous day’s message tracking logs.

___RECOMMENDED:___ Run this Job Group at 2:00 AM.

History Retention

History retention should not be enabled on this job group. History is kept through analysis tasks. Modify the following analysis tasks to customize the amount of history which is kept.

| Job Name | Analysis Task Name | Default History |
| --- | --- | --- |
| EX\_ActiveSync | SET HISTORY RETENTION | 6 Months |
| EX\_RPCTraffic | SET HISTORY RETENTION | 6 Months |
| EX\_OWATraffic | SET HISTORY RETENTION | 6 Months |

Query Configuration

The 2. CAS Metrics Job Group is designed to be run with the default query configurations. However, the following queries can be modified:

- __0. Collection__ > __EX\_IISLogs__ Job – __IIS Logs__ Query
- __EX\_ASPolicies__ Job – __Exchange Settings__ Query

No other queries should be modified.

Analysis Configuration

The 2. CAS Metrics Job Group should be run with the default analysis configurations.

__CAUTION:__ Most of these analysis tasks are preconfigured and should not be modified or deselected. There are some that are deselected by default, as they are for troubleshooting purposes.

The following analysis tasks should not be deselected, but their parameters can be modified:

- __ActiveSync__ > __EX\_ActiveSync__ Job – __07. SET HISTORY RETENTION__ Analysis Task
- __Outlook Anywhere__ > __EX\_RPCTraffic__ Job – __05. SET HISTORY RETENTION__ Analysis Task
- __Outlook Web Access__ > __OWATraffic__ Job – __05. SET HISTORY RETENTION__ Analysis Task

Workflow

__Step 1 –__ Set a Connection Profile on the jobs which run data collection.

__Step 2 –__ Ensure the prerequisite __1. HUB Metrics__ job group is successfully executed.

__Step 3 –__ Schedule the __2. CAS Metrics__ job group to run daily one hour after running the 1. HUB Metrics job group.

___RECOMMENDED:___ Run Job group at 2:00 AM.

__Step 4 –__ Review the reports generated by the jobs.
