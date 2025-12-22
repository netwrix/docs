---
description: >-
  Reference table to find detailed information about Risks shown in the "Risk
  Assessment" Window by mapping each risk to its data source and the
  corresponding Netwrix Auditor report.
keywords:
  - risk assessment
  - Netwrix Auditor
  - reports
  - Active Directory
  - SharePoint
  - file server
  - permissions
  - infrastructure
products:
  - auditor
sidebar_label: 'Netwrix Auditor Risk Assessment Reports Reference '
tags: []
title: "Netwrix Auditor Risk Assessment Reports Reference Table"
knowledge_article_id: kA04u000000Pd7VCAS
---

# Netwrix Auditor Risk Assessment Reports Reference Table

This table will help you find detailed information about Risks in the **"Risk Assessment" Window** by referencing a Risk with a related Netwrix Auditor report.

| Risk Group | Name | Data Source | Reference report | Hint for filters |
|---|---|---|---|---|
| Users and Computers | User accounts with "Password never expires" | `AD domain` | `Active Directory\State-in-Time Reports\User Accounts - Passwords Never Expire` |  |
| Users and Computers | User accounts with "Password not required" | `AD domain` | `Active Directory\State-in-Time Reports\User Accounts - Password Not Required` |  |
| Users and Computers | Disabled computer accounts | `AD domain` | `Active Directory\State-in-Time Reports\Computer Accounts` |  |
| Users and Computers | Inactive user accounts | `AD domain` | `Active Directory\State-in-Time Reports\User Accounts` |  |
| Users and Computers | Inactive computer accounts | `AD domain` | `Active Directory\State-in-Time Reports\Computer Accounts - Last Logon Time` |  |
| Users and Computers | Servers with Guest account enabled | `Windows Server` | `Windows Server\State-in-Time Reports\Local Users and Groups` | `(User or group name : Guest)` |
| Users and Computers | Servers that have local user accounts with "Password never expires" | `Windows Server` | `Windows Server\State-in-Time Reports\Local Users and Groups` | `Property : Password never expires%` |
| Permissions | User accounts with administrative permissions | `AD domain` | `Active Directory\State-in-Time Reports\Administrative Group Members` |  |
| Permissions | Administrative groups | `AD domain` | `Active Directory\State-in-Time Reports\Administrative Groups` |  |
| Permissions | Administrative group membership sprawl | `Windows Server` | `-` |  |
| Permissions | Empty security group | `AD domain` | `Active Directory\State-in-Time Reports\Empty Security Groups` |  |
| Permissions | Site collections with the "Get a link" feature enabled | `SharePoint farm` | `-` |  |
| Permissions | Sites with the "Anonymous access" feature enabled | `SharePoint farm` | `-` |  |
| Permissions | Site collections with broken inheritance | `SharePoint farm` | `-` |  |
| Data | Files and folders accessible by Everyone | `Windows File Server` | `File Servers\State-in-Time Reports\Account Permissions` |  |
| Data | File and folder names containing sensitive data | `Windows File Server` | `User Behaviour and Blind Spot Analysis \Information Disclosure\File Names Containing Sensitive Data` |  |
| Data | Potentially harmful files on file shares | `Windows File Server` | `User Behaviour and Blind Spot Analysis \Suspicious Files\Potentially Harmful Files on File Shares` |  |
| Data | Direct permissions on files and folders | `Windows File Server` | `File Servers\State-in-Time Reports\Folder and File Permission Details` | `Inherited permissions - Hide` |
| Data | Documents and list items accessible by Everyone and Authenticated Users | `SharePoint farm` | `-` |  |
| Infrastructure | Servers with inappropriate operating systems | `Windows Server` | `Windows Server\State-in-Time Reports\Windows Server Inventory` |  |
| Infrastructure | Servers with under-governed Windows Update configurations | `Windows Server` | `Windows Server\State-in-Time Reports\Windows Update Configuration` |  |
| Infrastructure | Servers with unauthorized antivirus software | `Windows Server` | `Windows Server\State-in-Time Reports\Windows Server Inventory` |  |
