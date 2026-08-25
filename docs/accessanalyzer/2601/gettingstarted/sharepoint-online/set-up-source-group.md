---
title: "Set up a SharePoint Online source group"
description: "Configure a SharePoint Online source group in Access Analyzer"
sidebar_position: 3
---

# Set up a SharePoint Online source group

1. Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.

2. Select **SharePoint Online** and click **Next**.

3. Enter a **Source Group Name**.

4. Select a service account from the **Service Account** dropdown, or click **+** to create one inline. SharePoint Online requires a **Client ID and Certificate** service account type with specific API permissions [documented here](../../connectors/sharepoint-online/azure-permissions.md#required-permissions). See [Service Accounts](../../configurations/service-accounts/overview.md) for details on creating a service account.

5. Enter the **Tenant ID** for your Microsoft Entra ID directory. This must be a valid UUID (for example, `550e8400-e29b-41d4-a716-446655440000`).

6. Under **Certificate**, click **Generate and Download Certificate** to generate a certificate and download it to your machine. Upload this certificate to your registered Entra ID application before proceeding. See [Certificate Configuration](../../connectors/sharepoint-online/tenant-certificate-config.md) for upload steps.

   :::note
   If you click **Regenerate Certificate**, upload the new certificate to your Entra ID App Registration to replace the old one. Removing the old certificate from the App Registration is a manual step in the Azure portal — Access Analyzer can't remove it on your behalf.
   :::

7. Click **Test Connection** to verify that Access Analyzer can authenticate to your SharePoint Online tenant. Resolve any failures before proceeding.

   :::warning
   After you upload a new certificate to your Entra ID application, Microsoft Entra ID can take several minutes to propagate the certificate to its token-issuing endpoints. If **Test Connection** fails with an error similar to `AADSTS700027: The certificate with identifier used to sign the client assertion is not registered on application` immediately after you upload a certificate, wait a few minutes and try again before troubleshooting further.
   :::

8. Click **Next**.

9. Under **Scan Configuration**, configure the options for the scans you want to run:

   - **Include site URLs** — Limits the scan to specific site collections. Enter one URL per line. Leave empty to scan all sites in the tenant.
   - **Exclude site URLs** — Excludes specific site collections from the scan. Exclusions take precedence over inclusions.
   - **Scan OneDrive** — Includes OneDrive personal site collections in the scan.

   See [Scanning options](./scanning-options.md) for a full description of available scan types and options.

10. Under **Scan Schedule**, select when to run the scan:

    - **Now** — Starts the scan immediately after setup completes.
    - **At** — Runs the scan once at a specific date and time.
    - **Advanced** — Runs the scan on the recurring schedule you define with a cron expression.

11. Click **Complete Setup**.

## What happens next

Access Analyzer creates the source group and begins scanning your SharePoint Online environment. If you selected **Now**, the scan starts immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a source group

To modify an existing SharePoint Online source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens and displays your current configuration. You can update the source group name, service account, tenant ID, scan configuration, and scan schedule.

:::note
Updating the service account replaces the certificate that Access Analyzer uses to authenticate with SharePoint Online. Upload the new service account's certificate to your registered Entra ID application before saving.
:::
