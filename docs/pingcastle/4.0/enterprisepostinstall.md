---
sidebar_label: Post-installation configuration
---
# Post-Installation Configuration for PingCastle Enterprise

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Common Steps

### Configuring HTTPS

To secure your PingCastle Enterprise installation with HTTPS, follow these standard IIS configuration steps:

1. **Configure DNS**: Add a DNS entry for the PingCastle Enterprise URL you want to use (e.g., pingcastle.yourdomain.com) pointing to your server's IP address

2. **Obtain a Certificate**: Request an SSL/TLS certificate from your Certificate Authority (CA)

:::tip
Ensure the certificate Subject and Subject Alternative Name (SAN) DNS entries match the PingCastle Enterprise URL you configured in DNS (e.g., pingcastle.yourdomain.com). Without this, browsers will show certificate warnings.
:::

3. **Import the Certificate**: Add the certificate to the machines Personal certificate store:
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

5. **Update Application Configuration**: On **Configuration** > **Settings** > **Notifications**, set **Webhost** to your HTTPS URL (e.g., `https://pingcastle.yourdomain.com`).

:::important
The **Webhost** setting is used for links sent to users via email and other notifications. Ensure this matches your HTTPS URL to avoid mixed content warnings and ensure users receive secure links.
:::

### IIS Maximum Upload Configuration

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

### Manual Report Import Size Limit

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

### Automatic Forest Exploration Setup

For large environments, you can simplify scan configuration by using automatic forest exploration. This allows PingCastle to discover and scan all domains within a forest automatically using a wildcard in the `--server` parameter.

#### Manual Execution

To manually scan all domains in a forest:

```powershell
PingCastle.exe --healthcheck --server *.domain.fqdn --Level Full
```

Replace `domain.fqdn` with your actual forest root domain name.

#### Automated Execution for Agent Setup

For scheduled scans with automatic upload to PingCastle Enterprise:

```powershell
PingCastle.exe --healthcheck --server *.domain.fqdn --Level Full --api-endpoint https://pingcastle.yourdomain.fqdn --api-key <Key from Configuration -> Agents with upload permission> --out "SchedulerLogs\<fqdn>.txt"
```

**Parameters:**
- `*.domain.fqdn` - Wildcard pattern to scan all domains in the forest
- `--api-endpoint` - URL of your PingCastle Enterprise server
- `--api-key` - API key created in Configuration → Agents with upload permission
- `--out` - Log file path for the scan output

:::tip
The wildcard pattern `*.domain.fqdn` will automatically discover and scan all child domains within the specified forest, eliminating the need to configure individual domain scans.
:::

### Scheduling your first scan

PingCastle Enterprise runs scheduled scans through **Configuration** > **Scheduler**. See [Scheduling](enterprisescheduling.md) for the full field reference.

:::note
The scheduled scan wizard labels the credential profile field "execution profile." Credential profile and execution profile refer to the same thing.
:::

#### Scheduling an Active Directory scan

1. If the domain isn't already in PingCastle Enterprise, go to **Infrastructure** > **Domains** and create it with just the name. The SID auto-populates when you import a report.
2. Go to **Configuration** > **Scheduler**.
3. Click **Credential Profiles**, then **Create profile**.
4. Enter a profile name, select **Active Directory** as the scan type, select the Agent (use the default Agent), and select the domain. Toggle the run-as account switch if you're using a custom account, and add a description if needed.
5. Click **Create profile** to save the profile.
6. Click **Scheduled scans**, then **Create schedule**.
7. Enter a unique job name, select the execution profile you just created, set the scan frequency and time, toggle **Privileged Scan** depending on whether you want to run a privileged scan, set any advanced options you need, then click **Create schedule**.

#### Scheduling an Entra scan

Entra scans follow a different process for tenant setup:

