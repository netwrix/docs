---
title: Scan Microsoft 365
description: Connect a SharePoint Online tenant with a certificate-based app registration, run an Access scan and a Sensitive data scan, and find the results in the SharePoint reports.
sidebar_position: 4
---

Connect one Microsoft 365 tenant's SharePoint Online sites and OneDrive drives to Access Analyzer and run two scans: an Access scan that collects sites, permissions, and sharing links, and a Sensitive data scan that classifies the documents the Access scan found. At the end you'll have data in the Data security dashboard and the SharePoint reports.

Access Analyzer calls the source type **SharePoint Online**. It signs in to the tenant as an application with a certificate, so setup is a round trip between Access Analyzer and the Microsoft Entra app registration.

## Before you start

**In Entra ID.** You need an administrator who can create an app registration, upload a certificate to it, and grant admin consent for its permissions. The registration needs application permissions that let Access Analyzer read SharePoint sites, their permissions, and their files. Don't create a client secret for it: SharePoint Online sources authenticate only with a certificate, and Access Analyzer generates that certificate for you in step 1.

**The network.** The Access Analyzer server needs outbound HTTPS (TCP 443) to `login.microsoftonline.com`, `graph.microsoft.com`, and your tenant's SharePoint hosts (`<tenant>.sharepoint.com` and `<tenant>-my.sharepoint.com`).

**An Entra ID source for the same tenant.** Effective permissions in SharePoint depend on group membership, and Access Analyzer takes that from the latest completed Entra ID Identity sync of the same tenant. Follow [Scan Entra ID](./entra-id.md) first. Without it, Access Analyzer calculates effective permissions from SharePoint data alone.

**In Access Analyzer.** Sign in with the Admin role.

## 1. Create the service account and its certificate

SharePoint Online sources use a **Client ID/certificate** service account. Unlike an Entra ID source, which records the tenant ID on the source itself, a SharePoint Online source takes the tenant ID from the service account.

1. In the Microsoft Entra admin center, create an app registration for Access Analyzer.
2. On the registration's **Overview** page, copy the **Application (client) ID** and the **Directory (tenant) ID**.
3. In Access Analyzer, go to **Configuration > Service accounts** and click **Add service account**.
4. In **Name**, enter a unique name, for example `sharepoint-access-analyzer-app`.
5. In **Service account type**, select **Client ID/certificate**.
6. In **Client (application) ID**, paste the **Application (client) ID**.
7. In **Tenant ID**, paste the **Directory (tenant) ID**.
8. Under **Certificate**, leave **Generate for me** selected. When you save the account, Access Analyzer creates a self-signed RSA-2048 certificate that is valid for one year.
9. Click **Add account**.
10. In the **Account created and certificate generated** message, note the thumbprint and expiry date.
11. Click **Download certificate (.pem)** and save the file.
12. Click **Done**.

![Add service account drawer with the Client ID/certificate type selected](/images/accessanalyzer/26.1/service-accounts/add-client-id-certificate.webp)

If your organization issues its own certificates, select **Upload my own** instead and provide a `.pem` file, up to 1 MB, that contains both the certificate and its unencrypted private key. Access Analyzer rejects expired certificates and PFX files. The [Client ID and certificate](../service-accounts/client-id-certificate.md) page covers both options and what to do when the certificate is due to expire.

## 2. Upload the certificate to the app registration

1. In the Microsoft Entra admin center, open the app registration.
2. Under **Certificates & secrets**, upload the `.pem` file you downloaded. It holds only the public certificate.
3. Check that the thumbprint Entra ID shows matches the one from step 1.
4. Add the application permissions Access Analyzer needs.
5. Grant admin consent for the tenant.

:::warning

The generated certificate expires one year after you create the account, and scans fail when it does. When you regenerate or replace it in Access Analyzer, upload the new public certificate to the app registration before the next scan runs.

:::

## 3. Add the source

1. Go to **Configuration > Sources** and click **Add source**.
2. In **Source type**, select **SharePoint Online**.
3. Under **Details**, enter a **Name**, such as the tenant name.
4. Under **Connection**, in **SharePoint domain**, enter the tenant's SharePoint host, for example `contoso.sharepoint.com`.
5. Leave **Azure cloud** at **Azure (Commercial)** unless the tenant is in a government or China cloud.
6. Under **Access**, in **Service account**, select the account from step 1.
7. Click **Test connection**. Access Analyzer signs in with the certificate and checks that the registration can reach the tenant. A **Connection successful** message confirms it; a **Connection failed** alert gives the reason. If it fails, confirm that you uploaded the certificate and granted admin consent.
8. Click **Add source**.

![Add source drawer for a SharePoint Online source](/images/accessanalyzer/26.1/sources/add-sharepoint-online.webp)

Field details are on the [Microsoft 365](../sources/microsoft-365.md) source page.

## 4. Create the Access scan

