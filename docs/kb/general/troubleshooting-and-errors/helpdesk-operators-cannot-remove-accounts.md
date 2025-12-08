---
description: >-
  HelpDesk operators cannot remove accounts by default and receive a
  "Permissions denied" error. This article explains why and shows how to enable
  the permission by adding a registry DWORD and restarting the service.
keywords:
  - HelpDesk operators
  - remove accounts
  - Permissions denied
  - AllowRemoveByHelpdesk
  - registry
  - regedit
  - Netwrix Password Manager
  - Services snap-in
products:
  - general
sidebar_label: HelpDesk operators cannot remove accounts
tags: [troubleshooting-and-errors]
title: "HelpDesk operators cannot remove accounts"
knowledge_article_id: kA00g000000H9XzCAK
---

# HelpDesk operators cannot remove accounts

Helpdesk Operators cannot remove accounts from the list — when they attempt to remove an account, they receive an error message — `Permissions denied`.

![User-added image](./../0-images/ka04u00000116ex_0EM700000005jDw.png)

---

It is by design — by default HelpDesk operators are not allowed to remove accounts. However this permission can be granted.

---

## Resolution

In order to grant the permission, perform the following steps:

1. Run **Registry Editor** (Start - Run, `regedit`).
2. Go to `HKLMSoftware[Wow6432Node]NetwrixPassword Manager` (Wow6432Node only for x64 OS).
3. Create DWORD `AllowRemoveByHelpdesk` with value of `1`.
4. Restart the **Netwrix Password Manager** service via **Services snap-in**.

![User-added image](./../0-images/ka04u00000116ex_0EM700000004xLJ.png)
