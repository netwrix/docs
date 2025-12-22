---
title: "Field Level Security Scanner"
description: "Field Level Security Scanner"
sidebar_position: 40
---

# Field Level Security Scanner

The Field Level Security Scanner creates a comprehensive list of Customizations, Field API Name,
Parent Object, Package, and Salesforce Type for a selected Object.

:::note
Run the scanners before you search to ensure you have the latest data.
:::

1. Open **Netwrix Dashboard** > **Scanner** > Field-Level Security Scanner.

    ![Open the Field Level Security Scanner](/images/platgovsalesforce/scanners/field_level_scanner.webp)

2. Start typing the name of a **Salesforce Object**. Pick from the completion list.
3. Click **Search Fields**.

    ![Field Level Scanner example](/images/platgovsalesforce/scanners/field_level_scanner_example.webp)

4. Select one or more fields to scan. The **Customization Name** is a link to the Customization
   Record.

    :::note
     It is not technically possible to scan permissions on all fields in each object.
    :::

5. Selected fields are shown in a list at the bottom of the form. You can uncheck individual fields
   or all fields from the **Selected Field** list.

    ![Removal list](/images/platgovsalesforce/scanners/field_level_scanner_remove.webp)

6. Click **Run Scanner**.

Once the scan is complete, open the Reports tab and select Field Permissions Report. The report is
also available from the Netwrix Dashboard: **Reports** > **Access Reports** > **Field Permissions**.

![Field Permissions Report](/images/platgovsalesforce/scanners/field_level_scanner_report.webp)
