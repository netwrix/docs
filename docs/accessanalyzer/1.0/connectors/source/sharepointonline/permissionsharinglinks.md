---
title: "Permission and Sharing Link Analysis"
description: "Analyzing SharePoint permissions and external sharing links"
sidebar_position: 30
---

# Permission and Sharing Link Analysis

The SharePoint Online connector collects permission data from SharePoint sites to identify who has access to documents and whether content is shared externally.

## What Gets Collected

| Data | Description |
| --- | --- |
| **Site permissions** | Users and groups with access to the site, including permission levels (Full Control, Edit, Read) |
| **Library permissions** | Custom permissions set at the document library level |
| **Item-level permissions** | Unique permissions on individual files or folders (broken inheritance) |
| **Sharing links** | Anonymous links, organization-wide links, and people-specific sharing links |

## Sharing Link Types

| Link Type | Description | Risk Level |
| --- | --- | --- |
| **Anyone** | Anonymous access — no authentication required | High |
| **Organization** | Anyone in the organization can access | Medium |
| **Specific people** | Only named users can access | Low |

## How It Helps

Permission and sharing link analysis enables you to:

- Identify documents shared externally via anonymous links
- Find overly permissive site-level access
- Detect broken permission inheritance on sensitive documents
- Review sharing link expiration and access levels
