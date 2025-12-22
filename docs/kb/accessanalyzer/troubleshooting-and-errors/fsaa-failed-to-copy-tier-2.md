---
description: >-
  FSAA Tier 2 copy operations fail when the target or proxy server disk is full;
  free or add disk space to resolve the error.
keywords:
  - FSAA
  - Tier 2
  - disk full
  - remote procedure call
  - TAppletRPCHelper.GetScanDatabase
  - failed to copy
  - proxy server
  - applet server
  - disk space
products:
  - access-analyzer
sidebar_label: FSAA Failed to Copy Tier 2
tags:
  - troubleshooting-and-errors
title: "FSAA Failed to Copy Tier 2"
knowledge_article_id: kA04u0000000IsECAU
---

# FSAA Failed to Copy Tier 2

## Summary
Tier 2s fail to copy when disk is full.

## Issue
`Failed to copy database from : Error in TAppletRPCHelper.GetScanDatabase...The remote procedure call failed.`

## Instructions
The disk drive is likely filling up on the proxy or applet (target) server.  

1. Check the disk usage on the proxy server and on the applet (target) server.
2. Add disk space or free space on the affected drive.

## Module and Metadata
- Module: SA - DC - FSAA - Activity; SA - DC - FSAA - DFS; SA - DC - FSAA - Permissions; SA - DC - FSAA - Sensitive Data
- Versions: *
- Dev Ticket: 20963, SAFS-2808
- Legacy Article ID: 1830
