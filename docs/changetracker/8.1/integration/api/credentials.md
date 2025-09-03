---
title: "Credentials"
description: "Credentials API for managing authentication credentials in ChangeTracker"
sidebar_position: 10
---

# Credentials

## Overview

The Credentials API allows you to manage authentication credentials used by ChangeTracker to connect to various systems and services. This API provides endpoints for creating, retrieving, updating, and deleting credentials for different credential types including Shell, Database, FTP, Cloud, ESX, ITSM, and Splunk.

Credentials are identified by a unique key and include various parameters specific to the credential type. The API requires authentication and the `CredentialsManage` permission to perform operations.

## Endpoints

### Get Credentials

Retrieves credentials for a specified type and key.

**HTTP Request**
```
GET /credentials
```

**Query Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | Unique identifier for the credentials |
| type | string | Yes | Type of credentials (Shell, Database, FTP, Cloud, ESX, ITSM, Splunk) |

**Response**
Returns a Credentials object with the following properties:

```json
{
  "Version": 0,
  "CredentialType": "Shell",
  "DeviceOnlineDetection": "None",
  "Key": "example-key",
  "PublicKeys": ["string"],
  "Parameters": {"username": "user", "password": "***"},
  "Prompts": ["string"],
  "LastModifiedDateUtc": "2025-08-21T10:23:32.0000000Z",
  "IsTrusted": true,
  "NotTrustedReason": "",
  "DiscoveryTaskId": 0,
  "DiscoveryStatusMessage": "",
  "DiscoveryTaskStatus": "Complete"
}
```

### Create Credentials

Adds new credentials for a specified type and key.

**HTTP Request**
```
POST /credentials/add
```

**Authentication**
Requires authentication and the `CredentialsManage` permission.

**Request Body**
```json
{
  "Credentials": {
    "CredentialType": "Shell",
    "DeviceOnlineDetection": "None",
    "Key": "example-key",
    "PublicKeys": ["string"],
    "Parameters": {"username": "user", "password": "secret"},
    "Prompts": ["string"],
    "DecryptionErrors": {},
    "LastModifiedDateUtc": "2025-08-21T10:23:32.0000000Z",
    "IsTrusted": false,
    "NotTrustedReason": "",
    "DiscoveryTaskId": 0,
    "DiscoveryStatusMessage": "",
    "DiscoveryTaskStatus": "AwaitingPickup"
  }
}
```

**Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| CredentialType | enum | Yes | Type of credential (Unknown, Shell, Database, FTP, Cloud, ESX, ITSM, Splunk) |
| DeviceOnlineDetection | enum | No | Method for detecting if device is online (None, Ping, TcpConnect) |
| Key | string | Yes | Unique identifier for the credentials |
| PublicKeys | array | No | List of public keys |
| Parameters | object | Yes | Dictionary of credential parameters (e.g., username, password) |
| Prompts | array | No | List of prompts |
| IsTrusted | boolean | No | Whether the credential is trusted |

**Response**
Returns the created Credentials object.

### Update Credentials

Updates existing credentials for a specified type and key.

**HTTP Request**
```
POST /credentials/update
```

**Authentication**
Requires authentication and the `CredentialsManage` permission.

**Request Body**
Similar to the Create Credentials endpoint, but updates an existing credential.

**Response**
Returns the updated Credentials object.

### Delete Credentials

Deletes credentials for a specified type and key.

**HTTP Request**
```
POST /credentials/delete
```

**Authentication**
Requires authentication and the `CredentialsManage` permission.

**Query Parameters**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| key | string | Yes | Unique identifier for the credentials to delete |
| type | string | Yes | Type of credentials to delete |

**Response**
Returns a success status code (200) if the credentials were successfully deleted.

## Credential Types

The following credential types are supported:

| Type | Description |
|------|-------------|
| Shell | Command-line shell credentials |
| Database | Database connection credentials |
| FTP | File Transfer Protocol credentials |
| Cloud | Cloud service credentials |
| ESX | VMware ESX/ESXi credentials |
| ITSM | IT Service Management credentials |
| Splunk | Splunk credentials |

## Online Detection Methods

The following online detection methods are available:

| Method | Description |
|--------|-------------|
| None | No online detection |
| Ping | Use ICMP ping to detect if device is online |
| TcpConnect | Use TCP connection to detect if device is online |
