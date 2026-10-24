---
title: "Approve or deny session requests"
description: "Review the session requests that wait for your approval, and approve or deny one or several requests from the Approvals tile."
sidebar_position: 100
---

# Approve or deny session requests

When a connection profile uses a tiered approval workflow, a session request waits for approval before the user can connect. The **Approvals** tile shows the requests that wait for you.

## Who sees requests

Privilege Secure has no Approver role. You see a request when an approval workflow tier names you, or a group you belong to, as an approver. An administrator sets this up in the connection profile. See [Configure approval workflows](/docs/privilegesecure/26_07/configuration/access-policies/approval-workflows).

When a request needs approval, the approvers also receive an email. The email shows the requester, activity, resource, notes, and ticket number.

{/* TODO verify: that approver emails contain links that open the Approvals tile, and which port the links use when the Website URL system setting is empty. See the email settings page. */}

## Review the queue

1. Select **Dashboard** in the left navigation.
2. Select the **Approvals** tile. The tile shows how many requests are pending.

The table has these columns:

| Column | Shows |
|---|---|
| **Status** | **Waiting for approval** while the request needs a decision. **Cancelling** when the session expired or someone canceled it. |
| **Requested** | When the request was created. |
| **Requested By** | The user who requested the session. |
| **Host** | The resource the activity runs on. |
| **Login Account** | The account used to sign in to the resource. |
| **Activity** | The name of the activity. |
| **Start** | When the activity's actions run. |
| **End** | When the session ends. This is the start time plus the maximum session duration set in the connection profile. |
| **Notes** | The notes the requester entered. |
| **Ticket Number** | The ticket number the requester entered. |

Use **Search** to filter the table. Select **Refresh** to reload it. You can resize the columns and sort them in ascending or descending order.

{/* TODO screenshot: the Approvals tile with a pending request */}

## Approve or deny requests

1. On the **Approvals** tile, select the checkbox for each request you want to decide. Select several rows to decide them together.
2. Select **Approve** or **Deny**.
3. If you select **Deny**, enter the reason for the denial.

{/* TODO verify: the label and wording of the denial reason field in the Deny window, and whether the reason is required. The code shows a denial note text box, and the requester's email includes it. */}

**Approve** and **Deny** stay disabled until you select a row.

Privilege Secure emails the requester when you approve or deny the request. The denial email includes your note.

## What your decision does

- A tier is approved when it has the number of approvals set in **Approvals Required**.
- A single denial in a tier denies the request.
- When a tier is approved, the next tier's approvers are notified, unless the tiers run concurrently.
- An approval from the escalation account or group, or a denial from it, overrides the other approvers.
- The requester can connect only after the request is approved. See [Connect to a session](/docs/privilegesecure/26_07/user-guide/connect-session).

For how tiers and escalation work, see [Configure approval workflows](/docs/privilegesecure/26_07/configuration/access-policies/approval-workflows).

{/* TODO verify: whether you can approve your own request. Make no statement until engineering confirms it and the lab tests it. */}

{/* TODO verify: what a user without an administrator role sees on the Dashboard, and whether the Approvals tile appears only for named approvers. The lab tour used one administrator account. */}
