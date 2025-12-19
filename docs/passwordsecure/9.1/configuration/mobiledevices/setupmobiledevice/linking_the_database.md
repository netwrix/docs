---
title: "Linking the database"
description: "Linking the database"
sidebar_position: 20
---

# Linking the database

First, an existing database must be linked to the Netwrix Password Secure app in order to finally
synchronize the data. During linking, an encrypted database is created on the mobile device, which
provides the data even without a network connection.

There are two ways to create a link.

#### Manual linking

If the database is to be linked manually, the dialog for creating the link is first called up via
the + in the top right-hand corner. Here the address of the Web Application is entered and confirmed
with a click on Connect.

![Create link](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/create-link-ma-en.webp)

In the next step, all available databases are displayed. The desired one can be selected by clicking
on it.

![choose link](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/choose-created-link-en.webp)

Finally, the login with user name and password takes place. In addition, a meaningful name can be
assigned.

![log in with your data](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/integration-ma-en.webp)

#### Link via QR code

**Fulluser**

The quickest way to create a link is via a QR code. To do this, first log in to the client. You will
find the corresponding QR code in the Backstage under Account:

![QR-code](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/link-via-qr-code-en.webp)

Then click on the button for the QR code in the app. In the following dialog, the QR code is simply
photographed from the monitor. The mobile database is now created directly in the background and
linked to the database on the server. In the next step, you can give the database profile a
meaningful name and log in directly:

![log in with your data](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/integration-ma-en.webp)

**LightUser**

Using the Light view, the user must click on their user account and click on the **Account** option

![Account LightClient](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/account-lc-2-en.webp)

This will open a window where you can use the QR code to scan the database.

![QR code lightclient](/images/passwordsecure/9.1/configuration/mobiledevices/setup/linking_database/account-lc-3-en.webp)
