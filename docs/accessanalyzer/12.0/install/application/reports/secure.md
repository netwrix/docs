---
title: "Securing the Web Console"
description: "Securing the Web Console"
sidebar_position: 10
---

# Securing the Web Console

Published reports can be accessed in the Web Console. There are several options for enhancing
security.

Additional configuration options for enhanced security include:

- Enable SSL – The `BindingUrl` parameter shows the port used by the Access Analyzer web server for
  SSL reports. If SSL is enabled, the value will be HTTPS instead of HTTP.
- Enable Multiple Domain Access – The `AuthenticationDomains` parameter allows the Web Console to be
  accessed from multiple domains. By default this parameter is blank, allowing only domain users
  from the domain where the Access Analyzer Console resides to access the Web Console.
- Enable Single Sign-On – The `WindowsAuthentication` parameter allows domain users to be
  automatically logged into the Web Console. By default this parameter is set to `false`, which
  requires domain users to login each time the Web Console is accessed. See the
  [Enable Single Sign-On](/docs/accessanalyzer/12.0/install/application/reports/sso.md) topic for additional information.

    :::note
    The Web Console also supports using Microsoft Entra ID single sign-on. See the
    [Microsoft Entra ID Single Sign-On](/docs/accessanalyzer/12.0/install/application/reports/entraidsso.md) topic for additional information.
    :::


These parameters can be configured within the **WebServer.exe.config** file in the Web folder of the
Access Analyzer installation directory `…\STEALTHbits\StealthAUDIT\Web`.

## Enable SSL for the Web Console

To enable Secure Sockets Layer (SSL) for secure, remote connections to the Web Console it is
necessary to bind a certificate to the port. See the
[Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) topic for more
information. Follow the steps on the server where Access Analyzer is installed to enable SSL for the
Web Console.

