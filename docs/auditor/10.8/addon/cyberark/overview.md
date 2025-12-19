---
title: "CyberArk Privileged Access Security"
description: "CyberArk Privileged Access Security"
sidebar_position: 80
---

# CyberArk Privileged Access Security

Netwrix Auditor is a visibility platform for user behavior analysis and risk mitigation that enables
control over changes, configurations and access in hybrid IT environments to protect data regardless
of its location. The platform provides security analytics to detect anomalies in user behavior and
investigate threat patterns before a data breach occurs.

CyberArk offers its Privileged Access Security (PAS) solution for managing the privileged accounts
and SSH Keys. It enables organizations to manage and monitor all activities associated with the
privileged identities, for example, Windows server administrator, root on a UNIX server, etc. A
featured set of the Privileged Access Security tools includes, in particular:

- **Privileged Session Manager** - a tool that enables users to securely connect to remote targets
  with a standard remote desktop client application, providing isolated sessions.
- **Enterprise Password Vault** – a tool for storage and centralized management of the privileged
  accounts; it supports automated changes and logging of the activities associated with all types of
  privileged passwords and SSH Keys. This tool also includes Central Policy Manager service.

Major benefit of the integrated solution implemented with the Add-On is the increased visibility
into actions related to CyberArk tools, in particular:

- Visibility into the user account behind the respective isolated session controlled by Privileged
  Session Manager
- Visibility into the password-related activities, e.g. password retrieval and further actions made
  to target application or system, and automatic password update for managed accounts in Enterprise
  Password Vault and Central Policy Manager.

## How It Works

The add-on is implemented as a syslog service that collects activity data from CyberArk system (PAS)
and sends it to Auditor using the Integration API.

![HIW_CyberArch](/images/auditor/10.7/addon/cyberark/diagram_thumb_0_0.webp)

The add-on operates as a syslog listener for the CyberArk system. On a high level, the solution
works as follows:

1. An IT administrator configures Integration API settings to enable data collection and storage to
   the Audit Databasefor further reporting, search, etc.

    It is recommended to create a dedicated monitoring plan in Auditor and add a dedicated item of
    **Integration** type to it — then you will be able to filter data in reports and search results
    by monitoring plan/item name.

2. On the CyberArk server, the administrator opens the **dbparam.ini** file and specifies the
   parameters for syslog message forwarding, including add-on installation server settings, the IDs
   of events to be monitored, etc.

    See the [Monitored Events](/docs/auditor/10.8/addon/cyberark/monitoredevents.md) topic for additional information on the events
    supported for monitoring out of the box.

3. On the add-on installation server, the administrator runs the installation file and configures
   the Add-On parameters in the configuration wizard.
4. The add-on starts collecting and forwarding activity data: it listens to the specified UDP port
   and captures designated syslog messages (CyberArk events).
5. The add-on processes these events into Auditor-compatible format – activity records. Each
   activity record contains the _Who-What-When-Where-Action_ information (that is, user account,
   time, action, and other details).
6. Using the Integration API, the add-on sends the activity records to Auditor Server that writes
   them to the Audit Database and Long-Term Archive. Data is sent periodically, by default every 5
   seconds.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the structure
of the activity record and the capabilities of the Integration API.

7. Users open Auditor Client to work with collected data:
    - Search for file changes using certain criteria
    - Export data to PDF or CSV files
    - Save search results as reports
    - Subscribe to search results
    - Configure and receive alerts

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| Where                                                                          | Prerequisite to check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                                                        | - The Integration API and Audit Database settings are configured in Auditor Server settings. See the [Prerequisites](/docs/auditor/10.8/api/prerequisites.md) and [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topics for additional information. - The **TCP 9699** port must be open on Windows firewall for inbound connections. - User account under which data will be written to the Audit Database requires the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) for additional information. Alternatively, you can grant it the **Global administrator** role, or add that account to the **Netwrix Auditor Administrators** group. |
| The machine where the Add-On will be installed (Auditor Server is recommended) | - The **UDP 514** port must be open on Windows firewall for inbound connections. If you are using Netwrix Auditor for Network Devices, this port may be already in use, and you should provide another one. Another option is to install the add-on and Auditor Server on different machines. - .Net Framework 4.7.2 and above is installed. Review the following Microsoft technical article for additional information on how to install .Net Framework 4.7.2: [Microsoft .NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2).                                    |
| CyperArk PAS                                                                   | Version 10.10.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Accounts and Rights

By default, the add-on will run under the _Local System_ account. So, if the add-on and Auditor will
be running on different machines, the corresponding computer account will require at least the
**Contributor** role in Auditor. See the
[Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional
information.

In case the add-on and Auditor are installed on the same server, no special settings are needed.

### Considerations and Limitations

- The Add-On must be deployed in the same subnet as CyberArk PAS and Auditor.
- If the monitoring plan name in the _`<NetwrixAuditorPlan>`_ add-on configuration parameter is
  specified incorrectly, this may lead to temp files generation and, therefore, to inefficient disk
  space usage.
- If you are using Netwrix Auditor for Network Devices, the 514 UDP port may be already in use, and
  you should specify another port when configuring the add-on settings (see
  [Deploy the Add-On](/docs/auditor/10.8/addon/cyberark/deployment.md) and [Add-On Parameters](/docs/auditor/10.8/addon/cyberark/parameters.md) topics for additional
  information). Another option is to install the add-on and Auditor Server on different machines.

## Compatibility Notice

Netwrix Auditor add-on for CyberArk is compatible with CyberArk Privileged Access Security (PAS)
10.10 and with Netwrix Auditor 9.8 and later.
