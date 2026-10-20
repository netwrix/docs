---
title: "Run bulk actions on systems"
description: "Select systems by filter or by file and apply an action such as Bulk JITA, scan policy, or Protect policy to all of them at once."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Verify that bulk actions support only domain-joined machines at 26.09.1 (an upload that includes non-domain endpoints returns an error), and that not all bulk actions complete on non-Windows endpoints. The page states both as limits. Evidence: none.

TODO: Confirm the bulk action list (Bulk JITA, Scan Policy, Protect Policy, Set EDR Configuration, Set Offline Access, Set Accounts Persistent, Add/Update Account, Remove Account, Bulk Expire and Extend, Bulk Archive, Bulk Restore) and Linux Bulk JITA support at 26.09.1. Evidence: none.

TODO: The old page referred to minimum example files attached to it for **Select By File**; they aren't available. Provide them or describe the required columns. Evidence: none.
:::

Bulk actions apply one change to many systems at once. Use them to set scan and Protect Mode policies, grant just-in-time administration (JITA), manage accounts, and more, without opening each system.

## Select the systems

1. In the left-hand menu, select **Management** > **Systems**.

   ![The Management menu with the Systems option](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.16.18_am.webp)

   The **Systems** screen shows up to 1,000 systems based on the selected views and filters. Use the option at the top right to hide or clear the filters.

1. Use the views and filters to find the systems you need.

   ![The Systems screen filtered to a set of systems](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.22.45_am.webp)

   If you need more than 1,000 systems, select them as separate groups, for example by organizational unit (OU).

1. Select all of the filtered systems or a subset.

   ![Systems selected on the Systems screen](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.24.07_am.webp)

   The **Bulk Actions** button becomes available when systems are selected.

## Select the systems by filter

Bulk actions by filter apply an action to every system that meets the filter criteria on the **Systems** screen. The default limit for bulk actions is 1,000 systems, but a bulk action by filter runs on all matching systems.

## Select the systems by file

You can upload a file to select systems. The file can be a copy of a Quickstart report or an export from the **Systems** screen. The accepted formats are `.csv` and `.xlsx`. The export from the **Systems** screen doesn't need to include all of the details.

:::warning
Not all fields are required to have data, but the headers must remain intact so the product can identify the information in the file. Edit CSV files only in a text editor or an integrated development environment (IDE). Editing and saving a CSV file in Excel can cause formatting problems. You can also save the CSV file as an Excel `.xlsx` file and upload that.
:::

Bulk actions support domain-joined machines only. If the file includes non-domain endpoints, the upload returns an error that the product couldn't identify a machine.

## Choose and run a bulk action

1. Select **Bulk Actions**.
1. Select the bulk action.

   ![The Bulk Action screen listing the available actions](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-10-03_at_12.55.29_pm.webp)

   The available bulk actions include:

   - Bulk JITA, including for Linux endpoints
   - Scan Policy
   - Protect Policy
   - Set EDR Configuration
   - Set Offline Access
   - Set Accounts Persistent
   - Add/Update Account
   - Remove Account
   - Bulk Expire and Extend
   - Bulk Archive and Bulk Restore

1. Set the configuration for the action, and then save it.

   ![The configuration options for a selected bulk action](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.33.03_am.webp)

1. Select **Execute Bulk Action**.

   ![The Execute Bulk Action button](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.37.36_am.webp)

   A pop-up window confirms the action.

   ![The confirmation pop-up displayed after a bulk action runs](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.41.53_am.webp)

   The product then opens **Monitor** > **Jobs**, where you can see the status of the bulk action.

   ![The Jobs screen showing the status of the bulk action](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2022-06-01_at_8.39.56_am.webp)

You can open the job monitor at any time from the **Management** menu to review the status of jobs.

## Configure bulk action limits

Limits for bulk actions are on the **Configuration** > **Server** screen. They prevent a large number of bulk actions from overloading the system.

![The bulk action limits on the Server configuration screen](/images/privilegesecure/4.2/discovery/admin/systemmanagement/screen_shot_2023-02-14_at_10.03.04_am.webp)

## Limits

Not all bulk actions can be completed on endpoints that run an operating system other than Windows.
