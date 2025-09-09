---
title: "Virtual Appliance Formats"
description: "Virtual Appliance Formats"
sidebar_position: 10
---

# Virtual Appliance Formats

The Endpoint Protector Virtual Appliance is available in different formats and for various
platforms. The table below provides a list of supported virtual environments, versions, and main
formats.

## Virtual Appliance Compatibility

In addition to the Virtual Environments mentioned above, the Endpoint Protector Virtual Appliance
can also be run on older versions of the virtualization software. This makes testing and
implementation as easy as possible. Additional information can be found in the following topics.

| Supported Virtual Environments      | Version     | .OVF | .OVA | .VHD |
| ----------------------------------- | ----------- | ---- | ---- | ---- |
| VMware Player                       | 7.1.0       | X    | X    |      |
| VMware Workstation                  | 11.1.0      | X    | X    |      |
| Oracle VM VirtualBox                | 5.0.28      | X    | X    |      |
| VMware vSphere (ESXi)               | 6.0.0       | X    | X    |      |
| VMware Fusion Professional          | 7.1.3       | X    | X    |      |
| Hyper-V Manager Windows Server 2016 | 10.0.14393. |      |      | X    |
| Parallels Desktop                   | 0           |      |      |      |
| Citrix XenCenter                    | 11.1.3      |      |      |      |

:::note
The most commonly used format is OVF (Open Virtualization Format) as it is compatible with
the majority of the virtualization software.
:::


## Format Supported by Virtualization Software

In addition to the virtualization software listed in the previous table, these formats are also
supported by the following:

- OVF and OVA

    - VMware Workstation 11.1
    - VMware Player 5.0 (or higher)
    - VMware Fusion 7.1.2
    - VMware ESXi 5.1 (or higher)
    - Oracle VM VirtualBox
    - Citrix XenCenter 6.2

- VHD

    - Microsoft Hyper-V 6.1.7601.17514
    - Microsoft Hyper-V 6.3.9600.16384