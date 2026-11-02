---
title: "JWT Signing Key"
description: "Learn where Threat Manager stores the key that signs login tokens, who can read it, and what happens when the key is missing."
sidebar_position: 42
---

# JWT Signing Key

The Threat Manager services sign login tokens with an RSA private key. The installer generates this JWT signing key on a fresh install. If a signing key already exists in the registry, the installer leaves it unchanged.

## Where the key is stored

The key is in the registry value `JwtSigningKey` under `HKLM\SOFTWARE\STEALTHbits Technologies\StealthDEFEND\Security`. DPAPI protects it with the Local Machine scope. Only SYSTEM and Administrators can read it. Grant read access manually to any service account that needs it.

Because DPAPI binds the key to the machine, copying the registry value to another host doesn't work. To move the key, see [Export the JWT Signing Key to Another Host](/docs/threatmanager/3.4/install/exportsigningkeys.md).

## When the key is missing

When the registry key doesn't exist, a service uses the certificate named by the `Jwt:CertificateThumbprint` setting. The service looks it up in the `LocalMachine\My` store. If it can't load that certificate, the service fails to start with the following message:

"Unable to load the JWT certificate with thumbprint '\{thumbprint\}': \{reason\}"

If there is no registry key, no thumbprint, and no legacy settings, the service falls back to an insecure built-in symmetric key. It prints the following warning:

"WARNING: Use of symmetric key is insecure. Re-run the installer to generate a secure JWT signing key"

Re-run the installer to generate a secure key.

## Installer errors

The installer step "Configure JWT Signing Key" fails with "Failed to configure the JWT signing key: \{reason\}" when it can't store the key.
