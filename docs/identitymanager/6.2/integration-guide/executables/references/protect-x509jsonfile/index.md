---
title: "Usercube-Protect-X509JsonFile"
description: "Usercube-Protect-X509JsonFile"
sidebar_position: 310
---

# Usercube-Protect-X509JsonFile

This tool is used to encrypt a JSON file containing sensitive connection data, for example the
`appsettings-agent.json` file, with
[RSA Encryption](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md). The
encryption is based on the information given in your `appsettings.json` file about either a PFX file
or the location of the encryption certificate in the Microsoft store. See the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/server-configuration/general-purpose/index.md)
topic for additional information.

This tool `Usercube-Protect-X509JsonFile` is used to encrypt a whole file, in comparison to the
[Usercube-Protect-X509JsonValue](/docs/identitymanager/6.2/integration-guide/executables/references/protect-x509jsonvalue/index.md) tool that encrypts only a
given value. This tool is more appropriate than `Usercube-Protect-X509JsonValue` when you have many
lines to encrypt.

## Examples

The command below encrypts the `appsettings.agent.json` file from the `C:/identitymanagerTraining` folder
and creates the `appsettings.encrypted.agent.json` file in the same folder.

```

**./identitymanager-Protect-X509JsonFile.exe --input-json-file-path "C:/identitymanagerTraining/appsettings.agent.json" --output-json-file-path "C:/identitymanagerTraining/appsettings.encrypted.agent.json"**

```

For example it takes this :

```
appsettings.agent.json

{
  "TaskAgentConfiguration": {
    "HttpClientTimeoutSupplement": 0
  },
  "OpenId": {
    "OpenIdClients": {
      "Job": "secret"
    },
    "DefaultOpenIdClient": "Job"
  },

  "PasswordResetSettings": {
    "TwoFactorSettings": {
      "ApplicationUri": "http://localhost:3000"
    },
    "NotificationSettings": {
      "Cultures": ["en"]
    }
  },
  ...
}

```

And it returns this :

