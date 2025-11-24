---
description: >-
  Service account generates failed logon events after a password change because
  collectors did not get updated credentials. This article explains how to
  update the service account credentials for Event Log Manager, Inactive User
  Tracker, and Netwrix Password Reset collectors.
keywords:
  - failed logon
  - service account
  - password change
  - Event Log Manager
  - Inactive User Tracker
  - Netwrix Password Reset
  - Netwrix Auditor
  - monitoring plan
  - collector
  - credentials
products:
  - auditor
sidebar_label: Failed Logon Attempts after Recent Service Account
tags: []
title: "Failed Logon Attempts after Recent Service Account Password Change"
knowledge_article_id: kA04u00000110m2CAA
---

# Failed Logon Attempts after Recent Service Account Password Change

## Symptom

A Netwrix Auditor service account is generating failed logon events after the recent password change.

## Cause

The service account password was not updated for separate collectors (Netwrix Password Reset, Event Log Manager and Inactive User Tracker) with monitoring plans set up.

## Resolution

A service account password is not propagated automatically in Netwrix Password Reset, Event Log Manager and Inactive User Tracker collectors.

For Event Log Manager, Inactive User Tracker and Netwrix Password Reset:

1. Open the corresponding application, select your monitoring plan and click **Edit**.
2. In the **General** tab, specify new credentials for your service account.

Refer to the following screenshots for reference on service accounts credentials to be changed in case you've reset a password in Netwrix Auditor:

![Service account credentials screenshot]./../0-images/ka04u00000117Vm_0EM4u000008M8Pe.png)

