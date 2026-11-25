---
title: "Set the Linked Combo Data Source in Directory Manager"
description: "Name a linked combo display type and choose or upload the XML or Excel file that supplies its data on the Details page of the wizard."
keywords:
  - linked combo display type
  - linked combo data source
  - Excel data file
  - custom display types
  - Directory Manager Portal
sidebar_position: 10
---

# Set the Linked Combo Data Source in Directory Manager

Enter the following details about the linked combo on the **Details** page of the **Linked Combo Display Type** wizard:

1. Enter a name for the linked combo in the **Linked Combo Name** box. You can't change the name of a custom display type after you've created it.
2. Specify the data source for the linked combo. You can either use an already uploaded file or upload a new one.

   - Use the **Available Data Sources** dropdown list to select an already uploaded file. This may be required, for example, when your source file contains the data and relationships for several fields. If you want to manage those relationships using multiple linked combos rather than one combo, upload the same file for multiple linked combos.

     The list displays all the data source files previously used to create linked combos for this portal. To export a file, select it and click **Export**. The file is saved to the download location set in your browser settings.
   - To upload a new file, click **Browse** next to the **File Name** box. Select the XML or Microsoft Excel file containing the data to populate the linked combo and the display types linked to it.

   If the source file is a Microsoft Excel (.xls or .xlsx) file, Directory Manager automatically creates an XML version to process it. To learn about the Excel file format, see the [Excel Data File Format for Linked Combos](/docs/directorymanager/11.1/admincenter/applications/portal/categories/linkedcombo/fileformat.md) topic.

3. Click **Next**.
