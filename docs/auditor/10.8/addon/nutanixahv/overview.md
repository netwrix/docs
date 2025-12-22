---
title: "Nutanix AHV"
description: "Nutanix AHV"
sidebar_position: 150
---

# Nutanix AHV

Netwrix Auditor is a visibility platform for user behavior analysis and risk mitigation that enables
control over changes, configurations and access in hybrid IT environments to protect data regardless
of its location. The platform provides security analytics to detect anomalies in user behavior and
investigate threat patterns before a data breach occurs.

Nutanix AHV is a virtualization platform within the Nutanix Enterprise Cloud architecture. It
provides facilities for VM deployment, operation and centralized management. Nutanix AHV is a fully
integrated component of the Nutanix Enterprise Cloud.

Virtualization teams, Managed Service Providers and other IT professionals need to detect who does
what in the Nutanix Hyperconverged infrastructure. For that, a unified audit trail is required,
supporting detailed Nutanix monitoring and effective response to changes.

For that purpose, you can use a specially designed add-on that supports audit for Nutanix AHV and
Nutanix Prism/Element. The add-on works in collaboration with Auditor, supplying data about
operations on your Nutanix AHV to Netwrix database. Aggregating data into a single audit trail
simplifies analysis, makes activity monitoring more cost-effective, and helps you keep tabs on your
IT infrastructure.

Major benefits:

- Gain a high-level view of the data you store
- Detect unauthorized activity that might threaten your data

## How it works

The add-on is implemented as a Syslog service that collects activity data from Nutanix
infrastructure and sends it to Netwrix Auditor using the Integration API.

![HIW_diagram_new](/images/auditor/10.7/addon/nutanixahv/diagram_thumb_0_0.webp)

On a high level, the solution works as follows:

1. An IT administrator configures the Integration API settings to enable data collection and storage
   to Netwrix database for further reporting, search, etc.

    It is recommended to create a dedicated monitoring plan in Netwrix Auditor and add a dedicated
    item of **Integration** type to it — then you will be able to filter data in reports and search
    results by monitoring plan/item name.

2. On Nutanix side, the IT administrator prepares a dedicated user account for accessing Nutanix
   Prism Central/Element and configures Syslog server (IP, port, etc.).
3. The administrator opens the Settings.xml configuration file and specifies the necessary
   parameters for add-on operation, Netwrix Auditor settings, etc. The add-on will operate as a
   Syslog listener for Nutanix server.
4. The administrator runs the Netwrix.IntegrationConfiguration.exe file and provides credentials to
   connect to Prism Central server.
5. The administrator selects the deployment scenario and runs the **install.ps1** PowerShell script
   file to deploy and configure the add-on components on the target server.
6. In particular, the script deploys and starts **Netwrix Auditor Add-on for Nutanix AHV** Windows
   Service— this is the main add-on component, responsible for audit data collection and forwarding.
7. The add-on starts collecting and forwarding activity data from Nutanix Prism server: it listens
   to the specified UDP port and captures designated Syslog event messages and also collects
   activity data using Nutanix REST API.

Syslog event data communication is performed using UDP version of Syslog protocol. See the
[Monitoring Scope](/docs/auditor/10.8/addon/nutanixahv/monitoredevents.md) topic for additional information on the default list of
events supported out-of-the box.

8. The add-on processes the incoming Syslog messages and activity data collected using Nutanix REST
   API into NAuditor -compatible format (Activity Records). Each Activity Record contains the
   Who-What-When-Where-Action information (that is, initiator's account, time, action, and other
   details).
9. Using the Integration API, the add-on sends the activity records to Auditor Server that writes
   them to the Audit Database and Long-Term Archive. Data is sent periodically, by default every
   second.

See the [Integration API](/docs/auditor/10.8/api/overview.md) topic for additional information on the Activity
Record structure and capabilities of the Integration API.

10. Users open Auditor Client to work with collected data:
    - Search for file changes using certain criteria
    - Export data to PDF or CSV files
    - Save search results as reports
    - Subscribe to search results
    - Configure and receive alerts

## Add-on Delivery Package

The add-on delivery package is a ZIP archive that includes the following files:

| File name                              | Description                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| Install.ps1                            | PowerShell script that creates windows service to execute add-on.              |
| Settings.xml                           | Contains parameters for the add-on service operation.                          |
| Netwrix.IntegrationConfiguration.exe   | Add-on component responsible for accessing Prism Central server.               |
| Netwrix.Nutanix.IntegrationService.exe | Main add-on component, responsible for audit data collection from Nutanix AHV. |

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| Where                                          | Prerequisite to check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auditor Server side                            | - Auditor version 9.9 or later. - Netwrix Integration API and Audit Database settings are configured properly in Netwrix Auditor. See the [Prerequisites](/docs/auditor/10.8/api/prerequisites.md) and [Audit Database](/docs/auditor/10.8/admin/settings/auditdatabase.md) topics for additional information. - The **TCP 9699** port must be open on Windows firewall for inbound connections. - User account under which data will be written to the Audit Database requires the **Contributor** role in Auditor. See the [Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional information. Alternatively, you can grant it the **Global administrator** role, or add that account to the **Netwrix Auditor Administrators** group. |
| The machine where the add-on will be installed | - Any of the following Windows OS versions: - Windows Server 2012 R2 (or later) - Windows 8.1 (or later) - The **UDP** port must be open on Windows firewall for inbound connections. - .NET Framework versions 4.5 or later                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Nutanix Prism server                           | Nutanix AOS 5.11, 5.15, or 5.20                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Accounts and rights

It is recommended to create a dedicated account for running **install.ps1** and **Netwrix Auditor
Add-on for Nutanix AHV** (main service of the solution). The service will connect to Auditor Server
using this account, so at least the **Contributor** role in Auditor is required for it. See the
[Role-Based Access and Delegation](/docs/auditor/10.8/admin/monitoringplans/delegation.md) topic for additional
information.

This service account requires the **User Admin** role in Nutanix Prism. You will be prompted for the
corresponding set of credentials when you run the **install.ps1** script (see Steps 4 and 5 of the
[Deploy the Add-On](/docs/auditor/10.8/addon/nutanixahv/install.md)). User name and password for connection to Nutanix Prism server will
be then encrypted and stored in the solution configuration.

### Considerations and limitations

- By default, the add-on is targeted at a single Nutanix Prism Central/Element server.
- Netwrix add-on must be deployed in the same subnet as Nutanix Prism Central/Element server.
- Please be aware that monitoring of actions performed on the add-on installation server is not
  supported.

### Upgrade Path

To upgrade from versions released earlier than August 2020, do the following:

1. Stop and remove the **Netwrix Auditor Add-on for Nutanix AHV** service.
2. Download and unpack the new add-on package to the same location as the earlier version.
3. Run the **install.ps1** PowerShell script file from the new add-on version on the target server.

## Compatibility notice

The add-on is compatible with Nutanix AOS 5.15 and Nutanix AOS 5.20, and with Auditor 10.0 and
later.
