---
title: "Windows Platform Policy Configuration"
description: "Windows Platform Policy Configuration"
sidebar_position: 90
---

# Windows Platform Policy Configuration

The Windows menu displays the configuration options for Windows platforms.

![Windows Platform Configuration](/images/privilegesecure/4.2/accessmanagement/admin/policy/page/platforms/windows.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for a Windows Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account (Allows custom entries) — The built-in administrator account for the resources on
  the selected platform. If multiple built-in administrator accounts are required, create a copy of
  the platform. For Windows platforms, the built-in account is defined via the well-known SID
  (S-1-5-21\*-500). This feature informs Netwrix Privilege Secure which account(s) to discover and
  onboard for a given platform during its discovery process.
- Password Complexity Policy — The password complexity rules for managed accounts created on the
  resources defined by the selected platform. See the
  [Password Complexity Page](/docs/privilegesecure/4.2/admin/interface/platforms/passwordcomplexity/passwordcomplexity.md) topic for additional information.
- Password Length — The number of characters required by the selected password policy
- Arrow icon — Show or Hide password policy details. Click the icon to display the password
  complexity requirements of the selected password policy.
- Protection Policy Schedule — How often the Protection Policy is run. See the
  [Protection Policies Page](/docs/privilegesecure/4.2/admin/interface/protectionpolicies/protectionpolicies.md) topic for additional information.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
  rotation). See the [Credentials Dashboard](/docs/privilegesecure/4.2/admin/dashboard/credentials.md) and
  [Schedule Policies Page](/docs/privilegesecure/4.2/admin/interface/platforms/schedulepolicies/schedulepolicies.md) topic for additional information.
- Scan Schedule — How often to perform a host scan on the resources defined by the selected platform
  (local users, groups, windows services and scheduled tasks). This scan can also be run ad-hoc from
  the [Resources Page](/docs/privilegesecure/4.2/admin/interface/resources/resources.md).
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the
  [Credentials Dashboard](/docs/privilegesecure/4.2/admin/dashboard/credentials.md) topic for additional information on
  managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
  verification step finds that the existing password for an account does not match what Privilege
  Secure expects.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
