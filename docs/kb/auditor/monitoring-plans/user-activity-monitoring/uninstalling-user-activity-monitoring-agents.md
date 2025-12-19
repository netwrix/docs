---
description: >-
  Provides PowerShell functions to remove User Activity monitoring agents
  (Netwrix Auditor User Activity Core Service) that Netwrix Auditor could not
  uninstall automatically. Includes parameter details, function descriptions,
  and usage examples.
keywords:
  - Uninstall
  - User Activity
  - UAVR
  - PowerShell
  - Netwrix Auditor
  - ADV-2022-003
  - uninstall script
  - agents
  - CIDR
  - LDAPQuery
products:
  - auditor
sidebar_label: Uninstalling User Activity Monitoring Agents
tags: []
title: "Uninstalling User Activity Monitoring Agents"
knowledge_article_id: kA04u000000TssMCAS
---

# Uninstalling User Activity Monitoring Agents

The attached PowerShell functions assist customers with removing User Activity monitoring agents (Netwrix Auditor User Activity Core Service) that Netwrix Auditor could not automatically uninstall. You can download the script from our website: https://www.netwrix.com/download/products/KnowledgeBase/Uninstall-NetwrixProduct.ps1

## Prerequisites

- Windows PowerShell 5.1
- If using this script to remotely uninstall agents:
  - You must be authenticated to the system you're running the script on with an account that has administrative privileges across all systems you wish to uninstall the agent from
  - This account must also have the ability to read from Active Directory

## Functions

- `Uninstall-UAVRAgents`  
  Uninstalls all versions of the User Activity data source agent.

- `Uninstall-ADV2022003UAVRAgents`  
  Uninstalls versions of the User Activity data source agent affected by the vulnerability detailed in security advisory ADV-2022-003 (https://security.netwrix.com/Advisories/ADV-2022-003).

- `Uninstall-GenericProduct`  
  Uses built-in `PackageManager` features to uninstall a specified product. Used by the other helper functions.

- `Get-IPRange`  
  An internal function to resolve CIDR notation to an enumeration of IP addresses.

## Parameters

| Name | Description | Example |
|------|-------------|---------|
| **LDAPQuery** | - Used to query Active Directory for Computer Objects.  <br /> - When this is used the CIDR and ComputerNames parameters cannot be used | `(&(ObjectClass=computer)(OperatingSystem=*Windows Server*))` |
| **CIDR** | - Provide a CIDR range to uninstall agents from a range of IP addresses  <br /> - When this is used the LDAPQuery and ComputerNames parameters cannot be used | `10.0.0.0/24` |
| **ComputerNames** | - Provide a string array of computerNames or IP Addresses to uninstall agents from.  <br /> - When this is used the LDAPQuery and CIDR parameters cannot be used | `Server1, Server2, 10.0.0.15`<br /><br />`(Get-Content C:\Temp\ComputerNames.txt)` |
| **Quiet** | Do not show the progress banner | `-Quiet` |
| **NoDNSResolution** | Do not attempt to resolve IP Addresses to DNS Names | `-NoDNSResolution` |
| **ProductName** | Input for a custom product name to be removed for the `Uninstall-GenericProduct` function. Get the name using the `Get-Package` cmdlet | `"Netwrix Auditor User Activity Core Service"` |
| **versionsBefore** | Only uninstall versions prior to the version mentioned | `"10.5"` |
| **DetectOnly** | Do not uninstall the product | `-DetectOnly` |
| **ProviderName** | Specifies a specific provider for packages for discovery and uninstallation | `msi` |

# Examples

### Uninstall agents affected by the vulnerability detailed in ADV-2022-003 on all Windows servers

This example demonstrates how to uninstall versions of the `Netwrix Auditor User Activity Core Service` affected by the vulnerability detailed in ADV-2022-003 from all Windows servers in Active Directory.

```powershell
. .\Uninstall-NetwrixProduct.ps1
Uninstall-ADV2022003UAVRAgents -Verbose
```

### Uninstall agents affected by the vulnerability detailed in ADV-2022-003 from specific target hosts

This example demonstrates how to uninstall vulnerable versions of the `Netwrix Auditor User Activity Core Service` from specified target hosts. In this example, to reduce errors, the IP Address specified (10.0.0.25) will be attempted to be resolved to a DNS before connecting. Resolution of IP addresses to DNS names can be disabled using the `NoDNSResolution` switch.

```powershell
. .\Uninstall-NetwrixProduct.ps1
Uninstall-ADV2022003UAVRAgents -ComputerNames 10.0.0.25, DC1, Server2, Server3
```

### Uninstall from hosts in CIDR Range

This example demonstrates how to uninstall all versions of the `Netwrix Auditor User Activity Core Service` from a CIDR range, and will attempt to resolve the DNS name of each IP address.

```powershell
. .\Uninstall-NetwrixProduct.ps1
Uninstall-UAVRAgents -CIDR 10.0.0.0/24
```

### Uninstall on hosts retrieved from Active Directory with a custom LDAP query

This example demonstrates the ability to use custom LDAP query to select computers from Active Directory to uninstall the `Netwrix Auditor User Activity Core Service` from. The following query will retrieve all computers which belong to the "Technology" department.

```powershell
. .\Uninstall-NetwrixProduct.ps1
Uninstall-UAVRAgents -LDAPQuery "(&(objectClass=computer)(Department=Technology))
```

## Notes

When using IP addresses, either with the CIDR or ComputerNames parameters, an attempt will be made to resolve them using DNS. This substantially reduces errors with remote command execution using PowerShell's `Invoke-Command` cmdlet, as the extra configuration required to enable `Invoke-Command` to work with IP addresses is rarely configured.

To disable IP address to DNS name resolution, use the `-NoDNSResolution` switch.

To export the results to a CSV file the `Export-CSV` command can be used. This can be done by piping the output of `Uninstall-ADV2022003UAVRAgents` or `Uninstall-UAVRAgents` to `Export-CSV`, examples of this are shown below.

```powershell
Uninstall-ADV2022003UAVRAgents | Export-CSV C:\Temp\VulnerableUAVRAgents.csv
Uninstall-UAVRAgents | Export-CSV C:\Temp\UAVRAgents.csv
```
