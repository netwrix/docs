---
title: "Additional service node and proxy server requirements"
description: "Check what remote service and proxy hosts need, including proxy sizing and the antivirus exclusions to set on every Privilege Secure server."
sidebar_position: 40
---

# Additional service node and proxy server requirements

You can run some Netwrix Privilege Secure for Access Management (Privilege Secure) services on hosts other than the application server. This adds scale, redundancy, or network segmentation. Each remote host is a service node.

## Services you can run remotely

These services run on remote hosts:

- Action
- Host Scan
- Scheduler
- SIEM
- Proxy

The product zip file has no standalone Email service installer, so the Email service runs only on the application server. The Action, Scheduler, and SIEM installers add the .NET 10 Hosting Bundle and the Visual C++ runtime if the host doesn't already have them. The Host Scan installer is an `.msi` file and relies on the Action Service, which must be installed first.

The Action and Host Scan services include the PowerShell 7.6 engine, so those hosts need no separate PowerShell installation.

Remote service hosts run Windows Server 2016 through Windows Server 2025.

{/* TODO verify: the minimum hardware for remote service hosts. Release code states no hardware requirement. */}

For installation steps, see [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

## Proxy server sizing

| Administrators | Concurrent sessions | Memory | CPU cores | Disk (maximum) |
| -------------- | ------------------- | ------ | --------- | -------------- |
| 450 | 150 | 16 GB | 4 | 21 GB per day |
| 900 | 300 | 32 GB | 8 | 42 GB per day |
| 1800 | 600 | 64 GB | 16 | 84 GB per day |

{/* TODO verify: whether the Proxy Service is supported on Linux or in Docker in 26.07. */}

## Antivirus exclusions

Exclude the Privilege Secure folders from antivirus and endpoint protection software on every Privilege Secure server, including remote service nodes. The exclusions differ for each service. For the full list, see the knowledge base article [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software).

During installation, the Setup Launcher recommends that you disable antivirus software on the computer.

## Ports

The proxy and remote services need specific ports open to the application server and to users. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).
