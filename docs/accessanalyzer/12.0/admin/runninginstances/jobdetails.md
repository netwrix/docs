---
title: "Running Job Details"
description: "Running Job Details"
sidebar_position: 10
---

# Running Job Details

Both the Process ID and the View Details links open the running job's Details page. The path of the
job and the component are displayed at the top.

- Path – Folder path in the Jobs directory. For example,
  `Jobs\GROUP_.Active Directory Inventory\JOB_3-AD_Exceptions`.

    - The link opens the job’s directory in a Windows Explorer window

- Status – While the job is running, this field displays the component that is running. When the job
  has completed execution, it displays a completed status and lists the completion time.

    - Job configuration components include Query, Data Analysis, Action, and Report

There are three tabs: Current, History, and Queued Jobs.

## Current Tab

The **Current** tab displays information on the job actively being executed.

![Current tab](/images/accessanalyzer/12.0/admin/runninginstances/jobdetailscurrent.webp)

The tab includes:

- Order – Order in which the tasks in the job are being run
- Host Name – Name of the targeted host, only visible when a query is executing
- Query – Name of the running query task, only visible when a query is executing
- Task Name – Name of the running task, when applicable to Data Analysis, Actions, or Reports. This
  information is only visible when an analysis task or an action task are executing, or a report is
  being generated.
- Status – Execution status, for example **Queued**, **Running**, **Success**, or **Warning**.
- Message – Access Analyzer message regarding runtime activity
- Runtime – Duration of task execution
- Stop – Aborts all currently running instances

## History Tab

The History tab only displays information for the last job that completed.

![History tab](/images/accessanalyzer/12.0/admin/runninginstances/jobdetailshistory.webp)

The tab includes:

- Order – Order in which the tasks within the job ran
- Task Type – Name of the component associated to the task
- Task Name – Name of the task
- Host Name – Name of the targeted host associated with the running job, if any
- Status – Status of the completed task
- Message – Access Analyzer message associated to the **Status**
- Runtime – Duration of task execution

### Messages

In the bottom pane, the History tab includes a section to display any messages for individual job
components returned from a job execution. Clicking a Task Name displays the messages for that
component.

You can filter what messages display by using the three filters in the message pane. By clicking on
a filter arrow in the column header and selecting an available option, you can filter by Time, Type,
or Message.

![Custom Filter window](/images/accessanalyzer/12.0/admin/runninginstances/jobdetailshistorycustomfilter.webp)

If you select Custom, you can create a complex filter. See the
[Custom Filter](/docs/accessanalyzer/12.0/admin/navigate/datagrid.md#custom-filter) topic for additional information.

## Queued Jobs Tab

The Queued Jobs tab displays a list of jobs in queue and the order in which they are executed.

![Queued Jobs tab](/images/accessanalyzer/12.0/admin/runninginstances/jobdetailsqueuedjobs.webp)

The tab includes:

- Order – Order in which the queued jobs are executed. This order can be changed on the Queued Jobs
  tab by using the buttons at the bottom.
- Job Path – Folder path in Jobs directory
- State – Queue status, for example **Running** or  **Waiting**
- Connection Profile – The Connection Profile assigned to the job, if applicable
- Host Lists – The host list assigned to the job, if applicable

The **Move Up**, **Move Down**, and **Remove** buttons are for changing the order or removing a job
from the queue.
