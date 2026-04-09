---
title: "Set Up Active Directory Source Group"
description: "Configure an Active Directory source group in Access Analyzer"
sidebar_position: 3
---

# Active Directory Source Group

**Step 1 –** Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.

**Step 2 –** Select **Active Directory** and click **Next**.

**Step 3 –** Enter a **Source Group Name**.

**Step 4 –** Select a service account from the **Service Account** dropdown, or click **+** to create one inline. Service accounts store the credentials Access Analyzer uses to connect to your domain controllers. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.

**Step 5 –** Click **Add** under **Domain Controllers**, then select **Add Manually**.

**Step 6 –** Enter the following for each domain controller:

- **Server Name / IP** — The FQDN of the domain controller. To add multiple domain controllers, separate entries with a comma or press **Enter** after each one.
- **Domain** — The DNS domain name (for example, `corp.example.com`). Applied to all entries above.
- **Port** — The LDAP port. Default is `389`. Use `636` for LDAPS.

**Step 7 –** Click **Add domain controller**, then click **Done**. Repeat Steps 5–7 for each additional domain.

**Step 8 –** If your domain controllers use self-signed certificates on port 636, select **Ignore SSL errors**.

**Step 9 –** Click **Test Connection** to verify connectivity. Each domain controller displays a **Connected** or **Failed** status. Resolve any failures before proceeding.

**Step 10 –** Click **Next**.

**Step 11 –** Under **Scanner Location**, select **System scanner** to run scans from the Access Analyzer service, or select **Custom scanner** to use a deployed scanner. See [Scanners](../../configurations/source-groups/scanners/overview.md) for details.

**Step 12 –** Under **Scan Schedule**, select when to run the scan:

- **Now** — Starts the scan immediately after setup completes.
- **At** — Runs the scan once at a specific date and time.
- **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.

**Step 13 –** Click **Complete Setup**.

## What Happens Next

Access Analyzer creates the source group and a scan for each domain controller you added. If you selected **Now**, the Active Directory Inventory scan starts immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

To view results after the scan completes, see [Active Directory Dashboard](../../dashboards-reports/active-directory-dashboard/overview.md).

## Edit a Source Group

To modify an existing Active Directory source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, domain controllers, and scan schedule.

:::note
Updating the service account affects all domain controllers in the source group, as they share a single set of credentials.
:::
