---
sidebar_position: 7
---
# Settings: Authentication and OIDC & SAML

The **Settings** page in PingCastle Enterprise centralizes configuration that used to live in `appsettings.production.json`. This page covers two screens in **Settings**: **Authentication & Login Options** and **OIDC & SAML**.

:::note
Most settings changes take effect within about 30 seconds without a restart. A few settings require a restart, which PingCastle Enterprise schedules automatically.
:::

## Authentication & Login Options

The **Authentication & Login Options** screen controls the login page and the login methods available to your users. For the underlying setup of each method, including identity provider configuration and appsettings.json examples, see [Authentication](enterpriseinstall.md#authentication).

<!-- TODO: screenshot -->

| Setting | Description |
|---------|-------------|
| Custom Login Message | Displays a custom message on the login page, such as an internal notice or an authorized-use banner. |
| Disable Password Login | Hides the built-in username and password login option, so users authenticate only through the other methods you configure (Windows Authentication, OpenID Connect, SAML2, header authentication, or client certificates). |
| Password Minimum Length | Sets the minimum number of characters required for local account passwords. |
| Session Timeout | Sets how many days a login session stays valid before a user has to sign in again. |
| Windows Group | The Active Directory group whose members can log in to PingCastle Enterprise using Windows Authentication. |
| Windows Group Admin | The Active Directory group whose members receive administrator privileges when they log in using Windows Authentication. |
| Certificate Authentication | Enables client certificate authentication, letting users log in by presenting a valid SSL client certificate instead of a username and password. |
| Skip Revocation Check | Skips certificate revocation checking (CRL or OCSP) during client certificate authentication. Enable this if your environment doesn't have revocation endpoints available. |
| Header Authentication | Enables authentication through a header that a reverse proxy sets after authenticating the user, and specifies the header name PingCastle Enterprise reads. |

:::danger
If you enable header authentication, isolate PingCastle Enterprise behind a reverse proxy that prevents unauthenticated users from setting their own authentication header. Otherwise, anyone can bypass authentication.
:::

## OIDC & SAML

The **OIDC & SAML** screen configures single sign-on (SSO) through OpenID Connect (OIDC) or SAML 2.0. For full setup walkthroughs, including Entra ID and Okta examples, see the **OpenID Connect** and **SAML2 Authentication** tabs in [Authentication](enterpriseinstall.md#authentication).

<!-- TODO: screenshot -->

Users who sign in through OIDC or SAML for the first time can be provisioned automatically. See [SCIM and provisioning settings](enterprisesettings-scim.md) for just-in-time (JIT) provisioning.

### OpenID Connect settings

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

### SAML settings

| Setting | Description |
|---------|-------------|
| Enabled | Turns on SAML login. |
| Display Name | The text shown on the SAML login button. |
| Issuer | The identifier PingCastle Enterprise presents to your identity provider as the SAML issuer. |
| IdP Metadata | The URL of your identity provider's SAML metadata, used to fetch signing certificates and endpoint information automatically. |
| Single Sign-On Destination | The SSO endpoint on your identity provider, used when you configure SAML manually instead of through IdP metadata. |
| Certificate | The base64-encoded signing certificate from your identity provider, used when you configure SAML manually. |
| Ignore Certificate Validation | Skips validation of the identity provider's certificate. Use this only for testing, since it removes a security check. |
