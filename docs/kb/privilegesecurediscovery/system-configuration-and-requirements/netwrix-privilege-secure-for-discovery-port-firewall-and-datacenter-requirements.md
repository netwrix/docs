---
description: 'Hardware, network, port, and datacenter requirements for Netwrix Privilege Secure Discovery physical appliances, including cabling, IP addressing, load balancer, SSL, and firewall rules.'
keywords:
- Netwrix Privilege Secure Discovery
- firewall
- ports
- datacenter
- appliance
- networking
- HA
- load balancer
- SSL
- NTP
products:
- privilege-secure-discovery
sfdc_migration:
  article_id: ka04u00000116XwAAI
  article_owner: Anna Evdokimova-Glinskaia
  article_reviewer: null
  article_sme: null
  created_date: '2023-07-07'
  knowledge_article_id: kA04u00000110ohCAA
  last_modified_date: '2023-07-07'
  original_categories:
  - privilege_secure_discovery
  visibility: public
sidebar_label: Netwrix Privilege Secure for Discovery Port/Firewall and Datacenter Requirements
tags: []
title: "Netwrix Privilege Secure for Discovery Port/Firewall and Datacenter Requirements"
---

# Netwrix Privilege Secure for Discovery Port/Firewall and Datacenter Requirements

Formerly Netwrix Privilege Secure Discovery

## Physical Installation

These requirements, in this section, only apply to physical appliances. If there will be a Virtual Appliance used, these requirements do not apply.

### Appliance Specifications

- 1 RU / 1U size appliance
- Dell R440 with 2x 960GB SSDs in a hardware RAID-1 configuration, 64GB of RAM
- Ubuntu 18.04.5 LTS

### Cabling/Power Requirements

- Dual 120V power cables (ideally, connected to independent UPSs) at max 550W each
- Included power plug: `NEMA 5-15P to C13 Wall Plug, 125 Volt, 15 AMP, 10 Feet (3m)`

## Networking specifications

### Physical Requirements

The Dell R440 servers come with at least 3 NIC’s on the back of the serve

- Single Gigabit ethernet, plugged into Ethernet Interface #1 (on rear/backplane of the server) for Netwrix Privilege Secure Discovery traffic
- Single Gigabit ethernet, plugged into iDRAC Interface (on read/backplane of the server) for iDRAC configuration (credentials are unique to each appliance)

### IP Addresses

- Physical servers will pick up 2 IP addresses via DHCP. One for iDRAC, one for Netwrix Privilege Secure Discovery
- Virtual servers will pick up 1 IP addresses via DHCP for Netwrix Privilege Secure Discovery
- A static IP address is required:
  - Physical servers: a static IP address can be configured for iDRAC
  - Physical and virtual servers: A static IP addresses can be assigned for Netwrix Privilege Secure Discovery use
  - To access servers with no DHCP IP, a KVM (physical) or virtual console (VM) can be connected to configure a static IP addresses via the terminal. KVM requirements: 1x VGA and 1x USB (keyboard) connectors
- Netwrix Privilege Secure Discovery uses non-routable link-local addresses, also known as Automatic Private IP Addressing (APIPA), for internalDocker networking use

### Production/Test Environments: Load Balancer(s)

- Depending on the specific HA and DR configuration requested, one or more load balancers are required to sit in front of each Netwrix Privilege Secure Discovery environment (i.e. one for Production, one for QA, one for Dev, etc.)
- Traffic pattern: Round-robin traffic among all active Netwrix Privilege Secure Discovery nodes (i.e. those with an active heartbeat)
- Heartbeat: Detect if the Netwrix Privilege Secure Discovery node is alive based on response on port `443`
- Add header: Configure the load balancer to add the `X-Forwarded-For` header

### SSL Certificate(s)

- In order to provide HTTPS connectivity, we recommend issuing and installing an SSL certificate on each of the Netwrix Privilege Secure Discovery servers
- The SSL certificates must have the load-balanced hostname 1) in the CN, or 2) as a SAN or 3) be issued as a wildcard

### WAN Accelerators

WAN accelerator can impact scan times and function. It is recommend to exclude Netwrix Privilege Secure Discovery nodes from WAN acceleration.

## Firewall Rules

### Protected Computers

- ICMP
- Windows devices:
  - TCP/445
    - Connect and authentication via SMB to bind a MSRPC service for scanning, policy enforcement, and provisioning Administrative privileges
  - TCP/135 and TCP/139
    - Only required for Windows systems using SMBv1 over NetBIOS
      - Windows prior to Vista
      - Windows Server prior to 2008
    - Connect and authentication via SMB to bind a MSRPC service for scanning, policy enforcement, and provisioning Administrative privileges.
  -  
- UNIX devices: SSH (`TCP/22`)
- Mac OS X devices: SSH (`TCP/22`)

### Domain Controller

LDAP (`TCP/389`) or LDAPS (`TCP/636`)

### NTP Host

- Note: In most configurations, NTP will be available on the Domain Controller. In other configurations, Netwrix Privilege Secure Discovery may need to contact an internet-based NTP host
- Outbound NTP (`TCP/123`)

### RADIUS

- Note: Only required if RADIUS is used for second-factor authentication
- RADIUS (`TCP/1812`)

### SAML

HTTPS (`TCP/443`)

### Requirements from Management Workstation(s). Netwrix Privilege Secure Discovery UI

- HTTP (`TCP/80`) for web access
- HTTPS (`TCP/443`) for web access
- SSH (`TCP/22`) - limited to maintenance activities only

### Requirements to Access Netwrix Privilege Secure Discovery API

Inbound HTTPS (`TCP/443`)

### SIEM Server

- SYSLOG (`UDP/514 + TCP/6514`)
- Protocols other than SYSLOG are also supported / may require other ports

### Netwrix Privilege Secure Discovery (if HA Clustered)

- Cluster management communications (`TCP/2377`)
- Node communication (`TCP/7946` and `UDP/7946`)
- Docker overlay network traffic (`UDP/4789`)
- Ping traffic between nodes (ICMP)
- Secure option for overlay networking (Protocol 50 for IPsec)
  - IP tables example: `iptables -A INPUT -p 50 -j ACCEPT`

### Netwrix Privilege Secure Discovery (Primary Nodes). Netwrix Privilege Secure Discovery (DR Nodes)

- SCP (`tcp/22`) for copying the database backup file periodically
- Bi-lateral connection suggested to facilitate fail-back from DR to Production nodes

### Netwrix Privilege Secure Discovery Update Server

- URL for Netwrix Privilege Secure Discovery Update Server is 176947481038.dkr.ecr.us-west-2.amazonaws.com but is subject to change without notice
- HTTPS (`TCP/443`)

### Endpoint Detection and Response (EDR) Cloud Platforms

HTTPS (`TCP/443`) to EDR cloud platform URLs such as:"

- api.crowdstrike.com
- defense.conferdeploy.net