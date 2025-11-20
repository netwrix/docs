---
title: "How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?"
description: "How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?"
sidebar_position: 30
---

# How can I use the Endpoint Policy ManagerPowerShell module to know which GPOs have any Endpoint Policy Manager data or directives?

Start by installing the Netwrix Endpoint Policy Manager (formerly PolicyPak) PowerShell module,
found in the Endpoint Policy Manager Extras Folder in the DOWNLOAD…

![548_1_gpe-fag-06-img-01](/images/endpointpolicymanager/troubleshooting/powershell/548_1_gpe-fag-06-img-01.webp)

The Endpoint Policy Manager PowerShell modules are installed
to: `C:\Program Files (x86)\PolicyPak\Tools\Modules\PolicyPak.`

Then with a Powershell prompt, browse to the installation directory above and perform the following
commands:

- Import-Module `.\endpointpolicymanager.psd1 `-verbose
- `get-ppGPOs` or
- `get-ppGPOs | export-csv .out1.csv` (for excel readable output.)

An example output can be seen below, which returns all the GPOs and which Endpoint Policy Manager
Client Side Extension data types are inside them.

![548_2_gpe-fag-06-img-02](/images/endpointpolicymanager/troubleshooting/powershell/548_2_gpe-fag-06-img-02.webp)

