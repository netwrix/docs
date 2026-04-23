---
title: "Scanning options"
description: "Available scan types and configuration options for SharePoint Online source groups"
sidebar_position: 2
---

# Scanning options

| Scan type | Description |
| --- | --- |
| **Access scan** | Enumerates sites, document libraries, folders, and files. Collects permissions, ACLs, sharing links, and Microsoft Information Protection (MIP) sensitivity labels across the tenant. The first scan runs in full; subsequent scans collect only changes since the last run. |
| **Sensitive Data scan** | Reads file contents to classify sensitive data. Requires a completed Access scan — it uses the site and file inventory from the Access scan as its input. |

## Access scan configuration

| Option | Description |
| --- | --- |
| **Include site URLs** | Limits the scan to specific site collections. Enter one URL per line. Leave empty to scan all sites in the tenant. |
| **Exclude site URLs** | Excludes specific site collections from the scan. Enter one URL per line. Exclusions take precedence over inclusions. |
| **Scan OneDrive** | When enabled, includes OneDrive personal site collections in the scan. Enabled by default. |

The Access scan also reads Microsoft Information Protection (MIP) sensitivity labels from SharePoint item metadata and stores them alongside the permission data. Access Analyzer reads existing labels only — writing or modifying MIP labels on SharePoint Online items is not supported.

## Sensitive Data scan

The Sensitive Data scan reads file contents to detect and classify sensitive information. It runs after the Access scan completes and uses the file inventory collected during that scan.

Sensitive data classification policies, MIP label mappings, and OCR settings are configured globally and apply to all source groups. To configure them, navigate to **Configuration** > **Sensitive Data**. See [Sensitive Data Configuration](../../configurations/sensitive-data.md) for details.
