---
title: "Create a Reports Schedule in Directory Manager"
description: "Create a schedule that automatically generates Directory Manager portal reports for an identity store and emails them to recipients."
keywords:
  - Reports schedule
  - scheduled reports
  - report email notifications
  - schedule triggers
sidebar_position: 100
---

# Create a Reports Schedule in Directory Manager

Directory Manager can generate reports for an identity store on a schedule.

Create a Reports schedule and add reports to it. When the schedule runs, Directory Manager generates all added reports. The schedule also sends email notifications to the designated recipients.

## Create a Reports schedule

To create a Reports schedule:

1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select **Edit**.

3. Click **Schedules** under Settings in the left pane.

4. On the Schedules page, click **Add Schedule** and select **Reports Job**. The Create Schedule page appears.

5. In the Schedule Name box, enter a name for the schedule.

6. Check the Name Preview box. It displays the schedule name prefixed with \_ReportPortal\_\_. Email notifications show the schedule with this name.

7. In the Scheduler Service Name dropdown list, select a Scheduler service to trigger this schedule. The number of services in the list depends on the number of nodes in all Elasticsearch clusters in the environment, as each node has its own Scheduler service. See the [Directory Manager Scheduler Service](/docs/directorymanager/11.2/admincenter/service/schedulerservice.md) topic for additional information.

   :::note
   When you select a Scheduler service:

   - The Scheduler service for the Directory Manager instance on which you're creating the schedule is selected by default. You can select the Scheduler service of another instance as well.
   - You can change the Scheduler service after creating the schedule. On the next run, the newly selected Scheduler service triggers the schedule.
   - If the selected Scheduler service fails to trigger the schedule, no other Scheduler service is selected automatically.
   - If you run a schedule manually in Admin Center, the Scheduler service of that instance is used.
   :::

8. To add reports to the schedule, click **Add Reports** in the Reports area. The Add Reports to Schedule dialog box appears.

   :::note
   You can only add reports that were generated in the Directory Manager portal, because the schedule uses the settings provided there to generate the report. You also can't change the settings here, such as the container and filter settings.
   :::

   1. In the Object Category dropdown list, select a report category. Available categories are: _All Categories, Users, Groups, Contacts, and Computers_. In the Directory Manager portal, reports are classified under these categories.
   2. The Reports dropdown list shows all reports in the selected category. When you select a report, one of the following happens:

      - The report appears in the grid on the dialog box. This means you previously added it, and you don't need to add it again. If the report has been generated multiple times in the Directory Manager portal, all instances appear, since each instance has its own _title_, _container_, and _filter_ settings.
      - If the report doesn't appear in the grid, add it with the **Add** button. (The **Add** button is enabled if the report was generated in the Directory Manager portal.)

      When you select a category, a report might be listed in the grid. This is because the first report in the category is automatically selected in the **Reports** dropdown list. If that report has previously been added, it appears in the grid.

   3. The grid on the dialog box lists the report with the following information:

      - Report Title – the name given to the report by the user while generating it.
      - Report Name – the name of the report in Directory Manager.
      - Container – the container the report fetches results from. The user specified this container while generating the report.
      - Filter – the criteria applied to get the results.

      You can add as many reports as required.

   4. Select the checkbox for a report and click **Add**. The selected reports appear in the Reports area on the Create Schedule page. When this Reports schedule runs, it generates all added reports. To remove a report, click **Remove** for it.

9. Click **Add Triggers** in the Triggers area to specify a triggering criterion that, when met, starts the schedule. Follow step 11 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic to add triggers.

10. Click **Add Authentication** in the **Authentication** area to specify an account for running the schedule in the identity store. Follow step 12 in the [Create a Group Usage Service Schedule](groupusageservice.md#create-a-group-usage-service-schedule) topic for additional information.

    :::important Password Re-insertion Required
    Due to security enhancements, when you edit a schedule, you must re-enter the account password in the Authentication section, even if you aren't changing the authentication credentials. This is a required security measure to ensure password field sanitization across the product.
    :::

11. To set up notifications for the schedule, click **Notifications**.

    1. On the Notifications dialog box, enter the email address of recipients to whom you want to send the reports generated by the schedule. Use a semicolon to separate multiple addresses.
    2. Click **Save**.

12. On the Create Schedule page, click **Create Schedule**.

13. On the Schedules page, click **Save**. The schedule appears under **Reports**. See the [View the Schedules in an Identity Store](manage.md#view-the-schedules-in-an-identity-store) topic for details.
