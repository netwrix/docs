---
description: >-
  The isDeleted attribute is not being evaluated during ADI scans. Grant List
  Contents and Read Properties permissions on the Deleted Objects container so
  deleted objects are included in scans.
keywords:
  - isDeleted
  - ADI
  - Deleted Objects
  - dsacls
  - permissions
  - ADInventory
  - Netwrix Auditor
  - LCRP
products:
  - access-analyzer
sidebar_label: isDeleted not being checked in ADI scans
tags:
  - active-directory-auditing
title: "isDeleted not being checked in ADI scans"
knowledge_article_id: kA04u0000000IPgCAM
---

# isDeleted not being checked in ADI scans

## Summary
isDeleted not being checked in ADI scans

## Issue
isDeleted not being checked in ADI scans

## Instructions
To correct this behavior, you must grant permissions for List Contents and Read Properties to the Deleted Objects OU, like this:

1. Run the following command:
```powershell
dsacls "CN=Deleted Objects,DC=domain,DC=com" /g domain\\username:LCRP
```

## Product Information
- **Product:** Netwrix Auditor  
- **Module:** SA - DC - ADInventory  
- **Versions:** All  
- **Salesforce Article ID:** 000001543
