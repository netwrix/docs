# Create a Job

Synchronize allows you to move data from one data source to another using a set of sequential
commands that run in the background. The set of commands is called a job. You can create a job from
scratch, from a predefined template, or from a template that you create yourself.

Synchronize provides these predefined job templates:

- Linked Mailbox Creation in Active Directory
- Move and Disable Objects in Active Directory
- Move Objects in Active Directory
- Sync GAL in Active Directory

These job templates represent common business scenarios. You can use these templates or modify them
to create your own custom templates. Templates offer predefined settings, which you can apply to the
new job (except for the source and destination configurations) and modify as required. You can also
create a new job by duplicating and modifying an existing one.

Creating a job from scratch requires that you specify the source and destination resources involved
in the transfer of data. You must also map the fields for the source and destination objects in
which the data transfer takes place.

You can also apply data transformations. A transformation allows you to modify data as it is being
transferred to the destination.

Once you create a job, you can either run it manually or schedule it to run periodically.

You can create templates from existing jobs on-the-fly and reuse their settings in new jobs.

To understand how workflows work with Synchronize jobs, see the
[Synchronize Jobs and Workflows](/versioned_docs/groupid_11.0/groupid/admincenter/workflow/overview.md#synchronize-jobs-and-workflows)
topic.

## Create a new job

1. On GroupID Portal, select **Synchronize**on left pane.
2. On the Synchronize portal, click **Create New** and then click **Job**.
3. On the
   [Choose Your Job Template](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/chooseyourjobtemplate.md)
   page, enter the job details and select whether to use a job template or create the job from
   scratch.
4. Click **Next Step**.
5. On the
   [Select Your Source and Destination](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/sourceanddestination.md)
   page, specify the source and destination providers.
6. Click **Next Step**.
7. On the
   [Objects, Fields and Mapping ](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/objectfieldsandmapping.md)
   page, map the source and destination fields and apply transformations.
8. On the
   [Schedule Job and Notifications](/versioned_docs/groupid_11.0/groupid/portal/synchronize/job/scheduleandnotification.md)
   page, choose a schedule for a job and set up notification settings.

    NOTE: After creating the job, you can modify the schedule for the job and you can also create a
    new schedule.

9. Select **Preview job when finished** checkbox to preview the job.
10. **Review your Changes** before finishing the job.
11. Click **Finish** and create the job.
12. Once you run the job, the job runs if workflow is not configured. If workflow is configured, the
    request gets generated.
13. Generated workflow request will be displayed in the
    [Requests](/versioned_docs/groupid_11.0/groupid/portal/request/overview.md) section for the
    workflow approver(s). If the approver approves the workflow request, the job will execute the
    results.
14. The **Review Job Run** dialog box appears, providing access to run statistics, reports, and logs
    for the last job run.

**See Also**

- [Job Templates](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/jobtemplate.md)
- [Manage a Job](/versioned_docs/groupid_11.0/groupid/portal/synchronize/manage/job.md)
- [Synchronize Schedule](/versioned_docs/groupid_11.0/groupid/admincenter/schedule/synchronize.md)
- [Transform](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/overview.md)
- [Auto-Generate Unique, Complex Passwords](/versioned_docs/groupid_11.0/groupid/portal/synchronize/transformation/autogenerateuniquepassword.md)
- [Sample Transform Scripts](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/sampletransformscript.md)
- [Sample Container Scripts](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/samplecontainerscript.md)
- [Script](/versioned_docs/groupid_11.0/groupid/portal/synchronize/script/dtmscript.md)
