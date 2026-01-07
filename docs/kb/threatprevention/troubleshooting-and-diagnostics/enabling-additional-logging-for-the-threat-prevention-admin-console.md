---
description: >-
  Shows two methods to enable debug-level logging for the Threat Prevention
  Admin Console on the SI management server and how to revert logging back to
  WARN after you collect logs.
keywords:
  - threat prevention
  - logging
  - debug
  - admin console
  - SI management server
  - SIWinConsole.log.config
  - SIWinConsole
  - Update Log Levels
products:
  - threat-prevention
sidebar_label: Enabling additional logging for the Threat Prevent
tags: []
title: "Enabling additional logging for the Threat Prevention Admin Console"
knowledge_article_id: kA04u0000000I2PCAU
---

# Enabling additional logging for the Threat Prevention Admin Console

## Summary
Enabling additional logging for the Threat Prevention Admin Console

## Issue
How to enable additional logging for the Threat Prevention Admin Console.

## Instructions
There are two options for enabling additional logging:

### Option one
1. Access the SI management server.
2. Open the Enterprise Manager installation folder. The default location is `...\STEALTHbits\StealthINTERCEPT\SIWinConsole`.
3. Edit the file called `SIWinConsole.log.config` in your favorite text editor.
4. Change `WARN` to `DEBUG` in the following portion of that file:

```

```

5. Save the config file and restart the Threat Prevention Admin Console.

### Option two
1. Open the Threat Prevention Admin Console on the SI management server.
2. Select **Agents**.
3. Click on the Pencil icon at the top left of the window.
4. Change the drop-down under **Administration Console** to `DEBUG`.
5. Click the **Update Log Levels** button.

After collecting debug logs switch Threat Prevention Admin Console logging back to `WARN`.

## Module
SI - Admin Console

## Salesforce Article ID
000001063
