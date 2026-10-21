---
title: "Restore a system"
description: "Restore an archived system, or one that Active Directory no longer lists, so you can open its page and retrieve its administrator passwords."
sidebar_position: 40
---

When Active Directory (AD) no longer lists a machine, the daily full directory synchronization in Netwrix Privilege Secure for Discovery moves it out of the main database collections. An administrator can also archive a system with the **Archive Systems** bulk action. Either way, the system leaves the **Systems** list and appears in the **Retired Systems** view.

Sometimes you still need access to such a machine even though the groups in its inventory no longer have access. Restore the machine to retrieve its Offline Access Management (OAM) or RID 500 administrator passwords. You need the administrator role.

## Restore a system

1. Select **Management** > **Systems**.
1. In **Views**, select **Retired Systems**.

   ![The Retired Systems view on the Systems screen](/images/privilegesecurediscovery/admin/systems-retired-view.webp)

1. Select **Show Filters**, and use the filters to find the machine.
1. Select the check box for the machine. You can select several machines.
1. Select **Bulk Actions**. The screen reads `Restore <n> systems`.
1. Select **Execute Bulk Action**.
1. On **Monitor** > **Jobs**, wait for the **Restore Request** job to finish. Its message reads `Restore <n> systems.`
1. Return to **Management** > **Systems**, and open the restored machine from the **All Active Systems** view.
1. Select **Access** > **Grant Access** for the system to see its passwords.

## What happens after you restore a system

The machine returns to the standard collections of the database, with its inventory and passwords, and the product treats it as an active system again.

- If the machine still exists in AD, it stays active and you administer it as usual.
- If AD no longer lists the machine, the next daily full synchronization archives it again. Retrieve the passwords before then.

If you archived the system with **Archive Systems**, a restore also lets directory synchronization manage it again.
