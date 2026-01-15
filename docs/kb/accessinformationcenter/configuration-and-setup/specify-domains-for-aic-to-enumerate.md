---
description: >-
  Speed up domain enumeration in the Access Information Center (AIC) by
  specifying which domains the AIC enumerates on startup to improve application
  startup performance.
keywords:
  - Access Information Center
  - AIC
  - domain enumeration
  - AccessInformationCenter.Service.exe.config
  - DNS
  - startup performance
  - StealthAudit
  - domains
  - AuthSearchDomains
products:
  - access_info_center
sidebar_label: Specify Domains for AIC to Enumerate
tags: []
title: "Specify Domains for AIC to Enumerate"
knowledge_article_id: kA04u0000000IT4CAM
---

# Specify Domains for AIC to Enumerate

## Summary
Speed up domain enumeration in the Access Information Center (AIC)

## Issue
You can specify which domains the AIC enumerates, rather than allowing the AIC to try all of them every time.

It does this every time a user logs into the AIC.

A comma-separated list of domains that AIC is allowed to enumerate on startup.

This list is useful because customers often have domains with trust relationships that are unavailable due to being taken down, etc. This makes application startup take significantly longer.

## Instructions

1. Navigate to `C:\Program Files\STEALTHbits\Access Information Center\`.
2. Open `AccessInformationCenter.Service.exe.config` with a text editor (run as Administrator).
3. Locate the `AuthSearchDomains` setting.
4. Enter the DNS names of the domains as a comma-separated list in the `value` attribute:
   ```xml
   <add key="AuthSearchDomains" value="domain1.com,domain2.com,domain3.com" />
   ```
5. Save the file and restart the **Netwrix Access Information Center** service.

## Result
The Access Information Center will only enumerate the specified domains on startup, significantly reducing application startup time when unavailable trusted domains exist.
