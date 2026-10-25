---
title: "Dashboard"
description: "Learn what each Dashboard tile shows, who sees it, and where to manage sessions, users, resources, and credentials."
sidebar_position: 10
---

# Dashboard

The **Dashboard** is the console's page for managing sessions. A row of tiles at the top shows live counts, and each tile opens a table of the matching items. Use the session tiles to follow requests from approval to completion, and use the **Users**, **Resources**, and **Credentials** tiles as shortcuts to pages you can also reach from the left navigation.

To open the dashboard, click **Dashboard** in the left navigation. The console opens the tile you used last.

## Tiles

Each tile shows a count. Hover over a tile to see what the count measures, for example "pending approval" for the **Approvals** tile.

| Tile | Shows | Details |
|---|---|---|
| **Active** | Sessions that are provisioning, available, or in progress | [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md) |
| **Scheduled** | Sessions set to start at a later time | [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md) |
| **Approvals** | Session requests waiting for an approver | See [Approvals](#approvals) |
| **Historical** | Completed, canceled, and failed sessions | [Review historical sessions](/docs/privilegesecure/26.07/admin/sessions/historical-sessions.md) |
| **Users** | Users and groups that can sign in to the console | [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md) |
| **Resources** | Resources that Privilege Secure manages | [Resources](/docs/privilegesecure/26.07/resources/overview.md) |
| **Credentials** | Managed accounts and their rotation status | [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md) |

Every user who can open the dashboard sees **Active**, **Scheduled**, **Approvals**, and **Historical**. **Users** and **Resources** appear only for administrators. **Credentials** appears for administrators and for users whose role includes a Credentials permission. The session tile counts update as sessions change. For administrators, the **Users**, **Resources**, and **Credentials** counts also refresh every 60 seconds.

Every table has a **Refresh** button at the top right that reloads the rows. A counter next to it shows the number of results.

![The Dashboard tile row with the Active tile selected and an empty All Active session list below the Create Session toolbar.](/images/privilegesecure/26.07/admin/dashboard-active-tile-empty.webp)

## Approvals

The **Approvals** tile lists session requests that need approval before they start. Approvers are the users and groups named in an approval tier of the connection profile. See [Approval workflows](/docs/privilegesecure/26.07/configuration/access-policies/approval-workflows.md).

The toolbar has two buttons, which stay disabled until you select a row:

- **Approve** approves the selected sessions.
- **Deny** opens the **Deny Activity Session** dialog, where you can enter a reason for the denial.

For the approver procedure, see [Approve or deny session requests](/docs/privilegesecure/26.07/user-guide/approve-requests.md).

## Requester and session user columns

The session tables name the person who started a session in two different ways:

- The **Active**, **Scheduled**, and **Approvals** tables use the column **REQUESTED BY**.
- The **Historical** table uses the column **SESSION USER**.

Both columns show the same person. Click a name to open that user's details.

## Users, Resources, and Credentials tiles

These three tiles show the same tables as the main pages, so this page doesn't repeat them.

- **Users:** see [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md).
- **Resources:** see [Resources](/docs/privilegesecure/26.07/resources/overview.md).
- **Credentials:** see [Credentials](/docs/privilegesecure/26.07/admin/credentials/overview.md).
