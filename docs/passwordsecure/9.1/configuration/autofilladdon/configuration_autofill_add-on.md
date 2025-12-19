---
title: "Configuration"
description: "Configuration"
sidebar_position: 10
---

# Configuration

## Starting the Autofill Add-on

The Autofill Add-on can be directly started via the desktop link that is automatically created when
it is installed. The login data correspond to the normal user data for the client.

![Login SSO](/images/passwordsecure/9.1/configuration/autofill_add-on/configuration/installation_with_parameters_129-en.webp)

To log in, the desired database and the associated login data are firstly selected. The Autofill
makes all of the databases configured on the client available. It is also possible to create
profiles as usual so that the connection data for certain databases can be used efficiently in the
future.

NOTE: The agent accesses the same configuration file as the client. All changes to profiles will
thus also affect the client. New profiles can thus also be created via the Autofill.

#### Context menu functionality

After successfully logging in, the Autofill Add-on firstly runs in the background. Right click on
the icon in the system tray to open the context menu.

![icon options](/images/passwordsecure/9.1/configuration/autofill_add-on/configuration/installation_with_parameters_130-en.webp)

- **Disconnect**: Connect to database/disconnect from database. (All connections are shown for
  multiple databases)
- **Login** enables you to log into another database
- **Disable/Enable agent** allows you the option of temporarily disabling automatic login
- A diverse range of variables can be defined via the **Settings**
- **Reload all Data**

**Settings**

![settings sso agent](/images/passwordsecure/9.1/configuration/autofill_add-on/configuration/installation_with_parameters_131-en.webp)

- The desktop notifications display various information, such as when data is entered
- Start with Windows includes the Autofill Add-on in the autostart menu
