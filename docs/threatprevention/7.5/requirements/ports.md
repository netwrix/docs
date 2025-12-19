---
title: "Firewall Ports"
description: "Firewall Ports"
sidebar_position: 70
---

# Firewall Ports

The following default ports are required for Threat Prevention functionality unless modified as per
network requirements. If choosing the Create Windows Firewall Rules option either in step 6 of the
[Application Server Install](/docs/threatprevention/7.5/install/application.md), in step 6 of the
[Administration Console Remote Install](/docs/threatprevention/7.5/install/adminconsole.md), on the Set Options page of the
[Deploy Agents Wizard](/docs/threatprevention/7.5/admin/agents/deploy/overview.md#deploy-agents-wizard), or in step 7 of a
[Manual Agent Deployment](/docs/threatprevention/7.5/install/agent/manual/manual.md), then Threat Prevention will create the
necessary Windows firewall rules. If using a third party firewall, it will be necessary to manually
set these.

:::note
SIEM ports are configured when SIEM alerting is enabled in Threat Prevention. See the
[System Alerting Window](/docs/threatprevention/7.5/admin/configuration/systemalerting/overview.md) topic for additional
information.
:::


## Enterprise Manager Firewall Rules

The following firewall settings are required for communication with the Enterprise Manager:

| Communication Direction          | Protocol         | Ports      | Description          |
| -------------- | ---------------- | ---------- | ---------- |
| Inbound Netwrix Threat Prevention Enterprise Manager Agent Communication | gRPC / TCP       | 3741       | Inbound Agent Communication      |
| Inbound Netwrix Threat Prevention Enterprise Manager Remote Console      | gRPC / TCP       | 3740       | Inbound Remote Console Communication      |
| Outbound Enterprise Manager to SQL Server        | SQL Client / TCP | 1433       | SQL Server Communication      |
| Outbound Enterprise Manager to SQL Server       | SQL Client / UDP | 1434       | SQL Server Communication      |
| Outbound Enterprise Manager to Agents       | RPC / TCP        | 135        | WMI enabled (optional): required for Agent Auto Deploy |
| Outbound Enterprise Manager to Agents        | DCOM / TCP       | 1024-65535 | WMI enabled (optional): required for Agent Auto Deploy |

## Agent Firewall Rules

The following firewall settings are required for communication with the Agent:

| Communication Direction       | Protocol   | Ports        | Description         |
| ---------------------- | ---------- | ------------ | ---------- |
| Outbound Netwrix Threat Prevention Windows Agent to Enterprise Manager | gRPC / TCP | 3741         | Outbound Enterprise Manager Communication |
| Outbound Netwrix Threat Prevention Windows Agent to Threat Manager     | TCP        | 10000, 10001 | Outbound Threat Manager Communication     |

:::note
For NAS device file activity monitoring, additional ports are required. See the Ports for
NAS Device Activity Monitoring topic for additional information.
:::


## Admin Console Firewall Rules

The following firewall settings are required for communication with the Administration Console:

| Communication Direction        | Protocol   | Ports | Description          |
| ------------------- | ---------- | ----- | ----------------- |
| Administration Console to Enterprise Manager | gRPC / TCP | 3740  | Outbound Enterprise Manager Communication |

## Remote Admin Console Firewall Rules

The following firewall settings are required for communication with the remote Administration
Console:

| Communication Direction     | Protocol   | Ports | Description        |
| -------------- | ---------- | ----- | ---------------- |
| Remote Administration Console to Enterprise Manager | gRPC / TCP | 3740  | Outbound Enterprise Manager Communication |

## Database Firewall Rules

The following firewall settings are required for communication with the SQL Server:

:::note
This port requirement is specifically needed when the SQL Server is on a separate box from
the Enterprise Manager and/or the Administration Console.
:::


| Communication Direction          | Protocol         | Ports | Description                   |
| -------------------------------- | ---------------- | ----- | ----------------------------- |
| Enterprise Manager to SQL Server | SQL Client / TCP | 1433  | Inbound Enterprise Manager Communication |
| Enterprise Manager to SQL Server | SQL Client / UDP | 1434  | Inbound Enterprise Manager Communication |

## Netwrix Threat Manager Reporting Module Ports

Configure appropriate firewall rules to allow connections with the Netwrix Threat Manager Reporting
Module.

**Application Console Access Firewall Rules**

The following firewall settings are required to access the Netwrix Threat Manager Reporting Module
console:

| Communication Direction | Protocol | Ports | Description                              |
| ----------------------- | -------- | ----- | ---------------------------------------- |
| Bidirectional           | TCP      | 8080  | Remote access to the application console |

:::note
Threat Manager requires the default dynamic port range specified by Microsoft (49152
through 65535) for Windows Server client/server operations. If a firewall or other appliance is
blocking these ports, this server will no longer properly respond to client requests and no longer
support standard IP Stack operations that are required for the operation of this product.
:::


**Active Directory Domain Controllers Firewall Rules**

The following firewall settings are required for communication between the Netwrix Threat Manager
Reporting Module server and Active Directory domain controllers:

| Communication Direction | Protocol | Ports   | Description                            |
| ----------------------- | -------- | ------- | -------------------------------------- |
| Outbound                | TCP      | 88      | Kerberos-sec                           |
| Outbound                | TCP      | 135     | The endpoint mapper tells the client which randomly assigned port a service (FRS, AD replication, MAPI, etc.) is listening on |
| Outbound                | TCP      | 389     | LDAP                                 |
| Outbound                | TCP      | 636     | SSL LDAP                             |
| Outbound                | TCP      | Various | The port that 135 reports. Used to bulk translate AD object names between formats.(Ephemeral Ports)       |

**Database Firewall Rules**

The following firewall settings are required to allow the Netwrix Threat Manager Reporting Module to
talk to the Threat Prevention SQL database:

| Communication Direction      | Protocol         | Ports | Description                                  |
| ---------------------- | ---------------- | ----- | -------------------------- |
| Netwrix Threat Manager Reporting Integration Service to SQL Server | SQL Client / TCP | 1433  | Inbound Netwrix Threat Manager Communication |
| Netwrix Threat Manager Reporting Integration Service to SQL Server | SQL Client / UDP | 1434  | Inbound Netwrix Threat Manager Communication |

## Ports for NAS Device Activity Monitoring

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](<https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx>)
article.

