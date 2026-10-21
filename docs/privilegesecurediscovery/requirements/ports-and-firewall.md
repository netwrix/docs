---
title: "Ports and firewall"
description: "Open the network ports, load balancer settings, and certificates that Privilege Secure for Discovery needs to reach endpoints and services."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that Kerberos needs UDP/88 as well as TCP/88. Evidence: the Windows scan connector opens only a TCP socket to port 88 (windows_rpc/impacket_overrides/kerberosv5.py:59); the Kerberos (SASL) directory bind uses the system Kerberos library, which this repository doesn't show.
:::

This page lists the network ports, load balancer settings, and certificate requirements for Netwrix Privilege Secure for Discovery. Use it to prepare firewalls before you install the product.

## Load balancers

If a cluster runs behind a load balancer, plan one load balancer for each environment, such as production, QA, and development.

- **Traffic pattern**: Distribute traffic round-robin among all active nodes, which are the nodes with an active heartbeat.
- **Heartbeat**: Detect whether a node is alive from its response on port 443.
- **Headers**: Configure the load balancer to add the `X-Forwarded-For` header.

## SSL certificates

- To provide HTTPS connectivity, install an SSL certificate on each Privilege Secure for Discovery server.
- The certificate must contain the load-balanced host name in the common name (CN) or as a subject alternative name (SAN), or it must be a wildcard certificate.

## WAN accelerators

A wide area network (WAN) accelerator can affect scan times and function. Exclude the Privilege Secure for Discovery nodes from WAN acceleration.

## Internal networking

The product uses non-routable link-local addresses, also known as Automatic Private IP Addressing (APIPA), for internal Docker networking. `secureone.sh setup` sets the Docker bridge to `169.254.47.1/24` and creates the `docker_gwbridge` network on `169.254.48.0/24`. Don't use these ranges elsewhere on the host.

## Firewall rules

The following sections list the connections that the firewall must allow. Each heading shows the source and the destination.

### Privilege Secure for Discovery to protected computers

Before the product connects to an endpoint, it pings the endpoint by name and by its last known address. If no echo reply arrives, the product can't reach the system. Allow the following traffic:

- Internet Control Message Protocol (ICMP) echo requests and replies, over IPv4, to every endpoint.
- Windows devices: TCP/445. The product connects over Server Message Block (SMB), negotiates the highest SMB version that the system supports, including SMB 3.1.1, and authenticates. It then uses Microsoft Remote Procedure Call (MSRPC) services over that SMB connection for scanning, policy enforcement, and provisioning administrative privileges. The product needs no other port on Windows endpoints, such as TCP/135 or TCP/139.
- Linux devices: Secure Shell (SSH) on TCP/22. The product also uploads its scripts through the SSH File Transfer Protocol (SFTP), so the SSH server on each endpoint must have the SFTP subsystem enabled. SFTP runs inside the SSH connection and needs no extra port. See [Linux registration prerequisites](../configuration/endpoint-preparation/linux-registration-prerequisites.md).

### Privilege Secure for Discovery to domain controllers

- Lightweight Directory Access Protocol (LDAP) on TCP/389, or LDAP over TLS (LDAPS) on TCP/636.
- Kerberos (TCP/88 and UDP/88).

### Privilege Secure for Discovery to the time source

The product doesn't contact a time server itself. The host operating system keeps the clock, and Kerberos authentication fails when the clocks differ by more than the allowed skew. Allow Network Time Protocol (NTP) traffic from each node to the time source that the host's time service uses:

- Outbound NTP (UDP/123).

### Privilege Secure for Discovery to the RADIUS server

Required only if you use Remote Authentication Dial-In User Service (RADIUS) for second-factor authentication.

- RADIUS on the UDP port that you enter in the RADIUS settings. The common port is UDP/1812. See [RADIUS](../configuration/authentication-and-sso/radius.md).

### Privilege Secure for Discovery to the SAML identity provider

- HTTPS (TCP/443).

### Management workstations to the Privilege Secure for Discovery web interface

- HTTPS (TCP/443) for web access. The product doesn't serve the web interface over HTTP, so you don't need to open TCP/80.
- SSH (TCP/22), limited to maintenance activities.

### Clients to the Privilege Secure for Discovery API

- Inbound HTTPS (TCP/443).

### Privilege Secure for Discovery to the SIEM server

The Fluentd service forwards logs to the collector in its configuration file, so the port and protocol are the ones that you set there. Syslog collectors commonly use UDP/514, TCP/514, or TCP/6514 for syslog over TLS. Other collectors, such as the Splunk HTTP Event Collector, use their own ports. Fluentd receives the container logs on `127.0.0.1:24224` only, so you need no inbound rule for it. See [Forward logs to a syslog server or SIEM](../integrations/siem/forward-logs.md).

### Between clustered nodes

For a cluster, allow the following traffic between the Privilege Secure for Discovery nodes:

- Cluster management communications (TCP/2377).
- Node communication (TCP/7946 and UDP/7946).
- Docker overlay network traffic (UDP/4789).
- Ping traffic between nodes (ICMP).
- Optional: IP Security (IPsec) for the overlay network (protocol 50). For example, on a node that uses `iptables`, run `iptables -A INPUT -p 50 -j ACCEPT`.

The MongoDB and message queue services talk to each other over the overlay network, so you need no separate rules for their ports.

### Privilege Secure for Discovery to the container registry

- HTTPS (TCP/443) to the registry host that the deployment uses. By default, this host is `176947481038.dkr.ecr.us-west-2.amazonaws.com`.

For the other hosts that an installation needs, see [Proxy and firewall allowlist](./proxy-and-firewall-allowlist.md).

### Privilege Secure for Discovery to EDR cloud platforms

If you use an endpoint detection and response (EDR) integration, allow HTTPS (TCP/443) to the API host of each platform that you configure. The product contacts only the host that you enter in **API Base URL** in the EDR provider form.

| Platform | API Base URL |
| --- | --- |
| CrowdStrike Falcon | `https://api.crowdstrike.com` |
| SentinelOne | `https://<console-name>.sentinelone.net` |
| Carbon Black Cloud | `https://defense.conferdeploy.net` |
| Tanium Cloud | `https://<customer-name>-api.cloud.tanium.com` |

If your tenant runs in another region or environment, allow the API host that your platform console shows instead.

For the steps to configure each platform, see the EDR integration pages, such as [CrowdStrike Falcon](../integrations/edr/crowdstrike.md).
