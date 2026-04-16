---
title: "Overview of Scanners"
description: "Overview of scanner capabilities in Access Analyzer"
sidebar_position: 10
---

# Overview of Scanners

Scanners are lightweight, containerized agents used by Access Analyzer to perform distributed scanning of remote environments. They eliminate the need for a traditional proxy server by leveraging the Kubernetes infrastructure already powering Access Analyzer.

## Supported Connectors

Scanners are available for the following connectors only:

- **Active Directory**
- **File Server** (all supported file system types)

All other connectors (Entra ID, SharePoint Online) connect directly from the Access Analyzer service and do not use Scanners.

## Architecture

Scanners run as Kubernetes Jobs — short-lived containers that are deployed on demand to perform a scan and then terminated. This is a fundamentally different architecture from the Proxy and Applet modes available in legacy Netwrix Access Analyzer (NAA) v12. There is no persistent agent process and no manual applet deployment.

| | Legacy NAA (v12) | Access Analyzer v1.0 |
| --- | --- | --- |
| **Distributed scanning** | Proxy server / Applet deployment | Kubernetes-deployed Scanner containers |
| **Deployment model** | Manual, persistent agent | On-demand Kubernetes Jobs |
| **Supported targets** | All file system types | Active Directory, all supported file system types |

## Pending Documentation

:::note
Detailed Scanner configuration steps, deployment prerequisites, and architecture diagrams are pending input from the development team and will be added to this section prior to GA release.
:::
