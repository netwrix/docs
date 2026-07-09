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
  - Netwrix Recovery for Active Directory
products:
  - recovery-active-directory
sidebar_label: "RSAT Extension Registered Status Is Scoped to the Current Forest"
tags: []
title: "RSAT Extension Registered Status Is Scoped to the Current Forest"
---

# RSAT Extension Registered Status Is Scoped to the Current Forest

## Question

The Recovery Configuration Utility shows **RSAT Extension: Registered**, but the Recycle Bin view in Active Directory Users and Computers (ADUC) still returns access denied for a domain in a second forest. If it already says "Registered," why does it still fail?

## Answer

The **Registered**/**Unregister** label reflects whether the RSAT Extension is registered in the Configuration partition of the forest belonging to whoever last ran the check, not a global status across every forest in the environment. See [Registering the RSAT Extension Across Multiple Domains or Forests](registering-the-rsat-extension-across-multiple-domains-or-forests.md) for why registration does not carry over between forests.

Because the utility binds using the current logged-in user's own security context, the status check has the same limitation as registration itself: it can only see the Configuration partition of the forest that account belongs to. If Forest A's Configuration partition already has the extension registered, the utility reports **Registered** regardless of which machine or domain it is run from, as long as the logged-in account belongs to Forest A. It has no way to detect or report on Forest B's Configuration partition in the same check.

This produces a confusing result in multi-forest environments. An administrator sees "Registered," assumes the extension is set up everywhere, and moves on, while a second forest was never touched.

### How to Verify

1. Confirm which forest the currently logged-in account belongs to. Run `Get-ADForest` in PowerShell to check.
2. Log into the Configuration Utility machine with an account belonging to the other forest, using **Run as a different user** if needed, and check the status again. A status of **Unregister** available (extension not yet registered) versus **Register** available (already registered) reflects that specific forest only.
3. Repeat for each additional forest in the environment before assuming the extension is fully deployed.

Do not rely on a single "Registered" status check to confirm coverage across more than one forest.

## Related Links

- [Registering the RSAT Extension Across Multiple Domains or Forests](registering-the-rsat-extension-across-multiple-domains-or-forests.md)
- [Identifying Identity Recovery Service Accounts and Permissions](identifying-identity-recovery-service-accounts-and-permissions.md)
- [Error: Access Denied (0x80070005) Registering the RSAT Extension](access_denied_registering_rsat_extension.md)
