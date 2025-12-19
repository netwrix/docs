---
title: "Web Request: Parameters"
description: "Web Request: Parameters"
sidebar_position: 30
---

# Web Request: Parameters

Use the Parameters page to enter the parameter values.

![Web Request Action Module Wizard Parameters page](/images/accessanalyzer/12.0/admin/action/webrequest/parameters.webp)

Enter parameter values using the following options:

- Insert Field – Select a field to include in the request from the drop-down menu.

    :::note
    The fields available varies based on the source table.
    :::


- Green circle with plus sign – Add a custom attribute. This opens the Custom Attribute Editor
  Window. See the [Custom Attribute Editor Window](#custom-attribute-editor-window) topic for
  additional information.
- Red circle with minus sign – Remove a custom attribute

    - Select a cell or row to remove the custom attributes

- Paper and pencil – Edit a custom attribute. This opens the Custom Attribute Editor Window. See the
  [Custom Attribute Editor Window](#custom-attribute-editor-window) topic for additional
  information.
- Use the radio buttons to indicate:

    - Parameters – Key value pairs to insert in the headers field of the web request
    - Raw edit – Disabled for Parameters

- Key / Value Fields – The name or value of the attribute

    - Select a field using the drop-down menu, place the cursor in the cell of the desired Key or
      Value, and click the blue down-arrow to add it to the selected cell
    - Select a cell and click the green circle with plus sign to open the Custom Attribute Editor
      window and add the attribute to the cell
    - Manually enter a field in the cell

### Custom Attribute Editor Window

Use the Custom Attribute Editor window to create a custom attribute using the existing attributes
and advanced functions.

![Custom Attribute Editor Window](/images/accessanalyzer/12.0/admin/action/webrequest/customattributeeditor.webp)

Create custom attributes using the following options:

- Insert field – Select a field to insert using the drop-down menu
- Unique name – Name of the custom attribute that will be created

    - Select a field using the drop-down menu, place the cursor in the Unique name textbox, and
      click the blue down-arrow to add it to the Unique name textbox
    - Manually enter the name

- Data – The actual value of the custom attribute (can be database value or manually specified)

    - Select a field using the drop-down menu, place the cursor in the Data textbox, and click the
      blue down-arrow to add it to the Data textbox
    - Manually enter the data

- Advanced Functions

    - Split on – Split the data on the character specified in the text box. The default is comma
      `,`.
