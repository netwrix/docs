---
sidebar_position: 5318
title: Cleanup Job Group
---

# Cleanup Job Group

The **Active Directory** > **Cleanup** Job Group identifies potential stale and unused users, computers, and groups as well as issues with group membership. Remediation workflows are included to deprovision unnecessary objects.

**CAUTION:** Apply changes only to intended target Active Directory objects, and ensure only the changes required are enabled. Enabling and executing action modules without consideration can negatively impact Active Directory.

***RECOMMENDED:*** Run the actions in a test environment before making changes to a production environment.

![Cleanup Job Group Overview page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Cleanup/OverviewPage.png "Cleanup Job Group Overview page")

The job groups in the Cleanup Job Group are:

* [1.Groups Job Group](Groups/Overview "1.Groups Job Group") – Provides an automated workflow to safely deprovision groups, as well as the ability to stamp security groups with what resources they are given access to
* [2.Users Job Group](Users/Overview "2.Users Job Group") – Provides an automated workflow to deprovision stale and unused user accounts
* [3.Computers Job Group](Computers/Overview "3.Computers Job Group") – Provides an automated workflow to deprovision stale computer accounts
* [AD\_CleanupProgress Job](AD_CleanupProgress "AD_CleanupProgress Job") – Tracks Active Directory computer, group, and user exceptions over time. This information can be used to provide a high-level picture of an organization's Active Directory cleanup effort.