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
  - threatprevention
sidebar_label: "Enabling Additional Logging for the Threat Prevention Admin Console"
tags:
  - kb
title: "Enabling Additional Logging for the Threat Prevention Admin Console"
knowledge_article_id: kA04u0000000I2PCAU
---

# Enabling Additional Logging for the Threat Prevention Admin Console

## Overview
This article describes how to enable additional logging for the Threat Prevention Admin Console.

## Instructions
There are two options for enabling additional logging:

> **NOTE:** Version 8.1 changed the logging engine used by the Admin Console, so the `SIWinConsole.log.config` file has a different format. In version 8.1 and later:
>
> - The root element is `<nlog>` instead of `<log4net>`, and the `minlevel` attribute on a `<logger>` rule sets the log level rather than a `<level>` element.
> - Saving the file applies the change immediately. Restarting the Admin Console is not necessary.
> - Option 2 writes a log level back to the configuration file, so it survives a restart.

### Option 1
1. Access the SI management server.
2. Open the Enterprise Manager installation folder. The default location is `...\STEALTHbits\StealthINTERCEPT\SIWinConsole`.
3. Edit the file called `SIWinConsole.log.config` in your favorite text editor.
4. Change `WARN` to `DEBUG` in the file, then save the config file and restart the Threat Prevention Admin Console.

### Option 2
1. Open the **Threat Prevention Admin Console** on the SI management server.
2. Select **Agents**.
3. Click the **Pencil** icon at the top left of the window.
4. Change the drop-down under **Administration Console** to `DEBUG`.
5. Click the **Update Log Levels** button to apply the change.

After collecting debug logs switch Threat Prevention Admin Console logging back to `WARN`.
