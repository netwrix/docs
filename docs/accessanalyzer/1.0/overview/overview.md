---
title: "What is Access Analyzer"
description: "Introduction to Netwrix Access Analyzer and its capabilities"
sidebar_position: 10
---

# What is Access Analyzer

Netwrix Access Analyzer is a Data Security Posture Management (DSPM) platform that discovers, classifies, and secures sensitive data across your organization's file systems and cloud services. It provides visibility into who has access to what data, identifies overly permissive access, and detects sensitive data exposure.

## Core Capabilities

- **Data Source Discovery** — Connect to file shares (CIFS/SMB), SharePoint Online sites, and other data repositories to inventory content and access permissions
- **Identity and Access Analysis** — Synchronize with Active Directory, Entra ID, and local groups to map identities, group memberships, and effective permissions
- **Sensitive Data Detection** — Scan files for PII, credentials, PHI, and financial records using built-in patterns and custom regex rules, with compliance mappings to GDPR, CCPA, HIPAA, PCI DSS, GLBA, and CMMC
- **Dashboards and Reporting** — View findings through embedded Metabase dashboards for data security posture, Active Directory insights, and sensitive data exposure
- **Audit Trail** — Maintain a full audit log of user actions and system events

## How It Works

1. **Configure data sources** — Add file shares, cloud services, and identity providers as data sources, each with an associated service account for authentication
2. **Run scans** — Create access scans to enumerate permissions and sensitive data scans to classify content
3. **Review findings** — Analyze results through dashboards, reports, and the scan execution history
4. **Take action** — Identify and remediate overly permissive access, exposed sensitive data, and policy violations

## Deployment Model

Access Analyzer is deployed as a self-contained Kubernetes cluster on a single Linux VM. A one-command installer provisions all required infrastructure — including K3s, ArgoCD, databases, and application services. Updates are managed automatically through ArgoCD GitOps.

For installation instructions, see [Installation](/docs/accessanalyzer/1_0/install/overview).

## What's Next

- [Architecture Overview](/docs/accessanalyzer/1_0/overview/architecture) — Understand the platform components and how they interact
- [Key Concepts](/docs/accessanalyzer/1_0/overview/keyconcepts) — Learn the terminology used throughout Access Analyzer
- [Getting Started](/docs/accessanalyzer/1_0/gettingstarted/overview) — Begin configuring your first data source and scan