```
appsettings.encrypted.agent.json

{
  "TaskAgentConfiguration": {
    "HttpClientTimeoutSupplement": "kxABAEh6CpUOAOMBNPNLKazx9I0vqummv24acN292gonFiK4ov81bjqE2ic+n+HqastXU2aTQcl3IefhEXn9KA2dhnIbDTXB4GhOn9lL9AzUfwKXBr5EBmVy7ggruG2ewpWGK1c3LBJ35km9XvCnzSHLfolZwHNPwM/8b/C6XqSzieoFcO5H92IGJ1lFRboacvp0rO+SkkUv63Ewsk+1MrVLa63oBgWfY6PhMeJvNpWGqCD+I614hB6jE2Li/recwQIPd10XEgFM1OEkZ5ZiO+URxX7MCBe1o20rTaczKR7e7lLQGa/e3Y3i1sFnCm+yRm/lzw0qtDvOtCXlPT13EsHsUunxnR3uH4R6lRBXT30OKobaX7MTQjGkLRChss/GVGCK5w=="
  },
  "OpenId": {
    "OpenIdClients": {
      "Job": "kxABAOkh0BF2GdMedpzmKZZWVWc8IYaiZO2dofmt7lLBP3vMYgLLZYNDyR3x7Ah7tA1r6oSL5gBT3mSFyXB63NJk+QmZqNW1LWdzh+3U+DvNdQw4OfDfFlC5F+nH3/L5iqWc+h1jMlaQBpkqf42Vr8HwFKtqMXLJVXEIyeHSPgHRp1iOjGkNSRNrRQGJ4pVyo0xKmcWsz3qGYf0SnJIzRJ++PcYh/dJgxHAZFsDnV55X3zg72J8teoIEG82GdNjmCV/W4S4edNCYa1gL3KpgDGQq1GEed71Ht1tVYlHlJ4hckE++otQqTgRA2p4nFvo3LmlMag6k4EQRzEk6TOHUlGjUtYgpzMuPqei8/3CRXy5o8YW5R0wVFJJ/jSfYrvR3M9SwJw=="
    },
    "DefaultOpenIdClient": "kxABANLI/Qx7X8L1VtIl+FM4RtYlTLLpUUBCp2pucY+jzjlwhbF9fjJhhTP/KmeCj8M2yB4AA1V3AQgcEBvg92I1vCAWXIBgCjz6LUD2yf4FCpACaxNgiBZVAaCELNCgbKDgy9UB1j4sCozpEzReLVtYdOX+KFbGU6zJ808jnrLFMz+YHT4LXMyF94A5Zl86DFT9br6PwR75qImvjDlIUt+7/I8WrT1Nnqn2hXxqzAd1J2W5Xv8Bt9sXFmskSZN9PyOo9EY9t5lVGq++IqjGPWh4vQAXCzIsfRgUfU7PfHKVuSKSHbME1EZwG/FjzOe8B4bO2q/a/qLtGgygyX5ExEkZ/IcrtSZnTdqC83AfyexlEv9Z3wWFAoKGDtI3zhmCZYnuZQ=="
  },
  "PasswordResetSettings": {
    "TwoFactorSettings": {
      "ApplicationUri": "kxABAFAEx4fWwG/ANPVTf/WGyccDxoR2xCy+x+U3Ny1KkqnOFw+SizePTgINTzBaYHLTHABQD0GWW6U+4qiG6DpcIcdAD0VVnddqB5a+YIE0reufXYhZTrDU/9yeG6aUWIHkLl9UudC/nnW6zMrjChiJhJvT7csFKdgbqUazZT56hR0i6XS36a5h2/tTWhbZTkk1Dil5JP7xUcu5CMWyXMUvGvK8gfQozYxo/DJTOiLrWjg5ION1yx+ZqPhcIUxgYaBjxSpfT6U9YMy5mE9JGqf7W76baS9fOVr3H1DAL02icX29uJAcsw1r9k1rJQIKEhAuqTNeuqF6C6iPHJAsail+iteOJEYgBSACRz7Te4t6Hp7PBs0FfP0WY1oL+1T+p7X+HaO1jAJhE50J2AKhGNXTZfE="
    },
    "NotificationSettings": {
      "Cultures": ["kxABAPwTbpFUbP9xT9HyqtTuMLKT9sVD0Qq1kCsI44d12vJEcW2MMy9K5vKakwTPeJpvY6SafELoHc7AjKnh8ZJi0/Yu4dieE5W+5uXY1uaghYJ/2VjimzIsDhvRhm90xUlaMjdFBjx4HAnxBAtEbEjifdGHxZ0L9F305hXSTORj53u76ctCE5D9HPTN3AgLmyIGv5NExwhD4sgppbf6PWjTEZ7yNcoUpkkS4pJ6BMz+PaQo26A2rMP710zQgG72an4XvxSoR3SwSm0fhLCASgYi8YOZw0j/cfxl/LrW1EQ7gyW0/Mw9v1YRNH3DkbWSeHZ3odhDWdaWkzR6yOEt5hO60eM0w8Tjoed30Jwf+enf1rJFStDe/dhg6vjUIaTn6tt1Gw=="]
    }
  },
  ...
}

```

The previous command can be useful to encrypt, for example, an Active Directory's login used by the
agent during the synchronization process.

The login to encrypt is stored in the following format, compliant with the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).json
structure:

**appsettings.beforeEncryption.json**

```

{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Login": "Administrator"
    }
  }
}
```

This command writes encrypted values from `appsettings.agent.json` to
`C:/identitymanagerTraining/appsettings.encrypted.agent.json` following the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).json
structure:

```
appsettings.encrypted.agent.json
{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Login": "kxABAM9LW6vyx3TpDXoU5mKKQAwxxNcH9Q2z+dk+E7BNzrI346fUUiPmnJlOJZNX8bA1sokpDHTJBJngdF8LqVuWhk0t+IBpHE+iRJZ4q6i/CzX/OnpoGEHLSL5gZUixIqn9kul5AbxI38d/aGkCGIeAGY73rf0eQRizB2uR/ObR/H9jm3dHGt3TUNyOH4WqdwrXL0WTeMyfme6O+2PMoGvmjVF04keicuisjj/jROxTcDKe69qjPuCJZabR69CA2qP1TPMDMy/zlg8bzRZKepw8VxI4OpIKrbwhaUTauJMR6URPsOZ54fdocKi3oEyvpm2AhX4YF8GpOw7fBQrPWte/JJFOxgIzH1Kh0d0YhC2ZpMCXexfOlB2Y9afWG/t7rdi4VDsEf8gwj+IJ3HbE0dtIPLw="
    }
  }
}
```

## Arguments

| Name                             | Details                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------- |
| --input-json-file-path required  | **Type** String **Description** Path of the input to-be-encrypted json file. |
| --output-json-file-path required | **Type** String **Description** Path of the output encrypted json file.      |
