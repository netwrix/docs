---
title: "Monitoring Scope"
description: "Monitoring Scope"
sidebar_position: 40
---

# Monitoring Scope

Review a full list of object types and activities monitored on Nutanix Prism with the add-on.

| Object                        | Action                                                                                                                         | Property                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Machine1              | Create/Delete Clone Migrate Rename State change (Power off/on, Pause etc.) Restore from snapshot Hardware Configuration change | Name MAC Address VLAN Name Connection State Number Of Processors Cores Per Processor Memory Size (MiB) Disk Size (Bytes) Host IP |
| Host (Node) 2                 | Add3/Remove4                                                                                                                   | IP5                                                                                                                              |
| Host Cluster                  | -                                                                                                                              | -                                                                                                                                |
| VM Network (Subnet)           | -                                                                                                                              | -                                                                                                                                |
| Local User2                   | • Create/Delete • Properties change6 • Roles change6 • Log in/out • Password Change                                            | • Username • First Name6 • Last Name6 • Email6 • Language6 • Roles6                                                              |
| Authentication Configuration2 | • Authentication type change                                                                                                   | • Authentication Types                                                                                                           |

1 — Syslog

2 — Events (API v2.0)

3 — User not applicable

4 — Host remove event consist of 2 events (see Appendix B):

- Host marked for removal: this event has a “Who”
- Host deleted: this event occurs when the host deletion task completes.

5 — The host add event contains the IP address of the host Controller VM, and not the host IP
address.

6 — UI API.
