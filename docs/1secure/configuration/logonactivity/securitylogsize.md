---
title: "Configure Security Event Log Size and Retention Settings"
description: "Configure Security Event Log Size and Retention Settings"
sidebar_position: 40
---

# Configure Security Event Log Size and Retention Settings

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start>Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012)**> Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domains** >
**`<domain_name>` → Domain Controllers**. Right-click the effective domain controllers policy (by
default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** Navigate to **Computer Configuration** > **Policies** > **Windows Settings > Security
Settings** > **Event Log** and double-click the **Maximum security log size** policy.

![manualconfig_grouppolicymaxsecuritysizewinserver2016](/images/1secure/configuration/logonactivity/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

**Step 4 –** In the **Maximum security log size Properties** dialog, select **Define this policy
setting** and set maximum security log size to*"4194240"* kilobytes (4GB).

**Step 5 –** Select the **Retention method for security log** policy. In the **Retention method for
security log Properties** dialog, check **Define this policy** and select **Overwrite events as
needed**.

**Step 6 –** Navigate to **Start** > **Run** and type _"cmd"_. Input the `gpupdate /force` command
and press **Enter**. The group policy will be updated.
