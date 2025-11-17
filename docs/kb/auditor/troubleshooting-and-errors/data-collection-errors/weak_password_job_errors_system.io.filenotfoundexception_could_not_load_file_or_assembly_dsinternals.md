---
description: >-
  This article addresses the error encountered when the Active Directory > 2.Users > AD_WeakPasswords job fails due to a missing assembly file.
keywords:
  - Active Directory
  - Weak Passwords
  - System.IO.FileNotFoundException
sidebar_label: Weak Password Job Errors
tags: []
title: "Weak Password Job Errors: System.IO.FileNotFoundException: Could Not Load File or Assembly: DSInternals.Replication.Interop.dll"
knowledge_article_id: kA0Qk0000001u09KAA
products:
  - auditor
---

# Weak Password Job Errors: System.IO.FileNotFoundException: Could Not Load File or Assembly: DSInternals.Replication.Interop.dll

## Symptom

The **Active Directory > 2.Users > AD_WeakPasswords** job fails, and you receive the following error:

```
System.IO.FileNotFoundException: Could not load file or assembly 'DSInternals.Replication.Interop.dll' or one of its dependencies. The specified module could not be found.
```

## Cause

The required Windows component **Microsoft Visual C++ Redistributable x86** is not installed.

> **NOTE:** Netwrix Enterprise Auditor requires the x86 version of the C++ Redistributable.

## Resolution

Download and install **Microsoft Visual C++ Redistributable x86** onto the Netwrix Enterprise Auditor server.

- [Download Microsoft Visual C++ Redistributable x86](https://aka.ms/vs/16/release/vc_redist.x86.exe)