---
description: >-
  Netwrix OneSecutre may report the Password never expires setting as enabled
  for accounts even though Active Directory shows it as disabled. This article
  explains the cause (a GPO with maxPasswordAge=0) and how to resolve it.
keywords:
  - password never expires
  - maxPasswordAge
  - GPO
  - Group Policy
  - Active Directory
  - Netwrix OneSecutre
  - password policy
  - report
products:
  - onesecure
sidebar_label: Password Never Expires Report Shows Incorrect Data
tags:
  - troubleshooting
title: "Password Never Expires Report Shows Incorrect Data"
knowledge_article_id: kA0Qk0000000YkrKAE
---

# Password Never Expires Report Shows Incorrect Data

## Symptom

In Netwrix 1Secure, the **Password never expires** setting is incorrectly reported as enabled for particular accounts. When you review **Active Directory Users and Computers** settings, the setting is disabled for affected accounts.

## Cause

A GPO with the `maxPasswordAge=0` parameter is applied to the affected accounts. The parameter causes Netwrix OneSecutre to report the **Password never expires** setting as enabled.

## Resolution

In the corresponding GPO, set the `maxPasswordAge` parameter to any non-zero value. This will allow Netwrix OneSecutre to correctly report the affected accounts.
