---
title: "Self-Audit"
description: "Self-Audit"
sidebar_position: 20
---

# Self-Audit

Built-in Netwrix Auditor self-audit allows you to track changes to the product configuration,
including monitoring plans, data sources, audit scope and details about it (before-after values).
This helps you to ensure that monitoring scope is complete and changed only in line with the
workflows adopted by our organization.

The corresponding option is available on the General tab of Netwrix AuditorSettings. By default, the
**Collect data for self-audit checkbox** is selected (enabled).

![selfaudit_thumb_0_0](/images/auditor/10.7/admin/healthstatus/selfaudit_thumb_0_0.webp)

### Search for Self-audit Results

All Auditor self-audit Activity Records can be found quickly using AuditIntelligence Search.

Follow the steps to search for self-audit results.

**Step 1 –** In Auditor, navigate to Search.

**Step 2 –** Set the Data source filter to **Self-audit**.

**Step 3 –** Click Search to review results:

![selfaudit_search_thumb_0_0](/images/auditor/10.7/admin/healthstatus/selfaudit_search_thumb_0_0.webp)

**NOTE:** After reviewing your search results, apply filters to narrow your data. See the
[View Reports](/docs/auditor/10.8/admin/reports/view.md) topic for additional information.

**Step 4 –** After browsing your data, navigate to Tools to use the search results as intended. See
the [View and Search Collected Data](/docs/auditor/10.8/admin/search/overview.md) topic for additional information.

### Review Auditor Self-Audit Report

Also, there is a new Netwrix Auditor Self-Audit report available under Organization Level Reports in
the predefined set of reports. This report shows detailed information on changes to Auditor
monitoring plans, data sources and audited items.

Follow the steps to review the Self-audit report.

**Step 1 –** In Auditor, navigate to Reports > Organization Level Reports.

**Step 2 –** Select the Netwrix Auditor Self-Audit report and click View.

![selfaudit_report](/images/auditor/10.7/admin/healthstatus/selfaudit_report.webp)

## Netwrix Auditor Self-Audit Scope

Review the full list of components and settings captured within Netwrix Auditor self-audit scope.

| Object type                                                                                                                                                    | Action                       | What                                                                                                                                                                                                                                                          | Details                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Local logon                                                                                                                                                    | - Successful Logon - Logoff  | - Netwrix Auditor server name                                                                                                                                                                                                                                 | -                                                                                                                                      |
| Remote logon                                                                                                                                                   | - Successful Logon - Logoff  | - Netwrix Auditor server name                                                                                                                                                                                                                                 | -                                                                                                                                      |
| Netwrix Auditor global settings                                                                                                                                | - Modified                   | - Self-audit settings - Usage statistics collection settings - Tags - Audit database settings - Long-term archive settings - Data import for investigations - Notification settings - Integration API settings - License settings - Check for update settings | - Self audit (enabled / disabled) - Settings changed                                                                                   |
| Monitoring plan                                                                                                                                                | - Added - Modified - Removed | - Monitoring plan name                                                                                                                                                                                                                                        | - Monitoring plan path changed - Role assignments (added / removed) - Activity Summary recipients (added / removed) - Settings changed |
| Data source                                                                                                                                                    | - Added - Modified - Removed | - Monitoring plan name \ Data source name                                                                                                                                                                                                                     | - Monitoring status (enabled / disabled) - Settings changed                                                                            |
| Item                                                                                                                                                           | - Added - Modified - Removed | - Monitoring plan name \ Data source name \ Item name                                                                                                                                                                                                         | - Item name changed - Settings changed                                                                                                 |
| Alert                                                                                                                                                          | - Added - Modified - Removed | - Alert name                                                                                                                                                                                                                                                  | - Name changed - Mode (enabled / disabled) - Alert recipients (added / removed) - Settings changed                                     |
| Monitoring plans folder                                                                                                                                        | - Added - Modified - Removed | - All Monitoring Plans \ Folder name                                                                                                                                                                                                                          | - Name changed - Role assignments (added / removed)                                                                                    |
| Monitoring plans root folder                                                                                                                                   | - Modified                   | - All Monitoring Plans                                                                                                                                                                                                                                        | - Role assignment (added / removed)                                                                                                    |
| Custom search-based report                                                                                                                                     | - Added - Modified - Removed | - Report name                                                                                                                                                                                                                                                 | - Name changed - Settings changed                                                                                                      |
| - Subscription to custom search-based report - Subscription to overview reports - Subscription to SSRS-based report - Subscription to risk assessment overview | - Added - Modified - Removed | - Subscription name                                                                                                                                                                                                                                           | - Name changed - Mode (enabled / disabled) - Subscription recipients (added / removed) - Settings changed                              |
| Configuration integrity                                                                                                                                        | - Added - Modified           | - Configuration data - Configuration integrity state                                                                                                                                                                                                          | - Alerts, saved searches, subscriptions, etc.                                                                                          |
