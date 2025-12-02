---
title: "Configure Access this computer from the network Policy"
description: "Configure Access this computer from the network Policy"
sidebar_position: 70
---
Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

Follow the steps to configure the Access this computer from the network Policy.

**Step 1** – Open the **Group Policy Management console** on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) **Group Policy Management**.

**Step 2** – In the left pane, navigate to **Forest: `<forest_name>` >  Domains > `<domain_name>`  Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3** – In the **Group Policy Management Editor** dialog, expand the **Computer Configuration** node on the left and navigate to **Policies > Windows Settings > Security Settings > Local Policies**.

**Step 4** – On the right, double-click the **User Rights Assignment policy**.

**Step 5** – Locate the **Access this computer from the network** policy and double-click it.

**Step 6** – In the **Access this computer from the network Properties** dialog, click **Add User or Group**, specify the user that you want to define this policy for.

**Step 7** - Locate the **Deny access to this computer from the network** and double-click it.

**Step 8** - Make sure the account is not listed in the **Deny access to this computer from the network Properties** dialog. Remove the account from the list if it is listed.

**Step 9** – Run the following command to update group policy: `gpupdate /force`

**Step 10** – Type `repadmin /syncall` command and press Enter for replicate GPO changes to other domain controllers.

**Step 11** – Ensure that new GPO settings applied on any audited domain controller.