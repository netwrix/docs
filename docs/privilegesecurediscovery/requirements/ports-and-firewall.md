---
title: "Ports and firewall"
description: "Open the network ports, load balancer settings, and certificates that Privilege Secure for Discovery needs to reach endpoints and services."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the purpose and required exposure of TCP/80. The stack files publish port 80 (mapped to container port 8080) next to 443, and the legacy page listed HTTP for web access while the legacy overview listed only HTTPS. Evidence: deploy/src/setup/docker-stack.prod.single.yml:20-22.

TODO: Confirm whether the product uses TCP/3081, TCP/5672, TCP/15672, and TCP/28001 on the host and whether any of them must be opened between cluster nodes. The stack files only reference MQ_PORT=5672 inside the overlay network. Evidence: docker-stack.prod.single.yml:15; none for 3081, 15672, and 28001.

TODO: Confirm that Fluentd port 24224 needs no firewall rule. The stack files bind it to 127.0.0.1 only. Evidence: docker-stack.prod.single.yml:188.

TODO: Confirm the SYSLOG ports (UDP/514 and TCP/6514) for the SIEM forwarding that the container deployment supports. Evidence: none in the stack files.

TODO: Confirm NTP is UDP/123 and whether the host uses the domain controller or an internet time source. Evidence: none in the stack files.

TODO: Confirm the EDR API hosts in the table. Evidence: they are the placeholders that the product shows in the EDR provider form (`https://api.crowdstrike.com`, `https://defense.conferdeploy.net`, `https://<customerName>-api.cloud.tanium.com`); SentinelOne has no single common host, so the table shows the console pattern. Confirm that these are the most common commercial hosts, in particular Carbon Black Cloud Prod 02 compared with Prod 05, and that the product contacts only the API base URL.

TODO: The Windows entry now covers only TCP/445 and says nothing about NetBIOS, SMBv1, or dynamic RPC high ports. Confirm the product needs no TCP/135, TCP/139, or dynamic RPC high ports. Evidence: windows_rpc/_smb.py connects to the SMB session port 445 with the highest available dialect (impacket 0.13.1) and runs MSRPC through named pipes over that connection (SMBTransport). The Kerberos entry in the domain controllers section (TCP and UDP 88) was added at the owner's direction because the same module authenticates with Kerberos tickets. Confirm it and whether the product needs any other Kerberos port.

:::

This page lists the network ports, load balancer settings, and certificate requirements for Netwrix Privilege Secure for Discovery. Use it to prepare firewalls before you install the product.

## Load balancers

Depending on the high availability (HA) and disaster recovery (DR) configuration, at least one load balancer must sit in front of each environment, such as one each for production, QA, and development.

- **Traffic pattern**: Distribute traffic round-robin among all active nodes, which are the nodes with an active heartbeat.
- **Heartbeat**: Detect whether a node is alive from its response on port 443.
- **Headers**: Configure the load balancer to add the `X-Forwarded-For` header.

## SSL certificates

- To provide HTTPS connectivity, install an SSL certificate on each Privilege Secure for Discovery server.
- The certificate must contain the load-balanced host name in the common name (CN) or as a subject alternative name (SAN), or be issued as a wildcard certificate.

## WAN accelerators

A wide area network (WAN) accelerator can affect scan times and function. Exclude the Privilege Secure for Discovery nodes from WAN acceleration.

## Internal networking

The product uses non-routable link-local addresses, also known as Automatic Private IP Addressing (APIPA), for internal Docker networking.

## Firewall rules

The following sections list the connections that the firewall must allow. Each heading shows the source and the destination.

### Privilege Secure for Discovery to protected computers

- ICMP.
- Windows devices:
  - TCP/445. The product connects over Server Message Block (SMB) and negotiates the highest SMB version that the system supports, including SMB 3.1.1, and authenticates. It then uses Microsoft Remote Procedure Call (MSRPC) services over that SMB connection for scanning, policy enforcement, and provisioning administrative privileges.
- Linux devices: SSH (TCP/22).

### Privilege Secure for Discovery to domain controllers

- LDAP (TCP/389) or LDAPS (TCP/636).
- Kerberos (TCP/88 and UDP/88).

### Privilege Secure for Discovery to the NTP host

In most configurations, the domain controller provides Network Time Protocol (NTP). In other configurations, the product might need to reach an internet-based NTP host.

- Outbound NTP (UDP/123).

### Privilege Secure for Discovery to the RADIUS server

Required only if you use Remote Authentication Dial-In User Service (RADIUS) for second-factor authentication.

- RADIUS (UDP/1812).

### Privilege Secure for Discovery to the SAML identity provider

- HTTPS (TCP/443).

### Management workstations to the Privilege Secure for Discovery web interface

- HTTP (TCP/80) for web access.
- HTTPS (TCP/443) for web access.
- SSH (TCP/22), limited to maintenance activities.

### Clients to the Privilege Secure for Discovery API

- Inbound HTTPS (TCP/443).

### Privilege Secure for Discovery to the SIEM server

- SYSLOG (UDP/514 and TCP/6514).
- Protocols other than SYSLOG are also supported and can require other ports.

### Between clustered nodes

For a cluster, allow the following traffic between the Privilege Secure for Discovery nodes:

- Cluster management communications (TCP/2377).
- Node communication (TCP/7946 and UDP/7946).
- Docker overlay network traffic (UDP/4789).
- Ping traffic between nodes (ICMP).
- Optional: IP Security (IPsec) for the overlay network (protocol 50). For example, on a node that uses `iptables`, run `iptables -A INPUT -p 50 -j ACCEPT`.

### Between primary and DR nodes

- Secure Copy Protocol (SCP) over TCP/22 to copy the database backup file periodically.
- A bilateral connection is suggested to support fail-back from the DR nodes to the production nodes.

### Privilege Secure for Discovery to the update server

- HTTPS (TCP/443) to `176947481038.dkr.ecr.us-west-2.amazonaws.com`. This host can change without notice.

For the other hosts that an installation needs, see [Proxy and firewall allowlist](./proxy-and-firewall-allowlist.md).

### Privilege Secure for Discovery to EDR cloud platforms

If you use an endpoint detection and response (EDR) integration, allow HTTPS (TCP/443) to the API host of each platform that you configure. The host that you enter as the API base URL in the EDR provider configuration is the host to allow.

| Platform | API base URL |
| --- | --- |
| CrowdStrike Falcon | `https://api.crowdstrike.com` |
| SentinelOne | `https://<console-name>.sentinelone.net` |
| Carbon Black Cloud | `https://defense.conferdeploy.net` |
| Tanium Cloud | `https://<customer-name>-api.cloud.tanium.com` |

If your tenant runs in another region or environment, allow the API host that your platform console shows instead.

For the steps to configure each platform, see the EDR integration pages.
