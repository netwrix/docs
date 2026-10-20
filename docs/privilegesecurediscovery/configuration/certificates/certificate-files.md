---
title: "Extract a certificate and key from a PFX file"
description: "Identify certificate file formats and use OpenSSL to extract the certificate and private key that Privilege Secure for Discovery needs."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm which PEM-format fields the **Configure** > **Server** certificate section accepts at 26.09.1 (certificate, key, chain). Evidence: none.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: The source page showed a third-party image of an OpenSSL command prompt that no longer loads. The image was removed; capture a screenshot of the OpenSSL prompt if one is needed.
:::

A certificate authority (CA) can return a certificate and key in several file formats. Privilege Secure for Discovery needs the certificate and key in PEM format. This page describes the formats and shows how to extract the PEM files from a PFX file with OpenSSL.

## Certificate file formats

| Format | Extensions | Contents |
| --- | --- | --- |
| PEM | `.pem`, `.crt`, `.cer`, `.key` | Base64 ASCII text. Preferred format. |
| PKCS#12 (PFX) | `.pfx`, `.p12` | Binary. Server certificate, intermediate certificates, and private key in one password-protected file. |
| PKCS#7 | `.p7b`, `.p7c` | Base64 ASCII text. Certificates only, no private key. |
| DER | `.der`, `.cer` | Binary. Mainly used by Java-based web servers. |

### PEM format

Most CAs provide certificates in PEM format. A `.pem` file can hold the server certificate, the intermediate certificate, and the private key. The server and intermediate certificates can also be in a separate `.crt` or `.cer` file, and the private key in a `.key` file. Open PEM files in any text editor. PEM is the preferred format for the certificate and key that you enter in the Privilege Secure for Discovery interface.

PEM files use the following markers.

| Item | Begin marker | End marker |
| --- | --- | --- |
| Certificate | `-----BEGIN CERTIFICATE-----` | `-----END CERTIFICATE-----` |
| Private key | `-----BEGIN RSA PRIVATE KEY-----` | `-----END RSA PRIVATE KEY-----` |
| Certificate signing request | `-----BEGIN CERTIFICATE REQUEST-----` | `-----END CERTIFICATE REQUEST-----` |

### PKCS#12 format

PKCS#12 certificates are binary files with the `.pfx` or `.p12` extension. A single file stores the server certificate, the intermediate certificate, and the private key, protected by a password. PKCS#12 is mainly used on Windows.

### PKCS#7 format

PKCS#7 is the Cryptographic Message Syntax Standard. Files use Base64 ASCII encoding with the `.p7b` or `.p7c` extension and store certificates only, not private keys. A PKCS#7 file is contained between the `-----BEGIN PKCS7-----` and `-----END PKCS7-----` markers.

### DER format

DER certificates are binary files with the `.der` or `.cer` extension.

## Extract the key and certificate from a PFX file

### Prerequisites

OpenSSL installed on the computer that has the PFX file. On Windows, use an OpenSSL build for Windows, such as the one linked from the [OpenSSL project](https://www.openssl.org/) wiki, and run the commands in a Command Prompt that you open as an administrator in the OpenSSL `bin` folder.

### Procedure

1. Open a terminal and go to the folder that contains the `.pfx` file.
2. Extract the private key.

   ```bash
   openssl pkcs12 -in <file>.pfx -nocerts -out <name>.key
   ```

   Enter the password that protects the PFX file. Then enter a new password to protect the `.key` file, and store that password securely.

3. Extract the certificate.

   ```bash
   openssl pkcs12 -in <file>.pfx -clcerts -nokeys -out <name>.crt
   ```

4. Remove the password from the private key. Privilege Secure for Discovery needs an unencrypted key.

   ```bash
   openssl rsa -in <name>.key -out <name>-decrypted.key
   ```

   Enter the password that you created in step 2.

The `.crt` file and both `.key` files are in the folder where you ran the commands.

On Windows, the commands are the same without the `openssl` prefix when you run them at the OpenSSL prompt. Use full file paths, for example `pkcs12 -in "C:\certs\<file>.pfx" -nocerts -out "C:\certs\<name>.pem"`. Open the extracted `.key` and `.crt` files in a text editor to view them.

:::warning
An unencrypted private key is a security risk if the file is stolen. Restrict access to the file and delete it when you no longer need it.
:::
