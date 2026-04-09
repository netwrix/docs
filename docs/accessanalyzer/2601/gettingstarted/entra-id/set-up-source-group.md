---
title: "Set Up Entra ID Source Group"
description: "Configure an Entra ID source group in Access Analyzer"
sidebar_position: 3
---

# Set Up Entra ID Source Group

**Step 1 –** Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.

**Step 2 –** Select **Entra ID** and click **Next**.

**Step 3 –** Enter a **Source Group Name**.

**Step 4 –** Select a service account from the **Service Account** dropdown, or click **+** to create one inline. Entra ID requires a **Client ID and Secret** service account type. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.

**Step 5 –** Enter the **Tenant ID** for your Entra ID directory. This must be a valid UUID (for example, `550e8400-e29b-41d4-a716-446655440000`).

**Step 6 –** Click **Test Connection** to verify that Access Analyzer can authenticate to your Entra ID tenant. Resolve any failures before proceeding.

**Step 7 –** Click **Next**.

**Step 8 –** Under **Scanner Location**, the scanner is set to **System scanner** and cannot be changed. Entra ID scans run from the Access Analyzer service only.

**Step 9 –** Under **Scan Schedule**, select when to run the scan:

- **Now** — Starts the scan immediately after setup completes.
- **At** — Runs the scan once at a specific date and time.
- **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.

**Step 10 –** Click **Complete Setup**.

## What Happens Next

Access Analyzer creates the source group and begins syncing users, groups, and roles from your Entra ID tenant. If you selected **Now**, the scan starts immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a Source Group

To modify an existing Entra ID source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, tenant ID, and scan schedule.

:::note
Updating the service account replaces the client credentials used to authenticate with Entra ID. Ensure the new service account has the required API permissions before saving.
:::
