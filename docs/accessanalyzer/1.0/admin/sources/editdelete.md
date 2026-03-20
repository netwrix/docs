---
title: "Editing and Deleting Sources"
description: "Modifying and removing data sources"
sidebar_position: 40
---

# Editing and Deleting Sources

Administrators can modify source configuration or remove sources that are no longer needed. Both operations are available from the source detail view.

## Editing a Source

To edit a source:

1. Navigate to **Sources** and click the target source to open its detail view.
2. Click **Edit**.
3. Update the desired fields such as connection parameters, display name, or associated service account.
4. Click **Save**.

:::note
The source type cannot be changed after creation. To use a different type, create a new source and delete the old one.
:::

## Deleting a Source

To delete a source:

1. Open the source detail view.
2. Click **Delete**.
3. Confirm the deletion in the dialog.

:::warning
Deleting a source removes all associated scan configurations and execution history. This action cannot be undone. Export any required scan results before deleting.
:::

## Impact on Related Resources

- **Scans** -- Any scans targeting the deleted source are also removed.
- **Source Groups** -- The source is automatically removed from any groups it belonged to.
- **Scan Results** -- Historical scan result data associated with the source is permanently deleted.
