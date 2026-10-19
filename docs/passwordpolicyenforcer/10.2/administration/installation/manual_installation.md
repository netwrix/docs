---
title: "Install Password Policy Enforcer manually (Express setup)"
description: "Install Password Policy Enforcer on a computer with the Express setup, and repeat on every computer that enforces the policy."
sidebar_position: 20
---

# Install Password Policy Enforcer manually (Express setup)

Netwrix recommends manual installation for small to medium networks. Repeat the installation procedure
on every computer that should enforce the password policy.

To install Password Policy Enforcer on a computer:

1. Start the Password Policy Enforcer installer (`PPE10.2.exe`).
2. Read the license agreement. Click **Yes** if you accept all the license terms and conditions.
3. Select **Express**, and then click **Next**.
4. Select the **Password Policy Server** checkbox if it's clear.
5. Click **Next** to install Password Policy Enforcer.
6. Click **Yes** when the installer prompts you to restart the computer.

Password Policy Enforcer has its own password rules, so you may want to disable the Windows password
policy rules before configuring Password Policy Enforcer. See
[Disable Windows Rules](/docs/passwordpolicyenforcer/10.2/administration/installation/disable_windows_rules.md)
for additional information.
