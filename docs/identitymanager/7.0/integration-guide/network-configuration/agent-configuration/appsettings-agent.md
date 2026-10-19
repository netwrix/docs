---
title: "appsettings.agent"
description: "appsettings.agent"
sidebar_position: 20
---

# appsettings.agent

The appsettings.agent.json file contains the configuration data that the agent uses to run Identity Manager.

It includes:

- Connections to the managed systems
- Password reset settings
- Connections to potential additional databases
- OpenId information
- Specific task configuration

JSON files can contain any additional information that you might find useful. See the following example.

For example, to store the agent's address, add:

Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line.

```
appsettings.json
"UsercubeAgent": {
  "Url": "<http://localhost:1234>"
}
```

As Identity Manager doesn't know any object named Identity ManagerAgent, it ignores the content, but you can still use it to store information for human use.

## Supported Sections

 | Name | Type | Description | 
 | --- | --- | --- | 
 | Connections optional | List of Connections | Connection information of all the systems managed by this agent, for synchronization and fulfillment configuration. This section contains a subsection for each connection containing the connection's agent settings. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "Connections": {       …       "<ConnectionIdentifier>": {         "<AgentSetting>": "<Value>":          …       }     }   }` Example: `{     …     "Connections": {       …       "Directory": {         "Path": "C:\UsercubeDemo\Sources\Directory.xlsx"       },       "ServiceNowExportFulfillment": {         "Server": "https://INSTANCE.service-now.com/api/now/table",         "Login": "LOGIN",         "Password": "PASSWORD"       }     }   }` See the [Create a Connection](../../../user-guide/set-up/connect-system/connection-creation)and [Connection](../../../integration-guide/toolkit/xml-configuration/connectors/connection) topics for additional information. | 
 | Databases optional | List of Databases | Names and connection strings of all databases used by the agent through InvokeSqlCommandTask, other than Identity Manager's database and other than the databases provided in Identity Manager's available packages. This subsection contains a subsection for each additional database. **NOTE:** The Database is a subsection of the Connections section mentioned above. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "Databases": {       "<DatabaseName>": "<DatabaseConnectionString>"     }   }` Example: `{     …     "Databases": {       "UsercubeContoso": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"     }   }` | 
 | OpenId optional | OpenId | OpenId information, i.e. the ClientIds and related ClientSecrets that the agent may use to authenticate to the server to launch jobs and tasks. to launch jobs and tasks, the profiles related to these OpenId credentials must possess the required permissions. | 
 | PasswordResetSettings optional | PasswordResetSettings | Parameters which configure the reset password process for the managed systems that support it. | 
 | SourcesRootPaths optional | String Array | Whitelist of root folder paths from which the agent can read source files. File-based connectors (CSV, Excel, etc.) validate every configured path against this list. Paths are case-sensitive. **Default behavior:** on-premises agents default to an empty list — the agent blocks all connector source paths until you explicitly configure this setting. For SaaS installations, Netwrix manages this. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "SourcesRootPaths": ["C:/identitymanagerContoso/SourceHR", "C:/identitymanagerContoso/SourcesPhone"]    }` | 
 | TaskAgentConfiguration optional | TaskAgentConfiguration | Various settings to customize the behavior of some agent tasks. | 

## OpenId

 | Name | Type | Description | 
 | --- | --- | --- | 
 | AgentIdentifier required | String | Identifier of the agent, as it is named in the XML configuration. With the following configuration: Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `<Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />` The following setting can be used in the agent's appsettings.agent.json: Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "OpenId":{       …       "AgentIdentifier": "MyAgent"     }   }` | 
 | DefaultOpenIdClient required | String | ClientId that defines the default OpenId pair, from the OpenIdClients section, used by the agent to authenticate to the server. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "OpenId":{       "OpenIdClients": {         "Job": "secret1",         "Admin": "secret2",         "Agent": "secret3"       },       "DefaultOpenIdClient": "Agent"     }   }` | 
 | OpenIdClients required | List of OpenIdClients | Pairs of ClientIds and non-hashed ClientSecrets, to override the corresponding secrets specified in the XML configuration. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "OpenId":{       "OpenIdClients": {         "Job": "secret",         "Admin": "secret2"       }     }   }` | 

