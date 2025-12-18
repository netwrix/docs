---
description: >-
  Answers common questions about Netwrix Account Lockout Examiner, including how
  accounts are populated, Windows Server 2008/R2 support, running as a service,
  IIS requirements, WMI queries, and Help-Desk Portal licensing.
keywords:
  - Account Lockout Examiner
  - Netwrix
  - account lockout
  - Help-Desk Portal
  - IIS
  - WMI
  - Windows Server 2008 R2
  - service
  - licensing
  - Win32_UserAccount
products:
  - auditor
sidebar_label: FAQ Account Lockout Examiner
tags: []
title: "FAQ Account Lockout Examiner"
knowledge_article_id: kA00g000000H9daCAC
---

# FAQ Account Lockout Examiner

**Q1**: How do I populate the Account list with my users? Should I add each one individually or is there a method to add all users from a domain at once?  
**A1**: Accounts are added to the list as soon as they are locked out. You do not need to populate the list.

**Q2**: Does Account Lockout Examiner have Windows 2008/R2 Server Support?  
**A2**: The last version of Account Lockout Examiner has full support for Windows Server 2008/R2 domain controllers.

**Q3**: Can Netwrix Account Lockout Examiner run as a Windows service?  
**A3**: Netwrix Account Lockout Examiner runs as a service, therefore it is not necessary to keep the program open once it has been configured.

**Q4** Is IIS required on the machine/server where Netwrix Account Lockout Examiner is installed?  
**A4**: Internet Information Services (IIS ) is only required for Netwrix Account Lockout Help-Desk Portal. If the Help-Desk Portal and Netwrix Account Lockout Examiner are installed on different computers, IIS must be installed on the computer with the Help-Desk Portal.

**Q5**: What the WMI queries are talking to on the DCs?  
**A5**: This queries use Windows Instrumentation management Service and requests for a) reading the security log and b) reading of account state Here are some fields that are queried:

- Win32_UserAccount
- Win32_NTLogEvent
- __InstanceCreationEvent
- win32_process
- Win32_OperatingSystem

**Q6**: Is a separate license required for the Netwrix Account Lockout Help-Desk Portal?  
**A6**: No, you do not need a separate license. The Help-Desk portal is a part of Netwrix Account Lockout Examiner, so if you have purchased the product, the web portal goes with it.
