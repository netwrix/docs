---
title: "Smart Group Update Schedule"
description: "Smart Group Update Schedule"
sidebar_position: 120
---

# Smart Group Update Schedule

You can create a Smart Group Update schedule and bind it to Smart Groups and Dynasties in an
identity store. When the schedule runs, it updates the following:

- Group membership - Each Smart Group and Dynasty has a user-defined query specified for it. When a
  Smart Group Update schedule runs, it updates the membership of target groups with records fetched
  by the query.
- Certain attribute values for nested Smart Groups and Dynasty children.

A Smart Group or Dynasty that is not linked with a Smart Group Update schedule will not be auto
updated.

You can configure notifications for a schedule that are sent to designated recipients in response to
an event, such as when the schedule successfully updates all target groups or fails to update any
target group.

What do you want to do?

- [Create a Smart Group Update Schedule](#create-a-smart-group-update-schedule)

## Create a Smart Group Update Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **Smart Group Update Job**. The
   **Create Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with _SmartGroup__; the schedule
   is displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md)
   topic.
9. You can specify containers and groups as targets for the schedule. or a container, the schedule
   processes all groups in it and its sub-containers. In the case of groups, the schedule processes
   the added groups only (i.e., it does not process nested groups).

    1. To specific containers as target, follow step 9 in the
       [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
       topic. The schedule will process all Smart Groups and Dynasties in the containers and their
       sub-containers listed in the **Target(s)** area.
    2. To add Smart Groups and Dynasties as targets, click **Add Group**. On the **Add Object(s)**
       dialog box, specify a container to search for the desired groups; then perform a search to
       locate and select the groups.

        - Click the down arrow in the **Search Container** box and select a container to limit the
          search scope to it.
        - Select the **Include Sub-Containers** check box to include the sub-containers within the
          selected container to search for the group(s).
        - Enter a search string in the search box; group names starting with the string are
          displayed as you type. Click **Add** for a group to select it.  
          You can also perform an advanced search to locate a group. Click **Advanced** in the
          search box and use the search fields to enter a search string. On clicking **Search**,
          groups matching the string are displayed. Select the group you want to add as target.
        - After selecting one or more groups, click **Add** the groups are displayed in the
          **Target(s)** area.

    3. To remove a container or group in the **Target(s)** area, click **Remove** for it.  
       To remove all target objects, click **Remove All**.

10. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic to add triggers.
11. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/signin/schedule/groupusageservice.md#create-a-group-usage-service-schedule)
    topic for details.
12. To enable notifications for the schedule, click **Notifications**. On the **Notifications**
    dialog box, specify an event for triggering notifications for the schedule and add recipients.

    1. Use the toggle button at the top to enable notifications for the schedule.
    2. In the **Send Notification to the following email IDs** box, enter the email addresses of
       notification recipients, using a semicolon to separate multiple addresses. These recipients
       will get a report on the event you select for **Send Notification**.

        NOTE: If the email ID of a target group’s additional owner is specified in this box, the
        additional owner will receive notifications even if the **Do not Notify** check box is
        selected for it in the respective group’s properties.

    3. Select the **Send Report to group owner(s)** check box to send a report to each unique group
       owner of the groups processed by the schedule. A Dynasty owner receives a notification for
       its groups and direct child Dynasties.  
       Group owners include the primary owner, additional owner(s), and Exchange additional
       owner(s).

        NOTE: An additional owner of a target group will not receive notifications when the **Do not
        Notify** check box is selected for it in the respective group’s properties, even with the
        **Send Report to group owner(s)** check box selected.

    4. In the **Send Notification** area, select one of the following options:

        - **Always -** Always send notifications, whether the schedule succeeds or fails to update
          the groups.
        - **Only when job succeeds -** Send notifications when the schedule successfully updates all
          the groups. Even when one group fails to be updated, notifications are not sent.
        - **Only when job fails -** Send notifications when the schedule fails to update groups,
          even when all except one group is not updated.
        - **Only when membership changes -** Send notifications when any changes are made to group
          membership as a result of the schedule run.

    5. Click **Save**.

        NOTE: When a Smart Group Update schedule is bound to a single OU that contains all expired
        Smart Groups/Dynasties, notifications will not be sent, even if the _Always_ option is
        selected. Expired Smart Groups and Dynasties are not evaluated for the update process.
        However, even if one group in the OU is not expired, notifications will be sent for all
        objects with _failed_ status for expired objects.

13. On the **Create Schedule** page, click **Create Schedule**.
14. On the Schedules page, click **Save**.  
    The schedule is displayed under **Smart Group Update**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/signin/schedule/manage.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/signin/schedule/overview.md)
