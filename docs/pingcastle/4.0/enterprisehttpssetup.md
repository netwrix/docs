---
sidebar_label: HTTPS and IIS configuration
---
# HTTPS and IIS Configuration for PingCastle Enterprise

## Configuring HTTPS

To secure your PingCastle Enterprise installation with HTTPS, follow these standard IIS configuration steps:

1. **Configure DNS**: Add a DNS entry for the PingCastle Enterprise URL you want to use (e.g., pingcastle.yourdomain.com) pointing to your server's IP address

2. **Obtain a Certificate**: Request an SSL/TLS certificate from your Certificate Authority (CA)

   :::tip
   Ensure the certificate Subject and Subject Alternative Name (SAN) DNS entries match the PingCastle Enterprise URL you configured in DNS (e.g., pingcastle.yourdomain.com). Without this, browsers will show certificate warnings.
   :::

3. **Import the Certificate**: Add the certificate to the machine's Personal certificate store:
   - Open the Certificates snap-in (certlm.msc for Local Machine)
   - Navigate to Personal > Certificates
   - Import your certificate with the private key

4. **Configure IIS Binding**:
   - Open Internet Information Services (IIS) Manager
   - Locate the **PingCastleEnterprise** website
   - Right-click and select "Edit Bindings..."
   - Click "Add..." to create a new binding
   - Select "https" as the type
   - Choose port 443 (or your preferred port)
   - Select your SSL certificate from the dropdown
   - Click OK to save

5. **Update Application Configuration**: Set the **Webhost** setting to your HTTPS URL (e.g., `https://pingcastle.yourdomain.com`). See [Configuring the web host](enterpriseemailsetup.md#configuring-the-web-host).

:::important
The **Webhost** setting is used for links sent to users via email and other notifications. Ensure this matches your HTTPS URL to avoid mixed content warnings and ensure users receive secure links.
:::

## IIS Maximum Upload Configuration

You may need to increase the default IIS upload limit to accommodate large report files. While there are multiple methods to configure this setting (web.config, IIS Manager), the simplest approach is using PowerShell:

```powershell
Import-Module WebAdministration

$siteName   = "PingCastleEnterprise"
$newLimit   = 1GB   # Byte value - PowerShell converts this automatically

Set-WebConfigurationProperty `
  -PSPath "IIS:\Sites\$siteName" `
  -Filter "system.webServer/security/requestFiltering/requestLimits" `
  -Name "maxAllowedContentLength" `
  -Value $newLimit
```

:::info
To find alternative configuration methods, search for "maxAllowedContentLength" in IIS documentation.
:::

## Manual Report Import Size Limit

If you need to import reports larger than 200MB manually, you'll need to adjust the client-side file size limit:

1. Open the JavaScript configuration file at:
   ```
   C:\Program Files\Netwrix\PingCastleEnterprise\wwwroot\js\Reports\import.js
   ```

2. Locate the `maxFilesize` parameter and change it from `200` to `1024` (or your desired limit in MB):
   ```javascript
   maxFilesize: 1024  // Changed from 200 to 1024 MB
   ```

:::warning
This setting only affects the client-side validation. Ensure your IIS upload limit (configured earlier) is set appropriately to handle files of this size.
:::

:::note
This setting is only for the UI-Based imports.
:::
