---
title: "DSAR Settings"
description: "DSAR Settings"
sidebar_position: 20
---

# DSAR Settings

This section describes Netwrix Data Classification configuration required to run Data Subject Access
Requests (DSAR).

:::note
Only users with 'Super User' permissions are able to configure DSAR.
[See DSAR Roles for more information.](/docs/dataclassification/5.7/dataanalysisoverview/dsar/roles.md)
:::


1. In administrative web console , navigate to Data Analysis → DSAR.
2. Locate the Settings tab.
3. Configure DSAR as follows:

    | Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
    | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Batch Start Time         | Review and modify batch run schedule to optimize the timing for your environment. **NOTE:** Please note that this setting affects the batches of all users; there is one batch-run per instance of the DSAR tool. By default, the DSAR batch will only automatically run once a day; to force another batch run within a 24 hour period, use the **Run now** button, as described below.                              |
    | Output Location          | Specify a desired file share to export results of DSAR searches. Items are grouped by Case ID. **NOTE:** Please note that there is one output location per instance of the DSAR tool. Changing the Output Location setting does not impact files that have already been placed in their location - i.e., any existing output does not get moved when the setting is changed.                                          |
    | Email Notification Group | Specify an email group to send notifications to. Click + to create a new group or select existing one. In the Add dialog, configure Email group as follows: - Group Name – provide a name for the new group. - Email Addresses – select as many addresses as needed. The email group must contain at least one email address. - Email Server – select the email server. See Email Configuration for more information. |

## Run now

All search requests are run by the scheduled time set by a Super User. If you have one or more
pending searches and for some reason want to run them immediately, use Run now option.

:::note
This option is only available when there are queued requests and a search is not currently
in progress to prevent conflicting processes.
:::


**To run queued search requests immediately**

1. In administrative web console, navigate to Data Analysis → DSAR.
2. Click Run now under System Configuration.
3. Confirm that you want to run all requests immediately.

:::note
When forcing a search request run, consider that this operation may lead to performance
degrading.
:::


See also:

- [DSAR Roles](/docs/dataclassification/5.7/dataanalysisoverview/dsar/roles.md)
- [Create Search Requests](/docs/dataclassification/5.7/dataanalysisoverview/dsar/crestesearchrequests.md)
