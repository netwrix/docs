---
description: >-
  This article explains how to whitelist or exclude Endpoint Protector (EPP) processes in CrowdStrike to ensure proper functionality without interference from security policies.
keywords:
  - Endpoint Protector
  - CrowdStrike
  - whitelisting
  - exclusion list
  - security policies
sidebar_label: Whitelist or Exclude EPP Processes
tags:
  - features-and-operations
  - kb
title: "Whitelist or Exclude Endpoint Protector Processes in CrowdStrike"
knowledge_article_id: kA0Qk0000002B7GKAU
products:
  - endpointprotector
---

# Whitelist or Exclude Endpoint Protector Processes in CrowdStrike

## Overview

This article explains how to whitelist or exclude Endpoint Protector (EPP) processes in CrowdStrike. This ensures that Endpoint Protector functions correctly and is not blocked or interfered with by CrowdStrike security policies.

Configuring security exclusions isn't specific to CrowdStrike — it's a general requirement for running Endpoint Protector alongside **any** antivirus, EDR, or HIPS solution. The EPP Client logs data in small, frequent increments, and third-party security software that scans each entry can cause timeouts, increased CPU/RAM usage, client stability issues, and reduced Deep Packet Inspection visibility. For the complete, authoritative exclusion list for Windows, macOS, and Linux, see [Security Exclusions](/docs/endpointprotector/requirements/client#security-exclusions).

:::important
Before escalating any EPP Client performance issue, confirm that the exclusions below are configured and deployed on the affected endpoint, and that the computer has been rebooted afterward.
:::

