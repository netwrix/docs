# SharePointAccess Data Collector

The SharePointAccess (SPAA) Data Collector audits access, group membership, and content within a
SharePoint on-premises and SharePoint Online environment. The SPAA Data Collector has been
preconfigured within the SharePoint Solution. Both this data collector and the solution are
available with a special Access Analyzer license. See the
[SharePoint Solution](/docs/accessanalyzer/12.0/solutions/sharepoint/overview.md) topic for additional information.
The SPAA Data Collector has the following requirements:

Protocols

- MS SQL
- Remote Registry
- SP CSOM (Web Services via HTTP & HTTPS)
- SP Server API
- WCF AUTH via TCP (configurable)

Ports

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/12.0/getting-started/system-requirements/solutions/sharepoint/scan-options.md) topic for
  additional information.

Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/12.0/getting-started/system-requirements/target/sharepoint.md) topic for additional information.

Sensitive Data Discovery Considerations

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## SPAA Query Configuration

The SharePointAccess Data Collector is configured through the SharePoint Access Auditor Data
Collector Wizard. The wizard contains the following pages, which change based up on the query
Category selected:

- Welcome
- [SPAA: Category](/docs/accessanalyzer/12.0/data-collection/spaa/category.md)
- [SPAA: SharePoint Data Collection Settings](/docs/accessanalyzer/12.0/data-collection/spaa/settings.md)
- [SPAA: Scan Scoping Options](/docs/accessanalyzer/12.0/data-collection/spaa/scan-scoping-options.md)
- [SPAA: Additional Scoping](/docs/accessanalyzer/12.0/data-collection/spaa/additional-scoping.md)
- [SPAA: Agent Settings](/docs/accessanalyzer/12.0/data-collection/spaa/agent-settings.md)
- [SPAA: Bulk Import Settings](/docs/accessanalyzer/12.0/data-collection/spaa/bulk-import-settings.md)
- [SPAA: DLP Audit Settings](/docs/accessanalyzer/12.0/data-collection/spaa/dlp-audit-settings.md)
- [SPAA: Select DLP Criteria](/docs/accessanalyzer/12.0/data-collection/spaa/select-dlp-criteria.md)
- [SPAA: Activity Date Scope](/docs/accessanalyzer/12.0/data-collection/spaa/activity-date-scope.md)
- [SPAA: Activity Log Locations](/docs/accessanalyzer/12.0/data-collection/spaa/activity-log-locations.md)
- [SPAA: Test Access](/docs/accessanalyzer/12.0/data-collection/spaa/test-access.md)
- [SPAA: Results](/docs/accessanalyzer/12.0/data-collection/spaa/results.md)
- [SPAA: Summary Page](/docs/accessanalyzer/12.0/data-collection/spaa/summary.md)

![SPAA Data Collector Wizard Welcome Page](/img/product_docs/accessanalyzer/admin/datacollector/spaa/welcomepage.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
