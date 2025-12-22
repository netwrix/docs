---
title: "Tasks"
description: "Tasks"
sidebar_position: 10
---

# Tasks

A task is Identity Manager's way to configure and use a given executable that performs a given IGA
action.

## Anatomy of a Task

Each of Identity Manager's IGA actions is contained in a standard Windows executable file that can
be launched using PowerShell.

The choice of a simple standard format for Identity Manager's building blocks makes it very easy to
pick and choose them _a la carte_ to configure the solution.

Tasks are used to insert these blocks into Identity Manager's configuration, in order to be
launchable via the UI, or even scheduled to be launched automatically periodically.

> For example, Identity Manager's tasks include synchronization, computation of entitlement
> assignments, or provisioning of varied managed systems. See the list of all available
> [Tasks](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/jobs/tasks/index.md).

## Data Consistency

Every task is written as a
[transactional process](https://en.wikipedia.org/wiki/Transaction_processing). This means that a
task cannot be executed partially. It is either fully executed, or not executed at all. It
guarantees data consistency as data cannot be harmed by a half-executed task.

Every task is written as an [idempotent function](https://en.wikipedia.org/wiki/Idempotence). This
means that, for a given input, applying a task one time will produce the same result as applying it
several times. It guarantees data consistency as it prevents the potential side-effects of a retry
which might occur following a network error, or a task failure.

Every task is designed as a
[single responsibility process](https://en.wikipedia.org/wiki/Single-responsibility_principle). This
principle ensures that two distinct tasks do not have an effect on similar pieces of the system.
This guarantees data consistency by avoiding incompatible changes to be committed by different tasks
at the same time. For the same reasons, a given task cannot be executed twice simultaneously.

## Task Modes

Two distinct modes exist to execute tasks inside jobs:

- In complete mode, tasks process whole inputs with all data.
- In incremental mode, tasks only consider the changes that occurred since their last execution.
  This mode is not available for all tasks.

Both modes can be performed considering potential filters if said tasks involve a specific selection
of data instead of whole inputs. The difference between these modes lies in the consideration of all
data for the complete mode, versus only the last changes for the incremental mode.
