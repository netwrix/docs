---
description: >-
  Learn how to automate custom-managed certificate signing and deployment for Netwrix Threat Prevention Windows Agents using PowerShell Remoting and Microsoft AD CS. This article provides an example reference automation workflow.
keywords:
  - Netwrix Threat Prevention
  - AD CS
  - certificate signing
  - PowerShell Remoting
  - CSR automation
  - custom-managed certificate
  - Windows agent certificate
  - SIAgentCert.exe
  - example automation
products:
  - threat_prevention
sidebar_label: Automating Custom-Managed Certificate Signing and Deployment for Netwrix Threat Prevention Windows Agents
title: Automating Custom-Managed Certificate Signing and Deployment for Netwrix Threat Prevention Windows Agents
knowledge_article_id: kA0Qk000000XXXXKAA
---

# Automating Custom-Managed Certificate Signing and Deployment for Netwrix Threat Prevention Windows Agents

## Overview

This article describes an **example automation workflow** for completing the Custom-Managed Certificate lifecycle for **Netwrix Threat Prevention Windows Agents** using PowerShell Remoting and Microsoft Active Directory Certificate Services (AD CS).

The provided PowerShell automation demonstrates how certificate operations *can* be performed at scale, including CSR generation, certificate signing, deployment, and enrollment.

> **IMPORTANT:**
> This automation is provided as an **example reference implementation only**. Netwrix Threat Prevention Support does **not** customize, deploy, or validate this automation for customer environments.

The example workflow includes:

- Generating a CSR on each endpoint (private keys remain on the endpoint)
- Submitting CSRs to Microsoft AD CS with an optional certificate template
- Converting issued certificates to PEM format
- Deploying and enrolling signed certificates
- Optionally restarting the **SIWindowsAgent** service
- Producing logs and CSV output for reporting

## Prerequisites

### Permissions and Access

- WinRM / PowerShell Remoting access to each endpoint
- Local administrator rights on each endpoint
- AD CS enrollment permissions for the executing account
- **Manage CA** permissions if using automated approval of pending requests

### Software Requirements

- PowerShell 5.1
- Netwrix Threat Prevention Windows Agent installed on each target endpoint

## Instructions

> **NOTE:**
> You are responsible for reviewing, testing, and adapting this example automation to your organization's certificate authority configuration, security requirements, and change management processes.

### Run at Scale Using a Host List

```powershell
.\example-invoke-ntp-agent-custom-managed-cert.ps1 `
  -ComputerListPath .\agents.txt `
  -CAConfig "CA-SERVER\CA-NAME" `
  -TemplateName "CertificateTemplate" `
  -Credential (Get-Credential)
```

### Run Against Specific Hosts

```powershell
.\example-invoke-ntp-agent-custom-managed-cert.ps1 `
  -ComputerName "HOST01","HOST02" `
  -CAConfig "CA-SERVER\CA-NAME" `
  -TemplateName "CertificateTemplate" `
  -Credential (Get-Credential) `
  -Verbose
```

## What the Script Does

For each target endpoint, the automation:

1. Resolves and validates target hosts
2. Connects via PowerShell Remoting
3. Locates the agent installation
4. Optionally stops the agent service
5. Generates a CSR using `SIAgentCert.exe`
6. Submits the CSR to AD CS
7. Retrieves and converts the issued certificate
8. Deploys `agent-crt.pem` to the agent
9. Enrolls the certificate
10. Optionally restarts the agent service
11. Writes logs and a results CSV

Private keys are never copied off the endpoint.

## Output Locations

### Local Outputs

- Execution log file
- Results CSV
- Per-host CSR copies

### Remote Outputs

- `agent-crt.pem` in the agent `CertsInfo` directory
- Timestamped backups of existing certificate files

## Troubleshooting

### CSR Generation Timeout

Verify permissions and review diagnostic output captured in the log file.

### AD CS Requests Remain Pending

- Increase polling duration
- Verify template configuration
- Enable auto-approval only if permitted

### Manager Address Warning

> **IMPORTANT:**
> Custom-managed certificate workflows should use DNS hostnames or FQDNs, not IP addresses.

### Support Scope Clarification

Netwrix Threat Prevention Support can assist with:

- Agent certificate placement requirements
- Enrollment behavior
- Product-related connectivity issues

Netwrix Threat Prevention Support does **not** assist with:

- Modifying or debugging customer-specific PowerShell automation
- AD CS configuration or template design
- Enterprise certificate lifecycle automation

## Attachments

The following scripts are provided as **example reference implementations only** and are published in the public documentation repository:

- [`example-invoke-ntp-agent-custom-managed-cert.ps1`](./scripts/example-invoke-ntp-agent-custom-managed-cert.ps1)
- [`example-invoke-ntp-agent-custom-managed-cert-run-commands.ps1`](./scripts/example-invoke-ntp-agent-custom-managed-cert-run-commands.ps1)
