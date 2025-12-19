---
title: "Configure the Manage Auditing and Security Log Policy"
description: "Configure the Manage Auditing and Security Log Policy"
sidebar_position: 30
---

# Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the
Domain Admins group.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools**→ Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` → Domains → `<domain_name>` →
Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the
**Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies → Windows Settings → Security Settings → Local
Policies.**

**Step 4 –** On the right, double-click the **User Rights Assignment** policy.

**Step 5 –** Locate the **Manage auditing and security log** policy and double-click it.

**Step 6 –** In the **Manage auditing and security log Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

**Step 7 –** Navigate to **Start → Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.
