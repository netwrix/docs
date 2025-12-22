---
description: >-
  This article outlines recent improvements to the Offline Temporary Password (OTP) feature and the implementation of 8-digit device codes, which facilitate multiple device usage per company.
keywords:
  - OTP
  - device codes
  - Endpoint Protector
  - security
  - authentication
sidebar_label: OTP Device Code Compatibility
tags:
  - features-and-operations
title: "OTP Device Code Compatibility"
knowledge_article_id: kA0Qk0000002B7ZKAU
products:
  - endpoint-protector
---

# OTP Device Code Compatibility

## Overview

This article outlines recent improvements to the Offline Temporary Password (OTP) feature and the implementation of 8-digit device codes, which facilitate multiple device usage per company.

## Availability

The 8-digit device code feature is available with **Endpoint Protector** agents version 5.7.2.4 for Windows and 2.5.1.3 for macOS.

## Behavior Based on Endpoint Protector Agent Version

1. ### For Versions 5.7.2.4 (Windows) or 2.5.1.3 (macOS) and Newer:
   - The user interface displays an 8-digit device code.
   - OTP codes are generated based on the 8-digit device code.

2. ### For Versions Older Than 5.7.2.4 (Windows) or 2.5.1.3 (macOS):
   - The user interface displays a 4-digit device code.
   - OTP codes are generated based on the 4-digit device code.

## Compatibility

- Codes generated from the user interface can be used with older versions.
- The **Endpoint Protector Server** re-computes the OTP device codes and displays them in the appropriate format according to the agent version.