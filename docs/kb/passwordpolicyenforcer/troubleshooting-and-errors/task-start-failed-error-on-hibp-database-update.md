---
description: >-
  The weekly HaveIBeenPwned (HIBP) database update fails because the scheduled
  task account lacks the required rights. This article explains how to review
  the schedule history and grant the "Log on as a batch job" right to resolve
  the error.
keywords:
  - HIBP
  - HaveIBeenPwned
  - Task Scheduler
  - Task Start Failed
  - Log on as a batch job
  - schedule history
  - Netwrix Password Policy Enforcer
  - HIBP updater
products:
  - password-policy-enforcer
sidebar_label: Task Start Failed Error on HIBP Database Update
tags: []
title: "Task Start Failed Error on HIBP Database Update"
knowledge_article_id: kA0Qk0000000Zc5KAE
---

# Task Start Failed Error on HIBP Database Update

## Symptom

- The weekly HaveIBeenPwned (HIBP) database update fails.
- Netwrix Password Policy Enforcer prompts the following error in the schedule history:

```
Task Start Failed
```

The error includes the following description:

```
Task Scheduler failed to start "\Netwrix\%task_name%" task for user "%user_account%".
Additional Data: Error Value: 2147943785.
```

> **NOTE:** Refer to the following steps to review the schedule history:
>
> 1. In the Netwrix Password Policy Enforcer window, select **Action** and click the **Run HIBP Updater** button.
> 2. Click the **Scheduler** button.
> 3. Select a schedule from the list and click **Edit schedule**.
> 4. In the right pane, click the **History** button.

## Cause

The user designated to run the scheduled task has insufficient rights.

> **NOTE:** Verify the designated user has sufficient rights to run the scheduled task. Refer to the following steps to establish the designated user:
>
> 1. On the Netwrix Password Policy Enforcer server, launch Task Scheduler.
> 2. In the left pane, extend the **Task Scheduler Library** folder and select the **Netwrix** folder.
> 3. In the central view, select the Password Policy Enforcer task, right-click it, and select **Properties**.
> 4. In the Properties window, review the user specified in the **When running the task, use the following user account** field.

## Resolution

Grant the designated user the **Log on as a batch job** rights in your environment via Group Policy.

> **NOTE:** Alternatively, you can assign the task to another user with **Log on as a batch job** rights. If not, the SYSTEM user can be used instead.
