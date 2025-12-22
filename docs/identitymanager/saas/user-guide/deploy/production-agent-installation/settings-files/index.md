---
title: "Configure the Agent's Settings"
description: "Configure the Agent's Settings"
sidebar_position: 10
---

# Configure the Agent's Settings

This guide shows how to configure the agent's application settings via the `web.config`,
`appsettings.json` and `appsettings.agent.json` files.

## Overview

Identity Manager provides JSON files to configure varied application settings, named appsettings
json and appsettings.agent.json. See the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
and
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
topics for additional information.

This page describes the optimal configuration of the production agent's application settings.

## Configure the Agent's Settings

Configure the agent's settings by proceeding as follows:

1. From the `Runtime/Agent` folder, copy the files `appsettings.json`, `appsettings.agent.json` and
   `web.config` and paste them in the `Runtime` folder, thus replacing the pre-existing ones.
2. Open `web.config` and make sure that, in the `aspNetCore` tag, the value of `arguments` is set to
   `./identitymanager-Agent.dll`.

    When needing to get the agent's logs, set also `stdoutLogEnabled` to `true`. See more details in
    [Microsoft's documentation](https://learn.microsoft.com/fr-fr/aspnet/core/host-and-deploy/iis/logging-and-diagnostics?view=aspnetcore-7.0).

    ```

**web.config**

     ...
     <aspNetCore processPath="dotnet" arguments="./identitymanager-Agent.dll" stdoutLogEnabled="true" stdoutLogFile="../Temp/stdout-server.log" hostingModel="inprocess">     ...
     </aspNetCore> ...

    ```

3. Open `appsettings.json` and make sure that:

    - **License** contains a valid license;
    - **IdentityServer** contains the encryption certificate's path and password provided by Netwrix
      Identity Manager (formerly Usercube) team, in order to secure agent/server identification;

        For example (in `appsettings.json`):

        ```json
        "IdentityServer": {
          "X509KeyFilePath": "./identitymanager.pfx",
          "X509KeyFilePassword": "secret"
        }
        ```

    - you get an encryption certificate which will be used to encrypt specific files such as logs or
      temporary files, and that **EncryptionCertificate** contains its path and password;

        For example (in `appsettings.json`):

        ```json
        "EncryptionCertificate": {
          "File": "./identitymanager-Files.pfx",
          "Password": "secret",
          "EncryptFile": true
        }
        ```

        **EncryptFile** can stay set to `false` while verifying the agent installation, but for
        security reasons it must be set to `true` afterwards.

        If the certificates' passwords contain `@`, then they must be escaped via the `@` as first
        character of the strings.

    - **ApplicationUri** contains the server's address, provided by Netwrix Identity Manager
      (formerly Usercube) team when working in a SaaS environment;

        For example (in `appsettings.json`):

        ```json
        "ApplicationUri": "http://localhost:5000"
        ```

        Do not write a `/` character at the end of the string.

    - **Cors** > **AllowAnyHeader**, **AllowAnyMethod** and **AllowCredentials** are set to `true`;

        For example (in `appsettings.json`):

        ```json
        "Cors": {
            "AllowAnyHeader": "true",
            "AllowAnyMethod": "true",
            "AllowCredentials": "true"
        }
        ```

4. Open `appsettings.agent.json` and make sure that:

    - **OpenId** > **AgentIdentifier** specifies the agent's name which must match the XML
      configuration. See the
      [appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
      topic for additional information..

        For example (in `appsettings.agent.json`):

        ```json
        "OpenId": {
          "AgentIdentifier": "MyAgent"
        }
        ```

        With the following configuration:

        For example (in XML):

        ```xml
        <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />
        ```

    - **OpenId** > **OpenIdClients** > **Job** contains the non-hashed value of the password of
      "Job-Remote" provided by NETWRIX' team

        For example (in `appsettings.agent.json`):

        ```json
        "OpenId": {
          "AgentIdentifier": "MyAgent",
          "OpenIdClients": {
              "Job": "secret"
          }
        }
        ```

        and add the hashed value of this password to the `OpenIdClient` named `Job` from the XML
        configuration;

        For example (in XML):

        ```xml
        <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ConsolidationMode="Merge" />
        ```

    - **OpenId** > **DefaultOpenIdClient** is set to `Job`;

        For example (in `appsettings.agent.json`):

        ```json
        "OpenId": {
          "AgentIdentifier": "MyAgent",
          "OpenIdClients": {
              "Job": "secret"
          },
          "DefaultOpenIdClient": "Job"
        }
        ```

    - **PasswordResetSettings** > **TwoFactorSettings** > **ApplicationUri** contains the server's
      address, provided by NETWRIX' team when working in a SaaS environment;

        For example (in `appsettings.agent.json`):

        ```json
        "PasswordResetSettings": {
          "TwoFactorSettings": {
              "ApplicationUri": "http://localhost:5000"
          }
        }
        ```

    - **PasswordResetSettings** > **EncryptionCertificate** contains contains the path and password
      of the certificate used to secure password tokens;

        For example (in `appsettings.agent.json`):

        ```json
        "PasswordResetSettings": {
          "TwoFactorSettings": {
              "ApplicationUri": "http://localhost:5000"
          },
          "EncryptionCertificate": {
              "File": "../identitymanager.pfx",
              "Password": "secret"
          }
        }
        ```

    - **PasswordResetSettings** > **MailSettings** > **PickupDirectory** is set to the `Mails`
      folder and **FromAddress** to `no-reply@<organization>.com`;

        For example (in `appsettings.agent.json`):

        ```json
        "PasswordResetSettings": {
          "TwoFactorSettings": {
              "ApplicationUri": "http://localhost:5000"
          },
          "EncryptionCertificate": {
              "File": "../identitymanager.pfx",
              "Password": "secret"
          },
          "MailSettings": {
              "PickupDirectory": "../Mails",
              "FromAddress": "no-reply@contoso.com"
          }
        }
        ```

    - **SourcesRootPaths** contains the path to the `Sources` folder.

        For example (in `appsettings.agent.json`):

        ```json
        "SourcesRootPaths": [
          "C:/identitymanager/Sources"
        ]
        ```

## Next Steps

To continue,see the local server to
[Install IIS via Server Manager](/docs/identitymanager/saas/user-guide/deploy/production-agent-installation/iis-installation/index.md).
