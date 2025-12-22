---
title: "RSA Encryption"
description: "RSA Encryption"
sidebar_position: 20
---

# RSA Encryption

Identity Manager provides a few options to protect sensitive data via RSA encryption.

## Overview

Sensitive data can be RSA encrypted by using Netwrix Identity Manager (formerly Usercube)'s tools:

- [Usercube-Protect-X509JsonValue](/docs/identitymanager/6.2/integration-guide/executables/references/protect-x509jsonvalue/index.md)
  to encrypt given values;
- [Usercube-Protect-X509JsonFile](/docs/identitymanager/6.2/integration-guide/executables/references/protect-x509jsonfile/index.md)
  to encrypt a whole file.

    The file encryption tool should be used only on files that contain only plain text values, not
    already encrypted ones.

Once encrypted, sensitive values can be added to the `appsettings.encrypted.json` file. Netwrix
Identity Manager (formerly Usercube) will read first the values from the encrypted appsettings file,
before reading those from the usual non-encrypted appsettings file.

These methods require an [X.509 public key certificate](https://en.wikipedia.org/wiki/X.509) (the
same for the encrypted appsettings file and the tools).

The value encryption tool can be used to encrypt specific values to be added to the encrypted
appsettings file without having to encrypt the whole file again.

## Focus on the Encrypted Appsettings File

The `appsettings.encrypted.json` file contains the `appsettings.json` file's sensitive setting
values which are protected by RSA encryption.

This file follows the exact same structure as the [Server Configuration](/docs/identitymanager/6.2/integration-guide/network-configuration/server-configuration/index.md) files.

### Read the Encrypted File

Identity Manager can use an RSA decoding algorithm fed by a
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
