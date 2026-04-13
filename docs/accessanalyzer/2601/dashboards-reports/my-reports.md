---
title: "My Reports"
description: "Save, manage, and reload filtered report views in Netwrix Access Analyzer"
sidebar_position: 30
---

# My Reports

My Reports is a personal workspace for saving filtered report views. When you configure a report with specific filters — a particular share, user, or time range — you can save that configuration as a named report and reload it later without reapplying the filters manually.

Saved reports are private to the user who created them. Other users can't view or modify your saved reports.

Navigate to **Reports** > **My Reports** to view your saved reports.

## Save a report

You can save any report that has the **Save Report** button in its toolbar. The button appears on File System and SharePoint report pages.

1. Navigate to the report you want to save — for example, **Reports** > **File System** > **Access**.
2. Select a report type from the selector — for example, **Share Audit**.
3. Apply the filters you want to capture.
4. Click **Save Report** in the toolbar.
5. In the **Save Report** dialog, enter a name for the report. Names are required, must be unique (case-insensitive) within your saved reports, and can't exceed 100 characters.
6. Review the **Current Filters** section to confirm the active filters are correct.
7. Click **Save Report**.

After saving, Access Analyzer redirects you to **My Reports** where the new report appears in the list.

:::note
If no filters are applied when you click **Save Report**, the dialog indicates that no filters are active. You can still save the report, but it will open with the default unfiltered view.
:::

## Open a saved report

1. Navigate to **Reports** > **My Reports**.
2. In the **My Saved Reports** table, click the row for the report you want to open.

The report opens with its saved filter configuration applied. A banner at the top of the report displays the report name and a **Back to My Reports** button.

To return to the **My Reports** list, click **Back to My Reports** in the banner.

## Rename a saved report

1. Navigate to **Reports** > **My Reports**.
2. In the **Actions** column for the report you want to rename, click the actions icon (**⋮**).
3. Select **Rename**.
4. Edit the name in the inline text field. The name can't exceed 100 characters.
5. Press **Enter** or click the check icon to save the new name. Press **Escape** or click the X icon to cancel.

## Delete a saved report

1. Navigate to **Reports** > **My Reports**.
2. In the **Actions** column for the report you want to delete, click the actions icon (**⋮**).
3. Select **Delete**.

:::warning
Deleting a saved report is permanent. There's no confirmation step and no undo.
:::

## My Saved Reports table

The **My Saved Reports** table lists all reports you've saved.

| Column | Description |
| --- | --- |
| **Name** | The name of the saved report. Click a row to open the report. |
| **Parent Report** | The report type this was saved from — for example, **Share Audit** or **Broken Inheritance**. Displays a dash if the source can't be identified. |
| **Created** | The date the report was saved. |
| **Actions** | Opens a menu with **Rename** and **Delete** options. |

When you haven't saved any reports yet, the table displays:

> *You haven't saved any reports yet. Go to Access, Content, or Activity reports, apply filters, and click "Save Report" to save them here.*

The table paginates when it contains more than 10 reports. You can display 10 or 25 rows per page.

## Report name constraints

| Constraint | Detail |
| --- | --- |
| **Required** | A name is required to save a report. |
| **Maximum length** | 100 characters. |
| **Uniqueness** | Names must be unique within your saved reports (case-insensitive). |
