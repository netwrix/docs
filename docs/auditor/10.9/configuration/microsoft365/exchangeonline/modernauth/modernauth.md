---
title: "Access Exchange Online Using Modern Authentication"
description: "Access Exchange Online Using Modern Authentication"
sidebar_position: 30
---

# Access Exchange Online Using Modern Authentication

Support for modern authentication will allow you to audit the organizations where MFA is enabled for
all users, including service accounts.

This option is recommended for organizations that use modern authentication as the identity
management approach, having multi-factor authentication (MFA) enabled for their user accounts. In
this scenario, Netwrix Auditor will access the cloud-based infrastructure via Microsoft Graph and
other modern APIs, being authenticated through a pre-configured Microsoft Entra ID application with
appropriate access permissions.

If you plan to implement this scenario, you should register an Microsoft Entra ID app manually and
provide its settings to Netwrix Auditor when configuring a monitored item.

### Create and Register a New App in Microsoft Entra ID

You will need to create a dedicated app for each cloud-based data source you plan to audit:

- Microsoft Entra ID (formerly Azure AD)
- Exchange Online
- SharePoint Online
- MS Teams

If you plan to audit all of them, you need to create 4 apps.

Follow the steps to register a new Microsoft Entra ID application.

**Step 1 –** Sign into the **Microsoft 365 Admin Center** with your _Global Administrator_,
_Application Administrator_ or _Cloud Application Administrator_ account and go to the **Microsoft
Entra ID admin center**.

**Step 2 –** Under the App registrations section, select **New registration**.

**Step 3 –** In the Name field, enter the application name.

**Step 4 –** In the Supported account types select who can use this application – use the **Accounts
in this organizational directory only** option.

**Step 5 –** Click the **Register** button. Application **Redirect URI** is optional, you can leave
it blank.

**Step 6 –** Your Application (client) ID is now available in the Overview section. Copy it to a
safe location.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra ID application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Grant Required Permissions

You need to grant your new application the required API permissions. Microsoft Entra ID applications
can be assigned _Delegated_ or _Application_ permissions:

- _Delegated_ permissions require a signed-in user present who consents to the permissions every
  time an API call is sent.
- _Application_ permissions are consented by an administrator once granted.

For the newly created app, you should use the _Application_ permissions.

To grant required permissions, assign granular _Application_ permissions required for Netwrix
Auditor to collect data from the application. To do so, perform the following steps:

**Step 1 –** Go to the **App registrations** and open the app you created to assign Auditor
permissions.

**Step 2 –** Go to **Manage > API permissions** and click **Add a permission** button.

**Step 3 –** Assign the required permissions.

Permission assignment will depend on the data you plan to collect:

- Activity data only
- Both activity and state-in-time data

| To...              | Requirement                                                                                                                                                                                                                                                                                                                   | Comment                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Collect audit data | Microsoft Entra ID app requires the following **Application** permissions: 1. **Microsoft Graph** - Directory.Read.All - Application.ReadWrite.All - **Mail.ReadBasic.All** - **MailboxSettings.Read** 2. **Office 365 Management APIs** - **ActivityFeed.Read** 3. **Office 365 Exchange Online** - **Exchange.ManageAsApp** | To learn how to assign required permissions, see the Access Exchange Online Using Modern Authentication section for additional information. |
| Roles              | _Exchange Administrator_ (_Exchange Service Administrator_) assigned to application service principal OR _Global Administrator_ assigned to application service principal                                                                                                                                                     |                                                                                                                                             |

**NOTE:** You can also assign application permissions by editing Microsoft Entra app manifest. See
the Access Exchange Online Using Modern Authentication topic for additional information on how to
assign the required permissions. Information about manifest is also described in the following
Microsoft
article: [ Microsoft Entra app manifest](https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest).

#### Grant Admin Consent to a Tenant

Follow the steps to grant Admin consent to a tenant.

Go back to the **Microsoft Entra ID admin center** > **Applications** > **App registrations** >
**API permissions** and click **Grant admin consent for** *`<tenant name>`*. When prompted to
confirm, click **Yes**.

**NOTE:** For Office 365 permissions, go to **Request API Permissions** > **APIs my organization
users** and type "Office 365" in the search bar.

See the following Microsoft article for additional information on how to create an application and
service principal using Microsoft Entra ID Admin portal:
[Create an Microsoft Entra application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Grant Required Roles

Follow the steps to grant the required Microsoft Entra ID (formerly Azure AD) roles to the new
application.

**Step 1 –** In the Entra portal, click **View** under Manage Azure Active Directory.

**Step 2 –** Select **Roles and admins** under Applications .

**Step 3 –** Select the Exchange Administrator or Global Administrator role.

**Step 4 –** On the Assignments page that appears, click Add assignments.

**Step 5 –** In the Add assignments flyout that appears, find and select the created application,
and click Add.

See the following Microsoft article for additional information on how to create an application and
service principal using Azure AD Admin portal:
[Create an Azure Active Directory application and service principal that can access resources](https://learn.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

### Configure Client Secret

Follow the steps to create a new client secret to be used by the app.

**Step 1 –** Go to **Manage** > **Certificates & secrets** and click **New client secret**.

**Step 2 –** Enter the description. From the expiration options select **24 months**.

**Step 3 –** Click **Add**.

**Step 4 –** The new secret will be displayed in the list. Click **Copy to clipboard** icon on the
"Value" parameter on the right side of the screen.

See the following Microsoft article for more information on how to add a client secret:
[Add a client secret](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app#add-a-client-secret).

## Add an Exchange Online Monitoring Plan

Follow the steps to add Exchange Online monitoring plan in the Netwrix Auditor:

**Step 1 –** In the Monitoring Plans, click **Add Plan** button.

**Step 2 –** Create a monitoring plan with the Exchange Online data source.

**Step 3 –** Add the "Office 365 tenant" item.

**Step 4 –** Click **Select**.

**Step 5 –** Enter your tenant name.

**Step 6 –** Choose modern authentication.

**Step 7 –** Enter Application ID and Application secret you have created before.

**Step 8 –** Click **Add**.

Exchange Online monitoring plan has been added to Auditor and initial data collection has begun.

### Obtain the Tenant Name

Follow the steps to obtain the tenant name.

**Step 1 –** Navigate to **Microsoft Entra ID** > **Overview**.

**Step 2 –** In the **Tenant information** locate the **Primary domain** field, copy its value and
store to a safe location.

See the following Microsoft article for additional information on how to obtain tenant name:
[Locate important IDs for a user](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names).

Then, create a corresponding monitoring plan in Netwrix Auditor and add an item (Office 365 tenant)
to it. See the [Microsoft Entra ID](/docs/auditor/10.9/admin/monitoringplans/microsoftentraid/overview.md)
topic for additional information.
