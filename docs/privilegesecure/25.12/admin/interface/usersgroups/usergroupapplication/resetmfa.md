---
title: "Reset User MFA"
description: "Reset a user's MFA from the Users & Groups page so the user must register a new authenticator at the next login."
keywords:
  - Reset MFA
  - MFA
  - TOTP
  - authenticator
  - Internal MFA
  - Users and Groups page
sidebar_position: 10
---

# Reset User MFA

Privilege Secure allows administrators to reset a user MFA directly from the Users page. Resetting
the user's MFA will generate a TOTP secret for the user and force them to register an authenticator.
This option is only available when the Internal MFA option is enabled on the User Details page. See
[Authentication Connector Tab](/docs/privilegesecure/25.12/admin/interface/usersgroups/usergroupapplication/authenticationconnector.md) for additional
information.

1. Navigate to the **Policy** > **Users & Groups** page.
2. Select the user you want or group account.

   ![Reset MFA for Users and Groups Account](/images/privilegesecure/25.12/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfa.webp)

3. Click the **Reset MFA** button.

   ![Reset MFA for Account Confirmation Window](/images/privilegesecure/25.12/accessmanagement/admin/policy/window/usersgroups/usersgroupsresetmfawindow.webp)

4. Click the **Reset MFA** button in the confirmation window.

Privilege Secure resets the user's MFA in the Privilege Secure user store and prompts them to register a new MFA the next time they log
in to Privilege Secure.
