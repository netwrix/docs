---
description: >-
  Describes the Windows audit policy settings required for PCI Compliance and
  recommends which events to enable or leave disabled.
keywords:
  - PCI
  - PCI Compliance
  - audit policy
  - Windows auditing
  - object access
  - account logon
  - directory service
  - process tracking
products:
  - auditor
sidebar_label: Audit Policy settings for PCI Compliance
tags: []
title: "Audit Policy settings for PCI Compliance"
knowledge_article_id: kA00g000000H9SHCA0
---

# Audit Policy settings for PCI Compliance

This article describes the audit policy required for **PCI Compliance**.

## Required Audit Policy

The following **Audit Policy** is required for **PCI Compliance**:

- **Account Logon Events** – **Success** and **Failure**
- **Account Management Events** – **Success** and **Failure**
- **Directory Service Access Events** – **Failure**
- **Logon Events** – **Success** and **Failure**
- **Object Access Events** – **Success** and **Failure**
- **Policy Change Events** – **Success** and **Failure**
- **Privilege Use Events** - **Failure**
- **Process Tracking** – **No Auditing**
- **System Events** – **Success** and **Failure**

**Directory Service Access Events** are available on a **Domain Controller** only.  
**Object Access** – used in conjunction with **Folder and File Auditing**. Auditing **Failure** reveals attempted access to forbidden secure objects which may be an attempted security breach. Auditing **Success** is used to provide an audit trail of all access to secured data, for example, card data in a settlement/transaction file or folder.

## Recommendations

1. Use **Netwrix File Server Change Reporter** to monitor file changes; do not enable this audit policy for **Event Log Manager**.
2. **NOTE:** When using `Windows Server 2008` / `Windows 7` or later, there is an **Advanced Audit Policy Configuration** option available which allows more precise application of auditing of **Object Access** events and is useful in eliminating unwanted events. If available, enable the **Audit File System** option only for **Success**, and optionally **Failure**, but leave other settings as **Not Configured**.
3. **Process Tracking** – not recommended, as this will generate a large number of events.

## Recommended Configuration

You should configure the following policies and leave the other policies as is:

- **System Events** – **Success** and **Failure**
- **Policy Change Events** – **Success** and **Failure**
- **Account Management Events** – **Success** and **Failure**
- **Account Logon Events** – **Success** and **Failure**
- **Logon Events** – **Success** and **Failure**
- **Privilege Use** – **No auditing**
