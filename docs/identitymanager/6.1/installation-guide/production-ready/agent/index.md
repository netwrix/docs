---
title: "Install the Agents"
description: "Install the Agents"
sidebar_position: 40
---

# Install the Agents

Most on-premises installations use an agent integrated with Usercube's server. If this is your case,
and the server is already installed, no need to go further. If, on the other hand, you need separate
agents, or if you are installing Usercube's agents within Usercube's SaaS offering, this is the way
to go.

Please make sure that
[Usercube's agent requirements](/docs/identitymanager/6.1/installation-guide/requirements/agent-requirements/index.md)
are met before going further.

## Agent Working Directory

The agent runtime content should be extracted from the runtime archive following the instructions
provided in
[Create a Working Directory](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md).

In the separate agent setup, the agent is usually installed on a different workstation from the
server.

The agent is configured thanks to the
[appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file.

## Create an IIS Website

It is recommended to run the Usercube agent as an IIS website.

To install Usercube's agent as a Windows service, please jump to
[Install the agent As a Windows Service](#install-the-agent-as-a-windows-service).

Adding Usercube's agent as an IIS website can be achieved with the
[Internet Information Services (IIS) Manager](https://www.iis.net) which can be launched with the
`INETMGR.MSC` command. You need to have an IIS 10.0 or greater.

The Microsoft Documentation provides the
[prerequisites](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0)
and the procedure to
[create a new IIS site](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0#create-a-new-iis-site).

The information needed to go through the creation process are the following:

- Usercube's agent uses an in-process hosting model.
- Usercube's agent uses .Net.
- Usercube agent's `web.config` dwells in the `runtime` directory.

    It might require a few modifications to target the agent instead of the server:

    **1.** Open `web.config` with a text editor.

    **2.** Change the `arguments` and `stdoutLogFile` attributes of the `<aspNetCore>` element as
    indicated below:

```
<aspNetCore processPath="dotnet" arguments="./identitymanager-Agent.dll" stdoutLogEnabled="false" stdoutLogFile="../Temp/stdout-agent.log" hostingModel="inprocess">
```

- When creating the website, enter the following data:

    **1.** Site name: `UsercubeAgent<Organization>` is the recommended naming convention.

    **2.** Physical path: `/<agent working directory>/Runtime`

    **3.** Type: `http`

    **4.** IP address: `All unassigned`

    **5.** Port & Hostname: To access Usercube's agent. Use the hostname and port that has been
    reserved for Usercube.

After creation, the following settings are recommended:

- **Application Pool** > `Usercube<Organization>` > **Advanced Settings** > **General** > Start Mode
  set to `AlwaysRunning`;
- **Application Pool** > `Usercube<Organization>` > **Advanced Settings** > **Process Model** > Idle
  Time-out (minutes) set to `0` and Load User Profile set to `True`;
- **Application Pool** > `Usercube<Organization>` > **Recycling** > Regular time intervals set to
  `0`.

    Recycling the application pool creates a discontinuation in the connection between server and
    agent, which can disrupt some of Usercube's features such as the job scheduler. IIS already
    recycles the application pool at each setting change, thus NETWRIX recommends not using periodic
    recycling.

The following is
[mandatory](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0#mandatory):

- **Application Pool** > `Usercube<Organization>` > **Advanced Settings** > **General** > .NET CLR
  Version > `No Managed Code`

To sum up IIS settings:

![IIS Settings](/images/identitymanager/6.1/installation-guide/production-ready/server/iis_settings.webp)

## Hosting Bundle

You need to install the
[dotnet hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (version 8.0 or
higher) to be able to run dotnet application.

## Select an Agent Identity

The Usercube Agent, through the IIS Website, should be assigned a
[service account with the relevant permissions](/docs/identitymanager/6.1/installation-guide/requirements/agent-requirements/index.md).

You can either:

- Use the _built-in application pool identity_ (see
  [Check default behavior](#check-default-behavior)) and grant this identity the right permissions.
- Use a _custom Windows service account_ with the right permissions and use it as an IIS identity
  for Usercube's agent IIS Website.

### Check default behavior

Usually, creating an IIS application pool, such as the one within which Usercube's server website
runs, triggers the creation of a service account `IIS APPPOOL/<apppool_name>` (where
` <apppool_name>` is the application pool name) known as an **application pool identity**. It is
associated with the IIS website. This account is granted basic group membership that should enable
it to access what it needs.

For more information about IIS identities, visit the
[Microsoft Documentation](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis).

Building on this default behavior, the default Application Pool Identity is usually granted the
necessary permissions for Usercube's server to operate.

Before going further, you should check the following points:

1. Find the group membership of `IIS APPPOOL\<apppool_name>`.
2. Check the permissions on the working directory. Right-click the working directory and select
   **Security**. The group section should contain one of the `IIS APPPOOL/<apppool_name>` groups,
   namely `Users`.

From there:

- If the _built-in application pool identity_ has been created but does not have the right
  permissions, you can use [Set the Agent Permissions](#set-the-agent-permissions) to fix it. Go
  back to [Set an IIS Identity](#set-an-iis-identity) to make sure that the _built-in application
  pool identity_ is effectively used by Usercube's server IIS Website.
- If you would rather use a custom service account instead of the _built-in application pool
  identity_, start with [Set an IIS Identity](#set-an-iis-identity).
- If you're not sure what to do, follow the procedure below, starting with
  [Set an IIS Identity](#set-an-iis-identity).

### Set an IIS Identity

If you want to use the **built-in application pool identity** created with the application pool, you
can use the
[Microsoft documentation](https://docs.microsoft.com/en-us/iis/manage/configuring-security/application-pool-identities).

If you'd rather use a **custom service account** created for Usercube's agent, follow the procedure
below.

The following implies that a
[custom service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts)
has already been created for Usercube's agent. This can be achieved by following the
[same steps as for the server](/docs/identitymanager/6.1/installation-guide/production-ready/server/index.md#create-the-service-account):

1. Open the IIS Manager (`INETMGR.MSC`).
2. Open the **Application Pools** node underneath the machine node.
3. Select the `UsercubeAgent/<Organization>` application pool.
4. Right-click and select **Advanced Settings**.
5. In the **Process Model** section, on the **Identity** list item, click on the three dots to open
   the **Application Pool Identity** dialog.
6. Select the **Custom Account** radio button and click on **Set**.
7. Enter the Service Account credentials.
8. Click **OK**. You're all set.

Usercube's server IIS site will now use this identity to access the database and the working
directory.

## Set the Agent Permissions

### Permissions

Usercube's agent needs
[specific permissions](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md)
on its **working directory** to run, write synchronization output and read provisioning orders.

Up to four folders have to be considered:

- The
  [working directory](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md)
- The
  [runtime](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md)
  directory, usually `C:/identitymanager<Organization>/Runtime`
- The
  [data collection](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
  directory, usually `C:/identitymanager<Organization>/Temp`
- The
  [provisioning orders](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
  directory, usually `C:/identitymanager<Organization>/Temp` (same as for the data collection directory).

### Steps

The following steps can be performed for each of the relevant directories.

First, let's check what permissions the service account already has.

1. Go to the working directory parent folder.
2. Right-click the working directory.
3. Select **Properties**.
4. Select **Security**.

From there, you have two choices.

The agent service account that was chosen in the previous step:

1. Already has or belongs to a group that already has the needed permissions. There is nothing more
   to do.
2. Is missing one of the needed permissions:

    1. Click on **Edit**.
    2. Click on **Add**.
    3. In the **Enter the object names to select** textbox, enter the service account name in the
       down-level logon format. For example, if you chose the _built-in application pool identity_,
       this would be `IIS APPPOOL/identitymanagerAgent<Organization>`.
    4. Click on **OK**.
    5. Select the newly added user name in the **Group or user names** panel at the top of the
       window.

        ![Object Names](/images/identitymanager/6.1/installation-guide/production-ready/server/enter-the-object-names-to-select.webp)

    6. Check the `Allow` column for the
       [relevant permissions](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md).
       Check the `Deny` column for the others.
    7. Apply **OK**.

The working directory permissions are all set.

The same steps have to be performed on the
[runtime](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md),
the
[data collection](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
and the
[provisioning orders](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
directories.

## Name the Agent

Every agent is assigned a name. This name will be used in the UI to differentiate agents for the
end-user, and in the XML configuration to assign connectors to specific agents.

In the `appsettings.agent.json` file, **OpenId** > **AgentIdentifier** can be set to any string
except for `Local` which is already taken by Usercube's inner workings. Then the agent set in the
XML configuration must have the same string as identifier.

> For example:
>
> ```
>
> appsettings.agent.json
>
> "OpenId": {
>   "AgentIdentifier": "MyAgent"
>   }
>
> ```
>
> With the following configuration:
>
> ```
>
> <Agent Identifier="MyAgent" DisplayName_L1="My Agent" URI="https://contoso.com" />
>
> ```

## Connect the Agent to the Managed Systems

The `Runtime/appsettings.agent.json` file is a
[technical configuration](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file that will enable you set up the connection between the agent and the target managed systems.

Every agent is associated with an `appsettings.agent.json` file.

The integration team should communicate the list of the managed systems to be connected to the
agent, together with their configuration.

Here is an example of `appsettings.agent.json` connecting an agent to an Active Directory and an SAP
server.

```
appsettings.agent.json
{
  ...
  "Connections": {
    "ADExport": {
        "Servers": [{
           "Server": "paris.contoso.com",
           "BaseDN": "DC=paris,DC=com"
          }],
        "AuthType": "Basic",
        "Login": "Login",
        "Password": "Password",
        "Filter": "(objectclass=*)",
        "EnableSSL": "true"
    }
    "SAPExportFulfillment": {
        "Server": "serverUrl",
        "Login": "login",
        "Password": "password"
    }
  }
}
```

Storing sensitive managed system data in configuration files, such as login/password pairs, is
strongly discouraged. Sensitive data should be protected by one of the
[Credentials Protection](/docs/identitymanager/6.1/integration-guide/connectors/index.md)
methods.

## Encryption Key Pair

Usercube's agent needs an [RSA key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) to
perform various encryption operations, such as source, configuration, or log file encryptions.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509) public key certificate and a
private key, can be stored one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the server's host file system. The file contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)and[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

Here's an example showing how to generate a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12)
archive (`UsercubeContoso.pfx`) bundling a public key certificate (`usercubecontoso.cert`) and a
private key (`usercubecontoso.key`) with OpenSSL, with a 50-year expiration date:

```

openssl req -x509 -newkey rsa:1024 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250

```

```

openssl pkcs12 -export -out UsercubeContoso.pfx -inkey usercubecontoso.key -in usercubecontoso.cert

```

Public key certificates can also be bought from trusted certificate providers and bundled with a
private key into a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive using step **2** in the
frame above.

The certificate has to be linked to Usercube via `EncryptionCertificate` in the
`appsettings.agent.json` file.

For more information about configuration parameters, see
[EncryptionCertificate](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md).

### Certificate as a plain file

The following parameters are used to link the file to Usercube in `EncryptionCertificate`.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be
[password protected](https://www.openssl.org/docs/man1.1.0/man1/openssl.html#password-protected),
hence the `X509KeyFilePassword` attribute.

Storing a `.pfx` file password in plain text in a production environment is strongly discouraged. It
should always be encrypted using the
[Usercube-Protect-CertificatePassword tool](/docs/identitymanager/6.1/integration-guide/executables/references/protect-certificatepassword/index.md).

```
appsettings.agent.json
{
  ...
  "EncryptionCertificate": {
      "File": "./identitymanagerContoso.pfx",
      "X509KeyFilePassword": "adefe$/izih"
  }
  ...
}

```

### Certificate in the certificate store

The certificate can be stored in the certificate store instead of the file system. This is the
recommended method.

```
appsettings.agent.json
{
  ...
  "EncryptionCertificate": {
      "DistinguishedName":"UsercubeContoso",
      "StoreLocation": "LocalMachine",
      "StoreName": "AuthRoot"
  }
  ...
}

```

## Connect the Agent to Usercube's Server

The connection to Usercube's server is configured through:

**1.** The `applicationUri` attribute in the `Runtime/appsettings.agent.json` file has to be set to
Usercube's server URL.

**2.**[OpenIdClients](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
and
[DefaultOpenIdClient](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
must be used to set the agent's credentials to connect to the server.

Their content should be provided by the integration team, in relation to the
[_OpenIdClient_ tag](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/access-control/openidclient/index.md)
in the applicative configuration.

The following example shows an `appsettings.agent.json` file that sets an agent to connect to
Usercube's server (`https://identitymanagerserver.contoso.com`) with the OpenId client identifier `Job` and
the password `secret`, stored in the `OpenIdClients` list which also contains the "admin/secret"
login/password pair.

```

{
    ....
    "ApplicationUri": "https://identitymanagerserver.contoso.com",
    "OpenIdClients": {
        "Job": "secret",
        "Admin": "secret"
     },
    "DefaultOpenIdClient": "Job"
}

```

Storing plain text passwords in configuration files is strongly discouraged. Sensitive passwords
should be
[encrypted](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md).

## Install the Agent as a Windows Service

Installing Usercube's agent as a Windows service instead of an IIS website is mostly useful when
using IIS is rendered moot by another system. For example, using a reverse proxy in front of
Usercube's agent.

To install Usercube's agent as a service in Windows server, use the following command:

```

sc.exe create Usercube binpath= "Usercube-Agent.exe --service" displayname= "Usercube Agent" start= auto obj= "DOMAIN\USER" password= "PASSWORD"

```

Make sure to include a space between each parameter's equal sign `=` and the parameter value.

## Configure the Starting Mode in IIS (optional)

This step is important if the scheduler is enabled. IIS starts Usercube's agent only if an incoming
http request is made on the server and the scheduler is not launched until Usercube's agent is
started. Because of that, you need to carefully set up the starting mode of IIS to force the
starting of Usercube's agent.

Usercube's agent warm up is done using the `<applicationInitialization>` element in the web.config
file, the configuration is described here:
[https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization](https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization)

You need to:

- Enable the **Application Initialization** feature
- Modify the **applicationHost.config** file to set the _startMode_ of the application pool as
  _AlwaysRunning_. You also need to set the _preloadEnabled_ of your application set to _true_. It
  is advised to backup the **applicationHost.config** file when doing this step to prevent mistakes
- Double check that the following section is set in your _web.config_ file, in the section
  _system.webServer_:

```
<applicationInitialization doAppInitAfterRestart="true">  <add initializationPage="/"></applicationInitialization>

```

Once done, you need to check that the configured jobs are launched via the Usercube's scheduler
without having to manually issue a request on Usercube's agent.

If this is not correctly configured, any restart of your IIS or application pool could prevent jobs
from being launched.

## What's Next?

The last step in the installation process is setting up an
[Email server](/docs/identitymanager/6.1/installation-guide/production-ready/email-server/index.md).
