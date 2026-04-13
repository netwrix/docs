---
title: "Source Groups"
description: "Managing source groups in Access Analyzer — create, configure, and operate groups of data sources"
sidebar_position: 1
---

# Source Groups

A source group is a named container that organizes data sources of the same type for coordinated scanning. All sources in a group share a service account and a concurrency limit, and you can run or stop scans across all sources in the group with a single action.

Navigate to **Configuration** > **Source Groups** to view, create, and manage source groups.

## Source groups list

The source groups list displays all configured source groups. Each row shows:

| Column | Description |
| --- | --- |
| **Name** | The source group name. |
| **Source Type** | The type of data source in the group (Active Directory, File Server, Entra ID, or SharePoint Online). |
| **Service Account** | The service account used to authenticate scans in this group. |
| **Status** | Whether the group is **Active** or **Inactive**. Inactive groups are excluded from scheduled scan runs. |
| **Scan Types** | The scan types configured for this group (Access Scan, Sensitive Data Scan, or both). |
| **Scanner Labels** | Key-value labels used to route scans to specific scanner pools. Displayed only for Active Directory and File Server groups. |
| **Last Scan** | The timestamp of the most recent completed scan execution across all sources in the group. |

Use the search field to filter by name. You can sort by any column and filter by source type, status, service account, or scan status.

## Create a source group

1. Click **Add Source Group**.
2. Enter a **Name** and optional **Description**. Names must be unique (case-insensitive) and between 1 and 255 characters.
3. Select the **Source Type**. This value is permanent — it can't be changed after the group is created.
4. Select or create a **Service Account**. The wizard filters available accounts to those compatible with the selected source type. To create a new account inline, click **+** next to the field.
5. Set **Max Concurrent Scans**. This controls how many sources within the group can scan simultaneously. The default is 1. See [Scans](scans.md) for guidance on choosing a value.
6. For Active Directory and File Server groups, optionally add **Scanner Labels** to route scans to a specific scanner pool. See [Scanners](scanners/overview.md).
7. Add sources and configure scan parameters. You can also add sources later from the group detail view.
8. Click **Save**.

:::warning
Changing the source type is not possible after a source group is created. If you need a different source type, create a new source group and delete the original.
:::

## Edit a source group

1. In the source groups list, click the actions menu for a group and select **Edit**.
2. Modify any of the following fields:
   - Name and description
   - Service account
   - Max concurrent scans
   - Scanner labels
   - Status (Active or Inactive)
3. Click **Save**.

The source type cannot be changed. If you update the service account, the new credentials apply to all future scans in the group — verify the replacement account has the required permissions before saving.

## Add sources to a group

1. In the source groups list, click the actions menu for a group and select **View Sources**.
2. Click **Add Source**.
3. Complete the source configuration form. Required fields vary by source type.
4. Click **Save**.

Sources you add inherit the group's service account and scan configuration unless you override them at the source level.

## Remove sources from a group

1. In the source groups list, click the actions menu for a group and select **View Sources**.
2. In the sources drawer, click the actions menu for a source and select **Remove**.

You can't remove a source that has a scan in a pending, running, pausing, paused, resuming, stopping, or post-processing state. Wait for the scan to complete or stop it first.

## Run scans

To start scans across all sources in a group, click the **Run** button in the actions menu for the group. Access Analyzer queues scan executions for every configured scan in the group, subject to the **Max Concurrent Scans** limit.

To run scans for a single source, open the source from the **View Sources** drawer and use the source-level run action.

## Stop scans

To stop all running and pending scans in a group, click **Stop** in the actions menu. Access Analyzer sends a stop signal to every active scan execution in the group. Scans in a stopping or post-processing state continue until they reach a terminal state.

## Delete a source group

1. In the source groups list, click the actions menu for a group and select **Delete**.
2. Confirm the deletion.

:::warning
Deleting a source group permanently deletes all sources it contains. This action can't be undone.
:::

You can't delete a source group while any of its scans are in a pending, running, pausing, paused, resuming, stopping, or post-processing state. Stop all active scans before deleting.

## Constraints

| Setting | Constraint |
| --- | --- |
| **Name** | 1–255 characters; must be unique (case-insensitive) across all source groups |
| **Description** | Maximum 10,000 characters |
| **Source type** | Set at creation; can't be changed afterward |
| **Max concurrent scans** | 1–30; default is 1 |
| **Delete** | Blocked while any source has an active scan execution |
| **Remove source** | Blocked while that source has an active scan execution |
