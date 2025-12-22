---
title: "Host Inventory Data Grid"
description: "Host Inventory Data Grid"
sidebar_position: 10
---

# Host Inventory Data Grid

The data grid provides all host inventory information collected on the hosts. View this information
at the **Host Management** node (the Host Master Table) or at individual host list nodes. See the
[Hosts Lists](/docs/accessanalyzer/11.6/admin/hostmanagement/lists.md)
topic for information on host lists.

![Host Inventory Data Grid](/images/accessanalyzer/11.6/admin/hostmanagement/datagrid.webp)

The icon for each host entry is an indicator of its inventory state:

| Icon                                                                                                                                           | Inventory State |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ![Idle inventory state icon](/images/accessanalyzer/11.6/admin/hostmanagement/inventoryidle.webp)              | Idle            |
| ![In Queue inventory state icon](/images/accessanalyzer/11.6/admin/hostmanagement/inventoryinqueue.webp)       | In Queue        |
| ![In Progress inventory state icon](/images/accessanalyzer/11.6/admin/hostmanagement/inventoryinprogress.webp) | In Progress     |

The **Name**, **HostStatus**, and **InventoryState** grid columns are fixed by default. If desired,
you can move these columns to the scrollable section of the table.

Use the horizontal scrollbar at the bottom to view the host inventory data, which includes:

- Name – Unique host name
- HostStatus – Status of the host during the last time it was queried for host inventory collection
- InventoryState – Last known status of the host inventory query (**Idle**, **In progress**, or **In
  queue**)

    :::note
    If the Enterprise Auditor application is stopped during host inventory collection,
    hosts queued for inventory retain the **InventoryState** of **In queue** within the Host
    Management node data grid, as this is the last known state of inventory. It retains that state
    until the next host inventory collection is executed against the host.
    :::


- IPAddress – Last known IP Address for the host from host inventory collection
- Subnet – Subnet mask for the host’s IP Address
- DNSDomain – Domain in which the host participates
- FQDN – Fully Qualified Domain Name of host
- OSName – Name of host’s operating system
- OSType – Type of host’s operating system
- TimeZone – Configured time zone for the host
- LastOnline – Timestamp for the last time the host was found to be online during a host inventory
  query
- LastAudit – Timestamp for the last time the host was executed against at the job level
- LastUpdate – Timestamp for the last time the host inventory record was updated
- WindowsDomain – Domain in which the host resides
- OSVersion – Version of the host’s operating system
- ServicePack – Operating system Service Pack for the host
- Role – Estimated role of the workstation or server (only applicable to Windows devices)
- Manufacturer – Name of the manufacturer of the device, if applicable
- SerialNumber – Serial number of the device, if applicable
- ADSite – Active Directory site in which the host resides
- isDNSServer – True or False if the host serves the role of DNS server
- isDomainController – True or False if host serves the role of domain controller
- isGlobalCatalog – True or False if host serves the role of Global Catalog
- isExchangeServer – True or False if host serves the role of Exchange server
- Model – Model of the device, if applicable
- FirstDiscovered – Timestamp of the Host Discovery query which introduced the host
- LastUpdatedBy – Name of the Enterprise Auditor Console server which last updated the host’s
  inventory record
- MACAddress – Media Access Control address, if applicable
- ServerRole – Indicates what role is served by the server (only applicable to Exchange servers)
- isIIS – True or False if IIS is present on the server
- Location – Distinct physical location, entered manually through the
  [Import Location](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/importlocation.md)
  activity
- ExchLocation – Distinct physical location of Exchange server, entered manually through the
  [Import Location](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/importlocation.md)
  activity
- AltLocation – Alternate physical location, entered manually through the
  [Import Location](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/importlocation.md)
  activity
- WinCluster – Name of the Windows cluster in which the host is a part, if applicable
- ExchCluster – Name of the Exchange cluster in which the host is a part, if applicable
- ExchangeServerRole – Name of the Exchange server roles served by the host
- ExchangeVersion – Exchange Server application version obtained from the registry
- IsSQLServer – True or False if host serves the role of SQL Server
- hostID – Unique identifier of the host within the Enterprise Auditor inventory tables

See the
[Data Grid Functionality](/docs/accessanalyzer/11.6/admin/navigate/datagrid.md)
topic for information on how to sort, filter, and search within the data grid.

The Activities pane provides several options for managing hosts within the Host Management node. See
the
[Host Management Activities](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/overview.md)
topic for information on these options.

## Host List Data Grid Right-Click Menus

The right-click menu available in the Host Management data grid varies according to the selection in
the Navigation pane.

| ![Host Management node right-click menu](/images/accessanalyzer/11.6/admin/hostmanagement/rightclickhostmanagement.webp) | ![Individual host list right-click menu](/images/accessanalyzer/11.6/admin/hostmanagement/rightclickindividualhost.webp) | ![Query created host list right-click menu](/images/accessanalyzer/11.6/admin/hostmanagement/rightclickquerycreated.webp) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host Management Node                                                                                                                                     | Individual Host List                                                                                                                                     | Query-Created Host List                                                                                                                                   |

These right-click menu options contain the Host Management Activities available for the selection.
See the
[Host Management Activities](/docs/accessanalyzer/11.6/admin/hostmanagement/actions/overview.md)
topic for additional information on these options.
