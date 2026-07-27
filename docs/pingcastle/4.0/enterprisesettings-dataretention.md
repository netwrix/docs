---
sidebar_position: 13
---
# Data Retention

<!-- TODO: screenshot -->

The **Data retention** screen controls how long PingCastle Enterprise keeps generated data.

Changes to these settings take effect within about 30 seconds, without a restart.

- **Limit user list output** — The maximum number of user rows included in a generated HTML risk report. Large domains can produce reports with thousands of affected users; this setting caps report size so it stays manageable to open and read. For example, setting this to 1,000 means a report only lists the first 1,000 affected users, even if a finding affects more.
- **Archive reports after (days)** — How many days after a report completes before PingCastle Enterprise moves it to archived storage.
- **Audit log retention (days)** and **Audit log export row limit** — Control how long audit log entries are kept and how many rows a single export can contain. See [Enterprise Audit Log](enterpriseauditlog.md) for what the audit log tracks and how it's structured.
