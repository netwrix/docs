---
title: "Set Up SharePoint Online Source Group"
description: "Configure a SharePoint Online source group in Access Analyzer"
sidebar_position: 3
---

# Set Up SharePoint Online Source Group

**Step 1 –** Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.

**Step 2 –** Select **SharePoint Online** and click **Next**.

**Step 3 –** Enter a **Source Group Name**.

**Step 4 –** Select a service account from the **Service Account** dropdown, or click **+** to create one inline. SharePoint Online requires a **Client ID and Certificate** service account type. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.

**Step 5 –** Enter the **Tenant ID** for your Microsoft Entra ID directory. This must be a valid UUID (for example, `550e8400-e29b-41d4-a716-446655440000`).

**Step 6 –** Under **Certificate**, click **Generate and Download Certificate** to generate a certificate and download it to your machine. Upload this certificate to your registered Entra ID application before proceeding. See [Certificate Configuration](../../connectors/sharepoint-online/tenant-certificate-config.md) for upload steps.

**Step 7 –** Click **Test Connection** to verify that Access Analyzer can authenticate to your SharePoint Online tenant. Resolve any failures before proceeding.

**Step 8 –** Click **Next**.

**Step 9 –** Under **Scanner Location**, select **System scanner** to run scans from the Access Analyzer service, or select **Custom scanner** to use a deployed scanner. See [Scanners](../../configurations/source-groups/scanners/overview.md) for details.

**Step 10 –** Under **Scan Schedule**, select when to run the scan:

- **Now** — Starts the scan immediately after setup completes.
- **At** — Runs the scan once at a specific date and time.
- **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.

**Step 11 –** Click **Complete Setup**.

## What Happens Next

Access Analyzer creates the source group and begins scanning your SharePoint Online environment. If you selected **Now**, the scan starts immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a Source Group

To modify an existing SharePoint Online source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, tenant ID, and scan schedule.

:::note
Updating the service account replaces the certificate used to authenticate with SharePoint Online. Ensure the new service account's certificate is uploaded to your registered Entra ID application before saving.
:::
