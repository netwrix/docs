---
title: "Scan IP Network"
description: "Scan IP Network"
sidebar_position: 10
---

# Scan IP Network

Follow the steps to create a Host Discovery query using the Scan your IP network source option. This
option scans a specified range of IP Addresses for active hosts and resolves the names of machines
using DNS.

![Host Discovey Wizard Source page for IP network scan](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/source_1.webp)

**Step 1 –** Open the Host Discovery Wizard. On the Source page, select the **Scan your IP network**
option. Click **Next**.

![Host Discovey Wizard Query page for IP network scan](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/query_1.webp)

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

![Host Discovey Wizard IPSweep page](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/ipsweep.webp)

**Step 3 –** On the IPSweep page, specify the range of IP Addresses to scan.

- Specification Type – Specify the type of IP range to scan. The selected Specification Type
  determines the IP Address options available for specifying the IP range. The default is **Specify
  IP Address Range**, but the following options are available:

    - Specify Windows IP Configuration Information – Provide **Hostname or IP address** and **Subnet
      mask** values
    - Specify IP Address Range – Provide **Starting IP Address** and **Ending IP Address**
    - Specify Advance IP Address Range – Provide **IP Address Range**

- IP Address options – The help [?] button at the end of each textbox provides example formats

    - Hostname or IP address – Example: `192.168.2.35` or `target.example.com`
    - Subnet mask – Example: `255.255.255.0`
    - Starting IP Address – Example: `192.168.2.1`
    - Ending IP Address – Example: `192.168.2.255`
    - IP Address Range – Example: `192.168.2.*`
    - See the help button for full list of examples

- IP Ranges box – Displays the selected range of IP Addresses. Use the links at the top of the box
  to edit the list:

    - Add as inclusion – Adds information provided in the IP Address Textboxes into the to be
      collected list
    - Add as exclusion – Adds information provided in the IP Address Textboxes into the to be
      ignored list
    - Remove – Removes the selection from the IP Ranges box

- (Optional) Only include host with the following ports open – If selected, this option limits the
  Host Discovery query to return only the hosts found in the IP Sweep with the specified open ports.
  When specifying multiple ports, separate them with commas or semicolons but not spaces. For
  example, to specify ports 10 and 80 enter: `10,80`. The help **[?]** button at the end of the
  textbox provides example entry formats.
- (Optional) Only include Windows hosts – If selected, this option limits the Host Discovery query
  to return only the hosts found in the IP Sweep that have Windows operating systems

Click **Next** to continue.

![Host Discovey Wizard Options page for IP network scan](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/options_1.webp)

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

![Host Discovey Wizard Inventory page for IP network scan](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/inventory_1.webp)

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

![Host Discovey Wizard Summary page for IP network scan](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/summary_1.webp)

**Step 6 –** The Summary page displays all the selected query configuration settings. To make
changes, click **Back** to navigate to the relevant wizard page. Click Finish to complete the
configuration process.

![Confirm dialog box](/images/accessanalyzer/11.6/admin/hostdiscovery/wizard/wizardconfirmdialog.webp)

**Step 7 –** A Confirm dialog box opens. Click **Yes** to run the query now or **No** to run the
query at another time.

Both options close the Host Discovery Wizard and return to the Host Discovery Queries view on the
Host Discovery node. If **Yes** is selected, the **Query State** indicates the running query.
