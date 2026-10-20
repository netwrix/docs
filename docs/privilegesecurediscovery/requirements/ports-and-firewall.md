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
  - TCP/445. The product connects and authenticates through SMB to bind a Microsoft Remote Procedure Call (MSRPC) service for scanning, policy enforcement, and provisioning administrative privileges. If the Privilege Secure for Discovery servers are in a secure network enclave, configure the firewall to allow connections over the dynamic RPC high ports in use.
  - TCP/135. Required only for Windows systems that use SMBv1 over NetBIOS. This is the MSRPC endpoint mapper. If the servers are in a secure network enclave, allow the dynamic RPC high ports in use.
  - TCP/139. Required only for Windows systems that use SMBv1 over NetBIOS: Windows versions earlier than Vista and Windows Server versions earlier than 2008.
- Linux devices: SSH (TCP/22).

### Privilege Secure for Discovery to domain controllers

- LDAP (TCP/389) or LDAPS (TCP/636).

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

If you use an endpoint detection and response (EDR) integration, allow HTTPS (TCP/443) to the cloud platform URLs, such as `api.crowdstrike.com` and `defense.conferdeploy.net`.
