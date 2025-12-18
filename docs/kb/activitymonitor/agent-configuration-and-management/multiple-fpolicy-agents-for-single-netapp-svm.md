---
description: >-
  Explains support and caveats for configuring multiple FPolicy servers with a
  single NetApp SVM when monitored by Netwrix Activity Monitor (SAM).
keywords:
  - NetApp
  - FPolicy
  - SVM
  - SAM
  - Netwrix Activity Monitor
  - Smart Office Filtering
  - FPolicy servers
  - failover
products:
  - activitymonitor
sidebar_label: Multiple FPolicy Agents for Single NetApp SVM
tags: []
title: "Multiple FPolicy Agents for Single NetApp SVM"
knowledge_article_id: kA04u0000000ILZCA2
---

# Multiple FPolicy Agents for Single NetApp SVM

## Summary
Support for Multiple FPolicy Servers in SAM

## Issue
NetApp supports multiple FPolicy servers, but there are some caveats.

## Instructions
- Netwrix Activity Monitor (SAM) supports multiple primary servers out of the box (i.e., a single SVM can be monitored by several SAM Agents).
- If **Configure FPolicy** is enabled, each SAM Agent will add itself to the primary servers on start, and remove itself on shutdown.
- However, this configuration does not work well with our "Smart Office Filtering". Because events are distributed in round-robin fashion, an agent may not be able to detect a sequence of 15-25 expected events and replace them with a single user action, since it's not guaranteed that all events will go to the same FPolicy server.
- Secondary servers are supported, but not out of the box. Manual setup is required. Because secondary FPolicy Servers are only leveraged when something goes wrong with the primary, there are no expected issues for Smart Office Filtering, unless the failover to the secondary FPolicy server occurs while an Office change is happening.

### Important Note
Netwrix Auditor does not support this configuration yet, but it's on the roadmap for 2021 as of the writing of this article (August 2020).

## Product
Netwrix Activity Monitor (SAM)

## Module
File Activity Monitor

## Versions
3.0+
