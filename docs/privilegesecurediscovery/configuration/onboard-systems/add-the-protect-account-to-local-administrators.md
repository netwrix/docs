---
title: "Add the protect account to local administrators"
description: "Add the protect account to the local Administrators group on each system that you plan to protect with the product."
sidebar_position: 30
---

Privilege Secure for Discovery uses the protect account to change the local Administrators group on a system. The product can't protect a system until the protect account is a member of that group. Add the protect account to the group on every system you plan to protect.

The protect account is the account that you entered under **Protect Mode Account** when you added the domain. It must be a non-interactive account with a complex password. The product treats it as a persistent service account, so protect mode never removes it from a system. See [Service accounts](../../requirements/service-accounts.md).

## Add the account

Use one of the following methods:

- On a Windows domain, deploy the change with a GPO. See [Add the Protect Mode account to Windows endpoints with a GPO](../domains-and-ad/protect-mode-account-gpo.md).
- On a single system, add the account to the local Administrators group manually.

:::warning
Never apply the protect account GPO to domain controllers.
:::
