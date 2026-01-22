---
description: >-
  Learn how to secure Netwrix Password Reset by installing an SSL certificate
  for the Web Interface and delegating only the required Active Directory
  permissions to the service account.
keywords:
  - password reset
  - SSL certificate
  - dsacls
  - Active Directory
  - delegated permissions
  - AdminSDHolder
  - account unlock
  - reset password
products:
  - password-reset
sidebar_label: 'Security, Certificates and Permissions'
tags: []
title: 'Security, Certificates and Permissions'
knowledge_article_id: kA04u000000PdLhCAK
---

# Security, Certificates and Permissions

Netwrix Password Reset has many in-built security features, but there are some things you should do to secure the product. The most important of these is to install an SSL certificate for the Web Interface. You can also set up a standard user account with delegated permissions for the Netwrix Password Reset Server.

## Installing and Using an SSL Certificate

The Web Interface and the Server always communicate over a secure channel. You do not have to configure the encryption for this connection, but you do need to set up SSL (Secure Sockets Layer) encryption for the connection between the web browser (or **Password Reset Client**) and the web server.

> **NOTE.** Do not use Netwrix Password Reset on a production network without SSL encryption.

You can use a self-signed certificate with Netwrix Password Reset, but most organizations purchase certificates from a certificate authority. You can install the Web Interface on a server that already has an SSL certificate if you would rather not purchase another one.

Your certificate authority will have instructions to guide you through the certificate request and installation process. You can also learn more about using SSL certificates with IIS on these two pages:

- https://learn.microsoft.com/en-us/iis/manage/configuring-security/how-to-set-up-ssl-on-iis
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc732230(v=ws.10)?redirectedfrom=MSDN

> **NOTE.** Ensure that users only access Netwrix Password Reset  over an encrypted connection after the SSL certificate is installed. The **Start address** and **Restricted path** in the **Password Reset Client** configuration should start with `https://`. Web browsers can be redirected to the secure URL.

## Delegating Permissions to the Netwrix Password Reset Server Service

When the Setup wizard creates a service account for the Server, it adds the account to the Domain Admins group. This allows Netwrix Password Reset to start working without additional configuration, but it also gives the service excessive permissions. You can improve security by removing the service account from the Domain Admins group and granting only the required permissions.

You can grant Active Directory permissions from the command-line with `dsacls.exe`, or with the graphical user interface. The examples below use the command-line, but you can use either method. The commands you need to execute are:

```text
dsacls "[object]" /I:S /G "[account]:CA;Reset Password;user"
dsacls "[object]" /I:S /G "[account]:RPWP;lockoutTime;user"
dsacls "[object]" /I:S /G "[account]:RPWP;pwdLastSet;user"
```

Where `[object]` is the distinguished name of the domain or OU containing the user accounts, and `[account]` is the name of the service account in `user@domain` or `domain\\user` format.

The first two commands allow Netwrix Password Reset to reset passwords and unlock accounts. Both commands are required even if the Unlock item is hidden from the menu because the product automatically unlocks an account when its password is reset. The third command allows to set "User must change password at next logon" in Active Directory if the **Require users to change their password after a reset** option is enabled in the **Configuration Console**'s **Security** tab.

For example, the following command grants the `axs\apr` account permission to reset passwords for users in the `axs.net` domain:

```text
dsacls "dc=axs,dc=net" /I:S /G "axs\apr:CA;Reset Password;user"
```

If Netwrix Password Reset is configured to use an SQL Server Compact database, then give the service account read and write permissions to the database files.

Remove the service account from the Domain Admins group and restart the service after executing these commands. Check the Windows Application event log if the service does not start.

### Using Delegated Permissions with Protected Groups

When you delegate permissions for the Netwrix Password Reset service account, the delegated permissions are initially applied to all users in the domain or OU. After some time, Windows restores the original permissions for some important user accounts. The restored permissions do not allow to reset passwords or unlock accounts for these users.

The accounts protected by this feature vary by Windows version, and include members of the Domain Admins, Enterprise Admins, and Schema Admins groups. The list of protected groups is configurable, so it may differ from the defaults in the Windows documentation.

If you are using a service account with delegated permissions and do not want these privileged accounts to reset their password or unlock their account with Netwrix Password Reset, then there is no need to make any configuration changes. Windows automatically restores the original permissions for these accounts. This is done every hour by default.

If you want to allow these users to reset their password and unlock their account with Netwrix Password Reset, then you need to change the permissions for the AdminSDHolder container. The commands you need to execute are:

```text
dsacls "[AdminSDHolder]" /G "[account]:CA;Reset Password"
dsacls "[AdminSDHolder]" /G "[account]:RPWP;lockoutTime"
dsacls "[AdminSDHolder]" /G "[account]:RPWP;pwdLastSet"
```

Where `[AdminSDHolder]` is the distinguished name of the AdminSDHolder container, and `[account]` is the name of the service account in `user@domain` or `domain\\user` format.

The DN of the AdminSDHolder container for the anixis.net domain is `CN=AdminSDHolder,CN=System,DC=anixis,DC=net`

> **NOTE.** Changes to the AdminSDHolder container are not applied to accounts immediately. You may need to wait up to an hour for Windows to update the DACL for these accounts. You can also start the process manually. Search for `runProtectAdminGroupsTask` or `FixUpInheritance` in Microsoft's documentation for more information.
