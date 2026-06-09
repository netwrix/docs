---
title: "Add a Source and Connectors for Microsoft Entra ID"
description: "Add a Source and Connectors for Microsoft Entra ID"
sidebar_position: 20
---

# Add a Source and Connectors for Microsoft Entra ID

**To add a Microsoft Entra ID data source and connectors to your organization:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click an organization to define a data source and connectors for it. The properties
page for the organization is displayed with the Sources tab selected by default.

**Step 3 –** On the Sources tab, click **Add** to add a source. The Select Data Source pane is
displayed.

{/* TODO: Screenshot of Select Data Source pane showing source type tiles */}

**Step 4 –** Select **Entra ID** and click **Next**. Because Microsoft Entra ID is a cloud source,
the wizard skips the site selection and agent setup steps and proceeds directly to source
details.

**Step 5 –** On the Configure Source Details pane, specify the following settings:

- Source Group – Specify a name for the group to which the data source will belong. Grouping
  sources, such as computers, allows them to share a common configuration and makes it easier to
  manage related sources together.
- Tenant ID – The tenant ID of the app registered in Microsoft Entra ID. See the
  [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
  for additional information.
- Crawl Source – Toggle this option to ON to enable data collection for the source
- Service Account Entra ID Groups – Specify Microsoft Entra ID groups to exclude their service
  accounts from billable domain accounts so that they aren't audited. To specify a Microsoft Entra
  ID group, enter its name and click the **Add** icon. To specify multiple Microsoft Entra ID
  groups, add them one by one.
- Credentials – Displays the credentials that have already been added, while also providing the
  option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data
  source. You can select existing credentials or add new ones. To add new credentials, select **Add
  new Credentials** from the dropdown menu or click the **Add** icon, then specify the following:

    - Client ID – The client ID of the app registered in Microsoft Entra ID. See the
      [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
      for additional information.
    - Client Secret – The client secret of the app registered in Microsoft Entra ID. See the
      [App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md) topic
      for additional information.
    - Download Certificate – For certain connectors, such as SharePoint Online State, authentication
      requires a certificate instead of a client secret. Download this certificate and then upload
      it to the app registered in Microsoft Entra ID. See the
      [Upload a Certificate](/docs/1secure/configuration/registerconfig/registerconfig.md#upload-a-certificate) topic
      for additional information.
    - Display Name – Specify a name to display for your credentials. The name appears on
      the Credentials tab of the Managed Organizations page.

{/* TODO: Screenshot of Configure Source Details pane for Microsoft Entra ID */}

**Step 6 –** Click **Next**. The system validates the source configuration. If validation takes
longer than 45 seconds or fails, a **Skip Validation** button appears allowing you to proceed
without waiting for validation to complete.

**Step 7 –** The Configure Connectors pane lists the connectors for Microsoft Entra
ID. Specify the following:

- Entra ID Activity – Toggle the **Entra ID Activity** switch to ON to collect and monitor data for
  this connector. With this, you can generate activity reports on Microsoft Entra ID data. See the
  [Microsoft Entra ID](/docs/1secure/admin/searchandreports/activity.md#microsoft-entra-id) topic for additional
  information.
- Entra ID Logons – Toggle the **Entra ID Logons** switch to ON to collect and monitor data for this
  connector. With this, you can generate logon reports on Microsoft Entra ID data. See the
  [Microsoft Entra ID](/docs/1secure/admin/searchandreports/activity.md#microsoft-entra-id) topic for additional
  information.

    - Collect Failed Logons – Select this checkbox to collect the failed logon data for Microsoft
      Entra ID logon reports.
    - Collect Successful Logons – Select this checkbox to collect the successful logon data for
      Microsoft Entra ID logon reports.

- Entra ID State – Toggle the **Entra ID State** switch to ON to collect and monitor data for this
  connector. With this, you can generate state-in-time reports on Microsoft Entra ID data. See the
  [State In Time Risks Reports](/docs/1secure/admin/searchandreports/stateintime.md) topic for additional
  information.

{/* TODO: Screenshot of Configure Connectors pane for Microsoft Entra ID */}

**Step 8 –** Click **Finish**.

You have configured the Microsoft Entra ID data source and connectors.
