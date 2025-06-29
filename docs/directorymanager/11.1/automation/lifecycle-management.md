# Group Life Cycle Schedule

Directory Manager enables you to define group lifecycle settings for an identity store. See the
[Manage Group Lifecycle Settings](/docs/directorymanager/11.1/administration/services/overview.md)
topic for additional information. Based on these settings, the Group Lifecycle schedule expires and
logically deletes groups in the identity store on a scheduled basis, keeping your directory clean
and preventing group glut.

While creating a Group Lifecycle schedule, you have to specify a job triggering criterion, the
containers the job will process, and notification options.

The Group Lifecycle schedule performs the following main functions:

- Expires and logically delete groups according to their respective expiry policies. See the
  [ Group Expiry and Deletion](/docs/directorymanager/11.1/administration/services/overview.md)
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
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
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
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic. The schedule will process all groups in the containers and their sub-containers listed in the
Target(s) area in keeping with the Group Lifecycle settings for the identity store.

NOTE: In Group Lifecycle settings, the administrator can specify container(s) for exclusively
applying or not applying the Group Life cycle policy. See the
[Apply Policy on Specific Containers](/docs/directorymanager/11.1/administration/services/overview.md#apply-policy-on-specific-containers)
topic. With containers specified in the Target(s) area, there may be a conflict or overlapping of
containers, in which case, the Group Lifecycle settings take precedence.

Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

Step 12 – To set notifications for the schedule, click **Notifications**.

1. On the Notifications dialog box, select the **Send group life extension notification** check box
   to send email notifications to a group’s primary and additional owners when the job extends the
   life of a group, based on group usage settings in the Group Lifecycle policy. For group usage
   settings, see the
   [Enable Group Usage Lifecycle](/docs/directorymanager/11.1/administration/services/overview.md#enable-group-usage-lifecycle)
   topic for additional information.
2. Click **Save**.

Step 13 – On the Create Schedule page, click **Create Schedule**.

Step 14 – On the Schedules page, click **Save**.  
The schedule is displayed under Group Life Cycle. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Managed By Life Cycle Schedule

The Managed By Life Cycle schedule updates the temporary additional owners for groups and temporary
additional managers for users in an identity store. It performs the following functions:

- Group owners and users with the ‘Manage any Group’ permission in the identity store can set a
  start and end date to:

  - Add an object as a temporary additional owner of a group
  - Remove an additional owner for a temporary period

  The Managed By Life Cycle schedule adds and removes an object as a group’s temporary additional
  owner on the specified dates.

- User managers and users with the ‘Manage any Profile’ permission in the identity store can set a
  start and end date to:

  - Add an object (user or contact) as a temporary additional manager of a user
  - Remove an additional manager for a temporary period

  The Managed By Life Cycle schedule adds and removes an object as the user’s temporary additional
  manager on the specified dates.

Let’s assume that the Managed By Life Cycle schedule is scheduled to run once a week, say Mondays.
If an object is to be added as a group’s temporary additional owner for three days - Wednesday till
Friday, it will not be added. This happens because the Managed By Life Cycle schedule did not run on
the specific days for temporary ownership update. Make sure the schedule is set to run at a
frequency that meets your temporary ownership requirements.

Directory Manager generates notifications when the Managed By Life Cycle schedule adds or removes
temporary additional owners/managers. See the
[Manage Managed by Life Cycle Notifications](/docs/directorymanager/11.1/configuration/identity-stores.md#manage-managed-by-life-cycle-notifications)
topic for additional information.

## Create a Managed By Life Cycle Schedule

Follow the steps to create a Managed by Life Cycle Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Managed By Life Cycle Job**. The
Create  Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_ManagedByLifeCycle\_\_\_;
the schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated by the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
information.

Step 9 – You can specify containers as targets for the schedule. The schedule will process all
groups in the selected containers and sub-containers. To specific containers as target, see step 9
in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic.

Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to manage triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for for additional information.

Step 12 – On the Create Schedule page, click **Create Schedule**.

Step 13 – On the Schedules page, click **Save**.  
 The schedule is displayed under Managed By Life Cycle. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# Membership Life Cycle Schedule

The Membership Life Cycle schedule updates the temporary membership of groups in an identity store.
It performs the following functions:

- Group owners (primary owner, additional owners, and Exchange additional owners) can set a start
  and end date to:

  - Add an object as a temporary member of a group
  - Remove a member for a temporary period from group membership

  The Membership Life Cycle schedule temporarily adds and removes an object from group membership
  on the specified dates.

- Managers and peers can join and leave a group temporarily on behalf of other users. When the
  Membership Life Cycle schedule runs, it adds and removes those users from group membership on the
  specified dates.
- The Membership Life Cycle schedule executes the Membership Life Cycle policy for the identity
  store. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.1/administration/services/overview.md)
  topic.
- The schedule also removes members when group owners inactivate them during group attestation. See
  the
  [Enable Group Attestation](/docs/directorymanager/11.1/administration/services/overview.md#enable-group-attestation)
  topic.

Let’s assume that the Membership Life Cycle schedule is scheduled to run once a week, say Mondays.
If an object is to be added to group membership for three days - Wednesday till Friday, it will not
be added. This happens because the Membership Life Cycle schedule did not run on the specific days
for temporary membership update. Make sure that the schedule is set to run at a frequency that meets
your temporary membership requirements.

Directory Manager generates notifications when the Membership Life Cycle schedule adds or removes
users from group membership. See the
[Manage Membership Life Cycle Notifications](/docs/directorymanager/11.1/configuration/identity-stores.md#manage-membership-life-cycle-notifications)
topic.

## Create a Membership Life Cycle Schedule

Follow the steps to create a Membership Life Cycle Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Membership Life Cycle Job**. The
Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_MembershipLifeCycle\_\_;
the schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated by the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
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

Step 9 – You can specify containers as targets for the schedule. The schedule will process all
groups in these containers and their sub-containers. To specific containers as target, follow step 9
in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

NOTE: Membership Lifecycle policies are not applied to OUs specified here. Target OUs and groups are
set in the respective policy.

Step 10 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 11 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

Step 12 – On the Create Schedule page, click **Create Schedule**.

Step 13 – On the Schedules page, click **Save**.  
The schedule is displayed under **Membership Life Cycle**. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store) topic
for additional information.

# User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation process in Directory Manager. It
performs the following main functions in keeping with the user profile validation settings for an
identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who do not validate their profiles within the given period

## Create a User Life Cycle Schedule

Follow the steps to create a User Life Cycle Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **User Life Cycle Job**. The
Create Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_UserLifeCycle\_\_; the
schedule is displayed with this name in email notifications.

Step 7 – Select a Directory Manager portal URL in the Portal URL drop-down list to include it in
notifications generated for the schedule. Users are redirected to this portal to perform any
necessary action.

Step 8 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
responsible for triggering this schedule. The number of services displayed in the list depend on the
number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler
service. See the [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md) topic for additional
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

Step 9 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 10 – Click **Add Authentication** in the Authentication area to specify an account for running
the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](/docs/directorymanager/11.1/automation/overview.md#create-a-group-usage-service-schedule)
topic for additional information.

Step 11 – On the Create Schedule page, click **Create Schedule**.

Step 12 – On the Schedules page, click **Save**.  
The schedule is displayed under **User Life Cycle**. See the
[View the Schedules in an Identity Store ](/docs/directorymanager/11.1/automation/overview.md#view-the-schedules-in-an-identity-store)topic
for additional information.
