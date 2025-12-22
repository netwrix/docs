---
title: "MS Teams"
description: "MS Teams"
sidebar_position: 120
---

# MS Teams

**NOTE:** Prior to configuring your monitoring plan, please read and complete the instructions in
the following topics:

- [Protocols and Ports Required](/docs/auditor/10.6/requirements/ports.md) – To
  ensure successful data collection and activity monitoring configure necessary protocols and ports
  for inbound and outbound connections
- [Data Collecting Account](/docs/auditor/10.6/admin/monitoringplans/dataaccounts.md)
  – Configure data collecting accounts as required to audit your IT systems

- [MS Teams](/docs/auditor/10.6/configuration/microsoft365/teams/overview.md) –
  Configure data source as required to be monitored

## How to Add Microsoft 365 Item

This instruction shows how to collect audit data from the Office365 organization. See the
[Configuring Microsoft Entra ID App for Auditing Microsoft Entra ID](/docs/auditor/10.6/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-microsoft-entra-id)
topic for additional information on how to prepare Microsoft Entra ID app with required permissions.
Make sure you have the following at hand:

- Tenant name
- Application (client) ID
- Application secret

Types of data that can be collected by Netwrix Auditor from the Office 365 organization depend on
the authentication option you choose.

Follow the steps to configure Microsoft 365 tenant as a monitored item.

**Step 1 –** On the **General** page of the item properties, specify **Tenant name**:

- If you are going to use **Basic authentication**, you can proceed to the next step – **Tenant
  name** will be filled in automatically after it.

- **NOTE:** Basic authentication is no longer possible for Exchange Online. For the already existing
  tenants it is still possible to use basic authentication for SharePoint Online and Microsoft Entra
  ID monitoring.

- If you are going to use **Modern authentication**, paste the obtained name. See the
  [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.6/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md)
  topic for additional information.

**Step 2 –** Select authentication method that will be used when accessing Microsoft 365 services:

- Basic authentication:

    - Selected, Microsoft 365 organization will be accessed on behalf of the user you specify.
    - Enter **User name** and **password**; use any of the following formats: _user@domain.com_ or
      _user@domain.onmicrosoft.com_.
    - The **Tenant name** field then will be filled in automatically.
    - Make sure this user account has sufficient access rights. See
      [Using Basic Authentication with Microsoft Entra ID](/docs/auditor/10.6/configuration/microsoft365/microsoftentraid/permissions/basicauth.md)
      topic for additional information.

- Modern authentication:

    - Selected, Microsoft 365 organization will be accessed using the Microsoft Entra ID (formerly
      Azure AD) app you prepared. Enter:

        - **Application ID**;

            - **Application secret**.

    - See the
      [Using Modern Authentication with Microsoft Entra ID](/docs/auditor/10.6/configuration/microsoft365/microsoftentraid/permissions/modernauth/modernauth.md)
      for additional information.

**Step 3 –** Click the **Add** button.

![Add Office 365 Item window](/images/auditor/10.6/admin/monitoringplans/item_o365_basic_auth.webp)

You can use a single account to collect audit data for different Microsoft 365 services (Microsoft
Entra ID, Exchange Online, SharePoint Online); however, Netwrixrecommends that you specify
individual credentials for each of them.

If you plan to collect and report on the audit data for Exchange Online non-owner mailbox access,
consider that the value shown in the “_Who_” field in reports and search results will be displayed
in UPN format (unlike the earlier Netwrix Auditor versions). This refers to the following scenarios:

- All new installations
- Upgrade from the previous versions if:

    - Modern authentication is selected in the item settings after the upgrade.

        OR

    - Modern authentication has ever been selected in the item settings and reverted back to Basic
      later

**Step 4 –** Complete the following fields:

| Option                                             | Description                                                                                                                                                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Monitor this data source and collect activity data | Enable monitoring of the selected data source and configure Auditor to collect and store audit data.                                                                                                                                                                                       |
| Collect data for state-in-time reports             | Configure Netwrix Auditor to store daily snapshots of your system configuration required for further state-in-time reports generation. See the [State–In–Time Reports](/docs/auditor/10.6/admin/reports/types/stateintime/overview.md) topic for additional information. |

After that, you can use the Microsoft Entra ID management portal to revoke this privileged role and
assign one of the non-privileged roles instead (for example, _Security Reader_).
