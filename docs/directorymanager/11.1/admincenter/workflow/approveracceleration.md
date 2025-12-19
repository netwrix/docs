---
title: "Workflow Approver Acceleration"
description: "Workflow Approver Acceleration"
sidebar_position: 30
---

# Workflow Approver Acceleration

The workflow approver acceleration feature ensures that no workflow request remains undecided. It
automatically accelerates a request to another approver if the current approver does not act on it
for a certain number of days.

Let’s assume User A, who is the approver of a workflow, does not approve/deny a request for x number
of days. This request will accelerate to User B (first acceleration level), and if User B does not
take action for x days, it will accelerate to User C (second acceleration level). The request will
continue to be accelerated to the maximum level, and if not approved/denied, it will go to the
default approver. When no default approver is defined, the request becomes static. A static request
is one that is active in Directory Manager and can be approved or denied by the approver any time.
It continues to appear in the list of pending requests for the approver(s).

Workflow approver acceleration settings apply to all workflows in the identity store. However, you
can exempt individual workflows from it.

## Apply Approver Acceleration

To configure approver acceleration for an identity store, you have to:

- Enable approver acceleration.
- Set the number of days a request stays with an approver before it is accelerated to the next
  approver.
- Specify the maximum number of acceleration levels.

A scheduled job, Workflow Acceleration, is responsible for accelerating requests to the next level,
auto approve requests, and send notifications. See the
[Workflow Acceleration Schedule](/docs/directorymanager/11.1/admincenter/schedule/workflowacceleration.md) topic.

**To apply approver acceleration:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Workflows** under **Settings** in the left pane.
4. On the **Workflows** page, click the **Advanced Workflow Settings** tab.

    :::note
    When an SMTP server is not defined for the identity store, approver acceleration settings
    are disabled and a message is displayed with a **Configure Now** link to redirect you to the
    **Notifications** page.
    :::


5. Use the **Approver Acceleration** toggle button to apply the approver acceleration settings and
   rules to all workflows defined for the identity store.  
   To exempt a particular workflow, open it and clear the **Approver Acceleration** check box. See
   the [Modify a Workflow](implement.md#modify-a-workflow) topic.
6. In the **Maximum Levels** box, specify a number, say 2. Workflow requests would be accelerated to
   a maximum of 2 levels for approval. Requests that are nor approved or denied at the maximum level
   become static.
7. In the **Repeat Every X Days** box, specify x number of days, say 5. When an approver does not
   act on a request for the specified number of days, the request is accelerated to the next
   approver in the acceleration chain.
8. Click **Save**.

## Workflow Approver Acceleration Rules

When the approver of a workflow does not approve/deny a request within a certain number of days,
Directory Manager applies certain rules to forward it to another approver.

On acceleration, the new approver receives an email notification to approve/deny the request.

:::note
Even after acceleration, all previous approvers are authorized to approve/deny the requests.
Administrators can also approve or deny these requests at any given time from the _All Requests_
node in the Directory Manager portal.
:::


Workflow acceleration rules are discussed below, with these assumed acceleration settings:

Acceleration level: 3  
Approval days: 5

### When the Approver is a User

Acceleration rules for a user approver are:

1. When the approver is a user who does not approve/deny a request for 5 days, the request is
   accelerated to the user’s primary manager.  
   Example: A workflow request is with User A, who does not approve/deny it. After 5 days, the
   request will be accelerated to User A’s manager (first level acceleration).
2. If the new approver (User B) does not approve/deny the request in the next 5 days, the request is
   accelerated to User B's primary manager (User C) - second level acceleration.
3. If the new approver (User C) does not approve/deny the request in the next 5 days, the request is
   accelerated to User C’s primary manager (User D) – third level acceleration).
4. After the third (and the last) level acceleration, if User D does not approve or deny the request
   for 5 days, the request goes to the default approver. If the default approver is not specified,
   the request becomes static.

:::note
Consider the following:
:::


1.  If, in the acceleration chain, any approver is disabled, the workflow request is directly sent
    to the primary manager of the disabled approver in the same acceleration hop. Referring to the
    example in step 3, if User C is disabled, the workflow request will go to User D (instead of
    User C) in second-level acceleration.
