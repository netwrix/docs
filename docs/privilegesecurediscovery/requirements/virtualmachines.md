---
title: "Virtual Machines"
description: "Virtual Machines"
sidebar_position: 50
---

# Virtual Machines

Virtual Machines

# Virtual Machines

Privilege Secure can be installed using VMs as opposed to appliances. Below are the requirements for
Virtual Machines (VMs).

## VMware

- CPU – 8 Cores
- RAM – 32 GB (up to 10,000 endpoints), 64GB (10,000 endpoints+)
- Disk – 1 TB
- Network Dedicated NIC – Adapter type Intel E1000 based (E1000E, E1000, Intel PRO/1000\*)

**NOTE:** 16GB of RAM can be used for smaller environment that have under 1,000 endpoints.

This should be setup as a Ubuntu 20.04 LTS Virtual Machine, with a majority of the storage allocated
to the root "/" partition. The Customer Success Team will provide a Ubuntu ISO that can be
downloaded and installed prior to implementation of Privilege Secure.

## Cloud:  AWS, GCP, Azure

AWS is used as an example. For GCP and Azure, use equatable instances (T-shirt Sizes).

m5.2xlarge (up to 10,000 endpoints)

- CPU – 8 Cores
- RAM – 32GB
- Disk – 1 TB
- Network – 1GB
- EBS Bandwidth – 4,750 Mbps

m5.4xlarge 16 64 (over 10,000 endpoints)

- CPU – 16 Cores
- RAM – 64GB
- Disk – 1 TB
- Network – 1GB
- EBS Bandwidth – 4,750 Mbps

This should be setup with an Ubuntu 20.04 LTS server, with a majority of the storage allocated to
the root "/" partition. The Customer Success Team will provide assistance with the implementation of
Privilege Secure.

## SMALL Environment Storage Options

Further information for storage small environments can be found here:

[](https://remediant.zendesk.com/hc/en-us/articles/360059753713-Info-Server-Sizing)[Server Storage Sizing](/docs/privilegesecurediscovery/requirements/serverstoragesizing.md)

**NOTE:** Bandwidth: We roughly estimate 0.3 to 0.5 Mbps per endpoint. As an example for 30,000
endpoints expect to use 50-100GB per month. This is a general guideline and not a hard set value.
Amounts may vary depending on use and other factors.
