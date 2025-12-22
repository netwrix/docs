---
title: "Register for Microsoft Entra ID"
description: "Register for Microsoft Entra ID"
sidebar_position: 40
---

# Register for Microsoft Entra ID

This guide shows how to
[register](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
Usercube as an application, i.e. grant Usercube a service account, with Microsoft Identity Platform
to authenticate to a Microsoft Entra ID (formerly Microsoft Azure AD), and how to grant Usercube the
[directory permissions](https://docs.microsoft.com/en-us/graph/permissions-reference) for reading
the data to be exported via the
[Microsoft Graph API](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-graph-api).

## Create a New Registration

Create a new registration for Usercube with Microsoft Identity Platform by proceeding as follows:

1. Go to [Azure portal](https://portal.azure.com).
2. Log in using the organization's credentials.
3. Find the **Microsoft Entra ID** menu on the left panel.
4. Go to **App Registrations** in the left panel.
5. Click the **+ New Registration** button in the top menu.

    ![Azure AD Export - Add New Registration](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportregistration.webp)

    A new registration form is displayed:

    - `Name`: display name of your application for the currently created registration. It is used to
      identify this registration within Microsoft Entra ID. In the case at hand, it won't be
      displayed to the end-user since Usercube doesn't access the Microsoft Entra ID using end-user
      identity but [its own](https://docs.microsoft.com/en-us/graph/auth-v2-service).

        NETWRIX recommends using a mnemonic name resembling `Usercube<Organization>` in order to
        remember it as the registration of Usercube within the target Microsoft Entra ID, for
        example `UsercubeContoso`.

    - [`Supported account types`](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-supported-account-types):
      select **Accounts in this organizational directory only (� - Single tenant)**.

        Usercube uses its own identity to access the API. It doesn't access the data on behalf of a
        user. To authenticate, it uses credentials of a service account granted by this
        registration, in the form of an `ApplicationId` and a secret `Client Secret`.

        See how to get `ApplicationId` and `ApplicationKey`.

        This service account is stored in the organizational directory, and hence using the
        [Principle of Least Privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege),
        only **Accounts in this organizational directory** are supported for authentication within
        this registration scope.

    - `Redirect URI`:

        - The left combo box represents the type of application. It influences the authorization
          protocol exchanges. Usercube is of type `Web`.
        - The right line edit isn't applicable to our case and should be left blank. It is used for
          end-user authentication, but doesn't apply to Usercube.

6. Confirm the registration with the **Register** button at the bottom of the page.

### Get the application's identifier

`ApplicationId` is available in the registration overview. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Usercube**.
3. Go to **Overview** in the left panel.

    The **Essentials** top panel displays the **Application (client) ID** required by the Usercube
    Agent. The same page also displays the **Directory (tenant) ID** that will also be needed by the
    Usercube Agent.

    ![Azure AD Export - New ApplicationId](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportapplicationid.webp)

### Get the application's secret key

A `Client Secret` key needs to be generated. Get it by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Usercube**.
3. Go to **Certificate & Secrets** in the left panel.
4. Click the **+ New client secret** button in the bottom panel **Client Secrets**.
5. Input a mnemonic name such as `Usercube<Organization>Secret`.
6. It is recommended to use a short **expiration period** such as 1 year.
7. Confirm the creation with the **Add** button.

    The `Client Secret` is now listed in the bottom panel **Client Secrets**. The `Client Secret`
    value is needed by the Usercube Agent settings file.

    ![Azure AD Export - New Client Secret](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportsecret.webp)

    The `Client Secret` value is only displayed in the UI in plain text at first. After a while, it
    is only displayed as `**************`. It should hence be stored in the `appsettings.agent.json`
    file or an environment variable as soon as it is created, to be used subsequently by Usercube.
    If the key is lost, a new key can be created to replace the lost one.

## Grant Directory Permissions

Grant Usercube directory permissions by proceeding as follows:

1. Go to **App Registrations** in the left panel.
2. Select **Owned applications** > **Usercube**.
3. Go to **API Permissions** in the left panel.
4. Click on the **+ Add a permission** button.

    ![Azure AD Export - Add Permission](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportpermissions.webp)

5. Go to **Microsoft graph** > **Application permissions**.
6. Search and open the `Directory` category.
7. Check the `Directory.Read.All` permission.

    If you plan on configuring fulfillment too, you must only check the `Directory.ReadWrite.All`
    permission.

    ![Azure AD Export - Directory Permission](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportdirectorypermission.webp)

8. Confirm with the **Add permissions** button at the bottom of the page.

    You now see the `Directory.Read.All` or `Directory.ReadWrite.All` permission in the **Configured
    permissions** list with a **? Not granted for �** status.

9. Grant admin consent by clicking on **? Grant admin consent for `<name of the organization>`**.

    ![Azure AD Export - Grant Admin Consent](/images/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/howtos_azuread_exportadminconsent.webp)

    You should now see the status displayed as **? Granted for `<name of the organization>`**.
