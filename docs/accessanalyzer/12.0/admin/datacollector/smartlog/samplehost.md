---
title: "SMARTLog: Sample Host"
description: "SMARTLog: Sample Host"
sidebar_position: 20
---

# SMARTLog: Sample Host

The Sample Host page is used to configure the host. It is a wizard page for all log types.

![SMART Log DC Wizard Sample Host page](/images/accessanalyzer/12.0/admin/datacollector/smartlog/samplehost.webp)

Select a host for running a test query on the Criteria page from the following radio buttons:

- Local Computer – localhost
- Another computer – If selecting another computer for the host, click the ellipsis to open the
  Select Computer window. See the [Select Computer Window](#select-computer-window) topic for
  additional information.

## Select Computer Window

![Select Computer window](/images/accessanalyzer/12.0/admin/datacollector/smartlog/selectcomputerwindow.webp)

If selecting another computer for the host, click the ellipsis to open the Select Computer window
and select a computer. The options in the Select Computer window are:

- Object Types – Either enter the object type name in the textbox or click **Object Types** to
  select the types of objects to find. The default is **Computer**.
- Locations – Click to select the location to search. The default is **Entire Directory**.
- Enter the object name to select – Manually enter objects into the text field

    - Click the **examples** link to access the Microsoft
      [Object Picker UI](https://docs.microsoft.com/en-us/previous-versions/orphan-topics/ws.11/dn789205(v=ws.11)?redirectedfrom=MSDN)
      article for additional information

- Check Names – Click to verify the object names in the text field
- Advanced – Opens a window to perform advanced configurations of the Select Computer function

![Advanced Select Computer window](/images/accessanalyzer/12.0/admin/datacollector/smartlog/selectcomputerwindowadvanced.webp)

The Common Queries section is included on the advanced Select Computer window in addition to object
type and location in the original Select Computer window.

- Name – Select a qualifier from the drop-down menu and enter a name of an object in the associated
  text box
- Description – Select a qualifier from the drop-down menu and enter a description in the associated
  text box
- Select the **Disabled accounts** checkbox to include disabled accounts in the search
- Select the **Non-expiring password** checkbox to include non-expiring passwords in the search
- Select the number of **Days since last logon** from the drop-down menu
- Click the **Columns** button to open the Choose Columns window

    ![Choose Columns window](/images/accessanalyzer/12.0/admin/datacollector/smartlog/choosecolumnswindow.webp)

    Select a column from the Columns available or Columns shown lists and click **Add** or
    **Remove** to add or remove them from each column

- Click **Find Now** to run a search for items matching the selected criteria in the location of the
  object selected
- Click **Stop** to stop a search in progress
