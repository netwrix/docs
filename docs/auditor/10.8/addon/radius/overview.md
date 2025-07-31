---
title: "RADIUS Server"
description: "RADIUS Server"
sidebar_position: 190
---

# RADIUS Server

Netwrix Auditor Add-on for RADIUS Server tracks user and device logon activity on a Windows Server
where the Remote Authentication Dial-In User Service (RADIUS) is running.

## RADIUS Protocol

RADIUS is a client-server network protocol that enables secure authentication, authorization, and
account management through special network access servers called gateways. The protocol works as
follows: When a user tries to access network resources through a gateway that has the RADIUS client
component enabled, the gateway sends a request to the RADIUS server. The RADIUS server identifies
the user or device and either accepts or rejects the connection request, and then logs the attempt
for future reference.

Because it enhances security and scalability, the RADIUS protocol is widely used in enterprise
network environments to provide authentication and authorization for a variety of network access
servers, such as VPN or dial-in servers and wireless access points. It helps organize and centralize
sign-in procedures and improve overall security. In a Windows Server environment, the RADIUS server
is provided by the Network Policy Server (NPS).

In addition to providing user authentication and authorization, a RADIUS server can grant or deny
access to a connecting device based on network policies. Companies leverage these policies to
empower users to connect to the corporate infrastructure using their personal devices, while
disallowing potentially vulnerable and unsafe devices to minimize risk.

## Netwrix Auditor Add-on

Regular review of logon activity is essential for gaining complete visibility into your account
management

procedures and ensuring that all activity is traceable and compliant with your policies. For
example, logons from unusual locations or devices can be a sign of user account compromise or
identity theft, and an unexpectedly high number of logon failures can indicate an intrusion attempt.
Careful review of successful and failed logons from both Active Directory and RADIUS servers helps
security operations teams detect these signs and react promptly to security threats.

Netwrix Auditor Add-on for RADIUS Server works in collaboration with Netwrix Auditor for Active
Directory, collecting additional data that augments the data collected by Netwrix Auditor.
Aggregating data into a single audit trail simplifies logon activity analysis and helps you keep
tabs on your IT infrastructure.

Implemented as a PowerShell script, this add-on automates the acquisition of RADIUS logon events and
their transition to Netwrix Auditor. All you have to do is provide connection details and schedule
the script for execution. Netwrix recommends running this add-on in addition to the Active Directory
auditing provided by Netwrix Auditor.

On a high level, the add-on works as follows:

1. The add-on connects to the Security event log on the RADIUS server and collects logon-related
   events.
2. The add-on processes these events into Netwrix Auditor-compatible format (Activity Records). Each
   Activity Record contains the user account, logon status, time, and other details. Where
   applicable, the cause for logon failure and the name of network policy are included in the
   Activity Record.
3. Using the Netwrix Auditor Integration API, the add-on sends the successful and failed logon
   events to the Netwrix Auditor server, which writes them to the Long-Term Archive and the Audit
   Database.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the structure
of the Activity Record and the capabilities of the Netwrix Auditor Integration API.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| On...                                          | Ensure that...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                        | - Auditor version is **9.8** or later. - The Audit Database settings are configured in Auditor Server. See the [Prerequisites](/docs/auditor/10.8/api/prerequisites.md) and [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topics for additional information. - The TCP 9699 port (default Auditor Integration API port) is open for inbound connections. - The user retrieving data from the Audit Database is granted the Global reviewer role in Auditor or is a member of the Netwrix Auditor Client Users group. See the [Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant the Global administrator role or add the user to the Netwrix Auditor Administrators group. In this case, this user will have the most extended permissions in the product. |
| The RADIUS server                              | - The **Remote Event Log Management (RPC)** inbound firewall rule is enabled. - The account collecting RADIUS logon events is member of the **Domain Users** group and have the **Manage auditing and security log** right.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| The computer where the script will be executed | - PowerShell **3.0** or later must be installed. - .NET **4.5** or later must be installed. - Execution policy for powershell scripts is set to _"Unrestricted"_. Run Windows PowerShell as administrator and execute the following command: Set-ExecutionPolicy Unrestricted - The user running the script is granted the write permission on the script folder—the add-on creates a special .bin file with the last exported event. - The user running the script must be a member of the Domain Users group. - At least the first script run should be performed under the account with elevated privileges, as it will be necessary to create event log file and perform other required operations.                                                                                                                                           |

## Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.
