---
title: "Site and Library Enumeration"
description: "Discovering SharePoint sites and document libraries"
sidebar_position: 20
---

# Site and Library Enumeration

The SharePoint Online connector discovers SharePoint sites, document libraries, and their contents through the Microsoft Graph API.

## What Gets Discovered

| Object Type | Description |
| --- | --- |
| **Sites** | All SharePoint Online sites accessible to the app registration |
| **Document libraries** | Libraries within each site containing files and folders |
| **Files and folders** | Individual items with metadata (name, size, modified date, author) |

## How It Works

1. The connector authenticates with the Graph API using the configured certificate
2. Sites are enumerated based on the app registration's permissions (`Sites.Read.All`)
3. For each site, document libraries are discovered
4. Files and folders within each library are traversed and cataloged
5. Results are sent to the Core API for storage and analysis

## Site Filtering

You can control which sites are scanned using include/exclude filters. See [Scanning Specific Sites](/docs/accessanalyzer/1_0/connectors/source/sharepointonline/scanningspecificsites) for details.
