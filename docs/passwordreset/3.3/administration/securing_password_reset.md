---
title: "Securing Password Reset"
description: "Securing Password Reset"
sidebar_position: 60
---

# Securing Password Reset

Password Reset has many inbuilt security features, but there are some things you should do to secure
Password Reset. The most important of these is to install an SSL certificate for the Web Interface.
You can also set up a standard user account with delegated permissions for the Password Reset
Server.

## Installing and Using an SSL Certificate

The Web Interface and Password Reset Server always communicate over a secure channel. You do not
have to configure the encryption for this connection, but you do need to set up SSL (Secure Sockets
Layer) encryption for the connection between the web browser (or Password Reset Client) and the web
server. See the [Password Reset Client](/docs/passwordreset/3.3/administration/password_reset_client.md) topic for more information.

:::warning
Do not use Password Reset on a production network without SSL encryption.
:::


You can use a self-signed certificate with Password Reset, but most organizations purchase
certificates from a certificate authority. You can install the Web Interface on a server that
already has an SSL certificate if you would rather not purchase another one.

Your certificate authority will have instructions to guide you through the certificate request and
installation process. You can also learn more about using SSL certificates with IIS on the pages
below.

- [http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis](http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis)
- [http://technet.microsoft.com/en-us/library/cc732230(WS.10).aspx](http://technet.microsoft.com/en-us/library/cc732230(WS.10).aspx)

:::note
Ensure that users only access Password Reset over an encrypted connection after the SSL
certificate is installed. The Start address and Restricted path in the Password Reset Client
configuration should start with https://. Web browsers can be redirected to the secure URL. See the
[Configuring the PRC](password_reset_client.md#configuring-the-prc) topic for more information.
:::


## Delegating Permissions to the Netwrix Password Reset Server Service

When the Setup wizard creates a service account for the Password Reset Server, it adds the account
to the Domain Admins group. This allows Password Reset to start working without additional
configuration, but it also gives the service excessive permissions. You can improve security by
removing the service account from the Domain Admins group and granting only the required
permissions.

You can grant Active Directory permissions from the command-line with dsacls.exe, or with the
graphical user interface. The examples below use the command-line, but you can use either method.
The commands you need to execute are:

**dsacls "[object]" /I:S /G "[account]:CA;Reset Password;user"**

dsacls "[object]" /I:S /G "[account]:RPWP;lockoutTime;user"

**dsacls "[object]" /I:S /G "[account]:RPWP;pwdLastSet;user"**

Where [object] is the distinguished name of the domain or OU containing the user accounts, and
[account] is the name of the service account in user@domain or domain\user format.

The first two commands allow NPR to reset passwords and unlock accounts. Both commands are required
even if the Unlock item is hidden from the menu because Password Reset automatically unlocks an
account when its password is reset. The third command allows Password Reset to set **User must
change password at next logon** in Active Directory if the **Require users to change their password
after a reset** option is enabled in the Configuration Console's **Security** tab.

For example, the following command grants the axs\apr account permission to reset passwords for
users in the axs.net domain:

**dsacls "dc=axs,dc=net" /I:S /G "axs\apr:CA;Reset Password;user"**

If Password Reset is configured to use an SQL Server Compact database, then give the service account
read and write permissions to the database files. See the
[Moving to SQL Server](/docs/passwordreset/3.3/administration/workingwiththedatabase/moving_to_sql_server.md) topic for more information.

Remove the service account from the Domain Admins group and restart the Password Reset service after
executing these commands. Check the Windows Application event log if the service does not start.

### Using Delegated Permissions with Protected Groups

When you delegate permissions for the Password Reset service account, the delegated permissions are
initially applied to all users in the domain or OU. After some time, Windows restores the original
permissions for some important user accounts. The restored permissions do not allow Password Reset
to reset passwords or unlock accounts for these users.

The accounts protected by this feature vary by Windows version, and include members of the Domain
Admins, Enterprise Admins, and Schema Admins groups. The list of protected groups is configurable,
so it may differ from the defaults in the Windows documentation.

If you are using an Password Reset service account with delegated permissions and do not want these
privileged accounts to reset their password or unlock their account with Password Reset, then there
is no need to make any configuration changes. Windows automatically restores the original
permissions for these accounts. This is done every hour by default.

If you want to allow these users to reset their password and unlock their account with Password
Reset, then you need to change the permissions for the AdminSDHolder container. The commands you
need to execute are:

**dsacls "[AdminSDHolder]" /G "[account]:CA;Reset Password"**

dsacls "[AdminSDHolder]" /G "[account]:RPWP;lockoutTime"

**dsacls "[AdminSDHolder]" /G "[account]:RPWP;pwdLastSet"**

Where [AdminSDHolder] is the distinguished name of the AdminSDHolder container, and [account] is the
name of the service account in user@domain or domain\user format.  
The DN of the AdminSDHolder container for the netwrix.com domain is
CN=AdminSDHolder,CN=System,DC=netwrix,DC=com

:::note
Changes to the AdminSDHolder container are not applied to accounts immediately. You may
need to wait up to an hour for Windows to update the DACL for these accounts. You can also start the
process manually. Search for runProtectAdminGroupsTask or FixUpInheritance in Microsoft's
documentation or more information.

:::
