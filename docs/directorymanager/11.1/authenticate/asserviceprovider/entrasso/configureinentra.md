---
title: "Configure Directory Manager in Microsoft Entra ID for SSO"
description: "Create and configure a Directory Manager application in Microsoft Entra Admin Center to enable SAML single sign-on."
keywords:
  - Directory Manager Entra ID SSO
  - Microsoft Entra enterprise application
  - Entra ID SAML configuration
  - Basic SAML Configuration
  - non-gallery application
sidebar_position: 20
---

# Configure Directory Manager in Microsoft Entra ID for SSO

To create and configure the Directory Manager application in Microsoft Entra Admin Center:

- Create an application for Directory Manager in Microsoft Entra Admin Center.
- Assign owners to the application.
- Assign users who can sign in to Directory Manager by using Microsoft Entra ID SSO.
- Specify SAML SSO configurations for the application.

## Configure Directory Manager in Microsoft Entra ID

To configure Directory Manager in Microsoft Entra ID:

1. Sign in to Microsoft Entra Admin Center.

2. Go to Microsoft Entra ID > Enterprise applications.

3. On the Enterprise applications page, click **New application** to add a new application.

4. On the Browse Microsoft Entra Gallery page, click **Create your own application**.

5. On the Create your own application pane, do the following:

   1. Enter a name for your application in the What's the name of your app? box (for example, Entra SSO).
   2. Select the **Integrate any other application you don't find in the gallery (Non-gallery)** option button.
   3. Click **Create**.

      After you create the application, its Overview page appears.

6. On the Overview page, click **Properties** in the left pane to navigate to the application's properties.

7. On the Properties page, ensure the application is enabled so that users can sign in. To do this, set the Enabled for Users to sign in option to _Yes_.

8. The Name box displays the application name. You can change the application logo. Your application appears with the logo in the Access Panel Applications.

9. Ensure Assignment required? is set to _Yes_. You must manually assign the users who can sign in to the Directory Manager portal _Wizard_ by using Entra ID SSO.

10. Assign owners to the application. To assign one or more users as owners of the application, click **Owners** under Manage in the left pane.

11. On the Owners page, click **Add** and search for the users you want to assign as owners. For example, you can specify your service account as an owner.

12. Assign users who can sign in to the Directory Manager portal _Wizard_ by using Entra ID SSO. You can specify users and groups.

    Click **Users and groups** under Manage in the left pane. On the Users and groups page, click **Add user/group**. On the Add Assignment page, search for your required user or group, select it, and click **Assign**.

13. Specify SAML SSO configurations for the application. Click **Single sign-on** under Manage in the left pane. The Single sign-on page displays different methods that Entra ID provides for single sign-on. Select _SAML_.

    The SAML-based Sign-on page appears, where you must set single sign-on options for Directory Manager.

14. On the Basic SAML Configuration card, click **Edit**.

15. On the Basic SAML Configuration pane, provide the Entity ID and Consumer URL that you copied earlier. See the [Generate Consumer and Audience URLs for Microsoft Entra ID](/docs/directorymanager/11.1/authenticate/asserviceprovider/entrasso/generateurls.md) topic.

    After adding the information, click **Save**.

16. Back on the SAML-based Sign-on page, the Attributes & Claims card displays the attributes used for signing in. Keep the defaults.

17. On the SAML Certificates card, download _Certificate (Base64)_.
