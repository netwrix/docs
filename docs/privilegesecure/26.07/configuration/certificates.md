---
title: "Replace the web console certificate"
description: "Bind your own trusted certificate to the Netwrix Privilege Secure web console, then register services so they use the certificate's DNS name."
sidebar_position: 70
---

# Replace the web console certificate

The installer creates a self-signed certificate for the console and binds it to the **SbPAM Web Service** website in Internet Information Services (IIS) on port 6500. Browsers don't trust a self-signed certificate. Replace it with a certificate from a trusted certificate authority (CA), then register services so they use the certificate's DNS name.

## Prerequisites

- A certificate for client and server authentication, issued by a trusted CA.
- The certificate and its private key are in the Local Computer Personal store on the Netwrix Privilege Secure server, and the issuing CA's root certificate is trusted on every client that opens the console.

{/* TODO verify: store locations; the KB says the Trusted Root store */}

- For a high availability deployment, a certificate that lists the fully qualified domain name (FQDN) of each server in the Common Name (CN) or Subject Alternative Name (SAN) field.

## Bind the certificate to the website

1. On the Netwrix Privilege Secure server, open **Internet Information Services (IIS) Manager**.
1. Right-click the **SbPAM Web Service** website and select **Edit Bindings**.
1. Double-click the **https** binding.
1. In **SSL certificate**, select the certificate whose DNS name matches the name of your server.
1. Select **OK**, then **Close**.
1. Open Command Prompt as an administrator and run `iisreset`.

{/* TODO verify: the IIS site is named "SbPAM Web Service" in code and the KB calls it "Netwrix Privilege Secure Web Service". Confirm the name shown in IIS Manager on a 26.07 install. */}

An upgrade keeps a customer-changed binding that has a certificate.

{/* TODO verify: upgrade preserves custom certificate bindings (code: ConfigureSSL.ps1; not lab-verified). */}

## Register services with the new DNS name

Set **NPS Rest URL** to the FQDN on the certificate and register the services. See [Set the NPS REST URL and register services](/docs/privilegesecure/26.07/configuration/system-settings/services-url.md).

## Renew the JWT signing certificate

The console signs sign-in tokens with a separate JSON Web Token (JWT) signing certificate. Renew it only when Netwrix Support tells you to. The procedure stops services, removes the existing certificate, and runs the key generator. For the steps, see [Renewing the JWT Signing Certificate](/docs/kb/privilegesecure/certificates-and-security/renewing-the-jwt-signing-certificate).

## Related topics

- [Installing an IIS Certificate](/docs/kb/privilegesecure/certificates-and-security/installing-an-iis-certificate)
- [Speeding Up CRL Checks on SbPAM Servers Without Internet Connectivity](/docs/kb/privilegesecure/certificates-and-security/speeding-up-crl-checks-on-sbpam-servers-without-internet-connectivity)
- [Security hardening checklist](/docs/privilegesecure/26.07/configuration/security-hardening.md)
