---
title: "Configure Advanced Audit Policies"
description: "Configure Advanced Audit Policies"
sidebar_position: 30
---

# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity
changes with more granularity.

Perform the following procedures:

- [Configuring security options](#configuring-security-options)
- [Configuring advanced audit policies](#configuring-advanced-audit-policies)

## Configuring security options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To
force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy
subcategory settings to override audit policy category settings option.

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

    ![manualconfig_ad_nla_audit_force_winserver2016](/images/auditor/10.6/configuration/activedirectory/manualconfig_ad_nla_audit_force_winserver2016.webp)

5. Run the following command to update group policy:

    `gpupdate /force`

## Configuring advanced audit policies

1. Open the **Group Policy Management** console on any domain controller in the target domain:
   navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
   Administrative Tools (Windows 2012) **Group Policy Management.**
2. In the left pane, navigate to **Forest: `<forest_name>` > Domains > `<domain_name>`** **> Domain
   Controllers**. Right-click the effective domain controllers policy (by default, it is the
   **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left
   and navigate to Policies → Windows Settings → Security Settings → Advanced Audit Policy
   Configuration → Audit Policies .
4. Configure the following audit policies.

    | Policy Subnode                     | Policy Name                                                                                                      | Audit Events                |
    | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
    | Account Logon                      | - Audit Kerberos Service Ticket Operations - Audit Kerberos Authentication Service - Audit Credential Validation | _"Success"_ and _"Failure"_ |
    | - Audit Other Account Logon Events | _"Success"_ and _"Failure"_                                                                                      |                             |
    | Logon/Logoff                       | - Audit Logoff - Audit Other Logon/Logoff Events                                                                 | _"Success"_                 |
    | - Audit Logon                      | _"Success"_ and _"Failure"_                                                                                      |                             |
    | System                             | - Audit Security State Change                                                                                    | _"Success"_                 |

    ![manualconfig_nla_advpol2016](/images/auditor/10.6/configuration/logonactivity/manualconfig_nla_advpol2016.webp)

5. Run the following command to update group policy:

    `gpupdate /force`
