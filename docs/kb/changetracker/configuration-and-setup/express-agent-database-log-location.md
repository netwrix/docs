---
title: "How to Change the Location of the Express Agent's Database and Log Files"
description: >-
  Use the ConfigPath switch in expressAgent.ini to change the Express Agent
  database and log files location on Netwrix Change Tracker.
sidebar_label: Express Agent Database and Log Location
keywords:
  - express agent
  - ConfigPath
  - expressAgent.ini
  - database location
  - log files
  - /var/nnt
  - configuration
  - Netwrix Change Tracker
  - agent settings
  - file path
products:
  - change-tracker
tags:
  - kb
  - configuration-and-setup
knowledge_article_id: ka04u000000HdBHAA0
---

# How to Change the Location of the Express Agent's Database and Log Files

<!-- SME REVIEW NEEDED: This article is thin. The source KB body only had the config snippet below, though the original had broken screenshot attachments suggesting a fuller procedure (stop service, back up file, edit, restart service, verify log). Please decide:
  1. EXPAND — add an Overview section and full numbered steps (prerequisites, exact service name, verification step)
  2. RETIRE — if this doesn't warrant a standalone KB
-->

## Instructions

1. Change the Express Agent's database and log files location by editing the `ConfigPath` switch in `expressAgent.ini`:

```ini
[ExpressAgent]
ConfigPath=/var/nnt/expressagent/
```

2. Set the `ConfigPath` value to the desired directory where the Express Agent should store its database and log files.