**Dell Celerra & Dell VNX Devices Additional Firewall Rules**

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction         | Protocol | Ports             | Description       |
| -------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server              | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

**Dell Isilon/PowerScale Devices Additional Firewall Rules**

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell Isilon/PowerScale device:

| Communication Direction           | Protocol | Ports             | Description       |
| ------------------------------- | -------- | ----------------- | ----------------- |
| Dell Isilon/PowerScale to CEE Server         | TCP      | TCP 12228         | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

**Dell Unity Devices Additional Firewall Rules**

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction           | Protocol | Ports             | Description       |
| ---------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server            | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

**Nasuni Edge Appliance Additional Firewall Rules**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nasuni Edge Appliance:

| Communication Direction         | Protocol      | Ports | Description            |
| ------------------------------- | ------------- | ----- | ---------------------- |
| Agent Server to Nasuni          | HTTPS         | 8443  | Nasuni API calls       |
| Nasuni to Activity Agent Server | AMQP over TCP | 5671  | Nasuni event reporting |

**NetApp Data ONTAP 7-Mode Device Additional Firewall Rules**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target NetApp Data ONTAP 7-Mode device:

| Communication Direction           | Protocol         | Ports                                | Description |
| --------------------------------- | ---------------- | ------------------------------------ | ----------- |
| Activity Agent Server to NetApp\* | HTTP (optional)  | 80                                   | ONTAPI      |
| Activity Agent Server to NetApp\* | HTTPS (optional) | 443                                  | ONTAPI      |
| Activity Agent Server to NetApp   | TCP              | 135, 139 <br />Dynamic Range (49152-65535) | RPC   |
| Activity Agent Server to NetApp   | TCP              | 445                                  | SMB         |
| Activity Agent Server to NetApp   | UDP              | 137, 138                             | RPC         |
| NetApp to Activity Agent Server   | TCP              | 135, 139 <br />Dynamic Range (49152-65535) | RPC   |
| NetApp to Activity Agent Server   | TCP              | 445                                  | SMB         |
| NetApp to Activity Agent Server   | UDP              | 137, 138                             | RPC         |

\*Only required if using the FPolicy Configuration and FPolicy Enable and Connect options in
Activity Monitor.

:::note
If either HTTP or HTTPS are not enabled, the FPolicy on the NetApp Data ONTAP 7-Mode
device must be configured manually. Also, the External Engine will not reconnect automatically in
the case of a server reboot or service restart.
:::


**NetApp Data ONTAP Cluster-Mode Device Additional Firewall Rules**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target NetApp Data ONTAP Cluster-Mode device:

| Communication Direction           | Protocol         | Ports | Description    |
| --------------------------------- | ---------------- | ----- | -------------- |
| Activity Agent Server to NetApp\* | HTTP (optional)  | 80    | ONTAPI         |
| Activity Agent Server to NetApp\* | HTTPS (optional) | 443   | ONTAPI         |
| NetApp to Activity Agent Server   | TCP              | 9999  | FPolicy events |

\*Only required if using the FPolicy Configuration and FPolicy Enable and Connect options in
Activity Monitor.

:::note
If either HTTP or HTTPS are not enabled, the FPolicy on the NetApp Data ONTAP 7-Mode
device must be configured manually. Also, the External Engine will not reconnect automatically in
the case of a server reboot or service restart.
:::


**Panzura Devices Additional Firewall Rules**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Panzura device:

| Communication Direction                    | Protocol      | Ports | Description             |
| ------------------------------------------ | ------------- | ----- | ----------------------- |
| Activity Agent Server to Panzura           | HTTPS         | 443   | Panzura API             |
| Panzura filers to to Activity Agent Server | AMQP over TCP | 4497  | Panzura Event Reporting |

Protect the port with a username and password. The credentials will be configured in Panzura.

## Ports for Integration with Full Netwrix Threat Manager

The following firewall settings are required to integrate with the full version of Netwrix Threat
Manager:

| Communication Direction        | Protocol | Ports | Description                         |
| ------------------------------ | -------- | ----- | ----------------------------------- |
| Agent Server to Threat Manager | TCP/UDP  | 10001 | Data event stream to Threat Manager |
