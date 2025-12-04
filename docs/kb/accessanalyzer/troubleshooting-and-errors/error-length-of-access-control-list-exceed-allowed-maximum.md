---
description: >-
  Describes an error encountered when an Active Directory Inventory scan detects
  an access control list (ACL) that exceeds the allowed maximum size, and
  provides steps to prevent the scan from terminating.
keywords:
  - ACL
  - access control list
  - Active Directory
  - scan error
  - Netwrix Access Analyzer
  - 1-AD_Scan
  - ACL limit
  - maximum size
products:
  - access-analyzer
sidebar_label: 'Error: Length of Access Control List Exceed Allowe'
tags:
  - troubleshooting-and-errors
title: 'Error: Length of Access Control List Exceed Allowed Maximum'
knowledge_article_id: kA0Qk0000001gjZKAQ
---

# Error: Length of Access Control List Exceed Allowed Maximum

## Symptoms

Both of the following symptoms are present in your environment:

- There is a user that exceeds the access control list (ACL) maximum threshold when running an Active Directory Inventory `\1-AD_Scan` job in the Netwrix Access Analyzer application.
- The system generates the following error message:

```
Error on the Active Directory Inventory\1-AD_Scan: REDACTED USER DN 'Length of the access control list exceed the allowed maximum.
```

## Cause

This error is caused when the ACL reaches its maximum size. The size of an ACL varies with the number and size of its access control entries (ACEs). The maximum size of an ACL is 64 kilobytes (KB), or approximately 1,820 ACEs. However, reaching the maximum size can sometimes degrade performance.

**NOTE:** For more information on ACL Limitations, refer to the official Microsoft documentation: https://learn.microsoft.com/en-us/troubleshoot/windows-server/windows-security/error-add-user-to-security-permissions (Maximum number of access control entries in the access control list).

## Resolution

To prevent the error from immediately terminating the scan when the ACL maximum size is reached, follow these steps:

1. Perform a cumulative update to Netwrix Access Analyzer version `11.6.0.114` or later.
2. Follow the steps in this document to perform the upgrade process: Netwrix Access Analyzer Console Upgrade — https://docs.netwrix.com/docs/auditor/10_8

> **IMPORTANT:** This hotfix changes the exception handling so that instead of terminating the scan, a warning is logged about the user not being scanned.
