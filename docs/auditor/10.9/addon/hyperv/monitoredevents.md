---
title: "Monitoring Scope"
description: "Monitoring Scope"
sidebar_position: 50
---

# Monitoring Scope

Review a full list of the events that can be monitored using the add-on.

| Object Type       | Reported Action                                                                                       | Reported Properties                                                                                                                                |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Virtual Machine   | • Create/Delete • Clone • Migrate • Rename • Create/Delete Checkpoint • Hardware Configuration change | • Name • Checkpoint Name & Description • Number Of Processors • Memory Size (Allocated, Max) • VHD Location, Max size • Network Name • Switch Name |
| Hypervisor (Host) | • Create/Delete • Move • Hardware Configuration change • State change                                 | • Name • Number Of Processors • RAM Memory Size • Host Disk Capacity                                                                               |
| Host Cluster      | • Create/Delete • Move                                                                                | • Name                                                                                                                                             |
| Host Group        | • Create/Delete • Move • Rename                                                                       | • Name                                                                                                                                             |
| Private Cloud     | • Create/Delete • Rename                                                                              | • Name                                                                                                                                             |
| VM Network        | • Create/Delete • Rename                                                                              | • Name                                                                                                                                             |
| User Role         | • Rename • Add/Remove Members • Add/Remove Scopes • Permissions change                                | • Name • Scope • Permissions • Members                                                                                                             |
