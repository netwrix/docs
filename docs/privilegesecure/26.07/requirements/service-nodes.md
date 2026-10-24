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
- Email
- SIEM
- Proxy

The Action, Host Scan, Scheduler, Email, and SIEM installers add the .NET 10 Hosting Bundle if the host doesn't already have it. The Host Scan installer also adds the Visual C++ runtime.

{/* TODO verify: that the 26.07.3 zip includes a remote Email Service installer. */}

{/* TODO verify: the operating system, hardware, and software for remote service hosts. The remote Action, Email, Scheduler, and SIEM bundles don't check for PowerShell 7.6, and it is unknown whether the services need it at runtime. */}

For installation steps, see [Install services on additional servers](/docs/privilegesecure/26.07/install/additional-services.md).

## Proxy server sizing

| Administrators | Concurrent sessions | Memory | CPU cores | Disk (maximum) |
| -------------- | ------------------- | ------ | --------- | -------------- |
| 450 | 150 | 16 GB | 4 | 21 GB per day |
| 900 | 300 | 32 GB | 8 | 42 GB per day |
| 1800 | 600 | 64 GB | 16 | 84 GB per day |

{/* TODO verify: the 26.03 table was titled "Windows/Linux/Docker". Confirm that a Linux or Docker proxy is supported in 26.07 before you state it. */}

## Antivirus exclusions

Exclude the Privilege Secure folders from antivirus and endpoint protection software on every Privilege Secure server, including remote service nodes. The exclusions differ for each service. For the full list, see the knowledge base article [Exclusions for Antivirus (AV) & Endpoint Software](/docs/kb/privilegesecure/installation-configuration-and-licensing/exclusions-for-antivirus-av-endpoint-software).

During installation, the Setup Launcher recommends that you disable antivirus software on the computer.

## Ports

The proxy and remote services need specific ports open to the application server and to users. See [Ports](/docs/privilegesecure/26.07/requirements/ports.md).