1. Go to **Configuration** > **Entra Scan Config** and use the **Add tenant** wizard to add your tenant. See [Entra scanning](enterpriseentrascan.md) for tenant setup and permission requirements.
2. Follow the same steps as [Scheduling an Active Directory scan](#scheduling-an-active-directory-scan), except in the credential profile select **Entra ID** as the scan type, then select the tenant you added.

## Initial startup

At the first run of the application, the application creates the database. If there
is an error with the database (missing right, invalid connection string)
or hosting, the application won't display the next screen.

For security reasons, there is no default account or password.

When there is no user configured in the application, a special screen appears
to create the first user. This user receives the \"Admin\" role.

![First user creation screen](/images/pingcastle/enterpriseinstall/image79.webp)

## Initial configuration

For more details see the user documentation.

### Entities

Entities are created at Configuration -> Entities and implement Role-Based Access Control (RBAC) by assigning permissions to users for groups of domains. This controls access for email notifications and enables targeted dashboards.

![](/images/pingcastle/enterpriseinstall/image80.webp)

PingCastle configures a default entity named "Default" where auto-created domains are assigned. You can create additional entities and build a hierarchy by setting parent relationships.

For bulk configuration, use Configuration -> Interoperability to edit the entity hierarchy using an Excel file (compatible with the PingCastleReporting tool format).

### Encryption

The default PingCastle decryption key is marked as insecure. The default encryption key is no longer provided in newer versions of PingCastle as this was a security risk. You must generate your own key in the Enterprise UI at Configuration -> Decryption and use that in your PingCastle.exe's appsettings.console.json file.

### Bulk Import of existing reports

You can import existing reports using the bulk import functionality in Configuration -> Interoperability.

You can also use `PingCastle.exe --upload-all-reports --api-endpoint https://your.pingcastle.server --api-key XXXXXX` to upload reports via the command line.

### Report Archiving Configuration

PingCastle Enterprise can automatically archive old reports to reduce database size while maintaining compliance history. Archiving converts "Full" detail level reports to "Normal" detail level, removing personal data while preserving summary statistics and scores.

#### Configuration

1. Navigate to **Configuration** > **Settings** > **Data retention** in the PingCastle Enterprise admin area.
2. Set **Archive reports after (days)** (minimum 90 days).
3. Click **Save**.

To disable archiving, clear the **Archive reports after (days)** value.

#### How Archiving Works

<Tabs>
<TabItem value="automatic" label="Automatic Execution" default>

The archiving process runs automatically every day at 8:00 AM:

- All "Full" detail level reports older than the configured delay are processed
- Personal data is removed while maintaining domain scores and summary statistics
- The process runs in the background without user intervention

</TabItem>
<TabItem value="manual" label="Manual Execution">

You can manually trigger archiving on-demand:

1. Navigate to Database Management in the admin area
2. Access the Archive Reports action (URL: `/Database/ArchiveReports`)
3. Specify the number of days (minimum 90)
4. Confirm the action on the confirmation page
5. Monitor the progress bar during execution

**Note**: Manual archiving requires admin role or roles with "ManageDecryptionKey" or "ManageInteroperability" permissions.

</TabItem>
</Tabs>

#### What Gets Archived

- Reports with `ReportDetailLevel = "Full"` older than the configured delay
- Personal data is stripped from the reports
- Reports are converted to "Normal" detail level
- Domain scores, statistics, and summary data are preserved
- You can't reverse this one-way transformation


## PingCastle agent deployment

For security reasons, the web application doesn't execute PingCastle scans. Instead, remote systems must push their scan results to PingCastle Enterprise using the agent configuration.

**Program version**

Use the latest official version of PingCastle.exe (included in the PingCastleEnterprise directory). The application supports reports from different PingCastle versions - newer features will only display after upgrading PingCastle Enterprise, but no data is lost.

**Scheduling**

Configure Windows Task Scheduler (or your organization's batch scheduler) to run scans weekly using a normal user account (non-privileged) from a batch server (not a Domain Controller).

**Command line**

Create an API key with upload permissions (Advanced -> Agent as admin) and test the command before scheduling:

```powershell
.\PingCastle --healthcheck --level Full --api-endpoint https://yourservername --api-key yourapikey
```

Optionally specify a different domain:

```powershell
.\PingCastle --healthcheck --server <other domain> --level Full --api-endpoint https://yourservername --api-key yourapikey
```

**Common issues**

If TLS 1.2 is enabled on the server, ensure the TLS 1.2 client package is installed on the system running the audit.

## Synchronization feature

PingCastle Enterprise supports a synchronization mode to implement a
security zone model (commonly used within Defense sectors). Only domains are
synchronized (Entra ID isn't supported).

**PingCastle Enterprise high trust**

PingCastle Enterprise high trust

**PingCastle Enterprise low trust**

PingCastle audits

This enables report consolidation while keeping report details limited to appropriate security zones.

The data synchronized between high trust and low trust instances includes:

- The status of the domain (active, removed, etc.)

- The content of the report, based on a level filter (Full = no filter;
  Normal = recomputed for Full report, as-is for normal report; Light =
  stripped from Normal and Full, etc.)

The following data isn't synchronized: exceptions, action plans,
maturity changes, etc.

### Configuration

You need to configure an API key with synchronization rights on the server side.

You must assign the Agent to an entity. You can't assign it to a domain, as the entity will be used as the root to
assign the newly forwarded domains.

![API key configuration showing Agent assignment to entity with synchronization rights](/images/pingcastle/enterpriseinstall/image81.webp)

On the client side, edit the appsettings file to specify
the credentials and other required information.

Add a "Sync" section at the root of the file (remember
to add a comma before or after this section as required for valid JSON formatting).

Specify the Uri as the FQDN of the recipient server and the API key.

```json
{
  "Sync": {
    "Uri": "https://syncrecipient.pingcastle.com/",
    "ApiKey": "aaaaaaaa",
    "ExportLevel": "Normal"
  }
}
```

The export level is the one defined in the classic PingCastle Agent configuration.
If information needs to be removed, the data will be recomputed (this can
result in information loss if the instance is processing a more
recent report). If the level doesn't need to be restricted, the
information will be forwarded as-is. If the report version is
more recent, no information will be lost.

Available export levels:
- `Full` - No filter applied, all data included
- `Normal` - Standard level with moderate filtering
- `Light` - Stripped down data from Normal and Full
- `Paranoid` - Most restrictive level

### Synchronization patterns

PingCastle Enterprise will attempt to retrieve the
license from the higher instance at startup. If it can't be retrieved, it will use the locally
configured license.

PingCastle Enterprise will sync a domain when the domain is edited or when
the sync button is pressed.

![Domain sync button interface](/images/pingcastle/enterpriseinstall/image84.webp)

The Sync button is shown if the sync link is configured AND if the user
has permission to edit the domain. When a sync is performed, the domain
properties (status, etc.) will be synchronized along with past reports.

To avoid loading older reports with each change, information about
the latest audit is shared with the lower instance. The lower instance can
choose to upload only missing reports.

If a domain is created by a user locally, it will be synchronized.
However, if it is removed locally (which is allowed when no
reports are present), the application will attempt to remove it from the
higher instance. Removal can't be completed if reports
already exist, so the remove request may be denied silently.

You can also force synchronization of all domains from the
Interoperability page.

![Interoperability page with option to force synchronization of all domains](/images/pingcastle/enterpriseinstall/image85.webp)

### Synchronization patterns at import time

To ensure license enforcement, before importing a new report in
the lower instance, the instance will contact the higher instance to
verify that the report doesn't create domains beyond the license
limit. If there is a temporary network issue, the instance skips this check.
If the check denies the import, the lower instance doesn't import the report and logs the error.

After this check completes, the lower instance performs the import and then
synchronizes the report to the higher instance. If there is any network issue
during this step, the instance ignores the error (but logs it if
logging is enabled).

### Connection tests

To verify the connection is properly configured, you can sync a domain using
the button described earlier.

If there is an error, PingCastle Enterprise displays it as an exception.

![](/images/pingcastle/enterpriseinstall/image86.webp)

Note: The error details may be contained in an inner exception
shown in the following screenshot. In this example, this is a DNS issue where the host can't be
found.

![](/images/pingcastle/enterpriseinstall/image87.webp)
