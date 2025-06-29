# Configuration

The following pages will provide you with in-depth information how to configure the different
Netwrix Password Secure components and features.

# Basic configuration

## What is basic configuration?

Within the basic configuration, the connection to the SQL server or to the databases is defined. The
basic configuration appears the first time the Server Manager is started and can be called up at any
time in the basic configuration.

![base configuration](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/baseconfiguration/installation_with_parameters_188-en.webp)

## The basic configuration

A special wizard is available to carry out the configuration:

![Baseconfig](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/baseconfiguration/installation_with_parameters_189-en.webp)

#### Service address

The service address of the SQL server can be selected via the drop-down menu. It is mandatory to
select the adapter via which the Server Manager can also access the SQL server.

The loopback address 127.0.0.1 should not be used here.

#### Service user

Service user This setting is used to define the service user, which is needed to start the server
service as well as the backup service. The “Use local system” setting starts the services with the
local system account.

**CAUTION:** The defined service user **needs local administrator** rights to properly configure the
server and create databases.

#### SQL configuration instance

Under “SQL Server instance” the database server must be specified, including the SQL instance. For
simplicity, you can copy the server name from the login window of the SQL server.

![installation_with_parameters_190](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/baseconfiguration/installation_with_parameters_190.webp)

If the option “Service user” is selected, enter the user that logs on to the SQL Server. Please note
that “dbCreator” rights are necessary to create a configuration database. “dbOwner” rights are
sufficient if the database is created manually on the SQL server and is only accessed here. Enter
the name of the configuration database under “Database”.

NOTE: Refer to the system requirements for server section for more information about the users.

#### Expert mode

Expert mode displays additional menu options for advanced configurations:

Backup service user

You can use a dedicated user to run the backup here. The service user is selected by default.

SQL configuration instance

This menu item can be configured in expert mode via a so-called connection string.

Certificate

The SSL connection certificate can also be configured under this item to protect the client server
connection. By default, a certificate is generated by the Server Manager. However, you can also
choose your own. Further information can be found directly in the section provided for this purpose.

**CAUTION:** Exchanging or overwriting an existing certificate may cause warnings to the clients if
the certificate is not trusted by each client.

Allow host mode

Host mode is no longer supported since version 8.13.

Activating caching

Caching is activated by default to improve performance. The so-called SqlBroker is registered for
the database on the SQL server here. The following is cached:

- The roles of the individual users
- The structure of the organisational units
- All settings

NOTE: If this option is changed, the server needs to be restarted so that the change can take
effect.

# Main menu

## What is the main menu?

The operation and structure of the Main menu/Backstage menu is the same for the
[Main menu](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)
on the client. This area can be used independently of the currently selected module.

- [General settings](/docs/passwordsecure/9.1/configuration/server-manager/general-settings.md)
- [Backup settings](/docs/passwordsecure/9.1/configuration/server-manager/backup-settings.md)
- [License settings](/docs/passwordsecure/9.1/configuration/server-manager/license-settings.md)
- [Advanced settings](/docs/passwordsecure/9.1/configuration/server-manager/advanced-settings.md)

# Operation and setup

## Structure of the Server Manager

The structure of the Server Manager is based to a high degree on the structure of the actual client.
The control elements such as the ribbon and the info and detail areas can be derived from the
section dealing with the
client([Operation and Setup](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)).

NOTE: An initial password is required for the first login on Server Manager. The password is
“admin”. This password should be changed directly after login and carefully documented.

#### Status module

![Status Admin Client](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/operation_and_setup/installation_with_parameters_248-en.webp)

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

![Databases Admin Client](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/operation_and_setup/installation_with_parameters_252-en.webp)

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

![backup-ac](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/operation_and_setup/backup-ac.webp)

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

# Server Manager

## What is the Server Manager?

The Server Manager takes care of the central administration of the databases as well as the
configuration of the backup profiles. In addition, it provides the very important interface to the
Netwrix Password Secure license server. Furthermore, it is used for the administration of globally
defined settings, as well as the configuration of profiles for sending emails.
[Installation Server Manager](/docs/passwordsecure/9.1/installation/server-manager/installation-server-manager.md)

![Admin Client](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/server_manager/installation_with_parameters_187-en.webp)

In this sense, the server service represents the interface between the client and the SQL server.
The Server Manager is responsible for configuring the server service. It allows the central
administration of the databases without having access to the SQL server. This is a huge advantage
with regards to organization and authorizations.
