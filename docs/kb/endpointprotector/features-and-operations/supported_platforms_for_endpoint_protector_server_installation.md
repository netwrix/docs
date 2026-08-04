---
description: >-
  This article outlines the platforms on which Endpoint Protector Server can be installed, including deployment methods and supported environments.
keywords:
  - Endpoint Protector
  - Virtual Appliance
  - Cloud Platforms
  - Active Directory Integration
  - Deployment Methods
sidebar_label: Supported Platforms
tags:
  - features-and-operations
  - kb
title: "Supported Platforms for Endpoint Protector Server Installation"
knowledge_article_id: kA0Qk0000002B99KAE
products:
  - endpointprotector
---

# Supported Platforms for Endpoint Protector Server Installation

## Question

On which platforms can Endpoint Protector Server be installed?

## Answer

Endpoint Protector Server can be installed as a Virtual Appliance.

Deployment methods include:

- **Virtual Appliances**: Detailed instructions for configuration, deployment, and management.
- **Cloud Platforms**: Deployment strategies for AWS, GCP, and Azure, assuming existing cloud accounts and basic platform knowledge.
- **Active Directory Integration**: Leveraging Group Policy Objects for efficient client deployment.
- **Third-party Management Tools**: Utilizing JAMF and Microsoft Intune for streamlined deployment.

For the list of supported hypervisors and cloud platforms for the server appliance, see [Hypervisor Compatibility Check](/docs/endpointprotector/install/migrationprocedure/migrationguide#hypervisor-compatibility-check) in the Migration Guide.

## Version and OS Support Policy

Server virtualization compatibility is a separate question from **version support policy** — which server versions and client operating systems Netwrix actively supports. For that information, see the two companion supportability statements:

- [Netwrix Endpoint Protector Server-Side Support Policy](/docs/endpointprotector/supportability/server-supportability) — defines the N / N-1 supported version tracks, patch types (Fixes & Features vs. Critical Security Patches), and how a new major version gets triggered. All versions before 5.9.4.2 reached Discontinued Support on February 11, 2026.
- [Netwrix Endpoint Protector Agent Support Policy](/docs/endpointprotector/supportability/client-supportability) — defines client OS support:
  - **Windows**: supported while within Microsoft's Mainstream Support or Extended Security Update (ESU) phase. Windows 10 (post-EOL) and older OS versions (Windows 7, Windows XP, Server 2019 and earlier) are unsupported — the last EPP Agent build with best-effort support for those is 5.9.4.0 (Windows build 6.2.3.1010).
  - **macOS**: the current release plus the three prior major versions (n-3), aligned with Apple's three-year maintenance cycle.
  - **Linux**: Ubuntu LTS and Red Hat Enterprise Linux versions within their official support lifecycle; other distributions require a Feature Request via Netwrix Support.

:::note
Only the **latest** EPP Agent version is fully (Active) supported at any given time — all other agent versions are in Limited or Discontinued support. Netwrix Support requires reproducing issues on the latest agent version before proceeding with a support case.
:::