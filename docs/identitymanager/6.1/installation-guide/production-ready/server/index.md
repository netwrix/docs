---
title: "Install the Server"
description: "Install the Server"
sidebar_position: 30
---

# Install the Server

Usercube Server can be installed on the same workstation as the database or on a separate
workstation. If you are installing Usercube within the SaaS offering, this section is moot. You can
skip directly to [Set up End-User Authentication](#set-up-end-user-authentication).

Please make sure that the
[server requirements](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md)
are met before going further.

## Server Working Directory

In
[Create a Working Directory](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md),
the server executable has been extracted to the
[working directory](/docs/identitymanager/6.1/installation-guide/production-ready/working-directory/index.md)
as `Usercube-Server.exe` and `Usercube-Server.dll` and will enable a user or IIS to run the Usercube
Server.

## Set up the License Key

The license key provided by Usercube must be set up in the
[appsetting.json > License](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md)
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

![IIS Settings](/images/identitymanager/6.1/installation-guide/production-ready/server/iis_settings.webp)

An SSL Certificate should also be
[set to the IIS Server](https://docs.microsoft.com/en-US/iis/manage/configuring-security/how-to-set-up-ssl-on-iis)
to perform HTTPS communication with end-users.

## Hosting Bundle

You need to install the
[dotnet hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) (version 8.0 or
higher) to be able to run dotnet application.

## Select a Server Identity

The Usercube Server, through the IIS Website, should be assigned a
[service account with the relevant permissions](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md).

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

        ![New Login](/images/identitymanager/6.1/installation-guide/production-ready/server/newlogin.webp)

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

    ![Bulk](/images/identitymanager/6.1/installation-guide/production-ready/server/bulk.webp)

15. Confirm with **OK**.

Usercube Server now has the required permissions to access the database.

### Set the working directory permissions

The Usercube Server needs
[specific permissions](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md)
on the working directory to run, read synchronization output, and write provisioning orders.

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
   [`appsettings.json > EncryptionCertificate`](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/general-purpose/index.md)).

### Generate and use an identity server key pair

This is the key pair used by the Identity Server for end-user authentication purposes.

1. Generate a key pair using the OpenSSL method.
2. Store the key pair as a .`pfx` file or use the Windows
   [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-view-certificates-with-the-mmc-snap-in#certificate-store)
   (recommended).
3. Link the generated certificate to Usercube (see
   [`appsettings.json > IdentityServer`](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md)).

#### Certificate as a plain file

The following parameters are used to link the file to Usercube in the `IdentityServer` section.

[PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive can be
[password protected](https://www.openssl.org/docs/man1.1.0/man1/openssl.html#password-protected),
hence the `X509KeyFilePassword` attribute.

Storing a `.pfx` file password in plain text in a production environment is strongly discouraged.
The password should always be encrypted using the
[Usercube-Protect-CertificatePassword tool](/docs/identitymanager/6.1/integration-guide/executables/references/protect-certificatepassword/index.md).

                    ```

**appsettings.json**

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
[authentication method](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/database-connection/index.md):
[Windows Authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#windows-authentication)
or
[SQL Server authentication](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15#sql-server-authentication).
Windows authentication will require the IIS identity to be set to the custom Windows service account
used to log in to the Usercube's Windows Server session. SQL authentication will work with both the
_built-in_ app pool identity and a custom service account. This authentication method will write the
login and password directly in the connection string.

`Runtime/appsettings.json` is a
[technical configuration](/docs/identitymanager/6.1/integration-guide/network-configuration/index.md)
file that enables you to set up the connection between the Server and the Database through the
[ConnectionString](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/database-connection/index.md)
attribute.

The connection string is set up in the `Runtime/appsettings.json` configuration file which can be
edited with any text editor, such as [Notepad++](https://notepad-plus-plus.org/downloads/).

If the SQL Server is hosted on Azure, you should use the
[AzureCredentials](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/database-connection/index.md#azurecredentials)
setting before going further.

In the`Runtime/appsettings.json` file, find or write the `ConnectionString` attributes following the
examples shown below:

The **first example** sets a connection string using the Windows authentication
(`Integrated Security=SSPI`) to connect, on a local SQL Server system (`source=.`), to the
`UsercubeContoso` database created in
[Install the Database](/docs/identitymanager/6.1/installation-guide/production-ready/database/index.md).

The service account used by the Server to access the Database is either:

- A Windows account if the connection string was set up using `Integrated Security=SSPI`.
- A SQL Server account if the connection string was set up with a login/password.

**appsettings.json**

```

{
...
"ConnectionString": "data source=.;Database=UsercubeContoso;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
...
}

```

The **second example** sets a connection string using the SQL Server authentication.
`CONTOSO/identitymanagerContosoServer` has been set as the Usercube Server IIS website identity.

**appsettings.json**

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
[Hostname and DNS](/docs/identitymanager/6.1/installation-guide/requirements/server-requirements/index.md#hostname-and-dns).

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
[Technical Configuration Guide](/docs/identitymanager/6.1/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md).

## What's Next?

[Install the Agent](/docs/identitymanager/6.1/installation-guide/production-ready/agent/index.md)
is the next step of the process.
