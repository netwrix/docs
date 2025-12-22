---
title: "5.1.0 to 5.1.1"
description: "5.1.0 to 5.1.1"
sidebar_position: 40
---

# 5.1.0 to 5.1.1

## Migrate Server Settings

#### TestUserStore And LocalLogin

The sections `TestUserStore` and `AllowLocalLogin` are moved from IdentityServer to Authentication.

Old Settings:

                    ```

"IdentityServer": { "AllowLocalLogin": true, "TestUserStore": { "Enabled": "true", "Password":
"secret" }

````


New Settings:

                    ```

  "Authentication": {
    "AllowLocalLogin": true,
    "TestUserStore": {
      "Enabled": "true",
      "Password": "secret"
    }

````

#### External Loggin

All ExternalLogin are modified and now use a list of elements:

#### [WsFed](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md) Authentication

Old Settings:

                    ```

"WsFederation": { "Enabled": "True", "MetadataAddress":
"https:///FederationMetadata/2007-06/FederationMetadata.xml", "Wtrealm": "https://localhost:44307/"
}

````


New Settings:

                    ```

  "WsFederation": {
    "Enabled": "True",
    "WsFederation1": {
        "AuthenticationScheme": "WsFederation scheme 1",
        "DisplayName": "Active Directory displayName",
        "MetadataAddress": "https:///FederationMetadata/2007-06/FederationMetadata.xml",
        "Wtrealm": "https://localhost:44307/"
        }
    }

````

#### [OpenId](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md) Authentication

Old Settings:

                    ```

"OpenId": { "Enabled": "True", "ClientId": "clientID", "ClientSecret": "secret", "Authority":
"https://login.microsoftonline.com/" }

````


New Settings:

                    ```

  "OpenId": {
    "Enabled": "True",
    "OpenId1": {
        "AuthenticationScheme": "AzureAD",
        "DisplayName": "Microsoft Entra ID Connection",
        "ClientId": "clientID",
        "ClientSecret": "secret",
        "Authority": "https://login.microsoftonline.com/"
        }
    }

````

#### [Active Directory](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md) Authentication

Old Settings:

                    ```

"ActiveDirectoryUserStore": { "Enabled": true, "Server": "ServerUri", "Domain": "DomainName",
"Prefix": "Prefix", "Postfix": "Postfix" }

````


New Settings:

                    ```

"ActiveDirectoryUserStore": {
    "Enabled": true,
    "Forest1": {
      "Server": "ServerUri",
      "Domain": "DomainName",
      "Prefix": "Prefix",
      "Postfix": "Postfix"
    }
  }

````

#### [Optional Settings](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md)

**All working directories are optional in 5.1.1**

## Agent Settings

#### [Optional Settings](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)

**All working directories are optional in 5.1.1**

## [Logger Settings](/docs/identitymanager/6.1/integration-guide/monitoring/index.md)

In server/Agent and logger Setting the configuration are changes.

Old Settings:

                    ```

"Logging": { "IncludeScopes": false, "LogLevel": { "Default": "Error", "Usercube": "Information" },
"Serilog": { "WriteTo": [{ "Name": "Console" }] } }

````


New Settings:

                    ```

  "Serilog": {
    "WriteToConsole": true,
    "MinimumLevel": {
      "Default": "Error",
      "Override": {
        "Usercube": "Information"
      }
    }
  }

````
