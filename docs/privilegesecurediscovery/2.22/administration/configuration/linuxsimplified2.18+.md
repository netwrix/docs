---
title: "Linux Simplified - 2.18+"
description: "Linux Simplified - 2.18+"
sidebar_position: 20
---

# Linux Simplified - 2.18+

Linux Simplified - 2.18+

# Linux Simplified - 2.18+

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

The domain configuration can be used to configure an existing account on Linux machines to be
utilized as the protect account for managing the endpoint. This saves the need to register an
account on each endpoint and provides for a simplified rollout.

**Step 1 –** Ensure that the domain Linux service account has sudo permission on the systems
Privilege Secure is to manage sudo privileges on.

**Step 2 –** Add the domain Linux service account to the Domain Configuration on the Configuration >
Server page for the appropriate domain:

![Screen_Shot_2023-02-14_at_9.46.L54_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/12415682024599_screen_shot_2023-02-14_at_9.46.54_am_316x280.webp)

The domain Linux service account configuration is located at the bottom right of the domain
configuration:

![Screen_Shot_2023-02-14_at_9.47.L04_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/12415682024599_screen_shot_2023-02-14_at_9.47.04_am_383x384.webp)

**Step 3 –** Enter the domain Linux service account information and save.

- Any systems that are in AD that have not already been manually registered into Privilege Secure,
  will use this account to manage the sudo privileges on the system.
- Any systems that were manually registered into Privilege Secure will still use the same service
  account as before.  Contact CS for options on changing any manually registered Linux system to use
  the new domain Linux service account.

**Step 4 –** Set bridging solution to the correct value (Example: SSSD) via the UI, QuickStart, or
API.

**Step 5 –** Enter the domain Linux service account information and click **Save**.

Any systems that are in AD that have not already been manually registered into Privilege Secure,
will use this account to manage the sudo privileges on the system.

## Versions

This configuration is available in versions 2.18 and later.
