---
description: >-
  This article addresses the warning message encountered during an Active Directory Inventory (ADI) scan in Netwrix Access Analyzer regarding custom attributes not being set for specific object classes.
keywords:
  - Active Directory
  - Access Analyzer
  - custom attributes
sidebar_label: Custom Attribute Warning
tags: []
title: "Error: The Custom Attribute {'{'}x{'}'} Was Requested, but Not Set in Domain 1 for the {'{'}y{'}'} Object Class"
knowledge_article_id: kA0Qk000000306jKAA
products:
  - accessanalyzer
---

# Error: The Custom Attribute {'{'}x{'}'} Was Requested, but Not Set in Domain 1 for the {'{'}y{'}'} Object Class

## Related Queries

- “Access Analyzer full scan required warning”
- “Attribute xxx was requested but not set for User object.”
- “ADI scan is missing custom attribute.”
- “Receiving warning about pager or msDS-SupportedEncryptionTypes in Access Analyzer.”

## Symptom

During an Active Directory Inventory (ADI) scan in **Netwrix Access Analyzer** (formerly Enterprise Auditor), the following warnings may appear on the **1-AD_Scan** job:

- `The custom attribute msDS-AllowedToActOnBehalfOfOtherIdentity was requested, but not set in domain 1 for the User object class. A full ADI scan may be required.`
- `The custom attribute msDS-AllowedToDelegateTo was requested, but not set in domain 1 for the User object class. A full ADI scan may be required.`
- `The custom attribute PrimaryGroupID was requested, but not set in domain 1 for the Group object class. A full ADI scan may be required.`
- `The custom attribute msDS-AllowedToActOnBehalfOfOtherIdentity was requested, but not set in domain 1 for the Computer object class. A full ADI scan may be required.`
- `The custom attribute msDS-AllowedToDelegateTo was requested, but not set in domain 1 for the Computer object class. A full ADI scan may be required.`

This message may appear multiple times for different attributes (e.g., pager, msDS-SupportedEncryptionTypes) and object classes (e.g., User, Computer, Group).

## Cause

This warning occurs when a custom or optional attribute is requested during scanning, but it is not populated for one or more objects of the specified class in the domain.

Key contributing factors include:

- The attribute is not defined for that object class (e.g., pager is not typically set on Computer objects).
- The attribute exists in the schema but is not populated for any of the scanned users.
- The environment is not using features (e.g., **AIC workflows**, **access reviews**, or **delegation**) that depend on that attribute.
- The attribute was recently added or modified, but the current scan is incremental, so the data has not been picked up yet.

## Resolution

This warning is informational and not indicative of a failure. It does **not** interrupt the scan nor cause data loss. However, you may take the following actions depending on your use case:

### If You Are Not Using the Attribute

- You can safely ignore the warning.
- These attributes are often included for reporting or access review readiness. If you are not using those features, the missing data does not impact functionality.

### If You Intend to Use the Attribute

- Ensure the attribute is properly populated across relevant objects (e.g., Users) in the Active Directory.
- After making changes, perform a **full ADI scan** to ensure the updates are collected and reflected in reports.

> **NOTE:** Incremental scans may not detect newly populated attributes. Running a full scan ensures all changes are captured.

### If You Want to Eliminate the Warning

- You may remove the attribute from the requested attribute list. However, this is not recommended unless you are certain the attribute is not needed for any workflows or reports.

> **IMPORTANT:** Some reports depend on specific attributes (e.g., delegation, DS heuristics). Removing attributes could impact the completeness of those reports.

- You can lower the logging level of the job from the default WARNING to ERROR in the [Job Properties](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/job/properties/general) window.

## Related Link

- [Job Properties](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/jobs/job/properties/general)