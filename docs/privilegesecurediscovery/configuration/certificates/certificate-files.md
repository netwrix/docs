---
title: "Prepare the certificate and key files"
description: "Learn which certificate and key the product accepts, and use OpenSSL to convert a PFX, DER, or PKCS#7 file to the PEM text that the product needs."
sidebar_position: 10
---

A certificate authority (CA) can return a certificate and key in several file formats. Privilege Secure for Discovery needs both in PEM format. This page lists what the product accepts, and shows how to convert the other formats with OpenSSL. The commands work with OpenSSL 3.0, which Ubuntu Server 24.04 includes.

## What the product accepts

The **Server Certificate** panel in **Configure** > **Server** checks the key and the certificate when you paste them. The panel accepts a pair only when it meets all of the following requirements:

- The key is an RSA key. The panel rejects EC keys. It doesn't enforce a minimum key size, so use 2048 bits or more.
- The key has no password. The panel rejects a key that begins with `-----BEGIN ENCRYPTED PRIVATE KEY-----`. It accepts both `-----BEGIN PRIVATE KEY-----` and `-----BEGIN RSA PRIVATE KEY-----`.
- The key and the certificate are PEM text that starts at a `-----BEGIN` line and ends at an `-----END` line. Any other text, such as the `Bag Attributes` lines that OpenSSL writes when it extracts a PFX file, makes the panel reject the file.
- The key matches the first certificate.
- The certificate field holds the server certificate first, followed by any intermediate certificates, one after the other. The product sends the whole text to browsers. A certificate field that starts with the CA certificate doesn't match the key.

A certificate that has no Subject Alternative Names (SANs) passes this check, but browsers reject it. See [Create a CSR](./create-a-csr.md).

## Certificate file formats

| Format | Extensions | Contents |
| --- | --- | --- |
| PEM | `.pem`, `.crt`, `.cer`, `.key` | Base64 text. The format that the product needs. |
| PKCS#12 (PFX) | `.pfx`, `.p12` | Binary. The server certificate, intermediate certificates, and private key in one password-protected file. Common on Windows. |
| PKCS#7 | `.p7b`, `.p7c` | Base64 text. Certificates only, with no private key. |
| DER | `.der`, `.cer` | Binary. Java-based servers mainly use it. |

PEM files use the following markers.

| Item | Begin marker | End marker |
| --- | --- | --- |
| Certificate | `-----BEGIN CERTIFICATE-----` | `-----END CERTIFICATE-----` |
| Private key | `-----BEGIN PRIVATE KEY-----` or `-----BEGIN RSA PRIVATE KEY-----` | The matching `END` line |
| Encrypted private key | `-----BEGIN ENCRYPTED PRIVATE KEY-----` | `-----END ENCRYPTED PRIVATE KEY-----` |
| Certificate signing request | `-----BEGIN CERTIFICATE REQUEST-----` | `-----END CERTIFICATE REQUEST-----` |

## Convert a PFX file to PEM

Run the commands on a computer that has OpenSSL. On Windows, use an OpenSSL build for Windows. See the [OpenSSL project](https://www.openssl.org/).

1. Go to the folder that has the PFX file.
2. Extract the private key without a password, and write it as clean PEM. The command asks for the password of the PFX file.

   ```bash
   openssl pkcs12 -in <file>.pfx -nocerts -nodes | openssl pkey -out server.key
   ```

3. Extract the certificates, and keep only the PEM blocks.

   ```bash
   openssl pkcs12 -in <file>.pfx -nokeys | sed -n '/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/p' > fullchain.crt
   ```

   `fullchain.crt` has the server certificate first, followed by the intermediate certificates. Open the file in a text editor, and confirm that the server certificate is first. If it isn't, move that block to the top.

4. Check that the key matches the certificate. The two hashes must be identical.

   ```bash
   openssl pkey -in server.key -pubout | sha256sum
   openssl x509 -in fullchain.crt -pubkey -noout | sha256sum
   ```

If the first command fails with `unsupported` and `RC2-40-CBC`, the PFX file uses an older encryption algorithm. Add `-legacy` to each `openssl pkcs12` command.

## Convert other formats

- **DER certificate to PEM:**

  ```bash
  openssl x509 -inform der -in <file>.cer -out server.crt
  ```

- **PKCS#7 certificates to PEM:**

  ```bash
  openssl pkcs7 -print_certs -in <file>.p7b | sed -n '/-----BEGIN CERTIFICATE-----/,/-----END CERTIFICATE-----/p' > certificates.crt
  ```

  A PKCS#7 file has no private key. Use the key that you created with the CSR.

- **Remove the password from a private key:**

  ```bash
  openssl pkey -in encrypted.key -out server.key
  ```

  Enter the password when the command asks for it.

:::warning
An unencrypted private key gives access to the certificate to anyone who gets the file. Restrict access to the file, and delete the copies that you no longer need.
:::
