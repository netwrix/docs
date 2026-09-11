---
sidebar_label: Silent installation
---
# Silent Installation of PingCastle Enterprise

`PingCastle-Enterprise-Installer-<version>.exe` supports a fully scripted, unattended installation. Use this for automated deployments, such as installing PingCastle Enterprise from a configuration management tool or a CI/CD pipeline.

## How It Works

`PingCastle-Enterprise-Installer-<version>.exe` is a thin wrapper around an embedded Windows Installer (MSI) package. When you run it, the wrapper:

1. Extracts the embedded MSI to `%ProgramData%\PingCastle\Installer\<version>\`.
2. Runs `msiexec.exe /i` against the extracted MSI, forwarding every command-line argument you passed to the wrapper unchanged.
3. Requires elevation. Running the wrapper triggers a UAC prompt, and nothing runs until you accept it.

Because the wrapper forwards its arguments verbatim, `PingCastle-Enterprise-Installer-<version>.exe` passes every install option and every logging switch through to `msiexec` as an MSI switch or property. The wrapper also preserves quoting verbatim, so quote any property value that contains spaces exactly as you would for `msiexec` directly.

:::warning
The license key and any other secrets you pass as MSI properties appear in plain text in Task Manager and other process command-line auditing tools while the install runs. They also appear in a verbose install log unless PingCastle Enterprise scrubs them. See [Collecting Support Logs](enterprisesupportlogs.md#installer-logs) for how installer logging works.
:::

## Installation Options

Run `PingCastle-Enterprise-Installer-<version>.exe` with the same arguments you'd give `msiexec /i`:

```
PingCastle-Enterprise-Installer-<version>.exe /quiet /norestart PROPERTY1=value PROPERTY2="value with spaces"
```

The following tables list the switches and MSI properties that control a silent installation, grouped by what they configure.

### Core Install Switches

| Switch/property | Purpose |
|---|---|
| `/quiet` | Runs a fully silent install with no UI. |
| `/passive` | Runs an unattended install that still shows progress UI. |
| `/norestart` | Suppresses any restart the install would otherwise trigger. |
| `SERIALNUMBERPROPERTY="<key>"` | Sets the license key. |
| `CUSTOM_INSTALL_PATH="<dir>"` | Sets a custom install directory. |
| `SKIP_PREREQUISITE_CHECK` | Bypasses the prerequisite validation the wizard normally runs. |

### Database Connection Properties

See [Remote Database Configuration](enterpriseinstall.md#remote-database-configuration) for background on connecting to an existing database.

| Property | Purpose | Notes |
|---|---|---|
| `CONNECTIONSTRINGWAY` | `AUTO` \| `MANUAL` | Default `AUTO`. `AUTO` builds a connection string from the other properties in this table; `MANUAL` uses `CONNECTIONSTRINGPROPERTY` as-is. |
| `DB_SERVER_TYPE` | `LOCAL` \| `REMOTE` | Default `LOCAL`. `LOCAL` uses SQL Express on the local server (`.\SQLExpress`). `REMOTE` uses `DATABASE_SERVER` as the SQL host, along with `SQL_AUTH_TYPE` and any SQL authentication credentials it requires. |
| `DATABASE_SERVER` | SQL Server instance (`AUTO` mode) | Used to build the connection string. |
| `SQL_AUTH_TYPE` | `WINDOWS` \| `SQL` | Default `WINDOWS`. `SQL` requires `SQL_USERNAME`/`SQL_PASSWORD`. |
| `SQL_USERNAME` / `SQL_PASSWORD` | SQL authentication credentials | Only used when `SQL_AUTH_TYPE=SQL`. |
| `USE_ENCRYPTION` | Appended to the built connection string | Default `Encrypt=True;`. Omit this property to set it to `False`. |
| `TRUST_SERVER_CERTIFICATE` | Appended to the built connection string | Default `TrustServerCertificate=True;`. Omit this property to set it to `False`. |
| `CONNECTIONSTRINGPROPERTY` | Full manual connection string | Required when `CONNECTIONSTRINGWAY=MANUAL`. |

### Windows Authentication Properties

These properties apply when `AUTH_WINDOWS=1`. See [Authentication](enterpriseauthsetup.md#authentication) for background.

| Property | Purpose | Notes |
|---|---|---|
| `WINDOWSGROUP` | SID of the Windows group granted general access | Default `S-1-1-0` (`Everyone`). |
| `WINDOWSGROUPADMIN` | SID of the Windows group granted admin access | No default. Must be set explicitly to grant admin rights to a specific group. |

### IIS Application Pool Identity Properties

| Property | Purpose | Notes |
|---|---|---|
| `APPPOOL_IDENTITY_TYPE` | `APPPOOL_IDENTITY` \| `LOCAL_SYSTEM` \| `CUSTOM` | Default `APPPOOL_IDENTITY` (recommended). `APPPOOL_IDENTITY` runs the IIS application pool under the built-in virtual app pool identity (`IIS AppPool\<poolname>`); no credentials needed. `LOCAL_SYSTEM` runs it under the Local System account. `CUSTOM` runs it under an explicit domain or service account and requires `APPPOOL_USERNAME`/`APPPOOL_PASSWORD`. |
| `APPPOOL_USERNAME` | Custom account to run the app pool as | Required when `APPPOOL_IDENTITY_TYPE=CUSTOM`. |
| `APPPOOL_PASSWORD` | Password for `APPPOOL_USERNAME` | Required when `APPPOOL_IDENTITY_TYPE=CUSTOM`, unless `APPPOOL_USERNAME` ends in `$` (a group Managed Service Account (gMSA)), which doesn't need a password. |

### Scheduler Service Account Properties

| Property | Purpose | Notes |
|---|---|---|
| `SCHEDULER_ACCOUNT_CHOICE` | `SAME_AS_APPPOOL` \| `CUSTOM` \| ... | Selects which account the Scheduler Windows service logs on as. |
| `SCHEDULER_SERVICE_ACCOUNT` | Resolved service account | Default `LocalSystem`. Set to the app pool's account automatically when `SCHEDULER_ACCOUNT_CHOICE=SAME_AS_APPPOOL`. |
| `SCHEDULER_USERNAME` / `SCHEDULER_PASSWORD` | Custom account credentials | Used when `SCHEDULER_ACCOUNT_CHOICE=CUSTOM`. |
| `SCHEDULER_ADD_TO_LOCAL_ADMINS` | Adds the scheduler account to local Administrators | Optional. |
| `SCHEDULER_API_KEY` | API key the Scheduler service uses to call the Enterprise API | Auto-generated if not supplied. |

### SAML Properties

These properties apply when `AUTH_SAML=1`. See [Authentication](enterpriseauthsetup.md#authentication) for background.

| Property | Purpose | Notes |
|---|---|---|
| `SAML_ALLOWED_ISSUER` | Expected issuer/entity ID from the identity provider | Required. |
| `SAML_SSO_URL` | Identity provider single sign-on URL | Required. Must be a valid `http`/`https` URL. |
| `SAML_ISSUER` | This service provider's issuer/entity ID | — |
| `SAML_DISPLAY_NAME` | Label shown on the sign-in page | — |
| `SAML_METADATA_URL` | Identity provider metadata URL | Alternative to manual issuer/single sign-on URL entry. |
| `SAML_CERTIFICATE_PATH` | Path to the identity provider's signing certificate | Optional. If supplied, the installer verifies the file exists. |

### OpenID Connect Properties

Set `AUTH_OIDC=1` (alongside any other `AUTH_*` providers you want enabled) plus the following properties. See [OpenID Connect](enterpriseauthsetup.md#openid-connect) for background.

| Property | Purpose | Notes |
|---|---|---|
| `OIDC_AUTHORITY` | OpenID Connect authority/issuer URL | Required. Must be a valid absolute `http`/`https` URL. |
| `OIDC_CLIENT_ID` | Application (client) ID registered with the identity provider | Required. |
| `OIDC_CLIENT_SECRET` | Application client secret | Not echoed in the UI, and masked in the verbose log. |
| `OIDC_DISPLAY_NAME` | Label shown for this provider on the sign-in page | Optional. Defaults to `Entra ID` if omitted. |
| `OIDC_GROUP_ID` | Group claim/ID used for role mapping | Optional. |

### CloudAPI Properties

The CloudAPI component has its own database and secrets, separate from the main Enterprise application. You don't typically set these on a fresh install.

| Property | Purpose | Notes |
|---|---|---|
| `CLOUDAPI_CONFIGURED` | Marks whether CloudAPI was previously configured | Used on upgrade to decide whether to reconfigure secrets or preserve them. |
| `CLOUDAPI_CONNECTIONSTRINGPROPERTY` | CloudAPI's own database connection string | Built the same way as the main `CONNECTIONSTRINGPROPERTY` if not supplied directly. |
| `CLOUDAPI_MICROSERVICE_API_KEY` | API key used to call the CloudAPI microservice | Auto-generated if empty. |
| `CLOUDAPI_HMAC_KEY` | HMAC signing key for CloudAPI requests | Auto-generated if empty. |
| `CLOUDAPI_ENCRYPTION_KEY` | Encryption key for CloudAPI stored data | Auto-generated if empty. |

### Email and Notification Properties

Set `EMAIL_PROVIDER` to `None`, `SMTP`, or `Graph` (default `SMTP`). See [Email](enterpriseemailsetup.md#email) for background.

Common to both `SMTP` and `Graph`:

| Property | Purpose | Notes |
|---|---|---|
| `EMAIL_PROVIDER` | `None` \| `SMTP` \| `Graph` | Default `SMTP`. |
| `EMAILFROM` | From address used to send email | Required for `SMTP`/`Graph`. Validated as a well-formed email address. |
| `FULLHTTPFQDN` | URL of the PingCastle instance shown in email bodies | Validated as a well-formed URI. |

**`EMAIL_PROVIDER=SMTP`:**

| Property | Purpose | Notes |
|---|---|---|
| `SMTPSERVER` | SMTP host | Required. |
| `SMTPPORT` | SMTP port | Default `25`. Must parse as an integer. |
| `SMTPLOGIN` | SMTP authentication username | Optional. |
| `SMTPPASSWORD` | SMTP authentication password | — |

**`EMAIL_PROVIDER=Graph`** (send mail through Microsoft Graph):

| Property | Purpose | Notes |
|---|---|---|
| `EMAIL_TENANT_ID` | Entra ID tenant ID | Required. |
| `EMAIL_CLIENT_ID` | App registration client ID | Required. |
| `GRAPH_AUTH_METHOD` | `ClientSecret` \| `Certificate` | Default `ClientSecret`. |
| `GRAPH_CLIENT_SECRET` | Client secret | Required when `GRAPH_AUTH_METHOD=ClientSecret`. |
| `GRAPH_CERT_MODE` | `File` \| `Store` | Only used when `GRAPH_AUTH_METHOD=Certificate`. Default `File`. |
| `GRAPH_CERT_PATH` | Path to certificate file | Required when `GRAPH_CERT_MODE=File`. |
| `GRAPH_CERT_PASSWORD` | Certificate file password | — |
| `GRAPH_CERT_STORE_LOCATION` | `CurrentUser` \| ... | Only used when `GRAPH_CERT_MODE=Store`. Default `CurrentUser`. |
| `GRAPH_CERT_STORE_NAME` | Certificate store name | Required when `GRAPH_CERT_MODE=Store`. Default `Personal`. |
| `GRAPH_CERT_THUMBPRINT` | Certificate thumbprint | Required when `GRAPH_CERT_MODE=Store`. |

### SSL and HTTPS Properties

See [Configuring HTTPS](enterprisehttpssetup.md#configuring-https) for background.

| Property | Purpose | Notes |
|---|---|---|
| `SSL_ENABLED` | `1` to bind HTTPS, `0`/unset to stay HTTP-only | Default `1`. |
| `SSL_PORT` | HTTPS port for the IIS binding | Default `443`. Must be an integer from `1`–`65535`. |
| `SSL_CERT_TYPE` | `SELFSIGNED` \| `EXISTING` \| `STORE` | Default `SELFSIGNED` (installer generates a self-signed certificate). |
| `SSL_CERT_PATH` | Path to a `.pfx`/certificate file | Required when `SSL_CERT_TYPE=EXISTING`. |
| `SSL_CERT_PASSWORD` | Password for the certificate file | Used with `EXISTING`. |
| `SSL_CERT_THUMBPRINT` | Thumbprint of a certificate already in the Windows certificate store | Required when `SSL_CERT_TYPE=STORE`. |
| `SSL_FORCE_REBIND` | Forces the IIS binding to be reconfigured even if unchanged | Optional. Used mainly for upgrade scenarios. |

## Example Installations

Each example is a PowerShell snippet. Edit the variables at the top, then paste the whole block into an elevated PowerShell session.

### Basic Installation

The minimum needed to install: a license key. The installer keeps every other default: it creates the database locally, generates a self-signed certificate, and enables no authentication provider besides local login.

```powershell
$installer = "C:\Temp\PingCastle-Enterprise-Installer-4.0.exe"
$licenseKey = "<your-license-key>"

