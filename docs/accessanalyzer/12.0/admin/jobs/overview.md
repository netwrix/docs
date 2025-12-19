---
title: "Jobs Tree"
description: "Jobs Tree"
sidebar_position: 70
---

# Jobs Tree

Jobs are the fundamental unit of Access Analyzer. It is through jobs that all data collection
queries, analysis tasks, notification tasks, action tasks, and report generation occur. Jobs are
housed within the Jobs tree of the Navigation pane.

The Jobs Tree is located in the Navigation Pane on the Access Analyzer Console.

![Jobs Tree](/images/accessanalyzer/12.0/admin/jobs/jobstreeoverview.webp)

Clicking on the arrow next to the Jobs node will expand it. The Jobs tree is organized
alphanumerically, first by job groups and then by any jobs that are independent of job groups.

Each component within the Jobs tree has an icon for quick reference. The icons are:

| Icon Description                                                                                                                 | Description                                               |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| ![jobgroup](/images/accessanalyzer/12.0/admin/jobs/jobgroup.webp)                    | Job Group                                                 |
| ![modifiedjobgroup](/images/accessanalyzer/12.0/admin/jobs/modifiedjobgroup.webp)    | Modified Job Group                                        |
| ![settings](/images/accessanalyzer/12.0/admin/jobs/settings.webp)                          | Settings node for a Job Group/ Configure node for a job   |
| ![job](/images/accessanalyzer/12.0/admin/jobs/job.webp)                              | Job                                                       |
| ![modifiedjob](/images/accessanalyzer/12.0/admin/jobs/modifiedjob.webp)              | Modified Job                                              |
| ![lockedjob](/images/accessanalyzer/12.0/admin/jobs/lockedjob.webp)                  | Locked Job (Only applicable to Role Based Access feature) |
| ![status](/images/accessanalyzer/12.0/admin/jobs/status.webp)                               | Status node for a Job                                     |
| ![connectstatus](/images/accessanalyzer/12.0/admin/jobs/connectstatus.webp)          | Job’s ConnectStatus Node                                  |
| ![jobstatus](/images/accessanalyzer/12.0/admin/jobs/jobstatus.webp)                              | Job Status for a Job                                      |
| ![taskstatus](/images/accessanalyzer/12.0/admin/jobs/taskstatus.webp)                | Task Status for a Job                                     |
| ![results](/images/accessanalyzer/12.0/admin/jobs/results.webp) | Results node for a Job                                    |
| ![messages](/images/accessanalyzer/12.0/admin/jobs/messages.webp)                    | Job’s Messages table                                      |
| ![jobsdata](/images/accessanalyzer/12.0/admin/jobs/jobsdata.webp)                    | Job’s Data Table or View                                  |
| ![jobsreport](/images/accessanalyzer/12.0/admin/jobs/jobsreport.webp)                | Job’s Report                                              |

A green checkmark over a Job or Job Group icon indicates a configuration change has been made to the
job or job group. The global settings configured under the Settings node are inherited down through
the Jobs tree to the job unless inheritance is broken in a job group’s Settings node, a job’s
Configure node, or a job’s Properties window. See the
[Navigating the Console](/docs/accessanalyzer/12.0/admin/navigate/overview.md) for additional information.

## Job Execution Options

Access Analyzer is designed to execute jobs one at a time in the order assigned. If a job group is
run, the jobs execute in the order listed within the job group. Job groups are designed to run data
collection jobs before running analysis and reporting jobs. If multiple jobs are independently
triggered to run, the jobs execute in the order triggered.

Jobs execution options include:

- Manual or Ad Hoc
    - Applies logged in user’s credentials to execute the job on the Access Analyzer Console server
    - Job progress can be monitored through the **Running Instances** node
    - Order of job execution can be manipulated on the **Running Instances** node
    - Closing the Access Analyzer Console terminates the running job and clear the jobs queue
- Schedule
    - Applies Schedule Service Account credentials to execute the job through Windows Task Scheduler
    - Each scheduled task independently employs the Access Analyzer application, allowing unrelated
      tasks to run simultaneously
    - Runs on schedule whether a user is logged in or not

## Changes Window

The Changes window is where jobs are created by customers or professional services engineers. Custom
jobs can be enabled to track changes to configuration settings. When enabled, configuration changes
are tracked in change logs stored within the job folder. Changes can also be viewed within this
window.

Remember, custom jobs are not shipped with Access Analyzer but instead user created.

The Changes window opens from the **Changes** option in the right-click menu from the selected Jobs
tree, job group, or job node.

![Changes Window](/images/accessanalyzer/12.0/admin/jobs/changeswindow.webp)

Select **Enabled** from the drop-down menu in the upper-left corner to turn on change tracking of
configuration settings. Select a modification from the table and click **Undo** to revert the
change.

The window columns display the following information:

- Job Path – Path to the job where the configuration change occurred, only visible when viewed at
  the Jobs tree or job group level
- Component – Component of the job where the configuration change occurred, for example Job, Query,
  or Analysis
- Modification – Type of change that was made, for example Add or Update
- Task – Name of the analysis or action task modified, only populated when the change occurred to an
  Analysis or Action component
- Setting – A changed setting
- Value – New setting value. If the modification was an update, this displays both the old and the
  new setting value.

Select a modification from the table and click **Undo** to revert the change.

If configuration change tracking is **Disabled**, configuration changes are only written directly to
the job’s XML file. If the configuration change tracking feature was previously enabled and then
disabled at a later time, an option is provided to merge changes back into the job’s XML file.

![Change Window Merge Changes](/images/accessanalyzer/12.0/admin/jobs/changeswindowmerge.webp)

To merge the changes into the job’s XML file without disabling the configuration change tracking
feature, click **Merge** on the bottom left corner of the Changes window and then click **Yes** on
the Access Analyzer pop-up window to confirm the merge.

![Changes Window Locked](/images/accessanalyzer/12.0/admin/jobs/changeswindowlocked.webp)

Changes between releases are tracked. Only jobs that are locked can be upgraded.

:::note
Jobs that are included in Access Analyzer are locked and changes cannot be made to those
jobs.

:::
