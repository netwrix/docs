---
title: "Virtual machines"
description: "Review the VMware virtual machine requirements for a Privilege Secure for Discovery deployment that was installed from the ISO image."
sidebar_position: 50
---

:::warning[Needs dev input: remove before publishing]
TODO: The VM table on this page conflicts with the storage tiers on the Sizing page. Reconcile the two.
:::

This page applies to the deprecated ISO appliance on virtual machines. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

An ISO-based installation can run on a VMware virtual machine (VM) instead of dedicated hardware.

## VMware requirements

| Resource | Requirement |
| --- | --- |
| CPU | 8 cores |
| RAM | 32 GB for up to 10,000 endpoints. 64 GB for more than 10,000 endpoints. 16 GB for environments with fewer than 1,000 endpoints. |
| Disk | 1 TB |
| Network | A dedicated network adapter of the Intel E1000 type (E1000E, E1000, or Intel PRO/1000) |

Install the VM with Ubuntu Server from the ISO image, and allocate most of the storage to the root (`/`) partition. Current ISO builds use Ubuntu Server 22.04 LTS. Earlier ISO builds used 20.04 LTS, and the earliest used 18.04 LTS.

:::note
The ISO-based installation is deprecated. Don't use it for new deployments.
:::

## Network bandwidth

Plan for 0.3 to 0.5 Mbps of bandwidth for each endpoint. For example, 30,000 endpoints use about 50 to 100 GB of data each month. This value is a general guideline. Actual usage varies with the environment.
