---
title: "Working with the Database"
description: "Working with the Database"
sidebar_position: 50
---

# Working with the Database

The NPR Server stores user and event information in a database. The default database is Microsoft
SQL Server Compact, an embedded version of SQL Server. The benefits of using SQL Server Compact
include:

- No manual installation or configuration required.
- No maintenance apart from database. See the Backing up the Database topic for additional
  information.
- Fast and lightweight.
- Free to use.

Despite these benefits, there are some disadvantages to using an embedded database. The benefits of
using SQL Server include:

- Remote access to the database from the Data Console and other applications.
- Improved availability if SQL Server is configured for high availability.
- Increased security.

See solutions to these disadvantages in the [Moving to SQL Server](/docs/passwordreset/3.3/administration/workingwiththedatabase/moving_to_sql_server.md) topic.

## Backing up the Database

The database should be backed up regularly. The instructions below are for a SQL Server Compact
database. If using SQL Server, then use your backup software to backup the database.

Follow the steps below for the recommended backup procedure.

**Step 1 –** Close the **Data Console** if it is open.

**Step 2 –** Stop

**Step 3 –** Copy the database files to a local or network disk.

**Step 4 –** Start the **Netwrix Password Reset** service.

**Step 5 –** Copy the database files to another device.

The database files (apr.sdf and aprlog.sdf) are in the Password Reset Server's installation folder
by default, but the location is configurable. The following commands create copies of the files with
a .bak extension. Copy the .bak files to another device, and run the backup script daily.

**net stop "Netwrix Password Reset"**

copy /Y "c:\program files\netwrix password reset\apr.sdf" "c:\program files\netwrix password
reset\apr.bak"

copy /Y "c:\program files\netwrix password reset\aprlog.sdf" "c:\program files\netwrix password
reset\aprlog.bak"

**net start "Netwrix Password Reset"**

:::note
Change the paths above if the database files are in a different folder. See the
[Database](/docs/passwordreset/3.3/administration/configuringpasswordreset/general_tab.md#database) topic for more information.
:::


**Restoring database from backup**

Follow the steps below to restore the database files from a backup.

**Step 1 –** Restore apr.bak and aprlog.bak from the backup device.

**Step 2 –** Close the Data Console if it is open.

**Step 3 –** Stop .

**Step 4 –** Copy apr.bak over apr.sdf, and aprlog.bak over aprlog.sdf.

**Step 5 –** Start .

:::warning
apr.sdf contains hashes of the user answers. The hashes are salted and encrypted to
protect them from attack, but you should still ensure that this file and all backup copies are
stored securely.

:::
