# Exchange Modern Authentication for User Credentials

The information in this topic applies to **Select Account Type** > **Exchange Modern
Authentication** account type in the User Credentials window.

![User Credentials - Exchange Modern Authentication ](/img/product_docs/accessanalyzer/admin/settings/connection/profile/exchangemodernauthentication.webp)

The values for the required credentials for the Exchange Modern Authentication account are:

- Password Storage – Application (Uses the configured Profile Security setting as selected at the
  **Settings** > **Application** node. See the [Application](/docs/accessanalyzer/12.0/admin/settings/application/overview.md) topic
  for additional information.)
- Organization – The primary domain name of the Microsoft Entra tenant being leveraged to make the
  connection. See the
  [Identify the Tenant's Name](/docs/accessanalyzer/12.0/config/exchangeonline/access.md#identify-the-tenants-name)
  topic for additional information.
- Email Address – The email address for the mailbox to be leveraged in Exchange Online environment
  scans. The mailbox must belong to the primary domain used in the Organization field.
- AppID – Application (client) ID of the Access Analyzer application registered with Microsoft Entra
  ID. See the
  [Identify the Client ID](/docs/accessanalyzer/12.0/config/exchangeonline/access.md#identify-the-client-id)
  topic for additional information.
- Certificate Thumbprint – The thumbprint value of the certificate uploaded to the Microsoft Entra
  ID application. See the
  [Upload Self-Signed Certificate](/docs/accessanalyzer/12.0/config/exchangeonline/access.md#upload-self-signed-certificate)
  topic for additional information.
