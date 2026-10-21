---
sidebar_position: 2
sidebar_label: Centralizing reports
description: Encrypt PingCastle reports with RSA keys so you can transfer them over unsecured channels.
---
# Centralizing reports

## Report Encryption

For environments where you must transfer reports over unsecured channels, PingCastle supports RSA encryption.

:::note
If you're sending reports to PingCastle Enterprise, configure the matching private key in Enterprise so it can decrypt them. See [Decryption keys](/docs/pingcastleenterprise/4_0/configuration/decryption-keys).
:::

**Generate an RSA Key Pair**:
```
PingCastle.exe --generate-key
```

This generates a public/private key pair. The command outputs both keys that you'll add to your configuration.

**Configuration**:

Add the generated keys to `appsettings.console.json`:

**Public Key** (for encryption - distribute to scanning locations):
```json
{
  "encryptionSettings": {
    "encryptionKey": "default",
    "RSAKeys": [
      {
        "name": "default",
        "publicKey": "<RSAKeyValue><Modulus>YOUR_PUBLIC_KEY_HERE</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>"
      }
    ]
  }
}
```

**Private Key** (for decryption - keep secure at consolidation location):
```json
{
  "encryptionSettings": {
    "encryptionKey": "default",
    "RSAKeys": [
      {
        "name": "default",
        "privateKey": "<RSAKeyValue><Modulus>YOUR_PRIVATE_KEY_HERE</Modulus><Exponent>AQAB</Exponent><P>...</P><Q>...</Q><DP>...</DP><DQ>...</DQ><InverseQ>...</InverseQ><D>...</D></RSAKeyValue>"
      }
    ]
  }
}
```

**Encrypt or Decrypt Reports Manually**:
```bash
# Encrypt a report
PingCastle.exe --reload-report report.xml --encrypt

# Decrypt a report
PingCastle.exe --reload-report encrypted-report.xml
```

:::note
You can specify only one key for encryption, but you can use multiple keys for decryption. Key selection is automatic.
:::
