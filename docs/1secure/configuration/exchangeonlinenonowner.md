---
title: "Settings for Non-Owner Mailbox Access Audit: Using Application"
description: "Settings for Non-Owner Mailbox Access Audit: Using Application"
sidebar_position: 70
---

# Settings for Non-Owner Mailbox Access Audit: Using Application

To prepare for non-owner mailbox access auditing in the Exchange Online organization, you will need
to take several configuration steps, creating a Microsoft Entra ID app with the required permissions
and instructing this app to automatically apply the necessary audit settings.

These settings shall provide configuration for the All Exchange Online Non-Owner Mailbox Access
Events report. See the Filters topic for additional information.

:::note
To start auditing the data for the report, you need to select the **Collect non-owner
mailbox audit data** check box when adding the Exchange Online source. See the
[Add a Source and Connectors for Exchange Online](/docs/1secure/admin/organizations/sourcesandconnectors/exchangeonline.md)topic
for additional information.
:::


:::note
Unified audit log must be enabled for a tenant. See the Microsoft
[Turn auditing on or off](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable?view=o365-worldwide&tabs=microsoft-purview-portal)
article for additional information.
:::


## Grant Permissions to the Application

Follow the steps to grant permissions to the Microsoft Entra ID application.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** In the Microsoft Entra admin center, create and register a Microsoft Entra ID app. See
the

**Step 2 –** After you created an app, select the newly-created, registered application. If you left
the Overview page, it will be listed in the **Identity** > **Applications** > **App
registrations** > **All applications** list.

**Step 3 –** On the registered app blade, click **API permissions** in the Manage section.

**Step 4 –** In the top toolbar, click **Add a permission**.

**Step 5 –** On the Request API permissions blade, click the **APIs my organization uses** tab and
search for _Office 365 Exchange Online_.

**Step 6 –** Click on the _Office 365 Exchange Online_ entry in the list of apps found.

**Step 7 –** Proceed with adding the permissions for this app: select **Application permissions**
and then select **Exchange.ManageAsApp**.

**Step 8 –** Click **Grant Admin Consent for [tenant]**. Then click **Yes** in the confirmation
window.

The application is granted the required API permissions.

## Grant Required Roles

Follow the steps to grant roles to the registered application.

:::note
The steps below are for registering an app through the Microsoft Entra admin center. These
steps may vary slightly if you use a different Microsoft portal. See the relevant Microsoft
documentation for additional information.
:::


**Step 1 –** From the **Identity** > **Roles & admins** blade, click > **Roles & admins**.

**Step 2 –** Search for the Exchange Administrator or the Global Administrator role.

**Step 3 –** On the Assignments page, click **Add assignments**.

**Step 4 –** In the Add assignments layout, select the created application and click **Add**.

The application is granted the required roles.

## Set Up an Environment

Follow the steps to set up your environment using PowerShell.

**Step 1 –** Install the Exchange Online PowerShell V2 module.

Make sure you are using the version specified in the
[related Microsoft article](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps).

**Step 2 –** Download the PowerShell script for certificate creation, as provided in the
[Microsoft instruction](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps#microsoft-instruction).

**Step 3 –** To create a self-signed certificate to be used by the app, run the following command in
Powershell:

```
.\Create-SelfSignedCertificate.ps1 -CommonName "MyCompanyName" -StartDate 2020-04-01 -EndDate 2022-04-01
```

where:

- `CommonName` — specify _"Netwrix 1Secure"_
- `StartDate` — set to current date
- `EndDate` — set to 2 years from now

**Step 4 –** When prompted to specify a password, click **Enter**.

**Step 5 –** Go to **Identity** > **Applications** > **App registrations** > "your app" >
**Certificates & secrets**.

**Step 6 –** Click **Upload certificate** and upload the*.crt* file you have just created.

**Step 7 –** To create Exchange Online connection session, you can provide certificate file path or
thumbprint. If you want to use a file path, run the following command in Powershell:

```
Connect-ExchangeOnline -CertificateFilePath "full_path_to_certificate" -AppID "yourAppId" -Organization "Office365_tenant_name"
```

Application (client ID) can be found in the **Overview** page.

For example:

```
Connect-ExchangeOnline -CertificateFilePath "C:\Path\MyCompanyName1.pfx" -AppId "402b12a2-fb2b-4222-8f54-5596def1" -Organization "myorganization123.onmicrosoft.com"
```

You can use certificate thumbprint instead of file path. For that, import the certificate to the
local certificate store, using the following command in Powershell:

```
Import-PfxCertificate -FilePath "path_to_pfx_certificate" -CertStoreLocation Cert:\CurrentUser\My
```

Then run the command in Powershell like following:

```
Connect-ExchangeOnline -CertificateThumbprint 6AEА5A82911ААА3F76FEE149B7B52А70DDFD88 -AppId a14a 822d-f228-412b-9222-281de23 -Organization myorganization123.onmicrosoft.com
```

**Step 8 –** To set up the audit, run the following command in Powershell:

```
Get-ExoMailbox -PropertySets Minimum -RecipientTypeDetails UserMailbox,SharedMailbox,EquipmentMailbox,LinkedMailbox,RoomMailbox | Set-Mailbox -AuditEnabled $true –AuditAdmin Update,Copy,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create –AuditDelegate Update,Move,MoveToDeletedItems,SoftDelete,HardDelete,FolderBind,SendAs,SendOnBehalf,Create
```

**Step 9 –** Finally, run the following command in Powershell to end the session:

```
Disconnect-ExchangeOnline -Confim:$False
```

:::note
To automate steps 8-9, you can create a script comprising the corresponding commands and
schedule its launch.

:::
