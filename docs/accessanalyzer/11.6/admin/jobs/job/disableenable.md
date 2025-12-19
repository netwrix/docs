---
title: "Disable or Enable a Job"
description: "Disable or Enable a Job"
sidebar_position: 60
---

# Disable or Enable a Job

Job groups may contain individual jobs that should not be run when the entire job group is run. Some
job groups also contain jobs that can optionally be run separately from the rest of the job group.
Individual jobs can be disabled or enabled at the job group or job level. Disabled jobs do not
execute when the parent job group is run.

If the role based access feature is enabled, the ability to enable and disable jobs is limited by
the assigned role. See the
[Role Based Access](/docs/accessanalyzer/11.6/admin/settings/access/rolebased/overview.md)
topic for additional information.

## Disable a Job

Jobs can be disabled from the Jobs tree. Disabled jobs cannot be run manually, through a scheduled
task, or executed as part of the job group. Follow the steps to disable a job.

**Step 1 –** Select a job group or job.

:::note
When disabling jobs at the job group level, all jobs contained in the job group are
disabled, but the job group is not disabled. Any additional jobs added to that job group at a later
time will be enabled by default.
:::


![Disable Job from Jobs Tree](/images/accessanalyzer/11.6/admin/jobs/job/disablejob.webp)

**Step 2 –** Right-click on the job group or job and select **Disable Job(s)** from the menu.

![Disabled Job in the Jobs Tree](/images/accessanalyzer/11.6/admin/jobs/job/disabledjob.webp)

The job is now disabled. If a job group was selected, all the jobs in the group are now disabled.
Disabled jobs are grayed out, and a red cross is displayed in front of the job.

![Disabled Job Description page banner](/images/accessanalyzer/11.6/admin/jobs/job/disabledjob2.webp)

A yellow banner also notifies users that a job is disabled in the Job’s Description page.

Additionally, if a disabled job is run, a warning message appears in the Messages table stating:
`[UserName] requested [JobName] to run but it is in a disabled state`. Job statistics also do not
display on the job’s description page.

## Enable a Job

Jobs that have been disabled can be enabled from the Jobs tree. Following the steps to enable a
disabled job.

**Step 1 –** Select the disabled job. If multiple jobs in a job group are disabled, select the job
group to enable all of the disabled jobs.

![Enable Job from Jobs Tree](/images/accessanalyzer/11.6/admin/jobs/job/enablejob.webp)

**Step 2 –** Right-click on the job group or job and select **Enable Job(s)** from the menu.

The job is now enabled. If a job group was selected, all the jobs in the group are now enabled.
