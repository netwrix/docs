---
title: "Scanners Overview"
description: "Overview of scanner types, architecture, and how to use them in Access Analyzer"
sidebar_position: 10
---

# Scanners Overview

Scanners are the execution nodes that run scan workloads in Access Analyzer. Every scan runs on a scanner — either the built-in system scanner or a custom scanner you deploy on a remote host.

## Scanner types

Access Analyzer provides two scanner types:

**System scanner** — The built-in scanner that runs on the Access Analyzer server itself. It's available immediately with no configuration and is the default for all source groups. Use it when the Access Analyzer server can reach your target resources directly over the network.

**Custom scanners** — Scanners you deploy on separate Linux hosts closer to your data sources. Use custom scanners when:

- Target file servers or Active Directory domain controllers are in network segments the Access Analyzer server can't reach directly
- You want to reduce scan traffic over wide area network (WAN) links between sites
- You need to distribute scan load across multiple machines for large environments

## Supported connectors

Scanners are available for the following connectors:

- Active Directory
- File Server (all supported file server types)

Entra ID and SharePoint Online connectors connect directly from the Access Analyzer service and don't use scanners.

## Architecture

Scanners run as Kubernetes Jobs — short-lived containers that start on demand to perform a scan and terminate when the scan completes. There is no persistent agent process running on the scanner host between scans.

Custom scanner hosts join the Access Analyzer Kubernetes cluster as worker nodes during deployment. Access Analyzer schedules scan jobs to those nodes using standard Kubernetes job dispatch. The scanner host needs outbound connectivity to the Access Analyzer server on port 6443 (Kubernetes API) to receive and run jobs.

This is a different architecture from the Proxy and Applet modes in legacy Netwrix Access Analyzer (NAA) v12:

| | Legacy NAA (v12) | Access Analyzer |
|---|---|---|
| Distributed scanning | Proxy server / applet deployment | Kubernetes-deployed scanner containers |
| Deployment model | Manual, persistent agent | On-demand Kubernetes Jobs |
| Supported targets | All file system types | Active Directory, all supported file server types |

## Scanner labels

Labels are key-value pairs you assign to custom scanners. Source groups use labels to target specific scanners or scanner pools — scans from that source group run only on scanners that carry matching labels.

Labels let you:

- Isolate scan traffic by environment (`environment=production`, `environment=staging`)
- Route scans to geographically local scanners (`region=us-east`, `region=eu-west`)
- Dedicate scanners to high-sensitivity source groups (`tier=restricted`)

At least one label is required on every custom scanner. Multiple scanners can share the same label — when a source group targets a label that multiple scanners carry, any of those scanners can run the job.

The system scanner does not use labels. Selecting **System scanner** in a source group always uses the built-in scanner on the Access Analyzer server.

## Related pages

- [Requirements](./requirements.md) — System requirements for deploying a custom scanner
- [Deploy a Scanner](./deploy-scanner.md) — Register a new custom scanner
- [Manage Scanners](./manage-scanners.md) — View health, edit, and delete scanners
- [Best Practices](./best-practices.md) — Labeling schemes, concurrency, and naming conventions
