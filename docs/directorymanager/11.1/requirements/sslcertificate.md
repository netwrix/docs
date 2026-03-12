---
title: "SSL Certificate for LDAP/Authentication"
description: "SSL Certificate for LDAP/Authentication"
sidebar_position: 60
---

# SQL Certificate for Windows Authentication

Before installing or configuring GroupID Admin Center, ensure all SSL/TLS certificates used for 
LDAP and authentication services meet the following requirements:

#### Certificate Installation Location
- **Self-signed certificates MUST be installed in the Trusted Root Certification Authorities store**
  - Store Location: `LocalMachine` (Computer account)
  - Store Name: `Root` (Trusted Root Certification Authorities)
  - Access via: `certlm.msc` → Trusted Root Certification Authorities → Certificates

#### Certificate Validity Requirements
Certificates are validated against these criteria:

1. **Certificate must not be null** - A valid certificate must be presented
2. **Certificate must be within validity period**
3. **Certificate must not be revoked**
4. **Certificate chain must be complete and trusted**
   - Chain must build successfully using system trust mode
   - All intermediate certificates must be available
   - Root certificate must exist in the Trusted Root CA store
5. **Root certificate thumbprint must match**

#### Installation Steps for Self-Signed Certificates

1. Open Certificate Manager for Local Machine:
   ```
   certlm.msc
   ```

2. Navigate to: **Trusted Root Certification Authorities** → **Certificates**

3. Right-click **Certificates** → **All Tasks** → **Import**

4. Follow the Certificate Import Wizard:
   - Select your certificate file (.cer, .crt, or .pfx)
   - Ensure "Place all certificates in the following store" is set to **Trusted Root Certification Authorities**
   - Complete the import

5. Verify the certificate appears in the Trusted Root CA store

6. Restart the GroupID Admin Center service/application pool