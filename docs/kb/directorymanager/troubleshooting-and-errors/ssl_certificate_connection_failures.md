---
description: >-
  Resolves SSL/TLS certificate validation failures in Netwrix Directory Manager
  Admin Center after an upgrade, including expired, revoked, self-signed, and
  incomplete-chain certificate scenarios.
keywords:
  - SSL Certificate
  - certificate is invalid
  - TLS certificate validation
  - SSL connection failure
  - expired certificate
  - self-signed certificate
  - certificate chain
  - Trusted Root CA
  - Directory Manager
  - X509Certificate2
  - SslPolicyErrors
  - certificate revocation
sidebar_label: SSL Certificate Connection Failures
tags:
  - troubleshooting-and-errors
  - kb
title: "SSL Certificate Connection Failures"
knowledge_article_id: kA0Qk000000XXXXKAA
products:
  - directorymanager
---

# SSL Certificate Connection Failures

## Symptom

One or more of the following symptoms may be present in your environment:

- Authentication failures when accessing Netwrix Directory Manager Admin Center
- LDAP connection errors
- "The remote certificate is invalid" errors
- HTTP 401 Unauthorized responses
- Service fails to start or authenticate users

## Cause

The upgraded version implements strict SSL/TLS certificate validation that enforces:
- Certificate validity period checking
- Certificate chain validation with system trust store
- Root certificate must exist in Trusted Root CA store
- Online revocation checking

The upgrade may reject self-signed certificates or certificates with incomplete chains that the previous version accepted.

## Resolution

### Diagnostic Steps

1. **Check Application Logs:**
   - Review Directory Manager Admin Center logs for SSL/certificate errors.
   - Look for exceptions related to `X509Certificate2` or `SslPolicyErrors`.

2. **Verify Certificate Installation:**
   ```
   certlm.msc
   ```
   - Navigate to: **Trusted Root Certification Authorities** > **Certificates**.
   - Confirm the certificate is present.

3. **Check Certificate Validity:**
   - Double-click the certificate.
   - Verify it is not expired (check **Valid from** and **Valid to** dates).
   - Check **Certificate Status** — should show **This certificate is OK**.

4. **Verify Certificate Chain:**
   - In certificate properties, go to the **Certification Path** tab.
   - All certificates in the chain should show as valid.
   - No red X marks should appear.

5. **Test Certificate Thumbprint:**
   - Note the certificate thumbprint from certificate details.
   - Verify it matches the expected certificate.

### Resolution Steps

**For Self-Signed Certificates:**

1. **Install certificate in Trusted Root CA store:**
   ```
   certlm.msc
   ```
   - Navigate to: **Trusted Root Certification Authorities** > **Certificates**.
   - Right-click **Certificates** > **All Tasks** > **Import**.
   - Select your certificate file.
   - Complete the import wizard.

2. **Verify installation:**
   - Confirm certificate appears in Trusted Root CA store.
   - Check thumbprint matches expected value.

3. **Restart services** — restart whichever applies to your environment:
   - IIS Application Pool (if using IIS)
   - Directory Manager Admin Center service
   - The web application

**For Expired Certificates:**

1. Obtain new certificate with valid dates.
2. Install new certificate in Trusted Root CA store.
3. Update service configuration to use new certificate.
4. Remove old expired certificate from store.
5. Restart services.

**For Revoked Certificates:**

1. Obtain new non-revoked certificate.
2. Install in Trusted Root CA store.
3. Update configuration.
4. Restart services.

**For Incomplete Certificate Chains:**

1. Obtain all intermediate certificates.
2. Install intermediate certificates in Intermediate Certification Authorities store.
3. Ensure root certificate is in Trusted Root CA store.
4. Verify chain builds correctly.
5. Restart services.

### Verification after Resolution

1. **Test authentication:**
   - Access Directory Manager Admin Center login page.
   - Attempt to authenticate.
   - Verify successful login.

2. **Check logs:**
   - Confirm no SSL/certificate errors.
   - Verify successful LDAP connections.

3. **Monitor services:**
   - Ensure services remain running.
   - Check for any recurring certificate errors.
