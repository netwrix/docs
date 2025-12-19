---
title: "PowerShell Action: Script"
description: "PowerShell Action: Script"
sidebar_position: 10
---

# PowerShell Action: Script

The Script page enables you to input the PowerShell script that will be used to perform the
requested action. Built-in variables are available for use in the script.

![PowerShell Action Module Wizard Script page](/images/accessanalyzer/11.6/admin/action/powershell/script.webp)

The PowerShell script can be entered manually into the Script window at the top of the Script page.
To open a pre-existing PowerShell script from a file, click **Open** to select the script file.

At the bottom of the page are three tabs that can be used to configure the PowerShell action module
further. The tabs are:

- [Columns](#columns)
- [Parameters](#parameters)
- [Input Data](#input-data)

## Columns

Use the Columns tab to select the available columns.

![Columns tab](/images/accessanalyzer/11.6/admin/action/powershell/scriptcolumns.webp)

The table in the Columns tab displays the Columns that can be used for the PowerShell script. To use
a Column, select the checkbox under the **Use** column.

![Right-click menu](/images/accessanalyzer/11.6/admin/action/powershell/scriptrightclickoption.webp)

Right-clicking any of the variable names brings up a **Copy variable name** option that enables
users to paste the variable name into the PowerShell script.

## Parameters

The Parameters tab contains options to add, edit, or delete user-made PowerShell parameters.

![Parameters tab](/images/accessanalyzer/11.6/admin/action/powershell/scriptparamters.webp)

The options are:

- Add – Clicking **Add** opens the Add/Edit Variable window. See the
  [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.
- Edit – Select an existing parameter and click **Edit** to open the Add/Edit Variable window. See
  the [Add/Edit Variable Window](#addedit-variable-window) topic for additional information.

    - Double-clicking an existing parameter also opens the **Add/Edit Variable** window

- Delete – Delete a selected parameter

:::note
The built-in default parameters cannot be edited or deleted.
:::


### Add/Edit Variable Window

Configure options for a new or existing parameter using the Add/Edit Variable window.

![Add/Edit Variable Window](/images/accessanalyzer/11.6/admin/action/powershell/addeditvariable.webp)

The options are:

- Name – Enter or edit the name for the custom parameter
- Description – Enter or edit the description for the custom parameter
- Type – Select the Type from a dropdown list. The options are:

    - String
    - List
    - Filepath
    - Boolean
    - Long
    - Double

- Value – Enter or edit the value for the custom parameter

## Input Data

Preview how the input data will look in the Input Data tab.

![Input Data tab](/images/accessanalyzer/11.6/admin/action/powershell/scriptinputdata.webp)

Information in the Input Data tab varies depending on which source table the PowerShell action
module is configured to pull data from.