:::note
The following steps require a certificate to be available. Organizations typically have
one or more system administrators responsible for Public Key Infrastructure (PKI) and certificates.
To continue with this configuration it will first be necessary to confer with the PKI administrator
to determine which certificate method will conform to the organization’s security policies.
Optionally, see [Use a Self-Signed Certificate for SSL](#use-a-self-signed-certificate-for-ssl) for
an Administrator PowerShell command which will both create and import a self-signed certificate.
:::


**Step 1 –** Import the certificate to the hosting server using the Certificate Management MMC
snap-in.

:::note
If using a self-signed certificate, it will also need to be imported.
:::


**Step 2 –** Create an SSL binding. It is necessary to use the certificate’s **Hash** value for the
`$certHash` value:

:::note
The following Administrator PowerShell dir command can be run on the certificate's “drive”
to find the **Hash** value of a certificate which was already created and the output will include
the Thumbprint (**Hash**) value and the certificate name:
:::


```
dir cert:\localmachine\my
```

- Run the following command using Administrator PowerShell to create the SSL binding, with the
  appropriate `certHash` value:

    ```
    $guid = "bdd5710f-7cbe-4f85-b8c1-da4bddf485a8"
    $certHash = "80F78FD2566793D2F39E748CDF6DED09B6F57A82" # the 'Thumbprint' value
    $ip = "0.0.0.0" # this means all IP addresses
    $port = "8082" # the default HTTPS port
    "http add sslcert ipport=$($ip):$port certhash=$certHash appid={$guid}" | netsh
    ```

**Step 3 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is
located within the Web folder of the Access Analyzer installation directory.

![WebServer.exe.config file in Notepad](/images/accessanalyzer/12.0/install/application/reports/webserverexeconfig.webp)

**Step 4 –** Change the value for the `BindingUrl` parameter from `http` to `https`:

```
<add key="BindingUrl" value="https://+:8082" />
```

- After changing the `BindingUrl` value in the **WebServer.exe.config** file, the Website URL must
  be updated to match the new value in the following places:
    - Access Analyzer's **Settings** > **Reporting** node
    - Access Analyzer's Published Reports Desktop icon properties
    - See the [Update Website URLs](#update-website-urls) topic for additional information.

**Step 5 –** Save and close the file.

**Step 6 –** Navigate to Services (`services.msc`). Restart the Netwrix Access Analyzer (formerly
Enterprise Auditor) Web Server service.

:::note
If also using the AIC, then SSL needs to be enabled for the AIC using this certificate.
See the Securing the AIC section of the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.
:::


The Web Console has been enabled for SSL communication. Access it using the server’s fully qualified
domain name and the HTTPS port (`https://[hostname.domain.com]:8082`). If a self-signed certificate
was used, then the client-side access to the Web Console will generate a Certificate error. See the
[Add the Certificate for Client-Side Access](#add-the-certificate-for-client-side-access) topic for
additional information.

### Update Website URLs

If the Binding URL value is updated in Access Analyzer's **WebServer.exe.config** file, the Website
URL must be updated to match the new value in the following places:

- Access Analyzer's Reporting node (**Settings** > **Reporting**)
- Access Analyzer's Published Reports Desktop icon properties

**Update the Website URL in the Reporting Node**

Follow the steps to update the Website URL in the **Settings** > **Reporting** node.

**Step 1 –** Expand **Settings** and select the **Reporting** node.

![Access Governance Reporting Settings page](/images/accessanalyzer/12.0/install/application/reports/websiteurlreporting.webp)

**Step 2 –** In the **Website URL** box, update the URL to: `https://[hostname.domain.com]:8082`

**Step 3 –** Click **Save**.

The Website URL is now updated.

Update the URL in the Published Reports Desktop Icon Properties

Follow the steps to update the URL in the Published Reports desktop icon's Published Report's
Properties window.

**Step 1 –** Right click on the **Published Reports** desktop shortcut and click **Properties**.

![Published Reports desktop icon properties](/images/accessanalyzer/12.0/install/application/reports/publishedreportsproperties.webp)

**Step 2 –** On the **Web Document** tab, update the **URL** in the text box to:
`https://localhost:8082/`

**Step 3 –** Click **Apply** and then **OK** to exit.

The URL is now updated.

### Remove Certificate from the Port

Remove or unbind the certificate from the port by running the following Administrator PowerShell
command:

```
netsh http delete sslcert ipport=0.0.0.0:8082 # ip and port used when binding
```

### List SSL Certificate Bindings

You can run the following PowerShell command to list all SSL certificate bindings and use this to
validate which certificates are bound to specific ports:

```
netsh http show sslcert
```

## Use a Self-Signed Certificate for SSL

If you want to use a self-signed certificate, use the `New-SelfSignedCertificate` cmdlet, which is
available in Administrator PowerShell 3.0+ to generate and import the certificate:

```
New-SelfSignedCertificate -DnsName machinename.domain.com -CertStoreLocation Cert:\LocalMachine\My
```

The output will show this info:

`Thumbprint                                Subject`

`----------                                -------`

`80F78FD2566793D2F39E748CDF6DED09B6F57A82  CN=machinename.domain.com`

The Thumbprint value is the certificate **Hash** value to be used when binding to the port. The port
can be the same as in HTTP (8082). Use this **Hash** value for Step 2 of the
[Enable SSL for the Web Console](#enable-ssl-for-the-web-console) instructions.

Creation and import of the self-signed certificate can be validated in Microsoft Management Console.
Follow these steps to confirm the certificate is in Microsoft Management Console.

**Step 1 –** Open Microsoft Management Console (`mmc.exe`).

![Microsoft Management Console Certificates snap-in](/images/accessanalyzer/12.0/install/application/reports/certificateaddsnapin.webp)

**Step 2 –** Select **File** > **Add/Remove Snap-in**. The Add or Remove Snap-ins window opens.
Select **Certificates**, and click **Add**. Then select **Computer account** in the Certificates
snap-in window.

![Microsoft Management Console Certificates snap-in Select Computer dialog](/images/accessanalyzer/12.0/install/application/reports/certificateselectcomputer.webp)

**Step 3 –** Click **Next** and select **Local computer**. Click **Finish**.

![Microsoft Management Console Certificates Add or Remove Snap-ins window](/images/accessanalyzer/12.0/install/application/reports/certificatesnapins.webp)

**Step 4 –** The certificate will appear in the Selected snap-ins list in the Add or Remove Snap-ins
window. Click **OK** to close the window.

**Step 5 –** Navigate to **Certificates** > **Personal** > **Certificates**. The certificate should
show in the pane on the right.

The self-signed certificate was created and imported. Repeat these steps for each client-side host.

### Add the Certificate for Client-Side Access

When you open the Web Console with SSL enabled, the web browser shows a Your connection isn't
private warning message. This can be removed by importing the certificate onto the client server.

Follow the steps to remove the certificate error.

**Step 1 –** Open the Web Console in your browser.

![Your connection isn't private warning in Microsoft Edge](/images/accessanalyzer/12.0/install/application/reports/certificateconnectionnotprivate.webp)

**Step 2 –** Click **Advanced**, and then use the link to continue to the site. This loads the main
page of the Web Console.

![Access Certificat Viewer from Not Secure error in Microsoft Edge address bar](/images/accessanalyzer/12.0/install/application/reports/certificatenotsecureerror.webp)

**Step 3 –** Click the **Not Secure** warning in the browser's address bar. Open the Certificate
Viewer from the warning details.

- In Microsoft Edge, click the **Your Connection to this site isn't secure** section, and then click
  the certificate icon.
- In Google Chrome, click **Certificate is not valid**.

![Web browser Certificate Viewer window](/images/accessanalyzer/12.0/install/application/reports/certificateviewer.webp)

**Step 4 –** On the Details tab of the Certificate Viewer, click **Export**. Save the security
certificate and close the Certificate Viewer.

![Certificate window](/images/accessanalyzer/12.0/install/application/reports/certificatewindow.webp)

**Step 5 –** Navigate to the save location from the previous step and open the exported security
certificate. On the Certificate window, click **Install Certificate**. The Certificate Import Wizard
opens.

![Certificate Import Wizard](/images/accessanalyzer/12.0/install/application/reports/certificateimportwizard.webp)

**Step 6 –** On the Certificate Import Wizard, select the Store Location as **Local Machine**, and
click **Next**. Keep the default selection of **Automatically select the certificate store based on
the type of certificate**. Navigate through the wizard to save this configuration. A pop-up message
should state that the import was successful. Click **OK** to close out all dialogs.

![Microsoft Management Console Trusted Root Certification Authorities Certificates](/images/accessanalyzer/12.0/install/application/reports/addcertificateconsole.webp)

**Step 7 –** In the Microsoft Management Console, check the **Trusted Root Certification
Authorities** > **Certificates**. The self-signed certificate should now be listed there.

The client-side access to the Web Console will no longer generate a certificate error. Repeat these
steps for each client-side host.
