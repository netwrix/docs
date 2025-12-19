---
title: "File: Results"
description: "File: Results"
sidebar_position: 30
---

# File: Results

The Results page provides a list of available properties to be searched for and returned by the job
execution. The properties selected display as table columns in the results of the query. It is a
wizard page for all of the categories.

![File Search Wizard Results page](/images/accessanalyzer/12.0/admin/datacollector/file/results.webp)

Properties can be selected individually or in groups with the **Select All** or **Clear All**
buttons. The properties available vary based on the category selected.

:::note
When the **Calculate Group Size (Files Only)** category is selected, the properties and
options on the Results page are grayed out.
:::


- Disable properties that require opening file – Disables properties that require opening files that
  trigger the last accessed date timestamp

    - This option is available for the **File or Folder Properties** category

- Only return permissions for the following user(s) – Defines users for the query. Enter the desired
  users in the textbox.

    - This option is available for the **File or Folder Permissions** category

- Only return permissions for the following group(s) – Defines groups for the query. Enter the
  desired users in the textbox.

    - This option is available for the **File or Folder Permissions** category

- Size Units – Identifies the unit in which the values will be displayed. The options are:
  **Bytes**, **Kb**, **Mb**, or **Gb**.
