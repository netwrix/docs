---
description: >-
  Shows how to open firewall ports for Netwrix Auditor using the
  `New-NetFirewallRule` PowerShell command or `netsh` to avoid manual Windows
  Firewall configuration. Includes parameter explanations and example commands
  for both PowerShell and cmd.
keywords:
  - New-NetFirewallRule
  - Windows Firewall
  - netsh
  - PowerShell
  - ports
  - firewall rule
  - Netwrix Auditor
  - open ports
  - localport
products:
  - auditor
sidebar_label: 'New-NetFirewallRule: How to Open Ports Avoiding Ma'
tags: []
title: 'New-NetFirewallRule: How to Open Ports Avoiding Manual Setup'
knowledge_article_id: kA04u00000110wvCAA
---

# New-NetFirewallRule: How to Open Ports Avoiding Manual Setup

## Overview

Netwrix Auditor requires multiple ports to be open to function properly, each collector having its own list of necessary protocols and ports. Going to the Windows Firewall may cause multiple errors, so it is recommended to use the `New-NetFirewallRule` command with PowerShall or Cmd.

## Before You Start

This command requires Run as Admin mode.

## Instructions

### Method 1. For PowerShell

Run `New-NetFirewallRule` with PowerShell.

Command example:

```powershell
New-NetFirewallRule -DisplayName "Allow TCP 12345" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 12345
```

### Parameters

- **DisplayName**: Not required, must be specified in quote marks, `""`
- **Direction**: Either `Inbound` (for inbound rules) or `Outbound` (for outbound rules). If not specified defaults to Inbound
- **Action**: Allow the port to be opened
- **Protocol**: `TCP` or `UDP`
- **LocalPort**: Port(s) to be opened. Can use `[12345]`, `[12345,12346]`, `[12345-123456]` in any combination.

  Example:

  ```
  …LocalPort 80, 1024-2048
  ```

- **Profile**: Optional, can be `Any`, `Domain`, `Private`, `Public` – defaults to `Any`

### Method 2. For Cmd

To run the `New-NetFirewallRule` command with cmd, `netsh` should be used. Aslo, in Server 2008 and above, the special `netsh advfirewall`context exists.

Command example:

```bat
netsh advfirewall firewall add rule name = SQLPort dir = in protocol = tcp action = allow localport = 1433 profile = domain
```

### Parameters

- **name**: Name for a rule must be one-word only
- **dir**: A direction of the connection. `in` for Inbound, `out` for Outbound
- **protocol**: `TCP` or `UDP`
- **localport**: Port(s) to be opened. Can use `[12345]` or `[12345-123456]`. No combination possible.

  Example:

  ```
  …localport= 80
  …localport=1024-2048
  ```

- **Profile**: Can be `any`, `domain`, `private`, `public` – defaults to `any`

## Examples

### For PowerShell

#### On NA Server:

```powershell
New-NetFirewallRule -DisplayName "NA SQL Allow Out TCP 1433" -Direction Outbound -Action Allow -Protocol TCP -LocalPort 1433

New-NetFirewallRule -DisplayName "NA SQL Allow Out UDP 1434" -Direction Outbound -Action Allow -Protocol UDP -LocalPort 1434
    
New-NetFirewallRule -DisplayName "NA SQL Allow Out TCP 1024-65535" -Direction Outbound -Action Allow -Protocol TCP -LocalPort 1024-65535 
```

#### On SQL Server(target):

```powershell
New-NetFirewallRule -DisplayName "NA SQL Allow Inb TCP 1433" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 1433

New-NetFirewallRule -DisplayName "NA SQL Allow Inb UDP 1434" -Direction Inbound -Action Allow -Protocol UDP -LocalPort 1434

New-NetFirewallRule -DisplayName "NA SQL Allow Inb TCP 1024-65535" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 1024-65535 
```

### For Cmd

#### On NA Server:

```bat
netsh advfirewall firewall add rule name = NASQLAllowOutTCP1433 dir = out protocol = tcp action = allow localport = 1433 profile = any

netsh advfirewall firewall add rule name = NASQLAllowOutUDP1434 dir = out protocol = udp action = allow localport = 1434 profile = any

netsh advfirewall firewall add rule name = NASQLAllowOutTCP1024-65535 dir = out protocol = tcp action = allow localport = 1024-65535 profile = any
```

#### On SQL Server(target):

```bat
netsh advfirewall firewall add rule name = NASQLAllowInTCP1433 dir = in protocol = tcp action = allow localport = 1433 profile = any

netsh advfirewall firewall add rule name = NASQLAllowInUDP1434 dir = in protocol = udp action = allow localport = 1434 profile = any

netsh advfirewall firewall add rule name = NASQLAllowInTCP1024-65535 dir = in protocol = tcp action = allow localport = 1024-65535 profile = any
```

## Related articles

- A full list of protocols and ports required for Netwrix Auditor for SQL Server ⸱ v10.6
- [New-NetFirewallRule Syntax and Examples ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule?view=windowsserver2022-ps)
- [Using netsh advfirewall Firewall Instead of netsh firewall to Control Windows Firewall Behavior ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/netsh-advfirewall-firewall-control-firewall-behavior)
