---
title: "Release 7.0"
description: "What's New in Release 7.0"
sidebar_position: 2
sidebar_label: "⭐ Release 7.0 (Latest)"
---

# Release 7.0

Platform Governance for Salesforce Release 7.0 introduces new capabilities for enhanced governance, monitoring, and change tracking across your Salesforce environment.

## New Features

### Document Report and Dashboard Folders

Track and monitor access to Report and Dashboard folders with comprehensive change logging. This feature provides visibility into folder-level permissions and user access patterns to help you maintain security and compliance for your reporting infrastructure.

[Document Report and Dashboard Folders](/docs/platgovsalesforce/customizations/folder_customization_record)

### DLU Scanner Improvements

The Date Last Used (DLU) Scanner includes improved configuration options and performance optimizations. The new DLU Configuration tool provides granular control over which metadata types and fields are processed, so you can focus on what matters most to your organization.

[DLU Configuration](/docs/platgovsalesforce/tools/dlu_configuration)

### Auto Scanner Inactivity Alert

A proactive monitoring system automatically sends email notifications to designated administrators when the Auto Scanner fails to run according to its configured schedule. This keeps your Salesforce environment continuously protected and documented.

[Auto Scanner Inactivity Alert](/docs/platgovsalesforce/installingstrongpoint/config_and_stats#scanner-inactivity-alert)

### Track Specific Permission Assignments

Monitor and detect changes in System Permissions across Permission Sets and Profiles. Each scan compares selected permissions against previous snapshots and generates Change Logs for any detected differences, giving you complete visibility into permission changes at the user level.

[System Permission Tracking](/docs/platgovsalesforce/tools/system_permission_tracking)

### Track Access to Specific Fields

The new Field Tracking capability lets you monitor changes to specific fields across your Salesforce org. Create custom monitoring rules based on objects, compliance categories, or data types, and receive notifications when tracked fields are modified.

[Field Tracking](/docs/platgovsalesforce/tools/field_tracking)

### Change Request Re-architecture

The redesigned Change Request system delivers improved performance, an enhanced user interface, and better integration with deployment workflows. The new architecture provides faster processing and more intuitive change management capabilities.

[Creating a Change Request](/docs/platgovsalesforce/changemanagement/creating_change_request)

### Customizations for Public Groups

Release 7.0 includes enhanced support for Public Groups with improved documentation and change tracking. Monitor group membership changes, access permissions, and usage patterns to maintain security and compliance.

[Understanding Customization Records](/docs/platgovsalesforce/customizations/understanding_customization_record)

### Expanded Change Log List Views

Change Log List Views now support all new tracking capabilities, including System Permissions, Field Tracking, and Report/Dashboard Folder access. This provides a unified view of all changes across your Salesforce environment.

### Required manual configuration for package upgrades

:::note
This package version introduces a new version of the Change / Approval Policy layout: **Strongpoint Change/Approval Policy Layout v11**.

This new layout includes updates to the fields displayed for **Policy** records.

For package upgrades, you must **manually assign** the new layout after pushing the updates for the changes to take effect.
:::
 
**Steps to Assign the New Layout:**
 
  1. In Salesforce, open **Setup**
  2. Open **Object Manager**
  3. Select **Change/Approval Policy**
  4. Go to **Page Layouts**
  5. Click **Page Layout Assignment**
  6. Click **Edit Assignment**
  7. Select the profiles that have access to the Policy record. In most cases, this is the System Administrator profile. However, some customers use a custom profile instead of the standard one.
  8. Change the current layout to **Strongpoint Change/Approval Policy Layout v11**
  9. Click **Save**
 
For new installations, the system assigns the latest layout automatically by default.

---

## Getting Started

To use these new features:

1. Update your Platform Governance for Salesforce package to Release 7.0.
2. Review the documentation for each feature to understand configuration requirements.
3. Configure the new scanners and monitoring tools based on your organization's needs.

For questions or assistance with Release 7.0 features, contact the Customer Success team.