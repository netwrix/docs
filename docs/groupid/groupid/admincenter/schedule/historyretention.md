# History Retention Schedule

While configuring history tracking for an identity store, you can choose to keep history records forever in the Directory Manager database or retain history for a specific period. See the [Configure History Tracking](/docs/product_docs/groupid/groupid/admincenter/identitystore/configure/directoryservice/historytracking.md) topic for additional information. In case you select the
latter option, the History Retention schedule is auto created for the identity store. This schedule runs on a specified frequency to check if the retention period is over for any history records, and if so, move them from the Directory Manager database to the
following .csv files:

- History – Contains history data of the Directory Manager portal (including Synchronize), Management Shell, and scheduled jobs. It also contains history data for the identity store, security roles,
  and workflow configurations.
- AuditingHistory – Contains history data of all authentication actions performed in Directory Manager, as logged in Helpdek history. See the [History in Helpdesk](/docs/product_docs/groupid/groupid/admincenter/helpdesk/history.md) topic for additional information.
- PasswordCenterHistory – Contains history data of all actions tracked in Helpdesk, except the authentication action. See the [History in Helpdesk](/docs/product_docs/groupid/groupid/admincenter/helpdesk/history.md) topic for additional information.
- AdminCenterHistory – Contains Admin Center history data. See the [Admin Center History](/docs/product_docs/groupid/groupid/admincenter/general/history.md) topic for additional information.

These files are available at the following location on the Directory Manager server:

```X:\Program Files\Imanami\GroupID 11.0\GroupIDDataService\Inetpub\GroupIDDataService\Web\HistoryBin\```

(X is the Directory Manager installation drive)

History data moved to these files is not longer displayed in Directory Manager.

NOTE: Admin Center history does not fall in a specific identity store, so its retention mechanism is different. Directory Manager checks the identity store of the user who performed an action logged in Admin Center history, and archives that record according to the history retention setting of the identity store that user belongs to.

After the History Retention schedule runs, the following information is displayed on the __History__ page in identity store configurations:

![History Retension Information ](/static/img/product_docs/groupid/groupid/admincenter/schedule/historyretention.png)

You cannot create or delete a History Retention schedule; only update the existing one.

## Update the History Retention Schedule

Step 1 – In Admin Center, click __Identity Stores__ in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select __Edit__.

Step 3 – Click __Schedules__ under Settings in the left pane.

Step 4 – On the Schedules page, click the plus sign next to __History Retention__. Then click the ellipsis button for the schedule and select __Edit__.

Step 5 – On the Edit Schedule page, the schedule name is displayed in the Schedule Name box as read-only.  
The default name format is: _HistoryRetention\_<identity store ID>\_<identity store name>_.

Step 6 – The Name Preview box displays the schedule name as HistoryRetention; the schedule is displayed with this name in email notifications.

Step 7 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be responsible for triggering this schedule. The number of services displayed in the list depend on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Scheduler Service](/docs/product_docs/groupid/groupid/admincenter/service/schedulerservice.md) topic for additional information.

Please note the following while selecting a Scheduler service:

- The Scheduler service for the Directory Manager instance on which you are creating the schedule is selected by default. However, you can select the Scheduler service of another instance as well.

- The Scheduler service can be changed even after creating the schedule. Upon the next run, the schedule will be triggered by the newly-selected Scheduler service.

- If the selected Scheduler service fails to trigger the schedule, then no other Scheduler service can be selected automatically.

- If a schedule is run manually on the Admin Center, then the Scheduler service of that instance will be used.

Step 8 – The Triggers area displays the default triggering frequency for the schedule.

- To change a trigger, click __Edit__ for it.
- To add a new trigger, click __Add Trigger__.

Follow step 11 in
the [Create a Group Usage Service Schedule](/docs/product_docs/groupid/groupid/admincenter/schedule/groupusageservice.md#Create-a-Group-Usage-Service-Schedule) topic to manage triggers.

Step 9 – Click __Update Schedule__.

Step 10 – On the Schedules page, click __Save__.   
For general schedule info, see the [View the Schedules in an Identity Store ](/docs/product_docs/groupid/groupid/admincenter/schedule/manage.md#View-the-Schedules-in-an-Identity-Store) topic for additional information.
