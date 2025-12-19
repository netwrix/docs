---
title: "RSA Encryption"
description: "RSA Encryption"
sidebar_position: 30
---

# RSA Encryption

Usercube provides a few options to protect sensitive data via RSA encryption.

## Overview

Sensitive data can be RSA encrypted by using Usercube's tools:

- [`Usercube-Protect-X509JsonValue.exe`](/docs/identitymanager/6.1/integration-guide/executables/references/protect-x509jsonvalue/index.md)
  to encrypt given values;
- [`Usercube-Protect-X509JsonFile.exe`](/docs/identitymanager/6.1/integration-guide/executables/references/protect-x509jsonfile/index.md)
  to encrypt a whole file.

    The file encryption tool should be used only on files that contain only plain text values, not
    already encrypted ones.

Once encrypted, sensitive values can be added to the `appsettings.encrypted.json` and
`appsettings.encrypted.agent.json` files. Usercube will read first the values from the encrypted
appsettings files, before reading those from the usual non-encrypted appsettings files.

These methods require an [X.509 public key certificate](https://en.wikipedia.org/wiki/X.509) (the
same for the encrypted appsettings files and the tools).

The value encryption tool can be used to encrypt specific values to be added to the encrypted
appsettings files without having to encrypt the whole files again.

## Focus on the Encrypted Appsettings Files

The `appsettings.encrypted.json` and `appsettings.encrypted.agent.json` files contain respectively
the `appsettings.json` and `appsettings.agent.json` files' sensitive setting values which are
protected by RSA encryption.

These files follow the exact same structure as the
[agent's configuration files](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/index.md).

### Read the Encrypted Files

Usercube can use an RSA decoding algorithm fed by a
[public-key certificate](https://en.wikipedia.org/wiki/X.509) in order to read the encrypted
application settings.

This requires the usual appsettings file(s) to have `UseEncryptedAppsettings` set to `true`. See
below.

```
appsettings.json and/or appsettings.agent.json

{
    ...
    "EncryptionCertificate": {
        "File": "./identitymanager.pfx",
        "Password": "secret",
        "UseEncryptedAppsettings": true
    }
}
```

This way, values from the encrypted file take priority over the values from the non-encrypted
appsettings files.

> For example, if `Password` exists in both the encrypted file and the non-encrypted file, then the
> value from the encrypted file is used.
