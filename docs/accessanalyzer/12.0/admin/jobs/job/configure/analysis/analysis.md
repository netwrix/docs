---
title: "Analysis Node"
description: "Analysis Node"
sidebar_position: 30
---

# Analysis Node

The Analysis node uses Access Analyzer analysis modules to run analysis tasks on collected data.
There are two basic types of analysis modules. Most analysis modules correlate, format, and
transform collected data into powerful data views for end-stage reports and graphs.

The Notification analysis module allows for the ability to send an email notice when a trigger is
met, for example an email can be sent to an administrator to notify that disk space has reached a
particular point (the trigger) and needs to be addressed before space runs out.

![Analysis Selection page](/images/accessanalyzer/12.0/admin/jobs/job/configure/analysisselection.webp)

The Analysis Selection view lists all analysis tasks for the selected job. The listed information
includes:

- Name – Name of the analysis task (as provided by the creator of the task)
- Description – Description of the analysis task (as provided by the creator of the task)
- Module – Name of the Access Analyzer analysis module
- HostLists – Indicates the analysis task is applicable to hosts found in the referenced host lists,
  applies to analysis modules that use host list filters, for example **Business Rules** analysis
  module

![Option at the top of the Analysis Section](/images/accessanalyzer/12.0/admin/jobs/job/configure/analysisbuttonstop.webp)

The Analysis section at the top has four options:

- Create Analysis – Opens the Analysis Properties window for creating and configuring analysis tasks
- Delete Analysis – Deletes the selected analysis task from the list
    - This action does require confirmation
- Analysis Properties – Opens the Analysis Properties window for the selected analysis task
    - See the [Analysis Properties Page](/docs/accessanalyzer/12.0/admin/analysis/overview.md#analysis-properties-page)
      topic for additional information.
    - See the individual analysis module sections in the
      [Analysis Modules](/docs/accessanalyzer/12.0/admin/analysis/overview.md) topic for additional information.
- Analysis Configuration – Opens the selected analysis task’s configuration window

![Buttons at the bottom of the Analysis Selection page](/images/accessanalyzer/12.0/admin/jobs/job/configure/analysisbuttonsbottom.webp)

At the bottom of the Analysis Selection view, there are action buttons that apply to the table:

- Move Up – Moves the selected analysis task up the list, which is important since analysis tasks
  are executed in the order listed in the table
- Move Down – Moves the selected analysis task down the list, which is important since analysis
  tasks are executed in the order listed in the table
- Select All – Selects all analysis tasks in the table for execution
- Validate – Validates all analysis tasks where the **Business Rules** analysis module was used
- Validate selected – Validates selected analysis tasks where the **Business Rules** analysis module
  was used
- Edit Rules – Edits the rule for selected analysis task where the **Business Rules** analysis
  module was used

The Analysis Selection view also has its own right-click menu for taking action on the analysis task
or the job.

![Analysis Selection page right-click menu](/images/accessanalyzer/12.0/admin/jobs/job/configure/analysisrightclickmenu.webp)

The options for the Analysis node right-click menu are:

- Create Analysis – Opens the Analysis Properties window
- Cut Analysis – Cuts selected analysis task
- Copy Analysis – Copies selected analysis task
- Paste Analysis – Pastes a copied/cut analysis task to the selected location
- Delete Analysis – Deletes selected analysis task
- Properties – Opens the Analysis Properties window
- Configuration – Opens the selected analysis task’s configuration window
- Test Scorecard SQL – Validates all analysis tasks where the Business Rules analysis module was
  used
- Execute Analyses – Executes or runs the checked (enabled) analysis tasks
- Run Job – Starts job execution for the selected job
- Add Instant Job – Opens the [Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md)
- Create Job (Ctrl + Alt + A) – Creates a new job at the same location as the selected job
