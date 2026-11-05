---
title: "Microsoft Entra ID Auditing"
description: "Microsoft Entra ID Auditing"
sidebar_position: 20
---

# Microsoft Entra ID Auditing

In the cloud connect wizard, Microsoft Entra ID is a required
service (Users, groups, roles, and directory objects). Exchange Online and SharePoint Online are
optional, and all three are selected by default.

## Connect Methods

The Run setup script and Register in Azure paths both ask for the Directory (tenant) ID, Client ID,
and Client Secret.

- **Run setup script** – Run a PowerShell script that creates the app registration and configures
  permissions automatically. You control the credentials. The script requires the Microsoft.Graph
  PowerShell module and the Global Administrator or Application Administrator role. The script
  prints the client secret once. Copy it straight into the field in the wizard, because you can't
  retrieve it later.

## Required Permissions

The wizard lists the following Microsoft Graph application permissions:

- Directory.Read.All
- AuditLog.Read.All
- Policy.Read.All – Required to collect state-in-time reports for Entra ID
- Sites.Read.All and Sites.ReadWrite.All – Required only when you select SharePoint Online

All cloud connectors require the Office 365 Management APIs permission ActivityFeed.Read.
