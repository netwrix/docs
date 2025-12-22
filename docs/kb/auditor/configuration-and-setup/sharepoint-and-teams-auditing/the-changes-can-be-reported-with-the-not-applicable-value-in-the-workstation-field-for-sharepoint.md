---
description: >-
  Explains which SharePoint changes are reported with the "Not applicable" value
  in the "Workstation" field and when the field is missing in Netwrix Auditor
  audit reports.
keywords:
  - SharePoint
  - Workstation
  - Change Summary
  - audit reports
  - Not applicable
  - content security
  - farm configuration
  - Netwrix Auditor
  - PowerShell
  - Upload Multiple Files
products:
  - auditor
sidebar_label: The changes can be reported with the "Not applicab
tags: []
title: >-
  The changes can be reported with the "Not applicable" value in the
  "Workstation" field for SharePoint
knowledge_article_id: kA00g000000H9SZCA0
---

# The changes can be reported with the "Not applicable" value in the "Workstation" field for SharePoint

The following changes are reported with the "Not applicable" value in the "Workstation" field in the Change Summary

emails (in audit reports the "Workstation" field will be missing for these changes):

- **Content Security changes:**
  - Assignment of permissions to SharePoint sites,lists, libraries, folders, documents or items
  - Permission inheritance break or restore on any SharePoint object
  - Creation and deletion of SharePoint groups, as well as changes to group membership
  - Creation, deletion and modification of permission levels

- **Farm configuration changes:**
  - Changes to the Farm administrators group membership
  - Addition and removal of servers, changes to service status
  - Web application creation and deletion, changes to key web application settings
  - Changes to the following web application security policies: anonymous access policy, user policy, security policy levels
  - Site collection creation and deletion, changes to key site collection settings
  - Addition, removal and deployment of SharePoint solutions
  - Addition and removal, activation and deactivation of farm-wide features

The **"Workstation"** field is not reported for content changes if they were made in one of the following ways:

- Through PowerShell cmdlets
- Through the **Site settings -->  Content and Structure** menu
- Through Microsoft Office applications integrated with SharePoint
- Through SharePoint workflows
- Through the **Upload Multiple Files** menu option
- Through the **Open With Explorer** menu option
- Through a shared folder
- Deletion of items through the context menu
