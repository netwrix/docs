---
title: "Portal and gateway certificates"
description: "Identify the three certificates in a Remote Access Gateway deployment, replace the portal certificate, and regenerate the guacd certificate."
sidebar_position: 20
---

# Portal and gateway certificates

A Remote Access Gateway deployment uses three certificates. The installers and configuration scripts create all three as self-signed certificates, so the portal works after installation. Browsers show a certificate warning until you replace the portal certificate with one from a trusted certificate authority (CA).

| Certificate | Where | Created by | Used for |
|---|---|---|---|
| Portal certificate | `nginx.crt` and `nginx.key` in `C:\ProgramData\Stealthbits\PAM\RagPortal` | `Configure-Nginx.ps1` | The HTTPS connection from the user's browser to the portal on port 443. |
| Gateway certificate | The IIS binding of the **NPS Gateway Web Service** site on port 6550 | The gateway installer | The HTTPS connection from the portal to the gateway. |
| guacd certificate | `guacd.crt`, `guacd.key`, and `guacd.thumbprint` in `C:\ProgramData\Stealthbits\PAM\RagGateway` | `Configure-Gateway.ps1` | The TLS connection from the gateway to guacd on port 4822. |

The portal doesn't verify the gateway certificate, so you don't need to replace it for the portal to work.

The installer binds a self-signed certificate to the **NPS Gateway Web Service** site. To replace it, import your certificate into the Personal store (Local Computer\Personal) of the gateway server, and then change the binding in Internet Information Services (IIS) Manager: select the **NPS Gateway Web Service** site, select **Bindings** in the **Actions** pane, select the `https` binding on port 6550, select **Edit**, and select your certificate in **SSL certificate**.

For the certificate on the Netwrix Privilege Secure for Access Management (Privilege Secure) web console on port 6500, see [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md). For production, the gateway server should trust that certificate. See [Skip certificate validation for Privilege Secure](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md#skip-certificate-validation-for-privilege-secure).

## Replace the portal certificate

Replace the self-signed portal certificate with a certificate from your CA so that users' browsers trust it.

### Prerequisites

- A certificate from a trusted CA. Its Subject Alternative Name (SAN) must include the DNS name that users browse to.
- The certificate's private key.
- Both the certificate and the private key as PEM files. If your CA gave you a PFX file, convert it to PEM format first.
- The public certificate trusted on every client that opens the portal.

### Replace the files

1. Sign in to the portal server as an administrator.
2. Back up `C:\Program Files\Stealthbits\PAM\NPS.RagPortal\nginx\conf\nginx.conf`.
3. Copy your certificate and private key to `C:\ProgramData\Stealthbits\PAM\RagPortal`. For example, `portal.crt` and `portal.key`.
4. Open `nginx.conf` in a text editor.
5. Set `ssl_certificate` and `ssl_certificate_key` to the paths of your files. For example:

   ```text
   ssl_certificate     C:/ProgramData/Stealthbits/PAM/RagPortal/portal.crt;
   ssl_certificate_key C:/ProgramData/Stealthbits/PAM/RagPortal/portal.key;
   ```

6. Save the file.
7. Restart the **NPS Rag Portal** service, whose service name is `SbPAMRagPortal`.
8. Browse to the portal by its DNS name and confirm that the browser shows no certificate warning.

The private key file has no encryption. Limit read access to the file to administrators and to `NT SERVICE\SbPAMRagPortal`, the account that runs the **NPS Rag Portal** service.

:::warning
`Configure-Nginx.ps1` generates a new `nginx.crt` and `nginx.key` each time it runs, and it renders `nginx.conf` again. If you run it after you replace the certificate, you lose your certificate settings. Run it again only when you must change the gateway address. Back up `nginx.conf` and your certificate files first, and repeat the steps in this section afterward.
:::

## Regenerate the guacd certificate

Regenerate the guacd certificate when you need a new one. The gateway accepts only the guacd certificate whose thumbprint is in `Guacd.ServerThumbprint`, so the gateway and guacd must always use the same certificate.

1. On the gateway server, delete `guacd.thumbprint` from `C:\ProgramData\Stealthbits\PAM\RagGateway`.
2. Go to the gateway installation folder and run `Configure-Gateway.ps1` again with the same parameters as at install:

   ```powershell
   cd "C:\Program Files\Stealthbits\PAM\NPS.RagGateway"
   .\Configure-Gateway.ps1 -NPSGuacdHost <guacd-host> -NPSHost https://<nps-server>:6500
   ```

   The script generates a new `guacd.key`, `guacd.crt`, `guacd.pfx`, and `guacd.thumbprint`, and updates `Guacd.ServerThumbprint` in `appsettings.json`.
3. Restart the guacd container so it loads the new certificate. In the Ubuntu distribution, run `sudo docker restart guacd`.

:::warning
If you regenerate the certificate files without updating `Guacd.ServerThumbprint`, the gateway rejects the guacd certificate with a thumbprint mismatch, and no session can connect.
:::

## Related topics

- [Gateway settings reference](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md)
- [Install the portal](/docs/privilegesecure/26.07/remote-access-gateway/install/install-portal.md)
- [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md)
