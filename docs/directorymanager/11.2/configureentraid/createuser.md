---
title: "Create a Microsoft Entra ID Service Account User"
description: "Create the Microsoft Entra ID user that Directory Manager uses as the service account for a Microsoft Entra ID identity store."
keywords:
  - Microsoft Entra ID user
  - service account
  - Entra admin center
  - Global Administrator
  - User Account Administrators
sidebar_position: 30
---

# Create a Microsoft Entra ID Service Account User

After you register your application with Microsoft Entra ID, formerly Azure Active Directory, create a user to set as the service account when you create an identity store for Microsoft Entra ID in Directory Manager.

By default, the Directory Manager Administrator security role in a Microsoft Entra ID identity store binds to Global Administrator. If you use minimum role assignment for the service account, also change the default Admin Security role criteria to the User Account Administrators group.

To create a user in Microsoft Entra ID:

1. In the Microsoft Entra Admin Center, go to Microsoft Entra ID > Users and click **New
   User** > **Create new user**.

   ![Microsoft Entra admin center Users page with the New user menu open](/images/directorymanager/11.2/configureentraid/register/create_user.webp)

2. On the User page, complete the tabs.

   ![Create new user page with the Basics, Properties, and Assignments tabs](/images/directorymanager/11.2/configureentraid/register/create_new_user_page.webp)

   The **Basics** tab contains the core fields required to create a new user.

   - **User principal name**: Enter a unique username and select a domain from the menu after the @ symbol. Select **Domain not listed** if you need to create a new domain. For more information, see [Add your custom domain name](https://learn.microsoft.com/en-us/entra/fundamentals/add-custom-domain).
   - **Mail nickname**: If you need to enter an email nickname that is different from the user principal name you entered, uncheck the **Derive from user principal name** option, then enter the mail nickname.
   - **Display name**: Enter the user's name.
   - **Password**: Provide a password for the user to use during their initial sign-in. Uncheck the **Auto-generate password** option to enter a different password.
   - **Account enabled**: This option is checked by default. Uncheck it to prevent the new user from signing in. You can change this setting after the user is created.

   Either select the **Review + create** button to create the new user or **Next: Properties** to complete the next section.

   The **Properties** tab has categories of user properties you can provide. You can add or update these properties after the user is created. The properties are:

   - **Identity**: Enter the user's first and last name. Set the User type as either Member or Guest.
   - **Job information**: Add any job-related information, such as the user's job title, department, or manager.
   - **Contact information**: Add any relevant contact information for the user.
   - **Settings**: Specify the user's global location.

   Either select the **Review + create** button to create the new user or **Next: Assignments** to complete the next section.

   The **Assignments** tab lets you assign the user:

   - An administrative unit
   - Groups: Select a group if you want to add the user to one or more existing groups.
   - Roles: Assign the user a Global administrator role. Members of this role can create and manage groups and group settings, such as naming and expiration policies. They can also view group activity and audit reports.

   Select the **Review + create** button.

The user is created and added to your Microsoft Entra ID tenant. You can now create an identity store for Microsoft Entra ID in Directory Manager.

Copy the application ID that Microsoft Entra ID generates when you register the application. You need this application ID when you create an identity store for Microsoft Entra ID.
