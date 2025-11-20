---
title: "Group Life Cycle Schedule"
description: "Group Life Cycle Schedule"
sidebar_position: 20
---

# Group Life Cycle Schedule

Directory Manager enables you to define group lifecycle settings for an identity store. See the
[Manage Group Lifecycle Settings](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md)
topic for additional information. Based on these settings, the Group Lifecycle schedule expires and
logically deletes groups in the identity store on a scheduled basis, keeping your directory clean
and preventing group glut.

While creating a Group Lifecycle schedule, you have to specify a job triggering criterion, the
containers the job will process, and notification options.

The Group Lifecycle schedule performs the following main functions:

- Expires and logically delete groups according to their respective expiry policies. See the
  [ Group Expiry and Deletion](/docs/directorymanager/11.1/admincenter/identitystore/configure/groupexpirydeletion.md)
  topic for additional information.
- Sends email notifications to relevant personnel before expiring a group. Also initiates
  notifications for group attestation.
- Extends or reduces the life of mail-enabled distribution groups based on their usage.
- Initiates group attestation for expiring groups.

## Create a Group Life Cycle Schedule

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Group Life Cycle Job**.
The Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_Glm\_\_; the schedule is
displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated for this schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/admincenter/service/schedulerservice.md) topic for additional
information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is
  selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the
  schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service
  can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance
  will be used.

Step 9 – You can specify containers as targets for the schedule. To do so, follow step 9 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic. The schedule will process all groups in the containers and their sub-containers listed in the
Target(s) area in keeping with the Group Lifecycle settings for the identity store.

:::note
In Group Lifecycle settings, the administrator can specify container(s) for exclusively
applying or not applying the Group Life cycle policy. See the
[Apply Policy on Specific Containers](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md#apply-policy-on-specific-containers)
topic. With containers specified in the Target(s) area, there may be a conflict or overlapping of
containers, in which case, the Group Lifecycle settings take precedence.
:::


Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic for additional information.

:::important Password Re-insertion Required
Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you are not changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
:::

Step 12 – To set notifications for the schedule, click **Notifications**.

1. On the Notifications dialog box, select the **Send group life extension notification** check box
   to send email notifications to a group’s primary and additional owners when the job extends the
   life of a group, based on group usage settings in the Group Lifecycle policy. For group usage
   settings, see the
   [Enable Group Usage Lifecycle](/docs/directorymanager/11.1/admincenter/identitystore/configure/grouplifecycle.md#enable-group-usage-lifecycle)
   topic for additional information.
2. Click **Save**.

Step 13 – On the Create Schedule page, click **Create Schedule**.

Step 14 – On the Schedules page, click **Save**.
The schedule is displayed under Group Life Cycle. See the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store) topic
for additional information.
