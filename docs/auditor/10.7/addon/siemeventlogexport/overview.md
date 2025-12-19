---
title: "SIEM Generic Integration for Event Log Export"
description: "SIEM Generic Integration for Event Log Export"
sidebar_position: 230
---

# SIEM Generic Integration for Event Log Export

Netwrix Auditor helps you protect and get most from your SIEM investment. The Event Log Export
Add-on works in collaboration with Netwrix Auditor , supplying additional data that augments the
data collected by SIEM.

The add-on enriches your SIEM data with actionable context in human-readable format, including the
before and after values for every change and data access attempt, both failed and successful.
Aggregating data into a single audit trail simplifies analysis, makes your SIEM more cost effective,
and helps you keep tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on facilitates the audit data transition from Netwrix
Auditor to SIEM. All you have to do is provide connection details and schedule the script for
execution.

On a high level, the add-on works as follows:

1. The add-on connects to the Auditor Server and retrieves audit data using the Integration API.
2. The add-on processes Netwrix Auditor-compatible data (Activity Records) into log events that work
   as input for SIEM. Each event contains the user account, action, time, and other details.
3. The add-on creates a special Windows event log (Netwrix_Auditor_Integration) and stores events
   there. These events are structured and ready for integration with SIEM.

For more information on the structure of the Activity Record and the capabilities of the Integration
API, refer to the [Integration API](/docs/auditor/10.7/api/overview.md) topic.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor server side                        | - Auditor version is **10.0** or later. - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.7/api/prerequisites.md) and [Audit Database](/docs/auditor/10.7/admin/settings/auditdatabase.md) topics for additional information. - The TCP 9699 port (default Auditor Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the Global reviewer role in Auditor or is a member of the Netwrix Auditor Client Users group. See the [Role-Based Access and Delegation](/docs/auditor/10.7/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product. |
| The computer where the script will be executed | - PowerShell **3.0** or later must be installed. - .NET **4.5** or later must be installed. - Execution policy for powershell scripts is set to _"Unrestricted"_. Run Windows PowerShell as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the write permission on the script folder—the add-on creates a special .bin file with the last exported event. - The user running the script must be a member of the Domain Users group. - At least the first script run should be performed under the account with elevated privileges, as it will be necessary to create event log file and perform other required operations.                                                                                                                                            |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging the Integration API. Download the latest add- on version in the Add- on Store. See the
[Integration API](/docs/auditor/10.7/api/overview.md) topic for additional information about schema updates.
