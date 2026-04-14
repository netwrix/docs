---
title: "Migration Checklist"
description: "Pre-migration, in-migration, and post-migration validation checklist for migrating from Netwrix Access Analyzer to Access Analyzer 26"
keywords:
  - migration checklist
  - access analyzer migration validation
  - stealthaudit migration checklist
  - pre migration checklist
  - post migration validation
products:
  - access-analyzer
sidebar_label: "Migration Checklist"
tags:
  - migration
---

# Migration Checklist

Use this checklist to plan and track an AA26 deployment. It covers one scope of adoption — a connector type, a site, a set of hosts, or a full environment. If you're adopting AA26 incrementally, complete a separate instance of this checklist for each scope.

Both AA26 and the legacy product can run simultaneously. There is no requirement to decommission or fully migrate anything as part of this process.

**Customer:** _____________________________ &nbsp;&nbsp; **Date:** _____________________________

**Engineer:** _____________________________ &nbsp;&nbsp; **AA26 version:** _____________________________

**Scope of this deployment:** _____________________________

---

## Pre-migration — Legacy system documentation

Complete this section before making any changes to either system.

### Legacy system inventory

- [ ] Documented all active host lists, including name, description, and member count.
- [ ] Documented the target type of each host in each list (file server, Active Directory, Entra ID, SharePoint Online, other).
- [ ] Exported host list data using `Export-LegacyHostLists.ps1` or manual console export.
- [ ] Identified which host lists contain mixed types and documented the required split into separate source groups.
- [ ] Documented all connection profiles: name, credential type, username/domain.
- [ ] Identified which connection profiles map to which credential type in AA26 (Username/Password, Client ID/Secret, Client ID/Certificate).
- [ ] Noted which legacy jobs are in scope for migration (AD, file server, SharePoint, Entra ID jobs).
- [ ] Noted which legacy jobs are out of scope (SQL Server, Exchange, Unix, and other unsupported connectors).
- [ ] Exported job schedule data using `Export-LegacySchedules.ps1` or manual review.
- [ ] Translated all required schedules to cron expressions. Cron expressions documented: _______________________.

### Legacy database documentation

- [ ] Confirmed the SQL Server instance name and database name for the legacy NAA database.
- [ ] Documented the date of the most recent successful job run for each in-scope job.
- [ ] Identified the activity table names for historical data that needs to remain accessible.
- [ ] Confirmed who requires read access to the legacy SQL Server database post-migration.

### AA26 environment readiness

- [ ] AA26 instance is deployed and accessible.
- [ ] Administrator account credentials for AA26 are confirmed.
- [ ] Scanners are deployed and online for all required connector types (Active Directory, File Server).
- [ ] Network connectivity is confirmed from scanner to each target system on required ports.
- [ ] Required app registrations in Entra ID / Azure are in place (for Entra ID and SharePoint Online sources).

---

## Migration phase 1 — Credentials

- [ ] All required Username/Password service accounts created in AA26.
  - Count: _____ accounts
- [ ] All required Client ID/Secret service accounts created in AA26.
  - Count: _____ accounts
- [ ] All required Client ID/Certificate service accounts created in AA26.
  - Count: _____ accounts
- [ ] Each service account verified by visual inspection in the Service Accounts list.

---

## Migration phase 2 — Source groups and sources

Complete one row per source group.

| Source Group Name | Connector Type | No. of Sources | Service Account | Test Connection |
| --- | --- | --- | --- | --- |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |
| | | | | Pass / Fail |

- [ ] All source groups created in AA26.
- [ ] All sources added to their respective groups.
- [ ] Test Connection passed for every source in every group.
- [ ] Scanner labels verified on Active Directory and File Server groups.

---

## Migration phase 3 — Scan schedules

- [ ] Cron expressions applied to all source groups.
- [ ] Schedule time zones confirmed (UTC or local time as required).
- [ ] Schedules verified as enabled on each source group.

---

## Migration phase 4 — Initial scan validation

For each source group, run an initial access scan manually before enabling the schedule.

| Source Group Name | Scan Type | Scan Status | Finding Count | Compared to Legacy |
| --- | --- | --- | --- | --- |
| | Access | | | Match / Difference |
| | Sensitive Data | | | Match / Difference |
| | Access | | | Match / Difference |
| | Sensitive Data | | | Match / Difference |
| | Access | | | Match / Difference |
| | Sensitive Data | | | Match / Difference |

- [ ] All source groups have completed at least one successful access scan.
- [ ] Scan results reviewed and validated against legacy job output.
- [ ] Significant discrepancies documented and investigated.

**Discrepancy notes:** _______________________________________________________________________________

---

## Post-migration

### Legacy system

- [ ] Decision made on whether to stop legacy jobs for sources now covered by AA26 *(optional — both systems can run simultaneously)*.
- [ ] If legacy jobs for in-scope sources are being stopped: jobs have been disabled and the date recorded.
- [ ] Read-only SQL Server access confirmed for authorized users (compliance, legal, analysts) who need historical records.
- [ ] Coverage boundary documented per source: _________________________ (date AA26 began collecting for each in-scope source).
- [ ] Compliance and legal teams notified of which system holds records for which sources and time periods.

### AA26 system

- [ ] AA26 scheduled scans running on configured cron schedule without errors.
- [ ] No scan execution failures in the first 48 hours of scheduled operation.
- [ ] Users and roles configured for all required analysts and administrators.
- [ ] Dashboards and reports accessible to relevant users.

### Handover

- [ ] Migration summary document completed and delivered to customer.
- [ ] Customer IT or security team trained on AA26 source group management.
- [ ] Customer IT or security team trained on interpreting scan results.
- [ ] Support escalation path communicated to customer.

---

## Sign-off

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Migration Engineer | | | |
| Customer IT Lead | | | |
| Customer Security Lead | | | |

---

## Related links

- [Migration Overview](./index.md)
- [Migrating Connection Profiles](./migrate-credentials.md)
- [Migrating Target Servers and Host Lists](./migrate-target-servers.md)
- [Migrating Job Schedules](./migrate-schedules.md)
- [Historical Audit Data Strategy](./audit-data-strategy.md)
