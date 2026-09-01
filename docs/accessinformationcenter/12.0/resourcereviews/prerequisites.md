---
title: "Data Collection & Automation Prerequisites"
description: "Data Collection & Automation Prerequisites"
sidebar_position: 10
---

# Data Collection & Automation Prerequisites

Resource Reviews have the following prerequisites:

- Data Collection Prerequisites
- Automation Prerequisites

    - Sensitive Data Review Automation

## Data Collection Prerequisites

### File System

The following prerequisites are required for reviews of file system data.

**Sensitive Data Reviews Requirement**

Sensitive Data reviews of file system data require you to configure the following setting in the
**FileSystem** > **0.Collection** Job Group in Netwrix Access Analyzer (formerly Enterprise
Auditor):

- In the 1-FSAA System Scans Job, configure the Query by selecting the **Scan file-level details**
  checkbox on the File Details tab on the Default Scoping Options page of the File System Access
  Auditor Data Collector Wizard.

**View Sensitive Content within Reviews Requirement**

To view the potentially sensitive data during a review, you must also configure the following
setting in the **FileSystem** > **0.Collection** Job Group in Netwrix Access Analyzer (formerly
Enterprise Auditor):

- In the 1-SEEK System Scans Job, configure the Query by selecting the **Store discovered sensitive
  data** checkbox on the -Sensitive Data Settings page of the File System Access Auditor Data
  Collector Wizard.

### SharePoint

The following prerequisites are required for reviews of SharePoint data.

**View Sensitive Content within Reviews Requirement**

To view the potentially sensitive data during a review, you must configure the following setting in
the **SharePoint** > **0.Collection** Job Group:

- In the 1-SPSEEK System Scans Job, configure the Query by selecting the **Store discovered
  sensitive data** checkbox on the DLP Audit Settings page of the SharePoint Access Auditor Data
  Collector Wizard.

**False Positive Sensitive Data**

Files that match multiple sensitive data criteria appear in every sensitive data review with a matched criteria selected. You can flag files identified as false positives for sensitive content either through a resource review or through the **Settings** > **Sensitive Data** node of the Netwrix Access Analyzer (formerly Enterprise Auditor) Console. Flagging removes the file from reports on sensitive data until you un-flag it or the file is modified and rescanned.

:::note
A false positive is a file that matches the sensitive data criteria but doesn't contain sensitive data.
:::


## Automation Prerequisites

When the Access Information Center is configured to commit Active Directory group membership
changes, the Review Administrator approval process will automatically commit approved changes
recommended by owners during the review. Each type of review has additional requirements for
automation of approved changes.

- Access review — The resource must have an assigned Access Group for the access-level being
  modified (Read, Modify, or Full Control), and these groups must be in an OU for groups to be
  managed through the Access Information Center
- Membership review — The group must be in an OU for groups to be managed through the Access
  Information Center
- Permissions review — The resource must have an assigned Access Group for the access-level being
  modified (Read, Modify, or Full Control)
- Sensitive Data review — There are no additional prerequisites

    :::warning
    Of the three possible actions of Keep, Remove, and Not Sensitive for a Sensitive
    Data review, the Remove action can't be automated through the Access Information Center. You
    must do it manually outside of the application. See the Sensitive Data Review Automation topic
    for additional information.
    :::


See the [Access Groups](/docs/accessinformationcenter/12.0/resourceowners/accessgroups.md) topic for additional information.

### Sensitive Data Review Automation

When approving changes in a Sensitive Data review, only Not Sensitive (flag as False Positive)
requests can be automatically committed.

You can't remove a file from a resource through the Access Information Center.

Approving a Keep request has no action associated to it. The file contains sensitive data and
remains where it is.

Approving a Not Sensitive request to flag a file as a False Positive removes the file from
Access Information Center and Netwrix Access Analyzer (formerly Enterprise Auditor) reports, which
identify it as containing sensitive data matching that specific criteria. However, if the file
matches multiple sensitive data criteria, the file still displays in reports and reviews for the
other criteria. The file is added to the false positives list in the Netwrix Access Analyzer
(formerly Enterprise Auditor) **Settings** > **Sensitive Data** node for that specific criteria. If
the file is modified after being flagged, it may reappear in sensitive data reports and reviews if
matches to the criteria were found on subsequent data collection scans.
