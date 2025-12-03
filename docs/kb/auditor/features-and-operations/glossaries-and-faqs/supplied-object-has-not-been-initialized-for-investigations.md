---
description: >-
  Explains causes and solutions for the "The Supplied object has not been
  initialized" error when running investigations in Netwrix Auditor. Provides
  steps to assign db_owner, verify investigation credentials, or rebuild the
  Netwrix_ImportDB database.
keywords:
  - error
  - investigations
  - Netwrix Auditor
  - Netwrix_ImportDB
  - db_owner
  - SQL Server
  - Investigations settings
  - database corruption
products:
  - auditor
sidebar_label: Supplied Object Has Not Been Initialized for Inves
tags: []
title: "Supplied Object Has Not Been Initialized for Investigations"
knowledge_article_id: kA04u00000110vECAQ
---

# Supplied Object Has Not Been Initialized for Investigations

## Symptom

The following error appears when trying to complete an investigation:

`The Supplied object has not been initialized`

## Cause

- The account used for investigations the SQL Server instance has insufficient rights.
- The password for the account used for investigations in incorrect.
- The database used to import data from Long-Term Archive is corrupt.

## Solution

- Assign the `db_owner` role to the account used for investigations.

  1. On the computer where the SQL Server instance with `Netwrix_ImportDB` resides, navigate to **Start** > **All Programs** > **Microsoft SQL Server** > **SQL Server Management Studio**.
  2. Connect to the server using the credentials for the account with sufficient permissions to assign roles.
  3. In the left pane, expand the **Security** node. Expand the **Logins** node and select the login used for investigation. Right-click it and select **Properties**.
  4. In the left pane, select **User Mapping** and select the `Netwrix_ImportDB` database.
  5. In the **Database role membership** section, select **db_owner**. Click **OK** to save changes, and try running the investigation.

- Verify the password provided in **Investigations** settings.

  1. In the main Netwrix Auditor screen, click **Settings**.
  2. In the left pane, select the **Investigations** tab.
  3. Under the **SQL Server settings**, click **Modify**.
  4. Provide the credentials and proceed to save the changes.
  5. Try running the investigation.

- Delete the `Netwrix_ImportDB` database and rebuild the database.

  1. In Windows Services Manager on your Netwrix host, stop both Netwrix Auditor Archive Service and Netwrix Auditor Management Service.
  2. Run your SQL Management Studio instance and navigate to ` %SQL_Server_database_name%` > **Databases** > `Netwrix_ImportDB`. Right-click the database and select **Delete**.
  3. In the **Delete Object** window, check both option checkboxes:
     - Delete backup and restore history information for databases.
     - Close existing connections.
  4. Once the database has been deleted, restart Netwrix Auditor Archive Service and Netwrix Auditor Management Service.
  5. In the main Netwrix Auditor screen, click **Settings**.
  6. In the left pane, select the **Investigations** tab. Configure an investigation scope and run the investigation to recreate the `Netwrix_ImportDB` database.
