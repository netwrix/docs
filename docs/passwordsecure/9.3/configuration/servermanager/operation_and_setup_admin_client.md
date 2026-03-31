---
title: "Operation and setup"
description: "Operation and setup"
sidebar_position: 80
---

# Operation and setup

## Structure of the Server Manager

The structure of the Server Manager is based to a high degree on the structure of the actual client.
The control elements such as the ribbon and the info and detail areas can be derived from the
section dealing with the
client([Operation and Setup](/docs/passwordsecure/9.3/configuration/advancedview/operationandsetup/operation_and_setup.md)).

NOTE: An initial password is required for the first login on Server Manager. The password is
“admin”. This password should be changed directly after login and carefully documented.

#### Status module

![Status Admin Client](/images/passwordsecure/9.2/configuration/server_manager/operation_and_setup/installation_with_parameters_248-en.webp)

1. Ribbon

As usual the ribbon can be found above. Because the module is purely informative, there is no
functionality in the ribbon, except for updating the view

2. Notification area

- The info area shows the status of the specific services. Click the icon to configure services. By
  default, the base configuration is used. If necessary, individual parameters can be replaced or
  adapted to personal requirements.
- You can start and stop a specific service via
- On the right side of the info area, the utilization of the processor and main memory is displayed
  over two curves.
- In the “Backup service” area, the last backups are displayed using a diagram. There is a green bar
  for a successful backup, a red symbolizes a failed backup. Additional information is displayed via
  a mouseover.

3. Server log

The server logbook shown on the right of the screen monitors and controls the server. It shows all
relevant actions on the server in a comprehensible way, always displaying the last 100 entries. The

| Action                        | Color  |
| ----------------------------- | ------ |
| Expected actions              | black  |
| Events that require attention | orange |
| Problems and crashes          | red    |

- Expected actions – such as starting and stopping services – are displayed in black
- All events (e.g. failed login attempts) that require attention are displayed in orange
- All problems (e.g. crashes) are marked in red

The server logbook can be sorted in ascending and descending order by date and description via the
column headings. The period shown can be limited using .

# Databases module

Databases are managed in a dedicated module. All relevant information on the existing databases can
also be called up – completely without accessing the SQL server.

![Databases Admin Client](/images/passwordsecure/9.2/configuration/server_manager/operation_and_setup/installation_with_parameters_252-en.webp)

1. Ribbon

2. Database overview

In the database overview, all databases listed alphabetically. This section can be minimised using
the arrow symbol on the top, left edge. Right-click on one of the databases to display a context
menu with all available functions.

3. Notification area

The Info area displays all the information about the database currently selected in the database
overview. This information is ivided into the three subsections “Database summary, Data sets and
Database tables”.

4. Recent backups

List of recent backups. Can be sorted by date

5. Database log

The database log is used to monitor and control the specific databases. All relevant actions for the
selected database are displayed in a comprehensible manner in one list. The categorisation is
carried out in the same way as the server log according to the colours applied.

#### Backups module

There is also a separate module for configuring the backups. This means that all backups can be
configured and managed directly from the Server Manager.

![backup-ac](/images/passwordsecure/9.2/configuration/server_manager/operation_and_setup/backup-ac.webp)

1. Ribbon

2. Backup overview

All configured backups are listed here. The overview can be minimized to the left. Other functions
are available via right-click

3. Notification area

The notification area is divided into three sections. The “Basic settings, Advanced settings and
Info” sections for the selected database can be used

4. Recent backups

The last backups are displayed in a list on the right.

5. All backups

A tabular overview shows all previous backups. The view can be sorted as usual. Here you can see at
a glance, when which database was saved and whether the backup was successful.
