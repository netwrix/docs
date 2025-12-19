---
title: "DropboxAccess: Scoping"
description: "DropboxAccess: Scoping"
sidebar_position: 50
---

# DropboxAccess: Scoping

The Scoping page configures the data collector to scan either the entire Dropbox environment or
limit the scan to specific users. The page is a wizard page for the following categories:

- Scan Dropbox Access
- Scan for Sensitive Content

![Dropbox Access Auditor Data Collector Wizard Scoping Settings page](/images/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scoping.webp)

Use the scoping options to select the depth of the scan:

- User Scoping:

    - All Users – Scans all users in the Dropbox environment
    - Limited Users – Click **Browse** and navigate to the path of the CSV file that contains the
      email addresses of users to include in the scan. The CSV file should have one email address
      per row.

- File Permissions:

    - Collect File Level Permissions – Select the checkbox to collect permissions at the file level
