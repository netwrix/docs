---
title: "Agent deployment"
description: "Run PingCastle.exe on a remote server, push reports to PingCastle Pro with an API key, and import existing reports."
sidebar_position: 30
sidebar_label: Agent deployment
---

# Agent deployment for PingCastle Pro

Use agent deployment when a security or network boundary prevents the PingCastle Pro scheduler from reaching a domain directly. Run `PingCastle.exe` on a server that has access to the target domain, and have it push results to PingCastle Pro over the API.

## Program version

Use the latest official version of PingCastle.exe (included in the PingCastle Pro directory).

:::note
PingCastle Pro supports reports from different PingCastle versions. Newer features only display after you upgrade PingCastle Pro, but you don't lose any data.
:::

## Create an API key

Each agent authenticates with an API key that has upload permission.

1. In PingCastle Pro, go to **Configuration** > **Agents**.
2. Create an API key with upload permission.
3. Copy the key.

## Scheduling

Use your organization's batch scheduler, or Windows Task Scheduler, to run scans weekly. Run them with a normal, non-privileged user account from a batch server, not a domain controller. The last page of the PingCastle.exe documentation describes how to use Windows Task Scheduler.

## Command line

Test the command before you schedule it:

```powershell
PingCastle.exe --healthcheck --level Full --api-endpoint https://<servername> --api-key <api-key> --out run_logs.txt
```

To scan a different domain, add `--server <other-domain>`.

## Common issues

If the PingCastle Pro server requires TLS 1.2, install the TLS 1.2 client package on the system that runs the audit.

## Bulk import of existing reports

The command line client can import reports you already have. It requires an API key and the PingCastle Pro URL. Upload all reports stored in the current directory:

```powershell
PingCastle.exe --upload-all-reports --api-endpoint https://<servername> --api-key <api-key>
```
