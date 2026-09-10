---
title: Known Limitations
description: Behaviors of Access Analyzer 26.1 to plan around, from installation and scanning to sign-in, backups, and the Netwrix Activity Monitor connection.
sidebar_position: 4
---

These are behaviors of Access Analyzer 26.1 to plan around. Each item links to the page that covers it in full.

## Installation

The [installer](install/index.md) **must** run as root or through `sudo`; _a non-root account cannot complete it_.

Access Analyzer serves the web application only over HTTPS, and the installer never generates a certificate, so **you must have one ready** for the server's hostname, _which must be a DNS name rather than an IP address_. See [Requirements](install/requirements.md).

## Sources

1. Sensitive data scans read [File Server](sources/smb-file-servers.md) content only over port 445; a source on another port can run Access scans but not Sensitive data scans.
2. Access Analyzer doesn't support the SMB 1x protocol.
3. An [Active Directory](sources/active-directory.md) source covers one domain and doesn't follow trusts, so add one source per domain.
4. You can't delete a [source](sources/index.md) while a scan execution is running or pending on it, or once scans have run against it; stop the execution or wait for it to finish first.

## Service Accounts

1. You can't change a [service account's](service-accounts/index.md) _type_ after you save it, and you can't delete an account while it is connected to a source. Create a new account for a different type, and point sources elsewhere before deleting.
2. Access Analyzer doesn't support passphrase-protected [SSH private keys](service-accounts/ssh-key.md). Create a key without a passphrase for agent deployment.

## Agents

1. You can't delete, rename, or label the [System agent](agents/index.md), and it shares the server with Access Analyzer itself, so deploy a dedicated agent for heavy scans.
2. You can't [remove an agent](agents/deploy-agent.md) while a scan is running on it, and removal leaves the agent software on the host until you uninstall it.
3. A scan [routed by label](agents/agent-labels.md) never falls back to the System agent. If no online agent carries the label, the execution waits, and Access Analyzer marks it Failed after about two hours.

## Scans

1. You can't change a [scan's](scans/index.md) type after creation; to collect something else, create another scan.
2. A [Sensitive data scan](scans/scan-types.md) needs a completed Access scan on the same source, because it works from that inventory. It skips files above the size limit, 10 MB by default, and files with excluded extensions, both set in [Application settings](settings/application.md).
3. After 90 days, Access Analyzer deletes [executions](scans/scan-executions.md) that end as Completed, Failed, or Cancelled; Completed with errors and Stopped executions stay until you delete the scan. An execution's **Detailed logs** tab holds the last 1,000 entries. When a failure isn't explained there, look in [System logs](settings/system-logs.md).

## Sensitive Data Patterns

1. You can't edit or delete [built-in patterns](sensitive-data-patterns/index.md) and groups, and there is no switch to turn off a single built-in pattern. To edit a pattern, create a custom pattern and copy the built-in pattern.
2. An empty [group selection](sensitive-data-patterns/pattern-groups.md) doesn't turn classification off; the scan classifies against every group, built-in and custom.
3. [Sensitive data scans](sensitive-data-patterns/index.md) extract text from Excel, Word, Portable Document Format (PDF), and plain text files. They don't read text in images or open encrypted documents.

## Dashboards and Reports

1. User admins don't see **Dashboards**, and [report](dashboards-reports/index.md) content doesn't load for them; give people who need reports the Viewer or Admin role.
2. File system permission reports show account and group names only after an Active Directory Identity Sync has run for the domain, so pair a File Server scan with an Identity Sync. The [Guides](guides/index.md) walk through both.

## Users and Sign-in

1. There is no self-service password reset. An Admin or User admin resets a local account's password from [**Settings > Users**](settings/users.md) if using a local account.
2. [Local accounts](settings/users.md) lock after three consecutive wrong passwords and stay locked until an Admin or User admin clicks **Unlock**. A session ends after 4 hours of inactivity or 8 hours after signing in. An account's type, local or federated, can't change after creation.
3. After you connect a [single sign-on (SSO)](settings/single-sign-on.md) provider, the web application has no control to disconnect it, replace it, connect a second one, or upload a new certificate authority (CA) certificate; keep a record of your configuration and contact Netwrix support for any of those.
4. Access Analyzer never creates users on its own: a directory user can sign in only after an Admin or User admin adds them as a **[Federated (SSO)](settings/single-sign-on.md)** account with the email address the directory reports. Directory groups don't map to roles.

## Backups and System Logs

1. A [backup](settings/backups.md) holds the configuration database, including settings and user accounts, but not scan results, the analytics store behind dashboards and reports, or the server's own configuration.
2. [Backups](settings/backups.md) run daily at 02:00 Coordinated Universal Time (UTC), and you can't change the time. There is no control to restore, download, or run a backup on demand; a restore is a manual procedure on the server.
3. Access Analyzer keeps [System logs](settings/system-logs.md) for 30 days, a period you can't change, and a download holds at most 10,000 entries. Split a longer range with **From** and **To**.

## Netwrix Activity Monitor

1. An [enrollment token](integrations/netwrix-activity-monitor.md) is valid for one hour, and generating a new token invalidates the previous one. One token can enroll several agents, so finish enrolling within the hour to avoid having to generate a new token.
2. The [listener](integrations/netwrix-activity-monitor.md) on port 4504 uses the Access Analyzer TLS certificate and doesn't start when it has expired. If you replace the certificate with one that uses a different key pair, enrolled agents stop trusting the server; generate a new token and enroll each agent again.
