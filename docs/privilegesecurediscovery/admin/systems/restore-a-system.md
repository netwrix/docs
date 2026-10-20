---
title: "Restore a system"
description: "Restore a system that was removed from Active Directory so you can retrieve its OAM or RID 500 administrator passwords."
sidebar_position: 40
---

When a machine is removed from Active Directory (AD), the nightly LDAP sync also removes it from the main database collections in Netwrix Privilege Secure for Discovery. Occasionally you still need access to the machine even though the groups in its inventory no longer have access. You can restore the machine from the interface to retrieve its Offline Access Management (OAM) or RID 500 administrator passwords.

## Restore a system

1. Open the **Systems** screen.

   ![The Systems screen](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.34.04_pm.webp)

1. Select the **Retired Systems** view.

   ![The Retired Systems view selected](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.35.06_pm.webp)

1. Use the filters to find the machine to restore.

   ![The filters used to find a retired system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.36.37_pm.webp)

1. In the **Action** menu for the machine, select **Restore System**.

   ![The Restore System option in the Action menu](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.37.17_pm.webp)

   The machine name becomes a link to the **Grant Access** screen, where the OAM and RID 500 administrator passwords are available.

   ![The Grant Access screen for the restored system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4619816162327_screen_shot_2022-03-07_at_3.39.13_pm.webp)

## What happens after you restore a system

The machine stays in the standard collections of the database, and its passwords stay available, until the next nightly sync. At that sync, the product checks AD, finds that the machine was removed, and moves it back to the stale store. If you added the machine back to the domain, it remains in the main database collections and you can administer it as usual.
