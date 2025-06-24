---
title: "Configure Advanced Audit Policies In Netwrix 1Secure"
sidebar_label: "Configure Advanced Audit Policies"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Configure Advanced Audit Policies

Configure advanced audit policies to limit the range of events tracked and recorded by the product,
thus preventing your AuditArchive and the Security event log from overfilling. Perform procedures
below instead of those discussed in the [Configure Local Audit Policies](/docs/1secure/setup-and-configuration/computers/audit-policies.md) topic.

## Enforce Advanced Policies Over Local Policies

Setting up both basic and advanced audit policies may lead to incorrect audit reporting. To force
basic audit policies to be ignored and prevent conflicts, enable the _Audit: Force audit policy
subcategory settings_ policy.

Follow the steps to enforce advanced policies.

**Step 1 –** On the audited server, open the Local Security Policy snap-in and navigate to Start >
Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > Security Options and locate the Audit:
Force audit policy subcategory settings policy.

![Local Security Policy snap-in ](/img/product_docs/1secure/configuration/computer/manualconfig_fileserver_graudit_secpol2016.webp)

**Step 3 –** Double-click the policy and enable it.

## Configure Advanced Audit Policy on Windows Server 2016 / Windows 12 and Above

In Windows Server 2016 and above, Advanced audit policies are integrated with Group Policies, so
they can be applied via Group Policy Object or Local Security Policies. The procedure below
describes how to apply Advanced policies via Local Security Policy console.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in and navigate to
Start > Windows Administrative Tools > Local Security Policy.

**Step 2 –** In the left pane, navigate to Security Settings > Advanced Audit Policy Configuration >
System Audit Policies.

**Step 3 –** Configure the following audit policies.

| Policy Subnode              | Policy Name                                     | Audit Events                                                                  |
| --------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------- |
| Object Access               | - Audit File System - Audit Handle Manipulation | "Success" and/or "Failure" depending on the type of events you want to track. |
| - Audit Detailed File Share | "Failure"                                       |                                                                               |
| - Audit File Share          | "Success"                                       |                                                                               |
| Policy Change               | - Audit Policy Change                           | "Success"                                                                     |
| Logon/Logoff                | - Logon                                         | "Success"                                                                     |
| - Logoff                    | "Success"                                       |                                                                               |
| System                      | - Security State Change                         | "Success"                                                                     |

# Configure Local Audit Policies

You can choose to configure local audit policies or advanced audit policies. See the
[Configure Advanced Audit Policies](/docs/1secure/setup-and-configuration/computers/audit-policies.md) topic for additional information.

Follow the steps to configure local audit policies.

**Step 1 –** On the audited server, open the Local Security Policy snap-in: navigate to Start >
Windows Administrative Tools > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > Audit Policy.

**Step 3 –** Configure the following audit policies.

| Policy Name              | Audit Events |
| ------------------------ | ------------ |
| Audit account management | "Success"    |
| Audit object access      | "Success"    |
| Audit policy change      | "Success"    |

Local audit policy is configured.

## ![Local Security Policy snap-in](/img/product_docs/1secure/configuration/computer/manualconfig_ws_local_audit_policies2016.webp)

id: configure-object-level-access-auditing
title: "Configure Object-Level Access Auditing"
pagination_label: "Configure Object-Level Access Auditing"
sidebar_label: "Configure Object-Level Access Auditing"
sidebar_position: 136
description: "Learn how to configure object-level access auditing for comprehensive file server monitoring."
