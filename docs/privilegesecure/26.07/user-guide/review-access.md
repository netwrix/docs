---
title: "Review an access certification"
description: "Approve or deny the access entitlements of an access certification task assigned to you, and commit the review."
sidebar_position: 110
---

# Review an access certification

An access certification asks you to confirm that users still need the access they have. An Administrator creates the task and assigns you as the reviewer. You approve or deny each entitlement, and then commit the review.

An entitlement is the access that an access policy gives a user: a resource or credential, an activity, and the permissions that come with it.

## Before you begin

- You must hold the Reviewer role. A group that holds the role also qualifies. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).
- The task must name you as its reviewer. You see only the tasks assigned to you, and only you can review the entitlements of your task.
- The task must be in the **Ready to Start** or **Incomplete** status. You can't review a task in the **Setup** or **Complete** status.

For how an Administrator creates a task, see [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).

## Review the entitlements

1. Select **Auditing & Reporting** > **Access Certification** in the left navigation.
2. In the task list, select the task, and then select the **Entitlements** tab.
3. Select **Review** to open the **Review Activity Details** window.
4. Select the rows to change. Use **Search** to filter the rows, or sort a column.
5. Select **Approve** to keep the access, or **Deny** to remove it.
6. Select **Close**.

{/* TODO screenshot: the Review Activity Details window with entitlement rows selected */}

The window has these columns:

| Column | Shows |
|---|---|
| **Status** | The review state of the entitlement: **Requested** (review started), **Approved**, or **Denied**. |
| **Name** | The name of the account. |
| **Resource** | The resource. |
| **Activity** | The activity. |
| **Credential** | The credential the access policy lets the activity release. |
| **Permissions** | The permissions the access policy grants. |
| **Access Policy** | The name of the access policy that grants the access. |
| **Connection Profile** | The connection profile on the access policy. |
| **Last Accessed** | The last time the user used the activity. |

The **Access Policy** column shows which policy grants each entitlement. This is useful when a user has the same resource and activity through more than one policy.

{/* TODO screenshot: the Review Activity Details window showing the Access Policy column. The lab had no access certification with data. */}

:::note
A denial doesn't remove the user from the access policy. Privilege Secure sets a deny flag on that user, activity, and resource or credential. After you commit the review, a session request for that combination fails with an access denied message. An Administrator can restore the access. See [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md#what-denial-does).
:::

## Save your progress

You don't have to review every entitlement in one visit. Privilege Secure saves your changes as you work. The task status shows **Incomplete** until you commit. Return to the task at any time to continue.

## Commit the review

When you have reviewed every entitlement, the **Commit** button on the **Entitlements** tab is enabled.

1. Select the task, and then select the **Entitlements** tab.
2. Select **Commit**.

The task status changes to **Complete**. You can't delete a completed task.

:::warning
A commit can't be undone. To review the access again, an Administrator must create a new access certification task.
:::

**Commit** is disabled until you approve or deny every entitlement. Pointing at the disabled button shows "Not all entitlements have been reviewed. Please approve or deny all entitlements before committing." The console doesn't ask you to confirm. When you select **Commit**, the console commits the review right away and shows the message "Committed '`<task name>`'".

After the commit, the **Export as CSV** button on the **Entitlements** tab is enabled. It is disabled before the commit, and its hover text says it is available when the task is Complete. Both the assigned reviewer and an Administrator see the button.

A user who has only the Reviewer role sees just the tasks assigned to them in the task list. For a task that isn't assigned to you, **Review** and **Commit** stay disabled with the hover text "You are not the reviewer for this task". If a review is still submitted for a task that isn't yours, the server rejects it with "This user is not authorized to review this Access Certification Task".
