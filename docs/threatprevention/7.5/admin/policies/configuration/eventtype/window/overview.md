---
title: "Selection Windows"
description: "Selection Windows"
sidebar_position: 220
---

# Selection Windows

Many event type filters have selections windows for populating filter values. It may be necessary to
select a specific Agent to populate values in the selection window. Some selection windows also
include an option to switch between a Browse Mode and a Search Mode for locating Active Directory
filter values.

## Select an Agent

On several Select… windows, you must select a server where the Agent has been deployed, as these
windows present live information provided by the Agent. If no Agent is found, the window does not
open.

![Selection Window - Connect to Agent/Server option](/images/threatprevention/7.5/admin/policies/eventtype/window/selectagent.webp)

The following rules can aid in selecting the correct Agent for the Select… window when configuring
solution related policies:

- Active Directory – Select any Agent on any domain controller within the domain of interest
- Exchange – Select any Agent on any Exchange server
- Windows File System – Select the Agent on the target machine where the files to be monitored
  reside
- NAS File System – Select the Agent on the Windows server acting as a proxy server for NAS activity

## Browse Mode

Select a server/Agent from the drop-down menu and click **Connect**.

![Selection Window - Browse mode](/images/threatprevention/7.5/admin/policies/eventtype/window/adperpetrators.webp)

- Select the option button for **Browse Mode**.
- Expand the domain tree in the Navigation pane to select a container. The Results pane populates
  with the available items.
- Check the desired item(s) in the Results pane on the right and click **OK**.

The selection(s) are displayed in the appropriate box of the filter tab from where you opened the
Select… window.

## Search Mode

Select a server/Agent from the drop-down menu and click **Connect**.

![Selection Window - Search Mode](/images/threatprevention/7.5/admin/policies/eventtype/window/searchmode.webp)

- Select the option button for **Search Mode**.
- Expand the domain tree in the Navigation pane to select the starting point for the search, which
  auto-populates the Start in field. Use the following scoping options:

  - Scope all – Includes all sub-containers in the search
  - Attribute – Scope to the ‘objectClass’, name, or SAMAccountName attribute
  - Condition – Set the scoping condition to:

    - Starts with
    - Contains
    - Exact Match (this is the only condition available for objectClass)

  - Value – Search string

- After selecting the desired options, click **Search Now**. The Results pane begins to populate
  with matching results.
- Choose between **Show [number] AD objects** and specify a value or **Show all**. Already selected
  objects for this filter that match the search are visible but grayed-out.
- Check the desired item(s) in the Results pane on the right and click **OK**.

The selection(s) are displayed in the appropriate box of the filter tab from where you opened the
Select… window.
