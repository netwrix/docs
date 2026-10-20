---
title: "Custom Dropbox Connection Profile & Host List"
description: "Custom Dropbox Connection Profile & Host List"
sidebar_position: 20
---

# Custom Dropbox Connection Profile & Host List

The DropboxAccess Data Collector requires a custom Connection Profile that you create and assign to
the job or job group that collects the data.

## Connection Profile

Creating the Connection Profile requires an access token. You generate the access token on the Scan
Options page of the Dropbox Access Auditor Data Collector Wizard.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Dropbox
- Password Storage – Application (Uses the configured Profile Security setting as you selected it at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md)
  topic for additional information.)
- Access Token – Copy and paste the access token after you generate it on the Scan Options
  page of the Dropbox Access Auditor Data Collector Wizard. See the
  [DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/admin/datacollector/dropboxaccess/scanoptions.md) topic for additional information.

See the [Connection](/docs/accessanalyzer/12.0/admin/settings/connection/overview.md) topic for additional information.

## Host List

Set the host list to:

- Local host
