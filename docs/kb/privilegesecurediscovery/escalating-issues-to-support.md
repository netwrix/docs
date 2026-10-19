---
title: "Escalating Issues to Support"
description: "A template for gathering and providing information needed to investigate and escalate Privilege Secure Discovery (NPS-D) issues, including problem summary, evidence, timeline, and reproduction steps."
sidebar_label: "Escalating Issues to Support"
sidebar_position: 0
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
---

# Escalating Issues to Support

## Overview

Use this article as a template when reporting or escalating a Privilege Secure Discovery issue to [Netwrix support](https://netwrix.com/en/support/). Provide as much of the following information as possible to help the support team investigate efficiently.

---

## Instructions

### 1. Describe the Problem

Provide a clear and concise description of the issue:

- What is happening?
- What is the expected vs. actual behavior?

---

### 2. Provide Evidence

Include relevant screenshots of:

- Error messages
- UI behavior

If possible, include timestamps.

---

### 3. Document the Timeline

- When was the issue first noticed?
- Is it:
  - Constant
  - Intermittent
  - Getting worse over time

---

### 4. List Recent Changes

List any changes made prior to the issue. Examples:

- NPS-D upgrades or configuration changes
- Network changes (firewall, proxy, Zscaler, etc.)
- GPO updates
- OS or patch updates on servers/endpoints
- Changes to integrated services (AD, SIEM, EDR, etc.)

---

### 5. Document Reproducibility Steps

Can the issue be reproduced?

- Yes / No

If yes, provide step-by-step reproduction:

**Example:**

The following steps were tested across multiple browsers with the same result.

1. Navigate to **Grant Access**.
2. Search for systems ending in `tgt`.
3. Select system(s).
4. UI displays error: `"Unable to retrieve web features…"` and hangs for 2+ minutes.
