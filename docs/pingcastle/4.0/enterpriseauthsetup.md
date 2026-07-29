---
sidebar_label: Authentication setup
---
# Configuring Authentication for PingCastle Enterprise

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Authentication

PingCastle Enterprise supports multiple authentication methods that can work simultaneously. You can configure any combination of Local Authentication, Windows Authentication, OpenID Connect, Entra ID Authentication, Header Authentication, SAML2, and Client Certificate authentication, allowing users to choose their preferred login method.

Set up each method's identity provider using the instructions on this page, then enter the resulting values on the **Login options**, **Windows authentication**, **Certificate authentication**, **Header authentication**, **OIDC Connect**, and **SAML** screens under **Configuration** > **Settings** in the PingCastle Enterprise web interface.

:::note
Most changes on these screens take effect within about 30 seconds, without a restart. A few settings require a restart, which PingCastle Enterprise schedules automatically.
:::

:::note
Entra ID Authentication is a login method, configured through OpenID Connect. It's distinct from Entra scanning, which is a data source that assesses your Entra tenant for security risks. See [Entra scanning](enterpriseentrascan.md) for the scanning feature. Users signing in through OpenID Connect or SAML2 for the first time can be provisioned automatically through just-in-time (JIT) provisioning; see [Provisioning settings](enterprisesettings-scim.md) for the JIT provisioning toggle.
:::

<Tabs>
  <TabItem value="local" label="Local Authentication" default>

### Local authentication

Local authentication is enabled by default and uses username and password stored in the PingCastle Enterprise database. No additional configuration is required.

To hide the local authentication option when other authentication methods are configured, enable **Disable Password Login** on **Configuration** > **Settings** > **Login options**.

:::warning
When **Disable Password Login** is enabled and Windows Authentication is enabled, any account calling the API will need to be a member of the Windows group configured in **Windows Group**.
:::

  </TabItem>
  <TabItem value="windows" label="Windows Authentication">

### Windows authentication

<details>
<summary>If you haven't already, enable Windows Authentication</summary>

**Step 1: Install Windows Authentication Package**

Ensure the Windows Authentication package is installed. It may not be part of the default IIS installation on older Windows Server versions.

Open **Server Manager** > **Manage** > **Add Roles and Features** > **Server Roles** > **Web Server (IIS)** > **Web Server** > **Security** and select **Windows Authentication**.

**Step 2: Enable Windows Authentication in IIS**

1. Close and reopen the **IIS Manager** console to refresh the available options.
2. Select the PingCastleEnterprise website in the left-hand tree view.
3. Double-click the **Authentication** icon in the center panel.

![IIS Authentication Option](/images/pingcastle/enterpriseinstall/Authentication/iis-auth-option.webp)

4. In the Authentication settings, ensure the following:
   - **Anonymous Authentication**: Enabled (should already be enabled)
   - **Windows Authentication**: Right-click and select **Enable**

![IIS Authentication Methods](/images/pingcastle/enterpriseinstall/Authentication/iis-auth-methods.webp)

</details>

Windows Authentication uses Active Directory groups to provision access to PingCastle Enterprise. Create two security groups in Active Directory. You can call these whatever you like. This document uses the following names as examples:
- **PingCastle_Users**: Members of this group can log in and access PingCastle Enterprise
- **PingCastle_Admins**: Members of this group have administrator privileges

Add users to the appropriate groups based on the level of access they require.


**Getting AD Group SIDs**

PingCastle Enterprise needs the Security Identifiers (SIDs) of the groups for setup. Use the tabs to select a way to help you get these.

<Tabs>
  <TabItem value="ad-powershell" label="Active Directory PowerShell" default>

This method uses the ActiveDirectory PowerShell module to retrieve the group SIDs

```powershell
Get-ADGroup "PingCastle_Users" | Select-Object Name, SID
Get-ADGroup "PingCastle_Admins" | Select-Object Name, SID
```

  </TabItem>
  <TabItem value="adsi" label="ADSI Search">

This method uses PowerShell with the native ADSI Searcher class to get the group SIDs

```powershell
$searcher = [ADSISearcher]"(&(objectClass=group)(name=PingCastle_Users))"
$group = $searcher.FindOne()
$sid = New-Object System.Security.Principal.SecurityIdentifier($group.Properties["objectsid"][0], 0)
$sid.Value

$searcher = [ADSISearcher]"(&(objectClass=group)(name=PingCastle_Admins))"
$group = $searcher.FindOne()
$sid = New-Object System.Security.Principal.SecurityIdentifier($group.Properties["objectsid"][0], 0)
$sid.Value
```

  </TabItem>
  <TabItem value="whoami" label="whoami (Current User)">

