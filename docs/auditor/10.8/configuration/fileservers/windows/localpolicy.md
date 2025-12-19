---
title: "Configure Local Audit Policies"
description: "Configure Local Audit Policies"
sidebar_position: 30
---

# Configure Local Audit Policies

You can choose to configure local audit policies or advanced audit policies.See the
[Configure Advanced Audit Policies](/docs/auditor/10.8/configuration/fileservers/windows/advancedpolicy.md) topic for more information.

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

![Local Security Policy snap-in](/images/1secure/configuration/computer/manualconfig_ws_local_audit_policies2016.webp)
