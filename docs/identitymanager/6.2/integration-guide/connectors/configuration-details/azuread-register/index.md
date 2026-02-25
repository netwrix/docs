---
title: "Register for Microsoft Entra ID"
description: "Register for Microsoft Entra ID"
sidebar_position: 60
---

# Register for Microsoft Entra ID

This guide shows how to
[register](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
Identity Manager as an application, i.e. grant Identity Manager a service account, with Microsoft
Identity Platform to authenticate to a Microsoft Entra ID (formerly Azure Active Directory), and how
to grant Identity Manager the
[directory permissions](https://docs.microsoft.com/en-us/graph/permissions-reference) for reading
the data to be exported via the
[Microsoft Graph API](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-graph-api).

## Create a New Registration

Create a new registration for Identity Manager with Microsoft Identity Platform by proceeding as
follows:

1. Go to [the Microsoft portal](https://portal.azure.com/).
2. Log in using the organization's credentials.
3. Find the **Microsoft Entra ID** menu on the left panel.
4. Go to **App Registrations** in the left panel.
5. Click the **+ New Registration** button in the top menu.

    ![Azure AD Export - Add New Registration](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportregistration.webp)

    A new registration form is displayed:

    - Name: display name of your application for the currently created registration. It is used to
      identify this registration within Microsoft Entra ID. In the case at hand, it won't be
      displayed to the end-user since Identity Manager doesn't access the Microsoft Entra ID using
      end-user identity but [its own](https://docs.microsoft.com/en-us/graph/auth-v2-service).

        Netwrix Identity Manager (formerly Usercube) recommends using a mnemonic name resembling
        Identity Manager Organization in order to remember it as the registration of Identity
        Manager within the target Microsoft Entra ID, for example Identity Manager Contoso.

    - [Supported account types](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-supported-account-types):
      select **Accounts in this organizational directory only (... - Single tenant)**.

        Identity Manager uses its own identity to access the API. It doesn't access the data on
        behalf of a user. To authenticate, it uses credentials of a service account granted by this
        registration, in the form of an **ApplicationId** and a secret Client Secret.

        See how to get **ApplicationId** and **ApplicationKey**.

        This service account is stored in the organizational directory, and hence using the
        [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege),
        only **Accounts in this organizational directory** are supported for authentication within
        this registration scope.

    - Redirect URI:

        - The left combo box represents the type of application. It influences the authorization
          protocol exchanges. Identity Manager is of type Web.
        - The right line edit isn't applicable to our case and should be left blank. It is used for
          end-user authentication, but doesn't apply to Identity Manager.

6. Confirm the registration with the **Register** button at the bottom of the page.

### Get the application's identifier

**ApplicationId** is available in the registration overview. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **Overview** in the left panel.

    The **Essentials** top panel displays the **Application (client) ID** required by the Identity
    Manager Agent. The same page also displays the **Directory (tenant) ID** that will also be
    needed by the Identity Manager Agent.

    ![Azure AD Export - New ApplicationId](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportapplicationid.webp)

### Get the application's secret key

A **Client Secret** key needs to be generated. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **Certificate & Secrets** in the left panel.
4. Click the **+ New client secret** button in the bottom panel **Client Secrets**.
5. Input a mnemonic name such as Identity Manager Organization Secret.
6. It is recommended to use a short **expiration period** such as 1 year.
7. Confirm the creation with the **Add** button.

    The Client Secret is now listed in the bottom panel **Client Secrets**. The Client Secret value
    is needed by the Identity Manager Agent settings file.

    ![Azure AD Export - New Client Secret](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportsecret.webp)

    The **Client Secret** value is only displayed in the UI in plain text at first. After a while,
    it is only displayed as `**************`. It should hence be stored in the
    appsettings.agent.json file or an environment variable as soon as it is created, to be used
    subsequently by Identity Manager. If the key is lost, a new key can be created to replace the
    lost one.

## Grant Directory Permissions

Grant Identity Manager directory permissions by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Identity Manager**.
3. Go to **API Permissions** in the left panel.
4. Click on the **+ Add a permission** button.

    ![Azure AD Export - Add Permission](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportpermissions.webp)

5. Go to **Microsoft graph** > **Application permissions**.
6. Search and open the **Directory** category.
7. Check the **Directory.Read.All** permission.

    If you plan on configuring fulfillment too, you must only check the **Directory.ReadWrite.All**
    permission.

    ![Azure AD Export - Directory Permission](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportdirectorypermission.webp)

8. Confirm with the **Add permissions** button at the bottom of the page.

    You now see the Directory.Read.All or Directory.ReadWrite.All permission in the **Configured
    permissions** list with a **⚠ Not granted for ...** status.

9. Grant admin consent by clicking on **√ Grant admin consent for** name of the organization.

    ![Azure AD Export - Grant Admin Consent](/images/identitymanager/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportadminconsent.webp)

    You should now see the status displayed as **√ Granted for** name of the organization.
