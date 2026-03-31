---
description: >-
  This article explains how to troubleshoot the FSAA registry key error that
  occurs when an FSAA scan cannot open a registry key on Windows or NAS hosts.
keywords:
  - FSAA
  - registry key
  - NAS
  - access denied
  - FSAA scan
  - Netwrix Access Analyzer
  - SBTLogging
  - Host Management
products:
  - access-analyzer
sidebar_label: FSAA Registry Key Error
tags:
  - troubleshooting-and-errors
title: "FSAA Registry Key Error"
knowledge_article_id: kA04u0000000IvhCAE
---

# FSAA Registry Key Error

## Summary
**FSAA Registry Key Error on NAS devices**

## Issue
`Error during processing: Could not open registry key SYSTEM\CurrentControlSet\Services\SBTLogging\Parameters for reading: Access is denied (5); local: False`

If you get this error after running an FSAA scan, the scan was unable to open a registry key.

## Instructions

### Windows
If you get this after scanning a Windows host, either the registry key doesn't exist or access is denied. To investigate:

1. Open **Regedit**.
2. From **Start**, open **CMD** and run **Regedit** (run it using the same credential as the scan).
3. Navigate to the location in the error message and verify whether the key exists or if you get access denied.

### NAS
If you get this after scanning a NAS host, check the details in Host Management:

1. Open the Netwrix Auditor console.
2. Find **Host Management** on the left-hand side.
3. Select **All Hosts**.
4. Find the host that has the issue.
5. Select **View\Edit Host** (top right).
6. Select **Edit Host** (bottom of the right).
7. Locate the **OSName**, **OSType**, **Model**, and **Manufacturer** fields.
8. Change **OSName** and **OSType** to `NAS`.
9. Change **Model** and **Manufacturer** to `N/A`.

## Product
Netwrix Access Analyzer

## Module
SA - DC - FSAA - Activity;SA - DC - FSAA - Permissions

## Legacy Article ID
1200
