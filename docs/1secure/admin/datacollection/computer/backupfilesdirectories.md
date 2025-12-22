---
title: "Configure the Back up Files and Directories Policy"
description: "Configure the Back up Files and Directories Policy"
sidebar_position: 10
---

# Configure the Back up Files and Directories Policy

Configure this Back up Files and Directories policy via the **Local Security Policy Snap-in** or
using the **Group Policy Management Console**.

Follow the steps to configure the Back up Files and Directories' policy via the **Local Security
Policy Snap-in**.

**Step 1 –** On any domain controller in the target domain, open the **Local Security Policy**
snap-in: navigate to Start > Administrative Tools (Windows Server 2016 and higher) or Administrative
Tools (Windows 2012) > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > User Right Assignment.

**Step 3 –** Locate the **Back up files and directories** policy and double-click it.

**Step 4 –** In the **Back up files and directories Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

The policy is now configured.

Follow the steps to configure the Back up Files and Directories' policy using the **Group Policy
Management Console**.

:::note
Perform this procedure only if the account selected for data collection is not a member of
the Domain Admins group.
:::


**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Back up files and directories policy and double-click it.

**Step 6 –** In the Back up files and directories Properties dialog, click Add User or Group and
specify the user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type "_cmd_". Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

The policy is now configured.
