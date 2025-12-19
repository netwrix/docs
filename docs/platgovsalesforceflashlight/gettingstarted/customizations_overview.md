---
title: "Customizations Overview and Reports"
description: "Customizations Overview and Reports"
sidebar_position: 70
---

# Customizations Overview and Reports

Customization records are documentation about each customization. They are automatically built and
maintained by the Strongpoint Scanners. They enable you to search customizations and attach them to
processes.

Click on the **Customizations** tab to display all the customizations found by the Strongpoint
scanner. You can change the view to focus the results. Click the **Customization Name** to open the
customization record.

Customization records contain the following information:

1. What customizations exist (or used to exist) in an account.
2. Who is using the customizations.
3. Which customizations are being used.
4. What the joins are between customizations.
5. What detailed automated documentation exists, including search filters and formulas, related
   fields, scripts, searches and records.

The joins between customizations are critical to determine the IT risk of making changes to the
system. For example, they warn you if changing a search could break a workflow or a
script.![drd_800x155](/images/platgovsalesforceflashlight/customizations/drd_800x155.webp)

## Customization Reports

These reports are available from **Flashlight** > **Reports / List Views** > **Customizations**.

- **All Customizations**: This enables you to use Salesforce functionality to filter searches quickly for specific customizations.
- **Customization Impact**: This report shows your customizations and how they impact other objects.
- **Permissions by Object**: This report displays **Permissions** grouped by **Object**.
- **Object Permissions by Profile**: This report displays **Object Permissions** grouped by **Profile**.
