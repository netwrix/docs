---
title: "Avoid Conflicts Between GPOs and the Product"
description: "Prevent Group Policy from adding or removing local administrators that Privilege Secure for Discovery manages."
sidebar_position: 50
---

Group Policy objects (GPOs) often push membership of the local Administrators group to endpoints. Netwrix Privilege Secure for Discovery manages that membership too, so the two can conflict if you don't plan for it.

## Symptom

The product and Active Directory repeatedly undo each other's changes:

- The product removes an account from the local Administrators group, and a GPO adds it back, in a loop.
- The product adds a persistent account, such as a service account, and a GPO that uses Restricted Groups removes it again.

## Cause

Privilege Secure for Discovery changes how privileged access is managed. Interactive accounts get access just in time and don't keep standing membership. A GPO that grants standing membership contradicts that model, so the product and the GPO each enforce a different result.

## Fix

1. Reduce the scope of GPOs that manage the local Administrators group. Don't include just-in-time access (JITA) accounts, which are interactive accounts, in the list of accounts that a GPO adds. If you need a GPO for the initial addition of these accounts, such as on a new build, use the GPO option **Apply once and do not reapply**.
2. Don't use Restricted Groups to control the local Administrators group tightly. The product does that. Use Group Policy Preferences to add persistent accounts to the local Administrators group without removing the existing entries.

For an example of a Group Policy Preferences GPO, see [Add the Protect Mode account to Windows endpoints with a GPO](./protect-mode-account-gpo.md).
