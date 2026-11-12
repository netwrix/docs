---
title: "Reference"
description: "Find the permissions each AI Security source asks for and what data AI Security keeps."
sidebar_position: 20
---

# Reference

This page points to two reference facts about AI Security: the permissions each source asks for and the data AI Security keeps. Use it when you need the exact list rather than the steps.

## Permission catalog

Every source asks for read-only access.

- [Connect every Microsoft source](/docs/1secureaisecurity/configuration/sources/connect-every-microsoft-source.md) has one table of every Microsoft grant. For each permission, the table gives its kind and whether it needs admin consent. It also says who grants it and where. The last column shows what the test or scan says when the permission is missing.
- Each connector page under [Sources](/docs/1secureaisecurity/configuration/sources/index.md) lists its platform's permissions under "What this connector reads", each with what it reads and whether a scan runs without it.

## Data AI Security keeps

- **Credentials.** AI Security encrypts the settings you enter for a source when you save them and never shows them again. Editing a source starts with empty fields, and a field left empty keeps its stored value.
- **Scan results.** Everything a scan finds about agents and identities, what they can reach, and the issues and shadow AI it raises. Each scan updates these results.
- **Decisions.** Each owner you name, each exception you make, each issue you resolve, and each Shadow AI decision. AI Security records who made the decision and when.
- **Retention.** Netwrix keeps agent activity for 180 days from when it happened, trend history for 400 days, and acknowledged alerts for 90 days from the acknowledgment. Open alerts are never removed. The periods appear on [Settings](/docs/1secureaisecurity/admin/settings.md), under **Retention**, and may change after the Beta.
