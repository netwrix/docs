---
title: "SSL Certificate Requirements for LDAP and Authentication"
description: "Meet the SSL/TLS certificate requirements for LDAP and authentication, and install self-signed certificates in the Trusted Root store."
keywords:
  - SSL certificate requirements
  - self-signed certificate
  - Trusted Root Certification Authorities
  - certlm.msc
  - LDAP over SSL
sidebar_position: 60
---

# SSL Certificate Requirements for LDAP and Authentication

Before you install or configure Directory Manager Admin Center, ensure all SSL/TLS certificates used for LDAP and authentication services meet the following requirements.

## Certificate installation location

**Self-signed certificates MUST be installed in the Trusted Root Certification Authorities store**. Use these values:

- Store location: `LocalMachine` (Computer account)
- Store name: `Root` (Trusted Root Certification Authorities)
- Access through: `certlm.msc` → Trusted Root Certification Authorities → Certificates

## Certificate validity requirements

Directory Manager validates certificates against these criteria:

1. **Certificate must not be null** - A valid certificate must be presented.
2. **Certificate must be within validity period**
3. **Certificate must not be revoked**
4. **Certificate chain must be complete and trusted**
   - The chain must build successfully using system trust mode.
   - All intermediate certificates must be available.
   - The root certificate must exist in the Trusted Root CA store.
5. **Root certificate thumbprint must match**

## Installation steps for self-signed certificates

To install a self-signed certificate:

1. Open Certificate Manager for Local Machine.

   ```
   certlm.msc
   ```

2. Go to **Trusted Root Certification Authorities** → **Certificates**.

3. Right-click **Certificates** → **All Tasks** → **Import**.

4. In the Certificate Import Wizard, select your certificate file (.cer, .crt, or .pfx).

5. Ensure "Place all certificates in the following store" is set to **Trusted Root Certification Authorities**.

6. Complete the import.

7. Verify the certificate appears in the Trusted Root CA store.

8. Restart the Directory Manager Admin Center service or application pool.
