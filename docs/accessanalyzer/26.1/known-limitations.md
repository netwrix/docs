---
title: Known limitations
description: Behaviors of Access Analyzer 26.1 to plan around, from installation and scanning to sign-in, backups, and the Netwrix Activity Monitor connection.
sidebar_position: 4
---

These are behaviors of Access Analyzer 26.1 to plan around. Each item links to the page that covers it in full.

## Installation

The [installer](install/index.md) must run as root or through `sudo`; a non-root account can't complete it.

The web application is served only over HTTPS, and the installer never generates a certificate, so have one ready for the server's hostname, which must be a DNS name rather than an IP address. See [Requirements](install/requirements.md).

## Sources

Sensitive data scans read [File Server](sources/smb-file-servers.md) content only over port 445; a source on another port can run Access scans but not Sensitive data scans. SMB 1 isn't supported.

An [Active Directory](sources/active-directory.md) source covers one domain and doesn't follow trusts, so add one source per domain.

You can't delete a [source](sources/index.md) while a scan execution is running or pending on it, or once scans have run against it; stop the execution or wait for it to finish first.

## Service accounts

A [service account's](service-accounts/index.md) type is fixed after you save it, and you can't delete an account while a source uses it. Create a new account for a different type, and point sources elsewhere before deleting.

Passphrase-protected [SSH private keys](service-accounts/ssh-key.md) aren't supported. Create a key without a passphrase for agent deployment.

## Agents

The [System agent](agents/index.md) can't be deleted, renamed, or labeled, and it shares the server with Access Analyzer itself, so deploy a dedicated agent for heavy scans.

You can't [remove an agent](agents/deploy-agent.md) while a scan is running on it, and removal leaves the agent software on the host until you uninstall it.

A scan [routed by label](agents/agent-labels.md) never falls back to the System agent. If no online agent carries the label, the execution waits and is marked Failed after about two hours.

## Scans

A [scan's](scans/index.md) type is fixed after creation; to collect something else, create another scan.

A [Sensitive data scan](scans/scan-types.md) needs a completed Access scan on the same source, because it works from that inventory. It skips files above the size limit, 10 MB by default, and files with excluded extensions, both set in [Application settings](settings/application.md).

An [execution](scans/scan-executions.md) runs for at most 7 days. Executions that end as Completed, Failed, or Cancelled are deleted after 90 days, a fixed period; Completed with errors and Stopped executions stay until you delete the scan.

An execution's **Detailed logs** tab holds the last 1,000 entries. When a failure isn't explained there, look in [System logs](settings/system-logs.md).

## Sensitive data patterns

[Built-in patterns](sensitive-data-patterns/index.md) and groups can't be edited or deleted, and there is no switch to turn off a single built-in pattern. Narrow a scan by choosing which pattern groups it classifies.

An empty [group selection](sensitive-data-patterns/pattern-groups.md) doesn't turn classification off; the scan classifies against every group, built-in and custom.

[Sensitive data scans](sensitive-data-patterns/index.md) extract text from Excel, Word, Portable Document Format (PDF), and plain text files. They don't read text in images or open encrypted Office documents.

## Dashboards and reports

User admins don't see **Dashboards**, and [report](dashboards-reports/index.md) content doesn't load for them; give people who need reports the Viewer or Admin role.

File system permission reports show account and group names only after an Active Directory Identity sync has run for the domain, so pair a File Server scan with an Identity sync. The [Guides](guides/index.md) walk through both.

## Users and sign-in

There is no self-service password reset. An Admin or User admin resets a local account's password from [**Settings > Users**](settings/users.md).

A [local account](settings/users.md) locks after three consecutive wrong passwords or five wrong two-factor codes, and stays locked until an Admin or User admin clicks **Unlock**. A session ends after 4 hours of inactivity or 8 hours after signing in. An account's type, local or federated, can't change after creation.

After you connect a [single sign-on (SSO)](settings/single-sign-on.md) provider, the web application has no control to disconnect it, replace it, connect a second one, or upload a new certificate authority (CA) certificate; keep a record of your configuration and contact Netwrix support for any of those.

Access Analyzer never creates users on its own: a directory user can sign in only after an Admin or User admin adds them as a **[Federated (SSO)](settings/single-sign-on.md)** account with the email address the directory reports. Directory groups don't map to roles.

## Backups and system logs

A [backup](settings/backups.md) holds the configuration database, including settings and user accounts, but not scan results, the analytics store behind dashboards and reports, or the server's own configuration.

[Backups](settings/backups.md) run daily at 02:00 Coordinated Universal Time (UTC), and the time can't be changed. There is no control to restore, download, or run a backup on demand; a restore is a manual procedure on the server.

[System logs](settings/system-logs.md) are kept for 30 days, a period you can't change, and a download holds at most 10,000 entries. Split a longer range with **From** and **To**.

## Netwrix Activity Monitor

An [enrollment token](integrations/netwrix-activity-monitor.md) is valid for one hour, and generating a new token invalidates the previous one. One token can enroll several agents, so finish enrolling within the hour.

The [listener](integrations/netwrix-activity-monitor.md) on port 4504 uses the Access Analyzer TLS certificate and doesn't start when it has expired. If you replace the certificate with one that uses a different key pair, enrolled agents stop trusting the server; generate a new token and enroll each agent again.
