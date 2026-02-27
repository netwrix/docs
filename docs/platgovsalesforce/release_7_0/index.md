---
title: "Release 7.0"
description: "What's New in Release 7.0"
sidebar_position: 2
sidebar_label: "⭐ Release 7.0 (Latest)"
---

# Release 7.0

Platform Governance for Salesforce Release 7.0 introduces powerful new capabilities for enhanced governance, monitoring, and change tracking across your Salesforce environment.

## New Features

### Document Report and Dashboard Folders

Track and monitor access to Report and Dashboard folders with comprehensive change logging. This feature provides visibility into folder-level permissions and user access patterns, helping you maintain security and compliance for your reporting infrastructure.

[Learn more →](/docs/platgovsalesforce/customizations/folder_customization_record)

### DLU Scanner Improvements

Enhanced Date Last Used (DLU) Scanner with improved configuration options and performance optimizations. The new DLU Configuration tool provides granular control over which metadata types and fields are processed, allowing you to focus on what matters most to your organization.

[Learn more →](/docs/platgovsalesforce/tools/dlu_configuration)

### Auto Scanner Inactivity Alert

Proactive monitoring system that automatically sends email notifications to designated administrators when the Auto Scanner fails to run according to its configured schedule. This ensures your Salesforce environment remains continuously protected and documented.

[Learn more →](/docs/platgovsalesforce/installingstrongpoint/config_and_stats#scanner-inactivity-alert)

### Track Specific Permission Assignments

Monitor and detect changes in System Permissions across Permission Sets and Profiles. Each scan compares selected permissions against previous snapshots and generates Change Logs for any detected differences, providing complete visibility into permission changes at the user level.

[Learn more →](/docs/platgovsalesforce/tools/system_permission_tracking)

### Track Access to Specific Fields

New Field Tracking capability allows you to monitor changes to specific fields across your Salesforce org. Create custom monitoring rules based on objects, compliance categories, or data types, and receive notifications when tracked fields are modified.

[Learn more →](/docs/platgovsalesforce/tools/field_tracking)

### Change Request Re-architecture

Redesigned Change Request system with improved performance, enhanced user interface, and better integration with deployment workflows. The new architecture provides faster processing and more intuitive change management capabilities.

[Learn more →](/docs/platgovsalesforce/changemanagement/creating_change_request)

### Customizations for Public Groups

Enhanced support for Public Groups with improved documentation and change tracking. Monitor group membership changes, access permissions, and usage patterns to maintain security and compliance.

[Learn more →](/docs/platgovsalesforce/customizations/understanding_customization_record)

### Expanded Change Log List Views

Change Log List Views have been expanded to support all new tracking capabilities, including System Permissions, Field Tracking, and Report/Dashboard Folder access. This provides a unified view of all changes across your Salesforce environment.

---

## Getting Started

To take advantage of these new features:

1. Ensure your Platform Governance for Salesforce package is updated to Release 7.0
2. Review the documentation for each feature to understand configuration requirements
3. Configure the new scanners and monitoring tools based on your organization's needs

For questions or assistance with Release 7.0 features, contact our Customer Success team.