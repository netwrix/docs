---
title: "Microsoft Entra ID Tenant Target Requirements"
description: "Microsoft Entra ID Tenant Target Requirements"
sidebar_position: 10
---

# Microsoft Entra ID Tenant Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute scans on Microsoft Entra ID,
formerly Azure Active Directory.

## Auditing Permissions

It is necessary to register Access Analyzer as a web application to the targeted Microsoft Entra ID
in order for Access Analyzer to scan the environment. This generates the Client ID (App ID) and Key
(App Key) needed for the Connection Profile credentials and the Custom Attributes Import Wizard
page.

See the [Microsoft Entra ID Auditing Configuration](/docs/accessanalyzer/12.0/requirements/entraid/entraid/access.md) topic for additional information.

## Entra Roles Permissions

To collect Microsoft Entra roles information from the Microsoft Entra tenant additional permissions
are required to be assigned to the registered application. This includes creating a custom role with
the required resource manager permissions.

See the
[Microsoft Entra Roles Auditing Configuration](/docs/accessanalyzer/12.0/requirements/entraid/entraid/entraroles.md)
topic for additional information.

## Auditing Port Requirements

The following firewall ports are needed by the AzureADInventory and Entra Data Collectors:

- TCP 80 and 443
