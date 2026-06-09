---
title: "Add a Source and Connectors for Active Directory"
description: "Add a Source and Connectors for Active Directory"
sidebar_position: 10
---

# Add a Source and Connectors for Active Directory

**To add an Active Directory data source and connectors to your organization:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click an organization to define a data source and connectors for it. The properties
page for the organization is displayed with the Sources tab selected by default.

**Step 3 –** On the Sources tab, click **Add** to add a source. The Select Data Source (Step 1 of 5)
pane is displayed.

{/* TODO: Screenshot of Select Data Source (Step 1 of 5) pane showing source type tiles */}

**Step 4 –** Select **Active Directory** and click **Next**.

**Step 5 –** On the Select Site (Step 2 of 5) pane, use the Site dropdown menu to
select an existing site or add a new one. To add a new site, select the **Add new site** option from
the dropdown menu or click the **Add** icon.

- When you choose to add a new site, you have to provide a name for it in the New site name field.

{/* TODO: Screenshot of Select Site (Step 2 of 5) pane */}

**Step 6 –** Click **Next**.

**Step 7 –** If the agent has not been configured for the selected site, the Agent Setup (Step 3 of 5) pane is displayed. Follow the instructions to install and connect the agent. The wizard polls for the agent connection status automatically. See the
[Install Agent](/docs/1secure/install/installagent.md) topic for details on configuring the agent.

- If the agent has already been configured for the site, this step is skipped automatically.

{/* TODO: Screenshot of Agent Setup (Step 3 of 5) pane showing connection polling */}

**Step 8 –** Click **Next**.

**Step 9 –** On the Configure Source Details (Step 4 of 5) pane, specify the following settings:

- Source Group – Specify a name for the group to which the data source will belong. Grouping
  sources, such as computers, allows them to share a common configuration and makes it easier to
  manage related sources together.
- Domain Name – Specify the fully qualified domain name of the Active Directory domain you want to
  create a source for.
- Crawl Source – Toggle this option to ON to enable data collection for the source.
- Service Account OUs – Specify organizational units (OUs) to exclude their service accounts from
  billable domain accounts so that they aren't audited. To specify an organizational unit (OU),
  enter its name and click the Add icon. To specify multiple organizational units, add them one by
  one.
- Credentials – Displays the credentials that have already been added, while also providing the
  option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data
  source. You can select existing credentials or add new ones. To add new credentials, select **Add
  new Credentials** from the dropdown menu or click the **Add** icon, then specify the following:

    - Username – The username of an Active Directory account in Domain\Username format
    - Password – The password of the Active Directory account
    - Display Name – Specify a name to display for your credentials. The name appears on
      the Credentials tab of the Managed Organizations page.

{/* TODO: Screenshot of Configure Source Details (Step 4 of 5) pane for Active Directory */}

**Step 10 –** Click **Next**. The system validates the source configuration. If validation takes
longer than 45 seconds or fails, a **Skip Validation** button appears allowing you to proceed
without waiting for validation to complete.

**Step 11 –** The Configure Connectors (Step 5 of 5) pane lists the connectors for Active
Directory. Specify the following:

- Active Directory Activity – Toggle the **Active Directory Activity** switch to ON to collect and
  monitor data for this connector. With this, you can generate activity reports on Active Directory
  data. See the [Active Directory](/docs/1secure/admin/searchandreports/activity.md#active-directory) topic for
  additional information.
- Activity Directory Logons – Toggle the **Active Directory Logons** switch to ON to collect and
  monitor data for this connector. With this, you can generate logon reports on Active Directory
  data. See the [Active Directory](/docs/1secure/admin/searchandreports/activity.md#active-directory) topic for
  additional information.
- Activity Directory State – Toggle the **Active Directory State** switch to ON to collect and
  monitor data for this connector. With this, you can generate state-in-time reports on Active
  Directory data. See the [State In Time Risks Reports](/docs/1secure/admin/searchandreports/stateintime.md) topic
  for additional information.
- Ping Castle - Toggle the **Ping Castle** switch to ON to collect data for this connector. With this, you can generate risks from the Ping Castle collector and generate the full PingCastle report.

**Step 12 –** Optionally, select the following for each connector:

- Enable traffic network compression – Select this checkbox to enable traffic network compression
  for the connector. See the
  [Network Traffic Compression](/docs/1secure/configuration/networktrafficcompression.md) topic for
  additional information.

    :::warning
    If Netwrix Auditor and Netwrix 1Secure audit the same domain, ensure that the
    network traffic compression service is enabled for only one of the products or neither product
    for any of the audited services. It can't be enabled for both products.
    :::


- Adjust audit settings automatically – Select this checkbox to adjust the audit settings
  automatically. With this approach, 1Secure checks your current audit settings at each data
  collection session and adjusts them if necessary. See the
  [Active Directory: automatic configuration](/docs/1secure/configuration/admanual/auto.md) topic for
  additional information.

{/* TODO: Screenshot of Configure Connectors (Step 5 of 5) pane for Active Directory */}

**Step 13 –** Click **Finish**.

The Active Directory data source and connectors have been configured.
