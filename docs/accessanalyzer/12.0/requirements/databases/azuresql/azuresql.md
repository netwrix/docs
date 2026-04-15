---
title: "AzureSQL Target Least Privilege Model"
description: "AzureSQL Target Least Privilege Model"
sidebar_position: 10
---

# AzureSQL Target Least Privilege Model

To access the AzureSQL database, users require the Control permission for the target database. Users
with the Control Database permission have access to perform activity scans due to the function
leveraged by AzureSQL to return the required audit logs. See the
[Auditing for Azure SQL Database and Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/azure-sql/database/auditing-overview?view=azuresql)
Microsoft Knowledge Base article for additional information.

:::info
It is recommended to create a new user when leveraging a least privilege access
model to access the AzureSQL database because the user must exist in the master database and all
target database(s). A least privilege access model is one that uses the bare minimum privileges
required to carry out collections for the AzureSQL data collector.
:::


The following role and permission are required for the Least Privilege Model:

- db_datareader role
- View Database Performance State permission
- Control permission on target database(s)

    :::note
    Control permission must be granted on any database you wish to collect data for.
    :::


Follow the steps to configure the least privilege access model for AzureSQL collections.

**Step 1 –** To login with the user, run the following script against the master database:

**CREATE LOGIN LPAUser WITH PASSWORD = [insert password]**

CREATE USER LPAUser FROM LOGIN LPAUser

**Step 2 –** Create the user in the target database with the following script:

**CREATE USER LPAUser FROM LOGIN LPAUser**

Once complete, confirm that the newly created user exists in the instance of the master database and
the target database before proceeding to the next step.

**Step 3 –** Run the following script against the target database to apply the db_datareader role:

**EXEC sp_addrolemember N’db_datareader’, N’LPAUser’**

**Step 4 –** Apply the View Database State Permission against the target database with the following
script:

**GRANT VIEW DATABASE PERFORMANCE STATE TO LPAUSER**

**Step 5 –** Grant the control permission with the following script:

**GRANT CONTROL ON DATABASE**

The user is granted Control permission based on the least privilege access model.
