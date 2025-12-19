---
description: >-
  Explains the additional audit details that Netwrix Auditor can
  collect—originating workstation and group membership—and lists the reports
  that include these details, plus configuration considerations for Security
  event log and Audit logon events.
keywords:
  - Active Directory
  - Exchange
  - Group Policy
  - originating workstation
  - Security event log
  - group membership
  - reports
  - Netwrix Auditor
  - Audit logon events
products:
  - auditor
sidebar_label: 'Additional Audit Details: How it Works'
tags: []
title: 'Additional Audit Details: How it Works'
knowledge_article_id: kA00g000000H9SBCA0
---

# Additional Audit Details: How it Works

Netwrix Auditor provides reports on Active Directory, Exchange Server and Group Policy changes with extended audit data. When a new Managed Object is created, you are prompted to select whether you want to collect the following additional audit details from the monitored domain:

- Originating workstation
- Group membership

If these options are enabled, additional events are written to the Security event log. Note that this may lead to data overwrites. To prevent data loss it is recommended to configure the maximum size and retention settings of the Security event log as described in the Netwrix Auditor Installation and Configuration Guide: https://www.netwrix.com/download/documents/Netwrix_Auditor_Installation_Configuration_Guide.pdf

## 1. Reports With Originating Workstation

Netwrix Auditor contains a number of reports on Active Directory, Exchange Servers and Group Policy changes that, in addition to the standard WHO, WHAT, WHERE and WHEN fields, provide the information on the originating workstation, that is the name of the computer where the user was logged on when they made the change.

The following reports with the **Workstation** field are available for each audited system:

### Active Directory
- All Active Directory Changes by Groups With Originating Workstation
- All Active Directory Changes by Object Type With Originating Workstation
- All Active Directory Changes by User With Originating Workstation

### Exchange Servers
- All MS Exchange Changes by Groups With Originating Workstation
- All MS Exchange Changes by Object Type With Originating Workstation
- All MS Exchange Changes by Server With Originating Workstation
- All MS Exchange Changes by User With Originating Workstation

### Group Policy
- All Group Policy Changes by Groups With Originating Workstation
- All Group Policy Changes With Originating Workstation

If the **Originating workstation** option is enabled, the **Workstation** field under each change in these reports contains the name/IP address and the MAC address of the computer from which the change was made.

**NOTE:** For the product to be able to collect the information on the originating workstation, you must configure the Audit logon events policy. If automatic audit configuration is enabled, this setting is adjusted automatically. For instructions on how to configure it manually, refer to the Netwrix Auditor Installation and Configuration Guide: https://www.netwrix.com/download/documents/Netwrix_Auditor_Installation_Configuration_Guide.pdf

## 2. Reports With Data Filtering by Groups

If the **Group membership** option is enabled, the product will collect the information on the group membership of the users who make the changes. This information can be used to apply filters to the collected audit data and get the information on changes performed by members of specific groups only.

This functionality is available in the following reports for each audited system:

### Active Directory
- All Active Changes by Groups With Originating Workstation

### Exchange Servers
- All MS Exchange Changes by Group With Originating Workstation

### Group Policy
- All Group Policy Changes by Groups With Originating Workstation

By default, these reports show all changes to the monitored environment grouped by the groups to which users who made the changes belong. If you want to get the information on the changes performed by members of a specific group, select this group (or several groups) in the corresponding filter, and the report will return data on the changes performed only by members of the selected.
