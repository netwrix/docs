---
title: "Enable Notifications via Exchange Online"
description: "Enable Notifications via Exchange Online"
sidebar_position: 20
---

# Enable Notifications via Exchange Online

To enable Netwrix Auditor to send email notifications via Exchange Online using modern
authentication (OAuth 2.0 client credentials flow), register an application in Microsoft Entra ID
and grant it permission to send mail on behalf of a mailbox.

## Step 1 — Register an Application

**Step 1 –** In the Microsoft Entra admin center, under **Identity**, go to **Applications > App
registrations** and click **New registration**.

**Step 2 –** Enter a name for your application and choose **Accounts in this organizational
directory only**. The redirect URI is optional and not used by Netwrix Auditor.

**Step 3 –** Save the **Application (client) ID** and **Directory (tenant) ID** — you will need
them when configuring Netwrix Auditor as **Application ID** and **Tenant name**, respectively.

**Step 4 –** Under **Certificates & secrets**, create a new client secret and save its value
immediately — it is not shown again after you leave the page.

## Step 2 — Grant API Permissions

**Step 1 –** Under **Manage > API permissions**, click **Add a permission > Microsoft Graph >
Application permissions**.

**Step 2 –** Add the following **Application** permissions:

| Permission     | Why it is required                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Mail.Send`    | Required to send a message directly (`POST /users/{id}/sendMail`). This covers every notification and report attachment up to 3 MB.                                                                                |
| `Mail.ReadWrite` | Required only for attachments larger than 3 MB. In that case Netwrix Auditor creates a draft message, uploads the attachment in chunks via an upload session, sends the draft, and deletes it — all of which operate on the `messages` resource and require `Mail.ReadWrite` in addition to `Mail.Send`. |

**Step 3 –** Click **Grant admin consent for &lt;your organization&gt;**. Application permissions
take effect only after admin consent — without it, sending will fail with an authorization error.

## Step 3 — Configure Notification Settings in Netwrix Auditor

**Step 1 –** In Netwrix Auditor, go to **Settings > Notifications**, select **Exchange Online** in
the **Method** column, and click **Modify**.

**Step 2 –** Fill in the following fields:

| Field                | Description                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tenant name          | Your Microsoft Entra primary domain name.                                                                                                                                                  |
| Application ID       | The Application (client) ID saved in Step 1.                                                                                                                                                                    |
| Application secret   | The client secret value saved in Step 1.                                                                                                                                                                        |
| Tenant environment    | The Microsoft cloud environment your tenant belongs to. Select **Default** unless your organization uses a national/sovereign cloud (see the table below). This determines which login and Graph API endpoints Netwrix Auditor uses to authenticate and send mail. |
| Sender address       | The mailbox that email is sent from. This mailbox must exist in the tenant and the application must be allowed to act on its behalf (see [Restrict Application Access](#restrict-application-access-optional) below). |

### Tenant Environment Options

Select the option matching your organization's Microsoft cloud. Using the wrong option will cause
authentication or sending to fail, because each cloud has its own login and Graph API endpoints
that are not interchangeable with the commercial cloud.

| Tenant environment            | Login endpoint                 | Graph API endpoint               |
| ------------------------------ | ------------------------------- | --------------------------------- |
| Default (commercial/global)    | `login.microsoftonline.com`     | `graph.microsoft.com`             |
| US Government (GCC)            | `login.microsoftonline.com`     | `graph.microsoft.com`             |
| US Government L4 (GCC High)    | `login.microsoftonline.us`      | `graph.microsoft.us`              |
| US Government L5 (DoD)         | `login.microsoftonline.us`      | `dod-graph.microsoft.us`          |
| China                           | `login.chinacloudapi.cn`        | `microsoftgraph.chinacloudapi.cn` |

:::note
US Government (GCC) uses the same endpoints as the commercial cloud — select it only if you need
to keep the setting explicit for your organization's records; functionally it behaves like
**Default**. **GCC High** and **DoD** use dedicated `*.us` endpoints, and **China** uses dedicated
`*.cn` endpoints — the application must be registered in the corresponding Microsoft Entra
environment for these to work.
:::

## Restrict Application Access (Optional)

By default, once granted `Mail.Send`/`Mail.ReadWrite`, the application can send mail as **any**
mailbox in the tenant. To restrict it to one or a few specific mailboxes, apply an Exchange Online
application access policy.

### Create a Mail-Enabled Security Group

**Step 1 –** Sign in to the Exchange admin center with an administrator account.

**Step 2 –** Under **Groups**, open the **Mail-enabled security** tab and click **Add a group**.

**Step 3 –** Select **Mail-enabled security** and click **Next**.

**Step 4 –** Set a name and description, then click **Next**.

**Step 5 –** Choose whether owner approval is required to join the group, then click **Next**.

**Step 6 –** Review the settings and click **Create**.

### Add the Sender Mailbox to the Group

**Step 1 –** In the Exchange admin center, go to **Groups > Mail-enabled security**.

**Step 2 –** Open the group you created and add the mailbox(es) the application is allowed to send
from — this should include the **Sender address** configured in Netwrix Auditor.

### Apply the Access Policy via PowerShell

**Step 1 –** Open PowerShell as an administrator and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
Install-Module -Name ExchangeOnlineManagement -Force
Import-Module ExchangeOnlineManagement
Connect-ExchangeOnline -UserPrincipalName {ADMIN_EMAIL_ADDRESS_HERE}
```

**Step 2 –** Sign in as an administrator in the pop-up window when prompted.

**Step 3 –** Create the access policy, scoping the application to the group created above:

```powershell
New-ApplicationAccessPolicy `
  -AppId {APPLICATION_ID_HERE} `
  -PolicyScopeGroupId {GROUP_EMAIL_ADDRESS_HERE} `
  -AccessRight RestrictAccess `
  -Description "Restrict Netwrix Auditor notification app to the notifications mailbox."
```

Replace `{APPLICATION_ID_HERE}` with the Application (client) ID from Step 1 and
`{GROUP_EMAIL_ADDRESS_HERE}` with the group's email address.
