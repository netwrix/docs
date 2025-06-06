# Permissions for Logon Activity Auditing

Before you start creating a monitoring plan to audit the logon activity in your domain, determine the domain account that will be used for data collection.

Depending on the network traffic compression setting you need to use, one of the following is required:

- If network traffic compression is enabled, then the account must belong to the Domain Admins group;
- If network traffic compression is disabled, then you can choose between account which belongs to the Domain Admins group or non-administrative account. See the [Configure Non-Administrative Account to Collect Logon Activity ](#Configure-Non-Administrative-Account-to-Collect-Logon-Activity)topic below for additional information.

Afterward, include this account in the monitoring plan wizard.

Please consider the following:

- For the data collecting account, you should use a different account than the one Auditor is using to access the database.
- If gMSA is being used, data collecting account should be a member of the local Administrators group on the Netwrix Auditor host.

## Configure Non-Administrative Account to Collect Logon Activity

This section contains instructions on how to configure an account to collect Logon Activity with minimum rights assignment. The instructions below apply only if you are going create a monitoring plan with disabled network traffic compression and do not want to adjust audit settings automatically.

Before creating an account, grant the _Read_ permission on the SECURITY registry key ```(HKEY_LOCAL_MACHINE\SECURITY)``` for an admin account under which you will make changes in Group Policy.

Follow the steps to configure non-administrative account to collect logon activity:

__Step 1 –__ Create a domain user with the following privileges:

- Back up files and directories. See the  [Configure the Back up Files and Directories Policy](/docs/product_docs/auditor/auditor/configuration/fileservers/windows/configuration.md#Configure-the-Back-up-Files-and-Directories-Policy) topic for additional information.
- Log on as a batch job. See the [Permissions for Active Directory Auditing](/docs/product_docs/auditor/auditor/configuration/activedirectory/permissions.md#Permissions-for-Active-Directory-Auditing) topic for additional information.
- Manage auditing and security log. See the [Configure the Manage Auditing and Security Log Policy](/docs/product_docs/auditor/auditor/configuration/activedirectory/permissions.md#Configure-the-Manage-Auditing-and-Security-Log-Policy) topic for additional information.

__Step 2 –__ Grant the _Read_ permission on the following registry keys to this user:

- ```HKEY_LOCAL_MACHINE\SECURITY\Policy\PolAdtEv```
- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg```
- ```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security```

See the [Assign Permission To Read the Registry Key](/docs/product_docs/auditor/auditor/configuration/windowsserver/permissions.md#Assign-Permission-To-Read-the-Registry-Key) topic for additional information on how to do it using Registry Editor.
