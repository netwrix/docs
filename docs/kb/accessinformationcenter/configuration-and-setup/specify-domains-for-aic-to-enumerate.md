---
description: >-
  Speed up domain enumeration in the Access Information Center (AIC) by
  specifying which domains the AIC enumerates on startup to improve application
  startup performance.
keywords:
  - Access Information Center
  - AIC
  - domain enumeration
  - web.config
  - DNS
  - startup performance
  - StealthAudit
  - domains
products:
  - access_info_center
sidebar_label: Specify Domains for AIC to Enumerate
tags: []
title: "Specify Domains for AIC to Enumerate"
knowledge_article_id: kA04u0000000IT4CAM
---

# Specify Domains for AIC to Enumerate

## Summary:
**Summary:** Speed up domain enumeration in the Access Information Center (AIC)

## Issue:
**Issue:** You can specify which domains the AIC enumerates, rather than allowing the AIC to try all of them every time.

It does this every time a user logs into the AIC.

A comma-separated list of domains that AIC is allowed to enumerate on startup.

This list is useful because customers often have domains with trust relationships that are unavailable due to being taken down, etc. This makes application startup take significantly longer.

## Instructions:
**Instructions:**

In the AccessInformationCenter.Service.exe.config file (by default `C:\Program Files\STEALTHbits\Access Information Center\`), enter the DNS names of the domains you'd like in the `AuthSearchDomains` tag, between the quotations of `value=""`.
