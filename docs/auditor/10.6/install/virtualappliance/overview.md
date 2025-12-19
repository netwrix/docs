---
title: "Virtual Deployment Overview"
description: "Virtual Deployment Overview"
sidebar_position: 70
---

# Virtual Deployment Overview

In addition to on-premises deployment, Netwrix Auditor offers the deployment option that can speed
time-to-value by getting you up and running in less than 15 minutes.

Virtual appliance—If you run a Microsoft Hyper-V or VMware vSphere, you can deploy Auditor as a
virtual appliance. Virtual appliance is a VM image file with installed Netwrix Auditor. The image is
also configured to use Microsoft Edge as a default web browser.

Navigate to the Netwrix website at
[Netwrix Auditor Virtual Appliance](https://www.netwrix.com/virtual_appliances.html) and start the
**Virtual Appliance Download Manager**.

Review the following for additional information:

- [Virtual Deployment](#virtual-deployment)
- [Available Configurations](#available-configurations)

## Virtual Deployment

This section explains how to import a virtual machine with installed Auditor to your virtual
environment.

Review the following for additional information:

- [Requirements to Deploy Virtual Appliance](#requirements-to-deploy-virtual-appliance)
- [Import Virtual Machine from Image to VMware](/docs/auditor/10.6/install/virtualappliance/importvmware.md)
- [Import Virtual Machine from Image to Hyper-V ](/docs/auditor/10.6/install/virtualappliance/importhyperv.md)

## Available Configurations

The following virtual appliance configurations are available:

| Guest OS                                                     | SQL Server                                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Generalized Windows Server 2022 (180-day evaluation version) | Microsoft SQL Server 2019 Express Edition, with native Reporting Services installed |
| Generalized Windows Server 2019 (180-day evaluation version) | Microsoft SQL Server 2019 Express Edition, with native Reporting Services installed |

The virtual appliance also contains Access Information Center for Auditor version installed.

### Considerations and Limitations

- Consider Microsoft limits for evaluation versions of Windows Server. If your deployment is
  offline, you have 10 days to complete online activation, otherwise your Windows evaluation license
  expires, and Auditor virtual appliance will shut down every hour. If the OS has Internet access,
  it is granted 180 days trial.

    Provide a valid license key for Windows Server, or go to Microsoft Licensing Activation Center
    to register your license online. Depending on the selected virtual appliance configuration,
    refer to one of the Microsoft articles for additional information:

    - [Windows Server 2022](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2022)
    - [Windows Server 2019](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2019)

    Also, you can register you license by phone. See the following Microsoft article:
    [Microsoft Licensing Activation Centers worldwide telephone numbers](https://www.microsoft.com/en-us/licensing/existing-customer/activation-centers)
    for additional information.

- Microsoft SQL Server Express Edition is only recommended for evaluation, PoC or small deployments.
  For production deployment planning in bigger environments, refer to requirements and
  recommendations listed in the
  [Requirements for SQL Server to Store Audit Data](/docs/auditor/10.6/requirements/sqlserver.md)
  section.

## Requirements to Deploy Virtual Appliance

This section lists supported virtualization platforms and default hardware configuration required
for the virtual machine where Auditor virtual appliance will be deployed.

The requirements below are sufficient for evaluation purposes only. See the
[Requirements](/docs/auditor/10.6/requirements/overview.md) topic for additional
information.

### Supported Platforms

The table below lists supported virtualization platforms for the virtual appliance deployment:

| Virtual Infrastructure | Supported Version                                                                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VMware vSphere         | - VMware server: ESXi 7.0, 6.7, 6.5, 6.0 - VMware workstation: 11 and 12 You can also add the Virtual Appliance to the Content Library of your VMware Cloud on AWS SDDC and then deploy this Virtual Appliance to the cloud-based ESXi host. |
| Microsoft Hyper-V      | - Microsoft Windows Server 2019 - Microsoft Windows Server 2016 - Microsoft Windows Server 2012 R2                                                                                                                                           |

### Virtual Machine Hardware Requirements

When deploying Auditor virtual appliance, a pre-configured virtual machine will be created from the
template. Below is the default hardware configuration for the VM where you plan to deploy the
virtual appliance:

| Parameter          | Value                                              |
| ------------------ | -------------------------------------------------- |
| General            |                                                    |
| Processor          | 4 cores                                            |
| RAM                | 16 GB                                              |
| HDD                | - Local Disk (C:) 100 GB - Data (D:) 300 GB        |
| VMware only        |                                                    |
| Total Video Memory | 16 MB                                              |
| Network adapter    | vmxnet3                                            |
| Other              | Check and upgrade VMware Tools during power cycle. |

## Cloud Deployment

Try playing around with Netwrix Auditor to see how it helps you enable complete visibility with
enhanced cloud deployment options:

- Amazon Marketplace—Discover Netwrix Auditor if you have an active AWS account.

    Consider that this section describes evaluation steps to investigate the Netwrix Auditor
    functionality and it does not contain detailed instructions on how to use and configure Amazon
    services and instances. Refer to [AWS Documentation](https://aws.amazon.com/documentation/) for
    more information.

- Microsoft Azure Marketplace—Discover Netwrix Auditor if you have an active Microsoft account.

You can also add Netwrix Auditor Virtual Appliance to the Content Library of your VMware Cloud on
AWS SDDC and then deploy this Virtual Appliance to the cloud-based ESXi host, following the steps
described in this guide. In this deployment scenario, Netwrix Auditor will be able to work with
other VMs running on that ESXi host.
