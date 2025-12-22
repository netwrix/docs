---
description: >-
  When saving a scheduled task, Netwrix Access Analyzer may report a logon
  session error caused by a Local Security Policy that prevents storing
  passwords and credentials. This article explains the symptom, cause, and
  resolution.
keywords:
  - scheduled task
  - scheduled job
  - SECPOL.MSC
  - Network access
  - Do not allow storage of passwords
  - logon session
  - credentials
  - Local Security Policy
products:
  - access-analyzer
sidebar_label: Error When Adding Scheduled Task
tags:
  - troubleshooting-and-errors
title: "Error When Adding Scheduled Task"
knowledge_article_id: kA04u0000000IT9CAM
---

# Error When Adding Scheduled Task

## Symptom

When you attempt to save a scheduled task, Netwrix Access Analyzer prompts the following error:

```
Failed to add scheduled job. Error while saving the task. A specified logon session does not exist. It may already have been terminated.
```

## Cause

This error occurs because in Local Security Policy settings, the tasks are created with this security option enabled: **Run whether user is logged on or not.**

Within local security policy (`SECPOL.MSC`) | Security Settings | Local Policies | Security Options, this option is enabled: **Network access: Do not allow storage of passwords and credentials for network authentication.**

## Resolution

Disable this setting: **Network access: Do not allow storage of passwords and credentials for network authentication.** If this setting is not configurable, it must be changed at the Group Policy level.
