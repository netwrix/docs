---
title: "Microsoft Entra ID"
description: "Microsoft Entra ID"
sidebar_position: 60
---

# Microsoft Entra ID

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.8/requirements/ports.md) – To ensure successful data
  collection and activity monitoring configure necessary protocols and ports for inbound and
  outbound connections
- [Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/dataaccounts.md) – Configure data collecting accounts as required to
  audit your IT systems

- [Microsoft Entra ID](/docs/auditor/10.8/configuration/microsoft365/microsoftentraid/overview.md) – Configure
  data source as required to be monitored

You can use the following data collecting account options:

- Username and password.
- Integration with the Netwrix Privilege Secure. See the
  [Netwrix Privilege Secure](/docs/auditor/10.8/admin/settings/privilegesecure.md) and How to Add Microsoft Entra ID
  Monitoring Plan Using Netwrix Privilege Secure topics for additional information.
- Application and secret for Microsoft 365 with modern authentication.

To add a new monitoring plan for Entra ID, you need to launch the New Monitoring Plan wizard, either
from the Home screen, or from the Monitoring plans menu under the All Monitoring Plans section.

## Configure Data Source Settings

Default data source settings will be configured during the completion of the New Monitoring Plan
wizard. To customize the settings, you need to open your monitoring plan, and click **Edit data
source** on the right side of the screen.

Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                           |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                  |
| Monitor Microsoft Entra ID logon activity          | Specify what types of logon events you want to monitor: successful or failed, performed through Windows and SQL authentication. - Failed logons - Successful logons                                                                                   |
| Collect data for state-in-time reports             | Configure Netwrix Auditor to store daily snapshots of your system configuration required for further state-in-time reports generation. See the [State–In–Time Reports](/docs/auditor/10.8/admin/reports/types/stateintime/overview.md) topic for additional information. |

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.8/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional
information.

This instruction shows how to collect audit data from the Microsoft 365 tenant.

If you plan to use modern authentication, see the
[Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/docs/auditor/10.8/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-microsoft-entra-id)
topic for additional information on how to prepare Microsoft Entra ID app with required permissions.
Make sure you have the following at hand:

- Tenant name
- For modern authentication: Application (client) ID
- Application secret
- For basic authentication: User name and password

Types of data that can be collected by Netwrix Auditor from the Microsoft 365 tenant depend on the
authentication option you choose.

Follow the steps to configure Office 365 tenant as a monitored item.

**Step 1 –** On the **General** page of the item properties, specify **Tenant name**:

- If you are going to use **Basic authentication**, you can proceed to the next step – **Tenant
  name** will be filled in automatically after it.

- **NOTE:** Basic authentication is no longer possible for Exchange Online. For the already existing
  tenants it is still possible to use basic authentication for SharePoint Online and Microsoft Entra
  ID monitoring.

- If you are going to use **Modern authentication**, paste the obtained name. See the
  [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.8/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md)
  topic for additional information.

![tenantenvironment](/images/auditor/10.7/admin/monitoringplans/tenantenvironment.webp)

If you are using a government tenant, please click the **Tenant Environment** tab and select the
desired tenant environment.

**Step 2 –** Select authentication method that will be used when accessing Office 365 services:

- Basic authentication:

    - Selected, Office 365 organization will be accessed on behalf of the user you specify.
    - Enter **User name** and **password**; use any of the following formats: _user@domain.com_ or
      _user@domain.onmicrosoft.com_.
    - The **Tenant name** field then will be filled in automatically.
    - Make sure this user account has sufficient access rights. See
      [Using Basic Authentication with Microsoft Entra ID](/docs/auditor/10.8/configuration/microsoft365/microsoftentraid/permissions/basicauth.md)
      topic for additional information.

- Modern authentication:

    - Selected, Office 365 organization will be accessed using the Microsoft Entra ID (formerly
      Azure AD) app you prepared. Enter:

        - **Application ID**;

            - **Application secret**.

    - See the
      [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.8/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md)
      for additional information.

**Step 3 –** Click the **Add** button.

![Add Office 365 Item window](/images/auditor/10.7/admin/monitoringplans/item_o365_basic_auth_thumb_0_0.webp)

You can use a single account to collect audit data for different Office 365 services (Microsoft
Entra ID, Exchange Online, SharePoint Online); however, Netwrix recommends that you specify
individual credentials for each of them.

## How to Add Microsoft Entra ID Monitoring Plan Using Netwrix Privilege Secure

**NOTE:** Netwrix Privilege Secure resource-based integration works only with basic authentication.
Ephemeral accounts will be created or elevated to be used as data collecting accounts. If you want
to use modern authentication and the Netwrix Privilege Secure integration, you need to choose a
credential-based access policy, save your application and secret in Netwrix Privilege Secure, and
provide the Application ID instead of the user name.

Starting with version 10.7, you can use Netwrix Privilege Secure to manage the account for
collecting data, after configuring the integration. See the
[Netwrix Privilege Secure](/docs/auditor/10.8/admin/settings/privilegesecure.md) topic for additional information about
integration and supported data sources. In this case, the credentials will not be stored by Netwrix
Auditor. Instead, they will be managed by Netwrix Privilege Secure and provided on demand, ensuring
password rotation or using temporary accounts for data collection.

Follow the steps to use Netwrix Privilege Secure as an account for data collection.

**Step 1 –** Select the desired item.

**Step 2 –** In the item configuration menu, select Netwrix Privilege Secure as an option for data
collection.

![npsdatacollectingaccount](/images/auditor/10.7/configuration/grouppolicy/npsdatacollectingaccount.webp)

**Step 3 –** Select the type of the Access Policy you want to use in Netwrix Privilege Secure.
Credential-based is the default option. Refer to the
[Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement)
documentation to learn more about Access Policies.

In this case, you need to provide the username of the account managed by Netwrix Privilege Secure,
and to which Netwrix Auditor has the access through a Credential-based access policy.

**NOTE:** Netwrix recommends using different credentials for different monitoring plans and data
sources.

![npsdatacollectingaccountresourced](/images/auditor/10.7/configuration/grouppolicy/npsdatacollectingaccountresourced.webp)

The second option is Resource-based. To use this option, you need to provide the Activity and
Resource names, assigned to Netwrix Auditor in the corresponding Resource-based policy. Make sure
that you specified the same names as in Netwrix Privilege Secure.

The Resource name in this case is where the activity will be performed. For example, if you grant
the data collecting account the access to a local Administrators group - the resource is the server
where the permission will be granted.

Netwrix Privilege Secure is ready to use as an account for data collection.
