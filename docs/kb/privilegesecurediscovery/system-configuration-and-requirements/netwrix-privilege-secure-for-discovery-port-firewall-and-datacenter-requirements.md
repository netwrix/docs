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

# Port, Firewall, and Datacenter Requirements

## Overview

This article lists the network, load balancer, SSL certificate, and firewall requirements for a Netwrix Privilege Secure for Discovery deployment. For the full requirements, see [Ports and firewall requirements](/docs/privilegesecurediscovery/requirements/ports-and-firewall).

## Network Specifications

### IP Addresses

- Each host picks up an IP address through DHCP.
- Production use needs a static IP address.
- The product uses non-routable link-local addresses, also known as Automatic Private IP Addressing (APIPA), for internal Docker networking.

### Production and Test Environments: Load Balancers

- Place one or more load balancers in front of each environment, depending on your high availability (HA) design. For example, use one for production, one for QA, and one for development.
- Traffic pattern: Distribute traffic round-robin among all active nodes, which are the nodes with an active heartbeat.
- Heartbeat: Detect whether a node is alive based on the response on port `443`.
- Add header: Configure the load balancer to add the `X-Forwarded-For` header.

### SSL Certificates

- To provide HTTPS connectivity, issue and install an SSL certificate on each server.
- Each SSL certificate must contain the load-balanced hostname in the Common Name (CN) or as a Subject Alternative Name (SAN), or it must be a wildcard certificate.

### WAN Accelerators

WAN accelerators can affect scan times and function. Exclude the nodes from WAN acceleration.

## Firewall Rules

### Protected Computers

- ICMP
- Windows devices:
  - `TCP/445`: Connect over SMB, negotiating the highest SMB version that the system supports, including SMB 3.1.1, and authenticate. The product then uses Microsoft Remote Procedure Call (MSRPC) services over that SMB connection for scanning, policy enforcement, and provisioning administrative privileges.
- Linux devices: SSH (`TCP/22`), with the SFTP subsystem enabled on the SSH server

### Domain Controller

- LDAP (`TCP/389`) or LDAPS (`TCP/636`)
- Kerberos (`TCP/88` and `UDP/88`)

### Time Source

The product doesn't send NTP traffic itself. The host operating system keeps the clock, and Kerberos authentication fails when the clocks differ by more than the allowed skew. Allow outbound NTP (`UDP/123`) from each node to the time source that the host's time service uses.

### RADIUS

> **NOTE:** You need RADIUS only if you use it for second-factor authentication.

RADIUS on the UDP port that you enter in the RADIUS settings. The common port is `UDP/1812`.

### SAML

HTTPS (`TCP/443`)

### Management Workstations to the UI

- HTTPS (`TCP/443`) for web access. The product doesn't serve the web interface over HTTP, so you don't need to open `TCP/80`.
- SSH (`TCP/22`), for maintenance activities only

### API Access

Inbound HTTPS (`TCP/443`)

### SIEM Server

The port and protocol are the ones that your collector listens on and that you set in the Fluentd configuration. Syslog collectors commonly use `UDP/514`, `TCP/514`, or `TCP/6514` (syslog over TLS). Other collectors, such as the Splunk HTTP Event Collector, use their own ports.

### HA Cluster Nodes

- Cluster management communications (`TCP/2377`)
- Node communication (`TCP/7946` and `UDP/7946`)
- Docker overlay network traffic (`UDP/4789`)
- Ping traffic between nodes (ICMP)
- Secure option for overlay networking (Protocol 50 for IPsec). For example, with iptables:

  ```bash
  iptables -A INPUT -p 50 -j ACCEPT
  ```

### Update Server

- The update server URL is `176947481038.dkr.ecr.us-west-2.amazonaws.com`. The URL is subject to change without notice.
- HTTPS (`TCP/443`)

### Endpoint Detection and Response (EDR) Cloud Platforms

HTTPS (`TCP/443`) to EDR cloud platform URLs such as:

- `api.crowdstrike.com`
- `defense.conferdeploy.net`
