---
title: "Directory Manager Password Management"
description: "See how helpdesk staff and users reset passwords, change passwords, and unlock accounts through the portal and Credential Provider."
keywords:
  - self-service password reset
  - helpdesk password reset
  - unlock account
  - Credential Provider
sidebar_position: 60
---

# Directory Manager Password Management

Complex passwords keep network infrastructure secure, but users forget them. Users have two options: they call the helpdesk to reset their password at a high cost, or they use a self-service tool. Directory Manager supports both options:

- Helpdesk can reset passwords and unlock accounts for users after authentication. See the [Reset User Passwords as Helpdesk in Directory Manager](/docs/directorymanager/11.2/admincenter/helpdesk/operation/resetpassword.md) topic for detailed information.
- Users can reset their own passwords and unlock their own accounts after passing multifactor authentication. They can perform these password-related functions through various mediums.

## Directory Manager portal

In the Directory Manager portal, users can:

- Reset their forgotten passwords. See the [Reset Your Account Password in Directory Manager](/docs/directorymanager/11.2/portal/secondfactorauthentication/passwordreset.md) topic for more information.
- Change their account passwords. See the [Change Your Password in Directory Manager](/docs/directorymanager/11.2/portal/user/manage/changepassword.md) topic for more information.
- Reset their own password or the password of any other user. See the [Reset a Password in Directory Manager](/docs/directorymanager/11.2/portal/user/manage/resetpassword.md) topic for more information.
- Unlock their identity store account. See the [Unlock your Directory Manager account](/docs/directorymanager/11.2/portal/user/manage/unlockaccount.md) topic for detailed information.

## Client software and web access

The client software to install on user workstations is called [Directory Manager Credential Provider for Windows](/docs/directorymanager/11.2/credentialprovider/credentialprovider.md). You can distribute it using various IT-enabled distribution methods, such as group policy and Microsoft System Center Configuration Manager (SCCM). See the [Install Credential Provider](/docs/directorymanager/11.2/credentialprovider/installconfigurecp.md) topic for more information.

The distributed client enables the **Forgot Password?** and **Unlock Account** links on the Windows logon screen of users' workstations. Users who forget their passwords or are locked out can access these functions from their machine. Web access is also available for users on a remote computer.
