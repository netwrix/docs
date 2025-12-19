---
title: "Workflow Acceleration Schedule"
description: "Workflow Acceleration Schedule"
sidebar_position: 150
---

# Workflow Acceleration Schedule

A Workflow Acceleration schedule facilitates the workflow approver acceleration process for workflow
requests. This schedule is auto created when approver acceleration is enabled for the identity
store. See the
[Workflow Approver Acceleration](/docs/directorymanager/11.0/signin/workflow/approveracceleration.md)
topic.

By default, the schedule runs daily to accelerate workflow requests to approvers, according to
workflow acceleration settings for an identity store and some predefined rules for approver
acceleration. It also generates notifications to inform approvers about pending workflow requests.

You cannot create or delete a Workflow Acceleration schedule; only update the existing one.

What do you want to do?

- [Update the Workflow Acceleration Schedule](#update-the-workflow-acceleration-schedule)

## Update the Workflow Acceleration Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click the plus sign next to **Workflow Acceleration**. Then click the
   ellipsis button for the schedule and select **Edit**.
5. On the **Edit Schedule** page, the **Schedule Name** and **Name Preview** boxes display the name
   of the schedule as read-only. The schedule is displayed with the name displayed for _Name
   Preview_ in email notifications
6. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
7. The **Triggers** area displays the default triggering frequency for the schedule.

    - To change it, click **Edit** for it.
    - To add a new trigger, click **Add Trigger**.

    Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic to manage triggers.

8. The **Authentication** area displays an account for running the schedule in the identity store.
   To change it, click **Add Authentication**. Follow step 12 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
   topic for details.
9. Click **Update Schedule**.
10. On the **Schedules** page, click **Save**.  
    For general schedule info, see the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic.

See Also

- [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md)
