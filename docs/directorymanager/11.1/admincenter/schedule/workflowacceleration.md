---
title: "Workflow Acceleration Schedule"
description: "Workflow Acceleration Schedule"
sidebar_position: 150
---

# Workflow Acceleration Schedule

A Workflow Acceleration schedule facilitates the workflow approver acceleration process for workflow
requests. This schedule is auto created when approver acceleration is enabled for the identity
store. See the [Workflow Approver Acceleration](/docs/directorymanager/11.1/admincenter/workflow/approveracceleration.md) topic for
additional information.

By default, the schedule runs daily to accelerate workflow requests to approvers, according to
workflow acceleration settings for an identity store and some predefined rules for approver
acceleration. It also generates notifications to inform approvers about pending workflow requests.

You can only update the existing Workflow Acceleration schedule.

## Update the Workflow Acceleration Schedule

To update the Workflow Acceleration Schedule:

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to Workflow Acceleration. Then click the
ellipsis button for the schedule and select **Edit**.

Step 5 – On the Edit Schedule page, the Schedule Name and Name Preview boxes display the name of the
schedule as read-only. Email notifications show the schedule with the name from _Name Preview_.

Step 6 – In the Scheduler Service Name dropdown list, select a Scheduler service that would be
responsible for triggering this schedule. The list displays a number of services that depends on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional
information.

:::note
When selecting a Scheduler service, note the following:
:::

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  newly-selected Scheduler service will trigger the schedule.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If you run a schedule manually on the Admin Center, the Scheduler service of that instance
  is used.

Step 7 – The Triggers area displays the default triggering frequency for the schedule.

- To change it, click **Edit** for it.
- To add a new trigger, click **Add Trigger**.

Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 8 – The Authentication area displays an account for running the schedule in the identity store.
To change it, click **Add Authentication**. Follow step 12 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic for additional information.

:::important Password Re-insertion Required
Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you aren't changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
:::

Step 9 – Click **Update Schedule**.

Step 10 – On the Schedules page, click **Save**.
For general schedule info, see the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store) topic
for additional information.