## PasswordResetSettings

 | Name | Type | Description | 
 | --- | --- | --- | 
 | EncryptionCertificate required | EncryptionCertificate | Location of the public key certificate and the private key used to handle input and output files' encryption. | 
 | MailSettings optional | MailSettings | Settings for configuring the SMTP server, used to send password reset email notifications. | 
 | NotificationSettings optional | NotificationSettings | Settings to configure password reset notifications. | 
 | TokenBuildingSettings optional | TokenBuildingSettings | Settings to build the confirmation token used by the password reset's **two-way** mode. The confirmation token is a base-64 encoded JSON Web Token (JWT) token that contains the information required to complete password reset when in **two-way** mode. Identity Manager appends it to the confirmation Uri. | 
 | TwoFactorSettings optional | TwoFactorSettings | Settings to configure the password reset's **two-way** mode, i.e. the process where Identity Manager sends emails containing links to users for them to click it and reset their passwords. | 

### EncryptionCertificate

If you are using the certificate provided in the SDK, the agent can't launch. You must create your own certificate.

You can set encryption certificate information in one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
(also called [Personal ](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)Information Exchange file or `.pfx` file) stored in the Agent's host file system. The archive contains both the public key certificate and the private key.

 | Name | Type | Description | 
 | --- | --- | --- | 
 | File required | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the agent's host file system. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "File": "<C:/UsercubeAgentContoso/contoso.pfx>"     }   }` | 
 | Password optional | String | [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "File": "<C:/UsercubeAgentContoso/contoso.pfx>",       "Password": "<YourPasswordHere>"     }   }` | 

- As a certificate from a Windows'
[certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store) identified by SubjectDistinguishedName or by Thumbprint. The Windows certificate also contains both the public key certificate and the private key.

 | Name | Type | Description | 
 | --- | --- | --- | 
 | DistinguishedName Required if Thumbprint is empty | String | Subject distinguished name of the certificate. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "DistinguishedName": "<UsercubeContoso>"       …     }   }` | 
 | StoreLocation required | String | Location of the relevant Windows certificate. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "StoreLocation": "<LocalMachine>"     }   }` | 
 | StoreName required | String | Name of the relevant Windows certificate. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "StoreName": "<AuthRoot>"     }   }` | 
 | Thumbprint Required if DistinguishedName is empty | String | Thumbprint of the certificate. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       "Thumbprint": "<6261A70E599642A21A57A605A73B6D2AE7C5C450>"       …     }   }` | 

:::tip
 Remember, Netwrix recommends using Windows' certificate store. 
:::
On the other hand, the PFX file takes priority over Windows' certificate, which means that when you specify `File`, the agent uses the PFX certificate, even if you also specify the options for Windows' certificate.

In both ways, missing and/or incorrect settings trigger an error, and the agent loads no certificate.

### MailSettings

 | Name | Type | Description | 
 | --- | --- | --- | 
 | FromAddress Required if PickupDirectory is empty | String | Email address used by Identity Manager to send notifications. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "FromAddress": "<no-reply@acme.com>",         …       }     }   }` | 
 | Host Required if PickupDirectory is empty | String | SMTP server domain name or an IP address. Use this only when UseSpecifiedPickupDirectory is set to false. | 
 | Password Required | String | Password that Identity Manager uses to log in to the SMTP server. Used only when the SMTP server is password-protected and UseSpecifiedPickupDirectory is set to false. | 
 | PickupDirectory Required if FromAddress/Host are empty |  | Path to the pickup directory. See the [Send Notifications](../../../installation-guide/production-ready/email-server) topic for additional information. Use this only when UseSpecifiedPickupDirectory is set to true. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "PickupDirectory": "<../Mails>",         …       }     }   }` | 
 | Username required | String | Username for Identity Manager to log in to the SMTP server. Used only when the SMTP server is password-protected and UseSpecifiedPickupDirectory is set to false. | 
 | AllowedDomains optional | String | List of domains to which the SMTP server can send emails. Separate domain names with `;`. | 
 | CatchAllAddress optional | String | Catch-all address that receives all of Identity Manager's emails instead of usual users. this is helpful for testing before going live. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "CatchAllAddress": "<administrator@acme.com>",         …       }     }   }` | 
 | CatchAllCCAddress optional | String | Catch-all address that receives all of Identity Manager's emails **as cc** (carbon copied). Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "CatchAllCCAddress": "<administratorcc@acme.com>",         …       }     }   }` | 
 | Enabled default value: True | Boolean | True to enable email sending. When set to false, Identity Manager sends no email. | 
 | EnableSsl default value: False | Boolean | **DEPRECATED**: Future versions won't support EnableSsl. specify a SecureSocketOption instead. To keep the same behavior as EnableSsl: True, use the setting SecureSocketOption: StartTls. True to encrypt communication with the SMTP server. **NOTE:** Use this only when UseSpecifiedPickupDirectory is set to false. | 
 | SecureSocketOption default value: Auto | String | Specifies the encryption strategy to connect to the SMTP server. If set, this takes priority over EnableSsl. None: Use no SSL or TLS encryption. Auto: Allow the mail service to decide which SSL or TLS options to use (default). If the server doesn't support SSL or TLS, then the mail service doesn't encrypt the connection. SslOnConnect: The connection should use SSL or TLS encryption immediately. StartTls: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server doesn't support the STARTTLS extension, then the connection fails and throws a NotSupportedException. StartTlsWhenAvailable: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension. **NOTE:** Use this only when UseSpecifiedPickupDirectory is set to false. | 
 | Port default value: 0 | String | SMTP server port. **NOTE:** Use this only when UseSpecifiedPickupDirectory is set to false. | 
 | UseDefaultCredentials default value: False | Boolean | True to use the default username/password pair to log in to the SMTP server. When set to false, the agent uses Windows authentication. **NOTE:** Use this only when UseSpecifiedPickupDirectory is set to false. | 
 | UseSpecifiedPickupDirectory default value: False | Boolean | True to write emails as local files in the specified PickupDirectory instead of sending them as SMTP packets. See the [Send Notifications](../../../installation-guide/production-ready/email-server)topic for additional information. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "MailSettings": {         "UseSpecifiedPickupDirectory": true,         …       }     }   }` | 

### NotificationSettings

 | Name | Type | Description | 
 | --- | --- | --- | 
 | Cultures default value: ["en"] | String Array | List of languages in which Identity Manager sends reset-password email notifications, among: fr and en. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "NotificationSettings": {         "Cultures": ["fr", "en"]       }     }   }` | 

