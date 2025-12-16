---
description: >
  This knowledge base article provides a comprehensive guide to troubleshooting common errors encountered when configuring and using NetApp Clustered Data ONTAP with Netwrix Auditor.
keywords:
  - Netwrix Auditor
  - NetApp
  - Clustered Data ONTAP
  - ONTAP
  - 6104
  - 6181
  - 6186
  - 6127
  - 6129
  - access denied
  - insufficient privileges
  - auditing not enabled
  - SACL
  - DPA
  - SVM
  - FPolicy
products:
  - auditor
sidebar_label: NetApp Clustered Data ONTAP Error Resolution Guide
tags: []
title: NetApp Clustered Data ONTAP Error Resolution Guide
knowledge_article_id:
---

# NetApp Clustered Data ONTAP Error Resolution Guide

## Introduction
This knowledge base article provides a comprehensive guide to troubleshooting common errors encountered when configuring and using NetApp Clustered Data ONTAP with Netwrix Auditor. The following errors and their resolutions will help administrators quickly identify and resolve issues related to permissions, audit configuration, and connectivity.

## Quick Reference
| Error Code | Description | Primary Cause |
|------------|-------------|---------------|
| 6104 | Access Denied - Insufficient Privileges | Missing role permissions |
| 6181 | Auditing Not Enabled | SVM audit disabled |
| 6186 | Event Log Files Deleted | Missing/wrong log path |
| 6127 | Incorrectly Configured Auditing | Insufficient SACLs |
| 6129 | Cannot Adjust Audit Settings | DPA lacks SACL rights |

## Common NetApp Errors and Resolutions

> **IMPORTANT:** Ensure proper backup procedures are in place before making configuration changes. Consider performance impacts when enabling detailed audit logging on high-traffic systems. Regularly monitor HealthLog events to stay updated on significant occurrences.

### Error 6104: Access Denied - Insufficient Privileges

**Error Description:**
Unable to process item: Access is denied. Insufficient privileges: user `<DPA user>` does not have read/write access to this resource.

**Cause:**
The SVM (Storage Virtual Machine) role doesn't have sufficient rights to perform the required operations.

**Resolution:**
1. Verify that the NetApp role has been created with proper permissions.
2. Check that the DPA user is assigned to the correct role.
3. Ensure the role includes necessary ONTAPI and REST API permissions.
4. Verify both ONTAPI role and RESTAPI role configurations.

**Documentation:**
[NetApp Role Permissions Configuration](/docs/auditor/10_8/configuration/fileservers/netappcmode/permissions#create-role-on-netapp-clustered-data-ontap-8-or-ontap-9-and-enabling-ad-user-access)

### Error 6181: Auditing Not Enabled

**Error Description:**
Auditing is not enabled for the target system.

**Cause:**
SVM audit is disabled.

**Resolution:**
1. Enable audit on the SVM using: `vserver audit enable`
2. Verify audit configuration with: `vserver audit show -instance`
3. Ensure audit destination directory exists and is accessible.
4. Configure appropriate log file size limits (recommended: 300 MB).

**Documentation:**
[Event Categories Configuration](/docs/auditor/10_8/configuration/fileservers/netappcmode/eventcategories)

### Error 6186: Event Log Files Deleted

**Error Description:**
Event log files were deleted for server `<SVM>`. Some changes could be lost.

#### Scenario 1: Missing Log Files

**Cause:**
Cannot find audit logs - logs were deleted.

**Resolution:**
1. Check that log files are present in the SVM's log folder.
2. Verify log retention policies are properly configured.
3. Ensure sufficient disk space for log storage.
4. Review log rotation settings.

#### Scenario 2: Wrong Log Path

**Cause:**
The path to the log folder is wrong or has been changed.

**Resolution:**
1. Verify the correct path to the SVM's log folder.
2. Update the audit destination if necessary: `vserver audit modify -destination <correct_path>`
3. Ensure the destination directory exists and has proper permissions.

**Documentation:**
[Event Categories Configuration](/docs/auditor/10_8/configuration/fileservers/netappcmode/eventcategories)

### Error 6127: Incorrectly Configured Auditing Entries

**Error Description:**
The following objects have incorrectly configured auditing entries: `<objects list>`

**Cause:**
Autoaudit is disabled and the provided list of files/folders have insufficient SACLs (System Access Control Lists) or inheritance is disabled.

**Resolution:**
1. Check and configure proper SACLs on affected objects.
2. Enable Autoaudit feature to automatically set SACLs.
3. Verify that audit inheritance is properly configured.
4. Review CIFS share audit settings.

**Documentation:**
[CIFS Configuration and SACL Settings](/docs/auditor/10_8/configuration/fileservers/netappcmode/cifs)

### Error 6129: Cannot Adjust Audit Settings

**Error Description:**
Netwrix Auditor could not adjust audit settings.

**Cause:**
The DPA (Data Processing Account) doesn't have rights to set or change SACLs.

**Resolution:**
1. Verify DPA user permissions on audited objects.
2. Check that the DPA account has "Manage auditing and security log" privilege.
3. Ensure proper role assignment for the DPA user.
4. Test permissions on a small subset of objects first.

## Related Links
For comprehensive configuration guides and detailed setup instructions, refer to the complete Netwrix Auditor documentation:
- [NetApp Clustered Data ONTAP Configuration Overview](/docs/auditor/10_8/configuration/fileservers/netappcmode/overview)
- [Permissions and Role Management](/docs/auditor/10_8/configuration/fileservers/netappcmode/permissions)
- [Event Categories and Audit Setup](/docs/auditor/10_8/configuration/fileservers/netappcmode/eventcategories)
- [CIFS Configuration and Auditing](/docs/auditor/10_8/configuration/fileservers/netappcmode/cifs)
