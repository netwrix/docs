# AzureSQL Target Least Privilege Model

To access the AzureSQL database, users require the Control permission for the target database. Users with the Control Database permission have access to perform activity scans due to the function leveraged by AzureSQL to return the required audit logs. See the [Auditing for Azure SQL Database and Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/azure-sql/database/auditing-overview?view=azuresql) Microsoft Knowledge Base article for additional information.

___RECOMMENDED:___ It is recommended to create a new user when leveraging a least privilege access model to access the AzureSQL database because the user must exist in the master database and all target database(s). A least privilege access model is one that uses the bare minimum privileges required to carry out collections for the AzureSQL data collector.

The following role and permission are required for the Least Privilege Model:

- db\_datareader role
- View Database Performance State permission
- Control permission on target database(s)

  __NOTE:__ Control permission must be granted on any database you wish to collect data for.

Follow the steps to configure the least privilege access model for AzureSQL collections.

__Step 1 –__ To login with the user, run the following script against the master database:

CREATE LOGIN LPAUser WITH PASSWORD = [insert password]

CREATE USER LPAUser FROM LOGIN LPAUser

__Step 2 –__ Create the user in the target database with the following script:

CREATE USER LPAUser FROM LOGIN LPAUser

Once complete, confirm that the newly created user exists in the instance of the master database and the target database before proceeding to the next step.

__Step 3 –__ Run the following script against the target database to apply the db\_datareader role:

EXEC sp\_addrolemember N’db\_datareader’, N’LPAUser’

__Step 4 –__ Apply the View Database State Permission against the target database with the following script:

GRANT VIEW DATABASE PERFORMANCE STATE TO LPAUSER

__Step 5 –__ Grant the control permission with the following script:

GRANT CONTROL ON DATABASE

The user is granted Control permission based on the least privilege access model.
