---
title: "Set Up Active Directory Source Group"
description: "Configure an Active Directory source group in Access Analyzer"
sidebar_position: 3
---

# Set Up Active Directory Source Group

1. Navigate to **Configuration** > **Source Groups** and click **Add Source**. The source group wizard opens.
2. Select **Active Directory** and click **Next**.
3. Enter a **Source Group Name**.
4. Select a service account from the **Service Account** dropdown, or click **+** to create one inline. Service accounts store the credentials Access Analyzer uses to connect to your domain controllers. See [Service Accounts](../../configurations/service-accounts/overview.md) for details.
5. Click **Add** under **Domain Controllers**, then select **Add Manually**.
6. Enter the following for each domain controller:
   - **Server Name / IP** — The FQDN of the domain controller (for example, `dc01.corp.example.com`). IP addresses aren't supported. To add multiple domain controllers, separate entries with a comma or press **Enter** after each one.
   - **Domain** — The DNS domain name (for example, `corp.example.com`). Applied to all entries above.
   - **Port** — The LDAP port. Default is `389`. Use `636` for LDAPS.
7. Click **Add domain controller**, then click **Done**. Repeat steps 5–7 for each additional domain.
8. If your domain controllers use self-signed certificates on port 636, select **Ignore SSL errors**.
9. Click **Test Connection** to verify connectivity. Each domain controller displays a **Connected** or **Failed** status. Resolve any failures before proceeding.
10. Click **Next**.
11. Under **Scanner Location**, select **System scanner** to run scans from the Access Analyzer service, or select **Custom scanner** to use a deployed scanner. See [Scanners](../../configurations/source-groups/scanners/overview.md) for details.
12. Under **Scan Schedule**, select when to run the scan:
    - **Now** — Starts the scan immediately after setup completes.
    - **At** — Runs the scan once at a specific date and time.
    - **Advanced** — Runs the scan on a recurring schedule defined by a cron expression.
13. Click **Complete Setup**.

## What happens next

Access Analyzer creates the source group and a scan for each domain controller you added. If you selected **Now**, the Active Directory Inventory scan starts immediately.

To check scan progress, navigate to **Configuration** > **Scan Executions**.

## Edit a source group

To modify an existing Active Directory source group, navigate to **Configuration** > **Source Groups**, select the source group, and click **Edit**. The wizard reopens with your current configuration pre-populated. You can update the source group name, service account, domain controllers, and scan schedule.

:::note
Updating the service account affects all domain controllers in the source group, as they share a single set of credentials.
:::