### TokenBuildingSettings

 | Name | Type | Description | 
 | --- | --- | --- | 
 | ValidFor default value: 03:00:00 | String | Validity period of the issued token, and thus of the password reset link. The format must be HH:mm:ss Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "PasswordResetSettings": {       …       "TokenBuildingSettings": {         "ValidFor": "<03:00:00>"       }     }   }` | 

### TwoFactorSettings

 | Name | Type | Description | 
 | --- | --- | --- | 
 | ApplicationUri required | String | URI of the Identity Manager application. **NOTE:** this helps create the links in the emails for **two-way** password reset. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{       …       "PasswordResetSettings": {           …           "TwoFactorSettings": {              "ApplicationUri": "<http://localhost:5000>"              …           }       }   }` | 
 | ResetConfirmationUri required | String | Base URI for the password reset link that Identity Manager sends to the user. Identity Manager appends the password reset confirmation token to the ResetConfirmationUri and sends the resulting URI to the user. Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{       …       "PasswordResetSettings": {           …           "TwoFactorSettings": {              …              "ResetConfirmationUri": "<http://localhost:5000/PasswordReset/Activate/?activationCode=>"           }       }   }` | 

## TaskAgentConfiguration

 | Name | Type | Description | 
 | --- | --- | --- | 
 | HttpClientTimeoutSupplement default value: 0 | Integer | Additional minutes that extend the default timeout (30 minutes) of the HttpClient instance used to send requests to the server. Here the total timeout is 50 minutes: Replace code attributes enclosed with `<>` with a custom value before entering the script in the command line. `{     …     "TaskAgentConfiguration": {       …        "HttpClientAdditionalTimeout": 20     }   }` | 

