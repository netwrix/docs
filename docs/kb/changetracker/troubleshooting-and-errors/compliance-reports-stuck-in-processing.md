---
description: >-
  If compliance reports in Netwrix Change Tracker show Status as Processing
  with a percentage that never reaches 100%, an IIS request-filtering tool
  such as UrlScan may be blocking the Transfer-Encoding header. This article
  explains the cause and the fix.
keywords:
  - change-tracker
  - compliance report
  - UrlScan
  - Transfer-Encoding
  - IIS
  - Processing
  - Netwrix Change Tracker
  - report stuck
products:
  - changetracker
knowledge_article_id: ka04u000000Hd9SAAS
sidebar_label: 'Compliance Reports Stuck in Processing'
tags: [kb, troubleshooting-and-errors]
title: 'Compliance Reports Stuck in Processing'
---

# Compliance Reports Stuck in Processing

## Symptom

A compliance report in Netwrix Change Tracker never finishes running. The report's **Status** value shows `Processing` with a percentage that never reaches `100%`.

## Cause

An IIS request-filtering tool on the Hub server is blocking the report data collection. The most common cause is UrlScan, which screens incoming IIS requests against administrator-defined rules and can be configured to block the `Transfer-Encoding` header. Netwrix Change Tracker uses `Transfer-Encoding` to gather report data from a remote system, so a filtering rule that blocks it prevents the report from completing.

## Resolution

If UrlScan is installed on the Hub server, stop it from blocking `Transfer-Encoding`:

1. Go to the UrlScan install location, `C:\Windows\System32\inetsrv\urlscan`.
2. Open the `.ini` file that controls the filtering rules in a text editor.
3. Search the file for the `Transfer-Encoding` entry.
4. Comment out the entry by adding a `;` at the start of the line, so the line reads `;Transfer-Encoding:`.
5. Save and close the `.ini` file.
6. Restart IIS.

After IIS restarts, run the report again. It should now reach `100%` instead of remaining in `Processing`.

> **NOTE:** If UrlScan is not installed, check for another IIS request-filtering or security module on the Hub server that may be blocking the `Transfer-Encoding` header, and apply the equivalent exclusion for it.
