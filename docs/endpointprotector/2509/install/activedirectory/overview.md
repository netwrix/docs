---
title: "Active Directory"
description: "Active Directory"
sidebar_position: 30
---

# Active Directory

Netwrix Endpoint Protector Client software is delivered as a Microsoft Installer file ‘msi’, to be
easily deployed using Active Directory, but also using third-party software. Endpoint Protector
comes in two versions: 32-bit and 64-bit targeted installers, as the driver contained within the
application can only be built and installed separately for each of the two operating system types.

Endpoint Protector Client installer has two versions resulting to two different Group Policy objects
being created in the Active Directory; each having set parameters to install each of the two
clients. The two Group Policy objects will then be filtered using Windows Management Instrumentation
filters to be applied only on the computers for which they are created.

The Group Policy objects will be later linked to each Organization Unit on which you want to perform
the deployment. This document presents a basic and functional overview of the deployment strategy of
Endpoint Protector Client software. You can modify and adjust these techniques to his environment.

:::note
This document is provided as an optional reference for Active Directory deployment method
configuration. It is not regularly updated and may not reflect the current state of the product or
its interface. For the most current information, please refer to the official resources provided by
the product vendor.

:::
