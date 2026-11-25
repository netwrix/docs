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

When you configure history tracking for an identity store, you can keep history records forever in
the Directory Manager database or retain history for a specific period. For more information, see the
[Configure History Tracking in Directory Manager](/docs/directorymanager/11.1/admincenter/identitystore/configure/historytracking.md)
topic. If you select the latter option, Directory Manager creates the History Retention schedule
automatically for the identity store. This schedule runs at a specified frequency to check whether
the retention period is over for any history records. If it is, the schedule moves them from the
Directory Manager database to the following .csv files:

- History – Contains history data of the Directory Manager portal (including Synchronize),
  Management Shell, and scheduled jobs. It also contains history data for the identity store,
  security roles, and workflow configurations.
- AuditingHistory – Contains history data of all authentication actions performed in Directory
  Manager, as logged in Helpdesk history. For more information, see the
  [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md)
  topic.
- PasswordCenterHistory – Contains history data of all actions tracked in Helpdesk, except the
  authentication action. For more information, see the
  [View and Search Helpdesk History in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/history.md)
  topic.
- AdminCenterHistory – Contains Admin Center history data. For more information, see the
  [View and Export Admin Center History in Directory Manager](/docs/directorymanager/11.1/admincenter/general/historyadmincenter.md)
  topic.

These files are available at the following location on the Directory Manager server:

`X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\`

**(X is the Directory Manager installation drive)**

History data moved to these files no longer appears in Directory Manager.

:::note
Admin Center history doesn't fall in a specific identity store, so its retention mechanism is
different. Directory Manager checks the identity store of the user who performed an action logged in
Admin Center history. It then archives that record according to the history retention setting of the
identity store that the user belongs to.
:::

After the History Retention schedule runs, the **History** page in identity store configurations
shows the following information:

![History page in identity store configuration showing history retention information after the schedule runs](/images/directorymanager/11.1/admincenter/schedule/historyretention.webp)

You can only update the existing History Retention schedule.

## Update the History Retention schedule

1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
   **Edit**.

3. Click **Schedules** under Settings in the left pane.

4. On the Schedules page, click the plus sign next to **History Retention**. Then click the
   ellipsis button for the schedule and select **Edit**.

5. On the Edit Schedule page, find the Schedule Name box. It shows the schedule name as read-only.
   The default name format is: _HistoryRetention_`<identity store ID>`_`<identity store name>`_.

6. Review the Name Preview box. It shows the schedule name as HistoryRetention. Email
   notifications show the schedule with this name.

7. In the Scheduler Service Name dropdown list, select a Scheduler service that's responsible for
   triggering this schedule. The number of services in the list depends on the number of nodes in
   all Elasticsearch clusters in the environment, because each node has its own Scheduler service.
   For more information, see the
   [Directory Manager Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md)
   topic.

   :::note
   When you select a Scheduler service, keep the following in mind:

   - The Scheduler service for the Directory Manager instance on which you're creating the schedule
     is selected by default. However, you can select the Scheduler service of another instance as
     well.
   - You can change the Scheduler service even after you create the schedule. On the next run, the
     newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, no other Scheduler service is
     selected automatically.
   - If you run a schedule manually in Admin Center, Directory Manager uses the Scheduler service of
     that instance.
   :::

8. In the **Triggers** area, review the default triggering frequency for the schedule.

   - To change a trigger, click **Edit** for it.
   - To add a new trigger, click **Add Trigger**.

   Follow step 11 in the
   [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
   topic to manage triggers.

9. Click **Update Schedule**.

10. On the Schedules page, click **Save**.
    For general schedule information, see the
    [View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store)
    topic.
