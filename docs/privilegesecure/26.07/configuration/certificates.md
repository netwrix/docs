---
title: "Replace the web console certificate"
description: "Bind a trusted certificate to the Privilege Secure web console, replace the proxy RDP certificate, and renew the JWT signing certificate."
sidebar_position: 70
---

# Replace the web console certificate

The installer creates a self-signed certificate for the Netwrix Privilege Secure for Access Management (Privilege Secure) console. It binds the certificate to the **SbPAM Web Service** website in Internet Information Services (IIS) on port 6500. Browsers don't trust a self-signed certificate. Replace it with a certificate from a trusted certificate authority (CA), then register services so they use the certificate's DNS name.

## Prerequisites

- A certificate for client and server authentication, issued by a trusted CA.
- The certificate and its private key are in the Local Computer Personal store on the Privilege Secure server.
- The issuing CA's root certificate is trusted on every client that opens the console.
- For a high availability deployment, a certificate that lists the fully qualified domain name (FQDN) of each server in the Common Name (CN) or Subject Alternative Name (SAN) field.

## Bind the certificate to the website

1. On the Privilege Secure server, open **Internet Information Services (IIS) Manager**.
1. Right-click the **SbPAM Web Service** website and select **Edit Bindings**.
1. Double-click the **https** binding.
1. In **SSL certificate**, select the certificate whose DNS name matches the name of your server.
1. Select **OK**, then **Close**.
1. Open Command Prompt as an administrator and run `iisreset`.

The installer saves the bindings of the website during an install or upgrade and applies them again. It restores each binding that has a certificate, as long as the certificate is still in a Local Computer certificate store. It skips a binding whose certificate is no longer there. An upgrade doesn't recreate or reconfigure the website, so it keeps custom bindings.

## Register services with the new DNS name

Set **NPS Rest URL** to the FQDN on the certificate and register the services. See [Set the NPS Rest URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).

## Replace the proxy RDP certificate

When a user connects to a session over Remote Desktop Protocol (RDP), the RDP proxy presents a certificate to the RDP client. The first time the Proxy Service starts, it creates a self-signed certificate that is valid for five years, so the client warns that "The identity of the remote computer cannot be verified". Replace it with a certificate that the clients trust to remove the warning.

This warning is separate from the "unknown publisher" warning. Signing the RDP file fixes the publisher warning, not this one. See [Configure and sign RDP files](/docs/privilegesecure/26.07/configuration/system-settings/rdp-files.md).

| The client shows | Cause | Fix |
| --- | --- | --- |
| An unknown publisher warning when you open the RDP file | The RDP file is unsigned, or Windows doesn't trust the certificate that signed it | [Sign the RDP file](/docs/privilegesecure/26.07/configuration/system-settings/rdp-files.md) |
| "The identity of the remote computer cannot be verified", or a name mismatch | The proxy certificate is self-signed, or its name doesn't match the proxy host | Replace the proxy RDP certificate, as this section describes |

### Prerequisites

- Administrator access to the server that runs the Proxy Service.
- A PKCS#12 file (`.pfx`) that holds the certificate, its private key, and the issuing chain. The file needs a password, because the import fails for a file without one.
- A certificate issued for server authentication, with the proxy host in its Subject Alternative Name (SAN) field. The proxy host is the host in the **RDP Proxy** setting of the connection profile. If that setting is blank, it is the name that users type to open the console. If the SAN doesn't list that name, the client shows a name mismatch warning. {/* TODO verify: confirm that the access policy's RDP proxy host is the connection profile **RDP Proxy** setting. */}
- The issuing CA's root certificate is trusted on every client computer that opens RDP sessions.

### Import the certificate

The import overwrites the existing proxy certificate and key without a backup. The import stores the private key unencrypted, so restrict access to the folders.

1. Copy the `.pfx` file to the proxy server and name it `rdp.pfx`, for example `C:\install\rdp.pfx`.
1. Back up the `C:\ProgramData\Stealthbits\PAM\tls\certs` and `C:\ProgramData\Stealthbits\PAM\tls\keys` folders.
1. Open Command Prompt as an administrator.
1. Run the import command:

   ```text
   "C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" ca import -p C:\install\rdp.pfx
   ```

1. When prompted, enter the password of the `.pfx` file. To supply it on the command line, add `-P <password>`.

The command prints "PKCS12 Credentials imported successfully". The command prints an error and still exits with code 0 when it fails, so read the output instead of checking the exit code in a script.

New RDP sessions use the new certificate. You don't restart the Proxy Service. Sessions that are already open keep the old certificate.

The proxy uses only a credential named `rdp`. The command names the credential after the file, so the file must be `rdp.pfx`. For a file with another name, add `-n rdp`:

```text
"C:\Program Files\Stealthbits\PAM\ProxyService\sbpam-proxy.exe" ca import -p C:\install\proxy-cert.pfx -n rdp
```

To confirm the result, start a new RDP session from the console. The identity warning no longer appears.

### Import on every proxy server

Each server that runs the RDP proxy has its own certificate. Nothing copies it between servers. Run the import on every server that proxies RDP, including remote proxy servers and each node of a high availability deployment. See [Install a proxy service on another server](/docs/privilegesecure/26.07/install/remote-proxy.md).

:::warning
If the private key in the `.pfx` file can't be read, the Proxy Service replaces the certificate and key with a new self-signed pair the next time it starts. Test the new certificate with a session, and keep the backup from the import steps.
:::

{/* TODO screenshot: the Windows RDP client warning "The identity of the remote computer cannot be verified" */}

## Renew the JWT signing certificate

The console signs sign-in tokens with a separate JSON Web Token (JWT) signing certificate. Renew it only when Netwrix Support tells you to. The procedure stops services, removes the existing certificate, and runs the key generator. For the steps, see [Renewing the JWT Signing Certificate](/docs/kb/privilegesecure/certificates-and-security/renewing-the-jwt-signing-certificate).

## Related topics

- [Installing an IIS Certificate](/docs/kb/privilegesecure/certificates-and-security/installing-an-iis-certificate)
- [Speeding Up CRL Checks on SbPAM Servers Without Internet Connectivity](/docs/kb/privilegesecure/certificates-and-security/speeding-up-crl-checks-on-sbpam-servers-without-internet-connectivity)
- [Security hardening checklist](/docs/privilegesecure/26.07/configuration/security-hardening.md)
