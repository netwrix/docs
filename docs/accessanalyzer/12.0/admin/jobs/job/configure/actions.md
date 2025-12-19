---
title: "Actions Node"
description: "Actions Node"
sidebar_position: 40
---

# Actions Node

The Actions node uses Access Analyzer action modules to take action on collected and analyzed data.
Action can be taken on objects leveraging collected data or analyzed data, for example from a
listing of locked-out accounts, an action can be executed to unlock those accounts.

:::note
Action modules are available with a special Access Analyzer license.
:::


![Action Selection page](/images/accessanalyzer/12.0/admin/jobs/job/configure/actionselection.webp)

The Action Selection view lists all action tasks for the selected job. The listed information
includes:

- Name – Name of the action task (as provided by the creator of the task)
- Description – Description of the action task (as provided by the creator of the task)
- Module – Name of the Access Analyzer action module
- Table – Name of the source table for the action

![Options at the top of the Action Selection page](/images/accessanalyzer/12.0/admin/jobs/job/configure/actionselectionoptions.webp)

The Actions section at the top has five options:

- Add from Library – Opens the Libraries window for adding and configuring pre-made action tasks
- Create Action – Opens the Action Properties window for creating and configuring action tasks
- Delete Action – Deletes the selected action task from the list

    - This action does require confirmation

- Action Properties – Opens the Action Properties window for the selected action task

    - See the [Action Properties Page](/docs/accessanalyzer/12.0/admin/action/overview.md#action-properties-page) topic for
      additional information
    - See the [Action Modules](/docs/accessanalyzer/12.0/admin/action/overview.md) topic for additional information

    :::note
    The AutoAction task appears in the Analysis Selection view, not in the Action
    Selection view.
    :::


- Execute Action – Opens the Action Execution window and starts executing the selected action

    - Does not require an action task to be checked, only selected

![Buttons at the bottom of Action Selection page](/images/accessanalyzer/12.0/admin/jobs/job/configure/actionselectiontablebuttons.webp)

At the bottom of the Action Selection view, there are action buttons that apply to the table:

- Move Up – Moves the selected action task up the list, which is important since action tasks are
  executed in the order listed in the table
- Move Down – Moves the selected action task down the list, which is important since action tasks
  are executed in the order listed in the table
- Select All – Selects all action tasks in the table for execution

The Action Selection view also has its own right-click menu for taking action on the action task or
the job.

![Actions Right-Click Menu](/images/accessanalyzer/12.0/admin/jobs/job/configure/actionsrightclickmenu.webp)

The options for the Actions node right-click menu are:

- Create Action – Opens the Action Properties window
- Copy Action – Copies the selected action to the clipboard
- Paste Action – Opens the Action Properties window for modifying copied action tasks
- Delete Action – Deletes selected action task
- Properties – Opens the Action Properties window
- Execute Action – Opens the Action execution window and runs an action
- Run Job – Starts job execution for the selected job
- Add Instant Job – Opens the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md)
- Create Job (Ctrl + Alt + A) – Creates a new job at the same location as the selected job
