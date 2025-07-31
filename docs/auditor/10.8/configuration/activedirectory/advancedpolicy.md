---
title: "Configure Advanced Audit Policies"
description: "Configure Advanced Audit Policies"
sidebar_position: 60
---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Active
Directory changes with more granularity. Either basic or advanced audit policies must be configured
to track changes to accounts and groups, and to identify workstations where changes were made.

Perform the following procedures:

- To configure security options
- To configure advanced audit policies

## To configure security options

Setting up both basic and advanced audit policies may lead to incorrect audit reporting. To force
basic audit policies to be ignored and prevent conflicts, enable the _Audit: Force audit policy
subcategory settings_ policy.

To do it, perform the following steps:

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Local Policies → Security
   Options.
4. Locate the Audit: Force audit policy subcategory settings to override audit policy category
   settings and make sure that policy setting is set to _"Enabled"_.

    ![manualconfig_ad_nla_audit_force_winserver2016](/images/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

5. Run the following command to update group policy:

    `gpupdate /force`

## To configure advanced audit policies

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Advanced Audit Policy
   Configuration → Audit Policies.
4. Configure the following audit policies.

    | Policy Subnode     | Policy Name                                                                                                                                                               | Audit Events |
    | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
    | Account Management | - Audit Computer Account Management - Audit Distribution Group Management - Audit Security Group Management - Audit User Account Management                               | _"Success"_  |
    | DS Access          | Audit Directory Service Access                                                                                                                                            | _"Success"_  |
    | Logon/Logoff       | - Audit Logoff - Audit Logon These policies are only required to collect the information on the originating workstation, i.e., the computer from which a change was made. | _"Success"_  |

    ![manualconfig_ad_advpol_winserver2016](/images/1secure/configuration/ad/manualconfig_ad_advpol_winserver2016.webp)

5. Run the following command to update group policy:

    `gpupdate /force`
