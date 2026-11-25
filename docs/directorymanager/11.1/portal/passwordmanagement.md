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

Complex passwords keep network infrastructure secure, but there is a real cost to that security.
Users forget their complex passwords. They can be given two options: either they call the helpdesk
to reset their password at an exorbitant cost or they use a self-service tool. Directory Manager can
serve both these functions. Using it:

- Helpdesk – Can reset passwords and unlock accounts for users after authentication. See the
  [Reset User Passwords as Helpdesk in Directory Manager](/docs/directorymanager/11.1/admincenter/helpdesk/operation/resetpassword.md) topic for detailed
  information.
- Users – Can reset their own passwords and unlock their own accounts after passing multifactor
  authentication. They can perform these password-related functions through various mediums, such
  as:

    - Directory Manager portal – Using it, they can:

        - reset their forgotten passwords. See the
          [Reset Your Account Password in Directory Manager](/docs/directorymanager/11.1/portal/secondfactorauthentication/passwordreset.md) topic for further information on how
          to reset forgotten passwords.
        - change their account passwords. See the [ Change Your Password in Directory Manager](/docs/directorymanager/11.1/portal/user/manage/changepassword.md) topic
          for further information on how to change their account passwords.
        - reset their own password or the password of any other user. See the
          [Reset a Password in Directory Manager](/docs/directorymanager/11.1/portal/user/manage/resetpassword.md) topic for additional information.
        - unlock their identity store account. See the [Unlock your Directory Manager account](/docs/directorymanager/11.1/portal/user/manage/unlockaccount.md)
          topic for detailed information on how to unlock their identity store accounts.

    - Client Software and Web Access

        The client software to install on user workstations is called
        [ Directory Manager Credential Provider for Windows](/docs/directorymanager/11.1/credentialprovider/credentialprovider.md) and is available for distribution using various
        IT-enabled distribution methods such as group policy and Microsoft System Center
        Configuration Manager (SCCM). See the [Install Credential Provider](/docs/directorymanager/11.1/credentialprovider/installconfigurecp.md) topic for
        additional information.

        The distributed client enables the **Forgot Password?** and **Unlock Account** links on the
        Windows logon screen of users' workstations. Users who forget their passwords or are locked
        out can access these functions from their machine. There is also an option for web
        access for users if they are on a remote computer.
