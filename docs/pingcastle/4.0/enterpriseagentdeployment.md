---
sidebar_label: Agent deployment
---
# Agent Deployment for PingCastle Enterprise

`PingCastleSchedulerService` handles scheduled scanning for domains it can reach directly. Use agent deployment instead when a security or network boundary prevents that — for example, an isolated or air-gapped domain, or a domain separated from the PingCastle Enterprise server by a firewall the scheduler can't cross. In these cases, run `PingCastle.exe` locally on a server that has access to the target domain, and have it push results directly to PingCastle Enterprise over the API.

## Program version

Use the latest official version of PingCastle.exe (included in the PingCastleEnterprise directory). The application supports reports from different PingCastle versions - newer features only display after you upgrade PingCastle Enterprise, but you don't lose any data.

## Scheduling

Configure Windows Task Scheduler (or your organization's batch scheduler) to run scans weekly using a normal user account (non-privileged) from a batch server (not a Domain Controller).

## Command line

Create an API key with upload permissions (**Configuration** > **Agents**) and test the command before scheduling:

```powershell
PingCastle.exe --healthcheck --level Full --api-endpoint https://yourservername --api-key yourapikey
```

Optionally specify a different domain:

```powershell
PingCastle.exe --healthcheck --server <other domain> --level Full --api-endpoint https://yourservername --api-key yourapikey
```

## Common issues

If the server requires TLS 1.2, install the TLS 1.2 client package on the system running the audit.

For details on calling the API directly (including through Swagger or PowerShell), see [Using the Swagger API for PingCastle Enterprise](enterpriseapiswagger.md).

## Automatic Forest Exploration Setup

For large environments, you can simplify scan configuration by using automatic forest exploration. PingCastle then discovers and scans all domains within a forest automatically, using a wildcard in the `--server` parameter.

### Manual Execution

To manually scan all domains in a forest:

```powershell
PingCastle.exe --healthcheck --server *.domain.fqdn --Level Full
```

Replace `domain.fqdn` with your actual forest root domain name.

### Automated Execution for Agent Setup

For scheduled scans with automatic upload to PingCastle Enterprise:

```powershell
PingCastle.exe --healthcheck --server *.domain.fqdn --Level Full --api-endpoint https://pingcastle.yourdomain.fqdn --api-key <Key from Configuration -> Agents with upload permission> --out "SchedulerLogs\<fqdn>.txt"
```

#### Parameters

- `*.domain.fqdn` - Wildcard pattern to scan all domains in the forest
- `--api-endpoint` - URL of your PingCastle Enterprise server
- `--api-key` - API key created in **Configuration** > **Agents** with upload permission
- `--out` - Log file path for the scan output

:::tip
The wildcard pattern `*.domain.fqdn` automatically discovers and scans all child domains within the specified forest, so you don't need to configure individual domain scans.
:::
