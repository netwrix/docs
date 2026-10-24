---
title: "Auditing and reporting overview"
description: "Find the Privilege Secure audit pages, what each one shows, which roles can open them, and the default date range of each."
sidebar_position: 10
---

# Auditing and reporting overview

The **Auditing & Reporting** menu groups the pages that show what happened in Privilege Secure: who accessed what, what changed in the configuration, what the system logged, and what the services wrote to their log files. Use these pages to answer audit questions, certify access, and schedule reports.

To open them, select **Auditing & Reporting** in the left navigation. The menu lists, in order, **Access Certification**, **Activity Log**, **DB Change History**, **Events**, **Log Files**, and **Reporting**.

## Pages

| Page | Question it answers | Default range |
|---|---|---|
| [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md) | Who still needs the access they have, according to a reviewer? | Not applicable |
| [Activity log](/docs/privilegesecure/26.07/admin/audit-reporting/activity-log.md) | What sessions ran, and for how long? | Last 30 days |
| [Database change history](/docs/privilegesecure/26.07/admin/audit-reporting/db-change-history.md) | Who changed the configuration, and when? | Last 7 days |
| [Events](/docs/privilegesecure/26.07/admin/audit-reporting/events.md) | What did the system log? | Not applicable |
| [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md) | What did each service write to its log file? | Not applicable |
| [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md) | How are reports run, customized, and scheduled? | Last 7 days for a new report, last 30 days for a predefined report |

For a session-by-session view of live and past sessions, see the [Dashboard](/docs/privilegesecure/26.07/admin/sessions/dashboard.md).

## Who can open the pages

| Role | Pages |
|---|---|
| Administrators | All pages |
| Reviewers | **Access Certification**, limited to the tasks assigned to them |
| Auditors | **Activity Log**, **DB Change History**, **Events**, **Log Files**, and **Reporting** |

{/* TODO verify: the pages each role sees. The navigation gates come from the console code. No Reviewer or Auditor user signed in during the lab. Auditors who hold only the Reporting permission may see fewer pages. */}

Auditors work within the users and resources assigned to their role. For auditor permissions, see [Create a custom role](/docs/privilegesecure/26.07/admin/roles/custom-roles.md). To give auditors a read-only view of every administration page, see [Give auditors read-only console access](/docs/privilegesecure/26.07/admin/roles/admin-view-read-only.md).

## Common tasks

- Review who has access to what: [Run an access certification](/docs/privilegesecure/26.07/admin/audit-reporting/access-certification.md).
- Export session history to a spreadsheet: [Activity log](/docs/privilegesecure/26.07/admin/audit-reporting/activity-log.md).
- Check a recent configuration change: [Database change history](/docs/privilegesecure/26.07/admin/audit-reporting/db-change-history.md).
- Send a report to your inbox on a schedule: [Reports and subscriptions](/docs/privilegesecure/26.07/admin/audit-reporting/reports.md).
- Collect logs for a support case: [Log files](/docs/privilegesecure/26.07/admin/audit-reporting/log-files.md).
