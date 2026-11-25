---
title: "Register Directory Manager in Microsoft Entra ID"
description: "Register the Directory Manager application in Microsoft Entra ID, upload its certificate, assign directory roles, and add API permissions."
keywords:
  - app registration
  - Microsoft Entra Admin Center
  - API permissions
  - directory roles
  - certificate upload
sidebar_position: 10
---

# Register Directory Manager in Microsoft Entra ID

This topic describes how to register the Directory Manager application and assign its permissions.

Step 1 – Sign in to the Microsoft Entra Admin Center ([https://portal.azure.com/](https://portal.azure.com/)) with a user that is part
of the "Global Administrator" role or any role that has rights to register an app, such as the
"Application administrator" role. This is required to give consent to certain permissions
in the application.

Step 2 – In the Microsoft Entra Admin Center, go to Microsoft Entra ID > **App registration** and
click **New registration**.

![Microsoft Entra ID App registrations page with New registration selected](/images/directorymanager/11.1/configureentraid/register/app_registeration.webp)

Step 3 – On the **Register an application** page, specify a name for the app. Select **Supported
account types** as _Accounts in any organizational directory (Any Microsoft Entra ID –
Multitenant_). Leave the Redirect URI as is and click **Register**.

![Register an application page with the app name and supported account types](/images/directorymanager/11.1/configureentraid/register/register_an_application.webp)

Step 4 – The **Overview** page is displayed. Copy the Application (client) ID and keep it safe.

![App registration Overview page showing the Application (client) ID](/images/directorymanager/11.1/configureentraid/register/app_registeration_overview.webp)

Step 5 – Go to the **Authentication** node and set it as follows:

![Authentication node settings for the registered app](/images/directorymanager/11.1/configureentraid/register/authenticate_node.webp)

Step 6 – Click **Save**.

Step 7 – Select the **Certificates & secrets** node in the left pane to upload a certificate for
secure authentication in Microsoft Entra ID. See the
[Generate a certificate](modauth.md#generate-a-certificate) section of the
[Certificate for Entra ID Authentication](/docs/directorymanager/11.1/configureentraid/register/modauth.md) topic for additional information.

![Certificates and secrets page with the Upload certificate option](/images/directorymanager/11.1/configureentraid/register/pfxcertifupload.webp)

Step 8 – To upload the certificate:

1. Select **Upload certificate**.
2. On the Upload certificate page, click **Browse** and go to the location where you saved the
   generated certificate in .cer format.
3. Provide a brief description for the certificate in the **Description** box.
4. Click **Add**.

Step 9 – Click **Roles and administrators** node.

![Roles and administrators page for the registered app](/images/directorymanager/11.1/configureentraid/register/roles_and_administration.webp)

Step 10 – On the **All roles** page, add your registered application to a directory role.

- **Global administrator**: For Global administrator, type global to filter out the Global
  administrator role. Click **Global administrator**.

    ![All roles page filtered to the Global administrator role](/images/directorymanager/11.1/configureentraid/register/all_roles.webp)

    Click **Add assignments**. On the Add assignment page, search your application and select it.
    Click the **Add** button. The application is listed on the Assignments page.

    ![Add assignment page with the registered application selected](/images/directorymanager/11.1/configureentraid/register/add_assignment.webp)

- For any role other than Global administrator, add the registered application to the following two
  directory roles:

    - **Exchange administrators**: can manage all aspects of the Exchange product
    - **User administrators** (User Account Administrator): can manage all aspects of users and
      groups, including resetting passwords for limited administrators.

        For example, this role doesn't allow deleting a global administrator. User Account
        Administrators can change passwords for users, Helpdesk administrators, and other User
        Account Administrators only.

        :::note
        By default, the Directory Manager Administrator security role in a Microsoft Entra
        ID identity store binds to Global Administrator. If you use minimum role assignment for the
        service account, also change the default Admin Security role criteria to the
        _User Account Administrators_ group.
        :::


Step 11 – Click **Add**.

Step 12 – Go to the **API permissions** node and select **Add a permission**.

![API permissions node with the Add a permission button](/images/directorymanager/11.1/configureentraid/register/add_a_permission.webp)

Step 13 – The Request API permissions page opens. Click the **Microsoft Graph** API tab.

![Request API permissions page with the Microsoft Graph tile](/images/directorymanager/11.1/configureentraid/register/request_api_permissions.webp)

Step 14 – Click the **Application permissions** tab:

![Application permissions tab listing Microsoft Graph permissions](/images/directorymanager/11.1/configureentraid/register/application_permission.webp)

The page lists the permissions. See the [Microsoft Entra ID Permissions for Directory Manager](/docs/directorymanager/11.1/configureentraid/register/apppermissions.md)
topic for the mandatory permissions required for creating the directory object you want.

Step 15 – [Optional] To add a permission from Office 365 Exchange Online API, click the **Add a
permission** button (before the Grant admin consent for `username` button in the snapshot given in
point # 14).

Follow the steps shown on the following snapshot:

![Steps to add a permission from the Office 365 Exchange Online API](/images/directorymanager/11.1/configureentraid/register/office365_permission.webp)

Step 16 – [Optional] To access the SharePoint API for Entitlement management, click the **Add a
permission** button (before the Grant admin consent for `username` button in the snapshot given in
point # 14). Select the SharePoint API:

![SharePoint API card in the Request API permissions page](/images/directorymanager/11.1/configureentraid/register/sharepoint_api_card.webp)

Step 17 – Select the **Delegated permissions** tab:

![SharePoint Delegated permissions tab](/images/directorymanager/11.1/configureentraid/register/sharepoint_delegated_permissions.webp)

See [SharePoint Delegated Permissions](apppermissions.md#sharepoint-delegated-permissions) section
of the [Microsoft Entra ID Permissions for Directory Manager](/docs/directorymanager/11.1/configureentraid/register/apppermissions.md) topic for the required permission name.

This completes the registration process of Directory Manager in Microsoft Entra ID.
