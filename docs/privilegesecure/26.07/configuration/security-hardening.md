---
title: "Security hardening checklist"
description: "Review the settings to lock down after you install Netwrix Privilege Secure, with links to the pages that cover each one."
sidebar_position: 80
---

# Security hardening checklist

After you install Netwrix Privilege Secure, review the settings that control how the server is exposed and how it protects secrets. Start with [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md), because the installer creates a self-signed certificate.

| Task | Where to find it |
|---|---|
| Replace the console certificate with one from a trusted certificate authority | [Replace the web console certificate](/docs/privilegesecure/26.07/configuration/certificates.md) |
| Renew the JWT signing certificate | [Renew the JWT signing certificate](/docs/privilegesecure/26.07/configuration/certificates.md#renew-the-jwt-signing-certificate) |
| Restrict the SSH algorithms that Privilege Secure offers | [Configure SSH algorithms](/docs/privilegesecure/26.07/configuration/ssh-algorithms.md) |
| Protect the encryption key in AWS Key Management Service | [Protect the encryption key with AWS KMS](/docs/privilegesecure/26.07/configuration/encryption-keys/aws-kms.md) |
| Keep the Privilege Secure server off the managed domain | [Security Considerations: Non-Domain-Joined Netwrix Privilege Secure Server](/docs/kb/privilegesecure/certificates-and-security/security-considerations-non-domain-joined-netwrix-privilege-secure-server) |
| Give the SQL Server backend only the permissions it needs | [Least Privilege Model for SQL Server Backend](/docs/kb/privilegesecure/database-and-backend/least-privilege-model-for-sql-server-backend) |

{/* TODO verify: SME sign-off for rows that make claims and are kept off this page until verified: account lockout at framework defaults, PasswordOptions, Swagger off, Jwt:IgnoreIpAddress, InsecureSkipVerify false, proxy minimum TLS, and RAG Gateway debug logging (structure-map 4.5) */}
