---
title: "Create a web server certificate with SANs"
description: "Generate a CSR with Subject Alternative Names, convert the issued certificate to PEM, and install it on Privilege Secure for Discovery."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the restart command for the API service in the container-based deployment at 26.09.1 (the source used `s1 stop api; sleep 20; s1 start api`). Evidence: none.

TODO: Confirm where the certificate and key are entered (**Configure** > **Server** section name and field labels) at 26.09.1. Evidence: none.

TODO: Confirm how to add a CA to the trust store in the container-based deployment. The linked page is in the legacy appendix. Evidence: none.

TODO: The self-signed procedure uses `openssl x509 -req`, which doesn't copy the SANs from the CSR. Confirm the supported way to create a self-signed certificate with SANs. Evidence: none.

TODO: The source page included a command to generate a CA certificate (`-CAkey rootCA.crt -signkey rootCA.key`) that was malformed; it was removed. Confirm whether a replacement is needed. Evidence: none.
:::

Install a web server certificate on Privilege Secure for Discovery to remove the TLS handshake errors that users see when they open the web interface in a browser. The process has four parts: generate a certificate signing request (CSR), have a certificate authority (CA) issue the certificate, convert the certificate to PEM format if needed, and enter the key and certificate in the product.

To gather the subject details for the CSR, see [Create a CSR](./create-a-csr.md). For file formats, see [Extract a certificate and key from a PFX file](./certificate-files.md).

## Prerequisites

- OpenSSL on the computer where you generate the CSR.
- The fully qualified domain names (FQDNs) and short host names that users and cluster nodes use to reach the product.

## Create a CSR with Subject Alternative Names

1. Create a file named `SANs.cnf` with the following content. Replace the `DNS.<n>` entries with the alternative names to include in the CSR. Include the external host name and the FQDN and short name of every node, plus any DNS round-robin name.

   ```ini
   [ req ]
   default_bits = 2048
   distinguished_name = req_distinguished_name
   req_extensions = req_ext
   [ req_distinguished_name ]
   countryName = Country Name (2 letter code)
   stateOrProvinceName = State or Province Name (full name)
   localityName = Locality Name (eg, city)
   organizationName = Organization Name (eg, company)
   commonName = Common Name (e.g. server FQDN or YOUR name)
   [ req_ext ]
   subjectAltName = @alt_names
   [alt_names]
   DNS.1 = nps-d.example.com
   DNS.2 = node01.example.com
   DNS.3 = node02.example.com
   DNS.4 = node03.example.com
   DNS.5 = node01
   DNS.6 = node02
   DNS.7 = node03
   ```

2. Generate the key and the CSR from the configuration file.

   ```bash
   sudo openssl req -out secureone.csr -newkey rsa:2048 -nodes -keyout secureone.key -config SANs.cnf
   ```

3. When prompted, enter the details for your organization. If a field has a default value, enter `.` to leave it blank.

   | Prompt | Example |
   | --- | --- |
   | Country Name | `US` |
   | State or Province Name | `California` |
   | Locality Name | `San Francisco` |
   | Organization Name | `Example Corp` |
   | Common Name | `nps-d.example.com` |

   You don't need to enter a password or passphrase. That optional field adds protection to the key pair.

4. Verify that the CSR contains the correct information.

   ```bash
   sudo openssl req -text -noout -verify -in secureone.csr
   ```

5. Submit the CSR to the party that issues the certificate.

## Convert a PFX file to PEM

The product needs PEM files. If the CA returns a PFX file, convert it. PEM, or Privacy Enhanced Mail, is a Base64-encoded DER certificate that you can read in a text editor.

1. Extract the signed certificate.

   ```bash
   sudo openssl pkcs12 -in <file>.pfx -nokeys -out secureone.crt -nodes
   ```

2. Extract the private key.

   ```bash
   sudo openssl pkcs12 -in <file>.pfx -nocerts -out secureone.key
   ```

3. Extract the CA certificates.

   ```bash
   sudo openssl pkcs12 -in <file>.pfx -cacerts -nokeys -chain -out ca-certificates.crt
   ```

## Verify the key and certificate

1. Confirm that the key and certificate match. The two hashes must be identical.

   ```bash
   openssl pkey -in secureone.key -pubout -outform pem | sha256sum
   openssl x509 -in secureone.crt -pubkey -noout -outform pem | sha256sum
   ```

2. Confirm that the key is valid.

   ```bash
   sudo openssl pkey -in secureone.key -text -noout
   ```

   The output begins with `Private-Key: (2048 bit)`.

3. Confirm that the syntax of the CA certificates and the certificate is correct.

   ```bash
   sudo openssl x509 -in ca-certificates.crt -text -noout
   sudo openssl x509 -in secureone.crt -text -noout
   ```

   The certificate output lists the version, serial number, signature algorithm, issuer, validity period, subject, and public key.

   ```text
   Certificate:
       Data:
           Version: 3 (0x2)
           Serial Number: <serial-number>
       Signature Algorithm: sha256WithRSAEncryption
           Issuer: C=US, ST=California, L=San Francisco, O=Example Corp, CN=nps-d.example.com
           Validity
               Not Before: <start-date>
               Not After : <end-date>
           Subject: C=US, ST=California, L=San Francisco, O=Example Corp, CN=nps-d.example.com
           Subject Public Key Info:
               Public Key Algorithm: rsaEncryption
                   Public-Key: (2048 bit)
   ```

## Install the certificate

1. Sign in to Privilege Secure for Discovery as an administrator.
2. Go to **Configure** > **Server** and find the section for the key and certificate.
3. Enter the contents of the key file and the certificate file in PEM format.
4. Save the configuration.

If the web interface doesn't work after you update the certificate, restart the API service through SSH.

```bash
s1 stop api; sleep 20; s1 start api
```

If a tool such as Microsoft Certificate Authority issued the certificate, add the public certificate chain of the CA to the `ca-certificates` store on the nodes. See [Add a certificate authority to the Ubuntu trusted authorities repository](../../appendix/legacy-iso/add-a-certificate-authority.md).

## Create a self-signed certificate

When you update an existing certificate, the `ca-certificates.crt` file can stay the same as long as it hasn't expired. To check it, run the following command.

```bash
sudo openssl x509 -in ca-certificates.crt -text -noout
```

To create a new certificate from the CSR with SANs, run the following command.

```bash
sudo openssl x509 -req -days 365 -in secureone.csr -signkey secureone.key -sha256 -out secureone.crt
```

## Remove the password from a private key

1. Copy the private key file into your OpenSSL directory, or specify the path in the command.
2. Run the following command.

   ```bash
   openssl rsa -in <file1>.key -out <file2>.key
   ```

3. Enter the passphrase. `<file2>.key` is now the unprotected private key.
4. To verify that the output is unencrypted, open the file in a text editor and check the header.

An encrypted key has `Proc-Type: 4,ENCRYPTED` and `DEK-Info` lines after the begin marker.

```text
-----BEGIN RSA PRIVATE KEY-----
Proc-Type: 4,ENCRYPTED
DEK-Info: DES-EDE3-CBC,<value>
<encoded-key>
-----END RSA PRIVATE KEY-----
```

An unencrypted key has no such lines.

```text
-----BEGIN RSA PRIVATE KEY-----
<encoded-key>
-----END RSA PRIVATE KEY-----
```

:::warning
An unencrypted private key is easier to use if the file is stolen. Restrict access to the file.
:::

For more information, see the [OpenSSL project](https://www.openssl.org/).
