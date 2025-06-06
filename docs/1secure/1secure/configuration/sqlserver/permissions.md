# Permissions for SQL Server Auditing

Before you create a monitoring plan to audit your SQL Server, make sure the account to be used for data collection meets the requirements listed below. You have to provide this account in the Monitoring Plan wizard.

You can also use a Group Managed Service Account (gMSA) for collecting data.

To grant permissions to the account for SQL Server audit, do the following on the target SQL Server.

- To access SQL Server, Windows authentication will be used, so the data collection account should be a Windows account specified in the _domain\user_ format (_domain\user$_ for Managed Service Account).   
  SQL Server logins and authentication method are not supported.
- The account must be assigned the _System Administrator_ server role for this SQL Server. See the [Assign 'System Administrator' Role](#Assign-System-Administrator-Role) topic for additional information.
- For auditing SQL Server availability on groups, the account must have the _sysadmin_ server role granted on each server added to an availability group.
- To collect state-in-time data from SQL Server, the account must also meet the following additional requirements:

  - Local Administrator rights on the target SQL Server.
  - If SQL Server is included in the Active Directory domain, the account should also be included in that domain.

## Assign 'System Administrator' Role

__Step 1 –__ On the computer where the audited SQL Server instance is installed, navigate to Start > All Programs > Microsoft SQL Server > SQL Server Management Studio.

__Step 2 –__ Connect to the SQL Server instance.

__Step 3 –__ In the left pane, expand the Security node. Right-click the Logins node and select __New Login__ from the pop-up menu. The Login - New window is displayed.

![Login - New window](/static/img/product_docs/1secure/1secure/configuration/sqlserver/manualconfig_ssms_newlogin2016.png)

__Step 4 –__ Click __Search__ next to the Login Name box and specify the user you want to assign the sysadmin role.

__Step 5 –__ Click the __Server Roles__ tab and assign the sysadmin role to the new login.
