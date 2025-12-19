---
title: "Activity Agent Ports"
description: "Activity Agent Ports"
sidebar_position: 10
---

# Activity Agent Ports

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx)
article.

There might be a need for additional ports for the target environment.

## CTERA Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Agent
and the CTERA Portal.

| Communication Direction      | Protocol | Ports | Description           |
| ---------------------------- | -------- | ----- | --------------------- |
| Agent Server to CTERA Portal | HTTPS    | 443   | CTERA Portal API      |
| CTERA Portal to Agent Server | TCP/TLS  | 4488  | CTERA Event Reporting |

## Dell Celerra & Dell VNX Devices Additional Firewall Rules

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server                                     | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

## Dell Isilon/PowerScale Devices Additional Firewall Rules

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell Isilon/PowerScale device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Isilon/PowerScale to CEE Server                       | TCP      | TCP 12228         | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

## Dell PowerStore Devices Additional Firewall Rules

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server                                     | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

## Dell Unity Devices Additional Firewall Rules

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server                                     | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

## Exchange Online Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target tenant:

| Communication Direction                            | Protocol | Ports | Description                                        |
| -------------------------------------------------- | -------- | ----- | -------------------------------------------------- |
| Activity Agent Server to Microsoft Entra ID Tenant | HTTPS    | 443   | Entra ID authentication, Graph API, Office 365 API |

## Microsoft Entra ID Tenant Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target tenant:

| Communication Direction                            | Protocol | Ports | Description                                        |
| -------------------------------------------------- | -------- | ----- | -------------------------------------------------- |
| Activity Agent Server to Microsoft Entra ID Tenant | HTTPS    | 443   | Entra ID authentication, Graph API, Office 365 API |

## Nasuni Edge Appliance Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nasuni Edge Appliance:

| Communication Direction         | Protocol      | Ports | Description            |
| ------------------------------- | ------------- | ----- | ---------------------- |
| Agent Server to Nasuni          | HTTPS         | 8443  | Nasuni API calls       |
| Nasuni to Activity Agent Server | AMQP over TCP | 5671  | Nasuni event reporting |

## NetApp Data ONTAP 7-Mode Device Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target NetApp Data ONTAP 7-Mode device:

| Communication Direction           | Protocol         | Ports                                | Description |
| --------------------------------- | ---------------- | ------------------------------------ | ----------- |
| Activity Agent Server to NetApp\* | HTTP (optional)  | 80                                   | ONTAPI      |
| Activity Agent Server to NetApp\* | HTTPS (optional) | 443                                  | ONTAPI      |
| Activity Agent Server to NetApp   | TCP              | 135, 139 Dynamic Range (49152-65535) | RPC         |
| Activity Agent Server to NetApp   | TCP              | 445                                  | SMB         |
| Activity Agent Server to NetApp   | UDP              | 137, 138                             | RPC         |
| NetApp to Activity Agent Server   | TCP              | 135, 139 Dynamic Range (49152-65535) | RPC         |
| NetApp to Activity Agent Server   | TCP              | 445                                  | SMB         |
| NetApp to Activity Agent Server   | UDP              | 137, 138                             | RPC         |

\*Only required if using the FPolicy Configuration and FPolicy Enable and Connect options in
Activity Monitor.

:::note
If either HTTP or HTTPS are not enabled, the FPolicy on the NetApp Data ONTAP 7-Mode
device must be configured manually. Also, the External Engine will not reconnect automatically in
the case of a server reboot or service restart.
:::


## NetApp Data ONTAP Cluster-Mode Device Additional Firewall Rules

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


## Nutanix Devices Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nutanix device:

| Communication Direction          | Protocol | Ports | Description             |
| -------------------------------- | -------- | ----- | ----------------------- |
| Activity Agent Server to Nutanix | TCP      | 9440  | Nutanix API             |
| Nutanix to Activity Agent Server | TCP      | 4501  | Nutanix Event Reporting |

Protect the port with a username and password. The credentials will be configured in Nutanix.

## Panzura Devices Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Panzura device:

| Communication Direction                    | Protocol      | Ports | Description             |
| ------------------------------------------ | ------------- | ----- | ----------------------- |
| Activity Agent Server to Panzura           | HTTPS         | 443   | Panzura API             |
| Panzura filers to to Activity Agent Server | AMQP over TCP | 4497  | Panzura Event Reporting |

Protect the port with a username and password. The credentials will be configured in Panzura.

## Qumulo Devices Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Qumulo device:

| Communication Direction         | Protocol | Ports | Description            |
| ------------------------------- | -------- | ----- | ---------------------- |
| Activity Agent Server to Qumulo | TCP      | 8000  | Qumulo API             |
| Qumulo to Activity Agent Server | TCP      | 4496  | Qumulo Event Reporting |

Protect the port with a username and password. The credentials will be configured in Qumulo.

## Azure Files Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target tenant:

| Communication Direction                            | Protocol | Ports | Description                                        |
| -------------------------------------------------- | -------- | ----- | -------------------------------------------------- |
| Activity Agent Server to Microsoft Entra ID Tenant | HTTPS    | 443   | Entra ID authentication, Graph API, Blob Storage   |


## SharePoint Online Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target tenant:

| Communication Direction                            | Protocol | Ports | Description                                        |
| -------------------------------------------------- | -------- | ----- | -------------------------------------------------- |
| Activity Agent Server to Microsoft Entra ID Tenant | HTTPS    | 443   | Entra ID authentication, Graph API, Office 365 API |

## SQL Server Additional Firewall Rules

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target SQL Server:

| Communication Direction             | Protocol | Ports | Description             |
| ----------------------------------- | -------- | ----- | ----------------------- |
| SQL Server to Activity Agent Server | TCP      | 1433  | Default SQL Server Port |

If the Activity Monitor cannot connect to the SQL Server, ensure that SQL Server Browsing state is
**Running**.

## Integration with Netwrix Access Analyzer Additional Firewall Rules

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
