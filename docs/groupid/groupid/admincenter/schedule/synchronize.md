# Synchronize Schedule

The Directory Manager scheduling function enables you to set any Synchronize job or job collection to run automatically. Create a Synchronize schedule and add Synchronize jobs and job collections as targets. When the schedule runs, the target jobs and job collections
are executed.

## Create a Synchronize Schedule

Follow the steps to create a Synchronize Schedule.

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Schedules__ under Settings in the left pane.

Step 4 – On the Schedules page, click __Add Schedule__ and select __Synchronize Job__. The Create Schedule page
is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview displays the schedule name prefixed with _SynchronizeJobPortal\__; the schedule is displayed with this name in email notifications.

Step 7 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Scheduler Service](/docs/product_docs/groupid/groupid/admincenter/service/schedulerservice.md) topic for additional information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance will be used.

Step 8 – Add a Synchronize job or a job collection or both to this schedule.

- Click __Add Jobs__ to add a Synchronize job to this schedule. The Select Jobs to Add dialog box displays Synchronize jobs. Select one or more jobs and click __Add__.
- Click __Add Job Collection__ to add a Synchronize job collection to this schedule. The Select Job Collections to Add dialog box displays job collections from Synchronize. Select one or more
  job collections from the list and click __Add__.

The selected job(s) and job collection(s) are listed in the Target(s) area. They will be executed when the schedule runs.  
To remove a job or job collection in the Target(s)area, click __Remove__ for it.  
To remove all target objects, click __Remove All__.

Step 9 – Click __Add Triggers__ in the Triggers area to specify a triggering criterion for the schedule, that, when met, starts the execution of the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to add triggers.

Step 10 – Click __Add Authentication__ in the Authentication area to specify an account for running the schedule in the identity store. Follow step 12 in
the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic for additional information.

Step 11 – On the Create Schedule page, click __Create Schedule__.

Step 12 – On the Schedules page, click __Save__.  
The schedule is displayed under __Synchronize__. See the [View the Schedules in an Identity Store ](/docs/product_docs/groupid/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic for additional information.
