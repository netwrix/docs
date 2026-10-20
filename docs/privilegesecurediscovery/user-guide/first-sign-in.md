---
title: "Sign in for the first time"
description: "Sign in to Netwrix Privilege Secure for Discovery for the first time and enroll in multi-factor authentication."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the sign-in prompt, the QR code (barcode) enrollment screen, and the wording at 26.09.1. The screenshots are from 2019 and might show an older interface. Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/admin/systemmanagement/360038683114_screen_shot_2019-11-18_at_6.08.44_pm.webp and 360038683114_screen_shot_2019-11-18_at_6.11.58_pm.webp are from 2019 and show the old product name. Re-capture with the current interface.
:::

The first time you sign in to Netwrix Privilege Secure for Discovery, you might need to enroll in multi-factor authentication (MFA). If your organization already integrates the product with an MFA solution, you use that solution instead of the procedure on this page.

## Enroll with Google Authenticator

If your organization hasn't integrated the product with an existing MFA solution, you enroll in MFA with the Google Authenticator application. This enrollment works until your organization integrates another MFA solution, such as Duo, Okta, or Ping. After that, the other solution replaces Google Authenticator entirely.

1. Enter your domain credentials, and then select **Sign In**.

   ![The sign-in screen with domain credentials entered](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360038683114_screen_shot_2019-11-18_at_6.08.44_pm.webp)

   The product prompts you to set up MFA.

   ![The MFA setup prompt with a QR code](/images/privilegesecure/4.2/discovery/admin/systemmanagement/360038683114_screen_shot_2019-11-18_at_6.11.58_pm.webp)

1. In the Google Authenticator application on your mobile device, scan the QR code.

   :::note
   Scan the QR code from within the authenticator application, not with the phone camera.
   :::
