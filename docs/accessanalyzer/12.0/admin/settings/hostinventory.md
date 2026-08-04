---
title: "Host Inventory"
description: "Host Inventory"
sidebar_position: 70
---

# Host Inventory

The Host Inventory node is for selecting what information to collect from the target host during the
host inventory process, for allocating console resources to the host inventory process, and for
setting what out-of-the box host lists are visible in the Host Management node.

![Host Inventory Settings page](/images/accessanalyzer/12.0/admin/settings/hostinventory.webp)

In the Inventory Items section, there are four program property groups:

- Operating System – Includes 7 Items
- Application – Includes 7 Items
- Network – Includes 6 Items
- Hardware – Includes 4 Items

Each of these groups brings back the properties enumerated in the list below the group title. These
collected properties correspond to the columns in the Host Management tables. Deselecting a checkbox
prevents that information from being collected for target hosts. However, some solutions require
this information.

:::info
Leave the default setting of all the groups selected. Consult with
[Netwrix Support](https://www.netwrix.com/support.html) before turning off any of these property
groups.
:::


In the Performance Tuning section, there are five settings which allocate console resources to the
host inventory process:

- Threads – Indicates the number of job threads that are employed during the host inventory process

    - The default setting is 20 Threads
    - Maximum thread count is 100. Thread count will revert back to 100 if values over 100 are
      entered.
    - Restart Access Analyzer if thread count is changed for changes to take place

- Thread timeout [in seconds] – Indicates the time a thread will spend in retrieving information
  from a host

    - Default setting is 1200 seconds
    - If thread can't receive an active response from target host, the thread will move on to the
      next host in the queue

- Stop on Failed Ping – If the Stop on Failed Ping checkbox is selected, hosts that don't respond
  to pings aren't queried. Otherwise, hosts will be queried regardless.
- PING timeout [in seconds] – Indicates the time a thread will spend pinging a host

    - Default setting is 4 seconds
    - If thread can't connect with a host, the host will be designated as being offline and the
      thread will move on to the next host in the queue

- Only refresh inventory items older than [time selected] – Indicates the time that needs to pass
  before the host inventory process is automatically refreshed

    - Default setting is 60 days
    - The number textbox has a five-character limit
    - The dropdown menu includes the time-units of:

        - Hours
        - Days
        - Weeks
        - Months

    - This setting affects the Inventory page options on the Host Discovery Wizard. See the
      [Host Discovery Wizard](/docs/accessanalyzer/12.0/admin/hostdiscovery/wizard/overview.md) topic for additional information.

The Desired Host List Views section at the bottom contains all available host lists, both
built-in lists and custom-created lists. There are seven Default Hosts Lists which correspond
to the solutions that target them. During the host inventory process, hosts which meet the filter
criteria for these default lists are automatically populated into that host list. A checkmark in
front of the host list indicates that the list is visible in the **Host Management** > **All Hosts**
node.

The **Cancel** and **Save** buttons are in the lower-right corner of the Host Inventory view. These
buttons become enabled when modifications are made to the Host Inventory global settings. Whenever
changes are made at the global level, click **Save** and then **OK** to confirm the changes.
Otherwise, click **Cancel** if no changes were intended.

## Default Host Lists

The seven default lists are auto-populated during the host inventory process based on specific
filter criteria. These lists correspond to the pre-configured solution jobs which target them.

### AD Host List

The **AD** Host List can be expanded and contains five sub-groups used by the Active Directory
Solution and the Active Directory Inventory Solution:

![AD Host List](/images/accessanalyzer/12.0/admin/settings/ad.webp)

The sub-groups are:

- ALL DNS SERVERS
- ALL DOMAIN CONTROLLERS
- ALL GLOBAL CATALOG SERVERS
- ONE DOMAIN CONTROLLER PER DOMAIN
- ONE GLOBAL CATALOG SERVER PER DOMAIN

### ALL WINDOWS HOSTS Host List

The **ALL WINDOWS HOSTS** Host List is used primarily by the Windows Solution.

![ALL WINDOWS HOSTS Host List](/images/accessanalyzer/12.0/admin/settings/allwindowshosts.webp)

There are no sub-groups for ALL WINDOWS HOSTS.

### DG Host List

The **DG** Host List can be expanded and contains three sub-groups used by the Data Access
Governance for File System Solution.

![DG Host List](/images/accessanalyzer/12.0/admin/settings/dg.webp)

The sub-groups are:

- ALL CELERA SERVERS
- ALL INTERNET INFORMATION SERVERS
- ALL NETAPP SERVERS

### EXCHANGE Host List

The **EXCHANGE** Host List can be expanded and contains six sub-groups used by the Exchange
Solution. Four of these sub-groups can also be expand.

![EXCHANGE Host List](/images/accessanalyzer/12.0/admin/settings/exchange.webp)

The sub-groups are:

- EXCHANGE GENERAL

    - ALL EXCHANGE SERVERS (ACTIVE HOSTS)
    - ALL EXCHANGE SERVERS (ALL HOSTS)
    - EXCHANGE CAS SERVERS
    - EXCHANGE HUB SERVERS
    - EXCHANGE MB SERVERS

- EXCHANGE 2016

### SQL Servers Host List

The **SQL SERVERS** Host List is used primarily by the SQL Solution.

![SQL Servers Host List](/images/accessanalyzer/12.0/admin/settings/sqlservers.webp)

There are no sub-groups for SQL SERVERS.

### Windows Server Host List

The **Windows Server** Host List can be expanded and contains three sub-groups used by the
Windows Solution.

![Windows Server Host List](/images/accessanalyzer/12.0/admin/settings/windowsserver.webp)

The sub-groups are:

- ALL WINDOWS SERVERS (ACTIVE HOSTS)
- ALL WINDOWS SERVERS (ALL HOSTS)
- ALL WINDOWS SERVERS (NO DCS)

### Work Station Host List

The **Work Station** Host List can be expanded and contains one sub-group used by the Windows
Solution.

![Work Station Host List](/images/accessanalyzer/12.0/admin/settings/workstation.webp)

The single sub-group is:

- ALL WINDOWS WORKSTATIONS

## Required Permissions

The host inventory process collects the four property groups (Operating System, Application,
Network, and Hardware) using different mechanisms, each with its own permission requirement on the
target host:

- **Operating System properties** (version, service pack, product type, and related items) come
  from the target's registry. This requires the Remote Registry service to be running on the
  target, and the account used must have local administrator rights (or explicitly delegated
  Remote Registry access).
- **Application properties** (for example, SQL Server, IIS, clustering, and Exchange role/version)
  come from a mix of registry, WMI, and Active Directory, depending on the specific property.
  WMI-sourced properties require WMI namespace access on the target (local administrator by
  default). Exchange role and version come from Active Directory first, and only fall back to
  WMI if that lookup doesn't return a result.
- **Network properties** (for example, domain/workgroup name and AD site) come primarily from
  low-privilege network APIs that don't require administrative rights, with a WMI fallback for
  some properties if the primary method doesn't return a result.
- **Hardware properties** (manufacturer, model, serial number) come from WMI and require the
  same administrative-equivalent access as other WMI-sourced properties.

:::info
Because Operating System and Hardware properties depend on Remote Registry and WMI access, provision
the account used for host inventory as a local administrator (or with explicitly delegated Remote
Registry and WMI namespace permissions) on the inventoried hosts. A standard authenticated domain
account without local admin rights is sufficient for Network properties and the Active
Directory-based portion of Application properties, but not for the registry- and WMI-based
properties.
:::

If the account used lacks the required access on a given host, host inventory should leave the
properties normally supplied by that mechanism blank rather than failing the entire host inventory
record.
