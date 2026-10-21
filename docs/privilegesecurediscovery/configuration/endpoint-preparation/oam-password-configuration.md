---
title: "Configure Offline Access Management passwords"
description: "Set the Offline Access Management password complexity, rotation, retention, and scan frequency for a domain, and recover access if the alternate account is locked."
sidebar_position: 90
---

Netwrix Privilege Secure for Discovery manages the passwords of the local administrator accounts that Offline Access Management (OAM) controls. You set the password rules for each domain. For the policy that decides which accounts the product manages, see [Manage offline access to local administrator accounts](../../admin/systems/offline-access-management.md).

## Prerequisites

- You're a Privilege Secure for Discovery administrator.
- **Offline Access Management** is **Enabled** under **Additional Options** on **Configure** > **Server**. If it's disabled, the OAM settings don't appear in the domain.

## Open the OAM password settings

1. Go to **Configure** > **Server**.
1. Select the chevron next to the domain to expand its settings.
1. Find **Offline Access Management Settings** below **Default Policies**.

   ![The Offline Access Management Settings of a domain with the default values](/images/privilegesecurediscovery/admin/oam-domain-settings.webp)

1. Change the values, and then select **Save** at the bottom of the domain settings.

The settings apply to every system in the domain that OAM manages. The product reads them at the start of each scan, so you don't restart any service.

## Password settings

| Group | Setting | Default | Description |
| --- | --- | --- | --- |
| **Enforcement by Scanner** | **Frequency** | **Every Scan** | How often the scanner enforces OAM on a system. The choices are **Every Scan**, **Daily**, **Weekly**, **Bi-weekly**, and **Monthly**. |
| **Password Complexity** | **Minimum Length** | `12` | The minimum number of characters. |
| **Password Complexity** | **Minimum Digits** | `3` | The minimum number of digits. |
| **Password Complexity** | **Minimum Uppercase** | `3` | The minimum number of uppercase letters. |
| **Password Complexity** | **Minimum Special Characters** | `3` | The minimum number of special characters. |
| **Password Complexity** | **Exclude Characters** | Empty | Characters that the product leaves out of generated passwords. |
| **Password Rotation** | **Scheduled (Days)** | `30` | Days between rotations. |
| **Password Rotation** | **After Use (Minutes)** | `60` | Minutes after a user first reveals the current password before the product rotates it. |
| **Password Retention** | **Retention (Days)** | `90` | Days that the product keeps old passwords in the password history. |

The minimums are lower bounds. The password length is the larger of **Minimum Length** and the sum of the digit, uppercase, and special character minimums. The remaining characters are letters, digits, or special characters that you didn't exclude. For example, with a minimum length of `20` and the other minimums at `3`, each password has 20 characters and at least 3 of each type.

If the settings can't produce a password, for example when you exclude every digit and require at least 2 digits, the rotation fails and the product records an error.

## Adjust the scan frequency

With **Every Scan**, the scanner enforces OAM each time it scans a system. A lower frequency shortens scans and suits large environments. Even with a lower frequency, the scanner enforces OAM early when a password is due for rotation or the alternate account changed.

## Recover access when the alternate administrator account is locked

The alternate administrator account that the product creates is a local account. The product doesn't use the account to sign in, and it can't lock the account. An administrator or a failed sign-in threshold can lock it.

If you can't reach a system with a domain account because it lost trust or left the domain, and the alternate account is locked, start Windows in Safe Mode. In Safe Mode, sign in with the disabled built-in Administrator (RID 500) account.
