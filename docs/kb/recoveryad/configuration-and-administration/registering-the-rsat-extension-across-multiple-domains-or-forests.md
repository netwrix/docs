---
description: >-
  Registering the RSAT Extension in Netwrix Identity Recovery only affects
  the forest of the account currently logged into the machine running the
  Configuration Utility. This article explains why registration does not
  carry over to a second domain or forest joined by a trust, and how to
  register it correctly in each one.
keywords:
  - RSAT Extension
  - Recovery Configuration Utility
  - adminContextMenu
  - DisplaySpecifiers
  - Configuration partition
  - Recycle Bin access denied
  - Enterprise Admin
  - runas
  - multi-forest
  - forest trust
  - Netwrix Identity Recovery
products:
  - identityrecovery
sidebar_label: "Registering the RSAT Extension Across Multiple Domains or Forests"
tags:
  - kb
title: "Registering the RSAT Extension Across Multiple Domains or Forests"
---

# Registering the RSAT Extension Across Multiple Domains or Forests

## Overview

The RSAT Extension can register successfully in one domain while a second domain still shows access denied on the Recycle Bin view in Active Directory Users and Computers (ADUC), even though the second domain can reach the Identity Recovery SQL database over the network. This article explains why registration does not carry over to the second domain and how to register the RSAT Extension correctly for it.

## Instructions

The Recovery Configuration Utility's **Register**/**Unregister** button for the RSAT Extension always acts against the Active Directory Configuration partition of whichever forest the currently logged-in user belongs to. It has no field for entering a target domain, server, or forest, and no command-line switch to redirect it. The bind is made using the logged-on user's own security context, with no way to point it elsewhere in a single run.

How to register the RSAT Extension in the second forest depends on whether the two domains share a forest.

### Same Forest

If both domains belong to the same forest (for example, a parent and child domain), the Configuration partition is already shared and replicated forest-wide. Registration only needs to happen once. If the second domain still shows access denied on the Recycle Bin, the problem is not RSAT registration. Check the per-domain account configured on the **Domains** page instead. That account needs Domain Admin privileges natively in the second domain; a trust does not grant it.

### Separate Forests Joined by a Trust

If the two domains are in separate forests, each forest maintains its own independent Configuration partition. A forest trust or external trust lets accounts authenticate across the boundary, but it does not merge or share the Configuration partition. Registering the RSAT Extension in Forest A's Configuration partition has no effect on Forest B.

To register the RSAT Extension in the second forest:

1. Log into the machine running the Configuration Utility with an account that has Write permission on the `adminContextMenu` attribute for `displaySpecifier` objects in Forest B's Configuration partition. For example:
    - An Enterprise Admin of Forest B
    - An account delegated that specific permission (see [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension) for the delegation script)

    > **NOTE:** Domain Admin rights in Forest B are not sufficient on their own, because the Configuration partition sits above the domain level.
2. If the current logon session belongs to Forest A, use one of the following options to run the Configuration Utility under a Forest B account:
    - Relaunch the utility as a different user with **Run as a different user** (`runas`)
    - Run the utility from a machine that is joined to Forest B while logged in with the Forest B account
3. Click **Register** again to meet the requirement for Forest B, since running it once against Forest A does not suffice.

### Confirming Which Scenario Applies

Run `Get-ADForest` from PowerShell against each domain, then compare the results:

- If both return the same forest name, the domains are in the same forest and registration only needs to happen once.
- If the forest names differ, treat them as separate forests and register the RSAT Extension separately in each, following the steps in [Separate Forests Joined by a Trust](#separate-forests-joined-by-a-trust).

### Related Symptom Check

Confirm both the per-domain account and the RSAT Extension registration are correctly configured before troubleshooting further. Access denied on the Recycle Bin view can also be caused by an incomplete per-domain registration on the **Domains** page, independent of whether the RSAT Extension itself is registered. Match the specific symptom below to identify which troubleshooting article to follow next:

- **Recycle Bin access denied in a domain, but the RSAT Extension is already confirmed registered in its forest**
    - This is a per-domain account issue, not an RSAT Extension issue.
    - See the troubleshooting table in [Identifying Service Accounts and Required Permissions](/docs/kb/recoveryad/configuration-and-administration/identifying-service-accounts-and-required-permissions).
- **Recycle Bin access denied because the second domain is in a different forest**
    - This is the scenario covered in [Separate Forests Joined by a Trust](#separate-forests-joined-by-a-trust) above.
- **Configuration Utility shows "Registered" but the Recycle Bin still fails in the second forest**
    - The "Registered" status only reflects the forest of whoever is currently logged in, and can be misleading.
    - See [RSAT Extension Registered Status Is Scoped to the Current Forest](/docs/kb/recoveryad/operations-and-troubleshooting/recycle-bin-access-denied-despite-rsat-extension-registered).
- **Register fails with Access Denied (`0x80070005`) in the current forest**: this is a permission delegation issue, not a multi-forest issue. See [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension).

## Related Links

- [Error: Access Denied (0x80070005) Registering the RSAT Extension](/docs/kb/recoveryad/configuration-and-administration/access_denied_registering_rsat_extension)
- [Identifying Service Accounts and Required Permissions](/docs/kb/recoveryad/configuration-and-administration/identifying-service-accounts-and-required-permissions)
- [RSAT Extension Registered Status Is Scoped to the Current Forest](/docs/kb/recoveryad/operations-and-troubleshooting/recycle-bin-access-denied-despite-rsat-extension-registered)
