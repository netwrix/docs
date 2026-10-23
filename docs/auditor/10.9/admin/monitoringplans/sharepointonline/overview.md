---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 160
---

# SharePoint Online

**NOTE:** To configure your monitoring plan, first follow the instructions in the
[SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/overview.md)
configuration topic. It describes the required data collecting account and ports, how to exclude
data from monitoring, and which object types and attributes Auditor monitors.

To configure SharePoint Online data source settings, complete the following fields:

| Option | Description |
| ------ | ----------- |
| **Monitor this data source and collect activity data** | Enable monitoring of the selected data source and configure Auditor to collect and store audit data. |
| **Audit SharePoint Online configuration and content changes** | Auditor always audits configuration and content changes. |
| **Audit SharePoint Online read access** | Configure Auditor to monitor SharePoint Online read access. |
| **Collect data for state-in-time reports** | Store daily snapshots of your SharePoint Online configuration for state-in-time reports. See [Collect data for state-in-time reports](#collect-data-for-state-in-time-reports). |
| **Skip inaccessible SharePoint Online sites** | When enabled, Netwrix Auditor skips SharePoint Online sites that are inaccessible to the data collecting account and continues data collection for the remaining sites. |

## Collect data for state-in-time reports

Configure Netwrix Auditor to store daily snapshots of your SharePoint Online configuration for state-in-time reports. See the
[State–In–Time Reports](/docs/auditor/10.9/admin/reports/types/stateintime/overview.md) topic for
additional information.

Netwrix Auditor regularly updates the latest snapshot to reflect the current system state. Only the latest snapshot is available for reporting in Netwrix Auditor. If you want
to generate reports based on different snapshots, you must import snapshots to the Audit Database.
To import snapshots, you must have the Global administrator or the Global reviewer role.

1. In the **Manage historical snapshots** section, click **Manage** and select the snapshots that
   you want to import.
2. Move the selected snapshots to the **Snapshots available for reporting** list using the arrow
   button.
3. When finished, click **OK**.

Review your data source settings and click **Add** to go back to your plan. The newly created data
source will appear in the **Data source** list. As a next step, click **Add item** to specify an
object for monitoring. See the
[Add Items for Monitoring](/docs/auditor/10.9/admin/monitoringplans/datasources.md#add-items-for-monitoring) topic for additional
information.

## How to Add Office365 Item

This instruction shows how to collect audit data from the Microsoft 365 tenant.

If you plan to use modern authentication, see the
[Configuring Microsoft Entra ID App for Auditing SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md#configuring-microsoft-entra-id-app-for-auditing-sharepoint-online)
topic for additional information on how to prepare Microsoft Entra ID app with required permissions.
Ensure you have the following available:

- Tenant name
- For modern authentication: Application (client) ID
- Application secret
- For basic authentication: User name and password

The types of data Netwrix Auditor can collect from the Microsoft 365 tenant depend on the
authentication option you choose.

To configure Office 365 tenant as a monitored item, complete the following steps.

**Step 1 –** On the **General** page of the item properties, specify **Tenant name**:

- If you are going to use **Basic authentication**, you can proceed to the next step – **Tenant
  name** will be filled in automatically after it.
- If you are going to use **Modern authentication**, paste the obtained name. See the
  [Using Modern Authentication with SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md)
  topic for additional information.
- If your tenant isn't in the commercial Microsoft 365 cloud, click the **Tenant Environment** tab
  and select the environment that matches your tenant:

    - **Default** — Commercial Microsoft 365 cloud.
    - **US Government (GCC)** — Microsoft 365 Government Community Cloud.
    - **US Government L4 (GCC High)** — Microsoft 365 GCC High.
    - **US Government L5 (DoD)** — Microsoft 365 DoD.
    - **China** — Microsoft 365 operated by 21Vianet.

  Each environment uses its own Microsoft endpoints. See the
  [SharePoint Online Ports](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/ports.md#tenant-environment-endpoints)
  topic for the list.

![tenantenvironment](/images/auditor/10.9/admin/monitoringplans/tenantenvironment.webp)

**Step 2 –** Select the authentication method to use when accessing Office 365 services:

- Basic authentication:

    - Auditor accesses the Office 365 organization on behalf of the user you specify.
    - Enter **User name** and **password**; use any of the following formats: _user@domain.com_ or
      _user@domain.onmicrosoft.com_.
    - The **Tenant name** field then will be filled in automatically.
    - Ensure this user account has sufficient access rights. See
      [Using Basic Authentication with SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/basicauth.md)
      topic for additional information.

- Modern authentication:

    - Auditor accesses the Office 365 organization using the Microsoft Entra ID (formerly Azure AD) app you prepared. Enter:

        - **Application ID**
        - **Application secret**

    - See the
      [Using Modern Authentication with SharePoint Online](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/modernauth/modernauth.md)
      for additional information.

**Step 3 –** Click the **Add** button.

![Add Office 365 Item window](/images/auditor/10.9/admin/monitoringplans/item_o365_basic_auth_thumb_0_0.webp)

You can use a single account to collect audit data for different Office 365 services (Microsoft
Entra ID, Exchange Online, SharePoint Online); however, Netwrix recommends that you specify
individual credentials for each of them.

See the
[Permissions for SharePoint Online Auditing](/docs/auditor/10.9/configuration/microsoft365/sharepointonline/permissions/permissions.md)
topic for additional information.
