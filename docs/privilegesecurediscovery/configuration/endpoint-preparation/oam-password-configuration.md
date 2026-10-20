---
title: "Configure Offline Access Management passwords"
description: "Review the Offline Access Management password settings for a domain, adjust scan frequency, and recover access if the alternate account is locked."
sidebar_position: 90
---

This page covers the Offline Access Management (OAM) password settings in Netwrix Privilege Secure for Discovery. You manage these settings for each domain.

## Open the OAM password settings

1. Go to **Configure** > **Server**.

   ![The Configure Server screen with the list of configured domains](/images/privilegesecure/4.2/discovery/admin/configuration/7098780929815_screen_shot_2022-06-28_at_3.09.40_pm_213x189.webp)

2. Click the chevron next to the domain to expand its configuration details.
3. Find the **Offline Access Management Settings** section at the bottom right of the domain configuration.

   ![The Offline Access Management Settings section of the domain configuration](/images/privilegesecure/4.2/discovery/admin/configuration/7098780929815_screen_shot_2022-08-15_at_12.40.42_pm.webp)

The section includes the following settings:

- **Enforcement by Scanner** > **Frequency**. How often the scanner sets the password.
- **Password Complexity**. The minimum length, digits, uppercase letters, and special characters, and the characters to exclude.
- **Password Rotation**. The schedule in days and the minutes after use.
- **Password Retention**. The number of days that the product retains passwords.

## Adjust the scan frequency

By default, the scanner sets the password on each scan to ensure that the password remains the same as the one stored in Privilege Secure for Discovery. Adjust **Frequency** to reduce how often the scanner does this. A lower frequency speeds up scanning and suits very large organizations.

## Recover access when the alternate administrator account is locked

The alternate administrator OAM account that Privilege Secure for Discovery creates is a local account. The product doesn't use the account to sign in to the system, and it can't lock the account. A local account is typically locked by an administrator or after it exceeds the threshold for failed sign-in attempts.

If you can no longer reach the system with a domain account because the system lost trust or left the domain, and the alternate administrator OAM account is locked, start Windows in Safe Mode. Use Safe Mode to sign in with the disabled built-in Administrator (RID 500) account.
