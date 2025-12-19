---
title: "Configure Local Audit Policies"
description: "Configure Local Audit Policies"
sidebar_position: 40
---

# Configure Local Audit Policies

Local audit policies must be configured on the target servers to get the "Who" and "When" values for
the changes to the following monitored system components:

- Audit policies
- File shares
- Hardware and system drivers
- General computer settings
- Local users and groups
- Services
- Scheduled tasks
- Windows registry
- Removable media

You can also configure advanced audit policies for same purpose. See the
[Configure Advanced Audit Policies](/docs/auditor/10.8/configuration/windowsserver/advancedpolicy.md) topic for more information.

## Manual Configuration

While there are several methods to configure local audit policies, this topic covers just one of
them: how to configure policies locally with the Local Security Policy snap-in. To apply settings to
the whole domain, use the Group Policy but consider the possible impact on your environment.

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
