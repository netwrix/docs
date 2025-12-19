---
title: "Schedule Job and Notifications"
description: "Schedule Job and Notifications"
sidebar_position: 60
---

# Schedule Job and Notifications

On **Schedule Job and Notifications**, you can set the schedule on the basis of which the job can
run in future and set the notifications settings for the job.

1. On the **Schedule Job and Notifications** page:

    1. In the **Schedule Job** section, choose an existing job from the drop down list.
    2. In the **Schedule** section, the **Task name** drop down lists the Smart Group Update jobs
       existing in the identity store for the Active Directory domain that is provided as
       destination in this Synchronize job. Select a job that you want to run along with this
       Synchronize job. The selected job will run each time the Synchronize job is run either
       manually or from the Synchronize job scheduler.

        If you are modifying an existing job, you can also a new schedule for the job. Visit
        [Synchronize Schedule](/docs/directorymanager/11.0/signin/schedule/synchronize.md)

2. Set up email notification of job run results:

    1. Select the **Enable** option.
    2. Enter email addresses of notification recipients in **Send notification to the following
       email(s)** box
    3. From the **Send Notification** options, select one of the following notification trigger
       event:

        1. **Always**: Send a notification every time the job  is run, regardless of outcome.
        2. **Records are updated**: Send a notification only when one or more records have been
           updated.
        3. **One or more errors occur**: Send a notification only when errors occur while executing
           the job.
        4. **Job fails**: Send a notification only when a fatal error occurs causing the job to
           fail.

            RECOMMENDED: This step requires that notification settings are already configured in the
            connected identity store. Click Configure Notifications if notifications are not
            configured.

3. Click on **Advanced Settings** to go to **Advanced Setting For the Job** page:

4. Review and test the default query statement shown and modify it, if required on the **Source
   Query** section.

    The Source Query page shows the default query statement generated from the settings you have
    entered into the wizard. Synchronize job uses this query to fetch records from the source
    provider.

5. On the **Destination Query** section, review the default query statement shown and modify it if
   required.

    Like the Source Query page, the Destination Query page shows the default query statement
    generated from the settings you have entered into the wizard. Synchronize job uses this query to
    sync records at the destination provider.

    - In case of Identity store providers, filter criteria will be used, and its data will be
      fetched from elastic search.
    - In case of Data source providers (SQL/Excel/Access), SQL query will be used, and data will be
      fetched directly from the provider.  
       Click Test to preview the results before executing the query. You can click Clear to delete
      the command query.

6. On the **Synchronize Settings** wizard page, configure directory synchronization and job
   scheduling:

    - **Update all records from source**: to synchronize all records from the source to the
      destination. This is limited to Exchange 5.5, Active Directory, SQL Server, or Excel.) each
      time the job runs.
    - **Update only records that have changed**: to synchronize only those records that have changed
      in the source data since the last time the job was run. For this option to apply, your source
      must carry the last updated time stamp of each record.

        The **Select source time stamp** field drop-down box gets enabled when you select the
        **Update only records that have changed** option. From here, select the attribute or field
        in the source that would contain a value for the time stamp.

        NOTE: Synchronizing all fields every time the job runs can be inefficient. If your data
        source has a time stamp field that indicates the last time the row was updated or modified,
        Synchronize can use it to selectively update only the rows that have changed since the last
        time the job was run.

7. Click **Save**.

8. Select **Preview job when finished** checkbox to preview the job.
9. **Review your Changes** before finishing the job.
10. Click **Finish** and create the job.
11. Once you run the job, a workflow request is triggered.
12. Generated workflow request will be displayed in the
    [Requests](/docs/directorymanager/11.0/welcome/request/overview.md) section for the
    workflow approver(s). If the approver approves the workflow request, the job will execute the
    results.

**See Also**

- [Create a Job](/docs/directorymanager/11.0/welcome/synchronize/create/create.md)
- [Create a Job Collection ](/docs/directorymanager/11.0/welcome/synchronize/create/create_1.md)
- [Transform](/docs/directorymanager/11.0/welcome/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/docs/directorymanager/11.0/welcome/synchronize/transformation/autogenerateuniquepassword.md)