If you are already a member of the groups and have rebooted since being added you can run 
`whoami /all` to get your group memberships and find the SID in the output

![Viewing SIDs with whoami](/images/pingcastle/enterpriseinstall/Authentication/whoami-sid.webp)

  </TabItem>
</Tabs>



**Configuration**

On **Configuration** > **Settings** > **Windows authentication**, enter the SIDs you retrieved into the matching fields:

| Setting | Description |
|---------|-------------|
| Windows Group | SID of the Active Directory group that grants login access (e.g., PingCastle_Users) |
| Windows Group Admin | SID of the Active Directory group that grants administrator privileges (e.g., PingCastle_Admins) |

PingCastle Enterprise also removes a user's access automatically if they no longer belong to the group set in **Windows Group** at their next login.

:::note
Windows Authentication doesn't provide an email address when creating accounts. Email addresses are set to a default value that disables notifications.
:::

![Windows accounts have no email](/images/pingcastle/enterpriseinstall/Authentication/windows-no-email.webp)

<details>
<summary>Want to hide the local authentication prompt?</summary>

To hide the internal username/password login option, enable **Disable Password Login** on **Configuration** > **Settings** > **Login options**.

![Login page without password option](/images/pingcastle/enterpriseinstall/Authentication/login-page-no-password.webp)

:::warning API Access
This setup affects all pages for authentication. When **Disable Password Login** is enabled with Windows Authentication, API calls will require both an API key and the calling account to be in the group set in **Windows Group**.

