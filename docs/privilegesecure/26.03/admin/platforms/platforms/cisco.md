---
title: "Cisco Platform Policy Configuration"
description: "Cisco Platform Policy Configuration"
sidebar_position: 30
---

# Cisco Platform Policy Configuration

The Cisco menu displays the configuration options for Cisco platforms.

![Cisco Platform Configuration](/images/privilegesecure/26.03/accessmanagement/admin/policy/page/platforms/cisco.webp)

Details for the selected platform display on the right side of the page. The following are the
configuration options for a Cisco Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account — The built-in administrator account for the resources on the selected platform.
If multiple built-in administrator accounts are required, create a copy of the platform. For
Windows platforms, the built-in account is defined via the well-known SID (S-1-5-21\*-500). This
feature informs Netwrix Privilege Secure which accounts to discover and onboard for a given
platform during its discovery process.
- Password Complexity Policy — The password complexity rules for managed accounts created on the
resources defined by the selected platform. See the
[Password Complexity Page](/docs/privilegesecure/26.03/admin/platforms/passwordcomplexity/passwordcomplexity.md) topic for additional information.
- Password Length — The number of characters required by the selected password policy
- Arrow icon — Show or Hide password policy details. Click the icon to display the password
complexity requirements of the selected password policy.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
rotation). See the [Credentials Dashboard](/docs/privilegesecure/26.03/admin/dashboard/credentials.md) and
[Schedule Policies Page](/docs/privilegesecure/26.03/admin/platforms/schedulepolicies/schedulepolicies.md) topic for additional information.
- Scan Schedule — How often to perform a host scan on the resources defined by the selected platform
(local users, groups, windows services and scheduled tasks). This scan can also be run ad-hoc from
the [Resources Page](/docs/privilegesecure/26.03/admin/resources/resources.md).
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
defined by the selected platform. See the
[Credentials Dashboard](/docs/privilegesecure/26.03/admin/dashboard/credentials.md) topic for additional information on
managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
verification step finds that the existing password for an account doesn't match what Privilege
Secure expects.

If any of these settings are modified, Save, and Cancel buttons display. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
