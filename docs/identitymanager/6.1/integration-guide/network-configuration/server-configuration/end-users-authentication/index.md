---
title: "End-User Authentication"
description: "End-User Authentication"
sidebar_position: 30
---

# End-User Authentication

## Overview

Before end-users can connect to Usercube through the UI, they will have to authenticate.

Usercube supports **seven** authentication methods organized into two categories: _Internal_ methods
and _External_ methods.

It is highly recommended that you use an _External_ method. _Internal_ methods are mostly used for
debug, test and development purposes.

### Internal methods

The _Internal_ methods use _Usercube Server_'s internal authentication server. They rely on one of
these _Identity Server User Stores_:

- **Test User Store**, used in development environments.
- **Active Directory User Store**, using an Active Directory to authenticate.

### External methods

_External_ methods use external authentication providers.

Usercube supports **five** types of external authentication providers. **Four** are based on
different flavors of the _OAuth 2.0_ protocol. The last one is integrated with Windows.

- [OpenIdConnect](https://openid.net/connect/)
- [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html)
- [OAuth](https://tools.ietf.org/html/rfc6749)
- [SAML2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [Integrated Windows Authentication (IWA)](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/integrated-windows-authentication).

### Using more than one provider

For each authentication method, one or several authentication providers can be set up. If several
authentication providers are set up, end-users will be prompted to choose their preferred method of
authentication.

![authent_1](/images/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/authent_1.webp)

#### Internal Method & Test Mode Form

![authent_2](/images/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/authent_2.webp)

#### External Method Prompt

## Identity Server RSA Key Pair

A public key certificate and a private key are used to handle encrypted communication with external
authentication providers. This is used, for example, by the _Usercube Server_ to retrieve the
provider's signing key. It is mandatory to validate _JWT tokens_ in an OAuth-flavor scenario.

This information can be set one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called `.pfx` file) stored in
  the _Agent_'s host file system. The archive contains both the public key certificate and the
  private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key.

### PFX file

The archive is set using the following attributes on the `appsettings > IdentityServer` section (see
Configuration):

- **X509KeyFilePath** is the [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the
  Agent's host file system.
- **X509KeyFilePassword** (_optional_) is the [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12)
  archive password.

#### Example

                    ```

"IdentityServer": \{ "X509KeyFilePath": "C:/identitymanagerAgentContoso/contoso.pfx",
"X509KeyFilePassword": "oarjr6r9f00" \}

````


### Certificate

The certificate from a Windows certificate store is set up using these attributes on the ```appsettings > IdentityServer``` section (see Configuration):

| Name | Details |
| --- | --- |
| X509SubjectDistinguishedName   optional (if _Thumbprint_ is non-empty) | Sets the store certificate's _SubjectDistinguishedName_. |
| _X509Thumbprint_    optional (if _DistinguishedName_ is non-empty) | Sets the store certificate's _Thumbprint_. |
| X509StoreLocation   required | Sets the Relevant Windows certificate store's location: ```LocalMachine``` or ```CurrentUser```. |
| X509StoreName   required | Sets the relevant Windows certificate store's name. |

#### Example

                    ```

"IdentityServer": \{
    "X509SubjectDistinguishedName":"UsercubeContoso",
    "X509StoreLocation": "LocalMachine",
    "X509StoreName": "AuthRoot"
\}

````

Usercube Server won't start if the [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive set up
during this step is identical to the one provided with the SDK. Users must provide their own
certificate.
[Self-signed certificates](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md)
are accepted as valid.

## Configuration Section Description

Authentication is set up using the following two sections of the Server's `appsettings` set.

- `IdentityServer`
- `Authentication`

                              ```

**\{ "IdentityServer":\{ ... \}, "Authentication":\{ ... \} \}**

````


The ```authentication``` section mostly fits the following pattern:

                    ```

"Authentication":\{
    `<Authentication Protocol 1>`:\{
          `<Authentication Provider 1>`:\{
                  ...
          \},
          ....,
          `<Authentication Provider n>`:\{
                  ...
          \},
    \},
    `<Authentication Protocol 2>`:\{
          `<Authentication Provider 1>`:\{
                  ...
          \},
          ....,
          `<Authentication Provider n>`:\{
                  ...
          \},
    \}
\}

````

Several authentication providers can be defined (here above, `<Authentication Provider 1>` to
`<Authentication Provider n>`), using one or several authentication protocols (here above,
`<Authentication Protocol 1>` and `<Authentication Protocol 2>`).

Most of the authentication providers need the user to choose an **AuthenticationScheme**. It is a
string that will be used to uniquely identify this authentication method in Usercube. Its goal is to
enable Usercube's testers to identify which authentication method is used in the logs or in the
code, with a mnemonic name. Any name can be used as long as all AuthenticationSchemes are different.

This guide doesn't cover how to set up authorizations within Usercube. Authorization for an end-user
to access Usercube resources relies on assigning roles to profiles. Identity credentials used for
authentication must be
[linked to these profiles in the applicative configuration](/docs/identitymanager/6.1/integration-guide/network-configuration/settings/index.md).

Authentication-related settings are set through the following
[_sections_](/docs/identitymanager/6.1/integration-guide/architecture/index.md)
of the `appsettings` set:

- `IdentityServer`
- `Authentication`

### IdentityServer

This is the general-purpose authentication settings section.

The `IdentityServer` section allows the following attributes:

| Name                                            | Details                                                                                                                                                                                        |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled default value: true                     | **Type** Boolean **Description** Enables or disables the Identity Server.                                                                                                                      |
| AllowWindowsAuthentication default value: false | **Type** Boolean **Description** Allows Windows authentication. Will work only when the Active Directory User Store is enabled.                                                                |
| ShowPII default value: false                    | **Type** Boolean **Description** Sets whether or not PII is shown in logs. For security reasons, this setting should be used sparingly.                                                        |
| ValidationKeys optional                         | **Type** String Array **Description** Allows the definition of public certificate paths for token validation.                                                                                  |
| IssuerURI optional                              | Sets the unique name of this server instance.                                                                                                                                                  |
| PostLogoutRedirectUri optional                  | Sets a specific URI to which the user will be redirected after a successful logout.                                                                                                            |
| PublicOrigin optional                           | Sets the origin name for this _Usercube Server_ instance. Useful if end-users authenticate through a proxy server.                                                                             |
| X509File required                               | Is the [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the Agent's host file system (see Public key certificate and private key). |
| X509KeyFilePassword optional                    | Is the [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password (see Public key certificate and private key).                             |
| X509SubjectDistinguishedName optional           | Sets the store certificate's _SubjectDistinguishedName_ (see Public key certificate and private key).                                               |
| _X509Thumbprint_ optional                       | Sets the store certificate's _Thumbprint_ (see Public key certificate and private key).                                                             |
| X509StoreLocation required                      | Sets the relevant Windows certificate store's location (see Public key certificate and private key).                                                |
| X509StoreName required                          | Sets the relevant Windows certificate store's name (see Public key certificate and private key).                                                    |

### Authentication

This section contains specific settings for each configuration method.

At the root, the following properties can be used:

| Name                                     | Details                                                                                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled default value: true              | **Type** Boolean **Description** Enables or disables authentication.                                                                      |
| RequireHttpsMetadata default value: true | **Type** Boolean **Description** Specifies whether HTTPS is required for the discovery endpoint.                                          |
| AllowLocalLogin required                 | **Type** Boolean **Description** If `true`, a Login Form replaces Windows Authentication.                                                 |
| CookieLifeTime default value: 8          | **Type** Int **Description** Maximum duration (in hours) after which the session expires automatically.                                   |
| LifeTimeSliding default value: 10        | **Type** Int **Description** Duration (in minutes) after which the session expires automatically, if no action is taken during this time. |

Then, a subsection for every authentication method is used. Supported subsections are:

- `OpenId`
- `OAuth`
- `WsFederation`
- `SAML2`
- `ActiveDirectoryUserStore`
- `TestUserStore`

## Set Up Integrated Windows Authentication (IWA)

This authentication method can be used to authenticate users within an Active Directory domain using
their respective domain account.

This authentication is silent: when an end-user tries to access Usercube, the browser retrieves
identity credentials from the Windows session where the user is logged in and sends them to the
domain controller for authentication. The domain controller confirms the user's identity and
validates it for Usercube. The end-user doesn't have to input any credentials.

If Integrated Windows Authentication is used, internal methods have to be disabled with the
`"AllowLocalLogin":false` setting.

### Requirements

Setting up this authentication method requires the following:

- Usercube runs as an [Internet Information Services (IIS)](https://www.iis.net/) website.
- Windows Authentication is
  [enabled on Windows server](https://www.microsoft.com/fr-fr/evalcenter/evaluate-windows-server-2016).
- Windows Authentication is
  [enabled for the Usercube IIS website](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/windowsauthentication/#enabled-for-the-usercube-iis-website).

### Configuration

Integrated Windows Authentication is configured using the following sections:

1. Set the **IdentityServer** > **AllowWindowsAuthentication** attribute to `true`.
2. Set the **Authentication** > **AllowLocalLogin** attribute to `false`.

> The following example sets up Windows Authentication. Windows Server and IIS requirements have
> been checked.
>
>                         ```
>
>                             appsettings.json
>
> ... "IdentityServer":\{ "AllowWindowsAuthentication":"true", \}, "Authentication":\{
> "AllowLocalLogin":"false", \} ...
>
> ```
>
> ```

## Set Up an Open ID Connect Provider

One or several **Open ID Connect** authentication providers can be set up under the
`authentication > OpenId` section.

### Overview

#### Multiple providers

One or several **Open ID Connect** authentication providers can be set up.

#### Registration process

Using an **Open ID Connect** authentication requires the _Usercube Server_ to be registered to the
provider. A _ClientID_ and a _ClientSecret_ are issued as a result of the registration process. They
both allow Usercube to identify itself to the authentication provider.
[Here is an example of registering Usercube to an Microsoft Entra ID (formerly Microsoft Azure AD) used as Open ID Connect provider.](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-openid-settings)

#### Callback URL

The target **Open ID Connect** provider needs to be aware of the URI where to send the
authentication token if the authentication succeeds. Depending on the provider, it is called a
**callback URL**, a **callback path**, an **authorization callback URL**, or a **redirect URI**.

During the registration process, the provider will ask for the URL.

Usercube's **callback URL** for **Open ID Connect** is `<usercube-server-address>/signin-oidc` where
`<usercube-server-address>` is the address of your _Usercube Server_ such as
`https://identitymanager.contoso.com`.

#### Authority

An **Open ID Connect** provider is identified by its **Authority**, according to the
[Open ID Connect specifications](https://openid.net/connect/).

#### NameClaimType

To authorize an end-user, _Usercube Server_ retrieves a specific claim (a key-value pair,
transmitted through the OIDC-issued JWT token) returned by the provider and looks for a resource
that matches this claim's value. The comparison is carried out according to
[the resource and property set as the end-user's identity in the applicative configuration](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting/index.md).

The name of the claim that is retrieved for this purpose defaults to `sub` which is one of
[the standard _Claim names_ for the Open ID Connect protocol](https://openid.net/specs/openid-connect-core-1_0.html#the-standard-_claim-names_-for-the-open-id-connect-protocol).
However, some providers might not fill the `sub` value with meaningful data, or use non-standard
_Claim names_.

For this reason, the name of the claim that is retrieved by Usercube for authorization purposes can
be set up according to the provider's specifics.

See the [**NameClaimType**](#nameclaimtype) configuration attribute.

Users should be able to get a list of the claim names used by their authentication providers from
their providers' portal website, documentation or administrators.

For example, the following claim provides no meaningful `sub` value.

                    ```

\{ "name": "John Doe", "preferred_username": "john.doe@contoso.com", "sub": "11v7ert42azerttyZD6d4"
\}

````


Using the following applicative configuration setting that sets ```Ad_Entry:userPrincipalName``` as the value to be matched against a claim in order to identify a user's profile, the ```preferred_username ```__NameClaimType__ should be used.

                    ```

 `<SelectUserByIdentityQueryHandlerSetting ResourceIdentityProperty="AD_Entry:userPrincipalName" ... />`

````

### Configuration

First, the Open ID Connect method must be enabled.

Under the `OpenId` section:

| Name             | Details                                                                     |
| ---------------- | --------------------------------------------------------------------------- |
| Enabled required | **Type** Boolean **Description** Enables or disables the OpenId connection. |

For each **Open ID Connect** provider to integrate, a new section is added under the `OpenID`
subsection. Any section name can be used. This section name is only used as a means for the user to
find the authentication method in the configuration files.

Under the new subsection, the following parameters are used to configure the authentication method:

| Name                                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AuthenticationScheme required            | Is the unique identifier of this authentication method within Usercube. Any string value can be used, unique among all authentication methods.                                                                                                                                                                                                                                                                             |
| DisplayName optional                     | Is the provider display name. Chosen by the user, it is used in the UI to identify the authentication method.                                                                                                                                                                                                                                                                                                              |
| ClientId required                        | Is the Client ID issued during the registration of Usercube to the chosen Open ID Connect provider.                                                                                                                                                                                                                                                                                                                        |
| ClientSecret required                    | Is the Client Secret issued during the registration of Usercube to the chosen Open ID Connect provider.                                                                                                                                                                                                                                                                                                                    |
| Authority required                       | This URL identifies the Open ID Connect provider for Usercube according to the [Open ID Connect specifications](https://openid.net/connect/). It can be retrieved from the target Open ID Connect provider documentation. For example, [Microsoft's documentation indicates the Microsoft Identity Platform Open ID Connect authority](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-protocols-oidc). |
| NameClaimType optional                   | Sets the type of the claim that will be retrieved by Usercube to identify the end-user. The retrieved claim will be compared against [the resource and property set as the end-user's identity in the applicative configuration](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/settings/selectuserbyidentityqueryhandlersetting/index.md).                                    |
| Scopes optional                          | Sets the list of the requested [scopes](https://auth0.com/docs/scopes/openid-connect-scopes). By default, the requested scopes are: `openid`, `profile` and `email`.                                                                                                                                                                                                                                                       |
| SaveTokens default value: false          | **Type** Boolean **Description** Only for Okta providers. Set to `true if authentication uses an Okta provider. For more information about Okta configuration, see [Okta](/docs/identitymanager/6.1/integration-guide/network-configuration/how-tos/okta/index.md).                                                                                                                                            |
| MetadataAddress optional                 | URL address of a copy of the metadata, used when the authority metadata cannot be accessed from the Usercube server, for example because of a firewall.                                                                                                                                                                                                                                                                    |
| RequireHttpsMetadata default value: true | **Type** Boolean **Description** By default the authority metadata must use HTTPS. Set to `false to use a simple HTTP metadata, in case a local copy of the metadata is used or for test environment.                                                                                                                                                                                                                      |
| ResponseMode optional                    | **Type** String **Description** Response mode for OpenIdConnect. - `Query` - `FormPost` - `Fragment` [See OpenId documentation](https://openid.net/specs/openid-connect-core-1_0.html).                                                                                                                                                                                                                                    |
| ResponseType optional                    | **Type** String **Description** Response type for OpenIdConnect. - `Code` - `CodeIdToken` - `CodeIdTokenToken` - `CodeToken` - `IdToken` - `IdTokenToken` - `None` - `Token` [See examples in the OpenId documentation](https://openid.net/specs/openid-connect-core-1_0.html#see-examples-in-the-openid-documentation).                                                                                                   |

#### Example

This example configures an _OpenId Connect_ authority located at
[https://login.microsoftonline.com/bbd35166-7c13-49f3-8041-9551f2847b69](https://login.microsoftonline.com/bbd35166-7c13-49f3-8041-9551f2847b69).

This authentication provider is identified within the `appsettings.json`_OpenId Connect_ providers
list as _OpenId1_.

Within Usercube, it will be identified with the authentication scheme _AzureOIDC_.

It will be displayed as _Connection Microsoft Entra ID with OIDC protocol_ in the UI external login
prompt.

                    ```

\{ "Authentication": \{ ... "OpenId": \{ "Enabled": "True", "OpenId1": \{ "AuthenticationScheme":
"AzureOIDC", "DisplayName": "Connection Microsoft Entra ID with OIDC protocol", "ClientId":
"6779ef20e75817b79602", "ClientSecret":
"5ef0234c039c725e21ffc727a60c44895a39dce1c81ae36dc5d002feae82c1c0 ", "Authority":
"https://login.microsoftonline.com/bbd35166-7c13-49f3-8041-9551f2847b69", "NameClaimType":
"preferred_username", "Scopes": ["openid", "profile"] \} \} \} \}

````


## Set Up an OAuth Provider

One or several __OAuth__ authentication providers can be set up under the ```authentication > OAuth``` section.

### Overview

#### Multiple providers

One or several __OAuth__ authentication providers can be set up.

#### Registration process

Using an __OAuth__ authentication requires _Usercube Server_ to be registered to the provider. A _ClientID_ and a _ClientSecret_ are issued as a result of the registration process. They both allow Usercube to identify itself to the authentication provider.

#### Callback URL

The target __OAuth__ provider needs to be aware of the URI where to send the authentication token if the authentication succeeds. Depending on the provider, it is called a __callback URL__, a __callback path__, an __authorization callback URL__, or a __redirect URI__.

During the registration process, the provider will ask for the URL.

Usercube's __callback URL__ for __OAuth__ is ```<usercube-server-address>/<callback-path>``` where ```<usercube-server-address>``` is the address of your Usercube Server such as ```https://identitymanager.contoso.com``` and ```<callback-path>``` can be set up to any value chosen by the user using the __CallbackPath__ configuration attribute. The only constraint is to make sure the __CallbackPath__ value in Usercube's configuration is the same as in the __OAuth__ provider registration screen for Usercube.

### Configuration

First, the OAuth method must be enabled under the ```authentication > OAuth``` section.

| Name | Details |
| --- | --- |
| Enabled   required | __Type__    Boolean   __Description__ Enables or disables the OAuth connection. |

Then, users must create a new section per __OAuth__ provider. Users are free to choose any section name. Its sole purpose is for users to find the authentication method in the configuration files.

Each section is configured with the following settings:

| Name | Details |
| --- | --- |
| AuthenticationScheme   required | Is the unique identifier of this authentication method within Usercube. Any string value can be used, unique among all authentication methods. |
| DisplayName   optional | Is the provider display name. Chosen by the user, it is used in the UI to identify the authentication method. |
| ClientId   required | Is the Client ID issued to Usercube during the registration process. |
| ClientSecret   required | Is the Client Secret issued to Usercube during the registration process. |
| ClaimsIssuer   required | Is a unique identifier that will mark claims issued by this __OAuth__ provider for Usercube. This mark is used for debugging, monitoring, or security purposes in situations where multiple __OAuth__ providers are involved. It's still useful if only one provider is used. Any string value can be used. Convention dictates that it is a URL shaped value such as ```https://accounts.google.com```. |
| AuthorizationEndpoint   required | Is the provider's Authorization Endpoint URI. This is where the end-user's browser is redirected to start the authentication process. Usually ends with ```/auth``` or ```/authorize```. This information must be retrieved from the provider's portal. |
| _TokenEndpoint_    required | Is the provider's Token Endpoint URI. This is where the client sends token requests, using an authorization code obtained during the authentication process. This information must be retrieved from the provider's portal. |
| CallbackPath   required | Sets the callback path where the client is redirected after a successful authentication. Any string value can be used as long as it is reported to the provider during the [registration process](#registration-process). |
| SaveTokens   default value: false | __Type__    Boolean   __Description__ Only for Okta providers. Set to `true if authentication uses an Okta provider. For more information about Okta configuration, see [Okta](/docs/identitymanager/6.1/integration-guide/network-configuration/how-tos/okta/index.md). |
| Scope   optional | Sets the list of the requested [scopes](https://auth0.com/docs/scopes/openid-connect-scopes). |

##### Example

The following example configures an __OAuth__-based authentication provider identified as _OAuthContoso_Washington_ in the configuration file.

It will be displayed as _Contoso OAuth Washington_ in the UI external login prompt, and uniquely identified within Usercube by the authentication scheme _contoso_0987_.

_Usercube Server_ marks received claims using _[https://accounts.google.com](https://accounts.google.com)_ as a claim issuer identifier.

```/signin-oauth``` has been chosen as __CallbackPath__ and set up as such in the OAuth provider's portal during Usercube's registration.

                    ```

\{
    "Authentication":
    \{
        ...
        "OAuth": \{
            "Enabled": "True",
            "OAuthContoso_Washington": \{
                "AuthenticationScheme": "AzureOAuth",
                "DisplayName": "Connection Microsoft Entra ID with OAuth protocol",
                "ClientId": "6779ef20e75817b79602",
                "ClientSecret": "5ef0234c039c725e21ffc727a60c44895a39dce1c81ae36dc5d002feae82c1c0 ",
                "ClaimsIssuer": "https://accounts.google.com",
                "AuthorizationEndpoint": "https://accounts.google.com/o/oauth2/v2/auth",
                "TokenEndpoint": "https://oauth2.googleapis.com/token",
                "CallbackPath": "/signin-oauth",
                "Scopes": ["openid", "profile"]
            \}
        \}
    \}
\}

````

## Set Up a WS-Federation Provider

One or several **WS-Federation** authentication providers can be set up under the
`authentication > WsFederation` subsection. Examples of **WS-Federation** providers include _Active
Directory Federation Services (ADFS)_ and _Microsoft Entra ID (AAD)_.

### Overview

#### Multiple providers

One or several **WS-Federation** authentication providers can be set up.

#### Registration process

Using a **WS-Federation** authentication requires _Usercube Server_ to be registered to the
provider. A **Wtrealm** value is set up during the registration process. The value can be generated
by the provider, or set manually as a URL-shaped string value. This allows Usercube to identify
itself to the authentication provider. Here are two examples of registration process:

- with an
  [Active Directory Federation Services](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#active-directory-federation-services)
  provider
- with an
  [Microsoft Entra ID](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#microsoft-entra-id)
  provider

#### Callback URL

The target **WS-Federation** provider needs to be aware of the URI where to send the authentication
token if the authentication succeeds. Depending on the provider, it is called a **callback URL**, a
**callback path**, an **authorization callback URL**, or a **redirect URI**.

During the registration process, the provider will ask for the URL.

Usercube's **callback URL** for **WS-Federation** is `<usercube-server-address>/signin-wsfed` where
`<usercube-server-address>` is the address of your _Usercube Server_ such as
`https://identitymanager.contoso.com`.

#### Encryption algorithm

The nature of the encryption algorithm used for exchanging the sign-in key with the provider is
automatically negotiated between _Usercube Server_ and the authentication server. The most secure
algorithm that both systems support is chosen.

### Configuration

First, the **WS-Federation** must be enabled under the `authentication > WsFederation` section:

| Name             | Details                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------ |
| Enabled required | **Type** Boolean **Description** Enables or disables the **WS-Federation** authentication. |

Then, users must create a new subsection per **WS-Federation** provider. They are free to choose any
section name. Its sole purpose is for users to find the authentication method in the configuration
files.

Each section is configured with the following settings:

| Name                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MetadataAddress required      | Identifies, for Usercube, the target **WS-Federation** server's metadata. This information is to be retrieved from the app registration process or directly from the **WS-Federation** provider. The value commonly ends with the path `/FederationMetadata/2007-06/FederationMetadata.xml`. - For [Active Directory Federation Services](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#active-directory-federation-services), it is `https://<ADFS_SERVER>/federationmetadata/2007-06/federationmetadata.xml` with `<ADFS_SERVER>` the name of your ADFS server such `portal.contoso.com`. - For [Microsoft Entra ID](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#microsoft-entra-id), it is also known as **Federation Metadata Document**. It is available in Usercube's registered app _blade_, in the _endpoint_ panel, _Federation Metadata Document_ value. It looks like `https://bbd35166-7c13-49f3-8041-9551f2847b69/FederationMetadata/2007-06/FederationMetadata.xml` with `bbd35166-7c13-49f3-8041-9551f2847b69` Microsoft Entra ID tenant id.                                                                                                                                                                                                         |
| Wtrealm required              | Identifies the Usercube app within the **WS-Federation** provider. This information is available directly at the authentication provider's portal. It is chosen during the registration process. - For [Active Directory Federation Services](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#active-directory-federation-services), it is the value set as the `relying party WS-Federation Passive protocol URL` parameter during the [registration](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#registration) of Usercube to the ADFS server. It usually looks like an URL such as `https://portal.contoso.com`. - For [Microsoft Entra ID](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#microsoft-entra-id), this is the **Application ID URI**. It is available from _Usercube's registered app blade_ > _Expose an API_ > _APP ID URI_. It has been either chosen by the user or generated by the [Microsoft Entra ID](https://docs.microsoft.com/en-us/aspnet/core/security/authentication/ws-federation?view=aspnetcore-5.0#microsoft-entra-id) provider during the _Expose an API > set > save_ step of the registration. Generated values look like `api://bbd35166-7c13-49f3-8041-9551f2847b69`. |
| DisplayName optional          | Is the provider display name. Chosen by the user, it is used in the UI to identify the authentication method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| AuthenticationScheme required | Is the unique identifier of this authentication method within Usercube. Any string value can be used, unique among all authentication methods.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Example

This example configures a **WS-Federation**-based authentication provider identified as
_WsFederationContoso_LA_ in the configuration file.

Within Usercube, it will be identified with the authentication scheme _WsFederationAAD_.

It will be displayed as _Connection Microsoft Entra ID with WS-Federation protocol_ in the UI
external login prompt.

                    ```

\{ "Authentication": \{ ... "WsFederation": \{ "Enabled": "True", "WsFederationContoso_LA": \{
"AuthenticationScheme": "WsFederationAAD", "DisplayName": "Connection Microsoft Entra ID with
WS-Federation protocol", "MetadataAddress":
"https://bbd35166-7c13-49f3-8041-9551f2847b69/FederationMetadata/2007-06/FederationMetadata.xml",
"Wtrealm": "api://bbd35166-7c13-49f3-8041-9551f2847b69" \} \} \} \}

````


## Set Up SAML2 Authentication

One or several __SAML2__ authentication providers can be set up under the ```authentication > SAML2``` section.

Usercube does not provide a signature for SAML2 authentication.

### __Overview__

#### Multiple providers

One or several __SAML2__ authentication providers can be set up.

#### Registration process

Using a __SAML2__ authentication requires _Usercube Server_ to be registered to the provider. An __Entity ID URI__ value is set up for Usercube during the registration process. It is used as the prefix for scopes and as the value of the audience claim in access tokens. The value can be generated by the provider, or set manually as a URL-shaped string value. This allows Usercube to identify itself to the authentication provider.

#### Reply URL

The target __SAML2__ provider needs to be aware of the URI where to send the authentication token if the authentication succeeds. This URI is called __Reply URL__ or __Assertion Consumer Service (ACS) URL__.

During the registration process, the provider will ask for the URL.

Usercube's __Reply URL__ for __SAML2__ is ```<usercube-server-address>/Saml2/Acs``` where ```<usercube-server-address>``` is the address of your _Usercube Server_ such as ```https://identitymanager.contoso.com```.

Make sure to enter this exact URL which is treated case sensitively.

### __Configuration__

First, the __SAML2__ method must be enabled under the ```authentication > SAML2``` section.

| Name | Details |
| --- | --- |
| Enabled   required | __Type__    Boolean   __Description__ Enables or disables SAML2 Authentication. |

Then, users must create a new subsection per __SAML2__ provider. Users are free to choose any section name. Its sole purpose is for users to find the authentication method in the configuration files.

Each section is configured with the following settings:

| Name | Details |
| --- | --- |
| MetaDataLocation   required | Identifies, for Usercube, the target __SAML2__ server's metadata. This information is to be retrieved from the app registration process or directly from the __SAML2__ provider. The value commonly ends with the path ```/FederationMetadata/2007-06/FederationMetadata.xml```. |
| IdentityProviderEntityID   required | Is the __Identity Provider__ Issuer (also known as provider __Entity ID__) that identifies the provider to Usercube. This information is to be retrieved from the provider's portal. For _Microsoft Entra ID_, it is the first line of metadata file. |
| DisplayName   optional | Is the provider display name. Chosen by the user, it is used in the UI to identify the authentication method. |
| EntityIdAppliUriID   required | Is Usercube's __Entity ID__ issued during the registration process. Also referred to as an __Identifier URI__. For _Microsoft Entra ID_, it is set during the _Expose an API > set > save_ step of the registration. Generated values look like ```api://bbd35166-7c13-49f3-8041-9551f2847b69```. |
| NameIdFormat   optional | Is the requested format of the subject's name identifier. |
| MinIncomingSigningAlgorithm   optional | Is minimal signing algorithm to validate SAML2 response. |
| EncryptionCertificate   optional | __Type__    [EncryptionCertificate]    __Description__ Sets the location of the public key certificate and the private key used to handle input and output files encryption.   __Note:__ required to enable logout. |
> This example configures a SAML2-based authentication provider identified as _SAMLConnection_ in the configuration file.
>
> It will be displayed as _Connection Azure ActiveDirectory with SAML2 protocol_ in the UI external login prompt.
>
>                         ```
>
> \{
>     "Authentication":
>     \{
>         ...
>         "SAML2": \{
>             "Enabled": true,
>             "SAMLConnection": \{
>                 "DisplayName": "Connection Microsoft Entra ID with SAML2 protocol",
>                 "EntityIdAppliUriID": "api://\{client-id\}",
>                 "MetaDataLocation": "https://login.microsoftonline.com/\{tenant-id\}/federationmetadata/2007-06/federationmetadata.xml",
>                 "IdentityProviderEntityID": "https://sts.windows.net/\{tenant-id\}/",
>                 "EncryptionCertificate": \{
>                 ...
>                 \}
>             \}
>         \}
>     \}
> \}
>
> ```

### EncryptionCertificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files) or ```.pfx``` file) stored in the _Agent_'s host file system. The archive contains both the public key certificate and the private key.
- As a certificate from a Windows' [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store) identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains both the public key certificate and the private key.

  NETWRIX recommends using Windows' certificate store.

  On the other hand, the PFX file takes priority over Windows' certificate, which means that when ```File``` is specified then the PFX certificate is used, even if the options for Windows' certificate are specified too.

  In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

#### As a PFX file

> For example:
>
>                         ```
>
> \{
>     ...
>     "EncryptionCertificate": \{
>         "File": "C:/identitymanagerAgentContoso/contoso.pfx",
>         "Password": "oarjr6r9f00"
>      \}
>  \}
>
> ```

The archive is set using the following attributes:

| Name | Details |
| --- | --- |
| File   required | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password   optional | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. |

Storing a ```.pfx``` file password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [Usercube-Protect-CertificatePassword tool](/docs/identitymanager/6.1/integration-guide/executables/references/protect-certificatepassword/index.md).

The archive is set using the following attributes:

| Name | Details |
| --- | --- |
| File   required | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password   optional | __Type__    String   __Description__ [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.   __Info:__ storing a ```.pfx``` file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [```Usercube-Protect-CertificatePassword.exe``` tool](/docs/identitymanager/6.1/integration-guide/executables/references/protect-certificatepassword/index.md). |

#### As a Certificate in the Windows Store

> For example:
>
>                         ```
>
>  \{
>     ...
>     "EncryptionCertificate": \{
>          "DistinguishedName":"UsercubeContoso",
>          "StoreLocation": "LocalMachine",
>          "StoreName": "AuthRoot"
>      \}
>  \}
>
> ```

The Windows certificate is set using these attributes:

| Name | Details |
| --- | --- |
| DistinguishedName   optional | __Type__    String   __Description__ _SubjectDistinguishedName_ of the store certificate.   __Note:__ required when ```Thumbprint``` is not specified. |
| Thumbprint   optional | __Type__    String   __Description__ _Thumbprint_ of the store certificate.   __Note:__ required when ```DistinguishedName``` is not specified. |
| StoreLocation   required | __Type__    String   __Description__ Location of the relevant Windows certificate store: ```LocalMachine``` or ```CurrentUser```. |
| StoreName   required | __Type__    String   __Description__ Name of the relevant Windows certificate store. |

#### Using Azure Key Vault

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the [Vault connection](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md).

                    ```

"EncryptionCertificate": \{
    "CertificateAzureKeyVault": "`<CertificateIdentifier>`"
\}

````

## Set Up Internal Methods

When _Internal Methods_ is enabled, the end-user is prompted via a _form_ to input a login and a
password. The login to be used is defined within the
[applicative configuration's SelectUserByIdentityQueryHandlerSetting element](/docs/identitymanager/6.1/integration-guide/network-configuration/settings/index.md#selectuserbyidentityqueryhandler).

First, the `AllowLocalLogin` parameter needs to be set to `true` in the `Authentication` section.

```json
"Authentication": {
    "AllowLocalLogin":true
}
```

Then, _Active Directory User Store_ or _Test User Store_ can be enabled.

### Active Directory User Store

The Active Directory User Store allows users to authenticate with a login and password that will be
compared against the Active Directory content.

Several forests can be set up as identity providers for authentication. This allows, for example,
the authentication of users that belong to different Active Directory forests.

It is configured under the `Authentication > ActiveDirectoryUserStore` section.

First, the `ActiveDirectoryUserStore` must be enabled.

                    ```

"Authentication":{ "AllowLocalLogin":true, "ActiveDirectoryUserStore": { "Enabled": true ... } }

````

| Name | Details |
| --- | --- |
| Enabled   required | __Type__    Boolean   __Description__    ```True``` to enable authentication via the Active Directory User Store. |

In the same section, several authentication providers can be defined, each one based on an Active Directory forest.

For each forest, a new section is added under ```ActiveDirectoryUserStore```. Any name may be chosen for the forest section as long as it is unique. Two forest sections can't be identical though.

                    ```

"ActiveDirectoryUserStore": {
    "Enabled": true,
    "Forest1": {
        "AuthenticationScheme": "...",
        "Server": "...",
        ...
    }
}

````

Under the new forest section, the following parameters are used to configure the authentication
method.

> The following example sets a single authentication method, based on the `Forest1` forest. The
> domain controller is located at `127.168.0.1`. If the user enters the login `MyLogin`, the
> resulting logon will be `CONTOSO\paris\MyLogin`. The `Postfix` won't be used as a `Prefix` is
> already provided.
>
>                         ```
>
> "ActiveDirectoryUserStore": { "Enabled": true, "Forest1": { "AuthenticationScheme":
> "ADUserStore_Forest1", "Server": "127.168.0.1", "Domain": "CONTOSO", "Prefix": "paris", "Postfix":
> "usercube.contoso" } }
>
> ````
>
>
> In the following example, if the user enters the login ```MyLogin```, the resulting logon will be ```MyLogin@usercube.contoso```.
>
>                         ```
>
> "ActiveDirectoryUserStore": {
>   "Enabled": true,
>   "Forest1": {
>       "AuthenticationScheme": "ADUserStore_Forest1",
>       "Server": "127.168.0.1",
>       "Postfix": "usercube.contoso"
>   }
> }
>
> ````
>
> The following example enables authentication via the Active Directory User Store, for the
> `Forest1` forest,by checking not only the password and account activation, but also whether the
> password is expired.
>
>                         ```
>
> "ActiveDirectoryUserStore": { "Enabled": true, "Forest1": { "AuthenticationScheme":
> "ADUserStore_Forest1", "Server": "127.168.0.1", "Domain": "CONTOSO", "FastBind": false ... } }
>
> ```
>
> ```

| Name                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AuthenticationScheme required | Unique identifier of this authentication method within Usercube. Any string value can be used, unique among all authentication methods.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Server required               | Identification of the domain controller that runs the Active Directory Domain Service against which the authentication is performed. Based on [Microsoft's documentation](https://docs.microsoft.com/en-us/dotnet/api/system.directoryservices.protocols.ldapconnection?view=dotnet-plat-ext-8.0), the format is defined either: - by a domain name - by an LDAP server name - or a dotted string representing the IP address of the LDAP server/Domain Controller (_example_: `98.20.33.2`). Optionally, this parameter may also include a port number, separated from the host by a colon (_example_: `98.20.33.2:4520`). |
| Domain optional               | Identification of the Active Directory domain or sub-domain against which the authentication will be performed. It is a string used to complete the user's logon in an INet name fashion. The resulting logon will resemble `Domain\login`. The domain is used only if no postfix was provided. This parameter is ignored if the domain or the UPN suffix is already specified in the login. This is the case for a login that conforms to the format `domain\login` or `login@domain.com`.                                                                                                                                 |
| FastBind default value: True  | **Type** Boolean **Description** `True` to check a user's credentials by verifying only the password and account activation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| NoSigning default value: true | **Type** Boolean **Description** Enables or disables [Kerberos encryption](https://en.wikipedia.org/wiki/Kerberos_(protocol)).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Prefix optional               | Is a string used to complete the user's logon in an INet name fashion. The resulting logon will resemble `Prefix\login`. The **Postfix** isn't used if the domain or the UPN suffix is already specified in the login.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Postfix optional              | Is used to complete the user's login in a principal name fashion. The **Postfix** corresponds to the User Principal Name (UPN) suffix. The resulting logon will resemble `login@Postfix`. The **Postfix** isn't used if the domain or the UPN suffix is already specified in the login, or if the **Prefix** is already provided.                                                                                                                                                                                                                                                                                           |
| Ssl default value: false      | **Type** Boolean **Description** Enables or disables SSL for network communication between Usercube and the Active Directory.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Test User Store

A _Test User Store_ can be set up under the `authentication > TestUserStore` section. It allows all
users to authenticate with their login and the same password.

This should never be used in a production environment.

The following parameters are available under the `authentication > TestUserStore` section:

| Name              | Details                                                                     |
| ----------------- | --------------------------------------------------------------------------- |
| Enabled required  | **Type** Boolean **Description** Enables or disables the OpenId Connection. |
| Password required | Is the password for all users to authenticate Usercube.                     |

#### Example

                    ```

\{ "Authentication": \{ "AllowLocalLogin":true ... "TestUserStore": \{ "Enabled": true, "Password":
"secret" \} \} \}

Here is an example using both `IdentityServer` and `Authentication` sections.

appsettings.json \{ ... "IdentityServer": \{ "X509KeyFilePath": "./identitymanagerContoso.pfx",
"X509KeyFilePassword": "secret" \}, "Authentication": \{ "RequireHttpsMetadata": false,
"TestUserStore": \{ "Enabled": "true", "Password": "secret" \}, "AllowLocalLogin": true \} ... \}

```

```
