---
title: "Reports"
description: "All pre-built dashboards and reports available in Netwrix Access Analyzer"
sidebar_position: 10
---

# Reports

Netwrix Access Analyzer includes pre-built dashboards and reports that surface findings from your scans. Reports become available after the first scan of a source group completes and update each time a scan runs.

Reports are organized by data source type and grouped by category in the navigation under **Dashboards** and **Reports**.

## Dashboards

| Dashboard | Description |
| --- | --- |
| **Data Security** | An overview of data security posture across all connected data sources. |
| **Active Directory** | An overview of Active Directory scan results for one or more domains. Shows inventory counts for users, groups, and group memberships alongside security risk data, including risk breakdowns by type and severity and a ranked list of the objects with the highest number of associated risks. Filter by domain to focus on a specific part of your environment. |

## File Server reports

For full details on these reports, see [File Server Reports](/docs/accessanalyzer/2601/gettingstarted/file-servers/reports).

### Access

| Report | Description |
| --- | --- |
| **Broken Inheritance** | Lists shares and folders where permission inheritance has been broken, meaning the folder's ACL no longer follows its parent. Use this report to find locations where custom permission assignments may have introduced inconsistencies or unexpected access. |
| **Domain User ACLs** | Shows share and folder permissions assigned directly to domain user accounts. Use this report to identify accounts with direct ACL entries that should be managed through groups instead. |
| **High Risk ACLs** | Identifies folders where broad trustees such as Everyone, Authenticated Users, or Domain Users appear in the access control list. Use this report to locate and remediate over-permissioned folders that expose data to wide audiences. |
| **Local Administrators** | Lists local administrator accounts and the hosts where they hold that privilege. Use this report to identify non-standard or unauthorized local administrator assignments across your file servers. |
| **Missing Full Control** | Lists folders where no trustee holds Full Control permission. Use this report to identify folders that may lack a clear owner or administrator and address potential access management gaps. |
| **Open Access** | Identifies folders and shares accessible to broad groups or where sensitive data is reachable without restriction. Use this report to prioritize remediation of the most exposed locations in your file server environment. |
| **Probable Owner** | Identifies the most likely owner for each share based on access patterns and file activity. Use this report to assign data ownership and support data governance workflows. |
| **Share Audit** | Provides a detailed breakdown of share-level attributes including scan status, last scanned date, file counts, object counts, and active users. Use this report to confirm scan coverage and review the overall state of each share. |

### Activity

| Report | Description |
| --- | --- |
| **Activity Investigation** | Displays file system events filtered by date range, user, path, and event type. Use this report to trace the actions of a specific user or investigate changes to a specific file or folder. |

### Content

| Report | Description |
| --- | --- |
| **Empty Shares** | Lists shares that contain no files. Use this report to identify shares that can be reviewed for decommissioning or consolidation. |
| **Largest Shares** | Ranks file shares by total size. Use this report to identify shares that consume the most storage and prioritize them for review or cleanup. |
| **Nested Shares** | Identifies shares that are nested inside other shares, creating multiple access paths to the same data with potentially different permissions. Use this report to find and resolve configurations that complicate permission management and access auditing. |
| **Stale Content** | Identifies files and shares that haven't been accessed within a configurable threshold. Use this report to locate data that may be a candidate for archiving, deletion, or access review. |

### Sensitive Data

| Report | Description |
| --- | --- |
| **Sensitive Data Activity** | Shows file system events involving files that contain sensitive data, filtered by date range, event type, user, and classification taxonomy. Use this report to identify who is reading, modifying, or deleting sensitive files and to detect potential data exfiltration or misuse. |
| **Sensitive Data Overview** | Provides a high-level summary of sensitive data scan findings across CIFS/SMB file shares, including the number of files with matches, classification terms found, and distribution by host and share. Use this report as a starting point for understanding where sensitive data lives in your file server environment. |
| **Share Audit** | Shows share-level details in the context of sensitive data findings, including which shares contain files with sensitive data matches. Use this report to understand sensitive data distribution across shares and prioritize remediation. |
| **Stale Data** | Identifies files containing sensitive data that haven't been accessed recently. Use this report to find aging sensitive content that may no longer be actively used but still carries exposure risk. |

## SharePoint Online reports

For full details on these reports, see [SharePoint Online Reports](/docs/accessanalyzer/2601/gettingstarted/sharepoint-online/reports).

### Access

| Report | Description |
| --- | --- |
| **Shared Links Report** | Shows all sharing links across your SharePoint environment, with breakdowns by sharing scope (organization, anonymous, specific people), active status, sensitive data type, and site. Use this report to identify overly broad sharing and links that expose sensitive files. |

### Content

| Report | Description |
| --- | --- |
| **ROT Analysis** | Identifies Redundant, Obsolete, and Trivial (ROT) data across your SharePoint sites, including stale files not modified in over a year, duplicate files by content hash, and stale files containing sensitive data. Use this report to prioritize data cleanup and reduce unnecessary exposure of aging content. |
| **Scan Overview** | Summarizes the results of the most recent scan across all sites, including total site count, file count, total storage, and files with sensitive data. Use this report to confirm scan coverage and quickly identify which sites hold the most sensitive content. |
