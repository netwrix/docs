---
title: "Azure Files Ports and Network Configuration"
description: "Network ports and connectivity requirements for Azure Files monitoring"
sidebar_position: 3
---

# Azure Files Ports and Network Configuration

Network connectivity requirements for Azure Files monitoring with Netwrix Auditor.

## Port Requirements

**Port 443 (HTTPS)** - Required for all Azure communication

**Supported Protocol:** SMB

## Required Outbound Connections

Netwrix Auditor requires outbound HTTPS (port 443) access to:

| Service | FQDN | Purpose |
|---------|------|---------|
| Azure Storage | `*.core.windows.net` | File share and audit log access |
| Azure AD | `*.login.microsoftonline.com` | Authentication |
| Azure Services | `*.azure.com` | General Azure services |

## Identity Sources

Supported identity sources:
- Active Directory Domain Services
- Microsoft Entra Kerberos
