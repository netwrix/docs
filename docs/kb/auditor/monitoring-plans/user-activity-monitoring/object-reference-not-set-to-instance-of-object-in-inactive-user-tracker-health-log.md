---
description: >-
  Explains the "Object reference not set to an instance of an object" error in
  the Netwrix Auditor Health Log for the Inactive User Tracker and how to
  resolve it by configuring the data collection account permissions.
keywords:
  - inactive user tracker
  - health log
  - object reference
  - data collection account
  - permissions
  - Netwrix Auditor
  - Event ID 2002
products:
  - auditor
sidebar_label: 'Object Reference Not Set to Instance of Object in '
tags: []
title: "Object Reference Not Set to Instance of Object in Inactive User Tracker Health Log"
knowledge_article_id: kA04u000001118rCAA
---

# Object Reference Not Set to Instance of Object in Inactive User Tracker Health Log

## Symptom

The following error is prompted in Netwrix Auditor Health Log for your Inactive User Tracker monitoring plan:

```text
Source: Active Directory Inactive Users Audit Service
Event ID: 2002
Computer: %computer_name%
Description: Monitoring plan: %Inactive_User_Tracker_monitoring_plan%
The following error has occurred while processing '%computer_name%':   
An error occurred: Object reference not set to an instance of an object.
```

## Cause

The data collection account used does not have sufficient permissions to collect data.

## Resolution

Configure the permissions for the data collection account used in Inactive User Tracker. For additional information, refer to the following article: Monitoring Plans — Data Collecting Account.

### Related articles

- Monitoring Plans — Data Collecting Account ⸱ 10.6
