---
description: >-
  Describes why the `Agents have become unresponsive` error appears in Netwrix
  Threat Manager when events are processed via Netwrix Activity Monitor and how
  to resolve it.
keywords:
  - Agents have become unresponsive
  - Netwrix Threat Manager
  - Netwrix Activity Monitor
  - Periodic AD Status Check
  - Monitored Domains
  - event outputs
  - unresponsive agents
products:
  - activitymonitor
  - threat-manager
sidebar_label: Agents Have Become Unresponsive Error
tags: []
title: "Agents Have Become Unresponsive Error"
knowledge_article_id: kA0Qk0000000LinKAE
---

# Agents Have Become Unresponsive Error

## Symptoms

- The `Agents have become unresponsive` error is prompted in Netwrix Threat Manager.
- The environment is set up to process events via **Netwrix Activity Monitor**.

## Causes

1. Periodic AD Status Check event reporting is disabled for the monitored domain.
2. The output for the affected domain was disabled in **Netwrix Activity Monitor**.

## Resolutions

### Cause #1

Enable the **Periodic AD Status Check event reporting** option in **Netwrix Activity Monitor** for the affected domain − refer to the **Netwrix Threat Prevention Output** section of the following article for additional information: Monitored Domains − Domain Event Outputs · v7.0.

### Cause #2

Verify the monitoring for the affected domain is enabled − review the state of the domain in the **Monitored Domains** tab of **Netwrix Activity Monitor**.

## Related articles

- Monitored Domains − Domain Event Outputs · v7.0
