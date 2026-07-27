---
title: "Main Components"
description: "Main Components"
sidebar_position: 10
---

# Main Components

Endpoint Protector is designed around several physical entities:

- Computers – The Windows, Mac, and Linux workstations that have the Endpoint Protector Client
  installed.
- Devices – The devices that Endpoint Protector supports (USB devices, digital
  photo cameras, USB memory cards, etc).
- Users – The user who will be handling the devices and the computers.

The Server side of Endpoint Protector has different parts working close together:

- Endpoint Protector Hardware or Virtual Appliance – containing Operating System, Database, etc.
- Web Service – communicating with the Endpoint Protector Clients and storing the information
  received from them.
- Endpoint Protector User Interface – managing the existing devices, computers, users, groups, and
  their behavior in the entire system.

The Client-side of Endpoint Protector has two different components:

- Endpoint Protector Client – enforcing the rights and settings received from the Server on Windows,
  Mac, and Linux computers; it also automatically deploys Enforced Encryption on the USB storage
  devices.
- Enforced Encryption Client – enforcing FIPS 140-3 validated encryption on USB storage devices as specified from the Server; it is a stand-alone application compatible with Windows and Mac computers.

![Main Components](maincomponents.webp)

## Architecture Overview

The following diagram illustrates the network architecture for the Endpoint Protector system. This setup
enables comprehensive Data Loss Prevention (DLP) across both local and remote users, securing
sensitive information and ensuring compliance with security policies.

![Architecture Overview](networkarchitecture.webp) 

### Client to Server Communication

This section describes how TLS encrypts communication between the Endpoint Protector Server and the Endpoint Protector Client.

- On the Endpoint Protector Server, TLS 1.2 and TLS 1.3 are enabled by default. Endpoint Protector always negotiates the highest TLS version available on both the Client and the Server, and selects the strongest cipher suite TLS 1.3 offers.
- Netwrix Support can enable TLS 1.1 upon request for backward compatibility with older agents and appliances.

### Endpoint Protector Client TLS

**TLS 1.3 Compatibility**

| OS      | Older version                                                         | Newer version                                                        | Endpoint Protector Client Features                                                                                                                    |
| ------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows | Not compatible with Windows 7, XP, and versions older than Windows 10 | Compatible with Windows 10, version 1903 and higher, and Windows 11 | Version 2608 and later uses a custom bundled OpenSSL package. <br/> Version 2605 and earlier uses Windows' built-in TLS encryption engine (Schannel). |
| macOS   | Compatible                                                              | Compatible                                                                | Uses a custom bundled OpenSSL package shipped with the Endpoint Protector Client.                                                                       |
| Linux   | Not compatible                                                          | Compatible                                                                | Uses Linux's built-in OpenSSL engine.                                                                                                                     |

### Endpoint Protector PQC Encryption

Starting with the 2608 Client and Server release, Endpoint Protector supports Post-Quantum Cryptography (PQC) encryption for Client to Server communication.

Endpoint Protector automatically negotiates PQC as the highest available encryption option when both the Client and the Server run a version that supports it. If either side runs an older version, Endpoint Protector falls back to the highest TLS version both sides support.

### Key Components and Data Flow

**Endpoint Protector Server**

This server is the core of Endpoint Protector, enforcing security policies and monitoring data flows
across the organization. It communicates with all endpoints to ensure compliance with data
protection rules and logs activity for auditing purposes.

**MySQL Database**

The Endpoint Protector server is integrated with a MySQL database that stores configuration data,
user activity logs, and incident reports. This allows for centralized data management, enabling
efficient policy enforcement and detailed reporting.

**Firewall/Gateway Device**

Acting as a security barrier, the firewall/gateway protects the network from external threats and
manages secure connections for remote users. It ensures that only authorized traffic reaches the
Endpoint Protector Server, safeguarding internal resources.

**DLP Admin**

The Data Loss Prevention (DLP) Admin manages the entire Endpoint Protector infrastructure. They
configure policies, monitor endpoint activity, and address potential data breaches. The admin uses
the server’s interface to adjust security rules and respond to incidents as they occur.

**DLP Users (LAN and Remote):**

- LAN Users – These internal users are connected to the organization’s Local Area Network (LAN), and
  the Endpoint Protector server monitors their devices to prevent unauthorized data
  transfers.
- Remote Users – Remote employees access the network through secure channels via the
  firewall/gateway. Endpoint Protector also monitors their activities to ensure consistent
  enforcement of policies.
