---
title: "Ports"
description: "Find the ports and firewall rules that Privilege Secure, its service nodes, the Remote Access Gateway, and the target systems need to communicate."
sidebar_position: 70
---

# Ports

Use this page to plan the firewall rules for a Netwrix Privilege Secure for Access Management deployment. Each table lists the port, the connection direction, and what the port is for.

## Console port

The Privilege Secure Console and REST API listen on TCP port 6500. The default console URL is `https://<nps-server>:6500`.

The installer sets this port in the HTTPS binding of the IIS site named "SbPAM Web Service" and creates a matching Windows Firewall rule named "SbPAM Web Service Port (6500)". The installer has no property for the port, and Netwrix doesn't document a procedure to change it. Use 6500 in every URL, firewall rule, and identity provider setting.

### Settings that store the console URL

Several components store the console URL. Each one must match the address that users and services use to reach the console.

| Component | Where the URL is stored |
| --- | --- |
| Action, Email, Proxy, Scheduler, SIEM, and Host Scan services | **NPS Rest URL** in **System Settings** > **Services**. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md). |
| Approval and report emails | **Website URL** in **System Settings** > **Email**. See [Configure email notifications](/docs/privilegesecure/26.07/configuration/system-settings/email.md). |
| OpenID Connect and SAML sign-in | The callback (redirect) URI registered with the identity provider. See [Configure a SAML connector](/docs/privilegesecure/26.07/configuration/authentication/saml.md) and [Configure an OpenID Connect connector](/docs/privilegesecure/26.07/configuration/authentication/openid-connect.md). |
| Remote Access Gateway | The `NPS:Uri` setting in the gateway configuration. See [Remote Access Gateway requirements](/docs/privilegesecure/26.07/remote-access-gateway/requirements.md). |
| High availability manager | The console port that the manager uses to reach each server node. See [High availability options](/docs/privilegesecure/26.07/install/high-availability.md). |
| Desktop shortcut | The shortcut that the installer creates opens the console URL on port 6500. |
| Service nodes on other servers | The URL that you enter when you register a remote service. See [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md). |
| Browser extension | The server URL that each user enters when signing in to the extension. |

## Application server

### Inbound to the application server

| Port | Protocol | Source | Purpose |
| --- | --- | --- | --- |
| 6500 | TCP | Browsers, service nodes, and the Remote Access Gateway | Console and REST API. Service nodes register against this port. |
| 4489 | TCP | RDP clients | RDP proxy |
| 4422 | TCP | SSH clients | SSH proxy |
| 6520, 6523, 6524 | TCP | Remote proxy and service nodes | Service mesh registration and proxy REST (6520), leaf nodes (6523), cluster nodes (6524) |

The application server also uses these ports internally. Don't expose the loopback ports to other hosts.

| Port | Protocol | Purpose |
| --- | --- | --- |
| 6501 | TCP | License service (local host only) |
| 6521 | TCP | Proxy message service client (local host only) |
| 6522 | TCP | Proxy connection broker |

{/* TODO verify: whether 6522 (connection broker) must be reachable from other proxy nodes */}

### Outbound to Active Directory

Open these ports between the application server and the domain controllers.

| Port | Protocol | Destination | Purpose |
| --- | --- | --- | --- |
| 135 | TCP | Domain controller | Microsoft Remote Procedure Call (MS-RPC) |
| 389 | TCP and UDP | Domain controller | LDAP |
| 636 | TCP | Domain controller | LDAPS |
| 53 | TCP and UDP | DNS server | DNS |
| 137 and 138 | UDP | Domain controller | NetBIOS |
| 9389 | TCP | Domain controller | Active Directory Web Services |
| 88 | TCP and UDP | Domain controller | Kerberos |

Windows uses the dynamic port range 49152 to 65535 for RPC replies. For more information, see Microsoft's article [Service overview and network port requirements for Windows](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/service-overview-and-network-port-requirements).

### Outbound to Microsoft Entra ID

To manage Microsoft Entra ID, the application server must reach `https://login.microsoftonline.com` and `https://graph.microsoft.com` on TCP port 443.

### Outbound to target systems

| Port | Protocol | Destination | Purpose |
| --- | --- | --- | --- |
| 3389 | TCP | Windows hosts | RDP |
| 5985 and 5986 | TCP | Windows hosts | PowerShell remoting over Windows Remote Management (WinRM), including password changes. 5985 is HTTP and 5986 is HTTPS. |
| 22 | TCP | Linux, BSD, Cisco, and PAN-OS hosts | SSH, including password changes |
| 443 | TCP | PAN-OS hosts | PAN-OS XML API (account management) |

When the Proxy service or Action service runs on another server, open these ports from that server instead: the Proxy service uses RDP and SSH, and the Action service uses WinRM, SSH, and the PAN-OS API.

Resource settings can override the default RDP, SSH, and WinRM ports for a host.

## Database

| Port | Protocol | Database | Notes |
| --- | --- | --- | --- |
| 5432 | TCP | PostgreSQL (bundled installer) | {/* TODO verify: bundled PostgreSQL port. The Setup Launcher configuration and System Settings > Database in the upgraded lab show 5432, but the backend documents 5437 for production. Confirm the port a fresh 26.07.3 install uses. */} |
| 1433 | TCP | Microsoft SQL Server | You provide SQL Server. |

Allow the port only between the application server and the database host when the database is remote.

## Service nodes and proxy servers

Antivirus exclusions apply on every server. See [Additional service node and proxy server requirements](/docs/privilegesecure/26.07/requirements/service-nodes.md).

| Port | Protocol | Direction | Purpose |
| --- | --- | --- | --- |
| 6500 | TCP | Service node to application server | Register an Action Service or another remote service. |
| 6520 | TCP | Proxy server to application server | Register the Proxy Service and proxy REST. |
| 6523 | TCP | Proxy server to application server | Leaf nodes |
| 6524 | TCP | Proxy server to application server | Cluster nodes |
| 4489 | TCP | RDP clients to proxy server | RDP proxy |
| 4422 | TCP | SSH clients to proxy server | SSH proxy |

The Proxy Service installer creates Windows Firewall rules for 4422, 4489, and the 6520 to 6525 range.

{/* TODO verify: the direction of 6520, 6523 and 6524 (code and 26.03 install/overview say remote node to application server; the 26.03 ports table says the reverse), and whether a proxy node joins on 6500 or 6520. */}

## Remote Access Gateway

The Remote Access Gateway has three components. The portal sits in the perimeter network, and the gateway and guacd sit inside the network.

| Port | Protocol | Connection | Purpose |
| --- | --- | --- | --- |
| 443 | TCP | Users to the portal | Portal HTTPS |
| 80 | TCP | Users to the portal | Redirect to HTTPS. This port must be free on the portal server. |
| 6550 | TCP | Portal to gateway | Gateway web service |
| 6500 | TCP | Gateway to application server | Console and REST API |
| 4822 | TCP | Gateway to guacd | Guacamole daemon |
| 4489 | TCP | guacd to proxy | RDP proxy |
| 4422 | TCP | guacd to proxy | SSH proxy |

The gateway installer creates a Windows Firewall rule named "NPS Gateway Web Service Port (6550)". The gateway and portal installers create no rules for 443, 80, or 4822.

{/* TODO verify: whether customers open 443, 80, and 4822 manually, or rely on existing firewall policy. */}

For the hosts, software, and certificates that the gateway needs, see [Remote Access Gateway requirements](/docs/privilegesecure/26.07/remote-access-gateway/requirements.md).
