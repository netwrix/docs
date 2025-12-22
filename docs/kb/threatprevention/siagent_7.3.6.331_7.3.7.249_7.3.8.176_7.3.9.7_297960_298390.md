---
description: >-
  This article details the changes and behaviors associated with the SIAgent versions 7.3.6.331 to 7.3.9.7, including fixes for specific issues related to Microsoft updates and debug file management.
keywords:
  - SIAgent
  - hotfix
  - Microsoft updates
  - debug files
  - authentication policy
sidebar_label: SIAgent Hotfix Summary
tags: []
title: "SIAgent Hotfix Summary for Versions 7.3.6.331 to 7.3.9.7"
knowledge_article_id: kA04u00000111KdCAI
products:
  - threat-prevention
---

# SIAgent Hotfix Summary for Versions 7.3.6.331 to 7.3.9.7

## Summary

- **297960:** MS updates: SUVP 23-10 support
- **298390:** Netwrix agent on AD servers is filling drive space with debug files

## Behavior Before Fix

### 297960:
- No Kerberos events: 2022 and 2019 Servers
- No NTLM events: 2019 and 2016 Servers
- No LDAP Search events: 2012 (pre-R2) Servers
- 2012 R2 - No impact

### 298390:
- Authentication-related events fill the logs if there is no authentication policy.

## Behavior After Fix

### 297960:
*Signatures updated; SI Agents must be fully functional with the latest Microsoft updates*

### 298390:
Authentication-related events are not logged if there is no authentication policy. Also, such events are moved to the API level.

## Changes Since Last Hotfix

- **297960:** MS updates: SUVP 23-10 support
- **298390:** Netwrix agent on AD servers is filling drive space with debug files

## Submitted By

Maxim Sidarau

## Affected Versions

**7.3.6 – 7.3.9**

## Affected Module

**SI - Windows Agent**

## Dev Ticket

**297960, 298390**

## Resolved in Version

- **7.3.6.331**
- **7.3.7.249**
- **7.3.8.176**
- **7.3.9.7**

## KB Type

**Hotfix**

## Modules Included

**SI – Windows Agent**

## YouTrack/Escalations

**298390 / 00384986**

## Customers

**Service Corporation International (SCI) - SI EPE**

## Cumulative List of Fixes Included Since Service Pack

### Instructions

Upgrade SI Agents to the latest version.

## Download Links

- [Download SIAgent 7.3.9.7](https://releases.netwrix.com/products/stealthintercept/7.3/stealthintercept-agent-7.3.9.7.exe)
- [Download SIAgent 7.3.8.176](https://releases.netwrix.com/products/stealthintercept/7.3/stealthintercept-agent-7.3.8.176.exe)
- [Download SIAgent 7.3.7.249](https://releases.netwrix.com/products/stealthintercept/7.3/stealthintercept-agent-7.3.7.249.exe)
- [Download SIAgent 7.3.6.331](https://releases.netwrix.com/products/stealthintercept/7.3/stealthintercept-agent-7.3.6.331.exe)