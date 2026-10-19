---
title: "Application Settings"
description: "Application Settings"
sidebar_position: 10
---

# Application Settings

This section describes the settings available in the server's appsettings.json file, located in the server's working directory or in environment variables.

JSON files can contain any additional information that you might find useful. See the example below.

For example, in order to store the agent's address, we can add:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json
"<UsercubeAgent>": {
  "Url": "<http://localhost:1234>"
}
```

As Identity Manager does not know any object named Identity Manager Agent, its content will be ignored, but it can still be used to store information for human use.

The appsettings set allows the following attributes and sections:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | ApplicationUri required | String | URI of the server to use in log messages, to communicate with the server in tasks, to allow certain redirect URIs. It must be the same as the agent's appsettings.json's ApplicationUri. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …         "ApplicationUri": "usercubeserver.contoso.com:5000"   }` | 
 | EncryptionCertificate required | EncryptionCertificate | Settings to configure the encryption of specific files. | 
 | License | String | License key of the server. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …         "License": "{"LicensedTo":"<Demo>","ValidTo":"<20120905>","IdentityQuota":"<10000>","Signature":"<…>"}"   }` | 
 | Agents optional | Agent List | List of agents' settings used to work on several environments. See the [Architecture](../../../integration-guide/architecture) topic for additional information. This way, each Agent's URI/URL is configured without altering the database. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …         "Agents": {               "Local": {                     "Uri": "<http://localhost:5010>"               },               …         }   }` | 
 | AppDisplay optional | AppDisplay | Settings to override the application display XML configuration. See the [App Display Setting](../../../integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting) topic for additional information. It is useful to change the application's theme and name without redeploying the whole configuration. | 
 | ApplicationInsights optional | ApplicationInsights | Settings to plug to and configure the [App Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) monitoring tool. | 
 | DataProtection optional | DataProtection | Settings to configure the encryption used for the authentication cookies and the anti-forgery tokens. The data protection can be configured to share the keys between several instances of Identity Manager's server, for example when deployed in a cluster where the servers do not have the same machine id. | 
 | DefaultPageSize optional | UInt | Default number of items returned when using squeries, if none specified in PageSize or in squery limit. | 
 | HstsPreload optionalAttribute default value: false | Boolean | Sets the preload parameter of the Strict-Transport-Security header. Preload is not part of the RFC specification, but is supported by web browsers to preload [HSTS](https://hstspreload.org/) sites on fresh install. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `<pre class="json"><code>*appsettings.json*<br /><br />{<br />  ...<br />  "HstsPreload":  true<br />}</code></pre> ` | 
 | InstallationDirectoryPath default value: Usercube-Server.exe | String | Path of the installation directory. It is used to read other configuration files. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …        "InstallationDirectoryPath":    "<C://identitymanagerContoso/Runtime>"   }` | 
 | MailSettings optional | String | Settings to configure the email service. | 
 | MaxActors default value: 20 maximum value: 50 | UInt | The maximum number of recipients who will be notified of the Workflow changes and can take action. If the number of recipients is exceeding the MaxRecipients value, then the actors will have the task assigned to them but they will not receive an email notification. In order for all actors to receive an email notification the MaxRecipients should be increased as well. | 
 | MaxPageSize optionalAttribute | UInt | It represents the maximum number of items returned when using squeries. |
 | MaxRamPercentageRoleMining optional | UInt | **On-premises installations only.** Limits memory usage for role mining operations as a percentage of available RAM (0-100). Identity Manager always estimates memory requirements before executing role mining. When this setting is greater than 0, operations are prevented if the estimated memory exceeds the specified percentage of available RAM. When not set or set to 0, no percentage-based limit is applied, though operations are still prevented if they would require more memory than total system RAM. Use this setting to prevent role mining from consuming excessive memory on shared servers. Example: `appsettings.json   {         …         "MaxRamPercentageRoleMining": 75   }` See the [Role Mining](../../../integration-guide/role-mining#memory-limitations) topic for additional information. | 
 | NotUseAgent default value: false | Boolean | True to disable the use of the agent. See the[Architecture](../../../integration-guide/architecture) topic for additional information. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …       "<NotUseAgent>":  true   }` | 
 | OpenIdClients optional | OpenIdClient List | List of hashed secrets used to override the plain-text secrets from the OpenIdClient XML configuration. See the [OpenIdClient](../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) topic for additional information. This way, Identity Manager stores only hashed secrets, for security purposes. Each environment must have its own secret, distinct from the others. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …       "OpenIdClients": {               "Job": {                     "<HashedSecret>": "<K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols>"               },               "PowerBI": {                     "<HashedSecret>": "<7b8N2NWka5alDrjM7rFqf7+xqq9LIcT5jSoQ+1Ci2V0>"               }         }   }` | 
 | PowerBISettings optional | PowerBISettings | Settings to configure the API used by Power BI to access Identity Manager data. | 
 | Serilog optional | Serilog | Settings to configure the logging service, complying to the Logger properties and structure. See the [Monitoring](../../../integration-guide/monitoring) topic for additional information. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …       "Serilog": {               "WriteTo": ["Console"],               "MinimumLevel": {                     "Default": "Error",                     "Override": {                           "Usercube": "Information"                     }               }         }   }` | 
 | Swagger optional | Swagger | By enabling [Swagger ](https://swagger.io/tools/swagger-ui/)you can visualize and interact with the API's resources without having any of the implementation logic in place. It is automatically generated from Identity Manager's API, with the visual documentation making it easy for back-end implementation and client-side consumption. | 
 | TempFolderPath default value: ../Temp | String | Path to the temporary folder which contains: - ExportOutput: directory storing data exported from connectors. - JobLogs: directory storing task instance logs. - Reports: directory storing generated reports. - Packages: directory storing the downloaded package logos. - PolicySimulations: directory storing the files generated by policy simulations. - ProvisioningCache.txt: file storing the clustered provisioning cache. When enabled, this file can be used to coordinate the API cache among clusters. - CorrelationCache.txt - RiskCache.txt - ExpressionCache.txt - scheduler.lock - connector.txt - container.reset.txt: file acting as a reset command for Identity Manager's server, i.e. any change to this file triggers the reset service, thus reloading all the services instantiated by the server. This path can be overridden by **ResetSettings** > **FilepathResetService**. - Mails: directory storing the email messages. This path can be overridden by **ResetSettings** > **PickupDirectory**. - Deployment These elements can be removed, but make sure to restart the server after doing so. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …       "<TempFolderPath": "../Temp>"   }` | 
 | WorkFolderPath default value: ../Work | String | Path of the work folder which contains: - Collect: directory storing the CSV source files exported by connectors. - ProvisioningOrders: directory storing the orders generated by the server. - FulfillPowerShell: PowerShell provisioner's working directory. - FulfillRobotFramework: Robot Framework's provisioner working directory. - ExportCookies: directory storing the cookies used for incremental export. - Synchronization: directory storing the agent's data collection results. - Upload: directory storing the uploaded media like uploaded pictures, before they are inserted into the database. - appsettings.connection.json These elements must not be removed, because doing so may disrupt Identity Manager's execution after restarting. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …       "<WorkFolderPath": "../Work>"   }` | 

## Swagger

Swagger is set using the attribute below.

 | Name | Type | Description | 
 | --- | --- | --- | 
 | Enabled required | Boolean | True to enable Swagger. Example: `appsettings.json   {         …       "Swagger": {           "Enabled": false         },   }` **NOTE:** We recommend setting this to false for production environments. | 

## Encryption Certificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
(also called [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files) or .pfx file) stored in the Agent's host file system. The archive contains both the public key certificate and the private key.
- As a certificate from a Windows'
[certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store) identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains both the public key certificate and the private key.
- _Remember,_ Netwrix recommends using Windows' certificate store. A subject name can identify
multiple certificates in the same Certificate Store since the Subject Name needs not to be unique. If there are multiple certificates identified by the subject name given in the appsettings, Identity Manager will use the first one. However it is not possible to say exactly which certificate will be loaded first. The thumprint is unique among the certificates so it can help with for the certificate identification.

**As a PFX file**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
{
    ...
    "EncryptionCertificate": {
        "File": "<C:/UsercubeAgentContoso/contoso.pfx>",
        "Password": "<YourPasswordHere>"
     }
 }
```

