---
title: "Versioning scheme"
description: "Explanation of the new versioning scheme Netwrix Password Secure uses."
sidebar_position: 1
---

## Overview

Starting with release **26.3.100**, Netwrix Password Secure uses a date-based versioning format that replaces the previous SemVer scheme (e.g. `9.2.3`).

The new format is: `YY.M.VVV`

| Segment | Description | Example |
|---------|-------------|---------|
| `YY` | Two-digit year | `26` = 2026 |
| `M` | Month, no zero-padding | `3` = March |
| `VVV` | Release indicator (see below) | `100` = first major |

:::info[Build numbers]

Inside the product, you may notice a longer version string with an additional build number appended (e.g. `26.3.100.4821`). This is used for technical support and diagnostics. In all official communications — release notes, announcements, and documentation — only the short format above is used.

::: 

---

## Understanding the release indicator "VVV"

The three-digit release indicator encodes the release history within a given month. Each digit position represents a release type:

| Position | Type | Meaning |
|----------|------|---------|
| Hundreds | 💥 Major | Significant new functionality, architectural changes, or breaking changes |
| Tens | 🔧 Minor | New features and non-breaking improvements |
| Units | 🩹 Patch | Bug fixes, security updates, and minor corrections |

The digit value counts releases of that type **since the last higher-level release** (or since the start of the month). When a higher-level release ships, the lower-level counters reset.

**How to read a version:**

- Which digit incremented? → That's the release type.
- What are the other digits? → Context: how many majors/minors have shipped before it this month.

---

## Example scenarios

### Scenario A — Patch-only month

A stable month where only hotfixes ship:

| Version | Type | Description |
|---------|------|-------------|
| `26.4.1` | 🩹 Patch | First patch of April |
| `26.4.2` | 🩹 Patch | Second patch |
| `26.4.3` | 🩹 Patch | Third patch |

---

### Scenario B — Minor releases with patches

A typical feature month:

| Version | Type | Description |
|---------|------|-------------|
| `26.5.10` | 🔧 Minor | First minor of May |
| `26.5.11` | 🩹 Patch | First patch after the minor |
| `26.5.12` | 🩹 Patch | Second patch after the minor |
| `26.5.20` | 🔧 Minor | Second minor (patch counter resets) |
| `26.5.21` | 🩹 Patch | First patch after second minor |

---

### Scenario C — Patches before a minor

Fixes ship first, followed by a feature update:

| Version | Type | Description |
|---------|------|-------------|
| `26.6.1` | 🩹 Patch | First patch of June |
| `26.6.2` | 🩹 Patch | Second patch |
| `26.6.10` | 🔧 Minor | First minor (patch counter resets) |
| `26.6.11` | 🩹 Patch | First patch after the minor |
| `26.6.12` | 🩹 Patch | Second patch after the minor |

---

### Scenario D — Major release month

A major release followed by follow-up updates (e.g. March 2026):

| Version | Type | Description |
|---------|------|-------------|
| `26.3.100` | 💥 Major | First major of March (all counters reset) |
| `26.3.101` | 🩹 Patch | First patch after the major |
| `26.3.102` | 🩹 Patch | Second patch after the major |
| `26.3.110` | 🔧 Minor | First minor after the major (patch counter resets) |
| `26.3.111` | 🩹 Patch | First patch after the minor |
| `26.3.120` | 🔧 Minor | Second minor after the major |
| `26.3.121` | 🩹 Patch | First patch after the second minor |

---

### Scenario E — Multiple majors in a month

Rare, but possible in exceptional release cycles:

| Version | Type | Description |
|---------|------|-------------|
| `26.7.100` | 💥 Major | First major of July |
| `26.7.110` | 🔧 Minor | Minor after first major |
| `26.7.111` | 🩹 Patch | Patch after that minor |
| `26.7.200` | 💥 Major | Second major (all counters reset) |
| `26.7.201` | 🩹 Patch | First patch after second major |
| `26.7.210` | 🔧 Minor | First minor after second major |

---

### Scenario F — How it changes from one month to another

Every month, the `vvv` indicators are resetting:

| Version | Type | Description |
|---------|------|-------------|
| `26.4.100` | 💥 Major | First major of April                         |
| `26.4.110` | 🔧 Minor | Minor after first major                      |
| `26.4.111` | 🩹 Patch | Patch after that minor                       |
| `26.5.100` | 💥 Major | Next month (all counters reset), next major  |
| `26.5.101` | 🩹 Patch | First patch after (second) major             |
| `26.5.110` | 🔧 Minor | First minor after (second) major, patch      |
| `26.6.1`   | 🩹 Patch | Next month (all counters reset), next patch  |

---

## Migration from SemVer

The previous versioning scheme followed SemVer (`MAJOR.MINOR.PATCH`, e.g. `9.2.3`). The last
release under this scheme was `9.3.1`.

Key differences:

| | Old (SemVer) | New (Date-based) |
|--|--------------|------------------|
| Format | `9.2.3` | `26.3.100` |
| Release type | Encoded by position | Encoded by digit increment |
| Time context | None | Year + month visible in version |
| Counters | Global, ever-increasing | Per-month, reset on higher release |
| Major version | Increments rarely, causes anxiety | Reserved for truly significant changes |

---

## Quick reference

| You see... | It means... |
|------------|-------------|
| `26.4.1`   | First patch of April 2026 |
| `26.4.10`  | First minor of April 2026 |
| `26.4.100` | First major of April 2026 |
| `26.4.23`  | Second minor, third patch since that minor |
| `26.4.112` | First major, first minor after it, second patch after that |