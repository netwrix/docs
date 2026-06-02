---
title: "Gen 7 Agent for Linux"
description: "Gen 7 Agent for Linux"
sidebar_position: 50
---

# Gen 7 Agent for Linux

Requirements

The Gen 7 agent's dependencies for Linux devices are:

- libicu
- Sysdig to capture Who Made The Change data. The Gen 7 agent will work without it, but will not be
  able to capture the names of the users who are modifying files.
