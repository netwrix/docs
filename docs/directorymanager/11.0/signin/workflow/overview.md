---
title: "Workflows"
description: "Workflows"
sidebar_position: 80
---

# Workflows

A workflow is a set of rules that GroupID uses as a built-in auditing system to ensure that changes
made to an object are approved by an authorized user before they are committed to the directory.

Workflows are defined for an identity store and apply to the different operations, such as group
creation and expiry.

A workflow triggers when a certain operation, performed by a user, meets the criteria defined for
that workflow. Designated users can approve or deny workflow requests using the GroupID portal or
the GroupID mobile app.

NOTE: Workflows require an SMTP server to be configured for the identity store. See the
[Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
topic.

## System Workflows

GroupID provides the following predefined workflows (also called system workflows) that trigger when
their associated events occur:

|     | Workflow Name                              | Description                                                                                                                                                         | Default Approver                                     |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 1.  | Workflow to Reset Password                 | When a user resets his or her password. It does not apply when helpdesk users reset the passwords of other users.                                                   | Primary and additional managers of the user          |
| 2.  | Workflow to Change Group Expiration Policy | When a user changes the expiry policy of a group. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver. | None                                                 |
| 3.  | Workflow to Nest a Group                   | When a user adds a group (Group A) to the membership of another group (Group B).                                                                                    | Primary and additional owners of Group B             |
| 4.  | Workflow to Join a Group                   | When a user joins a semi-private group.                                                                                                                             | Primary and additional owners of the group           |
| 5.  | Workflow to Leave a Group                  | When a user leaves a semi-private group.                                                                                                                            | Primary and additional owners of the group           |
| 6.  | Workflow to Transfer a User                | When a user transfers his or her direct report.                                                                                                                     | The new manager                                      |
| 7.  | Workflow to Terminate a User               | When a manager terminates a direct report. By default, this workflow is disabled and no approver is specified. You can edit the workflow to add an approver.        | None                                                 |
| 8.  | Workflow to Change Manager                 | When a user changes his or her primary or additional manager.                                                                                                       | Existing primary and additional managers of the user |

You can also define new workflows for an identity store.

NOTE: You cannot delete a system workflow, but you can disable it. You can also modify it to a
limited extent.

## Synchronize Jobs and Workflows

Workflows apply to Synchronize jobs as follows:

- When you manually run a Synchronize job, GroupID evaluates whether the task it will perform falls
  under the scope of a workflow. If yes, then a workflow request is triggered. The job will run when
  the request is approved.  
  Workflows do not apply to Synchronize jobs that auto run through a Synchronize schedule.  
  **Example:** You have a Synchronize job that changes the job title of users in bulk. You also have
  a ‘Change Title’ workflow that triggers when the job title of a user is changed. In this case, the
  Synchronize job falls under the scope of the ‘Change Title’ workflow. When the job is run
  manually, the workflow triggers and an approval request goes to the recipient set as the workflow
  approver. If the approver approves the request, the job will run. If not, then it will not run.
- When you manually run a job collection in which some jobs fall under the scope of workflows while
  others do not, workflow requests will be triggered for the respective jobs while the other jobs
  will run as usual.
- When a workflow request against a Synchronize job is pending for approval, another request will be
  triggered when the same user or any other user runs the same job again.
- When a Synchronize job runs to set the manager for a user who does not already have a manager, the
  following happens:

    - The _Workflow to Change Manager_ will trigger if a default approver is set in advanced
      workflow settings.
    - If the default approver is not set, the workflow will not trigger and the user's manager will
      be set without requiring any approval.

- When a Synchronize job updates multiple attributes for an object type and different workflows have
  been defined for the various attributes that it updates, then a separate request is triggered for
  each of the applicable workflows and sent to the respective approvers. Even when one of these
  requests is approved, the job runs, irrespective of whether another approver denies it.  
  **Example:** A Synchronize job falls under the scope of three workflows. Hence, three requests are
  generated and sent to three different recipients for approval. If an approver approves it, another
  denies it, and the third does not take any action, the job will run and update all target
  attributes.
- Filters in workflows do not apply to Synchronize jobs.

## How are Workflow Requests Handled

When a workflow is triggered, an approval request is generated and sent to the designated
approver(s), informing them of the actions that a user wants to perform in an identity store. The
approver can view these requests in the GroupID portal and the GroupID mobile app.

- If the approver is satisfied with the requested actions, he or she can approve the request and the
  changes are committed to the directory.
- If the approver deems the actions inappropriate, he or she can deny the request and provide a
  reason for denial.

In any case, the requester and other approvers (in case of multiple approvers) are notified of the
outcome.

## Workflow Approval Scenarios

The following scenarios are valid when workflow approver acceleration settings are not applied.

- When the object specified as an approver for a workflow is not available (such as if it is
  disabled or not specified), workflow requests are sent to the default approver. If the default
  approver is disabled or not specified either, the requests are auto approved. See the
  [Specify a Default Approver](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md#specify-a-default-approver)
  topic.
- If the requester is also the approver for that workflow, the request is auto approved.

## Integration with Microsoft Power Automate

To automate your everyday tasks, you can also link your GroupID workflows to Power Automate flows.

**See Also**

- [Implement Workflows](/docs/directorymanager/11.0/signin/workflow/implement.md)
- [Manage Advanced Workflow Settings](/docs/directorymanager/11.0/signin/workflow/advancedsettings.md)
- [Workflow Approver Acceleration](/docs/directorymanager/11.0/signin/workflow/approveracceleration.md)
- [Integrate with Power Automate](/docs/directorymanager/11.0/signin/workflow/integrate.md)
