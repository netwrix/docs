---
title: "Configuration Utility"
description: "Configuration Utility"
sidebar_position: 20
---

# Configuration Utility

When you install Identity Recovery, the installation also installs the Recovery Configuration Utility on the
same server. This utility registers the RSAT Extension on the Recovery Application Server.

To launch the Recovery Configuration Utility, double-click the Recovery_Config.exe executable at the
following location in the Identity Recovery installation directory:
`...Netwrix\IdentityRecovery\Recovery_Config.exe`

![  Recovery Configuration Utility](/images/identityrecovery/3.1/install/configurationutility.png)

The Recovery Configuration Utility window has options to:

- Register/unregister the RSAT Extension on the Recovery Application Server
- Update the Identity Recovery database information
- View product licensing information

## Register/Unregister the RSAT Extension

The RSAT Extension is an MMC snap-in that you can install on domain-joined machines. It extends the
Active Directory Users and Computers (ADUC) console with Identity Recovery specific right-click options for object rollback and recovery. Included in this extension is a Recycle Bin for restoring deleted objects. Consider the following:

- The Identity Recovery installation package automatically installs the RSAT Extension on the Recovery Application Server. You must register the local Extension on the server
  to enable the rollback and restore options in ADUC.
- You can manually install the Extension on a remote server where ADUC is installed. The Extension
  connects to the Recovery Application Server using the server name or IP address you provide when
  installing the Extension on the remote machine. See the
  [Install the RSAT Extension](/docs/identityrecovery/3.1/install/installation.md) topic for additional information.

### Register the RSAT Extension

You must register the RSAT Extension on the Recovery Application Server to add the Rollback and
Restore options to the ADUC console.

**Step 1 –** On the Recovery Configuration Utility window, click the **Register** button to register
the RSAT Extension. On registration, the system displays the following message and the button changes to
Unregister.

![RSAT Extension Registered message](/images/identityrecovery/3.1/install/rsatextensionregistered.webp)

**Step 2 –** Click **OK**.

### Unregister the RSAT Extension

Unregistering the RSAT Extension will remove the Rollback and Restore options from the Active
Directory Users and Computers console.

**Step 1 –** On the Recovery Configuration Utility window, click the **Unregister** button to
unregister the RSAT Extension. The system displays the following message and the button changes to
Register.

![RSAT Extension Not Registered message](/images/identityrecovery/3.1/install/rsatextensionunregistered.webp)

**Step 2 –** Click **OK**.

## View SQL Configurations

The Recovery Configuration Utility window displays the following information for SQL configuration:

- SQL Server – The fully-qualified DNS location name or IP address of the SQL Server machine that
  hosts the Identity Recovery database
- Database – The name of the Identity Recovery database on the server
- Authentication – Choose between Windows Authentication or SQL Server Authentication credentials.
  If SQL Server Authentication is selected, provide the login credentials for the provisioned
  account in the Login and Password fields.
- Test – Click the **Test** button to verify the authentication connection
- Save – After making any changes, click the **Save** button to save the configuration

To update the password for the SQL server service account, see the
[Update SQL Server Service Account Password](/docs/identityrecovery/3.1/troubleshooting/credentialpasswords/sqlserverserviceaccount.md)
topic.

## View License Information

On the Recovery Configuration Utility window, click the **License Information** button to open the
License Information window that displays the validity of the Identity Recovery license,
its type, and expiration date.
