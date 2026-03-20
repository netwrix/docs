---
title: "PowerShell Remoting Setup"
description: "Configuring WinRM and PowerShell Remoting for Local Groups collection"
sidebar_position: 10
---

# PowerShell Remoting Setup

The Local Groups connector uses PowerShell Remoting (WinRM) to enumerate local users and groups on Windows machines.

## Prerequisites

- WinRM must be enabled on each target machine
- A service account with local administrator access or membership in the Remote Management Users group
- Network connectivity from Access Analyzer to target machines on port 5985 (HTTP) or 5986 (HTTPS)

## Enable WinRM on Target Machines

### Single Machine

Run the following command in an elevated PowerShell prompt:

```powershell
Enable-PSRemoting -Force
```

### Domain-Wide via Group Policy

1. Open **Group Policy Management**
2. Navigate to **Computer Configuration** > **Administrative Templates** > **Windows Components** > **Windows Remote Management (WinRM)** > **WinRM Service**
3. Enable **Allow remote server management through WinRM**
4. Set the IPv4/IPv6 filter to `*` or specific IP ranges

## Create a Service Account

1. Navigate to **Service Accounts** in Access Analyzer
2. Click **Add Service Account**
3. Enter a **Name** (for example, `Local Groups - WinRM`)
4. Select **Username/Password** as the type
5. Enter the **Username** in `MACHINE\username` or `DOMAIN\username` format
6. Enter the **Password**
7. Click **Add service account**

## Add Local Groups as a Source

1. Navigate to **Configuration** > **Sources**
2. Click **Add Source** > **IAM Source** > **Local Groups**
3. Select the service account
4. Enter the **Host** (target machine hostname or IP)
5. Enter the **Port** (`5985` for HTTP, `5986` for HTTPS)
6. Click **Test Connection**
7. Click **Create Source**
