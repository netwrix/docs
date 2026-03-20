---
title: "Installation"
description: "Installation and deployment overview for Netwrix Access Analyzer"
sidebar_position: 1
---

# Installation

Netwrix Access Analyzer is deployed as a self-contained Kubernetes cluster on a single Linux virtual machine. The automated installer provisions all required infrastructure components — including K3s, ArgoCD, databases, and application services — with a single command.

## Installation Paths

Choose the installation path that best fits your needs:

| Path | Description | Audience |
| --- | --- | --- |
| [Quick Install](/docs/accessanalyzer/1_0/install/quickinstall) | Single-page guide to get Access Analyzer running fast | Experienced Linux admins |
| [Step-by-Step Install](/docs/accessanalyzer/1_0/install/stepbystep) | Detailed walkthrough with explanations for each phase | First-time installers |

## Before You Begin

Review the following requirements before starting installation:

- [Hardware and System Requirements](/docs/accessanalyzer/1_0/install/requirements) — CPU, memory, disk, OS, and virtualization
- [Network Configuration](/docs/accessanalyzer/1_0/install/network) — Outbound endpoints and firewall rules
- [Preflight Checks](/docs/accessanalyzer/1_0/install/preflight) — Automated system validation and dry-run mode

## What the Installer Does

The installer automates the entire deployment in approximately 15–30 minutes:

1. **Validates prerequisites** — Runs preflight checks for hardware, OS, and network
2. **Deploys K3s** — Installs a lightweight Kubernetes distribution (v1.33.4) with secrets-at-rest encryption
3. **Installs ArgoCD** — Sets up GitOps-based application lifecycle management (v3.2.0)
4. **Deploys applications** — Pulls Helm charts from the Netwrix OCI registry and deploys all services
5. **Verifies health** — Monitors application health until all components are operational

## After Installation

- [Post-Installation Validation](/docs/accessanalyzer/1_0/install/postinstall) — Verify cluster health and access the ArgoCD UI
- [SSL / TLS Configuration](/docs/accessanalyzer/1_0/install/ssl) — Certificate auto-detection and custom CA bundles
- [DSPMctl CLI](/docs/accessanalyzer/1_0/install/dspmctl) — Manage applications with the built-in command-line tool

## Additional Topics

- [Environment Variables](/docs/accessanalyzer/1_0/install/environmentvariables) — CLI flags and environment variable reference
- [Upgrading Access Analyzer](/docs/accessanalyzer/1_0/install/upgrade) — Update to a new version
- [Uninstalling Access Analyzer](/docs/accessanalyzer/1_0/install/uninstall) — Remove the installation
- [Security Best Practices](/docs/accessanalyzer/1_0/install/security) — Harden your deployment
