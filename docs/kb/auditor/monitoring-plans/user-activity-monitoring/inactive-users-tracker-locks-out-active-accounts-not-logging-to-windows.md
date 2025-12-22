---
description: >-
  Netwrix Auditor's Inactive Users Tracker uses the LastLogonTime AD attribute
  to determine account inactivity; in hybrid environments some actions do not
  update this attribute, which can cause active accounts to be locked. This
  article explains the cause and provides a workaround by excluding users or OUs
  from the monitoring scope.
keywords:
  - Inactive Users Tracker
  - LastLogonTime
  - AD attribute
  - hybrid environment
  - lockout
  - Netwrix Auditor
  - Office 365
  - omit list
  - monitoring scope
products:
  - auditor
sidebar_label: Inactive Users Tracker Locks Out Active Accounts n
tags: []
title: "Inactive Users Tracker Locks Out Active Accounts not Logging to Windows"
knowledge_article_id: kA04u000000TsnvCAC
---

# Inactive Users Tracker Locks Out Active Accounts not Logging to Windows

## Symptom and Cause

Netwrix Auditor's Inactive Users Tracker uses the `LastLogonTime` AD attribute to decide when a user was last active. Certain actions (such as logon to Office 365 on hybrid environments) do not affect this attribute, so Netwrix Auditor's Inactive Users Tracker (IUT) perceives these accounts to be inactive and locks them.

## Solution

You can work around this issue by omitting either the user or the OU from the monitoring scope of Netwrix Auditor's Inactive Users Tracker. This prevents IUT from acting on the account in any way, making it impossible for the tracker to set the locked status for the specified accounts.

For additional information on omit lists for Inactive Users Tracker, refer to the following article: https://docs.netwrix.com/docs/auditor/10_8
