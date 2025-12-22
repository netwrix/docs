---
title: "Requirements"
description: "Requirements"
sidebar_position: 20
---

# Requirements

Requirements

# Requirements

The purpose of this document is to introduce a new Netwrix Privilege Secure Admin to the relevant
content and instructions for setting up, configuring, and managing Privilege Secure.

This will cover the various implementations available, any physical requirements, required service
accounts, networking, installation, and the management of endpoints.

## Implementation Scenarios

Privilege Secure can be consumed as an 'on-premises' solution. A scaled-down deployment for trial
(PoV) is supported in addition to a full deployment.

### On Prem - Data Center or IaaS

- [Architectue Overview](/docs/privilegesecurediscovery/requirements/architectureoverview.md)

    - [High Availability (HA) and Disaster Recovery (DR) Options](/docs/privilegesecurediscovery/requirements/haanddr.md)

Privilege Secure Deployed on VMWare OR Cloud (Azure, AWS, GCP)

- [Hosting Requirements](#hosting-requirements)
- [Microsoft Active Directory Accounts](#microsoft-active-directory-accounts)
- [Service Account GPOs](#service-account-gpos)
- [Networking & Ports](#networking--ports)
- [Managing Endpoints](#managing-endpoints)

Privilege Secure Deployed on Physical Appliances

- [Hosting Requirements](#hosting-requirements)
- [Service Account GPOs](#service-account-gpos)
- [Networking & Ports](#networking--ports)
- [Managing Endpoints](#managing-endpoints)

\*HA (High Availability and Disaster Recovery are typically only available on a full implementation)

## Hosting Requirements

Privilege Secure (on prem) is only supported when deployed on Ubuntu (20.04). We do not have any
current plans to support it's deployment on RHEL or CentOS.

- Windows, MacOS
- SaaS: Internet Access - API

### Browser Requirements

Privilege Secure requires a Chromium based browser. We recommend managing Privilege Secure via
Chrome or Safari.

### Environment Requirements

Physical Hardware

| Hardware |                                                                                  |
| -------- | -------------------------------------------------------------------------------- |
| CPU      | 8 Cores                                                                          |
| RAM      | 32 GB (up to 10K), 64 GB (10K+)                                                  |
| Disk     | 1 TB                                                                             |
| Network  | Dedicated NIC; Adapter type: Intel E1000 based (E1000E, E1000, Intel PRO/1000\*) |

Cloud and VMs

AWS is used as an example. For GCP and Azure, use equatable instances (T-shirt Sizes).

Up to 10k Endpoints

| m5.2xlarge (Up to 10k endpoints) |          |
| -------------------------------- | -------- |
| CPU                              | 8 Coress |
| RAM                              | 32 GB    |
| Disk                             | 1 TB     |
| Network                          | 1 GB     |
| EBS Bandwidth (\*\*) (Mbps)      | 4,750    |

10k+ Endpoints

| m5.4xlarge 16 64 (10K+ endpoints) |           |
| --------------------------------- | --------- |
| CPU                               | 16 Coress |
| RAM                               | 64 GB     |
| Disk                              | 1 TB      |
| Network                           | 1 GB      |
| EBS Bandwidth (\*\*) (Mbps)       | 4,750     |

Hardware requirements can vary greatly. We recommend scheduling a specific call to go over the
available options in detail. Example:
[PowerEdge R440](https://www.dell.com/support/home/en-us/product-support/product/poweredge-r440/overview).
Ubuntu certified hardware can be found at the link below. This will provide a list of certified
servers that can be used with Privilege Secure, pending sizing as detailed above:
[https://ubuntu.com/certified/servers](https://ubuntu.com/certified/servers)

Saas

Every SaaS customer will need to host the SaaS Sensor. The requirements associated as far follows:

| Hardware |         |
| -------- | ------- |
| CPU      | 2 Cores |
| RAM      | 4 GB    |
| Disk     | 100 GB  |

Smaller Environments

| Smaller Environments (`<1K Endpoints>`) |                       |
| --------------------------------------- | --------------------- |
| Endpoints                               | Recommended Node Size |
| >500                                    | 250 GB, 16 GB Ram     |
| 500 - 1000                              | 100 GB                |

**NOTE:** For bandwidth, roughly estimate 0.3 to 0.5 Mbps per endpoint. As an example for 30K
endpoints expect to use 50-100GB a month. This is a general guideline and not a hard set value.
Amounts may vary depending on use and other factors.

## Microsoft Active Directory Accounts

### Service Accounts

Privilege Secure requires configuring 3 service accounts to function properly. These **must** be
configured as service accounts to disallow interactive logon and be set with complex passwords.

- LDAP Bind Account – Used to read computers, users and groups from AD.
- Scan Account – Used to read computer users, groups and configuration

    - The Scan account requires a GPO to update Windows machines to enumerate the local
      administrators group.

- Protect Account – Used to manipulate user privileges on computers.

    - The Protect account requires a GPO to add it to the local administrators group on a Windows
      machine.

**All** accounts are required for configuring the domain to be scanned and protected within
Privilege Secure. More information can be found here:
[Service Accounts](/docs/privilegesecurediscovery/requirements/technicalpreparation/serviceaccounts.md)

**NOTE:** We require a static DC to ensure S1 can correctly detect and account for changes made to
Groups, OUs, Users, etc. A load balanced connection will cause group updates to not be recognized
correctly.

### Service Account GPOs

**CAUTION:** Do not apply the GPOs to a Domain Controller. This will have negative downstream
impact.

In order forPrivilege Secure to properly gather the list of local administrators, the Privilege
Secure service account either needs to be a local administrator of the destination system OR the
remote system needs to be configured with the proper permissions to allow the Privilege Secure
service account to have the ability to remotely read the local administrative group. 

Privilege SecureE requires two GPOs to be created for managing computers successfully. The method
required uses Group Policy Preferences (GPP). There are separate guides depending on the Domain
Controller version. 

- 2008-2012 Domain Controllers –
  [Scan GPO Guide (Server 2012 or 2008 Domain Controllers)](/docs/privilegesecurediscovery/requirements/technicalpreparation/scangposerver2012or2008dcs.md)
- 2016+ Domain Controllers –
  [Scan GPO Guide (Server 2016+ Domain Controllers)](/docs/privilegesecurediscovery/requirements/technicalpreparation/scangposerver2016+dcs.md)

Microsoft by default (Windows 2016 & Windows 10 Creators Edition or later) restricted the ability to
remotely enumerate members of local groups including the local Administrators group. Older operating
systems _can_ be configured with the same functionality. That applies to these OSs: 

- Windows 10, version 1607 and later
- Windows 10, version 1511 with KB 4103198 installed
- Windows 10, version 1507 with KB 4012606 installed
- Windows 8.1 with KB 4102219 installed
- Windows 7 with KB 4012218 installed
- Windows Server 2016
- Windows Server 2012 R2 with KB 4012219 installed
- Windows Server 2012 with KB 4012220 installed
- Windows Server 2008 R2 with KB 4012218 installed

## Networking & Ports

ICMP must be enabled on all endpoints that will be managed by Privilege Secure. WhenPrivilege Secure
processes a request to scan a system, it will ping the computer before proceeding with the scan.

- [On Prem Installation](#on-prem-installation)

- Management/Administration:
    - HTTPS (TCP/443) for Web Access
    - SSH (TCP/22) limited to maintenance activities only
- Windows Devices:
    - TCP/445
    - TCP/135 (Windows Legacy Systems)
    - TCP/139 (Windows Legacy Systems)
- Unix Devices:
    - SSH (TCP/22)
- Mac OS X Devices:
    - SSH (TCP/22)
- Domain Controllers:
    - LDAP (TCP/389)
    - LDAPS (TCP/636)
- NTP Hosts:
    - Outbound NTP (TCP/123)
- RADIUS:
    - Only required if RADIUS is used for 2-factor authentication.
    - RADIUS (TCP/1812)
- SAML:
    - HTTPS (TCP/443)
- API:
    - Inbound HTTPS (TCP/443)
- SIEM
    - SYSLOG (UDP/514 + TCP/6514)
    - Protocols other than SYSLOG are also support / may require other ports.
- OS Maintenance:
    - HTTPS (TCP/443)
    - URL for S1 Update Server: `176947481038.dkr.ecr.us-west-2.amazonaws.com` (subject to change
      without notice)
- Endpoint Detection and Response (EDR) Cloud Platforms:

    - HTTPS (TCP/443) to EDR cloud platforms URLs such as:
        - `api.crowdstrike.com`
        - `defense.conferdeploy.net`

- Management/Administration:
    - HTTPS (TCP/443) for Web Access
    - SSH (TCP/22) limited to maintenance activities only
    - API: Inbound HTTPS (TCP/443)

## On Prem Installation

Currently installations are handled by the Remediant Customer Success team. We typically schedule a
3 hour session for a complete setup, installation, and initial configuration of the Privilege Secure
application.

## Managing Endpoints

Bulk Actions

- Manage up to 1,000 (currently, more to come in a future release) systems at once within the UI.
- Operations currently supported: JITA, Scan Mode, Protect Mode, Scan Systems, Set EDR Config, Set
  OAM, Set Accounts Persistent, Add/Update Account, Remove Account
- More information and instruction can be found here:
  [Bulk Actions](/docs/privilegesecurediscovery/administration/systemmanagement/bulkactions.md)

QuickStart

- The QuickStart script is used to generate Privilege Secure data for deploying protect mode (both
  push and pull into/from Privilege Secure).

    - Requires Python (3.9.6) and PIP.

- Historical solution for managing endpoints en masse.
- Supports JITA, Scan Mode, Protect Mode, OAM, EDR, Linux Registration, etc. More information can be
  found here:
  [QuickStart Advanced Fields](/docs/privilegesecurediscovery/administration/configuration/advancedfields.md)

API

- API First

    - Any individual action in the UI can be accomplished via the API.

- The Privilege Secure API documentation can be found here:
  [API Key Management](/docs/privilegesecurediscovery/integrations/api/apikeymanagement.md),
  [API Key Revocation](/docs/privilegesecurediscovery/integrations/api/apikeyrevocation.md).
  Additional information on the Advanced API is available
  here:[Advanced API Reference](/docs/privilegesecurediscovery/integrations/api/advancedapireference.md)

### Supported endpoint OS versions

Linux Distribution

| Linux Distribution              | Tested        | Test Results | Other Notes                                                        |
| ------------------------------- | ------------- | ------------ | ------------------------------------------------------------------ |
| Red Hat Enterprise Linux (HVM)  | Remediant AWS | Success      |                                                                    |
| Red Hat Enterprise Linux (RHEL) | Remediant AWS | Success      | Python 2.7 not installed by default; requires install and symlink. |
| SUSE Linux Enterprise Server    | Remediant AWS | Success      |                                                                    |
| Ubuntu Server 14.04 LTS         | Remediant AWS | Success      |                                                                    |
| Ubuntu 16.04 LTS - Xenial (HVM) | Remediant AWS | Success      |                                                                    |
| Ubuntu 18 LTS                   | Remediant AWS | Success      |                                                                    |
| Ubuntu 20.04 LTS                | Remediant AWS | Success      |                                                                    |
| Debain, (10, 11)                | Remediant AWS | Success      |                                                                    |
| AWS Linux 1&2                   | Remediant AWS | Success      |                                                                    |

Windows

| Windows                        | Tested Via | Test Results |
| ------------------------------ | ---------- | ------------ |
| Windows XP and onwards         | AWS        | Success      |
| Windows Server 2003 and onward | AWS        | Success      |

## EDR

Remediant has several integrations with EDR solutions to gain comprehensive, actionable insights
into privileged session activities. Our joint solutions combine the power of Privilege Secure's
privileged access security enabling organizations to implement Zero Trust security - without an
additional PAM agent.

More information can be found below:

- [Carbon Black](/docs/privilegesecurediscovery/integrations/edr/carbonblack.md)
- [CrowdStrike](/docs/privilegesecurediscovery/integrations/edr/crowdstrike.md)
- [SentinelOne](/docs/privilegesecurediscovery/integrations/edr/sentinelone.md)

### Additional Resources

- [Architectue Overview](/docs/privilegesecurediscovery/requirements/architectureoverview.md)
- [Port, Firewall, and Datacenter Requirements](/docs/privilegesecurediscovery/requirements/portsandfirewalls.md)
- [High Availability (HA) and Disaster Recovery (DR) Options](/docs/privilegesecurediscovery/requirements/haanddr.md)
