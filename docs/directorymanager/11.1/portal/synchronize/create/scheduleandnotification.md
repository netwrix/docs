---
title: "Schedule a Synchronize Job and Set Notifications"
description: "Choose a Smart Group Update job to run with a Synchronize job, set email notifications for job results, and review the source and destination queries."
keywords:
  - Synchronize job schedule
  - job notifications
  - Smart Group Update job
  - source query
  - destination query
  - Directory Manager
sidebar_position: 60
---

# Schedule a Synchronize Job and Set Notifications

On the **Schedule Job and Notifications** page, you set the schedule the job uses to run in the future and configure the notification settings for the job.

To schedule the job and set notifications:

1. On the **Schedule Job and Notifications** page, do the following:

    1. In the **Schedule Job** section, choose an existing job from the dropdown list.
    2. In the **Schedule** section, the **Task name** dropdown list shows the Smart Group Update jobs that exist in the identity store for the Active Directory domain you provide as the destination in this Synchronize job. Select a job to run along with this Synchronize job. The selected job runs each time the Synchronize job runs, either manually or from the Synchronize job scheduler.

        If you are modifying an existing job, you can also add a new schedule for the job. See [Create a Directory Manager Synchronize Schedule](/docs/directorymanager/11.1/admincenter/schedule/synchronize.md).

2. Set up email notification of job run results:

    1. Select the **Enable** option.
    2. Enter the email addresses of the notification recipients in the **Send notification to the following emails** box.
    3. From the **Send Notification** options, select one of the following notification trigger events:

        - **Always**: Send a notification every time the job runs, regardless of outcome.
        - **Records are updated**: Send a notification only when one or more records have been updated.
        - **One or more errors occur**: Send a notification only when errors occur while the job runs.
        - **Job fails**: Send a notification only when a fatal error occurs that causes the job to fail.

        :::info
        This step requires that notification settings are already configured in the connected identity store. Click **Configure Notifications** if notifications aren't configured.
        :::

3. Click **Advanced Settings** to open the **Advanced Setting For the Job** page, then do the following:

    1. In the **Source Query** section, review the default query statement, test it, and modify it if required.

        The **Source Query** page shows the default query statement generated from the settings you entered in the wizard. The Synchronize job uses this query to fetch records from the source provider.

    2. In the **Destination Query** section, review the default query statement and modify it if required.

        Like the **Source Query** page, the **Destination Query** page shows the default query statement generated from the settings you entered in the wizard. The Synchronize job uses this query to sync records at the destination provider.

        - For identity store providers, the job uses filter criteria and fetches data from Elasticsearch.
        - For data source providers (SQL, Excel, or Access), the job uses a SQL query and fetches data directly from the provider.

        Click **Test** to preview the results before you run the query. Click **Clear** to delete the command query.

    3. On the **Synchronize Settings** wizard page, configure directory synchronization and job scheduling:

        - **Update all records from source**: Synchronize all records from the source to the destination each time the job runs. This option is limited to Exchange 5.5, Active Directory, SQL Server, or Excel.
        - **Update only records that have changed**: Synchronize only the records that have changed in the source data since the last time the job ran. For this option to apply, your source must carry the last updated time stamp of each record.

            The **Select source time stamp** dropdown list is enabled when you select the **Update only records that have changed** option. Select the attribute or field in the source that contains a value for the time stamp.

        :::note
        Synchronizing all fields every time the job runs can be inefficient. If your data source has a time stamp field that indicates the last time the row was updated or modified, Synchronize can use it to update only the rows that have changed since the last time the job ran.
        :::

    4. Click **Save**.

4. Select the **Preview job when finished** checkbox to preview the job.
5. Check **Review your Changes** before you finish the job.
6. Click **Finish** to create the job.

After you run the job, Directory Manager triggers a workflow request. The generated workflow request appears in the [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md) section for the workflow approvers. If the approver approves the workflow request, the job runs and applies the results.
