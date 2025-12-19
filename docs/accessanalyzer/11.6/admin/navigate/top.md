---
title: "Top Navigation"
description: "Top Navigation"
sidebar_position: 10
---

# Top Navigation

The Top Navigation bars provide users quick access to various options and functions in Enterprise
Auditor. The two parts of the Top Navigation section are:

- [Menu Bar on the Console](#menu-bar-on-the-console)
- [Button Bar on the Console](#button-bar-on-the-console)

## Menu Bar on the Console

Users can access various Enterprise Auditor functions and actions in the Menu Bar.

![Menu Bar on Console](/images/accessanalyzer/11.6/admin/navigate/menubar.webp)

The Menu Bar options are:

- File

    - Create Job – Creates a new job (Ctrl+Alt+A) at the selected location within the Jobs tree
    - Add Instant Job – Opens the Enterprise Auditor Instant Job Wizard to install an instant job
      set at the selected location within the Jobs tree. See the
      [Instant Job Wizard](/docs/accessanalyzer/11.6/admin/jobs/instantjobs/overview.md)
      section for information on installing instant solutions from the Enterprise Auditor Library.

        :::warning
        Delete Job will also delete all data tables with the job’s base naming
        convention from the SQL database.
        :::


    - Delete Job – Deletes the selected job from the Jobs tree
    - Properties – Opens the Job Properties window for the selected job. See the
      [Job Properties](/docs/accessanalyzer/11.6/admin/jobs/job/properties/overview.md)
      topic for additional information.
    - Export Data – Exports the selected data table or view to an HTML, XML, or CSV file format
    - Exit – Closes the Enterprise Auditor application

- Edit

    - Cut – Cuts (Ctrl+X) the selected job group or job
    - Copy – Copies (Ctrl+C) the selected job group or job
    - Paste – Pastes (Ctrl+V) a copied job group or job to the selected job group folder (or into
      the Jobs tree)

        :::warning
        Delete will also delete all data tables with the job’s base naming convention
        from the SQL database.
        :::


    - Delete – Deletes the job group or job at the selected location within the Jobs tree

- View
    - Refresh Tree – Refreshes the Jobs tree
    - Reset Current Data View – This is a legacy feature
    - Show Change Deltas – This is a legacy feature
    - Show Job Progress – Redirects the Enterprise Auditor Console to the Running Job Node to view
      the running job’s progress. See the
      [Running Instances Node](/docs/accessanalyzer/11.6/admin/runninginstances/overview.md)
      topic for additional information.
- Job

    - Add Instant Job – Opens the Enterprise Auditor Instant Job Wizard to install an instant job
      set at the selected location within the Jobs tree. See the
      [Instant Job Wizard](/docs/accessanalyzer/11.6/admin/jobs/instantjobs/overview.md)
      section for information on installing instant solutions from the Enterprise Auditor Library.
    - Create Job – Creates a new job (Ctrl + Alt + A) at the selected location within the Jobs tree

        :::warning
        Delete Job will also delete all data tables with the job’s base naming
        convention from the SQL database.
        :::


    - Delete Job – Deletes the selected job from the Jobs tree

        :::warning
        Rename Job will also rename all data tables with the job’s base naming
        convention within the SQL database.
        :::


    - Rename Job – Renames the selected job
    - Properties – Opens the Job Properties window for the selected job. See the
      [Job Properties](/docs/accessanalyzer/11.6/admin/jobs/job/properties/overview.md)
      topic for additional information.
    - Execute:
        - Run Job or Group – Starts job execution for the selected job group or job
        - Stop Job or Group – Stops job execution for the selected job group or job
        - Schedule – Opens the selected job’s Schedule window. See the
          [Schedule Jobs](/docs/accessanalyzer/11.6/admin/schedule/overview.md#schedule-jobs)
          topic for additional information.
    - Queries:

        - Add from Library – Opens the Library to add a query to the selected job’s Query Selection
          view. See the Query Selection topic for additional information.
        - Create Query – Opens the Query Selection window to create a new query at the selected
          job’s Query Selection view
        - Cut Query – Deletes the selected query from the selected job’s Query Selection view
        - Properties – Opens the Query Selection window for the selected query
        - Add Table – Opens the Query Selection window to add a table to the selected query
        - Delete Table – Opens the Delete Table window which identifies associated tasks to be
          deleted and asks for confirmation of the deletion action. See the Query Selection topic
          for additional information.
        - Rename Table – Opens the Rename Table window to enter a new table name for the selected
          query. See the Query Selection topic for additional information.

            See the Data Collectors topic for additional information. See the
            [Data Collectors](/docs/accessanalyzer/11.6/admin/datacollector/overview.md)
            topic for additional information.

    - Reports
        - Create Report – Creates a new report at the selected Reports node
        - Generate Report – Generates the selected report and opens the report in a browser window
        - Rename Report – Rename the selected report for the database and how it is seen in the Jobs
          tree
        - Delete Report – Delete the selected report

- Schedules
    - Schedule – Opens the selected object’s Schedule window to create a new scheduled action. The
      Enterprise Auditor Console is redirected to the Schedules node. See the
      [Schedule](/docs/accessanalyzer/11.6/admin/settings/schedule.md)
      topic for additional information.
    - Delete – Delete the selected scheduled task from the Scheduled Actions view of the Schedules
      node
    - Properties – Opens the selected scheduled task’s Schedule window. See the
      [Schedule](/docs/accessanalyzer/11.6/admin/settings/schedule.md)
      topic for additional information.
- Tools
    - Libraries – Opens the Add Query from Library window to add a query to the selected job’s Query
      Selection view. See the
      [Schedule](/docs/accessanalyzer/11.6/admin/settings/schedule.md)
      topic for additional information.
    - Options – Redirects the Enterprise Auditor Console to the Settings node
- Help
    - Content – Opens Enterprise Auditor help documentation
    - User Details – Opens an information window display Current Logged In User and Role Assigned To
      Current User (when applicable)
    - Reference – This is a legacy feature
    - Enable Support Mode – Enables Support Mode for Netwrix Support Engineers
    - About – Opens the About window with the Enterprise Auditor Console’s version and license
      information, including License Expiration date, Host Limit, and Licensed Features

## Button Bar on the Console

The Button bar provides quick links to various actions and functions in Enterprise Auditor.

![Button Bar](/images/accessanalyzer/11.6/admin/navigate/buttonbar.webp)

The options in the Button Bar are:

| Icon                                                                                                                  | Icon Description            | Name                                                |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------- |
| ![selectinstantjob](/images/accessanalyzer/11.6/admin/navigate/selectinstantjob.webp) | Paper with plus sign        | Select an Instant Job                               |
| ![newjob](/images/accessanalyzer/11.6/admin/navigate/newjob.webp)                     | Paper with pencil           | Create a new job (Ctrl + Alt + A)                   |
| ![newgroup](/images/accessanalyzer/11.6/admin/navigate/newgroup.webp)                 | Folder with plus sign       | Create a new group                                  |
| ![newquery](/images/accessanalyzer/11.6/admin/navigate/newquery.webp)                 | Puzzle piece with plus sign | Create a new query and add it to the selected table |
| ![addreport](/images/accessanalyzer/11.6/admin/navigate/addreport.webp)               | Graph with plus sign        | Add a report                                        |
| ![addquery](/images/accessanalyzer/11.6/admin/navigate/addquery.webp)                 | Book with plus sign         | Add a query from a library                          |
| ![cut](/images/accessanalyzer/11.6/admin/navigate/cut.webp)                           | Scissors                    | Cut the selected query to the clipboard (Ctrl + X)  |
| ![copy](/images/accessanalyzer/11.6/admin/navigate/copy.webp)                         | Duplicate papers            | Copy the selected query to the clipboard (Ctrl + C) |
| ![paste](/images/accessanalyzer/11.6/admin/navigate/paste.webp)                       | Clipboard with paper        | Paste the query from the clipboard (Ctrl + V)       |
| ![delete](/images/accessanalyzer/11.6/admin/navigate/delete.webp)                      | Red X                       | Delete the selected query                           |

Select a button for the desired action.
