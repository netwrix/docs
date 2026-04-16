---
title: "Scanner Best Practices"
description: "Best practices for configuring and running scanners in Access Analyzer"
sidebar_position: 20
---

# Scanner Best Practices

## Use scanner labels to isolate scan traffic

Scanner labels route scan executions to specific scanner pools. Use them to prevent scan traffic from one environment from sharing resources with another.

Common labeling patterns:

| Use Case | Example Label |
| --- | --- |
| Separate production and non-production scanning | `environment=production`, `environment=staging` |
| Route by geographic region | `region=us-east`, `region=eu-west` |
| Dedicate scanners to high-sensitivity source groups | `tier=restricted` |

Define a labeling scheme before deploying scanners and apply it consistently. Labels applied to a source group are inherited by all scan executions in that group — you don't need to set them per source.

## Set Max Concurrent Scans conservatively

Start with the default value of 1 and increase only after validating that the target environment can handle parallel connections.

Before increasing the limit:

- Confirm the domain controller, file server, or other target can sustain simultaneous authenticated connections without degraded performance.
- Verify the network path between the scanner and the target has sufficient bandwidth for parallel data transfer.
- Consider the number of source groups that may run simultaneously — the limit is per group, and multiple groups can run at the same time.

A safe approach is to increase the limit by 2–3 at a time and monitor scan completion times and target resource utilization before increasing further.

## Group sources by environment and sensitivity

Group sources that share the same operational profile — same environment (production vs. staging), same geographic location, and similar sensitivity level. Avoid mixing high-sensitivity and low-priority sources in a single group.

This approach has two benefits:

- It lets you assign different scanner pools and service accounts to different groups based on the security requirements of the environment.
- It makes aggregate scan status meaningful — a group that mixes critical and non-critical sources produces a status that doesn't clearly reflect the health of either.

## Use least-privilege service accounts

Each source group requires a service account for authentication. Assign an account that has only the permissions required for the connectors in that group.

- Don't share a single service account across source groups that scan different environments.
- Don't reuse a service account between source groups with different sensitivity levels.
- Review service account permissions when adding new sources to an existing group — the account must have access to each new source.

## Follow a consistent naming convention

Source group names appear in the list view, in scan execution logs, and in any reporting that references the source. A consistent naming convention makes groups easier to identify and manage.

A useful pattern: `<source-type>-<environment>-<location>`. For example:

- `ad-production-us-east`
- `fileserver-staging-eu-west`
- `sharepoint-production`

Names are case-insensitive and must be unique across all source groups. Avoid names that embed credentials, IP addresses, or other values that change over time.
