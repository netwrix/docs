---
title: "Netwrix Privilege Secure"
description: "Configure integration between Netwrix Auditor and Netwrix Privilege Secure"
sidebar_position: 70
---

# Netwrix Privilege Secure

Starting with version 10.7, you can implement the integration between Netwrix Auditor and Netwrix
Privilege Secure.

The integration can be configured for the following Auditor data sources:

- Active Directory. For details, see
    [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/activedirectory/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account).

- Group Policy. For details, see
    [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/grouppolicy/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account).

- Logon Activity. For details, see
    [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/logonactivity/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account).

- Microsoft Entra ID. For details, see
    [How to Add Microsoft Entra ID Monitoring Plan Using Netwrix Privilege Secure](/docs/auditor/10.8/admin/monitoringplans/microsoftentraid/overview.md#how-to-add-microsoft-entra-id-monitoring-plan-using-netwrix-privilege-secure).

- Windows File Server. For details, see
    [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/fileservers/windowsfileserver.md#use-netwrix-privilege-secure-as-a-data-collecting-account).

- Windows Server. For details, see
    [Use Netwrix Privilege Secure as a Data Collecting Account](/docs/auditor/10.8/admin/monitoringplans/windows/overview.md#use-netwrix-privilege-secure-as-a-data-collecting-account).

- Exchange. For details, see [Exchange](/docs/auditor/10.8/admin/monitoringplans/exchange/overview.md).


## Software Requirements

| Component                | Version |
| ------------------------ | ------- |
| Netwrix Auditor          | 10.7+   |
| Netwrix Privilege Secure | 4.2+    |

## Enable and Configure Netwrix Privilege Secure Integration

Follow the steps to enable and configure Netwrix Privilege Secure integration.

**Step 1 –** In Netwrix Auditor, navigate to Settings in the upper right corner.

**Step 2 –** Select Netwrix Privilege Secure.

**Step 3 –** Click **Set up Integration**.

**Step 4 –** Specify the Privilege Secure URL.

**NOTE:** If Netwrix Privilege Secure uses an untrusted certificate, a page with the certificate details will be displayed. Review the certificate information and, if the certificate is acceptable, select the **I want Netwrix Auditor to trust this certificate when connecting to this server** checkbox to continue.

**Step 5 –** Specify the application name and Netwrix Auditor client certificate. The following two
options are available:

- New/Generate certificate – Create a new certificate.
- Select an existing certificate – Select an available certificate from the dropdown list.

**NOTE:** Don't use spaces in the application name.

![npsclientcertificate](/images/auditor/10.8/admin/settings/npsclientcertificate.webp)

**Step 6 –** Click **Next**.

**Step 7 –** Export the Netwrix Auditor server certificate for subsequent installation on the host with Netwrix Privilege Secure:

1. Click **View** next to the **Certificate Serial Number** field.
2. In the window that appears, go to the **Details** tab, click **Copy to File...**, and follow the
   Certificate Export Wizard.

**Step 8 –** Install the certificate on the machine where Netwrix Privilege Secure is installed. To
do so, follow the steps below:

1. Right-click the imported certificate and select the **Install Certificate** option.
2. In the Certificate Import Wizard, select **Local Machine** as a Store Location and click
   **Next**.
3. In the next menu, select the **Place all certificates in the following store** option, click
   **Browse**, and select the **Trusted Root Certification Authorities** folder in the pop-up menu.
4. Click **Finish**.

**Step 9 –** Launch Netwrix Privilege Secure to create an application user for Netwrix Auditor with
the Application name and Certificate Serial Number that you received. For details, see the
[Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement)
documentation.

**Step 10 –** In Netwrix Auditor, enter the security key obtained from Netwrix Privilege Secure.

![npsintegrationparameters](/images/auditor/10.8/admin/settings/npsintegrationparameters.webp)

**Step 11 –** Click **Next**.

![npsintegrationfinished](/images/auditor/10.8/admin/settings/npsintegrationfinished.webp)

**Step 12 –** After validation, click **Finish**.

Integration between Netwrix Auditor and Netwrix Privilege Secure is established. Before using
Netwrix Privilege Secure for data collection in Netwrix Auditor, ensure that you created a
dedicated Access Policy and Connection Profile in Netwrix Privilege Secure.

**NOTE:** For additional information, see the
[Netwrix Privilege Secure](https://helpcenter.netwrix.com/category/privilegesecure_accessmanagement)
documentation. Key concepts used in the integration:

- **Resource-based** — Netwrix Privilege Secure creates a temporary account at the start of the session and removes it when the session ends. This policy type requires the target system to be onboarded in Netwrix Privilege Secure as a resource (a server, domain, database, or website). No pre-existing account on the resource is required. Netwrix recommends using the Netwrix Auditor host as the resource.
- **Credential-based** — Uses an account that already exists on the target resource. You must create the account, grant it the required permissions, and then define it in Netwrix Privilege Secure as a Credential before you can add it to the policy.
- **Connection Profile** — A Connection Profile defines the session settings for the policy: maximum session duration, session extension options, proxy configuration, session recording, and approval workflow. Configure Connection Profiles in Netwrix Privilege Secure under **Policy** > **Access Policy** > **Connection Profiles**.

**NOTE:** If data collection requires sessions longer than the default duration, configure the Connection Profile to support up to 72 hours. Set **Extend By** to match **Max Duration**, then use one of the following combinations:

- **Max Duration**: 120 minutes, **Session Extension Limit**: 35
- **Max Duration**: 60 minutes, **Session Extension Limit**: 71

Both configurations result in a maximum total session duration of 72 hours (4,320 minutes).
