---
description: >-
  The Recovery Configuration Utility shows "RSAT Extension: Registered" as
  soon as any user registers it once, but that status only reflects the
  forest of whoever ran the registration. This article explains why the
  status label can be misleading in multi-forest environments and how to
  verify what is actually registered.
keywords:
  - RSAT Extension
  - Recovery Configuration Utility
  - adminContextMenu
  - DisplaySpecifiers
  - Configuration partition
  - Recycle Bin access denied
  - multi-forest
  - forest trust
  - Netwrix Identity Recovery
products:
  - identityrecovery
sidebar_label: "Recycle Bin Access Denied Despite RSAT Extension Registered Status"
tags:
  - kb
title: "Recycle Bin Access Denied Despite RSAT Extension Registered Status"
---

# Recycle Bin Access Denied Despite RSAT Extension Registered Status

## Symptom

The Recovery Configuration Utility shows **RSAT Extension: Registered**, but the Recycle Bin view in Active Directory Users and Computers (ADUC) still returns access denied for a domain in a second forest.

## Cause

The **Registered**/**Unregister** label reflects whether the RSAT Extension is registered in the Configuration partition of the forest belonging to whoever last ran the check, not a global status across every forest in the environment. See [Registering the RSAT Extension Across Multiple Domains or Forests](/docs/kb/recoveryad/configuration-and-administration/registering-the-rsat-extension-across-multiple-domains-or-forests) for why registration does not carry over between forests.

The utility performs this status check using the current logged-in user's own security context. As a result, the check has the same limitation as registration itself — it can only see the Configuration partition of the forest that account belongs to. If Forest A's Configuration partition already has the extension registered, the utility reports **Registered** regardless of which machine or domain it is run from, as long as the logged-in account belongs to Forest A. It has no way to detect or report on Forest B's Configuration partition in the same check.

This produces a confusing result in multi-forest environments. An administrator seeing "Registered" assumes the extension is set up everywhere and moves on, but a second forest was not configured.

> **NOTE:** If clicking **Register** in the other forest returns an outright error instead of silently succeeding, that is a separate permission delegation issue. See [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension).

## Resolution

1. Confirm which forest the currently logged-in account belongs to. Run `Get-ADForest` in PowerShell to check.
2. Log into the Configuration Utility machine with an account belonging to the other forest, using **Run as a different user** if needed, then check the status:
    - **Register** available means the extension is not yet registered in that forest
    - **Unregister** available means the extension is already registered in that forest
3. Repeat for each additional forest in the environment before assuming the extension is fully deployed.

> **IMPORTANT:** Do not rely on a single "Registered" status check to confirm coverage across more than one forest. If the utility reports **Registered** for the current forest but the Recycle Bin still fails for a domain confirmed to belong to that same forest, the RSAT Extension itself is not the problem; see [Identifying Service Accounts and Required Permissions](/docs/kb/recoveryad/configuration-and-administration/identifying-service-accounts-and-required-permissions) for the per-domain account that governs Recycle Bin access.

## Related Links

- [Registering the RSAT Extension Across Multiple Domains or Forests](/docs/kb/recoveryad/configuration-and-administration/registering-the-rsat-extension-across-multiple-domains-or-forests)
- [Identifying Service Accounts and Required Permissions](/docs/kb/recoveryad/configuration-and-administration/identifying-service-accounts-and-required-permissions)
- [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension)
