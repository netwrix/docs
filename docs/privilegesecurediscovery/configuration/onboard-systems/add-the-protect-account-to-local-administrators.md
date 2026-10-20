---
title: "Add the protect account to local administrators"
description: "Add the protect account to the local Administrators group on each system that you plan to protect with the product."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm whether the product adds the protect account automatically in some configurations. Evidence: none; the earlier documentation says to add it manually or by GPO.
:::

Privilege Secure for Discovery uses the protect account to update the local Administrators group on a system. Add the protect account to that group on every system you plan to protect. The protect account must be a non-interactive account with a complex password.

## Add the account

Use one of the following methods:

- On a Windows domain, deploy the change with a GPO. See [Add the protect mode account to Windows endpoints by GPO](../domains-and-ad/protect-mode-account-gpo.md).
- On a single system, add the account to the local Administrators group manually.

:::warning
Never apply the protect account GPO to domain controllers.
:::
