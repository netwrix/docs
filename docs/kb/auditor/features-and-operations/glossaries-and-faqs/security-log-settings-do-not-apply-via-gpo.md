---
description: >-
  When a Group Policy sets the maximum security event log size but the computer
  does not honor it, legacy registry settings may override the GPO. This article
  explains how to find the registry key and restore the policy behavior.
keywords:
  - GPO
  - Group Policy
  - security log
  - Event Log Service
  - MaxSize
  - registry
  - gpresult
  - gpupdate
  - ADMX
  - EventLog
products:
  - auditor
sidebar_label: Security log settings do not apply via GPO
tags: []
title: "Security log settings do not apply via GPO"
knowledge_article_id: kA04u000000HDk6CAG
---

# Security log settings do not apply via GPO

## Symptoms
When configuring maximum security event log size via Group Policy, you may notice that after the policy is applied, the log size on a specific computer is still not set to the value specified in the GPO (Group Policy Object).

## Cause
A legacy registry setting overwrites the GPO. 

## Resolution
Open a regedit on the problematic server and check if the following key exists:

```
KEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\EventLog\Security\
```

The values inside this key, like `MaxSize`, are legacy and usually set by ADMX templates. Check in your current domain and local policies applied to the problematic computer if the following section is configured:
**Computer Configuration** > **Administrative Templates** > **Windows Components** > **Event Log Service** > **Security**

The easiest way to find the right policy is using the `gpresult` tool.  
To fix the issue, simply set the policy back to `Not configured` and execute `gpupdate`.
