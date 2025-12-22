---
title: "Microsoft Entra ID Tenant Target Requirements"
description: "Microsoft Entra ID Tenant Target Requirements"
sidebar_position: 10
---

# Microsoft Entra ID Tenant Target Requirements

Netwrix Enterprise Auditor can execute scans on Microsoft Entra ID, formerly Azure Active Directory.

## Auditing Permissions

It is necessary to register Enterprise Auditor as a web application to the targeted Microsoft Entra
ID in order for Enterprise Auditor to scan the environment. This generates the Client ID (App ID)
and Key (App Key) needed for the Connection Profile credentials and the Custom Attributes Import
Wizard page.

See the
[Microsoft Entra ID Auditing Configuration](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md)
topic for additional information.

## Auditing Port Requirements

The following firewall ports are needed by the AzureADInventory Data Collector:

- TCP 80 and 443