To restrict NTLM authentication to specific pages, edit the `web.config` file using the `<location>` directive to restrict authentication to the WindowsAuth page. See [IIS URL Authorization documentation](https://docs.microsoft.com/en-us/iis/manage/configuring-security/understanding-iis-url-authorization).
:::

</details>

  </TabItem>
  <TabItem value="openid" label="OpenID Connect">

### OpenID Connect

PingCastle Enterprise supports OpenID Connect authentication using the ASP.NET Core API. Configuration options are [documented here](https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.builder.openidconnectoptions?view=aspnetcore-1.1&viewFallbackFrom=aspnetcore-8.0).

Proxy settings rely on the current user proxy configuration, which can be defined [using netsh for IIS running as SYSTEM](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-proxy-internet?view=o365-worldwide).

<details>
<summary>Configuring Entra ID for OpenIDConnect Authentication</summary>

Entra ID can be configured as an OpenID Connect provider.

**Entra ID Portal Configuration**

1. Navigate to [Entra ID Portal](https://portal.azure.com) and go to "App registrations"
2. Register a new application
3. Set the Redirect URI as **Web** with the URL: `https://your-pingcastle-server.com/signin-oidc`

   ![Azure App Registration](/images/pingcastle/enterpriseinstall/Authentication/azure-app-registration.webp)

   :::warning
   The URL must end with `/signin-oidc`
   :::

4. Go to the **API permissions** page

   ![Azure API Permissions](/images/pingcastle/enterpriseinstall/Authentication/azure-api-permissions.webp)

5. Click "Grant admin consent" for the application

   ![Grant Admin Consent](/images/pingcastle/enterpriseinstall/Authentication/azure-grant-consent.webp)

6. Verify the Status shows as granted

   ![Consent Granted](/images/pingcastle/enterpriseinstall/Authentication/azure-consent-granted.webp)

7. Note the **Application (client) ID** and **Directory (tenant) ID**

   ![Client and Tenant IDs](/images/pingcastle/enterpriseinstall/Authentication/azure-client-tenant-id.webp)

8. Go to the **Authentication** tab and enable **ID tokens**

   ![Enable ID Tokens](/images/pingcastle/enterpriseinstall/Authentication/azure-enable-id-tokens.webp)


</details>

**Configuration**

On **Configuration** > **Settings** > **OIDC Connect**, enable OIDC login and enter the values from your identity provider:

| Setting | Description |
|---------|-------------|
| Enabled | Turns on OIDC login. |
| Display Name | The text shown on the OIDC login button. |
| Client ID | The application (client) ID your identity provider assigned when you registered PingCastle Enterprise. |
| Client Secret | The client secret your identity provider issued for the application. |
| Authority | The base URL of your identity provider, used to discover its OIDC endpoints. |
| Callback Path | The path on PingCastle Enterprise where your identity provider redirects users after they sign in. |
| Response Type | The OIDC response type PingCastle Enterprise uses during the authentication flow, such as `code`. |
| Use PKCE | Enables Proof Key for Code Exchange (PKCE), which adds a layer of protection to the authorization code exchange. |
| Map Inbound Claims | Controls whether PingCastle Enterprise maps claim names from the identity provider to their .NET equivalents. |
| Scope | The list of OIDC scopes PingCastle Enterprise requests, such as `openid`, `profile`, and `email`. |
| Require HTTPS Metadata | Requires the OIDC metadata endpoint to be served over HTTPS. |

All fields except **Scope** depend on your OpenID provider. To hide the internal username/password login option, enable **Disable Password Login** on **Login options**.

  </TabItem>
  <TabItem value="header" label="Header Authentication">

### Header authentication

Header authentication delegates authentication to a reverse proxy, which sets a header indicating the authenticated user.

**Configuration**

On **Configuration** > **Settings** > **Header authentication**, enable **Header Authentication** and enter the header name your reverse proxy sets.

When a user accesses the login page, PingCastle checks for the specified header. If present, PingCastle considers the user authenticated and uses the header value as the username.

:::danger Security Requirement
The PingCastle application **must** be isolated by a reverse proxy that prevents unauthenticated users from setting their own authentication header. Failure to properly secure this configuration allows authentication bypass.
:::

To hide the internal username/password login option, enable **Disable Password Login** on **Login options**.

  </TabItem>
  <TabItem value="saml2" label="SAML2 Authentication">

### SAML2 authentication

PingCastle Enterprise supports SAML2 authentication using the [ITfoxtec Identity SAML 2.0](https://www.itfoxtec.com/IdentitySaml2) package. Advanced configuration settings are [documented here](https://github.com/ITfoxtec/ITfoxtec.Identity.Saml2/blob/master/src/ITfoxtec.Identity.Saml2/Configuration/Saml2Configuration.cs).

Proxy settings rely on the current user proxy configuration, which can be defined [using netsh for IIS running as SYSTEM](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-proxy-internet?view=o365-worldwide).

<details>
<summary>Configuring SAML2 with Okta</summary>

Configure PingCastle Enterprise with Okta as your SAML2 identity provider using the following steps.

#### Step 1 Access Okta Admin Portal

Log in to your Okta tenant and switch to the admin portal.

![Okta Admin Portal](/images/pingcastle/enterpriseinstall/Authentication/okta-admin-portal.webp)

#### Step 2 Create New Application

1. Click **Applications** > **Add Application** > **Create New App**
2. Select **SAML 2.0** and click **Create**

![Create New App](/images/pingcastle/enterpriseinstall/Authentication/okta-create-app.webp)

#### Step 3 Name Your Application

Give your app a name and click **Next**.

![Name App](/images/pingcastle/enterpriseinstall/Authentication/okta-app-name.webp)

#### Step 4 Configure SAML Settings

Configure the following SAML settings:

| Setting | Value |
|---------|-------|
| **Single Sign on URL** | `https://your-pingcastle-server.com/Saml2/AssertionConsumerService` |
| **Audience URI** | `PingCastle` (or match your `Issuer` setting) |

![Configure SAML](/images/pingcastle/enterpriseinstall/Authentication/okta-saml-config.webp)

#### Step 5 Get IdP Metadata URL

Locate the IdP metadata URL for use in your PingCastle configuration.

![Metadata URL](/images/pingcastle/enterpriseinstall/Authentication/okta-metadata-url.webp)

#### Step 6 Assign Users

Assign users to the application: **Assignments** > **Assign** > **Assign to People**

![Assign Users](/images/pingcastle/enterpriseinstall/Authentication/okta-assign-users.webp)

#### Step 7 Restart and Test

Restart the application. A SAML2 login option will appear on the login screen.

![SAML2 Login Screen](/images/pingcastle/enterpriseinstall/Authentication/saml-login-screen.webp)

</details>


**Configuration**

On **Configuration** > **Settings** > **SAML**, enable SAML login and enter the values from your identity provider:

| Setting | Description |
|---------|-------------|
| Enabled | Turns on SAML login. |
| Display Name | The text shown on the SAML login button. |
| Issuer | The identifier PingCastle Enterprise presents to your identity provider as the SAML issuer. |
| IdP Metadata | The URL of your identity provider's SAML metadata, used to fetch signing certificates and endpoint information automatically. |
| Single Sign-On Destination | The SSO endpoint on your identity provider, used when you configure SAML manually instead of through IdP metadata. |
| Certificate | The base64-encoded signing certificate from your identity provider, used when you configure SAML manually. |
| Ignore Certificate Validation | Skips validation of the identity provider's certificate. Use this only for testing, since it removes a security check. |

Set **IdP Metadata** to fetch your identity provider's signing certificate and endpoints automatically, as with Okta or ADFS metadata URLs.

:::warning Availability Requirement
When using **IdP Metadata**, PingCastle Enterprise accesses the metadata URL at application startup. If the URL is unavailable, PingCastle Enterprise will be unavailable until the metadata becomes accessible again.
:::

To avoid a startup dependency on the metadata URL, leave **IdP Metadata** blank and set **Single Sign-On Destination** and **Certificate** instead, using the values from your identity provider's metadata:

![IdP Metadata Issuer](/images/pingcastle/enterpriseinstall/Authentication/saml-metadata-issuer.webp)

![SSO Destination](/images/pingcastle/enterpriseinstall/Authentication/saml-sso-destination.webp)

![Certificate from Metadata](/images/pingcastle/enterpriseinstall/Authentication/saml-certificate.webp)

To hide the internal username/password login option, enable **Disable Password Login** on **Login options**.

  </TabItem>
  <TabItem value="certificate" label="Client Certificate">

### Client certificate authentication

Client certificate authentication requires users to present a valid SSL client certificate when accessing PingCastle Enterprise.

**IIS Configuration**

Configure IIS to require or accept client certificates. This requires HTTPS access.

![IIS Require SSL Certificate](/images/pingcastle/enterpriseinstall/Authentication/iis-require-ssl-cert.webp)

The server requests a certificate when a user accesses the website.

![SSL Certificate Request](/images/pingcastle/enterpriseinstall/Authentication/ssl-cert-request.webp)

:::tip API Access
Set the certificate requirement to **Accept** (not **Require**) to allow API access without certificates, or configure a separate virtual host for API access.
:::

:::note Browser Cache
Close and reopen the browser after changing certificate settings to avoid connection cache reuse.
:::

**PingCastle Configuration**

On **Configuration** > **Settings** > **Certificate authentication**, enable **Certificate Authentication**. If your environment doesn't have CRL or OCSP revocation endpoints available, also enable **Skip Revocation Check** to skip certificate revocation checking.

When a user visits `/Account/Login`, PingCastle evaluates the certificate for trust (chain building, online verification) and maps it to a user account.

**Certificate Mapping**

PingCastle maps certificates to user accounts using these identifiers (in order):
1. DNS Name (CN from subject)
2. UPN from SubjectAlternateName
3. RFC email from SubjectAlternateName

**User Account Setup**

Create a user account with a login matching the certificate subject (DNS form). No password is required.

![Certificate User Account](/images/pingcastle/enterpriseinstall/Authentication/cert-user-account.webp)

**Troubleshooting**

If PingCastle can't recognize the certificate, it displays an error:

![Certificate Not Recognized](/images/pingcastle/enterpriseinstall/Authentication/cert-not-recognized.webp)

Ensure the user account login matches one of the preceding certificate identifiers.

  </TabItem>
</Tabs>

### Login options

The **Login options** screen also includes these fields:

| Field | Description |
|---|---|
| Minimum Password Length | The minimum number of characters required for local authentication passwords. Applies only when Local Authentication is enabled. |
| Session Timeout | The number of minutes a user session can remain idle before PingCastle Enterprise logs the user out. |

### Custom Login Message

You can display a custom message on the login page, such as an internal notice or an authorized-use banner, by setting **Custom Login Message** on **Configuration** > **Settings** > **Login options**.

**Example:**

```html
<p>The PingCastle UK Instance for Consto</p>
```

The custom message appears on the login page within about 30 seconds:

![The login screen showing the custom login message](/images/pingcastle/enterpriseinstall/Configuration/CustomLoginMessage.webp)

:::warning Security Note
The **Custom Login Message** setting renders raw HTML without escaping. While this allows formatting flexibility using [Bootstrap](https://getbootstrap.com/) CSS styles, Content Security Policy (CSP) protections prevent injection of custom CSS or JavaScript.
:::
