---
title: "Account"
description: "Account"
sidebar_position: 20
---

# Account

## What is an account?

Users can configure all user-specific information in their account. It should be noted that if the
[Masterkey mode](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/directoryservices/activedirectorylink/masterkey_mode.md)
process is used, user data will always be taken from Active Directory – editing this information in
Netwrix Password Secure is thus not possible.

![account](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/account/installation_with_parameters_123-ewn.webp)

## Edit profile

All of the information in the contact and address sections can be defined under “Edit profile”. Some
areas of the profile overlap with the **management of users.** This information is explained in
[Managing users](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/managingusers/managing_users.md).

NOTE: No changes can be made to users that were imported from AD using Master Key mode. In this
case, all information will be imported from AD.

#### Editing user image

A new image can be added or the existing one replaced or deleted by clicking on the profile image.

NOTE: No changes can be made to users that were imported from AD with the aid of Master Key mode. If
an image has been saved in AD, it will be used here.

#### Change password

It is recommended that the user password is changed on a regular basis. If you want to use a new
password, it is necessary to enter the existing password in advance. The strength of the password
will be directly displayed.

NOTE: Users who were imported from AD with the aid of Master Key mode log in with the domain
password. Therefore, no password can be configured in this case.

NOTE: The strength of the user password can be stipulated by administration through the issuing of
password rules.

NOTE: If a user changes his or her password, all sessions that are still open are automatically
terminated.

#### Multifactor authentication

Multifactor authentication provides additional protection through a second login authentication
using a hardware token. The configuration is carried out via the ribbon in the “Security” section.
See also in
[Multifactor authentication](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/multifactorauthentication/multifactor_authentication.md)

![installation_with_parameters_124](/images/passwordsecure/9.1/configuration/advanced_view/mainmenu/account/installation_with_parameters_124.webp)

#### Configure autologin

This option can be used to automate the login to Netwrix Password Secure. For setup, just enter the
password twice and save it.

The autologin is linked to the hardware and thus will not work on a different computer. If you
change the hardware or the hardware ID, an existing autologin needs to be recreated.

#### Relevant right

**Option to manage the autologin**

User right

- Can manage autologin

:::warning
The automatic login should be handled as a process critical to security. It is
important to note that all data can be accessed, for example, if you forget to lock the computer.
:::


NOTE: For security reasons, the autologin is only valid for 180 days and then needs to be
subsequently renewed.

#### Reset settings

Clicking on this button resets all user-specific settings such as the column width, colour scheme,
etc. to the default values.

#### Start offline synchronization

If you have made changes to the database and do not want to wait for the next automatic
synchronization, an offline synchronization can also be started manually. The synchronization runs
in the background and is indicated by a status bar in the footer as well as by the icon. More…
