---
title: "Key Concepts"
description: "Sources, scans, patterns, identities, and entitlements"
sidebar_position: 20
---

# Key Concepts

This page defines the core terminology used throughout Access Analyzer.

## Sources

A **source** is a data repository or identity provider that Access Analyzer connects to for scanning. Sources are organized into two categories:

- **Data sources** — File shares (CIFS/SMB), SharePoint Online sites, and other storage locations containing files and data
- **IAM sources** — Identity providers such as Active Directory, Entra ID, and local groups that contain users, groups, and permissions

Each source is associated with a [service account](#service-accounts) that provides the credentials needed for Access Analyzer to connect.

## Source Groups

A **source group** is a named collection of related sources that share a common service account and configuration. Source groups are created through the **Connect Source** wizard, which handles source creation, scan configuration, and scheduling in a single workflow.

- **File Server** source groups can contain multiple servers (for example, all file servers in a department)
- **Active Directory** source groups can contain multiple domain controllers
- **Entra ID** source groups contain a single source (one Azure AD tenant)

Source groups simplify management by letting you configure shared settings (service account, domain, scan options) once and apply them to all sources in the group.

## Service Accounts

A **service account** stores credentials used to authenticate with data sources and identity providers. Supported credential types include:

- **Username / Password** — For Active Directory, CIFS/SMB file shares, and local groups
- **Client credentials (OAuth2)** — For Entra ID
- **Certificate** — For SharePoint Online

Service accounts are managed in **Configuration** > **Service Accounts** and can be shared across multiple sources.

## Connectors

A **connector** is the component that performs the actual work of communicating with a source. Each source type has a corresponding connector that handles:

- **Test connection** — Validates that credentials and network connectivity are correct
- **Access scan / sync** — Enumerates files, folders, permissions, or identities
- **Get object** — Retrieves specific objects or metadata

Connectors are executed as Kubernetes Jobs and managed by the Connector API.

## Scans

A **scan** defines what to analyze and how. Access Analyzer supports several scan types:

- **Access scans** — Enumerate files, folders, and permissions on data sources to identify who has access to what
- **Sensitive data scans** — Classify file contents against detection patterns to find PII, credentials, PHI, and financial records
- **Identity sync scans** — Synchronize users, groups, and roles from IAM sources (Active Directory Inventory, Entra ID Users/Groups/Roles)
- **Local Users and Groups scans** — Collect local account data from file servers (auto-created when an access scan is enabled)

Scans can be run on demand or scheduled with a cron expression. Each scan run produces a **scan execution** record with status, duration, and results.

## Identities and Entitlements

- **Identity** — A user or group account from an IAM source (Active Directory, Entra ID, or local groups)
- **Entitlement** — A permission or access right granted to an identity on a data source (for example, read access to a file share)

Access Analyzer maps identities to entitlements to show effective permissions and identify overly permissive access.

## Sensitive Data Patterns

A **pattern** is a detection rule used during sensitive data scans. Patterns match file content against regular expressions or classification models. Built-in patterns cover:

- **PII** — Personally identifiable information (names, addresses, SSNs, etc.)
- **Credentials** — Passwords, API keys, tokens, and connection strings
- **PHI** — Protected health information
- **Financial Records** — Credit card numbers, bank accounts, financial data

Patterns are organized into **taxonomies** — hierarchical groups of classification rules mapped to compliance frameworks (GDPR, CCPA, HIPAA, PCI DSS, GLBA, CMMC).

## Dashboards

**Dashboards** are pre-built Metabase visualizations that provide a summary view of your data security posture, including:

- Sensitive data exposure by type and framework
- Access permission distribution
- Identity and group analysis

Dashboards are embedded in the Access Analyzer web interface with single sign-on.
