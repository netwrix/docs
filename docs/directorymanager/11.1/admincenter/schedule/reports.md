---
title: "Reports Schedule"
description: "Reports Schedule"
sidebar_position: 100
---

# Reports Schedule

Directory Manager can generate reports for an identity store on a scheduled basis.

You can create a Reports schedule and add reports to it. When the schedule runs, all added reports
are auto generated. The Reports schedule also sends email notifications to the designated
recipients.

## Create a Reports Schedule

Follow the steps to create a Reports Schedule.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

Step 3 – Click **Schedules** under Settings in the left pane.

Step 4 – On the Schedules page, click **Add Schedule** and select **Reports Job**. The Create
Schedule page is displayed.

Step 5 – In the Schedule Name box, enter a name for the schedule.

Step 6 – The Name Preview box displays the schedule name prefixed with \_ReportPortal\_\_; the
schedule is displayed with this name in email notifications.

Step 7 – In the Scheduler Service Name drop-down list, select a Scheduler service that would be
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

Step 8 – To add reports to the schedule, click **Add Report(s)** in the Reports area. The Add
Reports to Schedule dialog box is displayed.

:::note
You can only add reports that have been generated in the Directory Manager portal, since the
schedule uses the settings provided there to generate the report. Moreover, you cannot change the
settings here, such as the container and filter settings.
:::


1. In the Object Category drop-down list, select a report category. Available categories are: _All
   Categories, Users, Groups, Contacts and Computers_. In the Directory Manager portal, reports are
   classified under these categories.
2. The Reports drop-down list shows all reports in the selected category. On selecting a report, one
   of the following happens:

    - The report is displayed in the grid on the dialog box. This is because it has previously been
      added, and you do not need to add it again. If the report has been generated multiple times in
      the Directory Manager portal, all instances are displayed, since each instance has its own
      _title_, _container_, and _filter_ settings.
    - If the report is not displayed in the grid, you have to add it using the Add button. (The Add
      button gets enabled if this report has been generated in the Directory Manager portal.)

    Notice that when you select a category, a report may get listed in the grid. This is because the
    first report in the category is auto selected in the **Reports** drop-down list. If that report
    has previously been added, it is displayed in the grid.

3. The report is listed in the grid on the dialog box with the following info:

    - Report Title – the name given to the report by the user while generating it.
    - Report Name – the name of the report in Directory Manager.
    - Container – the container the report will fetch results from. This container was specified by
      the user while generating the report.
    - Filter – the criteria applied to get the results.

    You can add as many reports as required.

4. Select the check box for a report and click **Add**. The selected reports are displayed in the
   Reports area on the Create Schedule page. When this Reports schedule runs, it auto generates all
   added reports.
   To remove a report , click **Remove** for it.

Step 9 – Click **Add Triggers** in the Triggers area to specify a triggering criterion for the
schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic to add triggers.

Step 10 – Click **Add Authentication** in the **Authentication** area to specify an account for
running the schedule in the identity store. Follow step 12 in the
[Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule)
topic for additional information.

:::important Password Re-insertion Required
Due to security enhancements, when editing a schedule, you must re-enter the account password in the Authentication section, even if you are not changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
:::

Step 11 – To set up notifications for the schedule, click **Notifications**.

1. On the Notifications dialog box, enter the email address of recipient(s) to whom you want to send
   the reports generated by the schedule. Use a semicolon to separate multiple addresses.
2. Click **Save**.

Step 12 – On the Create Schedule page, click **Create Schedule**.

Step 13 – On the Schedules page, click **Save**.
The schedule is displayed under **Reports**. See the
[View the Schedules in an Identity Store ](manage.md#view-the-schedules-in-an-identity-store)topic
for details.
