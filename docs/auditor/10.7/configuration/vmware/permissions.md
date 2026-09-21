---
title: "Permissions for VMware Server Auditing"
description: "Permissions for VMware Server Auditing"
sidebar_position: 20
---

# Permissions for VMware Server Auditing

Before you start creating a monitoring plan to audit your VMware hosts, plan for the account that
will be used for data collection – it should meet the following requirements. Contact your
virtual infrastructure administrator if necessary.

**On the target VMware hosts:**

- To collect state-in-time data, and auditing SSO users, local users, and groups, the account must
  belong to the **Administrators** group for the **vCenter Single Sign-On (SSO)** domain. (If
  you have assigned the **Read-only** role to that account, remove it.)
- To collect activity data, the account must have at least Read-only role on the audited hosts.
- If the same account collects both activity and state-in-time data, add it to the
  **Administrators** group for the vCenter SSO domain. That group membership already grants the
  access needed for activity collection, so a separate **Read-only** role assignment isn't required.

See the following VMware article for additional information:
[Add Members to a vCenter Single Sign-On Group](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.authentication.doc/GUID-CDEA6F32-7581-4615-8572-E0B44C11D80D.html).

Then you will provide this account in the monitoring plan wizard. Netwrix Auditor uses it as the
default account to process all items (VMware servers) included in the monitoring plan. However, if
you want to use specific settings for each of your VMware servers, you can provide a custom account
when configuring a corresponding monitored item.

See also:

- [Create a New Monitoring Plan](/docs/auditor/10.7/admin/monitoringplans/create.md) step of the monitoring plan
  wizard
