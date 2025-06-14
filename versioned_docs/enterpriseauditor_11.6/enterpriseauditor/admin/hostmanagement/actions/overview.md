# Host Management Activities

The Activities pane available at the Host Management node and at the individual host list nodes
provides the tools needed to manage hosts and host lists.

| ![Activities pane in Host Management node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/activitieshostmanagement.png) | ![Activities pane in individual host list node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/activitiesindividualhost.png) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host Management Node                                                                                                                                               | Individual Host List Nodes                                                                                                                                              |

The available actions are:

- [Add Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/add.md)
  – Create a new host list by manually entering hosts or importing a host list (only available in
  the Host Management node)
- [View/Edit Host](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/viewhost.md)
  – Open the Host Details View, which displays the collected host inventory information for the
  selected host in an easier-to-read format and allows you to manually edit the host inventory
  information
- [Delete Host(s)](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/deletehost.md)
  – Delete host from the selected list (permanently deletes host from the host master table if used
  in the Host Management node)
- [Import Location](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/importlocation.md)
  – Import the physical location data for hosts from a CSV file or database without creating a new
  host list. Location column is in the
  [Host Inventory Data Grid](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/datagrid.md).
- [Refresh Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/refresh.md)
  – Manually executes the host inventory query for the selection
- [Save Current View](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/saveview.md)
  – Create a dynamic host list from the current (filtered) data grid view
- [Save Selected To List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/savetolist.md)
  – Create a static host list from the selected hosts within the current data grid
- [Schedule (Activities Pane Option)](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/schedule.md)
  – Opens a customized Schedule Properties window to schedule a host inventory query
- [Export Data](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/export.md)
  – Export the current data grid to a HTML, XML, or CSV file
- [Suspend/Resume Host Inventory](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/suspend.md)
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

- [Edit List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/editlist.md)
  – Edit the selected host list in the Host List Wizard
- [Edit Query](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/editquery.md)
  – Edit the Host Discovery query settings for the selected query-created host list
- [Rename List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/rename.md)
  – Rename the selected host list (should not be used if the host list has already been assigned to
  a job for execution)
- [Delete List](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/deletelist.md)
  – Delete the selected host list
- [View Query](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/viewquery.md)
  – Opens the Host Discovery Queries window
