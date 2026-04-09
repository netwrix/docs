---
title: "Reports"
description: "Pre-built reports available for File Servers source groups in Access Analyzer"
sidebar_position: 50
---

# Reports

File Servers source groups include a set of pre-built reports that answer common security questions about permissions, sensitive data exposure, access patterns, and data content across your CIFS/SMB file shares. Reports are available under the Reports section after the first scan completes and update each time a scan runs.

## Available reports

| Location | Report | Description |
|----------|--------|-------------|
| Access / Broken Inheritance | Broken Inheritance | Lists shares and folders where permission inheritance has been broken, meaning the folder's ACL no longer follows its parent. Use this report to find locations where custom permission assignments may have introduced inconsistencies or unexpected access. |
| Access / Domain User ACLs | Domain User ACLs | Shows share and folder permissions assigned directly to domain user accounts. Use this report to identify accounts with direct ACL entries that should be managed through groups instead. |
| Access / High Risk ACLs | High Risk ACLs | Identifies folders where broad trustees such as Everyone, Authenticated Users, or Domain Users appear in the access control list. Use this report to locate and remediate over-permissioned folders that expose data to wide audiences. |
| Access / Local Administrators | Local Administrators | Lists local administrator accounts and the hosts where they hold that privilege. Use this report to identify non-standard or unauthorized local administrator assignments across your file servers. |
| Access / Missing Full Control | Missing Full Control | Lists folders where no trustee holds Full Control permission. Use this report to identify folders that may lack a clear owner or administrator and address potential access management gaps. |
| Access / Open Access | Open Access | Identifies folders and shares accessible to broad groups or where sensitive data is reachable without restriction. Use this report to prioritize remediation of the most exposed locations in your file server environment. |
| Access / Probable Owner | Probable Owner | Identifies the most likely owner for each share based on access patterns and file activity. Use this report to assign data ownership and support data governance workflows. |
| Access / Share Audit | Share Audit | Provides a detailed breakdown of share-level attributes including scan status, last scanned date, file counts, object counts, and active users. Use this report to confirm scan coverage and review the overall state of each share. |
| Activity / Activity Investigation | Activity Investigation | Displays file system events filtered by date range, user, path, and event type. Use this report to trace the actions of a specific user or investigate changes to a specific file or folder. |
| Content / Empty Shares | Empty Shares | Lists shares that contain no files. Use this report to identify shares that can be reviewed for decommissioning or consolidation. |
| Content / Largest Shares | Largest Shares | Ranks file shares by total size. Use this report to identify shares that consume the most storage and prioritize them for review or cleanup. |
| Content / Nested Shares | Nested Shares | Identifies shares that are nested inside other shares, creating multiple access paths to the same data with potentially different permissions. Use this report to find and resolve configurations that complicate permission management and access auditing. |
| Content / Stale Content | Stale Content | Identifies files and shares that haven't been accessed within a configurable threshold. Use this report to locate data that may be a candidate for archiving, deletion, or access review. |
| Sensitive Data / Sensitive Data Activity | Sensitive Data Activity | Shows file system events involving files that contain sensitive data, filtered by date range, event type, user, and classification taxonomy. Use this report to identify who is reading, modifying, or deleting sensitive files and to detect potential data exfiltration or misuse. |
| Sensitive Data / Sensitive Data Overview | Sensitive Data Overview | Provides a high-level summary of sensitive data scan findings across CIFS/SMB file shares, including the number of files with matches, classification terms found, and distribution by host and share. Use this report as a starting point for understanding where sensitive data lives in your file server environment. |
| Sensitive Data / Share Audit | Share Audit | Shows share-level details in the context of sensitive data findings, including which shares contain files with sensitive data matches. Use this report to understand sensitive data distribution across shares and prioritize remediation. |
| Sensitive Data / Stale Data | Stale Data | Identifies files containing sensitive data that haven't been accessed recently. Use this report to find aging sensitive content that may no longer be actively used but still carries exposure risk. |
