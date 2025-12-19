---
title: "Qumulo"
description: "Qumulo"
sidebar_position: 180
---

# Qumulo

**Netwrix Auditor** is a visibility platform for user behavior analysis and risk mitigation that
enables control over changes, configurations and access in hybrid IT environments to protect data
regardless of its location. The platform provides security analytics to detect anomalies in user
behavior and investigate threat patterns before a data breach occurs.

Qumulo Hybrid Cloud File Storage delivers real-time visibility, scale, and control of data across
on-prem and cloud. Qumulo customers understand storage at a granular level; programmatically
configure and manage usage, capacity, and performance; and are continuously delighted with new
capabilities, 100% usable capacity and direct access to experts. More information at
[www.qumulo.com](http://www.qumulo.com/).

To control who does what in the IT infrastructure that includes Qumulo Hybrid Cloud File Storage,
organizations need to monitor file-related activity. A typical case is when a user has renamed a
directory at the top level, and other users are unable to locate their files anymore. Thus, IT
specialists require a way to monitor, search and get notifications on certain file activity so that
they can take corrective measures.

For that purpose, you can use a specially designed Netwrix Auditor add-on for Qumulo. It works in
collaboration with Netwrix Auditor, supplying data about file operations on your Qumulo Cluster to
Netwrix database. Aggregating data into a single audit trail simplifies analysis, makes activity
monitoring more cost-effective, and helps you keep tabs on your IT infrastructure.

Major benefits:

- Gain a high-level view of the data you store
- Detect unauthorized activity that might threaten your data

## How it Works

The add-on is implemented as a Syslog service that collects activity data from Qumulo Cluster and
sends it to Auditor using the Integration API.

![diagram_thumb_0_0](/images/auditor/10.7/addon/qumulo/diagram_thumb_0_0.webp)

On a high level, the solution works as follows:

1. An IT administrator configures the Integration API settings to enable data collection and storage
   to the Netwrix database for further reporting, search, etc.

    It is recommended to create a dedicated monitoring plan in Netwrix Auditor and add a dedicated
    item of **Integration** type to it — then you will be able to filter data in reports and search
    results by monitoring plan/item name.

2. On the Qumulo side, the IT administrator prepares Syslog configuration settings.
3. Then the administrator opens the settings.xml configuration file and specifies the necessary
   parameters for add-on operation, including Qumulo Cluster as the source of Syslog messages,
   Auditor settings, etc. The add-on will operate as a Syslog listener for the Qumulo Cluster.
4. The add-on starts collecting and forwarding activity data: it listens to the specified TCP port
   and captures the designated Syslog messages. Data communication is performed using the TCP
   version of Syslog protocol.
5. The add-on processes these Syslog messages into Auditor-compatible format (Activity Records).
   Each Activity Record contains the "Who-What-When-Where-Action" information (that is, initiator's
   account, time, action, and other details).
6. Using the Integration API, the add-on sends the activity records to Auditor Server that writes
   them to the **Netwrix_Auditor_API** database (SQL server database) and file-based Long-Term
   Archive. Data is sent periodically, by default every 5 seconds. For more information on the
   Activity Record structure and capabilities of the Integration API, refer to the
   [Integration API](/docs/auditor/10.7/api/overview.md) topic.
7. Users open Auditor Client to work with collected data:
    - Search for file changes using certain criteria
    - Export data to PDF or CSV files
    - Save search results as reports
    - Subscribe to search results
    - Configure and receive alerts

### Add-on Delivery Package

The add=on delivery package is a ZIP archive that includes the following files:

| File name                | Description                                                                  |
| ------------------------ | ---------------------------------------------------------------------------- |
| install.cmd              | Command file that installs and enables Netwrix Syslog service.               |
| settings.xml             | Contains parameters for the add-on service operation.                        |
| SyslogService.exe        | The Syslog service – main add-on component, implemented as a Syslog service. |
| SyslogService.exe.config | Add-on configuration data.                                                   |

You will also need the **qumulo.xml** file that contains rules for processing Qumulo events. This
file is shipped separately.

## Prerequisites

Before running the add-on, ensure that all the necessary components and policies are configured as
follows:

| Where                                          | Prerequisite to check                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The Auditor Server side                        | - Auditor version is 9.96 or higher. - Integration API settings and **Netwrix_Auditor_API** database are configured properly. See [Configure Integration API](https://helpcenter.netwrix.com/API/API_Configuration.html) and [Audit Database](https://helpcenter.netwrix.com/Settings/Audit_Database_settings/Default_Audit_Database_Settings.html). - The **TCP 9699** port must be open on Windows firewall for inbound connections. - User account under which data will be written to **Netwrix_Auditor_API** database requires the _Contributor_ role in Netwrix Auditor. See [Role-Based Access and Delegation](https://helpcenter.netwrix.com/Roles/Role_Based_Access.html). Alternatively, you can grant it the **Global administrator** role, or add that account to the _Netwrix Auditor Administrators_ group. |
| The machine where the add-on will be installed | - The **TCP 9905** port must be open on Windows firewall for inbound connections. - .NET Framework 4.5 or later must be installed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Qumulo Cluster                                 | Qumulo core version 3.0.5.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Accounts and rights

It is recommended to create a dedicated account for running **install.cmd** and
**SyslogService.exe**. The service will connect to Auditor Server using this account, so at least
the **Contributor** role in Auditor is required for it. See
[Role-Based Access and Delegation](https://helpcenter.netwrix.com/Roles/Role_Based_Access.html) for
more information.

### Considerations and limitations

- For events received with NFS3 protocol, the _posix uid_ will be displayed instead of the
  initiator's account name in the "_Who_" field of the Auditor search results and activity
  summaries.
- If the initiator's account name could not be resolved, then Windows SID or Qumulo auth ID will be
  displayed in the the "_Who_" field of the search results and activity summaries.
- Currently, not every detail about permission and attribute changes may be provided by Qumulo
  Cluster, so they cannot be reported by Auditor.
- If the monitoring plan name in the add-on configuration parameter is specified incorrectly, this
  may lead to temp files generation and, therefore, to inefficient disk space usage.

## Compatibility Notice

(Undefined variable: Add-on.Addon_Qumulo) is compatible with Qumulo core 3.0.5 and with Netwrix
Auditor 9.96 and later.
