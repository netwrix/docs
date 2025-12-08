---
description: >-
  Netwrix Access Analyzer reports can display overlapping words when Internet
  Explorer scripting is disabled. This article explains how to enable Active
  Scripting in Internet Explorer to resolve the issue.
keywords:
  - overlapping words
  - reporting
  - Internet Explorer
  - Active Scripting
  - Netwrix Access Analyzer
  - IE scripting
  - report display
products:
  - access-analyzer
sidebar_label: Overlapping Words in Reporting
tags:
  - reports-and-web-console
title: "Overlapping Words in Reporting"
knowledge_article_id: kA04u0000000IOxCAM
---

# Overlapping Words in Reporting

## Summary
**Overlapping Words in Reporting**

## Issue
Reporting is hard to read because words are overlapping.

## Instructions
The problem is the Scripting for IE is disabled.

### Enable IE Scripting
1. Run IE and go to **Internet Options**
2. Click on the **Security** tab
3. Highlight **Internet** and click **Custom Level**
4. Scroll down and look for **Active Scripting**
5. Put the bubble on **Enabled**
6. Click **OK** to get out and re-run the report

## Module and Versions
- Module: Netwrix Access Analyzer - Reporting
- Versions: 6.3 and Older
- Resolved In: 7.0
- Salesforce Article ID: 000001028
