---
title: "Requirements to Deploy Virtual Appliance"
description: "Requirements to Deploy Virtual Appliance"
sidebar_position: 30
---

# Requirements to Deploy Virtual Appliance

This section provides the software requirements and represents the default hardware configuration
for the virtual machine where Netwrix Data Classification virtual appliance is going to be deployed.

**NOTE:** The requirements below are sufficient for evaluation purposes only. See the
[Requirements to Install Netwrix Data Classification](/docs/dataclassification/5.6.2/deployment/requirements/requirements_intro.md)
topic for complete information on the requirements for installing Netwrix Data Classification in
production environments.

## Software Requirements

The table below lists the minimum software requirements for the virtual appliance deployment:

| Virtual Environment | Requirements                                                         |
| ------------------- | -------------------------------------------------------------------- |
| VMware              | - VMware server: ESXi 6.0, 6.5, 6.7, 7.0 - Workstation: 11 and 12    |
| Hyper-V Server      | - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 |

**NOTE:** Virtual appliance comes with a 180 day trial license of a Windows server. Upon its
expiration, you will need to apply your own Windows license.

## Hardware Configuration

When deploying Netwrix Data Classification virtual appliance, a pre-configured virtual machine is
created. The table below contains the default hardware configuration of the VM where Netwrix Data
Classification virtual appliance is going to be deployed:

| Parameter          | Value                                              |
| ------------------ | -------------------------------------------------- |
| Common             |                                                    |
| Processor          | 4 cores                                            |
| RAM                | 16 GB                                              |
| HDD                | 1 TB                                               |
| VMware only        |                                                    |
| Total Video Memory | 16 MB                                              |
| Network adapter    | vmxnet3                                            |
| Other              | Check and upgrade VMware Tools during power cycle. |
