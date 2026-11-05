---
title: "Add a certificate authority"
description: "Add the public certificate of a certificate authority to the Ubuntu trusted certificate store so that downloads work behind SSL inspection."
sidebar_position: 100
---

This page applies to the deprecated ISO appliance. For the supported deployment method, see [Legacy ISO installation](./legacy-iso-installation.md).

When an environment uses SSL inspection or decryption, the public certificate of the inspecting certificate authority (CA) must be in the `ca-certificates` store of Ubuntu. Without the certificate, downloads such as upgrades fail with SSL handshake errors.

## Prerequisites

- Shell access with `sudo` rights to the node.
- The address and port of the proxy that performs the inspection, if the node uses an explicit proxy.

## Export the certificate authority certificate

1. Output the certificate chain that the proxy presents. The example uses the proxy `192.0.2.3:8080`. Replace it with the address of your proxy, or remove the `-proxy` argument if the node doesn't use an explicit proxy.

   ```bash
   echo -n | openssl s_client -proxy 192.0.2.3:8080 -showcerts -connect example.com:443 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'
   ```

2. Copy the last certificate in the output, from `-----BEGIN CERTIFICATE-----` to `-----END CERTIFICATE-----`, into a file named `MyCA.crt` in `/usr/share/ca-certificates`.

3. Check the certificate:

   ```bash
   openssl x509 -in /usr/share/ca-certificates/MyCA.crt -text -noout
   ```

## Verify that the connection fails before you add the certificate

Request an HTTPS site through the proxy. The request fails because the certificate is self-signed or issued by an unknown authority:

```bash
wget --delete-after https://example.com -e use_proxy=on -e https_proxy=192.0.2.3:8080
```

The error resembles the following:

```text
ERROR: cannot verify example.com's certificate, issued by 'O=<proxy-name>,CN=<proxy-name>':
  Self-signed certificate encountered.
```

## Add the certificate to the trusted store

1. Start the certificate configuration:

   ```bash
   sudo dpkg-reconfigure ca-certificates
   ```

2. In the dialog, select `MyCA.crt` so that Ubuntu trusts it.

3. Run the `wget` command again. The request now succeeds:

   ```bash
   wget --delete-after https://example.com -e use_proxy=on -e https_proxy=192.0.2.3:8080
   ```

   The output resembles the following:

   ```text
   Proxy request sent, awaiting response... 301 Moved Permanently
   Location: https://www.example.com/ [following]
   Connecting to 192.0.2.3:8080... connected.
   Proxy request sent, awaiting response... 200 OK
   ```
