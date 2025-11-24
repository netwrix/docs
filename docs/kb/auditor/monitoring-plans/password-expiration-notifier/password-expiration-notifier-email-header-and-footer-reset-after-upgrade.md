---
description: >-
  After an upgrade, the email header and footer for Netwrix Password Reset may
  revert to the default. This article explains how to restore the disabled
  header/footer by setting the HideEmailAdditionalInfo registry value.
keywords:
  - Password Reset
  - Password Expiration Notifier
  - HideEmailAdditionalInfo
  - registry
  - email header
  - email footer
  - PEN
  - Netwrix Auditor
  - upgrade
products:
  - auditor
  - Password_Reset
sidebar_label: Netwrix Password Reset Email Header and Foot
tags: []
title: "Netwrix Password Reset Email Header and Footer Reset After Upgrade"
knowledge_article_id: kA04u000001116CCAQ
---

# Netwrix Password Reset Email Header and Footer Reset After Upgrade

## Symptoms

- The Netwrix Password Expiration Notifier (PEN) email header and footer were reset after the recent upgrade. [Hide and Disable Header and Footer in PEN Emails](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/hide-and-disable-header-and-footer-in-password-expiration-notifier-emails).
- The **HideEmailAdditionalInfo** key in `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Password Expiration Notifier` is still present.

## Resolution

1. Open Registry Editor on the Netwrix Auditor server host.
2. Navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor`.
3. Right-click the **Netwrix Auditor** hive and click **New**.
4. Select **DWORD (32-bit) Value**.
5. Name the key `HideEmailAdditionalInfo`.
6. Right-click the key and select **Modify**.
7. Set the value data to `1` (Hexadecimal).
8. The next round of emails will be sent without the header and footer.

## Related articles

- [Hide and Disable Header and Footer in PEN Emails](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/hide-and-disable-header-and-footer-in-password-expiration-notifier-emails)
