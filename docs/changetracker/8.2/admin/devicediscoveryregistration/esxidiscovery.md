---
title: "ESXi / vCenter Discovery"
description: "Discover and register ESXi hosts from a vCenter server using a Gen 7 Agent as a proxy"
sidebar_position: 10
---

# ESXi / vCenter Discovery

Change Tracker can discover ESXi hosts managed by a VMware vCenter server and automatically
register them as monitored devices. Discovery runs from a Gen 7 Agent (Windows) that connects
to vCenter using VMware PowerCLI and returns the list of hosts to the Hub.

## Prerequisites

- A Gen 7 Agent (Windows) registered with the Hub. This agent acts as the **discovery device**
  and executes the PowerCLI commands.
- VMware PowerCLI installed on the discovery device.
- A stored credential in Change Tracker with vCenter administrator (or read-only) access. See
  [Credentials](/docs/changetracker/8.2/admin/settingstab/credentials.md) for details on
  creating stored credentials.
- Network connectivity from the discovery device to the vCenter server on port 443.

## Run an ESXi / vCenter discovery

**Step 1 –** Navigate to **Settings > Agents and Devices** and click **Discover Devices**.

**Step 2 –** Select **ESXi / vCenter Discovery** from the discovery type menu.

**Step 3 –** Configure the discovery dialog:

| Field | Description |
|---|---|
| **Discovery Device** | The Gen 7 Agent that will execute the vCenter discovery. Click **Select Device** to choose an agent. |
| **Parent Device in Hub** | *(Optional)* An existing device to use as the parent for discovered hosts. If left blank, defaults to the discovery device. |
| **Credentials** | The stored credential used to authenticate to the vCenter server. |
| **Device Name Prefix** | The prefix applied to each discovered host name. Defaults to `VM Host`. Discovered devices are named in the format `<prefix> (<hostname>)` — for example, `VM Host (esxi-host-01)`. Change this value to match your organization's naming conventions. If you clear the field, discovered devices are named using the hostname only. |
| **Assign to Group** | The device group that discovered hosts are added to. |
| **Add new VM Hosts to ChangeTracker** | When selected, hosts found on vCenter that don't already exist in Change Tracker are added as new devices. |
| **Update existing VM Hosts in ChangeTracker** | When selected, hosts that already exist in Change Tracker are updated with the latest information from vCenter. |
| **Delete missing VM Hosts from ChangeTracker** | When selected, hosts that exist in Change Tracker but are no longer found on vCenter are removed. |

**Step 4 –** Click **Run** to start the discovery. The discovery status grid shows the progress
and results of each discovery task.

## Discovery results

After the discovery task completes, the results grid displays each discovered host with the
following columns:

- **Device Name** — the name assigned to the host using the prefix and hostname.
- **Operating System** — the ESXi version reported by vCenter (e.g., `ESXi 8.0`).
- **IP Address** — the management IP address of the host.

Review the results and confirm the devices were added to the correct group. You can re-run
discovery at any time to synchronize the device list with vCenter — use the **Add new**,
**Update existing**, and **Delete missing** options to control how changes are merged.
