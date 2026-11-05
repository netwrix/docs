---
title: "Statuses"
description: "Statuses"
sidebar_position: 80
---

# Statuses

Statuses in Netwrix 1Secure let you monitor the state of sources, agents, and connectors.

## Organization and source statuses

The status of an organization or source depends on what its connectors report, so one connector that reports Failure is enough to change the status to Needs attention. Check the table to see the rules.

| Status | Meaning |
| --- | --- |
| New | Connectors exist, but none has reported a status yet. |
| Not configured | No connectors exist. |
| Healthy | A connector that reports Warning counts as healthy. |
| Needs attention | A connector reports Failure. |
| Offline | A connector has not reported within 3 hours. State connectors are flagged Offline only after 7 days without an update. |
| Disabled | Every connector is disabled. |
| Unlicensed | The organization has unlicensed connectors. |
| Pending deletion | The organization is marked for deletion, other than trials. |
| Trial In Progress | The organization is marked for deletion and its tier is Trial. |

Organizations and sources can also show the Collection in progress and Update Recommended statuses.

The agents store one of four connector statuses: Unknown, Success, Warning, or Failure.

## Agent statuses

| Status | Meaning |
| --- | --- |
| Not configured | The site has no agent. |
| Offline | The agent has never connected or last connected more than 3 hours ago. |
| Update Recommended | The agent version is older than the latest approved version. |
| Healthy | None of the other statuses apply. |

