---
title: Scan Entra ID
description: Register an application for Access Analyzer, add the tenant as an Entra ID source, run an Identity sync, and open the Entra ID identity reports.
sidebar_position: 3
---

Connect a Microsoft Entra ID tenant to Access Analyzer and run an Identity sync. The sync reads the tenant's users, groups (including dynamic membership rules), directory roles, and memberships. The results appear in the **Entra Users** and **Entra Groups** reports, and they let SharePoint Online scans of the same tenant calculate effective permissions.

Access Analyzer signs in to the tenant as an application, not as a user, so the first job is an app registration with a client secret.

## Before You Start

**In Entra ID.** You need an administrator who can create an app registration and grant admin consent for its permissions. The registration needs Microsoft Graph application permissions that let Access Analyzer read users, groups, and directory roles; the sync never writes to the directory. When you add the source, **Test connection** checks that the app has the permissions it needs.

**The network.** The Access Analyzer server needs outbound HTTPS (TCP 443) to the Microsoft sign-in and Microsoft Graph endpoints for your tenant's cloud.

**In Access Analyzer.** Sign in with the Admin role.

:::note

Registering this application doesn't let people sign in to Access Analyzer with their Microsoft accounts. Set that up separately under [Single sign-on](../settings/single-sign-on.md).

:::

## 1. Register an Application in Entra ID

1. In the Microsoft Entra admin center, create an app registration for Access Analyzer.
2. On the registration's **Overview** page, copy the **Application (client) ID** and the **Directory (tenant) ID**. You need both in later steps.
3. Under **Certificates & secrets**, create a client secret.
4. Copy the secret value; Entra ID shows it only once.
5. Under **API permissions**, add the Microsoft Graph application permissions that grant read access to users, groups, and directory roles.
6. Grant admin consent for the tenant.

Record the secret's expiry date. When you rotate it, update the service account you create in the next section.

## 2. Create the Service Account

Entra ID sources use a **Client ID/secret** service account. The tenant isn't part of the account; you enter it on the source in the next section.

1. Go to **Configuration > Service accounts** and click **Add service account**.
2. In **Name**, enter a unique name, for example `entra-access-analyzer-app`.
3. In **Service account type**, select **Client ID/secret**.
4. In **Client (application) ID**, paste the **Application (client) ID** from the registration.
5. In **Client secret**, paste the secret value.
6. Click **Add account**.

![Add service account drawer with the Client ID/secret type selected](/images/accessanalyzer/26.1/service-accounts/add-client-id-secret.webp)

The [Client ID and secret](../service-accounts/client-id-secret.md) page covers editing the account when you rotate the secret.

## 3. Add the Source

1. Go to **Configuration > Sources** and click **Add source**.
2. In **Source type**, select **Entra ID**.
3. Under **Details**, enter a **Name**, such as the tenant's primary domain.
4. Under **Connection**, in **Tenant ID**, paste the **Directory (tenant) ID**.
5. In **Azure cloud**, leave **Azure (Commercial)** selected. If the tenant is in a government or China cloud, select **Azure Government (GCC)**, **Azure Government (GCC High)**, **Azure Government (DoD)**, or **Azure China (21Vianet)** instead.
6. Under **Access**, in **Service account**, select the account you created in the previous section.
7. Click **Test connection**. Access Analyzer signs in as the application and validates its permissions. Success shows a **Connection successful** message; failure shows a **Connection failed** alert with the reason.
8. Click **Add source**.

![Add source drawer for an Entra ID source](/images/accessanalyzer/26.1/sources/add-entra-id.webp)

Field details are on the [Entra ID](../sources/entra-id.md) source page.

## 4. Create the Identity Sync

Click **Next** to move from one step to the next.

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Identity sync**.

   ![Create scan Type step with the Access, Sensitive data, and Identity sync cards](/images/accessanalyzer/26.1/scans/create-scan-1-type.webp)

3. On the **Target** step, keep **Specific sources** and select the tenant's checkbox.
4. On the **Configure** step, click **Next**. Entra ID syncs have no settings to change.
5. On the **Schedule** step, select **On a schedule**.
6. Keep the default **Daily** at 02:00.
7. Leave the agent set to **System agent**.
8. On the **Review** step, enter a **Name** such as `contoso.onmicrosoft.com - identity sync`.
9. Click **Create & run now**.

## 5. Watch the Execution

Go to **Configuration > Scan executions** and find the new scan in the list. The list refreshes on its own; the status moves from **Pending** through **Running** to **Completed**, and **Objects** shows how many directory objects the sync read.

![Scan executions list](/images/accessanalyzer/26.1/scans/executions-list.webp)

If the status is **Failed**, open the row's actions menu and click **View logs**, then check the **Detailed logs** tab. A sign-in error points at the client ID, secret, or tenant ID; a permission error means the app registration is missing a Graph permission or its admin consent. [Scan executions](../scans/scan-executions.md) lists every status.

## 6. Check the Reports

Go to **Reports > Identity** and open the **Entra ID** tab.

![Identity reports page on the Entra ID tab](/images/accessanalyzer/26.1/dashboards-reports/reports-identity-entra-id.webp)

| Report | What it shows |
|--------|---------------|
| **Entra Users** | User accounts with multi-factor authentication (MFA) status, licenses, and sign-in activity |
| **Entra Groups** | Groups with their membership, type, and assigned licenses |

Neither report has filters; open one and click **Refresh** to load the latest sync. Entra ID data has no dashboard of its own, and the Active Directory dashboard covers on-premises domains only.

If you plan to scan SharePoint Online, do it after this sync has completed at least once. The [Scan Microsoft 365](./microsoft-365.md) guide explains how the two fit together. [Identity reports](../dashboards-reports/reports/identity.md) describes each report's columns.
