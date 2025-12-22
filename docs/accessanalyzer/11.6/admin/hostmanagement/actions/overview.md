---
title: "Host Management Activities"
description: "Host Management Activities"
sidebar_position: 30
---

# Host Management Activities

The Activities pane available at the Host Management node and at the individual host list nodes
provides the tools needed to manage hosts and host lists.

| ![Activities pane in Host Management node](/images/accessanalyzer/11.6/admin/hostmanagement/actions/activitieshostmanagement.webp) | ![Activities pane in individual host list node](/images/accessanalyzer/11.6/admin/hostmanagement/actions/activitiesindividualhost.webp) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host Management Node                                                                                                                                               | Individual Host List Nodes                                                                                                                                              |

The available actions are:

- [Add Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/add.md)
  – Create a new host list by manually entering hosts or importing a host list (only available in
  the Host Management node)
- [View/Edit Host](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/viewhost.md)
  – Open the Host Details View, which displays the collected host inventory information for the
  selected host in an easier-to-read format and allows you to manually edit the host inventory
  information
- [Delete Host(s)](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/deletehost.md)
  – Delete host from the selected list (permanently deletes host from the host master table if used
  in the Host Management node)
- [Import Location](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/importlocation.md)
  – Import the physical location data for hosts from a CSV file or database without creating a new
  host list. Location column is in the
  [Host Inventory Data Grid](/docs/accessanalyzer/11.6/admin/hostmanagement/datagrid.md).
- [Refresh Hosts](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/refresh.md)
  – Manually executes the host inventory query for the selection
- [Save Current View](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/saveview.md)
  – Create a dynamic host list from the current (filtered) data grid view
- [Save Selected To List](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/savetolist.md)
  – Create a static host list from the selected hosts within the current data grid
- [Schedule (Activities Pane Option)](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/schedule.md)
  – Opens a customized Schedule Properties window to schedule a host inventory query
- [Export Data](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/export.md)
  – Export the current data grid to a HTML, XML, or CSV file
- [Suspend/Resume Host Inventory](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/suspend.md)
  – Pause an **In progress** host inventory or resume a paused **In queue** host inventory
- External commands – Sub-header (not activity) that separates the Activities above which occur
  within the Enterprise Auditor Console from the Activities below which open external processes:

    - Manage Host – Opens the Microsoft Management Console interface for the selected host if it has
      that feature enabled
    - Explore Host – Opens Windows Explorer, displaying the shares on the selected host
    - Ping Host – Opens a Command Prompt to run a ping command targeting the selected host
    - Trace Route to Host – Opens a Command Prompt to run the `TraceRoute` command, locating a path
      to the selected machine in less than 30 hops

Activities available only at the individual host list nodes are:

- [Edit List](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/editlist.md)
  – Edit the selected host list in the Host List Wizard
- [Edit Query](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/editquery.md)
  – Edit the Host Discovery query settings for the selected query-created host list
- [Rename List](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/rename.md)
  – Rename the selected host list (should not be used if the host list has already been assigned to
  a job for execution)
- [Delete List](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/deletelist.md)
  – Delete the selected host list
- [View Query](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/viewquery.md)
  – Opens the Host Discovery Queries window
