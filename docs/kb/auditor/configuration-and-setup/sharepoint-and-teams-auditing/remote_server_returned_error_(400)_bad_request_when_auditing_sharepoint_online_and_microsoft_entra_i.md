---
description: >-
  This article provides troubleshooting steps for resolving the "Remote Server Returned Error: (400) Bad Request" issue when auditing SharePoint Online and Microsoft Entra ID.
keywords:
  - SharePoint Online
  - Microsoft Entra ID
  - Bad Request
  - Netwrix Auditor
  - Unified Audit
products:
  - auditor
sidebar_label: "Remote Server Returned Error: (400) Bad Request"
tags: []
title: "Remote Server Returned Error: (400) Bad Request when Auditing SharePoint Online and Microsoft Entra ID"
knowledge_article_id: kA00g000000PbchCAC
---

# Remote Server Returned Error: (400) Bad Request when Auditing SharePoint Online and Microsoft Entra ID

## Symptoms

The following errors are prompted in the Health Log for your SharePoint Online or Microsoft Entra ID (formerly Azure AD) monitoring plan:

```
Cannot collect Azure AD audit data due to the following error:
The remote server returned an error: (400) Bad Request.
```

```
Failed to collect state-in-time snapshot data due to the following error.
The remote server returned an error: (400) Bad Request.
```

## Causes

- The tenant name specified for the monitoring plan is incorrect.
- Netwrix Auditor uses the O365 Management API to collect events from Microsoft cloud services. The O365 API accesses `graph.microsoft.com` and `manage.office.com` endpoints. If unified audit is disabled for O365, the following error will be prompted when connecting to the `manage.office.com/api/v1.0/` endpoint:

```
Tenant <TenantGUID> does not exist.
```

## Resolutions

### Step 1. Review the tenant name

To ensure the tenant name is specified correctly, refer to the Microsoft article on how to [Locate important IDs for a user ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names). Once you've obtained the correct Tenant ID, specify it in the affected monitoring plan.

1. In the main **Netwrix Auditor** menu, select **Monitoring Plans**.
2. Select the affected monitoring plan, and click **Edit**.
3. Review the items listed under the monitoring plan by clicking **Edit item** in the right pane and replacing the tenant name with the Tenant ID you've previously obtained.
4. Once the changes are introduced and saved, click **Update** under the **Monitoring Plan** section.

### Step 2. Enable unified audit for O365

Before enabling unified audit, check if the error is present in `%Working Folder%\Logs\SharePoint Online Auditing\%GUID%\SpaOnline.log`. If the error is present, proceed with either of the two solutions provided below. Learn more about enabling unified audit in [Turn Auditing On or Off ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable).

#### Enable unified audit via PowerShell

1. Launch elevated PowerShell v.4 and later on your Netwrix server. Run the following commands:

   ```powershell
   $UserCredential = Get-Credential
   Connect-IPPSSession -Credential $O365Cred
   Connect-ExchangeOnline
   Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $True
   Get-AdminAuditLogConfig | FL UnifiedAuditLogIngestionEnable
   ```

   Once the `Connect-IPPSSession -Credential $O365Cred` line is read, a pop-up screen to log in to your Microsoft 365 account will be prompted. Use the credentials for your data collecting account.

2. Wait for 24 hours and check the status of collections and reports.

In case of any further issues, submit a case with Netwrix Technical Support.

#### Enable unified audit via Microsoft Purview compliance portal UI

1. Log in to the Purview Compliance Portal as an Office 365 admin. Refer to the following link: [Purview Compliance Portal](https://compliance.microsoft.com).
2. In the left pane, select **Solutions** > **Audit**.
3. Select the search option.
4. If search is not enabled, a **Start recording user and admin activity** banner will be prompted. Click it to enable auditing.

### Related articles

- [Office 365 Management APIs ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/office/office-365-management-api/)
- [Office 365 Management Activity API FAQs and troubleshooting ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/office/office-365-management-api/troubleshooting-the-office-365-management-activity-api)
- [Microsoft 365 — Turn Auditing On or Off ⸱ Microsoft 🡥](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off)
- [Microsoft Purview — Audit ⸱ Microsoft 🡥](https://compliance.microsoft.com/solutioncatalog/solution/auditlogsearch?solutionname=Audit)
- [Microsoft 365 — Permissions for Microsoft Entra ID Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/microsoftentraid/permissions)
- [Microsoft 365 — Permissions for SharePoint Online Auditing ⸱ v10.6](https://docs.netwrix.com/docs/auditor/10_8/configuration/microsoft365/sharepointonline/permissions)
- [Locate important IDs for a user ⸱ Microsoft 🡥](https://learn.microsoft.com/en-us/partner-center/find-ids-and-domain-names)