& $installer /quiet /norestart SERIALNUMBERPROPERTY="$licenseKey"
```

### Secure Installation

Adds HTTPS using a certificate that's already in the Windows certificate store, which you identify by its thumbprint.

```powershell
$installer = "C:\Temp\PingCastle-Enterprise-Installer-4.0.exe"
$licenseKey = "<your-license-key>"
$sslThumbprint = "<40-character-certificate-thumbprint>"
$fqdn = "https://pingcastle.example.com"

& $installer /quiet /norestart `
  SERIALNUMBERPROPERTY="$licenseKey" `
  SSL_ENABLED=1 `
  SSL_CERT_TYPE=STORE `
  SSL_CERT_THUMBPRINT="$sslThumbprint" `
  FULLHTTPFQDN="$fqdn"
```

### Connect to an Existing Database

Uses a manual connection string to connect to a database you've already provisioned, instead of letting the installer create one.

```powershell
$installer = "C:\Temp\PingCastle-Enterprise-Installer-4.0.exe"
$licenseKey = "<your-license-key>"
$connectionString = "Server=sql01;Database=PingCastleEnterprise;User Id=svc_pc;Password=<pwd>;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=True;"

& $installer /quiet /norestart `
  SERIALNUMBERPROPERTY="$licenseKey" `
  CONNECTIONSTRINGWAY=MANUAL `
  CONNECTIONSTRINGPROPERTY="$connectionString"
