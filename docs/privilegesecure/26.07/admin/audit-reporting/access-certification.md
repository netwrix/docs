---
title: "Run an access certification"
description: "Create an access certification task, assign a reviewer, and commit the review so denied access is removed from the users you chose."
sidebar_position: 20
---

# Run an access certification

An access certification asks a reviewer to confirm that users still need the access they have. An Administrator creates a task that names the users and a reviewer. The reviewer approves or denies each entitlement, then commits the review. A denied entitlement stops the user from starting that activity.

An entitlement is the access that a policy gives a user: a resource or credential, an activity, and the permissions that come with it.

To open the page, select **Auditing & Reporting** > **Access Certification**.

## Who does what

- **Administrators** create, change, and delete tasks. They also add the users to review and export the results.
- **Reviewers** see only the tasks assigned to them and are the only people who can review the entitlements of a task.

A person is a reviewer when they hold the Reviewer role directly, or through a group or user and group collection that holds it. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md). Only a user with the Reviewer role can be chosen as the reviewer of a task.

## Task statuses

| Status | Meaning |
|---|---|
| **Setup** | The Administrator is creating the task. The reviewer can't see it. |
| **Ready to Start** | The task waits for the reviewer to begin. |
| **Incomplete** | The reviewer started the review and hasn't committed it. |
| **Complete** | The reviewer committed the review. |

A new task starts in **Setup**. It moves to **Ready to Start** when the Administrator opens the task's **Users** tab, selects **Add**, chooses the accounts to review in the **Add Users** window, and selects **Save**. Privilege Secure then lists the entitlements of those accounts on the **Entitlements** tab, and **Add** is no longer available for the task. You don't set a start time.

## Create a task

1. Select **Auditing & Reporting** > **Access Certification**.
2. Above the task list, select **+** (add task).
3. Enter a name in **Enter Access Certification Name**, for example `Q4 server access review`.
4. (Optional) Enter a **Description**.
5. In **Reviewer**, select a reviewer. The default is `<none>`.
6. Click **Save**.
7. Select the **Users** tab, and then select **Add**.
8. In the **Add Users and Groups** window, filter by users or groups, or search. Select a row to move it to **Users & Groups to Add**. Select a row in that table to move it back.
9. Click **Add**.

:::warning
You can't add or remove users after you add them to the task. To change the list, create a new task.
:::

{/* TODO screenshot: the Access Certification page with a task selected, showing the task list, the details, and the Users tab */}

The task list on the left has a **Search** box, a status for each task, and a delete icon. The details on the right show **Name**, **Description**, **Reviewer**, **Status**, **Date Started** (after the review starts), and **Date Completed**.

### The Users tab

The **Users** tab lists the users and groups under review. The columns are **Name**, **User Name**, **Email**, and **Type** (user or group). Select a name to open the details page of that account. See [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

### The Entitlements tab

The **Entitlements** tab lists the access of the users in the task. It stays empty until you add users on the **Users** tab. The columns are:

- **Status:** **Requested**, **Approved**, or **Denied**.
- **User Name:** The account.
- **Resource:** The resource.
- **Activity:** The activity.
- **Credential:** The credential the policy lets the activity release.
- **Permissions:** The permissions the policy grants.
- **Access Policy:** The policy that grants the access.

{/* TODO screenshot: the Entitlements tab with the Access Policy column */}

The tab has three buttons:

- **Review:** Opens the **Review Activity Details** window. Only the assigned reviewer can use it.
- **Commit:** Applies the review. Enabled when every entitlement is reviewed.
- **Export Entitlements as CSV:** Exports the table. Enabled after the review is committed.

## Review the entitlements

The assigned reviewer completes these steps. For the reviewer's view, see [Review access](/docs/privilegesecure/26.07/user-guide/review-access.md).

1. Select **Auditing & Reporting** > **Access Certification**.
2. Select the task, and then select the **Entitlements** tab.
3. Click **Review**.
4. In the **Review Activity Details** window, select the rows to change. The columns include **Name**, **Resource**, **Activity**, **Credential**, **Permissions**, **Access Policy**, **Connection Profile**, and **Last Accessed**.
5. Click **Approve** to keep the access, or **Deny** to remove it.
6. Click **Close**.
7. When every entitlement is reviewed, select **Commit**.

For example, the reviewer approves the `Server-Admins` entitlements on the finance servers and denies one stale entry for a former contractor, then clicks **Commit**.

The reviewer doesn't have to finish in one visit. The review saves as the reviewer works, and the task status is **Incomplete** until the commit.

:::warning
You can't undo a commit or delete the task afterward. To review again, create a new task.
:::

## What denial does

A denial sets a deny flag on that user, activity, and resource or credential. The user stays in the access policy. After the commit, a session request for that combination fails with an access denied message that names the user, the activity, and the resource or credential.

To restore the access, an Administrator removes the denial from the access policy:

1. Open the access policy and select the **Users** tab.
2. Expand the user's row. The **Access Denied** table lists each denied activity, resource, and credential with the access certification task that denied it.
3. In the **Enable** column, select the unlock icon for the denial.
4. In the **Enable Activity** window, select **Enable**.

This deletes the denial.

For how certification affects a policy, see [Resource-based policies](/docs/privilegesecure/26.07/configuration/access-policies/resource-based-policy.md).

## Delete a task

Select the task, and then select the delete icon. Confirm the prompt. You can delete a task only before the review is committed.

For example, to remove a task created for the wrong resource group, select it before anyone commits a review, select the delete icon, and confirm.
