---
title: "Restore a System"
description: "Restore a System"
sidebar_position: 110
---

# Restore a System

Restore a System

# Restore a System

## Overview

When machines are removed from AD, the nightly LDAP sync will also remove these from the main
database collections within Privilege Secure. Occasionally access to the machine is required
although the groups in the inventory no longer have access. This can be restored via the UI to
enable access to the OAM or RID500 administrator passwords.

To restore a machine from the stale store of Privilege Secure the following steps should be taken:

- Open the Systems Management Screen

![Screen_Shot_2022-03-07_at_3.34.L04_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.34.04_pm.webp)

- Select the "Retired Systems" view

![Screen_Shot_2022-03-07_at_3.35.L06_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.35.06_pm.webp)

- Use the filters to find the required machine for restoring

![Screen_Shot_2022-03-07_at_3.36.L37_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.36.37_pm.webp)

- Click the "Restore System" option from the Action menu for the target machine

![Screen_Shot_2022-03-07_at_3.37.L17_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.37.17_pm.webp)

- The machine name will now become a clickable link that will take you to the grant access screen
  where the OAM and RID500 administrator passwords will be available

![Screen_Shot_2022-03-07_at_3.39.L13_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.39.13_pm.webp)

## Extended Details

The machine will be available within the standard collections of the Privilege Secure database and
allowing password access until the nightly sync. At this point Privilege Securewill sync with LDAP
and find that the machine has been removed, therefore it will be moved back to the stale store. If
the machine is adding back to the domain, then the machine will remain in the main Privilege Secure
database collection and will be able to be administered as usual.

## Appendix

Version Requirements

2.15 or greater
