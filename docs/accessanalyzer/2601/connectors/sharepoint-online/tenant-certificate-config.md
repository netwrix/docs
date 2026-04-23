---
title: "Certificate Configuration"
description: "Upload a certificate to your Microsoft Entra ID app registration for SharePoint Online authentication"
sidebar_position: 20
---

# Certificate Configuration

Access Analyzer authenticates with SharePoint Online using certificate-based authentication. Access Analyzer generates the certificate during source group setup — you download the public certificate file and upload it to your registered Microsoft Entra ID application.

## Upload a certificate

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/).

2. Navigate to **Identity** > **Applications** > **App registrations**.

3. Click the **All applications** tab and select your registered application.

4. Click **Certificates & secrets** under the Manage section.

5. Click the **Certificates** tab.

6. Click **Upload certificate**.

7. Click the file icon next to the **Select a File** field.

8. Browse to and select the certificate file you downloaded from Access Analyzer (`.cer` or `.pem`), then click **Open**.

9. Enter a description for the certificate.

10. Click **Add**. The certificate is uploaded to the registered application.

After uploading, return to the Access Analyzer source group wizard and click **Test Connection** to verify the authentication.
