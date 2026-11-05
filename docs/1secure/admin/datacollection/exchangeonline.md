---
title: "Exchange Online Auditing"
description: "Exchange Online Auditing"
sidebar_position: 40
---

# Exchange Online Auditing

The Exchange Online connector appears as **Exchange Online Activity**. In the cloud connect wizard, Microsoft Entra ID is a required service, and Exchange
Online is optional and selected by default.

Netwrix 1Secure accesses the cloud-based Office 365 infrastructure using a dedicated Microsoft
Entra ID application, formerly Azure AD. The Setup script and Register in Azure paths in the wizard
ask for the Directory (tenant) ID, Client ID, and Client Secret of this app. All cloud connectors
require the Office 365 Management APIs permission `ActivityFeed.Read`. See the
[App Registration and Configuration in Microsoft Entra ID](/docs/1secure/configuration/registerconfig/registerconfig.md)
topic for additional information.

## Run the Setup Script

The **Run setup script** connect method runs a PowerShell script that creates the app registration
and configures permissions automatically. You control the credentials. The script requires the
Microsoft.Graph PowerShell module and the Global Administrator or Application Administrator role.

:::warning
The script prints the client secret once. Copy it straight into the field in the wizard. You can't
retrieve it later.
:::
