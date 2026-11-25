---
title: "Directory Manager History Retention Schedule"
description: "Learn how the History Retention schedule moves expired history records to .csv files and how to update its Scheduler service and triggers."
keywords:
  - History Retention schedule
  - history records
  - history retention period
  - history .csv files
  - Scheduler service
sidebar_position: 30
---

# Directory Manager History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records
forever in the Directory Manager database or retain history for a specific period. See the
[Configure History Tracking in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md) topic
for additional information. If you select the latter option, the History Retention schedule is
created automatically for the identity store. This schedule runs on a specified frequency to check if the
retention period is over for any history records, and if so, moves them from the Directory Manager
database to the following .csv files:

- History – Contains history data of the Directory Manager portal (including Synchronize),
  Management Shell, and scheduled jobs. It also contains history data for the identity store,
  security roles, and workflow configurations.
- AuditingHistory – Contains history data of all authentication actions performed in Directory
  Manager, as logged in Helpdesk history. See the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic
  for additional information.
- PasswordCenterHistory – Contains history data of all actions tracked in Helpdesk, except the
  authentication action. See the [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md) topic for additional
  information.
- AdminCenterHistory – Contains Admin Center history data. See the
  [View and Export Admin Center History in Directory Manager](/docs/directorymanager/11.1/admincenter/general/historyadmincenter.md) topic for additional information.

These files are available at the following location on the Directory Manager server:

`X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\`

**(X is the Directory Manager installation drive)**

History data moved to these files no longer appears in Directory Manager.

:::note
Admin Center history doesn't fall in a specific identity store, so its retention mechanism is
different. Directory Manager checks the identity store of the user who performed an action logged in
Admin Center history, and archives that record according to the history retention setting of the
identity store that user belongs to.
:::


After the History Retention schedule runs, the **History** page in identity store configurations shows the following information:

![History page in identity store configuration showing history retention information after the schedule runs](/images/directorymanager/11.1/admincenter/schedule/historyretention.webp)

You can only update the existing History Retention schedule.

## Update the History Retention Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to **History Retention**. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name box displays the schedule name as
read-only.
The default name format is: _HistoryRetention_`<identity store ID>`_`<identity store name>`_.

Step 6 – The Name Preview box displays the schedule name as HistoryRetention; email notifications show the schedule with this name.

Step 7 – In the Scheduler Service Name dropdown list, select a Scheduler service that's
responsible for triggering this schedule. The number of services in the list depends on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional
information.

:::note
When selecting a Scheduler service, note the following:

- The Scheduler service for the Directory Manager instance on which you're creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. On the next run, the
  newly selected Scheduler service triggers the schedule.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If you run a schedule manually in Admin Center, the Scheduler service of that instance
  is used.
:::

Step 8 – The **Triggers** area displays the default triggering frequency for the schedule.

- To change a trigger, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 9 – Click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.
For general schedule info, see the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store) topic
for additional information.
