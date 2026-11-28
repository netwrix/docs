---
title: "Directory Manager Workflows Overview"
description: "Learn how workflows add approval to directory changes, which system workflows exist, and how requests, approvers, and Synchronize jobs behave."
keywords:
  - Directory Manager workflows
  - system workflows
  - workflow requests
  - Synchronize jobs
  - workflow approval
  - Power Automate
sidebar_position: 80
---

# Directory Manager Workflows Overview

A workflow is a set of rules that Directory Manager uses as a built-in auditing system. It ensures that an authorized user approves changes to an object before Directory Manager commits them to the directory.

You define workflows for an identity store. They apply to operations such as group creation and expiry.

A workflow triggers when an operation that a user performs meets the criteria defined for that workflow. Designated users can approve or deny workflow requests in the Directory Manager portal.

:::note
Workflows require an SMTP server configured for the identity store. See the
[Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md) topic.
:::

## System workflows

Directory Manager provides the following predefined workflows (also called system workflows). They trigger when their associated events occur:

|     | Workflow Name                              | Description                                                                                                                                                        | Default Approver                                           |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 1.  | Workflow to Reset Password                 | When a user resets the user’s own password. It doesn't apply when helpdesk users reset the passwords of other users.                                                  | Primary and additional managers of the user                |
| 2.  | Workflow to Change Group Expiration Policy | When a user changes the expiry policy of a group. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver. | None                                                       |
| 3.  | Workflow to Nest a Group                   | When a user adds a group (Group A) to the membership of another group (Group B)                                                                                    | Primary and additional owners of the added group (Group A) |
| 4.  | Workflow to Join a Group                   | When a user joins a semi-private group                                                                                                                             | Primary and additional owners of the group                 |
| 5.  | Workflow to Leave a Group                  | When a user leaves a semi-private group                                                                                                                            | Primary and additional owners of the group                 |
| 6.  | Workflow to Transfer a User                | When a user transfers a direct report                                                                                                                     | The new manager                                            |
| 7.  | Workflow to Terminate a User               | When a manager terminates a direct report. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver.        | None                                                       |
| 8.  | Workflow to Change Manager                 | When a user changes the user’s primary or additional manager                                                                                                       | Existing primary and additional managers of the user       |

You can also define new workflows for an identity store.

:::note
You can't delete a system workflow, but you can disable it. You can also modify it to a limited extent.
:::

## Synchronize jobs and workflows

Workflows apply to Synchronize jobs as follows:

- When you manually run a Synchronize job, Directory Manager evaluates whether the task it performs falls under the scope of a workflow. If so, a workflow request is triggered. The job runs when the request is approved.

  Workflows don't apply to Synchronize jobs that run automatically through a Synchronize schedule.

  **Example:** You have a Synchronize job that changes the job title of users in bulk. You also have a ‘Change Title’ workflow that triggers when the job title of a user changes. The Synchronize job falls under the scope of the ‘Change Title’ workflow. When you run the job manually, the workflow triggers and an approval request goes to the recipient set as the workflow approver. If the approver approves the request, the job runs. If not, it doesn't run.
- When you manually run a job collection in which some jobs fall under the scope of workflows and others don't, workflow requests are triggered for the respective jobs. The other jobs run as usual.
- When a workflow request against a Synchronize job is pending approval, another request is triggered when the same user or any other user runs the same job again.
- When a Synchronize job runs to set the manager for a user who doesn't already have a manager, the following happens:

    - The Workflow to Change Manager triggers if a default approver is set in advanced workflow settings.
    - If the default approver isn't set, the workflow doesn't trigger and the user's manager is set without requiring any approval.

- When a Synchronize job updates multiple attributes for an object type and different workflows are defined for those attributes, a separate request is triggered for each applicable workflow and sent to the respective approvers. When one of these requests is approved, the job runs, even if another approver denies it.

  **Example:** A Synchronize job falls under the scope of three workflows. Three requests are generated and sent to three different recipients for approval. If one approver approves it, another denies it, and the third doesn't take any action, the job runs and updates all target attributes.
- Filters in workflows don't apply to Synchronize jobs.

## How workflow requests are handled

When a workflow triggers, Directory Manager generates an approval request and sends it to the designated approvers. The request informs them of the actions that a user wants to perform in an identity store. The approver can view these requests in the Directory Manager portal.

- If the approver is satisfied with the requested actions, the approver can approve the request. Directory Manager then commits the changes to the directory.
- If the approver deems the actions inappropriate, the approver can deny the request and give a reason for denial.

In either case, Directory Manager notifies the requester and, if there are multiple approvers, the other approvers of the outcome.

## Workflow approval scenarios

The following scenarios are valid when workflow approver acceleration settings aren't applied.

- When the object specified as an approver for a workflow isn't available (for example, if it is disabled or not specified), workflow requests go to the default approver. If the default approver is disabled or not specified either, the requests are auto-approved. See the [Specify a Default Approver](advancedsettings.md#specify-a-default-approver) topic.
- If the requester is also the approver for that workflow, the request is auto-approved.

## Integration with Microsoft Power Automate

To automate everyday tasks, you can link your Directory Manager workflows to Power Automate flows.
