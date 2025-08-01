---
title: "Query an Active Directory server (Discover Domain Controllers)"
description: "Query an Active Directory server (Discover Domain Controllers)"
sidebar_position: 40
---

# Query an Active Directory server (Discover Domain Controllers)

Follow the steps to create a Host Discovery query using the **Query an Active Directory server
(Discover Domain Controllers)** source option. This option scans the default domain controller or a
specified server but is scoped to return only machines that are domain controllers.

![Host Discovey Wizard Source page for AD Domain Controllers query](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/source_2.webp)

**Step 1 –** Open the Host Discovery Wizard. On the Source page, select the **Query an Active
Directory server (Discover Domain Controllers)** option. Click **Next**.

![Host Discovey Wizard Query page for AD Domain Controllers query](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/query_2.webp)

**Step 2 –** On the Query page, name the query and select the credentials used to access the source.

- Query Name – Provide a unique descriptive name for this query by typing over the `NEWQUERY`
  default name. Two queries cannot have the same name. If you use an existing name, a number is
  automatically appended to the query name, for example `NEWQUERY` becomes `NEWQUERY1`.
- Credentials – Select a Connection Profile. These credentials require the appropriate permissions
  for querying the source:

    - Default credentials (credentials the application is run with) – Applies the credentials used
      to launch the Enterprise Auditor application
    - Credentials in my default connection profile – Applies the default Connection Profile
      configured at the global level (**Settings** > **Connection**)
    - Credentials in this connection profile – Use the dropdown list to select a Connection Profile
      from those preconfigured at the global level (**Settings** > **Connection**)

    See the
    [Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
    topic for additional information on Connection Profiles.

Click **Next** to continue.

![Host Discovey Wizard Domains & Sites page](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/domainssites.webp)

**Step 3 –** The Domains & Sites page is scoped to return all domain controllers in the targeted
domains and sites. By default, all domains and sites are selected. If desired, scope to target
specific domains and sites.

- Connection – Select the radio button to specify the server to be connected to and searched:

    - Connect to default directory – Selects a default domain controller from the domain in which
      the Enterprise Auditor Console server resides
    - Specify server – Specify a particular server or domain controller. Type the server name in the
      textbox. Click **Connect** to confirm the connection to the specified server and populate the
      domains and sites choices.

- Filter by domains – Lists discovered domains

    - Search all domains – The default option. To narrow the scope to specific domains, deselect
      this option to enable the selection box.
    - Exclude domain – Deselect the checkbox for a domain in the list to exclude it from the scope.
      The **Check All** and **Uncheck All** buttons are enabled when scoping by domain.

- Filter by sites – Lists discovered sites

    - Search all sites – The default option. To narrow the scope to specific sites, deselect this
      option to enable the Selection box.
    - Exclude site – Deselect the checkbox for a site in the list to exclude it from the scope. The
      **Check All** and **Uncheck All** buttons are enabled when scoping by site.

Click **Next** to continue.

![Host Discovey Wizard Options page for AD Domain Controllers query](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/options_2.webp)

**Step 4 –** On the Options page, configure the query options as required.

- Run the query when jobs that reference it are run – Select this option to automatically execute
  the Host Discovery query prior to executing a job that has the host list generated by this query
  assigned. This ensures any new hosts have been discovered and are available for auditing.

    :::info
    Use this setting only for host lists tied to specific jobs that require
    up-to-date host lists.
    :::


- Query Result Retention – Select how to maintain the host list generated by this discovery query:

    - Yes, grow the host list by appending newly discovered hosts – The host list includes every
      host the query has ever discovered
    - No, only show hosts that were found during the most recent run – The host list generated by
      this query includes only hosts found in the most recent query execution. This option removes
      hosts from the generated host list, but does not remove hosts from the Host Master Table.

Click **Next** to continue.

![Host Discovey Wizard Inventory page for AD Domain Controllers query](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/inventory_2.webp)

**Step 5 –** On the Inventory page, the host inventory process can be automatically included with
the discovery query.

- Refresh inventory every time when the host discovery query completes – Automates the host
  inventory process and is dependent on the **Settings** > **Host Inventory** node configuration for
  the age of previously inventoried records. Leaving this option deselected applies the global
  settings for host inventory.
- Credentials – Select a Connection Profile. These credentials require the appropriate permissions
  for gathering inventory information from the discovered hosts:

    - Default credentials (credentials the application is run with) – Applies the credentials used
      to launch the Enterprise Auditor application
    - Credentials in my default connection profile – Applies the default Connection Profile
      configured at the global level (**Settings** > **Connection**)
    - Credentials in this connection profile – Use the dropdown list to select a Connection Profile
      from those preconfigured at the global level (**Settings** > **Connection**)

    See the
    [Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
    topic for additional information on Connection Profiles.

Click **Next** to continue.

![Host Discovey Wizard Summary page for AD Domain Controllers query](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/summary_2.webp)

**Step 6 –** The Summary page displays all the selected query configuration settings. To make
changes, click **Back** to navigate to the relevant wizard page. Click Finish to complete the
configuration process.

![Confirm dialog box](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/wizardconfirmdialog.webp)

**Step 7 –** A Confirm dialog box opens. Click **Yes** to run the query now or **No** to run the
query at another time.

Both options close the Host Discovery Wizard and return to the Host Discovery Queries view on the
Host Discovery node. If **Yes** is selected, the **Query State** indicates the running query.
