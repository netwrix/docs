# Custom Dropbox Connection Profile & Host List

The DropboxAccess Data Collector requires a custom Connection Profile to be created and assigned to
the job or job group conducting the data collection.

## Connection Profile

Creating the Connection Profile requires an access token. The access token is generated on the Scan
Options page of the Dropbox Access Auditor Data Collector Wizard.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Dropbox
- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/administration/settings/application/overview.md)
  topic for additional information.)
- Access Token – Copy and paste the Access Token after it has been generated from the Scan Options
  page of the Dropbox Access Auditor Data Collector Wizard. See the
  [DropboxAccess: Scan Options](/docs/accessanalyzer/12.0/data-collection/dropbox-access/scan-options.md) topic for additional information.

See the [Connection](/docs/accessanalyzer/12.0/administration/settings/connection/overview.md) topic for additional information.

## Host List

The host list should be set to:

- Local host
