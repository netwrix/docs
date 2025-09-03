---
title: "Register Agents"
description: "Agent Registration API for managing device agents in ChangeTracker"
sidebar_position: 11
---

# Register Agents

## Overview

The Agent Registration API allows you to register and manage agents with the ChangeTracker system. This API provides endpoints for registering new agents, which can be either direct agents installed on devices or proxied devices accessed through another agent. The API handles various device types including servers, desktops, network devices, and databases.

Agents are identified by a unique AgentDevice ID and include various parameters such as device name, host type, operating system details, and network information. The API requires authentication and the `DeviceRegister` permission to perform operations.

## Endpoints

### Register Agent

Registers the details of an Agent with the system.

**HTTP Request**
```
POST /agents/register
```

**Authentication**
Requires authentication and the `DeviceRegister` permission.

**Request Body**
```json
{
  "AgentName": "string",
  "CanProxy": false,
  "CredentialKey": "string",
  "DeviceName": "string",
  "DeviceType": "Server",
  "GroupNames": ["Group1", "Group2"],
  "HostName": "string",
  "HostType": "Windows",
  "MacAddresses": "string",
  "IPv4": "192.168.1.100",
  "IPv6": "string",
  "LegacyHubId": "string",
  "DiscoveryId": "string",
  "DiscoveryTaskId": "string",
  "OnlineDetection": "Ping",
  "Os": "Windows Server 2019",
  "KnownOsName": "Windows Server",
  "OsUserSpecified": "string",
  "PollPeriodSeconds": 300,
  "ProxiedByAgentId": "string",
  "Registered": false,
  "UniqueId": "string",
  "Version": 0
}
```

**Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| AgentName | string | No | The name of the agent |
| CanProxy | boolean | No | Specifies whether the agent can proxy connections to other devices |
| CredentialKey | string | No | Specifies the credential key (only allowed for proxied devices) |
| DeviceName | string | No | Specifies the device name |
| DeviceType | enum | No | Type of device (Unknown, Server, Desktop, Network, Database) |
| GroupNames | array | No | Specifies the group names (only allowed for proxied devices) |
| HostName | string | No | Specifies the host name or IP address used for agentless access |
| HostType | enum | No | Specifies the host type (Unknown, Unix, Windows, Network, Database, Cloud, ESX, Splunk) |
| MacAddresses | string | No | Specifies the MAC addresses |
| IPv4 | string | No | Specifies the IPv4 address |
| IPv6 | string | No | Specifies the IPv6 address |
| LegacyHubId | string | No | Specifies the legacy hub ID |
| DiscoveryId | string | No | Specifies the internal discovery-based ID |
| DiscoveryTaskId | string | No | Specifies the internal discovery task ID |
| OnlineDetection | enum | No | Specifies the method to use when detecting if a proxied device is online (None, Ping, TcpConnect) |
| Os | string | No | Specifies the Operating System full description as reported by the device |
| KnownOsName | string | No | Specifies the Operating System from the list of known OS names |
| OsUserSpecified | string | No | Specifies the operating system as entered by the user (overrides discovered OS in UI) |
| PollPeriodSeconds | integer | No | Specifies the poll period in seconds |
| ProxiedByAgentId | string | No | Specifies the agent ID of the proxy agent this device will be proxied by |
| Registered | boolean | No | Specifies whether the agent is registered |
| UniqueId | string | No | Specifies a value uniquely identifying the agent independent of name or agent ID |
| Version | integer | No | Specifies the request version |

**Response**
Returns an Agent object with the following properties:

```json
{
  "ModelVersion": 0,
  "AgentDevice": {
    "AgentId": "string",
    "DeviceId": "string"
  },
  "Version": "string",
  "Name": "string",
  "DeviceName": "string",
  "FullyQualifiedDomainName": "string",
  "DeviceType": "Server",
  "HostType": "Windows",
  "Os": "Windows Server 2019",
  "OsUserSpecified": "string",
  "KnownOsName": "Windows Server",
  "OsVariant": "64 bit version",
  "Registered": true,
  "Deleted": false,
  "PollPeriodSeconds": 300,
  "LegacyId": "string",
  "DiscoveryId": "string",
  "DiscoveryTaskId": "string",
  "HostName": "string",
  "MacAddresses": "string",
  "IPv4": "192.168.1.100",
  "IPv6": "string",
  "LastPollUtc": "2025-08-21T10:23:32.0000000Z",
  "NextPollUtc": "2025-08-21T10:28:32.0000000Z",
  "MembershipChangeTimeUtc": "2025-08-21T10:23:32.0000000Z",
  "OnlineStatus": "Online",
  "DiagnosticModeEnabled": false,
  "EventBlockEnabled": false,
  "BaselineSendEnabled": true,
  "OnlineDetection": "Ping",
  "PingTimeoutSeconds": 5,
  "TcpConnectPort": 0,
  "CanProxy": false,
  "UniqueId": "string",
  "IsTestAgent": false,
  "RecentActivity": {
    "AgentDeviceId": "string",
    "LastUpdatedUtc": "2025-08-21T10:23:32.0000000Z",
    "ConfigDateUtc": "2025-08-21T10:23:32.0000000Z",
    "LoginName": "string",
    "ProcessId": 0
  },
  "SkipConfigCheckUntilUtc": "2025-08-21T10:23:32.0000000Z",
  "AgentType": "NetCore",
  "IsBlockingRegistrationBy": "string",
  "PublicKeyStringsInUse": "string"
}
```

## Device Types

The following device types are supported:

| Type | Description |
|------|-------------|
| Server | Server device |
| Desktop | Desktop computer |
| Network | Network device |
| Database | Database server |

## Host Types

The following host types are supported:

| Type | Description |
|------|-------------|
| Unix | Unix-based system |
| Windows | Windows-based system |
| Network | Network device |
| Database | Database server |
| Cloud | Cloud service |
| ESX | VMware ESX/ESXi server |
| Splunk | Splunk server |

## Online Detection Methods

The following online detection methods are available:

| Method | Description |
|--------|-------------|
| None | No online detection |
| Ping | Use ICMP ping to detect if device is online |
| TcpConnect | Use TCP connection to detect if device is online |

## Agent Types

The following agent types are supported:

| Type | Description |
|------|-------------|
| Unknown | Unknown agent type |
| NetDesktop | .NET Desktop agent |
| Mono | Mono-based agent |
| NetCore | .NET Core agent |
| ExpressAgent | Express agent |

## Device Online Status

The following online statuses are available:

| Status | Description |
|--------|-------------|
| WaitingForContact | Agent has not yet contacted the server |
| Online | Agent is online and communicating with the server |
| Offline | Agent is offline or not responding |
