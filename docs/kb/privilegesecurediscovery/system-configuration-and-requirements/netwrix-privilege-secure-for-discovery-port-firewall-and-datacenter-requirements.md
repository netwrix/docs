---
title: "Port, Firewall, and Datacenter Requirements"
description: "Network, load balancer, SSL certificate, and firewall rule requirements for deploying Netwrix Privilege Secure for Discovery in a datacenter."
sidebar_label: "Port, Firewall, and Datacenter Requirements"
keywords:
- NPS-D
- SecureONE
- Remediant SecureONE
- firewall rules
- ports
- datacenter requirements
- load balancer
- SSL certificate
- NTP
- docker swarm ports
- RADIUS
- WAN accelerator
products:
- privilegesecurediscovery
tags:
- kb
- system-configuration-and-requirements
---

:::warning[Needs dev input: remove before publishing]
TODO: NTP is listed as TCP/123 and RADIUS as TCP/1812, as in the original article. These protocols normally use UDP (UDP/123 and UDP/1812). Confirm which transport the product uses. Evidence: none.

TODO: Confirm that the syslog ports (UDP/514 and TCP/6514) match the forward-logs configuration in 26.09.1. Evidence: none.
:::

# Port, Firewall, and Datacenter Requirements

## Overview

This article lists the network, load balancer, SSL certificate, and firewall requirements for a Netwrix Privilege Secure for Discovery deployment. For the full requirements, see [Ports and firewall requirements](/docs/privilegesecurediscovery/requirements/ports-and-firewall).

## Network Specifications

### IP Addresses

- Each host picks up an IP address through DHCP.
- A static IP address is required for production use.
- The product uses non-routable link-local addresses, also known as Automatic Private IP Addressing (APIPA), for internal Docker networking.

### Production and Test Environments: Load Balancers

- Depending on the HA and DR configuration, one or more load balancers are required in front of each environment, for example one for production, one for QA, and one for development.
- Traffic pattern: Distribute traffic round-robin among all active nodes, which are the nodes with an active heartbeat.
- Heartbeat: Detect whether a node is alive based on the response on port `443`.
- Add header: Configure the load balancer to add the `X-Forwarded-For` header.

### SSL Certificates

- To provide HTTPS connectivity, issue and install an SSL certificate on each server.
- The SSL certificates must have the load-balanced hostname in the Common Name (CN), have it as a Subject Alternative Name (SAN), or be issued as a wildcard certificate.

### WAN Accelerators

WAN accelerators can affect scan times and function. Exclude the nodes from WAN acceleration.

## Firewall Rules

### Protected Computers

- ICMP
- Windows devices:
  - `TCP/445`: Connect and authenticate through SMB to bind a Microsoft Remote Procedure Call (MSRPC) service for scanning, policy enforcement, and provisioning administrative privileges.
  - `TCP/135` and `TCP/139`: Required only for Windows systems that use SMBv1 over NetBIOS, which are Windows versions before Vista and Windows Server versions before 2008. These ports provide the same SMB connection and authentication for the MSRPC service.
- UNIX devices: SSH (`TCP/22`)
- macOS devices: SSH (`TCP/22`)

### Domain Controller

LDAP (`TCP/389`) or LDAPS (`TCP/636`)

### NTP Host

> **NOTE:** In most configurations, NTP is available on the domain controller. In other configurations, the product might need to contact an internet-based NTP host.

Outbound NTP (`TCP/123`)

### RADIUS

> **NOTE:** RADIUS is required only if you use it for second-factor authentication.

RADIUS (`TCP/1812`)

### SAML

HTTPS (`TCP/443`)

### Management Workstations to the UI

- HTTP (`TCP/80`) for web access
- HTTPS (`TCP/443`) for web access
- SSH (`TCP/22`), limited to maintenance activities only

### API Access

Inbound HTTPS (`TCP/443`)

### SIEM Server

- Syslog (`UDP/514` and `TCP/6514`)
- Protocols other than syslog are also supported and might require other ports.

### HA Cluster Nodes

- Cluster management communications (`TCP/2377`)
- Node communication (`TCP/7946` and `UDP/7946`)
- Docker overlay network traffic (`UDP/4789`)
- Ping traffic between nodes (ICMP)
- Secure option for overlay networking (Protocol 50 for IPsec). For example, with iptables:

  ```bash
  iptables -A INPUT -p 50 -j ACCEPT
  ```

### Primary Nodes and DR Nodes

- SCP (`TCP/22`) for periodically copying the database backup file.
- A bilateral connection is recommended to facilitate failback from DR to production nodes.

### Update Server

- The update server URL is `176947481038.dkr.ecr.us-west-2.amazonaws.com`. The URL is subject to change without notice.
- HTTPS (`TCP/443`)

### Endpoint Detection and Response (EDR) Cloud Platforms

HTTPS (`TCP/443`) to EDR cloud platform URLs such as:

- `api.crowdstrike.com`
- `defense.conferdeploy.net`
