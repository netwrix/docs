---
title: "Port, Firewall, and Datacenter Requirements"
description: "Port, Firewall, and Datacenter Requirements"
sidebar_position: 40
---

# Port, Firewall, and Datacenter Requirements

Port, Firewall, and Datacenter Requirements

# Port, Firewall, and Datacenter Requirements

## Physical Installation

These requirements, in this section, only apply to physical appliances. If there will be a Virtual
Appliance used, these requirements do not apply.

Appliance specifications:

- 1 RU / 1U size appliance
- Dell R440 with 2x 960GB SSDs in a hardware RAID-1 configuration, 64GB of RAM
- Ubuntu 20.04 LTS

Cabling/Power requirements:

- Dual 120V power cables (ideally, connected to independent UPSs) at max 550W each
- Included power plug: NEMA 5-15P to C13 Wall Plug, 125 Volt, 15 AMP, 10 Feet (3m)

## Networking specifications

Physical requirements:

The Dell R440 servers come with at least 3 NIC’s on the back of the server.

- Single Gigabit ethernet, plugged into Ethernet Interface #1 (on rear/backplane of the server) for
  Privilege Secure traffic
- Single Gigabit ethernet, plugged into iDRAC Interface (on read/backplane of the server) for iDRAC
  configuration (credentials are unique to each appliance)

IP addresses:

- Physical servers will pick up 2 IP addresses via DHCP. One for iDRAC, one for Privilege Secure.
- Virtual servers will pick up 1 IP addresses via DHCP for Privilege Secure.
- A static IP address is required:

    - Physical servers: a static IP address can be configured for iDRAC
    - Physical and virtual servers: A static IP addresses can be assigned for Privilege Secure use
    - To access servers with no DHCP IP, a KVM (physical) or virtual console (VM) can be connected
      to configure a static IP addresses via the terminal. KVM requirements: 1x VGA and 1x USB
      (keyboard) connectors

- Privilege Secure uses non-routable link-local addresses, also known as Automatic Private IP
  Addressing (APIPA), for internal Docker networking use.

Production/Test environments: Load balancer(s):

- Depending on the specific HA and DR configuration requested, one or more load balancers are
  required to sit in front of each Privilege Secure environment (i.e. one for Production, one for
  QA, one for Dev, etc.)
- Traffic pattern: Round-robin traffic among all active Privilege Secure nodes (i.e. those with an
  active heartbeat)
- Heartbeat: Detect if the Privilege Secure node is alive based on response on port 443 •
- Add header: Configure the load balancer to add the X-Forwarded-For header

SSL certificate(s):

- In order to provide HTTPS connectivity, we recommend issuing and installing an SSL certificate on
  each of the Privilege Secure servers
- The SSL certificates must have the load-balanced hostname 1) in the CN, or 2) as a SAN or 3) be
  issued as a wildcard

WAN Accelerators:

- WAN accelerator can impact scan times and function. It is recommend to exclude Privilege Secure
  nodes from WAN acceleration.

## Firewall Rules

Requirements from Privilege Secure > protected computers

- ICMP
- Windows devices:

    - TCP/445

        - Connect and authentication via SMB to bind a MSRPC service for scanning, policy
          enforcement, and provisioning Administrative privileges.
        - If required, firewall should be configured to allow connections over dynamic RPC highports
          in use. Example would be Privilege Secure server(s) are in a secure network enclave.

    - TCP/135

        - Only required for Windows systems using SMBv1 over NetBIOS
        - MSRPC endpoint mapper
        - If required, firewall should be configured to allow connections over dynamic RPC highports
          in use. . Example would be Privilege Secure server(s) are in a secure network enclave.

    - TCP/139

        - Only required for Windows systems using SMBv1 over NetBIOS

            - Windows prior to Vista
            - Windows Server prior to 2008

    - Connect and authentication via SMB to bind a MSRPC service for scanning, policy enforcement,
      and provisioning Administrative privileges.

- UNIX devices: SSH (TCP/22)
- Mac OS X devices: SSH (TCP/22)

Requirements from Privilege Secure > Domain Controller

- LDAP (TCP/389) or LDAPS (TCP/636)

Requirements from Privilege Secure > NTP host

**NOTE:** In most configurations, NTP will be available on the Domain Controller. In other
configurations, Privilege Secure may need to contact an internet-based NTP host

- Outbound NTP (TCP/123)

Requirements from Privilege Secure > RADIUS

**NOTE:** Only required if RADIUS is used for second-factor authentication

- RADIUS (TCP/1812)

Requirements from Privilege Secure > SAML

- HTTPS (TCP/443)

Requirements from Management workstation(s) > Privilege Secure UI

- HTTP (TCP/80) for web access
- HTTPS (TCP/443) for web access
- SSH (TCP/22) - limited to maintenance activities only

Requirements to access Privilege Secure API

- Inbound HTTPS (TCP/443)

Requirements from Privilege Secure > SIEM server

- SYSLOG (UDP/514 + TCP/6514)
- Protocols other than SYSLOG are also supported / may require other ports

Requirements from Privilege Secure `<>` Privilege Secure (if HA clustered)

- Cluster management communications (TCP/2377)
- Node communication (TCP/7946 and UDP/7946)
- Docker overlay network traffic (UDP/4789)
- Ping traffic between nodes (ICMP)
- Secure option for overlay networking (Protocol 50 for IPsec)

    - IP tables example: iptables -A INPUT -p 50 -j ACCEPT

Requirements from Privilege Secure (primary nodes) `<>` Privilege Secure (DR nodes)

SCP (tcp/22) for copying the database backup file periodically

Bi-lateral connection suggested to facilitate fail-back from DR to Production nodes

Requirements from Privilege Secure > Privilege Secure Update Server

- URL for Privilege Secure Update Server is 176947481038.dkr.ecr.us-west-2.amazonaws.com but is
  subject to change without notice
- HTTPS (TCP/443)

Requirements from Privilege Secure > Endpoint Detection and Response (EDR) Cloud Platforms

- HTTPS (TCP/443) to EDR cloud platform URLs such as:
- api.crowdstrike.com
- defense.conferdeploy.net

.
