---
sidebar_label: Collecting support logs
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Collecting Support Logs for PingCastle Enterprise

Use this page to gather logs before opening a support ticket. It covers two kinds of logs:

- **Application and service logs** — for issues after installation, such as errors in the web portal, scanning, or the scheduler.
- **Installer logs** — for issues during installation or upgrade.

## Application and Service Logs

PingCastle Enterprise, CloudAPI (which handles Entra ID scanning), and PingCastleSchedulerService all use Serilog for logging, each writing to its own `logs` folder. See [Logging](enterprisesettings-logging.md) for how to configure log levels and file logging from the web portal.

<Tabs>
<TabItem value="portal" label="From Web App" default>

Go to **Configuration** > **Settings** > **Logging** and click **Download Today's Logs** or **Download All Logs**. See [Logging](enterprisesettings-logging.md#downloading-logs) for what each download includes.

</TabItem>
<TabItem value="filesystem" label="From filesystem">

Sign in to the server and collect the `logs` folder for each component directly:

- PingCastle Enterprise: `logs` in the installation directory
- CloudAPI: `CloudAPI\logs` in the installation directory
- PingCastleSchedulerService: `Scheduler\logs` in the installation directory

For PingCastleSchedulerService, you can also check the Windows Event Log on the server to troubleshoot the scheduler.

</TabItem>
</Tabs>

## Installer Logs

`PingCastle-Enterprise-Installer-<version>.exe` itself doesn't write a log file. All install-time detail comes from the MSI log, which you enable the same way you would with `msiexec` directly:

```
PingCastle-Enterprise-Installer-<version>.exe /l*v "C:\Temp\PingCastleEnterprise_install.log"
```

- `/l*v` enables verbose logging for all message types.
- msiexec forwards the log path unchanged from the wrapper, so the elevated process running the install needs write access to the path, not just the account that launched `PingCastle-Enterprise-Installer-<version>.exe`. Avoid a path under a non-administrator user's profile unless that location also grants write access to `SYSTEM` or the administrator account.

If the installer never reaches `msiexec` — for example, you decline the UAC prompt, or the embedded MSI fails to extract — no log file appears at all. See [Common Errors and Solutions](enterprisetroubleshooting.md#common-errors-and-solutions) for those symptoms.

:::note
PingCastle Enterprise scrubs sensitive values, such as connection strings and keys, before writing them to the log. Even so, review the log for other configuration details before sharing it outside your organization.
:::
