---
description: >-
  This article explains how to whitelist or exclude Endpoint Protector (EPP) processes in CrowdStrike to ensure proper functionality without interference from security policies.
keywords:
  - Endpoint Protector
  - CrowdStrike
  - whitelisting
  - exclusion list
  - security policies
sidebar_label: Whitelist or Exclude EPP Processes
tags:
  - features-and-operations
title: "Whitelist or Exclude Endpoint Protector Processes in CrowdStrike"
knowledge_article_id: kA0Qk0000002B7GKAU
products:
  - endpoint-protector
---

# Whitelist or Exclude Endpoint Protector Processes in CrowdStrike

## Overview

This article explains how to whitelist or exclude Endpoint Protector (EPP) processes in CrowdStrike. This ensures that Endpoint Protector functions correctly and is not blocked or interfered with by CrowdStrike security policies.

## Instructions

Follow these steps to add EPP processes to the CrowdStrike whitelist or exclusion list, based on your operating system:

### For Windows

- **Path:** `C:\Program Files\CoSoSys\Endpoint Protector\EPPService.exe`
- **Application:** `EPPService.exe`

### For macOS

- **Path:** `/Applications/EndpointProtectorClient.app/Contents/MacOS/EppClient`
- **Application:** `EndpointProtectorClient.app`