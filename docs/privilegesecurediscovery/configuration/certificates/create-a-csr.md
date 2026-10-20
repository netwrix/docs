---
title: "Create a CSR"
description: "Gather the subject details that a certificate signing request for Privilege Secure for Discovery needs and generate the request."
sidebar_position: 20
---

A certificate signing request (CSR) is the file that you send to a certificate authority (CA) to get a TLS certificate for Privilege Secure for Discovery. If your organization has no method to generate a CSR, you can create one with OpenSSL. See [Create a web server certificate with SANs](./web-server-certificate-with-sans.md). If you need help, contact Netwrix Support.

## Gather the CSR details

Collect the following information before you generate the CSR.

| Field | Description | Example |
| --- | --- | --- |
| Common Name | The fully qualified domain name (FQDN) that the certificate secures. | `nps-d.example.com` |
| Organization | The full legal name of your organization, including the corporate identifier. | `Example Corp` |
| Organizational Unit (OU) | Your department. | `Information Technology` |
| City or Locality | The city where your organization is legally incorporated. Don't abbreviate. | `Denver` |
| State or Province | The state or province where your organization is legally incorporated. Don't abbreviate. | `California` |
| Country | The official two-letter country code where your organization is legally incorporated. | `US` |
