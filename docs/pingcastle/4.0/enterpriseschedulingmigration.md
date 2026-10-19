---
sidebar_position: 6
---
# Migrating scheduled scans from PingCastle Enterprise 3.5.1

If you're upgrading from PingCastle Enterprise 3.5.1, migrate your existing Task Scheduler-based scheduled tasks to `PingCastleSchedulerService`.

To migrate your scheduled scans:

1. Go to **Configuration** > **Scheduler** in PingCastle Enterprise.
2. Click **Migrate from Task Scheduler**.
3. Review the verification table. It matches the Agents and Domains from your 3.5.1 scheduled tasks against the Agents and Domains you've configured in PingCastle Enterprise 4.0.

   ![A screenshot of the legacy task migration verification table, matching a Windows Task Scheduler task's domain and agent against PingCastle Enterprise 4.0 configuration.](/images/pingcastle/enterprisescheduling/migration-verification-table.webp)

4. Confirm the migration. PingCastle Enterprise creates a scheduled scan job and credential profile for each matched task and stops managing the old Task Scheduler tasks.

:::note
Review the verification table carefully before you confirm. Any Agent or Domain that PingCastle Enterprise can't match won't migrate, and you'll need to create a scheduled scan for it manually.
:::
