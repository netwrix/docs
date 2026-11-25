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

On **Schedule Job and Notifications**, you can set the schedule the job uses to run in the future and
configure the notification settings for the job.

1. On the **Schedule Job and Notifications** page:

    1. In the **Schedule Job** section, choose an existing job from the dropdown list.
    2. In the **Schedule** section, the **Task name** dropdown lists the Smart Group Update jobs
       that exist in the identity store for the Active Directory domain that you provide as the
       destination in this Synchronize job. Select a job that you want to run along with this
       Synchronize job. The selected job runs each time the Synchronize job runs, either
       manually or from the Synchronize job scheduler.

        If you are modifying an existing job, you can also add a new schedule for the job. See
        [Create a Directory Manager Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)

2. Set up email notification of job run results:

    1. Select the **Enable** option.
    2. Enter the email addresses of notification recipients in the
       **Send notification to the following email(s)** box.
    3. From the **Send Notification** options, select one of the following notification trigger
       events:

        1. **Always**: Send a notification every time the job runs, regardless of outcome.
        2. **Records are updated**: Send a notification only when one or more records have been
           updated.
        3. **One or more errors occur**: Send a notification only when errors occur while executing
           the job.
        4. **Job fails**: Send a notification only when a fatal error occurs causing the job to
           fail.

            :::info
            This step requires that notification settings are already configured in the
            connected identity store. Click **Configure Notifications** if notifications aren't
            configured.
            :::

3. Click **Advanced Settings** to go to the **Advanced Setting For the Job** page.

4. In the **Source Query** section, review the default query statement shown, test it, and modify it
   if required.

    The **Source Query** page shows the default query statement generated from the settings you have
    entered into the wizard. Synchronize job uses this query to fetch records from the source
    provider.

5. In the **Destination Query** section, review the default query statement shown and modify it if
   required.

    Like the **Source Query** page, the **Destination Query** page shows the default query statement
    generated from the settings you have entered into the wizard. Synchronize job uses this query to
    sync records at the destination provider.

    - For identity store providers, the job uses filter criteria and fetches data
      from Elasticsearch.
    - For data source providers (SQL/Excel/Access), the job uses a SQL query and fetches data
      directly from the provider.  
       Click **Test** to preview the results before executing the query. You can click **Clear** to delete
      the command query.

6. On the **Synchronize Settings** wizard page, configure directory synchronization and job
   scheduling:

    - **Update all records from source**: to synchronize all records from the source to the
      destination. This is limited to Exchange 5.5, Active Directory, SQL Server, or Excel.) each
      time the job runs.
    - **Update only records that have changed**: to synchronize only those records that have changed
      in the source data since the last time the job ran. For this option to apply, your source
      must carry the last updated time stamp of each record.

        The **Select source time stamp** dropdown list is enabled when you select the
        **Update only records that have changed** option. From here, select the attribute or field
        in the source that contains a value for the time stamp.

        :::note
        Synchronizing all fields every time the job runs can be inefficient. If your data
        source has a time stamp field that indicates the last time the row was updated or modified,
        Synchronize can use it to selectively update only the rows that have changed since the last
        time the job ran.
        :::

7. Click **Save**.

8. Select the **Preview job when finished** checkbox to preview the job.
9. **Review your Changes** before finishing the job.
10. Click **Finish** to create the job.
11. After you run the job, a workflow request is triggered.
12. The generated workflow request appears in the
    [Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/request/overview.md) section for the
    workflow approvers. If the approver approves the workflow request, the job executes the
    results.

**See Also**

- [Create a Synchronize Job in Directory Manager](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection in Directory Manager Synchronize ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform Data in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique Passwords in Synchronize Jobs](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
