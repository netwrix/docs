---
sidebar_position: 5
---
# Enterprise Scheduling

## Overview

PingCastle Enterprise 4.0 replaces Task Scheduler-based scanning with `PingCastleSchedulerService`, a dedicated Windows service built on Quartz.NET. The installer sets up and starts `PingCastleSchedulerService` automatically, so there's nothing to configure at the operating system level. You manage every scheduled scan from the PingCastle Enterprise web interface instead of the Windows Task Scheduler console.

<!-- TODO: screenshot -->

Most configuration changes you make in PingCastle Enterprise, including scheduler settings, take effect within about 30 seconds. A small number of settings require a service restart, and the application schedules that restart automatically. See the settings documentation for the restart behavior of individual settings.

## Credential profiles

A credential profile bundles the information PingCastle Enterprise needs to run an unattended scan: an Agent, an API key, and the configuration for a specific scan type. You create a credential profile once, then select it whenever you set up a scheduled scan.

The fields a credential profile needs depend on the scan type.

**Active Directory scans** need:

- An Agent.
- A Domain to scan.
- Optionally, a custom run-as account. If you don't specify one, the scan runs under the `PingCastleSchedulerService` service account.

**Entra scans** need:

- An Agent.
- A configured tenant. Set up the tenant connection before you create the credential profile. See [Entra scanning](enterpriseentrascan.md) for tenant configuration steps.

<!-- TODO: screenshot -->

## Scheduled scans

A scheduled scan job ties a credential profile to a recurring schedule. Each job has:

- **Job name**: the name you use to identify the job in the scheduler list.
- **Execution profile**: the credential profile the job runs under.
- **Frequency**: how often the job runs.

Each job also supports the following options:

- **Privileged Scan**: runs the scan in privileged mode, so PingCastle can evaluate checks that need elevated read access. See [Running privileged scans](#running-privileged-scans) for the account requirements.
- **Target Specific DC**: points the scan at a specific domain controller instead of letting PingCastle select one automatically.
- **Scan Timeout**: sets the maximum time the scan can run before `PingCastleSchedulerService` stops it.
- **Include trace logging**: turns on verbose diagnostic logging for the scan run, useful when troubleshooting a failed or stalled job.

<!-- TODO: screenshot -->

## Migrating scheduled scans from PingCastle Enterprise 3.5.1

If you're upgrading from PingCastle Enterprise 3.5.1, migrate your existing Task Scheduler-based scheduled tasks to `PingCastleSchedulerService`.

To migrate your scheduled scans:

1. Go to the **Enterprise Scheduling** page in PingCastle Enterprise.
2. Click **Migrate from Task Scheduler**.
3. Review the verification table. It matches the Agents and Domains from your 3.5.1 scheduled tasks against the Agents and Domains you've configured in PingCastle Enterprise 4.0.

   <!-- TODO: screenshot -->

4. Confirm the migration. PingCastle Enterprise creates a scheduled scan job and credential profile for each matched task and stops managing the old Task Scheduler tasks.

:::note
Review the verification table carefully before you confirm. Any Agent or Domain that PingCastle Enterprise can't match won't migrate, and you'll need to create a scheduled scan for it manually.
:::

## Granting permissions for custom run-as accounts

A custom run-as account you configure on a credential profile needs, at minimum, the **Log on as a batch job** right on the server running `PingCastleSchedulerService`. Grant this right through Group Policy or Local Security Policy.

### Grant the right through Group Policy

1. Open the Group Policy Management Console (`gpmc.msc`).
2. Edit a Group Policy Object (GPO) linked to the organizational unit that contains the server running `PingCastleSchedulerService`, or create a new GPO for this purpose.
3. Go to **Computer Configuration** > **Policies** > **Windows Settings** > **Security Settings** > **Local Policies** > **User Rights Assignment**.
4. Double-click **Log on as a batch job**.
5. Click **Add User or Group** and add the custom run-as account.
6. Click **OK** to save the GPO.
7. On the target server, run `gpupdate /force`, or wait for the next policy refresh.

### Grant the right through Local Security Policy

1. On the server running `PingCastleSchedulerService`, open Local Security Policy (`secpol.msc`).
2. Go to **Security Settings** > **Local Policies** > **User Rights Assignment**.
3. Double-click **Log on as a batch job**.
4. Click **Add User or Group** and add the custom run-as account.
5. Click **OK** to apply the change.

## Running privileged scans

You can run a privileged scan in one of two ways:

- Using a privileged `PingCastleSchedulerService` service account. Netwrix doesn't recommend this option, because it grants elevated Active Directory permissions to every scan the service runs, not just the ones that need them.
- Using a privileged run-as account configured on the credential profile. This scopes the elevated permissions to the specific scans that use that credential profile.

For the Active Directory permissions a privileged account needs, see [Privileged Mode](index.md#privileged-mode).
