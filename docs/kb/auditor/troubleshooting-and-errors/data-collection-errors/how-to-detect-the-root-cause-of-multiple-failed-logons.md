---
description: >-
  Explains how to find the root cause when Netwrix Auditor reports many failed
  logons from a single workstation or server, and lists places to check for
  outdated credentials.
keywords:
  - failed logons
  - logon failures
  - Netwrix Auditor
  - credentials
  - Windows Credential Manager
  - ADFS
  - DCOM
  - task scheduler
  - troubleshooting
products:
  - auditor
sidebar_label: How to detect the root cause of multiple failed lo
tags: []
title: "How to detect the root cause of multiple failed logons"
knowledge_article_id: kA00g000000H9eNCAS
---

# How to detect the root cause of multiple failed logons

## Symptom

Netwrix Auditor for Logon Activity may report a large amount of failed logons from a single workstation or server.

## Cause

Usually, this happens because the problematic account credentials were saved somewhere on the target machine and became outdated. If a user's password was changed but not updated in the system or application that used it, those systems/applications will try to use the stored outdated credentials and generate a large number of failed logons.

## Resolution

Login to the originating machine and check the following systems for outdated credentials:

- **Windows Credential Manager** - may store outdated credentials.
- **Windows task scheduler** - there could be a task configured to run using the problematic account.
- **Application or service** - there could be a service that is trying to start or a tool/application that is trying to run using outdated credentials.
- **Terminal Server session** - there could be an opened session with outdated credentials.
- **AD Federation Services** - replication issues - a new password was not replicated to ADFS.
- **DCOM objects** - sometimes a computer requires a restart after changing user password to apply settings to DCOM objects that are using these credentials.

Enter valid account credentials.

If you want an overview on how Failed Logon information is collected, check this article: https://kb.netwrix.com/5905 (Why Do I Have Incomplete Information on Failed Logons?)

If you need a guide on how to Investigate Failed Logon, check this article: https://kb.netwrix.com/5198 (Investigating Failed Logons)
