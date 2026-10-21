---
title: "Create a CSR"
description: "Gather the names and subject details for a certificate signing request for Privilege Secure for Discovery, and create the request and key with OpenSSL."
sidebar_position: 20
---

A certificate signing request (CSR) is the file that you send to a certificate authority (CA) to get a TLS certificate for Privilege Secure for Discovery. The CA signs the request and returns the certificate. The private key stays with you. This page shows how to create the request and the key with OpenSSL 3.0, which Ubuntu Server 24.04 includes. If your organization has its own method to generate a CSR, use it, and make sure that the key is an RSA key. See [Prepare the certificate and key files](./certificate-files.md).

## Decide the names

Browsers check the name in the address bar against the Subject Alternative Names (SANs) of the certificate. They ignore the Common Name when a SAN list exists, and they reject a certificate that has no SANs. List every name that people or tools use to reach the product:

- The DNS name of the product, or of the load balancer in front of it.
- The fully qualified domain name (FQDN) of each node, when users or tools open a node directly.
- The short host name of each node, when they use it. Only a CA that your organization runs can issue a certificate for a short name.

## Gather the subject details

The CA decides which of the following fields it needs. Browsers use only the Common Name and the SANs.

| Field | Description | Example |
| --- | --- | --- |
| Common Name | The primary FQDN that the certificate secures. Repeat it in the SANs. | `nps-d.example.com` |
| Organization | The full legal name of your organization, including the corporate identifier. | `Example Corp` |
| Organizational Unit (OU) | Your department. | `Information Technology` |
| City or Locality | The city where your organization is legally incorporated. Don't abbreviate. | `Denver` |
| State or Province | The state or province where your organization is legally incorporated. Don't abbreviate. | `Colorado` |
| Country | The official two-letter country code where your organization is legally incorporated. | `US` |

## Create the key and the request

1. Run the following command. Replace the subject details and the names with your own values. Separate the SAN entries with commas.

   ```bash
   openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr \
     -subj "/C=US/ST=Colorado/L=Denver/O=Example Corp/CN=nps-d.example.com" \
     -addext "subjectAltName=DNS:nps-d.example.com,DNS:node01.example.com,DNS:node02.example.com,DNS:node03.example.com"
   ```

   The command creates `server.key`, the private key, and `server.csr`, the request. The key has no password, because the product needs an unencrypted key.

2. Check the request. The output must list every name.

   ```bash
   openssl req -in server.csr -noout -text | grep -A1 "Subject Alternative Name"
   ```

3. Send `server.csr` to the CA.

Keep `server.key` private. Don't send it to anyone, including the CA. When the CA returns the certificate, go to [Install a web server certificate](./web-server-certificate-with-sans.md).
