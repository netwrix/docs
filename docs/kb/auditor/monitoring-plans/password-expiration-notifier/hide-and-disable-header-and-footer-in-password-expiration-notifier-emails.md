---
description: >-
  Instructions to remove or disable the header and footer that Netwrix Password
  Reset sends in expiration notification emails by setting a registry DWORD.
keywords:
  - Netwrix Password Reset
  - Password Expiration Notifier
  - HideEmailAdditionalInfo
  - registry
  - HKEY_LOCAL_MACHINE
  - header
  - footer
  - email notifications
  - disable
products:
  - auditor
sidebar_label: Hide and Disable Header and Footer in Netwrix Password Reset Emails
tags: []
title: "Hide and Disable Header and Footer in Netwrix Password Reset Emails"
knowledge_article_id: kA00g000000H9eVCAS
---

# Hide and Disable Header and Footer in Netwrix Password Reset Emails

## Scenario

You'd like to remove the Netwrix header and footer from emails sent to users and managers. By default, Netwrix Password Reset emails include a branded header and footer. Users may get confused by the branding, or think the email was sent by a third party and is a phishing attempt.

## Resolution

> **IMPORTANT:** In some cases both header and footer reset after your Netwrix Auditor instance has been upgraded to v10.6. For additional information, refer to the following article: [Netwrix Password Reset Email Header and Footer Reset After Upgrade](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/password-expiration-notifier-email-header-and-footer-reset-after-upgrade)

1. Open Registry Editor on the Netwrix Auditor Server host.
2. Navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Netwrix Auditor\Password Expiration Notifier`.
3. Right-click the **Password Expiration Notifier** hive and click **New**.
4. Select **DWORD (32-bit) Value**.

   ![New DWORD (32-bit) Value]./../0-images/ka04u00000117kD_0EM4u000008MHts.png)

5. Name the key `HideEmailAdditionalInfo`.
6. Right-click the key and select **Modify**.
7. Set the value data to `1` (Hexadecimal).

   ![Modify DWORD value to 1]./../0-images/ka04u00000117kD_0EM4u000008MHuC.png)

8. The next round of emails will be sent without the header and footer.

> **NOTE:** If you'd like to re-enable the header and footer, simply change the value data to `0`.

To further customize Netwrix Password Reset emails, refer to the following article: [Customize Notifications and Reports in Netwrix Password Reset](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/customize-notifications-and-reports-in-password-expiration-notifier).

### Related articles

- [Customize Notifications and Reports in Netwrix Password Reset](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/customize-notifications-and-reports-in-password-expiration-notifier)
- [Netwrix Password Reset Email Header and Footer Reset After Upgrade](/docs/kb/auditor/monitoring-plans/password-expiration-notifier/password-expiration-notifier-email-header-and-footer-reset-after-upgrade)

