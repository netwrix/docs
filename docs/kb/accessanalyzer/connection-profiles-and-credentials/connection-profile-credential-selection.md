--- 
description: >-
  Explains how Netwrix Access Analyzer selects which credentials from a
  Connection Profile to use for a target host, including domain matching rules
  and fallback order.
keywords:
  - connection profile
  - credentials
  - domain matching
  - WindowsDomain
  - DNSDomain
  - Netwrix Access Analyzer
  - target host
products:
  - access-analyzer
sidebar_label: Connection Profile Credential Selection
tags:
  - connection-profiles-and-credentials
title: "Connection Profile Credential Selection"
knowledge_article_id: kA04u0000000IwpCAE
---

# Connection Profile Credential Selection

## Summary
This article explains how Netwrix Access Analyzer selects credentials from Connection Profiles.

Netwrix Access Analyzer tries to match the domain in the **Account** column in the **Connection Profile** to:

1. The Target Host's `WindowsDomain`, as visible in **Host Management**.  
2. The Target Host's `DNSDomain`, as visible in **Host Management** (only if the Target Host's `WindowsDomain` value is blank).

If neither match, Netwrix Access Analyzer will attempt each credential in the Connection Profile in the order listed within the Connection Profile.

## Product / Module / Legacy ID
- **Product:** Netwrix Access Analyzer  
- **Module:** Netwrix Access Analyzer - Core  
- **Legacy Article ID:** 1793