The archive is set using the following attributes:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | File required | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. | 
 | Password optional | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. | 

Storing a .pfx file password in plain text in a production environment is strongly discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword tool. See the [Usercube-Protect-CertificatePassword](../../../integration-guide/executables/references/protect-certificatepassword) topic for additional information.

The archive is set using the following attributes:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | File required | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. | 
 | Password optional | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. Storing a .pfx file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the Usercube-Protect-CertificatePassword.exe tool. See the [Usercube-Protect-CertificatePassword](../../../integration-guide/executables/references/protect-certificatepassword) topic for additional information. | 

**As a Certificate in the Windows Store**

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

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

 | Name | Type | Description | 
 | --- | --- | --- | 
 | DistinguishedName optional | String | SubjectDistinguishedName of the store certificate. It is required when Thumbprint is not specified. | 
 | Thumbprint optional | String | Thumbprint of the store certificate. It is required when DistinguishedName is not specified. | 
 | StoreLocation required | String | Location of the relevant Windows certificate store: LocalMachine or CurrentUser. | 
 | StoreName required | String | Name of the relevant Windows certificate store. | 

**Using Azure Key Vault**

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the Vault connection. See the [Azure Key Vault](../../../integration-guide/network-configuration/agent-configuration/azure-key-vault) topic for additional information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
"<EncryptionCertificate>": {
    "CertificateAzureKeyVault": "<CertificateIdentifier>"
}    
```

**Disabling file encryption**

The encryption of specific files can be disabled via the following attribute:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | EncryptFile default value: true | Boolean | True to encrypt specific files such as logs or temporary files. Example: Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line. `appsettings.json   {         …         EncryptionCertificate": {               "EncryptFile": false         }   }` | 

## Mail Settings

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json
{
  ...
  "MailSettings": {
    "FromAddress": "<no-reply@acme.com>",
    "PickupDirectory": "<C:/identitymanagerDemo/Temp/Mails>",
    "UseSpecifiedPickupDirectory": true,
    "UseDefaultCredentials": false,
    "SecureSocketOption": "<StartTlsWhenAvailable>"
  }
}
```

The mail settings details are:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | FromAddress required | String | Email address used as sender for Identity Manager's emails. | 
 | AllowedDomains optional | String | List of allowed domains, separated by `;`. | 
 | CatchAllAddress optional | String | Email address to be used as catchAll. | 
 | CatchAllCCAddress optional | String | Email address to be used as CC catchAll. | 
 | Enabled default value: true | Boolean | True to activate Identity Manager's email services. | 
 | EnableSsl default value: false | Boolean | DEPRECATED: EnableSsl won't be supported in the future. Please specify a SecureSocketOption instead. To keep the same behavior as EnableSsl: True, use the setting SecureSocketOption: StartTls. True to encrypt communication with the SMTP server. To be used only when UseSpecifiedPickupDirectory is set to false. | 
 | MaxRecipients default value: 20 | String | The maximum number of recipients visible in the "To", "CC" and "BCC" fields. Any additional recipient will be deleted automatically. | 
 | SecureSocketOption default value: Auto | String | Specifies the encryption strategy to connect to the SMTP server. If set, this takes priority over EnableSsl. None: No SSL or TLS encryption should be used. Auto: Allow the mail service to decide which SSL or TLS options to use (default). If the server does not support SSL or TLS, then the connection will not be encrypted. SslOnConnect: The connection should use SSL or TLS encryption immediately. StartTls: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server does not support the STARTTLS extension, then the connection will fail and a NotSupportedException will be thrown. StartTlsWhenAvailable: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension. To be used only when UseSpecifiedPickupDirectory is set to false. | 
 | Host optional | String | Name or IP address of the host used for SMTP transactions. It is required when UseSpecifiedPickupDirectory is set to false. | 
 | Password optional | String | Password to be used with the user name as credentials. | 
 | PickupDirectory optional | String | Path of the folder where Identity Manager will save the email messages. It is useful and required when UseSpecifiedPickupDirectory is set to true. | 
 | Port optional | String | Port used for SMTP transactions. It is required when Host is defined. | 
 | UseDefaultCredentials default value: false | Boolean | True to use in requests the default credentials instead of those from UserName and Password here. | 
 | UserName optional | String | User name to be used with the user name as credentials. | 
 | UseSpecifiedPickupDirectory default value: false | Boolean | True to save email messages to the folder specified in PickupDirectory instead of sending them to their recipients through the host specified in Host. Required when Host is not defined. | 

## Application Insights

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

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

 | Name | Type | Description | 
 | --- | --- | --- | 
 | InstrumentationKey default value: null | String | Key linked to the AppInsights instance to which the server's logs, requests, dependencies and performance are to be sent. See the Microsoft [Create an Application Insights resource](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource) article for information on creating an instrumentation key. | 

:::note
 The logs sent to AppInsights are configured through the Logger properties. See the [Monitoring](../../../integration-guide/monitoring) topic for additional information. 
:::
## PowerBI Settings

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json
{
  "PowerBISettings": {
    "PageSize": 500
  }}
```

The PowerBI Settings details are:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | PageSize default value: 1000 | Int32 | Size of the page containing the data returned by the API. | 

## Data Protection

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json
{
  "DataProtection": {
    "KeysPath": "</home/DataProtection>",
    "X509KeyFilePath": "<../identitymanager.pfx>",
    "X509KeyFilePassword": "<secret>"
  },
}        
```

The Data Protection details are:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | KeysPath default value: ../Work/DataProtection | String | Path of the location where the keys' descriptions are stored. | 
 | X509KeyFilePath optional | String | Path of the custom certificate used to protect the keys. | 
 | X509KeyFilePassword optional | String | Password of the custom certificate used to protect the keys. | 

## App Display

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```
appsettings.json
{
  ...
  "AppDisplay": {
    "PrimaryColor": "<#01CDE9>",
    "SecondaryColor": "<#EA6E1A>",
    "BannerColor": "<#EA6E1A>",
    "BannerTextColor": "<#ffffff>",
    "ApplicationNamePrefix": "<QA - >",
    "ApplicationName": "<USERCUBE>"
  },
  ...
}         
```

The App Display details are:

 | Name | Type | Description | 
 | --- | --- | --- | 
 | ApplicationName optional | String | Name of the application, visible on the application's tabs. |
 | ApplicationNamePrefix optional | String | Prefix to be displayed before the application name. |
 | BannerColor optional | String | HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
 | BannerTextColor optional | String | HEX code of the color for the banner's text. |
 | PrimaryColor optional | String | HEX code of the color for the highlighted buttons. |
 | SecondaryColor optional | String | HEX code of the color for the background of the authentication screen. |

See the [App Display Setting](../../../integration-guide/toolkit/xml-configuration/metadata/settings/appdisplaysetting) topic for additional information.

