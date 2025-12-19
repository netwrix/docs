---
title: "Compatibility Notice"
description: "Compatibility Notice"
sidebar_position: 130
---

# Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

| Property in 8.0 – 8.5                                              | New property in 9.0 and above                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - XML: `<AuditedSystem></AuditedSystem>` - JSON: `"AuditedSystem"` | - XML: `<DataSource></DataSource>` - JSON: `"DataSource"`                                                                                                                                                                                                                                                                                   |
| - XML: `<ManagedObject></ManagedObject>` - JSON: `"ManagedObject"` | - XML: ``<MonitoringPlan> `````` `<Name>`Name</Name> `````` <ID>Unique ID</ID> `````` </MonitoringPlan>`` - JSON: `"MonitoringPlan" : { `````` "ID": "{Unique ID}", `````` "Name": "Name" `````` }` Now the MonitoringPlan contains two sub-entries: ID and Name. The ID property is optional and is assigned automatically by the product. |
| —                                                                  | - XML: ``<Item> `````` `<Name>`Item name</Name> `````` </Item>`` - JSON: `"Item": {"Name": "Item name"}`                                                                                                                                                                                                                                    |

To learn more about input and output Activity Record structure, refer to
[Activity Records](/docs/auditor/10.6/api/postdata/activityrecords.md).
