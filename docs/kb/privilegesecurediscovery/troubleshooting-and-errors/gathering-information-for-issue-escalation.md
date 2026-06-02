---
title: "Gathering Information for Issue Escalation"
description: "A template for gathering and providing information needed to investigate and escalate Privilege Secure Discovery (NPS-D) issues, including problem summary, evidence, timeline, and reproduction steps."
sidebar_label: "Gathering Information for Issue Escalation"
keywords:
- NPS-D
- Privilege Secure Discovery
- troubleshooting
- issue investigation
- escalation
- reproducibility
- screenshots
- timeline
products:
- privilegesecurediscovery
tags:
- kb
- troubleshooting-and-errors
---

# Gathering Information for Issue Escalation

Provide the following information when reporting or escalating an NPS-D problem. Use this as a guideline for ticket submission.

---

## Problem Summary

Provide a clear and concise description of the issue:

- What is happening?
- What is the expected behavior vs. actual behavior?

---

## Evidence

Include relevant screenshots of:

- Error messages
- UI behavior

If possible, include timestamps.

---

## Timeline

- When was the issue first noticed?
- Is it:
  - Constant
  - Intermittent
  - Getting worse over time

---

## Recent Changes

List any changes made prior to the issue. Examples:

- NPS-D upgrades or configuration changes
- Network changes (firewall, proxy, Zscaler, etc.)
- GPO updates
- OS or patch updates on servers/endpoints
- Changes to integrated services (AD, SIEM, EDR, etc.)

---

## Reproducibility

Can the issue be reproduced?

- Yes / No

If yes, provide step-by-step reproduction:

**Example:**

- Navigate to *Grant Access*.
- Search for systems ending in "tgt".
- Select system.
- UI displays error: *"Unable to retrieve web features…"* and hangs for 2+ minutes.

Tested across multiple browsers with the same result.
