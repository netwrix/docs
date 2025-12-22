---
title: "Registration and Permissions Assignment"
description: "Registration and Permissions Assignment"
sidebar_position: 10
---

# Registration and Permissions Assignment

This section discusses the GroupID application registration and permission assignment procedure.

1. Login to Microsoft Entra Admin Center (https://portal.azure.com/) with a user that is part of the
   “Global Administrator” role or any role that has rights to register an app, such as the
   “Application administrator” role. This is required in order to give consent to certain
   permissions in the application.
2. In the Microsoft Entra Admin Center, go to Microsoft Entra ID > App registration and click **New
   registration**.

    ![App registeration page](/images/directorymanager/11.0/configureentraid/register/app_registeration.webp)

3. On the **Register an application** page, specify a name for the app. Select **Supported account
   types** as _Accounts in any organizational directory (Any Microsoft Entra ID – Multitenant_).
   Leave the Redirect URI as is and click **Register**.

    ![Register an application](/images/directorymanager/11.0/configureentraid/register/register_an_application.webp)

4. The **Overview** page is displayed. Copy the Application (client) ID and keep it safe.

    ![Overview page](/images/directorymanager/11.0/configureentraid/register/app_registeration_overview.webp)

5. Go to the **Authentication** node and set it as follows:

    ![Authenticate node](/images/directorymanager/11.0/configureentraid/register/authenticate_node.webp)

6. Click **Save**.
7. Click **Roles and administrators** node.

    ![Roles and Administration page](/images/directorymanager/11.0/configureentraid/register/roles_and_administration.webp)

8. On the **All roles** page, add your registered application to a directory role.

    - **Global administrator**: For Global administrator, type global to filter out the Global
      administrator role. Click **Global administrator**.

        ![All roles page](/images/directorymanager/11.0/configureentraid/register/all_roles.webp)

        Click **Add assignments**. On the Add assignment page, search your application and select
        it. Click the **Add** button. The application will be listed on the Assignments page.

        ![Add assignment page](/images/directorymanager/11.0/configureentraid/register/add_assignment.webp)

    - For any role other than Global administrator, add the registered application to the following
      two directory roles:

        - **Exchange administrators**: can manage all aspects of the Exchange product
        - **User administrators**: (User Account Administrator) can manage all aspects of users and
          groups, including resetting passwords for limited administrators.

            For example, this role does not allow deleting a global administrator. User Account
            Administrators can change passwords for users, Helpdesk administrators, and other User
            Account Administrators only.

            NOTE: By default, the GroupID Administrator security role in a Microsoft Entra
            IDidentity store binds to Global Administrator. If minimum role assignment for the
            service account is used, the default Admin Security role criteria should also be changed
            to the _User Account Administrators_ group.

9. Click **Add**.
10. Go to the **API permissions** node and select **Add a permission**.

    ![API Permission page](/images/directorymanager/11.0/configureentraid/register/add_a_permission.webp)

11. The Request API permissions page opens. Click the **Microsoft Graph** API tab.

    ![Request API permissions page](/images/directorymanager/11.0/configureentraid/register/request_api_permissions.webp)

12. Click the **Application permissions** tab:

    ![Application permissions tab](/images/directorymanager/11.0/configureentraid/register/application_permission.webp)

    Permissions get listed on the page. See the
    [Microsoft Entra ID Permissions](/docs/directorymanager/11.0/configureentraid/register/apppermissions.md)
    topic for the mandatory permissions that are required for creating the desired directory object.

13. [Optional] To add a permission from Office 365 Exchange Online API, click the **Add a
    permission** button (before the Grant admin consent for `<username>` button in the snapshot
    given in point # 14.

    Follow the steps shown on the following snapshot:

    ![Office 365 Exchange Online API](/images/directorymanager/11.0/configureentraid/register/office365_permission.webp)

14. [Optional] To access the SharePoint API for Entitlement management, click the **Add a
    permission** button (before the Grant admin consent for `<username>` button in the snapshot
    given in point # 14). Select the SharePoint API:

    ![SharePoint API card](/images/directorymanager/11.0/configureentraid/register/sharepoint_api_card.webp)

15. Select the Delegated permissions tab:

    ![SharePoint Delegated permissions](/images/directorymanager/11.0/configureentraid/register/sharepoint_delegated_permissions.webp)

    See
    [SharePoint Delegated Permissions](/docs/directorymanager/11.0/configureentraid/register/apppermissions.md#sharepoint-delegated-permissions)
    section of the
    [Microsoft Entra ID Permissions](/docs/directorymanager/11.0/configureentraid/register/apppermissions.md)
    topic for the required permission name.

This completes the registration process of GroupID in Microsoft Entra ID.

See Also

- [Register in Microsoft Entra ID](/docs/directorymanager/11.0/configureentraid/register/overview.md)
