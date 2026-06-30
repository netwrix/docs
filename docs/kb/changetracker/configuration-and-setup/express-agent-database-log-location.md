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
knowledge_article_id:
---

# How to Change the Location of the Express Agent's Database and Log Files

## Instructions

Change the Express Agent's database and log files location by editing the `ConfigPath` switch in `expressAgent.ini`:

```ini
[ExpressAgent]
ConfigPath=/var/nnt/expressagent/
```

Set the `ConfigPath` value to the desired directory where the Express Agent should store its database and log files.
