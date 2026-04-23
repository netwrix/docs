---
title: "Scanner Best Practices"
description: "Best practices for configuring and running scanners in Access Analyzer"
sidebar_position: 50
---

# Scanner Best Practices

## Use scanner labels to isolate scan traffic

Scanner labels route scan executions to specific scanner pools. Use them to keep scan traffic between environments isolated and prevent resource contention.

Common labeling patterns:

| Use case | Example label |
|----------|---------------|
| Separate production and non-production scanning | `environment=production`, `environment=staging` |
| Route by geographic region | `region=us-east`, `region=eu-west` |
| Dedicate scanners to high-sensitivity source groups | `tier=restricted` |

Define a labeling scheme before deploying scanners and apply it consistently. Labels assigned to a source group are used by all scan executions in that group — you don't need to set them per source.

### Label matching behavior

When a source group has multiple labels configured, a scan is routed to any scanner that matches **at least one** of those label pairs — not all of them. Design your label scheme with this in mind: a scanner carrying `region=us-east` will receive jobs from a source group labeled `region=us-east, tier=restricted` even if the scanner does not carry the `tier=restricted` label.

For strict isolation, use a single label per source group or ensure scanners are labeled precisely to match only the intended groups.

### Label key and value constraints

Label keys and values entered in the Deploy Scanner wizard must follow these rules:

| Field | Allowed characters | Max length |
|-------|-------------------|------------|
| Key | Letters, digits, hyphens | 53 characters |
| Value | Letters, digits, hyphens, underscores, dots | 63 characters |

Both key and value must start with a letter or digit. Labels are stored with a `dspm.netwrix.com/scanner-` prefix internally — you do not need to include this prefix when entering labels in the wizard.

:::note
The label `scanner-default` is reserved for the built-in system scanner and can't be applied to custom scanners.
:::

## Plan for scanner redundancy

Assign the same label to multiple scanners that cover the same environment. Scanners sharing a label form a pool — when a scan job is dispatched, Access Analyzer routes it to any available scanner in the pool. If one scanner is offline, unhealthy, or busy, the job routes to another scanner carrying the same label automatically.

A single scanner per label is a single point of failure. For production environments, deploy at least two scanners per label. This also distributes scan load across the pool when multiple source groups target the same label simultaneously.

## Set Workers conservatively

The **Workers** setting controls the number of concurrent enumeration threads a scan uses when reading from a target. The default is `3` and the valid range is `1–20`.

Start at the default and increase only after validating that the target environment can handle parallel connections.

Before increasing Workers:

- Confirm the domain controller, file server, or other target can sustain simultaneous authenticated connections without degraded performance.
- Verify the network path between the scanner and the target has sufficient bandwidth for parallel data transfer.
- Consider the number of source groups that may run at the same time — multiple groups can run simultaneously across the same scanner, multiplying the actual connection count on the target.

A safe approach is to increase by 2–3 at a time and monitor scan completion times and target resource utilization before increasing further.

## Monitor scanner health

Check the Scanners page regularly to review scanner health status. A scanner in Warning state is under resource pressure — disk, memory, or CPU — and scan performance may be degraded. A scanner in Error state has reported health issues and needs investigation before running additional scans.

Common causes of Warning and Error states:

- Disk space consumed by k3s container images or log files — clean up unused images if disk pressure is persistent
- Memory pressure from running multiple large scans in parallel — reduce Workers or stagger scan schedules
- Network connectivity issues between the scanner host and the Access Analyzer server on port 6443

See [Manage Scanners](./manage-scanners.md) for a full reference of health status values.

## Group sources by environment and sensitivity

Group sources that share the same operational profile — same environment (production vs. staging), same geographic location, and similar sensitivity level. Avoid mixing high-sensitivity and low-priority sources in a single group.

This lets you assign dedicated scanner pools and service accounts to each group based on security requirements, and keeps aggregate scan status meaningful.

## Use least-privilege service accounts

Each source group requires a service account for authentication against the targets it scans. Assign an account that has only the permissions required for the connectors in that group.

- Don't share a single service account across source groups that scan different environments.
- Don't reuse a service account between source groups with different sensitivity levels.
- Review service account permissions when adding new sources to an existing group — the account must have access to each new source.

## Follow a consistent naming convention

Source group names appear in the list view, in scan execution logs, and in reporting. A consistent naming convention makes groups easier to identify and manage.

A useful pattern: `<source-type>-<environment>-<location>`. For example:

- `ad-production-us-east`
- `fileserver-staging-eu-west`
- `fileserver-production-eu-central`

Names are case-insensitive and must be unique across all source groups. Avoid names that embed credentials, IP addresses, or other values that change over time.
