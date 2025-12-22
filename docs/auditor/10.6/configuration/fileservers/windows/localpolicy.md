---
title: "Configure Local Audit Policies"
description: "Configure Local Audit Policies"
sidebar_position: 30
---

# Configure Local Audit Policies

You can choose whether to configure legacy policies as described below or to configure advanced
policies. See the
[Configure Advanced Audit Policies](/docs/auditor/10.6/configuration/fileservers/windows/advancedpolicy.md)
topic for more information.

Follow the steps to configure local audit policies.

**Step 1 –** On the audited server, open the **Local Security Policy** snap-in: navigate to Start >
Windows Administrative Tools**>**Local Security Policy.

**Step 2 –** Navigate to **Security Settings > Local Policies > Audit Policy**.

| Policy Name              | Audit Events |
| ------------------------ | ------------ |
| Audit account management | _"Success"_  |
| Audit object access      | _"Success"_  |
| Audit policy change      | _"Success"_  |

Local audit policy is configured and can be changed in the same location:

![manualconfig_ws_local_audit_policies2016](/images/auditor/10.6/configuration/fileservers/windows/manualconfig_ws_local_audit_policies2016.webp)
