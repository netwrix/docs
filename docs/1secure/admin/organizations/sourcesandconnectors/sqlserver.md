---
title: "Add a Source and Connectors for SQL Server"
description: "Add a Source and Connectors for SQL Server"
sidebar_position: 60
---

# Add a Source and Connectors for SQL Server

**To add a SQL Server data source and connector to your organization:**

**Step 1 –** Click **Configuration** in the top bar. The Managed organizations page is displayed,
that lists the managed organizations defined in 1Secure.

**Step 2 –** Click an organization to define a data source and connectors for it. The properties
page for the organization is displayed with the Sources tab selected by default.

**Step 3 –** On the Sources tab, click **Add** to add a source. The Select Data Source (Step 1 of 5)
pane is displayed.

{/* TODO: Screenshot of Select Data Source (Step 1 of 5) pane showing source type tiles */}

**Step 4 –** Select **SQL Server** and click **Next**.

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
- SQL Server Name – Specify the name of the SQL Server instance, for example, StationDB\SQLExpress
  or StationSQL
- Crawl Source – Toggle this option to ON to enable data collection for the source
- Credentials – Displays the credentials that have already been added, while also providing the
  option to add new credentials. Netwrix 1Secure uses these credentials to connect to the data
  source. You can select existing credentials or add new ones. To add new credentials, select **Add
  new Credentials** from the dropdown menu or click the **Add** icon, then specify the following:

    - Username – The username of the SQL Server account
    - Password – The password of the account

        The newly added credentials are also displayed in the dropdown menu.

{/* TODO: Screenshot of Configure Source Details (Step 4 of 5) pane for SQL Server */}

**Step 10 –** Click **Next**. The system validates the source configuration. If validation takes
longer than 45 seconds or fails, a **Skip Validation** button appears allowing you to proceed
without waiting for validation to complete.

**Step 11 –** The Configure Connectors (Step 5 of 5) pane lists one connector for SQL Server. Toggle
the **SQL Logons** switch to ON to collect and monitor data for this connector. With this, you can
generate logon reports on SQL Server data. See the
[SQL Database](/docs/1secure/admin/searchandreports/activity.md#sql-database) topic for additional information.

**Step 12 –** Choose one option from the following:

- Audit all accounts – Select this option to audit all accounts within the connector
- Audit specific accounts – Select this option to audit only specific accounts within the
  connector. After selecting this option, specify the accounts to be audited in the field below.
  To specify an account, enter its name and click the Add icon. To audit multiple accounts, add them
  one by one.

    :::note
    To include all accounts in a domain, use the format: _MYDOMAIN\\\*_.
    :::


- Audit all accounts except – Select this option to audit all accounts within the connector, except
  for specific ones you want to exclude. After selecting this option, specify the accounts to be
  excluded in the field below.
  To specify an account, enter its name and click the Add icon. To exclude multiple accounts, add
  them one by one.

    :::note
    To exclude all accounts in a domain, use the format: _MYDOMAIN\\\*_.
    :::

{/* TODO: Screenshot of Configure Connectors (Step 5 of 5) pane for SQL Server */}

**Step 13 –** Click **Finish**.

The SQL Server data source and connector have been configured.
