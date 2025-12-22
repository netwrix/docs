---
title: "Multifactor authentication"
description: "Multifactor authentication"
sidebar_position: 50
---

# Multifactor authentication

## What is multifactor authentication?

By means of multifactor authentication, you can save the login – in addition to the password – with
a further factor. Setting up a multifactor authentication can be done by either the administrator or
the user.

## Requirements

To use multifactor authentication on a database, it must firstly have been activated on the Server
Manager. In the database module, open the settings for the selected database via the ribbon.

![database settings](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_1-en.webp)

It is possible to separately define in the settings whether it is permitted to use each interface on
the database.

![multifactor authentication](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_2-en.webp)

### Other settings

In the user settings, it is also possible to define the "Length of validity of a multifactor
authentication token" in minutes.

NOTE: In order for a user (administrator) to be able to **configure** multifactor authentication for
other users, the user must have the rights **read**, **write**, **delete** and **authorize**. It is
important that these rights exist before Multifactor Authentication is set up.

## Configuration of multifactor authentication

In the
[Organisational structure](/docs/passwordsecure/9.1/configuration/advancedview/clientmodule/organisationalstructure/organisational_structure.md)
module, you select the user and the interface "Multifactor authentication" in the ribbon.

![TOTP](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_3-en.webp)

The desired type of authentication is selected and given a title. This name is also displayed to the
user when logging in. The subsequent process differs depending on the desired authentication type.

### Google authenticator

The prerequisite for this is that the relevant app has been started on a smartphone. After the name
has been assigned for the authentication, you generate a new secret via the corresponding button. A
QR code is displayed, which must be scanned using the Google Authenticator app on a smartphone.

![google authenticator](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_4-en.webp)

Once the Google Authenticator app has detected the QR code, it will return a 6-digit PIN. You must
then enter it in the appropriate field. Finally, click on **Create** in the ribbon.

## RSA SecurID Token

To set up multifactor authentication using RSA SecurID, simply enter the RSA user name and click
**Create** directly in the ribbon.

![RSA SecurID Token](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_5-en.webp)

NOTE: The prerequisite for the use of RSA SecurID token is that the access data has been stored in
the Database settings on the Server Manager.

## Public key infrastructure

For PKI setup, the **Select** button is used to open the menu for selecting the desired certificate.
All eligible certificates are displayed.

![Public key infrastructure](/images/passwordsecure/9.1/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/multifactor_authentication_7-en.webp)

Now just select the desired certificate from the list to confirm the process.

## Yubico One Time Password

The configuration of multifactor authentication using Yubico One Time Password is described
in[Multifactor Authentication](/docs/passwordsecure/9.1/configuration/servermanger/managingdatabases/databasesettings/multifactor_authentication_ac.md).

## Delete Multifactor Authentication (MFA)

The multifactor authentication can be deleted by the user himself or by another user with sufficient
authorization. The rights **Read**, **Write**, **Authorize** and **Delete** are required for another
user to perform the deletion.

In order to delete a file, you should go to the main menu. Under **Account** you will find the item
**Multifactor Authentication**. An alternative way is to enter the management of multifactor
authentication via the organisational structure. To do so, select the corresponding user and click
on the **Multifactor Authentication** ribbon.

In the administration of the multi-factor authentication you will then find in the ribbon the
possibility to delete the stored MFA.
