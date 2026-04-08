---
description: >-
  Learn how to remotely stage Netwrix Threat Prevention Windows Agents in custom-managed certificate mode using PowerShell Remoting. This article provides an example reference deployment workflow.
keywords:
  - Netwrix Threat Prevention
  - agent deployment
  - custom-managed certificate
  - PowerShell Remoting
  - AD module
  - Domain Controller
  - example automation
products:
  - threat_prevention
sidebar_label: Remote Deployment of Threat Prevention Agent in Custom-Managed Certificate Mode
title: Remote Deployment of Threat Prevention Agent in Custom-Managed Certificate Mode
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Remote Deployment of Threat Prevention Agent in Custom-Managed Certificate Mode

## Overview

This article describes an **example automation workflow** for remotely staging the **Netwrix Threat Prevention SI Agent (AD Module)** on one or more target systems using PowerShell Remoting.

The agent is installed in **custom-managed certificate mode** and intentionally left stopped to support "stage now, certify later" deployment workflows.

> **IMPORTANT:**
> This automation is provided as an **example reference implementation only**. Netwrix Threat Prevention Support does **not** customize, deploy, or validate this automation for customer environments.

## Prerequisites

- Local administrator rights on target systems
- PowerShell Remoting enabled and accessible
- Local copy of the **SI Agent.exe** installer
- Enterprise Manager DNS hostname or FQDN (not an IP address)

## Instructions

> **NOTE:**
> You are responsible for reviewing, testing, and adapting this example automation to your organization's security and change management requirements.

### Run Against a Single Target

```powershell
.\example-install-ntp-agent-remote.ps1 `
  -ComputerName "DC01.contoso.com" `
  -LocalInstallerPath "C:\Installers\SI Agent.exe" `
  -EnterpriseManagerHostFqdn "tp-em01.contoso.com" `
  -Credential (Get-Credential)
```

### Run at Scale

```powershell
$cred = Get-Credential
$targets = Get-Content .\targets.txt

.\example-install-ntp-agent-remote.ps1 `
  -ComputerName $targets `
  -LocalInstallerPath "C:\Installers\SI Agent.exe" `
  -EnterpriseManagerHostFqdn "tp-em01.contoso.com" `
  -Credential $cred
```

## What the Script Does

For each target system, the automation:

1. Validates the installer path
2. Establishes a PowerShell Remoting session
3. Copies the installer to the remote host
4. Detects whether the target is a Domain Controller
5. Runs a silent install with:
   - Custom-managed certificates enabled
   - AD Module installed
   - Firewall rules added
   - Agent service not started
6. Writes an installer log on the remote host

## Outputs

### Remote Outputs

- Installer: `C:\Temp\NetwrixNtpAgent\SI Agent.exe`
- Installer log: `C:\Temp\NetwrixNtpAgent\SIAgentInstall.log`

### Console Output

- Per-host progress messages
- Completion status
- Error details if installation fails

## Post-Staging Next Steps

After staging is complete:

1. Deploy a custom-managed agent certificate to the host
2. Start the **SIWindowsAgent** service

> **NOTE:** Certificate issuance is not covered in this article.

## Troubleshooting

### Installer Not Found

Verify the local installer path and file permissions.

### Host Is Not a Domain Controller

The AD Module is supported only on Domain Controllers. The script logs a warning and continues.

### Remoting Session Failures

Verify network connectivity, DNS resolution, firewall rules, and credentials.

### Support Scope Clarification

Netwrix Threat Prevention Support can assist with:

- Agent installation behavior
- Supported installer parameters
- Product-related deployment errors

Netwrix Threat Prevention Support does **not** assist with:

- Modifying or debugging customer-specific PowerShell automation
- Custom deployment frameworks
- Enterprise certificate lifecycle design

## Attachments

The following scripts are provided as **example reference implementations only** and are published in the public documentation repository:

- [`example-install-ntp-agent-remote.ps1`](./scripts/example-install-ntp-agent-remote.ps1)
- [`example-install-ntp-agent-remote-run-commands.ps1`](./scripts/example-install-ntp-agent-remote-run-commands.ps1)
