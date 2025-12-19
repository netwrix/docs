---
title: "Requirements to Deploy Virtual Appliance"
description: "Requirements to Deploy Virtual Appliance"
sidebar_position: 10
---

# Requirements to Deploy Virtual Appliance

This section provides the software requirements and represents the default hardware configuration
for the virtual machine where Netwrix Data Classification virtual appliance is going to be deployed.
Refer to the following sections for detailed information:

- Software Requirements
- Hardware Configuration

:::note
The requirements below are sufficient for evaluation purposes only. Refer to the
[Requirements to Install Netwrix Data Classification](/docs/dataclassification/5.7/introduction/requirements/overview.md) topic for
complete information on the requirements for installing Netwrix Data Classification in production
environments.
:::


## Software Requirements

The table below lists the minimum software requirements for the virtual appliance deployment:

| Virtual Environment | Requirements                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| VMware              | <ul><li>VMware server: ESXi 6.0, 6.5, 6.7, 7.0</li><li>Workstation: 11 and 12</li></ul>          |
| Hyper-V Server      | <ul><li>Windows server 2019</li><li>Windows Server 2016</li><li>Windows Server 2012 R2</li></ul> |


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
