---
title: "Certificate Configuration"
description: "Configure certificate authentication for the SharePoint Online app registration"
sidebar_position: 20
---

# Certificate Configuration

Access Analyzer uses two authentication methods depending on the SharePoint Online scan type:

- **Client Secret** — used for access and permissions scanning
- **Certificate** — required for state-in-time (permissions snapshot) scanning

Both are configured within your registered Microsoft Entra ID application.

## Generate Client Secret Value

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** Click the **All applications** tab and select your registered application.

**Step 4 –** Click **Certificates & secrets** under the Manage section.

**Step 5 –** On the **Client secrets** tab, click **New client secret**.

**Step 6 –** Specify the following:

- **Description** – Enter a description for the secret
- **Expires** – Select an expiration period

**Step 7 –** Click **Add**. The client secret value is displayed in the **Value** column.

:::warning
Copy the client secret value immediately. Once you navigate away from this page, the value cannot be retrieved and you will need to create a new secret.
:::

## Upload a Certificate

**Step 1 –** Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

**Step 2 –** Navigate to **Identity** > **Applications** > **App registrations**.

**Step 3 –** Click the **All applications** tab and select your registered application.

**Step 4 –** Click **Certificates & secrets** under the Manage section.

**Step 5 –** Click the **Certificates** tab.

**Step 6 –** Click **Upload certificate**.

**Step 7 –** Click the file icon next to the **Select a File** field.

**Step 8 –** Browse to and select your certificate file (.cer or .pem), then click **Open**.

**Step 9 –** Enter a description for the certificate.

**Step 10 –** Click **Add**. The certificate is uploaded to the registered application.
