---
title: "Requirements"
description: "Requirements"
sidebar_position: 10
---

# Requirements

## Relevant rights

The following options are required to use the discovery service:

### User rights

- Show discovery service module
- Can manage discovery service system tasks

## Discovery Service Requirements

One requirement for the **Discovery Service** is data about **Active Directory users**, **user
accounts** and **service accounts**. A **Network Scan** is used to scan the network and collect this
data. Before configuring the **Network Scan**, a password needs to be issued that provides
**access** to the corresponding **server/client** and **services on a network** for collecting the
data. This user should be a member of admin for the corresponding group of domains. Otherwise, you
can use a domain administrator.

:::warning
A corresponding **password** with **rights** for the **domains** must exist before
adding a **Network Scan**!
:::


### Password

- Required for the **authentication** process with the **Active Directory computer**.
- Required for the **authentication** process with the **WMI (Windows Management Instrumentation)**
  on the computer to be scanned.

### Requirements for the network infrastructure

- The computer to be scanned and AD controller must be accessible via the network.
- The service: “Windows Management Instrumentation” must have been started on the computer to be
  scanned (carried out by Windows as standard).
- Help section for starting the service:
  [Microsoft Website](https://msdn.microsoft.com/de-de/library/aa826517(v=vs.85).aspx)
- The firewall must not block WMI requests (not blocked as standard).
- Help section for configuring the firewall:
  [Microsoft Website](https://msdn.microsoft.com/de-de/library/aa822854(v=vs.85).aspx)

NOTE: Only **IPv4 addresses** can currently be scanned.

### Open ports for the scan (necessary)

LDAP: Port 389(TCP,UDP) RPC/WMI: Port 135(TCP) (Windows Server 2008, Windows Vista and higher
versions) – port 49152-65535 (TCP) or a static WMI port (Windows 2000, Windows XP and Windows
Server 2003) – port 1025-5000 (TCP) or a static WMI port

### Computer name (Hostname)

1. IP address: Indicates the IP address for the element discovered during the scan – meaning where
   it was found (the IP address of the domain controller in the case of an Active Directory user).
2. Computer name and associated IP address: The computer name is first requested on the **DNS
   server** for the domain. The computer name returned by the server also contains the domain names
   as a postfix (e.g. Client01.domain.local). If there is no entry on the domain for the requested
   IP address, the computer name is determined via **NetBIOS**. The domain name is not displayed on
   the computer (e.g. Client01). In Netwrix Password Secure V8, the **DNS request** is the preferred
   function for determining the computer name. If no result is delivered, a request via **NetBIOS**
   is made.
