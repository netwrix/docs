---
title: "Approve or deny session requests"
description: "Review the session requests that wait for your approval, and approve or deny one or several requests from the Approvals tile."
sidebar_position: 100
---

# Approve or deny session requests

When a connection profile uses a tiered approval workflow, a session request waits for approval before the user can connect. The **Approvals** tile shows the requests that wait for you.

## Who sees requests

Privilege Secure has no Approver role. You see a request when an approval workflow tier names you, or a group you belong to, as an approver. An administrator sets this up in the connection profile. See [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).

When a request needs approval, the approvers also receive an email. The email shows the requester, activity, resource, notes, and ticket number, and, in the default template, an approval link that opens the **Approvals** tile (`<website URL>/dashboard/approval`). The link starts with the **Website URL** system setting. When that setting is empty, the link uses `http://<server name>:5000`, so set **Website URL** to the address that users open in a browser. See [Email settings](/docs/privilegesecure/26.07/configuration/system-settings/email.md).

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
3. If you select **Deny**, the **Deny Activity Session** window asks you to note your reasons. Enter them in the text box that says "Reason for denial? Other notes?" The reason is optional, and the denial goes through if you leave the box empty.

**Approve** and **Deny** stay disabled until you select a row.

Privilege Secure emails the requester when you approve or deny the request. The denial email includes your note.

## What your decision does

- A tier is approved when it has the number of approvals set in **Approvals Required**.
- A single denial in a tier denies the request.
- When a tier is approved, the next tier's approvers are notified, unless the tiers run concurrently.
- An approval from the escalation account or group, or a denial from it, overrides the other approvers.
- The requester can connect only after the request is approved. See [Connect to a session](/docs/privilegesecure/26.07/user-guide/connect-session.md).

For how tiers and escalation work, see [Configure approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).

You can't approve your own request. When a requester is also named as an approver, Privilege Secure doesn't create an approval for that person and doesn't send them the approval email.

The **Approvals** tile appears on the Dashboard for every user who can request sessions, not only for named approvers. A user without an administrator role sees the **Active**, **Scheduled**, **Approvals**, and **Historical** tiles. The **Users** and **Resources** tiles are for administrators. If your custom role includes the Credentials permission, a **Credentials** tile also appears.
