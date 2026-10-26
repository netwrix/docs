---
title: "Configure approval workflows"
description: "Require one or more tiers of approvers to approve a session request before the session starts, and set the escalation time for each tier."
sidebar_position: 50
---

# Configure approval workflows

An approval workflow requires approval before a requested session starts. You set the workflow on a connection profile. Every session that an access policy starts with that profile then waits for approval.

A workflow is a list of tiers. Each tier has its own approvers, the number of approvals it needs, and an escalation time. If the approvers in a tier don't respond in time, the request escalates to an account or group that you name.

## Prerequisites

- A connection profile to edit. See [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md).
- The approvers exist in the console as domain users or groups of domain users, and Privilege Secure manages each domain user. See [Add users and groups](/docs/privilegesecure/26.07/admin/users-groups/add-users-groups.md).
- Email is configured, so that approvers and requesters receive notifications. See [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md).

## Approval workflow options

The **Approval Workflow** section of a connection profile has a radio button with two choices.

| Option | Behavior |
|---|---|
| **Automatic** | No approval is needed. The session starts when the user requests it. This is the default. |
| **Tiered** | The session waits until the tiers approve the request. |

## Tier settings

When you select **Tiered**, the section shows a card for each tier. The card has these items.

| Item | Description |
|---|---|
| Edit (pencil) icon | Opens the **Tier Escalation** dialog. |
| Delete icon | Deletes the tier after you confirm. |
| **Escalation** | The time, in minutes, that approvers have to respond before the request escalates. |
| **Account** | The user that the request escalates to. It shows `<not set>` until you choose one. |
| **Group** | The group that the request escalates to. It shows `<not set>` until you choose one. |
| **Approvers** | The users and groups that can approve the request. The green plus icon adds approvers. |
| **Approvals Required** | The number of approvals that the tier needs. The plus and minus icons change the number. |

A green plus icon to the right of the last card adds another tier. A workflow has up to three tiers, and the plus icon disappears when the workflow has three.

## Add an approval workflow

1. Select **Access Policy** > **Connection Profiles**.
1. Select the connection profile to edit.
1. In the **Approval Workflow** section, select **Tiered**.
1. Click the pencil icon on the tier card to open the **Tier Escalation** dialog.
1. Enter a value for **Escalation In (minutes)**. A new tier starts with 10 minutes.
1. (Optional) Select an **Escalation Account** or an **Escalation Group**.
1. Click **Okay**.
1. Click the green plus icon next to **Approvers** to open the **Add Users and Groups as Approvers** dialog.
1. Filter by **All**, **Users**, **Local Users**, or **Groups**, or use the search box.
1. Select each approver to move it from **Available Users And Groups** to **Users And Groups to Add**.
1. Click **Add**.

   :::warning
   The dialog lists local Privilege Secure users, but a local user never receives an approval request. The **Approvals** tile of a local user stays empty. Name domain users, or groups that contain them, as approvers.
   :::

1. Use the plus and minus icons next to **Approvals Required** to set the number of approvals the tier needs.
1. To add another tier, click the green plus icon to the right of the card and repeat steps 4 through 12.
1. Click **Save**.

To remove an approver, hover over the approver, click the **Remove Approver** icon, and confirm.

{/* TODO screenshot: the Approval Workflow section with a tier card showing Escalation, Account, Group, Approvers, and Approvals Required */}
{/* TODO screenshot: the Tier Escalation dialog */}
{/* TODO screenshot: the Add Users and Groups as Approvers dialog */}

### Example

A connection profile uses one tier with these values:

- **Escalation In (minutes)**: 10
- **Escalation Group**: a group of senior administrators
- **Approvers**: two users
- **Approvals Required**: 1

When a user requests a session, the console notifies both approvers. If one approves, the session starts. If neither responds within 10 minutes, the request escalates to the escalation group.

:::tip
Add more approvers than the tier requires. The tier can then reach its approval count before the escalation time passes. An approver that is a group counts each member who responds. A requester who is also an approver isn't asked to approve their own session, so that person doesn't count toward the tier. If a tier can't reach its approval count, only the escalation account or group can decide the request. Without an escalation account or group, the request stays pending until the session's scheduled end passes, and then fails.
:::

## How tiers decide a request

- A tier approves the request when it has at least the number of approvals in **Approvals Required**.
- A single denial in a tier denies the request.
- If an escalation account or group approves or denies the request, that decision overrides the other approvers.
- When a tier approves the request, the console notifies the approvers in the next tier.
- Requesters receive an email when the request is approved or denied. The denial email includes the approver's note.

Tiers run in order. The next tier starts only after the previous tier approves, and the request is approved only when every tier has approved. A tier that is still waiting, or that denied the request, stops the evaluation of the tiers after it.

## Approve a request

Approvers see pending requests on the **Approvals** tab of the dashboard. See [Approve or deny session requests](/docs/privilegesecure/26.07/user-guide/approve-requests.md).

A requester who is also listed as an approver, whether directly or through a group, isn't notified and isn't asked to approve their own session. Another approver must approve it.

## Related topics

- [Connection profiles](/docs/privilegesecure/26.07/configuration/access-policies/connection-profiles.md)
- [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md)
- [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md)
