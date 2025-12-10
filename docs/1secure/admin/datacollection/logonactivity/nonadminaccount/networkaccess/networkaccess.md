---
title: 'Configure Access this computer from the network Policy'
description: "Configure Access this computer from the network Policy"
sidebar_position: 20
---
Follow the steps to configure the Access this computer from the network Policy.

**Step 1** – Open the **Group Policy Management console** on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) **Group Policy Management**.

**Step 2** – In the left pane, navigate to **Forest: `<forest_name>` >  Domains > `<domain_name>`  Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3** – In the **Group Policy Management Editor** dialog, expand the **Computer Configuration** node on the left and navigate to **Policies > Windows Settings > Security Settings > Local Policies**.

**Step 4** – On the right, double-click the **User Rights Assignment policy**.

**Step 5** – Locate the **Access this computer from the network** policy and double-click it.

**Step 6** – Verify that the policy is enabled and that the account selected for data collection is included in the list, either explicitly or through group membership.

**Step 7** - Locate the **Deny access to this computer from the network** policy and double-click it.

**Step 8** - Verify that the policy is enabled and that the account selected for data collection **is not included** in the list, either explicitly or through group membership.

**Step 9** - Close Group Policy Management Editor.

**Step 10** – Run the following command to update group policy: `gpupdate /force`

**Step 11** – Type `repadmin /syncall` command and press Enter for replicate GPO changes to other domain controllers.

**Step 12** – Ensure that new GPO settings applied on any audited domain controller.