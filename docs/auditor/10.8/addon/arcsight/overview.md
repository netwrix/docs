---
title: "ArcSight"
description: "ArcSight"
sidebar_position: 30
---

# ArcSight

Netwrix Auditor helps you extend auditing possibilities and get most from your ArcSight investment.
The Netwrix Auditor Add-on for ArcSight works in collaboration with Auditor, supplying additional
data that augments the data collected by ArcSight.

The add-on enriches your SIEM data with actionable context in human-readable format, including the
before and after values for every change and data access attempt, both failed and successful.
Aggregating data into a single audit trail simplifies analysis, makes your SIEM more cost effective,
and helps you keep tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on facilitates the audit data transition from Netwrix
Auditor to ArcSight. All you have to do is provide connection details and schedule the script for
execution.

On a high level, the add-on works as follows:

1. The add-on connects to the Netwrix Auditor Server and retrieves audit data using the Integration
   API.
2. The add-on processes Auditor-compatible data (Activity Records) into native ArcSight CEF format.
   Each exported event contains the user account, action, time, and other details.
3. The add-on uploads audit trails to ArcSight Logger making it immediately ready for review and
   analysis. ArcSight SmartConnector configured as Syslog Daemon is supported as well.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the structure
of the Activity Record and the capabilities of the Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| on...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                        | - The Audit Database settings are configured in the Auditor. See the [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topic for additional information. - The TCP 9699 port (default Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the **Global reviewer** role in Auditor or is a member of the **Netwrix Auditor Client Users** group. Alternatively, you can grant the **Global administrator** role or add the user to the **Netwrix Auditor Administrators** group. In this case, this user will have the most extended permissions in the product. |
| On the ArcSight side                           | - The UDP Receiver is enabled and is configured to receive CEF as source and use the default port **514**. - To check receiver settings or add a new receiver, start the ArcSight Logger web interface and navigate to **Configuration** > **Receivers**. ![configuration](/images/auditor/10.7/addon/arcsight/configuration.webp) **NOTE:** You can configure TCP Receiver and switch to TCP protocol and port **515**. - The user running the script must have sufficient permissions to supply data to ArcSight.                                                        |
| The computer where the script will be executed | - Execution policy for powershell scripts is set to "_Unrestricted_". Run **Windows PowerShell** as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the **write** permission on the script folder—the add-on creates a special .bin file with the last exported event.                                                                                                                                                                                                                                                                                      |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging the Integration API. Download the latest add-on version in the Add-on Store. See the
[Integration API](/docs/auditor/10.8/api/overview.md)topic for additional information.

The add-on was renamed due to HPE acquisition by Micro Focus. The former add-on name was Netwrix
Auditor Add-on for HPE ArcSight. This name may still be present in the add-on files and
documentation. ArcSight trademarks and registered trademarks are property of their respective
owners.
