# Install the Server

Usercube Server can be installed on the same workstation as the database or on a separate
workstation. If you are installing Usercube within the SaaS offering, this section is moot. You can
skip directly to [Set up End-User Authentication](#set-up-end-user-authentication).

Please make sure that the
[server requirements](/docs/identitymanager/6.1/getting-started/system-requirements.md)
are met before going further.

## Server Working Directory

In
[Create a Working Directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md),
the server executable has been extracted to the
[working directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md)
as `Usercube-Server.exe` and `Usercube-Server.dll` and will enable a user or IIS to run the Usercube
Server.

## Set up the License Key

The license key provided by Usercube must be set up in the
[appsetting.json > License](/docs/identitymanager/6.1/installation-setup/server-configuration.md)
attribute.

## Create an IIS Website

It is recommended to run the Usercube Server as an IIS website.

To install the Usercube Server as a Windows service, please jump to [Install the Server as a Windows
Service].

Adding the Usercube Server as an IIS website can be achieved with the
[Internet Information Services (IIS) Manager](https://www.iis.net) which can be launched with the
`INETMGR.MSC` command. You need to have an IIS 10.0 or greater.

An IIS website must be created using the
[Microsoft guide](https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-8.0)
and the following parameters:

**1.** Site name: `Usercube<Organization>` is the recommended naming convention.

**2.** Physical path: `/<working directory>/Runtime`

**3.** Type: `http`

**4.** IP address: `All unassigned`

**5.** Port & Hostname: To access the Usercube Server and the UI. Use the hostname and port that has
been reserved for Usercube.

During installation, the following information guides some of your choices:

- The Usercube Server uses an in-process hosting model.
- Usercube Server's `web.config` can be found in the `Runtime` folder.
- The Usercube Server uses .Net.

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

![IIS Settings](/img/versioned_docs/identitymanager_6.1/identitymanager/installation-guide/production-ready/server/iis_settings.webp)

An SSL Certificate should also be
[set to the IIS Server](https://docs.microsoft.com/en-US/iis/manage/configuring-security/how-to-set-up-ssl-on-iis)
to perform HTTPS communication with end-users.

## Hosting Bundle

You need to install the
[dotnet hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (version 8.0 or
higher) to be able to run dotnet application.

## Select a Server Identity

The Usercube Server, through the IIS Website, should be assigned a
[service account with the relevant permissions](/docs/identitymanager/6.1/getting-started/system-requirements.md).

### Create the service account

This section requires using an Active Directory account with sufficient privileges to create service
accounts on the domain.

1. Log on to a Windows server in the target domain environment. You should use an account with the
   necessary permissions to create new domain accounts.

   The target domain is the domain where SQL Server is installed.

2. Access the _Active Directory User and Computers_ tool with the command `dsa.mc`.
3. Select the target domain.
4. Click **Users**.
5. From the users list, right-click to select **New** > **User**.
6. Choose a mnemonic _First Name_ for the Usercube Server. Example: `UsercubeContosoServer`.
7. Remember for later, the down-level logon name in the format `DOMAIN/userName`. Example:
   `CONTOSO/identitymanagerContosoServer`.
8. Click **Next**.
9. Choose a password. Remember it for later.
10. Check **User cannot change password**.
11. Check **Password never expires**.

This newly created service account is a domain account and will be used as an IIS identity.

You can go further and use
[Managed Service Account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts)
to avoid dealing with the service account password update yourself and let Windows worry about it.
This feature requires installing Usercube on Windows Server 2016 or later, and using an Active
Directory with a forest level set to Windows Server 2016 or later.

### Set an IIS identity

The following implies that a
[custom service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts)
has already been created for the Usercube Server.

1. Open the IIS Manager (`INETMGR.MSC`).
2. Open the **Application Pools** node underneath the machine node.
3. Select the `Usercube/<Organization>` application pool.
4. Right-click and select **Advanced Settings**.
5. In the **Process Model** section, on the **Identity** list item, click on the three dots to open
   the **Application Pool Identity** dialog.
6. Select the **Custom Account** radio button and click on **Set**.
7. Enter the previously created Service Account credentials:
   - User name in the format `DOMAIN/userName` that you have previously written down.
   - Password, previously remembered.
8. Click **OK**. You're all set.

The Usercube Server IIS site will now use this identity to access the database and the working
directory.

## Set the Server Permissions

### Set the database permissions

The service account used by the Server to access the database needs the following database-level
roles in SQL Server:

- `public`
- `dbowner`

And the following server-level role:

- `Administer bulk operations`

This guide will show you how to perform these operations using SQL Server Management Studio.

1. Open SQL Server Management Studio (SSMS).
2. Log in to access the server on which runs the Usercube Database with an account member of the
   **sysadmin** or **securityadmin** server-level role.
3. Expand the **Security** node.
4. Expand the **Login** node.
5. Look for the Usercube service account in the list.
6. If you cannot find the service account:

   - From the **Login** node, right-click and select **New** > **Login**.

     ![New Login](/img/product_docs/accessanalyzer/11.6/install/application/newlogin.webp)

   - On the **General** page, enter the service account login name in the down-level logon format,
     such as `CONTOSO/identitymanagerContosoServer`. If you're not sure about the correct spelling of your
     service account or domain, you can search for it using the search window. From the **Login**
     node, right-click and select **New login** > **Login name** > **Search**.
   - Then, choose either**Windows authentication** if you chose to connect the server to the
     database with a Windows service account (Integrated Security=SSPI in the connection string) or
     a **SQL Server authentication** for a SQL Server account (if you set up the connection string
     with a login/password). In the SQL case, fill in the same password in the form as in the
     connection string. You should now see the newly created login in the Login list.

7. From the **Login** node, right-click the newly created login and select **Properties**.
8. Go to the **Server Roles** page on the left.
9. Make sure **public** is checked.
10. Go to **User Mapping**.
11. Make sure `Usercube/<Organization/>` is checked (top panel), as well as **db_owner** and
    **public** (bottom panel).
12. Right-click the **Server** root node and select **Properties**.
13. In the **Permissions** tab, select the service account or group name set up or found in Step
    **6** or **7**.
14. Grant the **Administer bulk operations** permission.

    ![Bulk](/img/versioned_docs/identitymanager_6.1/identitymanager/installation-guide/production-ready/server/bulk.webp)

15. Confirm with **OK**.

Usercube Server now has the required permissions to access the database.

### Set the working directory permissions

The Usercube Server needs
[specific permissions](/docs/identitymanager/6.1/getting-started/system-requirements.md)
on the working directory to run, read synchronization output, and write provisioning orders.

Up to four folders have to be considered:

- The
  [working directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md)
- The
  [runtime](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md)
  directory, usually `C:/identitymanager<Organization>/Runtime`
- The
  [data collection](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  directory, usually `C:/identitymanager<Organization>/Temp`
- The
  [provisioning orders](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
  directory, usually `C:/identitymanager<Organization>/Temp` (same as for the data collection directory).

The following steps can be performed for each of the relevant directories.

First, let's check what permissions the service account already has.

1. Go to the working directory parent folder.
2. Right-click the working directory.
3. Select **Properties**.
4. Select **Security**.

From there, you have two choices.

The Usercube Server service account that was chosen in the previous step:

- Already has or belongs to a group that already has the needed permissions. There is nothing more
  to do.
- Is missing one of the needed permissions:

  1. Click on **Edit**.
  2. Click on **Add**.
  3. In the **Enter the object names to select** textbox, enter the service account name in the
     down-level logon format, such as `CONTOSO/identitymanagerContosoServer`.
  4. Click **OK**.
  5. Select the newly added user name in the **Group or user names** panel at the top of the
     window.

     ![Object Names](/img/versioned_docs/identitymanager_6.1/identitymanager/installation-guide/production-ready/server/enter-the-object-names-to-select.webp)

  6. Check the `Allow` column for the
     [relevant permissions](/docs/identitymanager/6.1/getting-started/system-requirements.md).
     Check the `Deny` column for the others.
  7. Apply **OK**.

The working directory permissions are all set.

The same steps have to be performed on the
[runtime](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md),
the
[data collection](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
and the
[provisioning orders](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
directories.

## Encryption and Authentication Key Pairs

The Usercube Server requires an
[RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) to perform
various encryption operations, such as source, configuration, or log file encryptions. Usercube's
Identity Server also needs an
[RSA-2048 authentication key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) for
end-user authentication purposes.

These certificates don't need to be integrated into the target organization's Public Key
Infrastructure (PKI) and don't require an expiration date. They're only relevant to specific
Usercube temporary data and can be changed at any time.

Each RSA key pair, as in an [X.509](https://en.wikipedia.org/wiki/X.509) public key certificate and
a private key, can be stored one of two ways:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the Server's host file system. The file contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pairs can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)and[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

Here's an example showing how to generate a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12)
archive (`UsercubeContoso.pfx`) bundling a public key certificate (`usercubecontoso.cert`) and an
RSA-2048 private key (`usercubecontoso.key`) with OpenSSL, with a 50-year expiration date:

                    ```

openssl req -x509 -newkey rsa:2048 -keyout usercubecontoso.key -out usercubecontoso.cert -days 18250

````


                    ```

openssl pkcs12 -export -out UsercubeContoso.pfx -inkey usercubecontoso.key -in usercubecontoso.cert

````

Public key certificates can also be bought from trusted certificate providers and bundled with a
private key into a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive using step **2** in the
frame above.

### Generate and use an encryption key pair

This is the key pair used to perform various encryption operations, such as source, configuration,
or log file encryptions.

1. Generate a key pair using the OpenSSL method.
2. Store the key pair as a `.pfx` file or use the Windows
   [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store)
   (recommended) .
3. Link the generated certificate to Usercube (see
   [`appsettings.json > EncryptionCertificate`](/docs/identitymanager/6.1/installation-setup/server-configuration.md)).

### Generate and use an identity server key pair

This is the key pair used by the Identity Server for end-user authentication purposes.

1. Generate a key pair using the OpenSSL method.
2. Store the key pair as a .`pfx` file or use the Windows
   [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store)
   (recommended).
3. Link the generated certificate to Usercube (see
   [`appsettings.json > IdentityServer`](/docs/identitymanager/6.1/access-control-security/authentication/end-user-authentication.md)).

#### Certificate as a plain file

The following parameters are used to link the file to Usercube in the `IdentityServer` section.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be
[password protected](https://www.openssl.org/docs/man1.1.0/man1/openssl.html#password-protected),
hence the `X509KeyFilePassword` attribute.

Storing a `.pfx` file password in plain text in a production environment is strongly discouraged.
The password should always be encrypted using the
[Usercube-Protect-CertificatePassword tool](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md).

                    ```

                        appsettings.json

{ ... "IdentityServer": { "X509KeyFilePath": "./identitymanagerContoso.pfx", "X509KeyFilePassword":
"eff@�%fmel/" } ... }

````


#### Certificate in the certificate store

The certificate can be stored in the certificate store instead of the file system. This is the recommended method.

                    ```

                        appsettings.json
{
  ...
  "IdentityServer": {
      "X509SubjectDistinguishedName":"UsercubeContoso",
      "X509StoreLocation": "LocalMachine",
      "X509StoreName": "AuthRoot"
    }
  ...
}
````

## Connect the Server to the Database

Now that the Usercube Server has been provided with a service account with the right permissions,
let's finalize the setup.

The connection between the Server and the Database requires choosing an
[authentication method](/docs/identitymanager/6.1/installation-setup/database-setup.md):
[Windows Authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#windows-authentication)
or
[SQL Server authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#sql-server-authentication).
Windows authentication will require the IIS identity to be set to the custom Windows service account
used to log in to the Usercube's Windows Server session. SQL authentication will work with both the
_built-in_ app pool identity and a custom service account. This authentication method will write the
login and password directly in the connection string.

`Runtime/appsettings.json` is a
[technical configuration](/docs/identitymanager/6.1/configuration-reference/network-configuration/index.md)
file that enables you to set up the connection between the Server and the Database through the
[ConnectionString](/docs/identitymanager/6.1/installation-setup/database-setup.md)
attribute.

The connection string is set up in the `Runtime/appsettings.json` configuration file which can be
edited with any text editor, such as [Notepad++](https://notepad-plus-plus.org/downloads/).

If the SQL Server is hosted on Azure, you should use the
[AzureCredentials](/docs/identitymanager/6.1/installation-setup/database-setup.md#azurecredentials)
setting before going further.

In the`Runtime/appsettings.json` file, find or write the `ConnectionString` attributes following the
examples shown below:

The **first example** sets a connection string using the Windows authentication
(`Integrated Security=SSPI`) to connect, on a local SQL Server system (`source=.`), to the
`UsercubeContoso` database created in
[Install the Database](/docs/identitymanager/6.1/installation-setup/database-setup.md).

The service account used by the Server to access the Database is either:

- A Windows account if the connection string was set up using `Integrated Security=SSPI`.
- A SQL Server account if the connection string was set up with a login/password.

appsettings.json

```

{
...
"ConnectionString": "data source=.;Database=UsercubeContoso;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
...
}

```

The **second example** sets a connection string using the SQL Server authentication.
`CONTOSO/identitymanagerContosoServer` has been set as the Usercube Server IIS website identity.

appsettings.json

```

{
...
"ConnectionString": "data source=.;Database=Usercube;User Id=CONTOSO/identitymanagerContosoServer;Password=myPassword;Min Pool Size=10;encrypt=false;"
...
}

```

**SQL Server authentication** stores plain text credentials in the configuration file. This is
strongly discouraged. To avoid storing plain text credentials, you should always strive to use
**Windows authentication** or encrypt sensitive setting values such as the connection string.

## SSL Certificate

The Usercube Server requires the use of an SSL Certificate trusted by all the target end-users'
browsers. The standard setup is to use a certificate signed by the target organization's PKI root
Certificate Authority and import the certificate into the end-user's Windows Store.

This can be achieved using the
[Microsoft Management Console (MMC)](https://en.wikipedia.org/wiki/Microsoft_Management_Console).

1. Open the MMC (**Start** > **Run** > **MMC**).
2. Click on **File** > **Add/Remove Snap In**.
3. Double-click on **Certificates**.
4. Click on **Computer Account.**
5. Click on **Local Computer** > **Finish**.
6. Click **OK**.

   The Snap-in window closes.

7. Go to **Certificates** > **Personal** > **Certificates**.
8. Click **`+`**.
9. Right-click **Certificates**.
10. Go to **All Tasks** > **Import**.
11. Click **Next**.
12. Click **Browse**.
13. Browse to the SSL Certificate you want to use and click **Next**.
14. Select **Automatically select the certificate store based on the type of certificate.**
15. Click **Finish** and **OK**.

    The certificate is now visible in **IIS** > **Server Certificates**.

## DNS

Your organization's DNS needs to be updated according to the requirements indicated in
[Hostname and DNS](/docs/identitymanager/6.1/getting-started/system-requirements.md#hostname-and-dns).

## Test Your Installation

1. Make sure the IIS site is running.
2. Go to the following URL with a browser: `<hostname>:<port>/hc` with the hostname and port set up
   in [Create an IIS website](#create-an-iis-website).
3. The Usercube Server is trying to access the Database. If it succeeds, the message "_Healthy_"
   should be displayed in the browser.

## Configure the Starting Mode in IIS (optional)

This step is important if the scheduler is enabled. IIS starts the Usercube Server only if an
incoming http request is made on the server and the scheduler is not launched until the Usercube
Server is started. Because of that, you need to carefully set up the starting mode of IIS to force
the starting of the Usercube Server.

The Usercube Server warm up is done using the `<applicationInitialization>` element in the
web.config file, the configuration is described here:
[https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization](https://docs.microsoft.com/en-us/iis/get-started/whats-new-in-iis-8/iis-80-application-initialization)

You need to:

- Enable the **Application Initialization** feature
- Modify the **applicationHost.config** file to set the _startMode_ of the application pool as
  _AlwaysRunning_. You also need to set the _preloadEnabled_ of your application set to _true_. It
  is advised to backup the **applicationHost.config** file when doing this step to prevent mistakes
- Double check that the following section is set in your _web.config_ file, in the section
  _system.webServer_:

```xml
<applicationInitialization doAppInitAfterRestart="true">
  <add initializationPage="/" />
</applicationInitialization>
```

Once done, you need to check that the configured jobs are launched via the Usercube's scheduler
without having to manually issue a request on the Usercube Server.

If this is not correctly configured, any restart of your IIS or application pool could prevent jobs
from being launched.

## Set up End-User Authentication

The next step consists in setting up one or more authentication methods for end-users. You may
choose one or several external authentication providers among the following:

- [OpenIdConnect](https://openid.net/connect/)
- [WS-Federation](http://docs.oasis-open.org/wsfed/federation/v1.2/ws-federation.html)
- [OAuth](https://tools.ietf.org/html/rfc6749)
- [SAML2](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
- [Integrated Windows Authentication (IWA)](https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/integrated-windows-authentication)

Everything you need to know about setting up authentication is provided in the
[Technical Configuration Guide](/docs/identitymanager/6.1/access-control-security/authentication/end-user-authentication.md).

## What's Next?

[Install the Agent](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
is the next step of the process.

# Application Settings

This section describes the settings available in the server's `appsettings.json` file, located in
the server's working directory or in environment variables.

JSON files can contain any additional information that you might find useful. See the example below.

> For example, in order to store the agent's address, we can add:
>
> ```
>
> appsettings.json
>
> "UsercubeAgent": {
>   "Url": "http://localhost:1234"
> }
>
> ```
>
> As Usercube does not know any object named `UsercubeAgent`, its content will be ignored, but it
> can still be used to store information for human use.

The `appsettings` set allows the following attributes and sections:

| Name                                                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApplicationUri required                                      | **Type** String **Description** URI of the server to use in log messages, to communicate with the server in tasks, to allow certain redirect URIs. **Note:** must be the same as the agent's `appsettings.json`'s `ApplicationUri`. **Example**`appsettings.json   {     �     "ApplicationUri": "usercubeserver.contoso.com:5000"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| EncryptionCertificate required                               | **Type** [EncryptionCertificate] **Description** Settings to configure the encryption of specific files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| License required                                             | **Type** String **Description** License key of the server. **Example**`appsettings.json   {     �     "License": "{"LicensedTo":"Demo","ValidTo":"20120905","IdentityQuota":"10000","Signature":"�"}"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Agents optional                                              | **Type** Agent List **Description** List of [agents](/docs/identitymanager/6.1/core-concepts/architecture/index.md)' settings used to work on several environments. **Info:** this way, each agent's URI/URL is configured without altering the database. **Example**`appsettings.json   {     �     "Agents": {       "Local": {         "Uri": "http://localhost:5010"       },       �     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| AppDisplay optional                                          | **Type** [AppDisplay](#appdisplay) **Description** Settings to override the [application display](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md) XML configuration. **Info:** useful to change the application's theme and name without redeploying the whole configuration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ApplicationInsights optional                                 | **Type** [ApplicationInsights](#applicationinsights) **Description** Settings to plug to and configure the [AppInsights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview) monitoring tool.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| DataProtection optional                                      | **Type** [DataProtection](#dataprotection) **Description** Settings to configure the encryption used for the authentication cookies and the anti-forgery tokens. **Info:** data protection can be configured to share the keys between several instances of Usercube's server, for example when deployed in a cluster where the servers do not have the same machine id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| InstallationDirectoryPath default value: Usercube-Server.exe | **Type** String **Description** Path of the installation directory. **Info:** used to read other configuration files. **Example**`appsettings.json   {     �    "InstallationDirectoryPath": "C://identitymanagerContoso/Runtime"   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| MailSettings optional                                        | **Type** [MailSettings](#mailsettings) **Description** Settings to configure the email service.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| NotUseAgent default value: false                             | **Type** Boolean **Description** `True` to disable the use of the [agent](/docs/identitymanager/6.1/core-concepts/architecture/index.md). **Example**`appsettings.json   {     �     "NotUseAgent":  true   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| OpenIdClients optional                                       | **Type** OpenIdClient List **Description** List of hashed secrets used to override the plain-text secrets from the [OpenIdClient](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md) XML configuration. **Info:** this way, Usercube stores only hashed secrets, for security purposes. **Note:** each environment must have its own secret, distinct from the others. **Example**`appsettings.json   {     �     "OpenIdClients": {       "Job": {         "HashedSecret": "K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols"       },       "PowerBI": {         "HashedSecret": "7b8N2NWka5alDrjM7rFqf7+xqq9LIcT5jSoQ+1Ci2V0"       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| PowerBISettings optional                                     | **Type** [PowerBISettings](#powerbisettings) **Description** Settings to configure the API used by Power BI to access Usercube data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Serilog optional                                             | **Type** [Serilog](/docs/identitymanager/6.1/troubleshooting-support/monitoring/index.md) **Description** Settings to configure the logging service, complying to the [Logger](/docs/identitymanager/6.1/troubleshooting-support/monitoring/index.md) properties and structure. **Example**`appsettings.json   {     �     "Serilog": {       "WriteTo": [ "Console" ],       "MinimumLevel": {         "Default": "Error",         "Override": {           "Usercube": "Information"         }       }     }   }`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Swagger optional                                             | **Type** [Swagger](#swagger) **Description** Enabling [Swagger](https://swagger.io/tools/swagger-ui/) enables visualizing and interacting with the API's resources without having any of the implementation logic in place. **Info:** it is automatically generated from Usercube's API, with the visual documentation making it easy for back-end implementation and client-side consumption.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TempFolderPath default value: ../Temp                        | **Type** String **Description** Path to the temporary folder which contains: - `ExportOutput`: directory storing data exported from connectors. - `JobLogs`: directory storing task instance logs. - `Reports`: directory storing generated reports. - `Packages`: directory storing the downloaded package logos. - `PolicySimulations`: directory storing the files generated by policy simulations. - `ProvisioningCache.txt`: file storing the clustered provisioning cache. **Note:** when enabled, this file can be used to coordinate the API cache among clusters. - `CorrelationCache.txt` - `RiskCache.txt` - `ExpressionCache.txt` - `scheduler.lock` - `connector.txt` - `container.reset.txt`: file acting as a reset command for Usercube's server, i.e. any change to this file triggers the reset service, thus reloading all the services instantiated by the server. **Note:** this path can be overridden by **ResetSettings** > **FilepathResetService**. - `Mails`: directory storing the email messages. **Note:** this path can be overridden by **ResetSettings** > **PickupDirectory**. - `Deployment` **Note:** these elements can be removed, but make sure to restart the server after doing so. **Example**`appsettings.json   {     �     "TempFolderPath": "../Temp"   }` |
| WorkFolderPath default value: ../Work                        | **Type** String **Description** Path of the work folder which contains: - `Collect`: directory storing the CSV source files exported by connectors. - `ProvisioningOrders`: directory storing the orders generated by the server. - `FulfillPowerShell`: PowerShell provisioner's working directory. - `FulfillRobotFramework`: Robot Framework's provisioner working directory. - `ExportCookies`: directory storing the cookies used for incremental export. - `Synchronization`: directory storing the agent's data collection results. - `Upload`: directory storing the uploaded media like uploaded pictures, before they are inserted into the database. - `appsettings.connection.json` **Note:** these elements must not be removed, because doing so may disrupt Usercube's execution after restarting. **Example**`appsettings.json   {     �     "WorkFolderPath": "../Work"   }`                                                                                                                                                                                                                                                                                                                                                                                                            |

## Swagger

| Name             | Details                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled required | **Type** Boolean **Description** `True` to enable Swagger. **Example**`appsettings.json   {     �     "Swagger": {       "Enabled": false     },   }` |

## EncryptionCertificate

This information can be set one of two ways:

- As a [Public Key Cryptography Standards (PKCS) #12](https://en.wikipedia.org/wiki/PKCS_12) archive
  (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the _Agent_'s host file system. The archive contains both the public key
  certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key.

  NETWRIX recommends using Windows' certificate store.

  On the other hand, the PFX file takes priority over Windows' certificate, which means that when
  `File` is specified then the PFX certificate is used, even if the options for Windows'
  certificate are specified too.

  In both ways, missing and/or incorrect settings trigger an error and no certificate is loaded.

#### As a PFX file

> For example:
>
> ```
>
> {
>     ...
>     "EncryptionCertificate": {
>         "File": "C:/identitymanagerAgentContoso/contoso.pfx",
>         "Password": "oarjr6r9f00"
>      }
>  }
>
> ```

The archive is set using the following attributes:

| Name              | Details                                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| File required     | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system. |
| Password optional | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password.                     |

Storing a `.pfx` file password in plain text in a production environment is strongly discouraged. It
should always be encrypted using the
[Usercube-Protect-CertificatePassword tool](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md).

The archive is set using the following attributes:

| Name              | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| File required     | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive path on the host file system.                                                                                                                                                                                                                                                                 |
| Password optional | **Type** String **Description** [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive password. **Info:** storing a `.pfx` file's password in plain text in a production environment is strongly discouraged. It should always be encrypted using the [`Usercube-Protect-CertificatePassword.exe` tool](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md). |

#### As a Certificate in the Windows Store

> For example:
>
> ```
>
>  {
>     ...
>     "EncryptionCertificate": {
>          "DistinguishedName":"UsercubeContoso",
>          "StoreLocation": "LocalMachine",
>          "StoreName": "AuthRoot"
>      }
>  }
>
> ```

The Windows certificate is set using these attributes:

| Name                       | Details                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| DistinguishedName optional | **Type** String **Description** _SubjectDistinguishedName_ of the store certificate. **Note:** required when `Thumbprint` is not specified. |
| Thumbprint optional        | **Type** String **Description** _Thumbprint_ of the store certificate. **Note:** required when `DistinguishedName` is not specified.        |
| StoreLocation required     | **Type** String **Description** Location of the relevant Windows certificate store: `LocalMachine` or `CurrentUser`.                        |
| StoreName required         | **Type** String **Description** Name of the relevant Windows certificate store.                                                             |

#### Using Azure Key Vault

If the certificate is saved in Azure Key Vault, we must define the certificate identifier and the
[Vault connection](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

```

"EncryptionCertificate": {
    "CertificateAzureKeyVault": "<CertificateIdentifier>"
}

```

#### Disabling file encryption

The encryption of specific files can be disabled via the following attribute:

| Name                            | Details                                                                                                                                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EncryptFile default value: true | **Type** Boolean **Description** `True` to encrypt specific files such as logs or temporary files. **Example**`appsettings.json   {     �     EncryptionCertificate": {       "EncryptFile": false     }   }` |

## MailSettings

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "MailSettings": {
>     "FromAddress": "no-reply@acme.com",
>     "PickupDirectory": "C:/identitymanagerDemo/Temp/Mails",
>     "UseSpecifiedPickupDirectory": true,
>     "UseDefaultCredentials": false,
>     "SecureSocketOption": "StartTlsWhenAvailable"
>   }
> }
> ```

| Name                                             | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FromAddress required                             | **Type** String **Description** Email address used as sender for Usercube's emails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| AllowedDomains optional                          | **Type** String **Description** List of allowed domains, separated by `;`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CatchAllAddress optional                         | **Type** String **Description** Email address to be used as catchAll.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CatchAllCCAddress optional                       | **Type** String **Description** Email address to be used as CC catchAll.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Enabled default value: true                      | **Type** Boolean **Description** `True` to activate Usercube's email services.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| EnableSsl default value: false                   | **Type** Boolean **`DEPRECATED`**: EnableSsl won't be supported in the future. Please specify a `SecureSocketOption` instead. To keep the same behavior as EnableSsl: `True`, use the setting `SecureSocketOption`: `StartTls`. **Description** `True` to encrypt communication with the SMTP server. **Note:** to be used only when `UseSpecifiedPickupDirectory` is set to `false`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| SecureSocketOption default value: Auto           | **Type** String **Description** Specifies the encryption strategy to connect to the SMTP server. _If set, this takes priority over `EnableSsl`_. `None`: No SSL or TLS encryption should be used. `Auto`: Allow the mail service to decide which SSL or TLS options to use (default). If the server does not support SSL or TLS, then the connection will not be encrypted. `SslOnConnect`: The connection should use SSL or TLS encryption immediately. `StartTls`: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server. If the server does not support the STARTTLS extension, then the connection will fail and a NotSupportedException will be thrown. `StartTlsWhenAvailable`: Elevates the connection to use TLS encryption immediately after reading the greeting and capabilities of the server, but only if the server supports the STARTTLS extension. **Note:** to be used only when `UseSpecifiedPickupDirectory` is set to `false`. |
| Host optional                                    | **Type** String **Description** Name or IP address of the host used for SMTP transactions. **Note:** required when `UseSpecifiedPickupDirectory` is set to `false`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Password optional                                | **Type** String **Description** Password to be used with the user name as credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| PickupDirectory optional                         | **Type** String **Description** Path of the folder where Usercube will save the email messages. **Note:** useful and required when `UseSpecifiedPickupDirectory` is set to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Port optional                                    | **Type** String **Description** Port used for SMTP transactions. **Note:** required when `Host` is defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| UseDefaultCredentials default value: false       | **Type** Boolean **Description** `True` to use in requests the default credentials instead of those from `UserName` and `Password` here.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| UserName optional                                | **Type** String **Description** User name to be used with the user name as credentials.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| UseSpecifiedPickupDirectory default value: false | **Type** Boolean **Description** `True` to save email messages to the folder specified in `PickupDirectory` instead of sending them to their recipients through the host specified in `Host`. **Note:** required when `Host` is not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## ApplicationInsights

> For example:
>
> ```
>
> appsettings.json
>
> {
>   ...
>   "ApplicationInsights": {
>     "InstrumentationKey": "<AppInsights instance's key>"
>   }
> }
> ```

| Name                                   | Details                                                                                                                                                                                                                                                                                                   |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InstrumentationKey default value: null | **Type** String **Description** Key linked to the AppInsights instance to which the server's logs, requests, dependencies and performance are to be sent. [See Microsoft's documentation to create an instrumentation key](https://docs.microsoft.com/en-us/azure/azure-monitor/app/create-new-resource). |

The logs sent to AppInsights are configured through the
[Logger properties](/docs/identitymanager/6.1/troubleshooting-support/monitoring/index.md).

## PowerBISettings

> For example:
>
> ```
> appsettings.json
>
> {
>   "PowerBISettings": {
>     "PageSize": 500
>   }
>
> }
> ```

| Name                         | Details                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| PageSize default value: 1000 | **Type** Int32 **Description** Size of the page containing the data returned by the API. |

## DataProtection

> For example:
>
> ```
> appsettings.json
>
> {
>   "DataProtection": {
>     "KeysPath": "/home/DataProtection",
>     "X509KeyFilePath": "../identitymanager.pfx",
>     "X509KeyFilePassword": "secret"
>   },
> }
> ```

| Name                                           | Details                                                                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| KeysPath default value: ../Work/DataProtection | **Type** String **Description** Path of the location where the keys' descriptions are stored. |
| X509KeyFilePath optional                       | **Type** String **Description** Path of the custom certificate used to protect the keys.      |
| X509KeyFilePassword optional                   | **Type** String **Description** Password of the custom certificate used to protect the keys.  |

## AppDisplay

> For example:
>
> ```
> appsettings.json
>
> {
>   ...
>   "AppDisplay": {
>     "PrimaryColor": "#01CDE9",
>     "SecondaryColor": "#EA6E1A",
>     "BannerColor": "#EA6E1A",
>     "BannerTextColor": "#ffffff",
>     "ApplicationNamePrefix": "QA - ",
>     "ApplicationName": "USERCUBE"
>   },
>   ...
> }
> ```

| Name                           | Details                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ApplicationName optional       | **Type** String **Description** Name of the application, visible on the application's tabs.                               |
| ApplicationNamePrefix optional | **Type** String **Description** Prefix to be displayed before the application name.                                       |
| BannerColor optional           | **Type** String **Description** HEX code of the color for the banner, i.e. the header displaying logo and navigation bar. |
| BannerTextColor optional       | **Type** String **Description** HEX code of the color for the banner's text.                                              |
| PrimaryColor optional          | **Type** String **Description** HEX code of the color for the highlighted buttons.                                        |
| SecondaryColor optional        | **Type** String **Description** HEX code of the color for the background of the authentication screen.                    |

[See more details on application display settings](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md).

# Server Configuration

Usercube Server's technical configuration includes settings on end-user authentication, database
connection and some general-purpose settings.

## Configuration Files

The Server configuration is included in the Server's appsettings set.

The appsettings set content can be written to appsettings.json in the Server's working directory or
to environment variables. See the
[ Architecture ](/docs/identitymanager/6.1/core-concepts/architecture/index.md)
topic for additional information.

The server appsettings supported attributes and sections are described in the following sections:

- Database Connection
- End-User Authentication
- General-Purpose Settings

See
the[ Connection to the Database ](/docs/identitymanager/6.1/installation-setup/database-setup.md),
[ End-User Authentication ](/docs/identitymanager/6.1/access-control-security/authentication/end-user-authentication.md)
and
[ Application Settings ](/docs/identitymanager/6.1/installation-setup/server-configuration.md)
topics for additional information.

## Secret and Certificate Management

All the certificates and secrets present in the settings can be loaded with an Azure Key Vault.

See the
[ Azure Key Vault ](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
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

# RSA Encryption

Usercube provides a few options to protect sensitive data via RSA encryption.

## Overview

Sensitive data can be RSA encrypted by using Usercube's tools:

- [`Usercube-Protect-X509JsonValue.exe`](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md)
  to encrypt given values;
- [`Usercube-Protect-X509JsonFile.exe`](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md)
  to encrypt a whole file.

  The file encryption tool should be used only on files that contain only plain text values, not
  already encrypted ones.

Once encrypted, sensitive values can be added to the `appsettings.encrypted.json` file. Usercube
will read first the values from the encrypted appsettings file, before reading those from the usual
non-encrypted appsettings file.

These methods require an [X.509 public key certificate](https://en.wikipedia.org/wiki/X.509) (the
same for the encrypted appsettings file and the tools).

The value encryption tool can be used to encrypt specific values to be added to the encrypted
appsettings file without having to encrypt the whole file again.

## Focus on the Encrypted Appsettings File

The `appsettings.encrypted.json` file contains the `appsettings.json` file's sensitive setting
values which are protected by RSA encryption.

This file follows the exact same structure as the
[server's configuration files](/docs/identitymanager/6.1/installation-setup/server-configuration.md).

### Read the Encrypted File

Usercube can use an RSA decoding algorithm fed by a
[public-key certificate](https://en.wikipedia.org/wiki/X.509) in order to read the encrypted
application settings.

This requires the usual appsettings file(s) to have `UseEncryptedAppsettings` set to `true`. See
below.

```
appsettings.json and/or appsettings.agent.json

{
    ...
    "EncryptionCertificate": {
        "File": "./identitymanager.pfx",
        "Password": "secret",
        "UseEncryptedAppsettings": true
    }
}
```

This way, values from the encrypted file take priority over the values from the non-encrypted
appsettings files.

> For example, if `Password` exists in both the encrypted file and the non-encrypted file, then the
> value from the encrypted file is used.
