# Navigation Pane

The Navigation Pane, located on the left-hand side of the Enterprise Auditor Console, lists all the
major functions of Enterprise Auditor in a collapsible list format. Clicking on any node with an
arrow will open a collapsible list that shows more navigation, configuration, and use options.

![Configuration Settings](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationmenu.png)

The items in the Navigation Pane are:

- Settings – Opens the Global Settings section for configurations which affect the running of
  Enterprise Auditor jobs. See the
  [Global Settings](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/overview.md)
  topic for additional information.
- Host Management – Opens the Host Management section for inventorying and managing hosts to be
  targeted by Enterprise Auditor jobs. See the
  [Host Management](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/overview.md)
  topic for additional information.
- Host Discovery - Opens the Host Discovery section for discovering hosts to be targeted by the
  Enterprise Auditor jobs. See the Host Discovery topic for additional information.
- Running Instances – Displays progress for all running jobs. This includes jobs that are run by a
  scheduled task, interactively within the open Enterprise Auditor instance, or interactively in any
  other running instance of Enterprise Auditor See the
  [Running Instances Node](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/runninginstances/overview.md)
  topic for additional information.
- Schedules – Opens the Scheduled Actions view which displays information on all scheduled tasks.
  See the
  [Schedules](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/overview.md)
  topic for additional information.
- Jobs – Lists all solutions, job groups, and jobs within a folder structure. See the
  [Jobs Tree](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/overview.md) topic
  for additional information.

