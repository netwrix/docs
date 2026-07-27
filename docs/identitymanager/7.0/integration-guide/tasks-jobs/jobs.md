---
title: "Jobs"
description: "Jobs"
sidebar_position: 20
---

# Jobs

A job is a succession of tasks, to be launched and potentially scheduled, which orchestrate together the executable files that perform IGA actions.

## Anatomy of a Job

Jobs are used to write sets of successive tasks, and schedule their execution.

See how to configure [Job](../../integration-guide/toolkit/xml-configuration/jobs/job).

A job can contain tasks explicitly, or contain steps used to call existing tasks in order to use a single task in several jobs.

## Execution

Jobs are executed by agents.

The agent initiates the job and executes the agent-side tasks. Hence, the agent must have access to the relevant managed systems. The agent orders the execution of the server-side tasks, complying with the one-way data flow principle.

A job can be triggered:

- Once manually, through the **Job Execution** screen;
- Once manually, using Usercube-Invoke-Job.exe;
- Periodically, with Identity Manager's internal scheduler `CronTabExpression`;
- Periodically, with an external Scheduler such as
[Windows Task Scheduler](https://docs.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page).

## Monitoring

Any job execution is logged into the UJ_JobInstances table.

They can be monitored through the UI, via the **Job Execution** page.

<!-- #todo Access Rights-->

<!--Profile -> openIdclient-->

<!--profil -> access read/write db and execution of stuff-->



<!--Job is associated with a Profile J-->

<!--Each Task Ti with a Profil Ti-->

<!--For a Job:-->

<!--The Invoke... tool must be able to retrieve lists of task -> query the Jobs and Task Table-->

<!--The Invoke...Tool must be able to write progress report to the bdd -> JobInstance table-->

<!--For a Task:-->

<!--Write progress report -> Task Instance-->

<!--Specific stuff like SycnrhonizeSession-->

<!--Finding out what a perission does => search the /.../.. path in the code and look what's next to it ( a command handle)-->