```

### Full Configuration

Combines a license, HTTPS, Windows Authentication, and SMTP email settings in a single install.

```powershell
$installer = "C:\Temp\PingCastle-Enterprise-Installer-4.0.exe"
$licenseKey = "<your-license-key>"
$sslThumbprint = "<40-character-certificate-thumbprint>"
$fqdn = "https://pingcastle.example.com"
$windowsAdminGroupSid = "<admin-group-sid>"
$smtpServer = "smtp.example.com"
$smtpFrom = "pingcastle@example.com"

& $installer /quiet /norestart `
  SERIALNUMBERPROPERTY="$licenseKey" `
  SSL_ENABLED=1 `
  SSL_CERT_TYPE=STORE `
  SSL_CERT_THUMBPRINT="$sslThumbprint" `
  FULLHTTPFQDN="$fqdn" `
  AUTH_WINDOWS=1 `
  WINDOWSGROUPADMIN="$windowsAdminGroupSid" `
  EMAIL_PROVIDER=SMTP `
  EMAILFROM="$smtpFrom" `
  SMTPSERVER="$smtpServer" `
  SMTPPORT=587
```

:::tip
See [Collecting Support Logs](enterprisesupportlogs.md#installer-logs) for how to capture a verbose install log if a silent installation fails.
:::
