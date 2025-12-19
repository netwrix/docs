---
title: "Application Settings"
description: "Application Settings"
sidebar_position: 10
---

# Application Settings

This section describes the settings available in the agent's appsettings.json file, located in the
agent's working directory or in environment variables.

:::note
JSON files can contain any additional information that you might find useful. See the
example below.
:::


Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

For example, in order to store the agent's address, we can add:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
"UsercubeAgent": {
  "Url": "<http://localhost:1234>"
}
```

As Identity Manager does not know any object named Identity Manager Agent, its content will be
ignored, but it can still be used to store information for human use.

The appsettings set allows the following attributes and sections:

| Name                                                                  | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ApplicationUri (required)                                             | Uri                   | Server's listening URI. Used by the agent to send requests to the server. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {  "ApplicationUri": "   <https://identitymanagerserver.contoso.com:5000>"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Jobs (optional)                                                       | Job                   | Settings to configure all jobs with common values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Scheduler (optional)                                                  | Scheduler             | Settings to configure Identity Manager's scheduler.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| TaskTimeoutSupplement default value: 0                                | Int32                 | Additional time (in minutes) for the Invoke-Job tool's Timeout property. Example: `appsettings.json   {       "TaskTimeoutSupplement": 10   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| InstallationDirectoryPath default value: Usercube-agent.exe directory | String                | Path of the installation directory. It is used to read other configuration files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| EncryptionCertificate (required)                                      | EncryptionCertificate | Settings to configure the encryption of specific files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| IdentityServer (required)                                             | IdentityServer        | Settings to configure the agent's encrypted network communication, for example with the server or a browser.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Authentication (required)                                             | Authentication        | Settings to configure end-user authentication, for example for users to launch a job from the UI.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Serilog (optional)                                                    | Logger setting        | Settings to configure the logging service, complying to the Logger properties and structure. See the [Monitoring](/docs/identitymanager/6.2/integration-guide/monitoring/index.md) topic for additional information. Example: `appsettings.json   {     "Serilog": {       "WriteTo": ["Console"],       "MinimumLevel": {         "Default": "Error",         "Override": {           "Usercube": "Information"           }         }       }   }                           `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Cors (optional)                                                       | Cors                  | Settings to configure the agent's [CORS policy](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS), which is useful when using non-integrated agents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ApplicationInsights (optional)                                        | ApplicationInsights   | Settings to plug to and configure the [AppInsights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) monitoring tool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| TempFolderPath (optional)                                             | String                | Path to the temporary folder which contains: - ExportOutput: directory storing data exported from connectors. - JobLogs: directory storing task instance logs. - Reports: directory storing generated reports. - Packages: directory storing the downloaded package logos. - PolicySimulations: directory storing the files generated by policy simulations. - ProvisioningCache.txt: file storing the clustered provisioning cache. When enabled, this file can be used to coordinate the API cache among clusters. - CorrelationCache.txt - RiskCache.txt - ExpressionCache.txt - scheduler.lock - connector.txt - container.reset.txt: file acting as a reset command for Identity Manager's server, i.e. any change to this file triggers the reset service, thus reloading all the services instantiated by the server. Note that this path can be overridden by **ResetSettings** > **FilepathResetService**. - Mails: directory storing the email messages. Note that this path can be overridden by **ResetSettings** > **PickupDirectory**. - Deployment these elements can be removed, but make sure to restart the server after doing so. Example: `appsettings.json   {     "TempFolderPath": "../Temp"   }` |
| WorkFolderPath (optional)                                             | String                | Path of the work folder which contains: - Collect: directory storing the CSV source files exported by connectors. - ProvisioningOrders: directory storing the orders generated by the server. - FulfillPowerShell: PowerShell provisioner's working directory. - FulfillRobotFramework: Robot Framework's provisioner working directory. - ExportCookies: directory storing the cookies used for incremental export. - Synchronization: directory storing the agent's data collection results. - Upload: directory storing the uploaded media like uploaded pictures, before they are inserted into the database. - appsettings.connection.json These elements must not be removed, because doing so may disrupt Identity Manager's execution after restarting. Example: `appsettings.json   {     "WorkFolderPath": "../Work"   }`                                                                                                                                                                                                                                                                                                                                                                                      |
| JobLaunchTimeout default value: 7500                                  | String                | Time period (in milliseconds) after which, if a launched job has not started, it is considered in error. Example: `appsettings.json   {     "JobLaunchTimeout": 9000   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| InvokeSqlCommands default value: null                                 | String                | List of parameter sets used to override InvokeSqlCommandTasks' SQLInputFile and OutputPath parameters from the XML configuration. See the [Invoke Sql Command Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/invokesqlcommandtask/index.md) topic for additional information. For each task to override, the key must be the task's identifier. Example: `appsettings.json    {          "InvokeSqlCommands": {           "InvokeSqlCommandTask_Identifier": {             "SQLInputFile": "YourInputFilePath",             "OutputPath": "YourOutputFilePath"  },           }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Jobs

Below is an example of job that can be executed by the agent.

For example:

```
appsettings.json
{
  ...
  "Jobs": {
    "MaxTaskBatchSize": "2"
  }
}
```

| Name                              | Type  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaxTaskBatchSize default value: 5 | Int64 | Maximum number of tasks that can be launched simultaneously, thus avoiding timeout issues. When executing a job, Identity Manager launches simultaneously the tasks of a same Level. See the [Job](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/job/index.md) topic for additional information. If the number of same-level tasks exceeds MaxTaskBatchSize, then Identity Manager inserts new levels. These effective levels can be seen in the job's logs or with the Usercube-Get-JobSteps executable. See the [Usercube-Get-JobSteps](/docs/identitymanager/6.2/integration-guide/executables/references/get-jobsteps/index.md) topic for additional information. |

## Scheduler

Below is an example of scheduling and a list of attributes.

For example:

```
appsettings.json
{
  ...
  "Scheduler": {
    "Enabled": "true",
    "MaxLockWatchTime": 3600
 }
}
```

| Name                                 | Type    | Description                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled (optional)                   | Boolean | True to activate Identity Manager's scheduler.                                                                                                                                                                                                                                                                                                      |
| MaxLockWatchTime default value: 1800 | Int32   | Time period (in seconds) to spend watching for the scheduler's lock file before launching it. When set to 0 the duration is infinite, and when set to a negative value the scheduler launch fails if the lock file already exists. This parameter prevents a failure if Identity Manager's scheduler has already been launched from another source. |

## Encryption Certificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
  (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or .pfx file) stored in the Agent's host file system. The archive contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains
  both the public key certificate and the private key.

    :::note
    Netwrix recommends using Windows' certificate store.
    :::


    On the other hand, the PFX file takes priority over Windows' certificate, which means that when
    File is specified then the PFX certificate is used, even if the options for Windows' certificate
    are specified too.  
     In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

**As a PFX file**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
{
    ...
    "EncryptionCertificate": {
        "File": "<C:/identitymanagerAgentContoso/contoso.pfx>",
        "Password": "<oarjr6r9f00>"
     }
 }

```

The archive is set using the following attributes:

| Name                | Type   | Description                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------- |
| File (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.                     |

:::note
Storing a .pfx file password in plain text in a production environment is strongly
discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword tool. See
the
[Usercube-Protect-CertificatePassword](/docs/identitymanager/6.2/integration-guide/executables/references/protect-certificatepassword/index.md)
topic for additional information.
:::


The archive is set using the following attributes:

| Name                | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system.                                                                                                                                                                                                                                                                                                                              |
| Password (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. storing a .pfx file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword.exe tool. See the[Usercube-Protect-CertificatePassword](/docs/identitymanager/6.2/integration-guide/executables/references/protect-certificatepassword/index.md) topic for additional information. |

**As a Certificate in the Windows Store**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
 {
    ...
    "EncryptionCertificate": {
         "DistinguishedName":"<UsercubeContoso>",
         "StoreLocation": "<LocalMachine>",
         "StoreName": "<AuthRoot>"
     }
 }

```

The Windows certificate is set using these attributes:

| Name                         | Type   | Details                                                                                             |
| ---------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| DistinguishedName (optional) | String | SubjectDistinguishedName of the store certificate. It is required when Thumbprint is not specified. |
| Thumbprint (optional)        | String | Thumbprint of the store certificate. It is required when DistinguishedName is not specified.        |
| StoreLocation (required)     | String | Location of the relevant Windows certificate store: LocalMachine or CurrentUser.                    |
| StoreName (required)         | String | Name of the relevant Windows certificate store.                                                     |

**Using Azure Key Vault**

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the
Vault connection. See the [Azure Key Vault](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md) topic for additional
information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

"<EncryptionCertificate>": {
    "CertificateAzureKeyVault": "<CertificateIdentifier>"
}
```

## Identity Server

Just like the Encryption Certificate, this information can be set one of two ways.

**As a PFX file**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
"<IdentityServer>": {
  "X509KeyFilePath": "<./identitymanager.pfx>",
  "X509KeyFilePassword": "<oarjr6r9f00>"
}
```

The archive is set using the following attributes:

| Name                           | Type   | Description                                                                                     |
| ------------------------------ | ------ | ----------------------------------------------------------------------------------------------- |
| X509KeyFilePath (required)     | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the agent's host file system. |
| X509KeyFilePassword (optional) | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.                             |

:::note
Storing a .pfx file password in plain text in a production environment is strongly
discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword tool. See
the
[Usercube-Protect-CertificatePassword](/docs/identitymanager/6.2/integration-guide/executables/references/protect-certificatepassword/index.md)
topic for additional information.
:::


**As a Certificate in the Windows Store**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.json
"<IdentityServer>": {
  "X509SubjectDistinguishedName":"<UsercubeContoso>",
  "X509StoreLocation": "<LocalMachine>",
  "X509StoreName": "<AuthRoot>"
}
```

The certificate is set using these attributes:

| Name                                    | Type   | Description                                                                                     |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| X509StoreLocation (required)            | String | Location of the relevant Windows certificate store: LocalMachine or CurrentUser.                |
| X509StoreName (required)                | String | Name of the relevant Windows certificate store.                                                 |
| X509SubjectDistinguishedName (optional) | String | SubjectDistinguishedName of the certificate. It is required when X509Thumbprint is not defined. |
| X509Thumbprint (optional)               | String | Thumbprint of the certificate. It is required when X509SubjectDistinguishedName is not defined. |

:::note
If you are using the certificate provided in the SDK, the agent will fail when launching.
You must create your own certificate.
:::


You can get the DistinguishedName of the certificate using OpenSSL:

```

openssl x509 -noout -in {certificate file name with full path} -subject

```

## Authentication

An example of authentication and a list of attributes.

```
appsettings.json
{
  ...
  "Authentication": {
    "Enabled": true,
    "RequireHttpsMetadata": true
  }
}
```

| Name                                     | Type    | Description                                            |
| ---------------------------------------- | ------- | ------------------------------------------------------ |
| Enabled default value: true              | Boolean | True to enable authentication.                         |
| RequireHttpsMetadata default value: true | Boolean | True to set HTTPS required for the discovery endpoint. |

## Cors

An example of cors and a list of attributes.

```
appsettings.json
{
  ...
  "Cors": {
    "AllowAnyHeader": true,
    "AllowAnyMethod": false,
    "AllowCredentials": true
  }
}
```

| Name                                  | Type    | Description                                                                                                                                                                                                                                                                           |
| ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AllowAnyHeader default value: false   | Boolean | True to enable the [Access-Control-Allow-Headers: \*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request).           |
| AllowAnyMethod default value: false   | Boolean | True to enable the [Access-Control-Allow-Methods: \*](https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request).              |
| AllowCredentials default value: false | Boolean | True to enable the [Access-Control-Allow-Credentials: true](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header in the agent's response to a [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/preflight_request). |

## Application Insights

Identity Manager supports the Application Insights integration. It means that you can monitor the
lifecycle of the application through a dedicated interface, which can be useful to measure
performance, observe how the application is used or detect performance anomalies.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

appsettings.json
{
  ...
  "ApplicationInsights": {
    "InstrumentationKey": "<AppInsights instance's key>"
  }
}
```

The application insights details are:

| Name                                   | Type   | Details                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InstrumentationKey default value: null | String | Key linked to the AppInsights instance to which the server's logs, requests, dependencies and performance are to be sent. See Microsoft's documentation to create an[ instrumentation key](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource). |

:::note
The logs sent to AppInsights are configured through the Logger properties. See the
[Monitoring](/docs/identitymanager/6.2/integration-guide/monitoring/index.md) topic for additional information.

:::