The title above the Navigation Pane will change depending on what is selected. There are also
several right-click or context menus available throughout the console. See the
[Navigation Pane Right-click Menus](#navigation-pane-right-click-menus) topic for additional
information.

## Navigation Pane Right-click Menus

There are several contextual right-click menus that are accessed by right-clicking on individual
nodes or sub-nodes in the Navigation Pane. The different right-click menus are:

- Host Management Right-click Menus
- Jobs Tree Right-click Menus

### Host Management Right-click Menus

The following right-click menus are available within the Host Management node.

See the
[Host Management](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/overview.md)
topic for additional information on these actions.

#### Discovery Node

The Discovery node right click-menu can be accessed in the Host Management node in the Navigation
Pane.

![Discovery Node options](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane1.png)

The Discovery node right-click menu options are:

- Create Query – Opens the
  [Host Discovery Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostdiscovery/wizard/overview.md)
- Suspend/Resume Query Queue – Pauses or resumes the host discovery queue

#### All Hosts Node

The All Hosts node right-click menu can be accessed in the Host Management node in the Navigation
Pane.

![All Hosts Node options](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane2.png)

The All Hosts right-click menu options are:

- Add Hosts – Opens the
  [Add Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/add.md)
  window
- Refresh Lists – Refreshes host list
- Refresh Hosts – Executes the host inventory query
- Save Selected to Lists – Opens the
  [Add Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/add.md)
  window with the selected hosts already added to a new list
- Schedule – Opens the
  [Schedule (Activities Pane Option)](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/schedule.md)
  window to schedule a host inventory query
- Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
- Suspend/Resume Host Inventory – Pauses or resumes a host inventory query

#### All Hosts > [Host List] Node

The All Hosts > [Host List] right-click menu can be accessed in the Host Management node in the
Navigation Pane.

![Host List Node options](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane3.png)

The All Hosts > [Host List] node right-click menu options are:

- Edit List – Opens the
  [Add Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/add.md)
  window for the selected list
- Rename List – Opens the Host list name window
- Delete List – Delete the selected host list
- Refresh List – Refreshes host list
- Refresh Hosts – Executes the host inventory query
- Save Selected to List – Opens the
  [Add Hosts](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/add.md)
  window with the selected hosts already added to a new list
- Schedule – Opens the
  [Schedule (Activities Pane Option)](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/actions/schedule.md)
  window to schedule a host inventory query
- Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
- Suspend Host Inventory – Pauses or resumes a host inventory query

### Jobs Tree Right-click Menus

The following right-click menus are available within the Jobs tree.

See the [Jobs Tree](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/overview.md)
topic for additional information on these actions.

#### Jobs Tree Primary Nodes

The Job tree primary nodes have the following right-click menu items:

**NOTE:** These menu items apply to a Jobs Tree, Job Group, and a Job. Depending on the chosen
selection, some menu items are grayed out.

| ![Jobs Tree Primary Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane4.png) | ![Jobs Tree Primary Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane5.png) | ![Jobs Tree Primary Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane6.png) |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Jobs Tree Node                                                                                                              | A Job Group Node                                                                                                            | A Job Node                                                                                                                  |

Menu items include:

- Run Group/Jobs – Executes the selected job group or job
- Publish – Publishes the reports from the selected job group or job without regenerating the
  report. See the
  [Reporting](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/report/overview.md)
  topic for additional information.
- Lock Group/Job – Locks job group or job, indicating configuration has been approved and the job
  group or job is ready to be scheduled/run. This option only applies to Role Based Access. See the
  [Role Based Access](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/access/rolebased/overview.md)
  topic for additional information.
- Unlock Group/Job – Unlocks job group or job, indicating the configuration has not been approved or
  needs to be modified. Unlocking a job will prevent Job Initiators from scheduling or running the
  job. This option only applies to Role Based Access. See the
  [Role Based Access](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/access/rolebased/overview.md)
  for additional information.
- Enable/Disable Job(s) – Disables the selected job or job group and skips them during scan
  execution. When a job group is disabled, all existing jobs within the job group are disabled. See
  the
  [Disable or Enable a Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/disableenable.md) topic
  for more information.
- Schedules – Opens the
  [Schedule Jobs](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/schedule/overview.md#schedule-jobs) to
  schedule job group or job execution
- Refresh Tree – Refreshes the Jobs tree
- Changes – Opens the
  [Changes Window](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/overview.md#changes-window) to
  track changes to job configuration in a change log
- Cut – Cuts the selected job group or job (Ctrl+X)
- Copy – Copies the selected job group or job (Ctrl+C)
- Paste – Pastes a copied/cut job group or job to the selected location (Ctrl+V)

    **CAUTION:** Delete Group/Job will also delete all tables that match the job’s naming convention
    from the database.

- Delete Group/Job – Deletes the selected job group or job. See the
  [Report Cleanup when Deleting a Job or Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/report/cleanup.md)
  topic for additional information.

    **CAUTION:** Rename Group/Job will rename all tables that match the job’s naming convention
    within the database.

- Rename Group/Job – Opens a textbox over the selected job group or job to rename
- Export – Zips the selected job group or job. Options allow for including the job, the reports,
  and/or the job log and SA_Debug log.
    - Save the ZIP file to a desired location, and optionally attach it to an email to
      [Netwrix Support](https://www.netwrix.com/support.html).
    - Email option requires
      [Notification](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/settings/notification.md)
      settings to be configured.
- Create Job (Ctrl+Alt+A) – Creates a new job at the same location as the selected job group or job.
  See the
  [Create a New Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/create.md)
  topic for additional information.
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md).
- Create Group – Creates a new job group within the selected location
- Explore Folder – Opens the Windows Explorer folder for the select object
- Properties – Opens the
  [Job Properties](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/properties/overview.md) window

#### [Job] > Status Node

The [Job] > Status node has the following right-click menu items:

![Status Node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane7.png)

The Status node right-click menu items are:

- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Status > [Table/View] Nodes

The [Job] > Status > [Table/View] nodes have the following right-click menu items:

| ![Table/View Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane8.png) | ![Table/View Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane9.png) | ![Table/View Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane10.png) |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ConnectStatus Table                                                                                                  | Job Stats & Task Stats Tables                                                                                        | Messages Table                                                                                                        |

These menu items apply to the ConnectStatus Tables, Job Stats and Task Stats Tables, and the
Messages Table. Depending on the chosen selection, some menu items are grayed out. The menu items
are:

- Create Hostlist From Data – Opens the New host list from job results window
- Edit Host List – Opens the Edit Dynamic Job Host Lists window
- Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Creates Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results Node

The [Job] > Results node has the following right-click menu items:

![Results Node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane11.png)

The menu items are:

- Refresh Tree – Refreshes the Jobs Tree
- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results > [Table/View] Nodes

The [Job] > Results > [Table/View] nodes have the following right-click menu items:

![Results-Table View Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane12.png)

The menu items are:

- Create Hostlist From Data – Opens the New host list from job results window. See the
  [Host Management](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/overview.md)
  topic for additional information.
- Edit Host List – Opens the Edit Dynamic Job Host Lists window. See the
  [Host Management](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/overview.md)
  topic for additional information.
- Export Data – Export the current data grid to an HTML file, an XML file, or a CSV file
- Actions – Opens the selected
  [Action Modules](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/overview.md)
  for the selected table/view
- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job - Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Results > [Report] Nodes

The [Job] > Results > [Report] nodes have the following right-click menu items:

![Results-Report Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane13.png)

The [Job] > Results > [Report] node right-click menu items are:

- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

#### [Job] > Configure Node

The [Job] >Configure node have the following right-click menu items:

![Configure Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane13.png)

The [Job] > Configure node right-click menu items are:

- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)

    **NOTE:** This right-click menu is also opened at the Configure > Hosts node.

#### [Job] > Configure > [Configuration] Nodes

The right-click menu items for the [Job] > Configure > [Configuration] node are the same right-click
menus as those available within the job’s individual configuration views:

| ![Configure-Configuration Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane14.png) | ![Configure-Configuration Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane15.png) | ![Configure-Configuration Nodes](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane16.png) |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Queries Node                                                                                                                       | Analysis Node                                                                                                                      | Actions Node                                                                                                                       |

Each configuration node has a different right-click menu. For additional information on each:

- For the Queries node, see the
  [Jobs](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/overview.md) section
  for information on these options
- For the Analysis node, see the
  [Jobs](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/overview.md) section
  for information on these options
- For the Actions node, see the
  [Jobs](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/job/overview.md) section
  for information on these options

#### [Job] > Configure > Reports Node

The [Job] >Configure > Reports node has the following right-click menu items:

![Configure-Reports Node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane17.png)

The [Job] > Configure > Reports node right-click menu items are:

- Create Report – Opens a new report Configuration under the job’s **Configure > Reports Node**
- Paste Report – Paste a copied report from a different job into this job’s Reports node
- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job

#### [Job] > Configure > Reports > [Report Configuration] Node

The [Job] >Configure > Reports > [Report Configuration] node has the following right-click menu
items:

![Reports Configuration Node](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/navigate/navigationpane18.png)

The [Job] > Configure > Reports > [Report Configuration] node right-click menu items are:

- Generate Report – Generates the selected report
- Rename Report – Opens a textbox over the selected report to rename
- Delete Report – Deletes the selected report
- Copy Report – Copies the report configuration to clipboard. The copied report will have only the
  roles inherited from the parent job when pasted.
- Run Job – Executes the selected job
- Add Instant Job – Opens the
  [Instant Job Wizard](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/overview.md)
- Create Job – Creates a new job at the same location as the selected job group or job (Ctrl+Alt+A)
