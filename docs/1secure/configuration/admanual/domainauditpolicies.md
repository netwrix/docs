---
title: "Configure Basic Domain Audit Policies"
description: "Configure Basic Domain Audit Policies"
sidebar_position: 40
---

# Configure Basic Domain Audit Policies

Basic audit policies allow tracking changes to user accounts and groups and identifying originating
workstations. You can configure advanced audit policies for the same purpose too. See the
[Configure Advanced Audit Policies](/docs/1secure/configuration/admanual/advancedpolicy.md) topic for additional information.

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012)> **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domains** >
**`<domain_name>` > Domain Controllers**. Right-click the effective domain controllers policy (by
default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.

**Step 3 –** In the **Group Policy Management Editor** dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies > Windows Settings > Security Settings > Local
Policies > Audit Policy.**

**Step 4 –** Configure the following audit policies.

| Policy                             | Audit Events |
| ---------------------------------- | ------------ |
| **Audit account management**       | _"Success"_  |
| **Audit directory service access** | _"Success"_  |
| **Audit logon events**             | _"Success"_  |

![manualconfig_ad_localpolicy_winserver2016](/images/1secure/configuration/ad/manualconfig_ad_localpolicy_winserver2016.webp)

The Audit logon events policy is only required to collect the information on the originating
workstation, i.e., the computer from which a change was made. This functionality is optional and can
be disabled.

**Step 5 –** Navigate to **Start > Run** and type _"cmd"_. Input the `gpupdate /force` command and
press **Enter**. The group policy will be updated.
