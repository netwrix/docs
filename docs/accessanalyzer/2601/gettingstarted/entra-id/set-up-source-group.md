---
title: "Set up an Entra ID source group"
description: "Configure an Entra ID source group in Access Analyzer"
sidebar_position: 3
---

# Set up an Entra ID source group

1. Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.

2. Select **Entra ID** and click **Next**.

3. Enter a **Source Group Name**.

4. Select a service account from the **Service Account** dropdown, or click **+** to create one inline. Entra ID requires a **Client ID and Secret** service account type. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.

5. Enter the **Tenant ID** for your Entra ID directory. This must be a valid UUID (for example, `550e8400-e29b-41d4-a716-446655440000`).

6. Click **Test Connection** to verify that Access Analyzer can authenticate to your Entra ID tenant. Resolve any failures before proceeding.

7. Click **Next**.

8. Under **Scan Schedule**, select when to run the scan:

   - **Now** — Starts the scan immediately after setup completes.
   - **At** — Runs the scan once at a specific date and time.
   - **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.

9. Click **Complete Setup**.

## What happens next

Access Analyzer creates the source group and begins syncing users, groups, and roles from your Entra ID tenant. If you selected **Now**, the scan starts immediately. MIP sensitivity labels are retrieved automatically as part of the scan.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a source group

To modify an existing Entra ID source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, tenant ID, and scan schedule.

:::note
Updating the service account replaces the client credentials used to authenticate with Entra ID. Ensure the new service account has the required API permissions before saving.
:::
