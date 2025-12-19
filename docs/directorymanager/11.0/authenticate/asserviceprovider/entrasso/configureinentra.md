---
title: "Configure GroupID in Microsoft Entra ID for SSO"
description: "Configure GroupID in Microsoft Entra ID for SSO"
sidebar_position: 20
---

# Configure GroupID in Microsoft Entra ID for SSO

Following are the steps to create and configure the GroupID application in Microsoft Entra Admin
Center:

- Create an application for GroupID in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users to log into GroupID using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure GroupID in Microsoft Entra ID

1. Sign into Microsoft Entra Admin Center.
2. Go to **Microsoft Entra ID > Enterprise applications**.
3. On the **Enterprise applications** page, click **New application** to add a new application.
4. On the **Browse Microsoft Entra Gallery** page, click **Create your own application**.
5. On the **Create your own application** pane, do the following:

    1. Enter a name for your application In the **What's the name of your app?** box (for example,
       Entra SSO).
    2. Select the **Integrate any other application you don't find in the gallery (Non-gallery)**
       option button.
    3. Click **Create**.  
       On creating an application, an Overview page is displayed for it.

6. On the **Overview** page, click **Properties** in the left pane to navigate to the application's
   properties.
7. On the Properties page, make sure the application is enabled so that users can sign in. For this,
   the **Enabled for Users to sign in** option should be set to _Yes_.
8. The **Name** box displays the application name. You can change the application logo. Your
   application is displayed with the logo in the Access Panel Applications.
9. Make sure **Assignment required?** is set to _Yes_. We will be assigning users manually, who
   would be able to log into the GroupID portal _Wizard_ using Microsoft Entra SSO.

**Assign owners to the application:**

10. To assign one or more users as owners of the application, click **Owners** under **Manage** in
    the left pane.
11. On the **Owners** page, click **Add** and search the user(s) you want to assign as owners. For
    example, you can specify your service account as an owner.

**Assign users to log into GroupID using Microsoft Entra ID SSO:**

12. The next step is to assign users who can sign into the GroupID portal _Wizard_ using Microsoft
    Entra ID SSO. You can specify users and groups.  
    Click **Users and groups** under **Manage** in the left pane. On the **Users and groups** page,
    click **Add user/group**. On the **Add Assignment** page, search for your required user or
    group, select it and click **Assign**.

**Specify SAML SSO configurations for the application:**

13. Click **Single sign-on** under **Manage** in the left pane. The **Single sign-on** page displays
    different methods that Microsoft Entra ID provides for single sign on. Select _SAML_.  
    The **SAML-based Sign-on** page is displayed, where you have to set single sign-on options for
    GroupID.
14. On the **Basic SAML Configuration** card, click **Edit**
15. On the **Basic SAML Configuration** pane, provide the Entity ID and Consumer URL that you copied
    earlier. See the
    [Generate URLs](/docs/directorymanager/11.0/authenticate/asserviceprovider/entrasso/generateurls.md)
    topic.  
    After adding the information, click **Save**.
16. Back on the **SAML-based sign-on** page, the **Attributes & Claims** card displays the
    attributes used for logging in. Let’s keep the defaults.
17. On the **SAML Certificates** card, download _Certificate (Base64)_.
