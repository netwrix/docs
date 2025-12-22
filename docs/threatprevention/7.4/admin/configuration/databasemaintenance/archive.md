---
title: "Archive Data"
description: "Archive Data"
sidebar_position: 20
---

# Archive Data

To use the Move operation on the
[Database Maintenance Window](/docs/threatprevention/7.4/admin/configuration/databasemaintenance/overview.md),
you must specify a database where data is archived.

Follow the steps to configure settings for archiving data.

**Step 1 –** Click **Configuration** > **Database** > **Maintenance** on the menu. The Database
Maintenance window is displayed. Click the **Archive DB** tab.

![Database Maintenance window - Archive DB tab](/images/threatprevention/7.4/admin/configuration/databasemaintenance/archivedb.webp)

**Step 2 –** Enter the following information for the database where data is to be archived:

- Server – SQL Server where the archive database is located
- Port – Instance port number, by default this is set to 0
- Database – Name of the archive database
- Authentication
  - For Windows Authentication – Check the Use Windows Authentication box
  - For SQL Authentication – Enter theuser name and password of an account to use for SQL
    authentication

**Step 3 –** Click **Save** to save the configurations.

To query archived event data, use the Investigate interface. See the
[Investigate Interface](/docs/threatprevention/7.4/admin/investigate/overview.md)
topic for additional information.
