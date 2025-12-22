---
title: "Usercube-Protect-CertificatePassword"
description: "Usercube-Protect-CertificatePassword"
sidebar_position: 300
---

# Usercube-Protect-CertificatePassword

This tool helps protecting `.pfx` archives passwords. Given a plain text password, it generates an
encrypted version, that can be stored in a configuration file in place of the plain text one. The
tool uses a hard-coded secret RSA key to generate the encrypted password. Usercube uses the same key
to retrieve the plain text password and read the `.pfx` archive.

## Examples

Given a `.pfx` archive protected by the `secret` password, an encrypted version can be generated
with the following command:

```
./identitymanager-Protect-CertificatePassword.exe --pfx-password "secret"
```

The output is the following :

```

**ep4BsLtg5RVFVI1kEIMZbV1q7Bg2eAFzeD73YX5fV7eklSIqcJcxHsCQbyY2zKLppXSX+Zpwm7xU5QY6DTAJleFbWsP/p0fjXUn1agy1tQ6l6t6wvURBZcePEgu+ivNjpUENbDIBotPdzbpISLJIjQbISzHDWnHuWPk/l8h0wXU=@WrAj9YdcNK8cQvfopZa5g1QFc1hk6nPolkwQAkU2ORfXupgV7kaWgKF4W/UmC0XXg4zuaqpVui6ivB0jbLTiXgQ62o+bG9ZSEJLaur4d20TMRNadqnWTWPWhVJF6XiS4jX7sDvVrZO3sKQJMNzZSeTKmsl0w0boCBEkuHsWDA24=@0oLLKxcTJGxSx1uGvhexEA==**

```

This encrypted password can now be copied to the relevant location in a configuration file. For
example :

```
appsettings.json

{
...
 "EncryptionCertificate": {
    "File": "C:/identitymanagerAgentContoso/contoso.pfx",
    "Password": "ep4BsLtg5RVFVI1kEIMZbV1q7Bg2eAFzeD73YX5fV7eklSIqcJcxHsCQbyY2zKLppXSX+Zpwm7xU5QY6DTAJleFbWsP/p0fjXUn1agy1tQ6l6t6wvURBZcePEgu+ivNjpUENbDIBotPdzbpISLJIjQbISzHDWnHuWPk/l8h0wXU=@WrAj9YdcNK8cQvfopZa5g1QFc1hk6nPolkwQAkU2ORfXupgV7kaWgKF4W/UmC0XXg4zuaqpVui6ivB0jbLTiXgQ62o+bG9ZSEJLaur4d20TMRNadqnWTWPWhVJF6XiS4jX7sDvVrZO3sKQJMNzZSeTKmsl0w0boCBEkuHsWDA24=@0oLLKxcTJGxSx1uGvhexEA=="
  }
...
}

```

## Arguments

| Name                    | Details                                                                      |
| ----------------------- | ---------------------------------------------------------------------------- |
| --pfx-password required | **Type** String **Description** Password of the `.pfx` archive's to encrypt. |
