---
title: "Custom Dropbox Connection Profile & Host List"
description: "Custom Dropbox Connection Profile & Host List"
sidebar_position: 20
---

# Custom Dropbox Connection Profile & Host List

The DropboxAccess Data Collector requires you to create a custom Connection Profile and assign it
to the job or job group conducting the data collection.

## Connection Profile

Creating the Connection Profile requires an access token. You generate the access token on the Scan
Options page of the Dropbox Access Auditor Data Collector Wizard.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Dropbox
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the
  [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
  topic for additional information.)
- Access Token – Copy and paste the Access Token after it has been generated from the Scan Options
  page of the Dropbox Access Auditor Data Collector Wizard. See the
  [DropboxAccess: Scan Options](/docs/accessanalyzer/11.6/admin/datacollector/dropboxaccess/scanoptions.md) topic
  for additional information.

See the
[Connection](/docs/accessanalyzer/11.6/admin/settings/connection/overview.md)
topic for additional information.

## Host List

Set the host list to:

- Local host
