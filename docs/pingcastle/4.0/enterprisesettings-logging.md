---
sidebar_position: 11
---
# Settings: Logging, Application, Data Retention, Action Plans, and Scanning and Scheduling

This page covers five related screens on the **Settings** page: **Logging**, **Application**, **Data retention**, **Action Plans**, and **Scanning and Scheduling**.

Most changes on these screens take effect within about 30 seconds, without a restart. A few settings require a restart to take effect, and PingCastle Enterprise schedules that restart automatically when you save a change that needs one.

## Logging

<!-- TODO: screenshot -->

The **Logging** screen controls how much detail PingCastle Enterprise writes to its logs and where those logs are stored.

### Log levels

Three settings control log verbosity for different parts of the application:

- **Default log level** — The verbosity for application code that doesn't fall under a more specific category below.
- **System log level** — The verbosity for ASP.NET Core system components, such as request routing and middleware.
- **Microsoft log level** — The verbosity for Microsoft framework components that PingCastle Enterprise depends on.

Each log level accepts one of the standard severity values, from most to least verbose: `Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`, and `None`. For example, setting **Default log level** to `Warning` means PingCastle Enterprise only logs warnings, errors, and critical events from its own code, filtering out routine informational messages.

- **Include scopes** — Adds contextual data, such as the request ID or user session, to each log entry. Turn this on when you need to trace a sequence of related log entries back to a single request, for example while troubleshooting an intermittent error.

### File logging

- **File logging enabled** — Turns on writing logs to disk, in addition to any other logging PingCastle Enterprise performs.
- **Log file path** — The folder where PingCastle Enterprise writes log files.
- **Log retention days** — How many daily log files PingCastle Enterprise keeps before deleting the oldest one.
- **Log file size limit (MB)** — The maximum size a single log file can reach before PingCastle Enterprise rolls over to a new file.

For example, if you set **Log retention days** to 14, PingCastle Enterprise keeps the last 14 daily log files and removes anything older each time it rolls over to a new day.

## Application

<!-- TODO: screenshot -->

The **Application** screen controls a few application-level settings unrelated to logging.

- **Support link** — The URL PingCastle Enterprise shows to users who need to contact support, for example from a help menu or error page.
- **HTTPS redirection** — Forces browsers to redirect from HTTP to HTTPS when accessing PingCastle Enterprise.
- **Allowed hosts** — A comma-separated list of hostnames PingCastle Enterprise accepts requests for. PingCastle Enterprise rejects any request whose `Host` header doesn't match this list. Set this to match every hostname your users and agents use to reach the server, including load balancer or reverse proxy hostnames.

## Data retention

<!-- TODO: screenshot -->

The **Data retention** screen controls how long PingCastle Enterprise keeps generated data.

- **Limit user list output** — The maximum number of user rows included in a generated HTML risk report. Large domains can produce reports with thousands of affected users; this setting caps report size so it stays manageable to open and read. For example, setting this to 1,000 means a report only lists the first 1,000 affected users, even if a finding affects more.
- **Archive reports after (days)** — How many days after a report completes before PingCastle Enterprise moves it to archived storage.
- **Audit log retention (days)** and **Audit log export row limit** — Control how long audit log entries are kept and how many rows a single export can contain. See [Enterprise Audit Log](enterpriseauditlog.md) for what the audit log tracks and how it's structured.

## Action Plans

<!-- TODO: screenshot -->

The **Action Plans** screen controls how PingCastle Enterprise populates action plans, the remediation task lists generated from scan findings.

- **Number of days since now for action plan** — The default number of days from today that PingCastle Enterprise uses when it calculates due dates for new action plan tasks.
- **Action plan templates** — Editable text templates, one per risk finding, that PingCastle Enterprise uses to populate the remediation guidance shown in a generated action plan. Edit a template to customize the guidance your organization provides for a specific finding.

## Scanning and Scheduling

<!-- TODO: screenshot -->

The **Scanning and Scheduling** screen configures the connection settings and limits that the scheduler service and agents use to run scans. See [Enterprise Scheduling](enterprisescheduling.md) for how credential profiles and scheduled scans use these settings.

- **Data path** — The root folder where PingCastle Enterprise stores scan data and results.
- **Enterprise API URL** — The URL agents use to reach the PingCastle Enterprise API. Agents running on remote domain controllers or servers use this URL to submit scan results back to Enterprise.
- **Agent export level** — How much detail an agent includes when it exports scan results to Enterprise, for example a full data export versus a reduced one.
- **Max concurrent scans** — The maximum number of scans the scheduler runs at the same time. Increase this to run more scans in parallel on hardware that can handle the additional load, or decrease it to reduce resource contention.
- **Execution history retention (days)** — How many days of completed scan job execution history PingCastle Enterprise keeps before deleting it.
