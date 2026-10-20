---
title: "Error: Offline Access Management (OAM) Alternate Administrator Account Is Locked and the Local Administrator (RID 500) Account Is Disabled"
description: "Regain local access to a system that returns the OAM alternate administrator account locked error by signing in to the RID 500 account in Windows Safe Mode."
sidebar_label: "Error: Offline Access Management (OAM) Alternate Administrator Account Is Locked and the Local Administrator (RID 500) Account Is Disabled"
keywords:
- Offline Access Management
- OAM
- alternate administrator account is locked
- local Administrator RID 500 account is disabled
- RID 500
- locked account
- Windows Safe Mode
- domain trust
- NPS-D
- SecureONE
- Remediant SecureONE
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
---

:::warning[Needs dev input: remove before publishing]
TODO: The original article gives one sentence of resolution. Provide the steps to unlock or re-enable the OAM alternate administrator account, how to obtain the RID 500 password from the product for Safe Mode sign-in, and what to do to restore the domain trust. Evidence: none.

TODO: The filename ends mid-word ("...-local-administ.md"). The file was not renamed. Rename it to a complete slug and update inbound links in a separate change. Evidence: filename.
:::

## Symptom

The following error message is displayed:

```text
Offline Access Management (OAM) alternate administrator account is locked and the local Administrator (RID 500) account is disabled
```

The system has either left the domain or lost its trust relationship with the domain.

## Cause

The OAM alternate administrator account is a local account. Netwrix Privilege Secure for Discovery does not use the account to sign in to the system, and it cannot lock the account. Typically, an administrator locked the account, or the account exceeded the threshold of failed sign-in attempts.

## Resolution

Use Windows Safe Mode to sign in with the disabled local Administrator (RID 500) account. For information about how the product manages these accounts, see [Manage offline access to local administrator accounts](/docs/privilegesecurediscovery/admin/systems/offline-access-management).