2.  If the hierarchy breaks at any point in the acceleration chain, the request is routed to the
    default approver. Referring to the example in step 3, if User C does not have a manager, the
    chain breaks. As a result, the request is sent to the default approver. See the Cases for the
    Default Approver topic.

### When the Approver is a Group

If a group is set as the approver of a workflow route or comes up as an approver in the acceleration
chain, the request is available to all group members for approval. Members added to the group
hereafter do not have the authority to approve or deny the request. The request is considered
approved or denied when any one group member takes action on it.

Acceleration rules for a group approver are:

1. When a group is set as the approver in a workflow, the request is available to all existing group
   members for approval. If no group member approves/denies the request for 5 days, the request is
   accelerated to the group’s primary owner.  
   Let’s assume a workflow request is with Group A, and none of the members approve/deny it. After 5
   days, the request is accelerated to Group A’s primary owner, (first level acceleration).
2. If Group A’s primary owner (Object O) does not approve/deny the request in the next 5 days, the
   following happens:

    - When Object O is a user, the request will accelerate to its manager (second level
      acceleration). It will move up the acceleration chain of Object O till the maximum
      acceleration level.
    - When Object O is a group, the request will accelerate to all group members (second level
      acceleration). And when none of the group members approve or deny the request in the next 5
      days, the request will accelerate to the group;s primary owner (third level acceleration).

3. After the third (and the last) level acceleration, if the approver(s) do not approve or deny the
   request for 5 days, the request goes to the default approver. If the default approver is not
   specified, the request becomes static.
4. If the group set as approver has a nested group as its member, then requests are also sent to
   members of the nested group, but only up till level 1.  
   Suppose a group has three members; User A, User B, and Group C (nested group). A request sent to
   this group goes to User A, User B, and all members of Group C. If Group C has another group as
   its member, the request will not go to the member group.
5. Scenarios where an approver is disabled or the hierarchy breaks are discussed as a note at the
   end of the When the Approver is a User topic.

### Cases for the Default Approver

Rules for the default approver are:

1. When the default approver is a user who does not approve/deny a request for 5 days, the request
   becomes static.
2. When a default approver is not set in advanced workflow settings, requests cannot be accelerated
   to it; hence they become static.
3. When a group is set as the default approver, workflow requests are accelerated to all group
   members.
4. If members of the default approver group do not approve/deny a request for 5 days, it is
   accelerated to the group's primary owner.
5. If the default approver group has no members or when all members are disabled, the request is
   accelerated to the group's primary owner.
6. However, if the owner of the default approver group is also a group, the workflow request is not
   accelerated and becomes static.

### Other Cases

1. In a circular manager situation, requests are auto-approved.  
   **Example:** User A is the approver of a workflow, who does not approve/deny a request for 5
   days. The request is accelerated to User A’s manager – User B (first level acceleration). If User
   B does not approve/deny the request in the next 5 days, the request goes to User B’s manager –
   User C (second level acceleration). If User C does not approve/deny the request in the next 5
   days, the request is accelerated to User C’s manager (third level acceleration). However, if User
   A is the manager of User C, a circular manager situation occurs and the workflow request will be
   auto approved (and not go to User A).
2. When the requester comes up as an approver in the approval acceleration chain, the request is
   auto approved.  
   Example: User A does not approve/deny a request for 5 days. The request is accelerated to User
   A’s manager (first level acceleration). If User A’s manager (User B) is the initiator of the
   workflow request, the request is auto approved (and not accelerate to User B).
3. For the _Transfer a User_ workflow, a request goes to the new primary manager of the requester
   for first level acceleration.  
   If User A transfers User B to another manager (User C), a request goes to User C for approval. If
   User C does not approve/deny it for 5 days, the request will move up User C’’s acceleration
   chain.
4. When the approver, with whom a request currently resides, is removed as manager or group owner,
   the request is sent to the recipient that is set as the new manager/owner and removed from the
   previous manager’s/owner’s approval queue. The request will also ascend the new manager's/owner's
   managerial line.  
   Example: A workflow request accelerates to User A but before User A approves/denies it and the
   next acceleration is due, User A is replaced by User B as manager. In this case, the request will
   move to User B and ascend User B’s managerial line accordingly.
5. If an administrator re-routes a workflow request to another user (User B) from the Directory
   Manager portal, the request acceleration chain will follow User B’s managerial line.
