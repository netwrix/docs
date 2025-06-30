# SPAA: Bulk Import Settings

The Bulk Import Settings page is where the bulk import process settings are configured. It is a
wizard page for the categories of:

- Bulk Import Access Scan Results
- Bulk Import Sensitive Content Scan Results

![Bulk Import Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/spaa/bulkimportsettings.webp)

Subsequent hosts in job lists will get host IDs incremented by 1. The Host Identifier may require an
offset to avoid overlapping IDs in collected data. If the **Set Host ID** checkbox is left
unchecked, then Enterprise Auditor assigns values starting from 1 to every host. This feature is
intended only for SQL Server Replication.
