---
title: "Server Configuration"
description: "Server Configuration"
sidebar_position: 10
---

# Server Configuration

Usercube Server's technical configuration includes settings on end-user authentication, database
connection and some general-purpose settings.

## Configuration Files

The Server configuration is included in the Server's appsettings set.

The appsettings set content can be written to appsettings.json in the Server's working directory or
to environment variables. See the
[Architecture](/docs/identitymanager/6.1/integration-guide/architecture/index.md)
topic for additional information.

The server appsettings supported attributes and sections are described in the following sections:

- Database Connection
- End-User Authentication
- General-Purpose Settings

See
the[Connection to the Database](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/database-connection/index.md),
[End-User Authentication](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md)
and
[Application Settings](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md)
topics for additional information.

## Secret and Certificate Management

All the certificates and secrets present in the settings can be loaded with an Azure Key Vault.

See the
[Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
topic for additional information.

## Default Configuration

The default behavior of the server configuration is outlined through an example.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

{
    "IdentityServer": {
        // Token signing certificate stored in a file
        "X509KeyFilePath": "<./identitymanagerContoso.pfx>",
        // Optional certificate password
        "X509KeyFilePassword": "<secret>"
    },
    "Authentication": {
        "RequireHttpsMetadata": false,
        "TestUserStore": {
            "Enabled": "<true>",
            "Password": "<secret>"
        },
        "AllowLocalLogin": true
    }
}

```