Run the Access scan first. The Sensitive data scan in step 6 classifies documents from the inventory this scan builds.

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Access** and click **Next**.

   ![Create scan Type step with the Access, Sensitive data, and Identity sync cards](/images/accessanalyzer/26.1/scans/create-scan-1-type.webp)

3. On the **Target** step, keep **Specific sources** and select the tenant.
4. On the **Configure** step, leave **Use default configuration** selected for the first run. The defaults are **Workers** 4, **Collect OneDrive** on, and no entries in **Include site collections**, **Exclude site collections**, or **Exclude object URLs**, so the scan covers every site collection and every OneDrive drive.
5. On the **Schedule** step, leave **Manual — run on demand** for the first run. Leave the agent set to **System agent**.
6. On the **Review** step, enter a **Name** such as `Contoso SharePoint - access`.
7. Click **Create & run now**.

![Create scan Review step with the scan named and the summary shown](/images/accessanalyzer/26.1/scans/create-scan-5-review-named.webp)

When you're ready to narrow the scan, edit it and select **Customize this source** on the **Configure** step. **Include site collections** limits the scan to the site collections you list and takes no wildcards; **Exclude site collections** and **Exclude object URLs** accept the `*` wildcard. Keep **Workers** at 4 unless the tenant has SharePoint Online prioritization (adaptive throttling) turned on; even then, 32 is the practical maximum before throttling cancels out the gain. Every Access scan is a full crawl of the sites in scope; there is no differential option. [Scan types](../scans/scan-types.md) describes each setting.

## 5. Watch the execution

Go to **Configuration > Scan executions**. The list refreshes on its own, and the **Objects** column grows as the scan reads the tenant. A first scan of a large tenant takes a while.

![Scan executions list](/images/accessanalyzer/26.1/scans/executions-list.webp)

If the status is **Failed**, open the row's actions menu, click **View logs**, and check the **Detailed logs** tab. A sign-in error points at the certificate or the app registration. [Scan executions](../scans/scan-executions.md) lists every status.

## 6. Create the Sensitive data scan

After the Access scan shows **Completed**, create the second scan. It downloads documents from the Access scan's inventory and classifies them against sensitive data patterns. By default the scan skips documents larger than 10 MB and files with excluded extensions; both limits are in [Application settings](../settings/application.md).

1. Go to **Configuration > Scans** and click **Create scan**.
2. On the **Type** step, select **Sensitive data** and click **Next**.
3. On the **Target** step, select the same tenant.
4. On the **Configure** step, under **Sensitive data classification**, choose which pattern groups the scan uses. Leave **Inherit from global configuration** on to use the groups marked **Scanned by default** at **Configuration > Sensitive data patterns**, or turn it off and pick groups under **Sensitive Data Pattern Groups to Classify**. SharePoint Online has no other Sensitive data settings.

   ![Create scan Configure step for a Sensitive data scan showing the classification settings](/images/accessanalyzer/26.1/scans/create-scan-sensitive-3-configure.webp)

5. On the **Schedule** step, leave **Manual — run on demand**.
6. On the **Review** step, enter a **Name** such as `Contoso SharePoint - sensitive data`.
7. Click **Create & run now**.

:::note

On a fresh install, no pattern group carries **Scanned by default**, and a scan with no groups selected classifies against every pattern group. Select the groups you care about before putting the scan on a schedule.

:::

[Sensitive data patterns](../sensitive-data-patterns/index.md) describes the built-in groups and confidence levels.

## 7. Check the dashboards and reports

Dashboards and reports don't refresh on their own. Open one and click **Refresh** to reload it; results from a scan that has just finished can take some time to appear.

**Dashboards > Data security** shows the tenant in **Total Data Repositories**, **Total Objects Scanned**, **Permissions Analyzed**, **SharePoint Sites by Type**, and **Data Source Inventory**. After the Sensitive data scan, **Sensitive Data Findings** and **Sensitive Data by Source** include SharePoint too.

**Reports > Data**, on the **SharePoint** tab, has four reports.

![Data reports page on the SharePoint tab](/images/accessanalyzer/26.1/dashboards-reports/reports-data-sharepoint.webp)

| Report | Needs | What it shows |
|--------|-------|---------------|
| **Shared Links** | Access scan | Anonymous and company-wide sharing links that expose content externally |
| **High-Risk ACLs** | Access scan | Sites and libraries with overly permissive access control entries |
| **Open Access** | Access scan | Content that all authenticated users can reach without restriction |
| **Sensitive Data Overview** | Sensitive data scan | Sensitive data classifications across SharePoint sites |

**Shared Links** also appears under **Reports > Compliance** for each framework. The other three SharePoint reports live only on the **Data** page. [Data reports](../dashboards-reports/reports/data.md) describes every report and its filters, and the [Data security dashboard](../dashboards-reports/dashboards/data-security.md) page covers each card.
