---
title: "GroupID History Retention Schedule"
description: "Learn how the History Retention schedule moves expired history records to .csv files and how to update its Scheduler service and triggers."
keywords:
  - History Retention schedule
  - history records
  - history retention period
  - history .csv files
  - Scheduler service
sidebar_position: 30
---

# GroupID History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records
forever in the GroupID database or retain history for a specific period (see the [Configure History Tracking in GroupID](/docs/directorymanager/11.0/signin/identitystore/configure/historytracking.md) topic). If you select the latter option, the History Retention schedule is created automatically for the identity store. This schedule runs on a specified frequency to check if the retention period is over
for any history records, and if so, moves them from the GroupID database to the following .csv files:

- **History** - Contains history data of the GroupID portal, Synchronize, Management Shell, scheduled jobs, and the GroupID mobile app. It also contains history data for the identity store,
  security roles, and workflow configurations.
- **AuditingHistory** - Contains history data of all authentication actions performed in GroupID, as
  logged in Helpdesk history. See the
  [View and Search Helpdesk History in GroupID](/docs/directorymanager/11.0/signin/helpdesk/history.md) topic.
- **PasswordCenterHistory** - Contains history data of all actions tracked in Helpdesk, except the
  authentication action. See the
  [View and Search Helpdesk History in GroupID](/docs/directorymanager/11.0/signin/helpdesk/history.md) topic.
- **AdminCenterHistory** - Contains Admin Center history data. See the
  [View and Export Admin Center History in GroupID](/docs/directorymanager/11.0/signin/concepts/history_1.md) topic.

These files are available at the following location on the GroupID server:

`X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\`

(X is the GroupID installation drive)

History data moved to these files no longer appears in GroupID.

:::note
Admin Center history doesn't fall in a specific identity store, so its retention mechanism is
different. GroupID checks the identity store of the user who performed an action logged in Admin
Center history, and archives that record according to the history retention setting of the identity
store that user belongs to.
:::

After the History Retention schedule runs, the **History** page in identity store configurations shows the following information:

![History page in identity store configuration showing history retention information after the schedule runs](/images/directorymanager/11.0/admincenter/schedule/historyretention.webp)

You can only update the existing History Retention schedule.

What do you want to do?

- [Update the History Retention Schedule](#update-the-history-retention-schedule)

## Update the History Retention Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign next to **History Retention**. Then click the
   ellipsis button for the schedule and select **Edit**.
5. On the **Edit Schedule** page, the **Schedule Name** box displays the schedule name as read-only.
   The default name format is: _HistoryRetention_`<identity store ID>`_`<identity store name>`_.
6. The **Name Preview** box displays the schedule name as HistoryRetention; email notifications show the schedule with this name.
7. In the **Scheduler Service Name** dropdown list, select a Scheduler service that's responsible for triggering this schedule. The number of services in the list depends on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [GroupID Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
8. The **Triggers** area displays the default triggering frequency for the schedule.

    - To change a trigger, click **Edit** for it.
    - To add a new trigger, click **Add Trigger**.

    Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic to manage triggers.

9. Click **Update Schedule**.
10. On the **Schedules** page, click **Save**.
    For general schedule information, see the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic.

See Also

- [Schedules in GroupID](/docs/directorymanager/11.0/signin/schedule/overview.md)
