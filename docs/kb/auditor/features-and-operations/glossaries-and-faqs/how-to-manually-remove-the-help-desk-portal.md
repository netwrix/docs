---
description: >-
  Shows how to manually remove the Help-Desk Portal installed by NetWrix Account
  Lockout Examiner when uninstall via Programs and Features fails.
keywords:
  - help-desk portal
  - uninstall
  - NetWrix Account Lockout Examiner
  - ALE
  - IIS
  - Windows Installer
  - registry
  - Wow6432Node
products:
  - auditor
sidebar_label: How to manually remove the Help-Desk Portal
tags: []
title: "How to manually remove the Help-Desk Portal"
knowledge_article_id: kA00g000000H9TWCA0
---

# How to manually remove the Help-Desk Portal

I failed to uninstall NetWrix Account Lockout Examiner Help-Desk Portal via **Programs and Features**. Is it possible to remove the portal manually?

---

Yes, for manual uninstallation, do the following.

1. Delete the **Web** folder from the NetWrix Account Lockout Examiner installation directory.
2. Delete all files from `C:WindowsInstaller` (it contains temp files only)
3. Delete the **NetWrix** folder from the **Temp** folder of the user under whose credentials the Help-Desk Portal was installed.
4. Remove the corresponding node from `HKLMSoftware{Wow3264Node}MicrosoftWindowsCurrentVersionUninstall` (Wow6432Node only for x64 OS).
5. Delete the **ALE** virtual directory from the IIS manager.
